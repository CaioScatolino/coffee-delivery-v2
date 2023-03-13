import { NewAdressFormData } from '../Pages/Checkout/Order/FormAdress'

export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  UPDATE_CART = 'UPDATE_CART',
  // eslint-disable-next-line no-unused-vars
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',

  // eslint-disable-next-line no-unused-vars
  CREATE_NEW_ADRESS = 'CREATE_NEW_ADRESS',
}

export function updateCartAction(idProduct: string, quantity: number) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: {
      idProduct,
      quantity,
    },
  }
}
export function removeFromCartAction(idProduct: string) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      idProduct,
    },
  }
}

export function createNewAdressAction(dataForm: NewAdressFormData) {
  return {
    type: ActionTypes.CREATE_NEW_ADRESS,
    payload: {
      dataForm,
    },
  }
}
