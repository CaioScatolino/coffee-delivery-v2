import styled from 'styled-components'
import { VariantColorProps, VARIANT_COLOR } from '../../../styles/variants'

export const OrderContainer = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.32rem;

  h3 {
    margin: 1rem 0;
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
  }
`

export const OrderContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem 0 0;
  border-radius: 8px;
`

export const BasicHeader = styled.div<VariantColorProps>`
  width: 35rem;
  height: 2.75rem;

  margin-bottom: 2.5rem;
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme[VARIANT_COLOR[props.variantColor]]};
  font-size: 1.32rem;
  color: ${(props) => props.theme[VARIANT_COLOR[props.variantColor]]};

  h4 {
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }
`
