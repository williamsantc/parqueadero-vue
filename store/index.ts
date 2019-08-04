import { ActionTree, MutationTree } from 'vuex'
import State from '~/models/state.model'
import Vehicle from '~/models/vehicle.model'
import { MUTATIONS, ACTIONS } from '~/models/store.model'
import Ticket from '~/models/ticket.model'

export const state = (): State => ({
  vehiclesInParking: [],
  vehiclesdispatched: [],
  maximumSlots: 30
})

export const mutations: MutationTree<State> = {
  [MUTATIONS.ADD_VEHICLE]: (state, payload: Vehicle) => {
    const ticket: Ticket = {
      vehicle: payload,
      entyTime: new Date()
    }
    state.vehiclesInParking.push(ticket)
  },
  [MUTATIONS.REMOVE_VEHICLE]: (state) => {
    console.log(state.vehiclesInParking)
  }
}

export const actions: ActionTree<State, State> = {
  [ACTIONS.addVehicle]: (context, payload: Vehicle) => {
    context.commit(MUTATIONS.ADD_VEHICLE, payload)
  }
}
