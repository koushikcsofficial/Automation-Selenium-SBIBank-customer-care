package StepDefinitions;

import java.awt.event.KeyEvent;

import PageLayers.customerCarePageObject;
import Utility.base;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class customerCareStepDefinitions extends base{
	
	customerCarePageObject cc = new customerCarePageObject();
	
	@Given("^User is on bank index page$")
	public void user_is_on_bank_index_page() throws Throwable {
	    base.initialization();
	}

	@When("^user clicks on Customer care$")
	public void user_clicks_on_Customer_care() throws Throwable {
	    cc.click_customerCare();
	}

	@Then("^new window opened$")
	public void new_window_opened() throws Throwable {
	    cc.Window_handle(1);
	    System.out.println(cc.get_title());
	}
	
	@Given("^User is on customer care window$")
	public void user_is_on_customer_care_window() throws Throwable {
		
		cc.Window_handle(1);
		cc.validate_title(cc.get_title(), "::CMS::");
	}

	@When("^user selects customer type$")
	public void user_selects_customer_type() throws Throwable {
		cc.select_customer_type("Existing SBI customer");
	}
	@When("^user input \"([^\"]*)\"$")
	public void user_doesn_t_input(String arg1) throws Throwable {
	    cc.account_number(arg1);
	    Thread.sleep(2000);
	}

	@When("^user tries to input Name Of Complainant$")
	public void user_tries_to_input_Name_Of_Complainant() throws Throwable {
	   cc.input_custName();
	}

	@Then("^verify a popup comes$")
	public void verify_a_popup_comes() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Tab is about to press");
	    robot.keyPress(KeyEvent.VK_TAB);
	    System.out.println("Tab is pressed");
	}

	@Then("^user clicks on OK on the alert$")
	public void user_clicks_on_OK_on_the_alert() throws Throwable {
		cc.alert_handle();
	}
	
	
	
	
	@Given("^User entered correct Acoount number$")
	public void user_entered_correct_Acoount_number() throws Throwable {
		cc.validate_title(cc.get_title(), "::CMS::");
		System.out.println("correct data is going to input");
	    cc.account_number("36552481064");
	    System.out.println("correct data is given");
	    Thread.sleep(2000);
	}

	@When("^user inputs the data of Name Of Complainant and Mobile number and E-mail$")
	public void user_inputs_the_data_of_Name_Of_Complainant_and_Mobile_number_and_E_mail() throws Throwable {
	    cc.input_custName("Koushik Saha");
	    cc.input_mobile("7699978887");
	    cc.input_email("koushik.official1999@gmail.com");
	}

	@When("^selects Category Of Complaints$")
	public void selects_Category_Of_Complaints() throws Throwable {
	    cc.select_category_of_compaints("BHIM SBI Pay(UPI)");
	}

	@When("^selects Products and Services$")
	public void selects_Products_and_Services() throws Throwable {
	    cc.select_products_and_services("UPI Pin Related");
	}

	@When("^selects Nature Of complaint$")
	public void selects_Nature_Of_complaint() throws Throwable {
	    cc.select_nature_of_complaints("UPI PIN authentication failed.");
	}

	@When("^inputs the details of complaint$")
	public void inputs_the_details_of_complaint() throws Throwable {
	    String complaint = "Test Successful";
	    cc.input_details(complaint);
	}

	@Then("^verify User clicks on reset button$")
	public void user_clicks_on_reset_button() throws Throwable {
	    cc.resetForm();
	    cc.close_browser();
	    cc.quit_browser();
	}
}
