import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./csvFileReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

//Create an object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const staticMatchReader = MatchReader.fromCsv("football.csv");
staticMatchReader.load();

const summaryConsole = new Summary(
    new WinsAnalysis("Liverpool"),
    new ConsoleReport()
);

const summaryHtml = new Summary(
    new WinsAnalysis("Liverpool"),
    new HtmlReport()
);

const staticHtmlSummary = Summary.winsAnalysisWithHtmlReport("Liverpool");
staticHtmlSummary.buildAndPrintReport(staticMatchReader.matches);

const staticConsoleSummary = Summary.winsAnalysisWithConsole("Liverpool");
staticConsoleSummary.buildAndPrintReport(staticMatchReader.matches);

//summaryHtml.buildAndPrintReport(matchReader.matches);
//summaryConsole.buildAndPrintReport(matchReader.matches);
staticMatchReader
