import { Field, Label, TextAreaContainer } from './styled'

export default function TextArea({
  TextAreaWidth,
  TextAreaHeight,
  fieldWidth, 
  fieldHeight,
  onChange,
  value,
  defaultValue,
  placeholder,
  resize,
  label,
  disabled,
  ID
}:any) {

  const handleChange = (val: any) => {

    const { value } = val.target

    onChange(value)

  }

  return (
    <TextAreaContainer width={ TextAreaWidth } height={ TextAreaHeight }>
      <Label htmlFor={ID} >{ label }</Label>
      <Field
        width={ fieldWidth } 
        height={ fieldHeight } 
        onChange={ handleChange }
        value={ value }
        defaultValue={ defaultValue }
        placeholder={ placeholder }
        disabled={disabled}
        id={ ID }
        resize={ resize }
      />
    </TextAreaContainer>
  )
}
