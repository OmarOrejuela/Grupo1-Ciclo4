import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { PaisResponse } from 'src/app/models/pais-response';
import { PaisService } from 'src/app/services/pais.service';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-lstpais',
  templateUrl: './lstpais.component.html',
  styleUrls: ['./lstpais.component.scss']
})
export class LstpaisComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  misPaises:PaisResponse[]=[];
  idPk:Number=0;
  estadoProceso:Number=-1;
  constructor(private servPais:PaisService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.CargarPaises();
  }
  async CargarPaises(){
    const result= await this.servPais.ListarPaises();
    this.misPaises=result;
    this.dtTrigger.next(this.misPaises);
  }
  rerender(): void {
    
    this.servPais.ListarPaises().then(result=>{
      this.misPaises=result.data;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.CargarPaises();
      });
    });
  }
  seleccionReg(id:Number){
    this.idPk=id;
    $('#confirmacion').modal('show');
  }
  eliminarRegistro(){
    let jQueryInstance=this;
    this.servPais.DeletePais(this.idPk).subscribe(result=>{

          this.estadoProceso=0;

    });
    setTimeout(function(){
      jQueryInstance.estadoProceso=-1;
      $('#confirmacion').modal('hide');
      jQueryInstance.rerender();
    },3000);

  }
}