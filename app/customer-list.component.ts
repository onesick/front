import {Component, OnInit} from 'angular2/core';
import {Customer} from './customer';
import {CustomerService} from './customer.service';


@Component({
    selector: 'customer-list',
    templateUrl: 'app/customer-list.component.html',
    providers: [CustomerService]
})

export class CustomerListComponent implements OnInit {
    customers: any;
    constructor(private _customerService: CustomerService) { }

    ngOnInit() {
        this._customerService.getCustomers().subscribe(customers => this.customers = customers);
        
     }
}