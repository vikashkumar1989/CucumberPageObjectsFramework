package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CarGuideHomePageLocators {
	
	@FindBy(how=How.LINK_TEXT, using="buy + sell")
	public WebElement BuyPlusSellLink;
	
	@FindBy(how=How.LINK_TEXT, using="reviews")
	public WebElement ReviewsllLink;
	
	@FindBy(how=How.LINK_TEXT, using="news")
	public WebElement NewSellLink;	
	
	@FindBy(how=How.LINK_TEXT, using="advice")
	public WebElement AdviceLink;
	
	@FindBy(how=How.LINK_TEXT, using="pricing + specs")
	public WebElement PricePlusSecLink;
	
	@FindBy(how=How.LINK_TEXT, using="guides")
	public WebElement GuidesLink;
	
	@FindBy(how=How.XPATH, using="//a[contains(text(),'Search Cars')]")
	public WebElement SearchCarLink;
	
	@FindBy(how=How.XPATH, using="//a[@href='/buy-a-car/used-car-search']")
	public WebElement UsedCarLink;
	
	@FindBy(how=How.XPATH, using="//a[@href='/buy-a-car/new-car-search']")
	public WebElement NewCarLink;

}
