import { useContext } from 'react'
import { OrderContext } from '../../../../../contexts/OrderContext'
import { CoffeeCardSelectedCotainer, InfoContainer } from './styles'

interface CoffeeCardSelectedProps {
  id: string
}

export function CoffeeCardSelected({ id }: CoffeeCardSelectedProps) {
  const { coffees } = useContext(OrderContext)

  const coffee = coffees.find((coffee) => coffee.id === id)

  return (
    <CoffeeCardSelectedCotainer>
      <InfoContainer>
        <img src={coffee?.coffeeImage} alt="" />
        <p>{coffee?.name}</p>
        <span>R$ {coffee ? coffee?.price.toFixed(2) : 0}</span>
      </InfoContainer>
    </CoffeeCardSelectedCotainer>
  )
}
