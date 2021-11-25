import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartamentoResponse } from '../../../models/departamento-response';
import { DepartamentoService } from '../../../services/departamento.service';

@Component({
  selector: 'app-frmdepartamento',
  templateUrl: './frmdepartamento.component.html',
  styleUrls: ['./frmdepartamento.component.scss']
})
export class FrmdepartamentoComponent implements OnInit {
  //frmRegistro: FormGroup
  estadoProceso = -1
  estadoProcesoEditar = -1
  misDepart:DepartamentoResponse[]=[]
  validationMessage = {
    nombre_dep: [
      { type: 'required', message: 'El nombre del departamento es requerido' },
    ],
  }
  constructor(private fb:FormBuilder,private servDepart:DepartamentoService) { }

  ngOnInit(): void {
    this.LoadRecord()
  }
  async LoadRecord() {
    const result = await this.servDepart.LisrRecord();
    console.log(result[0]['paises'])
    this.misDepart=result
  }

}
