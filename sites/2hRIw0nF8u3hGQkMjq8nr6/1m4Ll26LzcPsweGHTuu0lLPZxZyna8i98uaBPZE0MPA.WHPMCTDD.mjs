import { a as He } from "./chunk-KOHE6TQ5.mjs";
import "./chunk-42U43NKG.mjs";
import {
  A as h,
  F as ct,
  H as Ve,
  J as B,
  M as lt,
  O as We,
  P as De,
  R as ft,
  S as mt,
  T as dt,
  U as pt,
  V as ht,
  W as te,
  Y as u,
  b as he,
  c as p,
  ca as ut,
  d as ze,
  f as Te,
  g as Ke,
  ga as H,
  ha as k,
  i as Je,
  ia as gt,
  j as Me,
  ja as bt,
  k as Ye,
  l as $e,
  m as et,
  n as C,
  o as tt,
  q as Ce,
  r as ee,
  s as se,
  t as rt,
  u as nt,
  v as at,
  w as it,
  x as ot,
  y as st,
  z as t,
} from "./chunk-TEVVH7QT.mjs";
import { c as _ } from "./chunk-ELYU6EKT.mjs";
var ce = (e) => e;
var ue = { ms: (e) => 1e3 * e, s: (e) => e / 1e3 };
function je(e, r) {
  return r ? e * (1e3 / r) : 0;
}
var xt = (e, r, a) =>
    (((1 - 3 * a + 3 * r) * e + (3 * a - 6 * r)) * e + 3 * r) * e,
  Lt = 1e-7,
  Pt = 12;
function Gt(e, r, a, n, i) {
  let s,
    c,
    b = 0;
  do (c = r + (a - r) / 2), (s = xt(c, n, i) - e), s > 0 ? (a = c) : (r = c);
  while (Math.abs(s) > Lt && ++b < Pt);
  return c;
}
function le(e, r, a, n) {
  if (e === r && a === n) return ce;
  let i = (s) => Gt(s, 0, 1, e, a);
  return (s) => (s === 0 || s === 1 ? s : xt(i(s), r, n));
}
var mn = {
  ease: le(0.25, 0.1, 0.25, 1),
  "ease-in": le(0.42, 0, 1, 1),
  "ease-in-out": le(0.42, 0, 0.58, 1),
  "ease-out": le(0, 0, 0.58, 1),
};
function yt(e, r) {
  var a = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      r.indexOf(n) < 0 &&
      (a[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      r.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (a[n[i]] = e[n[i]]);
  }
  return a;
}
var re = {};
Object.defineProperty(re, "__esModule", { value: !0 });
re.warning = function () {};
re.invariant = function () {};
var gn = re.__esModule,
  bn = re.warning,
  Xt = re.invariant;
var Kt = 5;
function ge(e, r, a) {
  let n = Math.max(r - Kt, 0);
  return je(a - e(n), r - n);
}
var ne = { stiffness: 100, damping: 10, mass: 1 },
  Jt = (e = ne.stiffness, r = ne.damping, a = ne.mass) =>
    r / (2 * Math.sqrt(e * a));
function Yt(e, r, a) {
  return (e < r && a >= r) || (e > r && a <= r);
}
var Ie = ({
    stiffness: e = ne.stiffness,
    damping: r = ne.damping,
    mass: a = ne.mass,
    from: n = 0,
    to: i = 1,
    velocity: s = 0,
    restSpeed: c = 2,
    restDistance: b = 0.5,
  } = {}) => {
    s = s ? ue.s(s) : 0;
    let d = { done: !1, hasReachedTarget: !1, current: n, target: i },
      o = i - n,
      f = Math.sqrt(e / a) / 1e3,
      l = Jt(e, r, a),
      N;
    if (l < 1) {
      let x = f * Math.sqrt(1 - l * l);
      N = (v) =>
        i -
        Math.exp(-l * f * v) *
          (((l * f * o - s) / x) * Math.sin(x * v) + o * Math.cos(x * v));
    } else N = (x) => i - Math.exp(-f * x) * (o + (f * o - s) * x);
    return (x) => {
      d.current = N(x);
      let v = x === 0 ? s : ge(N, x, d.current),
        T = Math.abs(v) <= c,
        y = Math.abs(i - d.current) <= b;
      return (d.done = T && y), (d.hasReachedTarget = Yt(n, i, d.current)), d;
    };
  },
  wt = ({
    from: e = 0,
    velocity: r = 0,
    power: a = 0.8,
    decay: n = 0.325,
    bounceDamping: i,
    bounceStiffness: s,
    changeTarget: c,
    min: b,
    max: d,
    restDistance: o = 0.5,
    restSpeed: f,
  }) => {
    n = ue.ms(n);
    let l = { hasReachedTarget: !1, done: !1, current: e, target: e },
      N = (m) => (b !== void 0 && m < b) || (d !== void 0 && m > d),
      x = (m) =>
        b === void 0
          ? d
          : d === void 0 || Math.abs(b - m) < Math.abs(d - m)
          ? b
          : d,
      v = a * r,
      T = e + v,
      y = c === void 0 ? T : c(T);
    (l.target = y), y !== T && (v = y - e);
    let M = (m) => -v * Math.exp(-m / n),
      S = (m) => y + M(m),
      j = (m) => {
        let R = M(m),
          G = S(m);
        (l.done = Math.abs(R) <= o), (l.current = l.done ? y : G);
      },
      E,
      V,
      A = (m) => {
        N(l.current) &&
          ((E = m),
          (V = Ie({
            from: l.current,
            to: x(l.current),
            velocity: ge(S, m, l.current),
            damping: i,
            stiffness: s,
            restDistance: o,
            restSpeed: f,
          })));
      };
    return (
      A(0),
      (m) => {
        let R = !1;
        return (
          !V && E === void 0 && ((R = !0), j(m), A(m)),
          E !== void 0 && m > E
            ? ((l.hasReachedTarget = !0), V(m - E))
            : ((l.hasReachedTarget = !1), !R && j(m), l)
        );
      }
    );
  },
  Ze = 10,
  $t = 1e4;
function vt(e) {
  let r,
    a = Ze,
    n = e(0),
    i = [n.current];
  for (; !n.done && a < $t; )
    (n = e(a)),
      i.push(n.done ? n.target : n.current),
      r === void 0 && n.hasReachedTarget && (r = a),
      (a += Ze);
  let s = a - Ze;
  return (
    i.length === 1 && i.push(n.current),
    { keyframes: i, duration: s / 1e3, overshootDuration: (r ?? s) / 1e3 }
  );
}
var er = ["", "X", "Y", "Z"],
  tr = ["translate", "scale", "rotate", "skew"];
var Bt = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (e) => e + "deg",
  },
  rr = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (e) => e + "px",
    },
    rotate: Bt,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: ce },
    skew: Bt,
  },
  nr = new Map(),
  ar = (e) => `--motion-${e}`,
  St = ["x", "y", "z"];
