import { useContext, useState } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { CoffeeCard } from './Components/CoffeeCard'
import {
  CoffeeFilterButton,
  CoffeeFilter,
  CoffeeListContainer,
  CoffeeListHeader,
  CoffeeListItems,
} from './styles'

const coffeesTypes = [
  'tradicional',
  'especial',
  'com leite',
  'alcoolico',
  'gelado',
]

export function CoffeeList() {
  const [coffeeFilter, setCoffeeFilter] = useState<string[]>(coffeesTypes)
  const { coffees } = useContext(OrderContext)
  const [activedButton, setActiveButton] = useState<string>('')

  function toggleCoffeType(coffeeType: string) {
    const isSelected = coffeeFilter.length === 1

    if (isSelected) {
      setCoffeeFilter(coffeesTypes)
      setActiveButton('')
    } else {
      setCoffeeFilter([coffeeType])
      setActiveButton(coffeeType)
    }
  }

  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <h2>Nossos cafés</h2>
        <CoffeeFilter>
          <CoffeeFilterButton
            onClick={() => toggleCoffeType('tradicional')}
            isActive={coffeesTypes[0] === activedButton}
          >
            tradicional
          </CoffeeFilterButton>
          <CoffeeFilterButton
            onClick={() => toggleCoffeType('especial')}
            isActive={coffeesTypes[1] === activedButton}
          >
            especial
          </CoffeeFilterButton>
          <CoffeeFilterButton
            onClick={() => toggleCoffeType('com leite')}
            isActive={coffeesTypes[2] === activedButton}
          >
            com leite
          </CoffeeFilterButton>
          <CoffeeFilterButton
            onClick={() => toggleCoffeType('alcoolico')}
            isActive={coffeesTypes[3] === activedButton}
          >
            alcoolico
          </CoffeeFilterButton>
          <CoffeeFilterButton
            onClick={() => toggleCoffeType('gelado')}
            isActive={coffeesTypes[4] === activedButton}
          >
            gelado
          </CoffeeFilterButton>
        </CoffeeFilter>
      </CoffeeListHeader>

      <CoffeeListItems>
        {coffees.map((coffee) => {
          const hasTypes = coffee.tags.filter((tag) =>
            coffeeFilter.includes(tag),
          )
          const isAble = hasTypes.length !== 0
          return (
            isAble && (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                name={coffee.name}
                coffeeImage={coffee.coffeeImage}
                description={coffee.description}
                tags={coffee.tags}
                price={coffee.price}
              />
            )
          )
        })}
      </CoffeeListItems>
    </CoffeeListContainer>
  )
}
