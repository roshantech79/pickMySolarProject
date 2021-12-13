import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';

// import { model } from './model';

@Injectable()
export class ApiServices {

    baseURL: string = "https://98b389d9-3f2c-431e-92a6-4fd9a942a8ef.mock.pstmn.io/quote";

    constructor(private http: HttpClient) {
    }

    getRepos(): Observable<any> {
        return this.http.get(this.baseURL)
    }

}
