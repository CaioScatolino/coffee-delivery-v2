import styled from 'styled-components'

export const SelectedContainer = styled.div`
  width: 28rem;
  height: auto;
  font-size: 1.32rem;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    margin: 1rem 0;
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
`
