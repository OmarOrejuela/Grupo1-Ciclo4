import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartamentoResponse } from 'src/app/models/departamento-response';
import { PaisResponse } from 'src/app/models/pais-response';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { PaisService } from 'src/app/services/pais.service';
import { PaisComponent } from '../../pais/pais.component';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-frmdepartamento',
  templateUrl: './frmdepartamento.component.html',
  styleUrls: ['./frmdepartamento.component.scss']
})
export class FrmdepartamentoComponent implements OnInit {
  frmRegistro:FormGroup;
  estadoProceso:Number=-1;
  estadoProcesoEditar:Number=-1;
  misDepartamentos:DepartamentoResponse[]=[];
  misPaises:PaisResponse[]=[];
  validationMessage={
    id:[
      {type:'required',message:'El codigo del departamento es obligatorio'}
    ],
    nombre_dep:[
      {type:'required',message:'El nombre del departamento es requerido'}
    ],
    paises:[
      {type:'required',message:'Debe seleccionar un pais'}
    ]
  }
  constructor(private fb:FormBuilder,private depServ:DepartamentoService,private paisSer:PaisService) { 
    this.frmRegistro=this.fb.group({
      id:new FormControl('',Validators.compose([Validators.required])),
      nombre_dep:new FormControl('',Validators.compose([Validators.required])),
      paises:new FormControl('',Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void {
    this.LoadRecords();
    $(document).ready(function() {
      $('#frmdatareg').find('input, textarea, select').attr('disabled', 'disabled');
      $("#cancelOp").attr('disabled', 'disabled');
      $("#saveOp").attr('disabled', 'disabled');
      $("#editarOp").attr('disabled', 'disabled');
      $("#newOp").removeAttr('disabled');
    });
  }
  nuevoReg(){
    $("#newOp").attr('disabled', 'disabled');
    $("#cancelOp").removeAttr('disabled');
    $("#saveOp").removeAttr('disabled');
    $("#editarOp").attr('disabled', 'disabled');
    // $("#eliminarOp").attr('disabled', 'disabled');
    $('#frmdatareg').find('input, textarea, select').removeAttr('disabled');
    $( "#id" ).focus();
    this.InitFrm();
  }
  editarReg(){
    $("#newOp").attr('disabled', 'disabled');
    $("#cancelOp").removeAttr('disabled');
    $("#editarOp").removeAttr('disabled');
    // $("#eliminarOp").removeAttr('disabled');
    $("#saveOp").attr('disabled', 'disabled');
    $('#frmdatareg').find('input, textarea, select').removeAttr('disabled');
  }
  cancelar(){
    $('#frmdatareg').find('input, textarea, select').attr('disabled', 'disabled');
    $("#cancelOp").attr('disabled', 'disabled');
    $("#saveOp").attr('disabled', 'disabled');
    $("#editarOp").attr('disabled', 'disabled');
    // $("#eliminarOp").attr('disabled', 'disabled');
    $("#newOp").removeAttr('disabled');
    this.estadoProceso=-1;
    this.estadoProcesoEditar=-1;
    //this.InitFrm();
  }
  async LoadRecords(){
    const result= await this.depServ.ListRecords();
    this.misDepartamentos=result;
    const resultPaises= await this.paisSer.listarPaises();
    this.misPaises=resultPaises;
    console.log(this.misPaises);
  }
  onSubmitPais() {
    let jQueryInstance = this;
    if (this.frmRegistro.valid) {
      let info={
        id:this.frmRegistro.controls['id'].value,
        nombre_dep:this.frmRegistro.controls['nombre_dep'].value,
        paises:{
          id:this.frmRegistro.controls['paises'].value
        }  
      }
      this.depServ.InsertRecord(info).subscribe((result: { data: { idAux: any; }; })=>{
            this.estadoProceso=0;
      });
      setTimeout(function(){
        jQueryInstance.estadoProceso=-1;
      },3000);
      this.editarReg();
    } else {
      Object.keys(this.frmRegistro.controls).forEach(field => {
        const control: any = this.frmRegistro.get(field);
        // handle if basic FormControl
        // tslint:disable-next-line:no-string-literal
        if (!control['controls']) {
          control.markAsTouched({ onlySelf: true });
        } else {
            // tslint:disable-next-line:no-string-literal
            const QFormArray = control['controls'];
            QFormArray.forEach((subcCtrlGp: { [x: string]: {}; get: (arg0: string) => any; }) => {
              // tslint:disable-next-line:no-string-literal
              Object.keys(subcCtrlGp['controls']).forEach(subField => {
                const nestedControl = subcCtrlGp.get(subField);
                nestedControl.markAsTouched({ onlySelf: true });
              });
            });
          }
      });
    }
    
  }
  InitFrm()
  {
    this.frmRegistro.setValue(
      {
        id  : '',
        nombre_dep:'',
        paises:''
      }
    );
  }
}