import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 8vh;

  h4 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SuccessDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2.5rem;
`

export const SuccessInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.5rem;
  width: 40vw;
  border: 1px solid black;
  justify-content: space-around;

  border-radius: 0.5rem 2rem;
`
export const SuccessImg = styled.div`
  img {
    width: 40vw;
  }
`

export const SuccessIcon = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  color: ${(props) => props.theme.white};
`

export const SuccessLocation = styled(SuccessIcon)`
  background-color: ${(props) => props.theme.purple};
`
export const SuccessTime = styled(SuccessIcon)`
  background-color: ${(props) => props.theme.yellow};
`
export const SuccessPayment = styled(SuccessIcon)`
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const SuccessText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`

export const SuccessData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  span b {
    color: ${(props) => props.theme['base-text']};
    font-weight: 800;
  }

  span {
    color: ${(props) => props.theme['base-text']};
  }
`
