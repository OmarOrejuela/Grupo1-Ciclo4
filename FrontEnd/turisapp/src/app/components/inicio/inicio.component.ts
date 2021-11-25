import { Component, OnInit } from '@angular/core'
const URL_Sitio: string = 'google.com'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  isAct: boolean = false
  nombre: string = 'Mario Pulido'
  mensaje = ''
  edad: number = 48
  edad2: number = 18
  date: Date = new Date()
 /* listedad: number[] = [18, 20, 30, 40, 50, 60, 70]
  heroes = [
    {
      nombre: 'Spiderman',
      personaje: 'Peter Parker',
      descripcion:'Es un personaje creado por los estadounidenses Stan Lee y Steve Ditko,13​14​ e introducido en el cómic Amazing Fantasy n.° 15, publicado por Marvel Comics en agosto de 1962.15​ Se trata de un superhéroe que emplea sus habilidades sobrehumanas, reminiscentes de una araña, para combatir a otros supervillanos que persiguen fines siniestros.',
      foto:['assets/fotos/Spider_Man2.jpg', 'assets/fotos/202111810113561_1.jpg', 'assets/fotos/spider3.jpeg'],
    },
    {
      nombre: 'Hulk',
      personaje: 'Dr. Banner',
      descripcion:'David Banner es un investigador de genética que ha descubierto la manera de mutar el ADN humano para que el cuerpo pueda curarse rápidamente de una lesión o herida. Desea usar su investigación para crear supersoldados para el Ejército de los Estados Unidos, pero no le es permitido realizarlo, así que experimenta en sí mismo. Una vez que su esposa da a luz a su hijo Bruce, David se da cuenta de que su ADN mutante se ha transmitido e intenta encontrar una cura para la condición de su hijo.',
      foto: ['assets/fotos/Profile_-_Hulk.jpg'],
    },
    {
      nombre: 'Superman',
      personaje: 'Clark Kent',
      descripcion:'Clark Joseph Kent, también conocido por su nombre de nacimiento Kal-El o por su nombre de superhéroe Superman, es un personaje ficticio y superhéroe de las películas del Universo extendido de DC, basado en el personaje del mismo nombre creado por Jerry Siegel y Joe Shuster.',
      foto: ['assets/fotos/supermanbio_portada.jpg'],
    },
    {
      nombre: 'Acuaman',
      personaje: 'Arthur Curry',
      descripcion:'Mitad humano, mitad atlante, Arthur Curry es un habitante del poderoso reino subacuático de la Atlántida criado por un hombre humano y considerado un paria por los suyos. Arthur emprenderá un viaje que le ayudará a descubrir si es digno de cumplir con su destino: ser rey y convertirse en Aquaman.',
      foto: ['assets/fotos/acuaman.jpg'],
    },
    {
      nombre: 'Wonder Woman',
      personaje: 'Diana Prince',
      descripcion:'Diana, hija de dioses y princesa de las amazonas, nunca ha salido de su isla. Un día, en el contexto de la Primera Guerra Mundial, un piloto americano se estrella en su isla y Diana salva su vida; el piloto le explica que se está desarrollando una gran guerra que puede devastar el mundo, y Diana parte a la batalla.',
      foto: ['assets/fotos/woder.jpg'],
    },
    {
      nombre: 'Raven',
      personaje: 'Rachel Roth',
      descripcion:'Raven es la hija mestiza de una mujer llamada Angela Roth, conocida como Arella y el demonio Trigon. Raven fue concebida como producto de la violación de Arella por el demonio Trigon. Ella creció en una dimensión alternativa llamada Azarath, con habitantes mágicos y pacifistas cuyo líder espiritual era la mística Azar, quien le enseña a "controlar sus emociones" para reprimir de esa manera la herencia demoníaca que residía en ella. En ese proceso aprendió a desarrollar su empatía, sus poderes curativos y a poder separar el alma de su cuerpo y controlar su Alma-Yo. Esencialmente, si a Raven se le permitía sentir cualquier emoción, su padre la recrearía en su visión para unirse y juntos dominar todas las dimensiones posibles.',
      foto: ['assets/fotos/raven.jpg'],
    },
    
  ]*/

  constructor() {
   /* this.mensaje = `Me llamo ${this.nombre} y tengo ${
      this.edad
    } este año ${this.date.getFullYear()}, el proximo año ${
      this.date.getFullYear() + 1
    }  tendre ${this.edad + 1} años `*/
  }

  ngOnInit(): void {
    console.log(this.isAct)
    console.log(this.mensaje)
    /*console.log(this.listedad)
    if (!this.isAct) {
      console.log(this.edad)
    } else {
      console.log(this.edad2)
    }*/
  }
  
}
