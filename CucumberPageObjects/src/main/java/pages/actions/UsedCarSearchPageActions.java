package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.UsedcarSearchPageLocators;
import utils.SeleniumDriver;

public class UsedCarSearchPageActions {
	
	UsedcarSearchPageLocators usedcarSearchPageLocators=null;
	
	public UsedCarSearchPageActions() {
		this.usedcarSearchPageLocators=new UsedcarSearchPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), usedcarSearchPageLocators);
	}
	public void SelectMaker(String maker) {
		Select s=new Select(usedcarSearchPageLocators.MakerDropDown);
		s.selectByVisibleText(maker);
		
	}
	public void SelectModel(String model) {
		Select s=new Select(usedcarSearchPageLocators.ModelDropdown);
		s.selectByVisibleText(model);
		
	}
	public void SelectLocation(String location) {
		Select s=new Select(usedcarSearchPageLocators.LocationDropDown);
		s.selectByVisibleText(location);
		
	}
	public void Selectprice(String price) {
		Select s=new Select(usedcarSearchPageLocators.PriceDropdown);
		s.selectByVisibleText(price);
		
	}
	public void FindMyNextCarSubmit() {
		usedcarSearchPageLocators.FindMyNextCarSubmit.click();
	}

}
