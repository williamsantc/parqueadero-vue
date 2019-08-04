import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TableMixin extends Vue {
    currentPage: number = 1
    perPage: number = 5
    listPerPage: number[] = [5, 10, 15]

    currentRowsShowing (totalRows: number): string {
      let lastRowShowing = this.currentPage * this.perPage
      const firstRowShowing = lastRowShowing - this.perPage + 1
      lastRowShowing = lastRowShowing < totalRows ? lastRowShowing : totalRows
      return `${firstRowShowing} - ${lastRowShowing} de ${totalRows}`
    }
}
