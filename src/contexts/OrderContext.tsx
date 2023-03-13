import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { coffees } from '../products/products'
import { updateCartAction, removeFromCartAction } from '../reducers/actions'
import { Coffee, Item, orderReducer } from '../reducers/reducer'

export interface OrderContextType {
  coffees: Coffee[]
  cart: Item[]

  updateCart: (idProduct: string, quantity: number) => void
  removeFromCart: (id: string) => void
}

export interface OrderContextProviderProps {
  children: ReactNode
}
export const initialState = {
  id: new Date().toString(),
  cart: [] as Item[],
  // adress: {} as DeliveryInfo,
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  // const [load, setLoad] = useState(false)

  const [orderState, dispatch] = useReducer(orderReducer, initialState, () => {
    const storedStateAsJSON = localStorage.getItem(
      '@ignite-coffee-delivery:orderState-1.0.0',
    )
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
    return initialState
  })

  const { cart /* adress */ } = orderState

  function updateCart(idProduct: string, quantity: number) {
    dispatch(updateCartAction(idProduct, quantity))
  }

  function removeFromCart(idProduct: string) {
    dispatch(removeFromCartAction(idProduct))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(orderState)

    localStorage.setItem('@ignite-coffee-delivery:orderState-1.0.0', stateJSON)
  }, [orderState])

  return (
    <OrderContext.Provider
      value={{
        coffees,
        cart,
        updateCart,
        removeFromCart,
        // adress,

        // updateCart,
        // removeFromCart,
        // createNewAdress,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
