<template>
  <b-container class="mt-4">
    <div class="d-flex justify-content-between align-items-center">
      <h4>Registrar Ingreso</h4>
      <b-btn variant="primary">Añadir</b-btn>
    </div>
  </b-container>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import Ticket from '../models/ticket.model'
import TableMixin from '../mixins/table.mixin'
import { ACTIONS, addVehicleAction } from '../models/store.model'
import Vehicle from '../models/vehicle.model'

@Component
export default class RegisterEntryComponent extends Mixins(TableMixin) {
  @State readonly vehiclesInParking!: Ticket[];
  @Action(ACTIONS.addVehicle) readonly addVehicleAction!: addVehicleAction;
  vehicle: Vehicle = {
    vehicleType: null,
    engineDisplacement: null,
    brand: null,
    model: null,
    year: null
  };

  addVehicleMethod () {
    // this.addVehicleAction()
  }
}
</script>
