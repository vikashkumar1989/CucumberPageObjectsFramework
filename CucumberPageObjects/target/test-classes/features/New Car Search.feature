@New-Search-Cars
Feature: Acceptance Testing to Validate New Search Car page is Working Fine
  In order to test New car search page
  As a Tester
  I am doing Accetance testing on the URL https://www.carsguide.com.au

  @New-Car-Search-Positive
  Scenario: 
    Given I am on the home page of "https://www.carsguide.com.au" url
    When I navigate to Menu
      | Menu       |
      | buy + sell |
    Then I click on "New" Link
    And I select Any Make
      | Make	 |
      | AUDI 	 |
      | BMW  	 |
      | SUZUKI |
    And I Select Model as
      | Model |
      | A1    |
      | 118D  |
      | ALTO  |
    And I Select Location as "ACT - All"
    And I select price as "$50,000"
    Then I Click on Fnd My Next Car Button
    Then I should see list of cars
    And the page title should be "New Suzuki Alto Under 50000 for Sale ACT | carsguide"
