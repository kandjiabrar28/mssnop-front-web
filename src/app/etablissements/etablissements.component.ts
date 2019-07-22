import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-etablissements',
  templateUrl: './etablissements.component.html',
  styleUrls: ['./etablissements.component.css']
})
export class EtablissementsComponent implements OnInit {
  listEtablissements;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:8080/etablissements')
    .subscribe(
      (datas) => {
        this.listEtablissements=datas;
      },
      (error) => {
        console.log('Erreur !:'+ error);
      }
    );
  }

}
