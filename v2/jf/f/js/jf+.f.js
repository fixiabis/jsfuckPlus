_$_ = (
    ([] + {})[-~-~-~-~-~[]] +
    ([] + {})[-~[]] +
    ([][[]] + [])[-~[]] +
    (![] + [])[-~-~-~[]] +
    (!![] + [])[+[]] +
    (!![] + [])[-~[]] +
    (!![] + [])[-~-~[]] +
    ([] + {})[-~-~-~-~-~[]] +
    (!![] + [])[+[]] +
    ([] + {})[-~[]] +
    (!![] + [])[-~[]]
);

$_ = ({})[_$_][_$_];

_$ = (
    (!![] + [])[+[]] +
    ([] + {})[-~[]] +
    ([] + [])[_$_][
    ([][[]] + [])[-~[]] +
    (![] + [])[-~[]] +
    ((+[])[_$_] + [])[-~[] + [] + -~[]] +
    (!![] + [])[-~-~-~[]]
    ]
);

_ = $_(
    (!![] + [])[-~[]] +
    (!![] + [])[-~-~-~[]] +
    (!![] + [])[+[]] +
    (!![] + [])[-~-~[]] +
    (!![] + [])[-~[]] +
    ([][[]] + [])[-~[]] +
    ([] + {})[-~-~-~-~-~-~-~[]] +
    (!![] + [])[+[]] +
    ((-~-~[] << -~-~-~[]) - ~[])[_$]((-~-~[] << -~-~-~[]) - ~-~[]) +
    ([][[]] + [])[-~-~-~-~-~[]] +
    (![] + [])[-~-~-~[]]
)();

$__ = _[
    (!![] + [])[-~-~-~[]] +
    ($_ + [])[+(-~-~[] + [] + -~-~-~-~-~-~-~[])] +
    (![] + [])[-~[]] +
    (![] + [])[-~-~[]]
];

_$$ = (
    (!![] + [])[-~[]] +
    (!![] + [])[-~-~-~[]] +
    ({})[_$][
        ([] + {})[-~-~-~-~-~[]] +
        (![] + [])[-~[]] +
        (![] + [])[-~-~[]] +
        (![] + [])[-~-~[]]
    ]()[-~-~[] << -~-~[]] +
    (+(-~-~[] + [] + -~-~-~-~-~[]))[_$](+(-~-~[] + [] + -~-~-~-~-~-~[])) +
    (+(-~-~[] + [] + -~-~-~-~-~[]))[_$](+(-~-~[] + [] + -~-~-~-~-~-~[])) +
    (!![] + [])[-~-~-~[]] +
    (!![] + [])[-~[]] +
    _[
        (!![] + [])[-~-~-~[]] +
        (![] + [])[-~-~-~[]] +
        ([] + {})[-~-~-~-~-~[]] +
        (![] + [])[-~[]] +
        (+(-~-~[] + [] + -~-~-~-~-~[]))[_$](+(-~-~[] + [] + -~-~-~-~-~-~[])) +
        (!![] + [])[-~-~-~[]]
    ](/\\/)[-~-~-~[]] +
    (![] + [])[-~[]] +
    (![] + [])[-~-~-~[]] +
    (!![] + [])[-~-~-~[]]
);

__$ = (
    ([] + [])[_$_][
    (![] + [])[+[]] +
    (!![] + [])[-~[]] +
    ([] + {})[-~[]] +
    ((+[])[_$_] + [])[+(-~[] + [] + (-~[]))] +
    _$$[-~-~-~-~-~-~-~[]] +
    (+(-~[] + [] + (-~-~-~-~-~-~-~[])))[_$](+(-~[] + [] + (-~-~-~-~-~-~-~-~[]))) +
    (![] + [])[-~[]] +
    (!![] + [])[-~[]] +
    _$$[-~-~-~-~-~-~-~[]] +
    ([] + {})[-~[]] +
    ([][[]] + [])[-~-~[]] +
    (!![] + [])[-~-~-~[]]
    ]
);

$_$ = (function (__) {
    __ = function ($, $$, $$$) {
        $$ = [].map.bind($$)(function ($) { return $ });
        $$$ = $$.map(function ($, $$) { return "$" + $$ });
        return $_.apply(
            [][[]],
            ["$"].concat($$$).concat(
                "return new $(" + $$$.join(",") + ")"
            )
        ).apply([][[]], [$].concat($$))
    };

    return function ($) {
        return function ($$, $$$) {
            return !$
                ? !$$$
                    ? typeof $$
                    : $$ instanceof $$$
                : __($, arguments)
        }
    }
})();

$$_ = (function (__) {
    __[0] = function ($, $$) { while ($()) $$() };
    __[1] = function ($, $$) { try { $() } catch ($) { $$($) } };

    return function ($, $$) {
        return $ && $$
            ? __[1]($, $$)
            : function ($$) {
                return $_$()($, Array)
                    ? $.forEach(function ($, $$$) { $$($, $$$) })
                    : $_$()($, Function)
                        ? __[0]($, $$)
                        : Object.keys($).forEach(function ($$$) {
                            $$($$$, $[$$$])
                        })
            }
    }
})({});