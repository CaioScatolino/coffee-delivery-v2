import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import {
  SuccessContainer,
  SuccessData,
  SuccessDetail,
  SuccessImg,
  SuccessInfo,
  SuccessLocation,
  SuccessPayment,
  SuccessText,
  SuccessTime,
} from './styles'

import successlogo from '../../assets/SuccessIllustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  const { adress } = useContext(OrderContext)

  return (
    <SuccessContainer>
      <h4>Uhu! Pedido confirmado!</h4>
      <p>Agora é só aguardar que logo o café chegará até você!</p>
      <SuccessDetail>
        <SuccessInfo>
          <SuccessText>
            <SuccessLocation>
              <MapPin size={16} weight="fill" />
            </SuccessLocation>
            <SuccessData>
              <p>
                Entrega em{' '}
                <b>
                  {adress?.street}, {adress?.number}
                </b>
              </p>
              <span>
                {adress?.neighborhood} - {adress?.city}, {adress?.state}
              </span>
            </SuccessData>
          </SuccessText>
          <SuccessText>
            <SuccessTime>
              <Timer size={16} weight="fill" />
            </SuccessTime>
            <SuccessData>
              <p>Previsão de entrega</p>
              <span>
                <b>20 min - 30 min</b>
              </span>
            </SuccessData>
          </SuccessText>
          <SuccessText>
            <SuccessPayment>
              <CurrencyDollar size={16} weight="fill" />
            </SuccessPayment>
            <SuccessData>
              <p>Pagamento na entrega</p>
              <span>
                <b>{adress?.payment === 'creditCard' && 'Cartão de Crédito'}</b>
                <b>{adress?.payment === 'debitCard' && 'Cartão de Débito'}</b>
                <b>{adress?.payment === 'money' && 'Dinheiro'}</b>
              </span>
            </SuccessData>
          </SuccessText>
        </SuccessInfo>

        <SuccessImg>
          <img src={successlogo} alt="" />
        </SuccessImg>
      </SuccessDetail>
    </SuccessContainer>
  )
}
