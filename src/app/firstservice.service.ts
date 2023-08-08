import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor() { }

   message='hi this is from service';

   email='balaji24122000@gmail.com';
   password='123456';

   Anime=[
    {name:'naruto',hero:'naruto'},
    {name:'onepiece',hero:'Luffy'},
    {name:'Dragon balls',hero:'Goku'},
    {name:'Attack On titans',hero:'Eren'},
  ]

   public anime(){
    return this.Anime;
   }
}
