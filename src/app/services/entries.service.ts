import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { API } from '../constants/api.constants';
import { EntriesData, Entries } from '../model/entries.model';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  constructor(private _http: HttpClient) { }

  getManagerViewReport(): Observable<EntriesData[]> {
    return this._http.get<Entries>(API.URL).pipe(
      map((data: Entries) => {
        return data.entries;
      })
    );
  }
}
