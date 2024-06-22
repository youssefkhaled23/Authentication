// React-Hook-Forms
import { Path, FieldValues, UseFormRegister } from "react-hook-form";

// BootStrap
import { Form, FormControl } from "react-bootstrap";

// Types os params
type TInput<TFieldValue extends FieldValues> = {
  name: Path<TFieldValue>;
  label: string;
  type?: string;
  register: UseFormRegister<TFieldValue>;
  error: string | undefined;
  placeHolder?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  formText?: string;
  success?: string;
  disabled?: boolean;
};

const Input = <TFieldValue extends FieldValues>({
  type,
  label,
  register,
  name,
  error,
  placeHolder,
  onBlur,
  formText,
  success,
  disabled,
}: TInput<TFieldValue>) => {
  const BlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label column sm="5" className="text-white">
          {label}
        </Form.Label>
        <Form.Control
          type={type}
          placeholder={placeHolder}
          {...register(name)}
          onBlur={BlurHandler}
          isInvalid={error ? true : false}
          isValid={success ? true : false}
          disabled={disabled}
        />
        <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
        <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
        {formText && <Form.Text>{formText}</Form.Text>}
      </Form.Group>
    </>
  );
};

export default Input;
