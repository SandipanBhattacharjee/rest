package glue;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import steps.OperationSteps;

/**
 * To run this both put and patch from mvn command which can be used in jenkins we use
 * clean test -Dcucumber.options="--tags @patchOperation,@putOperation" 
 * based on tags.
 * @author Sandipan
 *
 */
public class OtherOperations {
	
	OperationSteps steps=new OperationSteps();
	
	@Given("^I create proper put request with '(\\d+)' and '(.*)' and '(\\d+)'$")
	public void givenICreateProperPutRequest(int id, String body,int postId){
	steps.put_CreatePutRequest(id, body, postId);	
	}
	
	@When("^I hit the service with proper url and put operation with '(\\d+)'$")
	public void whenIHitServiceWithProperUrl_Put(int id){
		steps.put_HitServiceWithPutRequest(id);
	}
	
	@Then("^I verify correct '(\\d+)' and '(.*)'$")
	public void iVerifyCorrectResponse_put(int id, String body){
		steps.put_VerifyResultOfOperation(id,body);
	}
	
	//----------------- patch --------------------------------------
	@Given("^I create proper patch request with '(.*)' and '(\\d+)'$")
	public void createProperRequest_patch(String body, int id){
		steps.patch_CreatePatchRequest(body, id);
	}
	
	@When("^I hit the service with proper url and patch operation for '(\\d+)'$")
	public void iHitServiceWithProperUrl_Patch(int id){
		steps.patch_HitServiceWithPatchRequest(id);	
	}
	
	@Then("^I verify correct '(\\d+)' and '(.*)' after patch operation")
	public void iVerifyCorrectResult_Patch(int id,String body){
		steps.patch_VerifyResultOfOperation(id, body);
	}
	
	//------------------- delete ----------------------
//	@Given("^I create proper delete request with '(\\d+)'$")
//	public void givenICreateProperRequest_Delete(int id){
//		
//	}
	
	@When("^I hit the service with proper url and delete operation with '(\\d+)'$")
	public void IHitTheServiceWithProperUrl_Delete(int id){
		steps.delete_HitServiceWithDeleteRequest(id);
	}
	
	@Then("^I verify the operation is successful for '(\\d+)'$")
	public void iVerifyDeleteIsSuccess_Delete(int id){
		steps.delete_VerifyResultOfOperation();
	}
}
