import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { RegionResponse } from 'src/app/models/region-response';
import { RegionService } from '../../../services/region.service';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-lstregion',
  templateUrl: './lstregion.component.html',
  styleUrls: ['./lstregion.component.scss']
})
export class LstregionComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  misReg:RegionResponse[]=[];
  idPk:Number=0;
  estadoProceso:Number=-1;
  
  constructor(private servRegion:RegionService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
  };
  this.LoadRecord();
}
async LoadRecord(){
  const result= await this.servRegion.LisrRecord();
  this.misReg=result;
  this.dtTrigger.next(this.misReg);
}
rerender(): void {
    
  this.servRegion.LisrRecord().then(result=>{
    this.misReg=result.data;
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.LoadRecord();
    });
  });
}
seleccionReg(id:Number){
  this.idPk=id;
  $('#confirmacion').modal('show');
}
eliminarRegistro(){
  let jQueryInstance=this;
  this.servRegion.DeleteRecord(this.idPk).subscribe(result=>{

        this.estadoProceso=0;

  });
  setTimeout(function(){
    jQueryInstance.estadoProceso=-1;
    $('#confirmacion').modal('hide');
    jQueryInstance.rerender();
  },3000);

}
}