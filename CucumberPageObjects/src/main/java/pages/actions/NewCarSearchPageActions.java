package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.NewCarSearchPageLocators;
import utils.SeleniumDriver;

public class NewCarSearchPageActions {
	
	NewCarSearchPageLocators newCarSearchPageLocators=null;
	
	public NewCarSearchPageActions() {
		this.newCarSearchPageLocators=new NewCarSearchPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), newCarSearchPageLocators);
	}
	public void SelectMaker(String maker) {
		Select s=new Select(newCarSearchPageLocators.MakerDropDown);
		s.selectByVisibleText(maker);
		
	}
	public void SelectModel(String model) {
		Select s=new Select(newCarSearchPageLocators.ModelDropdown);
		s.selectByVisibleText(model);
		
	}
	public void SelectLocation(String location) {
		Select s=new Select(newCarSearchPageLocators.LocationDropDown);
		s.selectByVisibleText(location);
		
	}
	public void Selectprice(String price) {
		Select s=new Select(newCarSearchPageLocators.PriceDropdown);
		s.selectByVisibleText(price);
		
	}
	public void FindMyNextCarSubmit() {
		newCarSearchPageLocators.FindMyNextCarSubmit.click();
	}

}
