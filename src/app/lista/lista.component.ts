import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  item: string = '';
  lista: ItemLista[] = [];


  adicionarItem() {
    let itemLista = new ItemLista();
    
    if(this.item){
      itemLista.nome = this.item;
      itemLista.id = this.lista.length + 1;
      this.lista.push(itemLista)
    }
    this.item = '';
  }

  ricarItem(itemLista: ItemLista) {
    itemLista.comprado = !itemLista.comprado;
    
  }

  limpar() {
    this.lista = [];
  }

}
