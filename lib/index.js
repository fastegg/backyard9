import fe, { useState as b, useEffect as O } from "react";
import { Link as N, NavLink as B, Outlet as he, useParams as ge, useNavigate as pe, HashRouter as be, Routes as je, Route as w } from "react-router-dom";
import { Settings as J, X as Z, Menu as ve, ArrowRight as we, Target as Ne, Hammer as ye, Flag as ke, Loader2 as K, AlertCircle as Te, Calendar as P, Mail as Se, CheckCircle as Ee, Send as _e, ArrowLeft as Re, Database as Ce, Github as Pe } from "lucide-react";
import Oe from "react-markdown";
var R = { exports: {} }, k = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V;
function Ae() {
  if (V) return k;
  V = 1;
  var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function c(r, s, o) {
    var h = null;
    if (o !== void 0 && (h = "" + o), s.key !== void 0 && (h = "" + s.key), "key" in s) {
      o = {};
      for (var g in s)
        g !== "key" && (o[g] = s[g]);
    } else o = s;
    return s = o.ref, {
      $$typeof: a,
      type: r,
      key: h,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return k.Fragment = i, k.jsx = c, k.jsxs = c, k;
}
var T = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X;
function De() {
  return X || (X = 1, process.env.NODE_ENV !== "production" && (function() {
    function a(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === me ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case A:
          return "Fragment";
        case ae:
          return "Profiler";
        case se:
          return "StrictMode";
        case le:
          return "Suspense";
        case ie:
          return "SuspenseList";
        case de:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case E:
            return "Portal";
          case oe:
            return t.displayName || "Context";
          case re:
            return (t._context.displayName || "Context") + ".Consumer";
          case ne:
            var l = t.render;
            return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case ce:
            return l = t.displayName || null, l !== null ? l : a(t.type) || "Memo";
          case D:
            l = t._payload, t = t._init;
            try {
              return a(t(l));
            } catch {
            }
        }
      return null;
    }
    function i(t) {
      return "" + t;
    }
    function c(t) {
      try {
        i(t);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var m = l.error, x = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return m.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), i(t);
      }
    }
    function r(t) {
      if (t === A) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === D)
        return "<...>";
      try {
        var l = a(t);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var t = I.A;
      return t === null ? null : t.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function h(t) {
      if (Y.call(t, "key")) {
        var l = Object.getOwnPropertyDescriptor(t, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function g(t, l) {
      function m() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      m.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: m,
        configurable: !0
      });
    }
    function p() {
      var t = a(this.type);
      return q[t] || (q[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function d(t, l, m, x, _, z) {
      var u = m.ref;
      return t = {
        $$typeof: S,
        type: t,
        key: l,
        props: m,
        _owner: x
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function f(t, l, m, x, _, z) {
      var u = l.children;
      if (u !== void 0)
        if (x)
          if (xe(u)) {
            for (x = 0; x < u.length; x++)
              n(u[x]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else n(u);
      if (Y.call(l, "key")) {
        u = a(t);
        var y = Object.keys(l).filter(function(ue) {
          return ue !== "key";
        });
        x = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", U[u + x] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          u,
          y,
          u
        ), U[u + x] = !0);
      }
      if (u = null, m !== void 0 && (c(m), u = "" + m), h(l) && (c(l.key), u = "" + l.key), "key" in l) {
        m = {};
        for (var F in l)
          F !== "key" && (m[F] = l[F]);
      } else m = l;
      return u && g(
        m,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), d(
        t,
        u,
        m,
        s(),
        _,
        z
      );
    }
    function n(t) {
      v(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === D && (t._payload.status === "fulfilled" ? v(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function v(t) {
      return typeof t == "object" && t !== null && t.$$typeof === S;
    }
    var j = fe, S = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), se = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), re = Symbol.for("react.consumer"), oe = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), ce = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), de = Symbol.for("react.activity"), me = Symbol.for("react.client.reference"), I = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, xe = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var W, q = {}, G = j.react_stack_bottom_frame.bind(
      j,
      o
    )(), H = M(r(o)), U = {};
    T.Fragment = A, T.jsx = function(t, l, m) {
      var x = 1e4 > I.recentlyCreatedOwnerStacks++;
      return f(
        t,
        l,
        m,
        !1,
        x ? Error("react-stack-top-frame") : G,
        x ? M(r(t)) : H
      );
    }, T.jsxs = function(t, l, m) {
      var x = 1e4 > I.recentlyCreatedOwnerStacks++;
      return f(
        t,
        l,
        m,
        !0,
        x ? Error("react-stack-top-frame") : G,
        x ? M(r(t)) : H
      );
    };
  })()), T;
}
var Q;
function Ie() {
  return Q || (Q = 1, process.env.NODE_ENV === "production" ? R.exports = Ae() : R.exports = De()), R.exports;
}
var e = Ie();
const Me = ({ onOpenSettings: a }) => {
  const [i, c] = b(!1), r = [
    { name: "Home", path: "/" },
    { name: "Goals", path: "/goals" },
    { name: "Planning", path: "/planning" },
    { name: "Building", path: "/building" },
    { name: "Playing", path: "/playing" },
    { name: "Contact", path: "/contact" }
  ];
  return /* @__PURE__ */ e.jsxs("div", { className: "min-h-screen flex flex-col bg-stone-50 font-sans text-stone-800", children: [
    /* @__PURE__ */ e.jsxs("nav", { className: "sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm", children: [
      /* @__PURE__ */ e.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between h-16 items-center", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ e.jsxs(N, { to: "/", className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ e.jsx("span", { className: "w-8 h-8 bg-golf-600 rounded-full flex items-center justify-center text-white font-bold font-serif border-2 border-golf-800 shadow-inner", children: "9" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-xl font-bold font-serif text-golf-900 tracking-tight", children: "Backyard 9" })
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "hidden md:flex space-x-8 items-center", children: [
          r.map((s) => /* @__PURE__ */ e.jsx(
            B,
            {
              to: s.path,
              className: ({ isActive: o }) => `text-sm font-medium transition-colors duration-200 ${o ? "text-golf-700 border-b-2 border-golf-600" : "text-stone-600 hover:text-golf-600"}`,
              children: s.name
            },
            s.name
          )),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: a,
              className: "p-2 text-stone-400 hover:text-stone-600 transition-colors",
              title: "Configure GitHub Source",
              children: /* @__PURE__ */ e.jsx(J, { size: 18 })
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "md:hidden flex items-center", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: a,
              className: "p-2 mr-2 text-stone-400 hover:text-stone-600",
              children: /* @__PURE__ */ e.jsx(J, { size: 20 })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => c(!i),
              className: "p-2 rounded-md text-stone-600 hover:text-golf-600 hover:bg-stone-100 focus:outline-none",
              children: i ? /* @__PURE__ */ e.jsx(Z, { size: 24 }) : /* @__PURE__ */ e.jsx(ve, { size: 24 })
            }
          )
        ] })
      ] }) }),
      i && /* @__PURE__ */ e.jsx("div", { className: "md:hidden bg-white border-b border-stone-200", children: /* @__PURE__ */ e.jsx("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3", children: r.map((s) => /* @__PURE__ */ e.jsx(
        B,
        {
          to: s.path,
          onClick: () => c(!1),
          className: ({ isActive: o }) => `block px-3 py-2 rounded-md text-base font-medium ${o ? "bg-golf-50 text-golf-700" : "text-stone-600 hover:text-golf-600 hover:bg-stone-50"}`,
          children: s.name
        },
        s.name
      )) }) })
    ] }),
    /* @__PURE__ */ e.jsx("main", { className: "flex-grow", children: /* @__PURE__ */ e.jsx(he, {}) }),
    /* @__PURE__ */ e.jsx("footer", { className: "bg-stone-900 text-stone-400 py-8 border-t border-stone-800", children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "mb-4 md:mb-0 text-center md:text-left", children: [
        /* @__PURE__ */ e.jsx("span", { className: "font-serif text-lg text-stone-200", children: "Backyard 9" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-sm mt-1 text-stone-500 max-w-md", children: "Tee Time in a Tiny Space: A dad's guide to building the backyard golf simulator." })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex space-x-6 text-sm", children: [
        /* @__PURE__ */ e.jsx("a", { href: "mailto:fastegg@gmail.com", className: "hover:text-white transition-colors", children: "Contact" }),
        /* @__PURE__ */ e.jsxs("span", { className: "text-stone-600", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear()
        ] })
      ] })
    ] }) })
  ] });
}, ze = () => /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "relative bg-golf-900 text-white overflow-hidden", children: [
    /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ e.jsx("svg", { className: "h-full w-full", viewBox: "0 0 100 100", preserveAspectRatio: "none", children: /* @__PURE__ */ e.jsx("path", { d: "M0 100 C 20 0 50 0 100 100 Z", fill: "#22c55e" }) }) }),
    /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center", children: [
      /* @__PURE__ */ e.jsxs("h1", { className: "text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 drop-shadow-lg", children: [
        "Welcome to the ",
        /* @__PURE__ */ e.jsx("span", { className: "text-golf-400", children: "Backyard 9" })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-xl md:text-2xl text-stone-200 max-w-2xl mb-10 font-light", children: "Tee Time in a Tiny Space: A dad's guide to building the backyard golf simulator." }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ e.jsxs(
          N,
          {
            to: "/planning",
            className: "px-8 py-3 bg-golf-500 hover:bg-golf-600 text-white font-semibold rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center",
            children: [
              "See the Plan ",
              /* @__PURE__ */ e.jsx(we, { className: "ml-2 h-5 w-5" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            to: "/building",
            className: "px-8 py-3 bg-white hover:bg-stone-100 text-golf-900 font-semibold rounded-full shadow-lg transition-all flex items-center justify-center",
            children: "View Progress"
          }
        )
      ] })
    ] })
  ] }),
  /* @__PURE__ */ e.jsx("div", { className: "py-20 bg-stone-50", children: /* @__PURE__ */ e.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10", children: [
    /* @__PURE__ */ e.jsxs(N, { to: "/goals", className: "group p-8 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:border-golf-200 transition-all", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-12 h-12 bg-golf-100 rounded-xl flex items-center justify-center text-golf-600 mb-6 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ e.jsx(Ne, { size: 24 }) }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-golf-700", children: "The Goals" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-stone-600", children: "Understanding the vision. From drainage solutions to green speeds, see what we are aiming to achieve." })
    ] }),
    /* @__PURE__ */ e.jsxs(N, { to: "/building", className: "group p-8 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:border-golf-200 transition-all", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-12 h-12 bg-golf-100 rounded-xl flex items-center justify-center text-golf-600 mb-6 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ e.jsx(ye, { size: 24 }) }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-golf-700", children: "The Build" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-stone-600", children: "Blood, sweat, and bentgrass. Follow the construction progress with weekly updates and photos." })
    ] }),
    /* @__PURE__ */ e.jsxs(N, { to: "/playing", className: "group p-8 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:border-golf-200 transition-all", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-12 h-12 bg-golf-100 rounded-xl flex items-center justify-center text-golf-600 mb-6 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ e.jsx(ke, { size: 24 }) }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-xl font-serif font-bold text-stone-900 mb-3 group-hover:text-golf-700", children: "The Course" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-stone-600", children: "The final result. Course layout, scorecard, and local rules for the Backyard 9." })
    ] })
  ] }) }) }),
  /* @__PURE__ */ e.jsx("div", { className: "bg-white border-t border-stone-200 py-16", children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center", children: [
    /* @__PURE__ */ e.jsx("h2", { className: "text-3xl font-serif font-bold text-stone-900 mb-6", children: "Want to get in touch?" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-stone-600 mb-8", children: "Have questions about turf management, irrigation, or just want to say hi?" }),
    /* @__PURE__ */ e.jsx(
      N,
      {
        to: "/contact",
        className: "inline-block px-8 py-3 border-2 border-stone-900 text-stone-900 font-semibold rounded-full hover:bg-stone-900 hover:text-white transition-colors",
        children: "Contact Me"
      }
    )
  ] }) })
] }), Fe = [
  {
    slug: "project-kickoff",
    content: `
The journey begins today. We are turning the overgrown backyard into a pristine 9-hole short game loop.

## The Vision
Imagine stepping out your back door onto a perfectly manicured bentgrass tee box. That is the dream.

## Challenges
- **Soil Quality**: Very clay-heavy.
- **Space**: It's a tight squeeze.
- **Budget**: Shoestring.
    `,
    metadata: {
      title: "Project Kickoff: The Dream",
      date: "2023-09-01",
      category: "planning",
      excerpt: "Where we start turning a backyard into a golfer's paradise.",
      image: "https://images.unsplash.com/photo-1599423300746-b62505b6e9a6?q=80&w=1600&auto=format&fit=crop"
    }
  },
  {
    slug: "our-goals",
    content: `
Our primary goal is simple: Create a fun, challenging environment to practice the short game.

### Specific Targets
1. **Three distinct green complexes**.
2. **One pot bunker**.
3. **Low maintenance** design (as much as possible).

We want this to be a place where friends can come over, grab a wedge, and have a beer.
    `,
    metadata: {
      title: "The Goals of Backyard 9",
      date: "2023-09-02",
      category: "goals",
      excerpt: "What we are aiming for with this renovation.",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop"
    }
  },
  {
    slug: "grading-day",
    content: `
The excavator arrived at 7 AM. It was loud, messy, and absolutely glorious.

We moved about 50 yards of dirt today to shape the first green complex. It looks like a crater right now, but you can see the lines forming.
    `,
    metadata: {
      title: "Grading Day: Moving Earth",
      date: "2023-10-15",
      category: "building",
      excerpt: "Heavy machinery meets backyard turf.",
      image: "https://images.unsplash.com/photo-1590059530432-8495a8183188?q=80&w=1600&auto=format&fit=crop"
    }
  },
  {
    slug: "first-mow",
    content: `
The grass has grown in. It's time for the first cut.

I was nervous using the reel mower for the first time on the new sod, but it cut like butter. The stripes are faint, but they are there!
    `,
    metadata: {
      title: "The First Mow",
      date: "2023-11-20",
      category: "building",
      excerpt: "The grass is finally ready for a trim.",
      image: "https://images.unsplash.com/photo-1558350315-8aa00e8e4590?q=80&w=1600&auto=format&fit=crop"
    }
  },
  {
    slug: "final-round",
    content: `
It's done. The flags are in. The sun is setting.

I played the full 9-hole loop this evening. The bunker play is devilish, but the satisfaction of hitting a nippy 56-degree wedge onto your own green is unmatched.

## Final Stats
- **Cost**: Too much.
- **Time**: 6 Months.
- **Fun**: Infinite.
    `,
    metadata: {
      title: "Opening Day: The First Round",
      date: "2024-04-10",
      category: "playing",
      excerpt: "The project is complete. Time to play.",
      image: "https://images.unsplash.com/photo-1563607424608-4155b4a97491?q=80&w=1600&auto=format&fit=crop"
    }
  }
], L = "backyard9_posts_cache", $ = "backyard9_cache_time", Le = 1e3 * 60 * 15, $e = () => {
  const a = localStorage.getItem("backyard9_config");
  return a ? JSON.parse(a) : null;
}, Ye = (a) => {
  localStorage.setItem("backyard9_config", JSON.stringify(a)), localStorage.removeItem(L), localStorage.removeItem($);
}, We = (a, i) => {
  const c = /^---\n([\s\S]*?)\n---/, r = i.match(c);
  let s = {
    title: a.replace(".md", ""),
    date: (/* @__PURE__ */ new Date()).toISOString(),
    category: "general"
  }, o = i;
  if (r) {
    const h = r[1];
    o = i.replace(r[0], "").trim(), h.split(`
`).forEach((p) => {
      const [d, ...f] = p.split(":");
      if (d && f.length > 0) {
        const n = f.join(":").trim().replace(/^['"](.*)['"]$/, "$1");
        d.trim() === "title" && (s.title = n), d.trim() === "date" && (s.date = n), d.trim() === "category" && (s.category = n), d.trim() === "excerpt" && (s.excerpt = n), d.trim() === "author" && (s.author = n), d.trim() === "image" && (s.image = n);
      }
    });
  }
  return {
    slug: a.replace(".md", ""),
    content: o,
    metadata: s
  };
}, ee = async (a) => {
  if (!a)
    return console.log("No config provided, using demo data."), Promise.resolve(Fe);
  const i = localStorage.getItem(L), c = localStorage.getItem($);
  if (i && c && Date.now() - parseInt(c, 10) < Le)
    return JSON.parse(i);
  try {
    const r = `https://api.github.com/repos/${a.owner}/${a.repo}/contents/${a.path}`, s = await fetch(r);
    if (!s.ok)
      throw s.status === 404 ? new Error("Repository or path not found") : s.status === 403 ? new Error("API Rate limit exceeded or access denied") : new Error("Failed to fetch file list");
    const g = (await s.json()).filter((d) => d.name.endsWith(".md")).map(async (d) => {
      const n = await (await fetch(d.url)).json(), v = atob(n.content.replace(/\n/g, ""));
      return We(d.name, v);
    }), p = await Promise.all(g);
    return p.sort((d, f) => new Date(f.metadata.date).getTime() - new Date(d.metadata.date).getTime()), localStorage.setItem(L, JSON.stringify(p)), localStorage.setItem($, Date.now().toString()), p;
  } catch (r) {
    throw console.error("Error fetching posts:", r), r;
  }
}, te = ({ content: a }) => /* @__PURE__ */ e.jsx("div", { className: "prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-headings:text-golf-900 prose-a:text-golf-600 hover:prose-a:text-golf-700 prose-img:rounded-xl prose-img:shadow-md", children: /* @__PURE__ */ e.jsx(Oe, { children: a }) }), C = ({ title: a, category: i, mode: c, subtitle: r, config: s }) => {
  const [o, h] = b([]), [g, p] = b(!0), [d, f] = b(null);
  if (O(() => {
    let n = !0;
    return p(!0), f(null), ee(s).then((v) => {
      if (!n) return;
      const j = v.filter(
        (S) => {
          var E;
          return ((E = S.metadata.category) == null ? void 0 : E.toLowerCase()) === i.toLowerCase();
        }
      );
      h(j);
    }).catch((v) => {
      n && f(v.message || "Failed to load content.");
    }).finally(() => {
      n && p(!1);
    }), () => {
      n = !1;
    };
  }, [i, s]), g)
    return /* @__PURE__ */ e.jsxs("div", { className: "min-h-[50vh] flex flex-col items-center justify-center text-stone-400", children: [
      /* @__PURE__ */ e.jsx(K, { className: "animate-spin h-10 w-10 mb-4 text-golf-600" }),
      /* @__PURE__ */ e.jsx("p", { children: "Loading the greens..." })
    ] });
  if (d)
    return /* @__PURE__ */ e.jsxs("div", { className: "max-w-2xl mx-auto py-20 px-4 text-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-6", children: /* @__PURE__ */ e.jsx(Te, { size: 32 }) }),
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold text-stone-900 mb-2", children: "Oops! Handshake Problem." }),
      /* @__PURE__ */ e.jsx("p", { className: "text-stone-600 mb-6", children: d }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-stone-500", children: "Make sure your GitHub settings are correct in the config menu." })
    ] });
  if (o.length === 0)
    return /* @__PURE__ */ e.jsxs("div", { className: "max-w-7xl mx-auto px-4 py-20 text-center", children: [
      /* @__PURE__ */ e.jsx("h1", { className: "text-4xl font-serif font-bold text-stone-900 mb-4", children: a }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg text-stone-600 max-w-2xl mx-auto mb-10", children: r }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-10 bg-stone-100 rounded-xl inline-block", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-stone-500 font-medium", children: "No posts found in this section yet." }),
        /* @__PURE__ */ e.jsxs("p", { className: "text-xs text-stone-400 mt-2", children: [
          "Add a markdown file with `category: ",
          i,
          "` to your repo."
        ] })
      ] })
    ] });
  if (c === "single") {
    const n = o[0];
    return /* @__PURE__ */ e.jsxs("div", { className: "bg-white min-h-screen pb-20", children: [
      n.metadata.image && /* @__PURE__ */ e.jsxs("div", { className: "w-full h-64 md:h-96 bg-stone-200 overflow-hidden relative", children: [
        /* @__PURE__ */ e.jsx(
          "img",
          {
            src: n.metadata.image,
            alt: n.metadata.title,
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
        /* @__PURE__ */ e.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto", children: [
          /* @__PURE__ */ e.jsx("h1", { className: "text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-md mb-2", children: n.metadata.title }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-white/90 text-sm", children: [
            /* @__PURE__ */ e.jsx(P, { size: 16, className: "mr-2" }),
            new Date(n.metadata.date).toLocaleDateString(void 0, {
              year: "numeric",
              month: "long",
              day: "numeric"
            })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-12", children: [
        !n.metadata.image && /* @__PURE__ */ e.jsxs("div", { className: "mb-10 border-b border-stone-200 pb-8", children: [
          /* @__PURE__ */ e.jsx("h1", { className: "text-4xl md:text-5xl font-serif font-bold text-golf-900 mb-4", children: n.metadata.title }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-stone-500 text-sm", children: [
            /* @__PURE__ */ e.jsx(P, { size: 16, className: "mr-2" }),
            new Date(n.metadata.date).toLocaleDateString(void 0, {
              year: "numeric",
              month: "long",
              day: "numeric"
            })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(te, { content: n.content })
      ] })
    ] });
  }
  return /* @__PURE__ */ e.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mb-16 text-center", children: [
      /* @__PURE__ */ e.jsx("h1", { className: "text-4xl md:text-5xl font-serif font-bold text-golf-900 mb-6", children: a }),
      r && /* @__PURE__ */ e.jsx("p", { className: "text-xl text-stone-600 max-w-2xl mx-auto", children: r })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: o.map((n) => /* @__PURE__ */ e.jsxs(
      "article",
      {
        className: "bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300",
        children: [
          n.metadata.image && /* @__PURE__ */ e.jsx("div", { className: "h-48 overflow-hidden", children: /* @__PURE__ */ e.jsx(
            "img",
            {
              src: n.metadata.image,
              alt: n.metadata.title,
              className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ e.jsxs("div", { className: "p-6 flex flex-col flex-grow", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-xs text-stone-400 mb-3", children: [
              /* @__PURE__ */ e.jsx(P, { size: 14, className: "mr-1" }),
              new Date(n.metadata.date).toLocaleDateString()
            ] }),
            /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-serif font-bold text-stone-900 mb-3 leading-tight", children: n.metadata.title }),
            /* @__PURE__ */ e.jsx("p", { className: "text-stone-600 text-sm line-clamp-3 mb-4 flex-grow", children: n.metadata.excerpt || n.content.substring(0, 150) + "..." }),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                onClick: () => window.location.hash = `#/post/${i}/${n.slug}`,
                className: "text-golf-600 font-semibold text-sm hover:text-golf-700 mt-auto inline-flex items-center",
                children: [
                  "Read Article ",
                  /* @__PURE__ */ e.jsx("span", { className: "ml-1", children: "→" })
                ]
              }
            )
          ] })
        ]
      },
      n.slug
    )) })
  ] });
}, qe = () => {
  const [a, i] = b(!1), [c, r] = b({
    name: "",
    email: "",
    message: ""
  }), s = (o) => {
    o.preventDefault(), setTimeout(() => {
      i(!0);
    }, 800);
  };
  return /* @__PURE__ */ e.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24", children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ e.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-golf-100 text-golf-600 mb-6", children: /* @__PURE__ */ e.jsx(Se, { size: 32 }) }),
      /* @__PURE__ */ e.jsx("h1", { className: "text-4xl font-serif font-bold text-stone-900 mb-4", children: "Get in Touch" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg text-stone-600", children: "Questions about the build? Want to trade tips on bentgrass maintenance? Send me a message." })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "bg-white rounded-2xl shadow-xl p-8 border border-stone-100 relative overflow-hidden", children: a ? /* @__PURE__ */ e.jsxs("div", { className: "absolute inset-0 bg-white flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6", children: /* @__PURE__ */ e.jsx(Ee, { size: 40 }) }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-2xl font-serif font-bold text-stone-900 mb-2", children: "Message Sent!" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-stone-600 mb-8", children: "Thanks for reaching out. I'll get back to you as soon as I finish the next round." }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => {
            i(!1), r({ name: "", email: "", message: "" });
          },
          className: "px-6 py-2 bg-stone-100 text-stone-600 font-medium rounded-lg hover:bg-stone-200 transition-colors",
          children: "Send Another"
        }
      )
    ] }) : /* @__PURE__ */ e.jsxs("form", { onSubmit: s, className: "space-y-6", children: [
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { htmlFor: "name", className: "block text-sm font-semibold text-stone-700 mb-1", children: "Name" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            id: "name",
            required: !0,
            value: c.name,
            onChange: (o) => r({ ...c, name: o.target.value }),
            className: "w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-golf-500 focus:border-golf-500 outline-none transition-all",
            placeholder: "Your Name"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { htmlFor: "email", className: "block text-sm font-semibold text-stone-700 mb-1", children: "Email" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "email",
            id: "email",
            required: !0,
            value: c.email,
            onChange: (o) => r({ ...c, email: o.target.value }),
            className: "w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-golf-500 focus:border-golf-500 outline-none transition-all",
            placeholder: "you@example.com"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("label", { htmlFor: "message", className: "block text-sm font-semibold text-stone-700 mb-1", children: "Message" }),
        /* @__PURE__ */ e.jsx(
          "textarea",
          {
            id: "message",
            required: !0,
            rows: 5,
            value: c.message,
            onChange: (o) => r({ ...c, message: o.target.value }),
            className: "w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-golf-500 focus:border-golf-500 outline-none transition-all resize-none",
            placeholder: "What's on your mind?"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "submit",
          className: "w-full py-4 px-6 bg-golf-600 hover:bg-golf-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2",
          children: [
            /* @__PURE__ */ e.jsx("span", { children: "Send Message" }),
            /* @__PURE__ */ e.jsx(_e, { size: 18 })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("p", { className: "text-center text-xs text-stone-400 mt-4", children: [
        "Alternatively, email me directly at ",
        /* @__PURE__ */ e.jsx("a", { href: "mailto:fastegg@gmail.com", className: "text-golf-600 hover:underline", children: "fastegg@gmail.com" })
      ] })
    ] }) })
  ] }) });
}, Ge = ({ config: a }) => {
  const { slug: i } = ge(), c = pe(), [r, s] = b(null), [o, h] = b(!0);
  return O(() => {
    let g = !0;
    return h(!0), ee(a).then((p) => {
      if (!g) return;
      const d = p.find((f) => f.slug === i);
      s(d || null), h(!1);
    }), () => {
      g = !1;
    };
  }, [i, a]), o ? /* @__PURE__ */ e.jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ e.jsx(K, { className: "animate-spin text-golf-600 w-10 h-10" }) }) : r ? /* @__PURE__ */ e.jsxs("article", { className: "bg-white min-h-screen pb-20", children: [
    /* @__PURE__ */ e.jsx("div", { className: "bg-stone-50 border-b border-stone-200 mb-10", children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-12", children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => c(-1),
          className: "flex items-center text-stone-500 hover:text-golf-600 mb-6 text-sm font-medium transition-colors",
          children: [
            /* @__PURE__ */ e.jsx(Re, { size: 16, className: "mr-2" }),
            " Back to list"
          ]
        }
      ),
      /* @__PURE__ */ e.jsx("h1", { className: "text-3xl md:text-5xl font-serif font-bold text-golf-900 mb-4 leading-tight", children: r.metadata.title }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-stone-500 text-sm", children: [
        /* @__PURE__ */ e.jsx(P, { size: 16, className: "mr-2" }),
        new Date(r.metadata.date).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric"
        }),
        /* @__PURE__ */ e.jsx("span", { className: "mx-3 text-stone-300", children: "|" }),
        /* @__PURE__ */ e.jsx("span", { className: "uppercase tracking-wide text-xs font-semibold text-golf-600", children: r.metadata.category })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "max-w-3xl mx-auto px-4", children: [
      r.metadata.image && /* @__PURE__ */ e.jsx(
        "img",
        {
          src: r.metadata.image,
          alt: r.metadata.title,
          className: "w-full h-auto rounded-xl shadow-lg mb-10"
        }
      ),
      /* @__PURE__ */ e.jsx(te, { content: r.content })
    ] })
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "max-w-4xl mx-auto px-4 py-20 text-center", children: [
    /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold text-stone-900", children: "Post not found" }),
    /* @__PURE__ */ e.jsx("button", { onClick: () => c(-1), className: "mt-4 text-golf-600 hover:underline", children: "Go Back" })
  ] });
}, He = ({ isOpen: a, onClose: i, config: c, onSave: r }) => {
  const [s, o] = b(""), [h, g] = b(""), [p, d] = b("posts"), [f, n] = b(!0);
  if (O(() => {
    c ? (o(c.owner), g(c.repo), d(c.path || "posts"), n(!1)) : n(!0);
  }, [c, a]), !a) return null;
  const v = () => {
    r(f ? null : { owner: s, repo: h, path: p }), i();
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-[60] flex items-center justify-center p-4", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
        onClick: i
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-serif font-bold text-golf-900", children: "Data Source Settings" }),
        /* @__PURE__ */ e.jsx("button", { onClick: i, className: "text-stone-400 hover:text-stone-600", children: /* @__PURE__ */ e.jsx(Z, { size: 20 }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-6 space-y-6", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-sm text-stone-500", children: "Configure where the blog posts are loaded from. You can use the built-in demo data or connect a public GitHub repository." }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col space-y-3", children: [
          /* @__PURE__ */ e.jsxs("label", { className: "flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-colors hover:bg-stone-50", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "radio",
                name: "source",
                checked: f,
                onChange: () => n(!0),
                className: "text-golf-600 focus:ring-golf-500"
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ e.jsx(Ce, { size: 18, className: "text-stone-400" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium text-stone-700", children: "Use Demo Data" })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("label", { className: "flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-colors hover:bg-stone-50", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "radio",
                name: "source",
                checked: !f,
                onChange: () => n(!1),
                className: "text-golf-600 focus:ring-golf-500"
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ e.jsx(Pe, { size: 18, className: "text-stone-400" }),
              /* @__PURE__ */ e.jsx("span", { className: "font-medium text-stone-700", children: "Use GitHub Repository" })
            ] })
          ] })
        ] }),
        !f && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-300", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1", children: "GitHub Username" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: s,
                onChange: (j) => o(j.target.value),
                placeholder: "e.g., fastegg",
                className: "w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golf-500 focus:border-golf-500"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1", children: "Repository Name" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: h,
                onChange: (j) => g(j.target.value),
                placeholder: "e.g., backyard-golf-blog",
                className: "w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golf-500 focus:border-golf-500"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1", children: "Path to Posts" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: p,
                onChange: (j) => d(j.target.value),
                placeholder: "e.g., posts",
                className: "w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golf-500 focus:border-golf-500"
              }
            ),
            /* @__PURE__ */ e.jsx("p", { className: "text-xs text-stone-400 mt-1", children: "Directory containing your .md files" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "p-6 border-t border-stone-100 bg-stone-50 flex justify-end", children: /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: v,
          className: "px-6 py-2 bg-golf-600 text-white font-medium rounded-lg hover:bg-golf-700 transition-colors shadow-sm",
          children: "Save Changes"
        }
      ) })
    ] })
  ] });
}, Xe = () => {
  const [a, i] = b(null), [c, r] = b(!1);
  O(() => {
    const o = $e();
    i(o);
  }, []);
  const s = (o) => {
    i(o), o ? Ye(o) : localStorage.removeItem("backyard9_config");
  };
  return /* @__PURE__ */ e.jsxs(be, { children: [
    /* @__PURE__ */ e.jsx(je, { children: /* @__PURE__ */ e.jsxs(w, { path: "/", element: /* @__PURE__ */ e.jsx(Me, { onOpenSettings: () => r(!0) }), children: [
      /* @__PURE__ */ e.jsx(w, { index: !0, element: /* @__PURE__ */ e.jsx(ze, {}) }),
      /* @__PURE__ */ e.jsx(
        w,
        {
          path: "goals",
          element: /* @__PURE__ */ e.jsx(
            C,
            {
              title: "Project Goals",
              subtitle: "The vision, requirements, and dreams for the course.",
              category: "goals",
              mode: "single",
              config: a
            }
          )
        }
      ),
      /* @__PURE__ */ e.jsx(
        w,
        {
          path: "planning",
          element: /* @__PURE__ */ e.jsx(
            C,
            {
              title: "The Planning Phase",
              subtitle: "Blueprints, sketches, and logistical nightmares.",
              category: "planning",
              mode: "list",
              config: a
            }
          )
        }
      ),
      /* @__PURE__ */ e.jsx(
        w,
        {
          path: "building",
          element: /* @__PURE__ */ e.jsx(
            C,
            {
              title: "Under Construction",
              subtitle: "Moving dirt, shaping greens, and growing grass.",
              category: "building",
              mode: "list",
              config: a
            }
          )
        }
      ),
      /* @__PURE__ */ e.jsx(
        w,
        {
          path: "playing",
          element: /* @__PURE__ */ e.jsx(
            C,
            {
              title: "Playing the Course",
              subtitle: "The scorecard, rules, and course record.",
              category: "playing",
              mode: "single",
              config: a
            }
          )
        }
      ),
      /* @__PURE__ */ e.jsx(w, { path: "contact", element: /* @__PURE__ */ e.jsx(qe, {}) }),
      /* @__PURE__ */ e.jsx(w, { path: "post/:category/:slug", element: /* @__PURE__ */ e.jsx(Ge, { config: a }) })
    ] }) }),
    /* @__PURE__ */ e.jsx(
      He,
      {
        isOpen: c,
        onClose: () => r(!1),
        config: a,
        onSave: s
      }
    )
  ] });
};
export {
  Xe as default
};
