import { createVNode as o, mergeProps as je, openBlock as F, createElementBlock as U, createElementVNode as g, createTextVNode as z, resolveComponent as k, defineComponent as Le, normalizeClass as Qe, createBlock as Ue, Teleport as Ke, ref as R, reactive as qe, toDisplayString as Ye, createStaticVNode as Xe, createApp as Ge } from "vue";
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    n(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const l of r.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(i) {
    const r = {};
    return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function n(i) {
    if (i.ep)
      return;
    i.ep = !0;
    const r = s(i);
    fetch(i.href, r);
  }
})();
var P = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function C(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Je(e, t) {
  var s = t.length, n = e.length;
  if (n > s)
    return !1;
  if (n === s)
    return e === t;
  e:
    for (var i = 0, r = 0; i < n; i++) {
      for (var l = e.charCodeAt(i); r < s; )
        if (t.charCodeAt(r++) === l)
          continue e;
      return !1;
    }
  return !0;
}
var Ze = Je;
const et = /* @__PURE__ */ C(Ze);
function tt() {
}
var st = tt;
const nt = /* @__PURE__ */ C(st), _ = process.env.NODE_ENV === "production" ? (
  /* istanbul ignore next */
  nt
) : function(t, s) {
  if (!t()) {
    const n = ["[Vue-Treeselect Warning]"].concat(s());
    console.error(...n);
  }
};
function L(e) {
  return function(s, ...n) {
    s.type === "mousedown" && s.button === 0 && e.call(this, s, ...n);
  };
}
function it(e, t) {
  const s = e.getBoundingClientRect(), n = t.getBoundingClientRect(), i = t.offsetHeight / 3;
  n.bottom + i > s.bottom ? e.scrollTop = Math.min(
    t.offsetTop + t.clientHeight - e.offsetHeight + i,
    e.scrollHeight
  ) : n.top - i < s.top && (e.scrollTop = Math.max(t.offsetTop - i, 0));
}
function rt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ce = rt, ot = typeof P == "object" && P && P.Object === Object && P, lt = ot, at = lt, ct = typeof self == "object" && self && self.Object === Object && self, ut = at || ct || Function("return this")(), De = ut, dt = De, ht = function() {
  return dt.Date.now();
}, pt = ht, ft = /\s/;
function mt(e) {
  for (var t = e.length; t-- && ft.test(e.charAt(t)); )
    ;
  return t;
}
var gt = mt, vt = gt, St = /^\s+/;
function bt(e) {
  return e && e.slice(0, vt(e) + 1).replace(St, "");
}
var yt = bt, Ot = De, _t = Ot.Symbol, Me = _t, ce = Me, Te = Object.prototype, Nt = Te.hasOwnProperty, Et = Te.toString, A = ce ? ce.toStringTag : void 0;
function wt(e) {
  var t = Nt.call(e, A), s = e[A];
  try {
    e[A] = void 0;
    var n = !0;
  } catch {
  }
  var i = Et.call(e);
  return n && (t ? e[A] = s : delete e[A]), i;
}
var Lt = wt, Ct = Object.prototype, Dt = Ct.toString;
function Mt(e) {
  return Dt.call(e);
}
var Tt = Mt, ue = Me, xt = Lt, It = Tt, Rt = "[object Null]", At = "[object Undefined]", de = ue ? ue.toStringTag : void 0;
function $t(e) {
  return e == null ? e === void 0 ? At : Rt : de && de in Object(e) ? xt(e) : It(e);
}
var Bt = $t;
function Vt(e) {
  return e != null && typeof e == "object";
}
var zt = Vt, kt = Bt, Ft = zt, Ht = "[object Symbol]";
function Wt(e) {
  return typeof e == "symbol" || Ft(e) && kt(e) == Ht;
}
var Pt = Wt, jt = yt, he = Ce, Qt = Pt, pe = NaN, Ut = /^[-+]0x[0-9a-f]+$/i, Kt = /^0b[01]+$/i, qt = /^0o[0-7]+$/i, Yt = parseInt;
function Xt(e) {
  if (typeof e == "number")
    return e;
  if (Qt(e))
    return pe;
  if (he(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = he(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = jt(e);
  var s = Kt.test(e);
  return s || qt.test(e) ? Yt(e.slice(2), s ? 2 : 8) : Ut.test(e) ? pe : +e;
}
var xe = Xt, Gt = Ce, Y = pt, fe = xe, Jt = "Expected a function", Zt = Math.max, es = Math.min;
function ts(e, t, s) {
  var n, i, r, l, c, h, p = 0, v = !1, f = !1, S = !0;
  if (typeof e != "function")
    throw new TypeError(Jt);
  t = fe(t) || 0, Gt(s) && (v = !!s.leading, f = "maxWait" in s, r = f ? Zt(fe(s.maxWait) || 0, t) : r, S = "trailing" in s ? !!s.trailing : S);
  function E(u) {
    var O = n, I = i;
    return n = i = void 0, p = u, l = e.apply(I, O), l;
  }
  function x(u) {
    return p = u, c = setTimeout(D, t), v ? E(u) : l;
  }
  function H(u) {
    var O = u - h, I = u - p, ae = t - O;
    return f ? es(ae, r - I) : ae;
  }
  function W(u) {
    var O = u - h, I = u - p;
    return h === void 0 || O >= t || O < 0 || f && I >= r;
  }
  function D() {
    var u = Y();
    if (W(u))
      return M(u);
    c = setTimeout(D, H(u));
  }
  function M(u) {
    return c = void 0, S && n ? E(u) : (n = i = void 0, l);
  }
  function q() {
    c !== void 0 && clearTimeout(c), p = 0, n = h = i = c = void 0;
  }
  function a() {
    return c === void 0 ? l : M(Y());
  }
  function d() {
    var u = Y(), O = W(u);
    if (n = arguments, i = this, h = u, O) {
      if (c === void 0)
        return x(h);
      if (f)
        return clearTimeout(c), c = setTimeout(D, t), E(h);
    }
    return c === void 0 && (c = setTimeout(D, t)), l;
  }
  return d.cancel = q, d.flush = a, d;
}
var ss = ts;
const ns = /* @__PURE__ */ C(ss);
var is = function(e, t) {
  var s = document.createElement("_"), n = s.appendChild(document.createElement("_")), i = s.appendChild(document.createElement("_")), r = n.appendChild(document.createElement("_")), l = void 0, c = void 0;
  return n.style.cssText = s.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", r.style.cssText = i.style.cssText = "display:block;height:100%;transition:0s;width:100%", r.style.width = r.style.height = "200%", e.appendChild(s), h(), v;
  function h() {
    p();
    var f = e.offsetWidth, S = e.offsetHeight;
    (f !== l || S !== c) && (l = f, c = S, i.style.width = f * 2 + "px", i.style.height = S * 2 + "px", s.scrollLeft = s.scrollWidth, s.scrollTop = s.scrollHeight, n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight, t({ width: f, height: S })), n.addEventListener("scroll", h), s.addEventListener("scroll", h);
  }
  function p() {
    n.removeEventListener("scroll", h), s.removeEventListener("scroll", h);
  }
  function v() {
    p(), e.removeChild(s);
  }
};
function Ie(e, t) {
  const s = e.indexOf(t);
  s !== -1 && e.splice(s, 1);
}
let re;
const Q = [], rs = 100;
function os() {
  re = setInterval(() => {
    Q.forEach(Re);
  }, rs);
}
function ls() {
  clearInterval(re), re = null;
}
function Re(e) {
  const { $el: t, listener: s, lastWidth: n, lastHeight: i } = e, r = t.offsetWidth, l = t.offsetHeight;
  (n !== r || i !== l) && (e.lastWidth = r, e.lastHeight = l, s({ width: r, height: l }));
}
function as(e, t) {
  const s = {
    $el: e,
    listener: t,
    lastWidth: null,
    lastHeight: null
  }, n = () => {
    Ie(Q, s), Q.length || ls();
  };
  return Q.push(s), Re(s), os(), n;
}
function me(e, t) {
  const s = document.documentMode === 9;
  let n = !0;
  const l = (s ? as : is)(e, (...c) => n || t(...c));
  return n = !1, l;
}
function cs(e) {
  const t = [];
  let s = e.parentNode;
  for (; s && s.nodeName !== "BODY" && s.nodeType === document.ELEMENT_NODE; )
    us(s) && t.push(s), s = s.parentNode;
  return t.push(window), t;
}
function us(e) {
  const { overflow: t, overflowX: s, overflowY: n } = getComputedStyle(e);
  return /(auto|scroll|overlay)/.test(t + n + s);
}
function ge(e, t) {
  const s = cs(e);
  return window.addEventListener("resize", t, { passive: !0 }), s.forEach((n) => {
    n.addEventListener("scroll", t, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", t, { passive: !0 }), s.forEach((i) => {
      i.removeEventListener("scroll", t, { passive: !0 });
    });
  };
}
function Ae(e) {
  return e !== e;
}
function $e(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var ds = xe, ve = 1 / 0, hs = 17976931348623157e292;
function ps(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = ds(e), e === ve || e === -ve) {
    var t = e < 0 ? -1 : 1;
    return t * hs;
  }
  return e === e ? e : 0;
}
var fs = ps, ms = fs;
function gs(e) {
  var t = ms(e), s = t % 1;
  return t === t ? s ? t - s : t : 0;
}
var vs = gs, Ss = vs, bs = "Expected a function";
function ys(e, t) {
  var s;
  if (typeof t != "function")
    throw new TypeError(bs);
  return e = Ss(e), function() {
    return --e > 0 && (s = t.apply(this, arguments)), e <= 1 && (t = void 0), s;
  };
}
var Os = ys, _s = Os;
function Ns(e) {
  return _s(2, e);
}
var Es = Ns;
const ws = /* @__PURE__ */ C(Es);
function Ls(e) {
  return e;
}
var Cs = Ls;
const Ds = /* @__PURE__ */ C(Cs);
function Ms(e) {
  return function() {
    return e;
  };
}
var Ts = Ms;
const Se = /* @__PURE__ */ C(Ts), b = () => /* @__PURE__ */ Object.create(null);
function Be(e) {
  return e == null || typeof e != "object" ? !1 : Object.getPrototypeOf(e) === Object.prototype;
}
function xs(e, t, s) {
  Be(s) ? (e[t] || (e[t] = {}), oe(e[t], s)) : e[t] = s;
}
function oe(e, t) {
  if (Be(t)) {
    const s = Object.keys(t);
    for (let n = 0, i = s.length; n < i; n++)
      xs(e, s[n], t[s[n]]);
  }
  return e;
}
function Is(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Rs = Is;
const be = /* @__PURE__ */ C(Rs);
function N(e, t) {
  return e.indexOf(t) !== -1;
}
function As(e, t, s) {
  for (let n = 0, i = e.length; n < i; n++)
    if (t.call(s, e[n], n, e))
      return e[n];
}
function X(e, t) {
  if (e.length !== t.length)
    return !0;
  for (let s = 0; s < e.length; s++)
    if (e[s] !== t[s])
      return !0;
  return !1;
}
const w = null, le = 0, Ve = 1, ze = 2, T = "ALL_CHILDREN", $ = "ALL_DESCENDANTS", B = "LEAF_CHILDREN", V = "LEAF_DESCENDANTS", $s = "LOAD_ROOT_OPTIONS", Bs = "LOAD_CHILDREN_OPTIONS", Vs = "ASYNC_SEARCH", G = "ALL", j = "BRANCH_PRIORITY", J = "LEAF_PRIORITY", Z = "ALL_WITH_INDETERMINATE", ye = "ORDER_SELECTED", Oe = "LEVEL", _e = "INDEX", m = {
  BACKSPACE: 8,
  ENTER: 13,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46
}, zs = process.env.NODE_ENV === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), Ne = 5, Ee = 40;
function ke(e, t) {
  let s = 0;
  do {
    if (e.level < s)
      return -1;
    if (t.level < s)
      return 1;
    if (e.index[s] !== t.index[s])
      return e.index[s] - t.index[s];
    s++;
  } while (!0);
}
function ks(e, t) {
  return e.level === t.level ? ke(e, t) : e.level - t.level;
}
function ee() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function Fs(e) {
  return typeof e == "string" ? e : typeof e == "number" && !Ae(e) ? e + "" : "";
}
function we(e, t, s) {
  return e ? et(t, s) : N(s, t);
}
function te(e) {
  return e.message || /* istanbul ignore next */
  String(e);
}
let Hs = 0;
const Ws = {
  provide() {
    return {
      // Enable access to the instance of root component of vue-treeselect
      // across hierarchy.
      instance: this
    };
  },
  props: {
    /**
     * Whether to allow resetting value even if there are disabled selected nodes.
     */
    allowClearingDisabled: {
      type: Boolean,
      default: !1
    },
    /**
     * When an ancestor node is selected/deselected, whether its disabled descendants should be selected/deselected.
     * You may want to use this in conjunction with `allowClearingDisabled` prop.
     */
    allowSelectingDisabledDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the menu should be always open.
     */
    alwaysOpen: {
      type: Boolean,
      default: !1
    },
    /**
     * Append the menu to <body />?
     */
    appendToBody: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to enable async search mode.
     */
    async: {
      type: Boolean,
      default: !1
    },
    /**
     * Automatically focus the component on mount?
     */
    autoFocus: {
      type: Boolean,
      default: !1
    },
    /**
     * Automatically load root options on mount. When set to `false`, root options will be loaded when the menu is opened.
     */
    autoLoadRootOptions: {
      type: Boolean,
      default: !0
    },
    /**
     * When user deselects a node, automatically deselect its ancestors. Applies to flat mode only.
     */
    autoDeselectAncestors: {
      type: Boolean,
      default: !1
    },
    /**
     * When user deselects a node, automatically deselect its descendants. Applies to flat mode only.
     */
    autoDeselectDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * When user selects a node, automatically select its ancestors. Applies to flat mode only.
     */
    autoSelectAncestors: {
      type: Boolean,
      default: !1
    },
    /**
     * When user selects a node, automatically select its descendants. Applies to flat mode only.
     */
    autoSelectDescendants: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether pressing backspace key removes the last item if there is no text input.
     */
    backspaceRemoves: {
      type: Boolean,
      default: !0
    },
    /**
     * Function that processes before clearing all input fields.
     * Return `false` to prevent value from being cleared.
     * @type {function(): (boolean|Promise<boolean>)}
     */
    beforeClearAll: {
      type: Function,
      default: Se(!0)
    },
    /**
     * Show branch nodes before leaf nodes?
     */
    branchNodesFirst: {
      type: Boolean,
      default: !1
    },
    /**
     * Should cache results of every search request?
     */
    cacheOptions: {
      type: Boolean,
      default: !0
    },
    /**
     * Show an "×" button that resets value?
     */
    clearable: {
      type: Boolean,
      default: !0
    },
    /**
     * Title for the "×" button when `multiple: true`.
     */
    clearAllText: {
      type: String,
      default: "Clear all"
    },
    /**
     * Whether to clear the search input after selecting.
     * Use only when `multiple` is `true`.
     * For single-select mode, it **always** clears the input after selecting an option regardless of the prop value.
     */
    clearOnSelect: {
      type: Boolean,
      default: !1
    },
    /**
     * Title for the "×" button.
     */
    clearValueText: {
      type: String,
      default: "Clear value"
    },
    /**
     * Whether to close the menu after selecting an option?
     * Use only when `multiple` is `true`.
     */
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * How many levels of branch nodes should be automatically expanded when loaded.
     * Set `Infinity` to make all branch nodes expanded by default.
     */
    defaultExpandLevel: {
      type: Number,
      default: 0
    },
    /**
     * The default set of options to show before the user starts searching. Used for async search mode.
     * When set to `true`, the results for search query as a empty string will be autoloaded.
     * @type {boolean|node[]}
     */
    defaultOptions: {
      default: !1
    },
    /**
     * Whether pressing delete key removes the last item if there is no text input.
     */
    deleteRemoves: {
      type: Boolean,
      default: !0
    },
    /**
     * Delimiter to use to join multiple values for the hidden field value.
     */
    delimiter: {
      type: String,
      default: ","
    },
    /**
     * Only show the nodes that match the search value directly, excluding its ancestors.
     *
     * @type {Object}
     */
    flattenSearchResults: {
      type: Boolean,
      default: !1
    },
    /**
     * Prevent branch nodes from being selected?
     */
    disableBranchNodes: {
      type: Boolean,
      default: !1
    },
    /**
     * Disable the control?
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Disable the fuzzy matching functionality?
     */
    disableFuzzyMatching: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to enable flat mode or not. Non-flat mode (default) means:
     *   - Whenever a branch node gets checked, all its children will be checked too
     *   - Whenever a branch node has all children checked, the branch node itself will be checked too
     * Set `true` to disable this mechanism
     */
    flat: {
      type: Boolean,
      default: !1
    },
    /**
     * Will be passed with all events as the last param.
     * Useful for identifying events origin.
    */
    instanceId: {
      // Add two trailing "$" to distinguish from explictly specified ids.
      default: () => `${Hs++}$$`,
      type: [String, Number]
    },
    /**
     * Joins multiple values into a single form field with the `delimiter` (legacy mode).
    */
    joinValues: {
      type: Boolean,
      default: !1
    },
    /**
     * Limit the display of selected options.
     * The rest will be hidden within the limitText string.
     */
    limit: {
      type: Number,
      default: 1 / 0
    },
    /**
     * Function that processes the message shown when selected elements pass the defined limit.
     * @type {function(number): string}
     */
    limitText: {
      type: Function,
      default: function(t) {
        return `and ${t} more`;
      }
    },
    /**
     * Text displayed when loading options.
     */
    loadingText: {
      type: String,
      default: "Loading..."
    },
    /**
     * Used for dynamically loading options.
     * @type {function({action: string, callback: (function((Error|string)=): void), parentNode: node=, instanceId}): void}
     */
    loadOptions: {
      type: Function
    },
    /**
     * Which node properties to filter on.
     */
    matchKeys: {
      type: Array,
      default: Se(["label"])
    },
    /**
     * Sets `maxHeight` style value of the menu.
     */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
     * Set `true` to allow selecting multiple options (a.k.a., multi-select mode).
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * Generates a hidden <input /> tag with this field name for html forms.
     */
    name: {
      type: String
    },
    /**
     * Text displayed when a branch node has no children.
     */
    noChildrenText: {
      type: String,
      default: "No sub-options."
    },
    /**
     * Text displayed when there are no available options.
     */
    noOptionsText: {
      type: String,
      default: "No options available."
    },
    /**
     * Text displayed when there are no matching search results.
     */
    noResultsText: {
      type: String,
      default: "No results found..."
    },
    /**
     * Used for normalizing source data.
     * @type {function(node, instanceId): node}
     */
    normalizer: {
      type: Function,
      default: Ds
    },
    /**
     * By default (`auto`), the menu will open below the control. If there is not
     * enough space, vue-treeselect will automatically flip the menu.
     * You can use one of other four options to force the menu to be always opened
     * to specified direction.
     * Acceptable values:
     *   - `"auto"`
     *   - `"below"`
     *   - `"bottom"`
     *   - `"above"`
     *   - `"top"`
     */
    openDirection: {
      type: String,
      default: "auto",
      validator(e) {
        return N(["auto", "top", "bottom", "above", "below"], e);
      }
    },
    /**
     * Whether to automatically open the menu when the control is clicked.
     */
    openOnClick: {
      type: Boolean,
      default: !0
    },
    /**
     * Whether to automatically open the menu when the control is focused.
     */
    openOnFocus: {
      type: Boolean,
      default: !1
    },
    /**
     * Array of available options.
     * @type {node[]}
     */
    options: {
      type: Array
    },
    /**
     * Field placeholder, displayed when there's no value.
     */
    placeholder: {
      type: String,
      default: "Select..."
    },
    /**
     * Applies HTML5 required attribute when needed.
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * Text displayed asking user whether to retry loading children options.
     */
    retryText: {
      type: String,
      default: "Retry?"
    },
    /**
     * Title for the retry button.
     */
    retryTitle: {
      type: String,
      default: "Click to retry"
    },
    /**
     * Enable searching feature?
     */
    searchable: {
      type: Boolean,
      default: !0
    },
    /**
     * Search in ancestor nodes too.
     */
    searchNested: {
      type: Boolean,
      default: !1
    },
    /**
     * Text tip to prompt for async search.
     */
    searchPromptText: {
      type: String,
      default: "Type to search..."
    },
    /**
     * Whether to show a children count next to the label of each branch node.
     */
    showCount: {
      type: Boolean,
      default: !1
    },
    /**
     * Used in conjunction with `showCount` to specify which type of count number should be displayed.
     * Acceptable values:
     *   - "ALL_CHILDREN"
     *   - "ALL_DESCENDANTS"
     *   - "LEAF_CHILDREN"
     *   - "LEAF_DESCENDANTS"
     */
    showCountOf: {
      type: String,
      default: T,
      validator(e) {
        return N([T, $, B, V], e);
      }
    },
    /**
     * Whether to show children count when searching.
     * Fallbacks to the value of `showCount` when not specified.
     * @type {boolean}
     */
    showCountOnSearch: null,
    /**
     * In which order the selected options should be displayed in trigger & sorted in `value` array.
     * Used for multi-select mode only.
     * Acceptable values:
     *   - "ORDER_SELECTED"
     *   - "LEVEL"
     *   - "INDEX"
     */
    sortValueBy: {
      type: String,
      default: ye,
      validator(e) {
        return N([ye, Oe, _e], e);
      }
    },
    /**
     * Tab index of the control.
     */
    tabIndex: {
      type: Number,
      default: 0
    },
    /**
     * The value of the control.
     * Should be `id` or `node` object for single-select mode, or an array of `id` or `node` object for multi-select mode.
     * Its format depends on the `valueFormat` prop.
     * For most cases, just use `v-model` instead.
     * @type {?Array}
     */
    modelValue: null,
    /**
     * Which kind of nodes should be included in the `value` array in multi-select mode.
     * Acceptable values:
     *   - "ALL" - Any node that is checked will be included in the `value` array
     *   - "BRANCH_PRIORITY" (default) - If a branch node is checked, all its descendants will be excluded in the `value` array
     *   - "LEAF_PRIORITY" - If a branch node is checked, this node itself and its branch descendants will be excluded from the `value` array but its leaf descendants will be included
     *   - "ALL_WITH_INDETERMINATE" - Any node that is checked will be included in the `value` array, plus indeterminate nodes
     */
    valueConsistsOf: {
      type: String,
      default: j,
      validator(e) {
        return N([G, j, J, Z], e);
      }
    },
    /**
     * Format of `value` prop.
     * Note that, when set to `"object"`, only `id` & `label` properties are required in each `node` object in `value` prop.
     * Acceptable values:
     *   - "id"
     *   - "object"
     */
    valueFormat: {
      type: String,
      default: "id"
    },
    /**
     * z-index of the menu.
     */
    zIndex: {
      type: [Number, String],
      default: 999
    }
  },
  data() {
    return {
      trigger: {
        // Is the control focused?
        isFocused: !1,
        // User entered search query - value of the input.
        searchQuery: ""
      },
      menu: {
        // Is the menu opened?
        isOpen: !1,
        // Id of current highlighted option.
        current: null,
        // The scroll position before last menu closing.
        lastScrollPosition: 0,
        // Which direction to open the menu.
        placement: "bottom"
      },
      forest: {
        // Normalized options.
        normalizedOptions: [],
        // <id, node> map for quick look-up.
        nodeMap: b(),
        // <id, checkedState> map, used for multi-select mode.
        checkedStateMap: b(),
        // Id list of all selected options.
        selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
        // <id, true> map for fast checking:
        //   if (forest.selectedNodeIds.indexOf(id) !== -1) forest.selectedNodeMap[id] === true
        selectedNodeMap: b()
      },
      // States of root options.
      rootOptionsStates: ee(),
      localSearch: {
        // Has user entered any query to search local options?
        active: !1,
        // Has any options matched the search query?
        noResults: !0,
        // <id, countObject> map for counting matched children/descendants.
        countMap: b()
      },
      // <searchQuery, remoteSearchEntry> map.
      remoteSearch: b()
    };
  },
  computed: {
    /* eslint-disable valid-jsdoc */
    /**
     * Normalized nodes that have been selected.
     * @type {node[]}
     */
    selectedNodes() {
      return this.forest.selectedNodeIds.map(this.getNode);
    },
    /**
     * Id list of selected nodes with `sortValueBy` prop applied.
     * @type {nodeId[]}
     */
    internalValue() {
      let e;
      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === G)
        e = this.forest.selectedNodeIds.slice();
      else if (this.valueConsistsOf === j)
        e = this.forest.selectedNodeIds.filter((t) => {
          const s = this.getNode(t);
          return s.isRootNode ? !0 : !this.isSelected(s.parentNode);
        });
      else if (this.valueConsistsOf === J)
        e = this.forest.selectedNodeIds.filter((t) => {
          const s = this.getNode(t);
          return s.isLeaf ? !0 : s.children.length === 0;
        });
      else if (this.valueConsistsOf === Z) {
        const t = [];
        e = this.forest.selectedNodeIds.slice(), this.selectedNodes.forEach((s) => {
          s.ancestors.forEach((n) => {
            N(t, n.id) || N(e, n.id) || t.push(n.id);
          });
        }), e.push(...t);
      }
      return this.sortValueBy === Oe ? e.sort((t, s) => ks(this.getNode(t), this.getNode(s))) : this.sortValueBy === _e && e.sort((t, s) => ke(this.getNode(t), this.getNode(s))), e;
    },
    /**
     * Has any option been selected?
     * @type {boolean}
     */
    hasValue() {
      return this.internalValue.length > 0;
    },
    /**
     * Single-select mode?
     * @type {boolean}
     */
    single() {
      return !this.multiple;
    },
    /**
     * Id list of nodes displayed in the menu. Nodes that are considered NOT visible:
     *   - descendants of a collapsed branch node
     *   - in local search mode, nodes that are not matched, unless
     *       - it's a branch node and has matched descendants
     *       - it's a leaf node and its parent node is explicitly set to show all children
     * @type {id[]}
     */
    visibleOptionIds() {
      const e = [];
      return this.traverseAllNodesByIndex((t) => {
        if ((!this.localSearch.active || this.shouldOptionBeIncludedInSearchResult(t)) && e.push(t.id), t.isBranch && !this.shouldExpand(t))
          return !1;
      }), e;
    },
    /**
     * Has any option should be displayed in the menu?
     * @type {boolean}
     */
    hasVisibleOptions() {
      return this.visibleOptionIds.length !== 0;
    },
    /**
     * Should show children count when searching?
     * @type {boolean}
     */
    showCountOnSearchComputed() {
      return typeof this.showCountOnSearch == "boolean" ? this.showCountOnSearch : this.showCount;
    },
    /**
     * Is there any branch node?
     * @type {boolean}
     */
    hasBranchNodes() {
      return this.forest.normalizedOptions.some((e) => e.isBranch);
    },
    shouldFlattenOptions() {
      return this.localSearch.active && this.flattenSearchResults;
    }
    /* eslint-enable valid-jsdoc */
  },
  watch: {
    alwaysOpen(e) {
      e ? this.openMenu() : this.closeMenu();
    },
    branchNodesFirst() {
      this.initialize();
    },
    disabled(e) {
      e && this.menu.isOpen ? this.closeMenu() : !e && !this.menu.isOpen && this.alwaysOpen && this.openMenu();
    },
    flat() {
      this.initialize();
    },
    internalValue(e, t) {
      X(e, t) && this.$emit("update:modelValue", this.getValue(), this.getInstanceId());
    },
    matchKeys() {
      this.initialize();
    },
    multiple(e) {
      e && this.buildForestState();
    },
    options: {
      handler() {
        this.async || (this.initialize(), this.rootOptionsStates.isLoaded = Array.isArray(this.options));
      },
      deep: !0,
      immediate: !0
    },
    "trigger.searchQuery"() {
      this.async ? this.handleRemoteSearch() : this.handleLocalSearch(), this.$emit("search-change", this.trigger.searchQuery, this.getInstanceId());
    },
    modelValue() {
      const e = this.extractCheckedNodeIdsFromValue();
      X(e, this.internalValue) && this.fixSelectedNodeIds(e);
    }
  },
  methods: {
    verifyProps() {
      _(
        () => this.async ? this.searchable : !0,
        () => 'For async search mode, the value of "searchable" prop must be true.'
      ), this.options == null && !this.loadOptions && _(
        () => !1,
        () => 'Are you meant to dynamically load options? You need to use "loadOptions" prop.'
      ), this.flat && _(
        () => this.multiple,
        () => 'You are using flat mode. But you forgot to add "multiple=true"?'
      ), this.flat || [
        "autoSelectAncestors",
        "autoSelectDescendants",
        "autoDeselectAncestors",
        "autoDeselectDescendants"
      ].forEach((t) => {
        _(
          () => !this[t],
          () => `"${t}" only applies to flat mode.`
        );
      });
    },
    resetFlags() {
      this._blurOnSelect = !1;
    },
    initialize() {
      const e = this.async ? this.getRemoteSearchEntry().options : this.options;
      if (Array.isArray(e)) {
        const t = this.forest.nodeMap;
        this.forest.nodeMap = b(), this.keepDataOfSelectedNodes(t), this.forest.normalizedOptions = this.normalize(w, e, t), this.fixSelectedNodeIds(this.internalValue);
      } else
        this.forest.normalizedOptions = [];
    },
    getInstanceId() {
      return this.instanceId == null ? this.id : this.instanceId;
    },
    getValue() {
      if (this.valueFormat === "id")
        return this.multiple ? this.internalValue.slice() : this.internalValue[0];
      const e = this.internalValue.map((t) => this.getNode(t).raw);
      return this.multiple ? e : e[0];
    },
    getNode(e) {
      return _(
        () => e != null,
        () => `Invalid node id: ${e}`
      ), e == null ? null : e in this.forest.nodeMap ? this.forest.nodeMap[e] : this.createFallbackNode(e);
    },
    createFallbackNode(e) {
      const t = this.extractNodeFromValue(e), s = this.enhancedNormalizer(t).label || `${e} (unknown)`, n = {
        id: e,
        label: s,
        ancestors: [],
        parentNode: w,
        isFallbackNode: !0,
        isRootNode: !0,
        isLeaf: !0,
        isBranch: !1,
        isDisabled: !1,
        isSelfDisabled: !1,
        isNew: !1,
        index: [-1],
        level: 0,
        raw: t
      };
      return this.forest.nodeMap[e] = n;
    },
    extractCheckedNodeIdsFromValue() {
      return this.modelValue == null ? [] : this.valueFormat === "id" ? this.multiple ? this.modelValue.slice() : [this.modelValue] : (this.multiple ? this.modelValue : [this.modelValue]).map((e) => this.enhancedNormalizer(e)).map((e) => e.id);
    },
    extractNodeFromValue(e) {
      const t = { id: e };
      if (this.valueFormat === "id")
        return t;
      const s = this.multiple ? Array.isArray(this.modelValue) ? this.modelValue : [] : this.modelValue ? [this.modelValue] : [];
      return As(
        s,
        (i) => i && this.enhancedNormalizer(i).id === e
      ) || t;
    },
    fixSelectedNodeIds(e) {
      let t = [];
      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === G)
        t = e;
      else if (this.valueConsistsOf === j)
        e.forEach((n) => {
          t.push(n);
          const i = this.getNode(n);
          i.isBranch && this.traverseDescendantsBFS(i, (r) => {
            t.push(r.id);
          });
        });
      else if (this.valueConsistsOf === J) {
        const n = b(), i = e.slice();
        for (; i.length; ) {
          const r = i.shift(), l = this.getNode(r);
          t.push(r), !l.isRootNode && (l.parentNode.id in n || (n[l.parentNode.id] = l.parentNode.children.length), --n[l.parentNode.id] === 0 && i.push(l.parentNode.id));
        }
      } else if (this.valueConsistsOf === Z) {
        const n = b(), i = e.filter((r) => {
          const l = this.getNode(r);
          return l.isLeaf || l.children.length === 0;
        });
        for (; i.length; ) {
          const r = i.shift(), l = this.getNode(r);
          t.push(r), !l.isRootNode && (l.parentNode.id in n || (n[l.parentNode.id] = l.parentNode.children.length), --n[l.parentNode.id] === 0 && i.push(l.parentNode.id));
        }
      }
      X(this.forest.selectedNodeIds, t) && (this.forest.selectedNodeIds = t), this.buildForestState();
    },
    keepDataOfSelectedNodes(e) {
      this.forest.selectedNodeIds.forEach((t) => {
        if (!e[t])
          return;
        const s = {
          ...e[t],
          isFallbackNode: !0
        };
        this.forest.nodeMap[t] = s;
      });
    },
    isSelected(e) {
      return this.forest.selectedNodeMap[e.id] === !0;
    },
    traverseDescendantsBFS(e, t) {
      if (!e.isBranch)
        return;
      const s = e.children.slice();
      for (; s.length; ) {
        const n = s[0];
        n.isBranch && s.push(...n.children), t(n), s.shift();
      }
    },
    traverseDescendantsDFS(e, t) {
      e.isBranch && e.children.forEach((s) => {
        this.traverseDescendantsDFS(s, t), t(s);
      });
    },
    traverseAllNodesDFS(e) {
      this.forest.normalizedOptions.forEach((t) => {
        this.traverseDescendantsDFS(t, e), e(t);
      });
    },
    traverseAllNodesByIndex(e) {
      const t = (s) => {
        s.children.forEach((n) => {
          e(n) !== !1 && n.isBranch && t(n);
        });
      };
      t({ children: this.forest.normalizedOptions });
    },
    toggleClickOutsideEvent(e) {
      e ? document.addEventListener("mousedown", this.handleClickOutside, !1) : document.removeEventListener("mousedown", this.handleClickOutside, !1);
    },
    getValueContainer() {
      return this.$refs.control.$refs["value-container"];
    },
    getInput() {
      return this.getValueContainer().$refs.input;
    },
    focusInput() {
      this.getInput().focus();
    },
    blurInput() {
      this.getInput().blur();
    },
    handleMouseDown: L(function(t) {
      if (t.preventDefault(), t.stopPropagation(), this.disabled)
        return;
      this.getValueContainer().$el.contains(t.target) && !this.menu.isOpen && (this.openOnClick || this.trigger.isFocused) && this.openMenu(), this._blurOnSelect ? this.blurInput() : this.focusInput(), this.resetFlags();
    }),
    handleClickOutside(e) {
      this.$refs.wrapper && !this.$refs.wrapper.contains(e.target) && (this.blurInput(), this.closeMenu());
    },
    handleLocalSearch() {
      const { searchQuery: e } = this.trigger, t = () => this.resetHighlightedOptionWhenNecessary(!0);
      if (!e)
        return this.localSearch.active = !1, t();
      this.localSearch.active = !0, this.localSearch.noResults = !0, this.traverseAllNodesDFS((i) => {
        i.isBranch && (i.isExpandedOnSearch = !1, i.showAllChildrenOnSearch = !1, i.isMatched = !1, i.hasMatchedDescendants = !1, this.localSearch.countMap[i.id] = {
          [T]: 0,
          [$]: 0,
          [B]: 0,
          [V]: 0
        });
      });
      const s = e.trim().toLocaleLowerCase(), n = s.replace(/\s+/g, " ").split(" ");
      this.traverseAllNodesDFS((i) => {
        this.searchNested && n.length > 1 ? i.isMatched = n.every(
          (r) => we(!1, r, i.nestedSearchLabel)
        ) : i.isMatched = this.matchKeys.some(
          (r) => we(!this.disableFuzzyMatching, s, i.lowerCased[r])
        ), i.isMatched && (this.localSearch.noResults = !1, i.ancestors.forEach((r) => this.localSearch.countMap[r.id][$]++), i.isLeaf && i.ancestors.forEach((r) => this.localSearch.countMap[r.id][V]++), i.parentNode !== w && (this.localSearch.countMap[i.parentNode.id][T] += 1, i.isLeaf && (this.localSearch.countMap[i.parentNode.id][B] += 1))), (i.isMatched || i.isBranch && i.isExpandedOnSearch) && i.parentNode !== w && (i.parentNode.isExpandedOnSearch = !0, i.parentNode.hasMatchedDescendants = !0);
      }), t();
    },
    handleRemoteSearch() {
      const { searchQuery: e } = this.trigger, t = this.getRemoteSearchEntry(), s = () => {
        this.initialize(), this.resetHighlightedOptionWhenNecessary(!0);
      };
      if ((e === "" || this.cacheOptions) && t.isLoaded)
        return s();
      this.callLoadOptionsProp({
        action: Vs,
        args: { searchQuery: e },
        isPending() {
          return t.isLoading;
        },
        start: () => {
          t.isLoading = !0, t.isLoaded = !1, t.loadingError = "";
        },
        succeed: (n) => {
          t.isLoaded = !0, t.options = n, this.trigger.searchQuery === e && s();
        },
        fail: (n) => {
          t.loadingError = te(n);
        },
        end: () => {
          t.isLoading = !1;
        }
      });
    },
    getRemoteSearchEntry() {
      const { searchQuery: e } = this.trigger, t = this.remoteSearch[e] || {
        ...ee(),
        options: []
      };
      if (this.$watch(
        () => t.options,
        () => {
          this.trigger.searchQuery === e && this.initialize();
        },
        { deep: !0 }
      ), e === "") {
        if (Array.isArray(this.defaultOptions))
          return t.options = this.defaultOptions, t.isLoaded = !0, t;
        if (this.defaultOptions !== !0)
          return t.isLoaded = !0, t;
      }
      return this.remoteSearch[e] || (this.remoteSearch[e] = t), t;
    },
    shouldExpand(e) {
      return this.localSearch.active ? e.isExpandedOnSearch : e.isExpanded;
    },
    shouldOptionBeIncludedInSearchResult(e) {
      return !!(e.isMatched || e.isBranch && e.hasMatchedDescendants && !this.flattenSearchResults || !e.isRootNode && e.parentNode.showAllChildrenOnSearch);
    },
    shouldShowOptionInMenu(e) {
      return !(this.localSearch.active && !this.shouldOptionBeIncludedInSearchResult(e));
    },
    getControl() {
      var e;
      return (e = this.$refs.control) == null ? void 0 : e.$el;
    },
    getMenu() {
      var t, s;
      const e = (s = (t = this.$refs.menu) == null ? void 0 : t.$refs) == null ? void 0 : s.menu;
      return e && e.nodeName !== "#comment" ? e : null;
    },
    setCurrentHighlightedOption(e, t = !0) {
      const s = this.menu.current;
      if (s != null && s in this.forest.nodeMap && (this.forest.nodeMap[s].isHighlighted = !1), this.menu.current = e.id, e.isHighlighted = !0, this.menu.isOpen && t) {
        const n = () => {
          const i = this.getMenu(), r = i.querySelector(`.vue-treeselect__option[data-id="${e.id}"]`);
          r && it(i, r);
        };
        this.getMenu() ? n() : this.$nextTick(n);
      }
    },
    resetHighlightedOptionWhenNecessary(e = !1) {
      const { current: t } = this.menu;
      (e || t == null || !(t in this.forest.nodeMap) || !this.shouldShowOptionInMenu(this.getNode(t))) && this.highlightFirstOption();
    },
    highlightFirstOption() {
      if (!this.hasVisibleOptions)
        return;
      const e = this.visibleOptionIds[0];
      this.setCurrentHighlightedOption(this.getNode(e));
    },
    highlightPrevOption() {
      if (!this.hasVisibleOptions)
        return;
      const e = this.visibleOptionIds.indexOf(this.menu.current) - 1;
      if (e === -1)
        return this.highlightLastOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[e]));
    },
    highlightNextOption() {
      if (!this.hasVisibleOptions)
        return;
      const e = this.visibleOptionIds.indexOf(this.menu.current) + 1;
      if (e === this.visibleOptionIds.length)
        return this.highlightFirstOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[e]));
    },
    highlightLastOption() {
      if (!this.hasVisibleOptions)
        return;
      const e = be(this.visibleOptionIds);
      this.setCurrentHighlightedOption(this.getNode(e));
    },
    resetSearchQuery() {
      this.trigger.searchQuery = "";
    },
    closeMenu() {
      !this.menu.isOpen || !this.disabled && this.alwaysOpen || (this.saveMenuScrollPosition(), this.menu.isOpen = !1, this.toggleClickOutsideEvent(!1), this.resetSearchQuery(), this.$emit("close", this.getValue(), this.getInstanceId()));
    },
    openMenu() {
      this.disabled || this.menu.isOpen || (this.menu.isOpen = !0, this.$nextTick(this.resetHighlightedOptionWhenNecessary), this.$nextTick(this.restoreMenuScrollPosition), !this.options && !this.async && this.loadRootOptions(), this.toggleClickOutsideEvent(!0), this.$emit("open", this.getInstanceId()));
    },
    toggleMenu() {
      this.menu.isOpen ? this.closeMenu() : this.openMenu();
    },
    toggleExpanded(e) {
      let t;
      this.localSearch.active ? (t = e.isExpandedOnSearch = !e.isExpandedOnSearch, t && (e.showAllChildrenOnSearch = !0)) : t = e.isExpanded = !e.isExpanded, t && !e.childrenStates.isLoaded && this.loadChildrenOptions(e);
    },
    buildForestState() {
      const e = b();
      this.forest.selectedNodeIds.forEach((s) => {
        e[s] = !0;
      }), this.forest.selectedNodeMap = e;
      const t = b();
      this.multiple && (this.traverseAllNodesByIndex((s) => {
        t[s.id] = le;
      }), this.selectedNodes.forEach((s) => {
        t[s.id] = ze, !this.flat && !this.disableBranchNodes && s.ancestors.forEach((n) => {
          this.isSelected(n) || (t[n.id] = Ve);
        });
      })), this.forest.checkedStateMap = t;
    },
    enhancedNormalizer(e) {
      return {
        ...e,
        ...this.normalizer(e, this.getInstanceId())
      };
    },
    normalize(e, t, s) {
      let n = t.map((i) => [this.enhancedNormalizer(i), i]).map(([i, r], l) => {
        this.checkDuplication(i), this.verifyNodeShape(i);
        const { id: c, label: h, children: p, isDefaultExpanded: v } = i, f = e === w, S = f ? 0 : e.level + 1, E = Array.isArray(p) || p === null, x = !E, H = !!i.isDisabled || !this.flat && !f && e.isDisabled, W = !!i.isSelfDisabled, D = !!i.isNew, M = this.matchKeys.reduce((d, u) => ({
          ...d,
          [u]: Fs(i[u]).toLocaleLowerCase()
        }), {}), q = f ? M.label : e.nestedSearchLabel + " " + M.label;
        this.forest.nodeMap[c] = b();
        const a = this.forest.nodeMap[c];
        if (a.id = c, a.label = h, a.level = S, a.ancestors = f ? [] : [e].concat(e.ancestors), a.index = (f ? [] : e.index).concat(l), a.parentNode = e, a.lowerCased = M, a.nestedSearchLabel = q, a.isDisabled = H, a.isSelfDisabled = W, a.isNew = D, a.isMatched = !1, a.isHighlighted = !1, a.isBranch = E, a.isLeaf = x, a.isRootNode = f, a.raw = r, E) {
          const d = Array.isArray(p);
          a.childrenStates = { ...ee(), isLoaded: d }, a.isExpanded = typeof v == "boolean" ? v : S < this.defaultExpandLevel, a.hasMatchedDescendants = !1, a.hasDisabledDescendants = !1, a.isExpandedOnSearch = !1, a.showAllChildrenOnSearch = !1, a.count = {
            [T]: 0,
            [$]: 0,
            [B]: 0,
            [V]: 0
          }, a.children = d ? this.normalize(a, p, s) : [], v === !0 && a.ancestors.forEach((u) => {
            u.isExpanded = !0;
          }), !d && typeof this.loadOptions != "function" ? _(
            () => !1,
            () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
          ) : !d && a.isExpanded && this.loadChildrenOptions(a);
        }
        if (a.ancestors.forEach((d) => d.count[$]++), x && a.ancestors.forEach((d) => d.count[V]++), f || (e.count[T] += 1, x && (e.count[B] += 1), H && (e.hasDisabledDescendants = !0)), s && s[c]) {
          const d = s[c];
          a.isMatched = d.isMatched, a.showAllChildrenOnSearch = d.showAllChildrenOnSearch, a.isHighlighted = d.isHighlighted, d.isBranch && a.isBranch && (a.isExpanded = d.isExpanded, a.isExpandedOnSearch = d.isExpandedOnSearch, d.childrenStates.isLoaded && !a.childrenStates.isLoaded ? a.isExpanded = !1 : a.childrenStates = { ...d.childrenStates });
        }
        return a;
      });
      if (this.branchNodesFirst) {
        const i = n.filter((l) => l.isBranch), r = n.filter((l) => l.isLeaf);
        n = i.concat(r);
      }
      return n;
    },
    loadRootOptions() {
      this.callLoadOptionsProp({
        action: $s,
        isPending: () => this.rootOptionsStates.isLoading,
        start: () => {
          this.rootOptionsStates.isLoading = !0, this.rootOptionsStates.loadingError = "";
        },
        succeed: () => {
          this.rootOptionsStates.isLoaded = !0, this.$nextTick(() => {
            this.resetHighlightedOptionWhenNecessary(!0);
          });
        },
        fail: (e) => {
          this.rootOptionsStates.loadingError = te(e);
        },
        end: () => {
          this.rootOptionsStates.isLoading = !1;
        }
      });
    },
    loadChildrenOptions(e) {
      const { id: t, raw: s } = e;
      this.callLoadOptionsProp({
        action: Bs,
        args: {
          // We always pass the raw node instead of the normalized node to any
          // callback provided by the user of this component.
          // Because the shape of the raw node is more likely to be closing to
          // what the back-end API service of the application needs.
          parentNode: s
        },
        isPending: () => this.getNode(t).childrenStates.isLoading,
        start: () => {
          this.getNode(t).childrenStates.isLoading = !0, this.getNode(t).childrenStates.loadingError = "";
        },
        succeed: () => {
          this.getNode(t).childrenStates.isLoaded = !0;
        },
        fail: (n) => {
          this.getNode(t).childrenStates.loadingError = te(n);
        },
        end: () => {
          this.getNode(t).childrenStates.isLoading = !1;
        }
      });
    },
    callLoadOptionsProp({ action: e, args: t, isPending: s, start: n, succeed: i, fail: r, end: l }) {
      if (!this.loadOptions || s())
        return;
      n();
      const c = ws((p, v) => {
        p ? r(p) : i(v), l();
      }), h = this.loadOptions({
        id: this.getInstanceId(),
        instanceId: this.getInstanceId(),
        action: e,
        ...t,
        callback: c
      });
      $e(h) && h.then(() => {
        c();
      }, (p) => {
        c(p);
      }).catch((p) => {
        console.error(p);
      });
    },
    checkDuplication(e) {
      _(
        () => !(e.id in this.forest.nodeMap && !this.forest.nodeMap[e.id].isFallbackNode),
        () => `Detected duplicate presence of node id ${JSON.stringify(e.id)}. Their labels are "${this.forest.nodeMap[e.id].label}" and "${e.label}" respectively.`
      );
    },
    verifyNodeShape(e) {
      _(
        () => !(e.children === void 0 && e.isBranch === !0),
        () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
      );
    },
    select(e) {
      if (this.disabled || e.isDisabled || e.isSelfDisabled)
        return;
      this.single && this.clear();
      const t = this.multiple && !this.flat ? this.forest.checkedStateMap[e.id] === le : !this.isSelected(e);
      t ? this._selectNode(e) : this._deselectNode(e), this.buildForestState(), t ? this.$emit("select", e.raw, this.getInstanceId()) : this.$emit("deselect", e.raw, this.getInstanceId()), this.localSearch.active && t && (this.single || this.clearOnSelect) && this.resetSearchQuery(), this.single && this.closeOnSelect && (this.closeMenu(), this.searchable && (this._blurOnSelect = !0));
    },
    clear() {
      this.hasValue && (this.single || this.allowClearingDisabled ? this.forest.selectedNodeIds = [] : this.forest.selectedNodeIds = this.forest.selectedNodeIds.filter(
        (e) => this.getNode(e).isDisabled || this.getNode(e).isSelfDisabled
      ), this.buildForestState());
    },
    // This is meant to be called only by `select()`.
    _selectNode(e) {
      if (this.single || this.disableBranchNodes)
        return this.addValue(e);
      if (this.flat) {
        this.addValue(e), this.autoSelectAncestors ? e.ancestors.forEach((s) => {
          !this.isSelected(s) && !s.isDisabled && !s.isSelfDisabled && this.addValue(s);
        }) : this.autoSelectDescendants && this.traverseDescendantsBFS(e, (s) => {
          !this.isSelected(s) && !s.isDisabled && !s.isSelfDisabled && this.addValue(s);
        });
        return;
      }
      const t = e.isLeaf || /* node.isBranch && */
      !e.hasDisabledDescendants || /* node.isBranch && */
      this.allowSelectingDisabledDescendants;
      if (t && this.addValue(e), e.isBranch && this.traverseDescendantsBFS(e, (s) => {
        (!s.isDisabled || !s.isSelfDisabled || this.allowSelectingDisabledDescendants) && this.addValue(s);
      }), t) {
        let s = e;
        for (; (s = s.parentNode) !== w && s.children.every(this.isSelected); )
          this.addValue(s);
      }
    },
    // This is meant to be called only by `select()`.
    _deselectNode(e) {
      if (this.disableBranchNodes)
        return this.removeValue(e);
      if (this.flat) {
        this.removeValue(e), this.autoDeselectAncestors ? e.ancestors.forEach((s) => {
          this.isSelected(s) && !s.isDisabled && !s.isSelfDisabled && this.removeValue(s);
        }) : this.autoDeselectDescendants && this.traverseDescendantsBFS(e, (s) => {
          this.isSelected(s) && !s.isDisabled && !s.isSelfDisabled && this.removeValue(s);
        });
        return;
      }
      let t = !1;
      if (e.isBranch && this.traverseDescendantsDFS(e, (s) => {
        (!s.isDisabled || !s.isSelfDisabled || this.allowSelectingDisabledDescendants) && (this.removeValue(s), t = !0);
      }), e.isLeaf || /* node.isBranch && */
      t || /* node.isBranch && */
      e.children.length === 0) {
        this.removeValue(e);
        let s = e;
        for (; (s = s.parentNode) !== w && this.isSelected(s); )
          this.removeValue(s);
      }
    },
    addValue(e) {
      this.forest.selectedNodeIds.push(e.id), this.forest.selectedNodeMap[e.id] = !0;
    },
    removeValue(e) {
      Ie(this.forest.selectedNodeIds, e.id), delete this.forest.selectedNodeMap[e.id];
    },
    removeLastValue() {
      if (!this.hasValue)
        return;
      if (this.single)
        return this.clear();
      const e = be(this.internalValue), t = this.getNode(e);
      this.select(t);
    },
    saveMenuScrollPosition() {
      const e = this.getMenu();
      e && (this.menu.lastScrollPosition = e.scrollTop);
    },
    restoreMenuScrollPosition() {
      const e = this.getMenu();
      e && (e.scrollTop = this.menu.lastScrollPosition);
    }
  },
  created() {
    this.verifyProps(), this.resetFlags();
  },
  mounted() {
    this.autoFocus && this.focusInput(), !this.options && !this.async && this.autoLoadRootOptions && this.loadRootOptions(), this.alwaysOpen && this.openMenu(), this.async && this.defaultOptions && this.handleRemoteSearch();
  },
  unmounted() {
    this.toggleClickOutsideEvent(!1);
  }
};
function Ps(e) {
  return typeof e == "string" ? e : e != null && !Ae(e) ? JSON.stringify(e) : "";
}
const js = {
  name: "vue-treeselect--hidden-fields",
  inject: ["instance"],
  render() {
    const {
      instance: e
    } = this;
    if (!e || !("name" in e) || !e.name || e.disabled || !e.hasValue)
      return null;
    let t = e.internalValue.map(Ps);
    return e.multiple && e.joinValues && (t = [t.join(e.delimiter)]), t.map((s, n) => o("input", {
      type: "hidden",
      name: e.name,
      value: s,
      key: "hidden-field-" + n
    }, null));
  }
}, Qs = [m.ENTER, m.END, m.HOME, m.ARROW_LEFT, m.ARROW_UP, m.ARROW_RIGHT, m.ARROW_DOWN], Fe = {
  name: "vue-treeselect--input",
  inject: ["instance"],
  data: () => ({
    inputWidth: Ne,
    value: ""
  }),
  computed: {
    needAutoSize() {
      const {
        instance: e
      } = this;
      return e.searchable && !e.disabled && e.multiple;
    },
    inputStyle() {
      return {
        width: this.needAutoSize ? `${this.inputWidth}px` : null
      };
    }
  },
  watch: {
    "instance.trigger.searchQuery"(e) {
      this.value = e;
    },
    value() {
      this.needAutoSize && this.$nextTick(this.updateInputWidth);
    }
  },
  created() {
    this.debouncedCallback = ns(this.updateSearchQuery, zs, {
      leading: !0,
      trailing: !0
    });
  },
  methods: {
    clear() {
      this.onInput({
        target: {
          value: ""
        }
      });
    },
    focus() {
      const {
        instance: e
      } = this;
      e.disabled || this.$refs.input && this.$refs.input.focus();
    },
    blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    onFocus() {
      const {
        instance: e
      } = this;
      e.trigger.isFocused = !0, e.openOnFocus && e.openMenu();
    },
    onBlur() {
      const {
        instance: e
      } = this, t = e.getMenu();
      if (t && document.activeElement === t)
        return this.focus();
      e.trigger.isFocused = !1, e.closeMenu();
    },
    onInput(e) {
      const {
        value: t
      } = e.target;
      this.value = t, t ? this.debouncedCallback() : (this.debouncedCallback.cancel(), this.updateSearchQuery());
    },
    // 用 keyUp 事件存在一个问题，删除输入框最后一个字符也会导致取消选中最后一项
    onKeyDown(e) {
      const {
        instance: t
      } = this, s = "which" in e ? e.which : (
        /* istanbul ignore next */
        e.keyCode
      );
      if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) {
        if (!t.menu.isOpen && N(Qs, s))
          return e.preventDefault(), t.openMenu();
        switch (s) {
          case m.BACKSPACE: {
            t.backspaceRemoves && !this.value.length && t.removeLastValue();
            break;
          }
          case m.ENTER: {
            if (e.preventDefault(), t.menu.current === null)
              return;
            const n = t.getNode(t.menu.current);
            if (n.isBranch && t.disableBranchNodes)
              return;
            t.select(n);
            break;
          }
          case m.ESCAPE: {
            this.value.length ? this.clear() : t.menu.isOpen && t.closeMenu();
            break;
          }
          case m.END: {
            e.preventDefault(), t.highlightLastOption();
            break;
          }
          case m.HOME: {
            e.preventDefault(), t.highlightFirstOption();
            break;
          }
          case m.ARROW_LEFT: {
            const n = t.getNode(t.menu.current);
            n.isBranch && t.shouldExpand(n) ? (e.preventDefault(), t.toggleExpanded(n)) : !n.isRootNode && (n.isLeaf || n.isBranch && !t.shouldExpand(n)) && (e.preventDefault(), t.setCurrentHighlightedOption(n.parentNode));
            break;
          }
          case m.ARROW_UP: {
            e.preventDefault(), t.highlightPrevOption();
            break;
          }
          case m.ARROW_RIGHT: {
            const n = t.getNode(t.menu.current);
            n.isBranch && !t.shouldExpand(n) && (e.preventDefault(), t.toggleExpanded(n));
            break;
          }
          case m.ARROW_DOWN: {
            e.preventDefault(), t.highlightNextOption();
            break;
          }
          case m.DELETE: {
            t.deleteRemoves && !this.value.length && t.removeLastValue();
            break;
          }
          default:
            t.openMenu();
        }
      }
    },
    onMouseDown(e) {
      this.value.length && e.stopPropagation();
    },
    renderInputContainer() {
      const {
        instance: e
      } = this, t = {}, s = [];
      return e.searchable && !e.disabled && (s.push(this.renderInput()), this.needAutoSize && s.push(this.renderSizer())), e.searchable || oe(t, {
        on: {
          focus: this.onFocus,
          blur: this.onBlur,
          keydown: this.onKeyDown
        },
        ref: "input"
      }), !e.searchable && !e.disabled && oe(t, {
        attrs: {
          tabIndex: e.tabIndex
        }
      }), o("div", je({
        class: "vue-treeselect__input-container"
      }, t), [s]);
    },
    renderInput() {
      const {
        instance: e
      } = this;
      return o("input", {
        ref: "input",
        class: "vue-treeselect__input",
        type: "text",
        autocomplete: "off",
        tabIndex: e.tabIndex,
        required: e.required && !e.hasValue,
        value: this.value,
        style: this.inputStyle,
        onFocus: this.onFocus,
        onInput: this.onInput,
        onBlur: this.onBlur,
        onKeydown: this.onKeyDown,
        onMousedown: this.onMouseDown
      }, null);
    },
    renderSizer() {
      return o("div", {
        ref: "sizer",
        class: "vue-treeselect__sizer"
      }, [this.value]);
    },
    updateInputWidth() {
      this.inputWidth = Math.max(Ne, this.$refs.sizer.scrollWidth + 15);
    },
    updateSearchQuery() {
      const {
        instance: e
      } = this;
      e.trigger.searchQuery = this.value;
    }
  },
  render() {
    return this.renderInputContainer();
  }
}, He = {
  name: "vue-treeselect--placeholder",
  inject: ["instance"],
  render() {
    const {
      instance: e
    } = this, t = {
      "vue-treeselect__placeholder": !0,
      "vue-treeselect-helper-zoom-effect-off": !0,
      "vue-treeselect-helper-hide": e.hasValue || e.trigger.searchQuery
    };
    return o("div", {
      class: t
    }, [e.placeholder]);
  }
}, Us = {
  name: "vue-treeselect--single-value",
  inject: ["instance"],
  methods: {
    renderSingleValueLabel() {
      const {
        instance: e
      } = this, t = e.selectedNodes[0], s = e.$slots["value-label"];
      return s ? s({
        node: t
      }) : t.label;
    }
  },
  render() {
    const {
      instance: e,
      $parent: {
        renderValueContainer: t
      }
    } = this, s = e.hasValue && !e.trigger.searchQuery;
    return t([s && o("div", {
      class: "vue-treeselect__single-value"
    }, [this.renderSingleValueLabel()]), o(He, null, null), o(Fe, {
      ref: "input"
    }, null)]);
  }
}, K = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, Ks = {
  name: "vue-treeselect--x"
}, qs = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
}, Ys = /* @__PURE__ */ g("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1), Xs = [
  Ys
];
function Gs(e, t, s, n, i, r) {
  return F(), U("svg", qs, Xs);
}
const We = /* @__PURE__ */ K(Ks, [["render", Gs]]), Js = {
  name: "vue-treeselect--multi-value-item",
  inject: ["instance"],
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  methods: {
    handleMouseDown: L(function() {
      const {
        instance: t,
        node: s
      } = this;
      t.select(s);
    })
  },
  render() {
    const {
      instance: e,
      node: t
    } = this, s = {
      "vue-treeselect__multi-value-item": !0,
      "vue-treeselect__multi-value-item-disabled": t.isDisabled || t.isSelfDisabled,
      "vue-treeselect__multi-value-item-new": t.isNew
    }, n = e.$slots["value-label"], i = n ? n({
      node: t
    }) : t.label;
    return o("div", {
      class: "vue-treeselect__multi-value-item-container"
    }, [o("div", {
      class: s,
      onMousedown: this.handleMouseDown
    }, [o("span", {
      class: "vue-treeselect__multi-value-label"
    }, [i]), o("span", {
      class: "vue-treeselect__icon vue-treeselect__value-remove"
    }, [o(We, null, null)])])]);
  }
}, Zs = {
  name: "vue-treeselect--multi-value",
  inject: ["instance"],
  methods: {
    renderMultiValueItems() {
      const {
        instance: e
      } = this;
      return e.internalValue.slice(0, e.limit).map(e.getNode).map((t) => o(Js, {
        key: `multi-value-item-${t.id}`,
        node: t
      }, null));
    },
    renderExceedLimitTip() {
      const {
        instance: e
      } = this, t = e.internalValue.length - e.limit;
      return t <= 0 ? null : o("div", {
        class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
        key: "exceed-limit-tip"
      }, [o("span", {
        class: "vue-treeselect__limit-tip-text"
      }, [e.limitText(t)])]);
    }
  },
  render() {
    const {
      renderValueContainer: e
    } = this.$parent;
    return e(o("div", {
      class: "vue-treeselect__multi-value",
      name: "vue-treeselect__multi-value-item--transition"
    }, [this.renderMultiValueItems(), this.renderExceedLimitTip(), o(He, {
      key: "placeholder"
    }, null), o(Fe, {
      ref: "input",
      key: "input"
    }, null)]));
  }
}, en = {
  name: "vue-treeselect--arrow"
}, tn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
}, sn = /* @__PURE__ */ g("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1), nn = [
  sn
];
function rn(e, t, s, n, i, r) {
  return F(), U("svg", tn, nn);
}
const Pe = /* @__PURE__ */ K(en, [["render", rn]]), on = {
  name: "vue-treeselect--control",
  inject: ["instance"],
  computed: {
    /* eslint-disable valid-jsdoc */
    /**
     * Should show the "×" button that resets value?
     * @return {boolean}
     */
    shouldShowX() {
      const {
        instance: e
      } = this;
      return e.clearable && !e.disabled && e.hasValue && (this.hasUndisabledValue || e.allowClearingDisabled);
    },
    /**
     * Should show the arrow button that toggles menu?
     * @return {boolean}
     */
    shouldShowArrow() {
      const {
        instance: e
      } = this;
      return e.alwaysOpen ? !e.menu.isOpen : !0;
    },
    /**
     * Has any undisabled option been selected?
     * @type {boolean}
     */
    hasUndisabledValue() {
      const {
        instance: e
      } = this;
      return e.hasValue && e.internalValue.some((t) => !e.getNode(t).isDisabled || !e.getNode(t).isSelfDisabled);
    }
    /* eslint-enable valid-jsdoc */
  },
  methods: {
    renderX() {
      const {
        instance: e
      } = this, t = e.multiple ? e.clearAllText : e.clearValueText;
      return this.shouldShowX ? o("div", {
        class: "vue-treeselect__x-container",
        title: t,
        onMousedown: this.handleMouseDownOnX
      }, [o(We, {
        class: "vue-treeselect__x"
      }, null)]) : null;
    },
    renderArrow() {
      const {
        instance: e
      } = this, t = {
        "vue-treeselect__control-arrow": !0,
        "vue-treeselect__control-arrow--rotated": e.menu.isOpen
      };
      return this.shouldShowArrow ? o("div", {
        class: "vue-treeselect__control-arrow-container",
        onMousedown: this.handleMouseDownOnArrow
      }, [o(Pe, {
        class: t
      }, null)]) : null;
    },
    handleMouseDownOnX: L(function(t) {
      t.stopPropagation(), t.preventDefault();
      const {
        instance: s
      } = this, n = s.beforeClearAll(), i = (r) => {
        r && s.clear();
      };
      $e(n) ? n.then(i) : setTimeout(() => i(n), 0);
    }),
    handleMouseDownOnArrow: L(function(t) {
      t.preventDefault(), t.stopPropagation();
      const {
        instance: s
      } = this;
      s.focusInput(), s.toggleMenu();
    }),
    // This is meant to be called by child `<Value />` component.
    renderValueContainer(e) {
      return o("div", {
        class: "vue-treeselect__value-container"
      }, [e]);
    }
  },
  render() {
    const {
      instance: e
    } = this, t = e.single ? Us : Zs;
    return o("div", {
      class: "vue-treeselect__control",
      onMousedown: e.handleMouseDown
    }, [o(t, {
      ref: "value-container"
    }, null), this.renderX(), this.renderArrow()]);
  }
}, y = {
  name: "vue-treeselect--tip",
  props: {
    type: {
      type: String,
      required: !0
    },
    icon: {
      type: String,
      required: !0
    }
  },
  render() {
    const {
      type: e,
      icon: t
    } = this;
    return o("div", {
      class: `vue-treeselect__tip vue-treeselect__${e}-tip`
    }, [o("div", {
      class: "vue-treeselect__icon-container"
    }, [o("span", {
      class: `vue-treeselect__icon-${t}`
    }, null)]), o("span", {
      class: `vue-treeselect__tip-text vue-treeselect__${e}-tip-text`
    }, [this.$slots.default()])]);
  }
};
let se, ne, ie;
const ln = {
  name: "vue-treeselect--option",
  inject: ["instance"],
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  computed: {
    shouldExpand() {
      const {
        instance: e,
        node: t
      } = this;
      return t.isBranch && e.shouldExpand(t);
    },
    shouldShow() {
      const {
        instance: e,
        node: t
      } = this;
      return e.shouldShowOptionInMenu(t);
    }
  },
  methods: {
    renderOption() {
      const {
        instance: e,
        node: t
      } = this, s = {
        "vue-treeselect__option": !0,
        "vue-treeselect__option--disabled": t.isDisabled || t.isSelfDisabled,
        "vue-treeselect__option--selected": e.isSelected(t),
        "vue-treeselect__option--highlight": t.isHighlighted,
        "vue-treeselect__option--matched": e.localSearch.active && t.isMatched,
        "vue-treeselect__option--hide": !this.shouldShow
      };
      return o("div", {
        class: s,
        onMouseenter: this.handleMouseEnterOption,
        "data-id": t.id
      }, [this.renderArrow(), this.renderLabelContainer([this.renderCheckboxContainer([this.renderCheckbox()]), this.renderLabel()])]);
    },
    renderSubOptionsList() {
      return this.shouldExpand ? o("div", {
        class: "vue-treeselect__list"
      }, [this.renderSubOptions(), this.renderNoChildrenTip(), this.renderLoadingChildrenTip(), this.renderLoadingChildrenErrorTip()]) : null;
    },
    renderArrow() {
      const {
        instance: e,
        node: t
      } = this;
      if (e.shouldFlattenOptions && this.shouldShow)
        return null;
      if (t.isBranch) {
        const s = {
          "vue-treeselect__option-arrow": !0,
          "vue-treeselect__option-arrow--rotated": this.shouldExpand
        };
        return o("div", {
          class: "vue-treeselect__option-arrow-container",
          onMousedown: this.handleMouseDownOnArrow
        }, [o("div", {
          name: "vue-treeselect__option-arrow--prepare"
        }, [o(Pe, {
          class: s
        }, null)])]);
      }
      return (
        /*node.isLeaf && */
        e.hasBranchNodes ? (se || (se = o("div", {
          class: "vue-treeselect__option-arrow-placeholder"
        }, [z(" ")])), se) : null
      );
    },
    renderLabelContainer(e) {
      return o("div", {
        class: "vue-treeselect__label-container",
        onMousedown: this.handleMouseDownOnLabelContainer
      }, [e]);
    },
    renderCheckboxContainer(e) {
      const {
        instance: t,
        node: s
      } = this;
      return t.single || t.disableBranchNodes && s.isBranch ? null : o("div", {
        class: "vue-treeselect__checkbox-container"
      }, [e]);
    },
    renderCheckbox() {
      const {
        instance: e,
        node: t
      } = this, s = e.forest.checkedStateMap[t.id], n = {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": s === ze,
        "vue-treeselect__checkbox--indeterminate": s === Ve,
        "vue-treeselect__checkbox--unchecked": s === le,
        "vue-treeselect__checkbox--disabled": t.isDisabled || t.isSelfDisabled
      };
      return ne || (ne = o("span", {
        class: "vue-treeselect__check-mark"
      }, null)), ie || (ie = o("span", {
        class: "vue-treeselect__minus-mark"
      }, null)), o("span", {
        class: n
      }, [ne, ie]);
    },
    renderLabel() {
      const {
        instance: e,
        node: t
      } = this, s = t.isBranch && (e.localSearch.active ? e.showCountOnSearchComputed : e.showCount), n = s ? e.localSearch.active ? e.localSearch.countMap[t.id][e.showCountOf] : t.count[e.showCountOf] : NaN, i = "vue-treeselect__label", r = "vue-treeselect__count", l = e.$slots["option-label"];
      return l ? l({
        node: t,
        shouldShowCount: s,
        count: n,
        labelClassName: i,
        countClassName: r
      }) : o("label", {
        class: i
      }, [t.label, s && o("span", {
        class: r
      }, [z("("), n, z(")")])]);
    },
    renderSubOptions() {
      const {
        node: e
      } = this;
      return e.childrenStates.isLoaded ? e.children.map((t) => o(k("vue-treeselect--option"), {
        node: t,
        key: t.id
      }, null)) : null;
    },
    renderNoChildrenTip() {
      const {
        instance: e,
        node: t
      } = this;
      return !t.childrenStates.isLoaded || t.children.length ? null : o(y, {
        type: "no-children",
        icon: "warning"
      }, {
        default: () => [e.noChildrenText]
      });
    },
    renderLoadingChildrenTip() {
      const {
        instance: e,
        node: t
      } = this;
      return t.childrenStates.isLoading ? o(y, {
        type: "loading",
        icon: "loader"
      }, {
        default: () => [e.loadingText]
      }) : null;
    },
    renderLoadingChildrenErrorTip() {
      const {
        instance: e,
        node: t
      } = this;
      return t.childrenStates.loadingError ? o(y, {
        type: "error",
        icon: "error"
      }, {
        default: () => [t.childrenStates.loadingError, o("a", {
          class: "vue-treeselect__retry",
          title: e.retryTitle,
          onMousedown: this.handleMouseDownOnRetry
        }, [e.retryText])]
      }) : null;
    },
    handleMouseEnterOption(e) {
      const {
        instance: t,
        node: s
      } = this;
      e.target === e.currentTarget && t.setCurrentHighlightedOption(s, !1);
    },
    handleMouseDownOnArrow: L(function() {
      const {
        instance: t,
        node: s
      } = this;
      t.toggleExpanded(s);
    }),
    handleMouseDownOnLabelContainer: L(function() {
      const {
        instance: t,
        node: s
      } = this;
      s.isBranch && t.disableBranchNodes ? t.toggleExpanded(s) : t.select(s);
    }),
    handleMouseDownOnRetry: L(function() {
      const {
        instance: t,
        node: s
      } = this;
      t.loadChildrenOptions(s);
    })
  },
  render() {
    const {
      node: e
    } = this, s = {
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${this.instance.shouldFlattenOptions ? 0 : e.level}`]: !0
    };
    return o("div", {
      class: s
    }, [this.renderOption(), e.isBranch ? o("div", null, [this.renderSubOptionsList()]) : ""]);
  }
}, an = {
  top: "top",
  bottom: "bottom",
  above: "top",
  below: "bottom"
}, cn = {
  name: "vue-treeselect--menu",
  inject: ["instance"],
  data() {
    return {
      controlResizeAndScrollEventListeners: null,
      controlSizeWatcher: null,
      menuSizeWatcher: null,
      menuResizeAndScrollEventListeners: null
    };
  },
  computed: {
    classes() {
      let e = {
        "vue-treeselect__menu-container": !0
      };
      return this.instance.appendToBody && (e["vue-treeselect__portal-target"] = !0), e;
    },
    menuStyle() {
      const {
        instance: e
      } = this;
      return {
        maxHeight: e.maxHeight + "px"
      };
    },
    menuContainerStyle() {
      const {
        instance: e
      } = this;
      return {
        zIndex: e.appendToBody ? null : e.zIndex
      };
    }
  },
  watch: {
    "instance.menu.placement"() {
      this.instance.appendToBody && this.updateMenuContainerOffset();
    },
    "instance.menu.isOpen": {
      handler(e) {
        e ? (this.$nextTick(this.onMenuOpen), this.instance.appendToBody && this.setupHandlers()) : (this.onMenuClose(), this.instance.appendToBody && this.removeHandlers());
      },
      immediate: !0
    }
  },
  created() {
    this.menuSizeWatcher = null, this.menuResizeAndScrollEventListeners = null;
  },
  mounted() {
  },
  unmounted() {
    this.onMenuClose(), this.instance.appendToBody && this.removeHandlers();
  },
  methods: {
    renderMenu() {
      const {
        instance: e
      } = this;
      return e.menu.isOpen ? o("div", {
        ref: "menu",
        class: "vue-treeselect__menu",
        onMousedown: e.handleMouseDown,
        style: this.menuStyle
      }, [this.renderBeforeList(), e.async ? this.renderAsyncSearchMenuInner() : e.localSearch.active ? this.renderLocalSearchMenuInner() : this.renderNormalMenuInner(), this.renderAfterList()]) : null;
    },
    renderBeforeList() {
      const {
        instance: e
      } = this, t = e.$slots["before-list"];
      return t ? t() : null;
    },
    renderAfterList() {
      const {
        instance: e
      } = this, t = e.$slots["after-list"];
      return t ? t() : null;
    },
    renderNormalMenuInner() {
      const {
        instance: e
      } = this;
      return e.rootOptionsStates.isLoading ? this.renderLoadingOptionsTip() : e.rootOptionsStates.loadingError ? this.renderLoadingRootOptionsErrorTip() : e.rootOptionsStates.isLoaded && e.forest.normalizedOptions.length === 0 ? this.renderNoAvailableOptionsTip() : this.renderOptionList();
    },
    renderLocalSearchMenuInner() {
      const {
        instance: e
      } = this;
      return e.rootOptionsStates.isLoading ? this.renderLoadingOptionsTip() : e.rootOptionsStates.loadingError ? this.renderLoadingRootOptionsErrorTip() : e.rootOptionsStates.isLoaded && e.forest.normalizedOptions.length === 0 ? this.renderNoAvailableOptionsTip() : e.localSearch.noResults ? this.renderNoResultsTip() : this.renderOptionList();
    },
    renderAsyncSearchMenuInner() {
      const {
        instance: e
      } = this, t = e.getRemoteSearchEntry(), s = e.trigger.searchQuery === "" && !e.defaultOptions, n = s ? !1 : t.isLoaded && t.options.length === 0;
      return s ? this.renderSearchPromptTip() : t.isLoading ? this.renderLoadingOptionsTip() : t.loadingError ? this.renderAsyncSearchLoadingErrorTip() : n ? this.renderNoResultsTip() : this.renderOptionList();
    },
    renderOptionList() {
      const {
        instance: e
      } = this;
      return o("div", {
        class: "vue-treeselect__list"
      }, [e.forest.normalizedOptions.map((t) => o(ln, {
        node: t,
        key: t.id
      }, null))]);
    },
    renderSearchPromptTip() {
      const {
        instance: e
      } = this;
      return o(y, {
        type: "search-prompt",
        icon: "warning"
      }, {
        default: () => [e.searchPromptText]
      });
    },
    renderLoadingOptionsTip() {
      const {
        instance: e
      } = this;
      return o(y, {
        type: "loading",
        icon: "loader"
      }, {
        default: () => [e.loadingText]
      });
    },
    renderLoadingRootOptionsErrorTip() {
      const {
        instance: e
      } = this;
      return o(y, {
        type: "error",
        icon: "error"
      }, {
        default: () => [e.rootOptionsStates.loadingError, o("a", {
          class: "vue-treeselect__retry",
          onClick: e.loadRootOptions,
          title: e.retryTitle
        }, [e.retryText])]
      });
    },
    renderAsyncSearchLoadingErrorTip() {
      const {
        instance: e
      } = this, t = e.getRemoteSearchEntry();
      return o(y, {
        type: "error",
        icon: "error"
      }, {
        default: () => [t.loadingError, o("a", {
          class: "vue-treeselect__retry",
          onClick: e.handleRemoteSearch,
          title: e.retryTitle
        }, [e.retryText])]
      });
    },
    renderNoAvailableOptionsTip() {
      const {
        instance: e
      } = this;
      return o(y, {
        type: "no-options",
        icon: "warning"
      }, {
        default: () => [e.noOptionsText]
      });
    },
    renderNoResultsTip() {
      const {
        instance: e
      } = this;
      return o(y, {
        type: "no-results",
        icon: "warning"
      }, {
        default: () => [e.noResultsText]
      });
    },
    onMenuOpen() {
      this.adjustMenuOpenDirection(), this.setupMenuSizeWatcher(), this.setupMenuResizeAndScrollEventListeners(), this.instance.appendToBody && this.updateMenuContainerOffset();
    },
    onMenuClose() {
      this.removeMenuSizeWatcher(), this.removeMenuResizeAndScrollEventListeners();
    },
    adjustMenuOpenDirection() {
      const {
        instance: e
      } = this;
      if (!e.menu.isOpen)
        return;
      const t = e.getMenu(), s = e.getControl(), n = t.getBoundingClientRect(), i = s.getBoundingClientRect(), r = n.height, l = window.innerHeight, c = i.top, h = window.innerHeight - i.bottom, p = i.top >= 0 && i.top <= l || i.top < 0 && i.bottom > 0, v = h > r + Ee, f = c > r + Ee;
      p ? e.openDirection !== "auto" ? e.menu.placement = an[e.openDirection] : v || !f ? e.menu.placement = "bottom" : e.menu.placement = "top" : e.closeMenu();
    },
    setupMenuSizeWatcher() {
      const {
        instance: e
      } = this, t = e.getMenu();
      this.menuSizeWatcher || (this.menuSizeWatcher = {
        remove: me(t, this.adjustMenuOpenDirection)
      });
    },
    setupMenuResizeAndScrollEventListeners() {
      const {
        instance: e
      } = this, t = e.getControl();
      this.menuResizeAndScrollEventListeners || (this.menuResizeAndScrollEventListeners = {
        remove: ge(t, this.adjustMenuOpenDirection)
      });
    },
    removeMenuSizeWatcher() {
      this.menuSizeWatcher && (this.menuSizeWatcher.remove(), this.menuSizeWatcher = null);
    },
    removeMenuResizeAndScrollEventListeners() {
      this.menuResizeAndScrollEventListeners && (this.menuResizeAndScrollEventListeners.remove(), this.menuResizeAndScrollEventListeners = null);
    },
    // These functions are for appendToBody mode.
    setupHandlers() {
      this.updateWidth(), this.updateMenuContainerOffset(), this.setupControlResizeAndScrollEventListeners(), this.setupControlSizeWatcher();
    },
    removeHandlers() {
      this.removeControlResizeAndScrollEventListeners(), this.removeControlSizeWatcher();
    },
    setupControlResizeAndScrollEventListeners() {
      const {
        instance: e
      } = this, t = e.getControl();
      this.controlResizeAndScrollEventListeners || (this.controlResizeAndScrollEventListeners = {
        remove: ge(t, this.updateMenuContainerOffset)
      });
    },
    setupControlSizeWatcher() {
      const {
        instance: e
      } = this, t = e.getControl();
      this.controlSizeWatcher || (this.controlSizeWatcher = {
        remove: me(t, () => {
          this.updateWidth(), this.updateMenuContainerOffset();
        })
      });
    },
    removeControlResizeAndScrollEventListeners() {
      this.controlResizeAndScrollEventListeners && (this.controlResizeAndScrollEventListeners.remove(), this.controlResizeAndScrollEventListeners = null);
    },
    removeControlSizeWatcher() {
      this.controlSizeWatcher && (this.controlSizeWatcher.remove(), this.controlSizeWatcher = null);
    },
    updateWidth() {
      const {
        instance: e
      } = this, t = this.$el, n = e.getControl().getBoundingClientRect();
      t && (t.style.width = n.width + "px");
    },
    updateMenuContainerOffset() {
      const {
        instance: e
      } = this, t = e.getControl();
      if (t) {
        const s = t.getBoundingClientRect(), n = Math.round(s.left) + "px", i = Math.round(s.bottom + window.scrollY) + "px", r = this.$refs["menu-container"].style;
        r.top = i, r.left = n;
      }
    }
  },
  render() {
    return o("div", {
      ref: "menu-container",
      class: this.classes,
      style: this.menuContainerStyle
    }, [o("div", {
      name: "vue-treeselect__menu--transition"
    }, [this.renderMenu()])]);
  }
}, un = Le({
  name: "vue-treeselect",
  mixins: [Ws],
  components: {
    HiddenFields: js,
    Control: on,
    Menu: cn
  },
  computed: {
    wrapperClass() {
      return {
        "vue-treeselect": !0,
        "vue-treeselect--single": this.single,
        "vue-treeselect--multi": this.multiple,
        "vue-treeselect--searchable": this.searchable,
        "vue-treeselect--disabled": this.disabled,
        "vue-treeselect--focused": this.trigger.isFocused,
        "vue-treeselect--has-value": this.hasValue,
        "vue-treeselect--open": this.menu.isOpen,
        "vue-treeselect--open-above": this.menu.placement === "top",
        "vue-treeselect--open-below": this.menu.placement === "bottom",
        "vue-treeselect--branch-nodes-disabled": this.disableBranchNodes,
        "vue-treeselect--append-to-body": this.appendToBody
      };
    }
  }
});
function dn(e, t, s, n, i, r) {
  const l = k("HiddenFields"), c = k("Control"), h = k("Menu");
  return F(), U("div", {
    ref: "wrapper",
    class: Qe(e.wrapperClass)
  }, [
    o(l),
    o(c, { ref: "control" }, null, 512),
    (F(), Ue(Ke, {
      disabled: !e.appendToBody,
      to: "body"
    }, [
      o(h, { ref: "menu" }, null, 512)
    ], 8, ["disabled"]))
  ], 2);
}
const hn = /* @__PURE__ */ K(un, [["render", dn]]), pn = Le({
  setup() {
    let e = R([2, 1]), t = R([]), s = R([]), n = R([]);
    return R("0"), {
      treeData: qe({
        label: "root",
        expand: !0,
        id: 1,
        children: [
          { label: "child 1", id: 2 },
          { label: "child 2", id: 3 },
          {
            label: "subparent 1",
            id: 4,
            expand: !1,
            children: [
              { label: "subchild 1", id: 5 },
              {
                label: "subchild 2",
                id: 6,
                expand: !1,
                children: [
                  { label: "subchild 11", id: 7 },
                  { label: "subchild 11", id: 8 },
                  { label: "subchild 11", id: 9 },
                  { label: "subchild 11", id: 10 },
                  { label: "subchild 11", id: 11 },
                  { label: "subchild 11", id: 12 },
                  { label: "subchild 11", id: 13 },
                  { label: "subchild 11", id: 14 },
                  { label: "subchild 11", id: 15 },
                  { label: "subchild 22", id: 16 }
                ]
              }
            ]
          }
        ]
      }),
      selected: e,
      selected2: t,
      selected3: s,
      selected4: n
    };
  }
}), fn = { style: { "margin-top": "100px", "margin-left": "100px", "max-width": "300px" } }, mn = { style: { "margin-top": "100px", "margin-left": "100px", "max-width": "300px" } }, gn = /* @__PURE__ */ Xe("<p>lorem ipsum dolor sit amet</p><p>lorem ipsum dolor sit amet</p><p>lorem ipsum dolor sit amet</p><p>lorem ipsum dolor sit amet</p><p>lorem ipsum dolor sit amet</p><p>lorem ipsum dolor sit amet</p><p>lorem ipsum dolor sit amet</p><p>lorem ipsum dolor sit amet</p><p>lorem ipsum dolor sit amet</p><p>lorem ipsum dolor sit amet</p><p>lorem ipsum dolor sit amet</p><p>lorem ipsum dolor sit amet</p><p>lorem ipsum dolor sit amet</p>", 13), vn = { style: { "margin-top": "100px", "margin-left": "100px", "max-width": "300px" } }, Sn = /* @__PURE__ */ g("p", null, "lorem ipsum dolor sit amet", -1), bn = /* @__PURE__ */ g("p", null, "lorem ipsum dolor sit amet", -1), yn = /* @__PURE__ */ g("p", null, "lorem ipsum dolor sit amet", -1), On = /* @__PURE__ */ g("p", null, "lorem ipsum dolor sit amet", -1), _n = /* @__PURE__ */ g("p", null, "lorem ipsum dolor sit amet", -1), Nn = /* @__PURE__ */ g("p", null, "lorem ipsum dolor sit amet", -1), En = /* @__PURE__ */ g("p", null, "lorem ipsum dolor sit amet", -1);
function wn(e, t, s, n, i, r) {
  const l = k("vue-treeselect");
  return F(), U("div", null, [
    g("div", fn, [
      o(l, {
        multiple: !0,
        options: [e.treeData],
        noResultsText: "No results...",
        placeholder: "Select items...",
        modelValue: e.selected,
        "onUpdate:modelValue": t[0] || (t[0] = (c) => e.selected = c),
        appendToBody: !0,
        "default-expand-level": 0,
        autoSelectDescendants: !0,
        autoDeselectDescendants: !0,
        flat: !0,
        searchable: !1,
        "show-count": !0
      }, null, 8, ["options", "modelValue"]),
      z(" Not appended to body: "),
      o(l, {
        multiple: !1,
        placement: "bottom",
        appendToBody: !1,
        options: [e.treeData],
        noResultsText: "No results...",
        placeholder: "Select items...",
        modelValue: e.selected4,
        "onUpdate:modelValue": t[1] || (t[1] = (c) => e.selected4 = c),
        "default-expand-level": 0,
        autoSelectDescendants: !0,
        autoDeselectDescendants: !0,
        flat: !0,
        searchable: !1,
        "show-count": !0,
        "open-on-click": !0,
        "open-on-focus": !0,
        "clear-on-select": !0,
        isDefaultExpanded: !0,
        "always-open": !1,
        disabled: e.read_only,
        disableFuzzyMatching: !0,
        defaultExpandLevel: e.expandLevel,
        class: "tree-select",
        "close-on-select": !0,
        maxHeight: 250,
        "open-direction": "auto"
      }, null, 8, ["options", "modelValue", "disabled", "defaultExpandLevel"])
    ]),
    g("div", null, " Selected: " + Ye(e.selected), 1),
    z(" Append to body: "),
    g("div", mn, [
      o(l, {
        multiple: !1,
        options: [e.treeData],
        placement: "top",
        noResultsText: "No results...",
        placeholder: "Select items...",
        modelValue: e.selected2,
        "onUpdate:modelValue": t[2] || (t[2] = (c) => e.selected2 = c),
        appendToBody: !0,
        "default-expand-level": 0,
        autoSelectDescendants: !0,
        autoDeselectDescendants: !0,
        flat: !0,
        searchable: !1,
        "show-count": !0,
        "open-on-click": !0,
        "open-on-focus": !0,
        "clear-on-select": !0,
        isDefaultExpanded: !0,
        "always-open": !1,
        disableFuzzyMatching: !0,
        defaultExpandLevel: 999,
        class: "tree-select",
        "close-on-select": !1,
        maxHeight: 250,
        "open-direction": "auto"
      }, null, 8, ["options", "modelValue"])
    ]),
    gn,
    g("div", vn, [
      o(l, {
        multiple: !0,
        options: [e.treeData],
        placement: "top",
        noResultsText: "No results...",
        placeholder: "Select items...",
        modelValue: e.selected3,
        "onUpdate:modelValue": t[3] || (t[3] = (c) => e.selected3 = c),
        appendToBody: !0,
        "default-expand-level": 0,
        autoSelectDescendants: !0,
        autoDeselectDescendants: !0,
        flat: !0,
        searchable: !1,
        "show-count": !0,
        "open-on-click": !0,
        "open-on-focus": !0,
        "clear-on-select": !0,
        isDefaultExpanded: !0,
        "always-open": !1,
        disableFuzzyMatching: !0,
        defaultExpandLevel: 999,
        class: "tree-select",
        "close-on-select": !1,
        maxHeight: 250,
        "open-direction": "auto"
      }, null, 8, ["options", "modelValue"])
    ]),
    Sn,
    bn,
    yn,
    On,
    _n,
    Nn,
    En
  ]);
}
const Ln = /* @__PURE__ */ K(pn, [["render", wn]]);
Ge(Ln).component("vue-treeselect", hn).mount("#app");
