import { Component, OnInit, ViewChild } from '@angular/core'
import { DataTableDirective } from 'angular-datatables'
import { Subject } from 'rxjs'
import { ComidaResponse } from 'src/app/models/comida-response'
import { ComidaService } from '../../../services/comida.service'

declare var $: any
declare var jQuery: any

@Component({
  selector: 'app-lstcomida',
  templateUrl: './lstcomida.component.html',
  styleUrls: ['./lstcomida.component.scss'],
})
export class LstcomidaComponent implements OnInit {
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject<any>()
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective
  misComi: ComidaResponse[] = []
  idPk: Number = 0
  estadoProceso: Number = -1

  constructor(private servComida: ComidaService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    }
    this.LoadRecord()
  }
  async LoadRecord() {
    const result = await this.servComida.LisrRecord()
    this.misComi = result
    this.dtTrigger.next(this.misComi)
  }
  rerender(): void {
    this.servComida.LisrRecord().then((result) => {
      this.misComi = result.data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy()
        // Call the dtTrigger to rerender again
        this.LoadRecord()
      })
    })
  }
  seleccionReg(id: Number) {
    this.idPk = id
    $('#confirmacion').modal('show')
  }
  eliminarRegistro() {
    let jQueryInstance = this
    this.servComida.DeleteRecord(this.idPk).subscribe((result) => {
      this.estadoProceso = 0
    })
    setTimeout(function () {
      jQueryInstance.estadoProceso = -1
      $('#confirmacion').modal('hide')
      jQueryInstance.rerender()
    }, 3000)
  }
}
