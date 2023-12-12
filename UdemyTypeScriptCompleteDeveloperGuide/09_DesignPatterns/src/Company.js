"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var faker_1 = require("@faker-js/faker");
var Company = /** @class */ (function () {
    function Company() {
        this.companyName = faker_1.faker.company.name();
        this.catchPhrase = faker_1.faker.company.catchPhrase();
        this.location = {
            lat: faker_1.faker.location.latitude(),
            lng: faker_1.faker.location.longitude(),
        };
    }
    Company.prototype.markerContent = function () {
        return "\n      <div>\n        <h3>".concat(this.companyName, "</h3>\n        <h4>").concat(this.catchPhrase, "</h4>\n      </div>\n    ");
    };
    return Company;
}());
exports.Company = Company;
