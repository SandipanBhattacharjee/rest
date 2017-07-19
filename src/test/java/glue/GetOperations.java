package glue;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import steps.OperationSteps;

public class GetOperations {

	OperationSteps steps=new OperationSteps();
	
	@Given("^I am able to hit the local service with '(.*)' for get$")
	public void givenIHitTheService(String appendString){
		steps.hitlocalWebServiceWithUrl(appendString);
	}
	
	@When("^I process the request$")
	public void whenIProcessReqeust(){
		steps.processGetRequest();
	}
	
	@Then("^I get the correct '(\\d+)'$")
	public void thenIGetCorrectResponse(int statusCode){
		steps.verifyGetRequest(statusCode);
	}
}
