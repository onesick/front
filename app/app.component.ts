import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NavBarComponent} from './navbar.component';
import {CustomerListComponent} from './customer-list.component'
import {HomeComponent} from './home.component'

@RouteConfig([
   {path: '/', name: 'Home', component: HomeComponent},
   {path: '/customers', name: 'Customers', component: CustomerListComponent },
   {path: '/*other', name: "Other", redirectTo: ['Home']}
])
@Component({
    selector: 'my-app',
    directives: [NavBarComponent, ROUTER_DIRECTIVES], 
    templateUrl: `
    <navbar></navbar>
    <div class = "container">
        <router-outlet></router-outlet>
    </div>
    `
})

export class AppComponent{};