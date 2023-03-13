import { CurrencyDollar } from 'phosphor-react'
import { BasicHeader } from '../styles'
import { PaymentContainer } from './style'

export function Payment() {
  return (
    <PaymentContainer>
      <BasicHeader variantColor="purple">
        <CurrencyDollar />
      </BasicHeader>
    </PaymentContainer>
  )
}
