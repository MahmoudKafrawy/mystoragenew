import React from "react";
import { Controller } from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export type FormInputTextProps = TextFieldProps & {
  name: string;
  control: any;
  label: string;
  setValue?: any;
  id: string;
};
export const FormInputText: React.FC<FormInputTextProps> = ({ control, id, ...props }) => {
  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <TextField
          {...props}
          // type={props.name === "password" ? "password" : "text"}
          sx={{ mt: 1, mb: 1 }}
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          id={id}
          variant="outlined"
        />
      )}
    />
  );
};
