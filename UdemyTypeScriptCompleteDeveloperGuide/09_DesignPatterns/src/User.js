"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var faker_1 = require("@faker-js/faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1.faker.person.firstName();
        this.location = {
            lat: faker_1.faker.location.latitude(),
            lng: faker_1.faker.location.longitude(),
        };
    }
    User.prototype.markerContent = function () {
        return "User Name: ".concat(this.name, " (").concat(this.location.lat, ", ").concat(this.location.lng, ")");
    };
    return User;
}());
exports.User = User;
