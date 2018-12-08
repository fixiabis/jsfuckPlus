# jsfuck+

DEMO: [https://fixiabis.github.io/jsfuckPlus]
4CJF: [https://fixiabis.github.io/jsfuckPlus/4cjf]

```js
_    === window // global in node
$    //  function param1 (code style)

__   //  function scope1 (code style)
_$   === "toString" 
$_   === Function 
$$   //  function param2 (code style)

___  //  function scope2 (code style)
__$  === String.fromCharCode 
_$_  === "constructor" 
_$$  === "toUpperCase" 
$__  === eval 
$_$  //  new, typeof, instanceof
$$_  //  while, for...in, for...of
$$$  //  function param3 (code style)
```

## var

```js
/* original */
var a = 12;
/* rewrite */
_.a = 12;
/* fuckify */
_[(+{} + [])[-~[]]] = +([] + (-~[]) + (-~-~[]));
```

## let

```js
/* original */
{
    let b = 56;
}
/* rewrite */
(__ => {
    __.b = 56;
})({});
/* fuckify */
(__ => {
    __[([] + {})[-~-~[]]] = +([] + (-~-~-~-~-~[]) + (-~-~-~-~-~-~[]));
})({});
```

## const

```js
/* original */
{
    const c = 72;
}
/* rewrite */
(__ => {
    Object.defineProperty(_, "c", {
        ["value"]: 72,
        ["writable"]: false
    });
})({});
/* fuckify */
(__ => {
    ({})[_$_][
        ([][[]] + [])[-~-~[]] +
        (!![] + [])[-~-~-~[]] +
        (![] + [])[+[]] +
        ([][[]] + [])[-~-~-~-~-~[]] +
        ([][[]] + [])[-~[]] +
        (!![] + [])[-~-~-~[]] +
        (_$$)[-~-~-~[]][_$$]() +
        (!![] + [])[-~[]] +
        ([] + {})[-~[]] +
        (_$$)[-~-~-~[]] +
        (!![] + [])[-~-~-~[]] +
        (!![] + [])[-~[]] +
        (!![] + [])[+[]] +
        (-~[] / [] + [])[-~-~-~-~-~-~-~[]]
    ](_, ([] + {})[-~-~-~-~-~[]], {
        [
            __$(+([] + -~[] + -~[] + -~-~-~-~-~-~-~-~[])) +
            (+{} + [])[-~[]] +
            (![] + [])[-~-~[]] +
            (!![] + [])[-~-~[]] +
            (!![] + [])[-~-~-~[]]
        ]: +([] + (-~-~-~-~-~-~-~[]) + (-~-~[])),
        [
            __$(+([] + -~[] + -~[] + -~-~-~-~-~-~-~-~-~[])) +
            (!![] + [])[-~[]] +
            ([][[]] + [])[-~-~-~-~-~[]] +
            (!![] + [])[+[]] +
            (+{} + [])[-~[]] +
            ([] + {})[-~-~[]] +
            (![] + [])[-~-~[]] +
            (!![] + [])[-~-~-~[]]
        ]: ![]
    });
})({});
```

## function

```js
/* original */
function a(b) {
    var c = 84;
    return c + b;
}
/* rewrite */
_.a = ($) => (__ =>
    ((() => {
        __.c = 84;
    })(), __.c + $)
)({});
/* fuckify */
_[(+{} + [])[-~[]]] = ($) => (__ =>
    ((() => {
        __[([] + {})[-~-~-~-~-~[]]] = +(
            [] + (-~-~-~-~-~-~-~-~[]) + (-~-~-~-~[])
        );
    })(), __[([] + {})[-~-~-~-~-~[]]] + $)
)({});
```

## if

```js
/* original */
if (true) a();
/* rewrite */
true && _.a();
/* fuckify */
!![] && _[(+{} + [])[-~[]]]();
```

## if...else

```js
/* original */
if (true) a();
else b();
/* rewrite */
true
    ? _.a()
    : _.b();
/* fuckify */
!![]
    ? _[(+{} + [])[-~[]]]()
    : _[([] + {})[-~-~[]]]();
```

## while

```js
/* original */
while (true) a();
/* rewrite */
$$_(() => true)(_.a);
/* fuckify */
$$_(() => !![])(_[(+{} + [])[-~[]]]); 
```

## for

```js
/* original */
for (var i = 0; i < 5; i++) a(i);
/* rewrite */
_.i = 0; $$_(() => _.i < 5)(() => (
    _.a(_.i), __.i++
));
/* fuckify */
_[([][[]] + [])[-~-~-~-~-~[]]] = +([] + (+[]));
$$_(() => _[([][[]] + [])[-~-~-~-~-~[]]] < +([] + (-~-~-~-~-~[])))(() => ( 
    _[(+{} + [])[-~[]]](_[([][[]] + [])[-~-~-~-~-~[]]]), 
    __[([][[]] + [])[-~-~-~-~-~[]]]++
));
```

## for...in

```js
/* original */
for (var i in obj) a(obj[i]);
/* rewrite */
$$_(_.obj)(($, $$) => _.a($$));
/* fuckify */
$$_(_[([] + {})[-~[]] + ([] + {})[-~-~[]] + ([] + {})[-~-~-~[]]])( 
    ($, $$) => _[(+{} + [])[-~[]]]($$) 
);
```

## for...of

```js
/* original */
for (var i of arr) a(i);
/* rewrite */
$$_(_.arr)($ => a($));
/* fuckify */
$$_(_[(+{} + [])[-~[]] + (!![] + [])[-~[]] + (!![] + [])[-~[]]])($ => a($));
```

## switch

```js
/* original */
switch (a) {
    case 1: b(); break; 
    case 2: b(); break; 
    case 3: b(); break; 
}
/* rewrite */
({ 
    [1]: _.b 
    [2]: _.b 
    [3]: _.b 
})[_.a]();
/* fuckify */
({ 
    [+([] + (-~[]))]: _[([] + {})[-~-~[]]] 
    [+([] + (-~-~[]))]: _[([] + {})[-~-~[]]] 
    [+([] + (-~-~-~[]))]: _[([] + {})[-~-~[]]] 
})[_[(+{} + [])[-~[]]]]();
```

## try...catch

```js
/* original */
try { a() } catch (b) { c(b) }
/* rewrite */
$$_(_.a, _.c);
/* fuckify */
$$_(_[(+{} + [])[-~[]]], _[([] + {})[-~-~-~-~-~[]]]);
```

## typeof

```js
/* original */
typeof a;
/* rewrite */
$_$()(_.a);
/* fuckify */
$_$()(_[(+{} + [])[-~[]]]);
```

## instanceof

```js
/* original */
a instanceof Array;
/* rewrite */
$_$()(_.a, Array);
/* fuckify */
$_$()(_[(+{} + [])[-~[]]], [][_$_]);
```

## new

```js
/* original */
new A(1, 2);
/* rewrite */
$_$(_.A)(1, 2);
/* fuckify */
$_$(_[(+{} + [])[-~[]][_$$]()])(+([] + (-~[])), +([] + (-~-~[])));
```