Feature: I want to perform the other operations like put,patch and delete

@putOperation
Scenario Outline:
Given I create proper put request with '<id>' and '<body>' and '<postId>'
When I hit the service with proper url and put operation with '<id>'
Then I verify correct '<id>' and '<body>'

Examples:
|id|body|postId|
|2|modified by put|2|

@patchOperation
Scenario Outline:
Given I create proper patch request with '<body>' and '<id>'
When I hit the service with proper url and patch operation for '<id>'
Then I verify correct '<id>' and '<body>' after patch operation
Examples:
|id|body|postId|
|3|modified by patch|3|

@deleteOperation
Scenario Outline:
#Given I create proper delete request with '<id>'
When I hit the service with proper url and delete operation with '<id>'
Then I verify the operation is successful for '<id>'
Examples:
|id|
|1|
