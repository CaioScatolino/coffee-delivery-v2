import { useContext } from 'react'
import { OrderContext } from '../../../contexts/OrderContext'
import { CoffeeCardSelected } from './Components/CoffeeCardSelected'
import { SelectedContainer, SelectedContainerMain } from './styles'

export function Selected() {
  const { cart } = useContext(OrderContext)
  return (
    <SelectedContainer>
      <h3>Cafés selecionados</h3>
      <SelectedContainerMain>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <CoffeeCardSelected id={item.id}></CoffeeCardSelected>
              <span>
                {item.name} - {item.quantity}{' '}
              </span>
              <hr />
            </div>
          )
        })}
      </SelectedContainerMain>
    </SelectedContainer>
  )
}
