(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9415], {
        94184: function(e, t) {
            var n;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function a() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var o = typeof n;
                            if ("string" === o || "number" === o) e.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var u = a.apply(null, n);
                                    u && e.push(u)
                                }
                            } else if ("object" === o) {
                                if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                    e.push(n.toString());
                                    continue
                                }
                                for (var i in n) r.call(n, i) && n[i] && e.push(i)
                            }
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (a.default = a, e.exports = a) : void 0 === (n = function() {
                    return a
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        87042: function() {},
        89009: function(e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            function a(e) {
                var t = function(e, t) {
                    if ("object" !== r(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var a = n.call(e, t || "default");
                        if ("object" !== r(a)) return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === r(t) ? t : String(t)
            }

            function o(e, t, n) {
                return (t = a(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e, t) {
                if (e) {
                    if ("string" === typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
                }
            }

            function c(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || i(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o, u, i = [],
                            c = !0,
                            l = !1;
                        try {
                            if (o = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (i.push(r.value), i.length !== t); c = !0);
                        } catch (f) {
                            l = !0, a = f
                        } finally {
                            try {
                                if (!c && null != n.return && (u = n.return(), Object(u) !== u)) return
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || i(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            n.d(t, {
                Z: function() {
                    return J
                }
            });
            var f = n(67294),
                s = n(94184),
                v = n.n(s);

            function d(e) {
                return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, d(e)
            }
            var m = {},
                y = [];

            function b(e, t) {}

            function p(e, t) {}

            function E(e, t, n) {
                t || m[n] || (e(!1, n), m[n] = !0)
            }

            function h(e, t) {
                E(b, e, t)
            }
            h.preMessage = function(e) {
                y.push(e)
            }, h.resetWarned = function() {
                m = {}
            }, h.noteOnce = function(e, t) {
                E(p, e, t)
            };
            var g = h;
            var S = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = new Set;

                function a(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        u = r.has(e);
                    if (g(!u, "Warning: There may be circular references"), u) return !1;
                    if (e === t) return !0;
                    if (n && o > 1) return !1;
                    r.add(e);
                    var i = o + 1;
                    if (Array.isArray(e)) {
                        if (!Array.isArray(t) || e.length !== t.length) return !1;
                        for (var c = 0; c < e.length; c++)
                            if (!a(e[c], t[c], i)) return !1;
                        return !0
                    }
                    if (e && t && "object" === d(e) && "object" === d(t)) {
                        var l = Object.keys(e);
                        return l.length === Object.keys(t).length && l.every((function(n) {
                            return a(e[n], t[n], i)
                        }))
                    }
                    return !1
                }
                return a(e, t)
            };

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o, u, i = [],
                            c = !0,
                            l = !1;
                        try {
                            if (o = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (i.push(r.value), i.length !== t); c = !0);
                        } catch (f) {
                            l = !0, a = f
                        } finally {
                            try {
                                if (!c && null != n.return && (u = n.return(), Object(u) !== u)) return
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" === typeof e) return O(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? O(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function C(e) {
                var t = f.useRef();
                t.current = e;
                var n = f.useCallback((function() {
                    for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                    return null === (e = t.current) || void 0 === e ? void 0 : e.call.apply(e, [t].concat(r))
                }), []);
                return n
            }
            var N = "undefined" !== typeof window && window.document && window.document.createElement ? f.useLayoutEffect : f.useEffect,
                A = function(e, t) {
                    var n = f.useRef(!0);
                    N((function() {
                        return e(n.current)
                    }), t), N((function() {
                        return n.current = !1,
                            function() {
                                n.current = !0
                            }
                    }), [])
                },
                x = function(e, t) {
                    A((function(t) {
                        if (!t) return e()
                    }), t)
                };

            function I(e) {
                var t = f.useRef(!1),
                    n = M(f.useState(e), 2),
                    r = n[0],
                    a = n[1];
                return f.useEffect((function() {
                    return t.current = !1,
                        function() {
                            t.current = !0
                        }
                }), []), [r, function(e, n) {
                    n && t.current || a(e)
                }]
            }

            function T(e) {
                return void 0 !== e
            }

            function _() {
                return _ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, _.apply(this, arguments)
            }

            function R(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(n), !0).forEach((function(t) {
                        o(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var P = {
                    MAC_ENTER: 3,
                    BACKSPACE: 8,
                    TAB: 9,
                    NUM_CENTER: 12,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    PAUSE: 19,
                    CAPS_LOCK: 20,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    PRINT_SCREEN: 44,
                    INSERT: 45,
                    DELETE: 46,
                    ZERO: 48,
                    ONE: 49,
                    TWO: 50,
                    THREE: 51,
                    FOUR: 52,
                    FIVE: 53,
                    SIX: 54,
                    SEVEN: 55,
                    EIGHT: 56,
                    NINE: 57,
                    QUESTION_MARK: 63,
                    A: 65,
                    B: 66,
                    C: 67,
                    D: 68,
                    E: 69,
                    F: 70,
                    G: 71,
                    H: 72,
                    I: 73,
                    J: 74,
                    K: 75,
                    L: 76,
                    M: 77,
                    N: 78,
                    O: 79,
                    P: 80,
                    Q: 81,
                    R: 82,
                    S: 83,
                    T: 84,
                    U: 85,
                    V: 86,
                    W: 87,
                    X: 88,
                    Y: 89,
                    Z: 90,
                    META: 91,
                    WIN_KEY_RIGHT: 92,
                    CONTEXT_MENU: 93,
                    NUM_ZERO: 96,
                    NUM_ONE: 97,
                    NUM_TWO: 98,
                    NUM_THREE: 99,
                    NUM_FOUR: 100,
                    NUM_FIVE: 101,
                    NUM_SIX: 102,
                    NUM_SEVEN: 103,
                    NUM_EIGHT: 104,
                    NUM_NINE: 105,
                    NUM_MULTIPLY: 106,
                    NUM_PLUS: 107,
                    NUM_MINUS: 109,
                    NUM_PERIOD: 110,
                    NUM_DIVISION: 111,
                    F1: 112,
                    F2: 113,
                    F3: 114,
                    F4: 115,
                    F5: 116,
                    F6: 117,
                    F7: 118,
                    F8: 119,
                    F9: 120,
                    F10: 121,
                    F11: 122,
                    F12: 123,
                    NUMLOCK: 144,
                    SEMICOLON: 186,
                    DASH: 189,
                    EQUALS: 187,
                    COMMA: 188,
                    PERIOD: 190,
                    SLASH: 191,
                    APOSTROPHE: 192,
                    SINGLE_QUOTE: 222,
                    OPEN_SQUARE_BRACKET: 219,
                    BACKSLASH: 220,
                    CLOSE_SQUARE_BRACKET: 221,
                    WIN_KEY: 224,
                    MAC_FF_META: 224,
                    WIN_IME: 229,
                    isTextModifyingKeyEvent: function(e) {
                        var t = e.keyCode;
                        if (e.altKey && !e.ctrlKey || e.metaKey || t >= P.F1 && t <= P.F12) return !1;
                        switch (t) {
                            case P.ALT:
                            case P.CAPS_LOCK:
                            case P.CONTEXT_MENU:
                            case P.CTRL:
                            case P.DOWN:
                            case P.END:
                            case P.ESC:
                            case P.HOME:
                            case P.INSERT:
                            case P.LEFT:
                            case P.MAC_FF_META:
                            case P.META:
                            case P.NUMLOCK:
                            case P.NUM_CENTER:
                            case P.PAGE_DOWN:
                            case P.PAGE_UP:
                            case P.PAUSE:
                            case P.PRINT_SCREEN:
                            case P.RIGHT:
                            case P.SHIFT:
                            case P.UP:
                            case P.WIN_KEY:
                            case P.WIN_KEY_RIGHT:
                                return !1;
                            default:
                                return !0
                        }
                    },
                    isCharacterKey: function(e) {
                        if (e >= P.ZERO && e <= P.NINE) return !0;
                        if (e >= P.NUM_ZERO && e <= P.NUM_MULTIPLY) return !0;
                        if (e >= P.A && e <= P.Z) return !0;
                        if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e) return !0;
                        switch (e) {
                            case P.SPACE:
                            case P.QUESTION_MARK:
                            case P.NUM_PLUS:
                            case P.NUM_MINUS:
                            case P.NUM_PERIOD:
                            case P.NUM_DIVISION:
                            case P.SEMICOLON:
                            case P.DASH:
                            case P.EQUALS:
                            case P.COMMA:
                            case P.PERIOD:
                            case P.SLASH:
                            case P.APOSTROPHE:
                            case P.SINGLE_QUOTE:
                            case P.OPEN_SQUARE_BRACKET:
                            case P.BACKSLASH:
                            case P.CLOSE_SQUARE_BRACKET:
                                return !0;
                            default:
                                return !1
                        }
                    }
                },
                U = P,
                L = f.createContext({
                    min: 0,
                    max: 0,
                    direction: "ltr",
                    step: 1,
                    includedStart: 0,
                    includedEnd: 0,
                    tabIndex: 0,
                    keyboard: !0
                });

            function F(e, t, n) {
                return (e - t) / (n - t)
            }

            function j(e, t, n, r) {
                var a = F(t, n, r),
                    o = {};
                switch (e) {
                    case "rtl":
                        o.right = "".concat(100 * a, "%"), o.transform = "translateX(50%)";
                        break;
                    case "btt":
                        o.bottom = "".concat(100 * a, "%"), o.transform = "translateY(50%)";
                        break;
                    case "ttb":
                        o.top = "".concat(100 * a, "%"), o.transform = "translateY(-50%)";
                        break;
                    default:
                        o.left = "".concat(100 * a, "%"), o.transform = "translateX(-50%)"
                }
                return o
            }

            function H(e, t) {
                return Array.isArray(e) ? e[t] : e
            }
            var D = ["prefixCls", "value", "valueIndex", "onStartMove", "style", "render", "dragging", "onOffsetChange"];
            var K = f.forwardRef((function(e, t) {
                    var n, r, a = e.prefixCls,
                        u = e.value,
                        i = e.valueIndex,
                        c = e.onStartMove,
                        l = e.style,
                        s = e.render,
                        d = e.dragging,
                        m = e.onOffsetChange,
                        y = R(e, D),
                        b = f.useContext(L),
                        p = b.min,
                        E = b.max,
                        h = b.direction,
                        g = b.disabled,
                        S = b.keyboard,
                        O = b.range,
                        M = b.tabIndex,
                        C = b.ariaLabelForHandle,
                        N = b.ariaLabelledByForHandle,
                        A = b.ariaValueTextFormatterForHandle,
                        x = "".concat(a, "-handle"),
                        I = function(e) {
                            g || c(e, i)
                        },
                        T = j(h, u, p, E),
                        w = f.createElement("div", _({
                            ref: t,
                            className: v()(x, (n = {}, o(n, "".concat(x, "-").concat(i + 1), O), o(n, "".concat(x, "-dragging"), d), n)),
                            style: k(k({}, T), l),
                            onMouseDown: I,
                            onTouchStart: I,
                            onKeyDown: function(e) {
                                if (!g && S) {
                                    var t = null;
                                    switch (e.which || e.keyCode) {
                                        case U.LEFT:
                                            t = "ltr" === h || "btt" === h ? -1 : 1;
                                            break;
                                        case U.RIGHT:
                                            t = "ltr" === h || "btt" === h ? 1 : -1;
                                            break;
                                        case U.UP:
                                            t = "ttb" !== h ? 1 : -1;
                                            break;
                                        case U.DOWN:
                                            t = "ttb" !== h ? -1 : 1;
                                            break;
                                        case U.HOME:
                                            t = "min";
                                            break;
                                        case U.END:
                                            t = "max";
                                            break;
                                        case U.PAGE_UP:
                                            t = 2;
                                            break;
                                        case U.PAGE_DOWN:
                                            t = -2
                                    }
                                    null !== t && (e.preventDefault(), m(t, i))
                                }
                            },
                            tabIndex: g ? null : H(M, i),
                            role: "slider",
                            "aria-valuemin": p,
                            "aria-valuemax": E,
                            "aria-valuenow": u,
                            "aria-disabled": g,
                            "aria-label": H(C, i),
                            "aria-labelledby": H(N, i),
                            "aria-valuetext": null === (r = H(A, i)) || void 0 === r ? void 0 : r(u),
                            "aria-orientation": "ltr" === h || "rtl" === h ? "horizontal" : "vertical"
                        }, y));
                    return s && (w = s(w, {
                        index: i,
                        prefixCls: a,
                        value: u,
                        dragging: d
                    })), w
                })),
                B = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "draggingIndex"];
            var W = f.forwardRef((function(e, t) {
                var n = e.prefixCls,
                    r = e.style,
                    a = e.onStartMove,
                    o = e.onOffsetChange,
                    u = e.values,
                    i = e.handleRender,
                    c = e.draggingIndex,
                    l = R(e, B),
                    s = f.useRef({});
                return f.useImperativeHandle(t, (function() {
                    return {
                        focus: function(e) {
                            var t;
                            null === (t = s.current[e]) || void 0 === t || t.focus()
                        }
                    }
                })), f.createElement(f.Fragment, null, u.map((function(e, t) {
                    return f.createElement(K, _({
                        ref: function(e) {
                            e ? s.current[t] = e : delete s.current[t]
                        },
                        dragging: c === t,
                        prefixCls: n,
                        style: H(r, t),
                        key: t,
                        value: e,
                        valueIndex: t,
                        onStartMove: a,
                        onOffsetChange: o,
                        render: i
                    }, l))
                })))
            }));

            function G(e) {
                var t = "touches" in e ? e.touches[0] : e;
                return {
                    pageX: t.pageX,
                    pageY: t.pageY
                }
            }

            function Y(e) {
                var t, n = e.prefixCls,
                    r = e.style,
                    a = e.start,
                    u = e.end,
                    i = e.index,
                    c = e.onStartMove,
                    l = f.useContext(L),
                    s = l.direction,
                    d = l.min,
                    m = l.max,
                    y = l.disabled,
                    b = l.range,
                    p = "".concat(n, "-track"),
                    E = F(a, d, m),
                    h = F(u, d, m),
                    g = function(e) {
                        !y && c && c(e, -1)
                    },
                    S = {};
                switch (s) {
                    case "rtl":
                        S.right = "".concat(100 * E, "%"), S.width = "".concat(100 * h - 100 * E, "%");
                        break;
                    case "btt":
                        S.bottom = "".concat(100 * E, "%"), S.height = "".concat(100 * h - 100 * E, "%");
                        break;
                    case "ttb":
                        S.top = "".concat(100 * E, "%"), S.height = "".concat(100 * h - 100 * E, "%");
                        break;
                    default:
                        S.left = "".concat(100 * E, "%"), S.width = "".concat(100 * h - 100 * E, "%")
                }
                return f.createElement("div", {
                    className: v()(p, (t = {}, o(t, "".concat(p, "-").concat(i + 1), b), o(t, "".concat(n, "-track-draggable"), c), t)),
                    style: k(k({}, S), r),
                    onMouseDown: g,
                    onTouchStart: g
                })
            }

            function V(e) {
                var t = e.prefixCls,
                    n = e.style,
                    r = e.values,
                    a = e.startPoint,
                    o = e.onStartMove,
                    u = f.useContext(L),
                    i = u.included,
                    c = u.range,
                    l = u.min,
                    s = f.useMemo((function() {
                        if (!c) {
                            if (0 === r.length) return [];
                            var e = null !== a && void 0 !== a ? a : l,
                                t = r[0];
                            return [{
                                start: Math.min(e, t),
                                end: Math.max(e, t)
                            }]
                        }
                        for (var n = [], o = 0; o < r.length - 1; o += 1) n.push({
                            start: r[o],
                            end: r[o + 1]
                        });
                        return n
                    }), [r, c, a, l]);
                return i ? s.map((function(e, r) {
                    var a = e.start,
                        u = e.end;
                    return f.createElement(Y, {
                        index: r,
                        prefixCls: t,
                        style: H(n, r),
                        start: a,
                        end: u,
                        key: r,
                        onStartMove: o
                    })
                })) : null
            }

            function X(e) {
                var t = e.prefixCls,
                    n = e.style,
                    r = e.children,
                    a = e.value,
                    u = e.onClick,
                    i = f.useContext(L),
                    c = i.min,
                    l = i.max,
                    s = i.direction,
                    d = i.includedStart,
                    m = i.includedEnd,
                    y = i.included,
                    b = "".concat(t, "-text"),
                    p = j(s, a, c, l);
                return f.createElement("span", {
                    className: v()(b, o({}, "".concat(b, "-active"), y && d <= a && a <= m)),
                    style: k(k({}, p), n),
                    onMouseDown: function(e) {
                        e.stopPropagation()
                    },
                    onClick: function() {
                        u(a)
                    }
                }, r)
            }

            function Q(e) {
                var t = e.prefixCls,
                    n = e.marks,
                    r = e.onClick,
                    a = "".concat(t, "-mark");
                return n.length ? f.createElement("div", {
                    className: a
                }, n.map((function(e) {
                    var t = e.value,
                        n = e.style,
                        o = e.label;
                    return f.createElement(X, {
                        key: t,
                        prefixCls: a,
                        style: n,
                        value: t,
                        onClick: r
                    }, o)
                }))) : null
            }

            function Z(e) {
                var t = e.prefixCls,
                    n = e.value,
                    r = e.style,
                    a = e.activeStyle,
                    u = f.useContext(L),
                    i = u.min,
                    c = u.max,
                    l = u.direction,
                    s = u.included,
                    d = u.includedStart,
                    m = u.includedEnd,
                    y = "".concat(t, "-dot"),
                    b = s && d <= n && n <= m,
                    p = k(k({}, j(l, n, i, c)), "function" === typeof r ? r(n) : r);
                return b && (p = k(k({}, p), "function" === typeof a ? a(n) : a)), f.createElement("span", {
                    className: v()(y, o({}, "".concat(y, "-active"), b)),
                    style: p
                })
            }

            function z(e) {
                var t = e.prefixCls,
                    n = e.marks,
                    r = e.dots,
                    a = e.style,
                    o = e.activeStyle,
                    u = f.useContext(L),
                    i = u.min,
                    c = u.max,
                    l = u.step,
                    s = f.useMemo((function() {
                        var e = new Set;
                        if (n.forEach((function(t) {
                                e.add(t.value)
                            })), r && null !== l)
                            for (var t = i; t <= c;) e.add(t), t += l;
                        return Array.from(e)
                    }), [i, c, l, r, n]);
                return f.createElement("div", {
                    className: "".concat(t, "-step")
                }, s.map((function(e) {
                    return f.createElement(Z, {
                        prefixCls: t,
                        key: e,
                        value: e,
                        style: a,
                        activeStyle: o
                    })
                })))
            }
            var $ = f.forwardRef((function(e, t) {
                var n, a = e.prefixCls,
                    u = void 0 === a ? "rc-slider" : a,
                    i = e.className,
                    s = e.style,
                    d = e.disabled,
                    m = void 0 !== d && d,
                    y = e.keyboard,
                    b = void 0 === y || y,
                    p = e.autoFocus,
                    E = e.onFocus,
                    h = e.onBlur,
                    g = e.min,
                    O = void 0 === g ? 0 : g,
                    N = e.max,
                    A = void 0 === N ? 100 : N,
                    _ = e.step,
                    R = void 0 === _ ? 1 : _,
                    w = e.value,
                    k = e.defaultValue,
                    P = e.range,
                    U = e.count,
                    F = e.onChange,
                    j = e.onBeforeChange,
                    H = e.onAfterChange,
                    D = e.allowCross,
                    K = void 0 === D || D,
                    B = e.pushable,
                    Y = void 0 !== B && B,
                    X = e.draggableTrack,
                    Z = e.reverse,
                    $ = e.vertical,
                    J = e.included,
                    q = void 0 === J || J,
                    ee = e.startPoint,
                    te = e.trackStyle,
                    ne = e.handleStyle,
                    re = e.railStyle,
                    ae = e.dotStyle,
                    oe = e.activeDotStyle,
                    ue = e.marks,
                    ie = e.dots,
                    ce = e.handleRender,
                    le = e.tabIndex,
                    fe = void 0 === le ? 0 : le,
                    se = e.ariaLabelForHandle,
                    ve = e.ariaLabelledByForHandle,
                    de = e.ariaValueTextFormatterForHandle,
                    me = f.useRef(),
                    ye = f.useRef(),
                    be = f.useMemo((function() {
                        return $ ? Z ? "ttb" : "btt" : Z ? "rtl" : "ltr"
                    }), [Z, $]),
                    pe = f.useMemo((function() {
                        return isFinite(O) ? O : 0
                    }), [O]),
                    Ee = f.useMemo((function() {
                        return isFinite(A) ? A : 100
                    }), [A]),
                    he = f.useMemo((function() {
                        return null !== R && R <= 0 ? 1 : R
                    }), [R]),
                    ge = f.useMemo((function() {
                        return "boolean" === typeof Y ? !!Y && he : Y >= 0 && Y
                    }), [Y, he]),
                    Se = f.useMemo((function() {
                        return Object.keys(ue || {}).map((function(e) {
                            var t = ue[e],
                                n = {
                                    value: Number(e)
                                };
                            return t && "object" === r(t) && !f.isValidElement(t) && ("label" in t || "style" in t) ? (n.style = t.style, n.label = t.label) : n.label = t, n
                        })).filter((function(e) {
                            var t = e.label;
                            return t || "number" === typeof t
                        })).sort((function(e, t) {
                            return e.value - t.value
                        }))
                    }), [ue]),
                    Oe = function(e, t, n, r, a, o) {
                        var u = f.useCallback((function(n) {
                                var r = isFinite(n) ? n : e;
                                return r = Math.min(t, n), Math.max(e, r)
                            }), [e, t]),
                            i = f.useCallback((function(r) {
                                if (null !== n) {
                                    var a = e + Math.round((u(r) - e) / n) * n,
                                        o = function(e) {
                                            return (String(e).split(".")[1] || "").length
                                        },
                                        i = Math.max(o(n), o(t), o(e)),
                                        c = Number(a.toFixed(i));
                                    return e <= c && c <= t ? c : null
                                }
                                return null
                            }), [n, e, t, u]),
                            l = f.useCallback((function(a) {
                                var o = u(a),
                                    c = r.map((function(e) {
                                        return e.value
                                    }));
                                null !== n && c.push(i(a)), c.push(e, t);
                                var l = c[0],
                                    f = t - e;
                                return c.forEach((function(e) {
                                    var t = Math.abs(o - e);
                                    t <= f && (l = e, f = t)
                                })), l
                            }), [e, t, r, n, u, i]),
                            s = function a(o, u, l) {
                                var f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "unit";
                                if ("number" === typeof u) {
                                    var s, v = o[l],
                                        d = v + u,
                                        m = [];
                                    r.forEach((function(e) {
                                        m.push(e.value)
                                    })), m.push(e, t), m.push(i(v));
                                    var y = u > 0 ? 1 : -1;
                                    "unit" === f ? m.push(i(v + y * n)) : m.push(i(d)), m = m.filter((function(e) {
                                        return null !== e
                                    })).filter((function(e) {
                                        return u < 0 ? e <= v : e >= v
                                    })), "unit" === f && (m = m.filter((function(e) {
                                        return e !== v
                                    })));
                                    var b = "unit" === f ? v : d;
                                    s = m[0];
                                    var p = Math.abs(s - b);
                                    if (m.forEach((function(e) {
                                            var t = Math.abs(e - b);
                                            t < p && (s = e, p = t)
                                        })), void 0 === s) return u < 0 ? e : t;
                                    if ("dist" === f) return s;
                                    if (Math.abs(u) > 1) {
                                        var E = c(o);
                                        return E[l] = s, a(E, u - y, l, f)
                                    }
                                    return s
                                }
                                return "min" === u ? e : "max" === u ? t : void 0
                            },
                            v = function(e, t, n) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "unit",
                                    a = e[n],
                                    o = s(e, t, n, r);
                                return {
                                    value: o,
                                    changed: o !== a
                                }
                            },
                            d = function(e) {
                                return null === o && 0 === e || "number" === typeof o && e < o
                            };
                        return [l, function(e, t, n) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "unit",
                                u = e.map(l),
                                i = u[n],
                                c = s(u, t, n, r);
                            if (u[n] = c, !1 === a) {
                                var f = o || 0;
                                n > 0 && u[n - 1] !== i && (u[n] = Math.max(u[n], u[n - 1] + f)), n < u.length - 1 && u[n + 1] !== i && (u[n] = Math.min(u[n], u[n + 1] - f))
                            } else if ("number" === typeof o || null === o) {
                                for (var m = n + 1; m < u.length; m += 1)
                                    for (var y = !0; d(u[m] - u[m - 1]) && y;) {
                                        var b = v(u, 1, m);
                                        u[m] = b.value, y = b.changed
                                    }
                                for (var p = n; p > 0; p -= 1)
                                    for (var E = !0; d(u[p] - u[p - 1]) && E;) {
                                        var h = v(u, -1, p - 1);
                                        u[p - 1] = h.value, E = h.changed
                                    }
                                for (var g = u.length - 1; g > 0; g -= 1)
                                    for (var S = !0; d(u[g] - u[g - 1]) && S;) {
                                        var O = v(u, -1, g - 1);
                                        u[g - 1] = O.value, S = O.changed
                                    }
                                for (var M = 0; M < u.length - 1; M += 1)
                                    for (var C = !0; d(u[M + 1] - u[M]) && C;) {
                                        var N = v(u, 1, M + 1);
                                        u[M + 1] = N.value, C = N.changed
                                    }
                            }
                            return {
                                value: u[n],
                                values: u
                            }
                        }]
                    }(pe, Ee, he, Se, K, ge),
                    Me = l(Oe, 2),
                    Ce = Me[0],
                    Ne = Me[1],
                    Ae = function(e, t) {
                        var n = t || {},
                            r = n.defaultValue,
                            a = n.value,
                            o = n.onChange,
                            u = n.postState,
                            i = M(I((function() {
                                return T(a) ? a : T(r) ? "function" === typeof r ? r() : r : "function" === typeof e ? e() : e
                            })), 2),
                            c = i[0],
                            l = i[1],
                            f = void 0 !== a ? a : c,
                            s = u ? u(f) : f,
                            v = C(o),
                            d = M(I([f]), 2),
                            m = d[0],
                            y = d[1];
                        return x((function() {
                            var e = m[0];
                            c !== e && v(c, e)
                        }), [m]), x((function() {
                            T(a) || l(a)
                        }), [a]), [s, C((function(e, t) {
                            l(e, t), y([f], t)
                        }))]
                    }(k, {
                        value: w
                    }),
                    xe = l(Ae, 2),
                    Ie = xe[0],
                    Te = xe[1],
                    _e = f.useMemo((function() {
                        var e = null === Ie || void 0 === Ie ? [] : Array.isArray(Ie) ? Ie : [Ie],
                            t = l(e, 1)[0],
                            n = null === Ie ? [] : [void 0 === t ? pe : t];
                        if (P) {
                            if (n = c(e), U || void 0 === Ie) {
                                var r = U >= 0 ? U + 1 : 2;
                                for (n = n.slice(0, r); n.length < r;) {
                                    var a;
                                    n.push(null !== (a = n[n.length - 1]) && void 0 !== a ? a : pe)
                                }
                            }
                            n.sort((function(e, t) {
                                return e - t
                            }))
                        }
                        return n.forEach((function(e, t) {
                            n[t] = Ce(e)
                        })), n
                    }), [Ie, P, pe, U, Ce]),
                    Re = f.useRef(_e);
                Re.current = _e;
                var we = function(e) {
                        return P ? e : e[0]
                    },
                    ke = function(e) {
                        var t = c(e).sort((function(e, t) {
                            return e - t
                        }));
                        F && !S(t, Re.current, !0) && F(we(t)), Te(t)
                    },
                    Pe = function(e) {
                        if (!m) {
                            var t = 0,
                                n = Ee - pe;
                            _e.forEach((function(r, a) {
                                var o = Math.abs(e - r);
                                o <= n && (n = o, t = a)
                            }));
                            var r = c(_e);
                            r[t] = e, P && !_e.length && void 0 === U && r.push(e), null === j || void 0 === j || j(we(r)), ke(r), null === H || void 0 === H || H(we(r))
                        }
                    },
                    Ue = l(f.useState(null), 2),
                    Le = Ue[0],
                    Fe = Ue[1];
                f.useEffect((function() {
                    if (null !== Le) {
                        var e = _e.indexOf(Le);
                        e >= 0 && me.current.focus(e)
                    }
                    Fe(null)
                }), [Le]);
                var je = f.useMemo((function() {
                        return (!X || null !== he) && X
                    }), [X, he]),
                    He = function(e, t, n, r, a, o, u, i, s) {
                        var v = l(f.useState(null), 2),
                            d = v[0],
                            m = v[1],
                            y = l(f.useState(-1), 2),
                            b = y[0],
                            p = y[1],
                            E = l(f.useState(n), 2),
                            h = E[0],
                            g = E[1],
                            S = l(f.useState(n), 2),
                            O = S[0],
                            M = S[1],
                            C = f.useRef(null),
                            N = f.useRef(null);
                        f.useEffect((function() {
                            -1 === b && g(n)
                        }), [n, b]), f.useEffect((function() {
                            return function() {
                                document.removeEventListener("mousemove", C.current), document.removeEventListener("mouseup", N.current), document.removeEventListener("touchmove", C.current), document.removeEventListener("touchend", N.current)
                            }
                        }), []);
                        var A = function(e, t) {
                                h.some((function(t, n) {
                                    return t !== e[n]
                                })) && (void 0 !== t && m(t), g(e), u(e))
                            },
                            x = function(e, t) {
                                if (-1 === e) {
                                    var n = O[0],
                                        u = O[O.length - 1],
                                        i = r - n,
                                        l = a - u,
                                        f = t * (a - r);
                                    f = Math.max(f, i), f = Math.min(f, l);
                                    var v = o(n + f);
                                    f = v - n;
                                    var d = O.map((function(e) {
                                        return e + f
                                    }));
                                    A(d)
                                } else {
                                    var m = (a - r) * t,
                                        y = c(h);
                                    y[e] = O[e];
                                    var b = s(y, m, e, "dist");
                                    A(b.values, b.value)
                                }
                            },
                            I = f.useRef(x);
                        I.current = x;
                        var T = f.useMemo((function() {
                            var e = c(n).sort((function(e, t) {
                                    return e - t
                                })),
                                t = c(h).sort((function(e, t) {
                                    return e - t
                                }));
                            return e.every((function(e, n) {
                                return e === t[n]
                            })) ? h : n
                        }), [n, h]);
                        return [b, d, T, function(r, a) {
                            r.stopPropagation();
                            var o = n[a];
                            p(a), m(o), M(n);
                            var u = G(r),
                                c = u.pageX,
                                l = u.pageY,
                                f = function(n) {
                                    n.preventDefault();
                                    var r, o = G(n),
                                        u = o.pageX,
                                        i = o.pageY,
                                        f = u - c,
                                        s = i - l,
                                        v = e.current.getBoundingClientRect(),
                                        d = v.width,
                                        m = v.height;
                                    switch (t) {
                                        case "btt":
                                            r = -s / m;
                                            break;
                                        case "ttb":
                                            r = s / m;
                                            break;
                                        case "rtl":
                                            r = -f / d;
                                            break;
                                        default:
                                            r = f / d
                                    }
                                    I.current(a, r)
                                },
                                s = function e(t) {
                                    t.preventDefault(), document.removeEventListener("mouseup", e), document.removeEventListener("mousemove", f), document.removeEventListener("touchend", e), document.removeEventListener("touchmove", f), C.current = null, N.current = null, p(-1), i()
                                };
                            document.addEventListener("mouseup", s), document.addEventListener("mousemove", f), document.addEventListener("touchend", s), document.addEventListener("touchmove", f), C.current = f, N.current = s
                        }]
                    }(ye, be, _e, pe, Ee, Ce, ke, (function() {
                        null === H || void 0 === H || H(we(Re.current))
                    }), Ne),
                    De = l(He, 4),
                    Ke = De[0],
                    Be = De[1],
                    We = De[2],
                    Ge = De[3],
                    Ye = function(e, t) {
                        Ge(e, t), null === j || void 0 === j || j(we(Re.current))
                    },
                    Ve = -1 !== Ke;
                f.useEffect((function() {
                    if (!Ve) {
                        var e = _e.lastIndexOf(Be);
                        me.current.focus(e)
                    }
                }), [Ve]);
                var Xe = f.useMemo((function() {
                        return c(We).sort((function(e, t) {
                            return e - t
                        }))
                    }), [We]),
                    Qe = l(f.useMemo((function() {
                        return P ? [Xe[0], Xe[Xe.length - 1]] : [pe, Xe[0]]
                    }), [Xe, P, pe]), 2),
                    Ze = Qe[0],
                    ze = Qe[1];
                f.useImperativeHandle(t, (function() {
                    return {
                        focus: function() {
                            me.current.focus(0)
                        },
                        blur: function() {
                            var e = document.activeElement;
                            ye.current.contains(e) && (null === e || void 0 === e || e.blur())
                        }
                    }
                })), f.useEffect((function() {
                    p && me.current.focus(0)
                }), []);
                var $e = f.useMemo((function() {
                    return {
                        min: pe,
                        max: Ee,
                        direction: be,
                        disabled: m,
                        keyboard: b,
                        step: he,
                        included: q,
                        includedStart: Ze,
                        includedEnd: ze,
                        range: P,
                        tabIndex: fe,
                        ariaLabelForHandle: se,
                        ariaLabelledByForHandle: ve,
                        ariaValueTextFormatterForHandle: de
                    }
                }), [pe, Ee, be, m, b, he, q, Ze, ze, P, fe, se, ve, de]);
                return f.createElement(L.Provider, {
                    value: $e
                }, f.createElement("div", {
                    ref: ye,
                    className: v()(u, i, (n = {}, o(n, "".concat(u, "-disabled"), m), o(n, "".concat(u, "-vertical"), $), o(n, "".concat(u, "-horizontal"), !$), o(n, "".concat(u, "-with-marks"), Se.length), n)),
                    style: s,
                    onMouseDown: function(e) {
                        e.preventDefault();
                        var t, n = ye.current.getBoundingClientRect(),
                            r = n.width,
                            a = n.height,
                            o = n.left,
                            u = n.top,
                            i = n.bottom,
                            c = n.right,
                            l = e.clientX,
                            f = e.clientY;
                        switch (be) {
                            case "btt":
                                t = (i - f) / a;
                                break;
                            case "ttb":
                                t = (f - u) / a;
                                break;
                            case "rtl":
                                t = (c - l) / r;
                                break;
                            default:
                                t = (l - o) / r
                        }
                        Pe(Ce(pe + t * (Ee - pe)))
                    }
                }, f.createElement("div", {
                    className: "".concat(u, "-rail"),
                    style: re
                }), f.createElement(V, {
                    prefixCls: u,
                    style: te,
                    values: Xe,
                    startPoint: ee,
                    onStartMove: je ? Ye : null
                }), f.createElement(z, {
                    prefixCls: u,
                    marks: Se,
                    dots: ie,
                    style: ae,
                    activeStyle: oe
                }), f.createElement(W, {
                    ref: me,
                    prefixCls: u,
                    style: ne,
                    values: We,
                    draggingIndex: Ke,
                    onStartMove: Ye,
                    onOffsetChange: function(e, t) {
                        if (!m) {
                            var n = Ne(_e, e, t);
                            null === j || void 0 === j || j(we(_e)), ke(n.values), null === H || void 0 === H || H(we(n.values)), Fe(n.value)
                        }
                    },
                    onFocus: E,
                    onBlur: h,
                    handleRender: ce
                }), f.createElement(Q, {
                    prefixCls: u,
                    marks: Se,
                    onClick: Pe
                })))
            }));
            var J = $
        }
    }
]);