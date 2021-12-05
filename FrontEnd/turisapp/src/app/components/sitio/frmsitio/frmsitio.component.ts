import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { SitioResponse } from 'src/app/models/sitio-response'
import { RegionResponse } from 'src/app/models/region-response'
import { RegionService } from '../../../services/region.service'
import { SitioService } from 'src/app/services/sitio.service'
import { RegionComponent } from '../../region/region.component'


declare var $: any
declare var jQuery: any

@Component({
  selector: 'app-frmsitio',
  templateUrl: './frmsitio.component.html',
  styleUrls: ['./frmsitio.component.scss'],
})
export class FrmsitioComponent implements OnInit {
  frmRegistro: FormGroup
  estadoProceso = -1
  estadoProcesoEditar = -1
  misSitios: SitioResponse[] = []
  misRegiones: RegionResponse[] = []

  validationMessage = {
    id_sit: [{ type: 'required', message: 'El ID del sitio es requerido' }],
    nombre_sit: [
      { type: 'required', message: 'El nombre del sitio es requerido' },
    ],
    descripcion_sit: [
      { type: 'required', message: 'El descripción del sitio es requerida' },
    ],
    imagen_sit: [{ type: 'required', message: 'La imagen es requerida' }],
    regiones: [{ type: 'required', message: 'La región es requerido' }],
  }

  constructor(
    private fb: FormBuilder,
    private sitServ: SitioService,
    private regServ: RegionService,
  ) {
    this.frmRegistro = this.fb.group({
      id_sit: new FormControl('', Validators.compose([Validators.required])),
      nombre_sit: new FormControl(
        '',
        Validators.compose([Validators.required]),
      ),
      descripcion_sit: new FormControl(
        '',
        Validators.compose([Validators.required]),
      ),
      imagen_sit: new FormControl(
        '',
        Validators.compose([Validators.required]),
      ),
      regiones: new FormControl('', Validators.compose([Validators.required])),
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
    $('#id_sit').focus()
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
    const result = await this.sitServ.LisrRecord()
    this.misSitios = result
    console.log(this.misSitios)
    const resultRegiones = await this.regServ.LisrRecord()
    this.misRegiones = resultRegiones
    console.log(this.misRegiones)
  }
  onSubmitSitio() {
    let jQueryInstance = this
    if (this.frmRegistro.valid) {
      let info = {
        id_sit: this.frmRegistro.controls['id_sit'].value,
        nombre_sit: this.frmRegistro.controls['nombre_sit'].value,
        descripcion_sit: this.frmRegistro.controls['descripcion_sit'].value,
        imagen_sit: this.frmRegistro.controls['imagen_sit'].value,
        regiones: {
          id_reg: this.frmRegistro.controls['regiones'].value,
        },
      }
      console.log(info)
      this.sitServ
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
      id_sit: '',
      nombre_sit: '',
      descripcion_sit: '',
      imagen_sit: '',
      regiones: '',
    })
  }
}
