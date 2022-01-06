Feature: adactin Book A Hotel
Scenario Outline: login

Given launch The Url
When user Enters The Username"<Username>"
And user Enters The Password"<Password>"
Then user Clicks Login Button And Page Navigates to Search Hotel Page

Examples:

|Username|Password|
|RabbaniS|Buyadactin@1|
|sandeeep|nopassword|


Scenario: search_Hotel

When user Selects Location
And user Selects Hotel
And user Selects Room Type
And user Selects No Of Rooms
And user Enters Checkin Date
And user Enters Checkout Date
And user Selects Number Of Adults
And user Selects Number Of Children
And user Clicks Search Button

Scenario: select_hotel

When user Able To Click The Radio Button Of Hotel
Then user Clicks The Continue Button

Scenario: book_hotel

When user Enters "Rabbani" In First Name Field
And user Enters "Sherief" In Last Name Field
And user Enters "no 22 bbb street city" In Address Field
And user Enters "1234567890123456" In Card Number Field
And user Selects "MAST" In Card Type Dropdown
And user Selects "12" As Expiry Month Dropdown
And user Selects "2022" As Expiry Year Dropdown
And user Enters "555" As Ccv_Number In Ccv Field
Then user Clicks On Book Now Button


Scenario: logout
When user Clicks My Itenary Button
Then user Clicks Logout Button

