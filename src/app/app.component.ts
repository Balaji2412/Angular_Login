import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pro-one';

  constructor( private router:Router){

    this.logoutCheck(); 
  } 

  loginData:boolean=false;
 //condition  for button to display.
  logoutCheck(){
    if(localStorage.getItem("email")!=null && localStorage.getItem('password')!=null){
      
      this.loginData=true;
    
    }
  }
  Logout():void{
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.logoutCheck();
    this.router.navigate(['Login']);
    
  }

}
