$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/org/cucumberAdactin/featurefile.feature");
formatter.feature({
  "line": 1,
  "name": "adactin Book A Hotel",
  "description": "",
  "id": "adactin-book-a-hotel",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "login",
  "description": "",
  "id": "adactin-book-a-hotel;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enters The Username\"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enters The Password\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Clicks Login Button And Page Navigates to Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "adactin-book-a-hotel;login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 11,
      "id": "adactin-book-a-hotel;login;;1"
    },
    {
      "cells": [
        "RabbaniS",
        "Buyadactin@1"
      ],
      "line": 12,
      "id": "adactin-book-a-hotel;login;;2"
    },
    {
      "cells": [
        "sandeeep",
        "nopassword"
      ],
      "line": 13,
      "id": "adactin-book-a-hotel;login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "login",
  "description": "",
  "id": "adactin-book-a-hotel;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enters The Username\"RabbaniS\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enters The Password\"Buyadactin@1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Clicks Login Button And Page Navigates to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 13,
  "name": "login",
  "description": "",
  "id": "adactin-book-a-hotel;login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enters The Username\"sandeeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enters The Password\"nopassword\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Clicks Login Button And Page Navigates to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 16,
  "name": "search_Hotel",
  "description": "",
  "id": "adactin-book-a-hotel;search-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "user Selects Location",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user Selects Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Selects Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Selects No Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Enters Checkin Date",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Enters Checkout Date",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Selects Number Of Adults",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Selects Number Of Children",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Clicks Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "Step_defenition_Add.user_Selects_Location()"
});
formatter.result({
  "duration": 1966984900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#location\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.216\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54531}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cb416390826905479b6c6eabd394705b\n*** Element info: {Using\u003did, value\u003dlocation}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat org.Addactin.Base_Class.dropdown(Base_Class.java:110)\r\n\tat org.stepdefenition.Step_defenition_Add.user_Selects_Location(Step_defenition_Add.java:57)\r\n\tat ✽.When user Selects Location(src/test/java/org/cucumberAdactin/featurefile.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_defenition_Add.user_Selects_Hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_defenition_Add.user_Selects_Room_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_defenition_Add.user_Selects_No_Of_Rooms()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_defenition_Add.user_Enters_Checkin_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_defenition_Add.user_Enters_Checkout_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_defenition_Add.user_Selects_Number_Of_Adults()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_defenition_Add.user_Selects_Number_Of_Children()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_defenition_Add.user_Clicks_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "select_hotel",
  "description": "",
  "id": "adactin-book-a-hotel;select-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "user Able To Click The Radio Button Of Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Clicks The Continue Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_defenition_Add.user_Able_To_Click_The_Radio_Button_Of_Hotel()"
});
formatter.result({
  "duration": 163744300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#radiobutton_0\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.216\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54531}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cb416390826905479b6c6eabd394705b\n*** Element info: {Using\u003did, value\u003dradiobutton_0}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat org.Addactin.Base_Class.clickonelement(Base_Class.java:56)\r\n\tat org.stepdefenition.Step_defenition_Add.user_Able_To_Click_The_Radio_Button_Of_Hotel(Step_defenition_Add.java:123)\r\n\tat ✽.When user Able To Click The Radio Button Of Hotel(src/test/java/org/cucumberAdactin/featurefile.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_defenition_Add.user_Clicks_The_Continue_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 33,
  "name": "book_hotel",
  "description": "",
  "id": "adactin-book-a-hotel;book-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "user Enters \"Rabbani\" In First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user Enters \"Sherief\" In Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Enters \"no 22 bbb street city\" In Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Enters \"1234567890123456\" In Card Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Selects \"MAST\" In Card Type Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Selects \"12\" As Expiry Month Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Selects \"2022\" As Expiry Year Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user Enters \"555\" As Ccv_Number In Ccv Field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user Clicks On Book Now Button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Rabbani",
      "offset": 13
    }
  ],
  "location": "Step_defenition_Add.user_Enters_In_First_Name_Field(String)"
});
formatter.result({
  "duration": 133152700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#first_name\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.216\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54531}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cb416390826905479b6c6eabd394705b\n*** Element info: {Using\u003did, value\u003dfirst_name}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat org.Addactin.Base_Class.passkeys(Base_Class.java:60)\r\n\tat org.stepdefenition.Step_defenition_Add.user_Enters_In_First_Name_Field(Step_defenition_Add.java:136)\r\n\tat ✽.When user Enters \"Rabbani\" In First Name Field(src/test/java/org/cucumberAdactin/featurefile.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sherief",
      "offset": 13
    }
  ],
  "location": "Step_defenition_Add.user_Enters_In_Last_Name_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "no 22 bbb street city",
      "offset": 13
    }
  ],
  "location": "Step_defenition_Add.user_Enters_In_Address_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890123456",
      "offset": 13
    }
  ],
  "location": "Step_defenition_Add.user_Enters_In_Card_Number_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MAST",
      "offset": 14
    }
  ],
  "location": "Step_defenition_Add.user_Selects_In_Card_Type_Dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 14
    }
  ],
  "location": "Step_defenition_Add.user_Selects_As_Expiry_Month_Dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 14
    }
  ],
  "location": "Step_defenition_Add.user_Selects_As_Expiry_Year_Dropdown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "555",
      "offset": 13
    }
  ],
  "location": "Step_defenition_Add.user_Enters_As_Ccv_Number_In_Ccv_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_defenition_Add.user_Clicks_On_Book_Now_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 46,
  "name": "logout",
  "description": "",
  "id": "adactin-book-a-hotel;logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "user Clicks My Itenary Button",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user Clicks Logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_defenition_Add.user_Clicks_My_Itenary_Button()"
});
formatter.result({
  "duration": 5126392100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#my_itinerary\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.216\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54531}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cb416390826905479b6c6eabd394705b\n*** Element info: {Using\u003did, value\u003dmy_itinerary}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat org.Addactin.Base_Class.clickonelement(Base_Class.java:56)\r\n\tat org.stepdefenition.Step_defenition_Add.user_Clicks_My_Itenary_Button(Step_defenition_Add.java:199)\r\n\tat ✽.When user Clicks My Itenary Button(src/test/java/org/cucumberAdactin/featurefile.feature:47)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_defenition_Add.user_Clicks_Logout_Button()"
});
formatter.result({
  "status": "skipped"
});
});