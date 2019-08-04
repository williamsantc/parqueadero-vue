import Ticket from '~/models/ticket.model'
import Payment from '~/models/payment.model'

export default interface State {
  vehiclesInParking: Ticket[]
  vehiclesdispatched: Payment[]
  maximumSlots: number
}
