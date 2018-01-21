var foo = function baz(x){
    console.log('This will execute with the value: ', x);
};

foo(1); //works

baz(1); //This will throw an error :O