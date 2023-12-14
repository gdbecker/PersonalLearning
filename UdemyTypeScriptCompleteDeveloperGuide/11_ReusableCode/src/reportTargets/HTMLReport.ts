import fs from "fs";
import { OutputTarget } from "../Summary";

export class HTMLReport implements OutputTarget {
  constructor(public title: string) {}

  print(report: string): void {
    const html = `
    <div>
      <h1>Wins Analysis Report</h1>
      <p>${report}</p>
    </div>`;

    fs.writeFileSync("index.html", html);
  }
}
