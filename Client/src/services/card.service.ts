import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
// import { Bug } from '../models/bug.model';


@Injectable({
    providedIn: 'root'
})
export class CardService {
    route = "/CardType";

    constructor(private dataService: DataService) {}

    getAllType() {
    return this.dataService.getRecord(this.route + '/getCards' );
  }
}