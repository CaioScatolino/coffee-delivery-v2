import styled from 'styled-components'

export const CoffeeCardSelectedCotainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;

  span {
    color: ${(props) => props.theme['base-text']};
    font-weight: 800;
    font-size: 1.125rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 16rem;
  height: 4rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const Details = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
