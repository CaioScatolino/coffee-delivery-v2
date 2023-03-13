import styled from 'styled-components'

export const SelectedContainer = styled.div`
  width: 28rem;
  height: auto;
  font-size: 1.32rem;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    margin: 1rem 0;
    font-family: 'Baloo 2';
  }
`

export const SelectedContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;

  hr {
    width: 100%;
    margin: 2rem 0;
    border: 1px solid ${(props) => props.theme['base-button']};
  }

  table {
    width: 100%;
    border-spacing: 1rem;

    tbody {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-text']};
    }

    tfoot {
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    td,
    th {
      &:first-child {
        text-align: left;
      }

      &:last-child {
        text-align: right;
      }
    }
  }
`
export const PurchaseButton = styled.button`
  margin: 1rem 0;
  width: 100%;
  padding: 0.75rem 0.5rem;
  border: 0;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.875rem;
  height: 3rem;
  border-radius: 8px;
`
