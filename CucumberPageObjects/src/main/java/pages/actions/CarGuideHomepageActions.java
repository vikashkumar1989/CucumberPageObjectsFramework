package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.CarGuideHomePageLocators;
import utils.SeleniumDriver;

public class CarGuideHomepageActions {
	
	CarGuideHomePageLocators carGuideHomePageLocators=null;
	
	public CarGuideHomepageActions() {
		this.carGuideHomePageLocators=new CarGuideHomePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), carGuideHomePageLocators);
	}	
	public void moveToBuyPlusSell() {
		Actions a=new Actions(SeleniumDriver.getDriver());
		a.moveToElement(carGuideHomePageLocators.BuyPlusSellLink).build().perform();
	}	
	public void clickOnSearchCars() {
		carGuideHomePageLocators.SearchCarLink.click();		
	}
	public void clickOnNewCars() {
		carGuideHomePageLocators.NewCarLink.click();
	}
	public void clickOnUsedCars() {
		carGuideHomePageLocators.UsedCarLink.click();		
	}
	public void clickOnSearch(String searchType) {
		if(searchType.equals("Search Cars")) {
			clickOnSearchCars();
			
		}else if(searchType.equals("Used")) {
			clickOnUsedCars();
			
		}else if(searchType.equals("New")) {
			clickOnNewCars();
			
		}
	}
	
	

}
