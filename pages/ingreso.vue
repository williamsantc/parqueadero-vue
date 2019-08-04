<template>
  <div>
    <register-entry />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    RegisterEntry: () => import('~/components/register-entry.vue')
  }
})
export default class IngresoComponent extends Vue {

}
</script>
