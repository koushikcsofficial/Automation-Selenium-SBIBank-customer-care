package PageLayers;

import java.util.ArrayList;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import Utility.base;
import org.junit.Assert;

public class customerCarePageObject  extends base{
	
	String CustomerCare = "//*[@class='customer_care']";
	String CustomerType = "//*[@id=\"mySelect1\"]";
	String AccountNumber = "//*[@id=\"AccountNumber\"]";
	String Complainant = "//*[@id=\"custName\"]";
	String MobileNumber = "//*[@id=\"Mobilenumber\"]";
	String Email = "//*[@id=\"Email\"]";
	String Details = "//*[@id=\"details\"]";
	String CategoryOfComplaints = "//*[@id=\"csdcat\"]";
	String ProductsAndServices = "//*[@id=\"prod\"]";
	String NatureOfComplaint = "//*[@id=\"nature\"]";
	String resetBtn = "//*[@id=\"reset\"]";
	
	
	public customerCarePageObject() {
		PageFactory.initElements(driver, this);
		
	}
	
	public void click_customerCare() {
		WebDriverWait wait = new WebDriverWait(driver,20);  
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(CustomerCare)));
		driver.findElement(By.xpath(CustomerCare)).click();
	}
	
	
	public void Window_handle(int n) {
		 ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
		 driver.switchTo().window(tabs.get(n));
	}
	public void Window_handle() {
		 ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
		 driver.switchTo().window(tabs.get(0));
	}
	
	
	public String get_title() {
		return driver.getTitle();
	}
	public void validate_title(String arg1, String arg2) {
		Assert.assertEquals("Verified", arg1, arg2);
	}
	
	
	public void select_customer_type(int n) {
		Select drpCustomer = new Select(driver.findElement(By.xpath(CustomerType)));
		drpCustomer.selectByIndex(n);
	}
	public void select_customer_type(String n) {
		Select drpCustomer = new Select(driver.findElement(By.xpath(CustomerType)));
		drpCustomer.selectByVisibleText(n);
	}
	
	
	public void account_number() {
		driver.findElement(By.xpath(AccountNumber)).click();
	}
	public void account_number(String n) {
		driver.findElement(By.xpath(AccountNumber)).clear();
		driver.findElement(By.xpath(AccountNumber)).sendKeys(n);
	}
	
	
	public void input_custName() {
		driver.findElement(By.xpath(Complainant)).click();
	}
	public void input_custName(String n) throws InterruptedException {
		driver.findElement(By.xpath(Complainant)).sendKeys(n);
		Thread.sleep(2000);
	}
	
	
	public void input_mobile(String n) throws InterruptedException {
		driver.findElement(By.xpath(MobileNumber)).sendKeys(n);
		Thread.sleep(2000);
	}
	
	public void input_email(String n) throws InterruptedException {
		driver.findElement(By.xpath(Email)).sendKeys(n);
		Thread.sleep(2000);
	}
	
	public void input_details(String n) throws InterruptedException {
		driver.findElement(By.xpath(Details)).sendKeys(n);
		Thread.sleep(2000);
	}
	
	public void select_category_of_compaints(int n) throws InterruptedException {
		Select categoryOfComplaints = new Select(driver.findElement(By.xpath(CategoryOfComplaints)));
		categoryOfComplaints.deselectByIndex(n);
		Thread.sleep(2000);
	}
	public void select_category_of_compaints(String n) throws InterruptedException {
		Select categoryOfComplaints = new Select(driver.findElement(By.xpath(CategoryOfComplaints)));
		categoryOfComplaints.selectByVisibleText(n);
		Thread.sleep(2000);
	}
	
	public void select_products_and_services(int n) throws InterruptedException {
		Select selectPdoduct = new Select(driver.findElement(By.xpath(ProductsAndServices)));
		selectPdoduct.deselectByIndex(n);
		Thread.sleep(2000);
	}
	public void select_products_and_services(String n) throws InterruptedException {
		Select selectPdoduct = new Select(driver.findElement(By.xpath(ProductsAndServices)));
		selectPdoduct.selectByVisibleText(n);
		Thread.sleep(2000);
	}
	
	public void select_nature_of_complaints(int n) throws InterruptedException {
		Select selectComplaint = new Select(driver.findElement(By.xpath(NatureOfComplaint)));
		selectComplaint.deselectByIndex(n);
		Thread.sleep(2000);
	}
	public void select_nature_of_complaints(String n) throws InterruptedException {
		Select selectComplaint = new Select(driver.findElement(By.xpath(NatureOfComplaint)));
		selectComplaint.selectByVisibleText(n);
		Thread.sleep(2000);
	}
	
	
	public void resetForm() throws InterruptedException {
		driver.findElement(By.xpath(resetBtn)).click();
		Thread.sleep(2000);
	}
	
	public void alert_handle() throws InterruptedException {
		driver.switchTo().alert().accept();
		Thread.sleep(2000);
	}
	public String alert_text() {
		return driver.switchTo().alert().getText();
	}
	public void close_browser() {
		 driver.close();
	}
	public void quit_browser() {
		 driver.quit();
	}
}
