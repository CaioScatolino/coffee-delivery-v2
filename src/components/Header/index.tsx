import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import LogoCoffeeDelivery from '../../assets/LogoCoffeeDelivery.svg'
import { OrderContext } from '../../contexts/OrderContext'
import { HeaderContainer, LocationInput } from './styles'

export function Header() {
  const { cart } = useContext(OrderContext)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
  return (
    <HeaderContainer>
      <span>
        <a href="/">
          <img src={LogoCoffeeDelivery} alt="" />
        </a>
      </span>
      <nav>
        <LocationInput>
          <MapPin size={24} weight="fill" />
          <input type="text" placeholder="São Paulo, SP" list="states" />
        </LocationInput>

        <datalist id="states">
          <option value="Rio de Janeiro, RJ">Rio de Janeiro, RJ</option>
          <option value="Curitiba, PR">Curitiba, PR</option>
          <option value="Porto Alegre, RS"></option>
          <option value="São Paulo, SP">São Paulo, SP</option>
        </datalist>

        <NavLink to="/checkout" title="Checkout">
          {cart.length !== 0 ? <span>{totalItems}</span> : ''}
          <ShoppingCart size={20} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
