@tag
Feature: SBI Customer Support

  @tag1
  Scenario: Navigate upto customer care Window
    Given User is on bank index page
    When user clicks on Customer care
    Then new window opened
  @tag2
  Scenario Outline: For Wrong input at customer Account number
    Given User is on customer care window
    When user selects customer type
    And user input "<account_number>"
    And user tries to input Name Of Complainant
    Then verify a popup comes
    And user clicks on OK on the alert
    Examples:
		|account_number|
		| |
		|koushik123|
		|a457|
	@tag3
  Scenario: Fill the customer care form and reset with correct data
    Given User entered correct Acoount number
    When user inputs the data of Name Of Complainant and Mobile number and E-mail
    And selects Category Of Complaints
    And selects Products and Services
    And selects Nature Of complaint
    And inputs the details of complaint
    Then verify User clicks on reset button
