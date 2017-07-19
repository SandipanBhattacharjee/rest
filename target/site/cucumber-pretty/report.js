$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("localget.feature");
formatter.feature({
  "id": "i-am-able-to-hit-local-service.",
  "description": "",
  "name": "I am able to hit local service.",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "i-am-able-to-hit-local-service.;testing-all-get-operations-in-local-service",
  "tags": [
    {
      "name": "@get",
      "line": 3
    }
  ],
  "description": "",
  "name": "Testing all get operations in local service",
  "keyword": "Scenario Outline",
  "line": 4,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I am able to hit the local service with \u0027\u003cappendString\u003e\u0027 for get",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I process the request",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I get the correct \u0027\u003cstatusCode\u003e\u0027",
  "keyword": "Then ",
  "line": 7
});
formatter.examples({
  "id": "i-am-able-to-hit-local-service.;testing-all-get-operations-in-local-service;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 9,
  "rows": [
    {
      "id": "i-am-able-to-hit-local-service.;testing-all-get-operations-in-local-service;;1",
      "cells": [
        "appendString",
        "statusCode"
      ],
      "line": 10
    },
    {
      "id": "i-am-able-to-hit-local-service.;testing-all-get-operations-in-local-service;;2",
      "cells": [
        "posts",
        "200"
      ],
      "line": 11
    },
    {
      "id": "i-am-able-to-hit-local-service.;testing-all-get-operations-in-local-service;;3",
      "cells": [
        "comments",
        "200"
      ],
      "line": 12
    },
    {
      "id": "i-am-able-to-hit-local-service.;testing-all-get-operations-in-local-service;;4",
      "cells": [
        "profile",
        "200"
      ],
      "line": 13
    }
  ]
});
formatter.scenario({
  "id": "i-am-able-to-hit-local-service.;testing-all-get-operations-in-local-service;;2",
  "tags": [
    {
      "name": "@get",
      "line": 3
    }
  ],
  "description": "",
  "name": "Testing all get operations in local service",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "I am able to hit the local service with \u0027posts\u0027 for get",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I process the request",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I get the correct \u0027200\u0027",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 41
    }
  ],
  "location": "GetOperations.givenIHitTheService(String)"
});
formatter.result({
  "duration": 1561035156,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.whenIProcessReqeust()"
});
formatter.result({
  "duration": 71842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "GetOperations.thenIGetCorrectResponse(int)"
});
formatter.result({
  "duration": 2034991,
  "status": "passed"
});
formatter.scenario({
  "id": "i-am-able-to-hit-local-service.;testing-all-get-operations-in-local-service;;3",
  "tags": [
    {
      "name": "@get",
      "line": 3
    }
  ],
  "description": "",
  "name": "Testing all get operations in local service",
  "keyword": "Scenario Outline",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I am able to hit the local service with \u0027comments\u0027 for get",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I process the request",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I get the correct \u0027200\u0027",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 41
    }
  ],
  "location": "GetOperations.givenIHitTheService(String)"
});
formatter.result({
  "duration": 59970040,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.whenIProcessReqeust()"
});
formatter.result({
  "duration": 29968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "GetOperations.thenIGetCorrectResponse(int)"
});
formatter.result({
  "duration": 73484,
  "status": "passed"
});
formatter.scenario({
  "id": "i-am-able-to-hit-local-service.;testing-all-get-operations-in-local-service;;4",
  "tags": [
    {
      "name": "@get",
      "line": 3
    }
  ],
  "description": "",
  "name": "Testing all get operations in local service",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "I am able to hit the local service with \u0027profile\u0027 for get",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I process the request",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I get the correct \u0027200\u0027",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "profile",
      "offset": 41
    }
  ],
  "location": "GetOperations.givenIHitTheService(String)"
});
formatter.result({
  "duration": 64967406,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.whenIProcessReqeust()"
});
formatter.result({
  "duration": 28737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "GetOperations.thenIGetCorrectResponse(int)"
});
formatter.result({
  "duration": 66095,
  "status": "passed"
});
formatter.uri("otheroperations.feature");
formatter.feature({
  "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete",
  "description": "",
  "name": "I want to perform the other operations like put,patch and delete",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;",
  "tags": [
    {
      "name": "@putOperation",
      "line": 3
    }
  ],
  "description": "",
  "name": "",
  "keyword": "Scenario Outline",
  "line": 4,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I create proper put request with \u0027\u003cid\u003e\u0027 and \u0027\u003cbody\u003e\u0027 and \u0027\u003cpostId\u003e\u0027",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I hit the service with proper url and put operation with \u0027\u003cid\u003e\u0027",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I verify correct \u0027\u003cid\u003e\u0027 and \u0027\u003cbody\u003e\u0027",
  "keyword": "Then ",
  "line": 7
});
formatter.examples({
  "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 9,
  "rows": [
    {
      "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;;;1",
      "cells": [
        "id",
        "body",
        "postId"
      ],
      "line": 10
    },
    {
      "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;;;2",
      "cells": [
        "2",
        "modified by put",
        "2"
      ],
      "line": 11
    }
  ]
});
formatter.scenario({
  "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;;;2",
  "tags": [
    {
      "name": "@putOperation",
      "line": 3
    }
  ],
  "description": "",
  "name": "",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "I create proper put request with \u00272\u0027 and \u0027modified by put\u0027 and \u00272\u0027",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    2
  ]
});
formatter.step({
  "name": "I hit the service with proper url and put operation with \u00272\u0027",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I verify correct \u00272\u0027 and \u0027modified by put\u0027",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "modified by put",
      "offset": 42
    },
    {
      "val": "2",
      "offset": 64
    }
  ],
  "location": "OtherOperations.givenICreateProperPutRequest(int,String,int)"
});
formatter.result({
  "duration": 784520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 58
    }
  ],
  "location": "OtherOperations.whenIHitServiceWithProperUrl_Put(int)"
});
formatter.result({
  "duration": 319251786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    },
    {
      "val": "modified by put",
      "offset": 26
    }
  ],
  "location": "OtherOperations.iVerifyCorrectResponse_put(int,String)"
});
formatter.result({
  "duration": 408328315,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;",
  "tags": [
    {
      "name": "@patchOperation",
      "line": 13
    }
  ],
  "description": "",
  "name": "",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I create proper patch request with \u0027\u003cbody\u003e\u0027 and \u0027\u003cid\u003e\u0027",
  "keyword": "Given ",
  "line": 15
});
formatter.step({
  "name": "I hit the service with proper url and patch operation for \u0027\u003cid\u003e\u0027",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "I verify correct \u0027\u003cid\u003e\u0027 and \u0027\u003cbody\u003e\u0027 after patch operation",
  "keyword": "Then ",
  "line": 17
});
formatter.examples({
  "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 18,
  "rows": [
    {
      "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;;;1",
      "cells": [
        "id",
        "body",
        "postId"
      ],
      "line": 19
    },
    {
      "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;;;2",
      "cells": [
        "3",
        "modified by patch",
        "3"
      ],
      "line": 20
    }
  ]
});
formatter.scenario({
  "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;;;2",
  "tags": [
    {
      "name": "@patchOperation",
      "line": 13
    }
  ],
  "description": "",
  "name": "",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I create proper patch request with \u0027modified by patch\u0027 and \u00273\u0027",
  "keyword": "Given ",
  "line": 15,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "I hit the service with proper url and patch operation for \u00273\u0027",
  "keyword": "When ",
  "line": 16,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I verify correct \u00273\u0027 and \u0027modified by patch\u0027 after patch operation",
  "keyword": "Then ",
  "line": 17,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "modified by patch",
      "offset": 36
    },
    {
      "val": "3",
      "offset": 60
    }
  ],
  "location": "OtherOperations.createProperRequest_patch(String,int)"
});
formatter.result({
  "duration": 71822005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 59
    }
  ],
  "location": "OtherOperations.iHitServiceWithProperUrl_Patch(int)"
});
formatter.result({
  "duration": 58774580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    },
    {
      "val": "modified by patch",
      "offset": 26
    }
  ],
  "location": "OtherOperations.iVerifyCorrectResult_Patch(int,String)"
});
formatter.result({
  "duration": 24283597,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;",
  "tags": [
    {
      "name": "@deleteOperation",
      "line": 22
    }
  ],
  "description": "",
  "name": "",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I hit the service with proper url and delete operation with \u0027\u003cid\u003e\u0027",
  "keyword": "When ",
  "line": 25,
  "comments": [
    {
      "value": "#Given I create proper delete request with \u0027\u003cid\u003e\u0027",
      "line": 24
    }
  ]
});
formatter.step({
  "name": "I verify the operation is successful for \u0027\u003cid\u003e\u0027",
  "keyword": "Then ",
  "line": 26
});
formatter.examples({
  "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 27,
  "rows": [
    {
      "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;;;1",
      "cells": [
        "id"
      ],
      "line": 28
    },
    {
      "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;;;2",
      "cells": [
        "1"
      ],
      "line": 29
    }
  ]
});
formatter.scenario({
  "id": "i-want-to-perform-the-other-operations-like-put,patch-and-delete;;;2",
  "tags": [
    {
      "name": "@deleteOperation",
      "line": 22
    }
  ],
  "description": "",
  "name": "",
  "keyword": "Scenario Outline",
  "line": 29,
  "type": "scenario"
});
formatter.step({
  "name": "I hit the service with proper url and delete operation with \u00271\u0027",
  "keyword": "When ",
  "line": 25,
  "matchedColumns": [
    0
  ],
  "comments": [
    {
      "value": "#Given I create proper delete request with \u0027\u003cid\u003e\u0027",
      "line": 24
    }
  ]
});
formatter.step({
  "name": "I verify the operation is successful for \u00271\u0027",
  "keyword": "Then ",
  "line": 26,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 61
    }
  ],
  "location": "OtherOperations.IHitTheServiceWithProperUrl_Delete(int)"
});
formatter.result({
  "duration": 29702166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "OtherOperations.iVerifyDeleteIsSuccess_Delete(int)"
});
formatter.result({
  "duration": 442550,
  "status": "passed"
});
formatter.uri("postoperation.feature");
formatter.feature({
  "id": "i-want-to-test-local-post-features",
  "description": "",
  "name": "I want to test local post features",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "i-want-to-test-local-post-features;testing-post-request-for-posts",
  "tags": [
    {
      "name": "@post",
      "line": 3
    }
  ],
  "description": "",
  "name": "Testing post request for posts",
  "keyword": "Scenario Outline",
  "line": 4,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I am able to hit the local service with \u0027\u003cappendString\u003e\u0027 for post",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I produce correct request for post with \u0027\u003cid\u003e\u0027 and \u0027\u003ctitle\u003e\u0027 and \u0027\u003cauthor\u003e\u0027",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I get proper response with \u0027\u003cid\u003e\u0027 and \u0027\u003ctitle\u003e\u0027 and \u0027\u003cauthor\u003e\u0027",
  "keyword": "Then ",
  "line": 7
});
formatter.examples({
  "id": "i-want-to-test-local-post-features;testing-post-request-for-posts;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 8,
  "rows": [
    {
      "id": "i-want-to-test-local-post-features;testing-post-request-for-posts;;1",
      "cells": [
        "appendString",
        "id",
        "title",
        "author"
      ],
      "line": 9
    },
    {
      "id": "i-want-to-test-local-post-features;testing-post-request-for-posts;;2",
      "cells": [
        "posts",
        "4",
        "fourth post",
        "deloitte"
      ],
      "line": 10
    },
    {
      "id": "i-want-to-test-local-post-features;testing-post-request-for-posts;;3",
      "cells": [
        "posts",
        "5",
        "fifth post",
        "florida"
      ],
      "line": 11
    }
  ]
});
formatter.scenario({
  "id": "i-want-to-test-local-post-features;testing-post-request-for-posts;;2",
  "tags": [
    {
      "name": "@post",
      "line": 3
    }
  ],
  "description": "",
  "name": "Testing post request for posts",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "I am able to hit the local service with \u0027posts\u0027 for post",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I produce correct request for post with \u00274\u0027 and \u0027fourth post\u0027 and \u0027deloitte\u0027",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    1,
    2,
    3
  ]
});
formatter.step({
  "name": "I get proper response with \u00274\u0027 and \u0027fourth post\u0027 and \u0027deloitte\u0027",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    1,
    2,
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 41
    }
  ],
  "location": "PostOperations.givenIAmHittingLocalUsingPost(String)"
});
formatter.result({
  "duration": 23131653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 41
    },
    {
      "val": "fourth post",
      "offset": 49
    },
    {
      "val": "deloitte",
      "offset": 67
    }
  ],
  "location": "PostOperations.whenIProduceCorrectRequest(int,String,String)"
});
formatter.result({
  "duration": 54181584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 28
    },
    {
      "val": "fourth post",
      "offset": 36
    },
    {
      "val": "deloitte",
      "offset": 54
    }
  ],
  "location": "PostOperations.thenIvalidateResponse(int,String,String)"
});
formatter.result({
  "duration": 34721290,
  "status": "passed"
});
formatter.scenario({
  "id": "i-want-to-test-local-post-features;testing-post-request-for-posts;;3",
  "tags": [
    {
      "name": "@post",
      "line": 3
    }
  ],
  "description": "",
  "name": "Testing post request for posts",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "I am able to hit the local service with \u0027posts\u0027 for post",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I produce correct request for post with \u00275\u0027 and \u0027fifth post\u0027 and \u0027florida\u0027",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    1,
    2,
    3
  ]
});
formatter.step({
  "name": "I get proper response with \u00275\u0027 and \u0027fifth post\u0027 and \u0027florida\u0027",
  "keyword": "Then ",
  "line": 7,
  "matchedColumns": [
    1,
    2,
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 41
    }
  ],
  "location": "PostOperations.givenIAmHittingLocalUsingPost(String)"
});
formatter.result({
  "duration": 112916753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 41
    },
    {
      "val": "fifth post",
      "offset": 49
    },
    {
      "val": "florida",
      "offset": 66
    }
  ],
  "location": "PostOperations.whenIProduceCorrectRequest(int,String,String)"
});
formatter.result({
  "duration": 22959231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 28
    },
    {
      "val": "fifth post",
      "offset": 36
    },
    {
      "val": "florida",
      "offset": 53
    }
  ],
  "location": "PostOperations.thenIvalidateResponse(int,String,String)"
});
formatter.result({
  "duration": 26981592,
  "status": "passed"
});
});