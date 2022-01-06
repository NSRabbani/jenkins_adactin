package org.runner;

import org.Addactin.Base_Class;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = "src\\test\\java\\org\\cucumberAdactin\\featurefile.feature",

		glue = "org.stepdefenition",
		
		monochrome = true,

		dryRun = false,

		strict = false,

		plugin = {

				"html:report/html_rep",

				//"pretty",

				"json:jsonreports/json.json",

				"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"

		}

)

public class test_runner_Add {

	public static WebDriver driver;

	@BeforeClass
	public static void setup() {

		driver = Base_Class.getbrowser("chrome");

	}

	@AfterClass
	public static void teardown() {

		// driver.close();

	}

}
