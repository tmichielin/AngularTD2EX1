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

  utilisateur:any[] = [
    {"nom":"Dupond", "prenom":"Jean", "email":"info@infor.fr", "tel":"04949395", "age":23},
    {"nom":"Dupont", "prenom":"Jeanne", "email":"info@information.fr", "tel":"04539395", "age":54},
    {"nom":"Dumont", "prenom":"Jacques", "email":"infoJE@infor.fr", "tel":"04946595", "age":31}
  ]

  detailBouton:boolean = true;

  cacherDetails():void
  {
    this.detailBouton = !this.detailBouton
  }

  texteSaisi: string = "";

   oUtil:{ nom:string, prenom:string, email:string, tel:string, age:number } = {"nom":"Test", "prenom":"Test", "email":"test", "tel":"000", "age":0}

   ajouterUser():void
   {
    this.oUtil.nom = this.texteSaisi;
    this.utilisateur.push(this.oUtil)
   }

}

