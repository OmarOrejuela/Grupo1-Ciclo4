import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { RegionResponse } from 'src/app/models/region-response'
import { DepartamentoResponse } from 'src/app/models/departamento-response'
import { DepartamentoService } from 'src/app/services/departamento.service'
import { RegionService } from '../../../services/region.service'
import { DepartamentoComponent } from '../../departamento/departamento.component'
import { PaisComponent } from '../../pais/pais.component'

declare var $: any
declare var jQuery: any

@Component({
  selector: 'app-frmregion',
  templateUrl: './frmregion.component.html',
  styleUrls: ['./frmregion.component.scss'],
})
export class FrmregionComponent implements OnInit {
  frmRegistro: FormGroup
  estadoProceso = -1
  estadoProcesoEditar = -1
  misRegiones: RegionResponse[] = []
  misDepartamentos: DepartamentoResponse[] = []

  validationMessage = {
    nombre_reg: [
      { type: 'required', message: 'El nombre de la región es requerido' },
    ],
    dep: [{ type: 'required', message: 'El Departamento es requerido' }],
  }
  constructor(
    private fb: FormBuilder,
    private regServ: RegionService,
    private depServ: DepartamentoService,
  ) {
    this.frmRegistro = this.fb.group({
      nombre_reg: new FormControl(
        '',
        Validators.compose([Validators.required]),
      ),
      dep: new FormControl('', Validators.compose([Validators.required])),
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
    $('#nombre_reg').focus()
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
    const result = await this.regServ.LisrRecord()
    this.misRegiones = result
    const resultDepratamentos = await this.depServ.LisrRecord()
    this.misDepartamentos = resultDepratamentos
    console.log(this.misDepartamentos)
  }
  onSubmitRegion() {
    let jQueryInstance = this
    if (this.frmRegistro.valid) {
      let info = {
        nombre_reg: this.frmRegistro.controls['nombre_reg'].value,
        dep: {
          id_dep: this.frmRegistro.controls['dep'].value,
        },
      }
      this.regServ
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
      nombre_reg: '',
      dep: '',
    })
  }
}
