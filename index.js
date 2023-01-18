

function receivesAFunction(callback){
    callback()
}
receivesAFunction(()=>'hello')

function returnsANamedFunction(){
    return function hello(){
        return 'hello'
    }
}

function returnsAnAnonymousFunction(){
    return ()=>'hello'
}






