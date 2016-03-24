import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
// import {Customer} from './customer';
import {Observable} from 'rxjs/Observable'

@Injectable()

export class CustomerService {

    private _customersUrl = 'http://jsonplaceholder.typicode.com/users'
    constructor(private _http: Http) { }

    getCustomers() {
        return this._http.get(this._customersUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }



    private handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
    }


}