import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagemenviada',
  templateUrl: './mensagemenviada.component.html',
  styleUrls: ['./mensagemenviada.component.css']
})
export class MensagemenviadaComponent implements OnInit {

  mensagem: string='Mensagem Enviada'

  constructor() { }

  ngOnInit(): void {
  }

}
