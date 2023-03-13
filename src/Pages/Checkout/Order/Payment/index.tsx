import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { BasicHeader } from '../styles'
import {
  PaymentButton,
  PaymentButtonsContainer,
  PaymentContainer,
} from './style'

export function Payment() {
  const [buttonChecked, setButtonChecked] = useState('')
  const { register } = useFormContext()

  function handleChange(payment: string) {
    setButtonChecked(payment)
  }

  return (
    <PaymentContainer>
      <BasicHeader variantColor="purple">
        <CurrencyDollar />
        <div>
          <h4>Pagamento</h4>
          <p>O pagamento é feito na entrega</p>
        </div>
      </BasicHeader>
      <PaymentButtonsContainer>
        <PaymentButton
          htmlFor="creditCard"
          checked={buttonChecked === 'creditCard'}
        >
          <CreditCard size={22} />
          <p>Cartão de Crédito</p>
          <input
            type="radio"
            id="creditCard"
            value="creditCard"
            {...register('payment')}
            name="payment"
            onChange={() => handleChange('creditCard')}
          />
        </PaymentButton>
        <PaymentButton
          htmlFor="debitCard"
          checked={buttonChecked === 'debitCard'}
        >
          <Bank size={22} />
          <p>Cartão de Débito</p>
          <input
            type="radio"
            id="debitCard"
            value="debitCard"
            {...register('payment')}
            name="payment"
            onChange={() => handleChange('debitCard')}
          />
        </PaymentButton>
        <PaymentButton htmlFor="money" checked={buttonChecked === 'money'}>
          <Money size={22} />
          <p>Dinheiro</p>
          <input
            type="radio"
            id="money"
            value="money"
            {...register('payment')}
            name="payment"
            onChange={() => handleChange('money')}
          />
        </PaymentButton>
      </PaymentButtonsContainer>
    </PaymentContainer>
  )
}
