package utils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumDriver {
	
	private static SeleniumDriver seleniumdriver;
	
	//Initialize WebDriver
	private static WebDriver driver;
	
	//Initialize TimeOut
	private static WebDriverWait waitdriver;
	public final static int TIMEOUT=30;
	public final static int PAGE_LOAD_TIMEOUT=120;
	
	private SeleniumDriver() {
		
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\test\\resources\\executables\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		
		String window=driver.getWindowHandle();
		System.out.println("Windows-->"+window);
	}
	
	public static void OpenPage(String url) {
		System.out.println(url);
		System.out.println(driver);
		driver.get(url);
	}
	public static WebDriver getDriver() {
		return driver;
	}
	
	public static void setUpDriver() {
		if(seleniumdriver==null)
			seleniumdriver=new SeleniumDriver();
	}
	
	public static void TearDown() {
		if(driver !=null) {
			driver.close();
			driver.quit();
		}
		seleniumdriver=null;
	}
	public static void WaitForPageToLoad() {
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	

}
