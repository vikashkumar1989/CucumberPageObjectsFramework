package steps;

import java.util.List;

import org.openqa.selenium.By;
import org.testng.Assert;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.CarGuideHomepageActions;
import pages.actions.CarSearchPageActions;
import utils.SeleniumDriver;

public class CarSearchSteps {
	CarGuideHomepageActions carGuideHomepageActions = new CarGuideHomepageActions();
	CarSearchPageActions carSearchPageActions = new CarSearchPageActions();

	@Given("^I am on the home page of \"([^\"]*)\" url$")
	public void i_am_on_the_home_page_of_url(String url) throws Throwable {
		SeleniumDriver.OpenPage(url);

	}

	@When("^I navigate to Menu$")
	public void i_navigate_to_Menu(List<String> list) throws Throwable {
		String menu = list.get(1);
		System.out.println("Selected Menu-->" + menu);
		carGuideHomepageActions.moveToBuyPlusSell();

	}

	@Then("^I click on \"([^\"]*)\" Link$")
	public void i_click_on_Link(String searchType) throws Throwable {
		SeleniumDriver.WaitForPageToLoad();
		carGuideHomepageActions.clickOnSearch(searchType);

	}

	@And("^I select Any Make as \"([^\"]*)\"$")
	public void i_select_Any_Make_as(String maker) throws Throwable {
		SeleniumDriver.WaitForPageToLoad();
		carSearchPageActions.SelectMaker(maker);

	}

	@And("^I Select Model as \"([^\"]*)\"$")
	public void i_Select_Model_as(String model) throws Throwable {

		carSearchPageActions.SelectModel(model);

	}

	@And("^I Select Location as \"([^\"]*)\"$")
	public void i_Select_Location_as(String location) throws Throwable {

		carSearchPageActions.SelectLocation(location);

	}

	@And("^I select price as \"([^\"]*)\"$")
	public void i_select_price_as(String price) throws Throwable {

		carSearchPageActions.Selectprice(price);

	}

	@Then("^I Click on Fnd My Next Car Button$")
	public void i_Click_on_Fnd_My_Next_Car_Button() throws Throwable {

		carSearchPageActions.FindMyNextCarSubmit();

	}

	@Then("^I should see list of cars from \"([^\"]*)\"$")
	public void i_should_see_list_of_cars_from(String arg1) throws Throwable {

		System.out.println("Car List Found with-->" + arg1);

	}

	@And("^the page title should be \"([^\"]*)\"$")
	public void the_page_title_should_be(String title) throws Throwable {

		String actualTitle = SeleniumDriver.getDriver().getTitle();
		Assert.assertEquals(title, actualTitle);

	}

}
