import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
`
export const FormAdressContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-template-rows: 2.625rem 2.625rem 2.625rem 2.625rem;
  grid-template-areas:
    'inputPostcode . .'
    'inputStreet inputStreet inputStreet'
    'inputNumber inputComplement inputComplement'
    'inputNeighborhood inputCity inputState';
  grid-gap: 1rem;
  justify-content: center;
  background-color: ${(props) => props.theme['base-card']};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  span {
    position: relative;
    top: 8rem;
    left: 18rem;
    font-size: 0.875rem;
    font-style: italic;
  }
`

const Input = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 8px;
  padding: 0.75rem;
`

export const InputPostcode = styled(Input)`
  grid-area: inputPostcode;
`
export const InputStreet = styled(Input)`
  grid-area: inputStreet;
`
export const InputNumber = styled(Input)`
  grid-area: inputNumber;
`
export const InputComplement = styled(Input)`
  grid-area: inputComplement;
`
export const InputNeighborhood = styled(Input)`
  grid-area: inputNeighborhood;
`
export const InputCity = styled(Input)`
  grid-area: inputCity;
`
export const InputState = styled(Input)`
  grid-area: inputState;
`
