import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Paragraph, Input } from 'tamagui';

interface FormInputProps {
  control: Control;
  name: string;
  placeholder?: string;
  otherProps?: object;
}

const FormInput = ({ control, name, placeholder, otherProps }: FormInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <Input value={value} onChange={() => {onChange(parseInt(value))}} onChangeText={onChange} onBlur={onBlur} placeholder={placeholder} {...otherProps} />
          {error && <Paragraph color="$red10">{error.message}</Paragraph>}
        </>
      )}
    />
  );
};
export default FormInput;
