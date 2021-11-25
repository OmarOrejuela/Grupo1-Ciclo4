import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { PaisResponse } from 'src/app/models/pais-response'
import { PaisService } from 'src/app/services/pais.service'

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
  constructor(private fb:FormBuilder,private servPais:PaisService)  {
    this.frmRegistro = this.fb.group({
      nombre_pais: new FormControl(
        '',
        Validators.compose([Validators.required]),
      ),
    })
  }

  ngOnInit(): void {
    this.CargarPaises()
  }
  async CargarPaises() {
    const result = await this.servPais.ListarPaises();
    console.log(result)
  }
}
