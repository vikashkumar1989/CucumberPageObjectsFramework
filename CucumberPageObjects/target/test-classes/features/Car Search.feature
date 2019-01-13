@Search-Cars
Feature: Acceptance Testing to Validate Search Car page is Working Fine
  In order to test car search page
  As a Tester
  I am doing Accetance testing on the URL https://www.carsguide.com.au

  @Car-Search-Positive
  Scenario: 
    Given I am on the home page of "https://www.carsguide.com.au" url
    When I navigate to Menu
      |Menu      |
      |buy + sell|
    Then I click on "Search Cars" Link
    And I select Any Make as "BMW"
    And I Select Model as "1 SERIES"
    And I Select Location as "Australia"
    And I select price as "$80,000"
    Then I Click on Fnd My Next Car Button
    Then I should see list of cars from "2012 BMW 116I"
    And the page title should be "Bmw 1 Series Under 80000 for Sale | carsguide"
