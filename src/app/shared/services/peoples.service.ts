// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { PeoplesModel } from '../models/peoples.model';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PeoplesService {
    private peoplesUrl = 'api/getPeoples';

     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url

     // Fetch all existing peoples
     getPeoples(): Observable<PeoplesModel[]> {

         // Using get request
         return this.http.get(this.peoplesUrl)
          // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

     }

    //  Add New peoples
    addPeople (body: Object): Observable<PeoplesModel[]> {
        // let bodyString = JSON.stringify(body); // Stringify payload
        const headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.peoplesUrl, body, options) // ...using post request
                         .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

}
