import { useContext } from 'react'
import { Action } from '../../../../../components/Action'
import { OrderContext } from '../../../../../contexts/OrderContext'
import { CoffeeCardSelectedCotainer, Details, InfoContainer } from './styles'

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
        <Details>
          <p>{coffee?.name}</p>
          <Action id={id} actionType={'remove'}></Action>
        </Details>
      </InfoContainer>
      <span>R$ {coffee ? coffee?.price.toFixed(2) : 0}</span>
    </CoffeeCardSelectedCotainer>
  )
}
