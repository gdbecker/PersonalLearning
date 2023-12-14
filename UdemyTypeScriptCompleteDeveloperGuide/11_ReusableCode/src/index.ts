import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport("Liverpool");

console.log("Check out index.html for the wins analysis!");
summary.buildAndPrintReport(matchReader.matches);
