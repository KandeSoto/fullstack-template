// AreaModal.tsx
import { useContext } from "react";
import { AreaModel } from "@src/types";
import { AreaContext } from "@src/context/area/AreaContext";
import { GenericModalForm } from "@src/@core/components/Modals/GenericModalForm";
import { AreaForm } from "@src/views/forms/AreaForm";
import * as yup from "yup";

const schema = yup.object().shape({
  description: yup.string().trim()
  .max(100, 'La descripción no puede tener más de 100 caracteres')
  .required("La descripción es requerida"),
  active: yup.boolean(),
});

const defaultValues: AreaModel = {
  idArea: 0,
  description: '',
  active: true,
};

interface AreaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AreaModal = ({ isOpen, onClose }: AreaModalProps) => {
  const { area, isModalOnEditMode, submitArea } = useContext(AreaContext);

  return (
    <GenericModalForm<AreaModel>
      isOpen={isOpen}
      onClose={onClose}
      objValues={area}
      defaultValues={defaultValues}
      schema={schema}
      isUpdating={isModalOnEditMode}
      title="Área"
      FormComponent={AreaForm}
      onSubmitForm={submitArea}
    />
  );
};
