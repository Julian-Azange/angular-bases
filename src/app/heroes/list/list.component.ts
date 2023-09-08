import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes: string[] = ['spiderman', 'ironman', 'hulk', 'thor', 'black widow'];

  public deletedHero?: string = '';

  removeLastHero(): void {
    this.deletedHero = this.heroes.pop() || '';
  }
  
  resetHeroes(): void {
    this.heroes = ['spiderman', 'ironman', 'hulk', 'thor', 'black widow'];
    this.deletedHero = '';
  }



}
