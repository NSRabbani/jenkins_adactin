package org.stepdefenition;

import org.Addactin.Base_Class;

import org.helpers.File_reader_manager;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.pomofpom.Page_Object_Manager;
import org.runner.test_runner_Add;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_defenition_Add extends Base_Class {

	public static WebDriver driver = test_runner_Add.driver;
	public static Page_Object_Manager pom = new Page_Object_Manager(driver);

	/*
	 * @Given("^launch The Url$") public void launch_The_Url() throws Throwable {
	 * 
	 * geturl(File_reader_manager.getinstanceFrm().getinstanceCR().geturl()); }
	 * 
	 * @And("^user Enters Username$") public void user_Enters_Username() throws
	 * Throwable {
	 * 
	 * passkeys(pom.login().getUser(),
	 * File_reader_manager.getinstanceFrm().getinstanceCR().username());
	 * 
	 * }
	 * 
	 * @And("^user Enters Password$") public void user_Enters_Password() throws
	 * Throwable {
	 * 
	 * passkeys(pom.login().getPass(),
	 * File_reader_manager.getinstanceFrm().getinstanceCR().password());
	 * 
	 * }
	 * 
	 * @Then("^user Clicks Login Button And Page Navigates to Search Hotel Page$")
	 * public void
	 * user_Clicks_Login_Button_And_Page_Navigates_to_Search_Hotel_Page() throws
	 * Throwable {
	 * 
	 * clickonelement(pom.login().getLog_btn());
	 * 
	 * Assert.assertTrue(presentOrNot(pom.selct().getPage_verify())); //
	 * Assert.assertTrue(false);
	 * 
	 * }
	 */
	@When("^user Selects Location$")
	public void user_Selects_Location() throws Throwable {

		dropdown("text", pom.selct().getLocation(), File_reader_manager.getinstanceFrm().getinstanceCR().location());

	}

	@And("^user Selects Hotel$")
	public void user_Selects_Hotel() throws Throwable {

		dropdown("text", pom.selct().getHotels(), File_reader_manager.getinstanceFrm().getinstanceCR().hotel());

	}

	@And("^user Selects Room Type$")
	public void user_Selects_Room_Type() throws Throwable {

		dropdown("text", pom.selct().getRoom_type(), File_reader_manager.getinstanceFrm().getinstanceCR().room_type());

	}

	@And("^user Selects No Of Rooms$")
	public void user_Selects_No_Of_Rooms() throws Throwable {

		dropdown("value", pom.selct().getRoom_nos(),
				File_reader_manager.getinstanceFrm().getinstanceCR().numberofrooms());

	}

	@And("^user Enters Checkin Date$")
	public void user_Enters_Checkin_Date() throws Throwable {

		clear(pom.selct().getDatepick_in());

		passkeys(pom.selct().getDatepick_in(), File_reader_manager.getinstanceFrm().getinstanceCR().getdatein());

	}

	@And("^user Enters Checkout Date$")
	public void user_Enters_Checkout_Date() throws Throwable {

		clear(pom.selct().getDatepick_out());

		passkeys(pom.selct().getDatepick_out(), File_reader_manager.getinstanceFrm().getinstanceCR().getdateout());

	}

	@And("^user Selects Number Of Adults$")
	public void user_Selects_Number_Of_Adults() throws Throwable {

		dropdown("value", pom.selct().getAdult_room(), File_reader_manager.getinstanceFrm().getinstanceCR().adults());
	}

	@And("^user Selects Number Of Children$")
	public void user_Selects_Number_Of_Children() throws Throwable {

		dropdown("value", pom.selct().getChild_room(), File_reader_manager.getinstanceFrm().getinstanceCR().child());
	}

	@Then("^user Clicks Search Button$")
	public void user_Clicks_Search_Button() throws Throwable {

		clickonelement(pom.selct().getSubmit());

	}

	@When("^user Able To Click The Radio Button Of Hotel$")
	public void user_Able_To_Click_The_Radio_Button_Of_Hotel() throws Throwable {

		clickonelement(pom.clickpage().getRad());
	}

	@And("^user Clicks The Continue Button$")
	public void user_Clicks_The_Continue_Button() throws Throwable {

		clickonelement(pom.clickpage().getContinu());

	}

	@And("^user Enters \"([^\"]*)\" In First Name Field$")
	public void user_Enters_In_First_Name_Field(String arg1) throws Throwable {

		passkeys(pom.booking().getF_name(), arg1);

	}

	@And("^user Enters \"([^\"]*)\" In Last Name Field$")
	public void user_Enters_In_Last_Name_Field(String arg1) throws Throwable {

		passkeys(pom.booking().getL_name(), arg1);
	}

	@And("^user Enters \"([^\"]*)\" In Address Field$")
	public void user_Enters_In_Address_Field(String arg1) throws Throwable {

		passkeys(pom.booking().getAdd(), arg1);

	}

	@And("^user Enters \"([^\"]*)\" In Card Number Field$")
	public void user_Enters_In_Card_Number_Field(String arg1) throws Throwable {

		passkeys(pom.booking().getCc_num(), arg1);

	}

	@And("^user Selects \"([^\"]*)\" In Card Type Dropdown$")
	public void user_Selects_In_Card_Type_Dropdown(String arg1) throws Throwable {

		dropdown("value", pom.booking().getCc_type(), arg1);

	}

	@And("^user Selects \"([^\"]*)\" As Expiry Month Dropdown$")
	public void user_Selects_As_Expiry_Month_Dropdown(String arg1) throws Throwable {

		dropdown("value", pom.booking().getCc_exp_month(), arg1);

	}
	
	@When("^user Selects \"([^\"]*)\" As Expiry Year Dropdown$")
	public void user_Selects_As_Expiry_Year_Dropdown(String arg1) throws Throwable {

	dropdown("text", pom.booking().getCc_exp_yearame(), arg1);
		
	}


	@And("^user Enters \"([^\"]*)\" As Ccv_Number In Ccv Field$")
	public void user_Enters_As_Ccv_Number_In_Ccv_Field(String arg1) throws Throwable {

		passkeys(pom.booking().getCc_cvv(), arg1);

	}

	@And("^user Clicks On Book Now Button$")
	public void user_Clicks_On_Book_Now_Button() throws Throwable {

		clickonelement(pom.booking().getBook_now());

	}
	
	@When("^user Clicks My Itenary Button$")
	public void user_Clicks_My_Itenary_Button() throws Throwable {
		sleep(5000);
		clickonelement(pom.bookcnfrm().getMy_itr_btn());

	}

	@Then("^user Clicks Logout Button$")
	public void user_Clicks_Logout_Button() throws Throwable {

		clickonelement(pom.bookcnfrm().getLogout_btn());
		
	}
}
