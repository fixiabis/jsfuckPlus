$__$$ = (__ => (
    (() => {
        __[+[]] = [
            "_", "$",
            "[", "]",
            "(", ")",
            "{", "}",
            "~", "!",
            "+", "-",
            "*", "/",
            "&", "|",
            "<", ">",
            "?", ":",
            ",", ";",
            "%", "\\",
            " ", "\n",
            "\t"
        ];
        __[-~[]] = ($, $$) => (
            $$ = $[
                "split"
            ]("")[
                "map"
            ]($ => (
                (() => {
                    $ = $[
                        "charCodeAt"
                    ]()[
                        "toString"
                    ](16);

                    $$_([$, $, $, $])(_ => {
                        $[
                            "length"
                        ] < 4 && ($ = "0" + $);
                    });
                })()
                , $)
            )[
                "join"
            ]("")[
                "match"
            ](
                $_$(RegExp)(
                    "..",
                    "g"
                )
            ),
            $$ && $$["map"](
                $ => __[+[]][$]
            )[
                "join"
            ]("")
        );
    })(),
    __[-~[]]
))({});

$$_$_ = (__ => (
    (() => {
        __[+[]] = {
            ["_"]: 0, ["$"]: 1,
            ["["]: 2, ["]"]: 3,
            ["("]: 4, [")"]: 5,
            ["{"]: 6, ["}"]: 7,
            ["~"]: 8, ["!"]: 9,
            ["+"]: 10, ["-"]: 11,
            ["*"]: 12, ["/"]: 13,
            ["&"]: 14, ["|"]: 15,
            ["<"]: 16, [">"]: 17,
            ["?"]: 18, [":"]: 19,
            [","]: 20, [";"]: 21,
            ["%"]: 22, ["\\"]: 23,
            [" "]: 24, ["\n"]: 25,
            ["\t"]: 26
        };
        __[-~[]] = ($, $$, $$$) => (
            ($$ = ""),
            ($$$ = []),
            $[
                "split"
            ]("")[
                "map"
            ]($ => $$ += __[+[]][$])[
                "join"
            ](),
            ($ = (($$[
                "length"
            ] / 4) | []) - ~[]),
            $$_(() => $-- > 0)($ => (
                $$$[
                    "push"
                ]($$[
                    "substr"
                ](0, 4)),
                ($$ = $$[
                    "substr"
                ](4, $$[
                    "length"
                ]))
            )),
            $$$[$$$[
            "length"
            ] - 1][
            "length"
            ] === 0 &&
            $$$[
                "pop"
            ](),
            $$_([$, $])(_ => {
                $$$[$$$[
                    "length"
                ] - 1][
                    "length"
                ] < 4 &&
                    ($$$[$$$[
                        "length"
                    ] - 1] += "24")
            }),
            $$$[
                "map"
            ](
                $ => __$(_[
                    "parseInt"
                ]($, 16))
            )[
                "join"
            ]("")
        );
    })(),
    __[-~[]]
))({});