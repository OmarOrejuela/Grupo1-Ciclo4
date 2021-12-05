import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { PaisResponse } from 'src/app/models/pais-response'
import { PaisService } from 'src/app/services/pais.service'

declare var $: any
declare var jQuery: any

@Component({
  selector: 'app-frmpais',
  templateUrl: './frmpais.component.html',
  styleUrls: ['./frmpais.component.scss'],
})
export class FrmpaisComponent implements OnInit {
  frmRegistro: FormGroup
  estadoProceso = -1
  estadoProcesoEditar = -1
  misPaises: PaisResponse[] = []
  validationMessage = {
    nombre_pais: [
      { type: 'required', message: 'El nombre del pais es requerido' },
    ],
  }
  constructor(private fb: FormBuilder, private servPais: PaisService) {
    this.frmRegistro = this.fb.group({
      nombre_pais: new FormControl(
        '',
        Validators.compose([Validators.required]),
      ),
    })
  }

  ngOnInit(): void {
    this.CargarPaises();
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
    $('#nombre_pais').focus()
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
    this.InitFrm()
  }

  async CargarPaises() {
    const result = await this.servPais.ListarPaises()
    //console.log(result)
  }

  onSubmitPais() {
    let jQueryInstance = this
    if (this.frmRegistro.valid) {
      this.servPais
        .InsertRecord(this.frmRegistro.value)
        .subscribe((result: { data: { ErrNumber: number; idAux: any } }) => {
          this.estadoProceso = 0
        })
      setTimeout(function () {
        jQueryInstance.estadoProceso = -1
      }, 3000)
      //this.editarReg();
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
      nombre_pais: '',
    })
  }
}
