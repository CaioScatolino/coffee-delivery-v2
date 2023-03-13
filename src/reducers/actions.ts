export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  UPDATE_CART = 'UPDATE_CART',
  // eslint-disable-next-line no-unused-vars
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
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
