import { Payment } from '../Payment'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormAdressContainer, FormContainer, InputPostCode } from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { useForm } from 'react-hook-form'

const newAdressFormsValidationSchema = zod.object({
  postcode: zod.string().min(1, 'Inform PostCode'),
  street: zod.string().min(1, 'Inform the Street'),
  number: zod.number().min(1, 'Inform the street number'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Inform the neighborhood'),
  city: zod.string().min(1, 'Inform the city'),
  state: zod.string().min(1, 'Inform the state').max(2),
  payment: zod.string(),
})

export type NewAdressFormData = zod.infer<typeof newAdressFormsValidationSchema>

export function FormAdress() {
  const { } = useContext(OrderContext)

  const NewAdressForm = useForm<NewAdressFormData>({
    resolver: zodResolver(newAdressFormsValidationSchema),
  })

  const { reset, register, handleSubmit } = NewAdressForm

  return (
    <FormContainer id="adressForm">
      <FormAdressContainer>
        <InputPostCode
          placeholder="00000-000"
          id="postCode"
          required
          {...register('postCode')}
        />
      </FormAdressContainer>
      <Payment />
    </FormContainer>
  )
}
