import styled from 'styled-components'

export const FormContainer = styled.form``
export const FormAdressContainer = styled.div``

const Input = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 8px;
  padding: 0.75rem;
`

export const InputPostCode = styled(Input)`
  grid-area: inputPostCode;
`
