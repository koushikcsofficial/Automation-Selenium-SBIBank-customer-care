package RunnerClass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:\\java Automation\\SBIbankBDDframework\\src\\main\\java\\Feature\\sbiCustomerCare.Feature"
		, glue = {"StepDefinitions"},
		format = {"pretty","html:output"},
		dryRun = false
		)
										

public class testRunner {

}					