Feature: I am able to hit local service.

@get
Scenario Outline: Testing all get operations in local service
Given I am able to hit the local service with '<appendString>' for get
When I process the request
Then I get the correct '<statusCode>'

Examples:
|appendString|statusCode|
|posts|200|
|comments|200|
|profile|200|