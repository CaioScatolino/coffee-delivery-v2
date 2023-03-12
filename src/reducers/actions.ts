export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  UPDATE_CART = 'UPDATE_CART',
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
