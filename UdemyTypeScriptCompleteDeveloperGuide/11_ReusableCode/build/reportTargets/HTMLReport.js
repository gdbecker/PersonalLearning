"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReport = void 0;
const fs_1 = __importDefault(require("fs"));
class HTMLReport {
    constructor(title) {
        this.title = title;
    }
    print(report) {
        const html = `
    <div>
      <h1>Wins Analysis Report</h1>
      <p>${report}</p>
    </div>`;
        fs_1.default.writeFileSync("index.html", html);
    }
}
exports.HTMLReport = HTMLReport;
