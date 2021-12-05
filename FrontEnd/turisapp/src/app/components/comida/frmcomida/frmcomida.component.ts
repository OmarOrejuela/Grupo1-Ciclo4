import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ComidaResponse } from 'src/app/models/comida-response'
import { ComidaService } from 'src/app/services/comida.service'
import { SitioResponse } from 'src/app/models/sitio-response'
import { SitioService } from 'src/app/services/sitio.service'
import { ComidaComponent } from '../comida.component';


declare var $: any
declare var jQuery: any

@Component({
  selector: 'app-frmcomida',
  templateUrl: './frmcomida.component.html',
  styleUrls: ['./frmcomida.component.scss']
})
export class FrmcomidaComponent implements OnInit {
  frmRegistro: FormGroup
  estadoProceso: Number = -1
  estadoProcesoEditar: Number = -1
  misComi:ComidaResponse[]=[]
  misSit:SitioResponse[]=[]

  validationMessage = {
    descripcion_plat: [
      { type: 'required', message: 'La descripción del plato requerido' },
    ],
    imagen_plat: [
      { type: 'required', message: 'Imagen del plato requerido' },
    ],
    nombre_plat: [
      { type: 'required', message: 'Nombre del plato requerido' },
    ],
    sitio: [{ type: 'required', message: 'Debe seleccionar un sitio' }],
  }


  constructor(
    private fb: FormBuilder,
    private comiServ: ComidaService,
    private sitServ:SitioService,
     
    ) {
      this.frmRegistro = this.fb.group({
        descripcion_plat: new FormControl(
          '',
          Validators.compose([Validators.required]),
        ),
        imagen_plat: new FormControl(
          '',
          Validators.compose([Validators.required]),
        ),
        nombre_plat: new FormControl(
          '',
          Validators.compose([Validators.required]),
        ),
        sitio: new FormControl('', Validators.compose([Validators.required])),
      })
    
   }

   ngOnInit(): void {
    this.LoadRecords()
    $(document).ready(function () {
      $('#frmdatareg')
        .find('input, textarea, select')
        .attr('disabled', 'disabled')
      $('#cancelOp').attr('disabled', 'disabled')
      $('#saveOp').attr('disabled', 'disabled')
      $('#editarOp').attr('disabled', 'disabled')
      $('#newOp').removeAttr('disabled')
    })
  }
  nuevoReg() {
    $('#newOp').attr('disabled', 'disabled')
    $('#cancelOp').removeAttr('disabled')
    $('#saveOp').removeAttr('disabled')
    $('#editarOp').attr('disabled', 'disabled')
    // $("#eliminarOp").attr('disabled', 'disabled');
    $('#frmdatareg').find('input, textarea, select').removeAttr('disabled')
    $('#descripcion_plat').focus()
    this.InitFrm()
  }
  editarReg() {
    $('#newOp').attr('disabled', 'disabled')
    $('#cancelOp').removeAttr('disabled')
    $('#editarOp').removeAttr('disabled')
    // $("#eliminarOp").removeAttr('disabled');
    $('#saveOp').attr('disabled', 'disabled')
    $('#frmdatareg').find('input, textarea, select').removeAttr('disabled')
  }
  cancelar() {
    $('#frmdatareg')
      .find('input, textarea, select')
      .attr('disabled', 'disabled')
    $('#cancelOp').attr('disabled', 'disabled')
    $('#saveOp').attr('disabled', 'disabled')
    $('#editarOp').attr('disabled', 'disabled')
    // $("#eliminarOp").attr('disabled', 'disabled');
    $('#newOp').removeAttr('disabled')
    this.estadoProceso = -1
    this.estadoProcesoEditar = -1
    //this.InitFrm();
  }
  async LoadRecords() {
    const result = await this.comiServ.LisrRecord()
    this.misComi = result
    const resultSitio = await this.sitServ.LisrRecord()
    this.misSit = resultSitio
    console.log(this.misSit)
  }
  onSubmitSitio() {
    let jQueryInstance = this
    if (this.frmRegistro.valid) {
      let info = {
        descripcion_plat: this.frmRegistro.controls['descripcion_plat'].value,
        imagen_plat: this.frmRegistro.controls['imagen_plat'].value,
        nombre_plat: this.frmRegistro.controls['nombre_plat'].value,
        sitio: {
          id_sit: this.frmRegistro.controls['sitio'].value,
        },
      }
      this.comiServ
        .InsertRecord(info)
        .subscribe((result: { data: { idAux: any } }) => {
          this.estadoProceso = 0
        })
      setTimeout(function () {
        jQueryInstance.estadoProceso = -1
      }, 3000)
      this.editarReg()
    } else {
      Object.keys(this.frmRegistro.controls).forEach((field) => {
        const control: any = this.frmRegistro.get(field)
        // handle if basic FormControl
        // tslint:disable-next-line:no-string-literal
        if (!control['controls']) {
          control.markAsTouched({ onlySelf: true })
        } else {
          // tslint:disable-next-line:no-string-literal
          const QFormArray = control['controls']
          QFormArray.forEach(
            (subcCtrlGp: { [x: string]: {}; get: (arg0: string) => any }) => {
              // tslint:disable-next-line:no-string-literal
              Object.keys(subcCtrlGp['controls']).forEach((subField) => {
                const nestedControl = subcCtrlGp.get(subField)
                nestedControl.markAsTouched({ onlySelf: true })
              })
            },
          )
        }
      })
    }
  }
  InitFrm() {
    this.frmRegistro.setValue({
      descripcion_plat: '',
      imagen_plat: '',
      nombre_plat: '',
      sitio: '',
    })
  }
}