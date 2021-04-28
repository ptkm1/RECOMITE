import { Field, InputContainer, Label } from "./styled";

export default function Input({ 
  InputWidth,
  InputHeight,
  fieldWidth, 
  fieldHeight,
  onChange,
  value,
  defaultValue,
  placeholder,
  type,
  label,
  disabled,
  ID
}: any) {

  const handleChange = (val: any) => {

    const { value } = val.target

    onChange(value)

  }

  return (
    <InputContainer width={ InputWidth } height={ InputHeight }>
      <Label htmlFor={ID} >{ label }</Label>
      <Field 
        width={ fieldWidth } 
        height={ fieldHeight } 
        onChange={ handleChange }
        value={ value }
        defaultValue={ defaultValue }
        placeholder={ placeholder }
        disabled={disabled}
        type={ type }
        id={ ID }
      />
    </InputContainer>
  )
}
