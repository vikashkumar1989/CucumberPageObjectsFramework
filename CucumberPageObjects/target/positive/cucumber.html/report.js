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
  "duration": 7693919366,
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
  "duration": 46469922065,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_navigate_to_Menu(String\u003e)"
});
formatter.result({
  "duration": 933614737,
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
  "duration": 22668585102,
  "status": "passed"
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
  "duration": 6467667352,
  "status": "passed"
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
  "duration": 1637839898,
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
  "duration": 809905528,
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
  "duration": 1176023044,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_Click_on_Fnd_My_Next_Car_Button()"
});
formatter.result({
  "duration": 32092883280,
  "status": "passed"
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
  "duration": 230511,
  "status": "passed"
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
  "duration": 49476778,
  "status": "passed"
});
formatter.after({
  "duration": 3645287173,
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
  "duration": 8401088908,
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
  "duration": 32750857883,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_navigate_to_Menu(String\u003e)"
});
formatter.result({
  "duration": 547181468,
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
  "duration": 29005790303,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_select_Any_Make(String\u003e)"
});
formatter.result({
  "duration": 2321753973,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_Select_Model_as(String\u003e)"
});
formatter.result({
  "duration": 1243695714,
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
  "duration": 1159317072,
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
  "duration": 1631121953,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_Click_on_Fnd_My_Next_Car_Button()"
});
formatter.result({
  "duration": 25129357658,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_should_see_list_of_cars()"
});
formatter.result({
  "duration": 142319,
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
  "duration": 21020351,
  "status": "passed"
});
formatter.after({
  "duration": 2187703972,
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
  "duration": 8203383843,
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
  "duration": 22092801155,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_navigate_to_Menu(String\u003e)"
});
formatter.result({
  "duration": 656466950,
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
  "duration": 27456176338,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_select_Any_Make(String\u003e)"
});
formatter.result({
  "duration": 2845883888,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_Select_Model_as(String\u003e)"
});
formatter.result({
  "duration": 1833068137,
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
  "duration": 1227710206,
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
  "duration": 1038780420,
  "status": "passed"
});
formatter.match({
  "location": "CarSearchSteps.i_Click_on_Fnd_My_Next_Car_Button()"
});
formatter.result({
  "duration": 25778866820,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSearchSteps.i_should_see_list_of_cars()"
});
formatter.result({
  "duration": 167983,
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
  "duration": 30537090,
  "status": "passed"
});
formatter.after({
  "duration": 2562883271,
  "status": "passed"
});
});