"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Liverpool");
console.log("Check out index.html for the wins analysis!");
summary.buildAndPrintReport(matchReader.matches);