tr.forEach((e) => {
  er.forEach((r) => {
    St.push(e + r), nr.set(ar(e + r), rr[e]);
  });
});
var Pn = new Set(St);
var Nt = (e) => document.createElement("div").animate(e, { duration: 0.001 }),
  _t = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        Nt({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!Nt({ opacity: [0, 1] }).finished,
  },
  Oe = {},
  ir = {};
for (let e in _t) ir[e] = () => (Oe[e] === void 0 && (Oe[e] = _t[e]()), Oe[e]);
function Et(e, r) {
  var a;
  return (
    typeof e == "string"
      ? r
        ? (((a = r[e]) !== null && a !== void 0) ||
            (r[e] = document.querySelectorAll(e)),
          (e = r[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function zt(e) {
  let r = new WeakMap();
  return (a = {}) => {
    let n = new Map(),
      i = (c = 0, b = 100, d = 0, o = !1) => {
        let f = `${c}-${b}-${d}-${o}`;
        return (
          n.has(f) ||
            n.set(
              f,
              e(
                Object.assign(
                  {
                    from: c,
                    to: b,
                    velocity: d,
                    restSpeed: o ? 0.05 : 2,
                    restDistance: o ? 0.01 : 0.5,
                  },
                  a
                )
              )
            ),
          n.get(f)
        );
      },
      s = (c) => (r.has(c) || r.set(c, vt(c)), r.get(c));
    return {
      createAnimation: (c, b, d, o, f) => {
        var l, N;
        let x,
          v = c.length;
        if (d && v <= 2 && c.every(or)) {
          let y = c[v - 1],
            M = v === 1 ? null : c[0],
            S = 0,
            j = 0,
            E = f?.generator;
          if (E) {
            let { animation: m, generatorStartTime: R } = f,
              G = m?.startTime || R || 0,
              Q = m?.currentTime || performance.now() - G,
              L = E(Q).current;
            (j = (l = M) !== null && l !== void 0 ? l : L),
              (v === 1 || (v === 2 && c[0] === null)) &&
                (S = ge((de) => E(de).current, Q, L));
          } else j = (N = M) !== null && N !== void 0 ? N : parseFloat(b());
          let V = i(j, y, S, o?.includes("scale")),
            A = s(V);
          (x = Object.assign(Object.assign({}, A), { easing: "linear" })),
            f &&
              ((f.generator = V), (f.generatorStartTime = performance.now()));
        } else x = { easing: "ease", duration: s(i(0, 100)).overshootDuration };
        return x;
      },
    };
  };
}
var or = (e) => typeof e != "string",
  Gn = zt(Ie),
  Qn = zt(wt),
  sr = { any: 0, all: 1 };
function cr(e, r, { root: a, margin: n, amount: i = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let s = Et(e),
    c = new WeakMap(),
    b = (o) => {
      o.forEach((f) => {
        let l = c.get(f.target);
        if (f.isIntersecting !== !!l)
          if (f.isIntersecting) {
            let N = r(f);
            typeof N == "function" ? c.set(f.target, N) : d.unobserve(f.target);
          } else l && (l(f), c.delete(f.target));
      });
    },
    d = new IntersectionObserver(b, {
      root: a,
      rootMargin: n,
      threshold: typeof i == "number" ? i : sr[i],
    });
  return s.forEach((o) => d.observe(o)), () => d.disconnect();
}
var be = new WeakMap(),
  P;
function lr(e, r) {
  if (r) {
    let { inlineSize: a, blockSize: n } = r[0];
    return { width: a, height: n };
  }
  return e instanceof SVGElement && "getBBox" in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function fr({ target: e, contentRect: r, borderBoxSize: a }) {
  var n;
  (n = be.get(e)) === null ||
    n === void 0 ||
    n.forEach((i) => {
      i({
        target: e,
        contentSize: r,
        get size() {
          return lr(e, a);
        },
      });
    });
}
function mr(e) {
  e.forEach(fr);
}
function dr() {
  typeof ResizeObserver < "u" && (P = new ResizeObserver(mr));
}
function pr(e, r) {
  P || dr();
  let a = Et(e);
  return (
    a.forEach((n) => {
      let i = be.get(n);
      i || ((i = new Set()), be.set(n, i)), i.add(r), P?.observe(n);
    }),
    () => {
      a.forEach((n) => {
        let i = be.get(n);
        i?.delete(r), i?.size || P?.unobserve(n);
      });
    }
  );
}
var xe = new Set(),
  fe;
function hr() {
  (fe = () => {
    let e = { width: _.innerWidth, height: _.innerHeight },
      r = { target: _, size: e, contentSize: e };
    xe.forEach((a) => a(r));
  }),
    _.addEventListener("resize", fe);
}
function ur(e) {
  return (
    xe.add(e),
    fe || hr(),
    () => {
      xe.delete(e), !xe.size && fe && (fe = void 0);
    }
  );
}
function Tt(e, r) {
  return typeof e == "function" ? ur(e) : pr(e, r);
}
function Ae(e, r, a) {
  e.dispatchEvent(new CustomEvent(r, { detail: { originalEvent: a } }));
}
function Rt(e, r, a) {
  e.dispatchEvent(new CustomEvent(r, { detail: { originalEntry: a } }));
}
var gr = {
    isActive: (e) => !!e.inView,
    subscribe: (e, { enable: r, disable: a }, { inViewOptions: n = {} }) => {
      let { once: i } = n,
        s = yt(n, ["once"]);
      return cr(
        e,
        (c) => {
          if ((r(), Rt(e, "viewenter", c), !i))
            return (b) => {
              a(), Rt(e, "viewleave", b);
            };
        },
        s
      );
    },
  },
  kt = (e, r, a) => (n) => {
    (!n.pointerType || n.pointerType === "mouse") && (a(), Ae(e, r, n));
  },
  br = {
    isActive: (e) => !!e.hover,
    subscribe: (e, { enable: r, disable: a }) => {
      let n = kt(e, "hoverstart", r),
        i = kt(e, "hoverend", a);
      return (
        e.addEventListener("pointerenter", n),
        e.addEventListener("pointerleave", i),
        () => {
          e.removeEventListener("pointerenter", n),
            e.removeEventListener("pointerleave", i);
        }
      );
    },
  },
  xr = {
    isActive: (e) => !!e.press,
    subscribe: (e, { enable: r, disable: a }) => {
      let n = (s) => {
          a(), Ae(e, "pressend", s), _.removeEventListener("pointerup", n);
        },
        i = (s) => {
          r(), Ae(e, "pressstart", s), _.addEventListener("pointerup", n);
        };
      return (
        e.addEventListener("pointerdown", i),
        () => {
          e.removeEventListener("pointerdown", i),
            _.removeEventListener("pointerup", n);
        }
      );
    },
  },
  yr = { inView: gr, hover: br, press: xr },
  qn = ["initial", "animate", ...Object.keys(yr), "exit"];
var wr = 100,
  vr = {
    left: (e) => `translateX(-${e}px)`,
    right: (e) => `translateX(${e}px)`,
    top: (e) => `translateY(-${e}px)`,
    bottom: (e) => `translateY(${e}px)`,
  },
  Le =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function";
function ae(e) {
  let {
      slots: r,
      gap: a,
      padding: n,
      paddingPerSide: i,
      paddingTop: s,
      paddingRight: c,
      paddingBottom: b,
      paddingLeft: d,
      speed: o,
      hoverFactor: f,
      direction: l,
      alignment: N,
      sizingOptions: x,
      fadeOptions: v,
      style: T,
    } = e,
    {
      fadeContent: y,
      overflow: M,
      fadeWidth: S,
      fadeInset: j,
      fadeAlpha: E,
    } = v,
    { widthType: V, heightType: A } = x,
    m = i ? `${s}px ${c}px ${b}px ${d}px` : `${n}px`,
    R = Ve.current() === Ve.canvas,
    G = he.count(r),
    Q = G > 0;
  l === !0 && (l = "left");
  let L = l === "left" || l === "right",
    de = rt(0),
    ve = vr[l],
    Dt = nt(de, ve),
    J = C(null),
    W = et(() => [Te(), Te()], []),
    [q, Ht] = tt({ parent: null, children: null }),
    Ge = [],
    Be = [],
    oe = 0,
    Ne = 0;
  R && ((oe = G ? Math.floor(10 / G) : 0), (Ne = 1)),
    !R &&
      Q &&
      q.parent &&
      ((oe = Math.round((q.parent / q.children) * 2) + 1),
      (oe = Math.min(oe, wr)),
      (Ne = 1));
  let Qe = Je(() => {
      if (Q && J.current) {
        let w = L ? J.current.offsetWidth : J.current.offsetHeight,
          g = W[0].current
            ? L
              ? W[0].current.offsetLeft
              : W[0].current.offsetTop
            : 0,
          z =
            (W[1].current
              ? L
                ? W[1].current.offsetLeft + W[1].current.offsetWidth
                : W[1].current.offsetTop + W[1].current.offsetHeight
              : 0) -
            g +
            a;
        Ht({ parent: w, children: z });
      }
    }, []),
    qe = R ? { contentVisibility: "auto" } : {};
  if (Q) {
    if (!R) {
      let w = C(!0);
      Me(
        () => (
          Ce.read(Qe),
          Tt(J.current, ({ contentSize: g }) => {
            !w.current && (g.width || g.height) && Ce.read(Qe),
              (w.current = !1);
          })
        ),
        []
      );
    }
    Ge = he.map(r, (w, g) => {
      var Z, z, F, U;
      let X;
      g === 0 && (X = W[0]), g === r.length - 1 && (X = W[1]);
      let $ = {
        width: V
          ? (Z = w.props) === null || Z === void 0
            ? void 0
            : Z.width
          : "100%",
        height: A
          ? (z = w.props) === null || z === void 0
            ? void 0
            : z.height
          : "100%",
      };
      return t(se, {
        inherit: "id",
        children: t("li", {
          ref: X,
          style: $,
          children: ze(
            w,
            {
              style: {
                ...((F = w.props) === null || F === void 0 ? void 0 : F.style),
                ...$,
                flexShrink: 0,
                ...qe,
              },
              layoutId: w.props.layoutId
                ? w.props.layoutId + "-original-" + g
                : void 0,
            },
            (U = w.props) === null || U === void 0 ? void 0 : U.children
          ),
        }),
      });
    });
  }
  if (!R)
    for (let w = 0; w < oe; w++)
      Be = [
        ...Be,
        ...he.map(r, (g, Z) => {
          var z, F, U, X, $, Ee;
          let At = {
            width: V
              ? (z = g.props) === null || z === void 0
                ? void 0
                : z.width
              : "100%",
            height: A
              ? (F = g.props) === null || F === void 0
                ? void 0
                : F.height
              : "100%",
          };
          return t(
            se,
            {
              inherit: "id",
              children: t(
                "li",
                {
                  style: At,
                  "aria-hidden": !0,
                  children: ze(
                    g,
                    {
                      key: w + " " + Z,
                      style: {
                        ...((U = g.props) === null || U === void 0
                          ? void 0
                          : U.style),
                        width: V
                          ? (X = g.props) === null || X === void 0
                            ? void 0
                            : X.width
                          : "100%",
                        height: A
                          ? ($ = g.props) === null || $ === void 0
                            ? void 0
                            : $.height
                          : "100%",
                        flexShrink: 0,
                        ...qe,
                      },
                      layoutId: g.props.layoutId
                        ? g.props.layoutId + "-dupe-" + w
                        : void 0,
                    },
                    (Ee = g.props) === null || Ee === void 0
                      ? void 0
                      : Ee.children
                  ),
                },
                w + "li" + Z
              ),
            },
            w + "lg" + Z
          );
        }),
      ];
  let D = q.children + q.children * Math.round(q.parent / q.children),
    _e = C(null),
    Re = C(null),
    pe = C(0),
    ke = C(!1),
    Fe = it(),
    Ue = C(null),
    Y = C(null);
  if (!R) {
    let w = st(J);
    Le
      ? Me(() => {
          if (!(Fe || !D || !o))
            return (
              (Y.current = Ue.current.animate(
                { transform: [ve(0), ve(D)] },
                {
                  duration: (Math.abs(D) / o) * 1e3,
                  iterations: 1 / 0,
                  easing: "linear",
                }
              )),
              () => Y.current.cancel()
            );
        }, [f, D, o])
      : at((g) => {
          if (!D || Fe || Le) return;
          _e.current === null && (_e.current = g), (g = g - _e.current);
          let z = (Re.current === null ? 0 : g - Re.current) * (o / 1e3);
          ke.current && (z *= f),
            (pe.current += z),
            (pe.current = ot(0, D, pe.current)),
            (Re.current = g),
            w && de.set(pe.current);
        });
  }
  let jt = L ? "to right" : "to bottom",
    Xe = S / 2,
    Zt = 100 - S / 2,
    It = kr(j, 0, Xe),
    Ot = 100 - j,
    Se = `linear-gradient(${jt}, rgba(0, 0, 0, ${E}) ${It}%, rgba(0, 0, 0, 1) ${Xe}%, rgba(0, 0, 0, 1) ${Zt}%, rgba(0, 0, 0, ${E}) ${Ot}%)`;
  return Q
    ? t("section", {
        style: {
          ...Mt,
          opacity: Ne,
          WebkitMaskImage: y ? Se : void 0,
          MozMaskImage: y ? Se : void 0,
          maskImage: y ? Se : void 0,
          overflow: M ? "visible" : "hidden",
          padding: m,
        },
        ref: J,
        children: h(ee.ul, {
          ref: Ue,
          style: {
            ...Mt,
            gap: a,
            top: l === "bottom" && Ct(D) ? -D : void 0,
            left: l === "right" && Ct(D) ? -D : void 0,
            placeItems: N,
            position: "relative",
            flexDirection: L ? "row" : "column",
            ...T,
            transform: Le ? void 0 : Dt,
            willChange: R ? "auto" : "transform",
          },
          onMouseEnter: () => {
            (ke.current = !0), Y.current && (Y.current.playbackRate = f);
          },
          onMouseLeave: () => {
            (ke.current = !1), Y.current && (Y.current.playbackRate = 1);
          },
          children: [Ge, Be],
        }),
      })
    : h("section", {
        style: Br,
        children: [
          t("div", { style: Nr, children: "\u2728" }),
          t("p", { style: _r, children: "Connect to Content" }),
          t("p", {
            style: Rr,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
ae.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
lt(ae, {
  slots: {
    type: B.Array,
    title: "Children",
    control: { type: B.ComponentInstance },
  },
  speed: {
    type: B.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: B.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: B.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: B.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: B.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: B.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: B.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: B.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: B.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: B.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: B.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(e) {
          return e.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: B.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeInset: {
        type: B.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: B.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: B.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var Mt = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  Br = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  Nr = { fontSize: 32, marginBottom: 10 },
  _r = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  Rr = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  kr = (e, r, a) => Math.min(Math.max(e, r), a),
  Ct = (e) => typeof e == "number" && !isNaN(e);
var K = De(H),
  Sr = bt(ae),
  Er = De(ee.div);
var zr = {
    KBb1ozNkr: "(min-width: 1920px)",
    QU5MBL1nc: "(max-width: 1199px)",
    WQLkyLRf1: "(min-width: 1200px) and (max-width: 1439px)",
    ZHg78CED3: "(min-width: 1440px) and (max-width: 1919px)",
  },
  Tr = () => typeof document < "u",
  Vt = "framer-6Bb5N",
  Mr = {
    KBb1ozNkr: "framer-v-1m7kzrv",
    QU5MBL1nc: "framer-v-149m041",
    WQLkyLRf1: "framer-v-72rtr7",
    ZHg78CED3: "framer-v-1mxle79",
  },
  Cr = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Vr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.98,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Wr = { damping: 30, delay: 0, mass: 1, stiffness: 222, type: "spring" },
  Dr = {
    opacity: 1,
    rotate: -2,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Wr,
    x: -6,
  },
  Hr = { damping: 17, delay: 0, mass: 1, stiffness: 237, type: "spring" },
  me = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    transition: Hr,
  },
  jr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 150,
    y: 0,
  },
  ie = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Zr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ie,
    x: 150,
    y: 0,
  },
  Pe = (e, r) => `perspective(1200px) ${r}`,
  Ir = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: -150,
    y: 0,
  },
  Or = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ie,
    x: -150,
    y: 0,
  },
  Ar = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Lr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Wt = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: "tween" },
  Pr = {
    opacity: 1,
    rotate: -5,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 14,
    y: 5,
  },
  Gr = {
    opacity: 1,
    rotate: -5,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: -8,
    y: 7,
  },
  Qr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.5,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 50,
  },
  qr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.5,
    skewX: 0,
    skewY: 0,
    transition: ie,
    x: 0,
    y: 50,
  },
  Fr = { delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Ur = {
    opacity: 1,
    rotate: 2,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 7,
    y: 6,
  },
  ye = He(),
  Xr = {
    1440: "ZHg78CED3",
    1920: "KBb1ozNkr",
    Desktop: "WQLkyLRf1",
    Phone: "QU5MBL1nc",
  },
  Kr = ({ height: e, id: r, width: a, ...n }) => {
    var i, s;
    return {
      ...n,
      variant:
        (s = (i = Xr[n.variant]) !== null && i !== void 0 ? i : n.variant) !==
          null && s !== void 0
          ? s
          : "WQLkyLRf1",
    };
  },
  Jr = Ke(function (e, r) {
    let { activeLocale: a, setLocale: n } = ct(),
      { style: i, className: s, layoutId: c, variant: b, ...d } = Kr(e);
    $e(() => {
      let y = He(void 0, a);
      if (((document.title = y.title || ""), y.viewport)) {
        var M;
        (M = document.querySelector('meta[name="viewport"]')) === null ||
          M === void 0 ||
          M.setAttribute("content", y.viewport);
      }
      if (y.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((S) => S.startsWith("framer-body-"))
            .map((S) => document.body.classList.remove(S)),
          document.body.classList.add(`${y.bodyClassName}-framer-6Bb5N`),
          () => {
            document.body.classList.remove(`${y.bodyClassName}-framer-6Bb5N`);
          }
        );
    }, [void 0, a]);
    let [o, f] = ut(b, zr, !1),
      l = void 0,
      N = C(null),
      x = () => (o === "QU5MBL1nc" ? !Tr() : !0),
      v = Ye(),
      T = [];
    return (
      pt({}),
      t(ht.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: Mr },
        children: h(se, {
          id: c ?? v,
          children: [
            h(ee.div, {
              ...d,
              className: We(Vt, ...T, "framer-72rtr7", s),
              ref: r ?? N,
              style: { ...i },
              children: [
                t("div", {
                  className: "framer-1oadqul",
                  children: t("div", {
                    className: "framer-yqamzl",
                    children: h("div", {
                      className: "framer-122dxem",
                      children: [
                        t(u, {
                          breakpoint: o,
                          overrides: {
                            KBb1ozNkr: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 513,
                                intrinsicWidth: 729,
                                pixelHeight: 1026,
                                pixelWidth: 1458,
                                sizes: "703.7965px",
                                src: "images/BXblNrVubo0jgE10c56ugVF90.png?scale-down-to=1024",
                                srcSet:
                                  "images/BXblNrVubo0jgE10c56ugVF90.png?scale-down-to=512 512w,images/BXblNrVubo0jgE10c56ugVF90.png?scale-down-to=1024 1024w,images/BXblNrVubo0jgE10c56ugVF90.png 1458w",
                              },
                            },
                            QU5MBL1nc: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 513,
                                intrinsicWidth: 729,
                                pixelHeight: 1026,
                                pixelWidth: 1458,
                                sizes: "292px",
                                src: "https://framerusercontent.com/images/BXblNrVubo0jgE10c56ugVF90.png?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/BXblNrVubo0jgE10c56ugVF90.png?scale-down-to=512 512w,https://framerusercontent.com/images/BXblNrVubo0jgE10c56ugVF90.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/BXblNrVubo0jgE10c56ugVF90.png 1458w",
                              },
                            },
                          },
                          children: t(K, {
                            __framer__loop: Vr,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: "mirror",
                            __framer__loopTransition: Cr,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 513,
                              intrinsicWidth: 729,
                              pixelHeight: 1026,
                              pixelWidth: 1458,
                              sizes: "412px",
                              src: "https://framerusercontent.com/images/BXblNrVubo0jgE10c56ugVF90.png?scale-down-to=1024",
                              srcSet:
                                "https://framerusercontent.com/images/BXblNrVubo0jgE10c56ugVF90.png?scale-down-to=512 512w,https://framerusercontent.com/images/BXblNrVubo0jgE10c56ugVF90.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/BXblNrVubo0jgE10c56ugVF90.png 1458w",
                            },
                            className: "framer-1dgcq1e",
                            "data-framer-name": "b_11",
                            name: "b_11",
                          }),
                        }),
                        h("div", {
                          className: "framer-1jdw3dx",
                          children: [
                            t(u, {
                              breakpoint: o,
                              overrides: {
                                KBb1ozNkr: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 729,
                                    intrinsicWidth: 580,
                                    pixelHeight: 1458,
                                    pixelWidth: 1160,
                                    sizes: "554.5235px",
                                    src: "/images/4RzGa9cGG4QIdMZ39DpRY7KcShw.png?scale-down-to=1024",
                                    srcSet:
                                      "/images/4RzGa9cGG4QIdMZ39DpRY7KcShw.png?scale-down-to=1024 814w,/images/4RzGa9cGG4QIdMZ39DpRY7KcShw.png 1160w",
                                  },
                                },
                                QU5MBL1nc: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 729,
                                    intrinsicWidth: 580,
                                    pixelHeight: 1458,
                                    pixelWidth: 1160,
                                    sizes: "218px",
                                    src: "/images/4RzGa9cGG4QIdMZ39DpRY7KcShw.png?scale-down-to=1024",
                                    srcSet:
                                      "/images/4RzGa9cGG4QIdMZ39DpRY7KcShw.png?scale-down-to=1024 814w,/images/4RzGa9cGG4QIdMZ39DpRY7KcShw.png 1160w",
                                  },
                                },
                              },
                              children: t(H, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 729,
                                  intrinsicWidth: 580,
                                  pixelHeight: 1458,
                                  pixelWidth: 1160,
                                  sizes: "325px",
                                  src: "/images/4RzGa9cGG4QIdMZ39DpRY7KcShw.png?scale-down-to=1024",
                                  srcSet:
                                    "/images/4RzGa9cGG4QIdMZ39DpRY7KcShw.png?scale-down-to=1024 814w,/images/4RzGa9cGG4QIdMZ39DpRY7KcShw.png 1160w",
                                },
                                className: "framer-1k0lhup",
                                "data-framer-name": "b_1",
                                name: "b_1",
                                whileHover: Dr,
                              }),
                            }),
                            h("div", {
                              className: "framer-1qwajfp",
                              children: [
                                t(te, {
                                  href: "https://t.me/",
                                  children: t(u, {
                                    breakpoint: o,
                                    overrides: {
                                      KBb1ozNkr: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 358.5,
                                          intrinsicWidth: 379.5,
                                          pixelHeight: 717,
                                          pixelWidth: 759,
                                          sizes: "136.7863px",
                                          src: "https://framerusercontent.com/images/5VVQMfSqQneBJsabsipwashqDYg.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/5VVQMfSqQneBJsabsipwashqDYg.png?scale-down-to=512 512w,https://framerusercontent.com/images/5VVQMfSqQneBJsabsipwashqDYg.png 759w",
                                        },
                                      },
                                      QU5MBL1nc: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 358.5,
                                          intrinsicWidth: 379.5,
                                          pixelHeight: 717,
                                          pixelWidth: 759,
                                          src: "https://framerusercontent.com/images/5VVQMfSqQneBJsabsipwashqDYg.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/5VVQMfSqQneBJsabsipwashqDYg.png?scale-down-to=512 512w,https://framerusercontent.com/images/5VVQMfSqQneBJsabsipwashqDYg.png 759w",
                                        },
                                      },
                                    },
                                    children: t(H, {
                                      as: "a",
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 358.5,
                                        intrinsicWidth: 379.5,
                                        pixelHeight: 717,
                                        pixelWidth: 759,
                                        sizes: "80px",
                                        src: "https://framerusercontent.com/images/5VVQMfSqQneBJsabsipwashqDYg.png?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/5VVQMfSqQneBJsabsipwashqDYg.png?scale-down-to=512 512w,https://framerusercontent.com/images/5VVQMfSqQneBJsabsipwashqDYg.png 759w",
                                      },
                                      className: "framer-8bot3j framer-lux5qc",
                                      "data-framer-name": "t_1",
                                      name: "t_1",
                                      whileHover: me,
                                    }),
                                  }),
                                }),
                                t(te, {
                                  href: "https://www.dextools.io/app/en/ether/pair-explorer/0x0123456789",
                                  children: t(u, {
                                    breakpoint: o,
                                    overrides: {
                                      QU5MBL1nc: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 579,
                                          intrinsicWidth: 588,
                                          pixelHeight: 1158,
                                          pixelWidth: 1176,
                                          sizes: "48px",
                                          src: "https://framerusercontent.com/images/ZD8hgEuiTAPXJFnZxSAinSISQQ.png?scale-down-to=1024",
                                          srcSet:
                                            "https://framerusercontent.com/images/ZD8hgEuiTAPXJFnZxSAinSISQQ.png?scale-down-to=512 512w,https://framerusercontent.com/images/ZD8hgEuiTAPXJFnZxSAinSISQQ.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ZD8hgEuiTAPXJFnZxSAinSISQQ.png 1176w",
                                        },
                                      },
                                    },
                                    children: t(H, {
                                      as: "a",
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 579,
                                        intrinsicWidth: 588,
                                        pixelHeight: 1158,
                                        pixelWidth: 1176,
                                        src: "https://framerusercontent.com/images/ZD8hgEuiTAPXJFnZxSAinSISQQ.png?scale-down-to=1024",
                                        srcSet:
                                          "https://framerusercontent.com/images/ZD8hgEuiTAPXJFnZxSAinSISQQ.png?scale-down-to=512 512w,https://framerusercontent.com/images/ZD8hgEuiTAPXJFnZxSAinSISQQ.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ZD8hgEuiTAPXJFnZxSAinSISQQ.png 1176w",
                                      },
                                      className: "framer-1gvxraq framer-lux5qc",
                                      "data-framer-name": "d_1",
                                      name: "d_1",
                                      whileHover: me,
                                    }),
                                  }),
                                }),
                                t(te, {
                                  href: "https://twitter.com/",
                                  children: t(u, {
                                    breakpoint: o,
                                    overrides: {
                                      KBb1ozNkr: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 358.5,
                                          intrinsicWidth: 365,
                                          pixelHeight: 717,
                                          pixelWidth: 730,
                                          sizes: "136.7863px",
                                          src: "https://framerusercontent.com/images/WZWwkHGmmIn7JPcrNeqn4XdKJU.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/WZWwkHGmmIn7JPcrNeqn4XdKJU.png?scale-down-to=512 512w,https://framerusercontent.com/images/WZWwkHGmmIn7JPcrNeqn4XdKJU.png 730w",
                                        },
                                      },
                                      QU5MBL1nc: {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 358.5,
                                          intrinsicWidth: 365,
                                          pixelHeight: 717,
                                          pixelWidth: 730,
                                          src: "https://framerusercontent.com/images/WZWwkHGmmIn7JPcrNeqn4XdKJU.png?scale-down-to=512",
                                          srcSet:
                                            "https://framerusercontent.com/images/WZWwkHGmmIn7JPcrNeqn4XdKJU.png?scale-down-to=512 512w,https://framerusercontent.com/images/WZWwkHGmmIn7JPcrNeqn4XdKJU.png 730w",
                                        },
                                      },
                                    },
                                    children: t(H, {
                                      as: "a",
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 358.5,
                                        intrinsicWidth: 365,
                                        pixelHeight: 717,
                                        pixelWidth: 730,
                                        sizes: "80px",
                                        src: "https://framerusercontent.com/images/WZWwkHGmmIn7JPcrNeqn4XdKJU.png?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/WZWwkHGmmIn7JPcrNeqn4XdKJU.png?scale-down-to=512 512w,https://framerusercontent.com/images/WZWwkHGmmIn7JPcrNeqn4XdKJU.png 730w",
                                      },
                                      className: "framer-795k1b framer-lux5qc",
                                      "data-framer-name": "x_1",
                                      name: "x_1",
                                      whileHover: me,
                                    }),
                                  }),
                                }),
                                // t(te, {
                                //   href: "https://warpcast.com/bubcat",
                                //   children: t(u, {
                                //     breakpoint: o,
                                //     overrides: {
                                //       QU5MBL1nc: {
                                //         background: {
                                //           alt: "",
                                //           fit: "fill",
                                //           intrinsicHeight: 1250,
                                //           intrinsicWidth: 1250,
                                //           pixelHeight: 2500,
                                //           pixelWidth: 2500,
                                //           sizes: "47px",
                                //           src: "https://framerusercontent.com/images/FucVWnTbi0B6uyKsraSs8Rz6XTw.png?scale-down-to=2048",
                                //           srcSet:
                                //             "https://framerusercontent.com/images/FucVWnTbi0B6uyKsraSs8Rz6XTw.png?scale-down-to=512 512w,https://framerusercontent.com/images/FucVWnTbi0B6uyKsraSs8Rz6XTw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/FucVWnTbi0B6uyKsraSs8Rz6XTw.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/FucVWnTbi0B6uyKsraSs8Rz6XTw.png 2500w",
                                //         },
                                //       },
                                //     },
                                //     children: t(H, {
                                //       as: "a",
                                //       background: {
                                //         alt: "",
                                //         fit: "fill",
                                //         intrinsicHeight: 1250,
                                //         intrinsicWidth: 1250,
                                //         pixelHeight: 2500,
                                //         pixelWidth: 2500,
                                //         sizes: "79px",
                                //         src: "https://framerusercontent.com/images/FucVWnTbi0B6uyKsraSs8Rz6XTw.png?scale-down-to=2048",
                                //         srcSet:
                                //           "https://framerusercontent.com/images/FucVWnTbi0B6uyKsraSs8Rz6XTw.png?scale-down-to=512 512w,https://framerusercontent.com/images/FucVWnTbi0B6uyKsraSs8Rz6XTw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/FucVWnTbi0B6uyKsraSs8Rz6XTw.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/FucVWnTbi0B6uyKsraSs8Rz6XTw.png 2500w",
                                //       },
                                //       className: "framer-1c3mkyi framer-lux5qc",
                                //       "data-framer-name": "Warcast",
                                //       name: "Warcast",
                                //       whileHover: me,
                                //     }),
                                //   }),
                                // }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                t("div", {
                  className: "framer-1cbhdy2",
                  "data-border": !0,
                  children: t(ft, {
                    children: t(mt, {
                      className: "framer-ynahi5-container",
                      children: t(ae, {
                        alignment: "center",
                        direction: "left",
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !0,
                          fadeInset: 0,
                          fadeWidth: 25,
                          overflow: !1,
                        },
                        gap: 50,
                        height: "100%",
                        hoverFactor: 1,
                        id: "Ku5MThLWj",
                        layoutId: "Ku5MThLWj",
                        padding: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingPerSide: !1,
                        paddingRight: 10,
                        paddingTop: 10,
                        sizingOptions: { heightType: !0, widthType: !0 },
                        slots: [
                          t(ee.div, {
                            className: "framer-2n8jc",
                            children: t(k, {
                              __fromCanvasComponent: !0,
                              children: t(p, {
                                children: t("p", {
                                  style: {
                                    "--font-selector":
                                      "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBCb2xk",
                                    "--framer-font-family":
                                      '"Mr Dodo Rounded Bold", "Mr Dodo Rounded Bold Placeholder", sans-serif',
                                    "--framer-font-size": "81px",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "$BUB",
                                }),
                              }),
                              className: "framer-k4icud",
                              fonts: ["CUSTOM;Mr Dodo Rounded Bold"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                        speed: 100,
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                h("div", {
                  className: "framer-brwhj8",
                  children: [
                    h("div", {
                      className: "framer-1mwyihh",
                      children: [
                        x() &&
                          t("div", {
                            className: "framer-1u73al5 hidden-149m041",
                          }),
                        t(u, {
                          breakpoint: o,
                          overrides: {
                            KBb1ozNkr: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 625,
                                intrinsicWidth: 833.5,
                                loading: "lazy",
                                pixelHeight: 1250,
                                pixelWidth: 1667,
                                sizes: "1084.319px",
                                src: "/images/KqUdDvlB3JoWRrG359mLinrCs.png?scale-down-to=1024",
                                srcSet:
                                  "/images/KqUdDvlB3JoWRrG359mLinrCs.png?scale-down-to=512 512w,/images/KqUdDvlB3JoWRrG359mLinrCs.png?scale-down-to=1024 1024w,/images/KqUdDvlB3JoWRrG359mLinrCs.png 1667w",
                              },
                            },
                            QU5MBL1nc: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 625,
                                intrinsicWidth: 833.5,
                                pixelHeight: 1250,
                                pixelWidth: 1667,
                                sizes: "350px",
                                src: "https://framerusercontent.com/images/KqUdDvlB3JoWRrG359mLinrCs.png?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/KqUdDvlB3JoWRrG359mLinrCs.png?scale-down-to=512 512w,https://framerusercontent.com/images/KqUdDvlB3JoWRrG359mLinrCs.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/KqUdDvlB3JoWRrG359mLinrCs.png 1667w",
                              },
                            },
                          },
                          children: t(K, {
                            __framer__animate: { transition: ie },
                            __framer__animateOnce: !0,
                            __framer__enter: jr,
                            __framer__exit: Zr,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 625,
                              intrinsicWidth: 833.5,
                              pixelHeight: 1250,
                              pixelWidth: 1667,
                              sizes: "516px",
                              src: "https://framerusercontent.com/images/KqUdDvlB3JoWRrG359mLinrCs.png?scale-down-to=1024",
                              srcSet:
                                "https://framerusercontent.com/images/KqUdDvlB3JoWRrG359mLinrCs.png?scale-down-to=512 512w,https://framerusercontent.com/images/KqUdDvlB3JoWRrG359mLinrCs.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/KqUdDvlB3JoWRrG359mLinrCs.png 1667w",
                            },
                            className: "framer-1ibcq40",
                            "data-framer-name": "GM",
                            name: "GM",
                            transformTemplate: Pe,
                          }),
                        }),
                      ],
                    }),
                    h("div", {
                      className: "framer-1g7xo1z",
                      children: [
                        t(u, {
                          breakpoint: o,
                          overrides: {
                            KBb1ozNkr: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 717.5,
                                intrinsicWidth: 752.5,
                                loading: "lazy",
                                pixelHeight: 1435,
                                pixelWidth: 1505,
                                sizes: "962.2591px",
                                src: "/images/Ic2Hh2JyH6EZafmh9JfVqVhwQ4.png?scale-down-to=1024",
                                srcSet:
                                  "/images/Ic2Hh2JyH6EZafmh9JfVqVhwQ4.png?scale-down-to=512 512w,/images/Ic2Hh2JyH6EZafmh9JfVqVhwQ4.png?scale-down-to=1024 1024w,/images/Ic2Hh2JyH6EZafmh9JfVqVhwQ4.png 1505w",
                              },
                            },
                            QU5MBL1nc: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 717.5,
                                intrinsicWidth: 752.5,
                                loading: "lazy",
                                pixelHeight: 1435,
                                pixelWidth: 1505,
                                src: "/images/Ic2Hh2JyH6EZafmh9JfVqVhwQ4.png?scale-down-to=1024",
                                srcSet:
                                  "/images/Ic2Hh2JyH6EZafmh9JfVqVhwQ4.png?scale-down-to=512 512w,/images/Ic2Hh2JyH6EZafmh9JfVqVhwQ4.png?scale-down-to=1024 1024w,/images/Ic2Hh2JyH6EZafmh9JfVqVhwQ4.png 1505w",
                              },
                            },
                          },
                          children: t(K, {
                            __framer__animate: { transition: ie },
                            __framer__animateOnce: !0,
                            __framer__enter: Ir,
                            __framer__exit: Or,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 717.5,
                              intrinsicWidth: 752.5,
                              loading: "lazy",
                              pixelHeight: 1435,
                              pixelWidth: 1505,
                              sizes: "458px",
                              src: "/images/Ic2Hh2JyH6EZafmh9JfVqVhwQ4.png?scale-down-to=1024",
                              srcSet:
                                "/images/Ic2Hh2JyH6EZafmh9JfVqVhwQ4.png?scale-down-to=512 512w,/images/Ic2Hh2JyH6EZafmh9JfVqVhwQ4.png?scale-down-to=1024 1024w,/images/Ic2Hh2JyH6EZafmh9JfVqVhwQ4.png 1505w",
                            },
                            className: "framer-nloysp",
                            "data-framer-name": "Based",
                            name: "Based",
                            transformTemplate: Pe,
                          }),
                        }),
                        x() &&
                          t("div", {
                            className: "framer-1cvffwo hidden-149m041",
                          }),
                      ],
                    }),
                    t(te, {
                      href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x0123456789",
                      children: t(u, {
                        breakpoint: o,
                        overrides: {
                          KBb1ozNkr: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 365,
                              intrinsicWidth: 699.5,
                              loading: "lazy",
                              pixelHeight: 730,
                              pixelWidth: 1399,
                              sizes: "751.844px",
                              src: "https://framerusercontent.com/images/nQEGldo8J4vzxHJsLnIIipseg.png?scale-down-to=1024",
                              srcSet:
                                "https://framerusercontent.com/images/nQEGldo8J4vzxHJsLnIIipseg.png?scale-down-to=512 512w,https://framerusercontent.com/images/nQEGldo8J4vzxHJsLnIIipseg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/nQEGldo8J4vzxHJsLnIIipseg.png 1399w",
                            },
                          },
                          QU5MBL1nc: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 365,
                              intrinsicWidth: 699.5,
                              loading: "lazy",
                              pixelHeight: 730,
                              pixelWidth: 1399,
                              sizes: "283px",
                              src: "https://framerusercontent.com/images/nQEGldo8J4vzxHJsLnIIipseg.png?scale-down-to=1024",
                              srcSet:
                                "https://framerusercontent.com/images/nQEGldo8J4vzxHJsLnIIipseg.png?scale-down-to=512 512w,https://framerusercontent.com/images/nQEGldo8J4vzxHJsLnIIipseg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/nQEGldo8J4vzxHJsLnIIipseg.png 1399w",
                            },
                          },
                        },
                        children: t(K, {
                          __framer__loop: Lr,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: "mirror",
                          __framer__loopTransition: Ar,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          as: "a",
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 365,
                            intrinsicWidth: 699.5,
                            loading: "lazy",
                            pixelHeight: 730,
                            pixelWidth: 1399,
                            sizes: "424px",
                            src: "https://framerusercontent.com/images/nQEGldo8J4vzxHJsLnIIipseg.png?scale-down-to=1024",
                            srcSet:
                              "https://framerusercontent.com/images/nQEGldo8J4vzxHJsLnIIipseg.png?scale-down-to=512 512w,https://framerusercontent.com/images/nQEGldo8J4vzxHJsLnIIipseg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/nQEGldo8J4vzxHJsLnIIipseg.png 1399w",
                          },
                          className: "framer-c9atew framer-lux5qc",
                          "data-framer-name": "buybotton",
                          name: "buybotton",
                          whileHover: me,
                        }),
                      }),
                    }),
                  ],
                }),
                t(H, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 1024,
                    intrinsicWidth: 1024,
                    loading: "lazy",
                    pixelHeight: 2048,
                    pixelWidth: 2048,
                    sizes: "100vw",
                    src: "/images/1yCev5pRVYzP3BZSOPxpujkGDY.png?scale-down-to=1024",
                    srcSet:
                      "/images/1yCev5pRVYzP3BZSOPxpujkGDY.png?scale-down-to=512 512w,/images/1yCev5pRVYzP3BZSOPxpujkGDY.png?scale-down-to=1024 1024w,/images/1yCev5pRVYzP3BZSOPxpujkGDY.png 2048w",
                  },
                  className: "framer-j4vdqn",
                  "data-border": !0,
                  "data-framer-name": "b_12_min",
                  name: "b_12_min",
                }),
                t("div", {
                  className: "framer-1he6cwf",
                  children: h("div", {
                    className: "framer-1jprgn6",
                    children: [
                      t(u, {
                        breakpoint: o,
                        overrides: {
                          KBb1ozNkr: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 499.5,
                              intrinsicWidth: 400,
                              loading: "lazy",
                              pixelHeight: 999,
                              pixelWidth: 800,
                              sizes: "283px",
                              src: "/images/YuRW4vl249VgZ2wdlNyG9oNkjkM.png?scale-down-to=512",
                              srcSet:
                                "/images/YuRW4vl249VgZ2wdlNyG9oNkjkM.png 800w",
                            },
                          },
                          QU5MBL1nc: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 499.5,
                              intrinsicWidth: 400,
                              loading: "lazy",
                              pixelHeight: 999,
                              pixelWidth: 800,
                              sizes: "118px",
                              src: "/images/YuRW4vl249VgZ2wdlNyG9oNkjkM.png?scale-down-to=512",
                              srcSet:
                                "/images/YuRW4vl249VgZ2wdlNyG9oNkjkM.png 800w",
                            },
                          },
                        },
                        children: t(K, {
                          __framer__loop: Pr,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: "mirror",
                          __framer__loopTransition: Wt,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          background: {
                            fit: "fill",
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 499.5,
                            intrinsicWidth: 400,
                            loading: "lazy",
                            pixelHeight: 999,
                            pixelWidth: 800,
                            sizes: "209px",
                            src: "/images/YuRW4vl249VgZ2wdlNyG9oNkjkM.png?scale-down-to=512",
                            srcSet:
                              "/images/YuRW4vl249VgZ2wdlNyG9oNkjkM.png 800w",
                          },
                          className: "framer-18bywk1",
                          "data-framer-name": "Layer_1",
                          name: "Layer_1",
                        }),
                      }),
                      t(u, {
                        breakpoint: o,
                        overrides: {
                          KBb1ozNkr: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 480.5,
                              intrinsicWidth: 620,
                              loading: "lazy",
                              pixelHeight: 961,
                              pixelWidth: 1240,
                              sizes: "316px",
                              src: "/images/LjSzwWA0xXoNpCMrH9HbvChqaPc.png?scale-down-to=1024",
                              srcSet:
                                "/images/LjSzwWA0xXoNpCMrH9HbvChqaPc.png?scale-down-to=512 512w,/images/LjSzwWA0xXoNpCMrH9HbvChqaPc.png?scale-down-to=1024 1024w,/images/LjSzwWA0xXoNpCMrH9HbvChqaPc.png 1240w",
                            },
                          },
                          QU5MBL1nc: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 480.5,
                              intrinsicWidth: 620,
                              loading: "lazy",
                              pixelHeight: 961,
                              pixelWidth: 1240,
                              sizes: "170px",
                              src: "/images/LjSzwWA0xXoNpCMrH9HbvChqaPc.png?scale-down-to=1024",
                              srcSet:
                                "/images/LjSzwWA0xXoNpCMrH9HbvChqaPc.png?scale-down-to=512 512w,/images/LjSzwWA0xXoNpCMrH9HbvChqaPc.png?scale-down-to=1024 1024w,/images/LjSzwWA0xXoNpCMrH9HbvChqaPc.png 1240w",
                            },
                          },
                        },
                        children: t(K, {
                          __framer__loop: Gr,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: "mirror",
                          __framer__loopTransition: Wt,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 480.5,
                            intrinsicWidth: 620,
                            loading: "lazy",
                            pixelHeight: 961,
                            pixelWidth: 1240,
                            sizes: "217px",
                            src: "/images/LjSzwWA0xXoNpCMrH9HbvChqaPc.png?scale-down-to=1024",
                            srcSet:
                              "/images/LjSzwWA0xXoNpCMrH9HbvChqaPc.png?scale-down-to=512 512w,/images/LjSzwWA0xXoNpCMrH9HbvChqaPc.png?scale-down-to=1024 1024w,/images/LjSzwWA0xXoNpCMrH9HbvChqaPc.png 1240w",
                          },
                          className: "framer-1j9b35x",
                          "data-framer-name": "Layer_1_copy",
                          name: "Layer_1_copy",
                        }),
                      }),
                      h(Er, {
                        __framer__animate: { transition: ie },
                        __framer__animateOnce: !0,
                        __framer__enter: Qr,
                        __framer__exit: qr,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-99bxnz",
                        transformTemplate: Pe,
                        children: [
                          h("div", {
                            className: "framer-9l5kym",
                            children: [
                              h("div", {
                                className: "framer-f3fgt5",
                                children: [
                                  t(u, {
                                    breakpoint: o,
                                    overrides: {
                                      KBb1ozNkr: {
                                        children: h(p, {
                                          children: [
                                            t("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBCb2xk",
                                                "--framer-font-family":
                                                  '"Mr Dodo Rounded Bold", "Mr Dodo Rounded Bold Placeholder", sans-serif',
                                                "--framer-font-size": "110px",
                                                "--framer-text-alignment":
                                                  "center",
                                              },
                                              children: "tokenomics",
                                            }),
                                            t("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBCb2xk",
                                                "--framer-font-family":
                                                  '"Mr Dodo Rounded Bold", "Mr Dodo Rounded Bold Placeholder", sans-serif',
                                                "--framer-font-size": "71px",
                                                "--framer-text-alignment":
                                                  "center",
                                              },
                                              children: "for crypto bros",
                                            }),
                                          ],
                                        }),
                                      },
                                      QU5MBL1nc: {
                                        children: h(p, {
                                          children: [
                                            t("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBCb2xk",
                                                "--framer-font-family":
                                                  '"Mr Dodo Rounded Bold", "Mr Dodo Rounded Bold Placeholder", sans-serif',
                                                "--framer-font-size": "48px",
                                                "--framer-text-alignment":
                                                  "center",
                                              },
                                              children: "tokenomics",
                                            }),
                                            t("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBCb2xk",
                                                "--framer-font-family":
                                                  '"Mr Dodo Rounded Bold", "Mr Dodo Rounded Bold Placeholder", sans-serif',
                                                "--framer-font-size": "36px",
                                                "--framer-text-alignment":
                                                  "center",
                                              },
                                              children: "for crypto bros",
                                            }),
                                          ],
                                        }),
                                      },
                                    },
                                    children: t(k, {
                                      __fromCanvasComponent: !0,
                                      children: h(p, {
                                        children: [
                                          t("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBCb2xk",
                                              "--framer-font-family":
                                                '"Mr Dodo Rounded Bold", "Mr Dodo Rounded Bold Placeholder", sans-serif',
                                              "--framer-font-size": "55px",
                                              "--framer-text-alignment":
                                                "center",
                                            },
                                            children: "tokenomics",
                                          }),
                                          t("p", {
                                            style: {
                                              "--font-selector":
                                                "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBCb2xk",
                                              "--framer-font-family":
                                                '"Mr Dodo Rounded Bold", "Mr Dodo Rounded Bold Placeholder", sans-serif',
                                              "--framer-font-size": "55px",
                                              "--framer-text-alignment":
                                                "center",
                                            },
                                            children: "for crypto bros",
                                          }),
                                        ],
                                      }),
                                      className: "framer-mgk9no",
                                      fonts: ["CUSTOM;Mr Dodo Rounded Bold"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  h("div", {
                                    className: "framer-sm77cc",
                                    children: [
                                      t(u, {
                                        breakpoint: o,
                                        overrides: {
                                          KBb1ozNkr: {
                                            children: t(p, {
                                              children: t("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                                  "--framer-font-size": "60px",
                                                  "--framer-line-height":
                                                    "1.3em",
                                                  "--framer-text-alignment":
                                                    "center",
                                                },
                                                children: "SUPPLY",
                                              }),
                                            }),
                                          },
                                        },
                                        children: t(k, {
                                          __fromCanvasComponent: !0,
                                          children: t(p, {
                                            children: t("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                                "--framer-font-family":
                                                  '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                                "--framer-font-size": "28px",
                                                "--framer-line-height": "1.3em",
                                                "--framer-text-alignment":
                                                  "center",
                                              },
                                              children: "SUPPLY",
                                            }),
                                          }),
                                          className: "framer-1ps0af8",
                                          fonts: [
                                            "CUSTOM;Mr Dodo Rounded Regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      t(u, {
                                        breakpoint: o,
                                        overrides: {
                                          KBb1ozNkr: {
                                            children: t(p, {
                                              children: t("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                                  "--framer-font-size": "60px",
                                                  "--framer-line-height":
                                                    "1.3em",
                                                  "--framer-text-alignment":
                                                    "center",
                                                },
                                                children: "1,000,000,000 BUB",
                                              }),
                                            }),
                                          },
                                        },
                                        children: t(k, {
                                          __fromCanvasComponent: !0,
                                          children: t(p, {
                                            children: t("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                                "--framer-font-family":
                                                  '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                                "--framer-font-size": "28px",
                                                "--framer-line-height": "1.3em",
                                                "--framer-text-alignment":
                                                  "center",
                                              },
                                              children: "1,000,000,000 BUB",
                                            }),
                                          }),
                                          className: "framer-xrz0i8",
                                          fonts: [
                                            "CUSTOM;Mr Dodo Rounded Regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  h("div", {
                                    className: "framer-go1ana",
                                    children: [
                                      t(u, {
                                        breakpoint: o,
                                        overrides: {
                                          KBb1ozNkr: {
                                            children: t(p, {
                                              children: t("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                                  "--framer-font-size": "60px",
                                                  "--framer-line-height":
                                                    "1.3em",
                                                  "--framer-text-alignment":
                                                    "center",
                                                },
                                                children: "TAXES",
                                              }),
                                            }),
                                          },
                                        },
                                        children: t(k, {
                                          __fromCanvasComponent: !0,
                                          children: t(p, {
                                            children: t("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                                "--framer-font-family":
                                                  '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                                "--framer-font-size": "28px",
                                                "--framer-line-height": "1.3em",
                                                "--framer-text-alignment":
                                                  "center",
                                              },
                                              children: "TAXES",
                                            }),
                                          }),
                                          className: "framer-565nf4",
                                          fonts: [
                                            "CUSTOM;Mr Dodo Rounded Regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      t(u, {
                                        breakpoint: o,
                                        overrides: {
                                          KBb1ozNkr: {
                                            children: t(p, {
                                              children: t("p", {
                                                style: {
                                                  "--font-selector":
                                                    "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                                  "--framer-font-size": "60px",
                                                  "--framer-line-height":
                                                    "1.3em",
                                                  "--framer-text-alignment":
                                                    "center",
                                                },
                                                children: "0/0",
                                              }),
                                            }),
                                          },
                                        },
                                        children: t(k, {
                                          __fromCanvasComponent: !0,
                                          children: t(p, {
                                            children: t("p", {
                                              style: {
                                                "--font-selector":
                                                  "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                                "--framer-font-family":
                                                  '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                                "--framer-font-size": "41px",
                                                "--framer-line-height": "1.3em",
                                                "--framer-text-alignment":
                                                  "center",
                                              },
                                              children: "0/0",
                                            }),
                                          }),
                                          className: "framer-h35amw",
                                          fonts: [
                                            "CUSTOM;Mr Dodo Rounded Regular",
                                          ],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              t(u, {
                                breakpoint: o,
                                overrides: {
                                  KBb1ozNkr: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 1060,
                                      intrinsicWidth: 1309,
                                      loading: "lazy",
                                      pixelHeight: 1060,
                                      pixelWidth: 1309,
                                      sizes: "544px",
                                      src: "/images/lKXVUIiy4KT1efdTZJ8XZP9HMQ.png",
                                      srcSet:
                                        "/images/lKXVUIiy4KT1efdTZJ8XZP9HMQ.png?scale-down-to=512 512w,/images/lKXVUIiy4KT1efdTZJ8XZP9HMQ.png?scale-down-to=1024 1024w,/images/lKXVUIiy4KT1efdTZJ8XZP9HMQ.png 1309w",
                                    },
                                  },
                                },
                                children: t(H, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1060,
                                    intrinsicWidth: 1309,
                                    loading: "lazy",
                                    pixelHeight: 1060,
                                    pixelWidth: 1309,
                                    sizes: "293px",
                                    src: "/images/lKXVUIiy4KT1efdTZJ8XZP9HMQ.png",
                                    srcSet:
                                      "/images/lKXVUIiy4KT1efdTZJ8XZP9HMQ.png?scale-down-to=512 512w,/images/lKXVUIiy4KT1efdTZJ8XZP9HMQ.png?scale-down-to=1024 1024w,/images/lKXVUIiy4KT1efdTZJ8XZP9HMQ.png 1309w",
                                  },
                                  className: "framer-1ke0wuh",
                                  "data-framer-name": "$5_1_1_",
                                  name: "$5_1_1_",
                                }),
                              }),
                            ],
                          }),
                          t(u, {
                            breakpoint: o,
                            overrides: {
                              KBb1ozNkr: {
                                children: h(p, {
                                  children: [
                                    t("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBCb2xk",
                                        "--framer-font-family":
                                          '"Mr Dodo Rounded Bold", "Mr Dodo Rounded Bold Placeholder", sans-serif',
                                        "--framer-font-size": "71px",
                                        "--framer-text-alignment": "center",
                                      },
                                      children: "CONTRACT ADDRESS",
                                    }),
                                    t("p", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                        "--framer-font-family":
                                          '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                        "--framer-font-size": "60px",
                                        "--framer-text-alignment": "center",
                                      },
                                      children:
                                        "0x0123456789",
                                    }),
                                  ],
                                }),
                              },
                            },
                            children: t(k, {
                              __fromCanvasComponent: !0,
                              children: h(p, {
                                children: [
                                  t("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBCb2xk",
                                      "--framer-font-family":
                                        '"Mr Dodo Rounded Bold", "Mr Dodo Rounded Bold Placeholder", sans-serif',
                                      "--framer-font-size": "45px",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: "CONTRACT ADDRESS",
                                  }),
                                  t("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                      "--framer-font-family":
                                        '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                      "--framer-font-size": "32px",
                                      "--framer-text-alignment": "center",
                                    },
                                    children:
                                      "0x0123456789",
                                  }),
                                ],
                              }),
                              className: "framer-1m7vou2",
                              fonts: [
                                "CUSTOM;Mr Dodo Rounded Bold",
                                "CUSTOM;Mr Dodo Rounded Regular",
                              ],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                t(H, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 1024,
                    intrinsicWidth: 1024,
                    loading: "lazy",
                    pixelHeight: 2048,
                    pixelWidth: 2048,
                    sizes: "100vw",
                    src: "/images/RDgQe83HnkUzAekr7wAefDdWyvc.png?scale-down-to=1024",
                    srcSet:
                      "/images/RDgQe83HnkUzAekr7wAefDdWyvc.png?scale-down-to=512 512w,/images/RDgQe83HnkUzAekr7wAefDdWyvc.png?scale-down-to=1024 1024w,/images/RDgQe83HnkUzAekr7wAefDdWyvc.png 2048w",
                  },
                  className: "framer-1jk4n68",
                  "data-border": !0,
                  "data-framer-name": "b_13_min",
                  name: "b_13_min",
                }),
                t("div", {
                  className: "framer-40peqc",
                  children: h("div", {
                    className: "framer-1wnec8v",
                    children: [
                      t(u, {
                        breakpoint: o,
                        overrides: {
                          KBb1ozNkr: {
                            children: t(p, {
                              children: t("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                  "--framer-font-family":
                                    '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                  "--framer-font-size": "71px",
                                },
                                children: "BE LIKE BUBCAT",
                              }),
                            }),
                          },
                          QU5MBL1nc: {
                            children: t(p, {
                              children: t("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                  "--framer-font-family":
                                    '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                  "--framer-font-size": "35px",
                                  "--framer-text-alignment": "center",
                                },
                                children: "BE LIKE BUBCAT",
                              }),
                            }),
                          },
                        },
                        children: t(k, {
                          __fromCanvasComponent: !0,
                          children: t(p, {
                            children: t("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                "--framer-font-family":
                                  '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                "--framer-font-size": "55px",
                              },
                              children: "BE LIKE BUBCAT",
                            }),
                          }),
                          className: "framer-ifws52",
                          fonts: ["CUSTOM;Mr Dodo Rounded Regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      t(u, {
                        breakpoint: o,
                        overrides: {
                          KBb1ozNkr: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 466.5,
                              intrinsicWidth: 742,
                              loading: "lazy",
                              pixelHeight: 933,
                              pixelWidth: 1484,
                              sizes: "735px",
                              src: "/images/zwEgfyCYZd6XRbZ9nioTDjeK2YE.png?scale-down-to=1024",
                              srcSet:
                                "/images/zwEgfyCYZd6XRbZ9nioTDjeK2YE.png?scale-down-to=512 512w,/images/zwEgfyCYZd6XRbZ9nioTDjeK2YE.png?scale-down-to=1024 1024w,/images/zwEgfyCYZd6XRbZ9nioTDjeK2YE.png 1484w",
                            },
                          },
                        },
                        children: t(K, {
                          __framer__loop: Ur,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: "mirror",
                          __framer__loopTransition: Fr,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 466.5,
                            intrinsicWidth: 742,
                            loading: "lazy",
                            pixelHeight: 933,
                            pixelWidth: 1484,
                            sizes: "446px",
                            src: "/images/zwEgfyCYZd6XRbZ9nioTDjeK2YE.png?scale-down-to=1024",
                            srcSet:
                              "/images/zwEgfyCYZd6XRbZ9nioTDjeK2YE.png?scale-down-to=512 512w,/images/zwEgfyCYZd6XRbZ9nioTDjeK2YE.png?scale-down-to=1024 1024w,/images/zwEgfyCYZd6XRbZ9nioTDjeK2YE.png 1484w",
                          },
                          className: "framer-54hq1f",
                          "data-framer-name": "b_6",
                          name: "b_6",
                        }),
                      }),
                      t(u, {
                        breakpoint: o,
                        overrides: {
                          KBb1ozNkr: {
                            children: t(p, {
                              children: t("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                  "--framer-font-family":
                                    '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                  "--framer-font-size": "71px",
                                },
                                children: "ETH",
                              }),
                            }),
                          },
                          QU5MBL1nc: {
                            children: t(p, {
                              children: t("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                  "--framer-font-family":
                                    '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                  "--framer-font-size": "55px",
                                  "--framer-text-alignment": "center",
                                },
                                children: "ETH",
                              }),
                            }),
                          },
                        },
                        children: t(k, {
                          __fromCanvasComponent: !0,
                          children: t(p, {
                            children: t("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                "--framer-font-family":
                                  '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                "--framer-font-size": "55px",
                              },
                              children: "ETH",
                            }),
                          }),
                          className: "framer-1t2kh7f",
                          fonts: ["CUSTOM;Mr Dodo Rounded Regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    ],
                  }),
                }),
                h("div", {
                  className: "framer-1ub43or",
                  children: [
                    t(u, {
                      breakpoint: o,
                      overrides: {
                        KBb1ozNkr: {
                          children: t(p, {
                            children: t("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                "--framer-font-family":
                                  '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                "--framer-font-size": "38px",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: "All Rights Reserved.",
                            }),
                          }),
                        },
                      },
                      children: t(k, {
                        __fromCanvasComponent: !0,
                        children: t(p, {
                          children: t("p", {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                              "--framer-font-family":
                                '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                              "--framer-font-size": "27px",
                              "--framer-text-color": "rgb(255, 255, 255)",
                            },
                            children: "All Rights Reserved.",
                          }),
                        }),
                        className: "framer-10k3m9y",
                        fonts: ["CUSTOM;Mr Dodo Rounded Regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    t(u, {
                      breakpoint: o,
                      overrides: {
                        KBb1ozNkr: {
                          children: t(p, {
                            children: t("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                                "--framer-font-family":
                                  '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                                "--framer-font-size": "38px",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: "info@info.com",
                            }),
                          }),
                        },
                      },
                      children: t(k, {
                        __fromCanvasComponent: !0,
                        children: t(p, {
                          children: t("p", {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBSZWd1bGFy",
                              "--framer-font-family":
                                '"Mr Dodo Rounded Regular", "Mr Dodo Rounded Regular Placeholder", sans-serif',
                              "--framer-font-size": "27px",
                              "--framer-text-color": "rgb(255, 255, 255)",
                            },
                            children: "info@info.com",
                          }),
                        }),
                        className: "framer-lnrkhf",
                        fonts: ["CUSTOM;Mr Dodo Rounded Regular"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    t(u, {
                      breakpoint: o,
                      overrides: {
                        KBb1ozNkr: {
                          children: t(p, {
                            children: t("p", {
                              style: {
                                "--font-selector":
                                  "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBCb2xk",
                                "--framer-font-family":
                                  '"Mr Dodo Rounded Bold", "Mr Dodo Rounded Bold Placeholder", sans-serif',
                                "--framer-font-size": "38px",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: "BUBCAT",
                            }),
                          }),
                        },
                      },
                      children: t(k, {
                        __fromCanvasComponent: !0,
                        children: t(p, {
                          children: t("p", {
                            style: {
                              "--font-selector":
                                "Q1VTVE9NO01yIERvZG8gUm91bmRlZCBCb2xk",
                              "--framer-font-family":
                                '"Mr Dodo Rounded Bold", "Mr Dodo Rounded Bold Placeholder", sans-serif',
                              "--framer-font-size": "27px",
                              "--framer-text-color": "rgb(255, 255, 255)",
                            },
                            children: "BUBCAT",
                          }),
                        }),
                        className: "framer-12mx7tm",
                        fonts: ["CUSTOM;Mr Dodo Rounded Bold"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            t("div", { className: We(Vt, ...T), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Yr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${ye.bodyClassName}-framer-6Bb5N { background: white; }`,
    ".framer-6Bb5N.framer-lux5qc, .framer-6Bb5N .framer-lux5qc { display: block; }",
    ".framer-6Bb5N.framer-72rtr7 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }",
    ".framer-6Bb5N .framer-1oadqul { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-6Bb5N .framer-yqamzl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-6Bb5N .framer-122dxem { align-content: center; align-items: center; background: linear-gradient(180deg, #ffffff 0%, rgb(209, 231, 255) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: hidden; padding: 110px 130px 110px 130px; position: relative; width: 100%; }",
    ".framer-6Bb5N .framer-1dgcq1e { aspect-ratio: 1.4210526315789473 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 290px); overflow: visible; position: relative; width: 412px; }",
    ".framer-6Bb5N .framer-1jdw3dx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 10px 10px 10px; position: relative; width: min-content; }",
    ".framer-6Bb5N .framer-1k0lhup { aspect-ratio: 0.7956104252400549 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 409px); overflow: visible; position: relative; width: 325px; }",
    ".framer-6Bb5N .framer-1qwajfp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-6Bb5N .framer-8bot3j { aspect-ratio: 1.0585774058577406 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 76px); overflow: visible; position: relative; text-decoration: none; width: 80px; }",
    ".framer-6Bb5N .framer-1gvxraq { aspect-ratio: 1.0155440414507773 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 80px); overflow: visible; position: relative; text-decoration: none; width: 81px; }",
    ".framer-6Bb5N .framer-795k1b { aspect-ratio: 1.0181311018131103 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 79px); overflow: visible; position: relative; text-decoration: none; width: 80px; }",
    ".framer-6Bb5N .framer-1c3mkyi { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 79px); overflow: visible; position: relative; text-decoration: none; width: 79px; }",
    ".framer-6Bb5N .framer-1cbhdy2 { --border-bottom-width: 8px; --border-color: #000000; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 8px; align-content: center; align-items: center; background-color: #0a80fc; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 10px 10px 10px; position: relative; width: 100%; }",
    ".framer-6Bb5N .framer-ynahi5-container { flex: 1 0 0px; height: 109px; position: relative; width: 1px; }",
    ".framer-6Bb5N .framer-2n8jc { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 97px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-6Bb5N .framer-k4icud, .framer-6Bb5N .framer-mgk9no, .framer-6Bb5N .framer-1ps0af8, .framer-6Bb5N .framer-xrz0i8, .framer-6Bb5N .framer-565nf4, .framer-6Bb5N .framer-h35amw, .framer-6Bb5N .framer-1m7vou2, .framer-6Bb5N .framer-ifws52, .framer-6Bb5N .framer-1t2kh7f, .framer-6Bb5N .framer-10k3m9y, .framer-6Bb5N .framer-lnrkhf, .framer-6Bb5N .framer-12mx7tm { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-6Bb5N .framer-brwhj8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 133px; height: min-content; justify-content: center; overflow: hidden; padding: 70px 70px 70px 70px; position: relative; width: 100%; }",
    ".framer-6Bb5N .framer-1mwyihh, .framer-6Bb5N .framer-1g7xo1z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-6Bb5N .framer-1u73al5 { background-color: #ffffff; flex: none; height: 127px; overflow: hidden; position: relative; width: 526px; }",
    ".framer-6Bb5N .framer-1ibcq40 { aspect-ratio: 1.3367875647668395 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 386px); overflow: visible; position: relative; transform: perspective(1200px); width: 516px; }",
    ".framer-6Bb5N .framer-nloysp { aspect-ratio: 1.048780487804878 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 437px); overflow: visible; position: relative; transform: perspective(1200px); width: 458px; }",
    ".framer-6Bb5N .framer-1cvffwo { background-color: #ffffff; flex: none; height: 77px; overflow: hidden; position: relative; width: 429px; }",
    ".framer-6Bb5N .framer-c9atew { aspect-ratio: 1.9164383561643836 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 222px); overflow: visible; position: relative; text-decoration: none; width: 424px; }",
    ".framer-6Bb5N .framer-j4vdqn, .framer-6Bb5N .framer-1jk4n68 { --border-bottom-width: 8px; --border-color: #000000; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 8px; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1200px); overflow: visible; position: relative; width: 100%; }",
    ".framer-6Bb5N .framer-1he6cwf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-6Bb5N .framer-1jprgn6 { align-content: center; align-items: center; background: linear-gradient(180deg, #d1e7ff 0%, rgb(255, 255, 255) 28.436444256756754%, rgba(255, 255, 255, 1) 75.30440596846847%, rgb(209, 231, 255) 100%); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 261px 116px 261px 116px; position: relative; width: 1px; }",
    ".framer-6Bb5N .framer-18bywk1 { aspect-ratio: 0.8008008008008008 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 261px); overflow: visible; position: absolute; right: 0px; top: 0px; width: 209px; z-index: 1; }",
    ".framer-6Bb5N .framer-1j9b35x { aspect-ratio: 1.2903225806451613 / 1; bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 168px); left: 0px; overflow: visible; position: absolute; width: 217px; z-index: 1; }",
    ".framer-6Bb5N .framer-99bxnz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; transform: perspective(1200px); width: min-content; }",
    ".framer-6Bb5N .framer-9l5kym { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-6Bb5N .framer-f3fgt5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-6Bb5N .framer-sm77cc, .framer-6Bb5N .framer-go1ana { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 404px; }",
    ".framer-6Bb5N .framer-1ke0wuh { aspect-ratio: 1.2325581395348837 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 238px); overflow: visible; position: relative; width: 293px; }",
    ".framer-6Bb5N .framer-40peqc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-6Bb5N .framer-1wnec8v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 35px 35px 35px 35px; position: relative; width: 100%; }",
    ".framer-6Bb5N .framer-54hq1f { aspect-ratio: 1.595706618962433 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 280px); overflow: visible; position: relative; width: 446px; }",
    ".framer-6Bb5N .framer-1ub43or { align-content: center; align-items: center; background-color: #0a80fc; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 16px 16px 16px; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-6Bb5N.framer-72rtr7, .framer-6Bb5N .framer-1oadqul, .framer-6Bb5N .framer-yqamzl, .framer-6Bb5N .framer-122dxem, .framer-6Bb5N .framer-1jdw3dx, .framer-6Bb5N .framer-1qwajfp, .framer-6Bb5N .framer-1cbhdy2, .framer-6Bb5N .framer-2n8jc, .framer-6Bb5N .framer-brwhj8, .framer-6Bb5N .framer-1mwyihh, .framer-6Bb5N .framer-1g7xo1z, .framer-6Bb5N .framer-1he6cwf, .framer-6Bb5N .framer-1jprgn6, .framer-6Bb5N .framer-99bxnz, .framer-6Bb5N .framer-9l5kym, .framer-6Bb5N .framer-f3fgt5, .framer-6Bb5N .framer-40peqc, .framer-6Bb5N .framer-1wnec8v, .framer-6Bb5N .framer-1ub43or { gap: 0px; } .framer-6Bb5N.framer-72rtr7 > *, .framer-6Bb5N .framer-40peqc > *, .framer-6Bb5N .framer-1wnec8v > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-6Bb5N.framer-72rtr7 > :first-child, .framer-6Bb5N .framer-yqamzl > :first-child, .framer-6Bb5N .framer-1qwajfp > :first-child, .framer-6Bb5N .framer-brwhj8 > :first-child, .framer-6Bb5N .framer-1jprgn6 > :first-child, .framer-6Bb5N .framer-99bxnz > :first-child, .framer-6Bb5N .framer-f3fgt5 > :first-child, .framer-6Bb5N .framer-40peqc > :first-child, .framer-6Bb5N .framer-1wnec8v > :first-child, .framer-6Bb5N .framer-1ub43or > :first-child { margin-top: 0px; } .framer-6Bb5N.framer-72rtr7 > :last-child, .framer-6Bb5N .framer-yqamzl > :last-child, .framer-6Bb5N .framer-1qwajfp > :last-child, .framer-6Bb5N .framer-brwhj8 > :last-child, .framer-6Bb5N .framer-1jprgn6 > :last-child, .framer-6Bb5N .framer-99bxnz > :last-child, .framer-6Bb5N .framer-f3fgt5 > :last-child, .framer-6Bb5N .framer-40peqc > :last-child, .framer-6Bb5N .framer-1wnec8v > :last-child, .framer-6Bb5N .framer-1ub43or > :last-child { margin-bottom: 0px; } .framer-6Bb5N .framer-1oadqul > *, .framer-6Bb5N .framer-1jdw3dx > *, .framer-6Bb5N .framer-1cbhdy2 > *, .framer-6Bb5N .framer-2n8jc > *, .framer-6Bb5N .framer-1mwyihh > *, .framer-6Bb5N .framer-1g7xo1z > *, .framer-6Bb5N .framer-1he6cwf > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-6Bb5N .framer-1oadqul > :first-child, .framer-6Bb5N .framer-122dxem > :first-child, .framer-6Bb5N .framer-1jdw3dx > :first-child, .framer-6Bb5N .framer-1cbhdy2 > :first-child, .framer-6Bb5N .framer-2n8jc > :first-child, .framer-6Bb5N .framer-1mwyihh > :first-child, .framer-6Bb5N .framer-1g7xo1z > :first-child, .framer-6Bb5N .framer-1he6cwf > :first-child, .framer-6Bb5N .framer-9l5kym > :first-child { margin-left: 0px; } .framer-6Bb5N .framer-1oadqul > :last-child, .framer-6Bb5N .framer-122dxem > :last-child, .framer-6Bb5N .framer-1jdw3dx > :last-child, .framer-6Bb5N .framer-1cbhdy2 > :last-child, .framer-6Bb5N .framer-2n8jc > :last-child, .framer-6Bb5N .framer-1mwyihh > :last-child, .framer-6Bb5N .framer-1g7xo1z > :last-child, .framer-6Bb5N .framer-1he6cwf > :last-child, .framer-6Bb5N .framer-9l5kym > :last-child { margin-right: 0px; } .framer-6Bb5N .framer-yqamzl > *, .framer-6Bb5N .framer-1jprgn6 > *, .framer-6Bb5N .framer-1ub43or > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-6Bb5N .framer-122dxem > * { margin: 0px; margin-left: calc(68px / 2); margin-right: calc(68px / 2); } .framer-6Bb5N .framer-1qwajfp > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-6Bb5N .framer-brwhj8 > * { margin: 0px; margin-bottom: calc(133px / 2); margin-top: calc(133px / 2); } .framer-6Bb5N .framer-99bxnz > *, .framer-6Bb5N .framer-f3fgt5 > * { margin: 0px; margin-bottom: calc(25px / 2); margin-top: calc(25px / 2); } .framer-6Bb5N .framer-9l5kym > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } }",
    "@media (min-width: 1200px) and (max-width: 1439px) { .framer-6Bb5N .hidden-72rtr7 { display: none !important; } }",
    `@media (max-width: 1199px) { .framer-6Bb5N .hidden-149m041 { display: none !important; } .${ye.bodyClassName}-framer-6Bb5N { background: white; } .framer-6Bb5N.framer-72rtr7 { width: 390px; } .framer-6Bb5N .framer-1oadqul, .framer-6Bb5N .framer-122dxem, .framer-6Bb5N .framer-1cbhdy2, .framer-6Bb5N .framer-9l5kym { flex-direction: column; } .framer-6Bb5N .framer-yqamzl, .framer-6Bb5N .framer-ynahi5-container { flex: none; width: 100%; } .framer-6Bb5N .framer-1dgcq1e { height: var(--framer-aspect-ratio-supported, 206px); width: 292px; } .framer-6Bb5N .framer-1k0lhup { height: var(--framer-aspect-ratio-supported, 274px); width: 218px; } .framer-6Bb5N .framer-8bot3j { height: var(--framer-aspect-ratio-supported, 44px); width: 46px; } .framer-6Bb5N .framer-1gvxraq { height: var(--framer-aspect-ratio-supported, 47px); width: 48px; } .framer-6Bb5N .framer-795k1b { height: var(--framer-aspect-ratio-supported, 46px); width: 46px; } .framer-6Bb5N .framer-1c3mkyi { height: var(--framer-aspect-ratio-supported, 47px); width: 47px; } .framer-6Bb5N .framer-1ibcq40 { height: var(--framer-aspect-ratio-supported, 262px); width: 350px; } .framer-6Bb5N .framer-nloysp { height: var(--framer-aspect-ratio-supported, 334px); width: 350px; } .framer-6Bb5N .framer-c9atew { height: var(--framer-aspect-ratio-supported, 148px); width: 283px; } .framer-6Bb5N .framer-j4vdqn, .framer-6Bb5N .framer-1jk4n68 { height: var(--framer-aspect-ratio-supported, 390px); } .framer-6Bb5N .framer-1jprgn6 { padding: 216px 116px 216px 116px; } .framer-6Bb5N .framer-18bywk1 { height: var(--framer-aspect-ratio-supported, 148px); width: 118px; } .framer-6Bb5N .framer-1j9b35x { height: var(--framer-aspect-ratio-supported, 132px); width: 170px; } .framer-6Bb5N .framer-sm77cc, .framer-6Bb5N .framer-go1ana { width: 350px; } .framer-6Bb5N .framer-1m7vou2 { white-space: pre-wrap; width: 350px; word-break: break-word; word-wrap: break-word; } .framer-6Bb5N .framer-ifws52, .framer-6Bb5N .framer-1t2kh7f { white-space: pre-wrap; width: 300px; word-break: break-word; word-wrap: break-word; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-6Bb5N .framer-1oadqul, .framer-6Bb5N .framer-122dxem, .framer-6Bb5N .framer-1cbhdy2, .framer-6Bb5N .framer-9l5kym { gap: 0px; } .framer-6Bb5N .framer-1oadqul > *, .framer-6Bb5N .framer-1cbhdy2 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-6Bb5N .framer-1oadqul > :first-child, .framer-6Bb5N .framer-122dxem > :first-child, .framer-6Bb5N .framer-1cbhdy2 > :first-child, .framer-6Bb5N .framer-9l5kym > :first-child { margin-top: 0px; } .framer-6Bb5N .framer-1oadqul > :last-child, .framer-6Bb5N .framer-122dxem > :last-child, .framer-6Bb5N .framer-1cbhdy2 > :last-child, .framer-6Bb5N .framer-9l5kym > :last-child { margin-bottom: 0px; } .framer-6Bb5N .framer-122dxem > * { margin: 0px; margin-bottom: calc(68px / 2); margin-top: calc(68px / 2); } .framer-6Bb5N .framer-9l5kym > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }}`,
    `@media (min-width: 1440px) and (max-width: 1919px) { .framer-6Bb5N .hidden-1mxle79 { display: none !important; } .${ye.bodyClassName}-framer-6Bb5N { background: white; } .framer-6Bb5N.framer-72rtr7 { width: 1440px; } .framer-6Bb5N .framer-j4vdqn, .framer-6Bb5N .framer-1jk4n68 { height: var(--framer-aspect-ratio-supported, 1440px); }}`,
    `@media (min-width: 1920px) { .framer-6Bb5N .hidden-1m7kzrv { display: none !important; } .${ye.bodyClassName}-framer-6Bb5N { background: white; } .framer-6Bb5N.framer-72rtr7 { width: 1920px; } .framer-6Bb5N .framer-1dgcq1e { height: var(--framer-aspect-ratio-supported, 495px); width: 704px; } .framer-6Bb5N .framer-1k0lhup { height: var(--framer-aspect-ratio-supported, 697px); width: 555px; } .framer-6Bb5N .framer-8bot3j { height: var(--framer-aspect-ratio-supported, 129px); width: 137px; } .framer-6Bb5N .framer-795k1b { height: var(--framer-aspect-ratio-supported, 134px); width: 137px; } .framer-6Bb5N .framer-brwhj8 { gap: 243px; } .framer-6Bb5N .framer-1ibcq40 { height: 811px; width: var(--framer-aspect-ratio-supported, 1084px); } .framer-6Bb5N .framer-nloysp { height: var(--framer-aspect-ratio-supported, 918px); width: 962px; } .framer-6Bb5N .framer-c9atew { height: var(--framer-aspect-ratio-supported, 393px); width: 752px; } .framer-6Bb5N .framer-j4vdqn, .framer-6Bb5N .framer-1jk4n68 { height: var(--framer-aspect-ratio-supported, 1920px); } .framer-6Bb5N .framer-1jprgn6 { padding: 351px 116px 351px 116px; } .framer-6Bb5N .framer-18bywk1 { height: var(--framer-aspect-ratio-supported, 354px); width: 283px; } .framer-6Bb5N .framer-1j9b35x { height: var(--framer-aspect-ratio-supported, 245px); width: 316px; } .framer-6Bb5N .framer-sm77cc, .framer-6Bb5N .framer-go1ana { width: 720px; } .framer-6Bb5N .framer-1ke0wuh { height: var(--framer-aspect-ratio-supported, 442px); width: 544px; } .framer-6Bb5N .framer-54hq1f { height: var(--framer-aspect-ratio-supported, 461px); width: 735px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-6Bb5N .framer-brwhj8 { gap: 0px; } .framer-6Bb5N .framer-brwhj8 > * { margin: 0px; margin-bottom: calc(243px / 2); margin-top: calc(243px / 2); } .framer-6Bb5N .framer-brwhj8 > :first-child { margin-top: 0px; } .framer-6Bb5N .framer-brwhj8 > :last-child { margin-bottom: 0px; } }}`,
    '.framer-6Bb5N[data-border="true"]::after, .framer-6Bb5N [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  we = dt(Jr, Yr, "framer-6Bb5N"),
  ca = we;
we.displayName = "Home";
we.defaultProps = { height: 6169, width: 1200 };
gt(
  we,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Mr Dodo Rounded Bold",
          source: "custom",
          url: "https://framerusercontent.com/assets/mtUGP9ZmAuPQjj5jcehPv0cc.woff2",
        },
        {
          family: "Mr Dodo Rounded Regular",
          source: "custom",
          url: "https://framerusercontent.com/assets/2DQGdEqgCP8j9XPUjXFDHGOyN0.woff2",
        },
      ],
    },
    ...Sr,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var la = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"QU5MBL1nc":{"layout":["fixed","auto"]},"ZHg78CED3":{"layout":["fixed","auto"]},"KBb1ozNkr":{"layout":["fixed","auto"]}}}',
        framerResponsiveScreen: "",
        framerIntrinsicWidth: "1200",
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "6169",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { la as __FramerMetadata__, ca as default };
//# sourceMappingURL=1m4Ll26LzcPsweGHTuu0lLPZxZyna8i98uaBPZE0MPA.WHPMCTDD.mjs.map
