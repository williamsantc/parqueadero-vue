<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="border-bottom shadow-sm">
      <b-navbar-brand href="#" @click="navigate('/')">Parqueadero</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" @click="navigate('/ingreso')">Ingreso</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto align-items-center">
          <b-nav-text class="mr-md-2">{{ vehiclesInParking.length }} Vehiculos</b-nav-text>
          <b-link variant="primary" target="_blank" href="https://twitter.com/williamsantc">Follow me!</b-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="mx-3">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import Ticket from '../models/ticket.model'

@Component
export default class DefaultLayout extends Vue {
  @State readonly vehiclesInParking!: Ticket[]
  navigate (route: string) {
    this.$router.push(route)
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
