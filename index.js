
function receivesAFunction(spy){
    spy();
}
function returnsANamedFunction(){
    return function namedFunc() {
        namedFunc();
}
}
function returnsAnAnonymousFunction(){
    return function(){
        anonymousFunc();
}
}