package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.SearchPageCarLocators;
import utils.SeleniumDriver;

public class CarSearchPageActions {
	
	SearchPageCarLocators searchPageCarLocators=null;
	
	public CarSearchPageActions() {
		this.searchPageCarLocators=new SearchPageCarLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), searchPageCarLocators);
	}
	public void SelectMaker(String maker) {
		Select s=new Select(searchPageCarLocators.MakerDropDown);
		s.selectByVisibleText(maker);
		
	}
	public void SelectModel(String model) {
		Select s=new Select(searchPageCarLocators.ModelDropdown);
		s.selectByVisibleText(model);
		
	}
	public void SelectLocation(String location) {
		Select s=new Select(searchPageCarLocators.LocationDropDown);
		s.selectByVisibleText(location);
		
	}
	public void Selectprice(String price) {
		Select s=new Select(searchPageCarLocators.PriceDropdown);
		s.selectByVisibleText(price);
		
	}
	public void FindMyNextCarSubmit() {
		searchPageCarLocators.FindMyNextCarSubmit.click();
	}

}
