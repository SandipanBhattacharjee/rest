package glue;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import steps.OperationSteps;

public class PostOperations {

	OperationSteps steps=new OperationSteps();
	
	@Given("^I am able to hit the local service with '(.*)' for post$")
	public void givenIAmHittingLocalUsingPost(String appendString){
		steps.hitlocalWebServiceWithUrl(appendString);
	}
	
	@When("^I produce correct request for post with '(\\d+)' and '(.*)' and '(.*)'")
	public void whenIProduceCorrectRequest(int id, String title,String author){
		steps.createPostsUsingPostOperations(id, title, author);
	}
	
	@Then("^I get proper response with '(\\d+)' and '(.*)' and '(.*)'$")
	public void thenIvalidateResponse(int id, String title, String author){
		steps.verifyPostCorrectlyCreated(id, title, author);
		
	}

}
