import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-name": this.onSetNameClick,
      "click:.set-email": this.onSetEmailClick,
      "click:.save-model": this.onSaveClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");

    if (input && input.value !== "") {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSetEmailClick = (): void => {
    this.model.setRandomEmail();
  };

  onSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get("name")}" />
        <button class="set-name">Change Name</button>
        <button class="set-email">Set Random Email</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }
}
