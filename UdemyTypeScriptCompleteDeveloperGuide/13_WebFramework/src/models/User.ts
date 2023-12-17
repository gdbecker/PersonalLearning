import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { APISync } from "./APISync";
import { Eventing } from "./Eventing";
import { Collection } from './Collection';

// ? means it's optional
export interface UserProps {
  id?: number;
  name?: string;
  email?: string;
}

const rootUrl = "https://jsonplaceholder.typicode.com/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new APISync<UserProps>(rootUrl),
      new Eventing(),
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
        rootUrl, 
        (json: UserProps) => User.buildUser(json)
      );
  }

  setRandomEmail(): void {
    const email = `user${Math.floor(Math.random() * 10000)}@example.com`;
    this.set({ email });
  }
}
