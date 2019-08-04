import Vehicle from './vehicle.model'

export default interface Payment {
  vehicle: Vehicle
  departureTime: Date
  paymentAmount: number
}
