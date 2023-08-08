import { Component } from '@angular/core';
import { FirstserviceService } from '../firstservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dasbboard',
  templateUrl: './dasbboard.component.html',
  styleUrls: ['./dasbboard.component.css']
})
export class DasbboardComponent {

  constructor(public service:FirstserviceService,private router:Router){

  }
  
logout():void{
  localStorage.removeItem('email');
  localStorage.removeItem('password');

  this.router.navigate(['Login'])
}


  
}

