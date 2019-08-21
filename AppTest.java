package RestAssured;
  
import org.junit.Test;
import static org.junit.Assert.*;
import java.util.Objects; 
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.path.json.JsonPath;
import static com.jayway.restassured.RestAssured.given;
import java.net.URISyntaxException;
 

/**
 * Unit test for simple App.
 */
public class AppTest
{
    @Test
    public void getMessage(){
    String s=given()
        .accept(ContentType.JSON)
        .when()
        .get("http://localhost:8082/TrainingProject_Feb19-1.0/api/trainingInfo")
        .thenReturn()
        .asString();
        System.out.println("welcome "+s);
    assertEquals("Welcome to resful web service",s);    
    }
    @Test
    public void testTrainingData() throws AssertionError, URISyntaxException  {
         Training res[] = given()        
        .accept(ContentType.JSON)
        .when()
        .get("http://localhost:8082/TrainingProject_Feb19-1.0/api/trainingInfo/trgData")
        .getBody()
        .as(Training[].class);
        Training trg[]=new Training[6];
        trg[0]=new Training(22,"Java");
        trg[1]=new Training(23,"JQuery");
        trg[2]=new Training(27,"protractor");
        trg[3]=new Training(30,"RestAssured");
        trg[4]=new Training(27,"protractor");
        trg[5]=new Training(28,"jasmine test");      
        assertArrayEquals(trg, res);
}
@Test
public void testTrainingData_StatusCode() throws AssertionError, URISyntaxException  {
    given()        
    .accept(ContentType.JSON)
    .when()
    .get("http://localhost:8082/TrainingProject_Feb19-1.0/api/trainingInfo/trgData")
     .then()
     .assertThat()
     .statusCode(200);
    }
@Test
public void testEmployeeById() throws AssertionError{
 String res=given()
      .accept(ContentType.JSON)
      .when()
      .get("http://localhost:8082/SampleProNov18-1.0/api/training/dataFetch")
       .thenReturn()          
       .asString();
  JsonPath jp=new JsonPath(res);
  System.out.println("By id:"+res);
  System.out.println(jp.toString());
  assertEquals(22,jp.getInt(22));
  assertEquals("Angular",jp.getString("Angular"));
   
  }
@Test
public void getPostMessage(){
String s=given()
    .accept(ContentType.JSON)
    .contentType("application/json")
    .body("{\"The data is posted using POST method")
    .when()
    .post("http://localhost:8082/SampleProNov18-1.0/api/training/postingdata")
    .thenReturn()
    .asString();
    System.out.println("aaaaaaaaaa"+s);
assertEquals("The data is posted using POST method",s);    
}
@Test
public void getPostInsert(){
String s=given()
    .accept(ContentType.JSON)
    .contentType("application/json")
    .body("{\"trgId\":\"98\",\"trgName\":\"Weblogic\"}")
    .when()
    .post("http://localhost:8082/TrainingProject_Feb19-1.0/api/trainingInfo/27/postInsert")
    .thenReturn()
    .asString();
    System.out.println("bbbbbbbbb"+s);
assertEquals("inserted",s);    
}
 }
class Training{
    private int trgId;
    private String trgName;
    public Training(){}
    public Training(int trgId,String trgName){
        this.trgId=trgId;
        this.trgName=trgName;
    }
    
    public void setTrgId(int trgId){
        this.trgId=trgId;
    }
    public int getTrgId(){
        return trgId;
    }
     public void setTrgName(String trgName){
        this.trgName=trgName;
    }
    public String getTrgName(){
        return trgName;
    }
    public String toString(){
        return "Training id:"+trgId+"   Traininig Name:"+trgName;
    }
    @Override
    public final boolean equals(final Object obj) {
     Training trg=(Training)obj;
      if (Objects.equals(trgId,trg.trgId) && Objects.equals(trgName,trg.trgName)) {
        return true;
      }
      return false;
    }      
    @Override
    public final int hashCode() {
      return Objects.hash(trgId, trgName);
    }
}
}