// GenericModalForm.tsx
import { ReactNode, useCallback, useEffect } from "react";
import { useForm, FieldValues, Control, FormState, DefaultValues } from "react-hook-form";
import { Button, Form, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObjectSchema } from "yup";
import { toast } from "react-toastify";

interface GenericModalFormProps<T extends FieldValues> {
  isOpen: boolean;
  onClose: () => void;
  objValues?: T | null;
  defaultValues: DefaultValues<T>;
  schema: AnyObjectSchema;
  isUpdating?: boolean;
  onSubmitForm: (data: T, isUpdating: boolean) => Promise<T>;
  FormComponent: (props: { control: Control<T>; errors: FormState<T>['errors'] }) => ReactNode;
  title?: string;
}

export const GenericModalForm = <T extends FieldValues>({
  isOpen,
  onClose,
  objValues,
  defaultValues,
  schema,
  isUpdating = false,
  onSubmitForm,
  FormComponent,
  title = "Formulario",
}: GenericModalFormProps<T>) => {

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<T>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if(isOpen){
      if(isUpdating && objValues) {        
        reset(objValues);
      }
      else {
        reset(defaultValues);
      }
    }    
  }, [isOpen, isUpdating, objValues, defaultValues, reset]);

  const handleClose = useCallback(() => {
    onClose();
    reset(defaultValues);
  }, [onClose, reset, defaultValues]);

  const onSubmit = useCallback(async (data: T) => {
    try {
      const newObj = await onSubmitForm(data, isUpdating);

      if (newObj) {        
        if (isUpdating) {          
          toast.success("Editado correctamente");
        } else {          
          toast.success("Guardado correctamente");
        }
        handleClose();
      } 
      
    } catch (err: unknown) {
      if (err instanceof Error) {        
        toast.error(err.message);
        setError("root", { message: err.message || "Error al guardar" });
      } else {        
        toast.error(typeof err === "string" ? err : "An unexpected error occurred");
        setError("root", { message: "Error al guardar" });
      }
    }
  }, [onSubmitForm, isUpdating, setError, handleClose]);

  return (
    <Modal isOpen={isOpen} toggle={handleClose}>
      <ModalHeader toggle={handleClose}>{isUpdating ? `Editar ${title}` : `Agregar ${title}`}</ModalHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <FormComponent control={control} errors={errors} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button color="primary" type="submit">
            Guardar
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};
