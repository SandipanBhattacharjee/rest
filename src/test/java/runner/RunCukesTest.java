package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"src/test/resources/features/localservice/"},glue={"glue"},
plugin ={"html:target/site/cucumber-pretty",
"rerun:target/rerun.txt",
"json:target/cucumber1.json"})
public class RunCukesTest{}