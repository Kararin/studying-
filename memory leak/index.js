document.addEventListener('DOMContentLoaded', () => {
    var obj = document.getElementById("element");
    obj.onclick=function innerFunction()
    {
    // alert("Hi! I have avoided the leak");
    // Some logic here
    };
    obj.bigString=new Array(1000).join(new Array(2000).join("XXXXX"));
    obj = null; //This breaks the circular reference
});