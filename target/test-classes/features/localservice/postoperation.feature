Feature: I want to test local post features

@post
Scenario Outline: Testing post request for posts
Given I am able to hit the local service with '<appendString>' for post
When I produce correct request for post with '<id>' and '<title>' and '<author>'
Then I get proper response with '<id>' and '<title>' and '<author>'
Examples:
|appendString|id|title|author|
|posts|4|fourth post|deloitte|
|posts|5|fifth post|florida|

