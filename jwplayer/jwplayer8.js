window.jwplayer = function(e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = window.webpackJsonpjwplayer;
    window.webpackJsonpjwplayer = function(t, r, o) {
        for (var a, u, c = 0, s = []; c < t.length; c++) u = t[c], i[u] && s.push(i[u][0]), i[u] = 0;
        for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
        for (n && n(t, r, o); s.length;) s.shift()()
    };
    var r = {},
        i = {
            16: 0
        };
    return t.e = function(e) {
        function n() {
            u.onerror = u.onload = null, clearTimeout(c);
            var t = i[e];
            0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), i[e] = void 0)
        }
        var r = i[e];
        if (0 === r) return new Promise(function(e) {
            e()
        });
        if (r) return r[2];
        var o = new Promise(function(t, n) {
            r = i[e] = [t, n]
        });
        r[2] = o;
        var a = document.getElementsByTagName("head")[0],
            u = document.createElement("script");
        u.type = "text/javascript", u.charset = "utf-8", u.async = !0, u.timeout = 35e3, t.nc && u.setAttribute("nonce", t.nc), u.src = t.p + "" + ({
            0: "jwplayer.core.controls.polyfills.html5",
            1: "jwplayer.core.controls.html5",
            2: "jwplayer.core.controls.polyfills",
            3: "jwplayer.core.controls",
            4: "jwplayer.controls",
            5: "provider.shaka",
            6: "provider.hlsjs",
            7: "provider.html5",
            8: "jwplayer.core",
            9: "provider.flash",
            10: "polyfills.intersection-observer",
            11: "jwplayer.vr",
            12: "provider.cast",
            13: "vttparser",
            14: "provider.airplay",
            15: "polyfills.webvtt"
        }[e] || e) + ".js";
        var c = setTimeout(n, 35e3);
        return u.onerror = u.onload = n, a.appendChild(u), o
    }, t.m = e, t.c = r, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t.oe = function(e) {
        throw console.error(e), e
    }, t(t.s = 53)
}([function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return P
    }), n.d(t, "b", function() {
        return T
    });
    var r = n(22),
        i = {},
        o = Array.prototype,
        a = Object.prototype,
        u = Function.prototype,
        c = o.slice,
        s = o.concat,
        l = a.toString,
        f = a.hasOwnProperty,
        d = o.map,
        p = o.reduce,
        v = o.forEach,
        h = o.filter,
        m = o.every,
        g = o.some,
        y = o.indexOf,
        b = Array.isArray,
        w = Object.keys,
        j = u.bind,
        O = function e(t) {
            return t instanceof e ? t : this instanceof e ? void 0 : new e(t)
        },
        k = O.each = O.forEach = function(e, t, n) {
            var r, o;
            if (null == e) return e;
            if (v && e.forEach === v) e.forEach(t, n);
            else if (e.length === +e.length) {
                for (r = 0, o = e.length; r < o; r++)
                    if (t.call(n, e[r], r, e) === i) return
            } else {
                var a = O.keys(e);
                for (r = 0, o = a.length; r < o; r++)
                    if (t.call(n, e[a[r]], a[r], e) === i) return
            }
            return e
        };
    O.map = O.collect = function(e, t, n) {
        var r = [];
        return null == e ? r : d && e.map === d ? e.map(t, n) : (k(e, function(e, i, o) {
            r.push(t.call(n, e, i, o))
        }), r)
    };
    O.reduce = O.foldl = O.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), p && e.reduce === p) return r && (t = O.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        if (k(e, function(e, o, a) {
                i ? n = t.call(r, n, e, o, a) : (n = e, i = !0)
            }), !i) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, O.find = O.detect = function(e, t, n) {
        var r;
        return C(e, function(e, i, o) {
            if (t.call(n, e, i, o)) return r = e, !0
        }), r
    }, O.filter = O.select = function(e, t, n) {
        var r = [];
        return null == e ? r : h && e.filter === h ? e.filter(t, n) : (k(e, function(e, i, o) {
            t.call(n, e, i, o) && r.push(e)
        }), r)
    }, O.reject = function(e, t, n) {
        return O.filter(e, function(e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, O.compact = function(e) {
        return O.filter(e, O.identity)
    }, O.every = O.all = function(e, t, n) {
        t || (t = O.identity);
        var r = !0;
        return null == e ? r : m && e.every === m ? e.every(t, n) : (k(e, function(e, o, a) {
            if (!(r = r && t.call(n, e, o, a))) return i
        }), !!r)
    };
    var C = O.some = O.any = function(e, t, n) {
        t || (t = O.identity);
        var r = !1;
        return null == e ? r : g && e.some === g ? e.some(t, n) : (k(e, function(e, o, a) {
            if (r || (r = t.call(n, e, o, a))) return i
        }), !!r)
    };
    O.size = function(e) {
        return null == e ? 0 : e.length === +e.length ? e.length : O.keys(e).length
    }, O.last = function(e, t, n) {
        if (null != e) return null == t || n ? e[e.length - 1] : c.call(e, Math.max(e.length - t, 0))
    }, O.after = function(e, t) {
        return function() {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, O.before = function(e, t) {
        var n;
        return function() {
            return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
        }
    };
    var x = function(e) {
            return null == e ? O.identity : O.isFunction(e) ? e : O.property(e)
        },
        E = function(e) {
            return function(t, n, r) {
                var i = {};
                return n = x(n), k(t, function(o, a) {
                    var u = n.call(r, o, a, t);
                    e(i, u, o)
                }), i
            }
        };
    O.groupBy = E(function(e, t, n) {
        O.has(e, t) ? e[t].push(n) : e[t] = [n]
    }), O.indexBy = E(function(e, t, n) {
        e[t] = n
    }), O.sortedIndex = function(e, t, n, r) {
        n = x(n);
        for (var i = n.call(r, t), o = 0, a = e.length; o < a;) {
            var u = o + a >>> 1;
            n.call(r, e[u]) < i ? o = u + 1 : a = u
        }
        return o
    }, O.contains = O.include = function(e, t) {
        return null != e && (e.length !== +e.length && (e = O.values(e)), O.indexOf(e, t) >= 0)
    }, O.pluck = function(e, t) {
        return O.map(e, O.property(t))
    }, O.where = function(e, t) {
        return O.filter(e, O.matches(t))
    }, O.findWhere = function(e, t) {
        return O.find(e, O.matches(t))
    }, O.max = function(e, t, n) {
        if (!t && O.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        var r = -1 / 0,
            i = -1 / 0;
        return k(e, function(e, o, a) {
            var u = t ? t.call(n, e, o, a) : e;
            u > i && (r = e, i = u)
        }), r
    }, O.difference = function(e) {
        var t = s.apply(o, c.call(arguments, 1));
        return O.filter(e, function(e) {
            return !O.contains(t, e)
        })
    }, O.without = function(e) {
        return O.difference(e, c.call(arguments, 1))
    }, O.indexOf = function(e, t, n) {
        if (null == e) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if ("number" != typeof n) return r = O.sortedIndex(e, t), e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; r < i; r++)
            if (e[r] === t) return r;
        return -1
    };
    var S = function() {};
    O.bind = function(e, t) {
        var n, r;
        if (j && e.bind === j) return j.apply(e, c.call(arguments, 1));
        if (!O.isFunction(e)) throw new TypeError;
        return n = c.call(arguments, 2), r = function() {
            if (!(this instanceof r)) return e.apply(t, n.concat(c.call(arguments)));
            S.prototype = e.prototype;
            var i = new S;
            S.prototype = null;
            var o = e.apply(i, n.concat(c.call(arguments)));
            return Object(o) === o ? o : i
        }
    }, O.partial = function(e) {
        var t = c.call(arguments, 1);
        return function() {
            for (var n = 0, r = t.slice(), i = 0, o = r.length; i < o; i++) r[i] === O && (r[i] = arguments[n++]);
            for (; n < arguments.length;) r.push(arguments[n++]);
            return e.apply(this, r)
        }
    }, O.once = O.partial(O.before, 2), O.memoize = function(e, t) {
        var n = {};
        return t || (t = O.identity),
            function() {
                var r = t.apply(this, arguments);
                return O.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
    }, O.delay = function(e, t) {
        var n = c.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, O.defer = function(e) {
        return O.delay.apply(O, [e, 1].concat(c.call(arguments, 1)))
    }, O.throttle = function(e, t, n) {
        var i, o, a, u = null,
            c = 0;
        n || (n = {});
        var s = function() {
            c = !1 === n.leading ? 0 : Object(r.a)(), u = null, a = e.apply(i, o), i = o = null
        };
        return function() {
            c || !1 !== n.leading || (c = r.a);
            var l = t - (r.a - c);
            return i = this, o = arguments, l <= 0 ? (clearTimeout(u), u = null, c = r.a, a = e.apply(i, o), i = o = null) : u || !1 === n.trailing || (u = setTimeout(s, l)), a
        }
    }, O.keys = function(e) {
        if (!O.isObject(e)) return [];
        if (w) return w(e);
        var t = [];
        for (var n in e) O.has(e, n) && t.push(n);
        return t
    }, O.invert = function(e) {
        for (var t = {}, n = O.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
        return t
    }, O.defaults = function(e) {
        return k(c.call(arguments, 1), function(t) {
            if (t)
                for (var n in t) void 0 === e[n] && (e[n] = t[n])
        }), e
    }, O.extend = function(e) {
        return k(c.call(arguments, 1), function(t) {
            if (t)
                for (var n in t) e[n] = t[n]
        }), e
    }, O.pick = function(e) {
        var t = {},
            n = s.apply(o, c.call(arguments, 1));
        return k(n, function(n) {
            n in e && (t[n] = e[n])
        }), t
    }, O.omit = function(e) {
        var t = {},
            n = s.apply(o, c.call(arguments, 1));
        for (var r in e) O.contains(n, r) || (t[r] = e[r]);
        return t
    }, O.clone = function(e) {
        return O.isObject(e) ? O.isArray(e) ? e.slice() : O.extend({}, e) : e
    }, O.isArray = b || function(e) {
        return "[object Array]" == l.call(e)
    }, O.isObject = function(e) {
        return e === Object(e)
    }, k(["Function", "String", "Number", "Date", "RegExp"], function(e) {
        O["is" + e] = function(t) {
            return l.call(t) == "[object " + e + "]"
        }
    }), O.isFunction = function(e) {
        return "function" == typeof e
    }, O.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    };
    var P = O.isNaN = function(e) {
        return O.isNumber(e) && e != +e
    };
    O.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" == l.call(e)
    }, O.isNull = function(e) {
        return null === e
    }, O.isUndefined = function(e) {
        return void 0 === e
    }, O.has = function(e, t) {
        return f.call(e, t)
    }, O.identity = function(e) {
        return e
    }, O.constant = function(e) {
        return function() {
            return e
        }
    }, O.property = function(e) {
        return function(t) {
            return t[e]
        }
    }, O.propertyOf = function(e) {
        return null == e ? function() {} : function(t) {
            return e[t]
        }
    }, O.matches = function(e) {
        return function(t) {
            if (t === e) return !0;
            for (var n in e)
                if (e[n] !== t[n]) return !1;
            return !0
        }
    }, O.now = r.a, O.result = function(e, t) {
        if (null != e) {
            var n = e[t];
            return O.isFunction(n) ? n.call(e) : n
        }
    };
    var T = O.isNumber;
    t.c = O
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }

    function i(e, t, n) {
        for (e = "" + e, n = n || "0"; e.length < t;) e = n + e;
        return e
    }

    function o(e, t) {
        for (var n = 0; n < e.attributes.length; n++)
            if (e.attributes[n].name && e.attributes[n].name.toLowerCase() === t.toLowerCase()) return e.attributes[n].value.toString();
        return ""
    }

    function a(e) {
        return /[(,]format=m3u8-/i.test(e) ? "m3u8" : !!/[(,]format=mpd-/i.test(e) && "mpd"
    }

    function u(e) {
        if (!e || "rtmp" === e.substr(0, 4)) return "";
        var t = a(e);
        return t || (e = e.split("?")[0].split("#")[0], e.lastIndexOf(".") > -1 ? e.substr(e.lastIndexOf(".") + 1, e.length).toLowerCase() : void 0)
    }

    function c(e) {
        var t = parseInt(e / 3600),
            n = parseInt(e / 60) % 60,
            r = e % 60;
        return i(t, 2) + ":" + i(n, 2) + ":" + i(r.toFixed(3), 6)
    }

    function s(e, t) {
        if (!e) return 0;
        if (p.c.isNumber(e) && !p.c.isNaN(e)) return e;
        e = e.replace(",", ".");
        var n = e.split(":"),
            r = n.length,
            i = 0;
        if ("s" === e.slice(-1)) i = parseFloat(e);
        else if ("m" === e.slice(-1)) i = 60 * parseFloat(e);
        else if ("h" === e.slice(-1)) i = 3600 * parseFloat(e);
        else if (r > 1) {
            var o = r - 1;
            4 === r && (t && (i = parseFloat(n[o]) / t), o -= 1), i += parseFloat(n[o]), i += 60 * parseFloat(n[o - 1]), r >= 3 && (i += 3600 * parseFloat(n[o - 2]))
        } else i = parseFloat(e);
        return p.c.isNaN(i) ? 0 : i
    }

    function l(e, t, n) {
        if (p.c.isString(e) && "%" === e.slice(-1)) {
            var r = parseFloat(e);
            return !t || isNaN(t) || isNaN(r) ? null : t * r / 100
        }
        return s(e, n)
    }

    function f(e, t) {
        return p.c.map(e, function(e) {
            return t + e
        })
    }

    function d(e, t) {
        return p.c.map(e, function(e) {
            return e + t
        })
    }
    t.h = r, t.d = i, t.i = o, t.a = u, t.b = c, t.f = s, t.c = l, t.e = f, t.g = d;
    var p = n(0)
}, function(e, t, n) {
    "use strict";

    function r() {}

    function i(e, t) {
        return function() {
            e.apply(t, arguments)
        }
    }

    function o(e) {
        if ("object" !== d(this)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(e, this)
    }

    function a(e, t) {
        for (; 3 === e._state;) e = e._value;
        if (0 === e._state) return void e._deferreds.push(t);
        e._handled = !0, o._immediateFn(function() {
            var n = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null === n) return void(1 === e._state ? u : c)(t.promise, e._value);
            var r;
            try {
                r = n(e._value)
            } catch (e) {
                return void c(t.promise, e)
            }
            u(t.promise, r)
        })
    }

    function u(e, t) {
        try {
            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" === (void 0 === t ? "undefined" : d(t)) || "function" == typeof t)) {
                var n = t.then;
                if (t instanceof o) return e._state = 3, e._value = t, void s(e);
                if ("function" == typeof n) return void f(i(n, t), e)
            }
            e._state = 1, e._value = t, s(e)
        } catch (t) {
            c(e, t)
        }
    }

    function c(e, t) {
        e._state = 2, e._value = t, s(e)
    }

    function s(e) {
        2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
            e._handled || o._unhandledRejectionFn(e._value)
        });
        for (var t = 0, n = e._deferreds.length; t < n; t++) a(e, e._deferreds[t]);
        e._deferreds = null
    }

    function l(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
    }

    function f(e, t) {
        var n = !1;
        try {
            e(function(e) {
                n || (n = !0, u(t, e))
            }, function(e) {
                n || (n = !0, c(t, e))
            })
        } catch (e) {
            if (n) return;
            n = !0, c(t, e)
        }
    }
    n.d(t, "b", function() {
        return m
    });
    var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        p = window.setTimeout,
        v = window.setImmediate;
    o.prototype.catch = function(e) {
        return this.then(null, e)
    }, o.prototype.then = function(e, t) {
        var n = new this.constructor(r);
        return a(this, new l(e, t, n)), n
    }, o.all = function(e) {
        var t = Array.prototype.slice.call(e);
        return new o(function(e, n) {
            function r(o, a) {
                try {
                    if (a && ("object" === (void 0 === a ? "undefined" : d(a)) || "function" == typeof a)) {
                        var u = a.then;
                        if ("function" == typeof u) return void u.call(a, function(e) {
                            r(o, e)
                        }, n)
                    }
                    t[o] = a, 0 == --i && e(t)
                } catch (e) {
                    n(e)
                }
            }
            if (0 === t.length) return e([]);
            for (var i = t.length, o = 0; o < t.length; o++) r(o, t[o])
        })
    }, o.resolve = function(e) {
        return e && "object" === (void 0 === e ? "undefined" : d(e)) && e.constructor === o ? e : new o(function(t) {
            t(e)
        })
    }, o.reject = function(e) {
        return new o(function(t, n) {
            n(e)
        })
    }, o.race = function(e) {
        return new o(function(t, n) {
            for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n)
        })
    }, o._immediateFn = "function" == typeof v && function(e) {
        v(e)
    } || function(e) {
        p(e, 0)
    }, o._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var h = window.Promise || (window.Promise = o),
        m = h.resolve();
    t.a = h
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "_2", function() {
        return r
    }), n.d(t, "_5", function() {
        return i
    }), n.d(t, "_3", function() {
        return o
    }), n.d(t, "_7", function() {
        return a
    }), n.d(t, "_8", function() {
        return u
    }), n.d(t, "_4", function() {
        return c
    }), n.d(t, "_6", function() {
        return s
    }), n.d(t, "_9", function() {
        return l
    }), n.d(t, "m", function() {
        return f
    }), n.d(t, "o", function() {
        return d
    }), n.d(t, "n", function() {
        return p
    }), n.d(t, "h", function() {
        return v
    }), n.d(t, "k", function() {
        return h
    }), n.d(t, "_10", function() {
        return m
    }), n.d(t, "l", function() {
        return g
    }), n.d(t, "R", function() {
        return y
    }), n.d(t, "O", function() {
        return b
    }), n.d(t, "p", function() {
        return w
    }), n.d(t, "Q", function() {
        return j
    }), n.d(t, "q", function() {
        return O
    }), n.d(t, "a", function() {
        return k
    }), n.d(t, "y", function() {
        return C
    }), n.d(t, "Z", function() {
        return x
    }), n.d(t, "I", function() {
        return E
    }), n.d(t, "v", function() {
        return S
    }), n.d(t, "u", function() {
        return P
    }), n.d(t, "x", function() {
        return T
    }), n.d(t, "j", function() {
        return _
    }), n.d(t, "U", function() {
        return N
    }), n.d(t, "g", function() {
        return L
    }), n.d(t, "z", function() {
        return A
    }), n.d(t, "A", function() {
        return M
    }), n.d(t, "F", function() {
        return F
    }), n.d(t, "G", function() {
        return I
    }), n.d(t, "J", function() {
        return R
    }), n.d(t, "_1", function() {
        return B
    }), n.d(t, "T", function() {
        return q
    }), n.d(t, "w", function() {
        return D
    }), n.d(t, "K", function() {
        return Q
    }), n.d(t, "H", function() {
        return X
    }), n.d(t, "L", function() {
        return z
    }), n.d(t, "N", function() {
        return V
    }), n.d(t, "E", function() {
        return W
    }), n.d(t, "D", function() {
        return H
    }), n.d(t, "B", function() {
        return U
    }), n.d(t, "C", function() {
        return J
    }), n.d(t, "M", function() {
        return $
    }), n.d(t, "i", function() {
        return K
    }), n.d(t, "r", function() {
        return Y
    }), n.d(t, "_0", function() {
        return G
    }), n.d(t, "V", function() {
        return Z
    }), n.d(t, "W", function() {
        return ee
    }), n.d(t, "b", function() {
        return te
    }), n.d(t, "c", function() {
        return ne
    }), n.d(t, "S", function() {
        return re
    }), n.d(t, "t", function() {
        return ie
    }), n.d(t, "f", function() {
        return oe
    }), n.d(t, "e", function() {
        return ae
    }), n.d(t, "X", function() {
        return ue
    }), n.d(t, "Y", function() {
        return ce
    }), n.d(t, "_11", function() {
        return se
    }), n.d(t, "s", function() {
        return le
    }), n.d(t, "d", function() {
        return fe
    }), n.d(t, "P", function() {
        return de
    });
    var r = "buffering",
        i = "idle",
        o = "complete",
        a = "paused",
        u = "playing",
        c = "error",
        s = "loading",
        l = "stalled",
        f = "drag",
        d = "dragStart",
        p = "dragEnd",
        v = "click",
        h = "doubleClick",
        m = "tap",
        g = "doubleTap",
        y = "over",
        b = "move",
        w = "enter",
        j = "out",
        O = c,
        k = "adSkipped",
        C = o,
        x = "ready",
        E = "seek",
        S = "beforePlay",
        P = "beforeComplete",
        T = "bufferFull",
        _ = "displayClick",
        N = "playlistComplete",
        L = "cast",
        A = "mediaError",
        M = "firstFrame",
        F = "playAttempt",
        I = "playAttemptFailed",
        R = "seeked",
        B = "setupError",
        q = "state",
        D = "bufferChange",
        Q = "time",
        X = "ratechange",
        z = "mediaType",
        V = "volume",
        W = "mute",
        H = "meta",
        U = "levels",
        J = "levelsChanged",
        $ = "visualQuality",
        K = "controls",
        Y = "fullscreen",
        G = "resize",
        Z = "playlistItem",
        ee = "playlist",
        te = "audioTracks",
        ne = "audioTrackChanged",
        re = "playbackRateChanged",
        ie = "logoClick",
        oe = "captionsList",
        ae = "captionsChanged",
        ue = "providerChanged",
        ce = "providerFirstFrame",
        se = "userAction",
        le = "instreamClick",
        fe = "breakpoint",
        de = "fullscreenchange"
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (l.a.debug) return e.apply(t || this, n);
        try {
            return e.apply(t || this, n)
        } catch (t) {
            return new i(e.name, t)
        }
    }

    function i(e, t) {
        this.name = e, this.message = t.message || t.toString(), this.error = t
    }
    var o = n(16),
        a = n(11),
        u = n(12),
        c = n(1),
        s = n(20),
        l = n(15),
        f = n(0),
        d = n(29),
        p = n(25),
        v = n(26),
        h = n(51);
    n.d(t, "b", function() {
        return g
    });
    var m = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        g = "function" == typeof console.log ? console.log.bind(console) : function() {},
        y = function(e, t, n) {
            return Math.max(Math.min(e, n), t)
        },
        b = function(e, t) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n])
        },
        w = f.c.indexOf,
        j = function() {},
        O = m({}, u, a, o, {
            addClass: p.a,
            hasClass: p.h,
            removeClass: p.j,
            replaceClass: p.k,
            toggleClass: p.m,
            classList: p.d,
            styleDimension: p.l,
            createElement: p.e,
            emptyElement: p.g,
            addStyleSheet: p.b,
            bounds: p.c,
            css: v.b,
            clearCss: v.a,
            style: v.d,
            transform: v.e,
            getRgba: v.c,
            ajax: h.a,
            crossdomain: h.b,
            tryCatch: r,
            Error: i,
            Timer: s.a,
            log: g,
            between: y,
            foreach: b,
            flashVersion: d.a,
            isIframe: d.m,
            indexOf: w,
            trim: c.h,
            pad: c.d,
            extension: c.a,
            hms: c.b,
            seconds: c.f,
            prefix: c.e,
            suffix: c.g,
            noop: j
        });
    t.a = O
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        if (!c(this, "on", e, [t, n]) || !t) return this;
        var r = this._events || (this._events = {});
        return (r[e] || (r[e] = [])).push({
            callback: t,
            context: n
        }), this
    }

    function i(e, t, n) {
        if (!c(this, "once", e, [t, n]) || !t) return this;
        var r = 0,
            i = this,
            o = function n() {
                r++ || (i.off(e, n), t.apply(this, arguments))
            };
        return o._callback = t, this.on(e, o, n)
    }

    function o(e, t, n) {
        if (!this._events || !c(this, "off", e, [t, n])) return this;
        if (!e && !t && !n) return delete this._events, this;
        for (var r = e ? [e] : Object.keys(this._events), i = 0, o = r.length; i < o; i++) {
            e = r[i];
            var a = this._events[e];
            if (a) {
                var u = this._events[e] = [];
                if (t || n)
                    for (var s = 0, l = a.length; s < l; s++) {
                        var f = a[s];
                        (t && t !== f.callback && t !== f.callback._callback || n && n !== f.context) && u.push(f)
                    }
                u.length || delete this._events[e]
            }
        }
        return this
    }

    function a(e) {
        if (!this._events) return this;
        var t = f.call(arguments, 1);
        if (!c(this, "trigger", e, t)) return this;
        var n = this._events[e],
            r = this._events.all;
        return n && s(n, t, this), r && s(r, arguments, this), this
    }

    function u(e) {
        if (!this._events) return this;
        var t = f.call(arguments, 1);
        if (!c(this, "trigger", e, t)) return this;
        var n = this._events[e],
            r = this._events.all;
        return n && s(n, t, this, e), r && s(r, arguments, this, e), this
    }

    function c(e, t, n, r) {
        if (!n) return !0;
        if ("object" === (void 0 === n ? "undefined" : l(n))) {
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e[t].apply(e, [i, n[i]].concat(r));
            return !1
        }
        if (d.test(n)) {
            for (var o = n.split(d), a = 0, u = o.length; a < u; a++) e[t].apply(e, [o[a]].concat(r));
            return !1
        }
        return !0
    }

    function s(e, t, n, r) {
        for (var i = -1, o = e.length; ++i < o;) {
            var a = e[i];
            if (r) try {
                a.callback.apply(a.context || n, t)
            } catch (e) {
                console.log('Error in "' + r + '" event handler:', e)
            } else a.callback.apply(a.context || n, t)
        }
    }
    t.c = r, t.d = i, t.b = o, t.e = a, t.f = u;
    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        f = [].slice,
        d = /\s+/;
    t.a = {
        on: r,
        once: i,
        off: o,
        trigger: a
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = void 0,
            r = void 0,
            i = void 0,
            o = void 0;
        return e.chrome ? n = -1 !== t.indexOf("Chrome") ? t.substring(t.indexOf("Chrome") + 7) : t.substring(t.indexOf("CriOS") + 6) : e.safari ? n = t.substring(t.indexOf("Version") + 8) : e.firefox ? n = t.substring(t.indexOf("Firefox") + 8) : e.edge ? n = t.substring(t.indexOf("Edge") + 5) : e.ie && (-1 !== t.indexOf("rv:") ? n = t.substring(t.indexOf("rv:") + 3) : -1 !== t.indexOf("MSIE") && (n = t.substring(t.indexOf("MSIE") + 5))), n && (-1 !== (o = n.indexOf(";")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(" ")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(")")) && (n = n.substring(0, o)), r = parseInt(n, 10), i = parseInt(n.split(".")[1], 10)), {
            version: n,
            major: r,
            minor: i
        }
    }

    function i(e, t) {
        if (e && e.length > t) return e[t]
    }

    function o(e, t) {
        var n = void 0,
            r = void 0,
            o = void 0;
        if (e.windows) switch (n = i(/Windows(?: NT|)? ([._\d]+)/.exec(t), 1)) {
            case "6.1":
                n = "7.0";
                break;
            case "6.2":
                n = "8.0";
                break;
            case "6.3":
                n = "8.1"
        } else e.android ? n = i(/Android ([._\d]+)/.exec(t), 1) : e.iOS ? n = i(/OS ([._\d]+)/.exec(t), 1) : e.mac && (n = i(/Mac OS X (10[._\d]+)/.exec(t), 1));
        if (n) {
            r = parseInt(n, 10);
            var a = n.split(/[._]/);
            a && (o = parseInt(a[1], 10))
        }
        return {
            version: n,
            major: r,
            minor: o
        }
    }

    function a() {
        var e = !1;
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function() {
                    e = !0
                }
            });
            window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t)
        } catch (e) {}
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(29),
        c = n(0);
    n.d(t, "Browser", function() {
        return f
    }), n.d(t, "OS", function() {
        return d
    }), n.d(t, "Features", function() {
        return p
    });
    var s = c.c.memoize,
        l = navigator.userAgent,
        f = {},
        d = {},
        p = {},
        v = function() {
            return l.indexOf("Windows") > -1
        };
    Object.defineProperties(f, {
        androidNative: {
            get: s(u.c),
            enumerable: !0
        },
        chrome: {
            get: s(u.d),
            enumerable: !0
        },
        edge: {
            get: s(u.e),
            enumerable: !0
        },
        facebook: {
            get: s(u.g),
            enumerable: !0
        },
        firefox: {
            get: s(u.f),
            enumerable: !0
        },
        ie: {
            get: s(u.i),
            enumerable: !0
        },
        msie: {
            get: s(u.n),
            enumerable: !0
        },
        safari: {
            get: s(u.q),
            enumerable: !0
        },
        version: {
            get: s(r.bind(this, f, l)),
            enumerable: !0
        }
    }), Object.defineProperties(d, {
        android: {
            get: s(u.b),
            enumerable: !0
        },
        iOS: {
            get: s(u.j),
            enumerable: !0
        },
        mobile: {
            get: s(u.o),
            enumerable: !0
        },
        mac: {
            get: s(u.p),
            enumerable: !0
        },
        iPad: {
            get: s(u.k),
            enumerable: !0
        },
        iPhone: {
            get: s(u.l),
            enumerable: !0
        },
        windows: {
            get: s(v),
            enumerable: !0
        },
        version: {
            get: s(o.bind(this, d, l)),
            enumerable: !0
        }
    }), Object.defineProperties(p, {
        flash: {
            get: s(u.h),
            enumerable: !0
        },
        flashVersion: {
            get: s(u.a),
            enumerable: !0
        },
        iframe: {
            get: s(u.m),
            enumerable: !0
        },
        passiveEvents: {
            get: s(a),
            enumerable: !0
        },
        backgroundLoading: {
            get: s(function() {
                return !(d.iOS || f.safari)
            }),
            enumerable: !0
        }
    })
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return b || (b = o(e)), b
    }

    function i() {
        1 == 1
    }

    function o(e) {
        var t = e.get("controls"),
            n = a(),
            r = u(e, "html5");
        return t && n && r ? c() : t && r ? s() : t && n ? l() : t ? f() : d()
    }

    function a() {
        var e = window.IntersectionObserverEntry;
        return !(e && "IntersectionObserver" in window && "intersectionRatio" in e.prototype)
    }

    function u(e, t) {
        var n = e.get("playlist");
        if (Array.isArray(n) && n.length)
            for (var r = Object(v.a)(n[0]).sources, i = 0; i < r.length; i++)
                for (var o = r[i], a = e.getProviders(), u = 0; u < h.a.length; u++) {
                    var c = h.a[u];
                    if (a.providerSupports(c, o)) return c.name === t
                }
        return !1
    }

    function c() {
        return w.html5 = !0, n.e(0).then(function(e) {
            n(10);
            var t = n(4).default;
            return g.b.controls = n(3).default, Object(m.a)(n(111).default), t
        }.bind(null, n)).catch(i)
    }

    function s() {
        return w.html5 = !0, n.e(1).then(function(e) {
            var t = n(4).default;
            return g.b.controls = n(3).default, Object(m.a)(n(111).default), t
        }.bind(null, n)).catch(i)
    }

    function l() {
        return n.e(2).then(function(e) {
            n(10);
            var t = n(4).default;
            return g.b.controls = n(3).default, t
        }.bind(null, n)).catch(i)
    }

    function f() {
        return n.e(3).then(function(e) {
            var t = n(4).default;
            return g.b.controls = n(3).default, t
        }.bind(null, n)).catch(i)
    }

    function d() {
        return p().then(function() {
            return n.e(8).then(function(e) {
                return n(4).default
            }.bind(null, n)).catch(i)
        })
    }

    function p() {
        return a() ? n.e(10).then(function(e) {
            return n(10)
        }.bind(null, n)).catch(i) : y.b
    }
    n.d(t, "a", function() {
        return w
    }), t.c = r, t.b = i;
    var v = n(24),
        h = n(17),
        m = n(18),
        g = n(46),
        y = n(2),
        b = null,
        w = {}
}, , function(e, t, n) {
    "use strict";

    function r(e) {
        switch (void 0 === e ? "undefined" : c(e)) {
            case "string":
                return e.length > 0;
            case "object":
                return null !== e;
            case "undefined":
                return !1;
            default:
                return !0
        }
    }

    function i() {
        return "https:" === window.location.protocol
    }

    function o(e, t) {
        return 0 === e.indexOf("rtmp:") || "rtmp" === t
    }

    function a(e, t) {
        return "youtube" === t || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)
    }

    function u(e) {
        if (null === e) return "null";
        var t = void 0 === e ? "undefined" : c(e);
        return "object" === t && Array.isArray(e) ? "array" : t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.exists = r, t.isHTTPS = i, t.isRtmp = o, t.isYouTube = a, t.typeOf = u;
    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (Object(l.exists)(t) || (t = document.location.href), Object(l.exists)(e)) {
            if (i(e)) return e;
            var n = t.substring(0, t.indexOf("://") + 3),
                r = t.substring(n.length, t.indexOf("/", n.length + 1)),
                o = void 0;
            if (0 === e.indexOf("/")) o = e.split("/");
            else {
                var a = t.split("?")[0];
                a = a.substring(n.length + r.length + 1, a.lastIndexOf("/")), o = a.split("/").concat(e.split("/"))
            }
            for (var u = [], c = 0; c < o.length; c++) o[c] && Object(l.exists)(o[c]) && "." !== o[c] && (".." === o[c] ? u.pop() : u.push(o[c]));
            return n + r + "/" + u.join("/")
        }
    }

    function i(e) {
        return /^(?:(?:https?|file):)?\/\//.test(e)
    }

    function o(e) {
        return f.c.some(e, function(e) {
            return "parsererror" === e.nodeName
        })
    }

    function a(e) {
        var t = null;
        try {
            "DOMParser" in window ? (t = (new window.DOMParser).parseFromString(e, "text/xml"), (o(t.childNodes) || t.childNodes && o(t.childNodes[0].childNodes)) && (t = null)) : (t = new window.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
        } catch (e) {}
        return t
    }

    function u(e) {
        if (void 0 === e) return null;
        if ("string" == typeof e && e.length < 6) {
            var t = e.toLowerCase();
            if ("true" === t) return !0;
            if ("false" === t) return !1;
            if (!isNaN(Number(e)) && !isNaN(parseFloat(e))) return Number(e)
        }
        return e
    }

    function c(e) {
        return "string" == typeof e ? "" === e ? 0 : e.lastIndexOf("%") > -1 ? e : parseInt(e.replace("px", ""), 10) : e
    }

    function s(e, t) {
        if (e <= 0 && !t || f.c.isNaN(parseInt(e))) return "00:00";
        var n = e < 0 ? "-" : "";
        e = Math.abs(e);
        var r = Math.floor(e / 3600),
            i = Math.floor((e - 3600 * r) / 60),
            o = Math.floor(e % 60);
        return n + (r ? r + ":" : "") + (i < 10 ? "0" : "") + i + ":" + (o < 10 ? "0" : "") + o
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getAbsolutePath = r, t.isAbsolutePath = i, t.parseXML = a, t.serialize = u, t.parseDimension = c, t.timeFormat = s;
    var l = n(11),
        f = n(0)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = "";
        return e && (e.localName ? t = e.localName : e.baseName && (t = e.baseName)), t
    }

    function i(e) {
        var t = "";
        return e && (e.textContent ? t = Object(u.h)(e.textContent) : e.text && (t = Object(u.h)(e.text))), t
    }

    function o(e, t) {
        return e.childNodes[t]
    }

    function a(e) {
        return e.childNodes ? e.childNodes.length : 0
    }
    t.b = r, t.d = i, t.a = o, t.c = a;
    var u = n(1)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = {
            setup: [i, o, a, u, c, l, f, d, s],
            drm: [c, l, f, d],
            ads: [l, f, d, s, c],
            jwpsrv: [i, o, a, u, c, l, d, s],
            discovery: [l, c, d, f]
        };
        return function(n) {
            return t[n] && t[n].indexOf(e) > -1
        }
    }
    t.a = r;
    var i = "free",
        o = "starter",
        a = "business",
        u = "premium",
        c = "enterprise",
        s = "platinum",
        l = "ads",
        f = "unlimited",
        d = "trial"
}, function(e, t, n) {
    "use strict";
    t.a = {
        debug: !1
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n.d(t, "getScriptPath", function() {
        return i
    }), n.d(t, "repo", function() {
        return o
    }), n.d(t, "versionCheck", function() {
        return a
    }), n.d(t, "loadFrom", function() {
        return u
    });
    var r = n(19),
        i = function(e) {
            for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) {
                var r = t[n].src;
                if (r) {
                    var i = r.lastIndexOf("/" + e);
                    if (i >= 0) return r.substr(0, i + 1)
                }
            }
            return ""
        },
        o = function() {
            var e = "//ssl.p.jwpcdn.com/player/v/8.1.1/";
            return ("file:" === window.location.protocol ? "https:" : "") + e
        },
        a = function(e) {
            var t = ("0" + e).split(/\W/),
                n = r.a.split(/\W/),
                i = parseFloat(t[0]),
                o = parseFloat(n[0]);
            return !(i > o) && !(i === o && parseFloat("0" + t[1]) > parseFloat(n[1]))
        },
        u = function() {
            return o()
        }
}, function(e, t, n) {
    "use strict";

    function r() {
        return !!window.MediaSource && !!window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
    }

    function i(e) {
        if (f.Browser.safari) return !1;
        if (e.drm && !Object(v.a)(e.drm)) return !1;
        var t = window.MediaSource;
        if (!window.HTMLVideoElement || !t) return !1;
        var n = !0;
        return e.mediaTypes && (n = p.c.all(e.mediaTypes, function(e) {
            return t.isTypeSupported(e)
        })), n && ("dash" === e.type || "mpd" === e.type || (e.file || "").indexOf("mpd-time-csf") > -1)
    }
    var o = n(52),
        a = n(11),
        u = n(32),
        c = {
            aac: "audio/mp4",
            mp4: "video/mp4",
            f4v: "video/mp4",
            m4v: "video/mp4",
            mov: "video/mp4",
            mp3: "audio/mpeg",
            mpeg: "audio/mpeg",
            ogv: "video/ogg",
            ogg: "video/ogg",
            oga: "video/ogg",
            vorbis: "video/ogg",
            webm: "video/webm",
            f4a: "video/aac",
            m3u8: "application/vnd.apple.mpegurl",
            m3u: "application/vnd.apple.mpegurl",
            hls: "application/vnd.apple.mpegurl"
        },
        s = [{
            name: "html5",
            supports: function(e) {
                if (!1 === Object(o.a)(e)) return !1;
                if (!u.a.canPlayType) return !1;
                var t = e.file,
                    n = e.type;
                if (Object(a.isRtmp)(t, n)) return !1;
                var r = e.mimeType || c[n];
                return !!r && !!u.a.canPlayType(r)
            }
        }],
        l = s,
        f = n(8),
        d = n(14),
        p = n(0),
        v = n(28),
        h = p.c.find(l, p.c.matches({
            name: "html5"
        })),
        m = h.supports;
    h.supports = function(e, t) {
        var n = m.apply(this, arguments);
        if (n && e.drm && "hls" === e.type) {
            var r = Object(d.a)(t),
                i = r("drm");
            if (i && e.drm.fairplay) {
                var o = window.WebKitMediaKeys;
                return o && o.isTypeSupported && o.isTypeSupported("com.apple.fps.1_0", "video/mp4")
            }
            return i
        }
        return n
    }, l.push({
        name: "shaka",
        supports: i
    }), l.splice(0, 0, {
        name: "hlsjs",
        supports: function(e) {
            if (e.drm) return !1;
            var t = f.Browser.chrome || f.Browser.firefox || f.Browser.edge || f.Browser.ie && 11 === f.Browser.version.major,
                n = f.OS.android && !!e.hlsjsdefault,
                i = !f.OS.iOS && f.Browser.safari && !!e.safarihlsjs,
                o = r() && (t || n || i),
                a = e.file.indexOf(".m3u8") > -1,
                u = "hls" === e.type || "m3u8" === e.type;
            return o && (a || u)
        }
    }), l.push({
        name: "flash",
        supports: function(e) {
            if (!f.Features.flash || e.drm) return !1;
            var t = e.type;
            return "hls" === t || "m3u8" === t || !Object(a.isRtmp)(e.file, t) && ["flv", "f4v", "mov", "m4a", "m4v", "mp4", "aac", "f4a", "mp3", "mpeg", "smil"].indexOf(t) > -1
        }
    });
    t.a = l
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.getName().name;
        if (!i.a[t]) {
            if (!u.c.find(o.a, u.c.matches({
                    name: t
                }))) {
                if (!u.c.isFunction(e.supports)) throw new Error("Tried to register a provider with an invalid object");
                o.a.unshift({
                    name: t,
                    supports: e.supports
                })
            }
            u.c.defaults(e.prototype, a.a), i.a[t] = e
        }
    }
    t.a = r;
    var i = n(33),
        o = n(17),
        a = n(44),
        u = n(0)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = "8.1.1+commercial_v8-1-1.232.commercial.924cff.hlsjs..jwplayer.b56ca0.dai.c24260.freewheel.782b72.googima.9f7070.vast.404e57.jwpsrv.f6eb5e.gapro.fb7ea6.related.c64ebe"
}, function(e, t, n) {
    "use strict";

    function r() {
        return a + o.now()
    }
    var i = n(22),
        o = window.performance || {
            timing: {}
        },
        a = o.timing.navigationStart || Object(i.a)();
    "now" in o || (o.now = function() {
        return Object(i.a)() - a
    });
    var u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        c = function() {
            var e = {},
                t = {},
                n = {},
                i = {};
            return {
                start: function(t) {
                    e[t] = r(), n[t] = n[t] + 1 || 1
                },
                end: function(n) {
                    if (e[n]) {
                        var i = r(),
                            o = i - e[n];
                        delete e[n], t[n] = t[n] + o || o
                    }
                },
                dump: function() {
                    var o = u({}, t);
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var c = r(),
                                s = c - e[a];
                            o[a] = o[a] + s || s
                        }
                    return {
                        counts: u({}, n),
                        sums: o,
                        events: u({}, i)
                    }
                },
                tick: function(e) {
                    i[e] = r()
                },
                clear: function(e) {
                    delete i[e]
                },
                between: function(e, t) {
                    return i[t] && i[e] ? i[t] - i[e] : null
                }
            }
        };
    t.a = c
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = document.createElement("link");
        return t.type = "text/css", t.rel = "stylesheet", t.href = e, t
    }

    function i(e) {
        var t = document.createElement("script");
        return t.type = "text/javascript", t.charset = "utf-8", t.async = !0, t.timeout = l, t.src = e, t
    }
    var o = n(7),
        a = n(5),
        u = n(2),
        c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        s = {},
        l = 15e3,
        f = 2,
        d = 3,
        p = function(e, t) {
            function n(e) {
                p = f, c.trigger(a.q, e).off()
            }

            function o(e) {
                p = d, c.trigger(a._3, e).off()
            }
            var c = this,
                p = 0;
            this.getStatus = function() {
                return p
            }, this.load = function() {
                var a = s[e];
                return 0 !== p ? a : (a && a.then(o).catch(n), p = 1, a = new u.a(function(a, u) {
                    var c = t ? r : i,
                        s = c(e),
                        f = function() {
                            s.onerror = s.onload = null, clearTimeout(p)
                        },
                        d = function(e) {
                            f(), n(e), u(e)
                        },
                        p = setTimeout(function() {
                            d(new Error("Network timeout " + e))
                        }, l);
                    s.onerror = function() {
                        d(new Error("Failed to load " + e))
                    }, s.onload = function(e) {
                        f(), o(e), a(e)
                    };
                    var v = document.getElementsByTagName("head")[0] || document.documentElement;
                    v.insertBefore(s, v.firstChild)
                }), s[e] = a, a)
            }
        };
    c(p.prototype, o.a), t.a = p
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = Date.now || function() {
        return (new Date).getTime()
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = e.name,
            i = document.createElement("div");
        i.id = n.id + "_" + r, i.className = "jw-plugin jw-reset";
        var o = s({}, t),
            a = e.getNewInstance(n, o, i);
        n.addPlugin(r, a)
    }

    function i(e) {
        switch (y(e)) {
            case m:
                return e;
            case g:
                return Object(p.getAbsolutePath)(e, window.location.href)
        }
    }

    function o(e) {
        return S[e] = new f, S[e]
    }

    function a(e, t) {
        var n = e.get("id"),
            r = e.get("plugins");
        window.jwplayerPluginJsonp = P;
        var i = o(n);
        return i.load(t, E, r).then(function(e) {
            i === S[n] && (e && e.forEach(function(e) {
                e instanceof Error && Object(j.b)(e.message)
            }), delete window.jwplayerPluginJsonp)
        })
    }
    var u = n(2),
        c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        l = function() {
            this.load = function(e, t, n) {
                return n && "object" === (void 0 === n ? "undefined" : c(n)) ? u.a.all(Object.keys(n).filter(function(e) {
                    return e
                }).map(function(i) {
                    var o = t.addPlugin(i, !0),
                        a = n[i];
                    return o.load().then(function() {
                        r(o, a, e)
                    }).catch(function(e) {
                        return e instanceof Error ? e : new Error("Error in " + i + ' "' + e + '"')
                    })
                })) : u.b
            }
        },
        f = l,
        d = n(21),
        p = n(12),
        v = n(1),
        h = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        m = 0,
        g = 1,
        y = function(e) {
            if ("string" == typeof e) {
                e = e.split("?")[0];
                var t = e.indexOf("://");
                if (t > 0) return m;
                var n = e.indexOf("/"),
                    r = Object(v.a)(e);
                return !(t < 0 && n < 0) || r && isNaN(r) ? g : 2
            }
        },
        b = function(e) {
            this.url = e
        };
    h(b.prototype, {
        load: function() {
            if (2 === y(this.url)) return u.b;
            var e = new d.a(i(this.url));
            return this.loader = e, e.load()
        },
        registerPlugin: function(e, t, n) {
            this.name = e, this.target = t, this.js = n
        },
        getNewInstance: function(e, t, n) {
            var r = this.js,
                i = new r(e, t, n);
            return i.addToPlayer = function() {
                var t = e.getContainer().querySelector(".jw-overlays");
                t && (n.left = t.style.left, n.top = t.style.top, t.appendChild(n), i.displayArea = t)
            }, i.resizeHandler = function() {
                var e = i.displayArea;
                e && i.resize(e.clientWidth, e.clientHeight)
            }, i
        }
    });
    var w = b,
        j = n(6),
        O = {},
        k = function(e) {
            return e.replace(/^(.*\/)?([^-]*)-?.*\.(js)$/, "$2")
        },
        C = function() {
            this.addPlugin = function(e, t) {
                var n = k(e),
                    r = O[n];
                return r ? t && r.url !== e && Object(j.b)('JW Plugin "' + n + '" already loaded from "' + r.url + '". Ignoring "' + e + '."') : (r = new w(e), O[n] = r), r
            }, this.getPlugins = function() {
                return O
            }
        },
        x = C;
    n.d(t, "b", function() {
        return P
    }), t.a = a;
    var E = new x,
        S = {},
        P = function(e, t, n) {
            var r = E.addPlugin(e);
            r.js || r.registerPlugin(e, t, n)
        }
}, function(e, t, n) {
    "use strict";
    var r = n(36),
        i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = function(e) {
            if (e && e.file) return i({}, {
                kind: "captions",
                default: !1
            }, e)
        },
        a = o,
        u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        c = Array.isArray,
        s = function(e) {
            e = e || {}, c(e.tracks) || delete e.tracks;
            var t = u({}, {
                sources: [],
                tracks: [],
                minDvrWindow: 120
            }, e);
            t.sources !== Object(t.sources) || c(t.sources) || (t.sources = [Object(r.a)(t.sources)]), c(t.sources) && 0 !== t.sources.length || (e.levels ? t.sources = e.levels : t.sources = [Object(r.a)(e)]);
            for (var n = 0; n < t.sources.length; n++) {
                var i = t.sources[n];
                if (i) {
                    var o = i.default;
                    i.default = !!o && "true" === o.toString(), t.sources[n].label || (t.sources[n].label = n.toString()), t.sources[n] = Object(r.a)(t.sources[n])
                }
            }
            return t.sources = t.sources.filter(function(e) {
                return !!e
            }), c(t.tracks) || (t.tracks = []), c(t.captions) && (t.tracks = t.tracks.concat(t.captions), delete t.captions), t.tracks = t.tracks.map(a).filter(function(e) {
                return !!e
            }), t
        };
    t.a = s
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = " " + t + " ";
        return 1 === e.nodeType && (" " + e.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(n) >= 0
    }

    function i(e) {
        var t = document.createElement("div");
        return t.innerHTML = e, t.firstChild
    }

    function o(e) {
        return e + (e.toString().indexOf("%") > 0 ? "" : "px")
    }

    function a(e) {
        return b.c.isString(e.className) ? e.className.split(" ") : []
    }

    function u(e, t) {
        t = Object(y.h)(t), e.className !== t && (e.className = t)
    }

    function c(e) {
        return e.classList ? e.classList : a(e)
    }

    function s(e, t) {
        var n = a(e),
            r = b.c.isArray(t) ? t : t.split(" ");
        b.c.each(r, function(e) {
            b.c.contains(n, e) || n.push(e)
        }), u(e, n.join(" "))
    }

    function l(e, t) {
        var n = a(e),
            r = b.c.isArray(t) ? t : t.split(" ");
        u(e, b.c.difference(n, r).join(" "))
    }

    function f(e, t, n) {
        var r = e.className || "";
        t.test(r) ? r = r.replace(t, n) : n && (r += " " + n), u(e, r)
    }

    function d(e, t, n) {
        var i = r(e, t);
        (n = b.c.isBoolean(n) ? n : !i) !== i && (n ? s(e, t) : l(e, t))
    }

    function p(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function v(e) {
        var t = document.createElement("link");
        t.rel = "stylesheet", t.href = e, document.getElementsByTagName("head")[0].appendChild(t)
    }

    function h(e) {
        e && p(e)
    }

    function m(e) {
        var t = {
            left: 0,
            right: 0,
            width: 0,
            height: 0,
            top: 0,
            bottom: 0
        };
        if (!e || !document.body.contains(e)) return t;
        var n = e.getBoundingClientRect(),
            r = window.pageYOffset,
            i = window.pageXOffset;
        return n.width || n.height || n.left || n.top ? (t.left = n.left + i, t.right = n.right + i, t.top = n.top + r, t.bottom = n.bottom + r, t.width = n.right - n.left, t.height = n.bottom - n.top, t) : t
    }

    function g(e, t) {
        e.insertBefore(t, e.firstChild)
    }
    t.h = r, t.e = i, t.l = o, t.d = c, t.a = s, t.j = l, t.k = f, t.m = d, t.g = p, t.b = v, t.f = h, t.c = m, t.i = g;
    var y = n(1),
        b = n(0)
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        n = n || "all-players";
        var o = "";
        if ("object" === (void 0 === t ? "undefined" : d(t))) {
            var a = document.createElement("div");
            i(a, t);
            var u = a.style.cssText;
            r && u && (u = u.replace(/;/g, " !important;")), o = "{" + u + "}"
        } else "string" == typeof t && (o = t);
        if ("" === o || "{}" === o) return void f.a.clear(n, e);
        f.a.style([
            [e, e + o]
        ], n)
    }

    function i(e, t) {
        if (void 0 !== e && null !== e) {
            void 0 === e.length && (e = [e]);
            var n, r = {};
            for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = a(n, t[n]));
            for (var i = 0; i < e.length; i++) {
                var u, c = e[i];
                if (void 0 !== c && null !== c)
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (u = o(n), c.style[u] !== r[n] && (c.style[u] = r[n]))
            }
        }
    }

    function o(e) {
        e = e.split("-");
        for (var t = 1; t < e.length; t++) e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1);
        return e.join("")
    }

    function a(e, t) {
        return "" === t || void 0 === t || null === t ? "" : "string" == typeof t && isNaN(t) ? /png|gif|jpe?g/i.test(t) && t.indexOf("url") < 0 ? "url(" + t + ")" : t : 0 === t || "z-index" === e || "opacity" === e ? "" + t : /color/i.test(e) ? "#" + Object(s.d)(t.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(t) + "px"
    }

    function u(e, t) {
        i(e, {
            transform: t,
            webkitTransform: t,
            msTransform: t,
            mozTransform: t,
            oTransform: t
        })
    }

    function c(e, t) {
        var n = "rgb",
            r = void 0 !== t && 100 !== t;
        if (r && (n += "a"), !v) {
            var i = document.createElement("canvas");
            i.height = 1, i.width = 1, v = i.getContext("2d")
        }
        e ? isNaN(parseInt(e, 16)) || (e = "#" + e) : e = "#000000", v.clearRect(0, 0, 1, 1), v.fillStyle = e, v.fillRect(0, 0, 1, 1);
        var o = v.getImageData(0, 0, 1, 1).data;
        return n += "(" + o[0] + ", " + o[1] + ", " + o[2], r && (n += ", " + t / 100), n + ")"
    }
    n.d(t, "a", function() {
        return p
    }), t.b = r, t.d = i, t.e = u, t.c = c;
    var s = n(1),
        l = n(39),
        f = n.n(l),
        d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        p = f.a.clear,
        v = void 0
}, function(e, t, n) {
    "use strict";
    var r = [];
    t.a = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e.some(function(e) {
            return !!e.drm || e.sources.some(function(e) {
                return !!e.drm
            })
        })
    }

    function i(e) {
        return new l.a(function(t, n) {
            var r = void 0;
            try {
                r = new window.MSMediaKeys(e)
            } catch (e) {
                return void n(e)
            }
            t(r)
        })
    }

    function o(e) {
        if (v) return v;
        if (a() && Object(s.a)(e)("drm")) {
            var t = i;
            return navigator.requestMediaKeySystemAccess && (t = navigator.requestMediaKeySystemAccess.bind(navigator)), f.forEach(function(e) {
                var n = t(e.keyName, [{
                    initDataTypes: ["cenc"],
                    videoCapabilities: [{
                        contentType: 'video/mp4;codecs="avc1.4d401e"'
                    }],
                    audioCapabilities: [{
                        contentType: 'audio/mp4;codecs="mp4a.40.2"'
                    }]
                }]).then(function() {
                    p[e.configName] = !0
                }).catch(function() {
                    p[e.configName] = !1
                });
                d.push(n)
            }), v = l.a.all(d)
        }
        return l.b
    }

    function a() {
        return !!navigator.requestMediaKeySystemAccess && !!MediaKeySystemAccess.prototype.getConfiguration || !!window.MSMediaKeys
    }

    function u(e) {
        return p[e]
    }

    function c(e) {
        if (v) return Object.keys(e).some(function(e) {
            return u(e)
        })
    }
    t.b = r, t.d = o, t.c = u, t.a = c;
    var s = n(14),
        l = n(2),
        f = [{
            configName: "clearkey",
            keyName: "org.w3.clearkey"
        }, {
            configName: "widevine",
            keyName: "com.widevine.alpha"
        }, {
            configName: "playready",
            keyName: "com.microsoft.playready"
        }],
        d = [],
        p = {},
        v = void 0
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return null !== g.match(e)
    }

    function i(e) {
        return function() {
            return r(e)
        }
    }

    function o() {
        var e = m();
        return !!(e && e >= 18)
    }

    function a() {
        return r(/\sEdge\/\d+/i)
    }

    function u() {
        return r(/msie/i)
    }

    function c() {
        return r(/\s(?:Chrome|CriOS)\//i) && !a()
    }

    function s() {
        return a() || b() || u()
    }

    function l() {
        return r(/safari/i) && !r(/(?:Chrome|CriOS|chromium|android|phantom)/i)
    }

    function f() {
        return r(/iP(hone|ad|od)/i)
    }

    function d() {
        return !(r(/chrome\/[123456789]/i) && !r(/chrome\/18/i) && !y()) && p()
    }

    function p() {
        return r(/Android/i) && !r(/Windows Phone/i)
    }

    function v() {
        return f() || p() || r(/Windows Phone/i)
    }

    function h() {
        try {
            return window.self !== window.top
        } catch (e) {
            return !0
        }
    }

    function m() {
        if (p()) return 0;
        var e, t = navigator.plugins;
        if (t && (e = t["Shockwave Flash"]) && e.description) return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/, "$1"));
        if (void 0 !== window.ActiveXObject) {
            try {
                if (e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, "."))
            } catch (e) {
                return 0
            }
            return e
        }
        return 0
    }
    t.h = o, n.d(t, "f", function() {
        return y
    }), n.d(t, "l", function() {
        return w
    }), n.d(t, "k", function() {
        return j
    }), n.d(t, "p", function() {
        return O
    }), n.d(t, "g", function() {
        return k
    }), t.e = a, t.n = u, t.d = c, t.i = s, t.q = l, t.j = f, t.c = d, t.b = p, t.o = v, t.m = h, t.a = m;
    var g = navigator.userAgent,
        y = i(/gecko\//i),
        b = i(/trident\/.+rv:\s*11/i),
        w = i(/iP(hone|od)/i),
        j = i(/iPad/i),
        O = i(/Macintosh/i),
        k = i(/FBAV/i)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        this.config = e || {}
    }
    var i = n(17),
        o = n(18),
        a = n(33),
        u = n(9),
        c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        s = {
            html5: function() {
                return n.e(7).then(function(e) {
                    var t = n(111).default;
                    return Object(o.a)(t), t
                }.bind(null, n)).catch(u.b)
            }
        };
    c(r.prototype, {
        load: function(e) {
            return Promise.all(e.filter(function(e) {
                return !!s[e.name]
            }).map(function(e) {
                return (0, s[e.name])()
            }))
        },
        providerSupports: function(e, t) {
            return e.supports(t)
        },
        required: function(e) {
            var t = this;
            return e = e.slice(), i.a.filter(function(n) {
                for (var r = !1, i = e.length; i--;) {
                    var o = e[i],
                        a = o.sources[0];
                    if (a) {
                        var u = t.providerSupports(n, a);
                        u && e.splice(i, 1), r = r || u
                    }
                }
                return r
            })
        },
        choose: function(e) {
            e = e === Object(e) ? e : {};
            for (var t = i.a.length, n = 0; n < t; n++) {
                var r = i.a[n];
                if (this.providerSupports(r, e)) {
                    return {
                        priority: t - n - 1,
                        name: r.name,
                        type: e.type,
                        providerToCheck: r,
                        provider: a.a[r.name]
                    }
                }
            }
            return null
        }
    });
    var l = r,
        f = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        d = void 0;
    f(s, {
        shaka: function() {
            return n.e(5).then(function(e) {
                var t = n(120).default;
                return Object(o.a)(t), t
            }.bind(null, n)).catch(u.b)
        },
        hlsjs: function() {
            return n.e(6).then(function(e) {
                var t = n(121).default;
                return t.setEdition && t.setEdition(d), Object(o.a)(t), t
            }.bind(null, n)).catch(u.b)
        },
        flash: function() {
            return n.e(9).then(function(e) {
                var t = n(122).default;
                return Object(o.a)(t), t
            }.bind(null, n)).catch(u.b)
        }
    }), l.prototype.providerSupports = function(e, t) {
        return d = this.config.edition, e.supports(t, d)
    };
    t.a = l
}, function(e, t, n) {
    "use strict";

    function r(e) {
        this.message = e
    }

    function i(e) {
        var t = String(e).replace(/=+$/, "");
        if (t.length % 4 == 1) throw new r("'atob' failed: The string to be decoded is not correctly encoded.");
        for (var n, i, a = "", u = 0, c = 0; i = t.charAt(c++); ~i && (n = u % 4 ? 64 * n + i : i, u++ % 4) ? a += String.fromCharCode(255 & n >> (-2 * u & 6)) : 0) i = o.indexOf(i);
        return a
    }
    n.d(t, "a", function() {
        return a
    });
    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    r.prototype = new Error, r.prototype.name = "InvalidCharacterError";
    var a = window.atob || i
}, function(e, t, n) {
    "use strict";
    var r = document.createElement("video");
    t.a = r
}, function(e, t, n) {
    "use strict";
    var r = {};
    t.a = r
}, function(e, t, n) {
    "use strict";
    var r = n(35),
        i = n(14),
        o = n(31),
        a = "invalid",
        u = function(e) {
            var t = void 0,
                n = void 0,
                u = void 0;
            this.edition = function() {
                    return u && u.getTime() < (new Date).getTime() ? a : t
                }, this.token = function() {
                    return n
                }, this.expiration = function() {
                    return u
                },
                function(e, c) {
                    try {
                        var s = Object(r.a)(e, Object(o.a)(c)),
                            l = s.split("/");
                        "pro" === (t = l[0]) && (t = "premium");
                        var f = Object(i.a)(t);
                        if (l.length > 2 && f("setup")) {
                            n = l[1];
                            var d = parseInt(l[2]);
                            d > 0 && (u = new Date, u.setTime(d))
                        } else t = a
                    } catch (e) {
                        t = a
                    }
                }(e || "", "NDh2aU1Cb0NHRG5hcDFRZQ==")
        };
    t.a = u
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return Object(s.a)(e)
    }

    function i(e) {
        return unescape(encodeURIComponent(e))
    }

    function o(e) {
        try {
            return decodeURIComponent(escape(e))
        } catch (t) {
            return e
        }
    }

    function a(e) {
        for (var t = new Array(Math.ceil(e.length / 4)), n = 0; n < t.length; n++) t[n] = e.charCodeAt(4 * n) + (e.charCodeAt(4 * n + 1) << 8) + (e.charCodeAt(4 * n + 2) << 16) + (e.charCodeAt(4 * n + 3) << 24);
        return t
    }

    function u(e) {
        for (var t = new Array(e.length), n = 0; n < e.length; n++) t[n] = String.fromCharCode(255 & e[n], e[n] >>> 8 & 255, e[n] >>> 16 & 255, e[n] >>> 24 & 255);
        return t.join("")
    }

    function c(e, t) {
        if (e = String(e), t = String(t), 0 === e.length) return "";
        for (var n = a(r(e)), c = a(i(t).slice(0, 16)), s = n.length, l = n[s - 1], f = n[0], d = void 0, p = void 0, v = 2654435769 * Math.floor(6 + 52 / s); v;) {
            p = v >>> 2 & 3;
            for (var h = s - 1; h >= 0; h--) l = n[h > 0 ? h - 1 : s - 1], d = (l >>> 5 ^ f << 2) + (f >>> 3 ^ l << 4) ^ (v ^ f) + (c[3 & h ^ p] ^ l), f = n[h] -= d;
            v -= 2654435769
        }
        return o(u(n).replace(/\0+$/, ""))
    }
    t.a = c;
    var s = n(31)
}, function(e, t, n) {
    "use strict";
    var r = n(11),
        i = n(1),
        o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        a = function(e) {
            if (e && e.file) {
                var t = o({}, {
                    default: !1
                }, e);
                t.file = Object(i.h)("" + t.file);
                var n = /^[^\/]+\/(?:x-)?([^\/]+)$/;
                if (n.test(t.type) && (t.mimeType = t.type, t.type = t.type.replace(n, "$1")), Object(r.isYouTube)(t.file) ? t.type = "youtube" : Object(r.isRtmp)(t.file) ? t.type = "rtmp" : t.type || (t.type = Object(i.a)(t.file)), t.type) {
                    switch (t.type) {
                        case "m3u8":
                        case "vnd.apple.mpegurl":
                            t.type = "hls";
                            break;
                        case "dash+xml":
                            t.type = "dash";
                            break;
                        case "m4a":
                            t.type = "aac";
                            break;
                        case "smil":
                            t.type = "rtmp"
                    }
                    return Object.keys(t).forEach(function(e) {
                        "" === t[e] && delete t[e]
                    }), t
                }
            }
        };
    t.a = a
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var t = [], n = 0; n < Object(a.c)(e); n++) {
            var r = e.childNodes[n];
            "jwplayer" === r.prefix && "mediatypes" === Object(a.b)(r).toLowerCase() && t.push(Object(a.d)(r))
        }
        return t
    }

    function i(e) {
        var t = [];
        t.feedData = {};
        for (var n = 0; n < Object(a.c)(e); n++) {
            var r = Object(a.a)(e, n);
            if ("channel" === Object(a.b)(r).toLowerCase())
                for (var i = 0; i < Object(a.c)(r); i++) {
                    var u = Object(a.a)(r, i),
                        c = Object(a.b)(u).toLowerCase();
                    "item" === c ? t.push(o(u)) : c && (t.feedData[c] = Object(a.d)(u))
                }
        }
        return t
    }

    function o(e) {
        for (var t = {}, n = 0; n < e.childNodes.length; n++) {
            var r = e.childNodes[n],
                i = Object(a.b)(r);
            if (i) switch (i.toLowerCase()) {
                case "enclosure":
                    t.file = Object(u.i)(r, "url");
                    break;
                case "title":
                    t.title = Object(a.d)(r);
                    break;
                case "guid":
                    t.mediaid = Object(a.d)(r);
                    break;
                case "pubdate":
                    t.date = Object(a.d)(r);
                    break;
                case "description":
                    t.description = Object(a.d)(r);
                    break;
                case "link":
                    t.link = Object(a.d)(r);
                    break;
                case "category":
                    t.tags ? t.tags += Object(a.d)(r) : t.tags = Object(a.d)(r)
            }
        }
        return new p.a(d(e, l(e, t)))
    }
    var a = n(13),
        u = n(1),
        c = n(6),
        s = function e(t, n) {
            for (var i = [], o = 0; o < Object(a.c)(t); o++) {
                var s = t.childNodes[o];
                if ("media" === s.prefix) {
                    if (!Object(a.b)(s)) continue;
                    switch (Object(a.b)(s).toLowerCase()) {
                        case "content":
                            if (Object(u.i)(s, "duration") && (n.duration = c.a.seconds(Object(u.i)(s, "duration"))), Object(u.i)(s, "url")) {
                                n.sources || (n.sources = []);
                                var l = {
                                        file: Object(u.i)(s, "url"),
                                        type: Object(u.i)(s, "type"),
                                        width: Object(u.i)(s, "width"),
                                        label: Object(u.i)(s, "label")
                                    },
                                    f = r(s);
                                f.length && (l.mediaTypes = f), n.sources.push(l)
                            }
                            Object(a.c)(s) > 0 && (n = e(s, n));
                            break;
                        case "title":
                            n.title = Object(a.d)(s);
                            break;
                        case "description":
                            n.description = Object(a.d)(s);
                            break;
                        case "guid":
                            n.mediaid = Object(a.d)(s);
                            break;
                        case "thumbnail":
                            n.image || (n.image = Object(u.i)(s, "url"));
                            break;
                        case "group":
                            e(s, n);
                            break;
                        case "subtitle":
                            var d = {};
                            d.file = Object(u.i)(s, "url"), d.kind = "captions", Object(u.i)(s, "lang").length > 0 && (d.label = function(e) {
                                var t = {
                                    zh: "Chinese",
                                    nl: "Dutch",
                                    en: "English",
                                    fr: "French",
                                    de: "German",
                                    it: "Italian",
                                    ja: "Japanese",
                                    pt: "Portuguese",
                                    ru: "Russian",
                                    es: "Spanish"
                                };
                                return t[e] ? t[e] : e
                            }(Object(u.i)(s, "lang"))), i.push(d)
                    }
                }
            }
            n.hasOwnProperty("tracks") || (n.tracks = []);
            for (var p = 0; p < i.length; p++) n.tracks.push(i[p]);
            return n
        },
        l = s,
        f = function(e, t) {
            for (var n = "default", r = [], i = [], o = 0; o < e.childNodes.length; o++) {
                var s = e.childNodes[o];
                if ("jwplayer" === s.prefix) {
                    var l = Object(a.b)(s);
                    "source" === l ? (delete t.sources, r.push({
                        file: Object(u.i)(s, "file"),
                        default: Object(u.i)(s, n),
                        label: Object(u.i)(s, "label"),
                        type: Object(u.i)(s, "type")
                    })) : "track" === l ? (delete t.tracks, i.push({
                        file: Object(u.i)(s, "file"),
                        default: Object(u.i)(s, n),
                        kind: Object(u.i)(s, "kind"),
                        label: Object(u.i)(s, "label")
                    })) : (t[l] = c.a.serialize(Object(a.d)(s)), "file" === l && t.sources && delete t.sources)
                }
                t.file || (t.file = t.link)
            }
            if (r.length) {
                t.sources = [];
                for (var f = 0; f < r.length; f++) r[f].file.length > 0 && (r[f][n] = "true" === r[f][n], r[f].label.length || delete r[f].label, t.sources.push(r[f]))
            }
            if (i.length) {
                t.tracks = [];
                for (var d = 0; d < i.length; d++) i[d].file.length > 0 && (i[d][n] = "true" === i[d][n], i[d].kind = i[d].kind.length ? i[d].kind : "captions", i[d].label.length || delete i[d].label, t.tracks.push(i[d]))
            }
            return t
        },
        d = f,
        p = n(24);
    t.a = i
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]["page" + t] : e["page" + t]
    }

    function i(e) {
        var t = e || window.event;
        return e instanceof MouseEvent && ("which" in t ? 3 === t.which : "button" in t && 2 === t.button)
    }

    function o(e) {
        var t = e || window.event;
        return t instanceof KeyboardEvent && 13 === t.keyCode && (e.stopPropagation(), !0)
    }

    function a(e, t, n) {
        var r = void 0;
        return r = t instanceof MouseEvent || !t.touches && !t.changedTouches ? t : t.touches && t.touches.length ? t.touches[0] : t.changedTouches[0], {
            type: e,
            sourceEvent: t,
            target: t.target,
            currentTarget: n,
            pageX: r.pageX,
            pageY: r.pageY
        }
    }

    function u(e) {
        (e instanceof MouseEvent || e instanceof v) && (e.preventManipulation && e.preventManipulation(), e.preventDefault && e.preventDefault())
    }

    function c(e) {
        return g && e instanceof v || m && e instanceof h && "touch" === e.pointerType ? "touch" : "mouse"
    }
    t.b = c;
    var s = n(8),
        l = n(5),
        f = n(7),
        d = n(22),
        p = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        v = window.TouchEvent,
        h = window.PointerEvent,
        m = "PointerEvent" in window && !s.OS.android,
        g = "ontouchstart" in window,
        y = !(m || g && s.OS.mobile),
        b = s.Browser.firefox && s.OS.mac,
        w = function(e, t) {
            function n(e) {
                "touch" !== e.pointerType && j(l.R, e)
            }

            function c(e) {
                "touch" !== e.pointerType && j(l.O, e)
            }

            function f(t) {
                (y || m && "touch" !== t.pointerType && !e.contains(document.elementFromPoint(t.x, t.y))) && j(l.Q, t)
            }

            function p(e) {
                o(e) && j(l.p, e)
            }

            function v(e, t, n) {
                e.removeEventListener(t, n), e.addEventListener(t, n)
            }

            function h(n) {
                P = n.target, C = r(n, "X"), x = r(n, "Y"), i(n) || ("pointerdown" === n.type && n.isPrimary ? (t.preventScrolling && (T = n.pointerId, e.setPointerCapture(T)), v(e, "pointermove", g, _), v(e, "pointercancel", w), "mouse" === n.pointerType && "OBJECT" === P.nodeName ? v(document, "mouseup", w) : v(e, "pointerup", w)) : "mousedown" === n.type ? (v(document, "mousemove", g, _), b && "object" === n.target.nodeName.toLowerCase() ? v(e, "click", w) : v(document, "mouseup", w)) : "touchstart" === n.type && (v(P, "touchmove", g, _), v(P, "touchcancel", w), v(P, "touchend", w)), t.preventScrolling && u(n))
            }

            function g(e) {
                if (k) j(l.m, e);
                else {
                    var n = r(e, "X"),
                        i = r(e, "Y"),
                        o = n - C,
                        a = i - x;
                    o * o + a * a > 36 && (j(l.o, e), k = !0, j(l.m, e))
                }
                t.preventScrolling && u(e)
            }

            function w(n) {
                var r = "pointerup" === n.type || "pointercancel" === n.type;
                r && t.preventScrolling && e.releasePointerCapture(T), e.removeEventListener("pointermove", g), e.removeEventListener("pointercancel", w), e.removeEventListener("pointerup", w), document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", w), P && (P.removeEventListener("touchmove", g), P.removeEventListener("touchcancel", w), P.removeEventListener("touchend", w)), k ? j(l.n, n) : t.directSelect && n.target !== e || -1 !== n.type.indexOf("cancel") || ("mouseup" === n.type || "click" === n.type || r && "mouse" === n.pointerType ? j(l.h, n) : (j(l._10, n), "touchend" === n.type && u(n))), P = null, k = !1
            }

            function j(e, n) {
                var r = void 0;
                if (t.enableDoubleTap && (e === l.h || e === l._10))
                    if (Object(d.a)() - E < S) {
                        var i = e === l.h ? l.k : l.l;
                        r = a(i, n, O), N.trigger(i, r), E = 0
                    } else E = Object(d.a)();
                r = a(e, n, O), N.trigger(e, r)
            }
            var O = e,
                k = !1,
                C = 0,
                x = 0,
                E = 0,
                S = 300,
                P = void 0,
                T = void 0;
            t = t || {};
            var _ = !!s.Features.passiveEvents && {
                passive: !t.preventScrolling
            };
            m ? (e.addEventListener("pointerdown", h, _), t.useHover && (e.addEventListener("pointerover", n), e.addEventListener("pointerout", f)), t.useMove && e.addEventListener("pointermove", c)) : (y && (e.addEventListener("mousedown", h, _), t.useHover && (e.addEventListener("mouseover", n), e.addEventListener("mouseout", f)), t.useMove && e.addEventListener("mousemove", c)), e.addEventListener("touchstart", h, _)), e.addEventListener("keydown", p), t.useFocus && (e.addEventListener("focus", n), e.addEventListener("blur", f));
            var N = this;
            return this.triggerEvent = j, this.destroy = function() {
                this.off(), e.removeEventListener("touchstart", h), e.removeEventListener("mousedown", h), e.removeEventListener("keydown", p), P && (P.removeEventListener("touchmove", g), P.removeEventListener("touchcancel", w), P.removeEventListener("touchend", w), P = null), m && (t.preventScrolling && e.releasePointerCapture(T), e.removeEventListener("pointerover", n), e.removeEventListener("pointerdown", h), e.removeEventListener("pointermove", g), e.removeEventListener("pointermove", c), e.removeEventListener("pointercancel", w), e.removeEventListener("pointerout", f), e.removeEventListener("pointerup", w)), e.removeEventListener("click", w), e.removeEventListener("mouseover", n), e.removeEventListener("mousemove", c), e.removeEventListener("mouseout", f), document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", w), t.useFocus && (e.removeEventListener("focus", n), e.removeEventListener("blur", f))
            }, this
        };
    p(w.prototype, f.a), t.a = w
}, function(e, t, n) {
    var r;
    void 0 !== (r = function(e, t, n) {
        function r(e, t) {
            o(t, a(e))
        }

        function i(e, t) {
            var n = f[e];
            if (n)
                if (t) {
                    var r = n[t];
                    if (r)
                        for (var i = 0; i < r.parts.length; i += 1) r.parts[i]()
                } else {
                    for (var o = Object.keys(n), a = 0; a < o.length; a += 1)
                        for (var u = n[o[a]], c = 0; c < u.parts.length; c += 1) u.parts[c]();
                    delete f[e]
                }
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n],
                    i = (f[e] || {})[r.id];
                if (i) {
                    for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
                    for (; o < r.parts.length; o++) i.parts.push(s(e, r.parts[o]))
                } else {
                    for (var a = [], o = 0; o < r.parts.length; o++) a.push(s(e, r.parts[o]));
                    f[e] = f[e] || {}, f[e][r.id] = {
                        id: r.id,
                        parts: a
                    }
                }
            }
        }

        function a(e) {
            for (var t = [], n = {}, r = 0; r < e.length; r++) {
                var i = e[r],
                    o = i[0],
                    a = i[1],
                    u = i[2],
                    c = {
                        css: a,
                        media: u
                    };
                n[o] ? n[o].parts.push(c) : t.push(n[o] = {
                    id: o,
                    parts: [c]
                })
            }
            return t
        }

        function u(e) {
            p().appendChild(e)
        }

        function c(e) {
            var t = document.createElement("style");
            return t.type = "text/css", t.setAttribute("data-jwplayer-id", e), u(t), t
        }

        function s(e, t) {
            var n, r, i, o = d[e];
            o || (o = d[e] = {
                element: c(e),
                counter: 0
            });
            var a = o.counter++;
            return n = o.element, r = function(e) {
                    l(n, a, e)
                }, i = function() {
                    l(n, a, "")
                }, r(t.css),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media) return;
                        t = e, r(t.css)
                    } else i()
                }
        }

        function l(e, t, n) {
            if (e.styleSheet) e.styleSheet.cssText = v(t, n);
            else {
                var r = document.createTextNode(n),
                    i = e.childNodes,
                    o = i[t];
                o ? e.replaceChild(r, o) : e.appendChild(r)
            }
        }
        var f = {},
            d = {},
            p = function(e) {
                var t;
                return function() {
                    return void 0 === t && (t = e.apply(this, arguments)), t
                }
            }(function() {
                return document.head || document.getElementsByTagName("head")[0]
            });
        n.exports = {
            style: r,
            clear: i
        };
        var v = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    }.call(t, n, t, e)) && (e.exports = r)
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        function r() {
            for (; i.length > 0;) {
                var t = i.shift(),
                    n = t.command,
                    r = t.args;
                (o[n] || e[n]).apply(e, r)
            }
        }
        var i = [],
            o = {};
        t.forEach(function(t) {
            var a = e[t];
            o[t] = a, e[t] = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                n() ? i.push({
                    command: t,
                    args: e
                }) : (r(), a && a.apply(this, e))
            }
        }), Object.defineProperty(this, "queue", {
            enumerable: !0,
            get: function() {
                return i
            }
        }), this.flush = r, this.empty = function() {
            i.length = 0
        }, this.off = function() {
            t.forEach(function(t) {
                var n = o[t];
                n && (e[t] = n, delete o[t])
            })
        }, this.destroy = function() {
            this.off(), this.empty()
        }
    }
    t.a = r
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = t.indexOf(":") + 1,
            r = n > 0 ? t.substr(0, n) : "Error loading player:",
            u = t.substr(n),
            c = i(e.get("id"), r, u),
            s = e.get("width"),
            l = e.get("height"),
            f = Object(o.e)(c);
        return Object(a.d)(f, {
            width: s.toString().indexOf("%") > 0 ? s : s + "px",
            height: l.toString().indexOf("%") > 0 ? l : l + "px"
        }), f
    }
    var i = function(e) {
            return '<div id="' + e + '" class="jw-error jw-reset"><div class="jw-error-msg jw-reset"><style>[id="' + e + '"].jw-error{position:relative;background:#000;overflow:hidden;position:relative}[id="' + e + '"] .jw-error-msg{top:50%;left:50%;position:absolute;align-items:center;display:flex;transform:translate(-50%,-50%)}[id="' + e + '"] .jw-title{color:#FFF;position:static}[id="' + e + '"] .jw-title-primary,[id="' + e + '"] .jw-title-secondary{font:600 14px/1.35 Arial,Helvetica,sans-serif}[id="' + e + '"] .jw-title-secondary{font-weight:400}</style><div class="jw-icon jw-reset"></div><div class="jw-title jw-reset"><div class="jw-title-primary jw-reset">' + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "") + '</div><div class="jw-title-secondary jw-reset">' + (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + "</div></div></div></div>"
        },
        o = n(25),
        a = n(26);
    t.a = r
}, function(e, t, n) {
    "use strict";
    var r = n(7),
        i = {
            on: r.a.on,
            once: r.a.once,
            off: r.a.off,
            trigger: r.a.trigger,
            get: function(e) {
                return this.attributes = this.attributes || {}, this.attributes[e]
            },
            set: function(e, t) {
                if (this.attributes = this.attributes || {}, this.attributes[e] !== t) {
                    var n = this.attributes[e];
                    this.attributes[e] = t, this.trigger("change:" + e, this, t, n)
                }
            },
            clone: function() {
                var e = {},
                    t = this.attributes;
                if (t)
                    for (var n in t) e[n] = t[n];
                return e
            },
            change: function(e, t, n) {
                this.on("change:" + e, t, n);
                var r = this.get(e);
                return t.call(n, this, r, r), this
            }
        };
    t.a = i
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return i
    }), n.d(t, "a", function() {
        return o
    });
    var r = n(5),
        i = {
            audioMode: !1,
            flashBlocked: !1,
            item: 0,
            itemMeta: {},
            playbackRate: 1,
            playRejected: !1,
            state: r._5,
            itemReady: !1
        },
        o = {
            position: 0,
            duration: 0,
            buffer: 0
        }
}, function(e, t, n) {
    "use strict";
    var r = n(5),
        i = function() {},
        o = function() {
            return !1
        },
        a = {
            name: "default"
        },
        u = function() {
            return a
        },
        c = {
            supports: o,
            play: i,
            pause: i,
            preload: i,
            load: i,
            stop: i,
            volume: i,
            mute: i,
            seek: i,
            resize: i,
            remove: i,
            destroy: i,
            eventsOn_: i,
            eventsOff_: i,
            setVisibility: i,
            setFullscreen: i,
            getFullscreen: o,
            getContainer: i,
            setContainer: o,
            getName: u,
            getQualityLevels: i,
            getCurrentQuality: i,
            setCurrentQuality: i,
            getAudioTracks: i,
            getCurrentAudioTrack: i,
            setCurrentAudioTrack: i,
            setPlaybackRate: i,
            getPlaybackRate: function() {
                return 1
            },
            checkComplete: i,
            setControls: i,
            attachMedia: i,
            detachMedia: i,
            init: i,
            setState: function(e) {
                this.state = e, this.trigger(r.T, {
                    newstate: e
                })
            },
            sendMediaType: function(e) {
                var t = e[0].type,
                    n = "oga" === t || "aac" === t || "mp3" === t || "mpeg" === t || "vorbis" === t;
                this.trigger(r.L, {
                    mediaType: n ? "audio" : "video"
                })
            }
        };
    t.a = c
}, function(e, t, n) {
    "use strict";

    function r(e) {
        Object.keys(e).forEach(function(t) {
            "id" !== t && (e[t] = Object(S.serialize)(e[t]))
        })
    }

    function i(e) {
        return e.slice && "px" === e.slice(-2) && (e = e.slice(0, -2)), e
    }

    function o(e, t) {
        if (-1 === t.toString().indexOf("%")) return 0;
        if ("string" != typeof e || !e) return 0;
        if (/^\d*\.?\d+%$/.test(e)) return e;
        var n = e.indexOf(":");
        if (-1 === n) return 0;
        var r = parseFloat(e.substr(0, n)),
            i = parseFloat(e.substr(n + 1));
        return r <= 0 || i <= 0 ? 0 : i / r * 100 + "%"
    }

    function a(e) {
        var t = e.flashplayer;
        return t || (t = (Object(E.getScriptPath)("jwplayer.js") || e.base) + "jwplayer.flash.swf"), "http:" === window.location.protocol && (t = t.replace(/^https/, "http")), t
    }

    function u(e) {
        var t = "file:" === window.location.protocol ? "https:" : "",
            n = {
                jwpsrv: "",
                dai: "",
                vast: "",
                googima: "",
                freewheel: "",
                related: "",
                gapro: ""
            },
            r = n[e];
        return r ? t + r : ""
    }

    function c(e, t, n) {
        if (t) {
            e[t.client || u(n)] = t, delete t.client
        }
    }

    function s(e) {
        var t = M({}, e.plugins),
            n = e.edition,
            r = Object(A.a)(n);
        if (r("ads")) {
            var i = M({}, e.advertising),
                o = i.client;
            if (o) {
                t[u(o) || o] = i, delete i.client
            }
        }
        if (r("jwpsrv")) {
            var a = e.analytics;
            a !== Object(a) && (a = {}), c(t, a, "jwpsrv")
        }
        c(t, e.ga, "gapro");
        var s = e.related,
            l = s === Object(s) && r("discovery");
        if (!1 !== e.controls || l) {
            var f = !1 !== e.visualplaylist || l;
            l || (s = {
                disableRelated: !0
            }), s.showButton = f, c(t, s, "related")
        }
        return t
    }

    function l(e) {
        var t = e.get("playlist");
        if ("string" == typeof t) return new q.a(function(n, r) {
            var i = new D.a;
            i.on(B.W, function(t) {
                var r = t.playlist;
                delete t.playlist, f(e, r, t), n()
            }), i.on(B.q, function(t) {
                f(e, [], {}), r(new Error("Error loading playlist: " + t.message))
            }), i.load(t)
        });
        var n = e.get("feedData") || {};
        return f(e, t, n), q.b
    }

    function f(e, t, n) {
        var r = e.attributes;
        r.playlist = Object(Q.a)(t), r.feedData = n
    }

    function d(e) {
        return l(e).then(function() {
            if (!h(e)) {
                var t = Object(Q.b)(e.get("playlist"), e);
                Object(Q.c)(t);
                var n = e.getProviders(),
                    r = n.required([t[0]]);
                if (!R.a.html5 || !r || "html5" !== r[0].name) return n.load(r)
            }
        })
    }

    function p(e) {
        for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++)
            if (t[n].href === e) return !0;
        return !1
    }

    function v(e) {
        var t = e.get("skin") ? e.get("skin").url : void 0;
        if ("string" == typeof t && !p(t)) {
            return new X.a(t, !0).load().catch(function(e) {
                return e
            })
        }
        return q.b
    }

    function h(e) {
        return e.attributes._destroyed
    }

    function m(e) {
        return l(e).then(function() {
            return e.get("drm") || Object(W.b)(e.get("playlist")) ? Object(W.d)(e.get("edition")) : q.b
        })
    }

    function g(e) {
        return m(e).then(function() {
            return V(e)
        })
    }

    function y(e, t) {
        this.namespace = e, this.items = t
    }

    function b() {
        for (var e = oe.c, t = [], n = [], r = 0; r < e; r++) {
            var i = j();
            t.push(i), n.push(i)
        }
        var o = n.shift();
        return {
            prime: function() {
                t.forEach(w)
            },
            getPrimedElement: function() {
                return n.length ? n.shift() : null
            },
            getAdElement: function() {
                return o
            },
            clean: function(e) {
                if (e.src) {
                    e.removeAttribute("src");
                    try {
                        e.load()
                    } catch (e) {}
                }
            },
            recycle: function(e) {
                e && !n.some(function(t) {
                    return t === e
                }) && (this.clean(e), n.push(e))
            },
            syncVolume: function(e) {
                t.forEach(function(t) {
                    t.volume = e / 100
                })
            },
            syncMute: function(e) {
                t.forEach(function(t) {
                    t.muted = e
                })
            }
        }
    }

    function w(e) {
        if (e.src) {
            if (ae.OS.android && !e.parentNode) {
                var t = e.played;
                (!t || t && !t.length) && e.load()
            }
        } else e.load()
    }

    function j() {
        var e = document.createElement("video");
        return e.className = "jw-video jw-reset", e.setAttribute("disableRemotePlayback", ""), e.setAttribute("webkit-playsinline", ""), e.setAttribute("playsinline", ""), e
    }

    function O(e, t) {
        q.b.then(function() {
            var n = t.message,
                r = t.code,
                i = Object(ie.a)(e, n);
            ie.a.cloneIcon && i.querySelector(".jw-icon").appendChild(ie.a.cloneIcon("error")), k(e, i);
            var o = {
                    message: n,
                    code: r,
                    error: t
                },
                a = e._model || e.modelShim;
            a.set("errorEvent", o), a.set("state", B._4), e.trigger(B._1, o)
        })
    }

    function k(e, t) {
        if (!document.body.contains(e.currentContainer)) {
            var n = document.getElementById(e.get("id"));
            n && (e.currentContainer = n)
        }
        e.currentContainer.parentElement && e.currentContainer.parentElement.replaceChild(t, e.currentContainer), e.currentContainer = t
    }
    var C = n(40),
        x = n(0),
        E = n(16),
        S = n(12),
        P = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        T = {
            autostart: !1,
            controls: !0,
            displaytitle: !0,
            displaydescription: !0,
            defaultPlaybackRate: 1,
            playbackRateControls: !1,
            playbackRates: [.5, 1, 1.25, 1.5, 2],
            repeat: !1,
            castAvailable: !1,
            stretching: "uniform",
            mute: !1,
            volume: 90,
            width: 640,
            height: 360,
            localization: {
                player: "Video Player",
                play: "Play",
                playback: "Start Playback",
                pause: "Pause",
                volume: "Volume",
                prev: "Previous",
                next: "Next",
                cast: "Chromecast",
                airplay: "AirPlay",
                fullscreen: "Fullscreen",
                playlist: "Playlist",
                hd: "Quality",
                cc: "Closed Captions",
                audioTracks: "Audio Tracks",
                playbackRates: "Playback Rates",
                replay: "Replay",
                buffer: "Loading",
                more: "More",
                liveBroadcast: "Live broadcast",
                loadingAd: "Loading ad",
                rewind: "Rewind 10 Seconds",
                nextUp: "Next Up",
                nextUpClose: "Next Up Close",
                related: "Discover",
                close: "Close",
                settings: "Settings",
                unmute: "Unmute"
            },
            renderCaptionsNatively: !1,
            nextUpDisplay: !0
        },
        _ = function(e, t) {
            var a = P({}, (window.jwplayer || {}).defaults, t, e);
            r(a), a.localization = P({}, T.localization, a.localization);
            var u = P({}, T, a);
            "." === u.base && (u.base = Object(E.getScriptPath)("jwplayer.js")), u.base = (u.base || Object(E.loadFrom)()).replace(/\/?$/, "/"), n.p = u.base, u.width = i(u.width), u.height = i(u.height), u.aspectratio = o(u.aspectratio, u.width);
            var c = u.playbackRateControls;
            if (c) {
                var s = u.playbackRates;
                Array.isArray(c) && (s = c), s = s.filter(function(e) {
                    return x.c.isNumber(e) && e >= .25 && e <= 4
                }).map(function(e) {
                    return Math.round(4 * e) / 4
                }), s.indexOf(1) < 0 && s.push(1), s.sort(), u.playbackRateControls = !0, u.playbackRates = s
            }(!u.playbackRateControls || u.playbackRates.indexOf(u.defaultPlaybackRate) < 0) && (u.defaultPlaybackRate = 1), u.playbackRate = u.defaultPlaybackRate, u.aspectratio || delete u.aspectratio;
            var l = u.playlist;
            if (l) Array.isArray(l.playlist) && (u.feedData = l, u.playlist = l.playlist);
            else {
                var f = x.c.pick(u, ["title", "description", "type", "mediaid", "image", "file", "sources", "tracks", "preload", "duration"]);
                u.playlist = [f]
            }
            return u.qualityLabels = u.qualityLabels || u.hlslabels, delete u.duration, u
        },
        N = _,
        L = n(34),
        A = n(14),
        M = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        F = function(e, t) {
            var r = N(e, t),
                i = r.key || window.jwplayer && window.jwplayer.key,
                o = new L.a(i),
                u = o.edition();
            if (r.key = i, r.edition = u, r.error = null, "unlimited" === u) {
                var c = Object(E.getScriptPath)("jwplayer.js");
                if (!c) throw new Error("Error setting up player: Could not locate jwplayer.js script tag");
                n.p = c
            }
            if ("invalid" === u) {
                var l = void 0 === i ? "Missing" : "Invalid";
                r.error = new Error("Error setting up player: " + l + " license key")
            }
            return r.flashplayer = a(r), r.plugins = s(r), r
        },
        I = F,
        R = n(9),
        B = n(5),
        q = n(2),
        D = n(47),
        Q = n(48),
        X = n(21),
        z = function(e) {
            return h(e) ? q.a.reject() : q.a.all([d(e), v(e)])
        },
        V = z,
        W = n(28),
        H = n(23),
        U = function(e) {
            var t = void 0;
            this.start = function(n) {
                var r = q.a.all([Object(R.c)(e), g(e), Object(H.a)(e, n)]),
                    i = new q.a(function(e, n) {
                        t = setTimeout(function() {
                            n(new Error("Setup Timeout Error: Setup took longer than 30 seconds to complete."))
                        }, 3e4);
                        var i = function() {
                            clearTimeout(t), e()
                        };
                        r.then(i).catch(i)
                    });
                return q.a.race([r, i])
            }, this.destroy = function() {
                clearTimeout(t), e = null
            }
        },
        J = U,
        $ = n(30),
        K = n(20),
        Y = n(15),
        G = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Z = {
            removeItem: function() {}
        };
    try {
        Z = window.localStorage || Z
    } catch (e) {}
    G(y.prototype, {
        getAllItems: function() {
            var e = this;
            return this.items.reduce(function(t, n) {
                var r = Z[e.namespace + "." + n];
                return r && (t[n] = Object(S.serialize)(r)), t
            }, {})
        },
        track: function(e) {
            var t = this;
            this.items.forEach(function(n) {
                e.on("change:" + n, function(e, r) {
                    try {
                        Z[t.namespace + "." + n] = r
                    } catch (e) {
                        Y.a.debug && console.error(e)
                    }
                })
            })
        },
        clear: function() {
            var e = this;
            this.items.forEach(function(t) {
                Z.removeItem(e.namespace + "." + t)
            })
        }
    });
    var ee = y,
        te = n(42),
        ne = n(43),
        re = n(7),
        ie = n(41),
        oe = n(49),
        ae = n(8),
        ue = n(50);
    t.b = k;
    var ce = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        se = function() {};
    ce(se.prototype, te.a);
    var le = function(e) {
        this._events = {}, this.modelShim = new se, this.modelShim._qoeItem = new K.a, this.mediaShim = {}, this.setup = new J(this.modelShim), this.currentContainer = this.originalContainer = e, this.apiQueue = new C.a(this, ["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "addButton", "removeButton", "castToggle", "setMute", "setVolume", "setPlaybackRate", "setCues", "resize", "setCaptions", "setControls"], function() {
            return !0
        })
    };
    ce(le.prototype, {
        on: re.a.on,
        once: re.a.once,
        off: re.a.off,
        trigger: re.a.trigger,
        init: function(e, t) {
            var n = this,
                r = this.modelShim,
                i = new ee("jwplayer", ["volume", "mute", "captionLabel", "qualityLabel"]),
                o = i && i.getAllItems();
            r.attributes = r.attributes || {}, ce(this.mediaShim, ne.a);
            var a = I(e, o);
            ce(r.attributes, a, ne.b), r.getProviders = function() {
                return new $.a(a)
            }, r.setProvider = function() {};
            var u = b();
            return ae.Features.backgroundLoading || (u = Object(ue.a)(u.getPrimedElement(), u)), u.prime(), this.setup.start(t).then(function(e) {
                var r = e[0];
                if (n.setup) {
                    var o = n.modelShim.clone();
                    if (o.error instanceof Error) throw o.error;
                    var a = n.apiQueue.queue.slice(0);
                    n.apiQueue.destroy(), ce(n, r.prototype), n.setup(o, t, n.originalContainer, n._events, a, u);
                    var c = n._model;
                    return i.track(c), n.updatePlaylist(c.get("playlist"), c.get("feedData"))
                }
            }).then(function() {
                n.setup && n.playerReady()
            }).catch(function(e) {
                n.setup && O(n, e)
            })
        },
        playerDestroy: function() {
            this.apiQueue && this.apiQueue.destroy(), this.setup && this.setup.destroy(), this.off(), this._events = this._model = this.originalContainer = this.apiQueue = this.setup = null
        },
        getContainer: function() {
            return this.currentContainer
        },
        get: function(e) {
            return e in this.mediaShim ? this.mediaShim[e] : this.modelShim.get(e)
        },
        getItemQoe: function() {
            return this.modelShim._qoeItem
        },
        getConfig: function() {
            return ce({}, this.modelShim.attributes, this.mediaShim)
        },
        getCurrentCaptions: function() {
            return this.get("captionsIndex")
        },
        getWidth: function() {
            return this.get("containerWidth")
        },
        getHeight: function() {
            return this.get("containerHeight")
        },
        getMute: function() {
            return this.get("mute")
        },
        getProvider: function() {
            return this.get("provider")
        },
        getState: function() {
            return this.get("state")
        },
        getAudioTracks: function() {
            return null
        },
        getCaptionsList: function() {
            return null
        },
        getQualityLevels: function() {
            return null
        },
        getVisualQuality: function() {
            return null
        },
        getCurrentQuality: function() {
            return -1
        },
        getCurrentAudioTrack: function() {
            return -1
        },
        getSafeRegion: function() {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
        },
        isBeforeComplete: function() {
            return !1
        },
        isBeforePlay: function() {
            return !1
        },
        createInstream: function() {
            return null
        },
        skipAd: function() {},
        attachMedia: function() {},
        detachMedia: function() {
            return null
        }
    });
    t.a = le
}, function(e, t, n) {
    "use strict";

    function r() {
        return o || (o = n.e(4).then(function(t) {
            var r = n(3).default;
            return e.controls = r, r
        }.bind(null, n)).catch(function() {
            o = null, Object(i.b)()
        })), o
    }
    n.d(t, "b", function() {
        return e
    }), t.a = r;
    var i = n(9),
        o = null,
        e = {}
}, function(e, t, n) {
    "use strict";
    var r = n(5),
        i = n(13),
        o = n(37),
        a = n(6),
        u = n(7),
        c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        s = function() {
            function e(e) {
                try {
                    var a, u = e.responseXML ? e.responseXML.childNodes : null,
                        s = "";
                    if (u) {
                        for (var l = 0; l < u.length && (s = u[l], 8 === s.nodeType); l++);
                        if ("xml" === Object(i.b)(s) && (s = s.nextSibling), "rss" === Object(i.b)(s)) {
                            var f = Object(o.a)(s);
                            a = c({
                                playlist: f
                            }, f.feedData)
                        }
                    }
                    if (!a) try {
                        var d = JSON.parse(e.responseText);
                        if (Array.isArray(d)) a = {
                            playlist: d
                        };
                        else {
                            if (!Array.isArray(d.playlist)) throw Error;
                            a = d
                        }
                    } catch (e) {
                        throw new Error("Not a valid RSS/JSON feed")
                    }
                    n.trigger(r.W, a)
                } catch (e) {
                    t(e.message)
                }
            }

            function t(e) {
                n.trigger(r.q, {
                    message: e || "Error loading file"
                })
            }
            var n = c(this, u.a);
            this.load = function(n) {
                a.a.ajax(n, e, t)
            }, this.destroy = function() {
                this.off()
            }
        };
    t.a = s
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return l[e] ? e : l[t] ? t : "metadata"
    }

    function i(e, t, n) {
        var i = [],
            o = t.getProviders(),
            c = t.get("preload"),
            s = v({}, n);
        return delete s.playlist, e.forEach(function(e) {
            e = v({}, e), e.preload = r(e.preload, c), e.allSources = a(e, t), e.sources = u(e.allSources, o), e.sources.length && (e.file = e.sources[0].file, n && (e.feedData = s), i.push(e))
        }), i
    }

    function o(e) {
        if (!Array.isArray(e) || 0 === e.length) throw new Error("No playable sources found")
    }

    function a(e, t) {
        var n = e.sources,
            i = t.get("androidhls"),
            o = t.get("safarihlsjs"),
            a = e.drm || t.get("drm"),
            u = s(e.withCredentials, t.get("withCredentials")),
            c = !1 !== t.get("hlsjsdefault");
        return n.map(function(t) {
            if (t !== Object(t)) return null;
            void 0 !== i && null !== i && (t.androidhls = i), void 0 !== o && null !== o && (t.safarihlsjs = o), void 0 !== o && null !== o && (t.safarihlsjs = o), (t.drm || a) && (t.drm = t.drm || a), t.preload = r(t.preload, e.preload);
            var n = s(t.withCredentials, u);
            return void 0 !== n && (t.withCredentials = n), c && (t.hlsjsdefault = c), Object(d.a)(t)
        }).filter(function(e) {
            return !!e
        })
    }

    function u(e, t) {
        t && t.choose || (t = new p.a);
        var n = c(e, t);
        if (!n) return [];
        var r = n.provider,
            i = n.type;
        return e.filter(function(e) {
            return e.type === i && t.providerSupports(r, e)
        })
    }

    function c(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = t.choose(r);
            if (i) return {
                type: r.type,
                provider: i.providerToCheck
            }
        }
        return null
    }

    function s(e, t) {
        return void 0 === e ? t : e
    }
    var l = {
            none: !0,
            metadata: !0,
            auto: !0
        },
        f = n(24),
        d = n(36),
        p = n(30);
    t.b = i, t.c = o;
    var v = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        h = function(e) {
            return (Array.isArray(e) ? e : [e]).map(f.a)
        };
    t.a = h
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
        return r
    }), n.d(t, "b", function() {
        return i
    }), n.d(t, "a", function() {
        return o
    });
    var r = 3,
        i = 2,
        o = 1
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return i({}, t, {
            prime: function() {
                e.load()
            },
            getPrimedElement: function() {
                return e
            },
            clean: function() {
                t.clean(e)
            },
            recycle: function() {
                t.clean(e)
            }
        })
    }
    t.a = r;
    var i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = document.createElement("a"),
            n = document.createElement("a");
        t.href = location.href;
        try {
            return n.href = e, n.href = n.href, t.protocol + "//" + t.host != n.protocol + "//" + n.host
        } catch (e) {}
        return !0
    }

    function i(e, t, n, i) {
        d.c.isObject(e) && (i = e, e = i.url);
        var s, l = p({
            xhr: null,
            url: e,
            withCredentials: !1,
            retryWithoutCredentials: !1,
            timeout: 6e4,
            timeoutId: -1,
            oncomplete: t || v,
            onerror: n || v,
            mimeType: i && !i.responseType ? "text/xml" : "",
            requireValidXML: !1,
            responseType: i && i.plainText ? "text" : ""
        }, i);
        if ("XDomainRequest" in window && r(e)) s = l.xhr = new window.XDomainRequest, s.onload = c(l), s.ontimeout = s.onprogress = v, h = !0;
        else {
            if (!("XMLHttpRequest" in window)) return void l.onerror("", e);
            s = l.xhr = new window.XMLHttpRequest, s.onreadystatechange = u(l)
        }
        var f = a("Error loading file", l);
        s.onerror = f, "overrideMimeType" in s ? l.mimeType && s.overrideMimeType(l.mimeType) : h = !0;
        try {
            e = e.replace(/#.*$/, ""), s.open("GET", e, !0)
        } catch (e) {
            return f(e), s
        }
        if (l.responseType) try {
            s.responseType = l.responseType
        } catch (e) {}
        l.timeout && (l.timeoutId = setTimeout(function() {
            o(s), l.onerror("Timeout", e, s)
        }, l.timeout), s.onabort = function() {
            clearTimeout(l.timeoutId)
        });
        try {
            l.withCredentials && "withCredentials" in s && (s.withCredentials = !0), s.send()
        } catch (e) {
            f(e)
        }
        return s
    }

    function o(e) {
        e.onload = null, e.onprogress = null, e.onreadystatechange = null, e.onerror = null, "abort" in e && e.abort()
    }

    function a(e, t) {
        return function(n) {
            var r = n.currentTarget || t.xhr;
            if (clearTimeout(t.timeoutId), t.retryWithoutCredentials && t.xhr.withCredentials) {
                o(r);
                return void i(p({}, t, {
                    xhr: null,
                    withCredentials: !1,
                    retryWithoutCredentials: !1
                }))
            }
            t.onerror(e, t.url, r)
        }
    }

    function u(e) {
        return function(t) {
            var n = t.currentTarget || e.xhr;
            if (4 === n.readyState) {
                if (clearTimeout(e.timeoutId), n.status >= 400) {
                    var r;
                    return r = 404 === n.status ? "File not found" : n.status + "(" + n.statusText + ")", e.onerror(r, e.url, n)
                }
                if (200 === n.status) return c(e)(t)
            }
        }
    }

    function c(e) {
        return function(t) {
            var n = t.currentTarget || e.xhr;
            if (clearTimeout(e.timeoutId), e.responseType) {
                if ("json" === e.responseType) return s(n, e)
            } else {
                var r, i = n.responseXML;
                if (i) try {
                    r = i.firstChild
                } catch (e) {}
                if (i && r) return l(n, i, e);
                if (h && n.responseText && !i && (i = Object(f.parseXML)(n.responseText)) && i.firstChild) return l(n, i, e);
                if (e.requireValidXML) return void e.onerror("Invalid XML", e.url, n)
            }
            e.oncomplete(n)
        }
    }

    function s(e, t) {
        if (!e.response || d.c.isString(e.response) && '"' !== e.responseText.substr(1)) try {
            e = p({}, e, {
                response: JSON.parse(e.responseText)
            })
        } catch (n) {
            return void t.onerror("Invalid JSON", t.url, e)
        }
        return t.oncomplete(e)
    }

    function l(e, t, n) {
        var r = t.documentElement;
        return n.requireValidXML && ("parsererror" === r.nodeName || r.getElementsByTagName("parsererror").length) ? void n.onerror("Invalid XML", n.url, e) : (e.responseXML || (e = p({}, e, {
            responseXML: t
        })), n.oncomplete(e))
    }
    t.b = r, t.a = i;
    var f = n(12),
        d = n(0),
        p = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        v = function() {},
        h = !1
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return "hls" === e.type && i.OS.android ? !1 !== e.androidhls && (!i.Browser.firefox && parseFloat(i.OS.version.version) >= 4.4) : null
    }
    t.a = r;
    var i = n(8)
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = new y.a(t);
        return n.on(b.Z, function(t) {
            e._qoe.tick("ready"), t.setupTime = e._qoe.between("setup", "ready")
        }), n.on("all", function(t, n) {
            e.trigger(t, n)
        }), n
    }

    function i(e, t) {
        e.off(), t.playerDestroy(), t.getContainer().removeAttribute("data-jwplayer-id")
    }

    function o(e) {
        for (var t = s.a.length; t--;)
            if (s.a[t].uniqueId === e.uniqueId) {
                s.a.splice(t, 1);
                break
            }
    }

    function a(e) {
        var t = ++x,
            n = e.id || "player-" + t,
            a = new w.a,
            u = {},
            c = r(this, e);
        a.tick("init"), e.setAttribute("data-jwplayer-id", n), Object.defineProperties(this, {
            id: {
                get: function() {
                    return n
                }
            },
            uniqueId: {
                get: function() {
                    return t
                }
            },
            plugins: {
                get: function() {
                    return u
                }
            },
            _qoe: {
                get: function() {
                    return a
                }
            },
            version: {
                get: function() {
                    return h.a
                }
            },
            Events: {
                get: function() {
                    return j.a
                }
            },
            utils: {
                get: function() {
                    return O.a
                }
            },
            _: {
                get: function() {
                    return k.c
                }
            }
        }), C(this, {
            _events: {},
            setup: function(t) {
                return a.clear("ready"), a.tick("setup"), i(this, c), c = r(this, e), t.id = n, c.init(t, this), this.on(t.events, null, this)
            },
            remove: function() {
                return o(this), this.trigger("remove"), i(this, c), this
            },
            qoe: function() {
                var e = c.getItemQoe();
                return {
                    setupTime: this._qoe.between("setup", "ready"),
                    firstFrame: e.getFirstFrame ? e.getFirstFrame() : null,
                    player: this._qoe.dump(),
                    item: e.dump()
                }
            },
            getAudioTracks: function() {
                return c.getAudioTracks()
            },
            getBuffer: function() {
                return c.get("buffer")
            },
            getCaptions: function() {
                return c.get("captions")
            },
            getCaptionsList: function() {
                return c.getCaptionsList()
            },
            getConfig: function() {
                return c.getConfig()
            },
            getContainer: function() {
                return c.getContainer()
            },
            getControls: function() {
                return c.get("controls")
            },
            getCurrentAudioTrack: function() {
                return c.getCurrentAudioTrack()
            },
            getCurrentCaptions: function() {
                return c.getCurrentCaptions()
            },
            getCurrentQuality: function() {
                return c.getCurrentQuality()
            },
            getDuration: function() {
                return c.get("duration")
            },
            getEnvironment: function() {
                return g
            },
            getFullscreen: function() {
                return c.get("fullscreen")
            },
            getHeight: function() {
                return c.getHeight()
            },
            getItemMeta: function() {
                return c.get("itemMeta") || {}
            },
            getMute: function() {
                return c.getMute()
            },
            getPlaybackRate: function() {
                return c.get("playbackRate")
            },
            getPlaylist: function() {
                return c.get("playlist")
            },
            getPlaylistIndex: function() {
                return c.get("item")
            },
            getPlaylistItem: function(e) {
                if (!O.a.exists(e)) return c.get("playlistItem");
                var t = this.getPlaylist();
                return t ? t[e] : null
            },
            getPosition: function() {
                return c.get("position")
            },
            getProvider: function() {
                return c.getProvider()
            },
            getQualityLevels: function() {
                return c.getQualityLevels()
            },
            getSafeRegion: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return c.getSafeRegion(e)
            },
            getState: function() {
                return c.getState()
            },
            getStretching: function() {
                return c.get("stretching")
            },
            getViewable: function() {
                return c.get("viewable")
            },
            getVisualQuality: function() {
                return c.getVisualQuality()
            },
            getVolume: function() {
                return c.get("volume")
            },
            getWidth: function() {
                return c.getWidth()
            },
            setCaptions: function(e) {
                return c.setCaptions(e), this
            },
            setConfig: function(e) {
                return c.setConfig(e), this
            },
            setControls: function(e) {
                return c.setControls(e), this
            },
            setCurrentAudioTrack: function(e) {
                c.setCurrentAudioTrack(e)
            },
            setCurrentCaptions: function(e) {
                c.setCurrentCaptions(e)
            },
            setCurrentQuality: function(e) {
                c.setCurrentQuality(e)
            },
            setFullscreen: function(e) {
                return c.setFullscreen(e), this
            },
            setMute: function(e) {
                return c.setMute(e), this
            },
            setPlaybackRate: function(e) {
                return c.setPlaybackRate(e), this
            },
            setCues: function(e) {
                return c.setCues(e), this
            },
            setVolume: function(e) {
                return c.setVolume(e), this
            },
            load: function(e, t) {
                return c.load(e, t), this
            },
            play: function(e) {
                return c.play(e), this
            },
            pause: function(e) {
                return c.pause(e), this
            },
            playToggle: function(e) {
                switch (this.getState()) {
                    case b._8:
                    case b._2:
                        this.pause(e);
                        break;
                    default:
                        this.play(e)
                }
            },
            seek: function(e, t) {
                return c.seek(e, t), this
            },
            playlistItem: function(e, t) {
                return c.playlistItem(e, t), this
            },
            playlistNext: function(e) {
                return c.playlistNext(e), this
            },
            playlistPrev: function(e) {
                return c.playlistPrev(e), this
            },
            next: function() {
                return c.next(), this
            },
            castToggle: function() {
                return c.castToggle(), this
            },
            createInstream: function() {
                return c.createInstream()
            },
            skipAd: function() {
                return c.skipAd(), this
            },
            stop: function() {
                return c.stop(), this
            },
            resize: function(e, t) {
                return c.resize(e, t), this
            },
            addButton: function(e, t, n, r, i) {
                return c.addButton(e, t, n, r, i), this
            },
            removeButton: function(e) {
                return c.removeButton(e), this
            },
            attachMedia: function() {
                return c.attachMedia(), this
            },
            detachMedia: function() {
                return c.detachMedia(), this
            },
            isBeforeComplete: function() {
                return c.isBeforeComplete()
            },
            isBeforePlay: function() {
                return c.isBeforePlay()
            }
        })
    }

    function u(e) {
        for (var t = 0; t < s.a.length; t++)
            if (s.a[t].id === e) return s.a[t];
        return null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = n(16),
        s = n(27),
        l = n(17),
        f = n(18),
        d = {
            availableProviders: l.a,
            registerProvider: f.a
        },
        p = n(23);
    d.registerPlugin = function(e, t, n) {
        "jwpsrv" !== e && Object(p.b)(e, t, n)
    };
    var v = d,
        h = n(19),
        m = n(15),
        g = n(8),
        y = n(45),
        b = n(5),
        w = n(20),
        j = n(7),
        O = n(6),
        k = n(0),
        C = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        x = 0;
    C(a.prototype, {
        on: function(e, t, n) {
            return j.c.call(this, e, t, n)
        },
        once: function(e, t, n) {
            return j.d.call(this, e, t, n)
        },
        off: function(e, t, n) {
            return j.b.call(this, e, t, n)
        },
        trigger: function(e, t) {
            return t = k.c.isObject(t) ? C({}, t) : {}, t.type = e, m.a.debug ? j.e.call(this, e, t) : j.f.call(this, e, t)
        },
        getPlugin: function(e) {
            return this.plugins[e]
        },
        addPlugin: function(e, t) {
            this.plugins[e] = t, this.on("ready", t.addToPlayer), t.resize && this.on("resize", t.resizeHandler)
        },
        registerPlugin: function(e, t, n) {
            Object(p.b)(e, t, n)
        },
        getAdBlock: function() {
            return !1
        },
        playAd: function(e) {},
        pauseAd: function(e) {}
    }), n.p = Object(c.loadFrom)();
    var E = function(e) {
        var t = void 0,
            n = void 0;
        if (e ? "string" == typeof e ? (t = u(e)) || (n = document.getElementById(e)) : "number" == typeof e ? t = s.a[e] : e.nodeType && (n = e, t = u(n.id || n.getAttribute("data-jwplayer-id"))) : t = s.a[0], t) return t;
        if (n) {
            var r = new a(n);
            return s.a.push(r), r
        }
        return {
            registerPlugin: v.registerPlugin
        }
    };
    Object.defineProperties(E, {
        api: {
            get: function() {
                return v
            },
            set: function() {}
        },
        version: {
            get: function() {
                return h.a
            },
            set: function() {}
        },
        debug: {
            get: function() {
                return m.a.debug
            },
            set: function(e) {
                m.a.debug = !!e
            }
        }
    });
    var S = E,
        P = n(38),
        T = n(34),
        _ = n(21),
        N = n(35),
        L = n(37),
        A = n(32),
        M = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        F = k.c.extend,
        I = {};
    I.api = v, I._ = k.c, I.version = "8.1.1+commercial_v8-1-1.232.commercial.924cff.hlsjs..jwplayer.b56ca0.dai.c24260.freewheel.782b72.googima.9f7070.vast.404e57.jwpsrv.f6eb5e.gapro.fb7ea6.related.c64ebe", I.utils = M(O.a, {
        key: T.a,
        extend: F,
        scriptloader: _.a,
        rssparser: {
            parse: L.a
        },
        tea: N.a,
        UI: P.a
    }), I.utils.css.style = I.utils.style, I.vid = A.a;
    var R = I,
        B = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        q = window;
    B(S, R), "function" == typeof q.define && q.define.amd && q.define([], function() {
        return S
    });
    var D = S;
    q.jwplayer && (D = q.jwplayer);
    t.default = D
}]).default;
