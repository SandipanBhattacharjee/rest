package steps;

import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.path.json.JsonPath;
import com.jayway.restassured.response.ExtractableResponse;
import com.jayway.restassured.response.Response;

import model.Comments;
import model.Posts;

import static com.jayway.restassured.RestAssured.*;

import org.junit.Assert;

/**
 * To create local rest server I used typicode json server
 * https://github.com/typicode/json-server
 * and the operations are based on db.json.
 * start with json-server --watch db.json
 * @author Sandipan
 *
 */
public class OperationSteps {

	private String baseUrl="http://localhost:3000";
	private Response response;
	private int statusCode;
	private String url;
	private Comments comment;

	public void hitlocalWebServiceWithUrl(String appendString){
		url=baseUrl+"/"+appendString;
		response=given().get(url);
	}

	public void processGetRequest(){
		statusCode=response.getStatusCode();
	}

	public void verifyGetRequest(int expectedStatusCode){
		Assert.assertTrue(statusCode==expectedStatusCode);
	}

	//-------------------------------- POST ---------------------------------
	public void createPostsUsingPostOperations(int id, String title, String author){
		Posts postObject=new Posts();
		postObject.setId(id);
		postObject.setTitle(title);
		postObject.setAuthor(author);
		response=given().when().contentType(ContentType.JSON).body(postObject).post(url);
	}

	public void verifyPostCorrectlyCreated(int id, String title, String author){
		Assert.assertTrue((getExp_Str("title", processResponse(response)).equals(title)));
		Assert.assertTrue((get_Exp_Int("id", processResponse(response)))==id);
		Assert.assertTrue((getExp_Str("author", processResponse(response)).equals(author)));
	}

	//------------------------------- PUT ------------------------------------

	public void put_CreatePutRequest(int id, String body, int postId){
		comment=new Comments();
		comment.setId(id);
		comment.setBody(body);
		comment.setPostId(postId);
	}

	public void put_HitServiceWithPutRequest(int id){
		String putUrl=baseUrl+"/comments/"+id;
		response=given().when().contentType(ContentType.JSON).body(comment).put(putUrl);
		System.out.println("put respons++ "+response.getBody().asString() );
	}

	public void put_VerifyResultOfOperation(int id, String body){
		Assert.assertTrue((getExp_Str("body", processResponse(response)).equals(body)));
		Assert.assertTrue((get_Exp_Int("id", processResponse(response)))==id);
	}

	//------------------------------------- patch -------------------------------------

	public void patch_CreatePatchRequest(String body, int id){
		//first get the initial comment response
		String patchUrl=baseUrl+"/comments/"+id;
		response=given().get(patchUrl);
		int postId=get_Exp_Int("postId",processResponse(response));
		comment=new Comments();
		comment.setPostId(postId);
		comment.setBody(body);
	}

	public void patch_HitServiceWithPatchRequest(int id){
		String patchUrl=baseUrl+"/comments/"+id;
		response=given().when().contentType(ContentType.JSON).body(comment).patch(patchUrl);
		System.out.println("patch respons++ "+response.getBody().asString() );
	}

	public void patch_VerifyResultOfOperation(int id, String body){
		Assert.assertTrue((getExp_Str("body", processResponse(response)).equals(body)));
		Assert.assertTrue((get_Exp_Int("id", processResponse(response)))==id);
	}

	//---------------------------- DELETE ----------------------------------


	public void delete_HitServiceWithDeleteRequest(int id){
		String deleteUrl=baseUrl+"/comments/"+id;
		response=given().when().contentType(ContentType.JSON).delete(deleteUrl);
		System.out.println("patch respons++ "+response.getBody().asString() );
	}

	public void delete_VerifyResultOfOperation(){
		Assert.assertTrue((response.getBody().asString()).equals("{}"));
	}
	
	
	
	//-------------------------------- utility can be moved to a different class ----------------------
	
	private JsonPath processResponse(Response responseToProcess){
		String responseBody=responseToProcess.getBody().asString();
		JsonPath jsonbody=new JsonPath(responseBody);
		return jsonbody;
	}
	
	private String getExp_Str(String queryString, JsonPath path){
		return path.getString(queryString);
		
	}
	
	private int get_Exp_Int(String queryParam,JsonPath path){
		return path.getInt(queryParam);
	}
}
