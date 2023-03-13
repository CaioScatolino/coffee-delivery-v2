import styled from 'styled-components'

interface PaymentButtonProps {
  checked: boolean
}

export const PaymentContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-color: ${(props) => props.theme['base-card']};
`

export const PaymentButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem 0;
`

export const PaymentButton = styled.label<PaymentButtonProps>`
  display: flex;
  flex-direction: row;
  gap: 4px;
  font-size: 0.75rem;
  align-items: center;
  text-transform: uppercase;
  justify-content: center;
  background-color: ${(props) =>
    props.checked ? props.theme['purple-light'] : props.theme['base-button']};
  padding: 1rem;
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;
  border: 1px solid transparent;
  box-shadow: 0 0 0 1px
    ${(props) => (props.checked ? props.theme.purple : 'none')};

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.purple};
  }

  &:active {
    background-color: ${(props) => props.theme['purple-light']};
  }

  input {
    opacity: 0;
  }
`
