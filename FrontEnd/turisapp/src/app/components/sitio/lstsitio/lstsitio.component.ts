import { Component, OnInit, ViewChild } from '@angular/core'
import { DataTableDirective } from 'angular-datatables'
import { Subject } from 'rxjs'
import { SitioResponse } from 'src/app/models/sitio-response'
import { SitioService } from 'src/app/services/sitio.service'

declare var $: any
declare var jQuery: any

@Component({
  selector: 'app-lstsitio',
  templateUrl: './lstsitio.component.html',
  styleUrls: ['./lstsitio.component.scss'],
})
export class LstsitioComponent implements OnInit {
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject<any>()
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective
  misSitios: SitioResponse[] = []
  idPk: String = '0'
  estadoProceso: Number = -1

  constructor(private sitServ: SitioService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    }
    this.LoadRecord()
  }
  async LoadRecord() {
    const result = await this.sitServ.LisrRecord()
    this.misSitios = result
    this.dtTrigger.next(this.misSitios)
  }
  rerender(): void {
    this.sitServ.LisrRecord().then((result) => {
      this.sitServ = result.data
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy()
        // Call the dtTrigger to rerender again
        this.LoadRecord()
      })
    })
  }
  seleccionSit(id: String) {
    this.idPk = id
    $('#confirmacion').modal('show')
  }
  eliminarRegistro() {
    let jQueryInstance = this
    this.sitServ.DeleteRecord(this.idPk).subscribe((result) => {
      this.estadoProceso = 0
    })
    setTimeout(function () {
      jQueryInstance.estadoProceso = -1
      $('#confirmacion').modal('hide')
      jQueryInstance.rerender()
    }, 3000)
  }
}
