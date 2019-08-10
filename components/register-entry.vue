<template>
  <b-container class="mt-4">
    <div class="d-flex justify-content-between align-items-center">
      <h4>Registrar Ingreso</h4>
      <b-btn variant="primary" @click="$bvModal.show('registerModal')">Añadir</b-btn>
    </div>
    <b-modal title="Registrar ingreso" id="registerModal">
      <b-form-group label="Placa">
        <b-input v-model="vehicle.licencePlate" />
      </b-form-group>
      <b-form-group label="Marca">
        <b-input v-model="vehicle.brand" />
      </b-form-group>
      <b-form-group label="Modelo">
        <b-input v-model="vehicle.model" />
      </b-form-group>
      <b-form-group label="Año">
        <b-input v-model="vehicle.year" />
      </b-form-group>
      <b-form-group label="Tipo de vehiculo">
        <b-select :options="vehicleTypesAvailables" v-model="vehicle.vehicleType" />
      </b-form-group>
      <template slot="modal-footer">
        <b-btn class="float-right" @click="addVehicleMethod">Registrar</b-btn>
      </template>
    </b-modal>
    <p class="text-muted font-weight-bold mt-3 mb-1">Vehiculos en el parqueadero</p>
    <b-table :items="vehiclesInParking" :fields="tableFields" />
  </b-container>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import moment from 'moment'
import Ticket from '../models/ticket.model'
import TableMixin from '../mixins/table.mixin'
import { ACTIONS, addVehicleAction } from '../models/store.model'
import Vehicle, { vehicleTyes } from '../models/vehicle.model'

@Component
export default class RegisterEntryComponent extends Mixins(TableMixin) {
  @State readonly vehiclesInParking!: Ticket[];
  @Action(ACTIONS.addVehicle) readonly addVehicleAction!: addVehicleAction;
  vehicleTypesAvailables: vehicleTyes[] = Object.values(vehicleTyes);
  vehicle: Vehicle = {
    licencePlate: null,
    vehicleType: null,
    brand: null,
    model: null,
    year: null
  };
  tableFields = [
    { label: 'Placa', key: 'vehicle.licencePlate' },
    { label: 'Marca', key: 'vehicle.brand' },
    { label: 'Modelo', key: 'vehicle.model' },
    { label: 'Año', key: 'vehicle.year' },
    {
      label: 'Tipo',
      key: 'vehicle.vehicleType'
    },
    {
      label: 'Ingreso',
      key: 'entryTime',
      formatter: value => moment(value).locale('ES').format('LLL')
    }
  ];

  addVehicleMethod () {
    this.addVehicleAction(this.vehicle)
    this.$bvModal.hide('registerModal')
  }
}
</script>
