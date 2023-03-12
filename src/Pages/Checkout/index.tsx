import { Order } from './Order'
import { Selected } from './Selected'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Order />
      <Selected />
    </CheckoutContainer>
  )
}
