1. When I receive a request that matches (method, url) respond with [x]
2. I am expecting to receive a request(method, url)
    - I will respond with [x]
    - If I don't get called thats an error

    method e.g. get
    url e.g. API/ducks


Request Expectations vs Backend Definitions
1. Backend definitions allow you to define a fake backend for your application which doesn't assert if a particular request was made or not, it just returns a trained response if a request is made. The test will pass whether or not the request gets made during testing.

2. Request expectations provide a way to make assertions about requests made by the application and to define responses for those requests. The test will fail if the expected requests are not made or they are made in the wrong order.


                                Request expectations	              Backend definitions
Syntax	                        .expect(...).respond(...)	          .when(...).respond(...)
Typical usage	strict            unit tests	                        loose (black-box) unit testing
Fulfills multiple requests	    NO	                                YES
Order of requests matters	      YES	                                NO
Request required	              YES	                                NO
Response required	optional      (see below)	                        YES
