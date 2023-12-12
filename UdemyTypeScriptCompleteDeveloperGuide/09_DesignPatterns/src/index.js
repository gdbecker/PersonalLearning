"use strict";
// need this line for the types file for google maps
/// <reference types="@types/google.maps" />
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Company_1 = require("./Company");
var CustomMap_1 = require("./CustomMap");
// generate random data
var user = new User_1.User();
var company = new Company_1.Company();
// generate a new google map
var map = new CustomMap_1.CustomMap("map");
// add user and company markers to the map
map.addMarker(user);
map.addMarker(company);
