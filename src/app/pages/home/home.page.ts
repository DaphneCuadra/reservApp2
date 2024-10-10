import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  //Vamos a crear una variable que almacenará la información del localStorage
  usuario: any;

  constructor(private navController: NavController) {}

  ngOnInit(){
    this.usuario = JSON.parse(localStorage.getItem("usuario") || '');
    //console.log(this.usuario); Para pruebas
  }

  logout(){
    localStorage.removeItem('usuario');
    this.navController.navigateRoot('/login');
  }

}
