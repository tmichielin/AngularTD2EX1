import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titre:string = 'TD1Ex2';

  imageUrl:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTq87-SF4Yj37WRgaxg9Z2zs9YLDMSLQCYAQ&usqp=CAU";

  nomClasse:string = "texte";

  bouton:boolean = true;

  onclick():void
  {
    console.log("bouton cliqué")
  }
}
