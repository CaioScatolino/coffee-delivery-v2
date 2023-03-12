import { createContext, ReactNode } from 'react'
import { coffees } from '../products/products'
import { Coffee } from '../reducers/reducer'

export interface OrderContextType {
  coffees: Coffee[]
}

export interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  return (
    <OrderContext.Provider
      value={{
        coffees,
        // cart,
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
