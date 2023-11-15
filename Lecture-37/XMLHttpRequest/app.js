// 1. XMLHttpRequest
// constructor function

let req = new XMLHttpRequest();
console.log(req)
// open method
// request open karna==connection banana
req.open('GET','https://api.tvmaze.com/search/shows?q=girls')
req.send(); // actually me request bhejre hai


req.onerror=function(){
    console.log('error')
}
req.onload= function(response){
    console.log(this);
    console.log(this.response);

}