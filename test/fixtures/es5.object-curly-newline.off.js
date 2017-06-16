'use strict';

let a = {};
let b = {foo: 1};
let c = {
    foo: 1
};
let d = {
    foo: 1, bar: 2
};
let e = {
    foo: 1,
    bar: 2
};
let f = {foo: function() {dosomething();}};
let g = {
    foo: function() {
        dosomething();
    }
};

let {} = obj;
let {h} = obj;
let {i, j} = obj;
let {
    k, l
} = obj;
let {
    m,
    n
} = obj;
let {o = function() {dosomething();}} = obj;
let {
    p = function() {
        dosomething();
    }
} = obj;
