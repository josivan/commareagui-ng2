import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home/home.template.html'
})
export class HomeComponent {
  newProject() {
    console.log('Novo...');
  }

  openProject() {
    console.log('Abrir...');
  }
}