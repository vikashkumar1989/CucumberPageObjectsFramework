@Used-Search-Cars
Feature: Acceptance Testing to Validate Used Search Car page is Working Fine
  In order to test used car search page
  As a Tester
  I am doing Accetance testing on the URL https://www.carsguide.com.au

  @Used-Car-Search-Positive
  Scenario: 
    Given I am on the home page of "https://www.carsguide.com.au" url
    When I navigate to Menu
      | Menu       |
      | buy + sell |
    Then I click on "Used" Link
    And I select Any Make
      | Make |
      | AUDI |
      | BMW  |
      | FORD |
    And I Select Model as
      | Model |
      | A1    |
      | 118D  |
      | CAPRI |
    And I Select Location as "Australia"
    And I select price as "$80,000"
    Then I Click on Fnd My Next Car Button
    Then I should see list of cars
    And the page title should be "Used Ford Capri Under 80000 for Sale | carsguide"
