import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/core';
import {Customer} from './customer';
import {Observable} from 'rxjs/Observable'

@Injectable()

export class CustomerService {
    constructor (private http: Http) {}
    
    private _customersUrl = 'http://localhost:3000/api/customers'
    getCustomers() {
        return this.http.get(this._customersUrl)
                        .map(res => <Customer[]> res.json())
                        .catch(this.handleError);
        
    }
    
    private handleError(error.Response) {}
     // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
}