var Mt = { exports: {} };
(function(L) {
  (function(g, d) {
    var i = d(g, g.document, Date);
    g.lazySizes = i, L.exports && (L.exports = i);
  })(
    typeof window < "u" ? window : {},
    function(d, i, f) {
      var u, t;
      if (function() {
        var a, r = {
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
        t = d.lazySizesConfig || d.lazysizesConfig || {};
        for (a in r)
          a in t || (t[a] = r[a]);
      }(), !i || !i.getElementsByClassName)
        return {
          init: function() {
          },
          cfg: t,
          noSupport: !0
        };
      var N = i.documentElement, F = d.HTMLPictureElement, w = "addEventListener", b = "getAttribute", C = d[w].bind(d), o = d.setTimeout, U = d.requestAnimationFrame || o, m = d.requestIdleCallback, W = /^picture$/i, E = ["load", "error", "lazyincluded", "_lazyloaded"], S = {}, G = Array.prototype.forEach, k = function(a, r) {
        return S[r] || (S[r] = new RegExp("(\\s|^)" + r + "(\\s|$)")), S[r].test(a[b]("class") || "") && S[r];
      }, q = function(a, r) {
        k(a, r) || a.setAttribute("class", (a[b]("class") || "").trim() + " " + r);
      }, Y = function(a, r) {
        var s;
        (s = k(a, r)) && a.setAttribute("class", (a[b]("class") || "").replace(s, " "));
      }, K = function(a, r, s) {
        var y = s ? w : "removeEventListener";
        s && K(a, r), E.forEach(function(p) {
          a[y](p, r);
        });
      }, D = function(a, r, s, y, p) {
        var l = i.createEvent("Event");
        return s || (s = {}), s.instance = u, l.initEvent(r, !y, !p), l.detail = s, a.dispatchEvent(l), l;
      }, et = function(a, r) {
        var s;
        !F && (s = d.picturefill || t.pf) ? (r && r.src && !a[b]("srcset") && a.setAttribute("srcset", r.src), s({ reevaluate: !0, elements: [a] })) : r && r.src && (a.src = r.src);
      }, V = function(a, r) {
        return (getComputedStyle(a, null) || {})[r];
      }, ft = function(a, r, s) {
        for (s = s || a.offsetWidth; s < t.minSize && r && !a._lazysizesWidth; )
          s = r.offsetWidth, r = r.parentNode;
        return s;
      }, rt = function() {
        var a, r, s = [], y = [], p = s, l = function() {
          var c = p;
          for (p = s.length ? y : s, a = !0, r = !1; c.length; )
            c.shift()();
          a = !1;
        }, z = function(c, h) {
          a && !h ? c.apply(this, arguments) : (p.push(c), r || (r = !0, (i.hidden ? o : U)(l)));
        };
        return z._lsFlush = l, z;
      }(), nt = function(a, r) {
        return r ? function() {
          rt(a);
        } : function() {
          var s = this, y = arguments;
          rt(function() {
            a.apply(s, y);
          });
        };
      }, St = function(a) {
        var r, s = 0, y = t.throttleDelay, p = t.ricTimeout, l = function() {
          r = !1, s = f.now(), a();
        }, z = m && p > 49 ? function() {
          m(l, { timeout: p }), p !== t.ricTimeout && (p = t.ricTimeout);
        } : nt(function() {
          o(l);
        }, !0);
        return function(c) {
          var h;
          (c = c === !0) && (p = 33), !r && (r = !0, h = y - (f.now() - s), h < 0 && (h = 0), c || h < 9 ? z() : o(z, h));
        };
      }, vt = function(a) {
        var r, s, y = 99, p = function() {
          r = null, a();
        }, l = function() {
          var z = f.now() - s;
          z < y ? o(l, y - z) : (m || p)(p);
        };
        return function() {
          s = f.now(), r || (r = o(l, y));
        };
      }, gt = function() {
        var a, r, s, y, p, l, z, c, h, R, H, J, xt = /^img$/i, Lt = /^iframe$/i, Nt = "onscroll" in d && !/(gle|ing)bot/.test(navigator.userAgent), Wt = 0, at = 0, M = 0, Z = -1, ht = function(e) {
          M--, (!e || M < 0 || !e.target) && (M = 0);
        }, pt = function(e) {
          return J == null && (J = V(i.body, "visibility") == "hidden"), J || !(V(e.parentNode, "visibility") == "hidden" && V(e, "visibility") == "hidden");
        }, $t = function(e, n) {
          var v, A = e, x = pt(e);
          for (c -= n, H += n, h -= n, R += n; x && (A = A.offsetParent) && A != i.body && A != N; )
            x = (V(A, "opacity") || 1) > 0, x && V(A, "overflow") != "visible" && (v = A.getBoundingClientRect(), x = R > v.left && h < v.right && H > v.top - 1 && c < v.bottom + 1);
          return x;
        }, yt = function() {
          var e, n, v, A, x, $, B, T, j, O, Q, tt, I = u.elements;
          if ((y = t.loadMode) && M < 8 && (e = I.length)) {
            for (n = 0, Z++; n < e; n++)
              if (!(!I[n] || I[n]._lazyRace)) {
                if (!Nt || u.prematureUnveil && u.prematureUnveil(I[n])) {
                  it(I[n]);
                  continue;
                }
                if ((!(T = I[n][b]("data-expand")) || !($ = T * 1)) && ($ = at), O || (O = !t.expand || t.expand < 1 ? N.clientHeight > 500 && N.clientWidth > 500 ? 500 : 370 : t.expand, u._defEx = O, Q = O * t.expFactor, tt = t.hFac, J = null, at < Q && M < 1 && Z > 2 && y > 2 && !i.hidden ? (at = Q, Z = 0) : y > 1 && Z > 1 && M < 6 ? at = O : at = Wt), j !== $ && (l = innerWidth + $ * tt, z = innerHeight + $, B = $ * -1, j = $), v = I[n].getBoundingClientRect(), (H = v.bottom) >= B && (c = v.top) <= z && (R = v.right) >= B * tt && (h = v.left) <= l && (H || R || h || c) && (t.loadHidden || pt(I[n])) && (r && M < 3 && !T && (y < 3 || Z < 4) || $t(I[n], $))) {
                  if (it(I[n]), x = !0, M > 9)
                    break;
                } else
                  !x && r && !A && M < 4 && Z < 4 && y > 2 && (a[0] || t.preloadAfterLoad) && (a[0] || !T && (H || R || h || c || I[n][b](t.sizesAttr) != "auto")) && (A = a[0] || I[n]);
              }
            A && !x && it(A);
          }
        }, _ = St(yt), bt = function(e) {
          var n = e.target;
          if (n._lazyCache) {
            delete n._lazyCache;
            return;
          }
          ht(e), q(n, t.loadedClass), Y(n, t.loadingClass), K(n, zt), D(n, "lazyloaded");
        }, Rt = nt(bt), zt = function(e) {
          Rt({ target: e.target });
        }, _t = function(e, n) {
          try {
            e.contentWindow.location.replace(n);
          } catch {
            e.src = n;
          }
        }, wt = function(e) {
          var n, v = e[b](t.srcsetAttr);
          (n = t.customMedia[e[b]("data-media") || e[b]("media")]) && e.setAttribute("media", n), v && e.setAttribute("srcset", v);
        }, It = nt(function(e, n, v, A, x) {
          var $, B, T, j, O, Q;
          (O = D(e, "lazybeforeunveil", n)).defaultPrevented || (A && (v ? q(e, t.autosizesClass) : e.setAttribute("sizes", A)), B = e[b](t.srcsetAttr), $ = e[b](t.srcAttr), x && (T = e.parentNode, j = T && W.test(T.nodeName || "")), Q = n.firesLoad || "src" in e && (B || $ || j), O = { target: e }, q(e, t.loadingClass), Q && (clearTimeout(s), s = o(ht, 2500), K(e, zt, !0)), j && G.call(T.getElementsByTagName("source"), wt), B ? e.setAttribute("srcset", B) : $ && !j && (Lt.test(e.nodeName) ? _t(e, $) : e.src = $), x && (B || j) && et(e, { src: $ })), e._lazyRace && delete e._lazyRace, Y(e, t.lazyClass), rt(function() {
            var tt = e.complete && e.naturalWidth > 1;
            (!Q || tt) && (tt && q(e, "ls-is-cached"), bt(O), e._lazyCache = !0, o(function() {
              "_lazyCache" in e && delete e._lazyCache;
            }, 9)), e.loading == "lazy" && M--;
          }, !0);
        }), it = function(e) {
          if (!e._lazyRace) {
            var n, v = xt.test(e.nodeName), A = v && (e[b](t.sizesAttr) || e[b]("sizes")), x = A == "auto";
            (x || !r) && v && (e[b]("src") || e.srcset) && !e.complete && !k(e, t.errorClass) && k(e, t.lazyClass) || (n = D(e, "lazyunveilread").detail, x && ct.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, M++, It(e, n, x, A, v));
          }
        }, Ut = vt(function() {
          t.loadMode = 3, _();
        }), mt = function() {
          t.loadMode == 3 && (t.loadMode = 2), Ut();
        }, ot = function() {
          if (!r) {
            if (f.now() - p < 999) {
              o(ot, 999);
              return;
            }
            r = !0, t.loadMode = 3, _(), C("scroll", mt, !0);
          }
        };
        return {
          _: function() {
            p = f.now(), u.elements = i.getElementsByClassName(t.lazyClass), a = i.getElementsByClassName(t.lazyClass + " " + t.preloadClass), C("scroll", _, !0), C("resize", _, !0), C("pageshow", function(e) {
              if (e.persisted) {
                var n = i.querySelectorAll("." + t.loadingClass);
                n.length && n.forEach && U(function() {
                  n.forEach(function(v) {
                    v.complete && it(v);
                  });
                });
              }
            }), d.MutationObserver ? new MutationObserver(_).observe(N, { childList: !0, subtree: !0, attributes: !0 }) : (N[w]("DOMNodeInserted", _, !0), N[w]("DOMAttrModified", _, !0), setInterval(_, 999)), C("hashchange", _, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(e) {
              i[w](e, _, !0);
            }), /d$|^c/.test(i.readyState) ? ot() : (C("load", ot), i[w]("DOMContentLoaded", _), o(ot, 2e4)), u.elements.length ? (yt(), rt._lsFlush()) : _();
          },
          checkElems: _,
          unveil: it,
          _aLSL: mt
        };
      }(), ct = function() {
        var a, r = nt(function(l, z, c, h) {
          var R, H, J;
          if (l._lazysizesWidth = h, h += "px", l.setAttribute("sizes", h), W.test(z.nodeName || ""))
            for (R = z.getElementsByTagName("source"), H = 0, J = R.length; H < J; H++)
              R[H].setAttribute("sizes", h);
          c.detail.dataAttr || et(l, c.detail);
        }), s = function(l, z, c) {
          var h, R = l.parentNode;
          R && (c = ft(l, R, c), h = D(l, "lazybeforesizes", { width: c, dataAttr: !!z }), h.defaultPrevented || (c = h.detail.width, c && c !== l._lazysizesWidth && r(l, R, h, c)));
        }, y = function() {
          var l, z = a.length;
          if (z)
            for (l = 0; l < z; l++)
              s(a[l]);
        }, p = vt(y);
        return {
          _: function() {
            a = i.getElementsByClassName(t.autosizesClass), C("resize", p);
          },
          checkElems: p,
          updateElem: s
        };
      }(), st = function() {
        !st.i && i.getElementsByClassName && (st.i = !0, ct._(), gt._());
      };
      return o(function() {
        t.init && st();
      }), u = {
        cfg: t,
        autoSizer: ct,
        loader: gt,
        init: st,
        uP: et,
        aC: q,
        rC: Y,
        hC: k,
        fire: D,
        gW: ft,
        rAF: rt
      }, u;
    }
  );
})(Mt);
const lt = function() {
  function L(i) {
    let u = i.getAttribute("data-src"), t = i.getAttribute("data-height-ratio"), N = i.parentNode.innerWidth || i.parentNode.offsetWidth;
    if (N = N !== null ? N + 50 - N % 50 : null, !t) {
      var F = i.parentNode.innerHeight || i.parentNode.offsetHeight;
      F = F !== null ? F + 50 - F % 50 : null, t = F / N;
    }
    let w = N, b = w * t;
    u += w ? g(u) + "width=" + w : "", u += b !== null ? g(u) + "height=" + b : "";
    const C = i.getAttribute("data-query-obj");
    return u = d(u, C), u;
  }
  function g(i) {
    return i.indexOf("?") > -1 ? "&" : "?";
  }
  function d(i, f) {
    if (f) {
      const u = JSON.parse(f);
      Object.keys(u).forEach(function(t) {
        i += u[t] !== null ? g(i) + t + "=" + u[t] : "";
      });
    }
    return i;
  }
  return {
    queryUrl: d,
    getUrl: L
  };
};
let dt = 0;
const At = 50, P = window.devicePixelRatio;
class kt {
  constructor({ includeWebp: g = !0, includeRetina: d = !0 }) {
    this.includeWebp = g, this.includeRetina = d, this.lazyLoad = function(i) {
      i.preventDefault = function() {
        Object.defineProperty(this, "defaultPrevented", { get: function() {
          return !0;
        } });
      };
      const f = this.includeWebp, u = this.includeRetina && P > 1, t = i.target, N = t.classList.contains("lazyload-measure") || t.classList.contains("lazyload-bg"), F = t.classList.contains("lazyload-measure"), w = t.hasAttribute("data-srcset") && t.hasAttribute("data-query-obj"), b = t.hasAttribute("data-src") && t.hasAttribute("data-query-obj");
      if (N && i.preventDefault(), F) {
        const C = t.classList.contains("lazyload-bg");
        let o = lt().getUrl(t);
        Ct(function(U) {
          if (U && f && (o = Et(o)), C && u) {
            const { orgWidth: m, orgHeight: W, retinaHeight: E, retinaWidth: S } = ut(o);
            t.parentNode.style.backgroundImage = `url(${o})`, window.CSS.supports("background-image", `-webkit-image-set( url(${o}) 1x, url(${X({ url: o, orgWidth: m, orgHeight: W, retinaHeight: E, retinaWidth: S })}) ${P}x)`) && (t.parentNode.style.backgroundImage = `-webkit-image-set( url(${o}) 1x, url(${X({ url: o, orgWidth: m, orgHeight: W, retinaHeight: E, retinaWidth: S })}) ${P}x)`), window.CSS.supports("background-image", `image-set(url("${o}") 1x, url(${X({ url: o, orgWidth: m, orgHeight: W, retinaHeight: E, retinaWidth: S })}) ${P}x)`) && (t.parentNode.style.backgroundImage = `image-set(url("${o}") 1x, url(${X({ url: o, orgWidth: m, orgHeight: W, retinaHeight: E, retinaWidth: S })}) ${P}x)`), t.style.visibility = "hidden";
          } else if (C)
            t.parentNode.style.backgroundImage = `url(${o})`, t.style.visibility = "hidden";
          else if (t.src = o, u) {
            const { orgWidth: m, orgHeight: W, retinaHeight: E, retinaWidth: S } = ut(o);
            (m || W) && t.setAttribute("srcset", `${o} 1x, ${X({ url: o, orgWidth: m, orgHeight: W, retinaHeight: E, retinaWidth: S })} ${P}x`);
          }
        });
      } else if (w) {
        const C = t.getAttribute("data-query-obj"), o = t.getAttribute("data-srcset").split(","), U = t.getAttribute("data-src"), m = [];
        Ct(function(W) {
          o.forEach(function(E) {
            E = E.trim(), E = E.split(" ");
            let S = E[0];
            const G = E[1];
            let k = lt().queryUrl(S, C);
            if (W && f && (k = Et(k)), m.push(k + " " + G), u) {
              const q = G.match(/\d+/g), { orgWidth: Y, orgHeight: K, retinaHeight: D, retinaWidth: et } = ut(k), V = typeof q < "u" && typeof Number(q) == "number" ? G.replace(q, (Number(q) * P).toString()) : G;
              (Y || K) && m.push(`${X({ url: S, orgWidth: Y, orgHeight: K, retinaHeight: D, retinaWidth: et })} ${V}`);
            }
          }), t.setAttribute("srcset", m.join(", ")), t.setAttribute("src", lt().queryUrl(U, C));
        });
      } else if (b) {
        const C = t.getAttribute("data-query-obj"), o = t.getAttribute("data-src"), U = lt().queryUrl(o, C);
        if (u) {
          const { orgWidth: m, orgHeight: W, retinaHeight: E, retinaWidth: S } = ut(U);
          (m || W) && t.setAttribute("srcset", `${U} 1x, ${X({ url: U, orgWidth: m, orgHeight: W, retinaHeight: E, retinaWidth: S })} ${P}x`);
        }
        t.setAttribute("src", U);
      }
    }, this.checkImages = function() {
      if (window.innerWidth > dt + At || window.innerWidth < dt - At) {
        let i = Array.prototype.slice.call(document.body.querySelectorAll(".lazyloaded"));
        i.length > 0 && i.map(function(f) {
          f.classList.remove("lazyloaded"), f.classList.add("lazyload");
        }), dt = window.innerWidth;
      }
    };
  }
}
function Ct(L) {
  const g = new Image();
  g.src = "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA", g.onload = g.onerror = function() {
    L(g.height === 2);
  };
}
function ut(L) {
  let g = "", d = new URLSearchParams("");
  try {
    g = new URL(L), d = new URLSearchParams(g.search);
  } catch {
  }
  const i = d.get("width"), f = d.get("height"), u = i !== "undefined" && typeof Number(i) == "number" ? (Number(i) * P).toString() : i, t = f !== "undefined" && typeof Number(f) == "number" ? (Number(f) * P).toString() : f;
  return {
    orgWidth: i,
    orgHeight: f,
    retinaWidth: u,
    retinaHeight: t
  };
}
function X({ url: L, orgWidth: g, orgHeight: d, retinaHeight: i, retinaWidth: f }) {
  return L.replace(`width=${g}`, `width=${f}`).replace(`height=${d}`, `height=${i}`);
}
function Et(L) {
  if (L.includes("format="))
    return L;
  const g = L.split("?");
  return `${g[0]}?format=webp&${g[1]}`;
}
export {
  kt as default
};
