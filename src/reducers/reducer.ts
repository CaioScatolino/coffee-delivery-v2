import { coffees } from '../products/products'
import { ActionTypes } from './actions'

export interface Coffee {
  id: string
  name: string
  coffeeImage: string
  description: string
  tags: string[]
  price: number
}

export interface Item extends Coffee {
  quantity: number
}

export interface OrderState {
  id: string
  cart: Item[]
  // adress?: DeliveryInfo
}

export function orderReducer(state: OrderState, action: any): any {
  switch (action.type) {
    case ActionTypes.UPDATE_CART:
      {
        const idProduct = action.payload.idProduct
        const ItemQuantity = () =>
          action.payload.quantity >= 0 ? action.payload.quantity : 0
        const items = state.cart.map((item) => {
          if (item.id === idProduct) {
            return {
              ...item,
              quantity: ItemQuantity(),
            }
          } else {
            return {
              ...item,
            }
          }
        })
        const hasItem = items.find((item) => item.id === idProduct)

        if (hasItem) {
          return { ...state, cart: items }
        } else {
          const itemCoffee = coffees.find((coffee) => coffee.id === idProduct)
          if (itemCoffee) {
            const newItem: Item = { ...itemCoffee, quantity: ItemQuantity() }
            return { ...state, cart: [...items, newItem] }
          }
        }
      }
      break

    case ActionTypes.REMOVE_FROM_CART: {
      const itemsUpdated = state.cart.filter(
        (item) => item.id !== action.payload.idProduct,
      )
      return {
        ...state,
        cart: itemsUpdated,
      }
    }

    default:
      return state
  }
}
