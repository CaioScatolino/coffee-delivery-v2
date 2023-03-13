import { Payment } from '../Payment'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FormAdressContainer,
  FormContainer,
  InputCity,
  InputComplement,
  InputNeighborhood,
  InputNumber,
  InputPostcode,
  InputState,
  InputStreet,
} from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { useForm, FormProvider } from 'react-hook-form'

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
  const { createNewAdress } = useContext(OrderContext)

  const NewAdressForm = useForm<NewAdressFormData>({
    resolver: zodResolver(newAdressFormsValidationSchema),
  })

  const { reset, register, handleSubmit } = NewAdressForm
  function handleCreateNewAdress(data: NewAdressFormData) {
    console.log(data)
    createNewAdress(data)
    reset()
  }

  return (
    <FormContainer
      id="adressForm"
      onSubmit={handleSubmit(handleCreateNewAdress)}
    >
      <FormAdressContainer>
        <InputPostcode
          placeholder="00000-000"
          id="postCode"
          required
          {...register('postcode')}
        />
        <InputStreet
          placeholder="Rua"
          id="street"
          required
          {...register('street')}
        />
        <InputNumber
          placeholder="Número"
          id="number"
          required
          {...register('number')}
        />
        <InputComplement
          placeholder="Complemento"
          id="complement"
          {...register('complement')}
        />
        <span>Opcional</span>
        <InputNeighborhood
          placeholder="Bairro"
          id="neighborhood"
          required
          {...register('neighborhood')}
        />
        <InputCity
          placeholder="Cidade"
          id="city"
          required
          {...register('city')}
        />
        <InputState
          placeholder="UF"
          id="state"
          required
          {...register('state')}
        />
      </FormAdressContainer>
      <FormProvider {...NewAdressForm}>
        <Payment />
      </FormProvider>
    </FormContainer>
  )
}
