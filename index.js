const receivesAFunction = (cb) => cb();

const returnsANamedFunction = () => receivesAFunction;

const returnsAnAnonymousFunction = () => function(){};