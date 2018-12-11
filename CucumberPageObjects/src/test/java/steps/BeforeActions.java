package steps;

import cucumber.api.java.Before;
import utils.SeleniumDriver;

public class BeforeActions {
	
	@Before
	public static void Setup() {
		System.out.println("Before");
		SeleniumDriver.setUpDriver();
	}

}
