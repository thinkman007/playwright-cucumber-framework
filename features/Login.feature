Feature: Login Functionality

  @testLogin
  Scenario: Successful Login
    Given User navigates to login page
    When User enters valid username and password
    Then User should be logged in successfully
  
  @testOrder
  Scenario: Successful order placement
    Given User navigates to login page
    When User enters valid username and password
    Then User should be logged in successfully
    Then user add a product to the cart
    #Then user navigaes to cart page and clicks on checkout button
    #Then user enters shipping details and clicks on place order button


    