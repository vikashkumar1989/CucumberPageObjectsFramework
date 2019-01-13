$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Car Search.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance Testing to Validate Search Car page is Working Fine",
  "description": "In order to test car search page\nAs a Tester\nI am doing Accetance testing on the URL https://www.carsguide.com.au",
  "id": "acceptance-testing-to-validate-search-car-page-is-working-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 23859723799,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "",
  "description": "",
  "id": "acceptance-testing-to-validate-search-car-page-is-working-fine;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Car-Search-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the home page of \"https://www.carsguide.com.au\" url",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I navigate to Menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 11
    },
    {
      "cells": [
        "buy + sell"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Search Cars\" Link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I select Any Make as \"BMW\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select Model as \"1 SERIES\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Select Location as \"Australia\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select price as \"$80,000\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Click on Fnd My Next Car Button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see list of cars from \"2012 BMW 116I\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the page title should be \"Bmw 1 Series Under 80000 for Sale | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 26
    }
  ],
  "location": "CarSearchSteps.i_am_on_the_home_page_of_url(String)"
});
formatter.result({
  "duration": 42164602496,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_navigate_to_Menu(String\u003e)"
});
formatter.result({
  "duration": 1803241795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 12
    }
  ],
  "location": "CarSearchSteps.i_click_on_Link(String)"
});
formatter.result({
  "duration": 35300275959,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.17134 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VIKASH-PC\u0027, ip: \u002710.0.0.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.44.609538 (b655c5a60b0b54..., userDataDir: C:\\Users\\Vikash\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51182}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 3f65a9e07c9577343b3c705a826b7933\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat pages.actions.CarGuideHomepageActions.clickOnSearchCars(CarGuideHomepageActions.java:22)\r\n\tat pages.actions.CarGuideHomepageActions.clickOnSearch(CarGuideHomepageActions.java:32)\r\n\tat steps.CarSearchSteps.i_click_on_Link(CarSearchSteps.java:39)\r\n\tat ✽.Then I click on \"Search Cars\" Link(Car Search.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 22
    }
  ],
  "location": "CarSearchSteps.i_select_Any_Make_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1 SERIES",
      "offset": 19
    }
  ],
  "location": "CarSearchSteps.i_Select_Model_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 22
    }
  ],
  "location": "CarSearchSteps.i_Select_Location_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 19
    }
  ],
  "location": "CarSearchSteps.i_select_price_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarSearchSteps.i_Click_on_Fnd_My_Next_Car_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2012 BMW 116I",
      "offset": 32
    }
  ],
  "location": "CarSearchSteps.i_should_see_list_of_cars_from(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series Under 80000 for Sale | carsguide",
      "offset": 26
    }
  ],
  "location": "CarSearchSteps.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2671601794,
  "status": "passed"
});
formatter.uri("New Car Search.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance Testing to Validate New Search Car page is Working Fine",
  "description": "In order to test New car search page\nAs a Tester\nI am doing Accetance testing on the URL https://www.carsguide.com.au",
  "id": "acceptance-testing-to-validate-new-search-car-page-is-working-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@New-Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 5764050857,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "",
  "description": "",
  "id": "acceptance-testing-to-validate-new-search-car-page-is-working-fine;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@New-Car-Search-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the home page of \"https://www.carsguide.com.au\" url",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I navigate to Menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 11
    },
    {
      "cells": [
        "buy + sell"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on \"New\" Link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I select Any Make",
  "rows": [
    {
      "cells": [
        "Make"
      ],
      "line": 15
    },
    {
      "cells": [
        "AUDI"
      ],
      "line": 16
    },
    {
      "cells": [
        "BMW"
      ],
      "line": 17
    },
    {
      "cells": [
        "SUZUKI"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Select Model as",
  "rows": [
    {
      "cells": [
        "Model"
      ],
      "line": 20
    },
    {
      "cells": [
        "A1"
      ],
      "line": 21
    },
    {
      "cells": [
        "118D"
      ],
      "line": 22
    },
    {
      "cells": [
        "ALTO"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select Location as \"ACT - All\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select price as \"$50,000\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Click on Fnd My Next Car Button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I should see list of cars",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "the page title should be \"New Suzuki Alto Under 50000 for Sale ACT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 26
    }
  ],
  "location": "CarSearchSteps.i_am_on_the_home_page_of_url(String)"
});
formatter.result({
  "duration": 18992252710,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_navigate_to_Menu(String\u003e)"
});
formatter.result({
  "duration": 196618686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New",
      "offset": 12
    }
  ],
  "location": "CarSearchSteps.i_click_on_Link(String)"
});
formatter.result({
  "duration": 22352072166,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_select_Any_Make(String\u003e)"
});
formatter.result({
  "duration": 760338896,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_Select_Model_as(String\u003e)"
});
formatter.result({
  "duration": 2010890908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 22
    }
  ],
  "location": "CarSearchSteps.i_Select_Location_as(String)"
});
formatter.result({
  "duration": 793460042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 19
    }
  ],
  "location": "CarSearchSteps.i_select_price_as(String)"
});
formatter.result({
  "duration": 790186703,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_Click_on_Fnd_My_Next_Car_Button()"
});
formatter.result({
  "duration": 28068375678,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_should_see_list_of_cars()"
});
formatter.result({
  "duration": 199713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Suzuki Alto Under 50000 for Sale ACT | carsguide",
      "offset": 26
    }
  ],
  "location": "CarSearchSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 53674352,
  "status": "passed"
});
formatter.after({
  "duration": 2874897344,
  "status": "passed"
});
formatter.uri("Used Car Search.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance Testing to Validate Used Search Car page is Working Fine",
  "description": "In order to test used car search page\nAs a Tester\nI am doing Accetance testing on the URL https://www.carsguide.com.au",
  "id": "acceptance-testing-to-validate-used-search-car-page-is-working-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 4504487484,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "",
  "description": "",
  "id": "acceptance-testing-to-validate-used-search-car-page-is-working-fine;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Used-Car-Search-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the home page of \"https://www.carsguide.com.au\" url",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I navigate to Menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 11
    },
    {
      "cells": [
        "buy + sell"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Used\" Link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I select Any Make",
  "rows": [
    {
      "cells": [
        "Make"
      ],
      "line": 15
    },
    {
      "cells": [
        "AUDI"
      ],
      "line": 16
    },
    {
      "cells": [
        "BMW"
      ],
      "line": 17
    },
    {
      "cells": [
        "FORD"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Select Model as",
  "rows": [
    {
      "cells": [
        "Model"
      ],
      "line": 20
    },
    {
      "cells": [
        "A1"
      ],
      "line": 21
    },
    {
      "cells": [
        "118D"
      ],
      "line": 22
    },
    {
      "cells": [
        "CAPRI"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select Location as \"Australia\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select price as \"$80,000\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Click on Fnd My Next Car Button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I should see list of cars",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "the page title should be \"Used Ford Capri Under 80000 for Sale | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 26
    }
  ],
  "location": "CarSearchSteps.i_am_on_the_home_page_of_url(String)"
});
formatter.result({
  "duration": 24520997428,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_navigate_to_Menu(String\u003e)"
});
formatter.result({
  "duration": 336656911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used",
      "offset": 12
    }
  ],
  "location": "CarSearchSteps.i_click_on_Link(String)"
});
formatter.result({
  "duration": 21066320683,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_select_Any_Make(String\u003e)"
});
formatter.result({
  "duration": 1433606057,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_Select_Model_as(String\u003e)"
});
formatter.result({
  "duration": 2886466250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 22
    }
  ],
  "location": "CarSearchSteps.i_Select_Location_as(String)"
});
formatter.result({
  "duration": 1115493554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 19
    }
  ],
  "location": "CarSearchSteps.i_select_price_as(String)"
});
formatter.result({
  "duration": 820600521,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_Click_on_Fnd_My_Next_Car_Button()"
});
formatter.result({
  "duration": 23988698933,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_should_see_list_of_cars()"
});
formatter.result({
  "duration": 131120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Ford Capri Under 80000 for Sale | carsguide",
      "offset": 26
    }
  ],
  "location": "CarSearchSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 20485546,
  "status": "passed"
});
formatter.after({
  "duration": 3580709841,
  "status": "passed"
});
});