import React from 'react'
import { Field, Label } from '../selects/styled'
import { SelectContainer } from './styled'

export default function Select({
  SelectWidth,
  SelectHeight,
  fieldWidth, 
  fieldHeight,
  fieldMargin,
  onChange,
  value,
  defaultValue,
  SelectData,
  label,
  labelMargin,
  ID
}: any) {

  const handleChange = (val: any) => {

    const { value } = val.target

    onChange(value)

  }

  return (
    <SelectContainer width={SelectWidth} height={SelectHeight}>
      <Label margin={labelMargin} htmlFor={ ID } >{ label }</Label>
      <Field 
        width={fieldWidth}
        height={fieldHeight}
        margin={fieldMargin}
        onChange={ handleChange }
        value={ value }
        id={ ID }
        defaultValue={ defaultValue }
      >
        <option value="">Teste</option>
        { SelectData.map((data: any) => (
          <option key={data.id} value={data.value}>{ data.name }</option>
        ) ) }
      </Field>
    </SelectContainer>
  )
}
