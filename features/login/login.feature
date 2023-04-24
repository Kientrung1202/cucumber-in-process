Feature: Login

  Scenario Outline: User Login
    When user login with username="<username>" and password="<password>"
    Then I should get response "<response>"
  Examples: 
    | username | password | response |
    | admin    | admin    | ok       |
    | admin    | admin1   | wrong    |
    | admin    | admin2   | wrong    |
