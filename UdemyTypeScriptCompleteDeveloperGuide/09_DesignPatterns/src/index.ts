// need this line for the types file for google maps
/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

// generate random data
const user = new User();
const company = new Company();

// generate a new google map
const map = new CustomMap("map");

// add user and company markers to the map
map.addMarker(user);
map.addMarker(company);
