import * as T from "react";
import no from "react";
import { Snackbar as oo, Badge as io, Alert as so, SnackbarContent as ao, Button as co, IconButton as lo, useMediaQuery as st, useTheme as uo } from "@mui/material";
import { Global as fo, ThemeContext as dn } from "@emotion/react";
import mo from "@emotion/styled";
function mn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var et = { exports: {} }, Le = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sr;
function po() {
  if (Sr) return Le;
  Sr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      i = {};
      for (var c in o)
        c !== "key" && (i[c] = o[c]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return Le.Fragment = t, Le.jsx = r, Le.jsxs = r, Le;
}
var ze = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function ho() {
  return vr || (vr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === s ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case l:
          return "Fragment";
        case R:
          return "Profiler";
        case x:
          return "StrictMode";
        case v:
          return "Suspense";
        case z:
          return "SuspenseList";
        case j:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case g:
            return "Portal";
          case k:
            return (d.displayName || "Context") + ".Provider";
          case U:
            return (d._context.displayName || "Context") + ".Consumer";
          case _:
            var C = d.render;
            return d = d.displayName, d || (d = C.displayName || C.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case Q:
            return C = d.displayName || null, C !== null ? C : e(d.type) || "Memo";
          case P:
            C = d._payload, d = d._init;
            try {
              return e(d(C));
            } catch {
            }
        }
      return null;
    }
    function t(d) {
      return "" + d;
    }
    function r(d) {
      try {
        t(d);
        var C = !1;
      } catch {
        C = !0;
      }
      if (C) {
        C = console;
        var w = C.error, $ = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return w.call(
          C,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), t(d);
      }
    }
    function n(d) {
      if (d === l) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === P)
        return "<...>";
      try {
        var C = e(d);
        return C ? "<" + C + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var d = E.A;
      return d === null ? null : d.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(d) {
      if (N.call(d, "key")) {
        var C = Object.getOwnPropertyDescriptor(d, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function c(d, C) {
      function w() {
        ie || (ie = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          C
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: w,
        configurable: !0
      });
    }
    function f() {
      var d = e(this.type);
      return ee[d] || (ee[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function u(d, C, w, $, M, D, B, F) {
      return w = D.ref, d = {
        $$typeof: S,
        type: d,
        key: C,
        props: D,
        _owner: M
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function p(d, C, w, $, M, D, B, F) {
      var I = C.children;
      if (I !== void 0)
        if ($)
          if (W(I)) {
            for ($ = 0; $ < I.length; $++)
              h(I[$]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(I);
      if (N.call(C, "key")) {
        I = e(d);
        var V = Object.keys(C).filter(function(se) {
          return se !== "key";
        });
        $ = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", ye[I + $] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          I,
          V,
          I
        ), ye[I + $] = !0);
      }
      if (I = null, w !== void 0 && (r(w), I = "" + w), a(C) && (r(C.key), I = "" + C.key), "key" in C) {
        w = {};
        for (var L in C)
          L !== "key" && (w[L] = C[L]);
      } else w = C;
      return I && c(
        w,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), u(
        d,
        I,
        D,
        M,
        o(),
        w,
        B,
        F
      );
    }
    function h(d) {
      typeof d == "object" && d !== null && d.$$typeof === S && d._store && (d._store.validated = 1);
    }
    var m = no, S = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), k = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), s = Symbol.for("react.client.reference"), E = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, W = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      "react-stack-bottom-frame": function(d) {
        return d();
      }
    };
    var ie, ee = {}, ae = m["react-stack-bottom-frame"].bind(
      m,
      i
    )(), le = G(n(i)), ye = {};
    ze.Fragment = l, ze.jsx = function(d, C, w, $, M) {
      var D = 1e4 > E.recentlyCreatedOwnerStacks++;
      return p(
        d,
        C,
        w,
        !1,
        $,
        M,
        D ? Error("react-stack-top-frame") : ae,
        D ? G(n(d)) : le
      );
    }, ze.jsxs = function(d, C, w, $, M) {
      var D = 1e4 > E.recentlyCreatedOwnerStacks++;
      return p(
        d,
        C,
        w,
        !0,
        $,
        M,
        D ? Error("react-stack-top-frame") : ae,
        D ? G(n(d)) : le
      );
    };
  }()), ze;
}
var Cr;
function go() {
  return Cr || (Cr = 1, process.env.NODE_ENV === "production" ? et.exports = po() : et.exports = ho()), et.exports;
}
var A = go();
function we(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function yo(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var bo = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function So(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var vo = /[A-Z]|^ms/g, Co = /_EMO_([^_]+?)_([^]*?)_EMO_/g, pn = function(t) {
  return t.charCodeAt(1) === 45;
}, Er = function(t) {
  return t != null && typeof t != "boolean";
}, Rt = /* @__PURE__ */ So(function(e) {
  return pn(e) ? e : e.replace(vo, "-$&").toLowerCase();
}), Tr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Co, function(n, o, i) {
          return xe = {
            name: o,
            styles: i,
            next: xe
          }, o;
        });
  }
  return bo[t] !== 1 && !pn(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function lt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return xe = {
          name: o.name,
          styles: o.styles,
          next: xe
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            xe = {
              name: a.name,
              styles: a.styles,
              next: xe
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return Eo(e, t, r);
    }
  }
  var f = r;
  return f;
}
function Eo(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += lt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var c = a;
        Er(c) && (n += Rt(i) + ":" + Tr(i, c) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var f = 0; f < a.length; f++)
          Er(a[f]) && (n += Rt(i) + ":" + Tr(i, a[f]) + ";");
      else {
        var u = lt(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Rt(i) + ":" + u + ";";
            break;
          }
          default:
            n += i + "{" + u + "}";
        }
      }
    }
  return n;
}
var xr = /label:\s*([^\s;{]+)\s*(;|$)/g, xe;
function To(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  xe = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += lt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += lt(r, t, e[c]), n) {
      var f = i;
      o += f[c];
    }
  xr.lastIndex = 0;
  for (var u = "", p; (p = xr.exec(o)) !== null; )
    u += "-" + p[1];
  var h = yo(o) + u;
  return {
    name: h,
    styles: o,
    next: xe
  };
}
var tt = { exports: {} }, rt = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wr;
function xo() {
  if (wr) return Y;
  wr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function k(v) {
    if (typeof v == "object" && v !== null) {
      var z = v.$$typeof;
      switch (z) {
        case t:
          switch (v = v.type, v) {
            case f:
            case u:
            case n:
            case i:
            case o:
            case h:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case c:
                case p:
                case g:
                case S:
                case a:
                  return v;
                default:
                  return z;
              }
          }
        case r:
          return z;
      }
    }
  }
  function _(v) {
    return k(v) === u;
  }
  return Y.AsyncMode = f, Y.ConcurrentMode = u, Y.ContextConsumer = c, Y.ContextProvider = a, Y.Element = t, Y.ForwardRef = p, Y.Fragment = n, Y.Lazy = g, Y.Memo = S, Y.Portal = r, Y.Profiler = i, Y.StrictMode = o, Y.Suspense = h, Y.isAsyncMode = function(v) {
    return _(v) || k(v) === f;
  }, Y.isConcurrentMode = _, Y.isContextConsumer = function(v) {
    return k(v) === c;
  }, Y.isContextProvider = function(v) {
    return k(v) === a;
  }, Y.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, Y.isForwardRef = function(v) {
    return k(v) === p;
  }, Y.isFragment = function(v) {
    return k(v) === n;
  }, Y.isLazy = function(v) {
    return k(v) === g;
  }, Y.isMemo = function(v) {
    return k(v) === S;
  }, Y.isPortal = function(v) {
    return k(v) === r;
  }, Y.isProfiler = function(v) {
    return k(v) === i;
  }, Y.isStrictMode = function(v) {
    return k(v) === o;
  }, Y.isSuspense = function(v) {
    return k(v) === h;
  }, Y.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === u || v === i || v === o || v === h || v === m || typeof v == "object" && v !== null && (v.$$typeof === g || v.$$typeof === S || v.$$typeof === a || v.$$typeof === c || v.$$typeof === p || v.$$typeof === x || v.$$typeof === R || v.$$typeof === U || v.$$typeof === l);
  }, Y.typeOf = k, Y;
}
var q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or;
function wo() {
  return Or || (Or = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
    function k(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === u || O === i || O === o || O === h || O === m || typeof O == "object" && O !== null && (O.$$typeof === g || O.$$typeof === S || O.$$typeof === a || O.$$typeof === c || O.$$typeof === p || O.$$typeof === x || O.$$typeof === R || O.$$typeof === U || O.$$typeof === l);
    }
    function _(O) {
      if (typeof O == "object" && O !== null) {
        var ue = O.$$typeof;
        switch (ue) {
          case t:
            var Ae = O.type;
            switch (Ae) {
              case f:
              case u:
              case n:
              case i:
              case o:
              case h:
                return Ae;
              default:
                var Be = Ae && Ae.$$typeof;
                switch (Be) {
                  case c:
                  case p:
                  case g:
                  case S:
                  case a:
                    return Be;
                  default:
                    return ue;
                }
            }
          case r:
            return ue;
        }
      }
    }
    var v = f, z = u, Q = c, P = a, j = t, s = p, E = n, N = g, W = S, G = r, ie = i, ee = o, ae = h, le = !1;
    function ye(O) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(O) || _(O) === f;
    }
    function d(O) {
      return _(O) === u;
    }
    function C(O) {
      return _(O) === c;
    }
    function w(O) {
      return _(O) === a;
    }
    function $(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function M(O) {
      return _(O) === p;
    }
    function D(O) {
      return _(O) === n;
    }
    function B(O) {
      return _(O) === g;
    }
    function F(O) {
      return _(O) === S;
    }
    function I(O) {
      return _(O) === r;
    }
    function V(O) {
      return _(O) === i;
    }
    function L(O) {
      return _(O) === o;
    }
    function se(O) {
      return _(O) === h;
    }
    q.AsyncMode = v, q.ConcurrentMode = z, q.ContextConsumer = Q, q.ContextProvider = P, q.Element = j, q.ForwardRef = s, q.Fragment = E, q.Lazy = N, q.Memo = W, q.Portal = G, q.Profiler = ie, q.StrictMode = ee, q.Suspense = ae, q.isAsyncMode = ye, q.isConcurrentMode = d, q.isContextConsumer = C, q.isContextProvider = w, q.isElement = $, q.isForwardRef = M, q.isFragment = D, q.isLazy = B, q.isMemo = F, q.isPortal = I, q.isProfiler = V, q.isStrictMode = L, q.isSuspense = se, q.isValidElementType = k, q.typeOf = _;
  }()), q;
}
var _r;
function hn() {
  return _r || (_r = 1, process.env.NODE_ENV === "production" ? rt.exports = xo() : rt.exports = wo()), rt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var $t, Ar;
function Oo() {
  if (Ar) return $t;
  Ar = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var f = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        u[p] = p;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return $t = o() ? Object.assign : function(i, a) {
    for (var c, f = n(i), u, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var h in c)
        t.call(c, h) && (f[h] = c[h]);
      if (e) {
        u = e(c);
        for (var m = 0; m < u.length; m++)
          r.call(c, u[m]) && (f[u[m]] = c[u[m]]);
      }
    }
    return f;
  }, $t;
}
var kt, Rr;
function Ht() {
  if (Rr) return kt;
  Rr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kt = e, kt;
}
var Pt, $r;
function gn() {
  return $r || ($r = 1, Pt = Function.call.bind(Object.prototype.hasOwnProperty)), Pt;
}
var Nt, kr;
function _o() {
  if (kr) return Nt;
  kr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Ht(), r = {}, n = /* @__PURE__ */ gn();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, f, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (n(i, p)) {
          var h;
          try {
            if (typeof i[p] != "function") {
              var m = Error(
                (f || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            h = i[p](a, p, f, c, null, t);
          } catch (g) {
            h = g;
          }
          if (h && !(h instanceof Error) && e(
            (f || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var S = u ? u() : "";
            e(
              "Failed " + c + " type: " + h.message + (S ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Nt = o, Nt;
}
var Mt, Pr;
function Ao() {
  if (Pr) return Mt;
  Pr = 1;
  var e = hn(), t = Oo(), r = /* @__PURE__ */ Ht(), n = /* @__PURE__ */ gn(), o = /* @__PURE__ */ _o(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var f = "Warning: " + c;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Mt = function(c, f) {
    var u = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function h(d) {
      var C = d && (u && d[u] || d[p]);
      if (typeof C == "function")
        return C;
    }
    var m = "<<anonymous>>", S = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: U(),
      arrayOf: k,
      element: _(),
      elementType: v(),
      instanceOf: z,
      node: s(),
      objectOf: P,
      oneOf: Q,
      oneOfType: j,
      shape: N,
      exact: W
    };
    function g(d, C) {
      return d === C ? d !== 0 || 1 / d === 1 / C : d !== d && C !== C;
    }
    function l(d, C) {
      this.message = d, this.data = C && typeof C == "object" ? C : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function x(d) {
      if (process.env.NODE_ENV !== "production")
        var C = {}, w = 0;
      function $(D, B, F, I, V, L, se) {
        if (I = I || m, L = L || F, se !== r) {
          if (f) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = I + ":" + F;
            !C[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            w < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), C[ue] = !0, w++);
          }
        }
        return B[F] == null ? D ? B[F] === null ? new l("The " + V + " `" + L + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new l("The " + V + " `" + L + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : d(B, F, I, V, L);
      }
      var M = $.bind(null, !1);
      return M.isRequired = $.bind(null, !0), M;
    }
    function R(d) {
      function C(w, $, M, D, B, F) {
        var I = w[$], V = ee(I);
        if (V !== d) {
          var L = ae(I);
          return new l(
            "Invalid " + D + " `" + B + "` of type " + ("`" + L + "` supplied to `" + M + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return x(C);
    }
    function U() {
      return x(a);
    }
    function k(d) {
      function C(w, $, M, D, B) {
        if (typeof d != "function")
          return new l("Property `" + B + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var F = w[$];
        if (!Array.isArray(F)) {
          var I = ee(F);
          return new l("Invalid " + D + " `" + B + "` of type " + ("`" + I + "` supplied to `" + M + "`, expected an array."));
        }
        for (var V = 0; V < F.length; V++) {
          var L = d(F, V, M, D, B + "[" + V + "]", r);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return x(C);
    }
    function _() {
      function d(C, w, $, M, D) {
        var B = C[w];
        if (!c(B)) {
          var F = ee(B);
          return new l("Invalid " + M + " `" + D + "` of type " + ("`" + F + "` supplied to `" + $ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(d);
    }
    function v() {
      function d(C, w, $, M, D) {
        var B = C[w];
        if (!e.isValidElementType(B)) {
          var F = ee(B);
          return new l("Invalid " + M + " `" + D + "` of type " + ("`" + F + "` supplied to `" + $ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(d);
    }
    function z(d) {
      function C(w, $, M, D, B) {
        if (!(w[$] instanceof d)) {
          var F = d.name || m, I = ye(w[$]);
          return new l("Invalid " + D + " `" + B + "` of type " + ("`" + I + "` supplied to `" + M + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return x(C);
    }
    function Q(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function C(w, $, M, D, B) {
        for (var F = w[$], I = 0; I < d.length; I++)
          if (g(F, d[I]))
            return null;
        var V = JSON.stringify(d, function(se, O) {
          var ue = ae(O);
          return ue === "symbol" ? String(O) : O;
        });
        return new l("Invalid " + D + " `" + B + "` of value `" + String(F) + "` " + ("supplied to `" + M + "`, expected one of " + V + "."));
      }
      return x(C);
    }
    function P(d) {
      function C(w, $, M, D, B) {
        if (typeof d != "function")
          return new l("Property `" + B + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var F = w[$], I = ee(F);
        if (I !== "object")
          return new l("Invalid " + D + " `" + B + "` of type " + ("`" + I + "` supplied to `" + M + "`, expected an object."));
        for (var V in F)
          if (n(F, V)) {
            var L = d(F, V, M, D, B + "." + V, r);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return x(C);
    }
    function j(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var C = 0; C < d.length; C++) {
        var w = d[C];
        if (typeof w != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(w) + " at index " + C + "."
          ), a;
      }
      function $(M, D, B, F, I) {
        for (var V = [], L = 0; L < d.length; L++) {
          var se = d[L], O = se(M, D, B, F, I, r);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && V.push(O.data.expectedType);
        }
        var ue = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new l("Invalid " + F + " `" + I + "` supplied to " + ("`" + B + "`" + ue + "."));
      }
      return x($);
    }
    function s() {
      function d(C, w, $, M, D) {
        return G(C[w]) ? null : new l("Invalid " + M + " `" + D + "` supplied to " + ("`" + $ + "`, expected a ReactNode."));
      }
      return x(d);
    }
    function E(d, C, w, $, M) {
      return new l(
        (d || "React class") + ": " + C + " type `" + w + "." + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function N(d) {
      function C(w, $, M, D, B) {
        var F = w[$], I = ee(F);
        if (I !== "object")
          return new l("Invalid " + D + " `" + B + "` of type `" + I + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var V in d) {
          var L = d[V];
          if (typeof L != "function")
            return E(M, D, B, V, ae(L));
          var se = L(F, V, M, D, B + "." + V, r);
          if (se)
            return se;
        }
        return null;
      }
      return x(C);
    }
    function W(d) {
      function C(w, $, M, D, B) {
        var F = w[$], I = ee(F);
        if (I !== "object")
          return new l("Invalid " + D + " `" + B + "` of type `" + I + "` " + ("supplied to `" + M + "`, expected `object`."));
        var V = t({}, w[$], d);
        for (var L in V) {
          var se = d[L];
          if (n(d, L) && typeof se != "function")
            return E(M, D, B, L, ae(se));
          if (!se)
            return new l(
              "Invalid " + D + " `" + B + "` key `" + L + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(w[$], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var O = se(F, L, M, D, B + "." + L, r);
          if (O)
            return O;
        }
        return null;
      }
      return x(C);
    }
    function G(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(G);
          if (d === null || c(d))
            return !0;
          var C = h(d);
          if (C) {
            var w = C.call(d), $;
            if (C !== d.entries) {
              for (; !($ = w.next()).done; )
                if (!G($.value))
                  return !1;
            } else
              for (; !($ = w.next()).done; ) {
                var M = $.value;
                if (M && !G(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ie(d, C) {
      return d === "symbol" ? !0 : C ? C["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && C instanceof Symbol : !1;
    }
    function ee(d) {
      var C = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : ie(C, d) ? "symbol" : C;
    }
    function ae(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var C = ee(d);
      if (C === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return C;
    }
    function le(d) {
      var C = ae(d);
      switch (C) {
        case "array":
        case "object":
          return "an " + C;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + C;
        default:
          return C;
      }
    }
    function ye(d) {
      return !d.constructor || !d.constructor.name ? m : d.constructor.name;
    }
    return S.checkPropTypes = o, S.resetWarningCache = o.resetWarningCache, S.PropTypes = S, S;
  }, Mt;
}
var It, Nr;
function Ro() {
  if (Nr) return It;
  Nr = 1;
  var e = /* @__PURE__ */ Ht();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, It = function() {
    function n(a, c, f, u, p, h) {
      if (h !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, It;
}
var Mr;
function $o() {
  if (Mr) return tt.exports;
  if (Mr = 1, process.env.NODE_ENV !== "production") {
    var e = hn(), t = !0;
    tt.exports = /* @__PURE__ */ Ao()(e.isElement, t);
  } else
    tt.exports = /* @__PURE__ */ Ro()();
  return tt.exports;
}
var ko = /* @__PURE__ */ $o();
const y = /* @__PURE__ */ mn(ko);
function Po(e) {
  return e == null || Object.keys(e).length === 0;
}
function Jt(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(Po(o) ? r : o) : t;
  return /* @__PURE__ */ A.jsx(fo, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (Jt.propTypes = {
  defaultTheme: y.object,
  styles: y.oneOfType([y.array, y.string, y.object, y.func])
});
/**
 * @mui/styled-engine v7.0.1
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function No(e, t) {
  const r = mo(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Mo(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Ir = [];
function jr(e) {
  return Ir[0] = e, To(Ir);
}
var nt = { exports: {} }, K = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function Io() {
  if (Dr) return K;
  Dr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), S = Symbol.for("react.client.reference");
  function g(l) {
    if (typeof l == "object" && l !== null) {
      var x = l.$$typeof;
      switch (x) {
        case e:
          switch (l = l.type, l) {
            case r:
            case o:
            case n:
            case f:
            case u:
            case m:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case a:
                case c:
                case h:
                case p:
                  return l;
                case i:
                  return l;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return K.ContextConsumer = i, K.ContextProvider = a, K.Element = e, K.ForwardRef = c, K.Fragment = r, K.Lazy = h, K.Memo = p, K.Portal = t, K.Profiler = o, K.StrictMode = n, K.Suspense = f, K.SuspenseList = u, K.isContextConsumer = function(l) {
    return g(l) === i;
  }, K.isContextProvider = function(l) {
    return g(l) === a;
  }, K.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, K.isForwardRef = function(l) {
    return g(l) === c;
  }, K.isFragment = function(l) {
    return g(l) === r;
  }, K.isLazy = function(l) {
    return g(l) === h;
  }, K.isMemo = function(l) {
    return g(l) === p;
  }, K.isPortal = function(l) {
    return g(l) === t;
  }, K.isProfiler = function(l) {
    return g(l) === o;
  }, K.isStrictMode = function(l) {
    return g(l) === n;
  }, K.isSuspense = function(l) {
    return g(l) === f;
  }, K.isSuspenseList = function(l) {
    return g(l) === u;
  }, K.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === r || l === o || l === n || l === f || l === u || typeof l == "object" && l !== null && (l.$$typeof === h || l.$$typeof === p || l.$$typeof === a || l.$$typeof === i || l.$$typeof === c || l.$$typeof === S || l.getModuleId !== void 0);
  }, K.typeOf = g, K;
}
var H = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr;
function jo() {
  return Fr || (Fr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var x = l.$$typeof;
        switch (x) {
          case t:
            switch (l = l.type, l) {
              case n:
              case i:
              case o:
              case u:
              case p:
              case S:
                return l;
              default:
                switch (l = l && l.$$typeof, l) {
                  case c:
                  case f:
                  case m:
                  case h:
                    return l;
                  case a:
                    return l;
                  default:
                    return x;
                }
            }
          case r:
            return x;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), S = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    H.ContextConsumer = a, H.ContextProvider = c, H.Element = t, H.ForwardRef = f, H.Fragment = n, H.Lazy = m, H.Memo = h, H.Portal = r, H.Profiler = i, H.StrictMode = o, H.Suspense = u, H.SuspenseList = p, H.isContextConsumer = function(l) {
      return e(l) === a;
    }, H.isContextProvider = function(l) {
      return e(l) === c;
    }, H.isElement = function(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }, H.isForwardRef = function(l) {
      return e(l) === f;
    }, H.isFragment = function(l) {
      return e(l) === n;
    }, H.isLazy = function(l) {
      return e(l) === m;
    }, H.isMemo = function(l) {
      return e(l) === h;
    }, H.isPortal = function(l) {
      return e(l) === r;
    }, H.isProfiler = function(l) {
      return e(l) === i;
    }, H.isStrictMode = function(l) {
      return e(l) === o;
    }, H.isSuspense = function(l) {
      return e(l) === u;
    }, H.isSuspenseList = function(l) {
      return e(l) === p;
    }, H.isValidElementType = function(l) {
      return typeof l == "string" || typeof l == "function" || l === n || l === i || l === o || l === u || l === p || typeof l == "object" && l !== null && (l.$$typeof === m || l.$$typeof === h || l.$$typeof === c || l.$$typeof === a || l.$$typeof === f || l.$$typeof === g || l.getModuleId !== void 0);
    }, H.typeOf = e;
  }()), H;
}
var Br;
function Do() {
  return Br || (Br = 1, process.env.NODE_ENV === "production" ? nt.exports = /* @__PURE__ */ Io() : nt.exports = /* @__PURE__ */ jo()), nt.exports;
}
var ut = /* @__PURE__ */ Do();
function Ce(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function yn(e) {
  if (/* @__PURE__ */ T.isValidElement(e) || ut.isValidElementType(e) || !Ce(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = yn(e[r]);
  }), t;
}
function de(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ce(e) && Ce(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ T.isValidElement(t[o]) || ut.isValidElementType(t[o]) ? n[o] = t[o] : Ce(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ce(e[o]) ? n[o] = de(e[o], t[o], r) : r.clone ? n[o] = Ce(t[o]) ? yn(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const Fo = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Bo(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = Fo(t), a = Object.keys(i);
  function c(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function f(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function u(m, S) {
    const g = a.indexOf(S);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : S) - n / 100}${r})`;
  }
  function p(m) {
    return a.indexOf(m) + 1 < a.length ? u(m, a[a.indexOf(m) + 1]) : c(m);
  }
  function h(m) {
    const S = a.indexOf(m);
    return S === 0 ? c(a[1]) : S === a.length - 1 ? f(a[S]) : u(m, a[a.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: f,
    between: u,
    only: p,
    not: h,
    unit: r,
    ...o
  };
}
function Vo(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Lo(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function zo(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : we(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Wo(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...c) => t(e.breakpoints.up(...c), a), i.down = (...c) => t(e.breakpoints.down(...c), a), i.between = (...c) => t(e.breakpoints.between(...c), a), i.only = (...c) => t(e.breakpoints.only(...c), a), i.not = (...c) => {
      const f = t(e.breakpoints.not(...c), a);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Uo = {
  borderRadius: 4
}, _e = process.env.NODE_ENV !== "production" ? y.oneOfType([y.number, y.string, y.object, y.array]) : {};
function Ge(e, t) {
  return t ? de(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ht = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Vr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ht[e]}px)`
}, Yo = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : ht[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Te(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Vr;
    return t.reduce((a, c, f) => (a[i.up(i.keys[f])] = r(t[f]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Vr;
    return Object.keys(t).reduce((a, c) => {
      if (Lo(i.keys, c)) {
        const f = zo(n.containerQueries ? n : Yo, c);
        f && (a[f] = r(t[c], c));
      } else if (Object.keys(i.values || ht).includes(c)) {
        const f = i.up(c);
        a[f] = r(t[c], c);
      } else {
        const f = c;
        a[f] = t[f];
      }
      return a;
    }, {});
  }
  return r(t);
}
function qo(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Go(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function $e(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : we(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function gt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function ft(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = gt(e, r) || n, t && (o = t(o, n, e)), o;
}
function oe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], f = a.theme, u = gt(f, n) || {};
    return Te(a, c, (h) => {
      let m = ft(u, o, h);
      return h === m && typeof h == "string" && (m = ft(u, o, `${t}${h === "default" ? "" : $e(h)}`, h)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: _e
  } : {}, i.filterProps = [t], i;
}
function Ko(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Ho = {
  m: "margin",
  p: "padding"
}, Jo = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Lr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Xo = Ko((e) => {
  if (e.length > 2)
    if (Lr[e])
      e = Lr[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Ho[t], o = Jo[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), yt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], bt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Qo = [...yt, ...bt];
function Xe(e, t, r, n) {
  const o = gt(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[a];
    return i >= 0 ? c : typeof c == "number" ? -c : typeof c == "string" && c.startsWith("var(") ? `calc(-1 * ${c})` : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Xt(e) {
  return Xe(e, "spacing", 8, "spacing");
}
function Qe(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Zo(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Qe(t, r), n), {});
}
function ei(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Xo(r), i = Zo(o, n), a = e[r];
  return Te(e, a, i);
}
function bn(e, t) {
  const r = Xt(e.theme);
  return Object.keys(e).map((n) => ei(e, t, n, r)).reduce(Ge, {});
}
function te(e) {
  return bn(e, yt);
}
te.propTypes = process.env.NODE_ENV !== "production" ? yt.reduce((e, t) => (e[t] = _e, e), {}) : {};
te.filterProps = yt;
function re(e) {
  return bn(e, bt);
}
re.propTypes = process.env.NODE_ENV !== "production" ? bt.reduce((e, t) => (e[t] = _e, e), {}) : {};
re.filterProps = bt;
process.env.NODE_ENV !== "production" && Qo.reduce((e, t) => (e[t] = _e, e), {});
function Sn(e = 8, t = Xt({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function St(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Ge(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function me(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function pe(e, t) {
  return oe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ti = pe("border", me), ri = pe("borderTop", me), ni = pe("borderRight", me), oi = pe("borderBottom", me), ii = pe("borderLeft", me), si = pe("borderColor"), ai = pe("borderTopColor"), ci = pe("borderRightColor"), li = pe("borderBottomColor"), ui = pe("borderLeftColor"), fi = pe("outline", me), di = pe("outlineColor"), vt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Xe(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Qe(t, n)
    });
    return Te(e, e.borderRadius, r);
  }
  return null;
};
vt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: _e
} : {};
vt.filterProps = ["borderRadius"];
St(ti, ri, ni, oi, ii, si, ai, ci, li, ui, vt, fi, di);
const Ct = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Xe(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Qe(t, n)
    });
    return Te(e, e.gap, r);
  }
  return null;
};
Ct.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: _e
} : {};
Ct.filterProps = ["gap"];
const Et = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Xe(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Qe(t, n)
    });
    return Te(e, e.columnGap, r);
  }
  return null;
};
Et.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: _e
} : {};
Et.filterProps = ["columnGap"];
const Tt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Xe(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Qe(t, n)
    });
    return Te(e, e.rowGap, r);
  }
  return null;
};
Tt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: _e
} : {};
Tt.filterProps = ["rowGap"];
const mi = oe({
  prop: "gridColumn"
}), pi = oe({
  prop: "gridRow"
}), hi = oe({
  prop: "gridAutoFlow"
}), gi = oe({
  prop: "gridAutoColumns"
}), yi = oe({
  prop: "gridAutoRows"
}), bi = oe({
  prop: "gridTemplateColumns"
}), Si = oe({
  prop: "gridTemplateRows"
}), vi = oe({
  prop: "gridTemplateAreas"
}), Ci = oe({
  prop: "gridArea"
});
St(Ct, Et, Tt, mi, pi, hi, gi, yi, bi, Si, vi, Ci);
function Fe(e, t) {
  return t === "grey" ? t : e;
}
const Ei = oe({
  prop: "color",
  themeKey: "palette",
  transform: Fe
}), Ti = oe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Fe
}), xi = oe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Fe
});
St(Ei, Ti, xi);
function fe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const wi = oe({
  prop: "width",
  transform: fe
}), Qt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, c, f;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || ht[r];
      return n ? ((f = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: fe(r)
      };
    };
    return Te(e, e.maxWidth, t);
  }
  return null;
};
Qt.filterProps = ["maxWidth"];
const Oi = oe({
  prop: "minWidth",
  transform: fe
}), _i = oe({
  prop: "height",
  transform: fe
}), Ai = oe({
  prop: "maxHeight",
  transform: fe
}), Ri = oe({
  prop: "minHeight",
  transform: fe
});
oe({
  prop: "size",
  cssProperty: "width",
  transform: fe
});
oe({
  prop: "size",
  cssProperty: "height",
  transform: fe
});
const $i = oe({
  prop: "boxSizing"
});
St(wi, Qt, Oi, _i, Ai, Ri, $i);
const xt = {
  // borders
  border: {
    themeKey: "borders",
    transform: me
  },
  borderTop: {
    themeKey: "borders",
    transform: me
  },
  borderRight: {
    themeKey: "borders",
    transform: me
  },
  borderBottom: {
    themeKey: "borders",
    transform: me
  },
  borderLeft: {
    themeKey: "borders",
    transform: me
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: me
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: vt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Fe
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Fe
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Fe
  },
  // spacing
  p: {
    style: re
  },
  pt: {
    style: re
  },
  pr: {
    style: re
  },
  pb: {
    style: re
  },
  pl: {
    style: re
  },
  px: {
    style: re
  },
  py: {
    style: re
  },
  padding: {
    style: re
  },
  paddingTop: {
    style: re
  },
  paddingRight: {
    style: re
  },
  paddingBottom: {
    style: re
  },
  paddingLeft: {
    style: re
  },
  paddingX: {
    style: re
  },
  paddingY: {
    style: re
  },
  paddingInline: {
    style: re
  },
  paddingInlineStart: {
    style: re
  },
  paddingInlineEnd: {
    style: re
  },
  paddingBlock: {
    style: re
  },
  paddingBlockStart: {
    style: re
  },
  paddingBlockEnd: {
    style: re
  },
  m: {
    style: te
  },
  mt: {
    style: te
  },
  mr: {
    style: te
  },
  mb: {
    style: te
  },
  ml: {
    style: te
  },
  mx: {
    style: te
  },
  my: {
    style: te
  },
  margin: {
    style: te
  },
  marginTop: {
    style: te
  },
  marginRight: {
    style: te
  },
  marginBottom: {
    style: te
  },
  marginLeft: {
    style: te
  },
  marginX: {
    style: te
  },
  marginY: {
    style: te
  },
  marginInline: {
    style: te
  },
  marginInlineStart: {
    style: te
  },
  marginInlineEnd: {
    style: te
  },
  marginBlock: {
    style: te
  },
  marginBlockStart: {
    style: te
  },
  marginBlockEnd: {
    style: te
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Ct
  },
  rowGap: {
    style: Tt
  },
  columnGap: {
    style: Et
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: fe
  },
  maxWidth: {
    style: Qt
  },
  minWidth: {
    transform: fe
  },
  height: {
    transform: fe
  },
  maxHeight: {
    transform: fe
  },
  minHeight: {
    transform: fe
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function ki(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Pi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ni() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: f = r,
      themeKey: u,
      transform: p,
      style: h
    } = c;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const m = gt(o, u) || {};
    return h ? h(a) : Te(a, n, (g) => {
      let l = ft(m, p, g);
      return g === l && typeof g == "string" && (l = ft(m, p, `${r}${g === "default" ? "" : $e(g)}`, g)), f === !1 ? l : {
        [f]: l
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? xt;
    function a(c) {
      let f = c;
      if (typeof c == "function")
        f = c(o);
      else if (typeof c != "object")
        return c;
      if (!f)
        return null;
      const u = qo(o.breakpoints), p = Object.keys(u);
      let h = u;
      return Object.keys(f).forEach((m) => {
        const S = Pi(f[m], o);
        if (S != null)
          if (typeof S == "object")
            if (i[m])
              h = Ge(h, e(m, S, o, i));
            else {
              const g = Te({
                theme: o
              }, S, (l) => ({
                [m]: l
              }));
              ki(g, S) ? h[m] = t({
                sx: S,
                theme: o
              }) : h = Ge(h, g);
            }
          else
            h = Ge(h, e(m, S, o, i));
      }), Vo(o, Go(p, h));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const ke = Ni();
ke.filterProps = ["sx"];
function Mi(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Zt(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, c = Bo(r), f = Sn(o);
  let u = de({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: f,
    shape: {
      ...Uo,
      ...i
    }
  }, a);
  return u = Wo(u), u.applyStyles = Mi, u = t.reduce((p, h) => de(p, h), u), u.unstable_sxConfig = {
    ...xt,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, u.unstable_sx = function(h) {
    return ke({
      sx: h,
      theme: this
    });
  }, u;
}
function Ii(e) {
  return Object.keys(e).length === 0;
}
function vn(e = null) {
  const t = T.useContext(dn);
  return !t || Ii(t) ? e : t;
}
const ji = Zt();
function Cn(e = ji) {
  return vn(e);
}
function En({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = Cn(r), o = typeof e == "function" ? e(t && n[t] || n) : e;
  return /* @__PURE__ */ A.jsx(Jt, {
    styles: o
  });
}
process.env.NODE_ENV !== "production" && (En.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: y.object,
  /**
   * @ignore
   */
  styles: y.oneOfType([y.array, y.func, y.number, y.object, y.string, y.bool]),
  /**
   * @ignore
   */
  themeId: y.string
});
const zr = (e) => e, Di = () => {
  let e = zr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = zr;
    }
  };
}, Fi = Di();
function Tn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Tn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Wt() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Tn(e)) && (n && (n += " "), n += t);
  return n;
}
const Bi = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function er(e, t, r = "Mui") {
  const n = Bi[t];
  return n ? `${r}-${n}` : `${Fi.generate(e)}-${t}`;
}
function Vi(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = er(e, o, r);
  }), n;
}
function xn(e, t = "") {
  return e.displayName || e.name || t;
}
function Wr(e, t, r) {
  const n = xn(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Li(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return xn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ut.ForwardRef:
          return Wr(e, e.render, "ForwardRef");
        case ut.Memo:
          return Wr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function wn(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: jr(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = jr(o.style));
  }), n;
}
const zi = Zt();
function jt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Wi(e) {
  return e ? (t, r) => r[e] : null;
}
function Ui(e, t, r) {
  e.theme = Ki(e.theme) ? r : e.theme[t] || e.theme;
}
function at(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => at(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return On(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function On(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const c in a.props)
        if (e[c] !== a.props[c] && ((o = e.ownerState) == null ? void 0 : o[c]) !== a.props[c])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function Yi(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = zi,
    rootShouldForwardProp: n = jt,
    slotShouldForwardProp: o = jt
  } = e;
  function i(c) {
    Ui(c, t, r);
  }
  return (c, f = {}) => {
    Mo(c, (v) => v.filter((z) => z !== ke));
    const {
      name: u,
      slot: p,
      skipVariantsResolver: h,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: S = Wi(_n(p)),
      ...g
    } = f, l = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), x = m || !1;
    let R = jt;
    p === "Root" || p === "root" ? R = n : p ? R = o : Hi(c) && (R = void 0);
    const U = No(c, {
      shouldForwardProp: R,
      label: Gi(u, p),
      ...g
    }), k = (v) => {
      if (typeof v == "function" && v.__emotion_real !== v)
        return function(Q) {
          return at(Q, v);
        };
      if (Ce(v)) {
        const z = wn(v);
        return z.variants ? function(P) {
          return at(P, z);
        } : z.style;
      }
      return v;
    }, _ = (...v) => {
      const z = [], Q = v.map(k), P = [];
      if (z.push(i), u && S && P.push(function(N) {
        var ee, ae;
        const G = (ae = (ee = N.theme.components) == null ? void 0 : ee[u]) == null ? void 0 : ae.styleOverrides;
        if (!G)
          return null;
        const ie = {};
        for (const le in G)
          ie[le] = at(N, G[le]);
        return S(N, ie);
      }), u && !l && P.push(function(N) {
        var ie, ee;
        const W = N.theme, G = (ee = (ie = W == null ? void 0 : W.components) == null ? void 0 : ie[u]) == null ? void 0 : ee.variants;
        return G ? On(N, G) : null;
      }), x || P.push(ke), Array.isArray(Q[0])) {
        const E = Q.shift(), N = new Array(z.length).fill(""), W = new Array(P.length).fill("");
        let G;
        G = [...N, ...E, ...W], G.raw = [...N, ...E.raw, ...W], z.unshift(G);
      }
      const j = [...z, ...Q, ...P], s = U(...j);
      return c.muiName && (s.muiName = c.muiName), process.env.NODE_ENV !== "production" && (s.displayName = qi(u, p, c)), s;
    };
    return U.withConfig && (_.withConfig = U.withConfig), _;
  };
}
function qi(e, t, r) {
  return e ? `${e}${$e(t || "")}` : `Styled(${Li(r)})`;
}
function Gi(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${_n(t || "Root")}`), r;
}
function Ki(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Hi(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function _n(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Ut(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const f = c;
              r[o][f] = Ut(i[f], a[f]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
const Ji = typeof window < "u" ? T.useLayoutEffect : T.useEffect;
function Xi(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function tr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Xi(e, t, r);
}
function Qi(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Oe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Oe(Qi(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : we(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : we(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Zi = (e) => {
  const t = Oe(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Ue = (e, t) => {
  try {
    return Zi(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function wt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function An(e) {
  e = Oe(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (u, p = (u + r / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let c = "rgb";
  const f = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", f.push(t[3])), wt({
    type: c,
    values: f
  });
}
function Yt(e) {
  e = Oe(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Oe(An(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ur(e, t) {
  const r = Yt(e), n = Yt(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function es(e, t) {
  return e = Oe(e), t = tr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, wt(e);
}
function ot(e, t, r) {
  try {
    return es(e, t);
  } catch {
    return e;
  }
}
function rr(e, t) {
  if (e = Oe(e), t = tr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return wt(e);
}
function J(e, t, r) {
  try {
    return rr(e, t);
  } catch {
    return e;
  }
}
function nr(e, t) {
  if (e = Oe(e), t = tr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return wt(e);
}
function X(e, t, r) {
  try {
    return nr(e, t);
  } catch {
    return e;
  }
}
function ts(e, t = 0.15) {
  return Yt(e) > 0.5 ? rr(e, t) : nr(e, t);
}
function it(e, t, r) {
  try {
    return ts(e, t);
  } catch {
    return e;
  }
}
const rs = "exact-prop: ​";
function Rn(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [rs]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function ns(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let f = 0; f < i.length; f += 1) {
      const u = i[f];
      u && (a += (c === !0 ? "" : " ") + t(u), c = !1, r && r[u] && (a += " " + r[u]));
    }
    n[o] = a;
  }
  return n;
}
const or = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (or.displayName = "ThemeContext");
function ir() {
  const e = T.useContext(or);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e;
}
const os = typeof Symbol == "function" && Symbol.for, is = os ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function ss(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return {
    ...e,
    ...t
  };
}
function dt(e) {
  const {
    children: t,
    theme: r
  } = e, n = ir();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = T.useMemo(() => {
    const i = n === null ? {
      ...r
    } : ss(n, r);
    return i != null && (i[is] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ A.jsx(or.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (dt.propTypes = {
  /**
   * Your component tree.
   */
  children: y.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: y.oneOfType([y.object, y.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (dt.propTypes = Rn(dt.propTypes));
const as = /* @__PURE__ */ T.createContext();
function $n({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ A.jsx(as.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && ($n.propTypes = {
  children: y.node,
  value: y.bool
});
const kn = /* @__PURE__ */ T.createContext(void 0);
function Pn({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ A.jsx(kn.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Pn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: y.node,
  /**
   * @ignore
   */
  value: y.object
});
function cs(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Ut(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Ut(o, n) : n;
}
function ls({
  props: e,
  name: t
}) {
  const r = T.useContext(kn);
  return cs({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Yr = {};
function qr(e, t, r, n = !1) {
  return T.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const i = r(o), a = e ? {
        ...t,
        [e]: i
      } : i;
      return n ? () => a : a;
    }
    return e ? {
      ...t,
      [e]: r
    } : {
      ...t,
      ...r
    };
  }, [e, t, r, n]);
}
function Ke(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = vn(Yr), i = ir() || Yr;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = qr(n, o, r), c = qr(n, i, r, !0), f = (n ? a[n] : a).direction === "rtl";
  return /* @__PURE__ */ A.jsx(dt, {
    theme: c,
    children: /* @__PURE__ */ A.jsx(dn.Provider, {
      value: a,
      children: /* @__PURE__ */ A.jsx($n, {
        value: f,
        children: /* @__PURE__ */ A.jsx(Pn, {
          value: n ? a[n].components : a.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Ke.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: y.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: y.oneOfType([y.func, y.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: y.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Ke.propTypes = Rn(Ke.propTypes));
const Gr = {
  theme: void 0
};
function us(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Gr.theme = o.theme, i = wn(e(Gr)), t = i, r = o.theme), i;
  };
}
const sr = "mode", ar = "color-scheme", fs = "data-color-scheme";
function Nn(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = sr,
    colorSchemeStorageKey: i = ar,
    attribute: a = fs,
    colorSchemeNode: c = "document.documentElement",
    nonce: f
  } = e || {};
  let u = "", p = a;
  if (a === "class" && (p = ".%s"), a === "data" && (p = "[data-%s]"), p.startsWith(".")) {
    const m = p.substring(1);
    u += `${c}.classList.remove('${m}'.replace('%s', light), '${m}'.replace('%s', dark));
      ${c}.classList.add('${m}'.replace('%s', colorScheme));`;
  }
  const h = p.match(/\[([^\]]+)\]/);
  if (h) {
    const [m, S] = h[1].split("=");
    S || (u += `${c}.removeAttribute('${m}'.replace('%s', light));
      ${c}.removeAttribute('${m}'.replace('%s', dark));`), u += `
      ${c}.setAttribute('${m}'.replace('%s', colorScheme), ${S ? `${S}.replace('%s', colorScheme)` : '""'});`;
  } else
    u += `${c}.setAttribute('${p}', colorScheme);`;
  return /* @__PURE__ */ A.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? f : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${n}';
  const light = localStorage.getItem('${i}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function ds() {
}
const ms = ({
  key: e,
  storageWindow: t
}) => (!t && typeof window < "u" && (t = window), {
  get(r) {
    if (typeof window > "u")
      return;
    if (!t)
      return r;
    let n;
    try {
      n = t.localStorage.getItem(e);
    } catch {
    }
    return n || r;
  },
  set: (r) => {
    if (t)
      try {
        t.localStorage.setItem(e, r);
      } catch {
      }
  },
  subscribe: (r) => {
    if (!t)
      return ds;
    const n = (o) => {
      const i = o.newValue;
      o.key === e && r(i);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function Dt() {
}
function Kr(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Mn(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function ps(e) {
  return Mn(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function hs(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: i = sr,
    colorSchemeStorageKey: a = ar,
    storageWindow: c = typeof window > "u" ? void 0 : window,
    storageManager: f = ms,
    noSsr: u = !1
  } = e, p = o.join(","), h = o.length > 1, m = T.useMemo(() => f == null ? void 0 : f({
    key: i,
    storageWindow: c
  }), [f, i, c]), S = T.useMemo(() => f == null ? void 0 : f({
    key: `${a}-light`,
    storageWindow: c
  }), [f, a, c]), g = T.useMemo(() => f == null ? void 0 : f({
    key: `${a}-dark`,
    storageWindow: c
  }), [f, a, c]), [l, x] = T.useState(() => {
    const P = (m == null ? void 0 : m.get(t)) || t, j = (S == null ? void 0 : S.get(r)) || r, s = (g == null ? void 0 : g.get(n)) || n;
    return {
      mode: P,
      systemMode: Kr(P),
      lightColorScheme: j,
      darkColorScheme: s
    };
  }), [R, U] = T.useState(u || !h);
  T.useEffect(() => {
    U(!0);
  }, []);
  const k = ps(l), _ = T.useCallback((P) => {
    x((j) => {
      if (P === j.mode)
        return j;
      const s = P ?? t;
      return m == null || m.set(s), {
        ...j,
        mode: s,
        systemMode: Kr(s)
      };
    });
  }, [m, t]), v = T.useCallback((P) => {
    P ? typeof P == "string" ? P && !p.includes(P) ? console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`) : x((j) => {
      const s = {
        ...j
      };
      return Mn(j, (E) => {
        E === "light" && (S == null || S.set(P), s.lightColorScheme = P), E === "dark" && (g == null || g.set(P), s.darkColorScheme = P);
      }), s;
    }) : x((j) => {
      const s = {
        ...j
      }, E = P.light === null ? r : P.light, N = P.dark === null ? n : P.dark;
      return E && (p.includes(E) ? (s.lightColorScheme = E, S == null || S.set(E)) : console.error(`\`${E}\` does not exist in \`theme.colorSchemes\`.`)), N && (p.includes(N) ? (s.darkColorScheme = N, g == null || g.set(N)) : console.error(`\`${N}\` does not exist in \`theme.colorSchemes\`.`)), s;
    }) : x((j) => (S == null || S.set(r), g == null || g.set(n), {
      ...j,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [p, S, g, r, n]), z = T.useCallback((P) => {
    l.mode === "system" && x((j) => {
      const s = P != null && P.matches ? "dark" : "light";
      return j.systemMode === s ? j : {
        ...j,
        systemMode: s
      };
    });
  }, [l.mode]), Q = T.useRef(z);
  return Q.current = z, T.useEffect(() => {
    if (typeof window.matchMedia != "function" || !h)
      return;
    const P = (...s) => Q.current(...s), j = window.matchMedia("(prefers-color-scheme: dark)");
    return j.addListener(P), P(j), () => {
      j.removeListener(P);
    };
  }, [h]), T.useEffect(() => {
    if (h) {
      const P = (m == null ? void 0 : m.subscribe((E) => {
        (!E || ["light", "dark", "system"].includes(E)) && _(E || t);
      })) || Dt, j = (S == null ? void 0 : S.subscribe((E) => {
        (!E || p.match(E)) && v({
          light: E
        });
      })) || Dt, s = (g == null ? void 0 : g.subscribe((E) => {
        (!E || p.match(E)) && v({
          dark: E
        });
      })) || Dt;
      return () => {
        P(), j(), s();
      };
    }
  }, [v, _, p, t, c, h, m, S, g]), {
    ...l,
    mode: R ? l.mode : void 0,
    systemMode: R ? l.systemMode : void 0,
    colorScheme: R ? k : void 0,
    setMode: _,
    setColorScheme: v
  };
}
const gs = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function ys(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = sr,
    colorSchemeStorageKey: o = ar,
    disableTransitionOnChange: i = !1,
    defaultColorScheme: a,
    resolveTheme: c
  } = e, f = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, u = /* @__PURE__ */ T.createContext(void 0);
  process.env.NODE_ENV !== "production" && (u.displayName = "ColorSchemeContext");
  const p = () => T.useContext(u) || f, h = {}, m = {};
  function S(R) {
    var hr, gr, yr, br;
    const {
      children: U,
      theme: k,
      modeStorageKey: _ = n,
      colorSchemeStorageKey: v = o,
      disableTransitionOnChange: z = i,
      storageManager: Q,
      storageWindow: P = typeof window > "u" ? void 0 : window,
      documentNode: j = typeof document > "u" ? void 0 : document,
      colorSchemeNode: s = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: E = !1,
      disableStyleSheetGeneration: N = !1,
      defaultMode: W = "system",
      forceThemeRerender: G = !1,
      noSsr: ie
    } = R, ee = T.useRef(!1), ae = ir(), le = T.useContext(u), ye = !!le && !E, d = T.useMemo(() => k || (typeof r == "function" ? r() : r), [k]), C = d[t], w = C || d, {
      colorSchemes: $ = h,
      components: M = m,
      cssVarPrefix: D
    } = w, B = Object.keys($).filter((ce) => !!$[ce]).join(","), F = T.useMemo(() => B.split(","), [B]), I = typeof a == "string" ? a : a.light, V = typeof a == "string" ? a : a.dark, L = $[I] && $[V] ? W : ((gr = (hr = $[w.defaultColorScheme]) == null ? void 0 : hr.palette) == null ? void 0 : gr.mode) || ((yr = w.palette) == null ? void 0 : yr.mode), {
      mode: se,
      setMode: O,
      systemMode: ue,
      lightColorScheme: Ae,
      darkColorScheme: Be,
      colorScheme: eo,
      setColorScheme: dr
    } = hs({
      supportedColorSchemes: F,
      defaultLightColorScheme: I,
      defaultDarkColorScheme: V,
      modeStorageKey: _,
      colorSchemeStorageKey: v,
      defaultMode: L,
      storageManager: Q,
      storageWindow: P,
      noSsr: ie
    });
    let At = se, he = eo;
    ye && (At = le.mode, he = le.colorScheme), process.env.NODE_ENV !== "production" && G && !w.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Ze = he || w.defaultColorScheme;
    w.vars && !G && (Ze = w.defaultColorScheme);
    const Pe = T.useMemo(() => {
      var Re;
      const ce = ((Re = w.generateThemeVars) == null ? void 0 : Re.call(w)) || w.vars, ne = {
        ...w,
        components: M,
        colorSchemes: $,
        cssVarPrefix: D,
        vars: ce
      };
      if (typeof ne.generateSpacing == "function" && (ne.spacing = ne.generateSpacing()), Ze) {
        const be = $[Ze];
        be && typeof be == "object" && Object.keys(be).forEach((ge) => {
          be[ge] && typeof be[ge] == "object" ? ne[ge] = {
            ...ne[ge],
            ...be[ge]
          } : ne[ge] = be[ge];
        });
      }
      return c ? c(ne) : ne;
    }, [w, Ze, M, $, D]), Ve = w.colorSchemeSelector;
    Ji(() => {
      if (he && s && Ve && Ve !== "media") {
        const ce = Ve;
        let ne = Ve;
        if (ce === "class" && (ne = ".%s"), ce === "data" && (ne = "[data-%s]"), ce != null && ce.startsWith("data-") && !ce.includes("%s") && (ne = `[${ce}="%s"]`), ne.startsWith("."))
          s.classList.remove(...F.map((Re) => ne.substring(1).replace("%s", Re))), s.classList.add(ne.substring(1).replace("%s", he));
        else {
          const Re = ne.replace("%s", he).match(/\[([^\]]+)\]/);
          if (Re) {
            const [be, ge] = Re[1].split("=");
            ge || F.forEach((ro) => {
              s.removeAttribute(be.replace(he, ro));
            }), s.setAttribute(be, ge ? ge.replace(/"|'/g, "") : "");
          } else
            s.setAttribute(ne, he);
        }
      }
    }, [he, Ve, s, F]), T.useEffect(() => {
      let ce;
      if (z && ee.current && j) {
        const ne = j.createElement("style");
        ne.appendChild(j.createTextNode(gs)), j.head.appendChild(ne), window.getComputedStyle(j.body), ce = setTimeout(() => {
          j.head.removeChild(ne);
        }, 1);
      }
      return () => {
        clearTimeout(ce);
      };
    }, [he, z, j]), T.useEffect(() => (ee.current = !0, () => {
      ee.current = !1;
    }), []);
    const to = T.useMemo(() => ({
      allColorSchemes: F,
      colorScheme: he,
      darkColorScheme: Be,
      lightColorScheme: Ae,
      mode: At,
      setColorScheme: dr,
      setMode: process.env.NODE_ENV === "production" ? O : (ce) => {
        Pe.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), O(ce);
      },
      systemMode: ue
    }), [F, he, Be, Ae, At, dr, O, ue, Pe.colorSchemeSelector]);
    let mr = !0;
    (N || w.cssVariables === !1 || ye && (ae == null ? void 0 : ae.cssVarPrefix) === D) && (mr = !1);
    const pr = /* @__PURE__ */ A.jsxs(T.Fragment, {
      children: [/* @__PURE__ */ A.jsx(Ke, {
        themeId: C ? t : void 0,
        theme: Pe,
        children: U
      }), mr && /* @__PURE__ */ A.jsx(Jt, {
        styles: ((br = Pe.generateStyleSheets) == null ? void 0 : br.call(Pe)) || []
      })]
    });
    return ye ? pr : /* @__PURE__ */ A.jsx(u.Provider, {
      value: to,
      children: pr
    });
  }
  process.env.NODE_ENV !== "production" && (S.propTypes = {
    /**
     * The component tree.
     */
    children: y.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: y.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: y.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: y.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: y.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: y.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: y.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: y.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: y.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: y.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjuction with `InitColorSchemeScript` component.
     */
    noSsr: y.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: y.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: y.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: y.object
  });
  const g = typeof a == "string" ? a : a.light, l = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: S,
    useColorScheme: p,
    getInitColorSchemeScript: (R) => Nn({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: g,
      defaultDarkColorScheme: l,
      modeStorageKey: n,
      ...R
    })
  };
}
function bs(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Hr = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Ss = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, f]) => {
      (!r || r && !r([...i, c])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? n(f, [...i, c], Array.isArray(f) ? [...a, c] : a) : t([...i, c], f, a));
    });
  }
  n(e);
}, vs = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Ft(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Ss(
    e,
    (c, f, u) => {
      if ((typeof f == "string" || typeof f == "number") && (!n || !n(c, f))) {
        const p = `--${r ? `${r}-` : ""}${c.join("-")}`, h = vs(c, f);
        Object.assign(o, {
          [p]: h
        }), Hr(i, c, `var(${p})`, u), Hr(a, c, `var(${p}, ${h})`, u);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function Cs(e, t = {}) {
  const {
    getSelector: r = x,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: c = "light",
    ...f
  } = e, {
    vars: u,
    css: p,
    varsWithDefaults: h
  } = Ft(f, t);
  let m = h;
  const S = {}, {
    [c]: g,
    ...l
  } = i;
  if (Object.entries(l || {}).forEach(([k, _]) => {
    const {
      vars: v,
      css: z,
      varsWithDefaults: Q
    } = Ft(_, t);
    m = de(m, Q), S[k] = {
      css: z,
      vars: v
    };
  }), g) {
    const {
      css: k,
      vars: _,
      varsWithDefaults: v
    } = Ft(g, t);
    m = de(m, v), S[c] = {
      css: k,
      vars: _
    };
  }
  function x(k, _) {
    var z, Q;
    let v = o;
    if (o === "class" && (v = ".%s"), o === "data" && (v = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (v = `[${o}="%s"]`), k) {
      if (v === "media")
        return e.defaultColorScheme === k ? ":root" : {
          [`@media (prefers-color-scheme: ${((Q = (z = i[k]) == null ? void 0 : z.palette) == null ? void 0 : Q.mode) || k})`]: {
            ":root": _
          }
        };
      if (v)
        return e.defaultColorScheme === k ? `:root, ${v.replace("%s", String(k))}` : v.replace("%s", String(k));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let k = {
        ...u
      };
      return Object.entries(S).forEach(([, {
        vars: _
      }]) => {
        k = de(k, _);
      }), k;
    },
    generateStyleSheets: () => {
      var P, j;
      const k = [], _ = e.defaultColorScheme || "light";
      function v(s, E) {
        Object.keys(E).length && k.push(typeof s == "string" ? {
          [s]: {
            ...E
          }
        } : s);
      }
      v(r(void 0, {
        ...p
      }), p);
      const {
        [_]: z,
        ...Q
      } = S;
      if (z) {
        const {
          css: s
        } = z, E = (j = (P = i[_]) == null ? void 0 : P.palette) == null ? void 0 : j.mode, N = !n && E ? {
          colorScheme: E,
          ...s
        } : {
          ...s
        };
        v(r(_, {
          ...N
        }), N);
      }
      return Object.entries(Q).forEach(([s, {
        css: E
      }]) => {
        var G, ie;
        const N = (ie = (G = i[s]) == null ? void 0 : G.palette) == null ? void 0 : ie.mode, W = !n && N ? {
          colorScheme: N,
          ...E
        } : {
          ...E
        };
        v(r(s, {
          ...W
        }), W);
      }), k;
    }
  };
}
function Es(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Ee = "$$material", He = {
  black: "#000",
  white: "#fff"
}, Ts = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ne = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Me = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, We = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ie = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, je = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, De = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function In() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: He.white,
      default: He.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const xs = In();
function jn() {
  return {
    text: {
      primary: He.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: He.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Jr = jn();
function Xr(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = nr(e.main, o) : t === "dark" && (e.dark = rr(e.main, i)));
}
function ws(e = "light") {
  return e === "dark" ? {
    main: Ie[200],
    light: Ie[50],
    dark: Ie[400]
  } : {
    main: Ie[700],
    light: Ie[400],
    dark: Ie[800]
  };
}
function Os(e = "light") {
  return e === "dark" ? {
    main: Ne[200],
    light: Ne[50],
    dark: Ne[400]
  } : {
    main: Ne[500],
    light: Ne[300],
    dark: Ne[700]
  };
}
function _s(e = "light") {
  return e === "dark" ? {
    main: Me[500],
    light: Me[300],
    dark: Me[700]
  } : {
    main: Me[700],
    light: Me[400],
    dark: Me[800]
  };
}
function As(e = "light") {
  return e === "dark" ? {
    main: je[400],
    light: je[300],
    dark: je[700]
  } : {
    main: je[700],
    light: je[500],
    dark: je[900]
  };
}
function Rs(e = "light") {
  return e === "dark" ? {
    main: De[400],
    light: De[300],
    dark: De[700]
  } : {
    main: De[800],
    light: De[500],
    dark: De[900]
  };
}
function $s(e = "light") {
  return e === "dark" ? {
    main: We[400],
    light: We[300],
    dark: We[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: We[500],
    dark: We[900]
  };
}
function cr(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || ws(t), a = e.secondary || Os(t), c = e.error || _s(t), f = e.info || As(t), u = e.success || Rs(t), p = e.warning || $s(t);
  function h(l) {
    const x = Ur(l, Jr.text.primary) >= r ? Jr.text.primary : xs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = Ur(l, x);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${x} on ${l}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return x;
  }
  const m = ({
    color: l,
    name: x,
    mainShade: R = 500,
    lightShade: U = 300,
    darkShade: k = 700
  }) => {
    if (l = {
      ...l
    }, !l.main && l[R] && (l.main = l[R]), !l.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : we(11, x ? ` (${x})` : "", R));
    if (typeof l.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(l.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : we(12, x ? ` (${x})` : "", JSON.stringify(l.main)));
    return Xr(l, "light", U, n), Xr(l, "dark", k, n), l.contrastText || (l.contrastText = h(l.main)), l;
  };
  let S;
  return t === "light" ? S = In() : t === "dark" && (S = jn()), process.env.NODE_ENV !== "production" && (S || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), de({
    // A collection of common colors.
    common: {
      ...He
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Ts,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...S
  }, o);
}
function ks(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Ps(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Ns(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Qr = {
  textTransform: "uppercase"
}, Zr = '"Roboto", "Helvetica", "Arial", sans-serif';
function Dn(e, t) {
  const {
    fontFamily: r = Zr,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: p,
    ...h
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = n / 14, S = p || ((x) => `${x / f * m}rem`), g = (x, R, U, k, _) => ({
    fontFamily: r,
    fontWeight: x,
    fontSize: S(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: U,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Zr ? {
      letterSpacing: `${Ns(k / R)}em`
    } : {},
    ..._,
    ...u
  }), l = {
    h1: g(o, 96, 1.167, -1.5),
    h2: g(o, 60, 1.2, -0.5),
    h3: g(i, 48, 1.167, 0),
    h4: g(i, 34, 1.235, 0.25),
    h5: g(i, 24, 1.334, 0),
    h6: g(a, 20, 1.6, 0.15),
    subtitle1: g(i, 16, 1.75, 0.15),
    subtitle2: g(a, 14, 1.57, 0.1),
    body1: g(i, 16, 1.5, 0.15),
    body2: g(i, 14, 1.43, 0.15),
    button: g(a, 14, 1.75, 0.4, Qr),
    caption: g(i, 12, 1.66, 0.4),
    overline: g(i, 12, 2.66, 1, Qr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return de({
    htmlFontSize: f,
    pxToRem: S,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...l
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const Ms = 0.2, Is = 0.14, js = 0.12;
function Z(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ms})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Is})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${js})`].join(",");
}
const Ds = ["none", Z(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Z(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Z(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Z(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Z(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Z(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Z(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Z(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Z(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Z(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Z(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Z(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Z(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Z(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Z(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Z(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Z(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Z(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Z(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Z(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Z(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Z(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Z(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Z(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Fs = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Bs = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function en(e) {
  return `${Math.round(e)}ms`;
}
function Vs(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Ls(e) {
  const t = {
    ...Fs,
    ...e.easing
  }, r = {
    ...Bs,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Vs,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: f = 0,
        ...u
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (m) => typeof m == "string", h = (m) => !Number.isNaN(parseFloat(m));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !p(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), p(c) || console.error('MUI: Argument "easing" must be a string.'), !h(f) && !p(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof a == "string" ? a : en(a)} ${c} ${typeof f == "string" ? f : en(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const zs = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Ws(e) {
  return Ce(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Fn(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !Ws(c) || a.startsWith("unstable_") ? delete n[a] : Ce(c) && (n[a] = {
        ...c
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function qt(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: f,
    ...u
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : we(20));
  const p = cr(i), h = Zt(e);
  let m = de(h, {
    mixins: Ps(h.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ds.slice(),
    typography: Dn(p, c),
    transitions: Ls(a),
    zIndex: {
      ...zs
    }
  });
  if (m = de(m, u), m = t.reduce((S, g) => de(S, g), m), process.env.NODE_ENV !== "production") {
    const S = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], g = (l, x) => {
      let R;
      for (R in l) {
        const U = l[R];
        if (S.includes(R) && Object.keys(U).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const k = er("", R);
            console.error([`MUI: The \`${x}\` component increases the CSS specificity of the \`${R}\` internal state.`, "You can not override it like this: ", JSON.stringify(l, null, 2), "", `Instead, you need to use the '&.${k}' syntax:`, JSON.stringify({
              root: {
                [`&.${k}`]: U
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          l[R] = {};
        }
      }
    };
    Object.keys(m.components).forEach((l) => {
      const x = m.components[l].styleOverrides;
      x && l.startsWith("Mui") && g(x, l);
    });
  }
  return m.unstable_sxConfig = {
    ...xt,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, m.unstable_sx = function(g) {
    return ke({
      sx: g,
      theme: this
    });
  }, m.toRuntimeSource = Fn, m;
}
function Us(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Ys = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Us(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Bn(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Vn(e) {
  return e === "dark" ? Ys : [];
}
function qs(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = cr(t);
  return {
    palette: i,
    opacity: {
      ...Bn(i.mode),
      ...r
    },
    overlays: n || Vn(i.mode),
    ...o
  };
}
function Gs(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ks = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Hs = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Ks(e.cssVarPrefix).forEach((c) => {
        a[c] = r[c], delete r[c];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function Js(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function b(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Ye(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : An(e);
}
function ve(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ue(Ye(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Xs(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Se = (e) => {
  try {
    return e();
  } catch {
  }
}, Qs = (e = "mui") => bs(e);
function Bt(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = qs({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = qt({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...Bn(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Vn(o)
  }, a;
}
function Zs(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Gs,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...u
  } = e, p = Object.keys(r)[0], h = n || (r.light && p !== "light" ? "light" : p), m = Qs(i), {
    [h]: S,
    light: g,
    dark: l,
    ...x
  } = r, R = {
    ...x
  };
  let U = S;
  if ((h === "dark" && !("dark" in r) || h === "light" && !("light" in r)) && (U = !0), !U)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : we(21, h));
  const k = Bt(R, U, u, h);
  g && !R.light && Bt(R, g, void 0, "light"), l && !R.dark && Bt(R, l, void 0, "dark");
  let _ = {
    defaultColorScheme: h,
    ...k,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: f,
    getCssVar: m,
    colorSchemes: R,
    font: {
      ...ks(k.typography),
      ...k.font
    },
    spacing: Xs(u.spacing)
  };
  Object.keys(_.colorSchemes).forEach((j) => {
    const s = _.colorSchemes[j].palette, E = (N) => {
      const W = N.split("-"), G = W[1], ie = W[2];
      return m(N, s[G][ie]);
    };
    if (s.mode === "light" && (b(s.common, "background", "#fff"), b(s.common, "onBackground", "#000")), s.mode === "dark" && (b(s.common, "background", "#000"), b(s.common, "onBackground", "#fff")), Js(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      b(s.Alert, "errorColor", J(s.error.light, 0.6)), b(s.Alert, "infoColor", J(s.info.light, 0.6)), b(s.Alert, "successColor", J(s.success.light, 0.6)), b(s.Alert, "warningColor", J(s.warning.light, 0.6)), b(s.Alert, "errorFilledBg", E("palette-error-main")), b(s.Alert, "infoFilledBg", E("palette-info-main")), b(s.Alert, "successFilledBg", E("palette-success-main")), b(s.Alert, "warningFilledBg", E("palette-warning-main")), b(s.Alert, "errorFilledColor", Se(() => s.getContrastText(s.error.main))), b(s.Alert, "infoFilledColor", Se(() => s.getContrastText(s.info.main))), b(s.Alert, "successFilledColor", Se(() => s.getContrastText(s.success.main))), b(s.Alert, "warningFilledColor", Se(() => s.getContrastText(s.warning.main))), b(s.Alert, "errorStandardBg", X(s.error.light, 0.9)), b(s.Alert, "infoStandardBg", X(s.info.light, 0.9)), b(s.Alert, "successStandardBg", X(s.success.light, 0.9)), b(s.Alert, "warningStandardBg", X(s.warning.light, 0.9)), b(s.Alert, "errorIconColor", E("palette-error-main")), b(s.Alert, "infoIconColor", E("palette-info-main")), b(s.Alert, "successIconColor", E("palette-success-main")), b(s.Alert, "warningIconColor", E("palette-warning-main")), b(s.AppBar, "defaultBg", E("palette-grey-100")), b(s.Avatar, "defaultBg", E("palette-grey-400")), b(s.Button, "inheritContainedBg", E("palette-grey-300")), b(s.Button, "inheritContainedHoverBg", E("palette-grey-A100")), b(s.Chip, "defaultBorder", E("palette-grey-400")), b(s.Chip, "defaultAvatarColor", E("palette-grey-700")), b(s.Chip, "defaultIconColor", E("palette-grey-700")), b(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), b(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), b(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), b(s.LinearProgress, "primaryBg", X(s.primary.main, 0.62)), b(s.LinearProgress, "secondaryBg", X(s.secondary.main, 0.62)), b(s.LinearProgress, "errorBg", X(s.error.main, 0.62)), b(s.LinearProgress, "infoBg", X(s.info.main, 0.62)), b(s.LinearProgress, "successBg", X(s.success.main, 0.62)), b(s.LinearProgress, "warningBg", X(s.warning.main, 0.62)), b(s.Skeleton, "bg", `rgba(${E("palette-text-primaryChannel")} / 0.11)`), b(s.Slider, "primaryTrack", X(s.primary.main, 0.62)), b(s.Slider, "secondaryTrack", X(s.secondary.main, 0.62)), b(s.Slider, "errorTrack", X(s.error.main, 0.62)), b(s.Slider, "infoTrack", X(s.info.main, 0.62)), b(s.Slider, "successTrack", X(s.success.main, 0.62)), b(s.Slider, "warningTrack", X(s.warning.main, 0.62));
      const N = it(s.background.default, 0.8);
      b(s.SnackbarContent, "bg", N), b(s.SnackbarContent, "color", Se(() => s.getContrastText(N))), b(s.SpeedDialAction, "fabHoverBg", it(s.background.paper, 0.15)), b(s.StepConnector, "border", E("palette-grey-400")), b(s.StepContent, "border", E("palette-grey-400")), b(s.Switch, "defaultColor", E("palette-common-white")), b(s.Switch, "defaultDisabledColor", E("palette-grey-100")), b(s.Switch, "primaryDisabledColor", X(s.primary.main, 0.62)), b(s.Switch, "secondaryDisabledColor", X(s.secondary.main, 0.62)), b(s.Switch, "errorDisabledColor", X(s.error.main, 0.62)), b(s.Switch, "infoDisabledColor", X(s.info.main, 0.62)), b(s.Switch, "successDisabledColor", X(s.success.main, 0.62)), b(s.Switch, "warningDisabledColor", X(s.warning.main, 0.62)), b(s.TableCell, "border", X(ot(s.divider, 1), 0.88)), b(s.Tooltip, "bg", ot(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      b(s.Alert, "errorColor", X(s.error.light, 0.6)), b(s.Alert, "infoColor", X(s.info.light, 0.6)), b(s.Alert, "successColor", X(s.success.light, 0.6)), b(s.Alert, "warningColor", X(s.warning.light, 0.6)), b(s.Alert, "errorFilledBg", E("palette-error-dark")), b(s.Alert, "infoFilledBg", E("palette-info-dark")), b(s.Alert, "successFilledBg", E("palette-success-dark")), b(s.Alert, "warningFilledBg", E("palette-warning-dark")), b(s.Alert, "errorFilledColor", Se(() => s.getContrastText(s.error.dark))), b(s.Alert, "infoFilledColor", Se(() => s.getContrastText(s.info.dark))), b(s.Alert, "successFilledColor", Se(() => s.getContrastText(s.success.dark))), b(s.Alert, "warningFilledColor", Se(() => s.getContrastText(s.warning.dark))), b(s.Alert, "errorStandardBg", J(s.error.light, 0.9)), b(s.Alert, "infoStandardBg", J(s.info.light, 0.9)), b(s.Alert, "successStandardBg", J(s.success.light, 0.9)), b(s.Alert, "warningStandardBg", J(s.warning.light, 0.9)), b(s.Alert, "errorIconColor", E("palette-error-main")), b(s.Alert, "infoIconColor", E("palette-info-main")), b(s.Alert, "successIconColor", E("palette-success-main")), b(s.Alert, "warningIconColor", E("palette-warning-main")), b(s.AppBar, "defaultBg", E("palette-grey-900")), b(s.AppBar, "darkBg", E("palette-background-paper")), b(s.AppBar, "darkColor", E("palette-text-primary")), b(s.Avatar, "defaultBg", E("palette-grey-600")), b(s.Button, "inheritContainedBg", E("palette-grey-800")), b(s.Button, "inheritContainedHoverBg", E("palette-grey-700")), b(s.Chip, "defaultBorder", E("palette-grey-700")), b(s.Chip, "defaultAvatarColor", E("palette-grey-300")), b(s.Chip, "defaultIconColor", E("palette-grey-300")), b(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), b(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), b(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), b(s.LinearProgress, "primaryBg", J(s.primary.main, 0.5)), b(s.LinearProgress, "secondaryBg", J(s.secondary.main, 0.5)), b(s.LinearProgress, "errorBg", J(s.error.main, 0.5)), b(s.LinearProgress, "infoBg", J(s.info.main, 0.5)), b(s.LinearProgress, "successBg", J(s.success.main, 0.5)), b(s.LinearProgress, "warningBg", J(s.warning.main, 0.5)), b(s.Skeleton, "bg", `rgba(${E("palette-text-primaryChannel")} / 0.13)`), b(s.Slider, "primaryTrack", J(s.primary.main, 0.5)), b(s.Slider, "secondaryTrack", J(s.secondary.main, 0.5)), b(s.Slider, "errorTrack", J(s.error.main, 0.5)), b(s.Slider, "infoTrack", J(s.info.main, 0.5)), b(s.Slider, "successTrack", J(s.success.main, 0.5)), b(s.Slider, "warningTrack", J(s.warning.main, 0.5));
      const N = it(s.background.default, 0.98);
      b(s.SnackbarContent, "bg", N), b(s.SnackbarContent, "color", Se(() => s.getContrastText(N))), b(s.SpeedDialAction, "fabHoverBg", it(s.background.paper, 0.15)), b(s.StepConnector, "border", E("palette-grey-600")), b(s.StepContent, "border", E("palette-grey-600")), b(s.Switch, "defaultColor", E("palette-grey-300")), b(s.Switch, "defaultDisabledColor", E("palette-grey-600")), b(s.Switch, "primaryDisabledColor", J(s.primary.main, 0.55)), b(s.Switch, "secondaryDisabledColor", J(s.secondary.main, 0.55)), b(s.Switch, "errorDisabledColor", J(s.error.main, 0.55)), b(s.Switch, "infoDisabledColor", J(s.info.main, 0.55)), b(s.Switch, "successDisabledColor", J(s.success.main, 0.55)), b(s.Switch, "warningDisabledColor", J(s.warning.main, 0.55)), b(s.TableCell, "border", J(ot(s.divider, 1), 0.68)), b(s.Tooltip, "bg", ot(s.grey[700], 0.92));
    }
    ve(s.background, "default"), ve(s.background, "paper"), ve(s.common, "background"), ve(s.common, "onBackground"), ve(s, "divider"), Object.keys(s).forEach((N) => {
      const W = s[N];
      N !== "tonalOffset" && W && typeof W == "object" && (W.main && b(s[N], "mainChannel", Ue(Ye(W.main))), W.light && b(s[N], "lightChannel", Ue(Ye(W.light))), W.dark && b(s[N], "darkChannel", Ue(Ye(W.dark))), W.contrastText && b(s[N], "contrastTextChannel", Ue(Ye(W.contrastText))), N === "text" && (ve(s[N], "primary"), ve(s[N], "secondary")), N === "action" && (W.active && ve(s[N], "active"), W.selected && ve(s[N], "selected")));
    });
  }), _ = t.reduce((j, s) => de(j, s), _);
  const v = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Hs(_)
  }, {
    vars: z,
    generateThemeVars: Q,
    generateStyleSheets: P
  } = Cs(_, v);
  return _.vars = z, Object.entries(_.colorSchemes[_.defaultColorScheme]).forEach(([j, s]) => {
    _[j] = s;
  }), _.generateThemeVars = Q, _.generateStyleSheets = P, _.generateSpacing = function() {
    return Sn(u.spacing, Xt(this));
  }, _.getColorSchemeSelector = Es(c), _.spacing = _.generateSpacing(), _.shouldSkipGeneratingVar = a, _.unstable_sxConfig = {
    ...xt,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, _.unstable_sx = function(s) {
    return ke({
      sx: s,
      theme: this
    });
  }, _.toRuntimeSource = Fn, _;
}
function tn(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: cr({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ot(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, c = i || "light", f = o == null ? void 0 : o[c], u = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof f != "boolean" && f,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return qt(e, ...t);
    let p = r;
    "palette" in e || u[c] && (u[c] !== !0 ? p = u[c].palette : c === "dark" && (p = {
      mode: "dark"
    }));
    const h = qt({
      ...e,
      palette: p
    }, ...t);
    return h.defaultColorScheme = c, h.colorSchemes = u, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: h.palette
    }, tn(h, "dark", u.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: h.palette
    }, tn(h, "light", u.light)), h;
  }
  return !r && !("light" in u) && c === "light" && (u.light = !0), Zs({
    ...a,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const lr = Ot();
function ea() {
  const e = Cn(lr);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e[Ee] || e;
}
function ta(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ra = (e) => ta(e) && e !== "classes", na = Yi({
  themeId: Ee,
  defaultTheme: lr,
  rootShouldForwardProp: ra
});
function Vt({
  theme: e,
  ...t
}) {
  const r = Ee in e ? e[Ee] : void 0;
  return /* @__PURE__ */ A.jsx(Ke, {
    ...t,
    themeId: r ? Ee : void 0,
    theme: r || e
  });
}
const qe = {
  attribute: "data-mui-color-scheme",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, oa = function(t) {
  return /* @__PURE__ */ A.jsx(Nn, {
    ...qe,
    ...t
  });
}, {
  CssVarsProvider: ia,
  useColorScheme: sa
} = ys({
  themeId: Ee,
  // @ts-ignore ignore module augmentation tests
  theme: () => Ot({
    cssVariables: !0
  }),
  colorSchemeStorageKey: qe.colorSchemeStorageKey,
  modeStorageKey: qe.modeStorageKey,
  defaultColorScheme: {
    light: qe.defaultLightColorScheme,
    dark: qe.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: Dn(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return ke({
        sx: n,
        theme: this
      });
    }, t;
  }
}), aa = ia;
function ur({
  theme: e,
  ...t
}) {
  if (typeof e == "function")
    return /* @__PURE__ */ A.jsx(Vt, {
      theme: e,
      ...t
    });
  const r = Ee in e ? e[Ee] : e;
  return "colorSchemes" in r ? /* @__PURE__ */ A.jsx(aa, {
    theme: e,
    ...t
  }) : "vars" in r ? /* @__PURE__ */ A.jsx(Vt, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ A.jsx(Vt, {
    theme: {
      ...e,
      vars: null
    },
    ...t
  });
}
process.env.NODE_ENV !== "production" && (y.node, y.object.isRequired);
function Ln(e) {
  return ls(e);
}
function zn(e) {
  return /* @__PURE__ */ A.jsx(En, {
    ...e,
    defaultTheme: lr,
    themeId: Ee
  });
}
process.env.NODE_ENV !== "production" && (zn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: y.oneOfType([y.array, y.func, y.number, y.object, y.string, y.bool])
});
function Wn(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ A.jsx(zn, {
        styles: typeof e == "function" ? (n) => e({
          theme: n,
          ...r
        }) : e
      })
    );
  };
}
const ca = us;
function la(e) {
  return er("MuiSvgIcon", e);
}
Vi("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const ua = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${$e(t)}`, `fontSize${$e(r)}`]
  };
  return ns(o, la, n);
}, fa = na("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${$e(r.color)}`], t[`fontSize${$e(r.fontSize)}`]];
  }
})(ca(({
  theme: e
}) => {
  var t, r, n, o, i, a, c, f, u, p, h, m, S, g;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (l) => !l.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((f = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : f.call(c, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((p = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : p.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, l]) => l && l.main).map(([l]) => {
        var x, R;
        return {
          props: {
            color: l
          },
          style: {
            color: (R = (x = (e.vars ?? e).palette) == null ? void 0 : x[l]) == null ? void 0 : R.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (m = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : m.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (g = (S = (e.vars ?? e).palette) == null ? void 0 : S.action) == null ? void 0 : g.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), mt = /* @__PURE__ */ T.forwardRef(function(t, r) {
  const n = Ln({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: c = "svg",
    fontSize: f = "medium",
    htmlColor: u,
    inheritViewBox: p = !1,
    titleAccess: h,
    viewBox: m = "0 0 24 24",
    ...S
  } = n, g = /* @__PURE__ */ T.isValidElement(o) && o.type === "svg", l = {
    ...n,
    color: a,
    component: c,
    fontSize: f,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: m,
    hasSvgAsChild: g
  }, x = {};
  p || (x.viewBox = m);
  const R = ua(l);
  return /* @__PURE__ */ A.jsxs(fa, {
    as: c,
    className: Wt(R.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: r,
    ...x,
    ...S,
    ...g && o.props,
    ownerState: l,
    children: [g ? o.props.children : o, h ? /* @__PURE__ */ A.jsx("title", {
      children: h
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (mt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: y.oneOfType([y.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), y.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: y.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: y.oneOfType([y.oneOf(["inherit", "large", "medium", "small"]), y.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: y.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: y.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: y.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: y.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: y.string
});
mt.muiName = "SvgIcon";
function da(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ A.jsx(mt, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = mt.muiName, /* @__PURE__ */ T.memo(/* @__PURE__ */ T.forwardRef(r));
}
const Un = /* @__PURE__ */ T.createContext(null), ma = da(/* @__PURE__ */ A.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function pa(e, t) {
  const r = T.useContext(e);
  if (r == null)
    throw new Error(`context "${t}" was used without a Provider`);
  return r;
}
function ha(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function ga(...e) {
  return T.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      ha(r, t);
    });
  }, e);
}
function ya(e) {
  return typeof e == "string";
}
function ba(e, t, r) {
  return e === void 0 || ya(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function Sa(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function rn(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function va(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const S = Wt(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), g = {
      ...r == null ? void 0 : r.style,
      ...o == null ? void 0 : o.style,
      ...n == null ? void 0 : n.style
    }, l = {
      ...r,
      ...o,
      ...n
    };
    return S.length > 0 && (l.className = S), Object.keys(g).length > 0 && (l.style = g), {
      props: l,
      internalRef: void 0
    };
  }
  const a = Sa({
    ...o,
    ...n
  }), c = rn(n), f = rn(o), u = t(a), p = Wt(u == null ? void 0 : u.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), h = {
    ...u == null ? void 0 : u.style,
    ...r == null ? void 0 : r.style,
    ...o == null ? void 0 : o.style,
    ...n == null ? void 0 : n.style
  }, m = {
    ...u,
    ...r,
    ...f,
    ...c
  };
  return p.length > 0 && (m.className = p), Object.keys(h).length > 0 && (m.style = h), {
    props: m,
    internalRef: u.ref
  };
}
function Ca(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Ea(e) {
  var h;
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, a = o ? {} : Ca(r, n), {
    props: c,
    internalRef: f
  } = va({
    ...i,
    externalSlotProps: a
  }), u = ga(f, a == null ? void 0 : a.ref, (h = e.additionalProps) == null ? void 0 : h.ref);
  return ba(t, {
    ...c,
    ref: u
  }, n);
}
const Ta = (e) => ({
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        localeText: {
          ...e
        }
      }
    }
  }
}), xa = {
  // Account
  accountSignInLabel: "Sign In",
  accountSignOutLabel: "Sign Out",
  // AccountPreview
  accountPreviewTitle: "Account",
  accountPreviewIconButtonLabel: "Current User",
  // SignInPage
  signInTitle: "Sign In",
  signInSubtitle: "Welcome user, please sign in to continue",
  signInRememberMe: "Remember Me",
  oauthSignInTitle: "Sign in with OAuth",
  passkeySignInTitle: "Sign in with Passkey",
  magicLinkSignInTitle: "Sign in with Magic Link",
  // Common authentication labels
  email: "Email",
  password: "Password",
  username: "Username",
  passkey: "Passkey",
  // Common action labels
  save: "Save",
  cancel: "Cancel",
  ok: "Ok",
  or: "Or",
  to: "To",
  with: "With",
  close: "Close",
  delete: "Delete",
  alert: "Alert",
  confirm: "Confirm",
  loading: "Loading...",
  // CRUD
  createNewButtonLabel: "Create new",
  reloadButtonLabel: "Reload data",
  createLabel: "Create",
  createSuccessMessage: "Item created successfully.",
  createErrorMessage: "Failed to create item. Reason:",
  editLabel: "Edit",
  editSuccessMessage: "Item edited successfully.",
  editErrorMessage: "Failed to edit item. Reason:",
  deleteLabel: "Delete",
  deleteConfirmTitle: "Delete item?",
  deleteConfirmMessage: "Do you wish to delete this item?",
  deleteConfirmLabel: "Delete",
  deleteCancelLabel: "Cancel",
  deleteSuccessMessage: "Item deleted successfully.",
  deleteErrorMessage: "Failed to delete item. Reason:",
  deletedItemMessage: "This item has been deleted."
}, wa = Ta(xa), Yn = /* @__PURE__ */ T.createContext({}), qn = function(t) {
  var f, u, p;
  const {
    localeText: r,
    children: n
  } = t, o = ea(), i = (p = (u = (f = o == null ? void 0 : o.components) == null ? void 0 : f.MuiLocalizationProvider) == null ? void 0 : u.defaultProps) == null ? void 0 : p.localeText, a = wa.components.MuiLocalizationProvider.defaultProps.localeText, c = T.useMemo(() => ({
    ...a,
    ...i,
    ...r
  }), [a, i, r]);
  return /* @__PURE__ */ A.jsx(Yn.Provider, {
    value: c,
    children: n
  });
};
process.env.NODE_ENV !== "production" && (qn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: y.node,
  /**
   * Locale for components texts
   */
  localeText: y.object
});
function Oa() {
  return T.useContext(Yn);
}
var nn;
const Gn = /* @__PURE__ */ T.createContext(null), _a = {
  close: "Close"
};
function Aa({
  notificationKey: e,
  open: t,
  message: r,
  options: n,
  badge: o
}) {
  var R, U;
  const i = Oa(), a = {
    ..._a,
    ...i
  }, {
    close: c
  } = pa(Un), {
    severity: f,
    actionText: u,
    onAction: p,
    autoHideDuration: h
  } = n, m = T.useCallback((k, _) => {
    _ !== "clickaway" && c(e);
  }, [e, c]), S = /* @__PURE__ */ A.jsxs(T.Fragment, {
    children: [p ? /* @__PURE__ */ A.jsx(co, {
      color: "inherit",
      size: "small",
      onClick: p,
      children: u ?? "Action"
    }) : null, /* @__PURE__ */ A.jsx(lo, {
      size: "small",
      "aria-label": a == null ? void 0 : a.close,
      title: a == null ? void 0 : a.close,
      color: "inherit",
      onClick: m,
      children: nn || (nn = /* @__PURE__ */ A.jsx(ma, {
        fontSize: "small"
      }))
    })]
  }), g = T.useContext(Gn), l = ((R = g == null ? void 0 : g.slots) == null ? void 0 : R.snackbar) ?? oo, x = Ea({
    elementType: l,
    ownerState: g,
    externalSlotProps: (U = g == null ? void 0 : g.slotProps) == null ? void 0 : U.snackbar,
    additionalProps: {
      open: t,
      autoHideDuration: h,
      onClose: m,
      action: S
    }
  });
  return /* @__PURE__ */ A.jsx(l, {
    ...x,
    children: /* @__PURE__ */ A.jsx(io, {
      badgeContent: o,
      color: "primary",
      sx: {
        width: "100%"
      },
      children: f ? /* @__PURE__ */ A.jsx(so, {
        severity: f,
        sx: {
          width: "100%"
        },
        action: S,
        children: r
      }) : /* @__PURE__ */ A.jsx(ao, {
        message: r,
        action: S
      })
    })
  }, e);
}
function Ra({
  state: e
}) {
  const t = e.queue[0] ?? null;
  return t ? /* @__PURE__ */ A.jsx(Aa, {
    ...t,
    badge: e.queue.length > 1 ? String(e.queue.length) : null
  }) : null;
}
let on = 0;
const $a = () => {
  const e = on;
  return on += 1, e;
};
function ka(e) {
  const {
    children: t
  } = e, [r, n] = T.useState({
    queue: []
  }), o = T.useCallback((c, f = {}) => {
    const u = f.key ?? `::toolpad-internal::notification::${$a()}`;
    return n((p) => p.queue.some((h) => h.notificationKey === u) ? p : {
      ...p,
      queue: [...p.queue, {
        message: c,
        options: f,
        notificationKey: u,
        open: !0
      }]
    }), u;
  }, []), i = T.useCallback((c) => {
    n((f) => ({
      ...f,
      queue: f.queue.filter((u) => u.notificationKey !== c)
    }));
  }, []), a = T.useMemo(() => ({
    show: o,
    close: i
  }), [o, i]);
  return /* @__PURE__ */ A.jsx(Gn.Provider, {
    value: e,
    children: /* @__PURE__ */ A.jsxs(Un.Provider, {
      value: a,
      children: [t, /* @__PURE__ */ A.jsx(Ra, {
        state: r
      })]
    })
  });
}
var Lt, sn;
function Pa() {
  if (sn) return Lt;
  sn = 1;
  var e = function(t, r, n, o, i, a, c, f) {
    if (process.env.NODE_ENV !== "production" && r === void 0)
      throw new Error("invariant requires an error message argument");
    if (!t) {
      var u;
      if (r === void 0)
        u = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var p = [n, o, i, a, c, f], h = 0;
        u = new Error(
          r.replace(/%s/g, function() {
            return p[h++];
          })
        ), u.name = "Invariant Violation";
      }
      throw u.framesToPop = 1, u;
    }
  };
  return Lt = e, Lt;
}
var Na = Pa();
const pt = /* @__PURE__ */ mn(Na), Ma = /* @__PURE__ */ T.createContext(null), Ia = /* @__PURE__ */ T.createContext(null), ja = /* @__PURE__ */ T.createContext([]), Kn = /* @__PURE__ */ T.createContext({
  paletteMode: "light",
  setPaletteMode: () => {
  },
  isDualTheme: !1
}), Da = /* @__PURE__ */ T.createContext(null), Fa = /* @__PURE__ */ T.createContext(void 0), Ba = typeof window < "u" ? T.useLayoutEffect : T.useEffect;
function zt(e) {
  const t = T.useRef(e);
  return Ba(() => {
    t.current = e;
  }), T.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Va(e) {
  const {
    children: t,
    unmountAfter: r = 1e3
  } = e, [n, o] = T.useState([]), i = T.useId(), a = T.useRef(0), c = zt(function(m, S, g = {}) {
    const {
      onClose: l = async () => {
      }
    } = g;
    let x;
    const R = new Promise((_) => {
      x = _;
    });
    pt(x, "resolve not set");
    const U = `${i}-${a.current}`;
    a.current += 1;
    const k = {
      key: U,
      open: !0,
      promise: R,
      Component: m,
      payload: S,
      onClose: l,
      resolve: x
    };
    return o((_) => [..._, k]), R;
  }), f = zt(function(m) {
    o((S) => S.map((g) => g.promise === m ? {
      ...g,
      open: !1
    } : g)), setTimeout(() => {
      o((S) => S.filter((g) => g.promise !== m));
    }, r);
  }), u = zt(async function(m, S) {
    const g = n.find((l) => l.promise === m);
    return pt(g, "dialog not found"), await g.onClose(S), g.resolve(S), f(m), m;
  }), p = T.useMemo(() => ({
    open: c,
    close: u
  }), [c, u]);
  return /* @__PURE__ */ A.jsxs(Ma.Provider, {
    value: p,
    children: [t, n.map(({
      key: h,
      open: m,
      Component: S,
      payload: g,
      promise: l
    }) => /* @__PURE__ */ A.jsx(S, {
      payload: g,
      open: m,
      onClose: async (x) => {
        await u(l, x);
      }
    }, h))]
  });
}
const Gt = typeof Wn({}) == "function", La = (e, t) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...t && !e.vars && {
    colorScheme: e.palette.mode
  }
}), za = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Hn = (e, t = !1) => {
  var i, a;
  const r = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([c, f]) => {
    var p, h;
    const u = e.getColorSchemeSelector(c);
    u.startsWith("@") ? r[u] = {
      ":root": {
        colorScheme: (p = f.palette) == null ? void 0 : p.mode
      }
    } : r[u.replace(/\s*&/, "")] = {
      colorScheme: (h = f.palette) == null ? void 0 : h.mode
    };
  });
  let n = {
    html: La(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...za(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...r
  };
  const o = (a = (i = e.components) == null ? void 0 : i.MuiCssBaseline) == null ? void 0 : a.styleOverrides;
  return o && (n = [n, o]), n;
}, ct = "mui-ecs", Wa = (e) => {
  const t = Hn(e, !1), r = Array.isArray(t) ? t[0] : t;
  return !e.vars && r && (r.html[`:root:has(${ct})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([n, o]) => {
    var a, c;
    const i = e.getColorSchemeSelector(n);
    i.startsWith("@") ? r[i] = {
      [`:root:not(:has(.${ct}))`]: {
        colorScheme: (a = o.palette) == null ? void 0 : a.mode
      }
    } : r[i.replace(/\s*&/, "")] = {
      [`&:not(:has(.${ct}))`]: {
        colorScheme: (c = o.palette) == null ? void 0 : c.mode
      }
    };
  }), t;
}, Ua = Wn(Gt ? ({
  theme: e,
  enableColorScheme: t
}) => Hn(e, t) : ({
  theme: e
}) => Wa(e));
function _t(e) {
  const t = Ln({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: n = !1
  } = t;
  return /* @__PURE__ */ A.jsxs(T.Fragment, {
    children: [Gt && /* @__PURE__ */ A.jsx(Ua, {
      enableColorScheme: n
    }), !Gt && !n && /* @__PURE__ */ A.jsx("span", {
      className: ct,
      style: {
        display: "none"
      }
    }), r]
  });
}
process.env.NODE_ENV !== "production" && (_t.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: y.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: y.bool
});
const Ya = {
  parse: (e) => e,
  stringify: (e) => e
}, Je = /* @__PURE__ */ new Map();
function qa(e, t) {
  let r = Je.get(e);
  r || (r = /* @__PURE__ */ new Set(), Je.set(e, r)), r.add(t);
}
function Ga(e, t) {
  const r = Je.get(e);
  r && (r.delete(t), r.size === 0 && Je.delete(e));
}
function Jn(e) {
  const t = Je.get(e);
  t && t.forEach((r) => r());
}
if (typeof window < "u") {
  const e = window.localStorage.setItem;
  window.localStorage.setItem = function(r, n) {
    const o = e.call(this, r, n);
    return Jn(r), o;
  };
}
function Ka(e, t, r) {
  if (!t)
    return () => {
    };
  const n = (o) => {
    o.storageArea === e && o.key === t && r();
  };
  return window.addEventListener("storage", n), qa(t, r), () => {
    window.removeEventListener("storage", n), Ga(t, r);
  };
}
function Ha(e, t) {
  if (!t)
    return null;
  try {
    return e.getItem(t);
  } catch {
    return null;
  }
}
function Ja(e, t, r) {
  if (t) {
    try {
      r === null ? e.removeItem(t) : e.setItem(t, String(r));
    } catch {
      return;
    }
    Jn(t);
  }
}
const Xa = [null, () => {
}];
function Qa() {
  return Xa;
}
function an(e, t) {
  return t === null ? null : e.stringify(t);
}
function Za(e, t) {
  return t === null ? null : e.parse(t);
}
const ec = () => null;
function tc(e, t, r = null, n) {
  const o = (n == null ? void 0 : n.codec) ?? Ya, [i] = T.useState(r), a = T.useMemo(() => an(o, i), [o, i]), c = T.useCallback((g) => Ka(e, t, g), [e, t]), f = T.useCallback(() => Ha(e, t) ?? a, [e, a, t]), u = T.useSyncExternalStore(c, f, ec), p = T.useMemo(() => Za(o, u), [o, u]), h = T.useCallback((g) => {
    const l = g instanceof Function ? g(p) : g, x = an(o, l);
    Ja(e, t, x);
  }, [e, o, p, t]), [m, S] = T.useState(i);
  return t ? [p, h] : [m, S];
}
const rc = (...e) => tc(window.localStorage, ...e), nc = typeof window > "u" ? Qa : rc;
var cn, ln, un;
const oc = "data-toolpad-color-scheme", fn = "toolpad-color-scheme", Kt = "toolpad-mode";
function Xn(e) {
  return st("(prefers-color-scheme: dark)", e && {
    matchMedia: e.matchMedia
  }) ? "dark" : "light";
}
function fr(e) {
  return "vars" in e;
}
function ic(e) {
  const {
    children: t,
    theme: r,
    window: n
  } = e;
  pt(!fr(r), "This provider only accepts legacy themes.");
  const o = "light" in r || "dark" in r, i = Xn(n), [a, c] = nc(Kt, "system"), f = !a || a === "system" ? i : a, u = T.useMemo(() => o ? r[f === "dark" ? "dark" : "light"] ?? r[f === "dark" ? "light" : "dark"] : r, [o, f, r]), p = T.useMemo(() => ({
    paletteMode: f,
    setPaletteMode: c,
    isDualTheme: o
  }), [o, f, c]);
  return /* @__PURE__ */ A.jsx(ur, {
    theme: u,
    children: /* @__PURE__ */ A.jsxs(Kn.Provider, {
      value: p,
      children: [cn || (cn = /* @__PURE__ */ A.jsx(_t, {
        enableColorScheme: !0
      })), t]
    })
  });
}
function sc(e) {
  const {
    children: t,
    window: r
  } = e, n = Xn(r), {
    mode: o,
    setMode: i,
    allColorSchemes: a
  } = sa(), c = T.useMemo(() => ({
    paletteMode: !o || o === "system" ? n : o,
    setPaletteMode: i,
    isDualTheme: a.length > 1
  }), [a, o, n, i]);
  return /* @__PURE__ */ A.jsx(Kn.Provider, {
    value: c,
    children: t
  });
}
function ac(e) {
  const {
    children: t,
    theme: r,
    window: n
  } = e;
  return pt(fr(r), "This provider only accepts CSS vars themes."), /* @__PURE__ */ A.jsxs(ur, {
    theme: r,
    documentNode: n == null ? void 0 : n.document,
    colorSchemeNode: n == null ? void 0 : n.document.documentElement,
    disableNestedContext: !0,
    colorSchemeStorageKey: fn,
    modeStorageKey: Kt,
    children: [ln || (ln = /* @__PURE__ */ A.jsx(oa, {
      attribute: oc,
      colorSchemeStorageKey: fn,
      modeStorageKey: Kt
    })), /* @__PURE__ */ A.jsxs(sc, {
      window: n,
      children: [un || (un = /* @__PURE__ */ A.jsx(_t, {
        enableColorScheme: !0
      })), t]
    })]
  });
}
function cc(e) {
  const {
    children: t,
    theme: r,
    ...n
  } = e;
  return fr(r) ? /* @__PURE__ */ A.jsx(ac, {
    theme: r,
    ...n,
    children: t
  }) : /* @__PURE__ */ A.jsx(ic, {
    theme: r,
    ...n,
    children: t
  });
}
const lc = /* @__PURE__ */ T.createContext(null), uc = /* @__PURE__ */ T.createContext(null);
function fc() {
  return Ot({
    cssVariables: {
      colorSchemeSelector: "data-toolpad-color-scheme"
    },
    colorSchemes: {
      dark: !0
    }
  });
}
function Qn(e) {
  const {
    children: t,
    theme: r = fc(),
    branding: n = null,
    navigation: o = [],
    localeText: i,
    router: a = null,
    authentication: c = null,
    session: f = null,
    window: u
  } = e;
  return /* @__PURE__ */ A.jsx(Fa.Provider, {
    value: u,
    children: /* @__PURE__ */ A.jsx(lc.Provider, {
      value: c,
      children: /* @__PURE__ */ A.jsx(uc.Provider, {
        value: f,
        children: /* @__PURE__ */ A.jsx(Da.Provider, {
          value: a,
          children: /* @__PURE__ */ A.jsx(cc, {
            theme: r,
            window: u,
            children: /* @__PURE__ */ A.jsx(qn, {
              localeText: i,
              children: /* @__PURE__ */ A.jsx(ka, {
                children: /* @__PURE__ */ A.jsx(Va, {
                  children: /* @__PURE__ */ A.jsx(Ia.Provider, {
                    value: n,
                    children: /* @__PURE__ */ A.jsx(ja.Provider, {
                      value: o,
                      children: t
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Qn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Authentication methods.
   * @default null
   */
  authentication: y.shape({
    signIn: y.func.isRequired,
    signOut: y.func.isRequired
  }),
  /**
   * Branding options for the app.
   * @default null
   */
  branding: y.shape({
    homeUrl: y.string,
    logo: y.node,
    title: y.string
  }),
  /**
   * The content of the app provider.
   */
  children: y.node,
  /**
   * Locale text for components
   */
  localeText: y.object,
  /**
   * Navigation definition for the app. [Find out more](https://mui.com/toolpad/core/react-app-provider/#navigation).
   * @default []
   */
  navigation: y.arrayOf(y.oneOfType([y.shape({
    action: y.node,
    children: y.arrayOf(y.oneOfType([y.object, y.shape({
      kind: y.oneOf(["header"]).isRequired,
      title: y.string.isRequired
    }), y.shape({
      kind: y.oneOf(["divider"]).isRequired
    })]).isRequired),
    icon: y.node,
    kind: y.oneOf(["page"]),
    pattern: y.string,
    segment: y.string,
    title: y.string
  }), y.shape({
    kind: y.oneOf(["header"]).isRequired,
    title: y.string.isRequired
  }), y.shape({
    kind: y.oneOf(["divider"]).isRequired
  })]).isRequired),
  /**
   * Router implementation used inside Toolpad components.
   * @default null
   */
  router: y.shape({
    Link: y.func,
    navigate: y.func.isRequired,
    pathname: y.string.isRequired,
    searchParams: y.instanceOf(URLSearchParams).isRequired
  }),
  /**
   * Session info about the current user.
   * @default null
   */
  session: y.shape({
    user: y.shape({
      email: y.string,
      id: y.string,
      image: y.string,
      name: y.string
    })
  }),
  /**
   * [Theme or themes](https://mui.com/toolpad/core/react-app-provider/#theming) to be used by the app in light/dark mode. A [CSS variables theme](https://mui.com/material-ui/customization/css-theme-variables/overview/) is recommended.
   * @default createTheme()
   */
  theme: y.object,
  /**
   * The window where the application is rendered.
   * This is needed when rendering the app inside an iframe, for example.
   * @default window
   */
  window: y.object
});
function vc({ navigation: e = [], theme: t, window: r, children: n }) {
  return /* @__PURE__ */ A.jsx(Qn, { navigation: e, theme: t, window: r, children: n });
}
function Cc() {
  const e = uo();
  return {
    isMobile: st(e.breakpoints.down("sm")),
    isTablet: st(e.breakpoints.between("sm", "md")),
    isDesktop: st(e.breakpoints.up("md"))
  };
}
const Zn = {
  grey: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121"
  },
  blue: {
    50: "#E3F2FD",
    100: "#BBDEFB",
    200: "#90CAF9",
    300: "#64B5F6",
    400: "#42A5F5",
    500: "#1279A1",
    // Aligned with ContractFlow
    600: "#0F6A8E",
    700: "#0C5C7B",
    800: "#094D68",
    900: "#073F55"
  },
  turquoise: {
    50: "#E0F7FA",
    100: "#B2EBF2",
    200: "#80DEEA",
    300: "#4DD0E1",
    400: "#26C6DA",
    500: "#00ACC1",
    // Aligned with ContractFlow
    600: "#0097A7",
    700: "#00838F",
    800: "#006064",
    900: "#004D52"
  },
  orange: {
    50: "#FFF3E0",
    100: "#FFE0B2",
    200: "#FFCC80",
    300: "#FFB74D",
    400: "#FFA726",
    500: "#FF9800",
    600: "#FB8C00",
    700: "#F57C00",
    800: "#EF6C00",
    900: "#E65100"
  },
  red: {
    50: "#FFEBEE",
    100: "#FFCDD2",
    200: "#EF9A9A",
    300: "#E57373",
    400: "#EF5350",
    500: "#C62828",
    // Aligned with ContractFlow
    600: "#B71C1C",
    700: "#9C0F0F",
    800: "#820808",
    900: "#6A0303"
  },
  green: {
    50: "#E8F5E9",
    100: "#C8E6C9",
    200: "#A5D6A7",
    300: "#81C784",
    400: "#66BB6A",
    500: "#006B52",
    // Aligned with ContractFlow
    600: "#005A45",
    700: "#004D39",
    800: "#003F2E",
    900: "#002F22"
  },
  purple: {
    50: "#F3E5F5",
    100: "#E1BEE7",
    200: "#CE93D8",
    300: "#BA68C8",
    400: "#AB47BC",
    500: "#8E24AA",
    600: "#7B1FA2",
    700: "#6A1B9A",
    800: "#4A148C",
    900: "#38006B"
  }
}, dc = {
  mode: "light",
  primary: { main: "#00274D", contrastText: "#08eace" },
  // ContractFlow Primary
  secondary: { main: "#1279A1" },
  // ContractFlow Secondary
  background: {
    default: "#F5F7FA",
    paper: "#FFFFFF"
  },
  text: {
    primary: "#153A67",
    secondary: "#1279A1"
  },
  success: { main: "#006B52", contrastText: "#FFFFFF" },
  info: { main: "#1279A1", contrastText: "#FFFFFF" },
  warning: { main: "#F4C542", contrastText: "#4A2500" },
  error: { main: "#C62828", contrastText: "#FFFFFF" },
  extendedColors: Zn
}, mc = {
  mode: "dark",
  primary: { main: "#375A8A" },
  // Less saturated, deeper blue  
  secondary: { main: "#1B768F" },
  // Muted turquoise  
  background: {
    default: "#0D1214",
    // Deep charcoal, not fully black  
    paper: "#1E2227"
    // Slightly lighter for contrast  
  },
  text: {
    primary: "#B8C5D2",
    // Soft grayish-blue, easier on eyes  
    secondary: "#85A7C0"
    // Muted highlight  
  },
  success: { main: "#1B6F57", contrastText: "#1E2227" },
  // Deeper green  
  info: { main: "#3E97BA", contrastText: "#1E2227" },
  // Desaturated blue  
  warning: { main: "#B38A3E", contrastText: "#1E2227" },
  // Muted gold  
  error: { main: "#9A3B3B", contrastText: "#FFFFFF" },
  // Darker, softer red  
  extendedColors: Zn
}, pc = (e) => ({
  palette: e === "dark" ? mc : dc,
  typography: {
    fontFamily: "'Fira Sans', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    body1: { fontWeight: 400 }
  },
  shape: {
    borderRadius: 32
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: !0
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 400,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none"
            // No shadow on hover
          },
          transition: "transform 0.2s ease-out",
          "&:active": {
            transform: "scale(0.9)"
            // Shrink on click
          }
        },
        sizeSmall: {
          fontSize: "0.8rem"
        },
        sizeMedium: {
          fontSize: "1rem"
        },
        sizeLarge: {
          fontSize: "1.2rem"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        // root: { borderRadius: "12px" },
      }
    },
    MuiPaper: {
      styleOverrides: {
        // rounded: { borderRadius: "12px" },
      }
    },
    MuiTextField: {
      styleOverrides: {
        // root: { borderRadius: "8px" },
      }
    }
  }
}), hc = (e, t) => Ot({
  ...pc(e),
  // Correctly get the theme for the specified mode
  ...t
  // Merge user-provided overrides
}), Ec = ({
  theme: e,
  mode: t = "light",
  // Default to light mode
  children: r
}) => {
  const n = hc(t, e);
  return /* @__PURE__ */ A.jsxs(ur, { theme: n, children: [
    /* @__PURE__ */ A.jsx(_t, {}),
    r
  ] });
};
export {
  vc as AppProvider,
  Ec as ContractLabsThemeProvider,
  pc as theme,
  Cc as useBreakpoint
};
