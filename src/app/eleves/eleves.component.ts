import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-el',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {

listEtablissements;
listEleves
currentEtablissement={id:-1};

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:8080/etablissements")
    .subscribe(
      (data) => {
        this.listEtablissements=data;
      },
      (error) => {
        console.log('Erreur !:'+ error);
      }
    );  
  }
  onGetEleves(et){
    this.currentEtablissement=et;
    this.httpClient.get("http://localhost:8080/etablissements/"+et.id+"/eleves")
    .subscribe(
      (data) => {
        this.listEleves=data;
      },
      (error) => {
        console.log('Erreur !:'+ error);
      }
    );  

  }

}
