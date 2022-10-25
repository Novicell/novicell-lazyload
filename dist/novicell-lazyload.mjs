var kt = { exports: {} };
(function(L) {
  (function(h, f) {
    var i = f(h, h.document, Date);
    h.lazySizes = i, L.exports && (L.exports = i);
  })(
    typeof window < "u" ? window : {},
    function(f, i, v) {
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
        t = f.lazySizesConfig || f.lazysizesConfig || {};
        for (a in r)
          a in t || (t[a] = r[a]);
      }(), !i || !i.getElementsByClassName)
        return {
          init: function() {
          },
          cfg: t,
          noSupport: !0
        };
      var W = i.documentElement, H = f.HTMLPictureElement, I = "addEventListener", b = "getAttribute", C = f[I].bind(f), o = f.setTimeout, U = f.requestAnimationFrame || o, A = f.requestIdleCallback, N = /^picture$/i, E = ["load", "error", "lazyincluded", "_lazyloaded"], S = {}, G = Array.prototype.forEach, q = function(a, r) {
        return S[r] || (S[r] = new RegExp("(\\s|^)" + r + "(\\s|$)")), S[r].test(a[b]("class") || "") && S[r];
      }, F = function(a, r) {
        q(a, r) || a.setAttribute("class", (a[b]("class") || "").trim() + " " + r);
      }, Y = function(a, r) {
        var s;
        (s = q(a, r)) && a.setAttribute("class", (a[b]("class") || "").replace(s, " "));
      }, K = function(a, r, s) {
        var y = s ? I : "removeEventListener";
        s && K(a, r), E.forEach(function(p) {
          a[y](p, r);
        });
      }, D = function(a, r, s, y, p) {
        var l = i.createEvent("Event");
        return s || (s = {}), s.instance = u, l.initEvent(r, !y, !p), l.detail = s, a.dispatchEvent(l), l;
      }, et = function(a, r) {
        var s;
        !H && (s = f.picturefill || t.pf) ? (r && r.src && !a[b]("srcset") && a.setAttribute("srcset", r.src), s({ reevaluate: !0, elements: [a] })) : r && r.src && (a.src = r.src);
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
        }, z = function(c, g) {
          a && !g ? c.apply(this, arguments) : (p.push(c), r || (r = !0, (i.hidden ? o : U)(l)));
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
          r = !1, s = v.now(), a();
        }, z = A && p > 49 ? function() {
          A(l, { timeout: p }), p !== t.ricTimeout && (p = t.ricTimeout);
        } : nt(function() {
          o(l);
        }, !0);
        return function(c) {
          var g;
          (c = c === !0) && (p = 33), !r && (r = !0, g = y - (v.now() - s), g < 0 && (g = 0), c || g < 9 ? z() : o(z, g));
        };
      }, vt = function(a) {
        var r, s, y = 99, p = function() {
          r = null, a();
        }, l = function() {
          var z = v.now() - s;
          z < y ? o(l, y - z) : (A || p)(p);
        };
        return function() {
          s = v.now(), r || (r = o(l, y));
        };
      }, gt = function() {
        var a, r, s, y, p, l, z, c, g, R, w, J, xt = /^img$/i, Lt = /^iframe$/i, Wt = "onscroll" in f && !/(gle|ing)bot/.test(navigator.userAgent), Nt = 0, at = 0, k = 0, Z = -1, ht = function(e) {
          k--, (!e || k < 0 || !e.target) && (k = 0);
        }, pt = function(e) {
          return J == null && (J = V(i.body, "visibility") == "hidden"), J || !(V(e.parentNode, "visibility") == "hidden" && V(e, "visibility") == "hidden");
        }, $t = function(e, n) {
          var d, m = e, x = pt(e);
          for (c -= n, w += n, g -= n, R += n; x && (m = m.offsetParent) && m != i.body && m != W; )
            x = (V(m, "opacity") || 1) > 0, x && V(m, "overflow") != "visible" && (d = m.getBoundingClientRect(), x = R > d.left && g < d.right && w > d.top - 1 && c < d.bottom + 1);
          return x;
        }, yt = function() {
          var e, n, d, m, x, $, P, B, j, T, Q, tt, M = u.elements;
          if ((y = t.loadMode) && k < 8 && (e = M.length)) {
            for (n = 0, Z++; n < e; n++)
              if (!(!M[n] || M[n]._lazyRace)) {
                if (!Wt || u.prematureUnveil && u.prematureUnveil(M[n])) {
                  it(M[n]);
                  continue;
                }
                if ((!(B = M[n][b]("data-expand")) || !($ = B * 1)) && ($ = at), T || (T = !t.expand || t.expand < 1 ? W.clientHeight > 500 && W.clientWidth > 500 ? 500 : 370 : t.expand, u._defEx = T, Q = T * t.expFactor, tt = t.hFac, J = null, at < Q && k < 1 && Z > 2 && y > 2 && !i.hidden ? (at = Q, Z = 0) : y > 1 && Z > 1 && k < 6 ? at = T : at = Nt), j !== $ && (l = innerWidth + $ * tt, z = innerHeight + $, P = $ * -1, j = $), d = M[n].getBoundingClientRect(), (w = d.bottom) >= P && (c = d.top) <= z && (R = d.right) >= P * tt && (g = d.left) <= l && (w || R || g || c) && (t.loadHidden || pt(M[n])) && (r && k < 3 && !B && (y < 3 || Z < 4) || $t(M[n], $))) {
                  if (it(M[n]), x = !0, k > 9)
                    break;
                } else
                  !x && r && !m && k < 4 && Z < 4 && y > 2 && (a[0] || t.preloadAfterLoad) && (a[0] || !B && (w || R || g || c || M[n][b](t.sizesAttr) != "auto")) && (m = a[0] || M[n]);
              }
            m && !x && it(m);
          }
        }, _ = St(yt), bt = function(e) {
          var n = e.target;
          if (n._lazyCache) {
            delete n._lazyCache;
            return;
          }
          ht(e), F(n, t.loadedClass), Y(n, t.loadingClass), K(n, zt), D(n, "lazyloaded");
        }, Rt = nt(bt), zt = function(e) {
          Rt({ target: e.target });
        }, _t = function(e, n) {
          try {
            e.contentWindow.location.replace(n);
          } catch {
            e.src = n;
          }
        }, It = function(e) {
          var n, d = e[b](t.srcsetAttr);
          (n = t.customMedia[e[b]("data-media") || e[b]("media")]) && e.setAttribute("media", n), d && e.setAttribute("srcset", d);
        }, Mt = nt(function(e, n, d, m, x) {
          var $, P, B, j, T, Q;
          (T = D(e, "lazybeforeunveil", n)).defaultPrevented || (m && (d ? F(e, t.autosizesClass) : e.setAttribute("sizes", m)), P = e[b](t.srcsetAttr), $ = e[b](t.srcAttr), x && (B = e.parentNode, j = B && N.test(B.nodeName || "")), Q = n.firesLoad || "src" in e && (P || $ || j), T = { target: e }, F(e, t.loadingClass), Q && (clearTimeout(s), s = o(ht, 2500), K(e, zt, !0)), j && G.call(B.getElementsByTagName("source"), It), P ? e.setAttribute("srcset", P) : $ && !j && (Lt.test(e.nodeName) ? _t(e, $) : e.src = $), x && (P || j) && et(e, { src: $ })), e._lazyRace && delete e._lazyRace, Y(e, t.lazyClass), rt(function() {
            var tt = e.complete && e.naturalWidth > 1;
            (!Q || tt) && (tt && F(e, "ls-is-cached"), bt(T), e._lazyCache = !0, o(function() {
              "_lazyCache" in e && delete e._lazyCache;
            }, 9)), e.loading == "lazy" && k--;
          }, !0);
        }), it = function(e) {
          if (!e._lazyRace) {
            var n, d = xt.test(e.nodeName), m = d && (e[b](t.sizesAttr) || e[b]("sizes")), x = m == "auto";
            (x || !r) && d && (e[b]("src") || e.srcset) && !e.complete && !q(e, t.errorClass) && q(e, t.lazyClass) || (n = D(e, "lazyunveilread").detail, x && ct.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, k++, Mt(e, n, x, m, d));
          }
        }, Ut = vt(function() {
          t.loadMode = 3, _();
        }), At = function() {
          t.loadMode == 3 && (t.loadMode = 2), Ut();
        }, ot = function() {
          if (!r) {
            if (v.now() - p < 999) {
              o(ot, 999);
              return;
            }
            r = !0, t.loadMode = 3, _(), C("scroll", At, !0);
          }
        };
        return {
          _: function() {
            p = v.now(), u.elements = i.getElementsByClassName(t.lazyClass), a = i.getElementsByClassName(t.lazyClass + " " + t.preloadClass), C("scroll", _, !0), C("resize", _, !0), C("pageshow", function(e) {
              if (e.persisted) {
                var n = i.querySelectorAll("." + t.loadingClass);
                n.length && n.forEach && U(function() {
                  n.forEach(function(d) {
                    d.complete && it(d);
                  });
                });
              }
            }), f.MutationObserver ? new MutationObserver(_).observe(W, { childList: !0, subtree: !0, attributes: !0 }) : (W[I]("DOMNodeInserted", _, !0), W[I]("DOMAttrModified", _, !0), setInterval(_, 999)), C("hashchange", _, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(e) {
              i[I](e, _, !0);
            }), /d$|^c/.test(i.readyState) ? ot() : (C("load", ot), i[I]("DOMContentLoaded", _), o(ot, 2e4)), u.elements.length ? (yt(), rt._lsFlush()) : _();
          },
          checkElems: _,
          unveil: it,
          _aLSL: At
        };
      }(), ct = function() {
        var a, r = nt(function(l, z, c, g) {
          var R, w, J;
          if (l._lazysizesWidth = g, g += "px", l.setAttribute("sizes", g), N.test(z.nodeName || ""))
            for (R = z.getElementsByTagName("source"), w = 0, J = R.length; w < J; w++)
              R[w].setAttribute("sizes", g);
          c.detail.dataAttr || et(l, c.detail);
        }), s = function(l, z, c) {
          var g, R = l.parentNode;
          R && (c = ft(l, R, c), g = D(l, "lazybeforesizes", { width: c, dataAttr: !!z }), g.defaultPrevented || (c = g.detail.width, c && c !== l._lazysizesWidth && r(l, R, g, c)));
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
        aC: F,
        rC: Y,
        hC: q,
        fire: D,
        gW: ft,
        rAF: rt
      }, u;
    }
  );
})(kt);
const lt = function() {
  function L(i) {
    let u = i.getAttribute("data-src"), t = i.getAttribute("data-height-ratio"), W = i.parentNode.innerWidth || i.parentNode.offsetWidth;
    if (W = W !== null ? W + 50 - W % 50 : null, !t) {
      var H = i.parentNode.innerHeight || i.parentNode.offsetHeight;
      H = H !== null ? H + 50 - H % 50 : null, t = H / W;
    }
    let I = W, b = I * t;
    u += I ? h(u) + "width=" + I : "", u += b !== null ? h(u) + "height=" + b : "";
    const C = i.getAttribute("data-query-obj");
    return u = f(u, C), u;
  }
  function h(i) {
    return i.indexOf("?") > -1 ? "&" : "?";
  }
  function f(i, v) {
    if (v) {
      const u = JSON.parse(v);
      Object.keys(u).forEach(function(t) {
        i += u[t] !== null ? h(i) + t + "=" + u[t] : "";
      });
    }
    return i;
  }
  return {
    queryUrl: f,
    getUrl: L
  };
};
let dt = 0;
const mt = 50, O = window.devicePixelRatio;
class qt {
  constructor({ includeWebp: h = !0, includeRetina: f = !0 }) {
    this.includeWebp = h, this.includeRetina = f, this.lazyLoad = function(i) {
      i.preventDefault = function() {
        Object.defineProperty(this, "defaultPrevented", { get: function() {
          return !0;
        } });
      };
      const v = this.includeWebp, u = this.includeRetina, t = i.target, W = t.classList.contains("lazyload-measure") || t.classList.contains("lazyload-bg"), H = t.classList.contains("lazyload-measure"), I = t.hasAttribute("data-srcset") && t.hasAttribute("data-query-obj"), b = t.hasAttribute("data-src") && t.hasAttribute("data-query-obj");
      if (W && i.preventDefault(), H) {
        const C = t.classList.contains("lazyload-bg");
        let o = lt().getUrl(t);
        Ct(function(U) {
          if (U && v && (o = Et(o)), C && u) {
            const { orgWidth: A, orgHeight: N, retinaHeight: E, retinaWidth: S } = ut(o);
            t.parentNode.style.backgroundImage = `url(${o})`, window.CSS.supports("background-image", `-webkit-image-set( url(${o}) 1x, url(${X({ url: o, orgWidth: A, orgHeight: N, retinaHeight: E, retinaWidth: S })}) ${O}x)`) && (t.parentNode.style.backgroundImage = `-webkit-image-set( url(${o}) 1x, url(${X({ url: o, orgWidth: A, orgHeight: N, retinaHeight: E, retinaWidth: S })}) ${O}x)`), window.CSS.supports("background-image", `image-set(url("${o}") 1x, url(${X({ url: o, orgWidth: A, orgHeight: N, retinaHeight: E, retinaWidth: S })}) ${O}x)`) && (t.parentNode.style.backgroundImage = `image-set(url("${o}") 1x, url(${X({ url: o, orgWidth: A, orgHeight: N, retinaHeight: E, retinaWidth: S })}) ${O}x)`), t.style.visibility = "hidden";
          } else if (C)
            t.parentNode.style.backgroundImage = `url(${o})`, t.style.visibility = "hidden";
          else if (t.src = o, u) {
            const { orgWidth: A, orgHeight: N, retinaHeight: E, retinaWidth: S } = ut(o);
            (A || N) && t.setAttribute("srcset", `${o} 1x, ${X({ url: o, orgWidth: A, orgHeight: N, retinaHeight: E, retinaWidth: S })} ${O}x`);
          }
        });
      } else if (I) {
        const C = t.getAttribute("data-query-obj"), o = t.getAttribute("data-srcset").split(","), U = t.getAttribute("data-src"), A = [];
        Ct(function(N) {
          o.forEach(function(E) {
            E = E.trim(), E = E.split(" ");
            let S = E[0];
            const G = E[1];
            let q = lt().queryUrl(S, C);
            if (N && v && (q = Et(q)), A.push(q + " " + G), u) {
              const F = G.match(/\d+/g), { orgWidth: Y, orgHeight: K, retinaHeight: D, retinaWidth: et } = ut(q), V = F ? G.replace(F, (Number(F) * O).toString()) : G;
              (Y || K) && A.push(`${X({ url: S, orgWidth: Y, orgHeight: K, retinaHeight: D, retinaWidth: et })} ${V}`);
            }
          }), t.setAttribute("srcset", A.join(", ")), t.setAttribute("src", lt().queryUrl(U, C));
        });
      } else if (b) {
        const C = t.getAttribute("data-query-obj"), o = t.getAttribute("data-src"), U = lt().queryUrl(o, C);
        if (u) {
          const { orgWidth: A, orgHeight: N, retinaHeight: E, retinaWidth: S } = ut(U);
          (A || N) && t.setAttribute("srcset", `${U} 1x, ${X({ url: U, orgWidth: A, orgHeight: N, retinaHeight: E, retinaWidth: S })} ${O}x`);
        }
        t.setAttribute("src", U);
      }
    }, this.checkImages = function() {
      if (window.innerWidth > dt + mt || window.innerWidth < dt - mt) {
        let i = Array.prototype.slice.call(document.body.querySelectorAll(".lazyloaded"));
        i.length > 0 && i.map(function(v) {
          v.classList.remove("lazyloaded"), v.classList.add("lazyload");
        }), dt = window.innerWidth;
      }
    };
  }
}
function Ct(L) {
  const h = new Image();
  h.src = "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA", h.onload = h.onerror = function() {
    L(h.height === 2);
  };
}
function ut(L) {
  const h = new URL(L);
  let f = new URLSearchParams(h.search);
  const i = f.get("width"), v = f.get("height"), u = i && (Number(i) * O).toString(), t = v && (Number(v) * O).toString();
  return {
    orgWidth: i,
    orgHeight: v,
    retinaWidth: u,
    retinaHeight: t
  };
}
function X({ url: L, orgWidth: h, orgHeight: f, retinaHeight: i, retinaWidth: v }) {
  return L.replace(h, v).replace(f, i);
}
function Et(L) {
  if (L.includes("format="))
    return L;
  const h = L.split("?");
  return `${h[0]}?format=webp&${h[1]}`;
}
export {
  qt as default
};
