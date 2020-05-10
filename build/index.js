module.exports = (function(e) {
  var t = {};
  function i(n) {
    if (t[n]) return t[n].exports;
    var r = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  return (
    (i.m = e),
    (i.c = t),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          i.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 5))
  );
})([
  function(e, t) {
    e.exports = require("react");
  },
  function(e, t, i) {
    "use strict";
    var n,
      r = function() {
        return (
          void 0 === n &&
            (n = Boolean(window && document && document.all && !window.atob)),
          n
        );
      },
      a = (function() {
        var e = {};
        return function(t) {
          if (void 0 === e[t]) {
            var i = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              i instanceof window.HTMLIFrameElement
            )
              try {
                i = i.contentDocument.head;
              } catch (e) {
                i = null;
              }
            e[t] = i;
          }
          return e[t];
        };
      })(),
      o = [];
    function l(e) {
      for (var t = -1, i = 0; i < o.length; i++)
        if (o[i].identifier === e) {
          t = i;
          break;
        }
      return t;
    }
    function c(e, t) {
      for (var i = {}, n = [], r = 0; r < e.length; r++) {
        var a = e[r],
          c = t.base ? a[0] + t.base : a[0],
          s = i[c] || 0,
          u = "".concat(c, " ").concat(s);
        i[c] = s + 1;
        var d = l(u),
          f = { css: a[1], media: a[2], sourceMap: a[3] };
        -1 !== d
          ? (o[d].references++, o[d].updater(f))
          : o.push({ identifier: u, updater: v(f, t), references: 1 }),
          n.push(u);
      }
      return n;
    }
    function s(e) {
      var t = document.createElement("style"),
        n = e.attributes || {};
      if (void 0 === n.nonce) {
        var r = i.nc;
        r && (n.nonce = r);
      }
      if (
        (Object.keys(n).forEach(function(e) {
          t.setAttribute(e, n[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var o = a(e.insert || "head");
        if (!o)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        o.appendChild(t);
      }
      return t;
    }
    var u,
      d =
        ((u = []),
        function(e, t) {
          return (u[e] = t), u.filter(Boolean).join("\n");
        });
    function f(e, t, i, n) {
      var r = i
        ? ""
        : n.media
        ? "@media ".concat(n.media, " {").concat(n.css, "}")
        : n.css;
      if (e.styleSheet) e.styleSheet.cssText = d(t, r);
      else {
        var a = document.createTextNode(r),
          o = e.childNodes;
        o[t] && e.removeChild(o[t]),
          o.length ? e.insertBefore(a, o[t]) : e.appendChild(a);
      }
    }
    function p(e, t, i) {
      var n = i.css,
        r = i.media,
        a = i.sourceMap;
      if (
        (r ? e.setAttribute("media", r) : e.removeAttribute("media"),
        a &&
          btoa &&
          (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = n;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n));
      }
    }
    var m = null,
      h = 0;
    function v(e, t) {
      var i, n, r;
      if (t.singleton) {
        var a = h++;
        (i = m || (m = s(t))),
          (n = f.bind(null, i, a, !1)),
          (r = f.bind(null, i, a, !0));
      } else
        (i = s(t)),
          (n = p.bind(null, i, t)),
          (r = function() {
            !(function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(i);
          });
      return (
        n(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            n((e = t));
          } else r();
        }
      );
    }
    e.exports = function(e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = r());
      var i = c((e = e || []), t);
      return function(e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var n = 0; n < i.length; n++) {
            var r = l(i[n]);
            o[r].references--;
          }
          for (var a = c(e, t), s = 0; s < i.length; s++) {
            var u = l(i[s]);
            0 === o[u].references && (o[u].updater(), o.splice(u, 1));
          }
          i = a;
        }
      };
    };
  },
  function(e, t, i) {
    "use strict";
    e.exports = function(e) {
      var t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var i = (function(e, t) {
              var i = e[1] || "",
                n = e[3];
              if (!n) return i;
              if (t && "function" == typeof btoa) {
                var r =
                    ((o = n),
                    (l = btoa(unescape(encodeURIComponent(JSON.stringify(o))))),
                    (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      l
                    )),
                    "/*# ".concat(c, " */")),
                  a = n.sources.map(function(e) {
                    return "/*# sourceURL="
                      .concat(n.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [i]
                  .concat(a)
                  .concat([r])
                  .join("\n");
              }
              var o, l, c;
              return [i].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(i, "}") : i;
          }).join("");
        }),
        (t.i = function(e, i, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var r = {};
          if (n)
            for (var a = 0; a < this.length; a++) {
              var o = this[a][0];
              null != o && (r[o] = !0);
            }
          for (var l = 0; l < e.length; l++) {
            var c = [].concat(e[l]);
            (n && r[c[0]]) ||
              (i &&
                (c[2]
                  ? (c[2] = "".concat(i, " and ").concat(c[2]))
                  : (c[2] = i)),
              t.push(c));
          }
        }),
        t
      );
    };
  },
  function(e, t, i) {
    e.exports = i(6)();
  },
  function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = function(e, t) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e))
        return (function(e, t) {
          var i = [],
            n = !0,
            r = !1,
            a = void 0;
          try {
            for (
              var o, l = e[Symbol.iterator]();
              !(n = (o = l.next()).done) &&
              (i.push(o.value), !t || i.length !== t);
              n = !0
            );
          } catch (e) {
            (r = !0), (a = e);
          } finally {
            try {
              !n && l.return && l.return();
            } finally {
              if (r) throw a;
            }
          }
          return i;
        })(e, t);
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
    t.default = p;
    var r = i(0),
      a = f(r),
      o = f(i(3));
    i(8);
    var l,
      c = f(i(10)),
      s = f(i(17)),
      u = f(i(13)),
      d = f(i(16));
    function f(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function p(e) {
      var t = e.data,
        i = (0, s.default)(),
        o = n(i, 2),
        l = o[0],
        f = o[1],
        p = (0, r.useState)(20),
        m = n(p, 1)[0],
        h = (0, r.useState)(0),
        v = n(h, 2),
        b = v[0],
        g = v[1],
        y = (0, r.useState)(!0),
        x = n(y, 2),
        w = x[0],
        _ = x[1];
      return (
        (0, d.default)(
          function() {
            !(function(e) {
              var t = e + 1;
              t >= 20 && (t -= m), g(t);
            })(b);
          },
          w && e.autoplay ? e.slideshowDelay : null
        ),
        a.default.createElement(
          a.default.Fragment,
          null,
          a.default.createElement(
            "div",
            {
              className: "slide-show-container",
              ref: f,
              style: {
                "--slider-height": e.sliderHeightInpx
                  ? e.sliderHeightInpx + "px"
                  : "400px"
              }
            },
            t.map(function(t, i) {
              var n = i === b ? "selected" : "",
                r = (i - b) * (l && l.width) + "px";
              return a.default.createElement(
                "div",
                {
                  id: "car-img-" + i,
                  className: "slide " + n,
                  key: i,
                  style: { left: r },
                  onClick: function() {
                    window.open(t.target);
                  }
                },
                a.default.createElement(c.default, {
                  imageCaptionStyle: e.imageCaptionStyle,
                  data: t,
                  active: b === i,
                  titleVisible: e.titleVisible,
                  excerptVisible: e.excerptVisible
                })
              );
            }),
            e.indicatorVisible &&
              a.default.createElement(u.default, {
                count: m,
                active: b,
                onSelect: function(e) {
                  _(!1),
                    g(e),
                    setTimeout(function() {
                      return _(!0);
                    }, 5e3);
                },
                color: "white"
              })
          )
        )
      );
    }
    (p.propTypes = {
      autoplay: o.default.bool.isRequired,
      indicatorColor: o.default.string.isRequired,
      data: o.default.arrayOf(
        o.default.shape({
          id: o.default.number.isRequired,
          image: o.default.string.isRequired,
          target: o.default.string.isRequired,
          title: o.default.string.isRequired,
          excerpt: o.default.string.isRequired
        })
      ),
      titleVisible: o.default.bool.isRequired,
      excerptVisible: o.default.bool.isRequired,
      indicatorVisible: o.default.bool.isRequired,
      sliderHeightInpx: o.default.number.isRequired,
      imageCaptionstyle: o.default.object
    }),
      (p.defaultProps = {
        autoplay: !0,
        indicatorColor: "white",
        data:
          ((l = new Array(20).fill(0)),
          (l = l.map(function(e, t) {
            return {
              image: "https://picsum.photos/seed/" + (t + 1) + "/800/450",
              id: t,
              title: "This is Sample Title",
              excerpt:
                "This is a sample excerpt.This is a sample excerpt.This is a sample excerpt.This is a sample excerpt.",
              target: "http://" + t + ".com"
            };
          }))),
        titleVisible: !0,
        excerptVisible: !0,
        indicatorVisible: !0,
        sliderHeightInpx: 400,
        slideshowDelay: 3e3,
        imageCaptionstyle: {}
      });
  },
  function(e, t, i) {
    "use strict";
    i.r(t);
    var n = i(4);
    const r = i.n(n).a;
    t.default = r;
  },
  function(e, t, i) {
    "use strict";
    var n = i(7);
    function r() {}
    function a() {}
    (a.resetWarningCache = r),
      (e.exports = function() {
        function e(e, t, i, r, a, o) {
          if (o !== n) {
            var l = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((l.name = "Invariant Violation"), l);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var i = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: a,
          resetWarningCache: r
        };
        return (i.PropTypes = i), i;
      });
  },
  function(e, t, i) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function(e, t, i) {
    var n = i(1),
      r = i(9);
    "string" == typeof (r = r.__esModule ? r.default : r) &&
      (r = [[e.i, r, ""]]);
    var a = { insert: "head", singleton: !1 },
      o = (n(r, a), r.locals ? r.locals : {});
    e.exports = o;
  },
  function(e, t, i) {
    (t = i(2)(!1)).push([
      e.i,
      '.slide-show-container{position:relative;border:0px solid red;width:100%;height:var(--slider-height);overflow:hidden}.car-nav{text-decoration:none;font-size:3rem;position:absolute;top:600px;padding:10px}#car-nav-prev::before{content:"<";position:absolute;transform:translateX(-50px)}#car-nav-next::after{content:">";position:absolute}.slide{transition:0.5s all cubic-bezier(0.445, 0.05, 0.55, 0.95);display:inline-block;position:absolute;top:0;border:0px solid green;width:100%;height:100%}.selected{left:0px;transition:0.5s all cubic-bezier(0.445, 0.05, 0.55, 0.95)}\n',
      ""
    ]),
      (e.exports = t);
  },
  function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o);
    var n = a(i(0)),
      r = a(i(3));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return n.default.createElement(
        "div",
        { className: "slide-image-container" },
        n.default.createElement("img", {
          className: "slide-image",
          src: e.data.image,
          alt: "sample"
        }),
        n.default.createElement(
          "div",
          {
            className: "image-caption " + (e.active ? "active" : ""),
            style: e.imageCaptionStyle
          },
          n.default.createElement(
            "a",
            { href: e.target },
            e.titleVisible && n.default.createElement("h2", null, e.data.title),
            e.excerptVisible &&
              n.default.createElement("p", null, e.data.excerpt)
          )
        )
      );
    }
    i(11),
      (o.propTypes = {
        data: r.default.shape({
          id: r.default.number.isRequired,
          image: r.default.string.isRequired,
          target: r.default.string.isRequired,
          title: r.default.string.isRequired,
          excerpt: r.default.string.isRequired
        }),
        titleVisible: r.default.bool.isRequired,
        excerptVisible: r.default.bool.isRequired,
        imageCaptionStyle: r.default.object
      });
  },
  function(e, t, i) {
    var n = i(1),
      r = i(12);
    "string" == typeof (r = r.__esModule ? r.default : r) &&
      (r = [[e.i, r, ""]]);
    var a = { insert: "head", singleton: !1 },
      o = (n(r, a), r.locals ? r.locals : {});
    e.exports = o;
  },
  function(e, t, i) {
    (t = i(2)(!1)).push([
      e.i,
      ".slide-image-container{position:relative;border:0px solid black;width:100%;height:100%}.slide-image-container img{width:100%;height:100%;object-fit:cover}.image-caption{position:absolute;width:40%;min-width:200px;bottom:50px;right:50px;text-align:left;color:white;padding:10px;opacity:0}.image-caption h2,.image-caption p{background-color:#000;padding:10px 10px;margin:5px;display:inline-block;transition:0.4s all ease-in-out}.image-caption h2:hover,.image-caption p:hover{background-color:white;color:black;cursor:pointer}.image-caption.active{opacity:1}.image-caption.active h2,.image-caption.active p{animation-name:text-animation;animation-duration:1s;animation-fill-mode:both}@keyframes text-animation{0%{opacity:0;transform:translateY(3rem);height:0%;width:0px}50%{opacity:0.2}100%{opacity:1;width:auto}}\n",
      ""
    ]),
      (e.exports = t);
  },
  function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n,
      r = i(0),
      a = (n = r) && n.__esModule ? n : { default: n };
    i(14),
      (t.default = function(e) {
        var t = e.count,
          i = e.active,
          n = e.onSelect,
          r = e.color,
          o = new Array(t).fill("");
        return a.default.createElement(
          a.default.Fragment,
          null,
          a.default.createElement(
            "div",
            { className: "indicator-container", style: { "--color": r } },
            o.map(function(e, t) {
              return a.default.createElement(
                "div",
                {
                  key: t,
                  className: "indicator-box " + (i === t ? "active" : ""),
                  onClick: function() {
                    n(t);
                  }
                },
                a.default.createElement("div", { className: "indicator" })
              );
            })
          )
        );
      });
  },
  function(e, t, i) {
    var n = i(1),
      r = i(15);
    "string" == typeof (r = r.__esModule ? r.default : r) &&
      (r = [[e.i, r, ""]]);
    var a = { insert: "head", singleton: !1 },
      o = (n(r, a), r.locals ? r.locals : {});
    e.exports = o;
  },
  function(e, t, i) {
    (t = i(2)(!1)).push([
      e.i,
      ".indicator-container{display:flex;justify-content:center;align-items:center;flex-direction:row;position:absolute;width:100%;bottom:10px}.indicator-container .indicator-box{padding:1px;transition:all 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)}.indicator-container .indicator-box.active{border-width:1px;border-color:var(--color);border-style:solid}.indicator-container .indicator-box .indicator{width:10px;height:10px;background-color:var(--color);margin:2px}\n",
      ""
    ]),
      (e.exports = t);
  },
  function(e, t, i) {
    "use strict";
    i.r(t),
      i.d(t, "default", function() {
        return r;
      });
    var n = i(0);
    function r(e, t) {
      const i = Object(n.useRef)();
      Object(n.useEffect)(() => {
        i.current = e;
      }),
        Object(n.useEffect)(() => {
          if (null !== t) {
            let e = setInterval(() => i.current(), t);
            return () => clearInterval(e);
          }
        }, [t]);
    }
  },
  function(e, t, i) {
    "use strict";
    i.r(t);
    var n = i(0),
      r = i.n(n);
    t.default = () => {
      const e = r.a.useRef(),
        [t, i] = Object(n.useState)({}),
        a = () => {
          i(e && e.current ? e.current.getBoundingClientRect() : {});
        };
      return (
        Object(n.useEffect)(() => {
          a();
          let e = (function(e, t) {
            var i;
            return function() {
              for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
              return (
                clearTimeout(i),
                (i = setTimeout(function() {
                  return e.apply(void 0, n);
                }, t))
              );
            };
          })(a, 500);
          return (
            window.addEventListener("resize", e),
            () => {
              window.removeEventListener("resize", e);
            }
          );
        }, []),
        [t, e]
      );
    };
  }
]);
