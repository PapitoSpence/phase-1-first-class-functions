function receivesAFunction(Spy){
    let spy;
    Spy();
  }
  function returnsANamedFunction(){
    var fn;
    fn = function(){};
    return fn;
  }
  function returnsAnAnonymousFunction(fn){
    var fn;
    fn ===''
    fn = function(){};
    return fn;
  }