(function() {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload"))
    return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
    i(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const e of o.addedNodes)
          e.tagName === "LINK" && e.rel === "modulepreload" && i(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(s) {
    const o = {};
    return s.integrity && (o.integrity = s.integrity), s.referrerpolicy && (o.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? o.credentials = "include" : s.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function i(s) {
    if (s.ep)
      return;
    s.ep = !0;
    const o = c(s);
    fetch(s.href, o);
  }
})();
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Je = { exports: {} };
(function(r) {
  (function(l, c) {
    var i = c(l, l.document, Date);
    l.lazySizes = i, r.exports && (r.exports = i);
  })(
    typeof window < "u" ? window : {},
    function(c, i, s) {
      var o, e;
      if (function() {
        var a, n = {
          lazyClass: "lazyload",
          loadedClass: "lazyloaded",
          loadingClass: "lazyloading",
          preloadClass: "lazypreload",
          errorClass: "lazyerror",
          autosizesClass: "lazyautosizes",
          srcAttr: "data-src",
          srcsetAttr: "data-srcset",
          sizesAttr: "data-sizes",
          minSize: 40,
          customMedia: {},
          init: !0,
          expFactor: 1.5,
          hFac: 0.8,
          loadMode: 2,
          loadHidden: !0,
          ricTimeout: 0,
          throttleDelay: 125
        };
        e = c.lazySizesConfig || c.lazysizesConfig || {};
        for (a in n)
          a in e || (e[a] = n[a]);
      }(), !i || !i.getElementsByClassName)
        return {
          init: function() {
          },
          cfg: e,
          noSupport: !0
        };
      var v = i.documentElement, N = c.HTMLPictureElement, x = "addEventListener", z = "getAttribute", p = c[x].bind(c), f = c.setTimeout, _ = c.requestAnimationFrame || f, E = c.requestIdleCallback, W = /^picture$/i, L = ["load", "error", "lazyincluded", "_lazyloaded"], A = {}, D = Array.prototype.forEach, k = function(a, n) {
        return A[n] || (A[n] = new RegExp("(\\s|^)" + n + "(\\s|$)")), A[n].test(a[z]("class") || "") && A[n];
      }, P = function(a, n) {
        k(a, n) || a.setAttribute("class", (a[z]("class") || "").trim() + " " + n);
      }, F = function(a, n) {
        var d;
        (d = k(a, n)) && a.setAttribute("class", (a[z]("class") || "").replace(d, " "));
      }, y = function(a, n, d) {
        var C = d ? x : "removeEventListener";
        d && y(a, n), L.forEach(function(S) {
          a[C](S, n);
        });
      }, j = function(a, n, d, C, S) {
        var g = i.createEvent("Event");
        return d || (d = {}), d.instance = o, g.initEvent(n, !C, !S), g.detail = d, a.dispatchEvent(g), g;
      }, U = function(a, n) {
        var d;
        !N && (d = c.picturefill || e.pf) ? (n && n.src && !a[z]("srcset") && a.setAttribute("srcset", n.src), d({ reevaluate: !0, elements: [a] })) : n && n.src && (a.src = n.src);
      }, H = function(a, n) {
        return (getComputedStyle(a, null) || {})[n];
      }, ye = function(a, n, d) {
        for (d = d || a.offsetWidth; d < e.minSize && n && !a._lazysizesWidth; )
          d = n.offsetWidth, n = n.parentNode;
        return d;
      }, re = function() {
        var a, n, d = [], C = [], S = d, g = function() {
          var b = S;
          for (S = d.length ? C : d, a = !0, n = !1; b.length; )
            b.shift()();
          a = !1;
        }, $ = function(b, m) {
          a && !m ? b.apply(this, arguments) : (S.push(b), n || (n = !0, (i.hidden ? f : _)(g)));
        };
        return $._lsFlush = g, $;
      }(), se = function(a, n) {
        return n ? function() {
          re(a);
        } : function() {
          var d = this, C = arguments;
          re(function() {
            a.apply(d, C);
          });
        };
      }, Me = function(a) {
        var n, d = 0, C = e.throttleDelay, S = e.ricTimeout, g = function() {
          n = !1, d = s.now(), a();
        }, $ = E && S > 49 ? function() {
          E(g, { timeout: S }), S !== e.ricTimeout && (S = e.ricTimeout);
        } : se(function() {
          f(g);
        }, !0);
        return function(b) {
          var m;
          (b = b === !0) && (S = 33), !n && (n = !0, m = C - (s.now() - d), m < 0 && (m = 0), b || m < 9 ? $() : f($, m));
        };
      }, be = function(a) {
        var n, d, C = 99, S = function() {
          n = null, a();
        }, g = function() {
          var $ = s.now() - d;
          $ < C ? f(g, C - $) : (E || S)(S);
        };
        return function() {
          d = s.now(), n || (n = f(g, C));
        };
      }, he = function() {
        var a, n, d, C, S, g, $, b, m, w, B, K, Pe = /^img$/i, Ue = /^iframe$/i, qe = "onscroll" in c && !/(gle|ing)bot/.test(navigator.userAgent), Fe = 0, ie = 0, q = 0, ee = -1, pe = function(t) {
          q--, (!t || q < 0 || !t.target) && (q = 0);
        }, me = function(t) {
          return K == null && (K = H(i.body, "visibility") == "hidden"), K || !(H(t.parentNode, "visibility") == "hidden" && H(t, "visibility") == "hidden");
        }, He = function(t, u) {
          var h, T = t, O = me(t);
          for (b -= u, B += u, m -= u, w += u; O && (T = T.offsetParent) && T != i.body && T != v; )
            O = (H(T, "opacity") || 1) > 0, O && H(T, "overflow") != "visible" && (h = T.getBoundingClientRect(), O = w > h.left && m < h.right && B > h.top - 1 && b < h.bottom + 1);
          return O;
        }, ze = function() {
          var t, u, h, T, O, I, G, V, Q, X, Y, te, M = o.elements;
          if ((C = e.loadMode) && q < 8 && (t = M.length)) {
            for (u = 0, ee++; u < t; u++)
              if (!(!M[u] || M[u]._lazyRace)) {
                if (!qe || o.prematureUnveil && o.prematureUnveil(M[u])) {
                  ne(M[u]);
                  continue;
                }
                if ((!(V = M[u][z]("data-expand")) || !(I = V * 1)) && (I = ie), X || (X = !e.expand || e.expand < 1 ? v.clientHeight > 500 && v.clientWidth > 500 ? 500 : 370 : e.expand, o._defEx = X, Y = X * e.expFactor, te = e.hFac, K = null, ie < Y && q < 1 && ee > 2 && C > 2 && !i.hidden ? (ie = Y, ee = 0) : C > 1 && ee > 1 && q < 6 ? ie = X : ie = Fe), Q !== I && (g = innerWidth + I * te, $ = innerHeight + I, G = I * -1, Q = I), h = M[u].getBoundingClientRect(), (B = h.bottom) >= G && (b = h.top) <= $ && (w = h.right) >= G * te && (m = h.left) <= g && (B || w || m || b) && (e.loadHidden || me(M[u])) && (n && q < 3 && !V && (C < 3 || ee < 4) || He(M[u], I))) {
                  if (ne(M[u]), O = !0, q > 9)
                    break;
                } else
                  !O && n && !T && q < 4 && ee < 4 && C > 2 && (a[0] || e.preloadAfterLoad) && (a[0] || !V && (B || w || m || b || M[u][z](e.sizesAttr) != "auto")) && (T = a[0] || M[u]);
              }
            T && !O && ne(T);
          }
        }, R = Me(ze), Se = function(t) {
          var u = t.target;
          if (u._lazyCache) {
            delete u._lazyCache;
            return;
          }
          pe(t), P(u, e.loadedClass), F(u, e.loadingClass), y(u, Ae), j(u, "lazyloaded");
        }, Be = se(Se), Ae = function(t) {
          Be({ target: t.target });
        }, De = function(t, u) {
          try {
            t.contentWindow.location.replace(u);
          } catch {
            t.src = u;
          }
        }, Ge = function(t) {
          var u, h = t[z](e.srcsetAttr);
          (u = e.customMedia[t[z]("data-media") || t[z]("media")]) && t.setAttribute("media", u), h && t.setAttribute("srcset", h);
        }, Ve = se(function(t, u, h, T, O) {
          var I, G, V, Q, X, Y;
          (X = j(t, "lazybeforeunveil", u)).defaultPrevented || (T && (h ? P(t, e.autosizesClass) : t.setAttribute("sizes", T)), G = t[z](e.srcsetAttr), I = t[z](e.srcAttr), O && (V = t.parentNode, Q = V && W.test(V.nodeName || "")), Y = u.firesLoad || "src" in t && (G || I || Q), X = { target: t }, P(t, e.loadingClass), Y && (clearTimeout(d), d = f(pe, 2500), y(t, Ae, !0)), Q && D.call(V.getElementsByTagName("source"), Ge), G ? t.setAttribute("srcset", G) : I && !Q && (Ue.test(t.nodeName) ? De(t, I) : t.src = I), O && (G || Q) && U(t, { src: I })), t._lazyRace && delete t._lazyRace, F(t, e.lazyClass), re(function() {
            var te = t.complete && t.naturalWidth > 1;
            (!Y || te) && (te && P(t, "ls-is-cached"), Se(X), t._lazyCache = !0, f(function() {
              "_lazyCache" in t && delete t._lazyCache;
            }, 9)), t.loading == "lazy" && q--;
          }, !0);
        }), ne = function(t) {
          if (!t._lazyRace) {
            var u, h = Pe.test(t.nodeName), T = h && (t[z](e.sizesAttr) || t[z]("sizes")), O = T == "auto";
            (O || !n) && h && (t[z]("src") || t.srcset) && !t.complete && !k(t, e.errorClass) && k(t, e.lazyClass) || (u = j(t, "lazyunveilread").detail, O && de.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, q++, Ve(t, u, O, T, h));
          }
        }, Xe = be(function() {
          e.loadMode = 3, R();
        }), Ce = function() {
          e.loadMode == 3 && (e.loadMode = 2), Xe();
        }, le = function() {
          if (!n) {
            if (s.now() - S < 999) {
              f(le, 999);
              return;
            }
            n = !0, e.loadMode = 3, R(), p("scroll", Ce, !0);
          }
        };
        return {
          _: function() {
            S = s.now(), o.elements = i.getElementsByClassName(e.lazyClass), a = i.getElementsByClassName(e.lazyClass + " " + e.preloadClass), p("scroll", R, !0), p("resize", R, !0), p("pageshow", function(t) {
              if (t.persisted) {
                var u = i.querySelectorAll("." + e.loadingClass);
                u.length && u.forEach && _(function() {
                  u.forEach(function(h) {
                    h.complete && ne(h);
                  });
                });
              }
            }), c.MutationObserver ? new MutationObserver(R).observe(v, { childList: !0, subtree: !0, attributes: !0 }) : (v[x]("DOMNodeInserted", R, !0), v[x]("DOMAttrModified", R, !0), setInterval(R, 999)), p("hashchange", R, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(t) {
              i[x](t, R, !0);
            }), /d$|^c/.test(i.readyState) ? le() : (p("load", le), i[x]("DOMContentLoaded", R), f(le, 2e4)), o.elements.length ? (ze(), re._lsFlush()) : R();
          },
          checkElems: R,
          unveil: ne,
          _aLSL: Ce
        };
      }(), de = function() {
        var a, n = se(function(g, $, b, m) {
          var w, B, K;
          if (g._lazysizesWidth = m, m += "px", g.setAttribute("sizes", m), W.test($.nodeName || ""))
            for (w = $.getElementsByTagName("source"), B = 0, K = w.length; B < K; B++)
              w[B].setAttribute("sizes", m);
          b.detail.dataAttr || U(g, b.detail);
        }), d = function(g, $, b) {
          var m, w = g.parentNode;
          w && (b = ye(g, w, b), m = j(g, "lazybeforesizes", { width: b, dataAttr: !!$ }), m.defaultPrevented || (b = m.detail.width, b && b !== g._lazysizesWidth && n(g, w, m, b)));
        }, C = function() {
          var g, $ = a.length;
          if ($)
            for (g = 0; g < $; g++)
              d(a[g]);
        }, S = be(C);
        return {
          _: function() {
            a = i.getElementsByClassName(e.autosizesClass), p("resize", S);
          },
          checkElems: S,
          updateElem: d
        };
      }(), oe = function() {
        !oe.i && i.getElementsByClassName && (oe.i = !0, de._(), he._());
      };
      return f(function() {
        e.init && oe();
      }), o = {
        cfg: e,
        autoSizer: de,
        loader: he,
        init: oe,
        uP: U,
        aC: P,
        rC: F,
        hC: k,
        fire: j,
        gW: ye,
        rAF: re
      }, o;
    }
  );
})(Je);
const ce = function() {
  function r(i) {
    let o = i.getAttribute("data-src"), e = i.getAttribute("data-height-ratio"), v = i.parentNode.innerWidth || i.parentNode.offsetWidth;
    if (v = v !== null ? v + 50 - v % 50 : null, !e) {
      var N = i.parentNode.innerHeight || i.parentNode.offsetHeight;
      N = N !== null ? N + 50 - N % 50 : null, e = N / v;
    }
    let x = v, z = x * e;
    o += x ? l(o) + "width=" + x : "", o += z !== null ? l(o) + "height=" + z : "";
    const p = i.getAttribute("data-query-obj");
    return o = c(o, p), o;
  }
  function l(i) {
    return i.indexOf("?") > -1 ? "&" : "?";
  }
  function c(i, s) {
    if (s) {
      const o = JSON.parse(s);
      Object.keys(o).forEach(function(e) {
        i += o[e] !== null ? l(i) + e + "=" + o[e] : "";
      });
    }
    return i;
  }
  return {
    queryUrl: c,
    getUrl: r
  };
};
let ge = 0;
const Ee = 50, J = window.devicePixelRatio;
class Qe {
  constructor({ includeWebp: l = !0, includeRetina: c = !0 }) {
    this.includeWebp = l, this.includeRetina = c, this.lazyLoad = function(i) {
      i.preventDefault = function() {
        Object.defineProperty(this, "defaultPrevented", { get: function() {
          return !0;
        } });
      };
      const s = this.includeWebp, o = this.includeRetina, e = i.target, v = e.classList.contains("lazyload-measure") || e.classList.contains("lazyload-bg"), N = e.classList.contains("lazyload-measure"), x = e.hasAttribute("data-srcset") && e.hasAttribute("data-query-obj"), z = e.hasAttribute("data-src") && e.hasAttribute("data-query-obj");
      if (v && i.preventDefault(), N) {
        const p = e.classList.contains("lazyload-bg");
        let f = ce().getUrl(e);
        Le(function(_) {
          if (_ && s && (f = $e(f)), p && o) {
            const { orgWidth: E, orgHeight: W, retinaHeight: L, retinaWidth: A } = fe(f);
            e.parentNode.style.backgroundImage = `url(${f})`, window.CSS.supports("background-image", `-webkit-image-set( url(${f}) 1x, url(${Z({ url: f, orgWidth: E, orgHeight: W, retinaHeight: L, retinaWidth: A })}) ${J}x)`) && (e.parentNode.style.backgroundImage = `-webkit-image-set( url(${f}) 1x, url(${Z({ url: f, orgWidth: E, orgHeight: W, retinaHeight: L, retinaWidth: A })}) ${J}x)`), window.CSS.supports("background-image", `image-set(url("${f}") 1x, url(${Z({ url: f, orgWidth: E, orgHeight: W, retinaHeight: L, retinaWidth: A })}) ${J}x)`) && (e.parentNode.style.backgroundImage = `image-set(url("${f}") 1x, url(${Z({ url: f, orgWidth: E, orgHeight: W, retinaHeight: L, retinaWidth: A })}) ${J}x)`), e.style.visibility = "hidden";
          } else if (p)
            e.parentNode.style.backgroundImage = `url(${f})`, e.style.visibility = "hidden";
          else if (e.src = f, o) {
            const { orgWidth: E, orgHeight: W, retinaHeight: L, retinaWidth: A } = fe(f);
            (E || W) && e.setAttribute("srcset", `${f} 1x, ${Z({ url: f, orgWidth: E, orgHeight: W, retinaHeight: L, retinaWidth: A })} ${J}x`);
          }
        });
      } else if (x) {
        const p = e.getAttribute("data-query-obj"), f = e.getAttribute("data-srcset").split(","), _ = e.getAttribute("data-src"), E = [];
        Le(function(W) {
          f.forEach(function(L) {
            L = L.trim(), L = L.split(" ");
            let A = L[0];
            const D = L[1];
            let k = ce().queryUrl(A, p);
            if (W && s && (k = $e(k)), E.push(k + " " + D), o) {
              const P = D.match(/\d+/g), { orgWidth: F, orgHeight: y, retinaHeight: j, retinaWidth: U } = fe(k), H = P ? D.replace(P, (Number(P) * J).toString()) : D;
              (F || y) && E.push(`${Z({ url: A, orgWidth: F, orgHeight: y, retinaHeight: j, retinaWidth: U })} ${H}`);
            }
          }), e.setAttribute("srcset", E.join(", ")), e.setAttribute("src", ce().queryUrl(_, p));
        });
      } else if (z) {
        const p = e.getAttribute("data-query-obj"), f = e.getAttribute("data-src"), _ = ce().queryUrl(f, p);
        if (o) {
          const { orgWidth: E, orgHeight: W, retinaHeight: L, retinaWidth: A } = fe(_);
          (E || W) && e.setAttribute("srcset", `${_} 1x, ${Z({ url: _, orgWidth: E, orgHeight: W, retinaHeight: L, retinaWidth: A })} ${J}x`);
        }
        e.setAttribute("src", _);
      }
    }, this.checkImages = function() {
      if (window.innerWidth > ge + Ee || window.innerWidth < ge - Ee) {
        let i = Array.prototype.slice.call(document.body.querySelectorAll(".lazyloaded"));
        i.length > 0 && i.map(function(s) {
          s.classList.remove("lazyloaded"), s.classList.add("lazyload");
        }), ge = window.innerWidth;
      }
    };
  }
}
function Le(r) {
  const l = new Image();
  l.src = "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA", l.onload = l.onerror = function() {
    r(l.height === 2);
  };
}
function fe(r) {
  const l = new URL(r);
  let c = new URLSearchParams(l.search);
  const i = c.get("width"), s = c.get("height"), o = i && (Number(i) * J).toString(), e = s && (Number(s) * J).toString();
  return {
    orgWidth: i,
    orgHeight: s,
    retinaWidth: o,
    retinaHeight: e
  };
}
function Z({ url: r, orgWidth: l, orgHeight: c, retinaHeight: i, retinaWidth: s }) {
  return r.replace(l, s).replace(c, i);
}
function $e(r) {
  if (r.includes("format="))
    return r;
  const l = r.split("?");
  return `${l[0]}?format=webp&${l[1]}`;
}
function Ke(r) {
  var l = typeof r;
  return r != null && (l == "object" || l == "function");
}
var _e = Ke, Ye = typeof ue == "object" && ue && ue.Object === Object && ue, Ze = Ye, et = Ze, tt = typeof self == "object" && self && self.Object === Object && self, rt = et || tt || Function("return this")(), Ie = rt, it = Ie, nt = function() {
  return it.Date.now();
}, at = nt, st = Ie, ot = st.Symbol, we = ot, xe = we, Re = Object.prototype, lt = Re.hasOwnProperty, ut = Re.toString, ae = xe ? xe.toStringTag : void 0;
function ct(r) {
  var l = lt.call(r, ae), c = r[ae];
  try {
    r[ae] = void 0;
    var i = !0;
  } catch {
  }
  var s = ut.call(r);
  return i && (l ? r[ae] = c : delete r[ae]), s;
}
var ft = ct, dt = Object.prototype, gt = dt.toString;
function vt(r) {
  return gt.call(r);
}
var yt = vt, Te = we, bt = ft, ht = yt, pt = "[object Null]", mt = "[object Undefined]", Ne = Te ? Te.toStringTag : void 0;
function zt(r) {
  return r == null ? r === void 0 ? mt : pt : Ne && Ne in Object(r) ? bt(r) : ht(r);
}
var St = zt;
function At(r) {
  return r != null && typeof r == "object";
}
var Ct = At, Et = St, Lt = Ct, $t = "[object Symbol]";
function xt(r) {
  return typeof r == "symbol" || Lt(r) && Et(r) == $t;
}
var Tt = xt, We = _e, Nt = Tt, je = 0 / 0, Wt = /^\s+|\s+$/g, jt = /^[-+]0x[0-9a-f]+$/i, Ot = /^0b[01]+$/i, _t = /^0o[0-7]+$/i, It = parseInt;
function wt(r) {
  if (typeof r == "number")
    return r;
  if (Nt(r))
    return je;
  if (We(r)) {
    var l = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = We(l) ? l + "" : l;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = r.replace(Wt, "");
  var c = Ot.test(r);
  return c || _t.test(r) ? It(r.slice(2), c ? 2 : 8) : jt.test(r) ? je : +r;
}
var Rt = wt, kt = _e, ve = at, Oe = Rt, Mt = "Expected a function", Pt = Math.max, Ut = Math.min;
function qt(r, l, c) {
  var i, s, o, e, v, N, x = 0, z = !1, p = !1, f = !0;
  if (typeof r != "function")
    throw new TypeError(Mt);
  l = Oe(l) || 0, kt(c) && (z = !!c.leading, p = "maxWait" in c, o = p ? Pt(Oe(c.maxWait) || 0, l) : o, f = "trailing" in c ? !!c.trailing : f);
  function _(y) {
    var j = i, U = s;
    return i = s = void 0, x = y, e = r.apply(U, j), e;
  }
  function E(y) {
    return x = y, v = setTimeout(A, l), z ? _(y) : e;
  }
  function W(y) {
    var j = y - N, U = y - x, H = l - j;
    return p ? Ut(H, o - U) : H;
  }
  function L(y) {
    var j = y - N, U = y - x;
    return N === void 0 || j >= l || j < 0 || p && U >= o;
  }
  function A() {
    var y = ve();
    if (L(y))
      return D(y);
    v = setTimeout(A, W(y));
  }
  function D(y) {
    return v = void 0, f && i ? _(y) : (i = s = void 0, e);
  }
  function k() {
    v !== void 0 && clearTimeout(v), x = 0, i = N = s = v = void 0;
  }
  function P() {
    return v === void 0 ? e : D(ve());
  }
  function F() {
    var y = ve(), j = L(y);
    if (i = arguments, s = this, N = y, j) {
      if (v === void 0)
        return E(N);
      if (p)
        return clearTimeout(v), v = setTimeout(A, l), _(N);
    }
    return v === void 0 && (v = setTimeout(A, l)), e;
  }
  return F.cancel = k, F.flush = P, F;
}
var Ft = qt;
const ke = new Qe({
  includeWebp: !0
});
document.addEventListener("lazybeforeunveil", function(r) {
  ke.lazyLoad(r);
}, !0);
window.addEventListener("resize", function() {
  Ft(ke.checkImages());
}, 100, !1);
