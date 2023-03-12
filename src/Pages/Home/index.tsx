import { CoffeeList } from './Components/CoffeeList'
import { Intro } from './Components/Intro'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}
