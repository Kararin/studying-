document.addEventListener('DOMContentLoaded', () => {
    let b = document.getElementById('leak'),
        c = [];

    b.addEventListener('click', function () {
        c.push(create('fff')());
        console.log(c);
    });
});

function test () {
    var obj = document.getElementById("element");
    obj.onclick=function innerFunction()
    {
    // alert("Hi! I have avoided the leak");
    // Some logic here
    };
    obj.bigString=new Array(1000).join(new Array(2000).join("XXXXX"));
    obj = null; //This breaks the circular reference
    
}


let create = function (name) {
    let long = new Array(2000000000);

    return function () {
        console.log(name);
        return long;
    }
}