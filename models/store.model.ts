import Vehicle from '~/models/vehicle.model'

export enum MUTATIONS {
    ADD_VEHICLE = 'ADD_VEHICLE',
    REMOVE_VEHICLE = 'REMOVE_VEHICLE'
}

export enum ACTIONS {
    addVehicle = 'addVehicle',
    removeHehicle = 'removeVehicle'
}

export enum GETTERS {
    daySummary = 'daySummary',
    availableSlots = 'availableSlots'
}

export type addVehicleAction = (payload: Vehicle) => void
