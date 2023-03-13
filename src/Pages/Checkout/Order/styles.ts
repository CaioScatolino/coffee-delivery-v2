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

export const OrderContainerMain = styled.main``

export const BasicHeader = styled.div<VariantColorProps>`
  color: ${(props) => props.theme[VARIANT_COLOR[props.variantColor]]};

  h4 {
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }
`
