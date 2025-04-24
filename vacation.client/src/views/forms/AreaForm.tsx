import { FormFeedback, FormGroup, Input, Label } from "reactstrap"
import { Control, Controller, FieldErrors } from "react-hook-form"
import { AreaModel } from "@src/types";

interface AreaFormProps {
  control: Control<AreaModel>;
  errors: FieldErrors<AreaModel>;
}

export const AreaForm = ({control, errors}: AreaFormProps) => {
  return (
    <>
      <FormGroup>
        <Label for="description">Descripción</Label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="description"
              type="text"
              placeholder="Descripción"
              invalid={!!errors.description}
            />
          )}
        />
        <FormFeedback>{errors.description?.message}</FormFeedback>
      </FormGroup>
      <FormGroup switch>
        <Controller
          name="active"
          control={control}
          render={({ field }) => (
            <Input
              type="switch"
              id="active"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              onBlur={field.onBlur}
              innerRef={field.ref}
            />
          )}
        />
        <Label check htmlFor="active">Activo</Label>
      </FormGroup>
    </>
  )
}
