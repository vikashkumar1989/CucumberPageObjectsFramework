package steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import utils.SeleniumDriver;

public class AfterActions {
	
	@After
	public void TearDown(Scenario scenario) {
		System.out.println("After");
		WebDriver driver=SeleniumDriver.getDriver();
		System.out.println(scenario.isFailed());
		if(scenario.isFailed()) {
			byte[] screenshotByte=((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshotByte, "image/png");
		}
		SeleniumDriver.TearDown();
	
		
	}
	
	
	

}
