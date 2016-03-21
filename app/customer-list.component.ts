import {Component, OnInit} from 'angular2/core';
import {Customer} from './customer';
import {CustomerService} from './customer.service';


@Component({
    selector: 'customer-list',
    templateUrl: `
    <ul>
     <li>list1</li>
     <li>list2</li>
    </ul>
    
    `
})

export class CustomerListComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}