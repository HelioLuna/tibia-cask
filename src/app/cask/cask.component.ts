import { Potion } from './../domain/potion.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cask',
  templateUrl: './cask.component.html',
  styleUrls: ['./cask.component.css']
})
export class CaskComponent implements OnInit {

  valortc: number;
  qtdpotion: number;
  potions: Potion[];
  potion: Potion;
    
  constructor() { }

  ngOnInit(): void {
    this.iniciarPotions()
    this.iniciarPotion();
  }

  iniciarPotion() {
    this.potion = {id: null, nome: '', precoUnitario: 0, precoCask: 0, image: 'flask'};
  }

  iniciarPotions() {
    this.potions = [
      {id: 1, nome: 'Mana Potion', precoUnitario: 56, precoCask: 5, image: 'mana_potion'},
      {id: 2, nome: 'Strong Mana Potion', precoUnitario: 93, precoCask: 9, image: 'strong_mana_potion'},
      {id: 3, nome: 'Great Mana Potion', precoUnitario: 144, precoCask: 14, image: 'great_mana_potion'},
      {id: 4, nome: 'Ultimate Mana Potion', precoUnitario: 438, precoCask: 42, image: 'ultimate_mana_potion'},
      {id: 5, nome: 'Health Potion', precoUnitario: 50, precoCask: 5, image: 'health_potion'},
      {id: 6, nome: 'Strong Health Potion', precoUnitario: 115, precoCask: 11, image: 'strong_health_potion'},
      {id: 7, nome: 'Great Health Potion', precoUnitario: 225, precoCask: 22, image: 'great_health_potion'},
      {id: 8, nome: 'Ultimate Health Potion', precoUnitario: 379, precoCask: 36, image: 'ultimate_health_potion'},
      {id: 9, nome: 'Supreme Health Potion', precoUnitario: 625, precoCask: 59, image: 'supreme_health_potion'},
      {id: 10, nome: 'Great Spirit Potion', precoUnitario: 228, precoCask: 22, image: 'great_spirit_potion'},
      {id: 11, nome: 'Ultimate Health Potion', precoUnitario: 438, precoCask: 42, image: 'ultimate_spirit_potion'}
    ]
  }

  calculaValorUnidade(): number{
    return isNaN((this.potion.precoCask * this.valortc)/1000)? 0 : (this.potion.precoCask * this.valortc)/1000;
  }

  calculaValorPotionCask():number {
    return isNaN(this.qtdpotion * this.calculaValorUnidade())? 0 : this.qtdpotion * this.calculaValorUnidade();
  }

  calculaValorPotionNPC(): number {
   return (isNaN(this.potion.precoUnitario * this.qtdpotion))? 0 : (this.potion.precoUnitario * this.qtdpotion);
  }

  calculaValorProfit(): number {
     return this.calculaValorPotionNPC() - this.calculaValorPotionCask();
  }

}
