(function(window, document) {
    var k;
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    function ba(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }
    function r(a) {
        if (!(a instanceof Array)) {
            a = ba(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
    var ca = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    , da;
    if ("function" == typeof Object.setPrototypeOf)
        da = Object.setPrototypeOf;
    else {
        var ea;
        a: {
            var fa = {
                Sb: !0
            }
              , ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.Sb;
                break a
            } catch (a) {}
            ea = !1
        }
        da = ea ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ia = da;
    function t(a, b) {
        a.prototype = ca(b.prototype);
        a.prototype.constructor = a;
        if (ia)
            ia(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Ib = b.prototype
    }
    var ja = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    }
      , ka = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
    function la(a, b) {
        if (b) {
            var c = ka;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ja(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    var ma = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    la("Object.assign", function(a) {
        return a || ma
    });
    la("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
                return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    var u = this || self;
    function na() {}
    function v(a) {
        a.Ua = void 0;
        a.g = function() {
            return a.Ua ? a.Ua : a.Ua = new a
        }
    }
    function oa(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }
    function pa(a) {
        return "array" == oa(a)
    }
    function qa(a) {
        var b = oa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function ra(a) {
        return "function" == oa(a)
    }
    function sa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function ta(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ua(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function va(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? va = ta : va = ua;
        return va.apply(null, arguments)
    }
    function wa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    function xa(a, b) {
        a = a.split(".");
        var c = u;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
    function ya(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ib = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    }
    ;var za;
    function Aa(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    function x(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
    function Ba(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
    function Ca(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
    function Da(a, b, c) {
        var d = c;
        x(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }
    function Ea(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    function Fa(a, b) {
        var c = 0;
        x(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        }, void 0);
        return c
    }
    function Ga(a, b) {
        b = Ha(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Ha(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return f;
        return -1
    }
    function Ia(a, b) {
        return 0 <= Aa(a, b)
    }
    function Ja(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function Ka(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function La(a, b) {
        a.sort(b || Ma)
    }
    function Ma(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function Na(a) {
        if (!arguments.length)
            return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++)
            arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++)
                e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    }
    ;function Oa(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    ;function Pa(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function Qa(a, b) {
        var c = {}, d;
        for (d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function Ra(a) {
        var b = Sa, c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b))
                return !1;
        return !0
    }
    function Ta(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    var Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function y(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < Ua.length; f++)
                c = Ua[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;function Va(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    var Wa = /&/g
      , Xa = /</g
      , Ya = />/g
      , Za = /"/g
      , ab = /'/g
      , bb = /\x00/g
      , cb = /[\x00&<>"']/;
    function z(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }
    function db(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;var A;
    a: {
        var eb = u.navigator;
        if (eb) {
            var fb = eb.userAgent;
            if (fb) {
                A = fb;
                break a
            }
        }
        A = ""
    }
    function B(a) {
        return -1 != A.indexOf(a)
    }
    ;function gb() {
        return B("Safari") && !(hb() || B("Coast") || B("Opera") || B("Edge") || B("Edg/") || B("OPR") || B("Firefox") || B("FxiOS") || B("Silk") || B("Android"))
    }
    function hb() {
        return (B("Chrome") || B("CriOS")) && !B("Edge")
    }
    ;function ib(a) {
        cb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Wa, "&amp;")),
        -1 != a.indexOf("<") && (a = a.replace(Xa, "&lt;")),
        -1 != a.indexOf(">") && (a = a.replace(Ya, "&gt;")),
        -1 != a.indexOf('"') && (a = a.replace(Za, "&quot;")),
        -1 != a.indexOf("'") && (a = a.replace(ab, "&#39;")),
        -1 != a.indexOf("\x00") && (a = a.replace(bb, "&#0;")));
        return a
    }
    function jb() {
        return "opacity".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }
    function kb(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }
    function lb(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;function mb(a) {
        mb[" "](a);
        return a
    }
    mb[" "] = na;
    function nb(a, b) {
        try {
            return mb(a[b]),
            !0
        } catch (c) {}
        return !1
    }
    function ob(a, b) {
        var c = pb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    }
    ;var qb = B("Opera")
      , C = B("Trident") || B("MSIE")
      , rb = B("Edge")
      , sb = B("Gecko") && !(z(A, "WebKit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge")
      , tb = z(A, "WebKit") && !B("Edge")
      , ub = tb && B("Mobile");
    function vb() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var wb;
    a: {
        var xb = ""
          , yb = function() {
            var a = A;
            if (sb)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (rb)
                return /Edge\/([\d\.]+)/.exec(a);
            if (C)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (tb)
                return /WebKit\/(\S+)/.exec(a);
            if (qb)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        yb && (xb = yb ? yb[1] : "");
        if (C) {
            var zb = vb();
            if (null != zb && zb > parseFloat(xb)) {
                wb = String(zb);
                break a
            }
        }
        wb = xb
    }
    var Ab = wb
      , pb = {};
    function Bb(a) {
        return ob(a, function() {
            for (var b = 0, c = Va(String(Ab)).split("."), d = Va(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || ""
                  , h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length)
                        break;
                    b = db(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || db(0 == g[2].length, 0 == h[2].length) || db(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var Cb;
    Cb = u.document && C ? vb() : void 0;
    var Db = {}
      , Eb = null;
    var Fb = 0
      , Gb = 0;
    function Hb() {
        this.a = []
    }
    Hb.prototype.length = function() {
        return this.a.length
    }
    ;
    function Ib(a) {
        var b = a.a;
        a.a = [];
        return b
    }
    function Jb(a, b) {
        for (; 127 < b; )
            a.a.push(b & 127 | 128),
            b >>>= 7;
        a.a.push(b)
    }
    function Kb(a, b) {
        a.a.push(b >>> 0 & 255);
        a.a.push(b >>> 8 & 255);
        a.a.push(b >>> 16 & 255);
        a.a.push(b >>> 24 & 255)
    }
    ;function Lb() {
        this.b = [];
        this.c = 0;
        this.a = new Hb
    }
    Lb.prototype.reset = function() {
        this.b = [];
        Ib(this.a);
        this.c = 0
    }
    ;
    function Mb(a, b, c) {
        if (null != c) {
            Jb(a.a, 8 * b);
            a = a.a;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0,
            b = (~b >>> 0) + 1,
            4294967295 < b && (b = 0,
            d++,
            4294967295 < d && (d = 0)));
            Fb = b;
            Gb = d;
            c = Fb;
            for (b = Gb; 0 < b || 127 < c; )
                a.a.push(c & 127 | 128),
                c = (c >>> 7 | b << 25) >>> 0,
                b >>>= 7;
            a.a.push(c)
        }
    }
    ;function Nb() {}
    var Ob = "function" == typeof Uint8Array
      , Pb = [];
    function Qb(a, b) {
        if (b < a.f) {
            b += a.c;
            var c = a.a[b];
            return c === Pb ? a.a[b] = [] : c
        }
        if (a.b)
            return c = a.b[b],
            c === Pb ? a.b[b] = [] : c
    }
    function Rb(a, b) {
        a = Qb(a, b);
        return null == a ? 0 : a
    }
    function Sb(a, b, c) {
        if (0 !== c)
            if (b < a.f)
                a.a[b + a.c] = c;
            else {
                var d = a.f + a.c;
                a.a[d] || (a.b = a.a[d] = {});
                a.b[b] = c
            }
        else
            a.a[b + a.c] = null;
        return a
    }
    function Tb(a) {
        if (a.h)
            for (var b in a.h) {
                var c = a.h[b];
                if (pa(c))
                    for (var d = 0; d < c.length; d++)
                        c[d] && Tb(c[d]);
                else
                    c && Tb(c)
            }
    }
    Nb.prototype.toString = function() {
        Tb(this);
        return this.a.toString()
    }
    ;
    var Ub;
    Ub = ["av.key", "js", "20191014"].slice(-1)[0];
    var D = document
      , E = window;
    var Vb = !C || 9 <= Number(Cb)
      , Wb = C || qb || tb;
    function F(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    F.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    F.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    F.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    function G(a, b) {
        this.width = a;
        this.height = b
    }
    G.prototype.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    G.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    G.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    G.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    function Xb(a) {
        return a ? new Yb(Zb(a)) : za || (za = new Yb)
    }
    function $b() {
        var a = document;
        a.getElementsByClassName ? a = a.getElementsByClassName("GoogleActiveViewContainer")[0] : (a = document,
        a = a.querySelectorAll && a.querySelector ? a.querySelector(".GoogleActiveViewContainer") : ac(a, "*", "GoogleActiveViewContainer", void 0)[0] || null);
        return a || null
    }
    function ac(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++)
                    b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++)
                b = g.className,
                "function" == typeof b.split && Ia(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }
    function bc(a, b) {
        Pa(b, function(c, d) {
            c && "object" == typeof c && c.rc && (c = c.qc());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : cc.hasOwnProperty(d) ? a.setAttribute(cc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var cc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    function dc(a) {
        var b = a.scrollingElement ? a.scrollingElement : tb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return C && Bb("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft,b.scrollTop) : new F(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    function ec(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
    function fc(a, b, c) {
        var d = arguments
          , e = document
          , f = String(d[0])
          , g = d[1];
        if (!Vb && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', ib(g.name), '"');
            if (g.type) {
                f.push(' type="', ib(g.type), '"');
                var h = {};
                y(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = gc(e, f);
        g && ("string" === typeof g ? f.className = g : pa(g) ? f.className = g.join(" ") : bc(f, g));
        2 < d.length && hc(e, f, d);
        return f
    }
    function hc(a, b, c) {
        function d(g) {
            g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !qa(f) || sa(f) && 0 < f.nodeType ? d(f) : x(ic(f) ? Ka(f) : f, d)
        }
    }
    function gc(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
    function jc(a) {
        var b, c = arguments.length;
        if (!c)
            return null;
        if (1 == c)
            return arguments[0];
        var d = []
          , e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g; )
                f.unshift(g),
                g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b])
                    return f;
            f = g
        }
        return f
    }
    function Zb(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function kc(a) {
        try {
            return a.contentWindow || (a.contentDocument ? ec(a.contentDocument) : null)
        } catch (b) {}
        return null
    }
    function ic(a) {
        if (a && "number" == typeof a.length) {
            if (sa(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (ra(a))
                return "function" == typeof a.item
        }
        return !1
    }
    function lc(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a; ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
    function Yb(a) {
        this.a = a || u.document || document
    }
    ;function mc() {
        return B("iPad") || B("Android") && !B("Mobile") || B("Silk")
    }
    ;var nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    function oc(a) {
        try {
            return !!a && null != a.location.href && nb(a, "foo")
        } catch (b) {
            return !1
        }
    }
    function pc(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
    function qc(a) {
        var b = [];
        pc(a, function(c, d) {
            b.push(d)
        });
        return b
    }
    function rc() {
        var a = sc;
        if (!a)
            return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c)
                return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    }
    ;var tc = Oa(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            u.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    function uc(a) {
        return a ? a.passive && tc() ? a : a.capture || !1 : !1
    }
    function vc(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, uc(d)),
        !0) : !1
    }
    function wc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, uc(void 0))
    }
    ;function xc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        c && (d.referrerPolicy = "no-referrer");
        d.src = b;
        a.google_image_requests.push(d)
    }
    var yc = Oa(function() {
        return "referrerPolicy"in u.document.createElement("img")
    });
    var zc = {
        nc: 1,
        pc: 2,
        lc: 3
    };
    var Ac;
    Ac = /^true$/.test("<<<IS_DEBUG_IP:j>>>");
    function H(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    k = H.prototype;
    k.H = function() {
        return this.right - this.left
    }
    ;
    k.F = function() {
        return this.bottom - this.top
    }
    ;
    function Bc(a) {
        return new H(a.top,a.right,a.bottom,a.left)
    }
    k.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    k.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    k.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    function Cc(a, b, c) {
        b instanceof F ? (a.left += b.x,
        a.right += b.x,
        a.top += b.y,
        a.bottom += b.y) : (a.left += b,
        a.right += b,
        "number" === typeof c && (a.top += c,
        a.bottom += c));
        return a
    }
    ;var Dc = {};
    function Ec(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        C && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }
    function Fc(a, b) {
        var c = new F(0,0)
          , d = ec(Zb(a));
        if (!nb(d, "parent"))
            return c;
        do {
            if (d == b) {
                var e = a
                  , f = Zb(e);
                var g = new F(0,0);
                var h = f ? Zb(f) : document;
                h = !C || 9 <= Number(Cb) || "CSS1Compat" == Xb(h).a.compatMode ? h.documentElement : h.body;
                e != h && (e = Ec(e),
                f = dc(Xb(f).a),
                g.x = e.left + f.x,
                g.y = e.top + f.y)
            } else
                g = Ec(a),
                g = new F(g.left,g.top);
            c.x += g.x;
            c.y += g.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));return c
    }
    ;var Gc = new function(a) {
        this.a = a
    }
    (5);
    function Hc(a) {
        return a[Gc.a] || function() {}
    }
    ;function Ic() {
        this.a = function() {
            return !1
        }
    }
    v(Ic);
    function Jc(a) {
        a = void 0 === a ? u : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)
            try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl)
                return b
        } catch (c) {}
        return null
    }
    ;function Kc(a) {
        return !(!a || !a.call) && "function" === typeof a
    }
    function Lc() {
        var a = D.documentElement
          , b = I();
        try {
            if (D.createEvent) {
                var c = D.createEvent("CustomEvent");
                c.initCustomEvent("osd_load", !0, !0, "");
                a.dispatchEvent(c)
            } else if (Kc(b.CustomEvent)) {
                var d = new b.CustomEvent("osd_load",{
                    bubbles: !0,
                    cancelable: !0,
                    detail: ""
                });
                a.dispatchEvent(d)
            } else if (Kc(b.Event)) {
                var e = new Event("osd_load",{
                    bubbles: !0,
                    cancelable: !0
                });
                a.dispatchEvent(e)
            }
        } catch (f) {}
    }
    function Mc() {
        var a = I();
        return "complete" === a.document.readyState || !!a.google_onload_fired
    }
    var Nc = !!window.google_async_iframe_id
      , Oc = Nc && window.parent || window;
    function I() {
        if (Nc && !oc(Oc)) {
            var a = "." + D.domain;
            try {
                for (; 2 < a.split(".").length && !oc(Oc); )
                    D.domain = a = a.substr(a.indexOf(".") + 1),
                    Oc = window.parent
            } catch (b) {}
            oc(Oc) || (Oc = window)
        }
        return Oc
    }
    ;function Pc(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                if (void 0 === c ? 0 : c)
                    var f = (new G(e.innerWidth,e.innerHeight)).round();
                else {
                    var g = (e || window).document
                      , h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
                    f = (new G(h.clientWidth,h.clientHeight)).round()
                }
                d = f
            } catch (q) {
                d = new G(-12245933,-12245933)
            }
            a = d;
            var n = dc(Xb(b.document).a);
            if (-12245933 == a.width) {
                var m = a.width;
                var l = new H(m,m,m,m)
            } else
                l = new H(n.y,n.x + a.width,n.y + a.height,n.x);
            return l
        } catch (q) {
            return new H(-12245933,-12245933,-12245933,-12245933)
        }
    }
    ;var Qc = {
        NONE: 0,
        dc: 1
    };
    function Rc() {
        this.o = 0;
        this.f = !1;
        this.b = -1;
        this.a = !1;
        this.c = 0
    }
    Rc.prototype.isVisible = function() {
        return this.a ? .3 <= this.o : .5 <= this.o
    }
    ;
    var J = {
        cc: 0,
        ec: 1
    }
      , Sc = {
        370204018: 0,
        370204019: 1,
        370204052: 2,
        370204026: 0,
        370204027: 1,
        370204053: 2
    }
      , Tc = {
        668123728: 0,
        668123729: 1
    }
      , Uc = {
        668123028: 0,
        668123029: 1
    }
      , Vc = {
        NONE: 0,
        kc: 1,
        fc: 2
    }
      , Wc = {
        480596784: 0,
        480596785: 1,
        21063355: 2
    }
      , Xc = {
        319331040: 0,
        319331041: 1
    }
      , Yc = {
        42530094: 0,
        42530095: 1
    }
      , Zc = {
        42530173: 0,
        42530174: 1
    }
      , $c = {
        370204070: 1
    }
      , ad = {
        370204078: 0,
        370204079: 1,
        370204080: 0,
        370204081: 1
    };
    function bd() {
        this.a = null;
        this.b = !1;
        this.c = null
    }
    function K(a) {
        a.b = !0;
        return a
    }
    function cd(a, b) {
        a.c = void 0 === b ? null : b
    }
    function dd(a, b) {
        a.c && x(b, function(c) {
            c = a.c[c];
            void 0 !== c && ed(a, c)
        })
    }
    function fd(a) {
        bd.call(this);
        this.f = a
    }
    t(fd, bd);
    function ed(a, b) {
        var c;
        if (!(c = null !== a.a)) {
            a: {
                c = a.f;
                for (d in c)
                    if (c[d] == b) {
                        var d = !0;
                        break a
                    }
                d = !1
            }
            c = !d
        }
        c || (a.a = b)
    }
    ;function gd() {
        this.a = {};
        this.c = !0;
        this.b = {}
    }
    gd.prototype.reset = function() {
        this.a = {};
        this.c = !0;
        this.b = {}
    }
    ;
    function L(a, b, c) {
        a.a[b] || (a.a[b] = new fd(c));
        return a.a[b]
    }
    function hd(a, b, c) {
        (a = a.a[b]) && ed(a, c)
    }
    function M(a, b) {
        var c = a.b;
        if (null !== c && b in c)
            return a.b[b];
        if (a = a.a[b])
            return a.a
    }
    function id(a) {
        var b = {}
          , c = Qa(a.a, function(d) {
            return d.b
        });
        Pa(c, function(d, e) {
            d = void 0 !== a.b[e] ? String(a.b[e]) : d.b && null !== d.a ? String(d.a) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }
    function jd(a, b) {
        if (!a.c)
            return b;
        b = b.split("&");
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c].split("=")
              , e = d[0];
            d = 1 < d.length ? parseInt(d[1], 10) : 1;
            isNaN(d) || (e = a.a[e]) && ed(e, d)
        }
        return b.join("&")
    }
    function kd(a, b) {
        a.c && x(Ta(a.a), function(c) {
            return dd(c, b)
        })
    }
    function ld(a, b) {
        a.c && b && "string" === typeof b && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","),
        b = Ca(b, function(c) {
            return Number(c)
        }),
        kd(a, b))
    }
    ;var md = !C && !gb();
    function nd(a, b) {
        if (/-[a-z]/.test(b))
            return null;
        if (md && a.dataset) {
            if (!(!B("Android") || hb() || B("Firefox") || B("FxiOS") || B("Opera") || B("Silk") || b in a.dataset))
                return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + kb(b))
    }
    function od(a, b) {
        return /-[a-z]/.test(b) ? !1 : md && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + kb(b)) : !!a.getAttribute("data-" + kb(b))
    }
    ;function pd() {
        this.a = this.b = null;
        this.c = "no"
    }
    ;function qd(a, b) {
        this.b = (void 0 === a ? 0 : a) || 0;
        this.a = (void 0 === b ? "" : b) || ""
    }
    function rd(a) {
        return !!a.b || !!a.a
    }
    qd.prototype.toString = function() {
        return this.b + (this.a ? "-" : "") + this.a
    }
    ;
    function sd() {}
    sd.prototype.a = function() {
        return 0
    }
    ;
    sd.prototype.c = function() {
        return 0
    }
    ;
    sd.prototype.f = function() {
        return 0
    }
    ;
    sd.prototype.b = function() {
        return 0
    }
    ;
    function td() {
        if (!ud())
            throw Error();
    }
    t(td, sd);
    function ud() {
        return !(!E || !E.performance)
    }
    td.prototype.a = function() {
        return ud() && E.performance.now ? E.performance.now() : sd.prototype.a.call(this)
    }
    ;
    td.prototype.c = function() {
        return ud() && E.performance.memory ? E.performance.memory.totalJSHeapSize || 0 : sd.prototype.c.call(this)
    }
    ;
    td.prototype.f = function() {
        return ud() && E.performance.memory ? E.performance.memory.usedJSHeapSize || 0 : sd.prototype.f.call(this)
    }
    ;
    td.prototype.b = function() {
        return ud() && E.performance.memory ? E.performance.memory.jsHeapSizeLimit || 0 : sd.prototype.b.call(this)
    }
    ;
    function vd() {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[D.visibilityState || D.webkitVisibilityState || D.mozVisibilityState || ""] || 0
    }
    ;function wd() {}
    wd.prototype.isVisible = function() {
        return 1 === vd()
    }
    ;
    var xd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
    function yd() {
        var a = u
          , b = []
          , c = null;
        do {
            var d = a;
            if (oc(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else
                e = c,
                c = null;
            b.push(new zd(e || "",d));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);d = 0;
        for (a = b.length - 1; d <= a; ++d)
            b[d].depth = a - d;
        d = u;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a)
                e = b[a],
                e.url || (e.url = d.location.ancestorOrigins[a - 1] || "",
                e.ub = !0);
        return b
    }
    function Ad(a, b) {
        this.a = a;
        this.b = b
    }
    function zd(a, b, c) {
        this.url = a;
        this.b = b;
        this.ub = !!c;
        this.depth = null
    }
    ;function Bd() {
        this.c = "&";
        this.f = !1;
        this.b = {};
        this.h = 0;
        this.a = []
    }
    function Cd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }
    function Dd(a, b, c, d, e) {
        var f = [];
        pc(a, function(g, h) {
            (g = Ed(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
    function Ed(a, b, c, d, e) {
        if (null == a)
            return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0,
            d < c.length) {
                for (var f = [], g = 0; g < a.length; g++)
                    f.push(Ed(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0,
            2 > e ? encodeURIComponent(Dd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
    function Fd(a, b, c, d) {
        a.a.push(b);
        a.b[b] = Cd(c, d)
    }
    function Gd(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Hd(a) - c.length;
        if (0 > d)
            return "";
        a.a.sort(function(l, q) {
            return l - q
        });
        c = null;
        for (var e = "", f = 0; f < a.a.length; f++)
            for (var g = a.a[f], h = a.b[g], n = 0; n < h.length; n++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var m = Dd(h[n], a.c, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        b += m;
                        e = a.c;
                        break
                    }
                    a.f && (e = d,
                    m[e - 1] == a.c && --e,
                    b += m.substr(0, e),
                    e = a.c,
                    d = 0);
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }
    function Hd(a) {
        var b = 1, c;
        for (c in a.b)
            b = c.length > b ? c.length : b;
        return 3997 - b - a.c.length - 1
    }
    ;function Id() {
        this.b = new wd;
        this.a = ud() ? new td : new sd
    }
    Id.prototype.setInterval = function(a, b) {
        return E.setInterval(a, b)
    }
    ;
    Id.prototype.clearInterval = function(a) {
        E.clearInterval(a)
    }
    ;
    Id.prototype.setTimeout = function(a, b) {
        return E.setTimeout(a, b)
    }
    ;
    Id.prototype.clearTimeout = function(a) {
        E.clearTimeout(a)
    }
    ;
    function Jd(a) {
        N();
        var b = I() || E;
        xc(b, a, !1)
    }
    v(Id);
    function Kd() {}
    function N() {
        var a = Kd.g();
        if (!a.a) {
            if (!E)
                throw Error("Context has not been set and window is undefined.");
            a.a = Id.g()
        }
        return a.a
    }
    v(Kd);
    function Ld(a) {
        this.h = null;
        a || (a = []);
        this.c = -1;
        this.a = a;
        a: {
            if (a = this.a.length) {
                --a;
                var b = this.a[a];
                if (!(null === b || "object" != typeof b || pa(b) || Ob && b instanceof Uint8Array)) {
                    this.f = a - -1;
                    this.b = b;
                    break a
                }
            }
            this.f = Number.MAX_VALUE
        }
    }
    ya(Ld, Nb);
    function Md(a) {
        this.f = a;
        this.a = -1;
        this.b = this.c = 0
    }
    function Nd(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e)
                d[e] = arguments[e];
            if (-1 < a.a)
                return b.apply(null, r(d));
            try {
                return a.a = a.f.a.a(),
                b.apply(null, r(d))
            } finally {
                a.c += a.f.a.a() - a.a,
                a.a = -1,
                a.b += 1
            }
        }
    }
    ;function Od(a, b) {
        this.b = a;
        this.c = b;
        this.a = new Md(a)
    }
    ;function O() {
        this.f = void 0;
        this.c = this.l = 0;
        this.h = this.i = -1;
        this.a = new gd;
        cd(K(L(this.a, "mv", Vc)), Wc);
        L(this.a, "omid", J);
        K(L(this.a, "epoh", J));
        K(L(this.a, "epph", J));
        cd(K(L(this.a, "umt", J)), Tc);
        cd(K(L(this.a, "gmpd", J)), Uc);
        cd(K(L(this.a, "sel", J)), Sc);
        cd(K(L(this.a, "buvpe", J)), Xc);
        cd(K(L(this.a, "imams", J)), Yc);
        cd(L(this.a, "imar", J), Zc);
        this.a.b.imar = 1;
        cd(K(L(this.a, "gms", J)), $c);
        K(L(this.a, "phel", J));
        K(L(this.a, "phell", J));
        K(L(this.a, "oseid", zc));
        K(L(this.a, "xdi", J));
        K(L(this.a, "amp", J));
        K(L(this.a, "prf", J));
        K(L(this.a, "gtx", J));
        K(L(this.a, "mvp_lv", J));
        cd(K(L(this.a, "lvio", J)), ad);
        K(L(this.a, "xosd", J));
        this.j = new Od(N(),this.a);
        this.b = null
    }
    function Pd() {
        return O.g().j
    }
    v(O);
    function Qd() {
        var a = "https:";
        E && E.location && "http:" === E.location.protocol && (a = "http:");
        this.b = a;
        this.a = .01
    }
    function Rd(a, b, c, d) {
        if (Math.random() < (d || a.a))
            try {
                if (c instanceof Bd)
                    var e = c;
                else
                    e = new Bd,
                    pc(c, function(g, h) {
                        var n = e
                          , m = n.h++;
                        g = Cd(h, g);
                        n.a.push(m);
                        n.b[m] = g
                    });
                var f = Gd(e, a.b, "/pagead/gen_204?id=" + b + "&");
                f && Jd(f)
            } catch (g) {}
    }
    ;function Sd(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }
    ;var Td = null;
    function Ud() {
        var a = u.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }
    function Vd() {
        var a = void 0 === a ? u : a;
        return (a = a.performance) && a.now ? a.now() : null
    }
    ;function Wd(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    }
    ;var P = u.performance
      , Xd = !!(P && P.mark && P.measure && P.clearMarks)
      , Yd = Oa(function() {
        var a;
        if (a = Xd) {
            var b;
            if (null === Td) {
                Td = "";
                try {
                    a = "";
                    try {
                        a = u.top.location.hash
                    } catch (c) {
                        a = u.location.hash
                    }
                    a && (Td = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                } catch (c) {}
            }
            b = Td;
            a = !!b.indexOf && 0 <= b.indexOf("1337")
        }
        return a
    });
    function Zd() {
        var a = I();
        this.b = [];
        this.c = a || u;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [],
        this.b = a.google_js_reporting_queue,
        b = a.google_measure_js_timing);
        this.a = Yd() || (null != b ? b : 1 > Math.random())
    }
    function $d(a) {
        a && P && Yd() && (P.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
        P.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Zd.prototype.start = function(a, b) {
        if (!this.a)
            return null;
        var c = Vd() || Ud();
        a = new Wd(a,b,c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        P && Yd() && P.mark(b);
        return a
    }
    ;
    function ae() {
        var a = be;
        this.i = ce;
        this.h = "jserror";
        this.f = !0;
        this.b = null;
        this.j = this.c;
        this.a = void 0 === a ? null : a
    }
    function de(a, b, c) {
        return Nd(Pd().a, function() {
            try {
                if (a.a && a.a.a) {
                    var d = a.a.start(b.toString(), 3);
                    var e = c();
                    var f = a.a
                      , g = d;
                    if (f.a && "number" === typeof g.value) {
                        var h = Vd() || Ud();
                        g.duration = h - g.value;
                        var n = "goog_" + g.label + "_" + g.uniqueId + "_end";
                        P && Yd() && P.mark(n);
                        !f.a || 2048 < f.b.length || f.b.push(g)
                    }
                } else
                    e = c()
            } catch (m) {
                f = a.f;
                try {
                    $d(d),
                    f = a.j(b, new ee(fe(m)), void 0, void 0)
                } catch (l) {
                    a.c(217, l)
                }
                if (!f)
                    throw m;
            }
            return e
        })()
    }
    function ge(a, b) {
        var c = he;
        return Nd(Pd().a, function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f)
                e[f] = arguments[f];
            return de(c, a, function() {
                return b.apply(void 0, e)
            })
        })
    }
    ae.prototype.c = function(a, b, c, d, e) {
        e = e || this.h;
        try {
            var f = new Bd;
            f.f = !0;
            Fd(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new ee(fe(b)));
            b.msg && Fd(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.b)
                try {
                    this.b(g)
                } catch (w) {}
            if (d)
                try {
                    d(g)
                } catch (w) {}
            b = [g];
            f.a.push(3);
            f.b[3] = b;
            var h = yd()
              , n = new zd(u.location.href,u,!1);
            b = null;
            var m = h.length - 1;
            for (d = m; 0 <= d; --d) {
                var l = h[d];
                !b && xd.test(l.url) && (b = l);
                if (l.url && !l.ub) {
                    n = l;
                    break
                }
            }
            l = null;
            var q = h.length && h[m].url;
            0 != n.depth && q && (l = h[m]);
            var p = new Ad(n,l);
            p.b && Fd(f, 4, "top", p.b.url || "");
            Fd(f, 5, "url", p.a.url || "");
            Rd(this.i, e, f, c)
        } catch (w) {
            try {
                Rd(this.i, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: fe(w),
                    url: p && p.a.url
                }, c)
            } catch ($a) {}
        }
        return this.f
    }
    ;
    function fe(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c; )
                    c = a,
                    a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    }
    function ee(a) {
        Sd.call(this, Error(a), {
            message: a
        })
    }
    t(ee, Sd);
    var ce, he, be = new Zd;
    function ie() {
        var a = I();
        a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (a = be,
        a.a = !1,
        a.b != a.c.google_js_reporting_queue && (Yd() && x(a.b, $d),
        a.b.length = 0))
    }
    (function() {
        ce = new Qd;
        he = new ae;
        var a = I();
        a && a.document && ("complete" == a.document.readyState ? ie() : be.a && vc(a, "load", function() {
            ie()
        }))
    }
    )();
    function je(a) {
        he.b = function(b) {
            x(a, function(c) {
                c(b)
            })
        }
    }
    function ke(a, b) {
        return de(he, a, b)
    }
    function Q(a, b) {
        return ge(a, b)
    }
    function le(a, b, c, d) {
        he.c(a, b, c, d)
    }
    ;var me = +new Date
      , ne = -1
      , oe = -1
      , pe = !1;
    function R() {
        return +new Date - me
    }
    function qe() {
        var a = O.g().f
          , b = 0 <= oe ? R() - oe : -1
          , c = pe ? R() - ne : -1;
        if (947190542 == a)
            return 100;
        if (79463069 == a)
            return 200;
        a = [2E3, 4E3];
        var d = [250, 500, 1E3];
        le(637, Error(), .001);
        var e = b;
        -1 != c && c < b && (e = c);
        for (b = 0; b < a.length; ++b)
            if (e < a[b]) {
                var f = d[b];
                break
            }
        void 0 === f && (f = d[a.length]);
        return f
    }
    ;function re(a) {
        for (var b = a !== a.top, c = a.top, d = a, e = d, f = 0; d && d != d.parent; )
            d = d.parent,
            f++,
            oc(d) && (e = d);
        c = c === e;
        if (b && c && null != a.top.mraid)
            return {
                Ga: a.top.mraid,
                Ia: 3
            };
        a = a.mraid;
        return null != a ? b ? c ? {
            Ga: a,
            Ia: 2
        } : {
            Ga: a,
            Ia: 1
        } : {
            Ga: a,
            Ia: 0
        } : null
    }
    ;function se(a) {
        a = Jc(a);
        return !(!a || !a.observeIntersection)
    }
    function te(a) {
        return (a = a.document) && ra(a.elementFromPoint)
    }
    ;Ac && (ce.a = 1);
    if (D && D.URL) {
        var ue, sc = D.URL;
        ue = !!sc && 0 < rc().length;
        he.f = !ue
    }
    function S(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        c = ge(d, c);
        vc(a, b, c, {
            capture: e
        });
        return c
    }
    function ve(a) {
        var b = ["IMG", "FRAME", "IFRAME"];
        return Ea(b, function(c) {
            return a.nodeName == String(c)
        }) ? [a] : Da(b, function(c, d) {
            return c.concat(Ka((a || document).getElementsByTagName(String(d))))
        }, [])
    }
    function we(a, b) {
        if (a) {
            var c = 0
              , d = null;
            a = ve(a);
            for (var e = 0; e < a.length; e++) {
                var f = !1;
                d = a[e];
                switch (d.nodeName) {
                case "IMG":
                    var g = d;
                    if (g.complete || g.naturalWidth)
                        f = !0;
                    break;
                case "FRAME":
                case "IFRAME":
                    g = d;
                    try {
                        if (g.readyState)
                            f = "complete" == g.readyState;
                        else {
                            var h = g.contentWindow || g.contentDocument;
                            h.document && (h = h.document);
                            f = h && h.readyState ? "complete" == h.readyState : !1
                        }
                    } catch (n) {
                        f = !1
                    }
                }
                f || (c++,
                S(d, "load", function() {
                    c--;
                    c || b(null)
                }, 130))
            }
            a = d = null;
            !c && b(null)
        }
    }
    function xe(a, b) {
        function c(d) {
            wc(a, d, c);
            b(d)
        }
        return S(a, "DOMNodeRemoved", c, 156, !1)
    }
    ;function ye(a) {
        var b = [];
        Pa(a, function(c, d) {
            d = encodeURIComponent(d);
            "string" === typeof c && (c = encodeURIComponent(c));
            b.push(d + "=" + c)
        });
        b.push("24=" + +new Date);
        return b.join("\n")
    }
    ;function ze() {
        this.a = null;
        this.status = 0
    }
    ;var Ae = 0;
    function Be(a, b) {
        try {
            Ae++,
            b.postMessage(a, "*")
        } catch (c) {}
    }
    function Ce(a, b) {
        b && (a(b),
        b.frames && x(b.frames, function(c) {
            Ce(a, c)
        }))
    }
    function De(a, b) {
        0 == a.length ? (b.a = null,
        b.status = 1) : (a = jc.apply(null, a),
        !a || a.tagName ? b.a = a : b.a = a.parentElement,
        b.a || (b.status = -2))
    }
    function Ee(a, b, c) {
        var d = new RegExp("(?:(?:[?&]|%26|&3[f]|%2526|%253[f])" + b + "(?:=|%3[d]|%253[d]))([a-z0-9-_]*)","i")
          , e = new ze;
        if ("" == b || -1 == c)
            return e.status = -1,
            e;
        try {
            b = [];
            var f = (a.document || document).getElementsByTagName("A");
            for (a = 0; a < f.length; a++) {
                var g = f[a], h = c, n = d.exec(g.href), m;
                if (!(m = !n || !n[1])) {
                    var l = n[1]
                      , q = l.length;
                    if (0 == q)
                        var p = 0;
                    else {
                        for (var w = 305419896, $a = 0; $a < q; $a++)
                            w ^= (w << 5) + (w >> 2) + l.charCodeAt($a) & 4294967295;
                        p = 0 < w ? w : 4294967296 + w
                    }
                    m = h != p
                }
                m || (e.status = 3,
                b.push(g))
            }
            if (0 < b.length || 0 < b.length)
                return De(b, e),
                e
        } catch (oi) {
            return e.status = 7,
            e
        }
        e.status = 1;
        return e
    }
    function Fe(a) {
        return new H(a.top,a.right,a.bottom,a.left)
    }
    function Ge() {
        var a = N().b;
        return 0 === vd() ? -1 : a.isVisible() ? 0 : 1
    }
    function He(a) {
        return [a.top, a.left, a.bottom, a.right].join("-")
    }
    function Ie(a, b, c) {
        if (b && a)
            if (c && 0 < c.length)
                for (c = Ba(c, function(e) {
                    var f = e.parent && e.parent !== e;
                    return e === E.top || f
                }),
                a = ba(c),
                c = a.next(); !c.done; c = a.next())
                    Be(b, c.value);
            else {
                c = [];
                var d = kc(a);
                d && c.push(d);
                if (0 === c.length)
                    try {
                        c = Ca(ac(document, "IFRAME".toString().toLowerCase(), void 0, a), function(e) {
                            return kc(e)
                        })
                    } catch (e) {}
                a = ba(c);
                for (c = a.next(); !c.done; c = a.next()) {
                    c = c.value;
                    try {
                        b && Ce(wa(Be, b), c)
                    } catch (e) {}
                }
            }
    }
    function Je(a, b, c) {
        try {
            var d = ye(b);
            Ie(a, d, c)
        } catch (e) {}
    }
    ;function Ke() {
        var a = A;
        return a ? Ea("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;OMI/".split(";"), function(b) {
            return z(a, b)
        }) ? !0 : z(a, "Presto") && z(a, "Linux") && !z(a, "X11") && !z(a, "Android") && !z(a, "Mobi") : !1
    }
    function Le() {
        var a = A;
        return z(a, "AppleTV") || z(a, "Apple TV") || z(a, "CFNetwork") || z(a, "tvOS")
    }
    function Me() {
        var a = A;
        return z(a, "sdk_google_atv_x86") || z(a, "Android TV")
    }
    ;function T() {
        this.b = !oc(E.top);
        this.u = !this.b || se(E);
        this.i = mc() || !mc() && (B("iPod") || B("iPhone") || B("Android") || B("IEMobile"));
        var a = yd();
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url && (a = a[a.length - 1].url.match(nc)[3] || null) && decodeURI(a);
        this.a = new H(0,0,0,0);
        this.j = new G(0,0);
        this.h = new G(0,0);
        this.c = new H(0,0,0,0);
        this.l = new F(0,0);
        this.s = this.m = !1;
        this.f = !(!E || !re(E));
        Ne(this)
    }
    function Oe(a, b) {
        b && b.screen && (a.j = new G(b.screen.width,b.screen.height))
    }
    function Pe(a, b) {
        var c = a.a ? new G(a.a.H(),a.a.F()) : new G(0,0);
        b = void 0 === b ? E : b;
        null !== b && b != b.top && (b = b.top);
        var d = 0
          , e = 0;
        try {
            var f = b.document
              , g = f.body
              , h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight)
                d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight,
                e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var n = h.scrollHeight
                  , m = h.scrollWidth
                  , l = h.offsetHeight
                  , q = h.offsetWidth;
                h.clientHeight != l && (n = g.scrollHeight,
                m = g.scrollWidth,
                l = g.offsetHeight,
                q = g.offsetWidth);
                n > c.height ? n > l ? (d = n,
                e = m) : (d = l,
                e = q) : n < l ? (d = n,
                e = m) : (d = l,
                e = q)
            }
            var p = new G(e,d)
        } catch (w) {
            p = new G(-12245933,-12245933)
        }
        a.h = p
    }
    function Ne(a) {
        E && E.document && (a.c = Pc(!1, E, a.i),
        a.a = Pc(!0, E, a.i),
        Pe(a, E),
        Oe(a, E))
    }
    function Qe() {
        if (T.g().s)
            return !0;
        var a = N().b.isVisible()
          , b = 0 === vd();
        return a || b
    }
    v(T);
    var Re = new H(0,0,0,0);
    function Se(a, b) {
        try {
            try {
                var c = Fe(a.getBoundingClientRect())
            } catch (n) {
                c = new H(0,0,0,0)
            }
            var d = c.right - c.left
              , e = c.bottom - c.top
              , f = Fc(a, b)
              , g = f.x
              , h = f.y;
            return new H(Math.round(h),Math.round(g + d),Math.round(h + e),Math.round(g))
        } catch (n) {
            return Bc(Re)
        }
    }
    function Te(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom ? new H(Math.max(a.top, b.top),Math.min(a.right, b.right),Math.min(a.bottom, b.bottom),Math.max(a.left, b.left)) : new H(0,0,0,0)
    }
    function Ue(a, b) {
        b = U(b);
        return 0 === b ? 0 : U(a) / b
    }
    function U(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }
    function Ve(a, b) {
        if (!a || !b)
            return !1;
        for (var c = 0; null !== a && 100 > c++; ) {
            if (a === b)
                return !0;
            try {
                a: {
                    var d = void 0;
                    if (Wb && !(C && Bb("9") && !Bb("10") && u.SVGElement && a instanceof u.SVGElement) && (d = a.parentElement)) {
                        var e = d;
                        break a
                    }
                    d = a.parentNode;
                    e = sa(d) && 1 == d.nodeType ? d : null
                }
                if (a = e || a) {
                    var f = Zb(a)
                      , g = f && ec(f)
                      , h = g && g.frameElement;
                    h && (a = h)
                }
            } catch (n) {
                break
            }
        }
        return !1
    }
    function We(a, b, c) {
        if (!a || !b)
            return !1;
        b = Cc(Bc(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = I();
        oc(d.top) && d.top && d.top.document && (d = d.top);
        if (!te(d))
            return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a)
            return !1;
        b = (b = (b = Zb(c)) && b.defaultView && b.defaultView.frameElement) && Ve(b, a);
        d = a === c;
        a = !d && a && lc(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }
    function Xe(a, b, c, d) {
        return T.g().b ? !1 : 0 >= a.H() || 0 >= a.F() ? !0 : c && d ? ke(208, function() {
            return We(a, b, c)
        }) : !1
    }
    ;function Ye(a, b, c) {
        var d = new H(0,0,0,0);
        this.time = a;
        this.volume = null;
        this.c = b;
        this.a = d;
        this.b = c
    }
    ;function Ze(a, b, c, d, e, f, g) {
        this.i = a;
        this.h = b;
        this.b = c;
        this.f = d;
        this.j = e;
        this.a = f;
        this.c = g
    }
    function $e(a, b) {
        return b ? Math.max(a.f, a.j) : a.f
    }
    ;function af(a) {
        this.c = a;
        this.b = 0;
        this.a = null
    }
    af.prototype.cancel = function() {
        N().clearTimeout(this.a);
        this.a = null
    }
    ;
    function bf(a) {
        var b = N();
        a.a = b.setTimeout(Nd(Pd().a, Q(143, function() {
            a.b++;
            a.c.Hb()
        })), qe())
    }
    ;function V(a, b, c) {
        this.b = a;
        this.R = void 0 === c ? "na" : c;
        this.h = [];
        this.w = !1;
        this.f = new Ye(-1,!0,this);
        this.a = this;
        this.i = b;
        this.M = this.u = !1;
        this.J = "uk";
        this.K = !1;
        this.j = !0
    }
    k = V.prototype;
    k.$ = function() {
        return this.C()
    }
    ;
    k.C = function() {
        return !1
    }
    ;
    k.sb = function() {
        this.w = !0
    }
    ;
    k.ha = function() {
        return this.a.J
    }
    ;
    function cf(a, b) {
        a.M || (a.M = !0,
        a.J = b,
        a.i = 0,
        a.a != a || df(a))
    }
    k.G = function() {
        return this.a.R
    }
    ;
    k.O = function() {
        return this.a.ob()
    }
    ;
    k.ob = function() {
        return {}
    }
    ;
    k.P = function() {
        return this.a.i
    }
    ;
    function ef(a, b) {
        Ia(a.h, b) || (a.h.push(b),
        b.ia(a.a),
        b.W(a.f),
        b.T() && (a.u = !0))
    }
    k.Wa = function() {
        var a = T.g();
        a.a = Pc(!0, this.b, a.i)
    }
    ;
    k.Xa = function() {
        Oe(T.g(), this.b)
    }
    ;
    k.Ab = function() {
        Pe(T.g(), this.b)
    }
    ;
    k.Bb = function() {
        var a = T.g();
        a.c = Pc(!1, this.b, a.i)
    }
    ;
    k.Sa = function() {
        return this.f.a
    }
    ;
    function ff(a) {
        a = a.a;
        a.Xa();
        a.Wa();
        a.Bb();
        a.Ab();
        a.f.a = a.Sa()
    }
    k.Hb = function() {}
    ;
    function gf(a) {
        a.u = a.h.length ? Ea(a.h, function(b) {
            return b.T()
        }) : !1
    }
    function hf(a) {
        var b = Ka(a.h);
        x(b, function(c) {
            c.W(a.f)
        })
    }
    function df(a) {
        var b = Ka(a.h);
        x(b, function(c) {
            c.ia(a.a)
        });
        a.a != a || hf(a)
    }
    k.ia = function(a) {
        var b = this.a;
        this.a = a.P() >= this.i ? a : this;
        b !== this.a ? (this.j = this.a.j,
        df(this)) : this.j !== this.a.j && (this.j = this.a.j,
        df(this))
    }
    ;
    k.W = function(a) {
        if (a.b === this.a) {
            var b = this.f
              , c = this.u;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.c == a.c)
                b = b.a,
                c = a.a,
                c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
            this.f = a;
            !c && hf(this)
        }
    }
    ;
    k.T = function() {
        return this.u
    }
    ;
    k.D = function() {
        this.K = !0
    }
    ;
    k.ja = function() {
        return this.K
    }
    ;
    function jf(a, b, c, d) {
        this.c = a;
        this.b = new H(0,0,0,0);
        this.l = new H(0,0,0,0);
        this.a = b;
        this.B = c;
        this.A = d;
        this.w = !1;
        this.timestamp = -1;
        this.h = new Ze(b.f,this.b,new H(0,0,0,0),0,0,R(),0)
    }
    k = jf.prototype;
    k.Da = function() {
        return !0
    }
    ;
    k.X = function() {}
    ;
    k.Oa = function() {
        this.c && (this.b = Se(this.c, this.a.a.b))
    }
    ;
    k.kb = function() {
        this.l = this.a.f.a
    }
    ;
    k.S = function() {
        this.Oa();
        this.h = new Ze(this.a.f,this.b,this.h.b,this.h.f,this.h.j,R(),this.h.c)
    }
    ;
    k.D = function() {
        if (!this.ja()) {
            var a = this.a
              , b = a.h
              , c = Aa(b, this);
            0 <= c && Array.prototype.splice.call(b, c, 1);
            a.u && this.T() && gf(a);
            this.w = !0
        }
    }
    ;
    k.ja = function() {
        return this.w
    }
    ;
    k.O = function() {
        return this.a.O()
    }
    ;
    k.P = function() {
        return this.a.P()
    }
    ;
    k.ha = function() {
        return this.a.ha()
    }
    ;
    k.ia = function() {}
    ;
    k.W = function() {
        this.S()
    }
    ;
    k.T = function() {
        return this.A
    }
    ;
    function kf(a) {
        this.h = !1;
        this.a = a
    }
    k = kf.prototype;
    k.P = function() {
        return this.a.P()
    }
    ;
    k.ha = function() {
        return this.a.ha()
    }
    ;
    k.create = function(a, b, c) {
        var d = null;
        this.a && (d = this.za(a, b, c),
        ef(this.a, d));
        return d
    }
    ;
    k.$ = function() {
        return this.C()
    }
    ;
    k.C = function() {
        return !1
    }
    ;
    k.zb = function() {
        return !0
    }
    ;
    k.D = function() {
        this.h = !0
    }
    ;
    k.ja = function() {
        return this.h
    }
    ;
    k.O = function() {
        return {}
    }
    ;
    function lf(a, b, c) {
        this.c = void 0 === c ? 0 : c;
        this.b = a;
        this.a = null == b ? "" : b
    }
    function mf(a) {
        switch (Math.trunc(a.c)) {
        case -16:
            return -16;
        case -8:
            return -8;
        case 0:
            return 0;
        case 8:
            return 8;
        case 16:
            return 16;
        default:
            return 16
        }
    }
    function nf(a, b) {
        return a.c < b.c ? !0 : a.c > b.c ? !1 : a.b < b.b ? !0 : a.b > b.b ? !1 : typeof a.a < typeof b.a ? !0 : typeof a.a > typeof b.a ? !1 : a.a < b.a
    }
    ;function of() {
        this.c = 0;
        this.a = [];
        this.b = !1
    }
    of.prototype.add = function(a, b, c) {
        ++this.c;
        a = new lf(a,b,c);
        this.a.push(new lf(a.b,a.a,a.c + this.c / 4096));
        this.b = !0;
        return this
    }
    ;
    function pf(a, b) {
        x(b.a, function(c) {
            a.add(c.b, c.a, mf(c))
        })
    }
    function qf(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        pc(b, function(e, f) {
            d && void 0 === e || a.add(f, e, c)
        })
    }
    function rf(a) {
        var b = sf;
        a.b && (La(a.a, function(c, d) {
            return nf(d, c) ? 1 : nf(c, d) ? -1 : 0
        }),
        a.b = !1);
        return Da(a.a, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    }
    ;function sf(a) {
        var b = a.b;
        a = a.a;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : pa(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Ia(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    }
    ;function tf(a) {
        var b = void 0 === b ? !0 : b;
        this.a = new of;
        void 0 !== a && pf(this.a, a);
        b && this.a.add("v", Ub, -16)
    }
    tf.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204"
          , b = rf(this.a);
        0 < b.length && (a += "?" + b);
        return a
    }
    ;
    function uf(a) {
        var b = []
          , c = [];
        Pa(a, function(d, e) {
            if (!(e in Object.prototype) && "undefined" != typeof d)
                switch (pa(d) && (d = d.join(",")),
                d = [e, "=", d].join(""),
                e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                case "aio":
                case "nio":
                case "iem":
                    b.unshift(d);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(d);
                    break;
                default:
                    b.push(d)
                }
        });
        return b.concat(c)
    }
    function vf() {
        if (/r\d{8}/.test("<<<CAFE_VERSION_ID:j>>>"))
            return "<<<CAFE_VERSION_ID:j>>>";
        if (Ub && "unreleased" !== Ub)
            return Ub
    }
    ;function wf() {
        this.a = 0
    }
    v(wf);
    function xf(a) {
        this.m = a;
        this.l = !1
    }
    xf.prototype.i = function(a, b) {
        this.a = a;
        this.b = b
    }
    ;
    function yf() {
        xf.call(this, "capability")
    }
    t(yf, xf);
    yf.prototype.j = function() {
        return !0
    }
    ;
    yf.prototype.h = function() {
        var a = {};
        return a.b_name = this.a.U,
        a.v_name = this.b.U,
        a
    }
    ;
    function zf() {
        xf.call(this, "diff")
    }
    t(zf, xf);
    zf.prototype.j = function() {
        return !(.02 >= Math.abs(this.b.o - this.a.o))
    }
    ;
    zf.prototype.h = function() {
        var a = {};
        return a.b_name = this.a.U,
        a.v_name = this.b.U,
        a.b_vp_off = JSON.stringify(this.a.I),
        a.v_vp_off = JSON.stringify(this.b.I),
        a.b_vp_sz = JSON.stringify(this.a.cb),
        a.v_vp_sz = JSON.stringify(this.b.cb),
        a.b_exp = this.a.o,
        a.v_exp = this.b.o,
        a.efp_occ = this.a.Lb,
        a.sbv = this.a.aa,
        a
    }
    ;
    function Af() {
        xf.call(this, "capt");
        this.f = [];
        this.c = []
    }
    t(Af, xf);
    Af.prototype.i = function(a, b) {
        xf.prototype.i.call(this, a, b);
        20 <= this.c.length || (this.f.push(a.o),
        this.c.push(b.o))
    }
    ;
    Af.prototype.j = function() {
        return 20 === this.c.length
    }
    ;
    Af.prototype.h = function() {
        var a = Bf(this.f, this.c)
          , b = Cf(this.f, this.c)
          , c = {};
        return c.b_name = this.a.U,
        c.v_name = this.b.U,
        c.b_exp = this.f.join(","),
        c.v_exp = this.c.join(","),
        c.diff = a,
        c.diff_buckets = b,
        c
    }
    ;
    function Bf(a, b) {
        return Fa(Na(a, b), function(c) {
            return c[0] !== c[1]
        })
    }
    function Cf(a, b) {
        function c(d) {
            return .25 * Math.floor(d / .25)
        }
        return Bf(Ca(a, c), Ca(b, c))
    }
    ;function W() {
        this.ba = this.ba;
        this.va = this.va
    }
    W.prototype.ba = !1;
    W.prototype.ja = function() {
        return this.ba
    }
    ;
    W.prototype.D = function() {
        this.ba || (this.ba = !0,
        this.N())
    }
    ;
    W.prototype.N = function() {
        if (this.va)
            for (; this.va.length; )
                this.va.shift()()
    }
    ;
    function Df(a, b, c, d, e) {
        e = void 0 === e ? [new yf, new zf, new Af] : e;
        W.call(this);
        this.a = a.za(b, c, this.T());
        this.a.Da();
        this.c = e;
        this.b = d
    }
    t(Df, W);
    Df.prototype.N = function() {
        this.a && (this.a.X(),
        this.a.D())
    }
    ;
    function Ef(a, b, c) {
        x(a.c, function(d) {
            var e = a.b;
            if (!d.l && (d.i(b, c),
            d.j())) {
                d.l = !0;
                var f = d.h()
                  , g = new of;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.m);
                d = wf.g();
                g.add("i", d.a++);
                g.add("adk", e);
                qf(g, f);
                e = new tf(g);
                var h = void 0 === h ? 4E3 : h;
                e = e.toString();
                /&v=[^&]+/.test(e) || (e = (f = vf()) ? e + "&v=" + encodeURIComponent(f) : e);
                e = e.substring(0, h);
                Jd(e)
            }
        })
    }
    Df.prototype.W = function() {}
    ;
    Df.prototype.ia = function() {}
    ;
    Df.prototype.T = function() {
        return !1
    }
    ;
    function Ff() {
        this.a = this.b = this.c = 0
    }
    function Gf(a, b, c, d) {
        b && (a.c += c,
        a.b += c,
        a.a = Math.max(a.a, a.b));
        if (void 0 === d ? !b : d)
            a.b = 0
    }
    ;var Hf = [1, .75, .5, .3, 0];
    function If(a) {
        this.a = a = void 0 === a ? Hf : a;
        this.b = Ca(this.a, function() {
            return new Ff
        })
    }
    function Jf(a) {
        return Kf(a, function(b) {
            return b.c
        }, !1)
    }
    function Lf(a) {
        return Kf(a, function(b) {
            return b.a
        }, !0)
    }
    function Mf(a, b, c, d, e, f) {
        var g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.a.length; f++) {
            var h = a.a[f]
              , n = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            Gf(a.b[f], g && n, e, !g || h)
        }
    }
    function Kf(a, b, c) {
        a = Ca(a.b, function(d) {
            return b(d)
        });
        return c ? a : Nf(a)
    }
    function Nf(a) {
        return Ca(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    }
    ;function Of() {
        this.a = new If;
        this.c = new Ff;
        this.b = -1;
        this.f = new If([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    }
    function Pf(a) {
        return 1E3 <= a.c.a
    }
    ;var Qf = new H(0,0,0,0);
    function X(a, b, c) {
        W.call(this);
        this.ua = Bc(Qf);
        this.b = new Of;
        this.ra = -2;
        this.fb = -1;
        this.Na = b;
        this.qa = null;
        this.R = -1 != b;
        this.I = null;
        this.J = -1;
        this.ea = c;
        this.gb = this.Pa = na;
        this.a = new pd;
        this.a.b = a;
        this.a.a = a;
        this.m = !1;
        this.j = {
            Fa: null,
            Ea: null
        };
        this.fa = !0;
        this.K = null;
        this.Ma = !1;
        O.g().l++;
        this.f = new Rc;
        this.eb = this.ya = -1;
        this.La = 0;
        this.ca = -1;
        this.c = null;
        this.L = new H(0,0,0,0);
        this.Mb = !1;
        a = this.h = new gd;
        L(a, "od", Qc);
        K(L(a, "opac", J));
        L(a, "ue", J);
        L(a, "ud", J);
        K(L(a, "gcm", J));
        K(L(a, "cm", J));
        K(L(a, "sela", J));
        K(L(a, "sbeos", J));
        K(L(a, "prf", J));
        K(L(a, "mwt", J));
        K(L(a, "lcs", J));
        L(a, "iogeo", J);
        K(L(a, "osddt", J));
        (a = this.a.b) && a.getAttribute && od(a, "googleAvInapp") && (T.g().f = !0);
        1 == this.ea ? hd(this.h, "od", 1) : hd(this.h, "od", 0)
    }
    t(X, W);
    k = X.prototype;
    k.N = function() {
        Rf(this);
        this.K && this.K.D();
        this.c && this.c.D();
        delete this.b;
        delete this.Pa;
        delete this.gb;
        delete this.a.b;
        delete this.a.a;
        delete this.j;
        delete this.K;
        delete this.c;
        delete this.h;
        W.prototype.N.call(this)
    }
    ;
    function Sf(a) {
        return a.c ? a.c.b : a.ua
    }
    k.Ca = function(a) {
        var b = O.g();
        "string" === typeof a && 0 != a.length && jd(b.a, a)
    }
    ;
    k.yb = function() {
        return !1
    }
    ;
    k.Z = function() {
        this.R = !0
    }
    ;
    k.Ba = function() {
        return this.R
    }
    ;
    k.Ya = function() {
        this.f.o = 0
    }
    ;
    k.Za = function() {
        this.b = new Of
    }
    ;
    function Tf(a) {
        return a.c ? a.c.G() : (O.g(),
        "ns")
    }
    function Uf(a, b) {
        b = b.create(a.a.a, a.h, a.yb());
        if (b = null != b && b.Da() ? b : null)
            a.c = b
    }
    function Vf(a, b, c) {
        if (a.c) {
            a.c.S();
            var d = a.c.h
              , e = d.i
              , f = e.a;
            if (null != d.b) {
                var g = d.h;
                a.I = new F(g.left - f.left,g.top - f.top);
                a.L = d.b
            }
            f = $e(d, a.aa());
            g = {};
            null !== e.volume && (g.volume = e.volume);
            var h = O.g().a;
            Ea(["imams", "gms"], function(n) {
                return 1 === M(h, n)
            }) || 1 === M(a.h, "osddt") ? (e = a.qa && -1 !== d.a && -1 !== a.qa.a ? d.a - a.qa.a : 0,
            a.qa = d,
            a.Ja(Sf(a), f, b, c, !1, g, e, d.c)) : a.Ja(Sf(a), f, b, c, !1, g, void 0, d.c)
        }
    }
    function Wf(a) {
        if (a.Ba() && a.K) {
            var b = 1 == M(a.h, "od")
              , c = T.g().a
              , d = a.K
              , e = Tf(a)
              , f = new G(c.H(),c.F());
            c = a.aa();
            a = {
                U: e,
                I: a.I,
                cb: f,
                aa: c,
                o: a.f.o,
                Lb: b
            };
            if (b = d.a) {
                b.S();
                e = b.h;
                f = e.i.a;
                var g = null
                  , h = null;
                null != e.b && f && (g = e.h,
                g = new F(g.left - f.left,g.top - f.top),
                h = new G(f.right - f.left,f.bottom - f.top));
                c = {
                    U: b.G(),
                    I: g,
                    cb: h,
                    aa: c,
                    Lb: !1,
                    o: $e(e, c)
                }
            } else
                c = null;
            c && Ef(d, a, c)
        }
    }
    k.Ja = function(a, b, c, d, e, f, g, h) {
        void 0 === g ? -1 == this.Na ? f = 0 : (f = c - this.Na || 1,
        f = 1E4 < f ? 1 : f) : f = g;
        g = f;
        h = void 0 === h ? -1 : h;
        if (!this.m) {
            "number" !== typeof b && (this.I = new F(a.left - b.left,a.top - b.top));
            if (this.Ba()) {
                f = h;
                f = void 0 === f ? -1 : f;
                h = new Rc;
                h.f = d;
                h.b = Ge();
                "number" === typeof b ? (h.o = Xf(this, b),
                h.c = f) : (h.o = Xf(this, a, b),
                h.c = 0 <= f ? f : h.o * U(a) / (E.screen.height * E.screen.width));
                h.a = this.ka();
                f = this.b;
                var n = this.f;
                e = e && this.f.o >= (this.ka() ? .3 : .5);
                f.b = Math.max(f.b, h.o);
                Mf(f.f, h.c, n.c, h.f, g, e);
                Mf(f.a, h.o, n.o, h.f, g, e);
                e = e || n.a != h.a ? n.isVisible() && h.isVisible() : n.isVisible();
                n = !h.isVisible() || h.f;
                Gf(f.c, e, g, n);
                this.Na = c;
                0 < h.o && (-1 === this.ya && (this.ya = c),
                this.eb = c);
                -1 == this.fb && Pf(this.b) && (this.fb = c);
                if (-2 == this.ra)
                    try {
                        a: if (b = "number" === typeof b ? null : b,
                        a && a != Qf && 0 != U(Sf(this))) {
                            var m = T.g();
                            if (!b) {
                                if (!m.a) {
                                    var l = -1;
                                    break a
                                }
                                b = new H(0,m.a.H(),m.a.F(),0)
                            }
                            l = b.H && 0 < b.H() && b.F && 0 < b.F() ? Xf(this, a, b) : -1
                        } else
                            l = -1;
                        this.ra = l
                    } catch (q) {
                        le(207, q)
                    }
                this.f = h;
                d && (this.f.o = 0)
            }
            this.Pa(this)
        }
    }
    ;
    function Xf(a, b, c) {
        if (0 === a.J && 1 === M(a.h, "opac"))
            return 0;
        if ("number" === typeof b)
            return b;
        b = Te(b, c);
        var d = 1 == M(a.h, "od");
        if (0 >= U(Sf(a)) || Xe(b, c, a.a.a, d))
            return 0;
        d = U(b) / U(Sf(a));
        c = Ue(b, c);
        return a.aa() ? Math.max(d, c) : d
    }
    k.ka = function() {
        return !1
    }
    ;
    k.aa = function() {
        return this.Mb || this.Ma
    }
    ;
    k.ab = function(a, b, c) {
        if (c)
            this.ua = c;
        else {
            a = b ? a : a.top;
            this.ua = Bc(Qf);
            try {
                this.a.a && (this.ua = Se(this.a.a, a))
            } catch (d) {}
        }
    }
    ;
    function Yf(a) {
        var b = Math.pow(10, 2);
        return Math.floor(a * b) / b
    }
    function Zf(a) {
        a.a.a && (a.j.Fa = S(a.a.a, "mouseover", function() {
            var b = R();
            a.ca = b
        }, 149),
        a.j.Ea = S(a.a.a, "mouseout", function() {
            var b = R();
            -1 == a.ca || b < a.ca || (a.La += b - a.ca);
            a.ca = -1
        }, 150))
    }
    function Rf(a) {
        a.a.a && (a.j.Fa && (wc(a.a.a, "mouseover", a.j.Fa),
        a.j.Fa = null),
        a.j.Ea && (wc(a.a.a, "mouseout", a.j.Ea),
        a.j.Ea = null))
    }
    function $f(a) {
        a.c && a.c.X()
    }
    ;function ag() {
        bg(this)
    }
    function bg(a) {
        !a.a && ra(E.Goog_AdSense_getAdAdapterInstance) && (a.a = Goog_AdSense_getAdAdapterInstance());
        !a.b && ra(E.Goog_Common_getAdAdapterInstance) && (a.b = Goog_Common_getAdAdapterInstance());
        !a.c && $b() && (a.c = !0)
    }
    function cg(a, b, c, d) {
        bg(a);
        var e = T.g().m;
        a.a && a.a.getNewBlocks(b, e);
        a.b && a.b.getNewBlocks(b, e);
        a.c && !c() && (d(!0),
        b($b(), "", 13, !0))
    }
    function dg(a) {
        bg(a);
        return (a.a ? a.a.numBlocks() : 0) + (a.b ? a.b.numBlocks() : 0) + (a.c ? 1 : 0)
    }
    function eg(a) {
        bg(a);
        return a.a ? a.a.getOseId() : a.b ? a.b.getOseId() : 0
    }
    ;function fg(a) {
        return gb() ? (a = (a = Zb(a)) && ec(a),
        !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
    }
    ;var gg = "StopIteration"in u ? u.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    function hg() {}
    hg.prototype.next = function() {
        throw gg;
    }
    ;
    hg.prototype.hb = function() {
        return this
    }
    ;
    function ig(a) {
        if (a instanceof hg)
            return a;
        if ("function" == typeof a.hb)
            return a.hb(!1);
        if (qa(a)) {
            var b = 0
              , c = new hg;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        throw gg;
                    if (b in a)
                        return a[b++];
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
    function jg(a, b) {
        if (qa(a))
            try {
                x(a, b, void 0)
            } catch (c) {
                if (c !== gg)
                    throw c;
            }
        else {
            a = ig(a);
            try {
                for (; ; )
                    b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== gg)
                    throw c;
            }
        }
    }
    function kg(a, b) {
        var c = 1;
        jg(a, function(d) {
            c = b.call(void 0, c, d)
        });
        return c
    }
    function lg(a, b) {
        var c = ig(a);
        a = new hg;
        a.next = function() {
            var d = c.next();
            if (b.call(void 0, d, void 0, c))
                return d;
            throw gg;
        }
        ;
        return a
    }
    function mg(a) {
        var b = ig(a);
        a = new hg;
        var c = 100;
        a.next = function() {
            if (0 < c--)
                return b.next();
            throw gg;
        }
        ;
        return a
    }
    ;function ng(a, b) {
        this.c = b;
        this.b = null == a;
        this.a = a
    }
    t(ng, hg);
    ng.prototype.next = function() {
        if (this.b)
            throw gg;
        var a = this.a || null;
        this.b = null == a;
        var b;
        if (b = a) {
            b = this.c;
            if (nb(a, "parentElement") && null != a.parentElement && a != a.parentElement)
                var c = a.parentElement;
            else if (b) {
                var d = void 0 === d ? fg : d;
                if (d(a))
                    try {
                        var e = Zb(a)
                          , f = e && ec(e)
                          , g = f && f.frameElement;
                        c = null == g ? null : g
                    } catch (h) {
                        c = null
                    }
                else
                    c = null
            } else
                c = null;
            b = c
        }
        this.a = b;
        return a
    }
    ;
    function og(a) {
        var b = 1;
        a = mg(new ng(a,!0));
        a = lg(a, function() {
            return 0 < b
        });
        return kg(a, function(c, d) {
            var e = 1;
            if (nb(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = Zb(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[jb()];
                    if ("undefined" !== typeof g)
                        d = g;
                    else {
                        g = d.style;
                        var h = Dc.opacity;
                        if (!h) {
                            var n = jb();
                            h = n;
                            void 0 === d.style[n] && (n = (tb ? "Webkit" : sb ? "Moz" : C ? "ms" : qb ? "O" : null) + lb(n),
                            void 0 !== d.style[n] && (h = n));
                            Dc.opacity = h
                        }
                        d = g[h] || ""
                    }
                    g = d
                }
                f = f(g);
                "number" !== typeof f || isNaN(f) || (e = f)
            }
            return b = c * e
        })
    }
    ;function pg(a, b, c, d, e, f, g) {
        f = void 0 === f ? na : f;
        g = void 0 === g ? [] : g;
        X.call(this, c, d, e);
        this.w = b;
        this.ma = this.l = 0;
        this.Fb = null;
        this.Eb = this.wb = "";
        this.xb = [];
        this.Cb = [];
        this.nb = this.Db = "";
        this.Kb = !1;
        this.s = 4;
        this.Ob = !1;
        this.da = [];
        this.M = "";
        this.Nb = this.pb = this.Jb = !1;
        this.Qb = -1;
        this.vb = "";
        this.rb = -1;
        this.B = 0;
        this.xa = -1;
        this.oa = 0;
        this.ga = this.Gb = Ge();
        this.i = 0;
        this.Rb = f;
        this.Pb = !1;
        this.sa = this.Qa = this.Ra = this.wa = this.u = -1;
        this.A = {};
        this.ta = g;
        qg(this, this.a.b);
        this.w && "string" === typeof this.w && (b = this.w.match(/fa=([^&;]+)/)) && 2 == b.length && b[1] == (30).toString() && (this.Ma = !0);
        ld(O.g().a, this.w);
        b = T.g();
        this.ab(a, b.b)
    }
    t(pg, X);
    function rg(a, b, c) {
        return (a = String(a[b] || nd(a, c) || "")) ? a.split("|") : []
    }
    function qg(a, b) {
        if (b) {
            if (0 == a.l)
                if (a.a.b) {
                    var c = a.a.b._adk_;
                    c || (c = (c = nd(a.a.b, "googleAvAdk")) && !/[^0-9]/.test(c) ? parseInt(c, 10) : 0)
                } else
                    c = 0;
            else
                c = a.l;
            a.l = c;
            "" == a.wb && (a.wb = String(b._avi_ || ""));
            "" == a.Eb && (a.Eb = b._avihost_ ? String(b._avihost_) : "pagead2.googlesyndication.com");
            a.xb.length || (a.xb = rg(b, "_avicxn_", "googleAvCxn"));
            a.Cb.length || (a.Cb = rg(b, "_avieoscxn_", "googleEOSAvCxn"));
            "" == a.Db && (a.Db = String(b._aviextcxn_ || nd(b, "googleAvExtCxn") || ""));
            "" == a.nb && (a.nb = String(b._cid_ || ""));
            a.Kb || (a.Kb = !!b._imm_ || od(b, "googleAvImmediate"));
            "" == a.M && (a.M = String(b._cvu_ || nd(b, "googleAvCpmav") || ""));
            a.Ca(String(b._avm_ || nd(b, "googleAvMetadata") || ""))
        }
    }
    k = pg.prototype;
    k.N = function() {
        sg(this);
        delete this.da;
        delete this.ta;
        delete this.Ka;
        delete this.na;
        X.prototype.N.call(this)
    }
    ;
    function tg(a, b, c) {
        x(a.ta, function(d) {
            return d.a(a, c, b)
        })
    }
    k.Ba = function() {
        return this.R && !(1 == this.i || 3 == this.i)
    }
    ;
    function sg(a) {
        a.Ka && wc(a.a.b, "DOMNodeRemoved", a.Ka);
        a.na && a.na.disconnect()
    }
    function ug(a) {
        a.a.b && (sg(a),
        a.xa = -1,
        u.MutationObserver ? (a.na = new u.MutationObserver(function(b, c) {
            for (var d = 0; d < b.length; d++)
                if ("childList" == b[d].type && b[d].removedNodes.length) {
                    a.xa = R();
                    c.disconnect();
                    break
                }
        }
        ),
        a.na.observe(a.a.b, {
            childList: !0,
            subtree: !0
        })) : a.Ka = xe(a.a.b, function() {
            a.xa = R()
        }))
    }
    k.Ya = function() {
        X.prototype.Ya.call(this);
        this.L = new H(0,0,0,0)
    }
    ;
    k.Za = function() {
        X.prototype.Za.call(this);
        this.L = new H(0,0,0,0)
    }
    ;
    k.Z = function() {
        this.R || (this.Ra = Ud(),
        this.Qb = R(),
        vg(this, !1, this.ra));
        X.prototype.Z.call(this);
        wg(this)
    }
    ;
    function wg(a) {
        if (a.R && u == u.top) {
            var b = u.pageYOffset;
            null != b && (a.sa = Math.max(b, a.sa));
            tg(a, 4, {})
        }
    }
    function xg(a) {
        return new qd(a.l,a.Fb)
    }
    k.Ca = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = new gd
              , c = O.g();
            L(b, "omid", J);
            jd(b, a);
            b = M(b, "omid");
            null !== b && (c.a.b.omid = b);
            a = jd(this.h, a);
            c = a.split("&");
            for (b = 0; b < c.length; b++) {
                var d = c[b];
                "ts=0" == d ? this.fa = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1],
                "0" == d ? this.oa = 2 : "1" == d && (this.oa = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (this.Mb = !0) : 0 == d.lastIndexOf("alp=", 0) ? this.vb = d.split("=")[1] : 0 == d.lastIndexOf("alh=", 0) ? (d = parseInt(d.split("=")[1], 10),
                isNaN(d) || (this.rb = d)) : "adf=1" == d && (this.Pb = !0)
            }
            this.f.a = this.ka();
            X.prototype.Ca.call(this, a)
        }
    }
    ;
    k.Ja = function(a, b, c, d, e, f) {
        f = void 0 === f ? {} : f;
        var g = Pf(this.b)
          , h = Math.floor(100 * this.f.o);
        this.oa = 242500 <= (a.right - a.left) * (a.bottom - a.top) ? 1 : 2;
        X.prototype.Ja.call(this, a, b, c, d, e, f);
        -1 == this.ga && -1 != this.f.b ? this.ga = this.f.b : 0 == this.ga && 1 == this.f.b && (this.ga = 1);
        "number" !== typeof b && (0 < this.f.o ? (b = Te(a, b),
        this.L = 0 >= U(Sf(this)) || b.top >= b.bottom || b.left >= b.right ? new H(0,0,0,0) : Cc(b, -a.left, -a.top)) : this.L = new H(0,0,0,0));
        a = Pf(this.b);
        b = Math.floor(100 * this.f.o);
        (!g && a || b != h) && vg(this, a, b);
        try {
            this.J = og(this.a.a)
        } catch (n) {}
        wg(this)
    }
    ;
    k.ka = function() {
        return ub ? !1 : 1 == this.oa
    }
    ;
    function yg(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {}
          , f = zg(a);
        d && y(f, d);
        f.adk = a.l;
        a.Pb && a.ma && (f.adf = a.ma);
        d = a.m;
        var g = O.g();
        !c && d && g.b && (c = g.b);
        c && (f.r = c);
        0 === a.J && (f.invis = 1);
        c = uf(f).join("&");
        e[3] = c;
        e[11] = d;
        e[29] = O.g().c;
        e[0] = b;
        e[7] = a.f.o;
        e[9] = He(a.L);
        e[28] = a.ea;
        e[32] = Tf(a);
        e[5] = Pf(a.b) && 4 != a.s;
        e[13] = Lf(a.b.a).join(",");
        e[18] = 0 == U(Sf(a));
        null != a.I && (e[20] = a.I.y,
        e[21] = a.I.x);
        b = T.g();
        null != b.c && (e[22] = b.c.H(),
        e[23] = b.c.F());
        null != b.a && (e[30] = b.a.H(),
        e[31] = b.a.F(),
        e[38] = He(b.a));
        c = b.l;
        f = Sf(a);
        e[37] = He(new H(f.top + c.y,f.right + c.x,f.bottom + c.y,f.left + c.x));
        b.h && (b = b.h,
        e[39] = b.width + "-" + b.height);
        -1 != a.J && (e[25] = a.J);
        if (a = xg(a))
            a.b && (e[4] = a.b),
            a.a && (e[12] = a.a);
        return e
    }
    k.ab = function(a, b, c) {
        if (!b && (-1 != this.Qb || -1 != this.xa) && 2 != this.B && 1 != this.B && -1 != this.B && 7 != this.B) {
            var d = null;
            try {
                d = this.a.a && this.a.a.getBoundingClientRect()
            } catch (e) {}
            d && 0 != d.width && 0 != d.height || (d = Ee(a.top, this.vb, this.rb),
            this.B = d.status,
            d.a && (d.a == this.a.a ? this.B = 2 : Ag(this, d.a)))
        }
        X.prototype.ab.call(this, a, b, c)
    }
    ;
    function zg(a) {
        var b = T.g()
          , c = id(a.h)
          , d = b.l
          , e = Sf(a);
        c.p = [e.top + d.y, e.left + d.x, e.bottom + d.y, e.right + d.x];
        d = a.b;
        c.tos = Jf(d.a);
        c.mtos = Lf(d.a);
        c.mcvt = d.c.a;
        c.rs = a.ea;
        (e = 5 == a.ea) || (c.ht = a.La);
        0 <= a.ya && (c.tfs = a.ya,
        c.tls = a.eb);
        c.mc = Yf(d.b);
        c.lte = Yf(a.ra);
        c.bas = a.Gb;
        c.bac = a.ga;
        b.b && (c["if"] = a.m ? 0 : 1);
        c.met = a.a.c;
        e && a.w && (c.req = encodeURIComponent(a.w).substring(0, 100));
        a.Nb && (c.ci = "1");
        a.ka() && (c.la = "1");
        a.Ma && (c.pa = "1");
        c.avms = Tf(a);
        a.c && y(c, a.c.O());
        0 != a.i && (c.md = a.i);
        c.lm = a.s;
        y(c, Bg(a));
        return c
    }
    function Bg(a) {
        var b = a.u;
        var c = a.u;
        c = -1 == c || a.wa < c ? -1 : a.wa - c;
        var d = -1 == a.u || a.Ra < a.u ? -1 : a.Ra - a.u
          , e = Cg(a)
          , f = {};
        return f.rst = 0 < b ? b : void 0,
        f.dlt = 0 <= c ? c : void 0,
        f.rpt = 0 <= d ? d : void 0,
        f.isd = 0 <= a.Qa ? a.Qa : void 0,
        f.msd = 0 <= a.sa ? a.sa : void 0,
        f.ext = e ? e : void 0,
        f
    }
    function Ag(a, b) {
        sg(a);
        Rf(a);
        a.a.a = b;
        Zf(a);
        qg(a, b);
        ug(a);
        a.c && (a = a.c,
        a.X(),
        a.c = b,
        a.Da(),
        a.S())
    }
    function Cg(a) {
        return a.A && 0 < qc(a.A).length ? encodeURIComponent(Ca(qc(a.A), function(b) {
            return b + "=" + a.A[b]
        }).join("&")) : null
    }
    function Dg(a, b) {
        b && pc(b, function(c, d) {
            null == c ? delete a.A[d] : a.A[d] = c
        })
    }
    function vg(a, b, c) {
        if (b = a.Rb(b, c))
            Dg(a, b),
            tg(a, 3, {})
    }
    k.yb = function() {
        return !1
    }
    ;
    function Eg() {}
    function Fg(a, b, c) {
        if (null == b)
            c.push("null");
        else {
            if ("object" == typeof b) {
                if (pa(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++)
                        c.push(e),
                        Fg(a, d[f], c),
                        e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (f = b[d],
                        "function" != typeof f && (c.push(e),
                        Gg(d, c),
                        c.push(":"),
                        Fg(a, f, c),
                        e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                Gg(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var Hg = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , Ig = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    function Gg(a, b) {
        b.push('"', a.replace(Ig, function(c) {
            var d = Hg[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1),
            Hg[c] = d);
            return d
        }), '"')
    }
    ;function Jg() {
        this.key = "goog_adspeed";
        this.c = [3, 4];
        this.b = null
    }
    Jg.prototype.a = function(a, b, c) {
        if (!Ia(this.c, c) || !rd(xg(a)))
            return !1;
        c = {};
        c[0] = this.key;
        var d = Bg(a)
          , e = [];
        Fg(new Eg, d, e);
        c = (c[40] = e.join(""),
        c);
        if (d = this.b)
            a: {
                d = this.b;
                for (var f in d)
                    if (!(f in c) || d[f] !== c[f]) {
                        d = !1;
                        break a
                    }
                for (var g in c)
                    if (!(g in d)) {
                        d = !1;
                        break a
                    }
                d = !0
            }
        if (d)
            return !1;
        this.b = c;
        f = {};
        y(f, c, b);
        return Kg(a, {
            bb: {},
            Va: f
        })
    }
    ;
    function Lg() {
        this.key = "goog_update_data";
        this.b = 0;
        this.c = !1
    }
    Lg.prototype.a = function(a, b, c) {
        if (c != this.b || !rd(xg(a)))
            return !1;
        c = 1 == a.s;
        var d = Pf(a.b)
          , e = {}
          , f = {};
        b = {
            Va: (e[0] = this.key,
            e),
            bb: Object.assign({}, b, (f.r = b.r,
            f))
        };
        if (c)
            return d && !this.c ? (this.c = d,
            Kg(a, b)) : !1;
        this.c = d;
        return Kg(a, b)
    }
    ;
    function Mg(a) {
        Lg.call(this, a);
        this.key = "goog_image_request";
        this.b = 2
    }
    t(Mg, Lg);
    function Ng(a) {
        Lg.call(this, a);
        this.key = "goog_image_request";
        this.b = 1
    }
    t(Ng, Lg);
    Ng.prototype.a = function(a, b, c) {
        var d = !a.pb;
        if (Pf(a.b) && a.fa || d) {
            if (b = Lg.prototype.a.call(this, a, b, c))
                if (Pf(a.b) || (a.pb = !0),
                Pf(a.b) || a.fa)
                    a.fa = !1;
            return b
        }
        return !1
    }
    ;
    function Og() {
        this.b = [];
        this.a = []
    }
    function Pg(a) {
        return Ga(Qg.a, function(b) {
            b = xg(b);
            return a.a || b.a ? a.a == b.a : a.b || b.b ? a.b == b.b : !1
        })
    }
    function Rg(a) {
        var b = Qg;
        return a ? Ga(b.a, function(c) {
            return c.a.b == a
        }) : null
    }
    function Sg(a) {
        return Ga(a.a, function() {
            return !1
        })
    }
    function Tg() {
        var a = Qg;
        return 0 == a.b.length ? a.a : 0 == a.a.length ? a.b : Ja(a.a, a.b)
    }
    Og.prototype.reset = function() {
        this.b = [];
        this.a = []
    }
    ;
    function Ug(a, b) {
        a = a.a;
        var c = Ha(a, function(d) {
            return d == b
        });
        return -1 != c ? (a.splice(c, 1),
        $f(b),
        b.D(),
        !0) : !1
    }
    function Vg(a) {
        var b = Qg;
        if (Ug(b, a)) {
            a = function() {
                return null
            }
            ;
            a = function() {
                return Sg(b)
            }
            ;
            for (var c = a(); c; c = a())
                Ug(b, c)
        }
    }
    v(Og);
    var Qg = Og.g();
    function Wg() {
        this.a = this.b = null
    }
    function Xg(a, b) {
        function c(d, e) {
            a.a = null;
            b(d, e)
        }
        if (null == a.b)
            return !1;
        a.a = Ga(a.b, function(d) {
            return null != d && d.$() && d.zb(c)
        });
        a.a && ff(a.a.a);
        return null != a.a
    }
    v(Wg);
    function Yg(a, b, c, d) {
        jf.call(this, a, b, c, d)
    }
    t(Yg, jf);
    Yg.prototype.tb = function(a) {
        return Xe(a, this.l, this.c, 1 == M(this.B, "od"))
    }
    ;
    Yg.prototype.S = function() {
        var a = this.a.f;
        this.timestamp = -1 === a.time ? R() : a.time;
        this.Oa();
        this.kb();
        a = Te(this.b, this.l);
        var b = a.top >= a.bottom || a.left >= a.right ? new H(0,0,0,0) : a;
        a = this.a.f;
        var c = 0
          , d = 0
          , e = 0;
        0 < (this.b.bottom - this.b.top) * (this.b.right - this.b.left) && (this.tb(b) ? b = new H(0,0,0,0) : (c = T.g().j,
        e = new H(0,c.height,c.width,0),
        c = Ue(b, this.b),
        d = Ue(b, T.g().a),
        e = Ue(b, e)));
        b = b.top >= b.bottom || b.left >= b.right ? new H(0,0,0,0) : Cc(b, -this.b.left, -this.b.top);
        this.h = new Ze(a,this.b,b,c,d,this.timestamp,e)
    }
    ;
    Yg.prototype.G = function() {
        return this.a.G()
    }
    ;
    function Zg(a) {
        a = $g(a);
        kf.call(this, a.length ? a[a.length - 1] : new V(E,0));
        this.c = a;
        this.f = na;
        this.b = null
    }
    t(Zg, kf);
    k = Zg.prototype;
    k.G = function() {
        return (this.b ? this.b : this.a).G()
    }
    ;
    k.O = function() {
        return (this.b ? this.b : this.a).O()
    }
    ;
    k.P = function() {
        return (this.b ? this.b : this.a).P()
    }
    ;
    k.zb = function(a) {
        this.f = a;
        x(this.c, function(b) {
            return b.sb()
        });
        ef(this.a, this);
        return !0
    }
    ;
    k.D = function() {
        x(this.c, function(a) {
            a.D()
        });
        kf.prototype.D.call(this)
    }
    ;
    k.$ = function() {
        return Ea(this.c, function(a) {
            return a.$()
        })
    }
    ;
    k.C = function() {
        return Ea(this.c, function(a) {
            return a.C()
        })
    }
    ;
    k.za = function(a, b, c) {
        return new Yg(a,this.a,b,c)
    }
    ;
    k.ia = function(a) {
        0 == a.P() && this.f(a.ha(), this)
    }
    ;
    k.W = function(a) {
        this.b = a.b
    }
    ;
    k.T = function() {
        return !1
    }
    ;
    function $g(a) {
        if (!a.length)
            return [];
        a = Ba(a, function(c) {
            return null != c && c.$()
        });
        for (var b = 1; b < a.length; b++)
            ef(a[b - 1], a[b]);
        return a
    }
    ;function ah(a, b, c, d) {
        jf.call(this, a, b, c, d);
        this.s = this.m = null
    }
    t(ah, Yg);
    k = ah.prototype;
    k.Da = function() {
        var a = this;
        this.s || (this.s = R());
        if (ke(298, function() {
            return a.u()
        }))
            return !0;
        cf(this.a, "msf");
        return !1
    }
    ;
    function bh(a, b) {
        try {
            if (b.length) {
                a.m || (a.m = R());
                var c = ch(b)
                  , d = Fc(a.c, a.a.a.b)
                  , e = d.x
                  , f = d.y;
                a.b = new H(Math.round(f),Math.round(e) + c.boundingClientRect.width,Math.round(f) + c.boundingClientRect.height,Math.round(e));
                var g = Fe(c.intersectionRect);
                a.l = Cc(g, a.b.left - g.left, a.b.top - g.top)
            }
        } catch (h) {
            a.X(),
            le(299, h)
        }
    }
    function ch(a) {
        return Da(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    }
    k.Oa = function() {}
    ;
    k.tb = function() {
        return !1
    }
    ;
    k.kb = function() {}
    ;
    k.O = function() {
        var a = {};
        return Object.assign(this.a.O(), (a.niot_obs = this.s,
        a.niot_cbk = this.m,
        a))
    }
    ;
    var dh = {
        threshold: [0, .3, .5, .75, 1]
    };
    function eh(a, b, c, d) {
        ah.call(this, a, b, c, d);
        this.i = this.j = this.f = null
    }
    t(eh, ah);
    eh.prototype.G = function() {
        return "nio"
    }
    ;
    eh.prototype.X = function() {
        if (this.f && this.c)
            try {
                this.f.unobserve(this.c),
                this.j ? (this.j.unobserve(this.c),
                this.j = null) : this.i && (this.i.disconnect(),
                this.i = null)
            } catch (a) {}
    }
    ;
    function fh(a) {
        return a.f && a.f.takeRecords ? a.f.takeRecords() : []
    }
    eh.prototype.u = function() {
        var a = this;
        if (!this.c)
            return !1;
        var b = this.c
          , c = this.a.a.b
          , d = Pd().a;
        this.f = new c.IntersectionObserver(Nd(d, function(e) {
            return bh(a, e)
        }),dh);
        d = Nd(d, function() {
            a.f.unobserve(b);
            a.f.observe(b);
            bh(a, fh(a))
        });
        c.ResizeObserver ? (this.j = new c.ResizeObserver(d),
        this.j.observe(b)) : c.MutationObserver && (this.i = new u.MutationObserver(d),
        this.i.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        this.f.observe(b);
        bh(this, fh(this));
        return !0
    }
    ;
    eh.prototype.S = function() {
        var a = fh(this);
        0 < a.length && bh(this, a);
        ah.prototype.S.call(this)
    }
    ;
    function gh(a) {
        a = void 0 === a ? E : a;
        kf.call(this, new V(a,2))
    }
    t(gh, kf);
    gh.prototype.G = function() {
        return "nio"
    }
    ;
    gh.prototype.C = function() {
        return "exc" !== (O.g(),
        "ns") && !T.g().f && null != this.a.a.b.IntersectionObserver
    }
    ;
    gh.prototype.za = function(a, b, c) {
        return new eh(a,this.a,b,c)
    }
    ;
    function hh() {
        var a = ih();
        V.call(this, E.top, a, "geo")
    }
    t(hh, V);
    hh.prototype.Sa = function() {
        return T.g().a
    }
    ;
    hh.prototype.C = function() {
        var a = ih();
        this.i !== a && (this.a != this && a > this.a.i && (this.a = this,
        df(this)),
        this.i = a);
        return 2 == a
    }
    ;
    function ih() {
        O.g();
        var a = T.g();
        return a.b || a.f ? 0 : 2
    }
    v(hh);
    var jh = {}
      , kh = (jh[1] = function() {
        return new gh
    }
    ,
    jh[2] = function() {
        return new Zg([hh.g()])
    }
    ,
    jh);
    function lh() {
        this.a = null;
        this.b = kh
    }
    function mh() {
        var a = lh.g();
        a: {
            var b = M(O.g().a, "mv");
            if (null != b && (b = a.b[b]) && (b = b()) && b.C())
                break a;
            b = null
        }
        a.a = b
    }
    v(lh);
    function nh(a, b, c) {
        W.call(this);
        this.f = null != c ? va(a, c) : a;
        this.c = b;
        this.b = va(this.Zb, this);
        this.a = []
    }
    ya(nh, W);
    k = nh.prototype;
    k.Ha = !1;
    k.V = null;
    k.mb = function(a) {
        this.a = arguments;
        this.V ? this.Ha = !0 : oh(this)
    }
    ;
    k.stop = function() {
        this.V && (u.clearTimeout(this.V),
        this.V = null,
        this.Ha = !1,
        this.a = [])
    }
    ;
    k.N = function() {
        nh.Ib.N.call(this);
        this.stop()
    }
    ;
    k.Zb = function() {
        this.V = null;
        this.Ha && (this.Ha = !1,
        oh(this))
    }
    ;
    function oh(a) {
        var b = a.b;
        var c = a.c;
        if (!ra(b))
            if (b && "function" == typeof b.handleEvent)
                b = va(b.handleEvent, b);
            else
                throw Error("Invalid listener argument");
        b = 2147483647 < Number(c) ? -1 : u.setTimeout(b, c || 0);
        a.V = b;
        a.f.apply(null, a.a)
    }
    ;function ph() {
        this.done = !1;
        this.a = {
            jb: 0,
            ib: 0,
            $a: 0,
            lb: 0,
            Aa: -1,
            Ub: 0,
            Tb: 0,
            Vb: 0
        };
        this.w = this.f = this.m = this.h = this.s = null;
        this.j = this.B = !1;
        this.u = "";
        this.b = null;
        this.A = 0;
        this.c = new af(this)
    }
    function qh() {
        var a = (O.g(),
        "ns");
        return "nio" === a || "aio" === a || "omid" === a
    }
    function rh(a, b) {
        var c = Y;
        if (!c.B) {
            c.B = !0;
            if (!c.s && !qh()) {
                var d = Q(137, function(e) {
                    for (var f = [], g = 0; g < arguments.length; ++g)
                        f[g] = arguments[g];
                    return c.l.apply(c, r(f))
                });
                c.h = new nh(d,100);
                c.s = S(a, "scroll", function(e) {
                    for (var f = [], g = 0; g < arguments.length; ++g)
                        f[g] = arguments[g];
                    null !== c.h && c.h.mb.apply(c.h, r(f))
                }, 138)
            }
            c.m || qh() || (d = Q(140, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g)
                    f[g] = arguments[g];
                return c.l.apply(c, r(f))
            }),
            c.f = new nh(d,100),
            c.m = S(a, "resize", function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g)
                    f[g] = arguments[g];
                null !== c.f && c.f.mb.apply(c.f, r(f))
            }, 141));
            if (b)
                for (a = Tg(),
                d = 0; d < a.length; ++d)
                    b = a[d],
                    b.a.a && Zf(b);
            sh(c, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g)
                    f[g] = arguments[g];
                return c.i.apply(c, r(f))
            });
            c.i()
        }
    }
    ph.prototype.l = function() {
        th(this, Tg(), !1)
    }
    ;
    ph.prototype.Hb = function() {
        th(this, Tg(), !1)
    }
    ;
    function uh() {
        var a = lh.g();
        null != a.a && a.a.a && ff(a.a.a);
        a = Wg.g();
        null != a.a && a.a.a ? ff(a.a.a) : Ne(T.g())
    }
    function th(a, b, c) {
        if (!a.done)
            if (a.c.cancel(),
            0 == b.length)
                a.j = !1;
            else {
                a.b = null;
                try {
                    uh();
                    var d = R();
                    O.g().h = d;
                    if (null != Wg.g().a)
                        for (var e = 0; e < b.length; e++)
                            Vf(b[e], d, c);
                    for (e = 0; e < b.length; e++)
                        Wf(b[e]);
                    a.a.$a += R() - d;
                    ++a.a.lb;
                    vh(a)
                } finally {
                    c ? x(b, function(f) {
                        return f.Ya()
                    }) : bf(a.c)
                }
            }
    }
    function sh(a, b) {
        if (!a.w) {
            b = ge(142, b);
            N();
            var c;
            D.visibilityState ? c = "visibilitychange" : D.mozVisibilityState ? c = "mozvisibilitychange" : D.webkitVisibilityState && (c = "webkitvisibilitychange");
            c && vc(D, c, b, {
                capture: !1
            }) && (a.w = b)
        }
    }
    ph.prototype.i = function() {
        var a = Qe()
          , b = R();
        a ? (pe || (ne = b,
        x(Qg.b, function(c) {
            return c.b.i(b, !c.i())
        })),
        pe = !0) : (this.A = wh(this, b),
        pe = !1,
        x(Qg.b, function(c) {
            c.Ba() && c.b.h(b)
        }));
        this.j = !0;
        th(this, Tg(), !a)
    }
    ;
    function xh(a) {
        return !!(Date && a && a.screen && a.document && a.document.body && a.document.body.getBoundingClientRect)
    }
    function yh(a, b, c) {
        if (!a.b || c) {
            c = b.document;
            var d = 0 <= oe ? R() - oe : -1
              , e = R();
            -1 == a.a.Aa && (d = e);
            var f = T.g()
              , g = O.g()
              , h = id(g.a)
              , n = Tg();
            try {
                if (0 < n.length) {
                    var m = f.a;
                    m && (h.bs = [m.H(), m.F()]);
                    var l = f.h;
                    l && (h.ps = [l.width, l.height]);
                    b.screen && (h.ss = [b.screen.width, b.screen.height])
                } else
                    h.url = encodeURIComponent(b.location.href.substring(0, 512)),
                    c.referrer && (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                h.tt = d;
                h.pt = oe;
                h.bin = g.c;
                switch (O.g(),
                "ns") {
                case "iem":
                    h.iem = 1;
                    break;
                case "aio":
                    h.aio = 1;
                    break;
                case "nio":
                    h.nio = 1
                }
                void 0 !== b.google_osd_load_pub_page_exp && (h.olpp = b.google_osd_load_pub_page_exp);
                h.deb = [1, a.a.jb, a.a.ib, a.a.$a, a.a.lb, a.a.Aa, Ae, a.c.b, a.a.Ub, a.a.Tb, a.a.Vb].join("-");
                h.tvt = wh(a, e);
                f.f && (h.inapp = 1);
                if (null !== b && b != b.top) {
                    0 < n.length && (h.iframe_loc = encodeURIComponent(b.location.href.substring(0, 512)));
                    var q = f.c;
                    h.is = [q.H(), q.F()]
                }
            } catch ($a) {
                h.error = 1
            }
            a.b = h
        }
        b = a.b;
        a = {};
        for (var p in b)
            a[p] = b[p];
        p = Pd();
        var w;
        if (1 == M(p.c, "prf")) {
            b = new Ld;
            m = p.a;
            l = 0;
            -1 < m.a && (l = m.f.a.a() - m.a);
            b = Sb(b, 1, m.c + l);
            m = p.a;
            b = Sb(b, 5, -1 < m.a ? m.b + 1 : m.b);
            b = Sb(b, 2, p.b.a.f());
            b = Sb(b, 3, p.b.a.c());
            b = Sb(b, 4, p.b.a.b());
            p = {};
            m = new Lb;
            l = Qb(b, 1);
            l = null == l ? l : +l;
            l = null == l ? 0 : l;
            if (0 !== l && (q = l,
            null != q)) {
                Jb(m.a, 9);
                l = m.a;
                d = q;
                d = (q = 0 > d ? 1 : 0) ? -d : d;
                if (0 === d)
                    Gb = 0 < 1 / d ? 0 : 2147483648,
                    Fb = 0;
                else if (isNaN(d))
                    Gb = 2147483647,
                    Fb = 4294967295;
                else if (1.7976931348623157E308 < d)
                    Gb = (q << 31 | 2146435072) >>> 0,
                    Fb = 0;
                else if (2.2250738585072014E-308 > d)
                    d /= Math.pow(2, -1074),
                    Gb = (q << 31 | d / 4294967296) >>> 0,
                    Fb = d >>> 0;
                else {
                    e = d;
                    c = 0;
                    if (2 <= e)
                        for (; 2 <= e && 1023 > c; )
                            c++,
                            e /= 2;
                    else
                        for (; 1 > e && -1022 < c; )
                            e *= 2,
                            c--;
                    d *= Math.pow(2, -c);
                    Gb = (q << 31 | c + 1023 << 20 | 1048576 * d & 1048575) >>> 0;
                    Fb = 4503599627370496 * d >>> 0
                }
                Kb(l, Fb);
                Kb(l, Gb)
            }
            l = Rb(b, 2);
            0 !== l && null != l && Mb(m, 2, l);
            l = Rb(b, 3);
            0 !== l && null != l && Mb(m, 3, l);
            l = Rb(b, 4);
            0 !== l && null != l && Mb(m, 4, l);
            l = Rb(b, 5);
            if (0 !== l && null != l && null != l)
                if (Jb(m.a, 40),
                b = m.a,
                0 <= l)
                    Jb(b, l);
                else {
                    for (q = 0; 9 > q; q++)
                        b.a.push(l & 127 | 128),
                        l >>= 7;
                    b.a.push(1)
                }
            b = new Uint8Array(m.c + m.a.length());
            q = m.b;
            c = q.length;
            for (d = l = 0; d < c; d++)
                e = q[d],
                b.set(e, l),
                l += e.length;
            q = Ib(m.a);
            b.set(q, l);
            m.b = [b];
            void 0 === w && (w = 0);
            if (!Eb)
                for (Eb = {},
                m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                l = ["+/=", "+/", "-_=", "-_.", "-_"],
                q = 0; 5 > q; q++)
                    for (c = m.concat(l[q].split("")),
                    Db[q] = c,
                    d = 0; d < c.length; d++)
                        e = c[d],
                        void 0 === Eb[e] && (Eb[e] = d);
            w = Db[w];
            m = [];
            for (l = 0; l < b.length; l += 3)
                f = b[l],
                g = (q = l + 1 < b.length) ? b[l + 1] : 0,
                e = (c = l + 2 < b.length) ? b[l + 2] : 0,
                d = f >> 2,
                f = (f & 3) << 4 | g >> 4,
                g = (g & 15) << 2 | e >> 6,
                e &= 63,
                c || (e = 64,
                q || (g = 64)),
                m.push(w[d], w[f], w[g] || "", w[e] || "");
            w = (p.pf = m.join(""),
            p)
        } else
            w = {};
        y(a, w);
        return a
    }
    function zh() {
        x(Tg(), function(a) {
            if (a.a.b) {
                var b = a.l || 0
                  , c = lh.g();
                if (b = c.a ? new Df(c.a,a.a.a,a.h,b) : null)
                    a.K = b
            }
        })
    }
    function Ah() {
        var a = Wg.g();
        if (null != a.a) {
            var b = a.a;
            x(Tg(), function(c) {
                return Uf(c, b)
            })
        }
    }
    function vh(a) {
        "osd" == a.u && x(Qg.a, function(b) {
            var c = {};
            tg(b, 0, (c.r = void 0,
            c))
        })
    }
    function wh(a, b) {
        a = a.A;
        pe && (a += b - ne);
        return a
    }
    function Bh(a) {
        return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }
    function Ch(a) {
        return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }
    function Dh() {
        var a = Y;
        var b = void 0 === b ? function() {
            return {}
        }
        : b;
        he.h = "av-js";
        ce.a = .01;
        je([function(c) {
            var d = O.g()
              , e = {};
            y(c, (e.bin = d.c,
            e.type = "error",
            e), id(d.a), yh(a, E), b());
            if (d = vf())
                e = {},
                y(c, (e.v = encodeURIComponent(d),
                e))
        }
        ])
    }
    function Eh(a) {
        var b = new Fh;
        switch (a) {
        case 0:
        case 5:
            return [];
        default:
            return a = 4 === O.g().c,
            [new Lg(b), new Ng(b), new Mg(b)].concat(r(a ? [] : [new Jg]))
        }
    }
    v(ph);
    var Y = ph.g();
    function Fh() {}
    function Kg(a, b) {
        var c = b || {};
        b = void 0 === c.bb ? {} : c.bb;
        c = void 0 === c.Va ? {} : c.Va;
        var d = c.r
          , e = b[0]
          , f = yh(Y, I(), !1)
          , g = {};
        y(g, f, b);
        b = {};
        y(b, yg(a, e, d, g), c);
        Je(a.a.b, b, a.da);
        return !0
    }
    ;function Gh(a, b, c, d) {
        ah.call(this, a, b, c, d);
        this.f = function() {
            return null
        }
    }
    t(Gh, ah);
    Gh.prototype.G = function() {
        return "aio"
    }
    ;
    Gh.prototype.X = function() {
        if (this.f)
            try {
                this.f()
            } catch (a) {}
    }
    ;
    Gh.prototype.u = function() {
        var a = this;
        if (!this.c)
            return !1;
        this.f = Jc(this.a.a.b).observeIntersection(Nd(Pd().a, function(b) {
            return bh(a, b)
        }));
        return !0
    }
    ;
    function Hh(a) {
        a = void 0 === a ? E : a;
        kf.call(this, new V(a,2))
    }
    t(Hh, kf);
    Hh.prototype.G = function() {
        return "aio"
    }
    ;
    Hh.prototype.$ = function() {
        return T.g().b && this.C()
    }
    ;
    Hh.prototype.C = function() {
        return !T.g().f && se(this.a.a.b)
    }
    ;
    Hh.prototype.za = function(a, b, c) {
        return new Gh(a,this.a,b,c)
    }
    ;
    function Ih() {
        V.call(this, E, 2, "iem")
    }
    t(Ih, V);
    k = Ih.prototype;
    k.Sa = function() {
        function a(p, w) {
            return !!b.b.document.elementFromPoint(p, w)
        }
        var b = this
          , c = new H(0,this.b.innerWidth || this.b.width,this.b.innerHeight || this.b.height,0)
          , d = dc(document)
          , e = Math.floor(c.left - d.x)
          , f = Math.floor(c.top - d.y)
          , g = Math.floor(c.right - d.x)
          , h = Math.floor(c.bottom - d.y);
        c = a(e, f);
        d = a(g, h);
        if (c && d)
            return new H(f,g,h,e);
        var n = a(g, f)
          , m = a(e, h);
        if (c)
            h = Z(f, h, function(p) {
                return a(e, p)
            }),
            g = Z(e, g, function(p) {
                return a(p, f)
            });
        else if (n)
            h = Z(f, h, function(p) {
                return a(g, p)
            }),
            e = Z(g, e, function(p) {
                return a(p, f)
            });
        else if (m)
            f = Z(h, f, function(p) {
                return a(e, p)
            }),
            g = Z(e, g, function(p) {
                return a(p, h)
            });
        else if (d)
            f = Z(h, f, function(p) {
                return a(g, p)
            }),
            e = Z(g, e, function(p) {
                return a(p, h)
            });
        else {
            var l = Math.floor((e + g) / 2)
              , q = Math.floor((f + h) / 2);
            if (!a(l, q))
                return new H(0,0,0,0);
            f = Z(q, f, function(p) {
                return a(l, p)
            });
            h = Z(q, h, function(p) {
                return a(l, p)
            });
            e = Z(l, e, function(p) {
                return a(p, q)
            });
            g = Z(l, g, function(p) {
                return a(p, q)
            })
        }
        return new H(f,g,h,e)
    }
    ;
    function Z(a, b, c) {
        if (c(b))
            return b;
        for (var d = 15; d--; ) {
            var e = Math.floor((a + b) / 2);
            if (e == a || e == b)
                break;
            c(e) ? a = e : b = e
        }
        return a
    }
    k.C = function() {
        return T.g().b && C && Bb(8) && te(this.b)
    }
    ;
    k.Wa = function() {}
    ;
    k.Xa = function() {}
    ;
    k.Ab = function() {}
    ;
    k.Bb = function() {}
    ;
    v(Ih);
    var Sa = {
        bc: "addEventListener",
        gc: "getMaxSize",
        hc: "getScreenSize",
        ic: "getState",
        jc: "getVersion",
        oc: "removeEventListener"
    };
    function Jh() {
        V.call(this, E, 2, "mraid");
        var a = this;
        this.L = 0;
        this.B = this.A = !1;
        this.m = null;
        this.l = 0;
        this.s = -1;
        this.c = null;
        var b = re(this.b);
        b && (this.c = b.Ga,
        this.s = b.Ia);
        this.c && !Ra(function(c) {
            return ra(a.c[c])
        }) && (this.c = null,
        this.s = -1);
        this.f.a = new H(0,0,0,0)
    }
    t(Jh, V);
    k = Jh.prototype;
    k.C = function() {
        return null != this.c
    }
    ;
    k.ob = function() {
        var a = {};
        this.L && (a.mraid = this.L);
        this.A && (a.mlc = 1);
        this.s && (a.mtop = this.s);
        this.m && (a.mse = this.m);
        return a
    }
    ;
    k.Y = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d)
            c[d - 1] = arguments[d];
        try {
            return this.c[a].apply(this.c, c)
        } catch (e) {
            le(538, e, .01, function(f) {
                f.method = a
            })
        }
    }
    ;
    function Kh(a, b, c) {
        a.Y("removeEventListener", b, c)
    }
    k.sb = function() {
        var a = this;
        if (!this.w) {
            this.w = !0;
            a: switch (this.s) {
            case 0:
            case 3:
                var b = !0;
                break a;
            default:
                b = !1
            }
            b ? (T.g().s = !0,
            this.b.document.readyState && "complete" == this.b.document.readyState ? Lh(this) : S(this.b, "load", function() {
                N().setTimeout(Q(292, function() {
                    return Lh(a)
                }), 100)
            }, 292)) : cf(this, "i")
        }
    }
    ;
    function Lh(a) {
        "loading" === a.Y("getState") ? (Mh(a),
        a.Y("addEventListener", "ready", Nh)) : Oh(a)
    }
    function Mh(a) {
        0 == a.l && (a.l = N().setTimeout(Q(293, function() {
            a.l = -1;
            Kh(a, "ready", Nh);
            le(539, Error());
            a.m = "rt";
            cf(a, "w")
        }), 500))
    }
    function Oh(a) {
        a.l = -1;
        "string" === typeof a.c.AFMA_LIDAR ? (a.A = !0,
        Ph(a)) : (a.m = "nc",
        cf(a, "w"))
    }
    function Ph(a) {
        a.B = !1;
        N().setTimeout(Q(524, function() {
            a.B || (Qh(a),
            le(540, Error()),
            a.m = "mt",
            cf(a, "w"))
        }), 500);
        Rh(a);
        a.Y("addEventListener", a.c.AFMA_LIDAR, Sh)
    }
    function Rh(a) {
        var b = 1 == M(O.g().a, "sneio")
          , c = void 0 !== a.c.AFMA_LIDAR_EXP_1
          , d = void 0 !== a.c.AFMA_LIDAR_EXP_2;
        (b = b && d) && (a.c.AFMA_LIDAR_EXP_2 = !0);
        c && (a.c.AFMA_LIDAR_EXP_1 = !b)
    }
    function Qh(a) {
        Kh(a, a.c.AFMA_LIDAR, Sh);
        a.A = !1
    }
    k.Wa = function() {
        var a = T.g()
          , b = Th(this, "getMaxSize");
        a.a = new H(0,b.width,b.height,0)
    }
    ;
    k.Xa = function() {
        T.g().j = Th(this, "getScreenSize")
    }
    ;
    function Th(a, b) {
        if ("loading" === a.Y("getState"))
            return new G(-1,-1);
        b = a.Y(b);
        if (!b)
            return new G(-1,-1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new G(-1,-1) : new G(a,b)
    }
    k.D = function() {
        Qh(this);
        V.prototype.D.call(this)
    }
    ;
    function Nh() {
        try {
            var a = Jh.g();
            0 < a.l && N().clearTimeout(a.l);
            Kh(a, "ready", Nh);
            Oh(a)
        } catch (b) {
            le(541, b)
        }
    }
    function Sh(a, b) {
        try {
            var c = Jh.g();
            c.B = !0;
            var d = a ? new H(a.y,a.x + a.width,a.y + a.height,a.x) : new H(0,0,0,0);
            var e = R()
              , f = Qe();
            var g = new Ye(e,f,c);
            g.a = d;
            g.volume = b;
            c.W(g)
        } catch (h) {
            le(542, h)
        }
    }
    v(Jh);
    function Uh(a) {
        return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
    }
    ;function Vh() {}
    v(Vh);
    function Wh() {}
    v(Wh);
    var Xh = Y.c;
    function Yh() {
        this.b = null;
        this.f = this.i = this.c = this.h = !1;
        Zh(this);
        Dh()
    }
    function $h() {
        if (void 0 === b) {
            var a = void 0 === a ? u : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        Vh.g();
        Ic.g().a = Hc(b);
        Wh.g();
        b = O.g();
        var c = void 0 === c ? !1 : c;
        Ic.g().a(160, c) && hd(b.a, "gtx", 1)
    }
    k = Yh.prototype;
    k.$b = function(a) {
        this.h = a
    }
    ;
    k.qb = function() {
        ai(this);
        N().clearTimeout(this.b);
        this.b = null;
        oe = R();
        bi(this)
    }
    ;
    function ai(a) {
        O.g().c = 1;
        if (!(0 < oe)) {
            try {
                if (!ci(a))
                    return;
                uh();
                di(a)
            } catch (b) {}
            a.b = N().setTimeout(Q(129, function() {
                return ai(a)
            }), 250)
        }
    }
    k.ac = function(a, b, c, d, e, f, g, h, n) {
        var m = this;
        f = void 0 === f ? !1 : f;
        h = void 0 === h ? -1 : h;
        n = void 0 === n ? -1 : n;
        if (xh(E)) {
            var l = new pg(E,b,a,-1,c,g);
            l.ta = Eh(l.s);
            e = O.g();
            ug(l);
            0 < h && -1 == l.u && (l.u = h);
            0 <= n && (l.Qa = n);
            l.Pa = function(q) {
                for (var p = [], w = 0; w < arguments.length; ++w)
                    p[w] = arguments[w];
                return m.Wb.apply(m, r(p))
            }
            ;
            l.gb = function(q) {
                for (var p = [], w = 0; w < arguments.length; ++w)
                    p[w] = arguments[w];
                return m.Ta.apply(m, r(p))
            }
            ;
            13 != c && (l.l = Bh(b),
            l.Fb = Uh(b),
            l.ma = Ch(b));
            f && (l.Nb = !0);
            hd(e.a, "oseid", eg(this.a));
            Qg.a.push(l);
            ++Y.a.ib;
            e.b ? this.Ta(l, e.b) : ((b = Wg.g().a) && Uf(l, b),
            bi(this),
            e.b || (b = M(e.a, "sel"),
            1 == b ? hd(l.h, "sela", d ? 1 : 0) : (2 == b && (d = od(a, "loadComplete")),
            d ? (ei(l),
            l.Z()) : a && we(a, function() {
                l.ja() || (ei(l),
                l.Z())
            }),
            Y.j || Y.i())))
        }
    }
    ;
    function di(a) {
        fi(a);
        cg(a.a, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
                c[d] = arguments[d];
            return a.ac.apply(a, r(c))
        }, function() {
            return a.h
        }, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
                c[d] = arguments[d];
            return a.$b.apply(a, r(c))
        })
    }
    function gi(a) {
        O.g();
        var b = [Ih.g(), Jh.g()]
          , c = [hh.g()];
        return [new Zg(b), new gh(a), new Hh(a), new Zg(c)]
    }
    function bi(a) {
        if (!a.f) {
            a.f = !0;
            try {
                var b = I()
                  , c = T.g()
                  , d = O.g();
                d.f = 947190542;
                if (ci(a)) {
                    Y.a.jb = dg(a.a);
                    c.m = !0;
                    di(a);
                    var e;
                    (e = T.g().f || z(A, "CrKey") || z(A, "PlayStation") || z(A, "Roku") || Ke() || z(A, "Xbox") || Le() || Me()) || (N(),
                    e = 0 !== vd());
                    if (e) {
                        d.i = R();
                        var f = Wg.g();
                        if (null == f.b) {
                            var g = gi(b);
                            f.b = g
                        }
                        Xg(f, function(h) {
                            return hi(a, h)
                        }) ? Y.done || (Ah(),
                        mh(),
                        zh(),
                        ii(a),
                        Lc()) : hi(a, "i")
                    } else
                        hi(a, "pv")
                } else
                    ji(a, "c")
            } catch (h) {
                throw hi(a, "x"),
                Qg.reset(),
                h;
            }
        }
    }
    function ii(a) {
        if (-1 == Y.a.Aa) {
            var b = I()
              , c = 2 == eg(a.a);
            rh(b, c);
            N().setTimeout(Q(131, function() {
                ji(a, "t")
            }), 36E5);
            Y.a.Aa = R() - oe
        }
    }
    function hi(a, b) {
        O.g().b = b;
        for (var c = ba(Qg.a), d = c.next(); !d.done; d = c.next())
            d.value.m = !0;
        ji(a, b, !1)
    }
    function ji(a, b, c) {
        c = void 0 === c ? !0 : c;
        if (!Y.done) {
            Xh.cancel();
            a.a || (a.a = new ag);
            if (2 == eg(a.a) || a.c)
                for (a = Qg.a,
                c && 0 < a.length && th(Y, a, !0),
                c = ba(a),
                a = c.next(); !a.done; a = c.next()) {
                    a = a.value;
                    var d = {};
                    tg(a, 1, (d.r = b,
                    d));
                    $f(a)
                }
            Y.done = !0
        }
    }
    function ci(a) {
        if (!xh(I()))
            return !1;
        var b = new ag;
        if (!(b.a || b.b || b.c))
            return !1;
        a.a = b;
        return !0
    }
    k.Ta = function(a, b) {
        a.m = !0;
        var c = {};
        tg(a, 2, (c.r = b,
        c));
        $f(a)
    }
    ;
    k.Wb = function(a) {
        if (a && Pf(a.b) && (0 >= U(Sf(a)) ? 0 : null != a.M && null != a.M.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i) && !a.Jb)) {
            var b = a.M;
            if (yc())
                xc(window, b, !0);
            else {
                var c = u.document;
                if (c.body) {
                    var d = c.getElementById("goog-srcless-iframe");
                    d || (d = gc((new Yb(c)).a, "IFRAME"),
                    d.style.display = "none",
                    d.id = "goog-srcless-iframe",
                    c.body.appendChild(d));
                    c = d
                } else
                    c = null;
                c && c.contentWindow && xc(c.contentWindow, b, !0)
            }
            a.Jb = !0
        }
    }
    ;
    function ki(a, b) {
        if (b && b.data && b.source) {
            var c = b.data;
            if ("string" !== typeof c)
                var d = null;
            else {
                d = {};
                c = c.split("\n");
                for (var e = 0; e != c.length; ++e) {
                    var f = c[e]
                      , g = f.indexOf("=");
                    if (!(0 >= g)) {
                        var h = Number(f.substr(0, g));
                        f = f.substr(g + 1);
                        switch (h) {
                        case 36:
                        case 26:
                        case 15:
                        case 8:
                        case 11:
                        case 16:
                        case 5:
                        case 18:
                            f = "true" == f;
                            break;
                        case 4:
                        case 33:
                        case 6:
                        case 25:
                        case 28:
                        case 29:
                        case 24:
                        case 31:
                        case 30:
                        case 23:
                        case 22:
                        case 7:
                        case 21:
                        case 20:
                            f = Number(f);
                            break;
                        case 19:
                        case 3:
                            if (ra(decodeURIComponent))
                                try {
                                    f = decodeURIComponent(f)
                                } catch (n) {
                                    throw Error("Error: URI malformed: " + f);
                                }
                        }
                        d[h] = f
                    }
                }
                d = d[0] ? d : null
            }
            if (c = d)
                if (e = c[0],
                Ia("goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_av_measurement_hold_update goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(" "), e) && (d = Pg(new qd(c[4],c[12]))))
                    if (0 < c[33] && -1 == d.wa && (d.wa = c[33]),
                    "goog_stop_monitoring" === e)
                        Vg(d);
                    else if (h = c[26],
                    void 0 !== h && (h = h ? 1 : 2,
                    d.i == h || 2 == d.i || 1 == d.i && 3 == h || (d.i = h,
                    1 != d.i && 3 != d.i || d.Za())),
                    (c[35] || "goog_creative_loaded" === e) && d.Z(),
                    Ia(d.da, b.source) || d.da.push(b.source),
                    "goog_request_monitoring" === e || !d.Ob)
                        if (d.Ob = !0,
                        void 0 !== c[16] && (d.fa = !!c[16]),
                        c[19] && d.Ca(c[19]),
                        void 0 !== c[6]) {
                            b = c[6];
                            c = li(b, d.s);
                            if (c != d.s) {
                                if (5 == c) {
                                    d.m = !0;
                                    Vg(d);
                                    return
                                }
                                d.s = c;
                                d.ta = Eh(c)
                            }
                            4 == b && d.Z();
                            b = T.g();
                            c = yg(d, "goog_acknowledge_monitoring");
                            c[8] = b.b;
                            c[36] = b.u;
                            Je(d.a.b, c, d.da);
                            b = O.g();
                            d.m && b.b ? (a.Ta(d, b.b),
                            Vg(d)) : a.c = !0
                        }
        }
    }
    function ei(a) {
        if (a && rd(xg(a))) {
            var b = yg(a, "goog_get_mode");
            Je(a.a.b, b)
        }
    }
    function fi(a) {
        if (!a.i) {
            S(E, "message", function(c) {
                return ki(a, c)
            }, 132);
            var b = mi().contentWindow;
            b && S(b, "message", function(c) {
                return ki(a, c)
            }, 132);
            a.i = !0
        }
    }
    function ni(a) {
        S(I(), "unload", function() {
            ji(a, "u")
        }, 133)
    }
    function li(a, b) {
        return Ga([5, 2, 4, 3, 1, 0], function(c) {
            return c === a || c === b
        }) || 0
    }
    k.Xb = function(a, b) {
        b = void 0 === b ? !1 : b;
        if (a = Rg(a)) {
            var c = I();
            $f(a);
            try {
                var d = a.a.b;
                if (null != d.contentWindow && 3 == a.ea) {
                    switch (a.s) {
                    case 2:
                    case 4:
                        break;
                    default:
                        return
                    }
                    var e = zg(a);
                    e.adk = a.l;
                    e.adf = a.ma;
                    0 === a.J && (e.invis = 1);
                    e.r = "ac";
                    var f = yh(Y, c, !1);
                    y(e, f);
                    if (b)
                        b = {},
                        tg(a, 1, (b.r = "ac",
                        b));
                    else
                        try {
                            c.google_image_requests || (c.google_image_requests = []),
                            d.contentWindow.osdsir(c, e, a.m || 0 >= U(Sf(a)) ? 2 : Pf(a.b) ? 4 : 3)
                        } catch (g) {}
                }
            } finally {
                Vg(a)
            }
        }
    }
    ;
    k.Yb = function(a, b) {
        a && b && sa(a) && 1 == a.nodeType && sa(b) && 1 == b.nodeType && (a = Rg(a)) && Ag(a, b, I())
    }
    ;
    function mi() {
        var a = fc("IFRAME", {
            id: "google_osd_static_frame_" + Math.floor(1E13 * Math.random()),
            name: "google_osd_static_frame"
        });
        a.style.display = "none";
        a.style.width = "0px";
        a.style.height = "0px";
        E.document.body.appendChild(a);
        return a
    }
    function Zh(a) {
        xa("Goog_Osd_UnloadAdBlock", Q(134, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
                c[d] = arguments[d];
            return a.Xb.apply(a, r(c))
        }));
        xa("Goog_Osd_UpdateElementToMeasure", Q(135, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d)
                c[d] = arguments[d];
            return a.Yb.apply(a, r(c))
        }))
    }
    ;ke(155, function() {
        $h();
        var a = new Yh;
        Y.u = "osd";
        ni(a);
        Mc() ? a.qb() : (ai(a),
        S(I(), "load", function() {
            N().setTimeout(Q(153, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d)
                    c[d] = arguments[d];
                return a.qb.apply(a, r(c))
            }), 100)
        }, 154))
    });
}
).call(this, this, this.document);
