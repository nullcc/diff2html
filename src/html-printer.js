/*
 *
 * HtmlPrinter (html-printer.js)
 * Author: rtfpessoa
 *
 */

(function() {
  var LineByLinePrinter = require('./line-by-line-printer.js').LineByLinePrinter;
  var SideBySidePrinter = require('./side-by-side-printer.js').SideBySidePrinter;
  var FileListPrinter = require('./file-list-printer.js').FileListPrinter;

  function HtmlPrinter() {
  }

  HtmlPrinter.prototype.generateLineByLineJsonHtml = function(diffFiles, config, coverage) {
    var lineByLinePrinter = new LineByLinePrinter(config);
    return lineByLinePrinter.generateLineByLineJsonHtml(diffFiles, coverage);
  };

  HtmlPrinter.prototype.generateSideBySideJsonHtml = function(diffFiles, config) {
    var sideBySidePrinter = new SideBySidePrinter(config);
    return sideBySidePrinter.generateSideBySideJsonHtml(diffFiles);
  };

  HtmlPrinter.prototype.generateFileListSummary = function(diffJson, config) {
    var fileListPrinter = new FileListPrinter(config);
    return fileListPrinter.generateFileList(diffJson);
  };

  module.exports.HtmlPrinter = new HtmlPrinter();
})();
