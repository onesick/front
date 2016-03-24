System.register(['angular2/core', './customer.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, customer_service_1;
    var CustomerListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            }],
        execute: function() {
            CustomerListComponent = (function () {
                function CustomerListComponent(_customerService) {
                    this._customerService = _customerService;
                }
                CustomerListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._customerService.getCustomers().subscribe(function (customers) { return _this.customers = customers; });
                };
                CustomerListComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-list',
                        templateUrl: 'app/customer-list.component.html',
                        providers: [customer_service_1.CustomerService]
                    }), 
                    __metadata('design:paramtypes', [customer_service_1.CustomerService])
                ], CustomerListComponent);
                return CustomerListComponent;
            }());
            exports_1("CustomerListComponent", CustomerListComponent);
        }
    }
});
//# sourceMappingURL=customer-list.component.js.map