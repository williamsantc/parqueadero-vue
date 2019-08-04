<template>
  <div
    v-if="totalRows > 0"
    class="d-flex justify-content-end align-items-center flex-column flex-md-row"
  >
    <b-pagination
      :total-rows="totalRows"
      v-model="auxCurrentPage"
      class="mx-1 mb-0 danger"
      :per-page="auxRowsPerPage"
    />
    <div class="mx-2 text-center my-3 my-md-0">
      <b>{{ currentRowsShowing() }}</b>
    </div>
    <div class="mx-1">
      <b-form inline class="d-flex justify-content-center">
        <label for="selectorPages" class="mr-2">Filas Por Página:</label>
        <b-select id="selectorPages" :options="pageOptions" v-model="auxRowsPerPage" />
      </b-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class PaginationComponent extends Vue {
  @Prop({ required: true, type: Number }) readonly value!: number;
  @Prop({ required: true, type: Number }) readonly rowsPerPage!: number;
  @Prop({ required: true, type: Array }) readonly pageOptions!: number[];
  @Prop({ required: true, type: Number }) readonly totalRows!: number;

  auxCurrentPage: number | null = null;
  auxRowsPerPage: number | null = null;

  @Watch('auxRowsPerPage')
  onAuxPerPageChanged (val: number) {
    this.auxCurrentPage = 1
    this.$emit('per-page-chaged', val)
  }

  created () {
    this.auxCurrentPage = this.value
    this.auxRowsPerPage = this.rowsPerPage
  }

  currentRowsShowing () :string {
    let lastRowShowing = this.value * this.rowsPerPage
    const firstRowShowing = lastRowShowing - this.rowsPerPage + 1
    lastRowShowing = lastRowShowing < this.totalRows ? lastRowShowing : this.totalRows
    return `${firstRowShowing} - ${lastRowShowing} de ${this.totalRows}`
  }
}
</script>
