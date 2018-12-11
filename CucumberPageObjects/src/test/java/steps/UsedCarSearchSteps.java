package steps;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import pages.actions.NewCarSearchPageActions;

public class UsedCarSearchSteps {
	NewCarSearchPageActions newCarSearchPageActions = new NewCarSearchPageActions();

	@Then("^I select Any Make$")
	public void i_select_Any_Make(List<String> make) throws Throwable {

		String maker = make.get(3);
		newCarSearchPageActions.SelectMaker(maker);

	}

	@Then("^I Select Model as$")
	public void i_Select_Model_as(List<String> modl) throws Throwable {
		String model = modl.get(3);
		newCarSearchPageActions.SelectModel(model);

	}

	@Then("^I should see list of cars$")
	public void i_should_see_list_of_cars() throws Throwable {
		System.out.println("List of Cars Displayed");

	}

}
