import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS} from 'angular2/router'
// Add all operators to Observable
import 'rxjs/Rx';


bootstrap(AppComponent, [ROUTER_PROVIDERS]);
