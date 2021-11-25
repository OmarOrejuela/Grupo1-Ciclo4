import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frmregion',
  templateUrl: './frmregion.component.html',
  styleUrls: ['./frmregion.component.scss'],
})
export class FrmregionComponent implements OnInit {
  frmRegistro: FormGroup;
  estadoProceso = -1
  estadoProcesoEditar = -1
  validationMessage={
    nombre_reg:[
      {type:'required',message:'El nombre de la región es requerido'}
    ],
    id_dep_fk:[{type:'required',message:'El Departamento es requerido'}]
  }
  constructor(private fb: FormBuilder) {this.frmRegistro = this.fb.group({
    nombre_reg: new FormControl(
      '',
      Validators.compose([Validators.required]),
    ),
    id_dep_fk:new FormControl(
      '',
      Validators.compose([Validators.required]),
    ),
  })}

  ngOnInit(): void {}
}
