export default interface Vehicle {
  vehicleType: vehicleTyes | null
  engineDisplacement?: string | null
  brand: string | null
  model: string | null
  year: number | null
}

export enum vehicleTyes {
  CAR = 'carro',
  MOTORCYCLE = 'moto'
}
