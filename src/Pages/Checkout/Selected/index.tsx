import { useContext } from 'react'
import { OrderContext } from '../../../contexts/OrderContext'
import { CoffeeCardSelected } from './Components/CoffeeCardSelected'
import {
  PurchaseButton,
  SelectedContainer,
  SelectedContainerMain,
} from './styles'

export function Selected() {
  const { cart } = useContext(OrderContext)

  // Fazendo a soma total do carrinho
  const totalOrder = cart.reduce(
    (acc, item) => acc + (item ? item.price * item.quantity : 0),
    0,
  )

  const deliveryFee: any = 3.5

  return (
    <SelectedContainer>
      <h3>Cafés selecionados</h3>
      <SelectedContainerMain>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <CoffeeCardSelected id={item.id}></CoffeeCardSelected>
              <hr />
            </div>
          )
        })}
        <table>
          <tbody>
            <tr>
              <td>Total de itens</td>
              <td>R$ {totalOrder.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Entrega</td>
              <td>R$ {deliveryFee.toFixed(2)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th>R$ {(totalOrder + deliveryFee).toFixed(2)}</th>
            </tr>
          </tfoot>
        </table>
        <PurchaseButton type="submit" form="adressForm">
          CONFIRMAR PEDIDO
        </PurchaseButton>
      </SelectedContainerMain>
    </SelectedContainer>
  )
}
