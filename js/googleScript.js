"use strict";
this.default_tr = this.default_tr || {};
(function(_) {
    var window = this;
    try {
        _.Pg = function(a) {
            return _.Da ? _.Ea ? _.Ea.brands.some(function(b) {
                return (b = b.brand) && -1 != b.indexOf(a)
            }) : !1 : !1
        };
        _.Qg = function() {
            return _.Fa() ? _.Pg("Microsoft Edge") : _.u("Edg/")
        };
        _.Rg = function() {
            return _.u("Firefox") || _.u("FxiOS")
        };
        _.Sg = function() {
            return _.Fa() ? _.Pg("Chromium") : (_.u("Chrome") || _.u("CriOS")) && !_.Ia() || _.u("Silk")
        };
        _.Tg = function() {
            return _.u("Safari") && !(_.Sg() || (_.Fa() ? 0 : _.u("Coast")) || _.Ga() || _.Ia() || _.Qg() || (_.Fa() ? _.Pg("Opera") : _.u("OPR")) || _.Rg() || _.u("Silk") || _.u("Android"))
        };
        _.Ug = function() {
            return _.u("Android") && !(_.Sg() || _.Rg() || _.Ga() || _.u("Silk"))
        };
        _.Wg = function(a, b) {
            _.Vg ? a[_.Vg] = b : void 0 !== a.g ? a.g = b : Object.defineProperties(a, {
                g: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            });
            return a
        };
        _.Xg = _.Rg();
        _.Yg = _.La() || _.u("iPod");
        _.Zg = _.u("iPad");
        _.$g = _.Ug();
        _.ah = _.Sg();
        _.bh = _.Tg() && !_.Ma();
        _.ch = "undefined" !== typeof Uint8Array;
        _.dh = !_.C && "function" === typeof btoa;
        _.Vg = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
        _.eh = Object.freeze(_.Wg([], 23));
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var fh, jh, kh, lh, oh, yh, Ah, zh, Bh, Ch, Eh, Fh, Ih, Jh, Nh, Qh, Rh, wh, vh, nh, Wh, th;
        fh = function(a, b) {
            if (_.Vg)
                return a[_.Vg] |= b;
            if (void 0 !== a.g)
                return a.g |= b;
            Object.defineProperties(a, {
                g: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            });
            return b
        };
        _.I = function(a) {
            var b;
            _.Vg ? b = a[_.Vg] : b = a.g;
            return null == b ? 0 : b
        };
        _.gh = function(a, b) {
            _.Vg ? a[_.Vg] && (a[_.Vg] &= ~b) : void 0 !== a.g && (a.g &= ~b)
        };
        _.hh = function(a, b) {
            Object.isFrozen(a) && (a = Array.prototype.slice.call(a));
            _.Wg(a, b);
            return a
        };
        _.ih = function(a) {
            fh(a, 16);
            return a
        };
        jh = function(a, b) {
            _.Wg(b, (a | 0) & -51)
        };
        kh = function(a, b) {
            _.Wg(b, (a | 18) & -41)
        };
        lh = function(a) {
            return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
        };
        _.mh = function(a) {
            if (a & 2)
                throw Error();
        };
        oh = function(a, b, c) {
            var d = !1;
            if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.We === nh)
                return a;
            if (d) {
                var e = d = _.I(a);
                0 === e && (e |= c & 16);
                e |= c & 2;
                e !== d && _.Wg(a, e);
                return new b(a)
            }
        };
        _.ph = function(a, b) {
            return null == a ? b : a
        };
        _.sh = function(a, b, c, d, e, f) {
            var g = !!(f & 2);
            var h = _.qh(a, c, d);
            Array.isArray(h) || (h = _.eh);
            var k = _.I(h);
            k & 1 || fh(h, 1);
            g ? k & 2 || fh(h, 18) : k & 16 && !(k & 2) && _.gh(h, 16);
            if (h === _.eh || !(_.I(h) & 4)) {
                k = h;
                h = !!(f & 2);
                var m = !!(_.I(k) & 2);
                g = k;
                !h && m && (k = Array.prototype.slice.call(k));
                var n = f | (m ? 2 : 0);
                f = m;
                for (var p = m = 0; m < k.length; m++) {
                    var r = oh(k[m], b, n);
                    void 0 !== r && (f = f || !!(2 & _.I(r.ha)),
                        k[p++] = r)
                }
                p < m && (k.length = p);
                b = k;
                k = _.I(b);
                n = k | 5;
                f = f ? n & -9 : n | 8;
                k != f && (b = _.hh(b, f));
                k = b;
                g !== k && _.rh(a, c, k, d);
                (h || 1 === e) && Object.freeze(k);
                return k
            }
            if (3 === e)
                return h;
            g || (b = Object.isFrozen(h),
                1 === e ? b || Object.freeze(h) : (e = _.I(h),
                    g = e & -19,
                    b && (h = Array.prototype.slice.call(h),
                        e = 0,
                        _.rh(a, c, h, d)),
                    e !== g && _.Wg(h, g)));
            return h
        };
        _.uh = function(a, b) {
            th = b;
            a = new a(b);
            th = void 0;
            return a
        };
        _.xh = function(a) {
            switch (typeof a) {
                case "number":
                    return isFinite(a) ? a : String(a);
                case "boolean":
                    return a ? 1 : 0;
                case "object":
                    if (a && !Array.isArray(a) && _.ch && null != a && a instanceof Uint8Array) {
                        if (_.dh) {
                            for (var b = "", c = 0, d = a.length - 10240; c < d;)
                                b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                            a = btoa(b)
                        } else {
                            void 0 === b && (b = 0);
                            if (!vh) {
                                vh = {};
                                c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                                d = ["+/=", "+/", "-_=", "-_.", "-_"];
                                for (var e = 0; 5 > e; e++) {
                                    var f = c.concat(d[e].split(""));
                                    wh[e] = f;
                                    for (var g = 0; g < f.length; g++) {
                                        var h = f[g];
                                        void 0 === vh[h] && (vh[h] = g)
                                    }
                                }
                            }
                            b = wh[b];
                            c = Array(Math.floor(a.length / 3));
                            d = b[64] || "";
                            for (e = f = 0; f < a.length - 2; f += 3) {
                                var k = a[f],
                                    m = a[f + 1];
                                h = a[f + 2];
                                g = b[k >> 2];
                                k = b[(k & 3) << 4 | m >> 4];
                                m = b[(m & 15) << 2 | h >> 6];
                                h = b[h & 63];
                                c[e++] = g + k + m + h
                            }
                            g = 0;
                            h = d;
                            switch (a.length - f) {
                                case 2:
                                    g = a[f + 1],
                                        h = b[(g & 15) << 2] || d;
                                case 1:
                                    a = a[f],
                                        c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
                            }
                            a = c.join("")
                        }
                        return a
                    }
            }
            return a
        };
        yh = function(a, b) {
            var c = a.ha,
                d = c.length,
                e = _.ih([]),
                f = a.constructor.h;
            f && e.push(f);
            var g = a.Ib;
            if (g) {
                e.length = d;
                var h = {};
                e[d - 1] = h
            }
            var k = _.uh(a.constructor, e);
            a.Ag && (k.Ag = a.Ag.slice());
            a = g ? d - 1 : d;
            for (f = f ? 1 : 0; f < a; f++)
                e[f] = b(c[f]);
            if (g)
                for (var m in g)
                    h[m] = b(g[m]);
            return k
        };
        Ah = function(a, b, c, d, e, f) {
            if (null != a) {
                if (Array.isArray(a))
                    a = e && 0 == a.length && _.I(a) & 1 ? void 0 : f && _.I(a) & 2 ? a : zh(a, b, c, void 0 !== d, e, f);
                else if (lh(a)) {
                    var g = {},
                        h;
                    for (h in a)
                        g[h] = Ah(a[h], b, c, d, e, f);
                    a = g
                } else
                    a = b(a, d);
                return a
            }
        };
        zh = function(a, b, c, d, e, f) {
            var g = _.I(a);
            d = d ? !!(g & 16) : void 0;
            a = Array.prototype.slice.call(a);
            for (var h = 0; h < a.length; h++)
                a[h] = Ah(a[h], b, c, d, e, f);
            c && c(g, a);
            return a
        };
        Bh = function(a) {
            return a.We === nh ? a.toJSON() : _.xh(a)
        };
        Ch = function(a, b, c) {
            c = void 0 === c ? kh : c;
            if (null != a) {
                if (_.ch && a instanceof Uint8Array)
                    return b ? a : new Uint8Array(a);
                if (Array.isArray(a)) {
                    var d = _.I(a);
                    if (d & 2)
                        return a;
                    if (b && !(d & 32) && (d & 16 || 0 === d))
                        return _.Wg(a, d | 18),
                            a;
                    a = zh(a, Ch, d & 4 ? kh : c, !0, !1, !0);
                    b = _.I(a);
                    b & 4 && b & 2 && Object.freeze(a);
                    return a
                }
                a.We === nh && (_.I(a.ha) & 2 || (a = _.Dh(a, !0),
                    fh(a.ha, 18)));
                return a
            }
        };
        _.Dh = function(a, b) {
            var c = b || _.I(a.ha) & 2 ? kh : jh,
                d = !!(_.I(a.ha) & 16);
            return yh(a, function(e) {
                return Ch(e, d, c)
            })
        };
        Eh = function(a) {
            if (!(_.I(a.ha) & 2))
                return a;
            var b = _.Dh(a, !1);
            b.j = a;
            return b
        };
        Fh = function(a, b) {
            if (Array.isArray(a)) {
                var c = _.I(a),
                    d = 1;
                !b || c & 2 || (d |= 16);
                (c & d) !== d && _.Wg(a, c | d)
            }
        };
        _.Gh = function(a) {
            return function(b) {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error("ea`" + _.xb(b) + "`" + b);
                fh(b, 18);
                return new a(b)
            }
        };
        _.Hh = function(a, b) {
            return _.ld(a.g, b)
        };
        Ih = {};
        Jh = {};
        _.Kh = function(a, b) {
            this.g = a === Ih && b || "";
            this.h = Jh
        };
        _.Kh.prototype.kb = !0;
        _.Kh.prototype.Qa = function() {
            return this.g
        };
        _.Lh = function(a) {
            return new _.Kh(Ih, a)
        };
        _.Mh = function(a) {
            return a instanceof _.Kh && a.constructor === _.Kh && a.h === Jh ? a.g : "type_error:Const"
        };
        Nh = /^[\w+/_-]+[=]{0,2}$/;
        _.Oh = function(a, b) {
            b = (b || _.q).document;
            return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Nh.test(a) ? a : "" : ""
        };
        _.Ph = function(a) {
            return _.Oh("script[nonce]", a)
        };
        Qh = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        };
        Rh = function(a) {
            return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
                return c + d.toUpperCase()
            })
        };
        _.Sh = function(a, b) {
            return (b || document).getElementsByTagName(String(a))
        };
        _.Th = function(a) {
            if (a instanceof _.F)
                return a;
            var b = new _.F(_.Hb);
            _.le(b, 2, a);
            return b
        };
        _.Uh = function(a, b, c, d, e, f, g) {
            var h = new _.ng;
            _.qg.push(h);
            b && h.I("complete", b);
            h.Rb("ready", h.Y);
            f && (h.l = Math.max(0, f));
            g && (h.C = g);
            h.send(a, c, d, e)
        };
        wh = {};
        vh = null;
        nh = {};
        Wh = function(a) {
            var b = a.h + a.g;
            return a.Ib || (a.Ib = a.ha[b] = {})
        };
        _.qh = function(a, b, c) {
            return -1 === b ? null : b >= a.h ? a.Ib ? a.Ib[b] : void 0 : c && a.Ib && (c = a.Ib[b],
                null != c) ? c : a.ha[b + a.g]
        };
        _.rh = function(a, b, c, d) {
            a.j && (a.j = void 0);
            if (b >= a.h || d)
                return Wh(a)[b] = c,
                    a;
            a.ha[b + a.g] = c;
            (c = a.Ib) && b in c && delete c[b];
            return a
        };
        _.Xh = function(a, b, c, d) {
            var e = _.qh(a, c, d);
            b = oh(e, b, _.I(a.ha));
            b !== e && null != b && _.rh(a, c, b, d);
            return b
        };
        _.Yh = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            b = _.Xh(a, b, c, d);
            if (null == b)
                return b;
            if (!(_.I(a.ha) & 2)) {
                var e = Eh(b);
                e !== b && (b = e,
                    _.rh(a, c, b, d))
            }
            return b
        };
        _.Zh = function(a, b, c) {
            var d = _.I(a.ha),
                e = !!(d & 2);
            a = _.sh(a, b, c, void 0, e ? 1 : 2, d);
            if (!(e || _.I(a) & 8)) {
                for (e = 0; e < a.length; e++)
                    b = a[e],
                    c = Eh(b),
                    b !== c && (a[e] = c);
                fh(a, 8)
            }
            return a
        };
        _.$h = function(a, b, c) {
            _.mh(_.I(a.ha));
            null == c && (c = void 0);
            return _.rh(a, b, c)
        };
        _.J = function(a, b, c) {
            null == a && (a = th);
            th = void 0;
            var d = this.constructor.h;
            if (null == a) {
                a = d ? [d] : [];
                var e = !0;
                _.Wg(a, 48)
            } else {
                if (!Array.isArray(a))
                    throw Error();
                if (d && d !== a[0])
                    throw Error();
                var f = fh(a, 0) | 32;
                e = 0 !== (16 & f);
                _.Wg(a, f)
            }
            this.g = d ? 0 : -1;
            this.ha = a;
            a: {
                f = this.ha.length;
                d = f - 1;
                if (f && (f = this.ha[d],
                        lh(f))) {
                    this.Ib = f;
                    this.h = d - this.g;
                    break a
                }
                void 0 !== b && -1 < b ? (this.h = Math.max(b, d + 1 - this.g),
                    this.Ib = void 0) : this.h = Number.MAX_VALUE
            }
            if (c) {
                b = e && !0;
                e = this.h;
                var g;
                for (d = 0; d < c.length; d++)
                    if (f = c[d],
                        f < e) {
                        f += this.g;
                        var h = a[f];
                        h ? Fh(h, b) : a[f] = _.eh
                    } else
                        g || (g = Wh(this)),
                        (h = g[f]) ? Fh(h, b) : g[f] = _.eh
            }
        };
        _.J.prototype.toJSON = function() {
            var a = this.ha,
                b;
            _.Vh ? b = a : b = zh(a, Bh, void 0, void 0, !1, !1);
            return b
        };
        _.J.prototype.We = nh;
        _.J.prototype.toString = function() {
            return this.ha.toString()
        };
        var bi, ai;
        _.K = function(a, b, c) {
            if ("string" === typeof b)
                (b = ai(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = ai(c, d);
                    f && (c.style[f] = e)
                }
        };
        bi = {};
        ai = function(a, b) {
            var c = bi[b];
            if (!c) {
                var d = Qh(b);
                c = d;
                void 0 === a.style[d] && (d = (_.lc ? "Webkit" : _.kc ? "Moz" : _.C ? "ms" : null) + Rh(d),
                    void 0 !== a.style[d] && (c = d));
                bi[b] = c
            }
            return c
        };
        _.ci = _.kc ? "MozUserSelect" : _.lc || _.ic ? "WebkitUserSelect" : null;
    } catch (e) {
        _._DumpException(e)
    }
    try {
        var gi;
        _.di = {};
        _.ei = function(a) {
            return a instanceof _.Fc && a.constructor === _.Fc ? a.g : "type_error:SafeUrl"
        };
        _.fi = function(a) {
            if (a instanceof _.Fc)
                return a;
            a = "object" == typeof a && a.kb ? a.Qa() : String(a);
            a: {
                var b = a;
                if (_.Hc) {
                    try {
                        var c = new URL(b)
                    } catch (d) {
                        b = "https:";
                        break a
                    }
                    b = c.protocol
                } else
                    b: {
                        c = document.createElement("a");
                        try {
                            c.href = b
                        } catch (d) {
                            b = void 0;
                            break b
                        }
                        b = c.protocol;
                        b = ":" === b || "" === b ? "https:" : b
                    }
            }
            "javascript:" === b && (a = "about:invalid#zClosurez");
            return _.Jc(a)
        };
        gi = {};
        _.hi = function(a) {
            this.g = a;
            this.kb = !0
        };
        _.hi.prototype.toString = function() {
            return this.g.toString()
        };
        _.hi.prototype.Qa = function() {
            return this.g
        };
        _.ii = {};
        _.Nf = function() {
            throw Error("O");
        };
        _.Nf.prototype.ue = null;
        _.Nf.prototype.pa = function() {
            return this.g
        };
        _.Nf.prototype.toString = function() {
            return this.g
        };
        _.Nf.prototype.Ic = function() {
            if (this.Cb !== _.ii)
                throw Error("P");
            return _.Uc(this.toString())
        };
        var ji = function() {
            _.Nf.call(this)
        };
        _.z(ji, _.Nf);
        ji.prototype.Cb = _.ii;
        var ki = function() {
            _.Nf.call(this)
        };
        _.z(ki, _.Nf);
        ki.prototype.Cb = _.di;
        ki.prototype.ue = 1;
        ki.prototype.l = function() {
            return new _.hi(this.toString(), gi)
        };
        _.L = function(a) {
            function b(c) {
                this.g = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = new b(String(c));
                void 0 !== d && (c.ue = d);
                return c
            }
        }(ji);
        _.li = function(a) {
            function b(c) {
                this.g = c
            }
            b.prototype = a.prototype;
            return function(c) {
                return new b(String(c))
            }
        }(ki);
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ma("googleTranslateButton.css");

        _.pa();
    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ma("googleTranslateButton.css");
        /*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
        /*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var mi = function(a) {
                var b = document.implementation.createHTMLDocument("").createRange();
                a = _.Uc(a);
                return b.createContextualFragment(_.Tc(a))
            },
            ni = function(a) {
                a = a.nodeName;
                return "string" === typeof a ? a : "FORM"
            },
            oi = function(a) {
                a = a.nodeType;
                return 1 === a || "number" !== typeof a
            },
            pi = function(a) {
                if (!_.Jf) {
                    a: {
                        var b = document.createElement("a");
                        try {
                            b.href = a
                        } catch (c) {
                            a = void 0;
                            break a
                        }
                        a = b.protocol;
                        a = ":" === a || "" === a ? "https:" : a
                    }
                    return a
                }
                try {
                    b = new URL(a)
                } catch (c) {
                    return "https:"
                }
                return b.protocol
            },
            qi = function(a, b, c) {
                a.setAttribute(b, c)
            },
            ri = function(a, b) {
                return _.xh(b)
            },
            si = function(a, b) {
                a = a.split("%s");
                for (var c = "", d = a.length - 1, e = 0; e < d; e++)
                    c += a[e] + (e < b.length ? b[e] : "%s");
                _.aa.call(this, c + a[d])
            },
            ti = function(a) {
                var b = {};
                a.forEach(function(c) {
                    b[c[0]] = c[1]
                });
                return function(c) {
                    return b[c.find(function(d) {
                        return d in b
                    })] || ""
                }
            },
            ui = function(a) {
                var b = _.Ba();
                if ("Internet Explorer" === a) {
                    if (_.Ha())
                        if ((a = /rv: *([\d\.]*)/.exec(b)) && a[1])
                            b = a[1];
                        else {
                            a = "";
                            var c = /MSIE +([\d\.]+)/.exec(b);
                            if (c && c[1])
                                if (b = /Trident\/(\d.\d)/.exec(b),
                                    "7.0" == c[1])
                                    if (b && b[1])
                                        switch (b[1]) {
                                            case "4.0":
                                                a = "8.0";
                                                break;
                                            case "5.0":
                                                a = "9.0";
                                                break;
                                            case "6.0":
                                                a = "10.0";
                                                break;
                                            case "7.0":
                                                a = "11.0"
                                        }
                                    else
                                        a = "7.0";
                            else
                                a = c[1];
                            b = a
                        }
                    else
                        b = "";
                    return b
                }
                var d = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
                c = [];
                for (var e; e = d.exec(b);)
                    c.push([e[1], e[2], e[3] || void 0]);
                b = ti(c);
                switch (a) {
                    case "Opera":
                        if (_.Ga())
                            return b(["Version", "Opera"]);
                        if (_.Fa() ? _.Pg("Opera") : _.u("OPR"))
                            return b(["OPR"]);
                        break;
                    case "Microsoft Edge":
                        if (_.Ia())
                            return b(["Edge"]);
                        if (_.Qg())
                            return b(["Edg"]);
                        break;
                    case "Chromium":
                        if (_.Sg())
                            return b(["Chrome", "CriOS", "HeadlessChrome"])
                }
                return "Firefox" === a && _.Rg() || "Safari" === a && _.Tg() || "Android Browser" === a && _.Ug() || "Silk" === a && _.u("Silk") ? (b = c[2]) && b[1] || "" : ""
            },
            vi = function(a) {
                if (_.Fa() && "Silk" !== a) {
                    var b = _.Ea.brands.find(function(c) {
                        return c.brand === a
                    });
                    if (!b || !b.version)
                        return NaN;
                    b = b.version.split(".")
                } else {
                    b = ui(a);
                    if ("" === b)
                        return NaN;
                    b = b.split(".")
                }
                return 0 === b.length ? NaN : Number(b[0])
            },
            xi = function() {
                var a = _.Ba(),
                    b = "";
                if (_.Oa())
                    b = /Windows (?:NT|Phone) ([0-9.]+)/,
                    b = (a = b.exec(a)) ? a[1] : "0.0";
                else if (_.Ma())
                    b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,
                    b = (a = b.exec(a)) && a[1].replace(/_/g, ".");
                else if (_.Na())
                    b = /Mac OS X ([0-9_.]+)/,
                    b = (a = b.exec(a)) ? a[1].replace(/_/g, ".") : "10";
                else if (-1 != _.Ba().toLowerCase().indexOf("kaios"))
                    b = /(?:KaiOS)\/(\S+)/i,
                    b = (a = b.exec(a)) && a[1];
                else if (_.Ka())
                    b = /Android\s+([^\);]+)(\)|;)/,
                    b = (a = b.exec(a)) && a[1];
                else if (_.Ja() ? "Chrome OS" === _.Ea.platform : _.u("CrOS"))
                    b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
                    b = (a = b.exec(a)) && a[1];
                return 0 <= wi(b || "", 12)
            },
            yi = function(a) {
                var b = [],
                    c = 0,
                    d;
                for (d in a)
                    b[c++] = d;
                return b
            },
            Ai = function() {
                var a = zi,
                    b;
                for (b in a)
                    return !1;
                return !0
            },
            Bi = function(a) {
                var b = {},
                    c;
                for (c in a)
                    b[c] = a[c];
                return b
            },
            Ci = function(a) {
                for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
                    var e = a.charAt(d);
                    if ("]" == e) {
                        if (b)
                            return !1;
                        b = !0
                    } else if ("[" == e) {
                        if (!b)
                            return !1;
                        b = !1
                    } else if (!b && !c.test(e))
                        return !1
                }
                return b
            },
            Ei = function(a) {
                return a.replace(_.Pc, function(b, c, d, e) {
                    var f = "";
                    d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                        f = h;
                        return k
                    });
                    b = (Di(d) || _.Kc).Qa();
                    return c + f + b + f + e
                })
            },
            Gi = function(a) {
                if (a instanceof _.Fc)
                    return 'url("' + _.ei(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
                if (a instanceof _.Kh)
                    a = _.Mh(a);
                else {
                    a = String(a);
                    var b = a.replace(_.Qc, "$1").replace(_.Qc, "$1").replace(_.Pc, "url");
                    if (_.Oc.test(b)) {
                        if (b = !Fi.test(a)) {
                            for (var c = b = !0, d = 0; d < a.length; d++) {
                                var e = a.charAt(d);
                                "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                            }
                            b = b && c && Ci(a)
                        }
                        a = b ? Ei(a) : "zClosurez"
                    } else
                        a = "zClosurez"
                }
                if (/[{;}]/.test(a))
                    throw new si("Value does not allow [{;}], got: %s.", [a]);
                return a
            },
            Hi = function(a) {
                return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
            },
            Ii = function(a) {
                var b = {
                    nonce: _.Ph()
                };
                b = void 0 === b ? {} : b;
                a = _.Nb(a).toString();
                var c = "<script";
                b.id && (c += ' id="' + Hi(b.id) + '"');
                b.nonce && (c += ' nonce="' + Hi(b.nonce) + '"');
                b.type && (c += ' type="' + Hi(b.type) + '"');
                return _.Uc(c + (">" + a + "\x3c/script>"))
            },
            Ki = function(a) {
                return _.ya(a) ? a.Ic && (a = a.Ic(),
                    a instanceof _.Sc) ? a : Ji("zSoyz") : Ji(String(a))
            },
            Mi = function(a, b) {
                b && b.j ? b.j(a) : Li(a, Ki(b))
            },
            Oi = function(a, b) {
                b = a(b || Ni, void 0);
                a = _.ed();
                b && b.h ? a = b.h() : (a = _.Hh(a, "DIV"),
                    b = Ki(b),
                    Li(a, b));
                1 == a.childNodes.length && (b = a.firstChild,
                    1 == b.nodeType && (a = b));
                return a
            },
            Pi = function(a) {
                var b = "javascript:" !== pi("#") ? "#" : void 0;
                void 0 !== b && (a.href = b)
            },
            Qi = function() {
                function a() {
                    e[0] = 1732584193;
                    e[1] = 4023233417;
                    e[2] = 2562383102;
                    e[3] = 271733878;
                    e[4] = 3285377520;
                    n = m = 0
                }

                function b(p) {
                    for (var r = g, t = 0; 64 > t; t += 4)
                        r[t / 4] = p[t] << 24 | p[t + 1] << 16 | p[t + 2] << 8 | p[t + 3];
                    for (t = 16; 80 > t; t++)
                        p = r[t - 3] ^ r[t - 8] ^ r[t - 14] ^ r[t - 16],
                        r[t] = (p << 1 | p >>> 31) & 4294967295;
                    p = e[0];
                    var y = e[1],
                        G = e[2],
                        P = e[3],
                        Ca = e[4];
                    for (t = 0; 80 > t; t++) {
                        if (40 > t)
                            if (20 > t) {
                                var na = P ^ y & (G ^ P);
                                var Id = 1518500249
                            } else
                                na = y ^ G ^ P,
                                Id = 1859775393;
                        else
                            60 > t ? (na = y & G | P & (y | G),
                                Id = 2400959708) : (na = y ^ G ^ P,
                                Id = 3395469782);
                        na = ((p << 5 | p >>> 27) & 4294967295) + na + Ca + Id + r[t] & 4294967295;
                        Ca = P;
                        P = G;
                        G = (y << 30 | y >>> 2) & 4294967295;
                        y = p;
                        p = na
                    }
                    e[0] = e[0] + p & 4294967295;
                    e[1] = e[1] + y & 4294967295;
                    e[2] = e[2] + G & 4294967295;
                    e[3] = e[3] + P & 4294967295;
                    e[4] = e[4] + Ca & 4294967295
                }

                function c(p, r) {
                    if ("string" === typeof p) {
                        p = unescape(encodeURIComponent(p));
                        for (var t = [], y = 0, G = p.length; y < G; ++y)
                            t.push(p.charCodeAt(y));
                        p = t
                    }
                    r || (r = p.length);
                    t = 0;
                    if (0 == m)
                        for (; t + 64 < r;)
                            b(p.slice(t, t + 64)),
                            t += 64,
                            n += 64;
                    for (; t < r;)
                        if (f[m++] = p[t++],
                            n++,
                            64 == m)
                            for (m = 0,
                                b(f); t + 64 < r;)
                                b(p.slice(t, t + 64)),
                                t += 64,
                                n += 64
                }

                function d() {
                    var p = [],
                        r = 8 * n;
                    56 > m ? c(h, 56 - m) : c(h, 64 - (m - 56));
                    for (var t = 63; 56 <= t; t--)
                        f[t] = r & 255,
                        r >>>= 8;
                    b(f);
                    for (t = r = 0; 5 > t; t++)
                        for (var y = 24; 0 <= y; y -= 8)
                            p[r++] = e[t] >> y & 255;
                    return p
                }
                for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k)
                    h[k] = 0;
                var m, n;
                a();
                return {
                    reset: a,
                    update: c,
                    digest: d,
                    Th: function() {
                        for (var p = d(), r = "", t = 0; t < p.length; t++)
                            r += "0123456789ABCDEF".charAt(Math.floor(p[t] / 16)) + "0123456789ABCDEF".charAt(p[t] % 16);
                        return r
                    }
                }
            },
            Ri = function(a, b, c) {
                _.Uh(a.url, function(d) {
                    d = d.target;
                    d.Kd() ? b(d.Wc()) : c(d.pc())
                }, a.zj, a.body, a.gf, a.wf, a.withCredentials)
            },
            Si = function(a, b) {
                _.A.call(this);
                this.D = a;
                this.N = b;
                this.j = "https://play.google.com/log?format=json&hasfast=true";
                this.H = Ri;
                this.g = !1
            },
            Ti = function(a) {
                for (var b = a.length; 0 <= --b;)
                    a[b] = 0
            },
            Ui = function(a, b, c, d, e) {
                this.fh = a;
                this.di = b;
                this.ci = c;
                this.Uh = d;
                this.mj = e;
                this.ug = a && a.length
            },
            Vi = function(a, b) {
                this.Yf = a;
                this.yc = 0;
                this.Tb = b
            },
            Wi = function(a, b) {
                a.ja[a.pending++] = b & 255;
                a.ja[a.pending++] = b >>> 8 & 255
            },
            Xi = function(a, b, c) {
                a.xa > 16 - c ? (a.Ja |= b << a.xa & 65535,
                    Wi(a, a.Ja),
                    a.Ja = b >> 16 - a.xa,
                    a.xa += c - 16) : (a.Ja |= b << a.xa & 65535,
                    a.xa += c)
            },
            Yi = function(a, b, c) {
                Xi(a, c[2 * b], c[2 * b + 1])
            },
            Zi = function(a, b) {
                var c = 0;
                do
                    c |= a & 1,
                    a >>>= 1,
                    c <<= 1;
                while (0 < --b);
                return c >>> 1
            },
            $i = function(a, b, c) {
                var d = Array(16),
                    e = 0,
                    f;
                for (f = 1; 15 >= f; f++)
                    d[f] = e = e + c[f - 1] << 1;
                for (c = 0; c <= b; c++)
                    e = a[2 * c + 1],
                    0 !== e && (a[2 * c] = Zi(d[e]++, e))
            },
            aj = function(a) {
                var b;
                for (b = 0; 286 > b; b++)
                    a.Pa[2 * b] = 0;
                for (b = 0; 30 > b; b++)
                    a.ac[2 * b] = 0;
                for (b = 0; 19 > b; b++)
                    a.Ea[2 * b] = 0;
                a.Pa[512] = 1;
                a.Kb = a.Hc = 0;
                a.cb = a.matches = 0
            },
            bj = function(a) {
                8 < a.xa ? Wi(a, a.Ja) : 0 < a.xa && (a.ja[a.pending++] = a.Ja);
                a.Ja = 0;
                a.xa = 0
            },
            cj = function(a, b, c) {
                bj(a);
                Wi(a, c);
                Wi(a, ~c);
                M.oc(a.ja, a.window, b, c, a.pending);
                a.pending += c
            },
            dj = function(a, b, c, d) {
                var e = 2 * b,
                    f = 2 * c;
                return a[e] < a[f] || a[e] === a[f] && d[b] <= d[c]
            },
            ej = function(a, b, c) {
                for (var d = a.la[c], e = c << 1; e <= a.Gb;) {
                    e < a.Gb && dj(b, a.la[e + 1], a.la[e], a.depth) && e++;
                    if (dj(b, d, a.la[e], a.depth))
                        break;
                    a.la[c] = a.la[e];
                    c = e;
                    e <<= 1
                }
                a.la[c] = d
            },
            lj = function(a, b, c) {
                var d = 0;
                if (0 !== a.cb) {
                    do {
                        var e = a.ja[a.Rc + 2 * d] << 8 | a.ja[a.Rc + 2 * d + 1];
                        var f = a.ja[a.Ne + d];
                        d++;
                        if (0 === e)
                            Yi(a, f, b);
                        else {
                            var g = fj[f];
                            Yi(a, g + 256 + 1, b);
                            var h = gj[g];
                            0 !== h && (f -= hj[g],
                                Xi(a, f, h));
                            e--;
                            g = 256 > e ? ij[e] : ij[256 + (e >>> 7)];
                            Yi(a, g, c);
                            h = jj[g];
                            0 !== h && (e -= kj[g],
                                Xi(a, e, h))
                        }
                    } while (d < a.cb)
                }
                Yi(a, 256, b)
            },
            mj = function(a, b) {
                var c = b.Yf,
                    d = b.Tb.fh,
                    e = b.Tb.ug,
                    f = b.Tb.Uh,
                    g, h = -1;
                a.Gb = 0;
                a.sc = 573;
                for (g = 0; g < f; g++)
                    0 !== c[2 * g] ? (a.la[++a.Gb] = h = g,
                        a.depth[g] = 0) : c[2 * g + 1] = 0;
                for (; 2 > a.Gb;) {
                    var k = a.la[++a.Gb] = 2 > h ? ++h : 0;
                    c[2 * k] = 1;
                    a.depth[k] = 0;
                    a.Kb--;
                    e && (a.Hc -= d[2 * k + 1])
                }
                b.yc = h;
                for (g = a.Gb >> 1; 1 <= g; g--)
                    ej(a, c, g);
                k = f;
                do
                    g = a.la[1],
                    a.la[1] = a.la[a.Gb--],
                    ej(a, c, 1),
                    d = a.la[1],
                    a.la[--a.sc] = g,
                    a.la[--a.sc] = d,
                    c[2 * k] = c[2 * g] + c[2 * d],
                    a.depth[k] = (a.depth[g] >= a.depth[d] ? a.depth[g] : a.depth[d]) + 1,
                    c[2 * g + 1] = c[2 * d + 1] = k,
                    a.la[1] = k++,
                    ej(a, c, 1);
                while (2 <= a.Gb);
                a.la[--a.sc] = a.la[1];
                g = b.Yf;
                k = b.yc;
                d = b.Tb.fh;
                e = b.Tb.ug;
                f = b.Tb.di;
                var m = b.Tb.ci,
                    n = b.Tb.mj,
                    p, r = 0;
                for (p = 0; 15 >= p; p++)
                    a.Bb[p] = 0;
                g[2 * a.la[a.sc] + 1] = 0;
                for (b = a.sc + 1; 573 > b; b++) {
                    var t = a.la[b];
                    p = g[2 * g[2 * t + 1] + 1] + 1;
                    p > n && (p = n,
                        r++);
                    g[2 * t + 1] = p;
                    if (!(t > k)) {
                        a.Bb[p]++;
                        var y = 0;
                        t >= m && (y = f[t - m]);
                        var G = g[2 * t];
                        a.Kb += G * (p + y);
                        e && (a.Hc += G * (d[2 * t + 1] + y))
                    }
                }
                if (0 !== r) {
                    do {
                        for (p = n - 1; 0 === a.Bb[p];)
                            p--;
                        a.Bb[p]--;
                        a.Bb[p + 1] += 2;
                        a.Bb[n]--;
                        r -= 2
                    } while (0 < r);
                    for (p = n; 0 !== p; p--)
                        for (t = a.Bb[p]; 0 !== t;)
                            d = a.la[--b],
                            d > k || (g[2 * d + 1] !== p && (a.Kb += (p - g[2 * d + 1]) * g[2 * d],
                                    g[2 * d + 1] = p),
                                t--)
                }
                $i(c, h, a.Bb)
            },
            nj = function(a, b, c) {
                var d, e = -1,
                    f = b[1],
                    g = 0,
                    h = 7,
                    k = 4;
                0 === f && (h = 138,
                    k = 3);
                b[2 * (c + 1) + 1] = 65535;
                for (d = 0; d <= c; d++) {
                    var m = f;
                    f = b[2 * (d + 1) + 1];
                    ++g < h && m === f || (g < k ? a.Ea[2 * m] += g : 0 !== m ? (m !== e && a.Ea[2 * m]++,
                            a.Ea[32]++) : 10 >= g ? a.Ea[34]++ : a.Ea[36]++,
                        g = 0,
                        e = m,
                        0 === f ? (h = 138,
                            k = 3) : m === f ? (h = 6,
                            k = 3) : (h = 7,
                            k = 4))
                }
            },
            oj = function(a, b, c) {
                var d, e = -1,
                    f = b[1],
                    g = 0,
                    h = 7,
                    k = 4;
                0 === f && (h = 138,
                    k = 3);
                for (d = 0; d <= c; d++) {
                    var m = f;
                    f = b[2 * (d + 1) + 1];
                    if (!(++g < h && m === f)) {
                        if (g < k) {
                            do
                                Yi(a, m, a.Ea);
                            while (0 !== --g)
                        } else
                            0 !== m ? (m !== e && (Yi(a, m, a.Ea),
                                    g--),
                                Yi(a, 16, a.Ea),
                                Xi(a, g - 3, 2)) : 10 >= g ? (Yi(a, 17, a.Ea),
                                Xi(a, g - 3, 3)) : (Yi(a, 18, a.Ea),
                                Xi(a, g - 11, 7));
                        g = 0;
                        e = m;
                        0 === f ? (h = 138,
                            k = 3) : m === f ? (h = 6,
                            k = 3) : (h = 7,
                            k = 4)
                    }
                }
            },
            pj = function(a) {
                var b = 4093624447,
                    c;
                for (c = 0; 31 >= c; c++,
                    b >>>= 1)
                    if (b & 1 && 0 !== a.Pa[2 * c])
                        return 0;
                if (0 !== a.Pa[18] || 0 !== a.Pa[20] || 0 !== a.Pa[26])
                    return 1;
                for (c = 32; 256 > c; c++)
                    if (0 !== a.Pa[2 * c])
                        return 1;
                return 0
            },
            qj = function(a, b, c) {
                a.ja[a.Rc + 2 * a.cb] = b >>> 8 & 255;
                a.ja[a.Rc + 2 * a.cb + 1] = b & 255;
                a.ja[a.Ne + a.cb] = c & 255;
                a.cb++;
                0 === b ? a.Pa[2 * c]++ : (a.matches++,
                    b--,
                    a.Pa[2 * (fj[c] + 256 + 1)]++,
                    a.ac[2 * (256 > b ? ij[b] : ij[256 + (b >>> 7)])]++);
                return a.cb === a.Xc - 1
            },
            sj = function(a, b) {
                a.msg = rj[b];
                return b
            },
            tj = function(a) {
                for (var b = a.length; 0 <= --b;)
                    a[b] = 0
            },
            uj = function(a) {
                var b = a.state,
                    c = b.pending;
                c > a.aa && (c = a.aa);
                0 !== c && (M.oc(a.Yc, b.ja, b.Zc, c, a.Ac),
                    a.Ac += c,
                    b.Zc += c,
                    a.xf += c,
                    a.aa -= c,
                    b.pending -= c,
                    0 === b.pending && (b.Zc = 0))
            },
            yj = function(a, b) {
                var c = 0 <= a.Va ? a.Va : -1,
                    d = a.J - a.Va,
                    e = 0;
                if (0 < a.level) {
                    2 === a.X.ve && (a.X.ve = pj(a));
                    mj(a, a.Nd);
                    mj(a, a.td);
                    nj(a, a.Pa, a.Nd.yc);
                    nj(a, a.ac, a.td.yc);
                    mj(a, a.Sf);
                    for (e = 18; 3 <= e && 0 === a.Ea[2 * vj[e] + 1]; e--)
                    ;
                    a.Kb += 3 * (e + 1) + 14;
                    var f = a.Kb + 3 + 7 >>> 3;
                    var g = a.Hc + 3 + 7 >>> 3;
                    g <= f && (f = g)
                } else
                    f = g = d + 5;
                if (d + 4 <= f && -1 !== c)
                    Xi(a, b ? 1 : 0, 3),
                    cj(a, c, d);
                else if (4 === a.ub || g === f)
                    Xi(a, 2 + (b ? 1 : 0), 3),
                    lj(a, wj, xj);
                else {
                    Xi(a, 4 + (b ? 1 : 0), 3);
                    c = a.Nd.yc + 1;
                    d = a.td.yc + 1;
                    e += 1;
                    Xi(a, c - 257, 5);
                    Xi(a, d - 1, 5);
                    Xi(a, e - 4, 4);
                    for (f = 0; f < e; f++)
                        Xi(a, a.Ea[2 * vj[f] + 1], 3);
                    oj(a, a.Pa, c - 1);
                    oj(a, a.ac, d - 1);
                    lj(a, a.Pa, a.ac)
                }
                aj(a);
                b && bj(a);
                a.Va = a.J;
                uj(a.X)
            },
            N = function(a, b) {
                a.ja[a.pending++] = b
            },
            zj = function(a, b) {
                a.ja[a.pending++] = b >>> 8 & 255;
                a.ja[a.pending++] = b & 255
            },
            Aj = function(a, b) {
                var c = a.Ig,
                    d = a.J,
                    e = a.Wa,
                    f = a.Kg,
                    g = a.J > a.Ga - 262 ? a.J - (a.Ga - 262) : 0,
                    h = a.window,
                    k = a.Ub,
                    m = a.sb,
                    n = a.J + 258,
                    p = h[d + e - 1],
                    r = h[d + e];
                a.Wa >= a.ig && (c >>= 2);
                f > a.O && (f = a.O);
                do {
                    var t = b;
                    if (h[t + e] === r && h[t + e - 1] === p && h[t] === h[d] && h[++t] === h[d + 1]) {
                        d += 2;
                        for (t++; h[++d] === h[++t] && h[++d] === h[++t] && h[++d] === h[++t] && h[++d] === h[++t] && h[++d] === h[++t] && h[++d] === h[++t] && h[++d] === h[++t] && h[++d] === h[++t] && d < n;)
                        ;
                        t = 258 - (n - d);
                        d = n - 258;
                        if (t > e) {
                            a.xc = b;
                            e = t;
                            if (t >= f)
                                break;
                            p = h[d + e - 1];
                            r = h[d + e]
                        }
                    }
                } while ((b = m[b & k]) > g && 0 !== --c);
                return e <= a.O ? e : a.O
            },
            Dj = function(a) {
                var b = a.Ga,
                    c;
                do {
                    var d = a.jh - a.O - a.J;
                    if (a.J >= b + (b - 262)) {
                        M.oc(a.window, a.window, b, b, 0);
                        a.xc -= b;
                        a.J -= b;
                        a.Va -= b;
                        var e = c = a.Id;
                        do {
                            var f = a.head[--e];
                            a.head[e] = f >= b ? f - b : 0
                        } while (--c);
                        e = c = b;
                        do
                            f = a.sb[--e],
                            a.sb[e] = f >= b ? f - b : 0;
                        while (--c);
                        d += b
                    }
                    if (0 === a.X.Ia)
                        break;
                    e = a.X;
                    c = a.window;
                    f = a.J + a.O;
                    var g = e.Ia;
                    g > d && (g = d);
                    0 === g ? c = 0 : (e.Ia -= g,
                        M.oc(c, e.input, e.kc, g, f),
                        1 === e.state.va ? e.W = Bj(e.W, c, g, f) : 2 === e.state.va && (e.W = Cj(e.W, c, g, f)),
                        e.kc += g,
                        e.lc += g,
                        c = g);
                    a.O += c;
                    if (3 <= a.O + a.Ra)
                        for (d = a.J - a.Ra,
                            a.Z = a.window[d],
                            a.Z = (a.Z << a.Fb ^ a.window[d + 1]) & a.Eb; a.Ra && !(a.Z = (a.Z << a.Fb ^ a.window[d + 3 - 1]) & a.Eb,
                                a.sb[d & a.Ub] = a.head[a.Z],
                                a.head[a.Z] = d,
                                d++,
                                a.Ra--,
                                3 > a.O + a.Ra);)
                    ;
                } while (262 > a.O && 0 !== a.X.Ia)
            },
            Ej = function(a, b) {
                for (var c;;) {
                    if (262 > a.O) {
                        Dj(a);
                        if (262 > a.O && 0 === b)
                            return 1;
                        if (0 === a.O)
                            break
                    }
                    c = 0;
                    3 <= a.O && (a.Z = (a.Z << a.Fb ^ a.window[a.J + 3 - 1]) & a.Eb,
                        c = a.sb[a.J & a.Ub] = a.head[a.Z],
                        a.head[a.Z] = a.J);
                    0 !== c && a.J - c <= a.Ga - 262 && (a.ca = Aj(a, c));
                    if (3 <= a.ca)
                        if (c = qj(a, a.J - a.xc, a.ca - 3),
                            a.O -= a.ca,
                            a.ca <= a.Ue && 3 <= a.O) {
                            a.ca--;
                            do
                                a.J++,
                                a.Z = (a.Z << a.Fb ^ a.window[a.J + 3 - 1]) & a.Eb,
                                a.sb[a.J & a.Ub] = a.head[a.Z],
                                a.head[a.Z] = a.J;
                            while (0 !== --a.ca);
                            a.J++
                        } else
                            a.J += a.ca,
                            a.ca = 0,
                            a.Z = a.window[a.J],
                            a.Z = (a.Z << a.Fb ^ a.window[a.J + 1]) & a.Eb;
                    else
                        c = qj(a, 0, a.window[a.J]),
                        a.O--,
                        a.J++;
                    if (c && (yj(a, !1),
                            0 === a.X.aa))
                        return 1
                }
                a.Ra = 2 > a.J ? a.J : 2;
                return 4 === b ? (yj(a, !0),
                    0 === a.X.aa ? 3 : 4) : a.cb && (yj(a, !1),
                    0 === a.X.aa) ? 1 : 2
            },
            Fj = function(a, b) {
                for (var c, d;;) {
                    if (262 > a.O) {
                        Dj(a);
                        if (262 > a.O && 0 === b)
                            return 1;
                        if (0 === a.O)
                            break
                    }
                    c = 0;
                    3 <= a.O && (a.Z = (a.Z << a.Fb ^ a.window[a.J + 3 - 1]) & a.Eb,
                        c = a.sb[a.J & a.Ub] = a.head[a.Z],
                        a.head[a.Z] = a.J);
                    a.Wa = a.ca;
                    a.Rg = a.xc;
                    a.ca = 2;
                    0 !== c && a.Wa < a.Ue && a.J - c <= a.Ga - 262 && (a.ca = Aj(a, c),
                        5 >= a.ca && (1 === a.ub || 3 === a.ca && 4096 < a.J - a.xc) && (a.ca = 2));
                    if (3 <= a.Wa && a.ca <= a.Wa) {
                        d = a.J + a.O - 3;
                        c = qj(a, a.J - 1 - a.Rg, a.Wa - 3);
                        a.O -= a.Wa - 1;
                        a.Wa -= 2;
                        do
                            ++a.J <= d && (a.Z = (a.Z << a.Fb ^ a.window[a.J + 3 - 1]) & a.Eb,
                                a.sb[a.J & a.Ub] = a.head[a.Z],
                                a.head[a.Z] = a.J);
                        while (0 !== --a.Wa);
                        a.jc = 0;
                        a.ca = 2;
                        a.J++;
                        if (c && (yj(a, !1),
                                0 === a.X.aa))
                            return 1
                    } else if (a.jc) {
                        if ((c = qj(a, 0, a.window[a.J - 1])) && yj(a, !1),
                            a.J++,
                            a.O--,
                            0 === a.X.aa)
                            return 1
                    } else
                        a.jc = 1,
                        a.J++,
                        a.O--
                }
                a.jc && (qj(a, 0, a.window[a.J - 1]),
                    a.jc = 0);
                a.Ra = 2 > a.J ? a.J : 2;
                return 4 === b ? (yj(a, !0),
                    0 === a.X.aa ? 3 : 4) : a.cb && (yj(a, !1),
                    0 === a.X.aa) ? 1 : 2
            },
            Gj = function(a, b) {
                for (var c, d, e, f = a.window;;) {
                    if (258 >= a.O) {
                        Dj(a);
                        if (258 >= a.O && 0 === b)
                            return 1;
                        if (0 === a.O)
                            break
                    }
                    a.ca = 0;
                    if (3 <= a.O && 0 < a.J && (d = a.J - 1,
                            c = f[d],
                            c === f[++d] && c === f[++d] && c === f[++d])) {
                        for (e = a.J + 258; c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && d < e;)
                        ;
                        a.ca = 258 - (e - d);
                        a.ca > a.O && (a.ca = a.O)
                    }
                    3 <= a.ca ? (c = qj(a, 1, a.ca - 3),
                        a.O -= a.ca,
                        a.J += a.ca,
                        a.ca = 0) : (c = qj(a, 0, a.window[a.J]),
                        a.O--,
                        a.J++);
                    if (c && (yj(a, !1),
                            0 === a.X.aa))
                        return 1
                }
                a.Ra = 0;
                return 4 === b ? (yj(a, !0),
                    0 === a.X.aa ? 3 : 4) : a.cb && (yj(a, !1),
                    0 === a.X.aa) ? 1 : 2
            },
            Hj = function(a, b) {
                for (var c;;) {
                    if (0 === a.O && (Dj(a),
                            0 === a.O)) {
                        if (0 === b)
                            return 1;
                        break
                    }
                    a.ca = 0;
                    c = qj(a, 0, a.window[a.J]);
                    a.O--;
                    a.J++;
                    if (c && (yj(a, !1),
                            0 === a.X.aa))
                        return 1
                }
                a.Ra = 0;
                return 4 === b ? (yj(a, !0),
                    0 === a.X.aa ? 3 : 4) : a.cb && (yj(a, !1),
                    0 === a.X.aa) ? 1 : 2
            },
            Ij = function(a, b, c, d, e) {
                this.pi = a;
                this.lj = b;
                this.qj = c;
                this.kj = d;
                this.fi = e
            },
            Jj = function() {
                this.X = null;
                this.status = 0;
                this.ja = null;
                this.va = this.pending = this.Zc = this.fb = 0;
                this.V = null;
                this.jb = 0;
                this.method = 8;
                this.wc = -1;
                this.Ub = this.zf = this.Ga = 0;
                this.window = null;
                this.jh = 0;
                this.head = this.sb = null;
                this.Kg = this.ig = this.ub = this.level = this.Ue = this.Ig = this.Wa = this.O = this.xc = this.J = this.jc = this.Rg = this.ca = this.Va = this.Fb = this.Eb = this.Ie = this.Id = this.Z = 0;
                this.Pa = new M.wb(1146);
                this.ac = new M.wb(122);
                this.Ea = new M.wb(78);
                tj(this.Pa);
                tj(this.ac);
                tj(this.Ea);
                this.Sf = this.td = this.Nd = null;
                this.Bb = new M.wb(16);
                this.la = new M.wb(573);
                tj(this.la);
                this.sc = this.Gb = 0;
                this.depth = new M.wb(573);
                tj(this.depth);
                this.xa = this.Ja = this.Ra = this.matches = this.Hc = this.Kb = this.Rc = this.cb = this.Xc = this.Ne = 0
            },
            Lj = function(a, b) {
                if (!a || !a.state || 5 < b || 0 > b)
                    return a ? sj(a, -2) : -2;
                var c = a.state;
                if (!a.Yc || !a.input && 0 !== a.Ia || 666 === c.status && 4 !== b)
                    return sj(a, 0 === a.aa ? -5 : -2);
                c.X = a;
                var d = c.wc;
                c.wc = b;
                if (42 === c.status)
                    if (2 === c.va)
                        a.W = 0,
                        N(c, 31),
                        N(c, 139),
                        N(c, 8),
                        c.V ? (N(c, (c.V.text ? 1 : 0) + (c.V.Qb ? 2 : 0) + (c.V.Nb ? 4 : 0) + (c.V.name ? 8 : 0) + (c.V.te ? 16 : 0)),
                            N(c, c.V.time & 255),
                            N(c, c.V.time >> 8 & 255),
                            N(c, c.V.time >> 16 & 255),
                            N(c, c.V.time >> 24 & 255),
                            N(c, 9 === c.level ? 2 : 2 <= c.ub || 2 > c.level ? 4 : 0),
                            N(c, c.V.cm & 255),
                            c.V.Nb && c.V.Nb.length && (N(c, c.V.Nb.length & 255),
                                N(c, c.V.Nb.length >> 8 & 255)),
                            c.V.Qb && (a.W = Cj(a.W, c.ja, c.pending, 0)),
                            c.jb = 0,
                            c.status = 69) : (N(c, 0),
                            N(c, 0),
                            N(c, 0),
                            N(c, 0),
                            N(c, 0),
                            N(c, 9 === c.level ? 2 : 2 <= c.ub || 2 > c.level ? 4 : 0),
                            N(c, 3),
                            c.status = 113);
                    else {
                        var e = 8 + (c.zf - 8 << 4) << 8;
                        e |= (2 <= c.ub || 2 > c.level ? 0 : 6 > c.level ? 1 : 6 === c.level ? 2 : 3) << 6;
                        0 !== c.J && (e |= 32);
                        c.status = 113;
                        zj(c, e + (31 - e % 31));
                        0 !== c.J && (zj(c, a.W >>> 16),
                            zj(c, a.W & 65535));
                        a.W = 1
                    }
                if (69 === c.status)
                    if (c.V.Nb) {
                        for (e = c.pending; c.jb < (c.V.Nb.length & 65535) && (c.pending !== c.fb || (c.V.Qb && c.pending > e && (a.W = Cj(a.W, c.ja, c.pending - e, e)),
                                uj(a),
                                e = c.pending,
                                c.pending !== c.fb));)
                            N(c, c.V.Nb[c.jb] & 255),
                            c.jb++;
                        c.V.Qb && c.pending > e && (a.W = Cj(a.W, c.ja, c.pending - e, e));
                        c.jb === c.V.Nb.length && (c.jb = 0,
                            c.status = 73)
                    } else
                        c.status = 73;
                if (73 === c.status)
                    if (c.V.name) {
                        e = c.pending;
                        do {
                            if (c.pending === c.fb && (c.V.Qb && c.pending > e && (a.W = Cj(a.W, c.ja, c.pending - e, e)),
                                    uj(a),
                                    e = c.pending,
                                    c.pending === c.fb)) {
                                var f = 1;
                                break
                            }
                            f = c.jb < c.V.name.length ? c.V.name.charCodeAt(c.jb++) & 255 : 0;
                            N(c, f)
                        } while (0 !== f);
                        c.V.Qb && c.pending > e && (a.W = Cj(a.W, c.ja, c.pending - e, e));
                        0 === f && (c.jb = 0,
                            c.status = 91)
                    } else
                        c.status = 91;
                if (91 === c.status)
                    if (c.V.te) {
                        e = c.pending;
                        do {
                            if (c.pending === c.fb && (c.V.Qb && c.pending > e && (a.W = Cj(a.W, c.ja, c.pending - e, e)),
                                    uj(a),
                                    e = c.pending,
                                    c.pending === c.fb)) {
                                f = 1;
                                break
                            }
                            f = c.jb < c.V.te.length ? c.V.te.charCodeAt(c.jb++) & 255 : 0;
                            N(c, f)
                        } while (0 !== f);
                        c.V.Qb && c.pending > e && (a.W = Cj(a.W, c.ja, c.pending - e, e));
                        0 === f && (c.status = 103)
                    } else
                        c.status = 103;
                103 === c.status && (c.V.Qb ? (c.pending + 2 > c.fb && uj(a),
                    c.pending + 2 <= c.fb && (N(c, a.W & 255),
                        N(c, a.W >> 8 & 255),
                        a.W = 0,
                        c.status = 113)) : c.status = 113);
                if (0 !== c.pending) {
                    if (uj(a),
                        0 === a.aa)
                        return c.wc = -1,
                            0
                } else if (0 === a.Ia && (b << 1) - (4 < b ? 9 : 0) <= (d << 1) - (4 < d ? 9 : 0) && 4 !== b)
                    return sj(a, -5);
                if (666 === c.status && 0 !== a.Ia)
                    return sj(a, -5);
                if (0 !== a.Ia || 0 !== c.O || 0 !== b && 666 !== c.status) {
                    d = 2 === c.ub ? Hj(c, b) : 3 === c.ub ? Gj(c, b) : Kj[c.level].fi(c, b);
                    if (3 === d || 4 === d)
                        c.status = 666;
                    if (1 === d || 3 === d)
                        return 0 === a.aa && (c.wc = -1),
                            0;
                    if (2 === d && (1 === b ? (Xi(c, 2, 3),
                                Yi(c, 256, wj),
                                16 === c.xa ? (Wi(c, c.Ja),
                                    c.Ja = 0,
                                    c.xa = 0) : 8 <= c.xa && (c.ja[c.pending++] = c.Ja & 255,
                                    c.Ja >>= 8,
                                    c.xa -= 8)) : 5 !== b && (Xi(c, 0, 3),
                                cj(c, 0, 0),
                                3 === b && (tj(c.head),
                                    0 === c.O && (c.J = 0,
                                        c.Va = 0,
                                        c.Ra = 0))),
                            uj(a),
                            0 === a.aa))
                        return c.wc = -1,
                            0
                }
                if (4 !== b)
                    return 0;
                if (0 >= c.va)
                    return 1;
                2 === c.va ? (N(c, a.W & 255),
                    N(c, a.W >> 8 & 255),
                    N(c, a.W >> 16 & 255),
                    N(c, a.W >> 24 & 255),
                    N(c, a.lc & 255),
                    N(c, a.lc >> 8 & 255),
                    N(c, a.lc >> 16 & 255),
                    N(c, a.lc >> 24 & 255)) : (zj(c, a.W >>> 16),
                    zj(c, a.W & 65535));
                uj(a);
                0 < c.va && (c.va = -c.va);
                return 0 !== c.pending ? 0 : 1
            },
            Mj = function(a) {
                if (!(this instanceof Mj))
                    return new Mj(a);
                a = this.options = M.assign({
                    level: -1,
                    method: 8,
                    Ph: 16384,
                    Vb: 15,
                    nj: 8,
                    ub: 0,
                    hh: ""
                }, a || {});
                a.raw && 0 < a.Vb ? a.Vb = -a.Vb : a.ri && 0 < a.Vb && 16 > a.Vb && (a.Vb += 16);
                this.ye = 0;
                this.msg = "";
                this.ended = !1;
                this.Pc = [];
                this.X = new Nj;
                this.X.aa = 0;
                var b = this.X;
                var c = a.level,
                    d = a.method,
                    e = a.Vb,
                    f = a.nj,
                    g = a.ub;
                if (b) {
                    var h = 1; -
                    1 === c && (c = 6);
                    0 > e ? (h = 0,
                        e = -e) : 15 < e && (h = 2,
                        e -= 16);
                    if (1 > f || 9 < f || 8 !== d || 8 > e || 15 < e || 0 > c || 9 < c || 0 > g || 4 < g)
                        b = sj(b, -2);
                    else {
                        8 === e && (e = 9);
                        var k = new Jj;
                        b.state = k;
                        k.X = b;
                        k.va = h;
                        k.V = null;
                        k.zf = e;
                        k.Ga = 1 << k.zf;
                        k.Ub = k.Ga - 1;
                        k.Ie = f + 7;
                        k.Id = 1 << k.Ie;
                        k.Eb = k.Id - 1;
                        k.Fb = ~~((k.Ie + 3 - 1) / 3);
                        k.window = new M.mc(2 * k.Ga);
                        k.head = new M.wb(k.Id);
                        k.sb = new M.wb(k.Ga);
                        k.Xc = 1 << f + 6;
                        k.fb = 4 * k.Xc;
                        k.ja = new M.mc(k.fb);
                        k.Rc = k.Xc;
                        k.Ne = 3 * k.Xc;
                        k.level = c;
                        k.ub = g;
                        k.method = d;
                        if (b && b.state) {
                            b.lc = b.xf = 0;
                            b.ve = 2;
                            c = b.state;
                            c.pending = 0;
                            c.Zc = 0;
                            0 > c.va && (c.va = -c.va);
                            c.status = c.va ? 42 : 113;
                            b.W = 2 === c.va ? 0 : 1;
                            c.wc = 0;
                            if (!Oj) {
                                d = Array(16);
                                for (f = g = 0; 28 > f; f++)
                                    for (hj[f] = g,
                                        e = 0; e < 1 << gj[f]; e++)
                                        fj[g++] = f;
                                fj[g - 1] = f;
                                for (f = g = 0; 16 > f; f++)
                                    for (kj[f] = g,
                                        e = 0; e < 1 << jj[f]; e++)
                                        ij[g++] = f;
                                for (g >>= 7; 30 > f; f++)
                                    for (kj[f] = g << 7,
                                        e = 0; e < 1 << jj[f] - 7; e++)
                                        ij[256 + g++] = f;
                                for (e = 0; 15 >= e; e++)
                                    d[e] = 0;
                                for (e = 0; 143 >= e;)
                                    wj[2 * e + 1] = 8,
                                    e++,
                                    d[8]++;
                                for (; 255 >= e;)
                                    wj[2 * e + 1] = 9,
                                    e++,
                                    d[9]++;
                                for (; 279 >= e;)
                                    wj[2 * e + 1] = 7,
                                    e++,
                                    d[7]++;
                                for (; 287 >= e;)
                                    wj[2 * e + 1] = 8,
                                    e++,
                                    d[8]++;
                                $i(wj, 287, d);
                                for (e = 0; 30 > e; e++)
                                    xj[2 * e + 1] = 5,
                                    xj[2 * e] = Zi(e, 5);
                                Pj = new Ui(wj, gj, 257, 286, 15);
                                Qj = new Ui(xj, jj, 0, 30, 15);
                                Rj = new Ui([], Sj, 0, 19, 7);
                                Oj = !0
                            }
                            c.Nd = new Vi(c.Pa, Pj);
                            c.td = new Vi(c.ac, Qj);
                            c.Sf = new Vi(c.Ea, Rj);
                            c.Ja = 0;
                            c.xa = 0;
                            aj(c);
                            c = 0
                        } else
                            c = sj(b, -2);
                        0 === c && (b = b.state,
                            b.jh = 2 * b.Ga,
                            tj(b.head),
                            b.Ue = Kj[b.level].lj,
                            b.ig = Kj[b.level].pi,
                            b.Kg = Kj[b.level].qj,
                            b.Ig = Kj[b.level].kj,
                            b.J = 0,
                            b.Va = 0,
                            b.O = 0,
                            b.Ra = 0,
                            b.ca = b.Wa = 2,
                            b.jc = 0,
                            b.Z = 0);
                        b = c
                    }
                } else
                    b = -2;
                if (0 !== b)
                    throw Error(rj[b]);
                a.Oi && (b = this.X) && b.state && 2 === b.state.va && (b.state.V = a.Oi);
                if (a.Tc) {
                    var m;
                    "string" === typeof a.Tc ? m = Tj(a.Tc) : "[object ArrayBuffer]" === Uj.call(a.Tc) ? m = new Uint8Array(a.Tc) : m = a.Tc;
                    a = this.X;
                    f = m;
                    g = f.length;
                    if (a && a.state)
                        if (m = a.state,
                            b = m.va,
                            2 === b || 1 === b && 42 !== m.status || m.O)
                            b = -2;
                        else {
                            1 === b && (a.W = Bj(a.W, f, g, 0));
                            m.va = 0;
                            g >= m.Ga && (0 === b && (tj(m.head),
                                    m.J = 0,
                                    m.Va = 0,
                                    m.Ra = 0),
                                c = new M.mc(m.Ga),
                                M.oc(c, f, g - m.Ga, m.Ga, 0),
                                f = c,
                                g = m.Ga);
                            c = a.Ia;
                            d = a.kc;
                            e = a.input;
                            a.Ia = g;
                            a.kc = 0;
                            a.input = f;
                            for (Dj(m); 3 <= m.O;) {
                                f = m.J;
                                g = m.O - 2;
                                do
                                    m.Z = (m.Z << m.Fb ^ m.window[f + 3 - 1]) & m.Eb,
                                    m.sb[f & m.Ub] = m.head[m.Z],
                                    m.head[m.Z] = f,
                                    f++;
                                while (--g);
                                m.J = f;
                                m.O = 2;
                                Dj(m)
                            }
                            m.J += m.O;
                            m.Va = m.J;
                            m.Ra = m.O;
                            m.O = 0;
                            m.ca = m.Wa = 2;
                            m.jc = 0;
                            a.kc = d;
                            a.input = e;
                            a.Ia = c;
                            m.va = b;
                            b = 0
                        }
                    else
                        b = -2;
                    if (0 !== b)
                        throw Error(rj[b]);
                    this.el = !0
                }
            },
            Vj = function(a) {
                var b = {};
                b = b || {};
                b.ri = !0;
                b = new Mj(b);
                b.push(a, !0);
                if (b.ye)
                    throw b.msg || rj[b.ye];
                return b.result
            },
            Yj = function(a, b, c) {
                var d = Array.prototype.slice.call(arguments);
                d.splice(0, 2);
                d = "l" + a.toString(16) + "i" + b.toString(16) + (d.length ? "-" + d.join("_") : "");
                Wj ? Wj.push(d) : Xj(d)
            },
            bk = function() {
                var a = Zj || (Zj = ak('[null,null,null,null,null,"(function(){/*\\n\\n Copyright The Closure Library Authors.\\n SPDX-License-Identifier: Apache-2.0\\n*/\\n\'use strict\';var e\\u003dthis||self;function f(a){return a};var h;function k(a){this.g\\u003da}k.prototype.toString\\u003dfunction(){return this.g+\\"\\"};var l\\u003d{};function m(a){if(void 0\\u003d\\u003d\\u003dh){var c\\u003dnull;var b\\u003de.trustedTypes;if(b\\u0026\\u0026b.createPolicy){try{c\\u003db.createPolicy(\\"goog#html\\",{createHTML:f,createScript:f,createScriptURL:f})}catch(d){e.console\\u0026\\u0026e.console.error(d.message)}h\\u003dc}else h\\u003dc}a\\u003d(c\\u003dh)?c.createScriptURL(a):a;return new k(a,l)};/*\\n\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nif(!function(){if(self.origin)return\\"null\\"\\u003d\\u003d\\u003dself.origin;if(\\"\\"!\\u003d\\u003dlocation.host)return!1;try{return window.parent.escape(\\"\\"),!1}catch(a){return!0}}())throw Error(\\"sandboxing error\\");\\nwindow.addEventListener(\\"message\\",function(a){var c\\u003da.ports[0];a\\u003da.data;var b\\u003da.callbackName.split(\\".\\"),d\\u003dwindow;\\"window\\"\\u003d\\u003d\\u003db[0]\\u0026\\u0026b.shift();for(var g\\u003d0;g\\u003cb.length-1;g++)d[b[g]]\\u003d{},d\\u003dd[b[g]];d[b[b.length-1]]\\u003dfunction(n){c.postMessage(JSON.stringify(n))};b\\u003ddocument.createElement(\\"script\\");a\\u003dm(a.url);b.src\\u003da instanceof k\\u0026\\u0026a.constructor\\u003d\\u003d\\u003dk?a.g:\\"type_error:TrustedResourceUrl\\";document.body.appendChild(b)},!0);}).call(this);\\n"]'));
                if (!a)
                    return null;
                a = _.qh(a, 6);
                var b;
                null === a || void 0 === a ? b = null : b = _.Ob(a);
                return b
            },
            ck = function(a) {
                var b = {};
                a = _.v(a);
                for (var c = a.next(); !c.done; c = a.next())
                    c = c.value,
                    b[c.language] = c.name;
                return b
            },
            dk = function(a) {
                O.call(this);
                a = a || {};
                this.id = a.id || this.ib();
                this.Qe = a.Qe || "";
                this.Od = a.Od || null;
                this.Pd = a.Pd || null;
                this.re = a.re || !1;
                this.className = a.className || null;
                this.l = null
            },
            ek = function(a, b) {
                b = _.Cb(_.ca, b);
                a.Ba ? b() : (a.ga || (a.ga = []),
                    a.ga.push(b))
            },
            Q = function(a, b) {
                this.x = void 0 !== a ? a : 0;
                this.y = void 0 !== b ? b : 0
            };
        Q.prototype.ceil = function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        };
        Q.prototype.floor = function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        };
        Q.prototype.round = function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        };
        Q.prototype.translate = function(a, b) {
            a instanceof Q ? (this.x += a.x,
                this.y += a.y) : (this.x += Number(a),
                "number" === typeof b && (this.y += b));
            return this
        };
        var fk = function(a) {
                return new Q(a.x, a.y)
            },
            gk = function(a, b, c, d) {
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
                        "function" == typeof b.split && _.ta(b.split(/\s+/), c) && (d[e++] = g);
                    d.length = e;
                    return d
                }
                return a
            },
            hk = function(a, b) {
                var c = b || document;
                if (c.getElementsByClassName)
                    a = c.getElementsByClassName(a)[0];
                else {
                    c = document;
                    var d = b || c;
                    a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : gk(c, "*", a, b)[0] || null
                }
                return a || null
            },
            ik = function(a) {
                return a.scrollingElement ? a.scrollingElement : !_.lc && _.id(a) ? a.documentElement : a.body || a.documentElement
            },
            jk = function(a) {
                var b = ik(a);
                a = a.parentWindow || a.defaultView;
                return _.C && a.pageYOffset != b.scrollTop ? new Q(b.scrollLeft, b.scrollTop) : new Q(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
            },
            kk = function(a) {
                if (a.Za && "function" == typeof a.Za)
                    return a.Za();
                if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set)
                    return Array.from(a.values());
                if ("string" === typeof a)
                    return a.split("");
                if (_.da(a)) {
                    for (var b = [], c = a.length, d = 0; d < c; d++)
                        b.push(a[d]);
                    return b
                }
                return _.Qa(a)
            },
            lk = function(a, b, c) {
                c = a.g.get(c);
                return (null == c ? 0 : c.has(b)) ? c.get(b) : a.l.has(b) ? {
                    za: 1
                } : (c = a.o.get(b)) ? c : a.h && [].concat(_.gb(a.h)).some(function(d) {
                    return 0 === b.indexOf(d)
                }) ? {
                    za: 1
                } : {
                    za: 0
                }
            },
            mk = ["data:", "http:", "https:", "mailto:", "ftp:"],
            nk = function(a) {
                0 === a.g.length && a.g.push("")
            },
            ok = function(a, b) {
                if (3 === b.nodeType)
                    return 1;
                if (!oi(b))
                    return 2;
                b = ni(b);
                if (null === b)
                    return nk(a),
                        2;
                var c = a.h;
                if ("FORM" !== b && (c.j.has(b) || c.g.has(b)))
                    return 1;
                nk(a);
                return 2
            },
            pk = function(a, b) {
                var c = ni(b),
                    d = document.createElement(c);
                b = b.attributes;
                for (var e = _.v(b), f = e.next(); !f.done; f = e.next()) {
                    var g = f.value;
                    f = g.name;
                    g = g.value;
                    var h = lk(a.h, f, c),
                        k;
                    a: {
                        if (k = h.conditions) {
                            k = _.v(k);
                            for (var m = k.next(); !m.done; m = k.next()) {
                                var n = _.v(m.value);
                                m = n.next().value;
                                n = n.next().value;
                                var p = void 0;
                                if ((m = null == (p = b.getNamedItem(m)) ? void 0 : p.value) && !n.has(m)) {
                                    k = !1;
                                    break a
                                }
                            }
                        }
                        k = !0
                    }
                    if (k)
                        switch (h.za) {
                            case 1:
                                qi(d, f, g);
                                break;
                            case 2:
                                h = pi(g);
                                h = void 0 !== h && -1 !== mk.indexOf(h.toLowerCase()) ? g : "about:invalid#zClosurez";
                                h !== g && nk(a);
                                qi(d, f, h);
                                break;
                            case 3:
                                qi(d, f, g.toLowerCase());
                                break;
                            case 4:
                                qi(d, f, g);
                                break;
                            case 0:
                                nk(a)
                        }
                    else
                        nk(a)
                }
                return d
            },
            qk = function(a) {
                var b = _.Lf;
                a = mi(a);
                a = document.createTreeWalker(a, 5, function(g) {
                    return ok(b, g)
                }, !1);
                for (var c = a.nextNode(), d = document.createDocumentFragment(), e = d; null !== c;) {
                    var f = void 0;
                    if (3 === c.nodeType)
                        f = document.createTextNode(c.data);
                    else if (oi(c))
                        f = pk(b, c);
                    else
                        throw Error("B");
                    e.appendChild(f);
                    if (c = a.firstChild())
                        e = f;
                    else
                        for (; !(c = a.nextSibling()) && (c = a.parentNode());)
                            e = e.parentNode
                }
                return d
            },
            rk = function(a) {
                var b = document.createElement("span");
                b.appendChild(qk(a));
                a = (new XMLSerializer).serializeToString(b);
                a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
                return _.Uc(a)
            },
            sk = function(a) {
                _.Vh = !0;
                try {
                    return JSON.stringify(a.toJSON(), ri)
                } finally {
                    _.Vh = !1
                }
            },
            uk = function(a, b) {
                b = tk(b || {}, a.j ? a.j.g() : {});
                a.h(null, b.Cb);
                return b.l()
            },
            vk = function(a) {
                a.fc = void 0;
                a.Pb = function() {
                    return a.fc ? a.fc : a.fc = new a
                }
            },
            wk = {};
        _.z(si, _.aa);
        si.prototype.name = "AssertionError";
        var xk = /&/g,
            yk = /</g,
            zk = />/g,
            Ak = /"/g,
            Bk = /'/g,
            Ck = /\x00/g,
            Dk = /[\x00&<>"']/,
            Ek = function(a) {
                if (!Dk.test(a))
                    return a; -
                1 != a.indexOf("&") && (a = a.replace(xk, "&amp;")); -
                1 != a.indexOf("<") && (a = a.replace(yk, "&lt;")); -
                1 != a.indexOf(">") && (a = a.replace(zk, "&gt;")); -
                1 != a.indexOf('"') && (a = a.replace(Ak, "&quot;")); -
                1 != a.indexOf("'") && (a = a.replace(Bk, "&#39;")); -
                1 != a.indexOf("\x00") && (a = a.replace(Ck, "&#0;"));
                return a
            },
            Fk = function(a, b) {
                return a < b ? -1 : a > b ? 1 : 0
            },
            wi = function(a, b) {
                var c = 0;
                a = (0,
                    _.dc)(String(a)).split(".");
                b = (0,
                    _.dc)(String(b)).split(".");
                for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                    var f = a[e] || "",
                        g = b[e] || "";
                    do {
                        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        if (0 == f[0].length && 0 == g[0].length)
                            break;
                        c = Fk(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Fk(0 == f[2].length, 0 == g[2].length) || Fk(f[2], g[2]);
                        f = f[3];
                        g = g[3]
                    } while (0 == c)
                }
                return c
            },
            Hk = function(a) {
                var b = Gk;
                return Object.prototype.hasOwnProperty.call(b, "7.0") ? b["7.0"] : b["7.0"] = a("7.0")
            },
            Gk = {},
            Ik = function() {
                return Hk(function() {
                    return 0 <= wi(_.zc, "7.0")
                })
            },
            Jk = {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            },
            Kk = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
            Lk = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
            Di = function(a) {
                if (a instanceof _.Fc)
                    return a;
                a = "object" == typeof a && a.kb ? a.Qa() : String(a);
                Lk.test(a) ? a = _.Jc(a) : (a = String(a).replace(/(%0A|%0D)/g, ""),
                    a = a.match(Kk) ? _.Jc(a) : null);
                return a
            },
            Mk = function(a) {
                return a instanceof _.Mc && a.constructor === _.Mc ? a.g : "type_error:SafeStyle"
            },
            Fi = /\/\*/,
            Nk = function(a) {
                return a instanceof _.hi && a.constructor === _.hi ? a.g : "type_error:SafeStyleSheet"
            },
            Ji = function(a) {
                return a instanceof _.Sc ? a : _.Uc(Ek("object" == typeof a && a.kb ? a.Qa() : String(a)))
            },
            Ok = /^[a-zA-Z0-9-]+$/,
            Pk = {
                APPLET: !0,
                BASE: !0,
                EMBED: !0,
                IFRAME: !0,
                LINK: !0,
                MATH: !0,
                META: !0,
                OBJECT: !0,
                SCRIPT: !0,
                STYLE: !0,
                SVG: !0,
                TEMPLATE: !0
            },
            Qk = function(a) {
                if (!Ok.test(a))
                    throw Error("B");
                if (a.toUpperCase() in Pk)
                    throw Error("B");
            },
            Rk = function(a) {
                var b = Ji(_.Wc),
                    c = [],
                    d = function(e) {
                        Array.isArray(e) ? e.forEach(d) : (e = Ji(e),
                            c.push(_.Tc(e).toString()))
                    };
                a.forEach(d);
                return _.Uc(c.join(_.Tc(b).toString()))
            },
            Sk = function(a) {
                return Rk(Array.prototype.slice.call(arguments))
            },
            Tk = {
                action: !0,
                cite: !0,
                data: !0,
                formaction: !0,
                href: !0,
                manifest: !0,
                poster: !0,
                src: !0
            },
            Uk = function(a) {
                var b = "";
                if (a)
                    for (var c in a)
                        if (Object.prototype.hasOwnProperty.call(a, c)) {
                            if (!Ok.test(c))
                                throw Error("B");
                            var d = a[c];
                            if (null != d) {
                                var e = c;
                                if (d instanceof _.Kh)
                                    d = _.Mh(d);
                                else if ("style" == e.toLowerCase()) {
                                    var f = d;
                                    if (!_.ya(f))
                                        throw Error("B");
                                    if (!(f instanceof _.Mc)) {
                                        d = void 0;
                                        var g = "";
                                        for (d in f)
                                            if (Object.prototype.hasOwnProperty.call(f, d)) {
                                                if (!/^[-_a-zA-Z0-9]+$/.test(d))
                                                    throw Error("A`" + d);
                                                var h = f[d];
                                                null != h && (h = Array.isArray(h) ? h.map(Gi).join(" ") : Gi(h),
                                                    g += d + ":" + h + ";")
                                            }
                                        f = g ? new _.Mc(g, _.Lc) : _.Nc
                                    }
                                    d = Mk(f)
                                } else {
                                    if (/^on/i.test(e))
                                        throw Error("B");
                                    if (e.toLowerCase() in Tk)
                                        if (d instanceof _.Pb)
                                            d = _.Wa(d).toString();
                                        else if (d instanceof _.Fc)
                                        d = _.ei(d);
                                    else if ("string" === typeof d)
                                        d = (Di(d) || _.Kc).Qa();
                                    else
                                        throw Error("B");
                                }
                                d.kb && (d = d.Qa());
                                e = e + '="' + Ek(String(d)) + '"';
                                b += " " + e
                            }
                        }
                return b
            },
            Vk = function(a) {
                Qk("body");
                var b = a;
                a = "<body" + Uk({});
                null == b ? b = [] : Array.isArray(b) || (b = [b]);
                !0 === Jk.body ? a += ">" : (b = Sk(b),
                    a += ">" + _.Tc(b).toString() + "</body>");
                return _.Uc(a)
            },
            Li = function(a, b) {
                if ((0,
                        _.Xc)())
                    for (; a.lastChild;)
                        a.removeChild(a.lastChild);
                a.innerHTML = _.Tc(b)
            },
            Wk = function(a, b) {
                b = b instanceof _.Fc ? b : _.fi(b);
                a.action = _.ei(b)
            },
            Xk = function(a, b) {
                return a + Math.random() * (b - a)
            },
            Yk = function(a, b) {
                return new Q(a.x - b.x, a.y - b.y)
            },
            Zk = function(a) {
                return a.replace(/\xa0|[ \t]+/g, " ")
            },
            $k = function(a) {
                return a.replace(/[\s\xa0]+$/, "")
            },
            al = function(a) {
                return a = Ek(a)
            },
            bl = function(a) {
                return a.replace(/&([^;]+);/g, function(b, c) {
                    switch (c) {
                        case "amp":
                            return "&";
                        case "lt":
                            return "<";
                        case "gt":
                            return ">";
                        case "quot":
                            return '"';
                        default:
                            return "#" != c.charAt(0) || (c = Number("0" + c.slice(1)),
                                isNaN(c)) ? b : String.fromCharCode(c)
                    }
                })
            },
            cl = /&([^;\s<&]+);?/g,
            dl = function(a) {
                var b = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"'
                };
                var c = _.q.document.createElement("div");
                return a.replace(cl, function(d, e) {
                    var f = b[d];
                    if (f)
                        return f;
                    "#" == e.charAt(0) && (e = Number("0" + e.slice(1)),
                        isNaN(e) || (f = String.fromCharCode(e)));
                    f || (f = _.Uc(d + " "),
                        Li(c, f),
                        f = c.firstChild.nodeValue.slice(0, -1));
                    return b[d] = f
                })
            },
            el = function(a) {
                return -1 != a.indexOf("&") ? "document" in _.q ? dl(a) : bl(a) : a
            },
            R = function(a) {
                return _.fd(document, a)
            },
            fl = function(a, b, c) {
                return _.nd(document, arguments)
            },
            gl = function(a, b) {
                _.md(_.dd(a), a, arguments, 1)
            },
            hl = function(a, b) {
                b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
            },
            il = function(a) {
                a && a.parentNode && a.parentNode.removeChild(a)
            },
            jl = function(a) {
                return _.ya(a) && 1 == a.nodeType
            },
            kl = function(a) {
                return a.contentDocument || a.contentWindow.document
            },
            ll = function(a) {
                try {
                    return a.contentWindow || (a.contentDocument ? _.kd(a.contentDocument) : null)
                } catch (b) {}
                return null
            },
            ml = {
                SCRIPT: 1,
                STYLE: 1,
                HEAD: 1,
                IFRAME: 1,
                OBJECT: 1
            },
            nl = {
                IMG: " ",
                BR: "\n"
            },
            ol = function(a) {
                a = a.tabIndex;
                return "number" === typeof a && 0 <= a && 32768 > a
            },
            pl = function(a, b) {
                b ? a.tabIndex = 0 : (a.tabIndex = -1,
                    a.removeAttribute("tabIndex"))
            },
            ql = function(a, b, c) {
                if (!(a.nodeName in ml))
                    if (3 == a.nodeType)
                        c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                    else if (a.nodeName in nl)
                    b.push(nl[a.nodeName]);
                else
                    for (a = a.firstChild; a;)
                        ql(a, b, c),
                        a = a.nextSibling
            },
            rl = function(a) {
                var b = [];
                ql(a, b, !0);
                a = b.join("");
                a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
                a = a.replace(/\u200B/g, "");
                a = a.replace(/ +/g, " ");
                " " != a && (a = a.replace(/^\s*/, ""));
                return a
            },
            sl = function(a) {
                var b = [];
                ql(a, b, !1);
                return b.join("")
            },
            tl = function(a, b, c) {
                this.promise = a;
                this.resolve = b;
                this.reject = c
            },
            ul = function() {
                var a, b, c = new _.F(function(d, e) {
                    a = d;
                    b = e
                });
                return new tl(c, a, b)
            },
            vl = function(a) {
                if (a.cc && "function" == typeof a.cc)
                    return a.cc();
                if (!a.Za || "function" != typeof a.Za) {
                    if ("undefined" !== typeof Map && a instanceof Map)
                        return Array.from(a.keys());
                    if (!("undefined" !== typeof Set && a instanceof Set)) {
                        if (_.da(a) || "string" === typeof a) {
                            var b = [];
                            a = a.length;
                            for (var c = 0; c < a; c++)
                                b.push(c);
                            return b
                        }
                        return yi(a)
                    }
                }
            },
            wl = function(a, b, c) {
                if (a.forEach && "function" == typeof a.forEach)
                    a.forEach(b, c);
                else if (_.da(a) || "string" === typeof a)
                    Array.prototype.forEach.call(a, b, c);
                else
                    for (var d = vl(a), e = kk(a), f = e.length, g = 0; g < f; g++)
                        b.call(c, e[g], d && d[g], a)
            },
            xl = function(a, b) {
                if (!b)
                    return a;
                var c = a.indexOf("#");
                0 > c && (c = a.length);
                var d = a.indexOf("?");
                if (0 > d || d > c) {
                    d = c;
                    var e = ""
                } else
                    e = a.substring(d + 1, c);
                a = [a.slice(0, d), e, a.slice(c)];
                c = a[1];
                a[1] = b ? c ? c + "&" + b : b : c;
                return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
            },
            yl = function(a, b) {
                var c = [];
                for (b = b || 0; b < a.length; b += 2)
                    _.Df(a[b], a[b + 1], c);
                return c.join("&")
            },
            zl = function(a, b) {
                var c = 2 == arguments.length ? yl(arguments[1], 0) : yl(arguments, 1);
                return xl(a, c)
            },
            Al = function(a, b, c) {
                c = null != c ? "=" + _.$c(c) : "";
                return xl(a, b + c)
            },
            Bl = function(a, b, c) {
                for (; 0 <= (b = a.indexOf("format", b)) && b < c;) {
                    var d = a.charCodeAt(b - 1);
                    if (38 == d || 63 == d)
                        if (d = a.charCodeAt(b + 6), !d || 61 == d || 38 == d || 35 == d)
                            return b;
                    b += 7
                }
                return -1
            },
            Cl = /#|$/,
            Dl = /[?&]($|#)/,
            El = function(a, b) {
                this.h = this.g = null;
                this.j = a || null;
                this.l = !!b
            },
            Fl = function(a) {
                a.g || (a.g = new Map,
                    a.h = 0,
                    a.j && _.Cf(a.j, function(b, c) {
                        a.add(_.ad(b), c)
                    }))
            };
        El.prototype.add = function(a, b) {
            Fl(this);
            this.j = null;
            a = Gl(this, a);
            var c = this.g.get(a);
            c || this.g.set(a, c = []);
            c.push(b);
            this.h += 1;
            return this
        };
        El.prototype.remove = function(a) {
            Fl(this);
            a = Gl(this, a);
            return this.g.has(a) ? (this.j = null,
                this.h -= this.g.get(a).length,
                this.g.delete(a)) : !1
        };
        var Hl = function(a, b) {
            Fl(a);
            b = Gl(a, b);
            return a.g.has(b)
        };
        _.l = El.prototype;
        _.l.forEach = function(a, b) {
            Fl(this);
            this.g.forEach(function(c, d) {
                c.forEach(function(e) {
                    a.call(b, e, d, this)
                }, this)
            }, this)
        };
        _.l.cc = function() {
            Fl(this);
            for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
                for (var e = a[d], f = 0; f < e.length; f++)
                    c.push(b[d]);
            return c
        };
        _.l.Za = function(a) {
            Fl(this);
            var b = [];
            if ("string" === typeof a)
                Hl(this, a) && (b = b.concat(this.g.get(Gl(this, a))));
            else {
                a = Array.from(this.g.values());
                for (var c = 0; c < a.length; c++)
                    b = b.concat(a[c])
            }
            return b
        };
        _.l.set = function(a, b) {
            Fl(this);
            this.j = null;
            a = Gl(this, a);
            Hl(this, a) && (this.h -= this.g.get(a).length);
            this.g.set(a, [b]);
            this.h += 1;
            return this
        };
        _.l.get = function(a, b) {
            if (!a)
                return b;
            a = this.Za(a);
            return 0 < a.length ? String(a[0]) : b
        };
        var Il = function(a, b, c) {
            a.remove(b);
            0 < c.length && (a.j = null,
                a.g.set(Gl(a, b), _.wa(c)),
                a.h += c.length)
        };
        El.prototype.toString = function() {
            if (this.j)
                return this.j;
            if (!this.g)
                return "";
            for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
                var d = b[c],
                    e = _.$c(d);
                d = this.Za(d);
                for (var f = 0; f < d.length; f++) {
                    var g = e;
                    "" !== d[f] && (g += "=" + _.$c(d[f]));
                    a.push(g)
                }
            }
            return this.j = a.join("&")
        };
        var Jl = function(a) {
                var b = new El;
                b.j = a.j;
                a.g && (b.g = new Map(a.g),
                    b.h = a.h);
                return b
            },
            Gl = function(a, b) {
                b = String(b);
                a.l && (b = b.toLowerCase());
                return b
            },
            Kl = function(a, b) {
                b && !a.l && (Fl(a),
                    a.j = null,
                    a.g.forEach(function(c, d) {
                        var e = d.toLowerCase();
                        d != e && (this.remove(d),
                            Il(this, e, c))
                    }, a));
                a.l = b
            };
        El.prototype.o = function(a) {
            for (var b = 0; b < arguments.length; b++)
                wl(arguments[b], function(c, d) {
                    this.add(d, c)
                }, this)
        };
        var Ll = /[#\/\?@]/g,
            Ml = /[#\?]/g,
            Nl = /[#\?:]/g,
            Ol = /#/g,
            Pl = function(a, b) {
                return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
            },
            Ql = /[#\?@]/g,
            Rl = function(a) {
                a = a.charCodeAt(0);
                return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
            },
            Sl = function(a, b, c) {
                return "string" === typeof a ? (a = encodeURI(a).replace(b, Rl),
                    c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                    a) : null
            },
            Tl = function(a) {
                this.h = this.A = this.l = "";
                this.C = null;
                this.s = this.j = "";
                this.o = !1;
                var b;
                a instanceof Tl ? (this.o = a.o,
                    Ul(this, a.l),
                    this.A = a.A,
                    this.h = a.h,
                    Vl(this, a.C),
                    this.j = a.j,
                    Wl(this, Jl(a.g)),
                    this.s = a.s) : a && (b = String(a).match(_.Af)) ? (this.o = !1,
                    Ul(this, b[1] || "", !0),
                    this.A = Pl(b[2] || ""),
                    this.h = Pl(b[3] || "", !0),
                    Vl(this, b[4]),
                    this.j = Pl(b[5] || "", !0),
                    Wl(this, b[6] || "", !0),
                    this.s = Pl(b[7] || "")) : (this.o = !1,
                    this.g = new El(null, this.o))
            };
        Tl.prototype.toString = function() {
            var a = [],
                b = this.l;
            b && a.push(Sl(b, Ll, !0), ":");
            var c = this.h;
            if (c || "file" == b)
                a.push("//"),
                (b = this.A) && a.push(Sl(b, Ll, !0), "@"),
                a.push(_.$c(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                c = this.C,
                null != c && a.push(":", String(c));
            if (c = this.j)
                this.h && "/" != c.charAt(0) && a.push("/"),
                a.push(Sl(c, "/" == c.charAt(0) ? Ml : Nl, !0));
            (c = this.g.toString()) && a.push("?", c);
            (c = this.s) && a.push("#", Sl(c, Ol));
            return a.join("")
        };
        Tl.prototype.resolve = function(a) {
            var b = new Tl(this),
                c = !!a.l;
            c ? Ul(b, a.l) : c = !!a.A;
            c ? b.A = a.A : c = !!a.h;
            c ? b.h = a.h : c = null != a.C;
            var d = a.j;
            if (c)
                Vl(b, a.C);
            else if (c = !!a.j) {
                if ("/" != d.charAt(0))
                    if (this.h && !this.j)
                        d = "/" + d;
                    else {
                        var e = b.j.lastIndexOf("/"); -
                        1 != e && (d = b.j.slice(0, e + 1) + d)
                    }
                e = d;
                if (".." == e || "." == e)
                    d = "";
                else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                    d = 0 == e.lastIndexOf("/", 0);
                    e = e.split("/");
                    for (var f = [], g = 0; g < e.length;) {
                        var h = e[g++];
                        "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                            d && g == e.length && f.push("")) : (f.push(h),
                            d = !0)
                    }
                    d = f.join("/")
                } else
                    d = e
            }
            c ? b.j = d : c = "" !== a.g.toString();
            c ? Wl(b, Jl(a.g)) : c = !!a.s;
            c && (b.s = a.s);
            return b
        };
        var Ul = function(a, b, c) {
                a.l = c ? Pl(b, !0) : b;
                a.l && (a.l = a.l.replace(/:$/, ""))
            },
            Vl = function(a, b) {
                if (b) {
                    b = Number(b);
                    if (isNaN(b) || 0 > b)
                        throw Error("L`" + b);
                    a.C = b
                } else
                    a.C = null
            },
            Wl = function(a, b, c) {
                b instanceof El ? (a.g = b,
                    Kl(a.g, a.o)) : (c || (b = Sl(b, Ql)),
                    a.g = new El(b, a.o))
            },
            Xl = function(a) {
                var b = vl(a);
                if ("undefined" == typeof b)
                    throw Error("N");
                var c = new El(null);
                a = kk(a);
                for (var d = 0; d < b.length; d++) {
                    var e = b[d],
                        f = a[d];
                    Array.isArray(f) ? Il(c, e, f) : c.add(e, f)
                }
                return c
            },
            Yl = {},
            Zl = {},
            $l = {},
            Ni = {},
            am = function(a, b) {
                _.E.call(this);
                this.l = a || 1;
                this.j = b || _.q;
                this.o = (0,
                    _.x)(this.A, this);
                this.s = _.Db()
            };
        _.z(am, _.E);
        am.prototype.h = !1;
        am.prototype.g = null;
        var bm = function(a, b) {
            a.l = b;
            a.g && a.h ? (a.stop(),
                a.start()) : a.g && a.stop()
        };
        am.prototype.A = function() {
            if (this.h) {
                var a = _.Db() - this.s;
                0 < a && a < .8 * this.l ? this.g = this.j.setTimeout(this.o, this.l - a) : (this.g && (this.j.clearTimeout(this.g),
                        this.g = null),
                    this.dispatchEvent("tick"),
                    this.h && (this.stop(),
                        this.start()))
            }
        };
        am.prototype.start = function() {
            this.h = !0;
            this.g || (this.g = this.j.setTimeout(this.o, this.l),
                this.s = _.Db())
        };
        am.prototype.stop = function() {
            this.h = !1;
            this.g && (this.j.clearTimeout(this.g),
                this.g = null)
        };
        am.prototype.K = function() {
            am.P.K.call(this);
            this.stop();
            delete this.j
        };
        var cm = function(a) {
                for (var b = [], c = 0, d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023),
                                b[c++] = e >> 18 | 240,
                                b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224,
                            b[c++] = e >> 6 & 63 | 128),
                        b[c++] = e & 63 | 128)
                }
                return b
            },
            S = function(a, b, c, d) {
                _.mh(_.I(a.ha));
                return _.rh(a, b, c, d)
            },
            em = function(a) {
                return void 0 !== _.Xh(a, dm, 11, !1)
            },
            fm = function(a, b, c, d) {
                this.top = a;
                this.right = b;
                this.bottom = c;
                this.left = d
            };
        fm.prototype.ceil = function() {
            this.top = Math.ceil(this.top);
            this.right = Math.ceil(this.right);
            this.bottom = Math.ceil(this.bottom);
            this.left = Math.ceil(this.left);
            return this
        };
        fm.prototype.floor = function() {
            this.top = Math.floor(this.top);
            this.right = Math.floor(this.right);
            this.bottom = Math.floor(this.bottom);
            this.left = Math.floor(this.left);
            return this
        };
        fm.prototype.round = function() {
            this.top = Math.round(this.top);
            this.right = Math.round(this.right);
            this.bottom = Math.round(this.bottom);
            this.left = Math.round(this.left);
            return this
        };
        fm.prototype.translate = function(a, b) {
            a instanceof Q ? (this.left += a.x,
                this.right += a.x,
                this.top += a.y,
                this.bottom += a.y) : (this.left += a,
                this.right += a,
                "number" === typeof b && (this.top += b,
                    this.bottom += b));
            return this
        };
        var gm = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        };
        gm.prototype.ceil = function() {
            this.left = Math.ceil(this.left);
            this.top = Math.ceil(this.top);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        gm.prototype.floor = function() {
            this.left = Math.floor(this.left);
            this.top = Math.floor(this.top);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        gm.prototype.round = function() {
            this.left = Math.round(this.left);
            this.top = Math.round(this.top);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };
        gm.prototype.translate = function(a, b) {
            a instanceof Q ? (this.left += a.x,
                this.top += a.y) : (this.left += a,
                "number" === typeof b && (this.top += b));
            return this
        };
        var hm = function(a, b) {
                var c = _.dd(a);
                return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
            },
            im = function(a, b) {
                return hm(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
            },
            jm = function(a) {
                "number" == typeof a && (a += "px");
                return a
            },
            km = function(a, b) {
                if (b instanceof Q) {
                    var c = b.x;
                    b = b.y
                } else
                    c = b,
                    b = void 0;
                a.style.left = jm(c);
                a.style.top = jm(b)
            },
            lm = function(a) {
                a = a ? _.dd(a) : document;
                return !_.C || 9 <= Number(_.Cc) || _.id(_.ed(a).g) ? a.documentElement : a.body
            },
            mm = function(a) {
                try {
                    return a.getBoundingClientRect()
                } catch (b) {
                    return {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    }
                }
            },
            nm = function(a) {
                if (_.C && !(8 <= Number(_.Cc)))
                    return a.offsetParent;
                var b = _.dd(a),
                    c = im(a, "position"),
                    d = "fixed" == c || "absolute" == c;
                for (a = a.parentNode; a && a != b; a = a.parentNode)
                    if (11 == a.nodeType && a.host && (a = a.host),
                        c = im(a, "position"),
                        d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                        return a;
                return null
            },
            om = function(a) {
                var b = _.dd(a),
                    c = new Q(0, 0),
                    d = lm(b);
                if (a == d)
                    return c;
                a = mm(a);
                b = jk(_.ed(b).g);
                c.x = a.left + b.x;
                c.y = a.top + b.y;
                return c
            },
            pm = function(a) {
                for (var b = new fm(0, Infinity, Infinity, 0), c = _.ed(a), d = c.g.body, e = c.g.documentElement, f = ik(c.g); a = nm(a);)
                    if (!(_.C && 0 == a.clientWidth || _.lc && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != im(a, "overflow")) {
                        var g = om(a),
                            h = new Q(a.clientLeft, a.clientTop);
                        g.x += h.x;
                        g.y += h.y;
                        b.top = Math.max(b.top, g.y);
                        b.right = Math.min(b.right, g.x + a.clientWidth);
                        b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                        b.left = Math.max(b.left, g.x)
                    }
                d = f.scrollLeft;
                f = f.scrollTop;
                b.left = Math.max(b.left, d);
                b.top = Math.max(b.top, f);
                c = _.jd(_.rd(c) || window);
                b.right = Math.min(b.right, d + c.width);
                b.bottom = Math.min(b.bottom, f + c.height);
                return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
            },
            qm = function(a, b) {
                var c = new Q(0, 0),
                    d = _.kd(_.dd(a));
                if (!_.gc(d, "parent"))
                    return c;
                do {
                    if (d == b)
                        var e = om(a);
                    else
                        e = mm(a),
                        e = new Q(e.left, e.top);
                    c.x += e.x;
                    c.y += e.y
                } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
                return c
            },
            sm = function(a) {
                var b = rm;
                if ("none" != im(a, "display"))
                    return b(a);
                var c = a.style,
                    d = c.display,
                    e = c.visibility,
                    f = c.position;
                c.visibility = "hidden";
                c.position = "absolute";
                c.display = "inline";
                a = b(a);
                c.display = d;
                c.position = f;
                c.visibility = e;
                return a
            },
            rm = function(a) {
                var b = a.offsetWidth,
                    c = a.offsetHeight,
                    d = _.lc && !b && !c;
                return (void 0 === b || d) && a.getBoundingClientRect ? (a = mm(a),
                    new _.Yc(a.right - a.left, a.bottom - a.top)) : new _.Yc(b, c)
            },
            T = function(a, b) {
                a.style.display = b ? "" : "none"
            },
            tm = function(a, b) {
                b = Nk(b);
                _.C && void 0 !== a.cssText ? a.cssText = b : _.q.trustedTypes ? _.qd(a, b) : a.innerHTML = b
            },
            um = function(a, b) {
                b = _.ed(b);
                var c = b.g;
                if (_.C && c.createStyleSheet)
                    b = c.createStyleSheet(),
                    tm(b, a);
                else {
                    c = gk(b.g, "HEAD")[0];
                    if (!c) {
                        var d = gk(b.g, "BODY")[0];
                        c = b.R("HEAD");
                        d.parentNode.insertBefore(c, d)
                    }
                    d = b.R("STYLE");
                    var e;
                    (e = _.Oh('style[nonce],link[rel="stylesheet"][nonce]')) && d.setAttribute("nonce", e);
                    tm(d, a);
                    b.appendChild(c, d)
                }
            },
            vm = function(a) {
                return "rtl" == im(a, "direction")
            },
            wm = function(a) {
                return new _.Yc(a.offsetWidth, a.offsetHeight)
            },
            xm = function(a, b, c) {
                a = a.style;
                _.kc ? a.MozBoxSizing = c : _.lc ? a.WebkitBoxSizing = c : a.boxSizing = c;
                a.width = Math.max(b.width, 0) + "px";
                a.height = Math.max(b.height, 0) + "px"
            },
            ym = function(a, b) {
                xm(a, b, "content-box")
            },
            zm = function(a, b) {
                if (/^\d+px?$/.test(b))
                    return parseInt(b, 10);
                var c = a.style.left,
                    d = a.runtimeStyle.left;
                a.runtimeStyle.left = a.currentStyle.left;
                a.style.left = b;
                b = a.style.pixelLeft;
                a.style.left = c;
                a.runtimeStyle.left = d;
                return +b
            },
            Am = function(a, b) {
                return (b = a.currentStyle ? a.currentStyle[b] : null) ? zm(a, b) : 0
            },
            Bm = function(a) {
                if (_.C) {
                    var b = Am(a, "paddingLeft"),
                        c = Am(a, "paddingRight"),
                        d = Am(a, "paddingTop");
                    a = Am(a, "paddingBottom");
                    return new fm(d, c, a, b)
                }
                b = hm(a, "paddingLeft");
                c = hm(a, "paddingRight");
                d = hm(a, "paddingTop");
                a = hm(a, "paddingBottom");
                return new fm(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
            },
            Cm = {
                thin: 2,
                medium: 4,
                thick: 6
            },
            Dm = function(a, b) {
                if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
                    return 0;
                b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
                return b in Cm ? Cm[b] : zm(a, b)
            },
            Em = function(a) {
                if (_.C && !(9 <= Number(_.Cc))) {
                    var b = Dm(a, "borderLeft"),
                        c = Dm(a, "borderRight"),
                        d = Dm(a, "borderTop");
                    a = Dm(a, "borderBottom");
                    return new fm(d, c, a, b)
                }
                b = hm(a, "borderLeftWidth");
                c = hm(a, "borderRightWidth");
                d = hm(a, "borderTopWidth");
                a = hm(a, "borderBottomWidth");
                return new fm(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
            },
            Fm = function(a, b) {
                return null != a && a.Cb === b
            },
            Gm = function(a) {
                if (null != a)
                    switch (a.ue) {
                        case 1:
                            return 1;
                        case -1:
                            return -1;
                        case 0:
                            return 0
                    }
                return null
            },
            Hm = function(a, b) {
                return a && b && a.Si && b.Si ? a.Cb !== b.Cb ? !1 : a.toString() === b.toString() : a instanceof _.Nf && b instanceof _.Nf ? a.Cb != b.Cb ? !1 : a.toString() == b.toString() : a == b
            },
            Im = function(a) {
                return a instanceof _.Nf ? !!a.pa() : !!a
            },
            Jm = {},
            Km = {},
            Lm = function() {
                return ""
            },
            Mm = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
            Nm = /</g,
            Om = function(a) {
                return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
            },
            Qm = function() {
                var a;
                Fm("", $l) ? a = "".pa() : a = Pm.test("") ? "" : "zSoyz";
                Fm(a, $l) && (a = a.pa());
                return (a && !a.startsWith(" ") ? " " : "") + a
            },
            Rm = {
                "\x00": "&#0;",
                "\t": "&#9;",
                "\n": "&#10;",
                "\v": "&#11;",
                "\f": "&#12;",
                "\r": "&#13;",
                " ": "&#32;",
                '"': "&quot;",
                "&": "&amp;",
                "'": "&#39;",
                "-": "&#45;",
                "/": "&#47;",
                "<": "&lt;",
                "=": "&#61;",
                ">": "&gt;",
                "`": "&#96;",
                "\u0085": "&#133;",
                "\u00a0": "&#160;",
                "\u2028": "&#8232;",
                "\u2029": "&#8233;"
            },
            Sm = function(a) {
                return Rm[a]
            },
            Tm = {
                "\x00": "\\0 ",
                "\b": "\\8 ",
                "\t": "\\9 ",
                "\n": "\\a ",
                "\v": "\\b ",
                "\f": "\\c ",
                "\r": "\\d ",
                '"': "\\22 ",
                "&": "\\26 ",
                "'": "\\27 ",
                "(": "\\28 ",
                ")": "\\29 ",
                "*": "\\2a ",
                "/": "\\2f ",
                ":": "\\3a ",
                ";": "\\3b ",
                "<": "\\3c ",
                "=": "\\3d ",
                ">": "\\3e ",
                "@": "\\40 ",
                "\\": "\\5c ",
                "{": "\\7b ",
                "}": "\\7d ",
                "\u0085": "\\85 ",
                "\u00a0": "\\a0 ",
                "\u2028": "\\2028 ",
                "\u2029": "\\2029 "
            },
            Um = function(a) {
                return Tm[a]
            },
            Vm = {
                "\x00": "%00",
                "\u0001": "%01",
                "\u0002": "%02",
                "\u0003": "%03",
                "\u0004": "%04",
                "\u0005": "%05",
                "\u0006": "%06",
                "\u0007": "%07",
                "\b": "%08",
                "\t": "%09",
                "\n": "%0A",
                "\v": "%0B",
                "\f": "%0C",
                "\r": "%0D",
                "\u000e": "%0E",
                "\u000f": "%0F",
                "\u0010": "%10",
                "\u0011": "%11",
                "\u0012": "%12",
                "\u0013": "%13",
                "\u0014": "%14",
                "\u0015": "%15",
                "\u0016": "%16",
                "\u0017": "%17",
                "\u0018": "%18",
                "\u0019": "%19",
                "\u001a": "%1A",
                "\u001b": "%1B",
                "\u001c": "%1C",
                "\u001d": "%1D",
                "\u001e": "%1E",
                "\u001f": "%1F",
                " ": "%20",
                '"': "%22",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "<": "%3C",
                ">": "%3E",
                "\\": "%5C",
                "{": "%7B",
                "}": "%7D",
                "\u007f": "%7F",
                "\u0085": "%C2%85",
                "\u00a0": "%C2%A0",
                "\u2028": "%E2%80%A8",
                "\u2029": "%E2%80%A9",
                "\uff01": "%EF%BC%81",
                "\uff03": "%EF%BC%83",
                "\uff04": "%EF%BC%84",
                "\uff06": "%EF%BC%86",
                "\uff07": "%EF%BC%87",
                "\uff08": "%EF%BC%88",
                "\uff09": "%EF%BC%89",
                "\uff0a": "%EF%BC%8A",
                "\uff0b": "%EF%BC%8B",
                "\uff0c": "%EF%BC%8C",
                "\uff0f": "%EF%BC%8F",
                "\uff1a": "%EF%BC%9A",
                "\uff1b": "%EF%BC%9B",
                "\uff1d": "%EF%BC%9D",
                "\uff1f": "%EF%BC%9F",
                "\uff20": "%EF%BC%A0",
                "\uff3b": "%EF%BC%BB",
                "\uff3d": "%EF%BC%BD"
            },
            Wm = function(a) {
                return Vm[a]
            },
            Xm = /[\x00\x22\x26\x27\x3c\x3e]/g,
            Ym = function(a) {
                return Fm(a, _.ii) ? a : a instanceof _.Sc ? (0,
                    _.L)(_.Tc(a).toString()) : a instanceof _.Sc ? (0,
                    _.L)(_.Tc(a).toString()) : (0,
                    _.L)(String(String(a)).replace(Xm, Sm), Gm(a))
            },
            Zm = /[\x00\x22\x27\x3c\x3e]/g,
            U = function(a) {
                return Fm(a, _.ii) ? String(String(a.pa()).replace(Mm, "").replace(Nm, "&lt;")).replace(Zm, Sm) : String(a).replace(Xm, Sm)
            },
            $m = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
            an = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
            bn = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,
            cn = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
            dn = function(a) {
                return String(a).replace(cn, Wm)
            },
            en = function(a) {
                return Fm(a, Zl) ? a.pa() : a instanceof _.Pb ? _.Wa(a).toString() : a instanceof _.Pb ? dn(_.Wa(a).toString()) : "about:invalid#zSoyz"
            },
            fn = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier|linear-gradient)\((?:[-\u0020\t,+.!#%_0-9a-zA-Z]|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier|linear-gradient)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
            gn = function(a) {
                Fm(a, _.di) ? a = Om(a.pa()) : null == a ? a = "" : a instanceof _.Mc ? a = Om(Mk(a)) : a instanceof _.Mc ? a = Om(Mk(a)) : a instanceof _.hi ? a = Om(Nk(a)) : a instanceof _.hi ? a = Om(Nk(a)) : (a = String(a),
                    a = fn.test(a) ? a : "zSoyz");
                return a
            },
            hn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
            jn = function(a) {
                Fm(a, Yl) || Fm(a, Zl) ? a = dn(a) : a instanceof _.Fc ? a = dn(_.ei(a)) : a instanceof _.Fc ? a = dn(_.ei(a)) : a instanceof _.Pb ? a = dn(_.Wa(a).toString()) : a instanceof _.Pb ? a = dn(_.Wa(a).toString()) : (a = String(a),
                    a = hn.test(a) ? a.replace(cn, Wm) : "about:invalid#zSoyz");
                return a
            },
            kn = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
            ln = function(a) {
                Fm(a, Yl) || Fm(a, Zl) ? a = dn(a) : a instanceof _.Fc ? a = dn(_.ei(a)) : a instanceof _.Fc ? a = dn(_.ei(a)) : a instanceof _.Pb ? a = dn(_.Wa(a).toString()) : a instanceof _.Pb ? a = dn(_.Wa(a).toString()) : (a = String(a),
                    a = kn.test(a) ? a.replace(cn, Wm) : "about:invalid#zSoyz");
                return a
            },
            Pm = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i;
        var mn = function(a) {
            _.J.call(this, a, -1, mn.g)
        };
        _.w(mn, _.J);
        mn.g = [2];
        var nn = function(a) {
            if (!a)
                return "";
            if (/^about:(?:blank|srcdoc)$/.test(a))
                return window.origin || "";
            a.startsWith("blob:") && (a = a.substring(5));
            a = a.split("#")[0].split("?")[0];
            a = a.toLowerCase();
            0 == a.indexOf("//") && (a = window.location.protocol + a);
            /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
            var b = a.substring(a.indexOf("://") + 3),
                c = b.indexOf("/"); -
            1 != c && (b = b.substring(0, c));
            c = a.substring(0, a.indexOf("://"));
            if (!c)
                throw Error("ga`" + a);
            if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c)
                throw Error("ha`" + c);
            a = "";
            var d = b.indexOf(":");
            if (-1 != d) {
                var e = b.substring(d + 1);
                b = b.substring(0, d);
                if ("http" === c && "80" !== e || "https" === c && "443" !== e)
                    a = ":" + e
            }
            return c + "://" + b + a
        };
        var on = function(a) {
                return function() {
                    return a
                }
            },
            pn = function(a, b) {
                for (var c = 0; c < b.length - 2; c += 3) {
                    var d = b.charAt(c + 2);
                    d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
                    d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
                    a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
                }
                return a
            },
            rn = function(a) {
                var b = qn.split("."),
                    c = Number(b[0]) || 0;
                a = cm(a);
                for (var d = c, e = 0; e < a.length; e++)
                    d += a[e],
                    d = pn(d, "+-a^+6");
                d = pn(d, "+-3^+b+-f");
                d ^= Number(b[1]) || 0;
                0 > d && (d = (d & 2147483647) + 2147483648);
                b = d % 1E6;
                return b.toString() + "." + (b ^ c)
            },
            sn = function() {
                var a = on(String.fromCharCode(116)),
                    b = on(String.fromCharCode(107));
                a = [a(), a()];
                a[1] = b();
                return a.join("")
            };
        var tn = window.google && google.translate && google.translate._const;
        tn || (tn = {
            _cac: "",
            _cam: "",
            _cest: new Date,
            _cjlc: "",
            _cl: "",
            _cuc: "",
            _cnad: !1,
            _cnal: {},
            dl: "",
            _pah: "",
            _pas: "",
            _pbi: "",
            _pci: "",
            _phf: "",
            _pli: "",
            _plla: "",
            _pmi: "",
            _ps: "",
            _pta: "",
            _puh: "",
            _vt: !1,
            _tvt: !1
        });
        var un = window.google && window.google.translate && window.google.translate.v || "",
            vn = tn._cl || "en",
            wn = tn._cuc,
            xn = tn._cnad,
            yn = tn._cest,
            zn = tn._cnal || {},
            An = tn._tvt ? "translation-voting" : tn._vt ? "voting" : "classic",
            Bn = "lib" == tn._cam ? 1 : 0,
            Cn = (tn._cac || "te") + (1 == Bn ? "_lib" : ""),
            qn = function() {
                function a(d) {
                    return function() {
                        return d
                    }
                }
                var b = String.fromCharCode(107),
                    c = a(String.fromCharCode(116));
                b = a(b);
                c = [c(), c()];
                c[1] = b();
                return tn["_c" + c.join(b())] || ""
            }(),
            Dn = tn._pah || "",
            En = tn._pas || "https://",
            Fn = tn._pbi || "",
            Gn = tn._pci || "",
            Hn = tn._plla || "",
            In = tn._pli || "",
            Jn = tn._ps || "",
            Kn = tn._puh || "",
            Ln = "//" + Kn + "/translate_suggestion?client=" + Cn,
            Mn = "//" + Dn + "/translate_voting?client=" + Cn,
            Nn = "https://www.google.com/support/translate" + ("en" == vn ? "" : "#googtrans/en/" + vn);
        var Pn = function(a, b, c) {
                var d = String(_.q.location.href);
                return d && a && b ? [b, On(nn(d), a, c || null)].join(" ") : null
            },
            On = function(a, b, c) {
                var d = [],
                    e = [];
                if (1 == (Array.isArray(c) ? 2 : 1))
                    return e = [b, a],
                        _.Zb(d, function(h) {
                            e.push(h)
                        }),
                        Qn(e.join(" "));
                var f = [],
                    g = [];
                _.Zb(c, function(h) {
                    g.push(h.key);
                    f.push(h.value)
                });
                c = Math.floor((new Date).getTime() / 1E3);
                e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
                _.Zb(d, function(h) {
                    e.push(h)
                });
                a = Qn(e.join(" "));
                a = [c, a];
                0 == g.length || a.push(g.join(""));
                return a.join("_")
            },
            Qn = function(a) {
                var b = Qi();
                b.update(a);
                return b.Th().toLowerCase()
            };
        var Rn = {};
        var Sn = function() {
            this.g = document || {
                cookie: ""
            }
        };
        _.l = Sn.prototype;
        _.l.isEnabled = function() {
            if (!_.q.navigator.cookieEnabled)
                return !1;
            if (this.g.cookie)
                return !0;
            this.set("TESTCOOKIESENABLED", "1", {
                Dg: 60
            });
            if ("1" !== this.get("TESTCOOKIESENABLED"))
                return !1;
            this.remove("TESTCOOKIESENABLED");
            return !0
        };
        _.l.set = function(a, b, c) {
            var d = !1;
            if ("object" === typeof c) {
                var e = c.dm;
                d = c.em || !1;
                var f = c.domain || void 0;
                var g = c.path || void 0;
                var h = c.Dg
            }
            if (/[;=\s]/.test(a))
                throw Error("ia`" + a);
            if (/[;\r\n]/.test(b))
                throw Error("ja`" + b);
            void 0 === h && (h = -1);
            this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
        };
        _.l.get = function(a, b) {
            for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
                f = (0,
                    _.dc)(d[e]);
                if (0 == f.lastIndexOf(c, 0))
                    return f.slice(c.length);
                if (f == a)
                    return ""
            }
            return b
        };
        _.l.remove = function(a, b, c) {
            var d = void 0 !== this.get(a);
            this.set(a, "", {
                Dg: 0,
                path: b,
                domain: c
            });
            return d
        };
        _.l.cc = function() {
            return Tn(this).keys
        };
        _.l.Za = function() {
            return Tn(this).values
        };
        var Tn = function(a) {
            a = (a.g.cookie || "").split(";");
            for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
                e = (0,
                    _.dc)(a[f]),
                d = e.indexOf("="), -1 == d ? (b.push(""),
                    c.push(e)) : (b.push(e.substring(0, d)),
                    c.push(e.substring(d + 1)));
            return {
                keys: b,
                values: c
            }
        };
        var Un = function(a) {
                return !!Rn.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
            },
            Vn = function(a, b, c, d) {
                (a = _.q[a]) || "undefined" === typeof document || (a = (new Sn).get(b));
                return a ? Pn(a, c, d) : null
            },
            Wn = function(a, b) {
                b = void 0 === b ? !1 : b;
                var c = nn(String(_.q.location.href)),
                    d = [];
                var e = b;
                e = void 0 === e ? !1 : e;
                var f = _.q.__SAPISID || _.q.__APISID || _.q.__3PSAPISID || _.q.__OVERRIDE_SID;
                Un(e) && (f = f || _.q.__1PSAPISID);
                if (f)
                    e = !0;
                else {
                    if ("undefined" !== typeof document) {
                        var g = new Sn;
                        f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID") || g.get("OSID");
                        Un(e) && (f = f || g.get("__Secure-1PAPISID"))
                    }
                    e = !!f
                }
                e && (e = (c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:")) ? _.q.__SAPISID : _.q.__APISID,
                    e || "undefined" === typeof document || (e = new Sn,
                        e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID")),
                    (e = e ? Pn(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e),
                    c && Un(b) && ((b = Vn("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b),
                        (a = Vn("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a)));
                return 0 == d.length ? null : d.join(" ")
            };
        var Xn = function(a) {
            this.g = this.h = this.j = a
        };
        Xn.prototype.reset = function() {
            this.g = this.h = this.j
        };
        Xn.prototype.sa = function() {
            return this.h
        };
        var Yn = function(a) {
            _.J.call(this, a)
        };
        _.w(Yn, _.J);
        var Zn = function(a) {
            _.J.call(this, a, -1, Zn.g)
        };
        _.w(Zn, _.J);
        Zn.g = [1];
        var dm = function(a) {
            _.J.call(this, a)
        };
        _.w(dm, _.J);
        var $n = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
        new Zn;
        var ao = function(a) {
            _.J.call(this, a)
        };
        _.w(ao, _.J);
        var bo = function(a) {
            _.J.call(this, a)
        };
        _.w(bo, _.J);
        bo.prototype.sa = function() {
            return _.qh(this, 2)
        };
        bo.prototype.Na = function(a) {
            S(this, 2, a)
        };
        var co = function(a) {
            _.J.call(this, a, 33, co.g)
        };
        _.w(co, _.J);
        co.prototype.Na = function(a, b) {
            var c = _.I(this.ha);
            _.mh(c);
            c = _.sh(this, bo, 3, !1, 2, c);
            b = null != b ? b : new bo;
            if (0 > a || a > c.length)
                throw Error();
            void 0 != a ? c.splice(a, 1, b) : c.push(b);
            _.I(b.ha) & 2 && _.gh(c, 8)
        };
        co.g = [3, 20, 27];
        var eo = function(a) {
            _.J.call(this, a, 19, eo.g)
        };
        _.w(eo, _.J);
        eo.g = [3, 5];
        var fo = function(a) {
            _.J.call(this, a, 6, fo.g)
        };
        _.w(fo, _.J);
        fo.g = [5];
        var go = function(a) {
            _.J.call(this, a)
        };
        _.w(go, _.J);
        var ho = new function(a, b) {
                this.g = a;
                this.sd = b;
                this.h = _.Yh;
                this.defaultValue = void 0
            }
            (175237375, go);
        var lo = function(a, b, c, d, e, f, g, h, k, m, n) {
            _.E.call(this);
            var p = this;
            this.h = [];
            this.na = "";
            this.U = !1;
            this.Ca = this.S = -1;
            this.da = !1;
            this.G = this.l = null;
            this.s = this.A = 0;
            this.zb = 1;
            this.wf = 0;
            this.M = !1;
            _.E.call(this);
            this.ka = b || function() {};
            this.j = new io(a, f);
            this.yb = d;
            this.ta = n;
            this.Ab = _.Cb(Xk, 0, 1);
            this.D = e || null;
            this.C = c || null;
            this.H = g || !1;
            this.N = k || null;
            this.withCredentials = !h;
            this.Y = f || !1;
            this.Da = !this.Y && (65 <= vi("Chromium") || 45 <= vi("Firefox") || 12 <= vi("Safari") || _.Ma() && xi()) && !!_.kd() && !!_.kd().navigator && !!_.kd().navigator.sendBeacon;
            a = S(new ao, 1, 1);
            jo(this.j, a);
            this.o = new Xn(1E4);
            this.g = new am(this.o.sa());
            ek(this, this.g);
            m = ko(this, m);
            _.D(this.g, "tick", m, !1, this);
            this.F = new am(6E5);
            ek(this, this.F);
            _.D(this.F, "tick", m, !1, this);
            this.H || this.F.start();
            this.Y || (_.D(document, "visibilitychange", function() {
                    "hidden" === document.visibilityState && p.L()
                }),
                _.D(document, "pagehide", this.L, !1, this))
        };
        _.w(lo, _.E);
        var ko = function(a, b) {
            return b ? function() {
                    b().then(function() {
                        a.flush()
                    })
                } :
                function() {
                    a.flush()
                }
        };
        lo.prototype.K = function() {
            this.L();
            _.E.prototype.K.call(this)
        };
        var mo = function(a) {
                a.D || (a.D = .01 > a.Ab() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
                return a.D
            },
            no = function(a, b) {
                a.o = new Xn(1 > b ? 1 : b);
                bm(a.g, a.o.sa())
            };
        lo.prototype.log = function(a) {
            a = _.Dh(a, !1);
            var b = this.zb++;
            S(a, 21, b);
            _.qh(a, 1) || S(a, 1, Date.now().toString());
            null == _.qh(a, 15) && S(a, 15, 60 * (new Date).getTimezoneOffset());
            this.l && (b = _.Dh(this.l, !1),
                _.$h(a, 16, b));
            for (; 1E3 <= this.h.length;)
                this.h.shift(),
                ++this.A;
            this.h.push(a);
            this.dispatchEvent(new oo(a));
            this.H || this.g.h || this.g.start()
        };
        lo.prototype.flush = function(a, b) {
            var c = this;
            if (0 === this.h.length)
                a && a();
            else if (this.M)
                po(this.j, 3),
                qo(this);
            else {
                var d = Date.now();
                if (this.Ca > d && this.S < d)
                    b && b("throttled");
                else {
                    po(this.j, 1);
                    var e = ro(this.j, this.h, this.A, this.s);
                    d = {};
                    var f = this.ka();
                    f && (d.Authorization = f);
                    var g = mo(this);
                    this.C && (d["X-Goog-AuthUser"] = this.C,
                        g = Al(g, "authuser", this.C));
                    this.N && (d["X-Goog-PageId"] = this.N,
                        g = Al(g, "pageId", this.N));
                    if (f && this.na === f)
                        b && b("stale-auth-token");
                    else {
                        this.h = [];
                        this.g.h && this.g.stop();
                        this.A = 0;
                        var h = sk(e),
                            k;
                        this.G && this.G.rb() && (k = Promise.resolve(Vj(Uint8Array.from(cm(h)))));
                        var m = {
                                url: g,
                                body: h,
                                Oh: 1,
                                gf: d,
                                zj: "POST",
                                withCredentials: this.withCredentials,
                                wf: this.wf
                            },
                            n = function(t) {
                                c.o.reset();
                                bm(c.g, c.o.sa());
                                if (t) {
                                    var y = null;
                                    try {
                                        var G = JSON.parse(t.replace(")]}'\n", ""));
                                        y = new fo(G)
                                    } catch (P) {}
                                    y && (t = Number(_.ph(_.qh(y, 1), "-1")),
                                        0 < t && (c.S = Date.now(),
                                            c.Ca = c.S + t),
                                        y = ho.sd ? ho.h(y, ho.sd, ho.g, !0) : ho.h(y, ho.g, ho.defaultValue, !0)) && (y = _.ph(_.qh(y, 1), -1), -1 != y && (c.da || no(c, y)))
                                }
                                a && a();
                                c.s = 0
                            },
                            p = function(t, y) {
                                var G = _.Zh(e, co, 3),
                                    P = c.o;
                                P.g = Math.min(3E5, 2 * P.g);
                                P.h = Math.min(3E5, P.g + Math.round(.2 * (Math.random() - .5) * P.g));
                                bm(c.g, c.o.sa());
                                401 === t && f && (c.na = f);
                                void 0 === y && (y = 500 <= t && 600 > t || 401 === t || 0 === t);
                                y && (c.h = G.concat(c.h),
                                    c.H || c.g.h || c.g.start());
                                b && b("net-send-failed", t);
                                ++c.s
                            },
                            r = function() {
                                c.ta ? c.ta.send(m, n, p) : c.yb(m, n, p)
                            };
                        k ? k.then(function(t) {
                            m.gf["Content-Encoding"] = "gzip";
                            m.gf["Content-Type"] = "application/binary";
                            m.body = t;
                            m.Oh = 2;
                            r()
                        }, function() {
                            r()
                        }) : r()
                    }
                }
            }
        };
        lo.prototype.L = function() {
            so(this.j, !0);
            this.U && (po(this.j, 3),
                qo(this));
            this.flush();
            so(this.j, !1)
        };
        var qo = function(a) {
                to(a, function(b, c) {
                    b = Al(b, "format", "json");
                    var d = !1;
                    try {
                        d = _.kd().navigator.sendBeacon(b, sk(c))
                    } catch (e) {}
                    a.M && !d && (a.M = !1);
                    return d
                })
            },
            to = function(a, b) {
                if (0 !== a.h.length) {
                    var c = mo(a);
                    for (var d = c.search(Cl), e = 0, f, g = []; 0 <= (f = Bl(c, e, d));)
                        g.push(c.substring(e, f)),
                        e = Math.min(c.indexOf("&", f) + 1 || d, d);
                    g.push(c.slice(e));
                    c = g.join("").replace(Dl, "$1");
                    c = zl(c, "auth", a.ka(), "authuser", a.C || "0");
                    for (d = 0; 10 > d && a.h.length; ++d) {
                        e = a.h.slice(0, 32);
                        f = ro(a.j, e, a.A, a.s);
                        if (!b(c, f)) {
                            ++a.s;
                            break
                        }
                        a.A = 0;
                        a.s = 0;
                        a.h = a.h.slice(e.length)
                    }
                    a.g.h && a.g.stop()
                }
            },
            oo = function() {
                _.td.call(this, "event-logged", void 0)
            };
        _.w(oo, _.td);
        var io = function(a, b) {
                this.j = b = void 0 === b ? !1 : b;
                this.h = this.locale = null;
                this.g = new eo;
                S(this.g, 2, a);
                b || (this.locale = document.documentElement.getAttribute("lang"));
                jo(this, new ao)
            },
            jo = function(a, b) {
                _.$h(a.g, 1, b);
                _.qh(b, 1) || S(b, 1, 1);
                a.j || (b = uo(a),
                    _.qh(b, 5) || S(b, 5, a.locale));
                a.h && (b = uo(a),
                    _.Yh(b, Zn, 9) || _.$h(b, 9, a.h))
            },
            po = function(a, b) {
                em(_.Yh(a.g, ao, 1)) && (a = vo(a),
                    S(a, 1, b))
            },
            so = function(a, b) {
                em(_.Yh(a.g, ao, 1)) && (a = vo(a),
                    S(a, 2, b))
            },
            wo = function(a, b) {
                var c = void 0 === c ? $n : c;
                b(_.kd(), c).then(function(d) {
                    a.h = d;
                    d = uo(a);
                    _.$h(d, 9, a.h);
                    return !0
                }).catch(function() {
                    return !1
                })
            },
            uo = function(a) {
                a = _.Yh(a.g, ao, 1);
                var b = _.Yh(a, dm, 11);
                b || (b = new dm,
                    _.$h(a, 11, b));
                return b
            },
            vo = function(a) {
                a = uo(a);
                var b = _.Yh(a, Yn, 10);
                b || (b = new Yn,
                    S(b, 2, !1),
                    _.$h(a, 10, b));
                return b
            },
            ro = function(a, b, c, d) {
                c = void 0 === c ? 0 : c;
                d = void 0 === d ? 0 : d;
                if (em(_.Yh(a.g, ao, 1))) {
                    var e = vo(a);
                    S(e, 3, d)
                }
                a = _.Dh(a.g, !1);
                a = S(a, 4, Date.now().toString());
                _.mh(_.I(a.ha));
                if (null != b) {
                    d = !!b.length;
                    for (e = 0; e < b.length; e++) {
                        var f = b[e];
                        d = d && !(_.I(f.ha) & 2)
                    }
                    e = _.I(b);
                    f = e | 1;
                    f = (d ? f | 8 : f & -9) | 4;
                    f != e && (b = _.hh(b, f))
                }
                null == b && (b = _.eh);
                a = _.rh(a, 3, b);
                c && S(a, 14, c);
                return a
            };
        _.z(Si, _.A);
        var xo = function(a) {
                a.h = un;
                return a
            },
            zo = function(a) {
                a.o = new yo;
                return a
            },
            Ao = function(a) {
                var b = new Si(1871, "0");
                b.j = "https://translate.googleapis.com/element/log?format=json&hasfast=true";
                b.l = a;
                return b
            },
            Bo = function(a) {
                a.g = !0;
                return a
            },
            Co = function(a) {
                a.C = !0;
                return a
            },
            Do = function(a) {
                var b = new lo(a.D, a.l ? a.l : Wn, a.N, a.H, a.j, !1, !1, a.C, void 0, void 0, a.L ? a.L : void 0);
                ek(a, b);
                a.A && jo(b.j, a.A);
                if (a.h) {
                    var c = a.h,
                        d = uo(b.j);
                    S(d, 7, c)
                }
                a.o && (b.G = a.o);
                a.s && ((c = a.s) ? (b.l || (b.l = new mn),
                    c = sk(c),
                    S(b.l, 4, c)) : b.l && S(b.l, 4, void 0, !1));
                if (a.G) {
                    d = a.G;
                    b.l || (b.l = new mn);
                    c = b.l;
                    if (null == d)
                        d = _.eh;
                    else {
                        var e = _.I(d);
                        1 !== (e & 1) && (Object.isFrozen(d) && (d = Array.prototype.slice.call(d)),
                            _.Wg(d, e | 1))
                    }
                    S(c, 2, d)
                }
                a.g && (b.U = a.g && b.Da);
                a.F && (c = a.F,
                    b.da = !0,
                    no(b, c));
                a.M && wo(b.j, a.M);
                return b
            };
        var M = {},
            Eo = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
        M.assign = function(a) {
            for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
                var c = b.shift();
                if (c) {
                    if ("object" !== typeof c)
                        throw new TypeError("ka`" + c);
                    for (var d in c)
                        Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
                }
            }
            return a
        };
        M.tf = function(a, b) {
            if (a.length === b)
                return a;
            if (a.subarray)
                return a.subarray(0, b);
            a.length = b;
            return a
        };
        var Fo = {
                oc: function(a, b, c, d, e) {
                    if (b.subarray && a.subarray)
                        a.set(b.subarray(c, c + d), e);
                    else
                        for (var f = 0; f < d; f++)
                            a[e + f] = b[c + f]
                },
                cg: function(a) {
                    var b, c;
                    var d = c = 0;
                    for (b = a.length; d < b; d++)
                        c += a[d].length;
                    var e = new Uint8Array(c);
                    d = c = 0;
                    for (b = a.length; d < b; d++) {
                        var f = a[d];
                        e.set(f, c);
                        c += f.length
                    }
                    return e
                }
            },
            Go = {
                oc: function(a, b, c, d, e) {
                    for (var f = 0; f < d; f++)
                        a[e + f] = b[c + f]
                },
                cg: function(a) {
                    return [].concat.apply([], a)
                }
            };
        M.Ej = function() {
            Eo ? (M.mc = Uint8Array,
                M.wb = Uint16Array,
                M.kh = Int32Array,
                M.assign(M, Fo)) : (M.mc = Array,
                M.wb = Array,
                M.kh = Array,
                M.assign(M, Go))
        };
        M.Ej();
        var Ho = !0;
        try {
            new Uint8Array(1)
        } catch (a) {
            Ho = !1
        }
        var Tj = function(a) {
            var b, c, d = a.length,
                e = 0;
            for (b = 0; b < d; b++) {
                var f = a.charCodeAt(b);
                if (55296 === (f & 64512) && b + 1 < d) {
                    var g = a.charCodeAt(b + 1);
                    56320 === (g & 64512) && (f = 65536 + (f - 55296 << 10) + (g - 56320),
                        b++)
                }
                e += 128 > f ? 1 : 2048 > f ? 2 : 65536 > f ? 3 : 4
            }
            var h = new M.mc(e);
            for (b = c = 0; c < e; b++)
                f = a.charCodeAt(b),
                55296 === (f & 64512) && b + 1 < d && (g = a.charCodeAt(b + 1),
                    56320 === (g & 64512) && (f = 65536 + (f - 55296 << 10) + (g - 56320),
                        b++)),
                128 > f ? h[c++] = f : (2048 > f ? h[c++] = 192 | f >>> 6 : (65536 > f ? h[c++] = 224 | f >>> 12 : (h[c++] = 240 | f >>> 18,
                            h[c++] = 128 | f >>> 12 & 63),
                        h[c++] = 128 | f >>> 6 & 63),
                    h[c++] = 128 | f & 63);
            return h
        };
        var Bj = {};
        Bj = function(a, b, c, d) {
            var e = a & 65535 | 0;
            a = a >>> 16 & 65535 | 0;
            for (var f; 0 !== c;) {
                f = 2E3 < c ? 2E3 : c;
                c -= f;
                do
                    e = e + b[d++] | 0,
                    a = a + e | 0;
                while (--f);
                e %= 65521;
                a %= 65521
            }
            return e | a << 16 | 0
        };
        for (var Cj = {}, Io, Jo = [], Ko = 0; 256 > Ko; Ko++) {
            Io = Ko;
            for (var Lo = 0; 8 > Lo; Lo++)
                Io = Io & 1 ? 3988292384 ^ Io >>> 1 : Io >>> 1;
            Jo[Ko] = Io
        }
        Cj = function(a, b, c, d) {
            c = d + c;
            for (a ^= -1; d < c; d++)
                a = a >>> 8 ^ Jo[(a ^ b[d]) & 255];
            return a ^ -1
        };
        var rj = {};
        rj = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
        };
        var gj = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
            jj = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            Sj = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
            vj = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            wj = Array(576);
        Ti(wj);
        var xj = Array(60);
        Ti(xj);
        var ij = Array(512);
        Ti(ij);
        var fj = Array(256);
        Ti(fj);
        var hj = Array(29);
        Ti(hj);
        var kj = Array(30);
        Ti(kj);
        var Pj, Qj, Rj, Oj = !1;
        var Kj;
        Kj = [new Ij(0, 0, 0, 0, function(a, b) {
            var c = 65535;
            for (c > a.fb - 5 && (c = a.fb - 5);;) {
                if (1 >= a.O) {
                    Dj(a);
                    if (0 === a.O && 0 === b)
                        return 1;
                    if (0 === a.O)
                        break
                }
                a.J += a.O;
                a.O = 0;
                var d = a.Va + c;
                if (0 === a.J || a.J >= d)
                    if (a.O = a.J - d,
                        a.J = d,
                        yj(a, !1),
                        0 === a.X.aa)
                        return 1;
                if (a.J - a.Va >= a.Ga - 262 && (yj(a, !1),
                        0 === a.X.aa))
                    return 1
            }
            a.Ra = 0;
            if (4 === b)
                return yj(a, !0),
                    0 === a.X.aa ? 3 : 4;
            a.J > a.Va && yj(a, !1);
            return 1
        }), new Ij(4, 4, 8, 4, Ej), new Ij(4, 5, 16, 8, Ej), new Ij(4, 6, 32, 32, Ej), new Ij(4, 4, 16, 16, Fj), new Ij(8, 16, 32, 32, Fj), new Ij(8, 16, 128, 128, Fj), new Ij(8, 32, 128, 256, Fj), new Ij(32, 128, 258, 1024, Fj), new Ij(32, 258, 258, 4096, Fj)];
        var Nj = {};
        Nj = function() {
            this.input = null;
            this.lc = this.Ia = this.kc = 0;
            this.Yc = null;
            this.xf = this.aa = this.Ac = 0;
            this.msg = "";
            this.state = null;
            this.ve = 2;
            this.W = 0
        };
        var Uj = Object.prototype.toString;
        Mj.prototype.push = function(a, b) {
            var c = this.X,
                d = this.options.Ph;
            if (this.ended)
                return !1;
            var e = b === ~~b ? b : !0 === b ? 4 : 0;
            "string" === typeof a ? c.input = Tj(a) : "[object ArrayBuffer]" === Uj.call(a) ? c.input = new Uint8Array(a) : c.input = a;
            c.kc = 0;
            c.Ia = c.input.length;
            do {
                0 === c.aa && (c.Yc = new M.mc(d),
                    c.Ac = 0,
                    c.aa = d);
                a = Lj(c, e);
                if (1 !== a && 0 !== a)
                    return this.eb(a),
                        this.ended = !0, !1;
                if (0 === c.aa || 0 === c.Ia && (4 === e || 2 === e))
                    if ("string" === this.options.hh) {
                        var f = M.tf(c.Yc, c.Ac);
                        b = f;
                        f = f.length;
                        if (65537 > f && (b.subarray && Ho || !b.subarray))
                            b = String.fromCharCode.apply(null, M.tf(b, f));
                        else {
                            for (var g = "", h = 0; h < f; h++)
                                g += String.fromCharCode(b[h]);
                            b = g
                        }
                        this.Pc.push(b)
                    } else
                        b = M.tf(c.Yc, c.Ac),
                        this.Pc.push(b)
            } while ((0 < c.Ia || 0 === c.aa) && 1 !== a);
            if (4 === e)
                return (c = this.X) && c.state ? (d = c.state.status,
                        42 !== d && 69 !== d && 73 !== d && 91 !== d && 103 !== d && 113 !== d && 666 !== d ? a = sj(c, -2) : (c.state = null,
                            a = 113 === d ? sj(c, -3) : 0)) : a = -2,
                    this.eb(a),
                    this.ended = !0,
                    0 === a;
            2 === e && (this.eb(0),
                c.aa = 0);
            return !0
        };
        Mj.prototype.eb = function(a) {
            0 === a && (this.result = "string" === this.options.hh ? this.Pc.join("") : M.cg(this.Pc));
            this.Pc = [];
            this.ye = a;
            this.msg = this.X.msg
        };
        var yo = function() {};
        yo.prototype.rb = function() {
            try {
                return !!Uint8Array.from
            } catch (a) {
                return !1
            }
        };
        var No = function() {
                this.g = Mo()
            },
            Mo = function() {
                return Do(xo(zo(Bo(Co(Ao(function() {
                    return null
                }))))))
            };
        No.prototype.log = function(a) {
            var b = this.g;
            if (a instanceof co)
                b.log(a);
            else {
                var c = new co;
                a = sk(a);
                c = S(c, 8, a);
                b.log(c)
            }
        };
        var Oo = new No;
        var Po = function(a) {
            _.J.call(this, a)
        };
        _.w(Po, _.J);
        var Qo = function(a) {
            _.J.call(this, a)
        };
        _.w(Qo, _.J);
        var Ro = function(a) {
            _.J.call(this, a, -1, Ro.g)
        };
        _.w(Ro, _.J);
        _.l = Ro.prototype;
        _.l.Db = function() {
            return _.ph(_.qh(this, 16), "")
        };
        _.l.Fc = function(a) {
            S(this, 16, a)
        };
        _.l.ua = function() {
            return _.ph(_.qh(this, 1), "")
        };
        _.l.Aa = function(a) {
            S(this, 1, a)
        };
        _.l.hg = function() {
            return _.ph(_.qh(this, 53), 0)
        };
        Ro.g = [26, 80];
        var So = function(a) {
            var b = "fc";
            if (a.fc && a.hasOwnProperty(b))
                return a.fc;
            b = new a;
            return a.fc = b
        };
        /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
        var To = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        for (var Uo, Vo = Array(36), Wo = 0, Xo, Yo = 0; 36 > Yo; Yo++)
            8 == Yo || 13 == Yo || 18 == Yo || 23 == Yo ? Vo[Yo] = "-" : 14 == Yo ? Vo[Yo] = "4" : (2 >= Wo && (Wo = 33554432 + 16777216 * Math.random() | 0),
                Xo = Wo & 15,
                Wo >>= 4,
                Vo[Yo] = To[19 == Yo ? Xo & 3 | 8 : Xo]);
        Uo = Vo.join("");
        var Zo = function(a) {
                a = void 0 === a ? {} : a;
                this.Le = void 0 === a.Le ? Uo : a.Le;
                this.fd = this.dd = null
            },
            cp = function(a) {
                var b = $o(a, 7);
                ap(a, b);
                bp(b)
            },
            $o = function(a, b) {
                var c = new Ro;
                c = S(c, 50, vn);
                var d = new Qo;
                b = S(d, 1, b);
                b = S(b, 2, Cn);
                a = S(b, 3, a.Le);
                return _.$h(c, 112, a)
            },
            bp = function(a) {
                var b = new co;
                a = sk(a);
                b = S(b, 8, a);
                Oo.log(b)
            },
            ap = function(a, b) {
                b.Fc(a.dd);
                b.Aa(a.fd)
            };
        var dp = function(a) {
                for (var b = {}, c = 0; c < a.length; ++c)
                    b[a[c]] = !0;
                return b
            },
            ep = function(a) {
                this.h = a ? [a] : [];
                this.g = [0];
                this.j = !1
            };
        ep.prototype.register = function(a) {
            if (this.j)
                return a || function() {};
            this.g.push(0);
            var b = this.g.length - 1;
            return (0,
                _.x)(function() {
                this.g[b]++;
                a && a.apply(null, arguments);
                fp(this)
            }, this)
        };
        ep.prototype.delay = function(a) {
            return this.j ? a : (0,
                _.x)(function() {
                if (this.j)
                    a.apply(null, arguments);
                else {
                    var b = arguments;
                    this.h.push(function() {
                        a.apply(null, b)
                    })
                }
            }, this)
        };
        ep.prototype.finish = function() {
            this.g[0] = 1;
            fp(this)
        };
        var fp = function(a) {
                for (var b = 0; b < a.g.length; ++b)
                    if (0 == a.g[b])
                        return;
                a.j = !0;
                for (b = 0; b < a.h.length; ++b) {
                    var c = a.h[b];
                    a.h[b] = null;
                    c.call()
                }
                a.h = [];
                a.g = []
            },
            gp = function(a) {
                this.j = a;
                this.h = this.g = !1
            },
            hp = function(a, b) {
                return (0,
                    _.x)(function() {
                    b && b.apply(null, arguments);
                    this.h ? this.g || (this.j.call(),
                        this.g = !0) : this.g = !0
                }, a)
            };
        gp.prototype.finish = function() {
            this.h || (this.h = !0,
                this.g && this.j.call())
        };
        var ip = function(a, b, c) {
                this.g = b;
                this.A = a;
                this.s = c || 0;
                this.j = this.h = !1
            },
            jp = function(a) {
                a.h || a.o()
            };
        ip.prototype.o = function() {
            (this.h = (this.j = !!this.A.call()) || 0 >= --this.s) ? (this.g.call(null, this.j),
                this.l = 0) : this.l = window.setTimeout((0,
                _.x)(this.o, this), 30)
        };
        ip.prototype.cancel = function() {
            this.l && window.clearTimeout(this.l);
            this.h = !0;
            this.g.call(null, this.j)
        };
        var kp = function(a, b) {
                return function() {
                    a.dispatchEvent(b)
                }
            },
            lp = function(a) {
                a = (0,
                    _.dc)(a).toLowerCase().replace("_", "-");
                if ("zh-cn" == a)
                    return "zh-CN";
                if ("zh-tw" == a)
                    return "zh-TW";
                var b = a.indexOf("-");
                a = 0 <= b ? a.substring(0, b) : a;
                return "zh" == a ? "zh-CN" : a
            },
            mp = function(a) {
                var b = [],
                    c;
                for (c in a)
                    if (a[c] !== Object.prototype[c]) {
                        var d = _.$c(c);
                        if ("array" == _.xb(a[c]))
                            for (var e = 0; e < a[c].length; ++e)
                                b.push(d + "=" + _.$c(a[c][e]));
                        else
                            b.push(d + "=" + _.$c(a[c]))
                    }
                return b.join("&")
            },
            Xj = function(a, b) {
                b = b || {};
                b.nca = a;
                b.client = Cn;
                un && (b.logld = "v" + un);
                var c = new Image;
                c.src = "//" + Kn + "/gen204?" + mp(b);
                c.onload = function() {
                    c.onload = null
                }
            },
            op = function(a, b) {
                if ((_.C || _.hc) && window.location.hostname != document.domain) {
                    np = np ? np + 1 : 1;
                    var c = "f" + np + "_" + _.Db().toString(36);
                    window[c] = function() {
                        window[c] = void 0;
                        a.src = "#";
                        b && window.setTimeout(function() {
                            b()
                        }, 0)
                    };
                    a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" + c + "']();\x3c/script>\"))"
                } else
                    b && b()
            },
            np, pp = function() {
                var a = {};
                try {
                    for (var b in Object.prototype) {
                        var c = Object.prototype[b];
                        delete Object.prototype[b];
                        a[b] = c
                    }
                } catch (d) {
                    return {}
                }
                return a
            },
            qp = function(a) {
                for (var b in a)
                    Object.prototype[b] = a[b]
            },
            rp = function(a) {
                for (var b in a)
                    if (a[b] !== Object.prototype[b])
                        return !1;
                return !0
            },
            sp = function(a, b) {
                return "auto" != a && "zh-CN" != a && a == b
            },
            tp = function() {
                var a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/);
                return a && a[1] ? a[1] : null
            };
        var Wj = null,
            up = null,
            vp = function() {};
        vp.prototype.attach = function(a, b, c) {
            for (var d in c)
                c[d] !== Object.prototype[d] && (b[d] = "function" === typeof c[d] ? c[d] : _.Cb(Yj, a, Number(c[d])))
        };
        var xp = function() {
                Wj && wp();
                Wj = [];
                up = _.D(window, "pagehide", function() {
                    wp()
                })
            },
            wp = function() {
                up && (_.Sd(up),
                    up = null);
                Wj && Wj.length && Xj(Wj.join(""));
                Wj = null
            },
            yp = new vp;
        var zp = function(a) {
            _.J.call(this, a)
        };
        _.w(zp, _.J);
        var ak = _.Gh(zp);
        var Zj;
        var Ap = function(a) {
                this.url = a;
                this.timeout = -1;
                this.j = this.h = "callback";
                this.g = this.dc = null
            },
            Ep = function(a, b) {
                b = void 0 === b ? {} : b;
                a.g = ul();
                var c = new Tl(a.url),
                    d = new Map;
                a.j && d.set(a.j, a.h);
                c.g.o(Xl(b), d);
                Bp(a).then(function() {
                    Cp(a, c.toString())
                }).then(function() {
                    return a.g.promise
                }).then(function() {
                    Dp(a)
                }, function() {
                    Dp(a)
                });
                0 < a.timeout && (a.l = setTimeout(function() {
                    a.g.reject("Timeout!")
                }, a.timeout));
                return a.g.promise
            },
            Cp = function(a, b) {
                var c = new MessageChannel;
                a.dc.contentWindow.postMessage({
                    url: b,
                    callbackName: a.h
                }, "*", [c.port2]);
                c.port1.onmessage = function(d) {
                    var e = {};
                    void 0 !== a.l && (clearTimeout(a.l),
                        a.l = void 0);
                    void 0 === d.data && a.g.reject("Callback called, but no data received");
                    "string" !== typeof d.data && a.g.reject("Exploitation attempt! Data is not a string!");
                    try {
                        e = JSON.parse(d.data)
                    } catch (f) {
                        a.g.reject("Invalid Data received: " + f.message)
                    }
                    a.g.resolve(e)
                }
            },
            Bp = function(a) {
                var b = ul(),
                    c = _.ld(document, "IFRAME");
                if (!c.sandbox)
                    throw Error("la");
                c.sandbox.value = "allow-scripts";
                c.style.display = "none";
                a.dc = c;
                a = bk();
                a = Sk(_.Vc, Vk(Ii(a)));
                c.srcdoc = _.Tc(a);
                a = _.Za("data:text/html;charset=UTF-8;base64," + btoa(_.Tc(a).toString()));
                c.src = _.Wa(a).toString();
                c.addEventListener("load", function() {
                    return b.resolve(c)
                }, !1);
                c.addEventListener("error", function(d) {
                    b.reject(d)
                }, !1);
                document.documentElement.appendChild(c);
                return b.promise
            },
            Dp = function(a) {
                null !== a.dc && (document.documentElement.removeChild(a.dc),
                    a.dc = null)
            };
        var Fp = function(a, b) {
            _.A.call(this);
            this.g = new Tl(a);
            if (b)
                for (var c in b)
                    b[c] !== Object.prototype[c] && this.g.g.set(c, b[c])
        };
        _.w(Fp, _.A);
        Fp.prototype.rb = function() {
            return !0
        };
        Fp.prototype.qb = function() {
            return this.rb()
        };
        Fp.prototype.send = function() {
            return _.Th(null)
        };
        Fp.prototype.cancel = function() {};
        var Gp = function(a, b, c) {
            Fp.call(this, a, b);
            a = this.h = new Ap(this.g);
            a.h = "callback";
            a.j = void 0 === c ? "callback" : c
        };
        _.w(Gp, Fp);
        Gp.prototype.rb = function() {
            return !0
        };
        Gp.prototype.send = function(a) {
            return Ep(this.h, a)
        };
        Gp.prototype.cancel = function(a) {
            a.cancel()
        };
        var Hp = function(a, b) {
            Fp.call(this, a, b);
            this.h = {};
            this.j = 0
        };
        _.w(Hp, Fp);
        Hp.prototype.rb = function() {
            return !0
        };
        Hp.prototype.send = function(a) {
            var b = this,
                c = pp(),
                d = ++this.j,
                e = {},
                f = {};
            "q" in a && (f.q = a.q,
                delete a.q);
            e.vb = new _.ng;
            this.g.h.endsWith(".corp.google.com") && (e.vb.C = !0);
            var g = new _.F(function(h, k) {
                _.D(e.vb, "complete", function() {
                    if (!e.Tf) {
                        if (e.vb.Kd()) {
                            var m = e.vb.Wc();
                            Ip(b, d);
                            return h(m)
                        }
                        b.hj();
                        m = e.vb.Wc();
                        Ip(b, d);
                        return k(m)
                    }
                });
                _.D(e.vb, "timeout", function() {
                    if (!e.Tf)
                        return b.jj(),
                            Ip(b, d),
                            k()
                })
            });
            e.vb.send(this.g.toString() + "&" + mp(a), "POST", mp(f), {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            this.h[d] = e;
            qp(c);
            return g
        };
        Hp.prototype.cancel = function(a) {
            var b = this.h[a];
            b && (b.Tf = !0,
                Ip(this, a))
        };
        var Ip = function(a, b) {
            var c = a.h[b];
            c && (c.vb && (c.vb.T(),
                    c.vb = null),
                delete a.h[b])
        };
        Hp.prototype.K = function() {
            Fp.prototype.K.call(this);
            for (var a in this.h)
                this.cancel(a)
        };
        yp.attach(17170, Hp.prototype, {
            jj: 1,
            hj: 2
        });
        var Jp = function(a, b, c) {
            Fp.call(this, a, c);
            this.j = b.proxyIsSupported;
            this.l = function(d, e, f) {
                return _.Th(b.proxySend(d, e, f))
            };
            this.h = b.proxyCancel
        };
        _.w(Jp, Fp);
        Jp.prototype.rb = function() {
            return this.j()
        };
        Jp.prototype.send = function(a, b) {
            return this.l(this.g.toString(), a, b)
        };
        Jp.prototype.cancel = function(a) {
            this.h(a)
        };
        var Kp = function(a, b) {
            _.A.call(this);
            this.h = a;
            this.g = b ? b : null
        };
        _.w(Kp, _.A);
        Kp.prototype.K = function() {
            _.A.prototype.K.call(this)
        };
        _.Lp = function(a) {
            return a
        };
        var Np = function(a, b, c, d) {
            _.A.call(this);
            var e;
            b ? e = {
                client: b
            } : e = {
                anno: 3,
                client: Cn,
                format: "html",
                v: "1.0"
            };
            c && (e.sp = c);
            e.key = a;
            un && (e.logld = "v" + un);
            this.g = null;
            this.h = {
                Gg: 300
            };
            a = this.o = new Kp(e, d);
            b = En + Hn;
            this.l = a.g ? new Jp(b, a.g, {
                client: Cn
            }) : new Gp(b, {
                client: Cn
            });
            a = this.o;
            if (a.g) {
                if (!a.g)
                    throw Error("ma");
                a = [{
                    wa: new Jp(En + Dn + "/translate_a/t", a.g, a.h),
                    Te: 1900,
                    Hg: 4294967295,
                    Fg: -1,
                    Wg: 0,
                    we: !1
                }]
            } else
                a = [{
                    wa: new Hp(En + Dn + "/translate_a/t", a.h),
                    Te: 30720,
                    Hg: 4294967295,
                    Fg: -1,
                    Wg: 0,
                    we: !1
                }];
            this.s = new Mp(a);
            this.j = !1;
            for (b = 0; b < a.length; ++b)
                this.j = this.j || a[b].wa.rb();
            this.j || this.aj()
        };
        _.w(Np, _.A);
        Np.prototype.initialize = function(a) {
            this.A || (this.A = !0,
                this.s.start((0,
                    _.x)(function(b) {
                    b && (this.g = b,
                        this.h.wa = b.wa);
                    a()
                }, this)))
        };
        Np.prototype.rb = function() {
            return this.j
        };
        Np.prototype.qb = function() {
            return null !== this.g && null !== this.g.wa && this.g.wa.qb()
        };
        var Op = function(a, b, c) {
            var d = {
                q: c.substring(0, a.h.Gg),
                sl: "auto",
                tl: "en"
            };
            return new _.F(function(e, f) {
                a.h.wa.send(d, b).then(function(g) {
                    try {
                        var h = JSON.parse(g);
                        e(h && h[1] || null)
                    } catch (k) {
                        e(null)
                    }
                }, function(g) {
                    return f(g || null)
                })
            })
        };
        Np.prototype.translate = function(a, b, c, d, e, f, g, h) {
            var k = this,
                m = {
                    q: b,
                    sl: c,
                    tl: d
                };
            m = _.Lp(m);
            m.tc = e;
            f && (m.ctt = 1);
            g && (m.dom = 1);
            h && (m.sr = 1);
            m[sn()] = rn(b.join(""));
            return new _.F(function(n, p) {
                k.g.wa.send(m, a).then(function(r) {
                    if (r) {
                        if ("object" !== typeof r)
                            try {
                                r = JSON.parse(r)
                            } catch (G) {
                                k.Zi();
                                p();
                                return
                            }
                        if ("array" != _.xb(r))
                            var t = [
                                [r, 200]
                            ];
                        else if (2 == r.length && "array" != _.xb(r[0]) && "array" != _.xb(r[1]))
                            t = [
                                [r[0], 200, r[1]],
                                [r[1], 200, r[1]]
                            ];
                        else {
                            t = [];
                            for (var y = 0; y < r.length; ++y)
                                t[y] = "array" != _.xb(r[y]) ? [r[y], 200] : [r[y][0], 200, r[y][1]]
                        }
                        n(t)
                    } else
                        p()
                })
            })
        };
        var Pp = function(a, b) {
                b instanceof _.F ? b.then(function(c) {
                    a.g.wa.cancel(c)
                }) : a.g.wa.cancel(b)
            },
            Qp = function(a) {
                return a.g.we ? a.g.Te - (new Tl(a.g.wa.g)).toString().length : a.g.Te
            };
        Np.prototype.K = function() {
            _.A.prototype.K.call(this);
            this.g && (this.g.wa.T(),
                this.g.wa = null);
            this.h.wa = null;
            this.l.T();
            this.l = null
        };
        yp.attach(7361, Np.prototype, {
            aj: function() {
                Xj("te_au")
            }
        });
        yp.attach(47504, Np.prototype, {
            Zi: function() {
                Xj("te_afbr")
            }
        });
        var Mp = function(a) {
            this.h = a
        };
        Mp.prototype.start = function(a) {
            this.g = a;
            this.j = 0;
            Rp(this)
        };
        var Rp = function(a) {
            if (a.j >= a.h.length)
                a.g(null);
            else {
                var b = a.h[a.j++];
                b.wj ? jp(new ip((0,
                    _.x)(b.wa.qb, b.wa), (0,
                    _.x)(function(c) {
                    c ? this.g(b) : Rp(this)
                }, a), b.wj)) : b.wa.qb() ? a.g(b) : Rp(a)
            }
        };
        var Sp = dp("A ABBR ACRONYM B BASEFONT BDO BIG CITE DFN EM FONT I INPUT NOBR LABEL Q S SMALL SPAN STRIKE STRONG SUB SUP TEXTAREA TT U VAR".split(" ")),
            Tp = dp("APPLET AREA BASE FRAME FRAMESET HR LINK META NOFRAMES NOSCRIPT INPUT TEXTAREA TITLE".split(" ")),
            Up = dp("BR CODE IMG KBD MAP OBJECT PARAM SCRIPT STYLE WBR svg".split(" ")),
            Vp = dp(["submit", "button"]);
        var Xp = function(a, b, c, d, e) {
            this.h = !!b;
            this.node = null;
            this.g = 0;
            this.vf = !1;
            this.j = !c;
            a && Wp(this, a, d);
            this.depth = void 0 != e ? e : this.g || 0;
            this.h && (this.depth *= -1)
        };
        _.z(Xp, _.ff);
        var Wp = function(a, b, c, d) {
                if (a.node = b)
                    a.g = "number" === typeof c ? c : 1 != a.node.nodeType ? 0 : a.h ? -1 : 1;
                "number" === typeof d && (a.depth = d)
            },
            Yp = function(a) {
                var b = a.h ? -1 : 1;
                a.g == b && (a.g = -1 * b,
                    a.depth += a.g * (a.h ? -1 : 1))
            };
        Xp.prototype.next = function() {
            if (this.vf) {
                if (!this.node || this.j && 0 == this.depth)
                    return _.gf;
                var a = this.node;
                var b = this.h ? -1 : 1;
                if (this.g == b) {
                    var c = this.h ? a.lastChild : a.firstChild;
                    c ? Wp(this, c) : Wp(this, a, -1 * b)
                } else
                    (c = this.h ? a.previousSibling : a.nextSibling) ? Wp(this, c) : Wp(this, a.parentNode, -1 * b);
                this.depth += this.g * (this.h ? -1 : 1)
            } else
                this.vf = !0;
            return (a = this.node) ? {
                value: a,
                done: !1
            } : _.gf
        };
        var $p = function(a, b) {
                this.j = _.C ? [] : null;
                this.h = [];
                this.done = !1;
                for (this.g = new Xp(a, !1, b, 3 === a.nodeType ? 0 : 1, 1); a = a.parentNode;)
                    Zp(this, a, !0);
                this.h.push(!1);
                this.h.reverse();
                for (a = 1; a < this.h.length; ++a)
                    null == this.h[a] && (this.h[a] = this.h[a - 1])
            },
            Zp = function(a, b, c) {
                c = void 0 === c ? !1 : c;
                var d = (b.style && b.style.whiteSpace || "").substring(0, 3);
                "pre" === d || !d && "PRE" === b.tagName ? a.h.push(!0) : d && "pre" !== d ? a.h.push(!1) : c ? a.h.push(null) : a.h.push(a.h[a.h.length - 1])
            },
            aq = function(a) {
                return !!a.h[a.h.length - 1]
            };
        $p.prototype.node = function() {
            return this.g.node
        };
        $p.prototype.depth = function() {
            return this.g.depth
        };
        $p.prototype.next = function() {
            try {
                this.j && 0 < this.j.length && -1 === this.g.g && this.j.length--; -
                1 === this.g.g && this.h.length--;
                if (this.j && 0 < this.j.length && 1 !== this.g.g && !this.g.node.nextSibling)
                    Wp(this.g, this.j[this.j.length - 1], -1, this.g.depth - 1);
                else {
                    if (this.g.next().done) {
                        this.done = !0;
                        return
                    }
                    this.j && 1 === this.g.g && this.j.push(this.g.node)
                }
                1 === this.g.g && this.g.vf && Zp(this, this.g.node)
            } catch (a) {
                this.gj(a),
                    this.done = !0
            }
        };
        yp.attach(52754, $p.prototype, {
            gj: 1
        });
        var bq = function() {
                return "[msg_undefined]"
            },
            V = {};
        (function() {
            var a = function(b) {
                return function() {
                    return b
                }
            };
            V = {
                Mf: a(0),
                lh: a(1),
                Bf: a(2),
                Bk: a(3),
                Gh: a(4),
                Df: a(5),
                yh: a(45),
                zh: a(6),
                Bh: a(7),
                me: a(8),
                Hh: a(9),
                Uk: a(10),
                Kh: a(11),
                Ch: a(12),
                Pk: a(13),
                Eh: a(14),
                Ok: a(15),
                Dh: a(16),
                Xk: a(17),
                Ih: a(18),
                Uj: a(19),
                zk: a(20),
                mh: a(21),
                Qk: a(22),
                Jk: a(23),
                Ik: a(24),
                Gk: a(25),
                Vk: a(26),
                Tk: a(27),
                Hk: a(28),
                Ah: a(29),
                Jh: a(30),
                Tj: a(32),
                Rj: a(33),
                Yk: a(34),
                dk: a(35),
                Yj: a(36),
                ck: a(37),
                Fh: a(38),
                rk: a(39),
                Sj: a(40),
                Ak: a(41),
                Jf: a(46),
                Ck: a(47),
                lk: a(48),
                kk: a(49),
                jk: a(50),
                Wk: a(51)
            }
        })();
        V.Ol = function() {
            return _.H[0]
        };
        V.gi = function() {
            return _.H[1]
        };
        V.pl = function() {
            return _.H[2]
        };
        V.Cl = function() {
            return _.H[3]
        };
        V.Pl = function() {
            return _.H[4]
        };
        V.vl = function() {
            return _.H[5]
        };
        V.xl = function() {
            return _.H[45]
        };
        V.yl = function() {
            return _.H[6]
        };
        V.Dl = function() {
            return _.H[7]
        };
        V.ni = function() {
            return _.H[8]
        };
        V.Tl = function() {
            return _.H[9]
        };
        V.Rl = function() {
            return _.H[10]
        };
        V.Yl = function() {
            return _.H[11]
        };
        V.El = function() {
            return _.H[12]
        };
        V.Ll = function() {
            return _.H[13]
        };
        V.Ml = function() {
            return _.H[14]
        };
        V.Kl = function() {
            return _.H[15]
        };
        V.Fl = function() {
            return _.H[16]
        };
        V.Vl = function() {
            return _.H[17]
        };
        V.Ul = function() {
            return _.H[18]
        };
        V.nl = function() {
            return _.H[19]
        };
        V.Bl = function() {
            return _.H[20]
        };
        V.ki = function() {
            return _.H[41]
        };
        V.ul = function() {
            return _.H[21]
        };
        V.mi = function() {
            return _.H[22]
        };
        V.Jl = function() {
            return _.H[23]
        };
        V.Il = function() {
            return _.H[24]
        };
        V.Gl = function() {
            return _.H[25]
        };
        V.Sl = function() {
            return _.H[26]
        };
        V.Ql = function() {
            return _.H[27]
        };
        V.Hl = function() {
            return _.H[28]
        };
        V.Al = function() {
            return _.H[29]
        };
        V.Wl = function() {
            return _.H[30]
        };
        V.zl = function() {
            return _.H[39]
        };
        V.ml = function() {
            return _.H[32]
        };
        V.kl = function() {
            return _.H[33]
        };
        V.ll = function() {
            return _.H[40]
        };
        V.Xl = function() {
            return _.H[34]
        };
        V.rl = function() {
            return _.H[35]
        };
        V.ol = function() {
            return _.H[36]
        };
        V.ql = function() {
            return _.H[37]
        };
        V.Nl = function() {
            return _.H[38]
        };
        V.wl = function() {
            return _.H[46]
        };
        V.li = function() {
            return _.H[47]
        };
        V.ji = function() {
            return _.H[48]
        };
        V.ii = function() {
            return _.H[49]
        };
        V.hi = function() {
            return _.H[50]
        };
        V.oi = function() {
            return _.H[51]
        };
        var cq = V.gi,
            dq = V.ni,
            eq = V.mi,
            fq = V.ki,
            gq = V.li,
            hq = V.ji,
            iq = V.ii,
            jq = V.hi,
            kq = V.oi;
        var lq = function(a, b) {
                a = {
                    Se: a.Se,
                    dir: a.dir,
                    de: a.de
                };
                var c = Km["key_a:"];
                c || (c = Km["key_a:"]);
                b = (c ? c : Lm)(a, b);
                return (0,
                    _.L)(b)
            },
            mq = function(a) {
                var b = a.Se;
                a = a.dir;
                return (0,
                    _.L)('<div id="goog-gt-" class="skiptranslate ' + U("VIpgJd-yAWNEb-L7lbkb") + '" dir="' + U(a) + '"><div style="padding: 8px;"><div><div class="' + U("VIpgJd-yAWNEb-l4eHX") + '"><img src="' + U(ln(b)) + '" width="20" height="20" alt="Google ' + U(dq()) + '"/></div></div></div><div style="padding: 8px; float: left; width: 100%;"><h1 class="' + U("VIpgJd-yAWNEb-r4nke") + " " + U("VIpgJd-yAWNEb-mrxPge") + '">' + Ym(fq()) + '</h1></div><div style="padding: 8px;"><div class="' + U("VIpgJd-yAWNEb-nVMfcd-fmcmS") + '"></div></div><div class="' + U("VIpgJd-yAWNEb-cGMI2b") + '" style="padding: 8px;"><div class="' + U("VIpgJd-yAWNEb-Z0Arqf-PLDbbf") + '"></div><div class="' + U("VIpgJd-yAWNEb-fw42Ze-Z0Arqf-haAclf") + '"><hr style="color: #ccc; background-color: #ccc; height: 1px; border: none;"/><div class="' + U("VIpgJd-yAWNEb-Z0Arqf-H9tDt") + '"></div></div></div><div class="' + U("VIpgJd-yAWNEb-jOfkMb-Ne3sFf") + '"></div></div>')
            },
            nq = Jm["key_a:"];
        if (void 0 === nq || 0 > nq)
            Jm["key_a:"] = 0,
            Km["key_a:"] = mq;
        else if (0 == nq)
            throw Error("na`a`");
        var oq = function() {
                return (0,
                    _.L)('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>')
            },
            pq = function(a) {
                var b = a.Lh,
                    c = a.method,
                    d = a.bi;
                a = a.dir;
                b = '<div class="' + U("VIpgJd-yAWNEb-L4Nn5e-I9GLp") + '"><div class="form-message"></div><form class="' + U("VIpgJd-yAWNEb-Z0Arqf-I9GLp") + '" action="' + U(jn(b)) + '" method="' + U(c) + '"><div class="form-buttons" style="text-align:' + (Hm(a, "rtl") ? "right" : "left") + '"><input class="' + U("VIpgJd-yAWNEb-Z0Arqf-sFeBqf") + '" type="button" value="' + U(eq()) + '"><input class="activity-cancel" type="button" value="' + U(cq()) + '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
                c = d.length;
                for (a = 0; a < c; a++)
                    b += '<input type="hidden" name="' + U(d[a]) + '"/>';
                return (0,
                    _.L)(b + "</div></form></div>")
            },
            tq = function(a) {
                var b = a.dir;
                a = a.de;
                b = '<div id="goog-gt-tt" class="' + U("VIpgJd-yAWNEb-L7lbkb") + ' skiptranslate" style="border-radius: 12px; margin: 0 0 0 -23px; padding: 0; font-family: \'Google Sans\', Arial, sans-serif;" data-id=""><div id="goog-gt-vt" class="' + U("VIpgJd-yAWNEb-hvhgNd") + '"><div class="' + ("rtl" == b ? " " + U("VIpgJd-yAWNEb-hvhgNd-l4eHX-SIsrTd") + " " : " " + U("VIpgJd-yAWNEb-hvhgNd-l4eHX-i3jM8c")) + '"><img src="https://fonts.gstatic.com/s/i/productlogos/translate/v14/24px.svg" width="24" height="24" alt=""/></div><div class="' + ("rtl" == b ? "  " + U("VIpgJd-yAWNEb-hvhgNd-k77Iif-SIsrTd") + " " : " " + U("VIpgJd-yAWNEb-hvhgNd-k77Iif-i3jM8c")) + '"><div class="' + U("VIpgJd-yAWNEb-hvhgNd-IuizWc") + '" dir="' + U(b) + '">' + Ym(fq()) + '</div><div id="goog-gt-original-text" class="' + U("VIpgJd-yAWNEb-nVMfcd-fmcmS") + " " + U("VIpgJd-yAWNEb-hvhgNd-axAV1") + '"></div></div><div class="' + U("VIpgJd-yAWNEb-hvhgNd-N7Eqid") + " " + U(b) + '"><div class="' + U("VIpgJd-yAWNEb-hvhgNd-N7Eqid-B7I4Od") + " " + U(b) + '" dir="' + U(b) + '"><div class="' + U("VIpgJd-yAWNEb-hvhgNd-UTujCb") + '">' + Ym(gq()) + '</div><div class="' + U("VIpgJd-yAWNEb-hvhgNd-eO9mKe") + '">' + Ym(hq()) + '</div></div><div class="' + U("VIpgJd-yAWNEb-hvhgNd-xgov5") + " " + U(b) + '">' + ("rtl" == b ? qq() + rq() : rq() + qq()) + "</div></div>" + sq(a) + "</div></div>";
                return (0,
                    _.L)(b)
            },
            uq = function(a) {
                var b = a.dir;
                a = a.de;
                b = '<div id="goog-gt-tt" class="' + U("VIpgJd-yAWNEb-L7lbkb") + ' skiptranslate" style="border-radius: 12px; margin: 0 0 0 -23px; padding: 0; font-family: \'Google Sans\', Arial, sans-serif;" data-id=""><div id="goog-gt-tvt" class="' + U("VIpgJd-yAWNEb-wdjgF") + '"><div class="' + ("rtl" == b ? " " + U("VIpgJd-yAWNEb-hvhgNd-l4eHX-SIsrTd") + " " : " " + U("VIpgJd-yAWNEb-hvhgNd-l4eHX-i3jM8c")) + '"><img src="https://fonts.gstatic.com/s/i/productlogos/translate/v14/24px.svg" width="24" height="24" alt=""/></div><div class="' + ("rtl" == b ? "  " + U("VIpgJd-yAWNEb-hvhgNd-k77Iif-SIsrTd") + " " : " " + U("VIpgJd-yAWNEb-hvhgNd-k77Iif-i3jM8c")) + '"><div class="' + U("VIpgJd-yAWNEb-hvhgNd-IuizWc") + '" dir="' + U(b) + '">' + Ym(fq()) + '</div><div id="goog-gt-original-text" class="' + U("VIpgJd-yAWNEb-nVMfcd-fmcmS") + " " + U("VIpgJd-yAWNEb-hvhgNd-axAV1") + '"></div><hr class="' + U("VIpgJd-yAWNEb-hvhgNd-fAt1Sb") + '" align="center" noshade><div class="' + U("VIpgJd-yAWNEb-hvhgNd-yVJrbd") + '" dir="' + U(b) + '">' + Ym(kq()) + '</div><div id="goog-gt-translation" class="' + U("VIpgJd-yAWNEb-hvhgNd-IkhkZd") + '"></div></div><div class="' + U("VIpgJd-yAWNEb-hvhgNd-N7Eqid") + " " + U(b) + '"><div class="' + U("VIpgJd-yAWNEb-hvhgNd-N7Eqid-B7I4Od") + " " + U(b) + '" dir="' + U(b) + '"><div class="' + U("VIpgJd-yAWNEb-hvhgNd-UTujCb") + '">' + Ym(gq()) + '</div><div class="' + U("VIpgJd-yAWNEb-hvhgNd-eO9mKe") + '">' + Ym(hq()) + '</div></div><div class="' + U("VIpgJd-yAWNEb-hvhgNd-xgov5") + " " + U(b) + '">' + ("rtl" == b ? qq() + rq() : rq() + qq()) + "</div></div>" + sq(a) + "</div></div>";
                return (0,
                    _.L)(b)
            },
            sq = function(a) {
                return (0,
                    _.L)('<div id="goog-gt-votingHiddenPane" class="' + U("VIpgJd-yAWNEb-hvhgNd-aXYTce") + '"><form id="goog-gt-votingForm" action="' + U(jn(a)) + '" method="post" target="votingFrame" class="' + U("VIpgJd-yAWNEb-hvhgNd-aXYTce") + '"><input type="text" name="sl" id="goog-gt-votingInputSrcLang"/><input type="text" name="tl" id="goog-gt-votingInputTrgLang"/><input type="text" name="query" id="goog-gt-votingInputSrcText"/><input type="text" name="gtrans" id="goog-gt-votingInputTrgText"/><input type="text" name="vote" id="goog-gt-votingInputVote"/></form><iframe name="votingFrame" frameBorder=0></iframe></div>')
            },
            rq = function() {
                var a = iq();
                a = '<button id="goog-gt-thumbUpButton" type="button" class="' + U("VIpgJd-yAWNEb-hvhgNd-bgm6sf") + '" title="' + U(a) + '" aria-label="' + U(a) + '" aria-pressed="false"><span id="goog-gt-thumbUpIcon">';
                var b = (0,
                    _.L)('<svg width="' + U(24) + '" height="' + U(24) + '" viewBox="' + U("0 0 24 24") + '" focusable="false" class="' + U("VIpgJd-yAWNEb-hvhgNd-THI6Vb") + " " + U("NMm5M") + '"' + Qm() + '><path d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7H2v13h16c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM7 18H4V9h3v9zm14-7l-3 7H9V8l4.34-4.34L12 9h9v2z"/></svg>');
                a = a + b + '</span><span id="goog-gt-thumbUpIconFilled">';
                b = (0,
                    _.L)('<svg width="' + U(24) + '" height="' + U(24) + '" viewBox="' + U("0 0 24 24") + '" focusable="false" class="' + U("VIpgJd-yAWNEb-hvhgNd-THI6Vb") + " " + U("NMm5M") + '"' + Qm() + '><path d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7v13h11c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM5 7H1v13h4V7z"/></svg>');
                return (0,
                    _.L)(a + b + "</span></button>")
            },
            qq = function() {
                var a = jq();
                a = '<button id="goog-gt-thumbDownButton" type="button" class="' + U("VIpgJd-yAWNEb-hvhgNd-bgm6sf") + '" title="' + U(a) + '" aria-label="' + U(a) + '" aria-pressed="false"><span id="goog-gt-thumbDownIcon">';
                var b = (0,
                    _.L)('<svg width="' + U(24) + '" height="' + U(24) + '" viewBox="' + U("0 0 24 24") + '" focusable="false" class="' + U("VIpgJd-yAWNEb-hvhgNd-THI6Vb") + " " + U("NMm5M") + '"' + Qm() + '><path d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7h5V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zM17 6h3v9h-3V6zM3 13l3-7h9v10l-4.34 4.34L12 15H3v-2z"/></svg>');
                a = a + b + '</span><span id="goog-gt-thumbDownIconFilled">';
                b = (0,
                    _.L)('<svg width="' + U(24) + '" height="' + U(24) + '" viewBox="' + U("0 0 24 24") + '" focusable="false" class="' + U("VIpgJd-yAWNEb-hvhgNd-THI6Vb") + " " + U("NMm5M") + '"' + Qm() + '><path d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zm16 0h4V4h-4v13z"/></svg>');
                return (0,
                    _.L)(a + b + "</span></button>")
            };
        var vq = function() {};
        vk(vq);
        vq.prototype.g = 0;
        var O = function(a) {
            _.E.call(this);
            this.h = a || _.ed();
            this.ka = wq;
            this.Y = null;
            this.bb = !1;
            this.o = null;
            this.L = void 0;
            this.N = this.H = this.F = null;
            this.ta = !1
        };
        _.z(O, _.E);
        O.prototype.Ca = vq.Pb();
        var wq = null,
            xq = function(a, b) {
                switch (a) {
                    case 1:
                        return b ? "disable" : "enable";
                    case 2:
                        return b ? "highlight" : "unhighlight";
                    case 4:
                        return b ? "activate" : "deactivate";
                    case 8:
                        return b ? "select" : "unselect";
                    case 16:
                        return b ? "check" : "uncheck";
                    case 32:
                        return b ? "focus" : "blur";
                    case 64:
                        return b ? "open" : "close"
                }
                throw Error("oa");
            };
        O.prototype.ib = function() {
            return this.Y || (this.Y = ":" + (this.Ca.g++).toString(36))
        };
        var yq = function(a, b) {
            if (a.F && a.F.N) {
                var c = a.F.N,
                    d = a.Y;
                d in c && delete c[d];
                c = a.F.N;
                if (null !== c && b in c)
                    throw Error("y`" + b);
                c[b] = a
            }
            a.Y = b
        };
        O.prototype.B = function() {
            return this.o
        };
        var zq = function(a, b) {
                return a.o ? hk(b, a.o || a.h.g) : null
            },
            Aq = function(a) {
                a.L || (a.L = new _.$f(a));
                return a.L
            };
        O.prototype.Xd = function(a) {
            if (this.F && this.F != a)
                throw Error("qa");
            O.P.Xd.call(this, a)
        };
        O.prototype.R = function() {
            this.o = _.Hh(this.h, "DIV")
        };
        O.prototype.Ma = function(a) {
            Bq(this, a)
        };
        var Bq = function(a, b, c) {
                if (a.bb)
                    throw Error("ra");
                a.o || a.R();
                b ? b.insertBefore(a.o, c || null) : a.h.g.body.appendChild(a.o);
                a.F && !a.F.bb || a.ra()
            },
            Cq = function(a, b) {
                if (a.bb)
                    throw Error("ra");
                if (b && a.Ff(b)) {
                    a.ta = !0;
                    var c = _.dd(b);
                    a.h && a.h.g == c || (a.h = _.ed(b));
                    a.ya(b);
                    a.ra()
                } else
                    throw Error("sa");
            };
        _.l = O.prototype;
        _.l.Ff = function() {
            return !0
        };
        _.l.ya = function(a) {
            this.o = a
        };
        _.l.ra = function() {
            this.bb = !0;
            Dq(this, function(a) {
                !a.bb && a.B() && a.ra()
            })
        };
        _.l.oa = function() {
            Dq(this, function(a) {
                a.bb && a.oa()
            });
            this.L && _.dg(this.L);
            this.bb = !1
        };
        _.l.K = function() {
            this.bb && this.oa();
            this.L && (this.L.T(),
                delete this.L);
            Dq(this, function(a) {
                a.T()
            });
            !this.ta && this.o && il(this.o);
            this.F = this.o = this.N = this.H = null;
            O.P.K.call(this)
        };
        var W = function(a, b) {
                return a.ib() + "." + b
            },
            Dq = function(a, b) {
                a.H && a.H.forEach(b, void 0)
            };
        O.prototype.cf = function(a) {
            for (var b = []; this.H && 0 != this.H.length;) {
                var c = b,
                    d = c.push,
                    e = this.H ? this.H[0] || null : null,
                    f = a;
                if (e) {
                    var g = "string" === typeof e ? e : e.ib();
                    this.N && g ? (e = this.N,
                        e = (null !== e && g in e ? e[g] : void 0) || null) : e = null;
                    if (g && e) {
                        var h = this.N;
                        g in h && delete h[g];
                        _.va(this.H, e);
                        f && (e.oa(),
                            e.o && il(e.o));
                        f = e;
                        if (null == f)
                            throw Error("pa");
                        f.F = null;
                        O.P.Xd.call(f, null)
                    }
                }
                if (!e)
                    throw Error("ta");
                d.call(c, e)
            }
            return b
        };
        _.z(dk, O);
        _.l = dk.prototype;
        _.l.Sd = function(a) {
            this.l = a
        };
        _.l.gd = function() {
            if (!this.bb)
                throw Error("ua");
            if (!this.l)
                throw Error("va");
        };
        _.l.Bc = function() {};
        _.l.T = function() {
            this.Xa() || (dk.P.T.call(this),
                delete this.Pd)
        };
        _.l.Fa = function() {
            return this.l
        };
        var Gq = function() {
                _.E.call(this);
                this.j = "closure_frame" + Eq++;
                this.h = [];
                Fq[this.j] = this
            },
            Hq;
        _.z(Gq, _.E);
        var Fq = {},
            Eq = 0,
            Iq = function(a, b) {
                var c = _.ed(a);
                wl(b, function(d, e) {
                    Array.isArray(d) || (d = [d]);
                    _.Zb(d, function(f) {
                        f = c.R("INPUT", {
                            type: "hidden",
                            name: e,
                            value: f
                        });
                        a.appendChild(f)
                    })
                })
            };
        _.l = Gq.prototype;
        _.l.ma = null;
        _.l.ab = null;
        _.l.uc = null;
        _.l.pj = 0;
        _.l.pb = !1;
        _.l.ae = !1;
        _.l.Oe = null;
        _.l.ec = null;
        _.l.send = function(a, b, c, d) {
            if (this.pb)
                throw Error("wa");
            a = new Tl(a);
            b = b ? b.toUpperCase() : "GET";
            c && (c = _.bd(),
                a.g.set("zx", c));
            Hq || (Hq = fl("FORM"),
                Hq.acceptCharset = "utf-8",
                c = Hq.style,
                c.position = "absolute",
                c.visibility = "hidden",
                c.top = c.left = "-10px",
                c.width = c.height = "10px",
                c.overflow = "hidden",
                document.body.appendChild(Hq));
            this.ma = Hq;
            "GET" == b && Iq(this.ma, a.g);
            d && Iq(this.ma, d);
            Wk(this.ma, _.Jc(a.toString()));
            this.ma.method = b;
            Jq(this);
            Kq(this)
        };
        var Lq = function(a, b) {
            if (a.pb)
                throw Error("wa");
            var c = new Tl(b.action);
            a.ma = b;
            Wk(a.ma, c.toString());
            Jq(a)
        };
        _.l = Gq.prototype;
        _.l.abort = function() {
            if (this.pb) {
                var a = Mq(this);
                if (a)
                    if (_.yd(a))
                        a.Ya && _.Fd(a.Ya);
                    else if (a = _.Nd(a)) {
                    var b = 0,
                        c;
                    for (c in a.g)
                        for (var d = a.g[c].concat(), e = 0; e < d.length; ++e)
                            _.Sd(d[e]) && ++b
                }
                this.ae = this.pb = !1;
                this.dispatchEvent("abort");
                Nq(this)
            }
        };
        _.l.K = function() {
            this.pb && this.abort();
            Gq.P.K.call(this);
            this.ab && Oq(this);
            Kq(this);
            delete this.o;
            this.Oe = this.ma = null;
            delete Fq[this.j]
        };
        _.l.Kd = function() {
            return this.ae
        };
        _.l.isActive = function() {
            return this.pb
        };
        _.l.Wc = function() {
            return this.Oe
        };
        var Jq = function(a) {
            a.pb = !0;
            a.uc = a.j + "_" + (a.pj++).toString(36);
            a.ab = _.ed(a.ma).R("IFRAME", {
                name: a.uc,
                id: a.uc
            });
            _.C && 7 > Number(_.zc) && Wk(a.ab, _.Jc(_.Mh(_.Lh('javascript:""'))));
            var b = a.ab.style;
            b.visibility = "hidden";
            b.width = b.height = "10px";
            b.display = "none";
            _.lc ? b.marginTop = b.marginLeft = "-10px" : (b.position = "absolute",
                b.top = b.left = "-10px");
            _.ed(a.ma).g.body.appendChild(a.ab);
            b = a.uc + "_inner";
            var c = kl(a.ab);
            if (document.baseURI) {
                var d = al(b);
                d = _.Uc('<head><base href="' + al(document.baseURI) + '"></head><body><iframe id="' + d + '" name="' + d + '"></iframe>')
            } else
                d = al(b),
                d = _.Uc('<body><iframe id="' + d + '" name="' + d + '"></iframe>');
            c.write(_.Tc(d));
            _.D(c.getElementById(b), "load", a.g, !1, a);
            d = _.Sh("TEXTAREA", a.ma);
            for (var e = 0, f = d.length; e < f; e++) {
                var g = d[e].value;
                sl(d[e]) != g && (_.qd(d[e], g),
                    d[e].value = g)
            }
            d = c.importNode(a.ma, !0);
            d.target = b;
            d.action = a.ma.action;
            c.body.appendChild(d);
            e = _.Sh("SELECT", a.ma);
            f = _.Sh("SELECT", d);
            g = 0;
            for (var h = e.length; g < h; g++)
                for (var k = _.Sh("OPTION", e[g]), m = _.Sh("OPTION", f[g]), n = 0, p = k.length; n < p; n++)
                    m[n].selected = k[n].selected;
            e = _.Sh("INPUT", a.ma);
            f = _.Sh("INPUT", d);
            g = 0;
            for (h = e.length; g < h; g++)
                if ("file" == e[g].type && e[g].value != f[g].value) {
                    a.ma.target = b;
                    d = a.ma;
                    break
                }
            try {
                a.s = !1,
                    d.submit(),
                    c.close(),
                    _.kc && _.mg(a.A, 250, a)
            } catch (r) {
                _.Rd(c.getElementById(b), "load", a.g, !1, a),
                    c.close(),
                    Pq(a)
            }
        };
        Gq.prototype.g = function() {
            _.Rd(Mq(this), "load", this.g, !1, this);
            try {
                var a = this.ab ? kl(Mq(this)) : null;
                this.pb = !1;
                try {
                    var b = a.body;
                    this.Oe = b.textContent || b.innerText
                } catch (e) {
                    var c = 1
                }
                var d;
                c || "function" != typeof this.o || (d = this.o(a)) && (c = 4);
                c ? Pq(this) : (this.ae = !0,
                    this.dispatchEvent("complete"),
                    this.dispatchEvent("success"),
                    Nq(this))
            } catch (e) {
                Pq(this)
            }
        };
        var Pq = function(a) {
                a.s || (a.ae = !1,
                    a.pb = !1,
                    a.dispatchEvent("complete"),
                    a.dispatchEvent("error"),
                    Nq(a),
                    a.s = !0)
            },
            Nq = function(a) {
                Oq(a);
                Kq(a);
                a.ma = null;
                a.dispatchEvent("ready")
            },
            Oq = function(a) {
                var b = a.ab;
                b && (b.onreadystatechange = null,
                    b.onload = null,
                    b.onerror = null,
                    a.h.push(b));
                a.ec && (_.q.clearTimeout(a.ec),
                    a.ec = null);
                _.kc ? a.ec = _.mg(a.l, 2E3, a) : a.l();
                a.ab = null;
                a.uc = null
            };
        Gq.prototype.l = function() {
            this.ec && (_.q.clearTimeout(this.ec),
                this.ec = null);
            for (; 0 != this.h.length;) {
                var a = this.h.pop();
                il(a)
            }
        };
        var Kq = function(a) {
                a.ma && a.ma == Hq && _.od(a.ma)
            },
            Mq = function(a) {
                return a.ab ? kl(a.ab).getElementById(a.uc + "_inner") : null
            };
        Gq.prototype.A = function() {
            if (this.pb) {
                var a = this.ab ? kl(Mq(this)) : null;
                a && !_.gc(a, "documentUri") ? (_.Rd(Mq(this), "load", this.g, !1, this),
                    Pq(this)) : _.mg(this.A, 250, this)
            }
        };
        var Sq = function(a, b, c, d, e, f) {
                if (_.nc && e)
                    return Qq(a);
                if (e && !d)
                    return !1;
                if (!_.kc) {
                    "number" === typeof b && (b = Rq(b));
                    var g = 17 == b || 18 == b || _.nc && 91 == b;
                    if ((!c || _.nc) && g || _.nc && 16 == b && (d || f))
                        return !1
                }
                if ((_.lc || _.ic) && d && c)
                    switch (a) {
                        case 220:
                        case 219:
                        case 221:
                        case 192:
                        case 186:
                        case 189:
                        case 187:
                        case 188:
                        case 190:
                        case 191:
                        case 192:
                        case 222:
                            return !1
                    }
                if (_.C && d && b == a)
                    return !1;
                switch (a) {
                    case 13:
                        return _.kc ? f || e ? !1 : !(c && d) : !0;
                    case 27:
                        return !(_.lc || _.ic || _.kc)
                }
                return _.kc && (d || e || f) ? !1 : Qq(a)
            },
            Qq = function(a) {
                if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (_.lc || _.ic) && 0 == a)
                    return !0;
                switch (a) {
                    case 32:
                    case 43:
                    case 63:
                    case 64:
                    case 107:
                    case 109:
                    case 110:
                    case 111:
                    case 186:
                    case 59:
                    case 189:
                    case 187:
                    case 61:
                    case 188:
                    case 190:
                    case 191:
                    case 192:
                    case 222:
                    case 219:
                    case 220:
                    case 221:
                    case 163:
                    case 58:
                        return !0;
                    case 173:
                        return _.kc;
                    default:
                        return !1
                }
            },
            Rq = function(a) {
                if (_.kc)
                    a = Tq(a);
                else if (_.nc && _.lc)
                    switch (a) {
                        case 93:
                            a = 91
                    }
                return a
            },
            Tq = function(a) {
                switch (a) {
                    case 61:
                        return 187;
                    case 59:
                        return 186;
                    case 173:
                        return 189;
                    case 224:
                        return 91;
                    case 0:
                        return 224;
                    default:
                        return a
                }
            };
        var Uq = function(a, b, c, d) {
            _.wd.call(this, d);
            this.type = "key";
            this.keyCode = a;
            this.charCode = b;
            this.repeat = c
        };
        _.z(Uq, _.wd);
        var Vq = function(a, b) {
            _.E.call(this);
            a && this.attach(a, b)
        };
        _.z(Vq, _.E);
        _.l = Vq.prototype;
        _.l.nc = null;
        _.l.Ld = null;
        _.l.Me = null;
        _.l.Md = null;
        _.l.Sa = -1;
        _.l.Jb = -1;
        _.l.ne = !1;
        var Wq = {
                3: 13,
                12: 144,
                63232: 38,
                63233: 40,
                63234: 37,
                63235: 39,
                63236: 112,
                63237: 113,
                63238: 114,
                63239: 115,
                63240: 116,
                63241: 117,
                63242: 118,
                63243: 119,
                63244: 120,
                63245: 121,
                63246: 122,
                63247: 123,
                63248: 44,
                63272: 46,
                63273: 36,
                63275: 35,
                63276: 33,
                63277: 34,
                63289: 144,
                63302: 45
            },
            Xq = {
                Up: 38,
                Down: 40,
                Left: 37,
                Right: 39,
                Enter: 13,
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
                "U+007F": 46,
                Home: 36,
                End: 35,
                PageUp: 33,
                PageDown: 34,
                Insert: 45
            },
            Yq = _.nc && _.kc;
        _.l = Vq.prototype;
        _.l.Ci = function(a) {
            if (_.lc || _.ic)
                if (17 == this.Sa && !a.ctrlKey || 18 == this.Sa && !a.altKey || _.nc && 91 == this.Sa && !a.metaKey)
                    this.Jb = this.Sa = -1; -
            1 == this.Sa && (a.ctrlKey && 17 != a.keyCode ? this.Sa = 17 : a.altKey && 18 != a.keyCode ? this.Sa = 18 : a.metaKey && 91 != a.keyCode && (this.Sa = 91));
            Sq(a.keyCode, this.Sa, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? (this.Jb = Rq(a.keyCode),
                Yq && (this.ne = a.altKey)) : this.handleEvent(a)
        };
        _.l.Ei = function(a) {
            this.Jb = this.Sa = -1;
            this.ne = a.altKey
        };
        _.l.handleEvent = function(a) {
            var b = a.g,
                c = b.altKey;
            if (_.C && "keypress" == a.type) {
                var d = this.Jb;
                var e = 13 != d && 27 != d ? b.keyCode : 0
            } else
                (_.lc || _.ic) && "keypress" == a.type ? (d = this.Jb,
                    e = 0 <= b.charCode && 63232 > b.charCode && Qq(d) ? b.charCode : 0) : ("keypress" == a.type ? (Yq && (c = this.ne),
                        b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode,
                            e = 0) : (d = this.Jb,
                            e = b.charCode) : (d = b.keyCode || this.Jb,
                            e = b.charCode || 0)) : (d = b.keyCode || this.Jb,
                        e = b.charCode || 0),
                    _.nc && 63 == e && 224 == d && (d = 191));
            var f = d = Rq(d);
            d ? 63232 <= d && d in Wq ? f = Wq[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in Xq && (f = Xq[b.keyIdentifier]);
            if (!_.kc || "keypress" != a.type || Sq(f, this.Sa, a.shiftKey, a.ctrlKey, c, a.metaKey))
                a = f == this.Sa,
                this.Sa = f,
                b = new Uq(f, e, a, b),
                b.altKey = c,
                this.dispatchEvent(b)
        };
        _.l.B = function() {
            return this.nc
        };
        _.l.attach = function(a, b) {
            this.Md && Zq(this);
            this.nc = a;
            this.Ld = _.D(this.nc, "keypress", this, b);
            this.Me = _.D(this.nc, "keydown", this.Ci, b, this);
            this.Md = _.D(this.nc, "keyup", this.Ei, b, this)
        };
        var Zq = function(a) {
            a.Ld && (_.Sd(a.Ld),
                _.Sd(a.Me),
                _.Sd(a.Md),
                a.Ld = null,
                a.Me = null,
                a.Md = null);
            a.nc = null;
            a.Sa = -1;
            a.Jb = -1
        };
        Vq.prototype.K = function() {
            Vq.P.K.call(this);
            Zq(this)
        };
        var $q;
        var ar = function(a, b, c) {
            Array.isArray(c) && (c = c.join(" "));
            var d = "aria-" + b;
            "" === c || void 0 == c ? ($q || (c = {},
                    $q = (c.atomic = !1,
                        c.autocomplete = "none",
                        c.dropeffect = "none",
                        c.haspopup = !1,
                        c.live = "off",
                        c.multiline = !1,
                        c.multiselectable = !1,
                        c.orientation = "vertical",
                        c.readonly = !1,
                        c.relevant = "additions text",
                        c.required = !1,
                        c.sort = "none",
                        c.busy = !1,
                        c.disabled = !1,
                        c.hidden = !1,
                        c.invalid = "false",
                        c)),
                c = $q,
                b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
        };
        var br = function(a) {
                return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
            },
            cr = function(a) {
                return a.classList ? a.classList : br(a).match(/\S+/g) || []
            },
            dr = function(a, b) {
                "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
            },
            er = function(a, b) {
                return a.classList ? a.classList.contains(b) : _.ta(cr(a), b)
            },
            fr = function(a, b) {
                if (a.classList)
                    a.classList.add(b);
                else if (!er(a, b)) {
                    var c = br(a);
                    dr(a, c + (0 < c.length ? " " + b : b))
                }
            },
            gr = function(a, b) {
                if (a.classList)
                    Array.prototype.forEach.call(b, function(e) {
                        fr(a, e)
                    });
                else {
                    var c = {};
                    Array.prototype.forEach.call(cr(a), function(e) {
                        c[e] = !0
                    });
                    Array.prototype.forEach.call(b, function(e) {
                        c[e] = !0
                    });
                    b = "";
                    for (var d in c)
                        b += 0 < b.length ? " " + d : d;
                    dr(a, b)
                }
            },
            hr = function(a, b) {
                a.classList ? a.classList.remove(b) : er(a, b) && dr(a, Array.prototype.filter.call(cr(a), function(c) {
                    return c != b
                }).join(" "))
            },
            ir = function(a, b) {
                a.classList ? Array.prototype.forEach.call(b, function(c) {
                    hr(a, c)
                }) : dr(a, Array.prototype.filter.call(cr(a), function(c) {
                    return !_.ta(b, c)
                }).join(" "))
            };
        var jr = function() {},
            kr;
        vk(jr);
        var lr = {
            button: "pressed",
            checkbox: "checked",
            menuitem: "selected",
            menuitemcheckbox: "checked",
            menuitemradio: "checked",
            radio: "checked",
            tab: "selected",
            treeitem: "selected"
        };
        _.l = jr.prototype;
        _.l.yd = function() {};
        _.l.R = function(a) {
            return a.h.R("DIV", mr(this, a).join(" "), a.pa())
        };
        _.l.fe = function() {
            return !0
        };
        _.l.Wb = function(a, b) {
            b.id && yq(a, b.id);
            b && b.firstChild ? nr(a, b.firstChild.nextSibling ? _.wa(b.childNodes) : b.firstChild) : a.Xb = null;
            var c = 0,
                d = this.Ob(),
                e = this.Ob(),
                f = !1,
                g = !1,
                h = _.wa(cr(b));
            h.forEach(function(k) {
                f || k != d ? g || k != e ? c |= or(this, k) : g = !0 : (f = !0,
                    e == d && (g = !0));
                1 == or(this, k) && b.hasAttribute("tabindex") && ol(b) && pl(b, !1)
            }, this);
            a.qa = c;
            f || (h.push(d),
                e == d && (g = !0));
            g || h.push(e);
            (a = a.Ae) && h.push.apply(h, a);
            f && g && !a || dr(b, h.join(" "));
            return b
        };
        _.l.zg = function(a) {
            null == a.ka && (a.ka = vm(a.bb ? a.o : a.h.g.body));
            a.ka && this.he(a.B(), !0);
            a.isEnabled() && this.Ec(a, a.isVisible())
        };
        var pr = function(a, b) {
            if (a = a.yd()) {
                var c = b.getAttribute("role") || null;
                a != c && (a ? b.setAttribute("role", a) : b.removeAttribute("role"))
            }
        };
        _.l = jr.prototype;
        _.l.hd = function(a, b) {
            var c = !b;
            b = _.C ? a.getElementsByTagName("*") : null;
            if (_.ci) {
                if (c = c ? "none" : "",
                    a.style && (a.style[_.ci] = c),
                    b) {
                    a = 0;
                    for (var d; d = b[a]; a++)
                        d.style && (d.style[_.ci] = c)
                }
            } else if (_.C && (c = c ? "on" : "",
                    a.setAttribute("unselectable", c),
                    b))
                for (a = 0; d = b[a]; a++)
                    d.setAttribute("unselectable", c)
        };
        _.l.he = function(a, b) {
            var c = this.Ob() + "-SIsrTd";
            (a = a.B ? a.B() : a) && (b ? gr : ir)(a, [c])
        };
        _.l.ge = function(a) {
            var b;
            return a.Oa & 32 && (b = a.B()) ? b.hasAttribute("tabindex") && ol(b) : !1
        };
        _.l.Ec = function(a, b) {
            var c;
            if (a.Oa & 32 && (c = a.B())) {
                if (!b && a.qa & 32) {
                    try {
                        c.blur()
                    } catch (d) {}
                    a.qa & 32 && a.lg(null)
                }
                (c.hasAttribute("tabindex") && ol(c)) != b && pl(c, b)
            }
        };
        _.l.fa = function(a, b) {
            T(a, b);
            a && ar(a, "hidden", !b)
        };
        _.l.Kc = function(a, b, c) {
            var d = a.B();
            if (d) {
                var e = qr(this, b);
                e && (a = a.B ? a.B() : a) && (c ? gr : ir)(a, [e]);
                this.nb(d, b, c)
            }
        };
        _.l.nb = function(a, b, c) {
            kr || (kr = {
                1: "disabled",
                8: "selected",
                16: "checked",
                64: "expanded"
            });
            b = kr[b];
            var d = a.getAttribute("role") || null;
            d && (d = lr[d] || b,
                b = "checked" == b || "selected" == b ? d : b);
            b && ar(a, b, c)
        };
        _.l.Gf = function(a, b) {
            if (a && (_.od(a),
                    b))
                if ("string" === typeof b)
                    _.qd(a, b);
                else {
                    var c = function(d) {
                        if (d) {
                            var e = _.dd(a);
                            a.appendChild("string" === typeof d ? e.createTextNode(d) : d)
                        }
                    };
                    Array.isArray(b) ? b.forEach(c) : !_.da(b) || "nodeType" in b ? c(b) : _.wa(b).forEach(c)
                }
        };
        _.l.Ob = function() {
            return "VIpgJd-bMcfAe"
        };
        var mr = function(a, b) {
                var c = a.Ob(),
                    d = [c],
                    e = a.Ob();
                e != c && d.push(e);
                c = b.qa;
                for (e = []; c;) {
                    var f = c & -c;
                    e.push(qr(a, f));
                    c &= ~f
                }
                d.push.apply(d, e);
                (a = b.Ae) && d.push.apply(d, a);
                return d
            },
            qr = function(a, b) {
                a.g || rr(a);
                return a.g[b]
            },
            or = function(a, b) {
                if (!a.h) {
                    a.g || rr(a);
                    var c = a.g,
                        d = {},
                        e;
                    for (e in c)
                        d[c[e]] = e;
                    a.h = d
                }
                a = parseInt(a.h[b], 10);
                return isNaN(a) ? 0 : a
            },
            rr = function(a) {
                var b = a.Ob();
                a.g = {
                    1: b + "-OWB6Me",
                    2: b + "-ZmdkE",
                    4: b + "-auswjd",
                    8: b + "-gk6SMd",
                    16: b + "-barxie",
                    32: b + "-XpnDCe",
                    64: b + "-FNFY6c"
                }
            };
        var sr = function() {};
        _.z(sr, jr);
        vk(sr);
        _.l = sr.prototype;
        _.l.yd = function() {
            return "button"
        };
        _.l.nb = function(a, b, c) {
            switch (b) {
                case 8:
                case 16:
                    ar(a, "pressed", c);
                    break;
                default:
                case 64:
                case 1:
                    sr.P.nb.call(this, a, b, c)
            }
        };
        _.l.R = function(a) {
            var b = sr.P.R.call(this, a);
            this.qf(b, a.Fa());
            var c = a.sa();
            c && this.Na(b, c);
            a.Oa & 16 && this.nb(b, 16, !!(a.qa & 16));
            return b
        };
        _.l.Wb = function(a, b) {
            b = sr.P.Wb.call(this, a, b);
            var c = this.sa(b);
            a.s = c;
            a.M = this.Fa(b);
            a.Oa & 16 && this.nb(b, 16, !!(a.qa & 16));
            return b
        };
        _.l.sa = function() {};
        _.l.Na = function() {};
        _.l.Fa = function(a) {
            return a.title
        };
        _.l.qf = function(a, b) {
            a && (b ? a.title = b : a.removeAttribute("title"))
        };
        _.l.Ob = function() {
            return "VIpgJd-LgbsSe"
        };
        var tr = {
            ke: "mousedown",
            le: "mouseup",
            Kf: "mousecancel",
            wk: "mousemove",
            yk: "mouseover",
            xk: "mouseout",
            uk: "mouseenter",
            vk: "mouseleave"
        };
        var ur = function(a, b) {
                if (!a)
                    throw Error("xa`" + a);
                if ("function" !== typeof b)
                    throw Error("ya`" + b);
            },
            vr = {};
        var X = function(a, b, c) {
            O.call(this, c);
            if (!b) {
                for (b = this.constructor; b;) {
                    var d = _.za(b);
                    if (d = vr[d])
                        break;
                    b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor
                }
                b = d ? "function" === typeof d.Pb ? d.Pb() : new d : null
            }
            this.g = b;
            this.Xb = void 0 !== a ? a : null
        };
        _.z(X, O);
        _.l = X.prototype;
        _.l.Xb = null;
        _.l.qa = 0;
        _.l.Oa = 39;
        _.l.qe = 255;
        _.l.ob = !0;
        _.l.Ae = null;
        _.l.Ge = !0;
        _.l.ld = !1;
        var xr = function(a) {
            a.bb && 0 != a.Ge && wr(a, !1);
            a.Ge = !1
        };
        X.prototype.R = function() {
            var a = this.g.R(this);
            this.o = a;
            pr(this.g, a);
            this.ld || this.g.hd(a, !1);
            this.isVisible() || this.g.fa(a, !1)
        };
        X.prototype.Ff = function(a) {
            return this.g.fe(a)
        };
        X.prototype.ya = function(a) {
            this.o = a = this.g.Wb(this, a);
            pr(this.g, a);
            this.ld || this.g.hd(a, !1);
            this.ob = "none" != a.style.display
        };
        X.prototype.ra = function() {
            X.P.ra.call(this);
            var a = this.g,
                b = this.o;
            this.isVisible() || ar(b, "hidden", !this.isVisible());
            this.isEnabled() || a.nb(b, 1, !this.isEnabled());
            this.Oa & 8 && a.nb(b, 8, !!(this.qa & 8));
            this.Oa & 16 && a.nb(b, 16, !!(this.qa & 16));
            this.Oa & 64 && a.nb(b, 64, !!(this.qa & 64));
            this.g.zg(this);
            this.Oa & -2 && (this.Ge && wr(this, !0),
                this.Oa & 32 && (a = this.B())) && (b = this.A || (this.A = new Vq),
                b.attach(a),
                Aq(this).I(b, "key", this.Di).I(a, "focus", this.oh).I(a, "blur", this.lg))
        };
        var wr = function(a, b) {
            var c = Aq(a),
                d = a.B();
            b ? (c.I(d, tr.ke, a.Fe).I(d, [tr.le, tr.Kf], a.He).I(d, "mouseover", a.U).I(d, "mouseout", a.da),
                a.G != _.Hb && c.I(d, "contextmenu", a.G),
                _.C && !a.C && (a.C = new yr(a),
                    ek(a, a.C))) : (c.mb(d, tr.ke, a.Fe).mb(d, [tr.le, tr.Kf], a.He).mb(d, "mouseover", a.U).mb(d, "mouseout", a.da),
                a.G != _.Hb && c.mb(d, "contextmenu", a.G),
                _.C && (_.ca(a.C),
                    a.C = null))
        };
        X.prototype.oa = function() {
            X.P.oa.call(this);
            this.A && Zq(this.A);
            this.isVisible() && this.isEnabled() && this.g.Ec(this, !1)
        };
        X.prototype.K = function() {
            X.P.K.call(this);
            this.A && (this.A.T(),
                delete this.A);
            delete this.g;
            this.C = this.Ae = this.Xb = null
        };
        X.prototype.pa = function() {
            return this.Xb
        };
        X.prototype.l = function(a) {
            this.g.Gf(this.B(), a);
            this.Xb = a
        };
        var nr = function(a, b) {
            a.Xb = b
        };
        _.l = X.prototype;
        _.l.Yg = function(a) {
            this.l(a)
        };
        _.l.isVisible = function() {
            return this.ob
        };
        _.l.fa = function(a, b) {
            if (b || this.ob != a && this.dispatchEvent(a ? "show" : "hide"))
                (b = this.B()) && this.g.fa(b, a),
                this.isEnabled() && this.g.Ec(this, a),
                this.ob = a
        };
        _.l.isEnabled = function() {
            return !(this.qa & 1)
        };
        _.l.tb = function(a) {
            var b = this.F;
            b && "function" == typeof b.isEnabled && !b.isEnabled() || !zr(this, 1, !a) || (a || (Ar(this, !1),
                    Br(this, !1)),
                this.isVisible() && this.g.Ec(this, a),
                Cr(this, 1, !a, !0))
        };
        var Br = function(a, b) {
            zr(a, 2, b) && Cr(a, 2, b)
        };
        X.prototype.isActive = function() {
            return !!(this.qa & 4)
        };
        var Ar = function(a, b) {
                zr(a, 4, b) && Cr(a, 4, b)
            },
            Cr = function(a, b, c, d) {
                d || 1 != b ? a.Oa & b && c != !!(a.qa & b) && (a.g.Kc(a, b, c),
                    a.qa = c ? a.qa | b : a.qa & ~b) : a.tb(!c)
            },
            Dr = function(a) {
                if (a.bb && a.qa & 32)
                    throw Error("ra");
                a.qa & 32 && Cr(a, 32, !1);
                a.Oa &= -33
            },
            Er = function(a, b) {
                return !!(a.qe & b) && !!(a.Oa & b)
            },
            Fr = function(a) {
                a.qe &= -256
            },
            zr = function(a, b, c) {
                return !!(a.Oa & b) && !!(a.qa & b) != c && (!(0 & b) || a.dispatchEvent(xq(b, c))) && !a.Xa()
            };
        X.prototype.U = function(a) {
            !Gr(a, this.B()) && this.dispatchEvent("enter") && this.isEnabled() && Er(this, 2) && Br(this, !0)
        };
        X.prototype.da = function(a) {
            !Gr(a, this.B()) && this.dispatchEvent("leave") && (Er(this, 4) && Ar(this, !1),
                Er(this, 2) && Br(this, !1))
        };
        X.prototype.G = _.Hb;
        var Gr = function(a, b) {
            return !!a.relatedTarget && _.pd(b, a.relatedTarget)
        };
        _.l = X.prototype;
        _.l.Fe = function(a) {
            this.isEnabled() && (Er(this, 2) && Br(this, !0),
                0 != a.g.button || _.nc && a.ctrlKey || (Er(this, 4) && Ar(this, !0),
                    this.g && this.g.ge(this) && this.B().focus()));
            this.ld || 0 != a.g.button || _.nc && a.ctrlKey || a.preventDefault()
        };
        _.l.He = function(a) {
            this.isEnabled() && (Er(this, 2) && Br(this, !0),
                this.isActive() && this.Vd(a) && Er(this, 4) && Ar(this, !1))
        };
        _.l.Vd = function(a) {
            if (Er(this, 16)) {
                var b = !(this.qa & 16);
                zr(this, 16, b) && Cr(this, 16, b)
            }
            Er(this, 8) && zr(this, 8, !0) && Cr(this, 8, !0);
            Er(this, 64) && (b = !(this.qa & 64),
                zr(this, 64, b) && Cr(this, 64, b));
            b = new _.td("action", this);
            a && (b.altKey = a.altKey,
                b.ctrlKey = a.ctrlKey,
                b.metaKey = a.metaKey,
                b.shiftKey = a.shiftKey,
                b.j = a.j);
            return this.dispatchEvent(b)
        };
        _.l.oh = function() {
            Er(this, 32) && zr(this, 32, !0) && Cr(this, 32, !0)
        };
        _.l.lg = function() {
            Er(this, 4) && Ar(this, !1);
            Er(this, 32) && zr(this, 32, !1) && Cr(this, 32, !1)
        };
        _.l.Di = function(a) {
            return this.isVisible() && this.isEnabled() && this.Ee(a) ? (a.preventDefault(),
                a.stopPropagation(), !0) : !1
        };
        _.l.Ee = function(a) {
            return 13 == a.keyCode && this.Vd(a)
        };
        if ("function" !== typeof X)
            throw Error("za`" + X);
        if ("function" !== typeof jr)
            throw Error("Aa`" + jr);
        var Hr = _.za(X);
        vr[Hr] = jr;
        ur("VIpgJd-bMcfAe", function() {
            return new X(null)
        });
        var yr = function(a) {
            _.A.call(this);
            this.h = a;
            this.g = !1;
            this.j = new _.$f(this);
            ek(this, this.j);
            a = this.h.o;
            this.j.I(a, tr.ke, this.o).I(a, tr.le, this.s).I(a, "click", this.l)
        };
        _.z(yr, _.A);
        var Ir = !_.C || 9 <= Number(_.Cc);
        yr.prototype.o = function() {
            this.g = !1
        };
        yr.prototype.s = function() {
            this.g = !0
        };
        var Jr = function(a, b) {
            if (!Ir)
                return a.button = 0,
                    a.type = b,
                    a;
            var c = document.createEvent("MouseEvents");
            c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
            return c
        };
        yr.prototype.l = function(a) {
            if (this.g)
                this.g = !1;
            else {
                var b = a.g,
                    c = b.button,
                    d = b.type,
                    e = Jr(b, "mousedown");
                this.h.Fe(new _.wd(e, a.currentTarget));
                e = Jr(b, "mouseup");
                this.h.He(new _.wd(e, a.currentTarget));
                Ir || (b.button = c,
                    b.type = d)
            }
        };
        yr.prototype.K = function() {
            this.h = null;
            yr.P.K.call(this)
        };
        var Kr = function() {};
        _.z(Kr, sr);
        vk(Kr);
        _.l = Kr.prototype;
        _.l.yd = function() {};
        _.l.R = function(a) {
            xr(a);
            Fr(a);
            Dr(a);
            var b = a.h,
                c = b.R,
                d = {
                    "class": mr(this, a).join(" "),
                    disabled: !a.isEnabled(),
                    title: a.Fa() || "",
                    value: a.sa() || ""
                };
            a = (a = a.pa()) ? ("string" === typeof a ? a : Array.isArray(a) ? a.map(sl).join("") : rl(a)).replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "") : "";
            return c.call(b, "BUTTON", d, a || "")
        };
        _.l.fe = function(a) {
            return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
        };
        _.l.Wb = function(a, b) {
            xr(a);
            Fr(a);
            Dr(a);
            if (b.disabled) {
                var c = qr(this, 1);
                fr(b, c)
            }
            return Kr.P.Wb.call(this, a, b)
        };
        _.l.zg = function(a) {
            Aq(a).I(a.B(), "click", a.Vd)
        };
        _.l.hd = function() {};
        _.l.he = function() {};
        _.l.ge = function(a) {
            return a.isEnabled()
        };
        _.l.Ec = function() {};
        _.l.Kc = function(a, b, c) {
            Kr.P.Kc.call(this, a, b, c);
            (a = a.B()) && 1 == b && (a.disabled = c)
        };
        _.l.sa = function(a) {
            return a.value
        };
        _.l.Na = function(a, b) {
            a && (a.value = b)
        };
        _.l.nb = function() {};
        var Lr = function(a, b, c) {
            X.call(this, a, b || Kr.Pb(), c)
        };
        _.z(Lr, X);
        _.l = Lr.prototype;
        _.l.sa = function() {
            return this.s
        };
        _.l.Na = function(a) {
            this.s = a;
            this.g.Na(this.B(), a)
        };
        _.l.Fa = function() {
            return this.M
        };
        _.l.qf = function(a) {
            this.M = a;
            this.g.qf(this.B(), a)
        };
        _.l.K = function() {
            Lr.P.K.call(this);
            delete this.s;
            delete this.M
        };
        _.l.ra = function() {
            Lr.P.ra.call(this);
            if (this.Oa & 32) {
                var a = this.B();
                a && Aq(this).I(a, "keyup", this.Ee)
            }
        };
        _.l.Ee = function(a) {
            return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Vd(a) : 32 == a.keyCode
        };
        ur("VIpgJd-LgbsSe", function() {
            return new Lr(null)
        });
        var Mr = function(a, b) {
            O.call(this);
            this.C = a || "";
            this.j = null;
            this.A = [];
            this.g = null;
            this.D = b || "GET";
            this.l = this.s = null
        };
        _.w(Mr, O);
        Mr.prototype.R = function() {
            var a = {
                Lh: this.C,
                method: this.D,
                bi: this.A,
                dir: _.zf.test(vn) ? "rtl" : "ltr"
            };
            this.ya(Oi(pq, a))
        };
        Mr.prototype.ya = function(a) {
            this.o = a;
            this.g = zq(this, "VIpgJd-yAWNEb-Z0Arqf-I9GLp");
            a = zq(this, "VIpgJd-yAWNEb-Z0Arqf-sFeBqf");
            this.l = new Lr("");
            Cq(this.l, a);
            a = zq(this, "activity-cancel");
            this.j = new Lr("");
            Cq(this.j, a)
        };
        Mr.prototype.ra = function() {
            var a = Aq(this);
            a.I(this.l, "action", (0,
                _.x)(this.G, this));
            a.I(this.j, "action", this.dispatchEvent.bind(this, "cancelled"))
        };
        Mr.prototype.G = function() {
            var a = !0;
            this.s && (a = this.s());
            a && (a = new Gq,
                _.D(a, "success", function() {
                    this.dispatchEvent("successful")
                }),
                _.D(a, "error", function() {
                    this.dispatchEvent("failed")
                }),
                Lq(a, this.g));
            this.dispatchEvent("submitted")
        };
        var Nr = function(a, b) {
                for (var c in b)
                    a.g[c] && (a.g[c].value = b[c])
            },
            Or = function(a, b) {
                return a.g[b] ? a.g[b].value : ""
            };
        Mr.prototype.K = function() {
            this.l = this.g = this.j = null;
            O.prototype.K.call(this)
        };
        var Pr = function(a, b) {
            a.s = b
        };
        var Qr = function() {};
        _.z(Qr, jr);
        vk(Qr);
        _.l = Qr.prototype;
        _.l.yd = function() {};
        _.l.Wb = function(a, b) {
            xr(a);
            Fr(a);
            Dr(a);
            Qr.P.Wb.call(this, a, b);
            a.l(b.value);
            return b
        };
        _.l.R = function(a) {
            xr(a);
            Fr(a);
            Dr(a);
            return a.h.R("TEXTAREA", {
                "class": mr(this, a).join(" "),
                disabled: !a.isEnabled()
            }, a.pa() || "")
        };
        _.l.fe = function(a) {
            return "TEXTAREA" == a.tagName
        };
        _.l.he = function() {};
        _.l.ge = function(a) {
            return a.isEnabled()
        };
        _.l.Ec = function() {};
        _.l.Kc = function(a, b, c) {
            Qr.P.Kc.call(this, a, b, c);
            (a = a.B()) && 1 == b && (a.disabled = c)
        };
        _.l.nb = function() {};
        _.l.Gf = function(a, b) {
            a && (a.value = b)
        };
        _.l.Ob = function() {
            return "VIpgJd-B7I4Od"
        };
        var Rr = function(a, b, c) {
            X.call(this, a, b || Qr.Pb(), c);
            xr(this);
            this.ld = !0;
            (b = this.B()) && this.g.hd(b, !0);
            this.rc = "" != a;
            a || (this.Xb = "")
        };
        _.z(Rr, X);
        var Sr = !(_.C && !(11 <= Number(_.Cc)));
        _.l = Rr.prototype;
        _.l.vc = !1;
        _.l.Hd = !1;
        _.l.rc = !1;
        _.l.Hb = 0;
        _.l.Eg = 0;
        _.l.Xe = 0;
        _.l.tg = !1;
        _.l.Qd = !1;
        _.l.kf = !1;
        _.l.jf = !1;
        _.l.Cc = "";
        var Tr = function(a) {
                return a.j.top + a.j.bottom + a.S.top + a.S.bottom
            },
            Ur = function(a) {
                var b = a.Xe,
                    c = a.B();
                b && c && a.Qd && (b -= Tr(a));
                return b
            },
            Wr = function(a) {
                a.Xe = 50;
                Vr(a)
            },
            Xr = function(a) {
                a.Eg = 50;
                Vr(a)
            };
        Rr.prototype.Na = function(a) {
            this.l(String(a))
        };
        Rr.prototype.sa = function() {
            return this.B().value != this.Cc || Yr(this) || this.rc ? this.B().value : ""
        };
        Rr.prototype.l = function(a) {
            Rr.P.l.call(this, a);
            this.rc = "" != a;
            Vr(this)
        };
        Rr.prototype.tb = function(a) {
            Rr.P.tb.call(this, a);
            this.B().disabled = !a
        };
        var Vr = function(a) {
                a.B() && a.D()
            },
            Yr = function(a) {
                return "placeholder" in a.B()
            },
            Zr = function(a) {
                a.Cc && (Yr(a) ? a.B().placeholder = a.Cc : !a.B() || a.rc || a.Hd || (fr(a.B(), "B7I4Od-LwH6nd-YPqjbf"),
                    a.B().value = a.Cc))
            };
        Rr.prototype.ra = function() {
            Rr.P.ra.call(this);
            var a = this.B();
            _.K(a, {
                overflowY: "hidden",
                overflowX: "auto",
                boxSizing: "border-box",
                MsBoxSizing: "border-box",
                WebkitBoxSizing: "border-box",
                MozBoxSizing: "border-box"
            });
            this.j = Bm(a);
            this.S = Em(a);
            Aq(this).I(a, "scroll", this.D).I(a, "focus", this.D).I(a, "keyup", this.D).I(a, "mouseup", this.Da).I(a, "blur", this.na);
            Zr(this);
            Vr(this)
        };
        var $r = function(a) {
                if (!a.tg) {
                    var b = a.B().cloneNode(!1);
                    _.K(b, {
                        position: "absolute",
                        height: "auto",
                        top: "-9999px",
                        margin: "0",
                        padding: "1px",
                        border: "1px solid #000",
                        overflow: "hidden"
                    });
                    a.h.g.body.appendChild(b);
                    var c = b.scrollHeight;
                    b.style.padding = "10px";
                    var d = b.scrollHeight;
                    a.kf = d > c;
                    b.style.borderWidth = "10px";
                    a.jf = b.scrollHeight > d;
                    b.style.height = "100px";
                    100 != b.offsetHeight && (a.Qd = !0);
                    il(b);
                    a.tg = !0
                }
                b = a.B();
                isNaN(a.j.top) && (a.j = Bm(b),
                    a.S = Em(b));
                c = a.B().scrollHeight;
                var e = a.B();
                d = e.offsetHeight - e.clientHeight;
                if (!a.kf) {
                    var f = a.j;
                    d -= f.top + f.bottom
                }
                a.jf || (e = Em(e),
                    d -= e.top + e.bottom);
                c += 0 < d ? d : 0;
                a.Qd ? c -= Tr(a) : (a.kf || (d = a.j,
                        c += d.top + d.bottom),
                    a.jf || (a = Em(b),
                        c += a.top + a.bottom));
                return c
            },
            as = function(a, b) {
                a.Hb != b && (a.Hb = b,
                    a.B().style.height = b + "px")
            },
            bs = function(a) {
                var b = a.B();
                b.style.height = "auto";
                var c = b.value.match(/\n/g) || [];
                b.rows = c.length + 1;
                a.Hb = 0
            };
        Rr.prototype.na = function() {
            Yr(this) || (this.Hd = !1,
                "" == this.B().value && (this.rc = !1,
                    Zr(this)))
        };
        Rr.prototype.D = function(a) {
            if (!this.vc) {
                var b = this.B();
                !Yr(this) && a && "focus" == a.type && (b.value == this.Cc && this.Cc && !this.Hd && (hr(b, "B7I4Od-LwH6nd-YPqjbf"),
                        b.value = ""),
                    this.Hd = !0,
                    this.rc = "" != b.value);
                var c = !1;
                this.vc = !0;
                a = this.Hb;
                if (b.scrollHeight) {
                    var d = !1,
                        e = !1,
                        f = $r(this),
                        g = b.offsetHeight,
                        h = Ur(this);
                    var k = this.Eg;
                    var m = this.B();
                    k && m && this.Qd && (k -= Tr(this));
                    h && f < h ? (as(this, h),
                        d = !0) : k && f > k ? (as(this, k),
                        b.style.overflowY = "",
                        e = !0) : g != f ? as(this, f) : this.Hb || (this.Hb = f);
                    d || e || !Sr || (c = !0)
                } else
                    bs(this);
                this.vc = !1;
                c && (b = this.B(),
                    this.vc || (this.vc = !0,
                        (e = b.scrollHeight) ? (f = $r(this),
                            c = Ur(this),
                            c && f <= c || (d = this.j,
                                b.style.paddingTop = d.top + 1 + "px",
                                $r(this) == f && (b.style.paddingTop = d.top + e + "px",
                                    b.scrollTop = 0,
                                    e = $r(this) - e,
                                    e >= c ? as(this, e) : as(this, c)),
                                b.style.paddingTop = d.top + "px")) : bs(this),
                        this.vc = !1));
                a != this.Hb && this.dispatchEvent("resize")
            }
        };
        Rr.prototype.Da = function() {
            var a = this.B(),
                b = a.offsetHeight;
            a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
            b != this.Hb && (this.Hb = this.Xe = b)
        };
        var cs = function(a, b) {
            dk.call(this, a);
            this.A = !1;
            this.s = b || {};
            this.j = null
        };
        _.w(cs, dk);
        _.l = cs.prototype;
        _.l.Sd = function(a) {
            dk.prototype.Sd.call(this, a);
            Aq(this).I(this.j.B(), "keydown", (0,
                _.x)(this.Fa().bd, this.Fa(), !1));
            this.A = this.Fa().Mc;
            this.gd()
        };
        _.l.gd = function() {
            dk.prototype.gd.call(this);
            this.j.l(this.Fa().Y);
            var a = this.Fa().Db(),
                b = this.Fa().ua();
            a && b && (Nr(this.g, {
                    gtrans: this.Fa().Y,
                    text: this.Fa().jd(),
                    hl: vn,
                    langpair: a + "|" + b
                }),
                Nr(this.g, this.s));
            this.dispatchEvent("ready");
            this.j.B().focus()
        };
        _.l.Bc = function() {
            this.Fa().bd(this.A)
        };
        _.l.R = function() {
            this.ya(Oi(oq))
        };
        _.l.ya = function(a) {
            this.o = a;
            a = zq(this, "contribute-original-text");
            this.j = new Rr("");
            Cq(this.j, a);
            Xr(this.j);
            Wr(this.j);
            a = zq(this, "activity-form-container");
            this.g = new Mr(Ln, "POST");
            this.g.A = yi(this.s);
            Pr(this.g, (0,
                _.x)(function() {
                Nr(this.g, {
                    utrans: (0,
                        _.dc)(this.j.sa())
                });
                return Or(this.g, "utrans") != Or(this.g, "gtrans")
            }, this));
            this.g.Ma(a)
        };
        _.l.ra = function() {
            dk.prototype.ra.call(this);
            var a = Aq(this);
            a.I(this.g, "cancelled", (0,
                _.x)(function() {
                this.dispatchEvent("cancelled")
            }, this));
            a.I(this.g, "submitted", (0,
                _.x)(function() {
                var b = this.j.sa();
                this.Fa().Y = b && (0,
                    _.dc)(b);
                this.dispatchEvent("submitted");
                b = V.Fh;
                _.qd(this.Fa().pc().B(), b)
            }, this))
        };
        _.l.K = function() {
            this.j && this.j.T();
            this.j = null;
            this.g && this.g.T();
            this.g = null;
            dk.prototype.K.call(this)
        };
        var ds = function(a) {
            _.E.call(this);
            this.o = a;
            this.s = {};
            this.j = new _.$f(this);
            this.l = null
        };
        _.w(ds, _.E);
        ds.prototype.attach = function() {};
        ds.prototype.Hf = function() {};
        ds.prototype.K = function() {
            this.j.T();
            this.j = null
        };
        var es = function(a, b, c) {
            if (b = a.o.j[b]) {
                c = c || "undefined" == typeof c;
                for (var d = 0; d < b.La.length; ++d)
                    b.La[d] && a.wg(b.La[d], c)
            }
        };
        ds.prototype.wg = function(a, b) {
            _.K(a, "backgroundColor", b ? "#E6ECF9" : "");
            _.K(a, "color", b ? "#000" : "")
        };
        var fs = function(a, b, c) {
            _.A.call(this);
            this.h = a;
            this.l = b || 0;
            this.j = c;
            this.g = (0,
                _.x)(this.ph, this)
        };
        _.z(fs, _.A);
        _.l = fs.prototype;
        _.l.Lc = 0;
        _.l.K = function() {
            fs.P.K.call(this);
            this.stop();
            delete this.h;
            delete this.j
        };
        _.l.start = function(a) {
            this.stop();
            this.Lc = _.mg(this.g, void 0 !== a ? a : this.l)
        };
        _.l.stop = function() {
            this.isActive() && _.q.clearTimeout(this.Lc);
            this.Lc = 0
        };
        _.l.isActive = function() {
            return 0 != this.Lc
        };
        _.l.ph = function() {
            this.Lc = 0;
            this.h && this.h.call(this.j)
        };
        var zi = {},
            gs = null,
            hs = function(a) {
                a = _.za(a);
                delete zi[a];
                Ai() && gs && gs.stop()
            },
            js = function() {
                gs || (gs = new fs(function() {
                    is()
                }, 20));
                var a = gs;
                a.isActive() || a.start()
            },
            is = function() {
                var a = _.Db();
                _.Ec(zi, function(b) {
                    ks(b, a)
                });
                Ai() || js()
            };
        var ls = function() {
            _.E.call(this);
            this.g = 0;
            this.endTime = this.startTime = null
        };
        _.z(ls, _.E);
        ls.prototype.j = function() {
            this.h("begin")
        };
        ls.prototype.eb = function() {
            this.h("end")
        };
        ls.prototype.Bc = function() {
            this.h("stop")
        };
        ls.prototype.h = function(a) {
            this.dispatchEvent(a)
        };
        var ms = function(a, b, c, d) {
            ls.call(this);
            if (!Array.isArray(a) || !Array.isArray(b))
                throw Error("Ba");
            if (a.length != b.length)
                throw Error("Ca");
            this.l = a;
            this.F = b;
            this.duration = c;
            this.C = d;
            this.coords = [];
            this.progress = 0
        };
        _.z(ms, ls);
        ms.prototype.play = function(a) {
            if (a || 0 == this.g)
                this.progress = 0,
                this.coords = this.l;
            else if (1 == this.g)
                return !1;
            hs(this);
            this.startTime = a = _.Db(); -
            1 == this.g && (this.startTime -= this.duration * this.progress);
            this.endTime = this.startTime + this.duration;
            this.progress || this.j();
            this.h("play"); -
            1 == this.g && this.h("resume");
            this.g = 1;
            var b = _.za(this);
            b in zi || (zi[b] = this);
            js();
            ks(this, a);
            return !0
        };
        ms.prototype.stop = function(a) {
            hs(this);
            this.g = 0;
            a && (this.progress = 1);
            ns(this, this.progress);
            this.Bc();
            this.eb()
        };
        ms.prototype.nf = function(a) {
            this.progress = a;
            1 == this.g && (this.startTime = _.Db() - this.duration * this.progress,
                this.endTime = this.startTime + this.duration)
        };
        ms.prototype.K = function() {
            0 == this.g || this.stop(!1);
            this.h("destroy");
            ms.P.K.call(this)
        };
        var ks = function(a, b) {
                b < a.startTime && (a.endTime = b + a.endTime - a.startTime,
                    a.startTime = b);
                a.progress = (b - a.startTime) / (a.endTime - a.startTime);
                1 < a.progress && (a.progress = 1);
                ns(a, a.progress);
                1 == a.progress ? (a.g = 0,
                    hs(a),
                    a.h("finish"),
                    a.eb()) : 1 == a.g && a.A()
            },
            ns = function(a, b) {
                "function" === typeof a.C && (b = a.C(b));
                a.coords = Array(a.l.length);
                for (var c = 0; c < a.l.length; c++)
                    a.coords[c] = (a.F[c] - a.l[c]) * b + a.l[c]
            };
        ms.prototype.A = function() {
            this.h("animate")
        };
        ms.prototype.h = function(a) {
            this.dispatchEvent(new os(a, this))
        };
        var os = function(a, b) {
            _.td.call(this, a);
            this.coords = b.coords;
            this.x = b.coords[0];
            this.y = b.coords[1];
            this.z = b.coords[2];
            this.duration = b.duration;
            this.progress = b.progress;
            this.state = b.g
        };
        _.z(os, _.td);
        var ps = function() {
            if (_.oc) {
                var a = /Windows NT ([0-9.]+)/;
                return (a = a.exec(_.Ba())) ? a[1] : "0"
            }
            return _.nc ? (a = /1[0|1][_.][0-9_.]+/,
                (a = a.exec(_.Ba())) ? a[0].replace(/_/g, ".") : "10") : _.pc ? (a = /Android\s+([^\);]+)(\)|;)/,
                (a = a.exec(_.Ba())) ? a[1] : "") : _.qc || _.rc || _.sc ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/,
                (a = a.exec(_.Ba())) ? a[1].replace(/_/g, ".") : "") : ""
        }();
        var qs = function(a) {
                return (a = a.exec(_.Ba())) ? a[1] : ""
            },
            rs = function() {
                if (_.Xg)
                    return qs(/Firefox\/([0-9.]+)/);
                if (_.C || _.ic || _.hc)
                    return _.zc;
                if (_.ah) {
                    if (_.Ma() || _.Na()) {
                        var a = qs(/CriOS\/([0-9.]+)/);
                        if (a)
                            return a
                    }
                    return qs(/Chrome\/([0-9.]+)/)
                }
                if (_.bh && !_.Ma())
                    return qs(/Version\/([0-9.]+)/);
                if (_.Yg || _.Zg) {
                    if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(_.Ba()))
                        return a[1] + "." + a[2]
                } else if (_.$g)
                    return (a = qs(/Android\s+([0-9.]+)/)) ? a : qs(/Version\/([0-9.]+)/);
                return ""
            }();
        var ss = function(a, b, c, d, e) {
            ms.call(this, b, c, d, e);
            this.element = a
        };
        _.z(ss, ms);
        ss.prototype.s = function() {};
        ss.prototype.A = function() {
            this.s();
            ss.P.A.call(this)
        };
        ss.prototype.eb = function() {
            this.s();
            ss.P.eb.call(this)
        };
        ss.prototype.j = function() {
            this.s();
            ss.P.j.call(this)
        };
        var ts = function(a, b, c, d, e) {
            "number" === typeof b && (b = [b]);
            "number" === typeof c && (c = [c]);
            ss.call(this, a, b, c, d, e);
            if (1 != b.length || 1 != c.length)
                throw Error("Da");
            this.o = -1
        };
        _.z(ts, ss);
        var us = 1 / 1024;
        ts.prototype.s = function() {
            var a = this.coords[0];
            if (Math.abs(a - this.o) >= us) {
                var b = this.element.style;
                "opacity" in b ? b.opacity = a : "MozOpacity" in b ? b.MozOpacity = a : "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
                this.o = a
            }
        };
        ts.prototype.j = function() {
            this.o = -1;
            ts.P.j.call(this)
        };
        ts.prototype.eb = function() {
            this.o = -1;
            ts.P.eb.call(this)
        };
        var vs = function(a, b, c) {
            ts.call(this, a, 1, 0, b, c)
        };
        _.z(vs, ts);
        vs.prototype.j = function() {
            this.element.style.display = "";
            vs.P.j.call(this)
        };
        vs.prototype.eb = function() {
            this.element.style.display = "none";
            vs.P.eb.call(this)
        };
        var ws = function(a, b, c) {
            ts.call(this, a, 0, 1, b, c)
        };
        _.z(ws, ts);
        ws.prototype.j = function() {
            this.element.style.display = "";
            ws.P.j.call(this)
        };
        var xs = function() {
            O.call(this);
            this.g = null
        };
        _.w(xs, O);
        xs.prototype.R = function() {
            this.ya(this.h.R("DIV", {
                "class": "status-message"
            }))
        };
        xs.prototype.ya = function(a) {
            this.o = a;
            a.style.display = "none"
        };
        var zs = function(a) {
                var b = c;
                var c = (0,
                    _.x)(function() {
                    _.qd(this.B(), "");
                    b && b()
                }, a);
                c = (0,
                    _.x)(a.j, a, 750, c);
                ys(a, c)
            },
            As = function(a) {
                a.g && (a.g.stop(!0),
                    a.g = null);
                _.qd(a.B(), "");
                a.fa(!1)
            },
            ys = function(a, b) {
                a.g = new ws(a.B(), 750);
                Aq(a).Rb(a.g, "begin", (0,
                    _.x)(function() {
                    this.B().style.display = "block"
                }, a));
                Aq(a).Rb(a.g, "finish", (0,
                    _.x)(function() {
                    this.g = null;
                    window.setTimeout(b, 2E3)
                }, a));
                a.g.play()
            };
        xs.prototype.j = function(a, b) {
            this.isVisible() && (this.g = new vs(this.B(), a),
                Aq(this).Rb(this.g, "finish", (0,
                    _.x)(function() {
                    b && b()
                }, this)),
                this.g.play())
        };
        xs.prototype.fa = function(a) {
            this.B().style.display = a ? "block" : "none";
            this.B().style.opacity = a ? "1" : "0"
        };
        xs.prototype.isVisible = function() {
            return "none" !== this.B().style.display && "0" !== this.B().style.opacity
        };
        var Bs = function(a, b) {
            _.E.call(this);
            this.A = new _.$f(this);
            this.Dc(a || null);
            b && (this.Jc = b)
        };
        _.z(Bs, _.E);
        _.l = Bs.prototype;
        _.l.Ta = null;
        _.l.Mc = !0;
        _.l.Rf = null;
        _.l.hc = !1;
        _.l.Pe = -1;
        _.l.Jc = "toggle_display";
        _.l.B = function() {
            return this.Ta
        };
        _.l.Dc = function(a) {
            if (this.hc)
                throw Error("Ea");
            this.Ta = a
        };
        _.l.bd = function(a) {
            if (this.hc)
                throw Error("Ea");
            this.Mc = a
        };
        _.l.isVisible = function() {
            return this.hc
        };
        _.l.fa = function(a) {
            this.Da && this.Da.stop();
            this.ta && this.ta.stop();
            if (a) {
                if (!this.hc && this.ie()) {
                    if (!this.Ta)
                        throw Error("Fa");
                    this.xb();
                    a = _.dd(this.Ta);
                    if (this.Mc)
                        if (this.A.I(a, "mousedown", this.Ye, !0),
                            _.C) {
                            try {
                                var b = a.activeElement
                            } catch (d) {}
                            for (; b && "IFRAME" == b.nodeName;) {
                                try {
                                    var c = kl(b)
                                } catch (d) {
                                    break
                                }
                                a = c;
                                b = a.activeElement
                            }
                            this.A.I(a, "mousedown", this.Ye, !0);
                            this.A.I(a, "deactivate", this.Lg)
                        } else
                            this.A.I(a, "blur", this.Lg);
                        "toggle_display" == this.Jc ? (this.Ta.style.visibility = "visible",
                        T(this.Ta, !0)) : "move_offscreen" == this.Jc && this.xb();
                    this.hc = !0;
                    this.Pe = Date.now();
                    this.Da ? (_.Kd(this.Da, "end", this.Mg, !1, this),
                        this.Da.play()) : this.Mg()
                }
            } else
                Cs(this)
        };
        _.l.xb = function() {};
        var Cs = function(a, b) {
            a.hc && a.dispatchEvent({
                type: "beforehide",
                target: b
            }) && (a.A && _.dg(a.A),
                a.hc = !1,
                a.ta ? (_.Kd(a.ta, "end", _.Cb(a.Vf, b), !1, a),
                    a.ta.play()) : a.Vf(b))
        };
        _.l = Bs.prototype;
        _.l.Vf = function(a) {
            "toggle_display" == this.Jc ? this.Pi() : "move_offscreen" == this.Jc && (this.Ta.style.top = "-10000px");
            this.af(a)
        };
        _.l.Pi = function() {
            this.Ta.style.visibility = "hidden";
            T(this.Ta, !1)
        };
        _.l.ie = function() {
            return this.dispatchEvent("beforeshow")
        };
        _.l.Mg = function() {
            this.dispatchEvent("show")
        };
        _.l.af = function(a) {
            this.dispatchEvent({
                type: "hide",
                target: a
            })
        };
        _.l.Ye = function(a) {
            a = a.target;
            _.pd(this.Ta, a) || Ds(this, a) || 150 > Date.now() - this.Pe || Cs(this, a)
        };
        _.l.Lg = function(a) {
            var b = _.dd(this.Ta);
            if ("undefined" != typeof document.activeElement) {
                if (a = b.activeElement, !a || _.pd(this.Ta, a) || "BODY" == a.tagName || Ds(this, a))
                    return
            } else if (a.target != b)
                return;
            150 > Date.now() - this.Pe || Cs(this)
        };
        var Ds = function(a, b) {
            return _.ac(a.Rf || [], function(c) {
                return b === c || _.pd(c, b)
            })
        };
        Bs.prototype.K = function() {
            Bs.P.K.call(this);
            this.A.T();
            _.ca(this.Da);
            _.ca(this.ta);
            delete this.Ta;
            delete this.A;
            delete this.Rf
        };
        var Es = function(a) {
            _.E.call(this);
            this.g = a;
            a = _.C ? "focusout" : "blur";
            this.h = _.D(this.g, _.C ? "focusin" : "focus", this, !_.C);
            this.j = _.D(this.g, a, this, !_.C)
        };
        _.z(Es, _.E);
        Es.prototype.handleEvent = function(a) {
            var b = new _.wd(a.g);
            b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
            this.dispatchEvent(b)
        };
        Es.prototype.K = function() {
            Es.P.K.call(this);
            _.Sd(this.h);
            _.Sd(this.j);
            delete this.g
        };
        var Fs = function() {};
        Fs.prototype.h = function() {};
        var Is = function(a, b, c, d, e, f, g) {
                var h;
                if (h = c.offsetParent) {
                    var k = "HTML" == h.tagName || "BODY" == h.tagName;
                    if (!k || "static" != im(h, "position")) {
                        var m = om(h);
                        if (!k) {
                            k = vm(h);
                            var n;
                            if (n = k) {
                                n = _.bh && 0 <= wi(rs, 10);
                                var p;
                                if (p = _.tc)
                                    p = 0 <= wi(ps, 10);
                                var r = _.ah && 0 <= wi(rs, 85);
                                n = _.kc || n || p || r
                            }
                            k = n ? -h.scrollLeft : k && !_.jc && "visible" != im(h, "overflowX") ? h.scrollWidth - h.clientWidth - h.scrollLeft : h.scrollLeft;
                            m = Yk(m, new Q(k, h.scrollTop))
                        }
                    }
                }
                h = m || new Q;
                m = om(a);
                k = sm(a);
                m = new gm(m.x, m.y, k.width, k.height);
                if (k = pm(a))
                    r = new gm(k.left, k.top, k.right - k.left, k.bottom - k.top),
                    k = Math.max(m.left, r.left),
                    n = Math.min(m.left + m.width, r.left + r.width),
                    k <= n && (p = Math.max(m.top, r.top),
                        r = Math.min(m.top + m.height, r.top + r.height),
                        p <= r && (m.left = k,
                            m.top = p,
                            m.width = n - k,
                            m.height = r - p));
                k = _.ed(a);
                p = _.ed(c);
                k.g != p.g && (n = k.g.body,
                    p = qm(n, _.rd(p)),
                    p = Yk(p, om(n)), !_.C || 9 <= Number(_.Cc) || _.id(k.g) || (p = Yk(p, jk(k.g))),
                    m.left += p.x,
                    m.top += p.y);
                a = Gs(a, b);
                b = m.left;
                a & 4 ? b += m.width : a & 2 && (b += m.width / 2);
                b = new Q(b, m.top + (a & 1 ? m.height : 0));
                b = Yk(b, h);
                e && (b.x += (a & 4 ? -1 : 1) * e.x,
                    b.y += (a & 1 ? -1 : 1) * e.y);
                var t;
                g && (t = pm(c)) && (t.top -= h.y,
                    t.right -= h.x,
                    t.bottom -= h.y,
                    t.left -= h.x);
                return Hs(b, c, d, f, t, g)
            },
            Hs = function(a, b, c, d, e, f) {
                a = fk(a);
                var g = Gs(b, c);
                c = sm(b);
                var h = new _.Yc(c.width, c.height);
                a = fk(a);
                h = new _.Yc(h.width, h.height);
                var k = 0;
                if (d || 0 != g)
                    g & 4 ? a.x -= h.width + (d ? d.right : 0) : g & 2 ? a.x -= h.width / 2 : d && (a.x += d.left),
                    g & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
                f && (e ? (d = h,
                        g = 0,
                        65 == (f & 65) && (a.x < e.left || a.x >= e.right) && (f &= -2),
                        132 == (f & 132) && (a.y < e.top || a.y >= e.bottom) && (f &= -5),
                        a.x < e.left && f & 1 && (a.x = e.left,
                            g |= 1),
                        f & 16 && (k = a.x,
                            a.x < e.left && (a.x = e.left,
                                g |= 4),
                            a.x + d.width > e.right && (d.width = Math.min(e.right - a.x, k + d.width - e.left),
                                d.width = Math.max(d.width, 0),
                                g |= 4)),
                        a.x + d.width > e.right && f & 1 && (a.x = Math.max(e.right - d.width, e.left),
                            g |= 1),
                        f & 2 && (g |= (a.x < e.left ? 16 : 0) | (a.x + d.width > e.right ? 32 : 0)),
                        a.y < e.top && f & 4 && (a.y = e.top,
                            g |= 2),
                        f & 32 && (k = a.y,
                            a.y < e.top && (a.y = e.top,
                                g |= 8),
                            a.y + d.height > e.bottom && (d.height = Math.min(e.bottom - a.y, k + d.height - e.top),
                                d.height = Math.max(d.height, 0),
                                g |= 8)),
                        a.y + d.height > e.bottom && f & 4 && (a.y = Math.max(e.bottom - d.height, e.top),
                            g |= 2),
                        f & 8 && (g |= (a.y < e.top ? 64 : 0) | (a.y + d.height > e.bottom ? 128 : 0)),
                        e = g) : e = 256,
                    k = e);
                e = new gm(0, 0, 0, 0);
                e.left = a.x;
                e.top = a.y;
                e.width = h.width;
                e.height = h.height;
                a = k;
                if (a & 496)
                    return a;
                km(b, new Q(e.left, e.top));
                h = new _.Yc(e.width, e.height);
                _.Zc(c, h) || xm(b, h, "border-box");
                return a
            },
            Gs = function(a, b) {
                return (b & 8 && vm(a) ? b ^ 4 : b) & -9
            };
        var Js = function(a, b, c) {
            this.element = a;
            this.j = b;
            this.l = c
        };
        _.z(Js, Fs);
        Js.prototype.h = function(a, b, c) {
            Is(this.element, this.j, a, b, void 0, c, this.l)
        };
        var Ks = function(a, b) {
            this.g = a instanceof Q ? a : new Q(a, b)
        };
        _.z(Ks, Fs);
        Ks.prototype.h = function(a, b, c) {
            Is(lm(a), 0, a, b, this.g, c, null)
        };
        var Ls = function(a, b) {
            this.C = b || void 0;
            Bs.call(this, a)
        };
        _.z(Ls, Bs);
        Ls.prototype.xb = function() {
            if (this.C) {
                var a = !this.isVisible() && "move_offscreen" != this.Jc,
                    b = this.B();
                a && (b.style.visibility = "hidden",
                    T(b, !0));
                this.C.h(b, 8, this.Vi);
                a && T(b, !1)
            }
        };
        var Y = function(a, b, c) {
            this.U = c || (a ? _.ed(R(a)) : _.ed());
            Ls.call(this, this.U.R("DIV", {
                style: "position:absolute;display:none;"
            }));
            this.Sc = new Q(1, 1);
            this.F = new _.qf;
            this.H = null;
            a && this.attach(a);
            null != b && this.gb(b)
        };
        _.z(Y, Ls);
        var Ms = [];
        _.l = Y.prototype;
        _.l.Ha = null;
        _.l.className = "VIpgJd-suEOdc";
        _.l.ah = 500;
        _.l.vg = 0;
        _.l.attach = function(a) {
            a = R(a);
            this.F.add(a);
            _.D(a, "mouseover", this.je, !1, this);
            _.D(a, "mouseout", this.qc, !1, this);
            _.D(a, "mousemove", this.jg, !1, this);
            _.D(a, "focus", this.ud, !1, this);
            _.D(a, "blur", this.qc, !1, this)
        };
        var Os = function(a, b) {
                if (b)
                    b = R(b),
                    Ns(a, b),
                    a.F.remove(b);
                else {
                    for (var c = a.F.Za(), d = 0; b = c[d]; d++)
                        Ns(a, b);
                    a = a.F;
                    b = a.g;
                    b.h = {};
                    b.g.length = 0;
                    b.size = 0;
                    b.j = 0;
                    a.size = 0
                }
            },
            Ns = function(a, b) {
                _.Rd(b, "mouseover", a.je, !1, a);
                _.Rd(b, "mouseout", a.qc, !1, a);
                _.Rd(b, "mousemove", a.jg, !1, a);
                _.Rd(b, "focus", a.ud, !1, a);
                _.Rd(b, "blur", a.qc, !1, a)
            };
        Y.prototype.gb = function(a) {
            _.qd(this.B(), a)
        };
        Y.prototype.Dc = function(a) {
            var b = this.B();
            b && il(b);
            Y.P.Dc.call(this, a);
            a ? (b = this.U.g.body,
                b.insertBefore(a, b.lastChild),
                _.ca(this.H),
                this.H = new Es(this.B()),
                ek(this, this.H),
                _.D(this.H, "focusin", this.M, void 0, this),
                _.D(this.H, "focusout", this.zb, void 0, this)) : (_.ca(this.H),
                this.H = null)
        };
        Y.prototype.jd = function() {
            return rl(this.B())
        };
        var Ps = function(a) {
            return a.S ? a.isVisible() ? 4 : 1 : a.na ? 3 : a.isVisible() ? 2 : 0
        };
        Y.prototype.ie = function() {
            if (!Bs.prototype.ie.call(this))
                return !1;
            if (this.g)
                for (var a, b = 0; a = Ms[b]; b++)
                    _.pd(a.B(), this.g) || a.fa(!1);
            _.ua(Ms, this);
            a = this.B();
            a.className = this.className;
            this.M();
            _.D(a, "mouseover", this.Fd, !1, this);
            _.D(a, "mouseout", this.Ed, !1, this);
            Qs(this);
            return !0
        };
        Y.prototype.af = function() {
            _.va(Ms, this);
            for (var a = this.B(), b, c = 0; b = Ms[c]; c++)
                b.g && _.pd(a, b.g) && b.fa(!1);
            this.xg && this.xg.zb();
            _.Rd(a, "mouseover", this.Fd, !1, this);
            _.Rd(a, "mouseout", this.Ed, !1, this);
            this.g = void 0;
            0 == Ps(this) && (this.yb = !1);
            Bs.prototype.af.call(this)
        };
        Y.prototype.Ve = function(a, b) {
            this.g == a && _.of(this.F.g, _.rf(this.g)) && (this.yb || !this.am ? (this.fa(!1),
                this.isVisible() || (this.g = a,
                    this.C = b || new Rs(fk(this.Sc)),
                    this.isVisible() && this.xb(),
                    this.fa(!0))) : this.g = void 0);
            this.S = void 0
        };
        Y.prototype.Wi = function(a) {
            this.na = void 0;
            if (a == this.g) {
                a = this.U;
                var b = a.g;
                try {
                    var c = b && b.activeElement;
                    var d = c && c.nodeName ? c : null
                } catch (e) {
                    d = null
                }
                d = d && this.B() && a.h(this.B(), d);
                null != this.Ha && (this.Ha == this.B() || _.of(this.F.g, _.rf(this.Ha))) || d || this.xd && this.xd.Ha || this.fa(!1)
            }
        };
        var Ss = function(a, b) {
            var c = jk(a.U.g);
            a.Sc.x = b.clientX + c.x;
            a.Sc.y = b.clientY + c.y
        };
        Y.prototype.je = function(a) {
            var b = Ts(this, a.target);
            this.Ha = b;
            this.M();
            b != this.g && (this.g = b,
                Us(this, b),
                Vs(this),
                Ss(this, a))
        };
        var Ts = function(a, b) {
            try {
                for (; b && !_.of(a.F.g, _.rf(b));)
                    b = b.parentNode;
                return b
            } catch (c) {
                return null
            }
        };
        Y.prototype.jg = function(a) {
            Ss(this, a);
            this.yb = !0
        };
        Y.prototype.ud = function(a) {
            this.Ha = a = Ts(this, a.target);
            this.yb = !0;
            if (this.g != a) {
                this.g = a;
                var b = new Ws(this.Ha);
                this.M();
                Us(this, a, b);
                Vs(this)
            }
        };
        var Vs = function(a) {
            if (a.g)
                for (var b, c = 0; b = Ms[c]; c++)
                    _.pd(b.B(), a.g) && (b.xd = a,
                        a.xg = b)
        };
        Y.prototype.qc = function(a) {
            var b = Ts(this, a.target),
                c = Ts(this, a.relatedTarget);
            b != c && (b == this.Ha && (this.Ha = null),
                Qs(this),
                this.yb = !1, !this.isVisible() || a.relatedTarget && _.pd(this.B(), a.relatedTarget) ? this.g = void 0 : this.zb())
        };
        Y.prototype.Fd = function() {
            var a = this.B();
            this.Ha != a && (this.M(),
                this.Ha = a)
        };
        Y.prototype.Ed = function(a) {
            var b = this.B();
            this.Ha != b || a.relatedTarget && _.pd(b, a.relatedTarget) || (this.Ha = null,
                this.zb())
        };
        var Us = function(a, b, c) {
                a.S || (a.S = _.mg((0,
                    _.x)(a.Ve, a, b, c), a.ah))
            },
            Qs = function(a) {
                a.S && (_.q.clearTimeout(a.S),
                    a.S = void 0)
            };
        Y.prototype.zb = function() {
            2 == Ps(this) && (this.na = _.mg((0,
                _.x)(this.Wi, this, this.g), this.vg))
        };
        Y.prototype.M = function() {
            this.na && (_.q.clearTimeout(this.na),
                this.na = void 0)
        };
        Y.prototype.K = function() {
            this.fa(!1);
            Qs(this);
            Os(this);
            this.B() && il(this.B());
            this.Ha = null;
            delete this.U;
            Y.P.K.call(this)
        };
        var Rs = function(a, b) {
            Ks.call(this, a, b)
        };
        _.z(Rs, Ks);
        Rs.prototype.h = function(a, b, c) {
            b = lm(a);
            b = pm(b);
            c = c ? new fm(c.top + 10, c.right, c.bottom, c.left + 10) : new fm(10, 0, 0, 10);
            Hs(this.g, a, 8, c, b, 9) & 496 && Hs(this.g, a, 8, c, b, 5)
        };
        var Ws = function(a) {
            Js.call(this, a, 5)
        };
        _.z(Ws, Js);
        Ws.prototype.h = function(a, b, c) {
            var d = new Q(10, 0);
            Is(this.element, this.j, a, b, d, c, 9) & 496 && Is(this.element, 4, a, 1, d, c, 5)
        };
        var Xs = function() {
            Y.call(this);
            this.da = {};
            this.Nc = {};
            this.G = null;
            this.vd = !1;
            this.Oc = this.h = this.N = null;
            this.ka = {};
            this.s = new _.$f(this);
            this.D = this.j = this.o = this.Ab = this.l = this.Y = this.Ca = null;
            this.L = !0;
            this.Yb = []
        };
        _.w(Xs, Y);
        _.l = Xs.prototype;
        _.l.Ma = function() {
            this.L = !1;
            var a = _.zf.test(vn) ? "rtl" : "ltr",
                b = lq;
            "voting" === An && (b = tq);
            "translation-voting" === An && (b = uq);
            this.Dc(Oi(b, {
                Se: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
                il: "https://www.google.com/images/cleardot.gif",
                Zl: Gn,
                dir: a,
                de: Mn
            }));
            this.className += " VIpgJd-yAWNEb-L7lbkb skiptranslate";
            this.B() && this.G && this.Ab && this.o.B() && this.N && this.D && (this.s.I(window, "resize", (0,
                    _.x)(this.xb, this)),
                this.s.I(this, "hide", (0,
                    _.x)(this.tj, this)),
                this.Yb.length && (this.Of.apply(this, this.Yb),
                    this.Yb = []))
        };
        _.l.Of = function(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) {
                var d = arguments[c];
                if (d)
                    if (this.G || d.Pd) {
                        var e = fl("SPAN", {
                            "class": d.className || "VIpgJd-yAWNEb-Z0Arqf-hSRGPd"
                        });
                        _.qd(e, d.Qe || "");
                        b.push(e);
                        gl(d.Pd || this.G, e);
                        if (d.Sd && d.Bc) {
                            var f = (0,
                                _.x)(this.si, this, d);
                            this.s.I(e, "click", f);
                            d.Od && this.s.I(this.N, d.Od, f)
                        }
                        d.id = d.id || d.ib();
                        this.da[d.id] && this.Tg(d);
                        this.da[d.id] = d;
                        this.Nc[d.id] = e
                    } else
                        this.Yb.push(d)
            }
            return b
        };
        _.l.Tg = function(a) {
            for (var b = 0; b < arguments.length; ++b) {
                var c = "string" === typeof arguments[b] || arguments[b] instanceof String ? arguments[b] : arguments[b].id,
                    d = this.da[c],
                    e = this.Nc[c];
                d && e && (this.h && this.h.id === c && this.se(),
                    this.s.mb(d, ["submitted", "cancelled"]),
                    d.T(),
                    this.ka[c] && delete this.ka[c],
                    delete this.da[c],
                    delete this.Nc[c],
                    il(e))
            }
        };
        _.l.si = function(a) {
            if (this.N) {
                a != this.h && this.h && (As(this.o),
                    this.h.Bc.call(this.h),
                    this.h.B() && (this.h.B().style.display = "none"),
                    Ys(this, !1),
                    this.h = null);
                Ys(this, !0);
                As(this.o);
                this.h = a;
                if (this.ka[a.id]) {
                    var b = this.ka[a.id];
                    var c = a.gd
                } else
                    a.Ma(),
                    b = a.B(),
                    c = a.Sd,
                    this.s.I(a, ["submitted", "cancelled"], (0,
                        _.x)(this.se, this)),
                    a.re && (this.ka[a.id] = b);
                gl(this.N, b);
                c.call(a, this);
                a = new ws(b, 100);
                this.s.Rb(a, "finish", (0,
                    _.x)(this.xb, this, !0, !0));
                a.play()
            }
        };
        _.l.se = function() {
            if (this.h)
                if (As(this.o),
                    this.h.Bc.call(this.h),
                    this.h.B()) {
                    var a = new vs(this.h.B(), 100);
                    this.s.Rb(a, "finish", (0,
                        _.x)(function() {
                        il(this.h.B());
                        this.h = null;
                        Ys(this, !1);
                        rl(this.o.B()) && (zs(this.o),
                            this.xb(!0, !0))
                    }, this));
                    a.play()
                } else
                    Ys(this, !1),
                    this.h = null
        };
        _.l.Ve = function(a, b) {
            this.Oc = a;
            Y.prototype.Ve.call(this, a, b);
            this.B().style.display = "block"
        };
        _.l.je = function(a) {
            if (!this.L) {
                var b = Ts(this, a.target);
                this.Ha = b;
                this.M();
                b != this.g ? (this.g = b,
                    Us(this, b),
                    Vs(this),
                    Ss(this, a)) : Us(this, b)
            }
        };
        _.l.tj = function() {
            As(this.o);
            this.vd && this.se()
        };
        _.l.K = function() {
            for (var a in this.da)
                this.Tg(a);
            this.s && this.s.T();
            this.s = null;
            this.o && this.o.T();
            this.D = this.Ab = this.Oc = this.N = this.G = this.o = null;
            Y.prototype.K.call(this)
        };
        var Ys = function(a, b) {
            a.vd = b;
            a.L = b;
            if (a.L) {
                var c = a.B();
                a.Ca = new Q(c.offsetLeft, c.offsetTop)
            } else
                a.Ca && (null != (a.C || null) && ((a.C || null).g = a.Ca),
                    km(a.B(), a.Ca),
                    a.Ca = null);
            a.G.style.display = b ? "none" : "inline-block";
            a.Ab.style.display = b ? "inline-block" : "none"
        };
        _.l = Xs.prototype;
        _.l.bd = function(a) {
            if (this.isVisible()) {
                a = (this.Mc = a) ? this.A.I : this.A.mb;
                var b = _.dd(this.B());
                a.call(this.A, b, "mousedown", this.Ye, !0)
            } else
                Y.prototype.bd.call(this, a)
        };
        _.l.Dc = function(a) {
            Y.prototype.Dc.call(this, a);
            if (a) {
                this.G = hk("VIpgJd-yAWNEb-Z0Arqf-PLDbbf", a);
                var b = hk("VIpgJd-yAWNEb-jOfkMb-Ne3sFf", a);
                b && (this.o = new xs,
                    Cq(this.o, b));
                this.Ab = hk("VIpgJd-yAWNEb-fw42Ze-Z0Arqf-haAclf", a);
                this.N = hk("VIpgJd-yAWNEb-Z0Arqf-H9tDt", a);
                this.D = hk("VIpgJd-yAWNEb-nVMfcd-fmcmS", a)
            }
        };
        _.l.xb = function(a, b) {
            var c = om(document.body).y;
            if (this.C) {
                (this.C || null).g.y += c;
                Y.prototype.xb.call(this);
                var d = parseInt(this.B().style.left, 10);
                a = parseInt(this.B().style.top, 10) - (a ? 0 : c);
                b && (b = this.Vi || {},
                    a -= b.top || 10,
                    d -= b.left || 10);
                a -= c;
                (this.C || null).g.y = a;
                (this.C || null).g.x = d;
                c = new Q(d, a);
                km(this.B(), c)
            }
        };
        _.l.fa = function(a) {
            Y.prototype.fa.call(this, a)
        };
        _.l.Fc = function(a) {
            this.l = a
        };
        _.l.Aa = function(a) {
            this.j = a
        };
        _.l.gb = function(a) {
            a = a ? (0,
                _.dc)(a) : "";
            this.D ? _.qd(this.D, a) : Y.prototype.gb.call(this, a)
        };
        _.l.Db = function() {
            return this.l
        };
        _.l.pc = function() {
            return this.o
        };
        _.l.ua = function() {
            return this.j
        };
        _.l.jd = function() {
            return this.D ? rl(this.D) : Y.prototype.jd.call(this)
        };
        _.l.qc = function(a) {
            this.L || Y.prototype.qc.call(this, a)
        };
        _.l.Fd = function(a) {
            this.L || Y.prototype.Fd.call(this, a)
        };
        _.l.Ed = function(a) {
            this.L || Y.prototype.Ed.call(this, a)
        };
        var Zs = function() {
                this.h = new Map;
                this.g = So(Zo)
            },
            ct = function(a) {
                var b = R("goog-gt-thumbUpButton"),
                    c = a.h,
                    d = a.g;
                b.addEventListener("click", function() {
                    if ($s(c) === at)
                        cp(d);
                    else {
                        var e = $o(d, 5);
                        ap(d, e);
                        bp(e)
                    }
                    bt(c, at)
                }, !1)
            },
            et = function(a) {
                var b = R("goog-gt-thumbDownButton"),
                    c = a.h,
                    d = a.g;
                b.addEventListener("click", function() {
                    if ($s(c) === dt)
                        cp(d);
                    else {
                        var e = $o(d, 6);
                        ap(d, e);
                        bp(e)
                    }
                    bt(c, dt)
                }, !1)
            },
            ht = function(a) {
                var b = R("goog-gt-tt"),
                    c = b.dataset,
                    d = R("goog-gt-votingInputSrcLang"),
                    e = R("goog-gt-votingInputTrgLang"),
                    f = R("goog-gt-votingInputSrcText"),
                    g = R("goog-gt-votingInputTrgText"),
                    h = hk("VIpgJd-yAWNEb-nVMfcd-fmcmS"),
                    k = R("goog-gt-translation"),
                    m = a.h,
                    n = a.g;
                window.document.body.addEventListener("goog-gt-popupShown", function(p) {
                    var r = $o(n, 4);
                    ap(n, r);
                    bp(r);
                    p = p.detail;
                    r = String(p.nd);
                    p = p.Lj;
                    c.id = r;
                    r = m.get(r) || ft;
                    gt(r);
                    b.style.width = Math.max(Math.min(window.innerWidth - 16, 536), 288) + "px";
                    r = p.Db() || "";
                    var t = p.ua() || "";
                    d.value = r;
                    e.value = t;
                    f.value = p.jd();
                    g.value = p.Y;
                    k && (k.innerText = p.Y);
                    b.lang = vn;
                    h.lang = r;
                    k && (k.lang = t);
                    _.zf.test(r) && (h.classList.add("rtl"),
                        h.dir = "rtl");
                    k && _.zf.test(t) && (k.classList.add("rtl"),
                        k.dir = "rtl")
                }, !1)
            },
            gt = function(a) {
                var b = R("goog-gt-thumbUpButton"),
                    c = R("goog-gt-thumbUpIcon"),
                    d = R("goog-gt-thumbUpIconFilled"),
                    e = R("goog-gt-thumbDownButton"),
                    f = R("goog-gt-thumbDownIcon"),
                    g = R("goog-gt-thumbDownIconFilled");
                b.setAttribute("aria-pressed", "false");
                c.style.display = "";
                d.style.display = "none";
                e.setAttribute("aria-pressed", "false");
                f.style.display = "";
                g.style.display = "none";
                switch (a) {
                    case at:
                        b.setAttribute("aria-pressed", "true");
                        c.style.display = "none";
                        d.style.display = "";
                        break;
                    case dt:
                        e.setAttribute("aria-pressed", "true"),
                            f.style.display = "none",
                            g.style.display = ""
                }
                R("goog-gt-votingInputVote").value = a
            },
            $s = function(a) {
                var b = R("goog-gt-tt").dataset;
                return a.get(b.id)
            },
            bt = function(a, b) {
                $s(a) === b && (b = ft);
                gt(b);
                var c = R("goog-gt-tt").dataset;
                a.set(c.id, b);
                R("goog-gt-votingForm").submit()
            },
            ft = (0).toString(),
            at = (1).toString(),
            dt = (2).toString();
        var it = {
            set: function(a, b) {
                a.className = b
            },
            get: function(a) {
                a = a.className;
                return "string" === typeof a && a.match(/\S+/g) || []
            },
            add: function(a, b) {
                var c = it.get(a),
                    d = Array.prototype.slice.call(arguments, 1),
                    e = c.length + d.length;
                it.Pf(c, d);
                it.set(a, c.join(" "));
                return c.length == e
            },
            remove: function(a, b) {
                var c = it.get(a),
                    d = Array.prototype.slice.call(arguments, 1),
                    e = it.fg(c, d);
                it.set(a, e.join(" "));
                return e.length == c.length - d.length
            },
            Pf: function(a, b) {
                for (var c = 0; c < b.length; c++)
                    _.ta(a, b[c]) || a.push(b[c])
            },
            fg: function(a, b) {
                return a.filter(function(c) {
                    return !_.ta(b, c)
                })
            },
            hm: function(a, b, c) {
                for (var d = it.get(a), e = !1, f = 0; f < d.length; f++)
                    d[f] == b && (d.splice(f--, 1),
                        e = !0);
                e && (d.push(c),
                    it.set(a, d.join(" ")));
                return e
            },
            fl: function(a, b, c) {
                var d = it.get(a);
                "string" === typeof b ? _.va(d, b) : Array.isArray(b) && (d = it.fg(d, b));
                "string" !== typeof c || _.ta(d, c) ? Array.isArray(c) && it.Pf(d, c) : d.push(c);
                it.set(a, d.join(" "))
            },
            has: function(a, b) {
                return _.ta(it.get(a), b)
            },
            enable: function(a, b, c) {
                c ? it.add(a, b) : it.remove(a, b)
            },
            toggle: function(a, b) {
                var c = !it.has(a, b);
                it.enable(a, b, c);
                return c
            }
        };
        var jt = function(a, b) {
            ds.call(this, a);
            b = b || {};
            this.g = {
                apiKey: b.apiKey || "",
                bc: b.bc || 1
            };
            this.h = null
        };
        _.w(jt, ds);
        _.l = jt.prototype;
        _.l.attach = function(a, b) {
            b && (b.nd = a,
                this.h.attach(b))
        };
        _.l.Hf = function(a) {
            a && Os(this.h, a)
        };
        _.l.rh = function() {
            var a = this.h.Oc;
            if (a && void 0 !== a.nd) {
                var b = a.nd;
                a = this.o.j[b];
                es(this, this.l, !1);
                this.l = b;
                es(this, b);
                this.h.Fc(a.Hj);
                this.h.Aa(a.Jj);
                var c = a.ea;
                this.h.Y = c && (0,
                    _.dc)(c);
                this.h.gb(a.text)
            }
            b = new CustomEvent("goog-gt-popupShown", {
                detail: {
                    nd: b,
                    Lj: this.h
                }
            });
            window.document.body.dispatchEvent(b)
        };
        _.l.qh = function() {
            es(this, this.l, !1)
        };
        _.l.rj = function() {
            this.o.j[this.l].Yh.dispatchEvent("updating")
        };
        _.l.K = function() {
            this.h.T();
            this.h = null;
            ds.prototype.K.call(this)
        };
        _.l.wg = function(a, b) {
            it[b ? "add" : "remove"](a, "VIpgJd-yAWNEb-VIpgJd-fmcmS-sn54Q")
        };
        var kt = function(a) {
            this.s = a;
            this.l = this.h = this.o = this.j = -1;
            this.g = !1;
            this.C = 0;
            this.F = "";
            this.D = 0
        };
        kt.prototype.start = function() {
            if (!this.g) {
                this.g = !0;
                var a = [],
                    b;
                for (b = 0; 15 > b; b++)
                    a[b] = To[0 | 62 * Math.random()];
                this.F = a.join("");
                this.C = 0;
                this.l = this.h = this.o = this.j = -1;
                this.D = _.Db();
                _.mg(this.A, 1E4, this)
            }
        };
        kt.prototype.stop = function() {
            this.g && (this.g = !1,
                lt(this))
        };
        kt.prototype.A = function() {
            this.g && (lt(this),
                _.mg(this.A, 1E3, this))
        };
        var lt = function(a) {
            var b = a.s.l,
                c = a.s.s,
                d = a.s.j,
                e = a.s.o;
            if (a.j != b || a.o != c || a.h != d || a.l != e) {
                var f = {};
                f.ct = b;
                f.cv = c;
                f.cts = d;
                f.cvs = e;
                f.sid = a.F;
                f.seq = a.C++;
                f.tat = _.Db() - a.D;
                if (0 <= a.j || 0 <= a.o || 0 <= a.h || 0 <= a.l)
                    f.pt = a.j,
                    f.pv = a.o,
                    f.pts = a.h,
                    f.pvs = a.l;
                Xj("te_v", f);
                a.j = b;
                a.o = c;
                a.h = d;
                a.l = e
            }
        };
        var mt = function() {
            this.o = this.j = this.s = this.l = 0;
            this.g = [];
            this.h = null != _.q.IntersectionObserver ? new IntersectionObserver((0,
                _.x)(this.A, this)) : null
        };
        mt.prototype.attach = function(a, b) {
            this.j += b;
            var c = this.g.length;
            this.g.push(b);
            for (b = 0; b < a.length; ++b) {
                var d = a[b];
                jl(d) ? (d[nt] = c,
                    this.l += rl(d).length,
                    this.h && this.h.observe(d)) : this.Cg(d.nodeType)
            }
        };
        mt.prototype.reset = function() {
            this.o = this.j = this.s = this.l = 0;
            this.g = []
        };
        mt.prototype.A = function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (0 < c.intersectionRatio && null != c.target[nt]) {
                    this.s += rl(c.target).length;
                    var d = c.target[nt];
                    this.o += this.g[d];
                    this.g[d] = 0;
                    delete c.target[nt]
                }
            }
        };
        yp.attach(36546, mt.prototype, {
            Cg: 1
        });
        var nt = "_gt_" + Math.random().toString(36).substr(2);
        var ot = function(a, b) {
            _.A.call(this);
            a = a || {};
            this.g = Bi(a);
            this.g.bc = a.bc;
            this.g.rf = !!a.rf;
            this.g.Qh = parseInt(a.Qh, 10) || 300;
            this.g.xj = a.xj;
            this.g.trackVisibility = a.trackVisibility || !1;
            this.A = 0;
            this.j = {};
            this.s = new _.$f(this);
            this.l = new jt(this, this.g);
            b && (this.l.s = b || {});
            a = this.l;
            a.h = new Xs({
                Gj: a.g.Gj
            });
            a.h.vg = 300;
            a.h.ah = 1E3;
            a.h.bd(!0);
            a.j.I(a.h, "show", (0,
                _.x)(a.rh, a));
            a.j.I(a.h, "hide", (0,
                _.x)(a.qh, a));
            a.g.bc && "te_cl" != Cn && (b = new cs({
                    id: "contribute",
                    Qe: V.mh,
                    Od: "dblclick",
                    re: !0
                }, a.s),
                a.h.Of(b),
                a.j.I(b, "submitted", (0,
                    _.x)(a.rj, a)));
            a.h.Ma();
            if ("voting" === An || "translation-voting" === An)
                a = new Zs,
                R("goog-gt-thumbUpButton") && (ct(a),
                    et(a),
                    ht(a));
            this.o = this.h = null;
            this.g.trackVisibility && null != _.q.IntersectionObserver && (this.h = new mt,
                this.o = new kt(this.h))
        };
        _.w(ot, _.A);
        var pt = function(a) {
            a.o && a.o.stop();
            for (var b in a.j) {
                var c = a,
                    d = b,
                    e = c.j[d];
                if (e) {
                    if (c.h)
                        for (var f = c.h, g = e.La, h = 0; h < g.length; ++h) {
                            var k = f,
                                m = g[h];
                            jl(m) ? (m[nt] = void 0,
                                k.h && k.h.unobserve(m)) : k.Cg(m.nodeType)
                        }
                    for (f = 0; f < e.La.length; ++f)
                        e.La[f] && c.l.Hf(e.La[f]);
                    delete c.j[d]
                }
            }
            a.h && a.h.reset()
        };
        ot.prototype.K = function() {
            pt(this);
            this.s.T();
            this.s = null;
            this.l.T();
            this.l = null
        };
        var qt = function(a) {
                for (var b = 0; b < a.length; ++b)
                    if (a[b] && a[b].node)
                        return a[b].node;
                return null
            },
            ut = function(a) {
                var b = qt(a);
                if (!b)
                    return null;
                var c = [],
                    d = [],
                    e = [];
                b = new $p(b, !0);
                var f = a[a.length - 1].node,
                    g = 0,
                    h = !1;
                do {
                    b.next();
                    var k = b.node();
                    if (!k)
                        break;
                    var m = b.g.g,
                        n = b.depth();
                    for (1 == m && --n; g < a.length && !a[g].node;)
                        ++g;
                    k == a[g].node || !h && 1 == m && (null != k && null == k.previousSibling ? 0 : !rt(st(k))) ? (m = tt(k),
                        d.push({
                            node: m,
                            gb: function() {}
                        }),
                        e[d.length - 1] = n,
                        k.parentNode && k.parentNode.insertBefore(m, k),
                        k == a[g].node && (c[g++] = d.length - 1,
                            h = !0)) : h = !1
                } while (k != f);
                return {
                    Af: e,
                    uj: c,
                    Qi: d
                }
            },
            rt = function(a) {
                return null != a && Up[a.tagName]
            },
            st = function(a) {
                if (null == a)
                    return null;
                for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == (0,
                        _.dc)(rl(a));)
                    a = a.previousSibling;
                return a
            },
            xt = function(a, b, c, d, e, f) {
                _.E.call(this);
                this.g = [];
                for (var g = 0; g < a.length; ++g)
                    this.g.push("nodeType" in a[g] ? vt(a[g]) : a[g]),
                    wt(a[g].node);
                this.j = b;
                this.H = d || 0;
                this.S = e || 0;
                this.C = c;
                this.A = f || null;
                this.G = this.D = this.N = !1;
                this.o = [];
                this.s = [];
                this.h = [];
                this.M = [];
                new _.$f(this);
                this.l = this.L = !1
            },
            vt;
        _.w(xt, _.E);
        var At = function(a) {
                if (!a)
                    return !1;
                if (3 != a.nodeType || !_.C)
                    return yt in a && !!a[yt];
                if (!a.parentNode)
                    return !0;
                if (!(zt in a.parentNode))
                    return !1;
                var b = a.parentNode[zt];
                if (!b || !b[a.nodeValue])
                    return !1;
                b = b[a.nodeValue];
                for (var c = 0; c < b.length; ++c)
                    if (b[c] == a)
                        return !0;
                return !1
            },
            Bt = function(a, b) {
                if (!a)
                    return "";
                if ("TITLE" == a.tagName)
                    return String(document.title);
                3 == a.nodeType ? b = "nodeValue" : b || (b = "value");
                return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : "string" === typeof a[b] ? String(a[b]) : ""
            };
        xt.prototype.pa = function() {
            return this.j
        };
        var Ct = function(a, b, c) {
                b = {
                    Ng: b,
                    bf: c,
                    ia: []
                };
                a.h.push(b);
                return b
            },
            Et = function(a) {
                if (!a.l && a.N && !a.D && !a.G) {
                    a.D = !0;
                    var b;
                    if (b = Dt(a.g)) {
                        b = a.g;
                        var c = a.h;
                        if (1 == b.length && b[0] && b[0].yf) {
                            for (var d = [], e = 0; e < c.length; ++e)
                                for (var f = 0; f < c[e].ia.length; ++f)
                                    d.push(c[e].ia[f].ea);
                            b[0].gb(d.join(" "), b[0].node);
                            b = !0
                        } else
                            b = !1;
                        b = !b
                    }
                    if (b && (b = ut(a.g))) {
                        a.s = b.uj;
                        a.o = b.Qi;
                        d = a.g;
                        e = a.s;
                        f = a.o;
                        var g = b.Af;
                        c = [];
                        for (var h = 0; h < d.length; ++h)
                            if (c[h] = [],
                                d[h].node && void 0 !== e[h])
                                for (var k = 0; k < f.length; ++k)
                                    if (!(g[k] > g[e[h]])) {
                                        if (g[k] == g[e[h]]) {
                                            if (f[k].node.parentNode != f[e[h]].node.parentNode)
                                                continue
                                        } else {
                                            for (var m = g[e[h]] - g[k], n = f[e[h]].node.parentNode; m-- && n && n != f[k].node.parentNode;)
                                                n = n.parentNode;
                                            if (n != f[k].node.parentNode)
                                                continue
                                        }
                                        c[h].push(k)
                                    }
                        d = a.g;
                        e = a.h;
                        f = -1;
                        for (g = e.length - 1; 0 <= g; --g)
                            for (h = e[g],
                                k = h.ia.length - 1; 0 <= k; --k)
                                if (m = h.ia[k], !(0 > m.ba) && d[m.ba] && d[m.ba].node)
                                    if (0 > f)
                                        m.Jd = dp(c[m.ba]),
                                        f = c[m.ba][c[m.ba].length - 1];
                                    else
                                        for (n = c[m.ba].length - 1; 0 <= n; --n)
                                            if (c[m.ba][n] <= f) {
                                                m.Jd = dp(c[m.ba].slice(0, n + 1));
                                                f = c[m.ba][n];
                                                break
                                            }
                        for (c = e = 0; c < a.h.length; ++c) {
                            d = a.h[c];
                            f = a.g;
                            g = b.Af;
                            h = a.s;
                            k = "";
                            for (m = 0; m < d.ia.length; ++m)
                                if (n = d.ia[m],
                                    k += n.ea,
                                    0 > n.ba) {
                                    var p = -1,
                                        r = -1,
                                        t = h[d.ia[m - 1].ba];
                                    void 0 !== t && (p = g[t]);
                                    m < d.ia.length - 1 && (t = h[d.ia[m + 1].ba],
                                        void 0 !== t && (r = g[t]));
                                    if (0 <= p || 0 <= r)
                                        a: if (r = (0 > p || r < p) && m < d.ia.length - 1,
                                            p = d.ia[r ? m + 1 : m - 1], !(p.ba >= f.length || null == f[p.ba].node)) {
                                            t = n.ea;
                                            n.ea = "";
                                            if (/^ +$/.test(t) && (n = r ? p.ea.charCodeAt(0) : p.ea.charCodeAt(p.ea.length - 1),
                                                    3584 <= n && 3711 >= n || 12288 <= n && 12351 >= n || 12352 <= n && 12543 >= n || 12784 <= n && 12799 >= n || 19968 <= n && 40959 >= n || 65280 <= n && 65519 >= n))
                                                break a;
                                            p.ea = r ? t + p.ea : p.ea + t
                                        }
                                }
                            f = k;
                            g = a.g;
                            h = a.o;
                            k = b.Af;
                            m = a.s;
                            n = [];
                            for (p = 0; p < d.ia.length && !(e >= h.length); ++p)
                                if (r = d.ia[p],
                                    r.Jd && !(0 > r.ba) && g[r.ba].node && r.ea)
                                    if (e == m[r.ba] || e in r.Jd && (!(e + 1 in r.Jd) || e + 1 != m[r.ba])) {
                                        if (h[e] && h[e].node) {
                                            t = tt(h[e].node);
                                            n.push(t);
                                            for (var y = h[e].node, G = k[m[r.ba]] - k[e], P = t, Ca = g[r.ba].node.parentNode, na = P; Ca && G--;)
                                                na = Ca.cloneNode(!1),
                                                na.appendChild(P),
                                                Ca = Ca.parentNode,
                                                P = na;
                                            y.appendChild(na);
                                            y = g[r.ba].node;
                                            g[r.ba].ce ? g[r.ba].yg || t.appendChild(y) : (y = g[r.ba].node.cloneNode(!1),
                                                y.id && (y.id = ""),
                                                t.appendChild(y));
                                            g[r.ba].gb(r.ea, y)
                                        }
                                    } else
                                        ++e,
                                        --p;
                            g = n;
                            n = a.g;
                            h = a.C;
                            if (d.Ng)
                                h = d.Ng;
                            else {
                                m = n.length;
                                k = -1;
                                for (p = 0; p < d.ia.length; ++p)
                                    r = d.ia[p].ba,
                                    0 <= r && n[r] && n[r].node && (k = Math.max(k, r),
                                        m = Math.min(m, r));
                                for (n = ""; m <= k; ++m)
                                    h[m] && (n += h[m]);
                                h = n
                            }
                            m = g;
                            n = h;
                            if (a.A) {
                                if (3 != a.A.g.bc) {
                                    g = a.M;
                                    h = g.push;
                                    k = a.A;
                                    d = d.bf;
                                    p = a;
                                    d = k.j[++k.A] = {
                                        id: k.A.toString(),
                                        Yh: p,
                                        text: n,
                                        fm: d || n,
                                        ea: f,
                                        Hj: k.C,
                                        Jj: k.F,
                                        La: m
                                    };
                                    for (f = 0; f < m.length; ++f)
                                        m[f] && k.l.attach(d.id, m[f]);
                                    k.h && k.h.attach(m, n.length);
                                    k.o && k.o.start();
                                    h.call(g, d.id)
                                }
                            } else
                                for (d = 0; d < m.length; ++d)
                                    m[d].title = n
                        }
                        b = a.g;
                        for (c = 0; c < b.length; ++c)
                            b[c].node && !b[c].ce && il(b[c].node);
                        b = a.g;
                        c = a.o;
                        a = a.s;
                        for (e = d = 0; e < c.length; ++e)
                            if (f = c[e].node) {
                                for (; d < b.length && e > a[d];)
                                    d++;
                                (d >= b.length || e != a[d]) && !f.firstChild && (il(f),
                                    c[e].node = null)
                            }
                    }
                }
            };
        xt.prototype.restore = function() {
            if (this.D)
                if (this.D = !1,
                    this.A && pt(this.A),
                    this.M = [],
                    Dt(this.o),
                    1 == this.g.length && this.g[0].yf)
                    this.g[0].gb(this.C[0], this.g[0].node);
                else {
                    for (var a = 0, b = 0; b < this.o.length; ++b) {
                        var c = this.o[b].node;
                        if (c) {
                            for (; a < this.g.length && b > this.s[a];) {
                                var d = a++;
                                this.g[d].node && (Ft(this.g[d].node),
                                    this.g[d].node = null)
                            }
                            if (a < this.g.length && b == this.s[a] && this.g[a].node) {
                                this.g[a].yg || (_.od(c),
                                    c.appendChild(this.g[a].node));
                                this.g[a].gb(this.C[a], this.g[a].node);
                                a++;
                                var e = c.parentNode;
                                if (e && 11 != e.nodeType)
                                    if (c.removeNode)
                                        c.removeNode(!1);
                                    else {
                                        for (; d = c.firstChild;)
                                            e.insertBefore(d, c);
                                        il(c)
                                    }
                            } else
                                il(c)
                        }
                    }
                    this.o = []
                }
        };
        xt.prototype.K = function() {
            _.E.prototype.K.call(this);
            this.restore();
            for (var a = 0; a < this.g.length; ++a)
                this.g[a].node && Ft(this.g[a].node);
            this.g = null
        };
        var wt = function(a) {
                if (a)
                    if (3 == a.nodeType && _.C) {
                        zt in a.parentNode && a.parentNode[zt] || (a.parentNode[zt] = {});
                        var b = a.parentNode[zt];
                        b[a.nodeValue] || (b[a.nodeValue] = []);
                        b = b[a.nodeValue];
                        for (var c = 0; c < b.length; ++c)
                            if (b[c] == a)
                                return;
                        b.push(a)
                    } else
                        a[yt] = 1
            },
            Ft = function(a) {
                if (!a || 3 == a.nodeType && _.C) {
                    var b = a.parentNode;
                    if (b && zt in b) {
                        var c = b[zt];
                        if (c && a && c[a.nodeValue]) {
                            var d = c[a.nodeValue];
                            if (d)
                                for (var e = 0; e < d.length; ++e)
                                    if (d[e] == a) {
                                        d.splice(e, 1);
                                        break
                                    }
                            0 == d.length && delete c[a.nodeValue]
                        }
                        if (c && rp(c))
                            try {
                                delete b[zt]
                            } catch (f) {
                                b[zt] = ""
                            }
                    }
                } else if (yt in a)
                    try {
                        delete a[yt]
                    } catch (f) {
                        a[yt] = ""
                    }
            },
            Dt = function(a) {
                for (var b = 0; b < a.length; ++b)
                    try {
                        a[b].node && !a[b].node.parentNode && (a[b].node = null)
                    } catch (c) {
                        a[b].node = null
                    }
                for (b = a.length - 1; 0 <= b && !a[b].node; --b)
                ;
                a.length = b + 1;
                return a.length
            },
            tt = function(a) {
                a = a.ownerDocument ? a.ownerDocument.createElement("font") : _.ld(document, "font");
                wt(a);
                a.style.verticalAlign = "inherit";
                return a
            },
            Gt = function(a) {
                for (var b = new Set, c = 0; c < a.g.length; c++) {
                    var d = a.g[c].node;
                    null != d && b.add(d)
                }
                return b
            },
            Ht = function() {
                this.h = {};
                this.g = {}
            };
        Ht.prototype.has = function(a, b) {
            return null != this.h[a] || null != this.g[a] || b && (a in this.h || a in this.g)
        };
        Ht.prototype.write = function(a, b) {
            this.g[a] = b
        };
        Ht.prototype.remove = function(a) {
            delete this.g[a];
            delete this.h[a]
        };
        var yt = "_gt_" + Math.random().toString(36).substr(2),
            zt = "_gtn_" + Math.random().toString(36).substr(2);
        (function() {
            function a(c) {
                document.title = c
            }
            var b = {};
            vt = function(c, d) {
                if ("TITLE" == c.tagName)
                    return {
                        node: c,
                        gb: a,
                        ce: !0,
                        yg: !0,
                        yf: !0
                    };
                if (3 == c.nodeType)
                    return {
                        node: c,
                        gb: function(e, f) {
                            _.qd(f, e)
                        }
                    };
                d || (d = "value");
                b[d] || (b[d] = function(e, f) {
                    f.setAttribute && f.setAttribute(d, e);
                    "string" === typeof e && (f[d] = e)
                });
                c = {
                    node: c,
                    gb: b[d],
                    ce: !0
                };
                "value" != d && (c.yf = !0);
                return c
            }
        })();
        var It = function(a, b, c, d) {
                d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : rl(d);
                d = {
                    ba: c,
                    ea: el(d)
                };
                a.push(d);
                b[c] ? b[c].end = d : b[c] = {
                    start: d,
                    end: d
                };
                return d
            },
            Jt = function(a) {
                for (var b, c = a.firstChild; c; c = b)
                    b = c.nextSibling,
                    3 != c.nodeType && (c == a.firstChild ? a.parentNode && a.parentNode.insertBefore(c, a) : hl(c, a),
                        Jt(c))
            };
        var Kt = function() {
            this.g = []
        };
        Kt.prototype.add = function(a) {
            this.g.push(a)
        };
        var Lt = function() {
            this.g = []
        };
        _.w(Lt, Kt);
        Lt.prototype.add = function(a) {
            if (a)
                for (; a();)
            ;
        };
        Lt.Pb = function() {
            return So(Lt)
        };
        var Nt = function(a) {
            this.g = [];
            this.h = .5;
            Mt(this, a);
            this.l = 0;
            this.j = !0;
            this.o = (0,
                _.x)(this.s, this)
        };
        _.w(Nt, Kt);
        var Mt = function(a, b) {
            1 < b ? a.h = 1 : .001 > b ? a.h = .001 : b && (a.h = b)
        };
        Nt.prototype.add = function(a) {
            Kt.prototype.add.call(this, a);
            this.j && Ot(this)
        };
        var Ot = function(a) {
            a.j = !1;
            window.setTimeout(a.o, Math.min(a.l, 5E3))
        };
        Nt.prototype.s = function() {
            var a = (new Date).getTime();
            do {
                this.g.length && (this.g[0] && this.g[0]() || this.g.shift());
                var b = !!this.g.length;
                var c = 95 * this.h + 5;
                var d = (new Date).getTime() - a
            } while (b && d < c);
            this.l = Math.ceil(d * (1 / this.h - 1)) + 1;
            b ? Ot(this) : this.j = !0
        };
        var Pt = function(a, b) {
                this.F = a || null;
                this.L = b || Lt.Pb();
                this.A = this.s = this.H = null;
                this.l = this.j = !1;
                this.o = null;
                this.g = [];
                this.h = 0
            },
            Qt = function(a, b) {
                a.j || (a.H = b)
            },
            Rt = function(a, b, c) {
                a.s = c ? (0,
                    _.x)(b, c) : b
            },
            St = function(a, b, c) {
                a.A = c ? (0,
                    _.x)(b, c) : b
            },
            Tt = function(a, b) {
                a.j || (a.j = !0,
                    a.D = b,
                    a.h++,
                    a.o = a.H,
                    a.C())
            };
        Pt.prototype.stop = function() {
            this.h++;
            this.j = !1;
            this.g = []
        };
        var Ut = function(a) {
                if (!a.j)
                    return null;
                for (var b = !1, c = 0; c < a.g.length; ++c)
                    if (a.g[c].target === a) {
                        a.g[c].ready = !1;
                        a.g[c].ih = a.h + 1;
                        b = !0;
                        break
                    }
                b || a.g.push({
                    target: a,
                    ready: !1,
                    ih: a.h + 1
                });
                return (0,
                    _.x)(a.C, a, a, a.h + 1)
            },
            Vt = function(a) {
                if (!a.j)
                    return !0;
                for (var b = 0; b < a.g.length; ++b)
                    if (a.g[b].target === a && a.g[b].ih == a.h)
                        return a.g[b].ready;
                return !0
            };
        Pt.prototype.C = function(a, b) {
            if (this.j) {
                if (a)
                    for (var c = 0; c < this.g.length; ++c)
                        if (this.g[c].target === a) {
                            this.g[c].ready = !0;
                            break
                        }
                this.l || this.L.add((0,
                    _.x)(this.G, this, b || this.h))
            }
        };
        Pt.prototype.G = function(a) {
            if (this.h != a)
                return !1;
            a = this.o;
            if (a == Wt)
                return this.stop(),
                    this.s && this.s.call(this.F, this, this.D), !1;
            this.l = !0;
            try {
                var b = a.call(this.F, this, this.D);
                if (!b)
                    throw Error();
            } catch (c) {
                this.stop();
                a = c;
                if (this.A)
                    this.A.call(this.F, a, this, this.D);
                else
                    throw a;
                return !1
            } finally {
                this.l = !1
            }
            b != Xt && (this.o = b,
                this.h++,
                this.C());
            return !1
        };
        var Xt = function() {},
            Wt = function() {};
        var Zt = function(a, b, c, d, e) {
                b = b || {};
                this.G = e || [];
                this.s = [];
                this.D = [];
                Yt(this, a || document.documentElement, void 0 === b.Vg || !!b.Vg);
                this.C = c || xt;
                this.F = b.Yi;
                this.j = this.g = this.o = this.Uc = null;
                this.A = !!b.Oj;
                this.ga = !!b.Nj;
                this.N = this.A ? 27 : 13;
                this.L = !0;
                this.H = [];
                this.l = new Pt(this, d)
            },
            $t = function(a, b, c, d) {
                a.l.j || (b = {
                        gh: b,
                        bh: c,
                        La: [],
                        Og: [],
                        Zb: [],
                        textLength: 0,
                        size: 0,
                        continuous: !0
                    },
                    a.Uc = null,
                    Qt(a.l, a.h),
                    Rt(a.l, d),
                    St(a.l, (0,
                        _.x)(function(e) {
                        this.fj(e);
                        d()
                    }, a)),
                    Tt(a.l, b))
            },
            au = function(a, b) {
                return 0 < a.La.length ? new b(a.La, a.Zb.join(""), a.Og, a.textLength, a.size) : null
            },
            bu = function(a, b) {
                if (!a.j)
                    return a.Uc = au(b, a.C), !0;
                if (!b.continuous && 0 < b.La.length)
                    return a.Uc = au(b, a.C), !0;
                b.continuous = a.j.Jg;
                a: {
                    var c = a.j;
                    var d = a.N;
                    if (b.size > b.bh || b.textLength > b.gh)
                        c = !1;
                    else {
                        var e = c.size,
                            f = c.text.length;
                        if (0 != b.La.length && (e += 1 == b.La.length ? b.size + d + d : b.size + d,
                                f += b.textLength,
                                e > b.bh || f > b.gh)) {
                            c = !1;
                            break a
                        }
                        b.size = e;
                        b.textLength = f;
                        b.La.push(c.node);
                        b.Og.push(c.text);
                        d = b.La.length - 1;
                        0 == d ? b.Zb.push(c.ze) : (1 == d && (b.Zb[0] = "<a i=0>" + b.Zb[0] + "</a>"),
                            b.Zb.push("<a i=" + d + ">"),
                            b.Zb.push(c.ze),
                            b.Zb.push("</a>"));
                        c = !0
                    }
                }
                if (c)
                    return a.j = null, !1;
                a.Uc = au(b, a.C);
                return !0
            },
            cu = function(a, b, c) {
                var d = Bt(b, c);
                d && (0,
                    _.dc)(Zk(d)) && a.H.push({
                    node: b,
                    Nh: c,
                    text: d
                })
            };
        Zt.prototype.h = function(a, b) {
            var c = this;
            if (this.j && bu(this, b))
                return Wt;
            if (!this.g) {
                this.L = !!this.s.length;
                if (!this.s.length && (a = this.H.shift()))
                    return this.j = {
                            Jg: !1,
                            node: vt(a.node, a.Nh),
                            text: a.text,
                            ze: al(a.text),
                            size: this.A ? _.$c(a.text).length : a.text.length
                        },
                        b.continuous = !1,
                        bu(this, b),
                        Wt;
                a = this.s.shift() || this.D.shift();
                if (!a)
                    return this.j = null,
                        bu(this, b),
                        Wt;
                this.o = [a.Mj];
                this.g = new $p(a.root)
            }
            this.g.next();
            if (this.g.done)
                return this.g = null,
                    b.continuous = !1,
                    this.h;
            a = this.g.node();
            var d = this.g.g.g;
            if (-1 == d)
                return du(this),
                    eu(a) || (b.continuous = !1),
                    this.h;
            fu(this, a);
            d = 1 == d;
            var e = !!a && (3 == a.nodeType && "string" === typeof a.nodeValue || "TITLE" == a.tagName && "string" === typeof a.value || "TEXTAREA" == a.tagName && er(a, "translate") || "INPUT" == a.tagName && (Vp[a.type] || er(a, "translate")));
            if ((e || d) && this.L && !gu(a))
                return Yt(this, a, hu(this), !0),
                    Yp(this.g.g),
                    du(this),
                    this.h;
            if (d && hu(this) && (this.ga && cu(this, a, "title"),
                    cu(this, a, "alt"),
                    cu(this, a, "placeholder"),
                    cu(this, a, "aria-label"),
                    cu(this, a, "aria-placeholder"),
                    cu(this, a, "aria-roledescription"),
                    cu(this, a, "aria-valuetext"),
                    aq(this.g)))
                for (var f = a.firstChild; f;) {
                    if (3 == f.nodeType) {
                        var g = f.nodeValue.split("\n");
                        if (2 < g.length || 2 == g.length && "" != (0,
                                _.dc)(g[0]) && "" != (0,
                                _.dc)(g[1])) {
                            f.nodeValue = g[0];
                            for (var h = 1; h < g.length; ++h) {
                                var k = _.dd(a).createElement("font");
                                this.G.push(k);
                                hl(k, f);
                                f = k;
                                hl(_.dd(a).createTextNode("\n" + g[h]), f);
                                f = f.nextSibling
                            }
                        }
                    }
                    f = f.nextSibling
                }
            a.shadowRoot && Array.from(a.shadowRoot.childNodes).forEach(function(n) {
                Yt(c, n, hu(c))
            });
            if (e) {
                Yp(this.g.g);
                if (hu(this)) {
                    var m = Bt(a);
                    if ((0,
                            _.dc)(Zk(m)) && (this.j = {
                                Jg: !0,
                                node: vt(a),
                                text: m,
                                ze: al(m),
                                size: this.A ? _.$c(m).length : m.length
                            },
                            bu(this, b)))
                        return du(this),
                            Wt
                }
                du(this);
                return this.h
            }
            if (d) {
                if (iu(a) || !a.firstChild && "IFRAME" != a.tagName)
                    return b.continuous = b.continuous && !!Up[a.tagName],
                        Yp(this.g.g),
                        du(this),
                        this.h;
                if ("IFRAME" == a.tagName) {
                    try {
                        a.src.match(/https?:\/\//) && _.Bf(a.src.match(_.Af)[3] || null) != window.location.hostname || (m = kl(a).documentElement) && Yt(this, m, hu(this))
                    } catch (n) {}
                    b.continuous = !1;
                    Yp(this.g.g);
                    du(this);
                    return this.h
                }
                hu(this) && eu(a) ? this.F && "A" == a.tagName && a.href && this.F(a) : b.continuous = !1;
                return this.h
            }
            Yp(this.g.g);
            du(this);
            return this.h
        };
        var iu = function(a) {
                return At(a) || 3 != a.nodeType && (!a.tagName || Tp[a.tagName] || Up[a.tagName] || er(a, "skiptranslate"))
            },
            ju = function(a) {
                var b = _.dd(a);
                return b.defaultView && b.defaultView.getComputedStyle ? b.defaultView.getComputedStyle(a, null) : a.currentStyle
            },
            gu = function(a) {
                return 3 == a.nodeType ? !0 : 1 != a.nodeType ? !1 : a.offsetWidth && a.offsetHeight ? !0 : (a = ju(a), !!a && "none" != a.display && "hidden" != a.visibility)
            },
            eu = function(a) {
                if (3 == a.nodeType)
                    return !0;
                if (1 != a.nodeType)
                    return !1;
                var b = ju(a);
                return !!Sp[a.tagName] && (!b || !b.display || "inline" == b.display)
            },
            Yt = function(a, b, c, d) {
                (d ? a.D : a.s).push({
                    root: b,
                    Mj: void 0 === c || c
                })
            },
            hu = function(a) {
                return a.o[a.o.length - 1]
            },
            fu = function(a, b) {
                b = !At(b) && (b.nodeType == wk && hu(a) || !(er(b, "notranslate") || b.attributes && b.attributes.translate && "no" == b.attributes.translate.value) && (er(b, "translate") || !!b.attributes && !!b.attributes.translate && "yes" == b.attributes.translate.value || hu(a)));
                a.o.push(b)
            },
            du = function(a) {
                a.o.pop()
            };
        yp.attach(5762, Zt.prototype, {
            fj: 1
        });
        var ku = function() {
            _.A.call(this);
            this.g = []
        };
        _.w(ku, _.A);
        ku.prototype.restore = function() {
            _.mg(this.h, 0, this)
        };
        ku.prototype.h = function() {
            for (var a = 0; a < this.g.length; ++a)
                il(this.g[a]);
            this.g = []
        };
        ku.prototype.K = function() {
            _.A.prototype.K.call(this);
            this.restore()
        };
        var lu = function(a) {
            var b = new Set;
            a.forEach(function(c) {
                if (jl(c))
                    b.add(c);
                else {
                    a: {
                        var d;
                        if (_.Dc && (d = c.parentElement)) {
                            c = d;
                            break a
                        }
                        d = c.parentNode;
                        c = jl(d) ? d : null
                    }
                    null != c && b.add(c)
                }
            });
            return b
        };
        var mu = function(a) {
            this.h = !0;
            this.l = a;
            this.j = !1;
            this.g = []
        };
        mu.prototype.pa = function() {
            return this.g.join("")
        };
        var nu = function(a, b) {
                this.o = a;
                this.l = !0;
                this.j = b;
                this.g = null;
                this.h = 0
            },
            ou = function(a, b) {
                return a.l ? (b((0,
                    _.x)(a.s, a), a.o, a.j ? "en" : ""), !0) : !1
            };
        nu.prototype.s = function(a, b, c) {
            this.g = b;
            this.h = c;
            a()
        };
        var pu = function(a, b) {
                this.l = a;
                this.F = !!b;
                this.g = this.C = 0;
                this.o = this.j = -1;
                this.s = this.A = this.h = 0
            },
            su = function(a, b, c) {
                a.F && (b -= 9);
                for (var d = "", e = 0, f = a.C; f < a.l.length; ++f) {
                    var g = a.l.charAt(f),
                        h = g.charCodeAt(0);
                    e++;
                    a.h += a.F ? 127 >= h ? 32 >= h || qu[h] ? 3 : 1 : 2047 >= h || 55296 <= h && 56319 >= h || 56320 <= h && 57343 >= h ? 6 : 9 : 1;
                    h = a.h >= b;
                    ru[g] ? (a.o = f,
                        a.A = a.h,
                        h = h || e > c) : " " == g && (a.j = f,
                        a.s = a.h,
                        h = h || e > c);
                    if (h)
                        return 0 <= a.o ? (d = a.l.substring(a.g, a.o + 1),
                                a.h -= a.A,
                                a.g = a.o + 1,
                                a.o >= a.j ? (a.j = -1,
                                    a.s = 0) : a.s -= a.A,
                                a.o = -1,
                                a.A = 0) : 0 <= a.j ? (d = a.l.substring(a.g, a.j + 1),
                                a.h -= a.s,
                                a.g = a.j + 1,
                                a.j = -1,
                                a.s = 0) : (d = a.l.substring(a.g, f + 1),
                                a.h = 0,
                                a.g = f + 1,
                                a.o = a.j = -1,
                                a.s = a.A = 0),
                            a.C = f + 1,
                            d
                }
                a.g < a.l.length && (d = a.l.substring(a.g),
                    a.g = a.l.length);
                return d
            },
            ru = dp(". , ; : \\? !".split(" ")),
            qu = dp([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);
        var tu = function(a, b, c, d, e, f) {
                this.A = d || function() {};
                this.Y = f || function() {};
                this.N = !!e;
                this.j = a.g.Hg;
                this.l = 0;
                this.L = function() {};
                this.F = c;
                this.D = this.h = this.o = 0;
                this.g = null;
                this.G = 0;
                this.da = !1;
                this.U = a.g.Fg;
                this.ga = [];
                this.Xa = 0;
                this.M = a.g.we;
                this.s = Qp(a);
                this.na = this.N ? 1 : 6;
                this.ta = a.g.Wg;
                this.Ba = b;
                this.C = [];
                this.S = a
            },
            uu = function(a, b) {
                var c = 0;
                a.L = (0,
                    _.x)(function() {
                    ++c == this.C.length && b()
                }, a)
            },
            vu = function(a, b, c) {
                a.A = function() {};
                a.Ba = b;
                a.g = null;
                a.Xa = 0;
                a.C = [];
                a.L = function() {};
                a.F = c
            },
            wu = function(a, b, c) {
                if (0 == a.h && (a.h = b ? 860 : a.s, !c || c <= a.s)) {
                    a.o = a.h;
                    return
                }
                do
                    b = a.h,
                    a.h < a.s && (a.h *= a.na,
                        a.h > a.s && (a.h = a.s));
                while (b != a.h && c && a.h < c);
                a.o = a.h
            },
            xu = function(a, b) {
                var c = null != b,
                    d = !c && !a.da;
                (d || c) && a.A(100, d, b)
            },
            yu = function(a) {
                return a.M ? a.g.S : a.g.pa().length
            },
            zu = function(a, b, c, d, e) {
                return new Zt(a.Ba.shift(), {
                    Oj: a.M,
                    Yi: b,
                    Vg: !0,
                    Nj: !!c
                }, function() {
                    var f = Array.prototype.slice.call(arguments);
                    return new xt(f.shift(), f.shift(), f.shift(), f.shift(), f.shift(), c, d)
                }, a.F, e)
            },
            Cu = function(a, b, c) {
                if (0 < a.U && Au(b) >= a.U)
                    return !0;
                if (yu(a) > a.h) {
                    if (0 < Au(b))
                        return !0;
                    wu(a, c, yu(a));
                    for (var d = a.g.pa(), e = new pu(d, a.M), f; f = su(e, a.h, a.j);)
                        if (b.o.push(new nu([f], !1)),
                            a.l += f.length,
                            a.j -= f.length,
                            0 >= a.j) {
                            b.D = d.substring(e.g);
                            break
                        } else
                            wu(a, c);
                    Bu(b, a.g, !0);
                    a.g = null;
                    return !0
                }
                if (yu(a) > a.o)
                    return !0;
                Bu(b, a.g, !0);
                a.o -= yu(a) + a.ta;
                a.l += a.g.H;
                a.j -= a.g.H;
                a.g = null;
                return !1
            },
            Du = function(a, b, c, d, e, f, g) {
                c = a.S.translate(b, c, d, e, ++a.Xa, f, g, a.N).then(function(h) {
                    b(h, 200)
                }, function() {
                    b([], 500)
                });
                a.ga.push(c);
                return c
            };
        var Eu = function(a, b) {
            _.A.call(this);
            this.l = b;
            this.j = {
                rootMargin: a
            };
            this.g = new IntersectionObserver((0,
                _.x)(this.h, this), this.j)
        };
        _.w(Eu, _.A);
        Eu.prototype.K = function() {
            _.A.prototype.K.call(this);
            this.g = null
        };
        Eu.prototype.h = function(a) {
            for (var b = 0; b < a.length; b++)
                if (0 < a[b].intersectionRatio) {
                    this.l();
                    break
                }
        };
        var Fu = function(a) {
                return (0,
                    _.L)('<span id="' + U(a.id) + '"></span>')
            },
            Gu = function(a) {
                var b = a.id,
                    c = a.Pg;
                return (0,
                    _.L)(Ym(a.Qg) + '<div id="' + U(b) + '"></div>' + Ym(c))
            },
            tk = function(a) {
                var b = a.top,
                    c = a.left,
                    d = a.bottom,
                    e = a.right,
                    f = a.id;
                return (0,
                    _.li)("." + gn(a.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (Im(b) || Hm(b, 0) ? "top:" + gn(b) + "px; _top:expression((" + gn(b) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;") + (Im(c) || Hm(c, 0) ? "left:" + gn(c) + "px; _left:expression((" + gn(c) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;") + (Im(d) || Hm(d, 0) ? "bottom:" + gn(d) + "px; _top:expression((-" + gn(d) + "-document.getElementById('" + String(f).replace(bn, Um) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;") + (Im(e) || Hm(e, 0) ? "right:" + gn(e) + "px; _left:expression((-" + gn(e) + "-document.getElementById('" + String(f).replace(bn, Um) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "right:auto;") + "}")
            },
            Hu = function() {
                return (0,
                    _.L)('<div class="' + U("VIpgJd-ZVi9od-aZ2wEe-wOHMyf") + '"><div class="' + U("VIpgJd-ZVi9od-aZ2wEe-OiiCO") + '"><svg xmlns="http://www.w3.org/2000/svg" class="' + U("VIpgJd-ZVi9od-aZ2wEe") + '" width="96px" height="96px" viewBox="0 0 66 66"><circle class="' + U("VIpgJd-ZVi9od-aZ2wEe-Jt5cK") + '" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>')
            };
        var Iu = function() {
            O.call(this)
        };
        _.w(Iu, O);
        Iu.prototype.R = function() {
            this.ya(Oi(Hu))
        };
        Iu.prototype.ya = function(a) {
            this.o = a
        };
        var Ju = function(a) {
            hr(a.B(), "VIpgJd-ZVi9od-aZ2wEe-wOHMyf-ti6hGc");
            hr(a.B().firstChild, "VIpgJd-ZVi9od-aZ2wEe-OiiCO-ti6hGc")
        };
        var Ku = function() {
            this.g = new Iu;
            this.g.R();
            this.g.Ma();
            this.h = 0
        };
        Ku.prototype.reset = function() {
            this.h = 0;
            Ju(this.g)
        };
        var Lu = function(a, b, c, d, e, f, g, h) {
                this.o = a;
                this.g = b;
                this.C = [];
                this.D = null;
                this.h = c;
                this.l = d;
                this.j = e;
                this.N = f;
                this.ga = g;
                this.F = this.s = null;
                this.A = h || null;
                this.G = this.L = !1;
                this.H = {}
            },
            Mu = function(a) {
                for (var b = new Set, c = 0; c < a.length; c++)
                    Gt(a[c]).forEach(function(d) {
                        return b.add(d)
                    });
                return b
            };
        Lu.prototype.trackVisibility = function(a) {
            a = this.s = new Eu("200px", (0,
                _.x)(this.Ba, this, a));
            var b = lu(Mu([].concat(this.g, this.C)));
            wl(b, (0,
                _.x)(a.g.observe, a.g));
            a = this.F = new Eu("0px", (0,
                _.x)(this.Xa, this));
            b = lu(Mu([].concat(this.g, this.C)));
            wl(b, (0,
                _.x)(a.g.observe, a.g))
        };
        Lu.prototype.Ba = function(a) {
            this.s && (this.s.g.disconnect(),
                this.s = null);
            a()
        };
        Lu.prototype.Xa = function() {
            this.L = !0;
            Nu(this);
            if (!this.G && this.A) {
                var a = this.A;
                0 == a.h++ && (a = a.g,
                    fr(a.B(), "VIpgJd-ZVi9od-aZ2wEe-wOHMyf-ti6hGc"),
                    fr(a.B().firstChild, "VIpgJd-ZVi9od-aZ2wEe-OiiCO-ti6hGc"))
            }
        };
        var Nu = function(a) {
            a.F && (a.F.g.disconnect(),
                a.F = null)
        };
        Lu.prototype.M = function() {
            if (this.L && !this.G && this.A) {
                var a = this.A;
                0 == --a.h && Ju(a.g)
            }
            this.s && (this.s.g.disconnect(),
                this.s = null);
            Nu(this)
        };
        var Bu = function(a, b, c) {
                c ? (a.g.push(b),
                    a.H[b.pa()] = !0) : a.C.push(b)
            },
            Au = function(a) {
                return a.g.length + a.C.length
            },
            Ou = function(a) {
                if (0 == a.o.length) {
                    for (var b = [], c = 0; c < a.g.length; ++c)
                        b.push(a.g[c].pa());
                    a.o.push(new nu(b, !1))
                }
            };
        Lu.prototype.translate = function(a) {
            function b() {
                d++;
                d == c && e()
            }
            Ou(this);
            for (var c = 0, d = 0, e = function() {}, f = this.h, g = this.l, h = this.j, k = this.N, m = this.ga, n = 0; n < this.o.length; ++n)
                ou(this.o[n], function(p, r, t) {
                    return Du(f, _.Cb(p, b), r, t || g, h, k, m)
                }) && c++;
            0 != c && (e = Ut(a));
            return c
        };
        var Pu = function(a, b) {
            _.A.call(this);
            this.g = [];
            this.h = [];
            this.l = a;
            this.j = b
        };
        _.w(Pu, _.A);
        Pu.prototype.o = function(a) {
            var b = (0,
                _.dc)(a.href);
            0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.h.push(a.href),
                this.g.push(a),
                a.href = b + "#googtrans/" + this.l + "/" + this.j)
        };
        Pu.prototype.K = function() {
            _.A.prototype.K.call(this);
            this.restore()
        };
        Pu.prototype.restore = function() {
            if (this.g.length) {
                for (var a = 0; a < this.g.length; ++a)
                    this.g[a].href = this.h[a];
                this.g = [];
                this.h = []
            }
        };
        var Qu = function(a, b) {
            _.A.call(this);
            this.g = a;
            this.h = _.zf.test(b) ? "translated-rtl" : "translated-ltr";
            a = [].concat(this.g);
            for (b = 0; b < a.length; ++b)
                jl(a[b]) && fr(a[b], this.h)
        };
        _.w(Qu, _.A);
        Qu.prototype.K = function() {
            _.A.prototype.K.call(this);
            this.restore()
        };
        Qu.prototype.restore = function() {
            for (var a = [].concat(this.g), b = 0; b < a.length; ++b)
                jl(a[b]) && hr(a[b], this.h)
        };
        var Ru = function(a, b, c, d, e, f, g, h, k, m) {
            _.A.call(this);
            this.F = a;
            this.Nc = b;
            this.Y = c || null;
            this.ka = m || null;
            this.L = null;
            this.Da = !!d;
            this.Sc = e || "transparent";
            this.Oc = !!f;
            this.D = [];
            this.Yb = this.H = this.g = !1;
            this.h = h || new Ht;
            this.xd = !h;
            this.da = g || Lt.Pb();
            this.yb = new ku;
            this.ta = this.na = this.G = !1;
            this.zb = this.o = .5;
            this.Ab = .01;
            this.C = new Nt(this.o);
            this.S = (this.A = this.U = !!k) ? new MutationObserver((0,
                _.x)(this.Gi, this)) : null;
            this.j = this.l = null;
            _.D(window, "blur", this.rg, !0, this);
            _.D(window, "focus", this.sg, !0, this)
        };
        _.w(Ru, _.A);
        _.l = Ru.prototype;
        _.l.Db = function() {
            return this.l ? this.l : ""
        };
        _.l.ua = function() {
            return this.j ? this.j : ""
        };
        _.l.Vh = function(a) {
            this.bj.apply(this, arguments);
            this.s && this.s(0, !1, 1)
        };
        _.l.ag = function(a) {
            this.cj.apply(this, arguments);
            this.s && this.s(0, !1, 1)
        };
        _.l.Wh = function(a) {
            this.dj.apply(this, arguments);
            this.s && this.s(0, !1, 1)
        };
        _.l.Xh = function(a) {
            this.ej.apply(this, arguments);
            this.s && this.s(0, !1, 1)
        };
        _.l.translate = function(a, b, c, d, e) {
            if (d || a != this.l || b != this.j)
                Su(this),
                this.xd && (this.h = new Ht);
            else if (this.g)
                return;
            this.s = c;
            this.ud = e;
            this.A = this.U;
            this.S && this.S.observe(document.body, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            });
            this.g = !0;
            this.l = a;
            this.j = b;
            this.Da && (this.L = new Pu(a, b));
            this.ta = "auto" == this.l;
            this.Y && (c = this.Y,
                a && (c.C = a),
                b && (c.F = b));
            this.Ca = new Qu(this.F, this.j);
            this.N = Tu(this);
            (a = this.F instanceof Node ? this.F : null) && Uu(a, this.j)
        };
        var Tu = function(a) {
            var b = new Pt(a, a.da);
            Qt(b, a.qg);
            St(b, (0,
                _.x)(a.Vh, a));
            Tt(b, new tu(a.Nc, [].concat(a.F), a.da, a.s, a.A, a.ud));
            return b
        };
        Ru.prototype.restore = function() {
            Su(this);
            this.yb.restore();
            var a = this.F instanceof Node ? this.F : null;
            a && Uu(a, this.Db())
        };
        Ru.prototype.K = function() {
            _.A.prototype.K.call(this);
            this.restore();
            _.Rd(window, "blur", this.rg, !0, this);
            _.Rd(window, "focus", this.sg, !0, this)
        };
        var Vu = function(a, b, c, d) {
            var e = rp(a.h.h),
                f = new Pt(a, b.F);
            b.C.push(f);
            Rt(f, b.L);
            wu(b, e);
            Qt(f, d || a.ng);
            b = c || new Lu([], [], b, a.Db(), a.ua(), a.Yb, a.H, a.ka);
            St(f, a.Ji, a);
            a.A && Rt(f, b.M, b);
            Tt(f, b)
        };
        _.l = Ru.prototype;
        _.l.Ji = function(a, b, c) {
            c.M();
            this.H ? this.Xh(a) : this.Wh(a);
            c.h.L()
        };
        _.l.sg = function() {
            this.G = !1;
            this.M = 0;
            Mt(this.C, this.o)
        };
        _.l.rg = function(a) {
            a.target == window && (this.G = !0,
                this.M = 0,
                Mt(this.C, .01))
        };
        _.l.Gi = function(a) {
            if (this.g && this.A) {
                for (var b = 0; b < a.length; b++)
                    if (a[b].target && a[b].target.className && "string" === typeof a[b].target.className && (0 <= a[b].target.className.indexOf("translate") || 0 == a[b].target.className.indexOf("goog-")))
                        return;
                this.da.add((0,
                    _.x)(this.Aj, this))
            }
        };
        _.l.Aj = function() {
            this.H = !0;
            this.N.stop();
            this.N = Tu(this);
            return !1
        };
        _.l.qg = function(a, b) {
            uu(b, Ut(a));
            Vu(this, b);
            return this.Mi
        };
        _.l.Mi = function(a, b) {
            if (!this.g)
                return Wt;
            if (!Vt(a))
                return Xt;
            if (!this.A)
                for (a = 0; a < this.D.length; ++a) {
                    var c = (0,
                        _.x)(this.Qf, this, b, this.D[a]);
                    b.F.add(c)
                }
            return this.Li
        };
        _.l.mg = function(a, b) {
            if (this.M && !this.G) {
                a = (new Date).getTime() - this.M;
                var c = this.o;
                900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
                this.o = c;
                this.na ? this.Ab = .01 : this.zb = this.o
            }
            this.H = this.g = !0;
            this.M = (new Date).getTime();
            this.vd != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.vd = a,
                a = !0) : a = !1;
            a ? (this.na = !1,
                this.o = this.zb,
                this.G || Mt(this.C, this.o),
                vu(b, [].concat(this.F), this.C),
                a = new Pt(this, this.C),
                Qt(a, this.qg),
                St(a, (0,
                    _.x)(this.ag, this)),
                Tt(a, b),
                this.N = a) : (this.na = !0,
                this.o = this.Ab,
                this.G || Mt(this.C, this.o),
                a = new Pt(this, this.C),
                Qt(a, this.mg),
                St(a, (0,
                    _.x)(this.ag, this)),
                Tt(a, b),
                this.N = a);
            return Wt
        };
        _.l.Li = function(a, b) {
            if (!this.g)
                return Wt;
            this.H = this.g = !1;
            this.ta ? xu(b, !0) : (xu(b),
                b.Y(b.l));
            if (this.Oc)
                return this.mg;
            for (a = 0; a < b.C.length; ++a)
                b.C[a].stop();
            for (a = 0; a < b.ga.length; ++a)
                Pp(b.S, b.ga[a]);
            return Wt
        };
        var Xu = function(a, b, c) {
                a: {
                    var d = Wu(a),
                        e = a.Y,
                        f = a.Sc,
                        g = a.yb.g;
                    b = Ut(b);
                    if (!c.H) {
                        if (0 == c.Ba.length) {
                            0 == c.l && 0 == c.Xa && c.A(0, !0);
                            c = !1;
                            break a
                        }
                        c.H = zu(c, d, e, f, g)
                    }
                    c.ka = !0;
                    $t(c.H, c.j, c.h, b);
                    c = !0
                }
                return c ? a.ng : a.Dd
            },
            Wu = function(a) {
                return a.Da ? (0,
                    _.x)(a.L.o, a.L) : function() {}
            };
        _.l = Ru.prototype;
        _.l.ng = function(a, b) {
            if (!this.g)
                return Wt;
            var c = b.h;
            if (null == c.g) {
                if (!c.ka)
                    return Xu(this, a, b.h);
                if (!Vt(a))
                    return Xt;
                c.ka = !1;
                c.g = c.H.Uc || null;
                var d = c.g ? c.g : c.H = null;
                if (!d)
                    return Xu(this, a, b.h);
                this.D.push(d);
                var e = d.pa();
                if (this.h.has(e, !this.A) || null != b.H[e] && b.H[e])
                    return e = c.g.H,
                        c.l += e,
                        c.j -= e,
                        c.g = null,
                        this.A && Bu(b, d, !1),
                        Xu(this, a, b.h);
                this.h.g[d.pa()] = null
            }
            0 < Au(b) && Mt(this.C, .5);
            return Cu(c, b, rp(this.h.h)) ? this.Dd : Xu(this, a, b.h)
        };
        _.l.Dd = function(a, b) {
            if (!this.g || 0 == Au(b))
                return Wt;
            Vu(this, b.h);
            return this.A ? (b.trackVisibility(Ut(a)),
                this.Ni) : 0 == b.translate(a) ? Wt : this.pg
        };
        _.l.Ni = function(a, b) {
            return this.g ? Vt(a) ? 0 == b.translate(a) ? Wt : this.pg : Xt : Wt
        };
        _.l.Qf = function(a, b) {
            b.l && this.h.remove(b.j);
            if (!this.g)
                return !1;
            if (this.h.has(b.pa(), !1)) {
                var c = this.h;
                if (c.has(b.j, !1)) {
                    var d = b.j,
                        e = c.g[d];
                    e || (e = c.h[d],
                        c.g[d] = e);
                    b.h = e;
                    b.N = !0
                } else
                    c.remove(b.j),
                    b.l = !0;
                Et(b)
            } else if (c = this.h,
                b.l)
                c.remove(b.j);
            else if (b.F) {
                d = b.F.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
                b.N = !0;
                delete b.F;
                b.F = null;
                b.h = [];
                e = _.ld(document, "div");
                T(e, !1);
                d = 0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>";
                d = _.Ya(d);
                d = _.Uc(d);
                if (1 === e.nodeType) {
                    var f = e.tagName;
                    if ("SCRIPT" === f || "STYLE" === f)
                        throw Error("B");
                }
                e.innerHTML = _.Tc(d);
                document.body.appendChild(e);
                d = [];
                for (f = e.firstChild; f; f = f.nextSibling)
                    if ("I" == f.tagName)
                        var g = Ct(b, rl(f), f.innerHTML);
                    else if ("B" == f.tagName) {
                    g || (g = Ct(b, "", ""));
                    if (1 == b.g.length)
                        It(g.ia, d, 0, f);
                    else {
                        var h = f;
                        var k = b.g;
                        g = g.ia;
                        for (var m = [], n = h.firstChild; n; n = p) {
                            var p = n.nextSibling;
                            Jt(n)
                        }
                        for (p = h.firstChild; p; p = p.nextSibling)
                            p.attributes && p.attributes.i ? (h = parseInt(p.attributes.i.nodeValue, 10), !isNaN(h) && 0 <= h && h < k.length && (k[h].ce && m[h] ? m[h].ea += p.firstChild && 3 == p.firstChild.nodeType ? p.firstChild.nodeValue : rl(p) : m[h] = It(g, d, h, p))) : 3 == p.nodeType && g.push({
                                ba: -1,
                                ea: el(p.nodeValue)
                            });
                        null != g && 0 < g.length && -1 == g[0].ba && (1 == g.length ? g[0].ba = 0 : (g[1].ea = g[0].ea + g[1].ea,
                            g.shift()))
                    }
                    g = void 0
                }
                f = b.h;
                for (k = 0; k < f.length - 1; ++k)
                    g = f[k],
                    m = $k(g.ia[g.ia.length - 1].ea),
                    m = m.charCodeAt(m.length - 1),
                    12288 <= m && 12351 >= m || 65280 <= m && 65519 >= m || (g.ia[g.ia.length - 1].ea += " ");
                il(e);
                for (e = 0; e < b.g.length; ++e)
                    e < d.length && e < b.C.length && null != d[e] && (f = b.C[e],
                        k = d[e].start,
                        null != k && (g = f.substring(0, f.length - f.replace(/^[\s\xa0]+/, "").length),
                            " " == g && (g = ""),
                            g && (k.ea = g + k.ea.replace(/^[\s\xa0]+/, ""))),
                        k = d[e].end,
                        null != k && (f = f.substring($k(f).length),
                            " " == f && (f = ""),
                            f && (k.ea = $k(k.ea) + f)));
                1 != b.h.length || b.h[0].bf || (b.h[0].bf = b.j);
                c.write(b.j, b.h);
                Et(b)
            }
            b.L || (this.ta = !1);
            c = b.l ? !0 : void 0;
            a.G += b.H;
            null != c && (a.da = !0);
            b = Math.min(Math.floor(100 * a.G / a.l), 100);
            if (a.D != b || c)
                a.D = b,
                a.N ? (a.A(a.D, !0, c),
                    a.Y(a.G)) : a.A(a.D, !1, c);
            return !1
        };
        _.l.pg = function(a, b) {
            if (!this.g)
                return Wt;
            if (!Vt(a))
                return Xt;
            if (1 < Au(b)) {
                a = b.o[0];
                var c = b.g;
                if (a.j || 0 == c.length || null == a.g || 0 == a.g.length)
                    a = null;
                else {
                    for (var d = [], e = [], f = 0; f < a.g.length && f < c.length; ++f) {
                        var g = a.g[f];
                        g && g[0] && 200 == g[1] || (e.push(c[f]),
                            d.push(a.o[f]))
                    }
                    a = 0 < e.length ? {
                        Bj: new nu(d, !0),
                        Cj: e
                    } : null
                }
                a = a ? new Lu([a.Bj], a.Cj, b.h, b.l, b.j, b.N, b.ga, b.A) : null;
                null != a && Vu(this, b.h, a, this.Dd)
            } else {
                a = !1;
                for (c = 0; c < b.o.length; ++c)
                    d = b.o[c],
                    d.j || 200 == d.h && d.g && d.g[0] ? d = d.l = !1 : (d.j = !0,
                        d = d.l = !0),
                    a = d || a;
                if (a)
                    return this.Dd
            }
            d = this.Db();
            a = this.ua();
            if (1 < b.g.length)
                if (c = b.o[0],
                    e = "auto" == d,
                    d = b.g,
                    200 == c.h)
                    for (f = 0; f < c.g.length && f < d.length; ++f)
                        if ((g = c.g[f]) && 200 == g[1]) {
                            var h = g[2],
                                k = d[f],
                                m = k,
                                n = null != h && h == a;
                            m.F = g[0];
                            void 0 !== n && (m.G = n);
                            k.L = e && null == h
                        } else
                            d[f].l = !0;
            else
                for (a = 0; a < d.length; ++a)
                    d[a].l = !0;
            else {
                c = new mu("auto" == d);
                for (d = 0; d < b.o.length; ++d)
                    f = b.o[d],
                    e = a,
                    200 == f.h && f.g && f.g[0] ? (f = f.g[0],
                        c.g.push(f[0]),
                        f = f[2],
                        c.h = c.h && null != f && f == e,
                        null != f && (c.l = !1)) : 500 != f.h && (c.j = !0);
                null != b.D && (c.g.push(b.D),
                    b.D = null);
                if (a = b.g[0])
                    d = c.h,
                    a.F = c.pa(),
                    void 0 !== d && (a.G = d),
                    a.L = c.l,
                    a.l = c.j
            }
            if (this.A) {
                a = (0,
                    _.x)(this.Qf, this);
                for (c = 0; c < b.g.length; c++)
                    a(b.h, b.g[c]);
                for (c = 0; c < b.C.length; c++)
                    a(b.h, b.C[c]);
                Nu(b);
                b.G = !0;
                b.L && b.A && (b = b.A,
                    0 == --b.h && Ju(b.g))
            }
            return Wt
        };
        var Su = function(a) {
                a.S && a.S.disconnect();
                a.ka && a.ka.reset();
                a.g && (a.N.stop(),
                    a.g = !1,
                    a.H = !1);
                if (a.D.length) {
                    for (var b = 0; b < a.D.length; ++b)
                        a.D[b].T();
                    a.D = []
                }
                null != a.L && (a.L.restore(),
                    a.L = null);
                null != a.Ca && (a.Ca.restore(),
                    a.Ca = null)
            },
            Uu = function(a, b) {
                a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
                a.getAttribute("lang") && a.setAttribute("lang", b)
            };
        yp.attach(3046, Ru.prototype, {
            bj: 1,
            dj: 2,
            cj: 3,
            ej: 4
        });
        var Yu = So(Zo),
            Zu = function(a, b, c, d, e, f, g, h, k, m, n) {
                _.A.call(this);
                this.L = b || null;
                this.N = !!c;
                this.H = d || "transparent";
                this.F = f || "";
                b = g || {
                    fetchStart: 0,
                    jl: 0
                };
                a = b.fetchStart || 0;
                b = b.fetchEnd || 0;
                this.D = a && b ? b - a : 0;
                this.S = Date.now() - yn;
                this.s = !1;
                this.g = new Np(e || "", void 0, f, n);
                this.G = new Nt(1);
                this.A = new Ht;
                this.h = null;
                this.C = !0;
                this.o = null != _.q.IntersectionObserver;
                this.M = h || null;
                e = new ep;
                f = new gp(this.g.initialize.bind(this.g, e.register()));
                this.Ad = hp(f, e.delay((0,
                    _.x)(this.Ad, this)));
                this.zd = hp(f, e.delay((0,
                    _.x)(this.zd, this)));
                this.be = hp(f, e.delay((0,
                    _.x)(this.be, this)));
                this.restore = hp(f, e.delay((0,
                    _.x)(this.restore, this)));
                f.finish();
                e.finish();
                e = $o(Yu, 1);
                f = new Po;
                f = S(f, 1, window.location.origin);
                h = _.Yh(e, Qo, 112);
                _.$h(h, 4, f);
                bp(e);
                performance && performance.mark && performance.mark("translate:initialized", void 0)
            };
        _.z(Zu, _.A);
        yp.attach(14097, Zu.prototype, {
            Re: function() {
                Xj(this.g.rb() ? "te_afas" : "te_afau")
            }
        });
        _.l = Zu.prototype;
        _.l.Dj = function(a) {
            this.o = a
        };
        _.l.qb = function() {
            return this.g.rb()
        };
        _.l.Ad = function(a, b) {
            this.g.qb() ? this.g.l.send({
                display_language: b,
                key: "AIzaSyBWDj0QJvVIx8XOhRegXX5_SrRWxhT5Hs4"
            }, a).then(function(c) {
                return a(c)
            }) : (this.Re(),
                a(null))
        };
        _.l.zd = function(a) {
            var b = document.documentElement.lang;
            if (b)
                a(b);
            else if (this.g.qb()) {
                b = new Xp(document.body, !1, !1, 1, 1);
                for (var c = [], d = 0, e = this.g.h.Gg; c.length + d < e;) {
                    var f = b.next();
                    if (f.done)
                        break;
                    f = f.value;
                    1 == b.g && iu(f) ? Yp(b) : 3 == f.nodeType && (f = (0,
                        _.dc)(Zk(f.nodeValue))) && (c.push(f),
                        d += f.length)
                }
                Op(this.g, a, c.join(" ")).then(function(g) {
                    a(g)
                }, function(g) {
                    return a(null, g)
                })
            } else
                this.Re(),
                a(null, !0)
        };
        _.l.be = function(a, b, c, d, e) {
            Yu.dd = a;
            Yu.fd = b;
            var f = $o(Yu, 2);
            ap(Yu, f);
            bp(f);
            f = {
                detail: {
                    sourceLanguage: a,
                    targetLanguage: b
                }
            };
            performance && performance.mark && performance.mark("translate:initiated", f);
            f = Date.now();
            xp();
            if (!a || sp(a, b))
                a = "auto";
            if (e || a != this.l || b != this.j)
                this.A = new Ht;
            this.l = a;
            this.j = b;
            this.g.qb() ? (d = d || document.documentElement,
                this.h && this.h.T(),
                this.h = new Ru(d, this.g, this.L, this.N, this.H, !0, this.G, this.A, this.o, this.M),
                this.h.Yb = this.s,
                this.C = !0,
                this.h.translate(a, b, c, e, (0,
                    _.x)(this.ij, this, f, a, b))) : (this.Re(),
                c(0, !1, !0))
        };
        _.l.sh = function() {
            return !!this.h && this.h.g
        };
        _.l.Zg = function(a) {
            this.s = a
        };
        _.l.restore = function() {
            var a = $o(Yu, 3);
            ap(Yu, a);
            bp(a);
            performance && performance.mark && performance.mark("translate:restored", void 0);
            xp();
            this.g.qb() && this.h && this.h.restore()
        };
        _.l.K = function() {
            wp();
            Zu.P.K.call(this);
            this.g.T();
            this.h = this.g = null;
            this.A = new Ht
        };
        _.l.ij = function(a, b, c, d) {
            this.C && (this.C = !1,
                b = {
                    sl: b,
                    tl: c,
                    textlen: d
                },
                this.s && (b.ctt = "1"),
                "" != this.F && (b.sp = this.F),
                b.ttt = Date.now() - a,
                b.ttl = this.S,
                this.D && (b.ttf = this.D),
                this.o && (b.sr = 1),
                Xj("te_time", b))
        };
        var $u = function(a) {
            O.call(this, a);
            this.A = new _.$f(this)
        };
        _.w($u, O);
        $u.prototype.R = function() {
            var a = _.Hh(this.h, "select");
            a.className = "goog-te-combo";
            a.setAttribute("aria-label", V.Jf);
            this.ya(a)
        };
        $u.prototype.ra = function() {
            O.prototype.ra.call(this);
            this.Zf()
        };
        $u.prototype.Zf = function() {
            _.D(this.B(), "change", kp(this, "change"));
            this.dispatchEvent("load")
        };
        $u.prototype.oa = function() {
            O.prototype.oa.call(this);
            this.A.T();
            this.A = null
        };
        var av = function(a, b) {
            a.B().parentNode != b && (a.B().parentNode.removeChild(a.B()),
                b.appendChild(a.B()))
        };
        _.l = $u.prototype;
        _.l.cd = function(a) {
            this.h.cf(this.B());
            for (var b in a)
                if (a[b] !== Object.prototype[b]) {
                    var c = this.h.R("OPTION", {
                        value: b
                    });
                    this.h.Gc(c, a[b]);
                    this.B().appendChild(c)
                }
            this.B().selectedIndex = 0
        };
        _.l.sa = function() {
            return this.B().value
        };
        _.l.Na = function(a) {
            if (this.B().value != a)
                for (var b = 0, c; c = this.B().options.item(b); ++b)
                    if (c.value == a) {
                        this.B().selectedIndex = b;
                        break
                    }
        };
        _.l.kd = function(a) {
            if ("undefined" == _.xb(a))
                return this.B().options.item(this.B().selectedIndex).text;
            for (var b = 0, c; c = this.B().options.item(b); ++b)
                if (c.value == a)
                    return c.text
        };
        _.l.tb = function(a) {
            this.B().disabled = !a
        };
        var bv = function(a) {
            $u.call(this, a)
        };
        _.w(bv, $u);
        bv.prototype.Sb = function(a) {
            this.cd.call(this, a)
        };
        var cv = function(a, b) {
            $u.call(this, b);
            this.g = a && Bi(a) || {};
            this.g.hf = this.g.hf || 11;
            this.g.Zd = 0 != this.g.Zd;
            this.g.lb || (this.g.lb = Jn)
        };
        _.w(cv, $u);
        _.l = cv.prototype;
        _.l.rd = function() {
            throw Error("Ga");
        };
        _.l.R = function() {
            this.rd();
            this.D = this.B();
            this.l = fl("IFRAME", {
                frameBorder: 0,
                "class": "VIpgJd-ZVi9od-xl07Ob-OEVmcd skiptranslate",
                title: V.Jf
            });
            this.l.style.visibility = "visible";
            T(this.l, !1);
            document.body.appendChild(this.l)
        };
        _.l.Zf = function() {
            var a = _.zf.test(vn) ? "rtl" : "ltr",
                b = _.$a(this.g.lb),
                c = W(this, "menuBody");
            this.A.I(this.l, "load", this.th);
            op(this.l, (0,
                _.x)(function() {
                var d = kl(this.l),
                    e = '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + U(en(b)) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + U(a) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + U(c) + '" class=';
                if (Fm("VIpgJd-ZVi9od-xl07Ob", _.ii)) {
                    var f = String("VIpgJd-ZVi9od-xl07Ob".pa()).replace(Mm, "").replace(Nm, "&lt;");
                    f = String(f).replace(an, Sm)
                } else
                    f = "VIpgJd-ZVi9od-xl07Ob".replace($m, Sm);
                e = (0,
                    _.L)(e + f + "></div></body>").Ic();
                d.write(_.Tc(e));
                d.close()
            }, this))
        };
        _.l.th = function() {
            this.j = new _.cd(kl(this.l));
            this.S = this.j.B(W(this, "menuBody"));
            this.A.I(this.D, "click", this.De);
            _.C ? this.A.I(this.l, "blur", this.Cd) : this.A.I(ll(this.l), "blur", this.Cd);
            this.dispatchEvent("load")
        };
        _.l.oa = function() {
            $u.prototype.oa.call(this);
            il(this.l);
            this.D = this.da = this.C = this.S = this.j = this.l = null
        };
        _.l.og = function(a) {
            this.s != a.currentTarget.value && (this.Na(a.currentTarget.value),
                this.dispatchEvent("change"));
            this.Cd()
        };
        _.l.De = function() {
            dv(this);
            ll(this.l).focus();
            this.na = !0
        };
        _.l.Cd = function() {
            this.na && (this.na = !1,
                dv(this, !1),
                _.kd(_.dd(this.D)).focus())
        };
        _.l.df = function() {};
        _.l.ef = function() {};
        var dv = function(a, b) {
            if ("undefined" == typeof b || b) {
                a.ef();
                b = qm(a.D, window);
                var c = b.y + a.D.offsetHeight,
                    d = b.y - a.G.height,
                    e = b.x,
                    f = b.x + a.D.offsetWidth - a.G.width;
                if (_.C && !Ik()) {
                    var g = document.body;
                    c -= g.offsetTop;
                    d -= g.offsetTop;
                    e -= g.offsetLeft;
                    f -= g.offsetLeft
                } else
                    g = jk(document),
                    c -= g.y,
                    d -= g.y,
                    e -= g.x,
                    f -= g.x;
                g = _.jd(window);
                b.y = b.y <= g.height - a.G.height ? c : d;
                b.y > g.height - a.G.height && (b.y = g.height - a.G.height);
                0 > b.y && (b.y = 0);
                _.zf.test(vn) ? b.x = 0 <= f ? f : e : b.x = e <= g.width - a.G.width ? e : f;
                b.x > g.width - a.G.width && (b.x = g.width - a.G.width);
                0 > b.x && (b.x = 0);
                km(a.l, b);
                T(a.l, !0);
                ev(a)
            } else
                a.df(),
                T(a.l, !1)
        };
        _.l = cv.prototype;
        _.l.sa = function() {
            return this.s
        };
        _.l.cd = function(a) {
            this.j.cf(this.S);
            T(this.l, !0);
            this.Da = a;
            this.C = [];
            for (var b in a)
                if (a[b] !== Object.prototype[b])
                    if ("---" == a[b]) {
                        var c = {
                            link: this.j.R("DIV", {
                                className: "VIpgJd-ZVi9od-vH1Gmf-hgDUwe",
                                value: b
                            }),
                            Ti: !0
                        };
                        this.C.push(c)
                    } else {
                        c = {
                            link: this.j.R("A", {
                                className: "VIpgJd-ZVi9od-vH1Gmf-ibnC6b-gk6SMd",
                                href: "#",
                                value: b
                            })
                        };
                        this.C.push(c);
                        var d = this.j.R("DIV", {
                            style: "white-space:nowrap"
                        });
                        this.j.appendChild(c.link, d);
                        this.g.Zd && this.j.appendChild(d, this.j.R("SPAN", {
                            className: "indicator"
                        }, "\u203a"));
                        this.j.appendChild(d, this.j.R("SPAN", {
                            className: "text"
                        }, a[b]));
                        this.A.I(c.link, "click", this.og)
                    }
            a = this.C.length - 1;
            a = Math.round((a - a % this.g.hf) / this.g.hf) + 1;
            this.da = this.j.R("TABLE", {
                cellspacing: 0,
                cellpadding: 0,
                border: 0
            });
            c = this.j.R("TBODY");
            b = this.j.R("TR", {
                valign: "top"
            });
            this.S.className = "VIpgJd-ZVi9od-vH1Gmf";
            this.j.appendChild(this.S, this.da);
            this.j.appendChild(this.da, c);
            this.j.appendChild(c, b);
            for (d = c = 0; c < a; ++c) {
                var e = this.j.R("TD");
                this.j.appendChild(b, e);
                for (var f = 0; 11 > f && d < this.C.length; ++f,
                    ++d)
                    this.j.appendChild(e, this.C[d].link);
                c != a - 1 && (e = this.j.R("TD", {
                        "class": "VIpgJd-ZVi9od-vH1Gmf-KrhPNb"
                    }, "\u00a0"),
                    this.j.appendChild(b, e))
            }
            this.s = null;
            this.Na(this.C[0].link.value);
            ev(this);
            T(this.l, !1)
        };
        _.l.kd = function(a) {
            return this.Da["undefined" == _.xb(a) ? this.s : a]
        };
        _.l.ff = function() {};
        _.l.Na = function(a) {
            if (this.s != a) {
                this.kd(a) && (this.s = a,
                    this.ff());
                for (var b = 0; b < this.C.length; ++b) {
                    var c = this.C[b];
                    c.Ti || (c.link.className = c.link.value == a && this.g.Zd ? "VIpgJd-ZVi9od-vH1Gmf-ibnC6b-gk6SMd" : "VIpgJd-ZVi9od-vH1Gmf-ibnC6b")
                }
            }
        };
        var ev = function(a) {
                ym(a.S, wm(a.da));
                ym(a.l, wm(a.S));
                a.G = wm(a.l)
            },
            fv = function(a, b) {
                cv.call(this, a, b)
            };
        _.w(fv, cv);
        _.l = fv.prototype;
        _.l.rd = function() {
            var a = this.h.R("a", {
                "aria-haspopup": "true"
            });
            a.className = "VIpgJd-ZVi9od-xl07Ob-lTBxed";
            Pi(a);
            this.M = this.h.R("SPAN");
            a.appendChild(this.M);
            this.U = this.h.R("IMG", {
                src: "https://www.google.com/images/cleardot.gif",
                alt: "",
                style: "background-image:url(" + Gn + ");background-position:-14px 0px;border:none",
                width: 14,
                height: 14
            });
            a.appendChild(this.U);
            this.ya(a)
        };
        _.l.df = function() {
            _.K(this.U, "backgroundPosition", "-14px 0px")
        };
        _.l.ef = function() {
            _.K(this.U, "backgroundPosition", "0px 0px")
        };
        _.l.oa = function() {
            cv.prototype.oa.call(this);
            this.U = this.M = null
        };
        _.l.ff = function() {
            this.h.Gc(this.M, this.kd(this.s) || "")
        };
        _.l.Sb = function(a) {
            this.cd.call(this, a)
        };
        var gv = function(a, b) {
            cv.call(this, a, b)
        };
        _.w(gv, cv);
        _.l = gv.prototype;
        _.l.rd = function() {
            var a = this.h.R("a", {
                "aria-haspopup": "true"
            });
            a.className = "VIpgJd-ZVi9od-xl07Ob-lTBxed";
            Pi(a);
            this.M = this.h.R("SPAN");
            a.appendChild(this.M);
            a.appendChild(this.h.R("IMG", {
                src: "https://www.google.com/images/cleardot.gif",
                alt: "",
                width: 1,
                height: 1
            }));
            a.appendChild(this.h.R("SPAN", {
                style: "border-left:1px solid #bbb"
            }, "\u200b"));
            a.appendChild(this.h.R("IMG", {
                src: "https://www.google.com/images/cleardot.gif",
                alt: "",
                width: 1,
                height: 1
            }));
            this.U = this.h.R("span", {
                style: "color:#767676",
                "aria-hidden": "true"
            }, "\u25bc");
            a.appendChild(this.U);
            this.ya(a)
        };
        _.l.df = function() {
            _.K(this.U, "color", "#9b9b9b")
        };
        _.l.ef = function() {
            _.K(this.U, "color", "#d5d5d5")
        };
        _.l.oa = function() {
            cv.prototype.oa.call(this);
            this.U = this.M = null
        };
        _.l.ff = function() {
            this.h.Gc(this.M, this.kd(this.s) || "")
        };
        _.l.Sb = function(a) {
            this.cd.call(this, a)
        };
        var hv = function(a, b) {
            cv.call(this, a, b);
            this.g.Zd = !1
        };
        _.w(hv, cv);
        hv.prototype.rd = function() {
            var a = _.Hh(this.h, "div");
            a.className = "VIpgJd-ZVi9od-LgbsSe";
            var b = this.h.R("DIV", {
                style: "background: url(" + Fn + ") repeat-x 0 -39px"
            });
            a.appendChild(b);
            this.M = _.Hh(this.h, "button");
            b.appendChild(this.M);
            this.ya(a)
        };
        hv.prototype.Yg = function(a) {
            _.od(this.M);
            this.M.appendChild(this.h.g.createTextNode(String(a + "\u00a0\u25bc")))
        };
        hv.prototype.oa = function() {
            cv.prototype.oa.call(this);
            this.M = null
        };
        hv.prototype.og = function(a) {
            this.Na(a.currentTarget.value);
            this.dispatchEvent("change");
            this.Cd()
        };
        var iv = function() {
            this.h = {};
            this.g = 0
        };
        iv.prototype.j = function(a, b) {
            a = this.h[b];
            if (!a)
                return b;
            b = "";
            a.uf && (b += "<" + a.uf + a.attributes + ">");
            a.Je && (b += a.Je);
            a.xe && (b += "</" + a.xe + ">");
            return b
        };
        iv.prototype.uf = function(a, b) {
            Qk(a);
            return jv(this, {
                uf: a,
                attributes: Uk(b)
            })
        };
        iv.prototype.xe = function(a) {
            Qk(a);
            return jv(this, {
                xe: a
            })
        };
        iv.prototype.text = function(a) {
            return jv(this, {
                Je: al(a)
            })
        };
        var jv = function(a, b) {
            a.g++;
            var c = "{SafeHtmlFormatter:" + a.g + "_" + _.bd() + "}";
            a.h[al(c)] = b;
            return c
        };
        var kv = function(a, b) {
            O.call(this, b);
            this.g = a && Bi(a) || {};
            this.j = new _.$f(this)
        };
        _.z(kv, O);
        var lv = {
            al: 0,
            nk: 1,
            Lk: 2
        };
        _.l = kv.prototype;
        _.l.R = function() {
            var a = _.Hh(this.h, "div");
            fr(a, "skiptranslate");
            fr(a, "goog-te-gadget");
            a.dir = _.zf.test(vn) ? "rtl" : "ltr";
            T(a, !1);
            if (2 == this.g.ic)
                Mi(a, Gu({
                    id: W(this, "targetLanguage"),
                    Qg: "",
                    Pg: ""
                }));
            else {
                var b = new iv;
                if (_.C && !Ik())
                    var c = "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png".replace(bn, Um) + "',sizingMethod='scale');\"></span>";
                else
                    c = V.me,
                    c = '<img src="' + U(ln("https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png")) + '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' + U(c) + '">';
                var d = V.me;
                var e = (0,
                    _.L)('<span style="white-space:nowrap"><a class="' + U("VIpgJd-ZVi9od-l4eHX-hSRGPd") + '" href="' + U(jn("https://translate.google.com")) + '" target="_blank">' + c + Ym(d) + "</a></span>");
                c = V;
                d = c.Bh;
                e = e.Ic();
                e = jv(b, {
                    Je: _.Tc(e).toString()
                });
                c = d.call(c, e);
                d = al("SafeHtmlFormatter:");
                b = al(c).replace(new RegExp("\\{" + d + "[\\w&#;]+\\}", "g"), (0,
                    _.x)(b.j, b, []));
                b = _.Uc(b);
                Mi(a, Gu({
                    id: W(this, "targetLanguage"),
                    Qg: "",
                    Pg: 1 == this.g.ic ? Sk("\u00a0", "\u00a0", b) : b
                }))
            }
            this.ya(a)
        };
        _.l.ra = function() {
            kv.P.ra.call(this);
            this.l = 2 == this.g.ic ? new gv(null, this.h) : new bv(this.h);
            this.j.I(this.l, "change", kp(this, "chg_tgt_lang"));
            this.j.I(this.l, "load", this.uh);
            var a = this.h.B(W(this, "targetLanguage"));
            if (2 == this.g.ic) {
                var b = this.h.R("IMG", {
                    src: "https://www.google.com/images/cleardot.gif",
                    "class": "goog-te-gadget-icon",
                    alt: ""
                });
                b.style.backgroundImage = "url(" + Gn + ")";
                b.style.backgroundPosition = "-65px 0px";
                var c = this.h.R("SPAN", {
                    style: "vertical-align: middle"
                });
                a.appendChild(b);
                a.appendChild(c);
                this.l.Ma(c);
                a.style.whiteSpace = "nowrap";
                a.className = "goog-te-gadget-simple"
            } else
                this.l.Ma(a),
                1 == this.g.ic && (a.style.display = "inline")
        };
        _.l.uh = function() {
            if (2 == this.g.ic) {
                var a = this.l,
                    b = this.h.B(W(this, "targetLanguage"));
                a.A.mb(a.D, "click", a.De);
                a.D = b;
                a.A.I(a.D, "click", a.De)
            }
            this.dispatchEvent("load")
        };
        _.l.oa = function() {
            kv.P.oa.call(this);
            this.j.T();
            this.j = null;
            this.l.T();
            this.l = null
        };
        _.l.ua = function() {
            return this.l.sa()
        };
        _.l.Aa = function(a) {
            "" == a ? this.M && this.l.Sb(this.M) : this.G && this.l.Sb(this.G);
            this.l.Na(a)
        };
        _.l.fa = function(a) {
            T(this.B(), a)
        };
        _.l.tb = function(a) {
            this.l.tb(a)
        };
        _.l.pf = function(a, b) {
            this.M = a;
            this.G = b
        };
        var mv = function(a, b) {
            O.call(this, b);
            this.g = a && Bi(a) || {};
            this.g.lb || (this.g.lb = Jn);
            this.j = new _.$f(this)
        };
        _.z(mv, O);
        var nv = {
            Rk: 1,
            Sk: 2,
            Wj: 3,
            Vj: 4
        };
        _.l = mv.prototype;
        _.l.R = function() {
            var a = _.Hh(this.h, "div");
            this.ob = !1;
            T(a, !1);
            var b = W(this, "container");
            b = (0,
                _.L)('<iframe id="' + U(b) + '" frameBorder=0 src="javascript:\'\'" class="' + U("VIpgJd-ZVi9od-SmfZ-OEVmcd") + ' skiptranslate" style="visibility:visible"></iframe>');
            Mi(a, b);
            this.ya(a)
        };
        _.l.ra = function() {
            mv.P.ra.call(this);
            var a = _.zf.test(vn) ? "rtl" : "ltr",
                b = _.$a(this.g.lb),
                c = W(this, "translate");
            this.B().id = W(this, "floatContainer");
            var d = {
                id: this.B().id,
                className: "goog-te-ftab-float"
            };
            this.B().className += " goog-te-ftab-float";
            switch (this.g.wd) {
                case 2:
                    var e = "goog-te-float-top";
                    d.top = 0;
                    d.right = 20;
                    break;
                case 3:
                    e = "goog-te-float-bottom";
                    d.bottom = 0;
                    d.right = 20;
                    break;
                case 4:
                    e = "goog-te-float-bottom";
                    d.bottom = 0;
                    d.left = 20;
                    break;
                default:
                    e = "goog-te-float-top",
                        d.top = 0,
                        d.left = 20
            }
            um(uk(new _.Mf, d), this.B());
            this.C = this.h.B(W(this, "container"));
            this.j.I(this.C, "load", this.vh);
            op(this.C, (0,
                _.x)(function() {
                var f = kl(this.C),
                    g = e,
                    h = V.Mf;
                g = (0,
                    _.L)('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + U(en(b)) + '"></head><body class="' + U("VIpgJd-ZVi9od-SmfZ") + " " + U(g) + '" scroll="no" style="overflow:hidden" dir="' + U(a) + '"><a id="' + U(c) + '" href="javascript:void(0)" class="' + U("VIpgJd-ZVi9od-SmfZ-hSRGPd") + '"><img src="' + U(ln("https://www.google.com/images/cleardot.gif")) + '" style="background-image:url(' + U(ln(Gn)) + ');background-position:-65px 0px"><span>' + Ym(h) + "</span></a></body>").Ic();
                f.write(_.Tc(g));
                f.close()
            }, this))
        };
        _.l.vh = function() {
            this.l = (new _.cd(kl(this.C))).B(W(this, "translate"));
            this.j.I(this.l, "click", kp(this, "clk_trans"));
            T(this.B(), !0);
            var a = wm(this.l);
            T(this.B(), !1);
            ym(this.C, a);
            ym(this.B(), a);
            this.dispatchEvent("load")
        };
        _.l.oa = function() {
            mv.P.oa.call(this);
            this.j.T();
            this.j = null;
            il(this.C);
            this.l = this.C = null
        };
        _.l.isVisible = function() {
            return this.ob
        };
        _.l.fa = function(a) {
            this.ob = a;
            T(this.B(), a)
        };
        var ov = function(a, b) {
            O.call(this, b);
            this.A = new _.$f(this);
            this.g = a && Bi(a) || {};
            this.g.lb || (this.g.lb = Jn);
            this.g.sf = !1;
            _.K(this.h.g.body, "position", "relative");
            _.$g || _.K(this.h.g.body, "minHeight", "100%");
            _.K(this.h.g.documentElement, "height", "100%");
            _.K(this.h.g.body, "top", "0px");
            _.C && (window._bannerquirkfixleft = -parseInt("0" + this.h.g.body.leftMargin, 10),
                window._bannerquirkfixtop = -parseInt("0" + this.h.g.body.topMargin, 10) - 40)
        };
        _.z(ov, O);
        _.l = ov.prototype;
        _.l.Ma = function() {
            var a = this.h.g.body.firstChild;
            Bq(this, a.parentNode, a)
        };
        _.l.R = function() {
            var a = _.Hh(this.h, "div");
            this.ob = !1;
            T(a, !1);
            fr(a, "skiptranslate");
            var b = W(this, "container");
            b = (0,
                _.L)('<iframe id="' + U(b) + '" class="' + U("VIpgJd-ZVi9od-ORHb-OEVmcd") + ' skiptranslate" frameBorder=0 src="#" style="visibility:visible"></iframe>');
            Mi(a, b);
            this.ya(a)
        };
        _.l.ra = function() {
            ov.P.ra.call(this);
            var a = _.zf.test(vn) ? "rtl" : "ltr",
                b = _.$a(this.g.lb),
                c = W(this, "promptSection"),
                d = W(this, "confirm"),
                e = W(this, "progressSection"),
                f = W(this, "progressValue"),
                g = W(this, "cancel"),
                h = W(this, "finishSection"),
                k = W(this, "restore"),
                m = W(this, "errorSection"),
                n = W(this, "errorContent"),
                p = W(this, "close"),
                r = W(this, "noAutoPopup"),
                t, y = [];
            this.g.sf && y.push(Fu({
                id: W(this, "promptSourceLang")
            }));
            y.push(Fu({
                id: W(this, "promptTargetLang")
            }));
            var G = rk(V.Kh.apply(null, y));
            y = [];
            this.g.sf && y.push(Fu({
                id: W(this, "finishSourceLang")
            }));
            y.push(Fu({
                id: W(this, "finishTargetLang")
            }));
            var P = rk(V.Gh.apply(null, y));
            this.g.eh && (t = this.g.eh);
            this.C = this.h.B(W(this, "container"));
            this.A.I(this.C, "load", this.wh);
            op(this.C, (0,
                _.x)(function() {
                var Ca = kl(this.C),
                    na = t,
                    Id = V.me,
                    Dw = V.Mf,
                    Ew = V.Hh,
                    Fw = V.lh,
                    Gw = V.Ch,
                    Hw = V.Bf,
                    Iw = V.Bf;
                na = (0,
                    _.L)('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + U(en(b)) + '"></head><body class="' + U("VIpgJd-ZVi9od-ORHb") + '" scroll="no" border=0 dir="' + U(a) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' + U(jn("https://translate.google.com")) + '" class="' + U("VIpgJd-ZVi9od-l4eHX-hSRGPd") + '" target="_blank"><img src="' + U(ln("https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png")) + '" alt="Google ' + U(Id) + '"></a></td>' + (na ? '<td width=1><img src="' + U(ln("https://www.google.com/images/cleardot.gif")) + '" width="9" height="15" title="' + U(na) + '" alt="' + U(na) + '" style="background-image:url(' + U(ln(Gn)) + ');background-position:-56px 0px;margin:0 4px"></td>' : "") + '<td class="' + U("VIpgJd-ZVi9od-ORHb-KE6vqe") + '"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + U(c) + '" style="display:none" valign=middle><td nowrap><span class="' + U("VIpgJd-ZVi9od-ORHb-bN97Pc") + '">' + Ym(G) + '</span></td><td class="' + U("VIpgJd-ZVi9od-ORHb-KE6vqe") + '"></td><td nowrap><div class="' + U("VIpgJd-ZVi9od-LgbsSe") + '"><div><button id="' + U(d) + '"><b>' + Ym(Dw) + '</b></button></div></div></td><td class="' + U("VIpgJd-ZVi9od-ORHb-KE6vqe") + '"></td><td nowrap><div class="' + U("VIpgJd-ZVi9od-LgbsSe") + '"><div><button id="' + U(r) + '"></button></div></div></td></tr><tr id="' + U(e) + '" style="display:none" valign=middle><td><span class="' + U("VIpgJd-ZVi9od-ORHb-bN97Pc") + '">' + Ym(Ew) + '&nbsp;<span dir="ltr">(<b id="' + U(f) + '"></b>%)</span>&nbsp;<img src="' + U(ln(In)) + '"></span></td><td class="' + U("VIpgJd-ZVi9od-ORHb-KE6vqe") + '"></td><td nowrap><div class="' + U("VIpgJd-ZVi9od-LgbsSe") + '"><div><button id="' + U(g) + '">' + Ym(Fw) + '</button></div></div></td></tr><tr id="' + U(h) + '" style="display:none"><td><span class="' + U("VIpgJd-ZVi9od-ORHb-bN97Pc") + '">' + Ym(P) + '</span></td><td class="' + U("VIpgJd-ZVi9od-ORHb-KE6vqe") + '"></td><td nowrap><div class="' + U("VIpgJd-ZVi9od-LgbsSe") + '"><div><button id="' + U(k) + '">' + Ym(Gw) + '</button></div></div></td></tr><tr id="' + U(m) + '" style="display:none" valign=middle><td><span id="' + U(n) + '" class="' + U("VIpgJd-ZVi9od-ORHb-bN97Pc") + '"></span></td></tr></table></td><td class="' + U("VIpgJd-ZVi9od-ORHb-KE6vqe") + '"></td><td width=1 id="options"></td><td width=1><a id="' + U(p) + '" class="' + U("VIpgJd-ZVi9od-TvD9Pc-hSRGPd") + '" href="#" title="' + U(Hw) + '"><img src="' + U(ln("https://www.google.com/images/cleardot.gif")) + '" width="15" height="15" alt="' + U(Iw) + '" style="background-image:url(' + U(ln(Gn)) + ');background-position:-28px 0px"></a></td></tr></table></body>').Ic();
                Ca.write(_.Tc(na));
                Ca.close()
            }, this))
        };
        _.l.wh = function() {
            this.j = new _.cd(kl(this.C));
            pv(this, V.Df);
            if (this.g.lb == Jn) {
                var a = "url(" + Fn + ")";
                _.K(this.j.g.body, "backgroundImage", a);
                for (var b = this.j.g.getElementsByTagName("button"), c = 0; c < b.length; ++c) {
                    var d = b[c].parentNode;
                    _.K(d, "backgroundImage", a);
                    _.K(d, "backgroundRepeat", "repeat-x");
                    _.K(d, "backgroundPosition", "0 -39px")
                }
            }
            this.g.sf && (this.s = new fv(this.g, this.j));
            this.l = new fv(this.g, this.j);
            this.D = new hv(this.g, this.j);
            this.A.I(this.j.B(W(this, "confirm")), "click", kp(this, "clk_confirm"));
            this.A.I(this.j.B(W(this, "cancel")), "click", kp(this, "clk_cancel"));
            this.A.I(this.j.B(W(this, "restore")), "click", kp(this, "clk_restore"));
            this.A.I(this.j.B(W(this, "close")), "click", kp(this, "clk_close"));
            this.S = this.j.B(W(this, "noAutoPopup"));
            this.A.I(this.S, "click", kp(this, "clk_no_ap"));
            this.s && this.A.I(this.s, "change", kp(this, "chg_src_lang"));
            this.A.I(this.l, "change", kp(this, "chg_tgt_lang"));
            this.A.I(this.D, "change", this.Hi);
            a = new ep((0,
                _.x)(this.xh, this));
            this.s && this.A.I(this.s, "load", a.register());
            this.A.I(this.l, "load", a.register());
            this.A.I(this.D, "load", a.register());
            a.finish();
            this.s && this.s.Ma(this.j.B(W(this, "promptSourceLang")));
            this.l.Ma(this.j.B(W(this, "promptTargetLang")));
            this.D.Ma(this.j.B("options"))
        };
        _.l.xh = function() {
            this.D.Yg(V.Ah);
            this.D.cd({
                turn_off_site: V.Jh,
                s1: "---",
                learn_more: V.zh
            });
            this.dispatchEvent("load")
        };
        _.l.Hi = function() {
            switch (this.D.sa()) {
                case "learn_more":
                    window.open(Nn, "_blank");
                    break;
                case "turn_off_site":
                    this.dispatchEvent("clk_no_ap_site")
            }
        };
        _.l.oa = function() {
            this.fa(!1);
            ov.P.oa.call(this);
            this.A.T();
            this.A = null;
            this.s && (this.s.T(),
                this.s = null);
            this.l.T();
            this.l = null;
            this.D.T();
            this.D = null;
            il(this.C);
            this.Qc = this.j = null
        };
        _.l.Db = function() {
            return this.s ? this.s.sa() : ""
        };
        _.l.ua = function() {
            return this.l.sa()
        };
        _.l.Fc = function(a) {
            this.s && this.s.Na(a);
            this.U && this.U[a] && this.j.Gc(this.S, V.Ih(this.U[a]))
        };
        _.l.Aa = function(a) {
            this.l.Na(a)
        };
        var qv = function(a, b, c, d) {
            if (a.Qc != b) {
                a.Qc = b;
                if (0 == b) {
                    a.s && av(a.s, a.j.B(W(a, "promptSourceLang")));
                    if (a.M) {
                        var e = a.ua();
                        a.l.Sb(a.M);
                        a.Aa(e)
                    }
                    av(a.l, a.j.B(W(a, "promptTargetLang")))
                } else
                    2 == b && (a.s && av(a.s, a.j.B(W(a, "finishSourceLang"))),
                        a.G && (e = a.ua(),
                            a.l.Sb(a.G),
                            a.Aa(e)),
                        av(a.l, a.j.B(W(a, "finishTargetLang"))));
                e = {};
                e[-1] = a.j.B(W(a, "errorSection"));
                e[0] = a.j.B(W(a, "promptSection"));
                e[1] = a.j.B(W(a, "progressSection"));
                e[2] = a.j.B(W(a, "finishSection"));
                for (var f in e)
                    e[f] !== Object.prototype[f] && T(e[f], f == b)
            }
            c && a.fa(!0);
            a.S.parentNode.parentNode.style.display = d ? "block" : "none"
        };
        ov.prototype.isVisible = function() {
            return this.ob
        };
        ov.prototype.fa = function(a) {
            if (this.ob != a) {
                this.ob = a;
                if (_.C)
                    var b = parseInt("0" + this.h.g.body.leftMargin, 10),
                        c = parseInt("0" + this.h.g.body.topMargin, 10);
                var d = "BackCompat" == this.h.g.compatMode;
                a ? (_.K(this.h.g.body, "top", "40px"),
                    T(this.B(), !0),
                    _.C && (Ik() ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0,
                        d && (this.h.g.body.topMargin = c + 40)) : d ? (this.h.g.body.topMargin = c + 40,
                        window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b,
                        window._bannerquirkfixtop = -c - 40))) : (_.K(this.h.g.body, "top", "0px"),
                    T(this.B(), !1),
                    d && 40 <= c && (this.h.g.body.topMargin = c - 40))
            }
        };
        ov.prototype.nf = function(a) {
            this.j.Gc(this.j.B(W(this, "progressValue")), a)
        };
        var pv = function(a, b) {
            a.j.Gc(a.j.B(W(a, "errorContent")), b)
        };
        ov.prototype.pf = function(a, b) {
            this.M = a;
            this.G = b;
            this.l.Sb(a)
        };
        var sv = function(a, b) {
            _.A.call(this);
            "string" == _.xb(a) && (b = a,
                a = {});
            "string" == _.xb(b) && (b = R(String(b)));
            this.U = b;
            this.s = new _.$f(this);
            this.da = void 0;
            a = Object(a);
            this.o = "auto";
            !(b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/),
                b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
            this.g = {
                oe: b,
                dg: !1,
                pe: null,
                md: null,
                Ke: [],
                bg: [],
                Rh: !1,
                zc: !1,
                apiKey: "",
                eg: !1,
                Be: "",
                ic: 0,
                Wf: !1
            };
            this.ta = {
                lb: Jn,
                eh: "https://" == En ? V.Eh : null
            };
            this.Y = {
                lb: Jn,
                wd: null
            };
            a && ("autoDisplay" in a && (this.g.oe = this.g.oe && !!a.autoDisplay),
                "multilanguagePage" in a && (this.g.zc = !!a.multilanguagePage),
                "gaTrack" in a && (this.g.eg = !!a.gaTrack),
                "layout" in a && (this.g.ic = a.layout),
                a.pageLanguage && (this.g.Td = lp(a.pageLanguage)),
                a.includedLanguages && (this.g.Ke = a.includedLanguages.split(",")),
                a.excludedLanguages && (this.g.bg = a.excludedLanguages.split(",")),
                this.g.Td && (this.o = this.g.Td),
                a.key && (this.g.apiKey = a.key),
                a.gaId && (this.g.Be = a.gaId),
                this.Y.wd = Number(a.floatPosition) || this.Y.wd,
                "disableAutoTranslation" in a && (this.g.Wf = !!a.disableAutoTranslation),
                a.remoteApiProxyHandlers && (this.da = a.remoteApiProxyHandlers));
            !this.g.Wf && rv(this) && (this.g.dg = !0);
            this.C = {};
            if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) && a[2])
                for (this.C = {},
                    a = _.ad(a[2]).split("|"),
                    b = 0; b < a.length; ++b) {
                    var c = a[b].split("=");
                    c[0] && (this.C[c[0]] = c[1])
                }
            this.na = new ot({
                apiKey: this.g.apiKey,
                bc: 1,
                rf: !0,
                gm: Ln
            }, {
                client: Cn,
                u: window.location.href
            });
            this.D = new Zu(void 0, this.na, void 0, void 0, this.g.apiKey, void 0, void 0, new Ku, void 0, void 0, this.da);
            this.H = !1;
            this.s.I(window, "pagehide", this.T);
            this.G = new ep((0,
                _.x)(this.Bi, this));
            this.L = new ep((0,
                _.x)(this.Fi, this));
            this.M = new gp((0,
                _.x)(this.Xi, this));
            this.h = new ov(this.ta);
            this.D.Ad(this.G.register((0,
                _.x)(this.Ai, this)), vn);
            this.U ? (this.l = new kv(this.g),
                this.s.I(this.l, "load", this.G.register()),
                this.s.I(this.l, "chg_tgt_lang", hp(this.M, this.L.delay((0,
                    _.x)(this.zi, this)))),
                this.l.Ma(this.U)) : this.Y.wd && (this.A = new mv(this.Y),
                this.s.I(this.A, "load", this.G.register()),
                this.s.I(this.A, "clk_trans", hp(this.M, this.L.delay((0,
                    _.x)(this.yi, this)))),
                this.A.Ma());
            !this.g.Td && this.g.Rh && this.D.zd(this.G.register((0,
                _.x)(this.xi, this)));
            this.G.finish()
        };
        _.w(sv, _.A);
        var rv = function(a) {
                function b(f, g) {
                    if (f = _.ad(f).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) {
                        if (f[3])
                            return g.g.pe = f[2],
                                g.g.md = f[3], !0;
                        if (f[6])
                            return g.g.pe = f[5],
                                g.g.md = f[6], !0
                    }
                    return !1
                }
                var c = {
                        url: function() {
                            var f = window.location.href.match(/#.*googtrans(.*)/);
                            return f && f[1]
                        },
                        cookie: function() {
                            var f = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
                            return f && f[2]
                        }
                    },
                    d;
                for (d in c)
                    if (c[d] !== Object.prototype[d]) {
                        var e = c[d]();
                        if (e && b(e, a))
                            return d
                    }
                return ""
            },
            tv = function(a, b) {
                for (var c = window.location.hostname.split("."); 2 < c.length;)
                    c.shift();
                c = ";domain=" + c.join(".");
                null != b ? a = a + "=" + b : (b = new Date,
                    b.setTime(b.getTime() - 1),
                    a = a + "=none;expires=" + b.toGMTString());
                a += ";path=/";
                document.cookie = a;
                try {
                    document.cookie = a + c
                } catch (d) {}
            },
            uv = function(a, b) {
                var c = null;
                void 0 !== b && (c = void 0 !== a ? "/" + a + "/" + b : "/" + b);
                tv("googtrans", c)
            };
        _.l = sv.prototype;
        _.l.Ai = function(a) {
            this.j = lp(vn);
            a = a || {};
            var b = a.targetLanguages || [];
            this.N = {
                sl: ck(a.sourceLanguages || []),
                tl: ck(b)
            };
            this.F = {};
            this.S = {};
            a = !this.g.Ke.length;
            b = dp(this.g.Ke);
            var c = dp(this.g.bg);
            this.F[vn] = "";
            this.S[vn] = "";
            for (var d in this.N.tl)
                this.N.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.S[d] = this.N.tl[d],
                    d == this.g.Td && !this.g.zc) || (this.F[d] = this.N.tl[d]);
            this.F[vn] || delete this.F[vn];
            this.S[vn] || delete this.S[vn];
            this.ka = Bi(this.N.sl)
        };
        _.l.xi = function(a) {
            a && (this.o = lp(a))
        };
        _.l.Bi = function() {
            delete this.G;
            if (this.N) {
                this.o = this.o || this.g.pe;
                this.j = this.g.md || this.j;
                var a = this.g.dg || this.g.oe && this.o != this.j && !(this.o in zn) && "1" != this.C.os && "1" != this.C["o" + this.o];
                "zh-TW" == this.o && (this.o = "zh-CN");
                this.ka[this.o] || (a = !1,
                    this.o = "auto");
                if (!this.F[this.j])
                    if (a = !1,
                        this.F.en)
                        this.j = "en";
                    else
                        for (var b in this.F)
                            if (this.F[b] !== Object.prototype[b]) {
                                this.j = b;
                                break
                            }
                if (this.l) {
                    b = this.F;
                    var c = {
                            "": V.Dh
                        },
                        d;
                    for (d in b)
                        b[d] !== Object.prototype[d] && (c[d] = b[d]);
                    this.l.pf(c, this.S);
                    this.l.Aa("")
                }!xn && a ? this.g.md ? hp(this.M, this.L.delay((0,
                    _.x)(this.Yd, this, !0, !0))).call() : (this.H = !0,
                    hp(this.M, this.L.delay((0,
                        _.x)(this.Yd, this))).call(),
                    Xj("te_ap", {
                        sl: this.o
                    })) : (this.A && this.A.fa(!0),
                    this.l && this.l.fa(!0));
                window.google.translate.TranslateService && this.tb(!1);
                this.M.finish()
            }
        };
        _.l.Fi = function() {
            var a = this.h,
                b = this.ka;
            a.s && a.s.Sb(b);
            a.U = b;
            this.h.pf(this.F, this.S);
            this.h.Fc(this.o);
            this.h.Aa(this.j);
            this.s.I(this.h, "clk_confirm", this.ui);
            this.s.I(this.h, "clk_cancel", this.ti);
            this.s.I(this.h, "clk_restore", this.Ce);
            this.s.I(this.h, "clk_close", this.Bd);
            this.s.I(this.h, "clk_no_ap", this.vi);
            this.s.I(this.h, "clk_no_ap_site", this.wi);
            this.s.I(this.h, "chg_src_lang", this.kg);
            this.s.I(this.h, "chg_tgt_lang", this.kg);
            this.l && this.l.fa(!0)
        };
        _.l.Xi = function() {
            this.s.I(this.h, "load", this.L.register());
            this.h.Ma();
            this.L.finish()
        };
        _.l.K = function() {
            this.D.restore();
            _.A.prototype.K.call(this);
            this.D.T();
            this.s.T();
            this.s = null;
            this.h && this.h.T();
            this.h = null;
            this.A && this.A.T();
            this.A = null;
            this.l && this.l.T();
            this.U = this.l = null
        };
        _.l.ui = function() {
            !this.h.isVisible() || !this.g.zc && sp(this.o, this.h.ua()) || (this.H && Xj("te_apt", {
                    sl: this.o
                }),
                vv(this, !1),
                this.l && this.l.Aa(this.h.ua()))
        };
        _.l.ti = function() {
            this.h.isVisible() && (wv(this),
                qv(this.h, 0),
                this.l && this.l.Aa(""))
        };
        _.l.Ce = function() {
            this.h.isVisible() && (wv(this),
                qv(this.h, 0));
            this.l && this.l.Aa("")
        };
        _.l.Bd = function() {
            this.h.isVisible() && (this.H && (this.H = !1,
                    Xj("te_apc", {
                        sl: this.o
                    })),
                wv(this),
                this.h.fa(!1),
                this.l && this.l.Aa(""),
                this.A && this.A.fa(!0))
        };
        _.l.vi = function() {
            this.h.isVisible() && (this.C["o" + this.o] = "1",
                Xj("te_apr", {
                    sl: this.o
                }),
                this.H = !1,
                this.Bd())
        };
        _.l.wi = function() {
            if (this.h.isVisible()) {
                this.H = !1;
                this.C.os = "1";
                var a = null;
                if (this.C) {
                    a = [];
                    for (var b in this.C)
                        this.C[b] !== Object.prototype[b] && a.push(b + "=" + this.C[b]);
                    a = a.join("|")
                }
                tv("googtransopt", a);
                this.Bd()
            }
        };
        _.l.kg = function() {
            this.h.isVisible() && (!this.g.zc && sp(this.o, this.h.ua()) ? this.Ce() : (this.o = this.h.Db() || this.o,
                this.j = this.h.ua(),
                2 == this.h.Qc && (this.l && this.l.Aa(this.h.ua()),
                    vv(this))))
        };
        _.l.Yd = function(a, b) {
            this.h.isVisible() || (this.A && this.A.fa(!1),
                a ? vv(this, b) : qv(this.h, 0, !0, this.H))
        };
        _.l.Fj = function(a, b) {
            hp(this.M, this.L.delay((0,
                _.x)(this.Yd, this, a, b))).call()
        };
        _.l.yi = function() {
            this.Yd(2 == this.h.Qc)
        };
        _.l.zi = function() {
            this.l.ua() ? !this.g.zc && sp(this.o, this.h.ua()) ? this.Ce() : (this.j = this.l.ua(),
                this.h.Aa(this.j),
                vv(this)) : this.l.Aa(this.j)
        };
        var vv = function(a, b) {
            if (window.google.translate.TranslateService)
                try {
                    window.google.translate.TranslateService.getInstance().restore()
                } catch (c) {}
            uv(a.o, a.j);
            a.H = !1;
            !b && a.o in zn && Xj("te_ape", {
                sl: a.o
            });
            a.h.nf(0);
            qv(a.h, 1, !0);
            a.D.Zg(!!b);
            window.setTimeout((0,
                _.x)(a.D.be, a.D, a.g.zc ? "auto" : a.o, a.j, (0,
                _.x)(a.Ca, a), void 0, void 0), 0);
            if (a.g.eg && window._gaq && window._gat)
                try {
                    a.g.Be ? window._gat._getTracker(a.g.Be)._trackEvent("Google Website Translator", "Translate", a.j) : window._gat._getTrackerByName()._trackEvent("Google Website Translator", "Translate", a.j)
                } catch (c) {}
        };
        sv.prototype.Ca = function(a, b, c) {
            "function" == typeof this.Da && this.Da();
            this.h.isVisible() && 1 == this.h.Qc && (c ? (wv(this),
                qv(this.h, -1, !0),
                2 == c ? pv(this.h, V.yh) : pv(this.h, V.Df)) : (this.h.nf(a),
                b && (this.l && this.l.Aa(this.j),
                    this.h.Fc(this.o),
                    qv(this.h, 2))))
        };
        var wv = function(a) {
            uv();
            window.setTimeout((0,
                _.x)(a.D.restore, a.D, null), 0)
        };
        sv.prototype.tb = function(a) {
            a || this.Bd();
            this.l && this.l.tb(a);
            this.A && this.A.fa(a)
        };
        var xv = function(a) {
            if (a && (a = String(a),
                    a = a.split("."),
                    a.length)) {
                for (var b = window, c = 0; c < a.length; ++c) {
                    var d = a[c];
                    if (!(d && d in b))
                        return;
                    b = b[d]
                }
                return b
            }
        };
        var yv = xv("google.translate.m");
        if (yv)
            for (var zv in V)
                if (V[zv] !== Object.prototype[V[zv]] && V[zv]) {
                    var Av = V[zv]();
                    V[zv] = yv[Av] ? yv[Av] : bq
                }
        if (1 == Bn) {
            var Z = null,
                Bv = function(a) {
                    if (!Z) {
                        var b, c, d, e;
                        a && ("key" in a && (b = a.key),
                            "serverParams" in a && (c = a.serverParams),
                            "timeInfo" in a && (d = a.timeInfo),
                            "remoteApiProxyHandlers" in a && (e = a.remoteApiProxyHandlers),
                            (a = tp()) && (c = a));
                        a = 0;
                        if ("te_lib" == Cn || _.mc)
                            a = 3;
                        Z = new Zu(void 0, new ot({
                            apiKey: b,
                            bc: a,
                            rf: !0,
                            trackVisibility: "tvis" == c
                        }), void 0, void 0, b, c, d, void 0, void 0, void 0, e);
                        Z.constructor = function() {};
                        Z.isAvailable = Z.qb;
                        Z.getSupportedLanguages = Z.Ad;
                        Z.getPageLanguage = Z.zd;
                        Z.setClickThrough = Z.Zg;
                        Z.translatePage = Z.be;
                        Z.restore = Z.restore;
                        Z.isTranslating = Z.sh;
                        Z.setCheckVisibility = Z.Dj
                    }
                    return Z
                };
            Bv.getInstance = function() {
                return Z
            };
            _.Eb("google.translate.TranslateService", Bv);
            Xj("te_li")
        } else {
            var Cv = null,
                Dv = function(a, b) {
                    Cv || (Cv = new sv(a, b),
                        Cv.constructor = function() {}
                    );
                    return Cv
                };
            Dv.getInstance = function() {
                return Cv
            };
            _.Eb("google.translate.TranslateElement", Dv);
            sv.prototype.dispose = sv.prototype.T;
            sv.prototype.showBanner = sv.prototype.Fj;
            sv.prototype.setEnabled = sv.prototype.tb;
            _.Eb("google.translate.TranslateElement.FloatPosition", nv);
            nv.TOP_LEFT = 1;
            nv.TOP_RIGHT = 2;
            nv.BOTTOM_RIGHT = 3;
            nv.BOTTOM_LEFT = 4;
            _.Eb("google.translate.TranslateElement.InlineLayout", lv);
            lv.VERTICAL = 0;
            lv.HORIZONTAL = 1;
            lv.SIMPLE = 2
        }
        (function() {
            for (var a in Object.prototype) {
                _.Ec = function(d, e, f) {
                    for (var g in d)
                        d[g] !== Object.prototype[g] && e.call(f, d[g], g, d)
                };
                break
            }
            var b = _.Db(),
                c = xv(wn);
            c && "function" == typeof c && (1 == Bn ? c() : function e() {
                var f = document.readyState;
                "undefined" == _.xb(f) || "complete" == f || "interactive" == f || 2E4 <= _.Db() - b ? c() : window.setTimeout(e, 500)
            }())
        })();
        _.pa();
    } catch (e) {
        _._DumpException(e)
    }
}).call(this, this.default_tr);
// Google Inc.


// <![CDATA[
// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({ pageLanguage: 'nl', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'translate_element');
// }
// ]]>