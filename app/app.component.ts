import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NavBarComponent} from './navbar.component';
import {CustomerListComponent} from './customer-list.component'
import {HomeComponent} from './home.component'
import {JobsComponent} from './jobs.component'

@RouteConfig([
   {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
   {path: '/customers', name: 'Customers', component: CustomerListComponent },
   {path: '/jobs', name: 'Jobs', component: JobsComponent },
   {path: '/*other', name: "Other", redirectTo: ['Home']}
])
@Component({
    selector: 'my-app',
    directives: [NavBarComponent, ROUTER_DIRECTIVES], 
    template: `
    <navbar></navbar>
    <div class = "container">
        <router-outlet></router-outlet>
    </div>
    `
})

export class AppComponent{};