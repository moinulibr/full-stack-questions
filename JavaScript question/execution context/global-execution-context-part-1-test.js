let name   = 'Tom';

function sayName (){
    console.log(this.name);
}


//------------------------------------------------------------

    console.log('starting execution context - global execution context');
    let a = 5; //creating phase of global execution context
    function testMe() {
        console.log("Inside testMe function - global execution context");
        var b = 10;
        var users = {
            name : 'John',
            age : 30,
            country: "Bangladesh"
        }
        function testAgainInsideOfTestMe(){
            console.log("Inside testAgainInsideOfTestMe function - global execution context");
            console.log("existing testAgainInsideOfTestMe function - global execution context");
        }
        testAgainInsideOfTestMe();
        console.log("existing testMe function - global execution context");
    }

    testMe();//creating phase of global execution context
    console.log("existing global execution context");