# rest
A rest api test project using rest assured, cucumber and junit
These are very simple tests , but scalable none the less
the service was hosted locally using 
https://github.com/typicode/json-server

I have used tags extensively in a file and we can use 
clean test -Dcucumber.options="--tags @patchOperation,@putOperation in maven to control the execution.

tests are data driven through Examples: 
but data tables can also be used in their place.
