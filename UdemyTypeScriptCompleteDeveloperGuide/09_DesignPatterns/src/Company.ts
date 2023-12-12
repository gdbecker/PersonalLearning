import { faker } from "@faker-js/faker";
import { Mappable } from "./Mappable";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h3>${this.companyName}</h3>
        <h4>${this.catchPhrase}</h4>
      </div>
    `;
  }
}
