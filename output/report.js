$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/java Automation/SBIbankBDDframework/src/main/java/Feature/sbiCustomerCare.Feature");
formatter.feature({
  "line": 2,
  "name": "SBI Customer Support",
  "description": "",
  "id": "sbi-customer-support",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Navigate upto customer care Window",
  "description": "",
  "id": "sbi-customer-support;navigate-upto-customer-care-window",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on bank index page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Customer care",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "new window opened",
  "keyword": "Then "
});
formatter.match({
  "location": "customerCareStepDefinitions.user_is_on_bank_index_page()"
});
formatter.result({
  "duration": 17457242699,
  "status": "passed"
});
formatter.match({
  "location": "customerCareStepDefinitions.user_clicks_on_Customer_care()"
});
formatter.result({
  "duration": 198491600,
  "status": "passed"
});
formatter.match({
  "location": "customerCareStepDefinitions.new_window_opened()"
});
formatter.result({
  "duration": 4061687101,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "For Wrong input at customer Account number",
  "description": "",
  "id": "sbi-customer-support;for-wrong-input-at-customer-account-number",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on customer care window",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user selects customer type",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user input \"\u003caccount_number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user tries to input Name Of Complainant",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify a popup comes",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on OK on the alert",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "sbi-customer-support;for-wrong-input-at-customer-account-number;",
  "rows": [
    {
      "cells": [
        "account_number"
      ],
      "line": 18,
      "id": "sbi-customer-support;for-wrong-input-at-customer-account-number;;1"
    },
    {
      "cells": [
        ""
      ],
      "line": 19,
      "id": "sbi-customer-support;for-wrong-input-at-customer-account-number;;2"
    },
    {
      "cells": [
        "koushik123"
      ],
      "line": 20,
      "id": "sbi-customer-support;for-wrong-input-at-customer-account-number;;3"
    },
    {
      "cells": [
        "a457"
      ],
      "line": 21,
      "id": "sbi-customer-support;for-wrong-input-at-customer-account-number;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "For Wrong input at customer Account number",
  "description": "",
  "id": "sbi-customer-support;for-wrong-input-at-customer-account-number;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 9,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on customer care window",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user selects customer type",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user input \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user tries to input Name Of Complainant",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify a popup comes",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on OK on the alert",
  "keyword": "And "
});
formatter.match({
  "location": "customerCareStepDefinitions.user_is_on_customer_care_window()"
});
formatter.result({
  "duration": 27730600,
  "status": "passed"
});
formatter.match({
  "location": "customerCareStepDefinitions.user_selects_customer_type()"
});
formatter.result({
  "duration": 153405700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "customerCareStepDefinitions.user_doesn_t_input(String)"
});
formatter.result({
  "duration": 2142961200,
  "status": "passed"
});
formatter.match({
  "location": "customerCareStepDefinitions.user_tries_to_input_Name_Of_Complainant()"
});
formatter.result({
  "duration": 73852700,
  "status": "passed"
});
formatter.match({
  "location": "customerCareStepDefinitions.verify_a_popup_comes()"
});
formatter.result({
  "duration": 680801,
  "status": "passed"
});
formatter.match({
  "location": "customerCareStepDefinitions.user_clicks_on_OK_on_the_alert()"
});
formatter.result({
  "duration": 2022941999,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "For Wrong input at customer Account number",
  "description": "",
  "id": "sbi-customer-support;for-wrong-input-at-customer-account-number;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 9,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on customer care window",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user selects customer type",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user input \"koushik123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user tries to input Name Of Complainant",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify a popup comes",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on OK on the alert",
  "keyword": "And "
});
formatter.match({
  "location": "customerCareStepDefinitions.user_is_on_customer_care_window()"
});
formatter.result({
  "duration": 18006000,
  "status": "passed"
});
formatter.match({
  "location": "customerCareStepDefinitions.user_selects_customer_type()"
});
formatter.result({
  "duration": 62642401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "koushik123",
      "offset": 12
    }
  ],
  "location": "customerCareStepDefinitions.user_doesn_t_input(String)"
});
formatter.result({
  "duration": 2211474600,
  "status": "passed"
});
formatter.match({
  "location": "customerCareStepDefinitions.user_tries_to_input_Name_Of_Complainant()"
});
formatter.result({
  "duration": 63048701,
  "status": "passed"
});
formatter.match({
  "location": "customerCareStepDefinitions.verify_a_popup_comes()"
});
formatter.result({
  "duration": 471900,
  "status": "passed"
});
formatter.match({
  "location": "customerCareStepDefinitions.user_clicks_on_OK_on_the_alert()"
});
formatter.result({
  "duration": 2008619100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "For Wrong input at customer Account number",
  "description": "",
  "id": "sbi-customer-support;for-wrong-input-at-customer-account-number;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 9,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on customer care window",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user selects customer type",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user input \"a457\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user tries to input Name Of Complainant",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify a popup comes",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on OK on the alert",
  "keyword": "And "
});
formatter.match({
  "location": "customerCareStepDefinitions.user_is_on_customer_care_window()"
});
formatter.result({
  "duration": 21431600,
  "status": "passed"
});
formatter.match({
  "location": "customerCareStepDefinitions.user_selects_customer_type()"
});
formatter.result({
  "duration": 50009999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a457",
      "offset": 12
    }
  ],
  "location": "customerCareStepDefinitions.user_doesn_t_input(String)"
});
formatter.result({
  "duration": 99302900,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Please enter the 11 digit Account Number !! }\n  (Session info: chrome\u003d76.0.3809.100): \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027KOUSHIK-DEVELOP\u0027, ip: \u0027192.168.43.79\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\koush\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:13539}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e9955fdec192102c8761802075a44679\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"AccountNumber\"]}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat PageLayers.customerCarePageObject.account_number(customerCarePageObject.java:74)\r\n\tat StepDefinitions.customerCareStepDefinitions.user_doesn_t_input(customerCareStepDefinitions.java:44)\r\n\tat ✽.And user input \"a457\"(D:/java Automation/SBIbankBDDframework/src/main/java/Feature/sbiCustomerCare.Feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "customerCareStepDefinitions.user_tries_to_input_Name_Of_Complainant()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "customerCareStepDefinitions.verify_a_popup_comes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "customerCareStepDefinitions.user_clicks_on_OK_on_the_alert()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "Fill the customer care form and reset with correct data",
  "description": "",
  "id": "sbi-customer-support;fill-the-customer-care-form-and-reset-with-correct-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User entered correct Acoount number",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user inputs the data of Name Of Complainant and Mobile number and E-mail",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "selects Category Of Complaints",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "selects Products and Services",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "selects Nature Of complaint",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "inputs the details of complaint",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "verify User clicks on reset button",
  "keyword": "Then "
});
formatter.match({
  "location": "customerCareStepDefinitions.user_entered_correct_Acoount_number()"
});
formatter.result({
  "duration": 2287031700,
  "status": "passed"
});
formatter.match({
  "location": "customerCareStepDefinitions.user_inputs_the_data_of_Name_Of_Complainant_and_Mobile_number_and_E_mail()"
});
formatter.result({
  "duration": 6745939500,
  "status": "passed"
});
formatter.match({
  "location": "customerCareStepDefinitions.selects_Category_Of_Complaints()"
});
