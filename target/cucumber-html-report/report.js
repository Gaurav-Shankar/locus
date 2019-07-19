$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TestA.feature");
formatter.feature({
  "line": 2,
  "name": "Locus Pre-Screening Assignment - QA",
  "description": "",
  "id": "locus-pre-screening-assignment---qa",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestA"
    }
  ]
});
formatter.before({
  "duration": 2313957998,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Using selenium Automate the below process.",
  "description": "",
  "id": "locus-pre-screening-assignment---qa;using-selenium-automate-the-below-process.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I Open \"https://www.flipkart.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Search for \"Shoes\" in the search bar from home screen",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I Verify the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I Select price filter of max Rs 2000",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Search and Apply the brand \"Puma\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I Open the details page of the first result",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I Change the size",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on Buy Now",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.flipkart.com/",
      "offset": 8
    }
  ],
  "location": "TestAStepDef.i_Open(String)"
});
formatter.result({
  "duration": 9357094291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 14
    }
  ],
  "location": "TestAStepDef.i_Search_for_in_the_search_bar_from_home_screen(String)"
});
formatter.result({
  "duration": 1662698589,
  "status": "passed"
});
formatter.match({
  "location": "TestAStepDef.i_Verify_the_search_results_page()"
});
formatter.result({
  "duration": 254948126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 32
    }
  ],
  "location": "TestAStepDef.i_Select_price_filter_of_max_Rs(int)"
});
formatter.result({
  "duration": 748400318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Puma",
      "offset": 30
    }
  ],
  "location": "TestAStepDef.i_Search_and_Apply_the_brand_Puma(String)"
});
formatter.result({
  "duration": 5841967861,
  "status": "passed"
});
formatter.match({
  "location": "TestAStepDef.i_Open_the_details_page_of_the_first_result()"
});
formatter.result({
  "duration": 3778287411,
  "status": "passed"
});
formatter.match({
  "location": "TestAStepDef.i_Change_the_size()"
});
formatter.result({
  "duration": 1198463112,
  "status": "passed"
});
formatter.match({
  "location": "TestAStepDef.i_click_on_Buy_Now()"
});
formatter.result({
  "duration": 1072957453,
  "status": "passed"
});
formatter.after({
  "duration": 624993313,
  "status": "passed"
});
});