import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DepartamentoResponse } from 'src/app/models/departamento-response';
import { PaisResponse } from 'src/app/models/pais-response';
import { DepartamentoService } from 'src/app/services/departamento.service';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-lstdepartamento',
  templateUrl: './lstdepartamento.component.html',
  styleUrls: ['./lstdepartamento.component.scss']
})
export class LstdepartamentoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  misDeps:DepartamentoResponse[]=[];
  idPk:String='0';
  estadoProceso:Number=-1;
  constructor(private servDep:DepartamentoService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.CargarDeps();
  }
  async CargarDeps(){
    const result= await this.servDep.ListRecords();
    this.misDeps=result;
  }
  rerender(): void {
    
    this.servDep.ListRecords().then(result=>{
      this.misDeps=result.data;
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.CargarDeps();
      });
    });
  }
  seleccionReg(id:String){
    this.idPk=id;
    $('#confirmacion').modal('show');
  }
  eliminarRegistro(){
    let jQueryInstance=this;
    this.servDep.DeleteRecord(this.idPk).subscribe(result=>{

          this.estadoProceso=0;

    });
    setTimeout(function(){
      jQueryInstance.estadoProceso=-1;
      $('#confirmacion').modal('hide');
      jQueryInstance.rerender();
    },3000);

  }
}
