function doGet() {
  return HtmlService.createHtmlOutputFromFile('Dashboard')
      .setTitle('Pocket Empire - Connection Test')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function testPipeline() {
  return "Success: GitHub se Apps Script ka connection ekdum perfect hai!";
}

