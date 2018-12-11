package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SearchPageCarLocators {
	
	@FindBy(how=How.XPATH, using="//select[@id='makes']")
	public WebElement MakerDropDown;
	
	@FindBy(how=How.XPATH, using="//select[@id='models']")
	public WebElement ModelDropdown;
	
	@FindBy(how=How.XPATH, using="//select[@id='locations']")
	public WebElement LocationDropDown;
	
	@FindBy(how=How.XPATH, using="//select[@id='price-max']")
	public WebElement PriceDropdown;
	
	@FindBy(how=How.XPATH, using="//input[@id='search-submit']")
	public WebElement FindMyNextCarSubmit;



}
