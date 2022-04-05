
  function callback(){return ("You just have to nail the callback")}
  function receivesAFunction(callback){console.log (callback())
  }

function returnsANamedFunction(){
    return function name(){
        console.log("will this work?")
    }
}
function returnsAnAnonymousFunction(){
    return function(){console.log("ghosty")}
}