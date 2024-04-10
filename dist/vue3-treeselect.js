import { createVNode as r, mergeProps as He, openBlock as H, createElementBlock as ie, createElementVNode as Ee, createTextVNode as j, resolveComponent as F, defineComponent as Pe, normalizeClass as je, createBlock as Ue, Teleport as Qe } from "vue";
var k = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function C(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ke(e, t) {
  var n = t.length, s = e.length;
  if (s > n)
    return !1;
  if (s === n)
    return e === t;
  e:
    for (var i = 0, o = 0; i < s; i++) {
      for (var l = e.charCodeAt(i); o < n; )
        if (t.charCodeAt(o++) === l)
          continue e;
      return !1;
    }
  return !0;
}
var qe = Ke;
const Ye = /* @__PURE__ */ C(qe);
function Xe() {
}
var Ge = Xe;
const Je = /* @__PURE__ */ C(Ge), y = process.env.NODE_ENV === "production" ? (
  /* istanbul ignore next */
  Je
) : function(t, n) {
  if (!t()) {
    const s = ["[Vue-Treeselect Warning]"].concat(n());
    console.error(...s);
  }
};
function w(e) {
  return function(n, ...s) {
    n.type === "mousedown" && n.button === 0 && e.call(this, n, ...s);
  };
}
function Ze(e, t) {
  const n = e.getBoundingClientRect(), s = t.getBoundingClientRect(), i = t.offsetHeight / 3;
  s.bottom + i > n.bottom ? e.scrollTop = Math.min(
    t.offsetTop + t.clientHeight - e.offsetHeight + i,
    e.scrollHeight
  ) : s.top - i < n.top && (e.scrollTop = Math.max(t.offsetTop - i, 0));
}
function et(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var we = et, tt = typeof k == "object" && k && k.Object === Object && k, nt = tt, st = nt, it = typeof self == "object" && self && self.Object === Object && self, rt = st || it || Function("return this")(), Ce = rt, ot = Ce, lt = function() {
  return ot.Date.now();
}, at = lt, ct = /\s/;
function ut(e) {
  for (var t = e.length; t-- && ct.test(e.charAt(t)); )
    ;
  return t;
}
var ht = ut, dt = ht, ft = /^\s+/;
function pt(e) {
  return e && e.slice(0, dt(e) + 1).replace(ft, "");
}
var mt = pt, gt = Ce, vt = gt.Symbol, Le = vt, le = Le, Me = Object.prototype, St = Me.hasOwnProperty, bt = Me.toString, x = le ? le.toStringTag : void 0;
function Ot(e) {
  var t = St.call(e, x), n = e[x];
  try {
    e[x] = void 0;
    var s = !0;
  } catch {
  }
  var i = bt.call(e);
  return s && (t ? e[x] = n : delete e[x]), i;
}
var yt = Ot, _t = Object.prototype, Nt = _t.toString;
function Et(e) {
  return Nt.call(e);
}
var wt = Et, ae = Le, Ct = yt, Lt = wt, Mt = "[object Null]", Tt = "[object Undefined]", ce = ae ? ae.toStringTag : void 0;
function Dt(e) {
  return e == null ? e === void 0 ? Tt : Mt : ce && ce in Object(e) ? Ct(e) : Lt(e);
}
var It = Dt;
function xt(e) {
  return e != null && typeof e == "object";
}
var Rt = xt, At = It, Bt = Rt, $t = "[object Symbol]";
function Vt(e) {
  return typeof e == "symbol" || Bt(e) && At(e) == $t;
}
var kt = Vt, zt = mt, ue = we, Ft = kt, he = NaN, Wt = /^[-+]0x[0-9a-f]+$/i, Ht = /^0b[01]+$/i, Pt = /^0o[0-7]+$/i, jt = parseInt;
function Ut(e) {
  if (typeof e == "number")
    return e;
  if (Ft(e))
    return he;
  if (ue(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ue(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = zt(e);
  var n = Ht.test(e);
  return n || Pt.test(e) ? jt(e.slice(2), n ? 2 : 8) : Wt.test(e) ? he : +e;
}
var Te = Ut, Qt = we, U = at, de = Te, Kt = "Expected a function", qt = Math.max, Yt = Math.min;
function Xt(e, t, n) {
  var s, i, o, l, c, d, f = 0, g = !1, p = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Kt);
  t = de(t) || 0, Qt(n) && (g = !!n.leading, p = "maxWait" in n, o = p ? qt(de(n.maxWait) || 0, t) : o, v = "trailing" in n ? !!n.trailing : v);
  function N(u) {
    var O = s, I = i;
    return s = i = void 0, f = u, l = e.apply(I, O), l;
  }
  function D(u) {
    return f = u, c = setTimeout(L, t), g ? N(u) : l;
  }
  function $(u) {
    var O = u - d, I = u - f, oe = t - O;
    return p ? Yt(oe, o - I) : oe;
  }
  function V(u) {
    var O = u - d, I = u - f;
    return d === void 0 || O >= t || O < 0 || p && I >= o;
  }
  function L() {
    var u = U();
    if (V(u))
      return M(u);
    c = setTimeout(L, $(u));
  }
  function M(u) {
    return c = void 0, v && s ? N(u) : (s = i = void 0, l);
  }
  function P() {
    c !== void 0 && clearTimeout(c), f = 0, s = d = i = c = void 0;
  }
  function a() {
    return c === void 0 ? l : M(U());
  }
  function h() {
    var u = U(), O = V(u);
    if (s = arguments, i = this, d = u, O) {
      if (c === void 0)
        return D(d);
      if (p)
        return clearTimeout(c), c = setTimeout(L, t), N(d);
    }
    return c === void 0 && (c = setTimeout(L, t)), l;
  }
  return h.cancel = P, h.flush = a, h;
}
var Gt = Xt;
const Jt = /* @__PURE__ */ C(Gt);
var Zt = function(e, t) {
  var n = document.createElement("_"), s = n.appendChild(document.createElement("_")), i = n.appendChild(document.createElement("_")), o = s.appendChild(document.createElement("_")), l = void 0, c = void 0;
  return s.style.cssText = n.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", o.style.cssText = i.style.cssText = "display:block;height:100%;transition:0s;width:100%", o.style.width = o.style.height = "200%", e.appendChild(n), d(), g;
  function d() {
    f();
    var p = e.offsetWidth, v = e.offsetHeight;
    (p !== l || v !== c) && (l = p, c = v, i.style.width = p * 2 + "px", i.style.height = v * 2 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight, s.scrollLeft = s.scrollWidth, s.scrollTop = s.scrollHeight, t({ width: p, height: v })), s.addEventListener("scroll", d), n.addEventListener("scroll", d);
  }
  function f() {
    s.removeEventListener("scroll", d), n.removeEventListener("scroll", d);
  }
  function g() {
    f(), e.removeChild(n);
  }
};
function De(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
let te;
const W = [], en = 100;
function tn() {
  te = setInterval(() => {
    W.forEach(Ie);
  }, en);
}
function nn() {
  clearInterval(te), te = null;
}
function Ie(e) {
  const { $el: t, listener: n, lastWidth: s, lastHeight: i } = e, o = t.offsetWidth, l = t.offsetHeight;
  (s !== o || i !== l) && (e.lastWidth = o, e.lastHeight = l, n({ width: o, height: l }));
}
function sn(e, t) {
  const n = {
    $el: e,
    listener: t,
    lastWidth: null,
    lastHeight: null
  }, s = () => {
    De(W, n), W.length || nn();
  };
  return W.push(n), Ie(n), tn(), s;
}
function fe(e, t) {
  const n = document.documentMode === 9;
  let s = !0;
  const l = (n ? sn : Zt)(e, (...c) => s || t(...c));
  return s = !1, l;
}
function rn(e) {
  const t = [];
  let n = e.parentNode;
  for (; n && n.nodeName !== "BODY" && n.nodeType === document.ELEMENT_NODE; )
    on(n) && t.push(n), n = n.parentNode;
  return t.push(window), t;
}
function on(e) {
  const { overflow: t, overflowX: n, overflowY: s } = getComputedStyle(e);
  return /(auto|scroll|overlay)/.test(t + s + n);
}
function pe(e, t) {
  const n = rn(e);
  return window.addEventListener("resize", t, { passive: !0 }), n.forEach((s) => {
    s.addEventListener("scroll", t, { passive: !0 });
  }), function() {
    window.removeEventListener("resize", t, { passive: !0 }), n.forEach((i) => {
      i.removeEventListener("scroll", t, { passive: !0 });
    });
  };
}
function xe(e) {
  return e !== e;
}
function Re(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}
var ln = Te, me = 1 / 0, an = 17976931348623157e292;
function cn(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = ln(e), e === me || e === -me) {
    var t = e < 0 ? -1 : 1;
    return t * an;
  }
  return e === e ? e : 0;
}
var un = cn, hn = un;
function dn(e) {
  var t = hn(e), n = t % 1;
  return t === t ? n ? t - n : t : 0;
}
var fn = dn, pn = fn, mn = "Expected a function";
function gn(e, t) {
  var n;
  if (typeof t != "function")
    throw new TypeError(mn);
  return e = pn(e), function() {
    return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n;
  };
}
var vn = gn, Sn = vn;
function bn(e) {
  return Sn(2, e);
}
var On = bn;
const yn = /* @__PURE__ */ C(On);
function _n(e) {
  return e;
}
var Nn = _n;
const En = /* @__PURE__ */ C(Nn);
function wn(e) {
  return function() {
    return e;
  };
}
var Cn = wn;
const ge = /* @__PURE__ */ C(Cn), S = () => /* @__PURE__ */ Object.create(null);
function Ae(e) {
  return e == null || typeof e != "object" ? !1 : Object.getPrototypeOf(e) === Object.prototype;
}
function Ln(e, t, n) {
  Ae(n) ? (e[t] || (e[t] = {}), ne(e[t], n)) : e[t] = n;
}
function ne(e, t) {
  if (Ae(t)) {
    const n = Object.keys(t);
    for (let s = 0, i = n.length; s < i; s++)
      Ln(e, n[s], t[n[s]]);
  }
  return e;
}
function Mn(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Tn = Mn;
const ve = /* @__PURE__ */ C(Tn);
function _(e, t) {
  return e.indexOf(t) !== -1;
}
function Dn(e, t, n) {
  for (let s = 0, i = e.length; s < i; s++)
    if (t.call(n, e[s], s, e))
      return e[s];
}
function Q(e, t) {
  if (e.length !== t.length)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !0;
  return !1;
}
const E = null, se = 0, Be = 1, $e = 2, T = "ALL_CHILDREN", R = "ALL_DESCENDANTS", A = "LEAF_CHILDREN", B = "LEAF_DESCENDANTS", In = "LOAD_ROOT_OPTIONS", xn = "LOAD_CHILDREN_OPTIONS", Rn = "ASYNC_SEARCH", K = "ALL", z = "BRANCH_PRIORITY", q = "LEAF_PRIORITY", Y = "ALL_WITH_INDETERMINATE", Se = "ORDER_SELECTED", be = "LEVEL", Oe = "INDEX", m = {
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
}, An = process.env.NODE_ENV === "testing" ? (
  /* to speed up unit testing */
  10
) : (
  /* istanbul ignore next */
  200
), ye = 5, _e = 40;
function Ve(e, t) {
  let n = 0;
  do {
    if (e.level < n)
      return -1;
    if (t.level < n)
      return 1;
    if (e.index[n] !== t.index[n])
      return e.index[n] - t.index[n];
    n++;
  } while (!0);
}
function Bn(e, t) {
  return e.level === t.level ? Ve(e, t) : e.level - t.level;
}
function X() {
  return {
    isLoaded: !1,
    isLoading: !1,
    loadingError: ""
  };
}
function $n(e) {
  return typeof e == "string" ? e : typeof e == "number" && !xe(e) ? e + "" : "";
}
function Ne(e, t, n) {
  return e ? Ye(t, n) : _(n, t);
}
function G(e) {
  return e.message || /* istanbul ignore next */
  String(e);
}
let Vn = 0;
const kn = {
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
      default: ge(!0)
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
      default: () => `${Vn++}$$`,
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
      default: ge(["label"])
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
      default: En
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
        return _(["auto", "top", "bottom", "above", "below"], e);
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
        return _([T, R, A, B], e);
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
      default: Se,
      validator(e) {
        return _([Se, be, Oe], e);
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
      default: z,
      validator(e) {
        return _([K, z, q, Y], e);
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
        nodeMap: S(),
        // <id, checkedState> map, used for multi-select mode.
        checkedStateMap: S(),
        // Id list of all selected options.
        selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
        // <id, true> map for fast checking:
        //   if (forest.selectedNodeIds.indexOf(id) !== -1) forest.selectedNodeMap[id] === true
        selectedNodeMap: S()
      },
      // States of root options.
      rootOptionsStates: X(),
      localSearch: {
        // Has user entered any query to search local options?
        active: !1,
        // Has any options matched the search query?
        noResults: !0,
        // <id, countObject> map for counting matched children/descendants.
        countMap: S()
      },
      // <searchQuery, remoteSearchEntry> map.
      remoteSearch: S()
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
      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === K)
        e = this.forest.selectedNodeIds.slice();
      else if (this.valueConsistsOf === z)
        e = this.forest.selectedNodeIds.filter((t) => {
          const n = this.getNode(t);
          return n.isRootNode ? !0 : !this.isSelected(n.parentNode);
        });
      else if (this.valueConsistsOf === q)
        e = this.forest.selectedNodeIds.filter((t) => {
          const n = this.getNode(t);
          return n.isLeaf ? !0 : n.children.length === 0;
        });
      else if (this.valueConsistsOf === Y) {
        const t = [];
        e = this.forest.selectedNodeIds.slice(), this.selectedNodes.forEach((n) => {
          n.ancestors.forEach((s) => {
            _(t, s.id) || _(e, s.id) || t.push(s.id);
          });
        }), e.push(...t);
      }
      return this.sortValueBy === be ? e.sort((t, n) => Bn(this.getNode(t), this.getNode(n))) : this.sortValueBy === Oe && e.sort((t, n) => Ve(this.getNode(t), this.getNode(n))), e;
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
      Q(e, t) && this.$emit("update:modelValue", this.getValue(), this.getInstanceId());
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
      Q(e, this.internalValue) && this.fixSelectedNodeIds(e);
    }
  },
  methods: {
    verifyProps() {
      y(
        () => this.async ? this.searchable : !0,
        () => 'For async search mode, the value of "searchable" prop must be true.'
      ), this.options == null && !this.loadOptions && y(
        () => !1,
        () => 'Are you meant to dynamically load options? You need to use "loadOptions" prop.'
      ), this.flat && y(
        () => this.multiple,
        () => 'You are using flat mode. But you forgot to add "multiple=true"?'
      ), this.flat || [
        "autoSelectAncestors",
        "autoSelectDescendants",
        "autoDeselectAncestors",
        "autoDeselectDescendants"
      ].forEach((t) => {
        y(
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
        this.forest.nodeMap = S(), this.keepDataOfSelectedNodes(t), this.forest.normalizedOptions = this.normalize(E, e, t), this.fixSelectedNodeIds(this.internalValue);
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
      return y(
        () => e != null,
        () => `Invalid node id: ${e}`
      ), e == null ? null : e in this.forest.nodeMap ? this.forest.nodeMap[e] : this.createFallbackNode(e);
    },
    createFallbackNode(e) {
      const t = this.extractNodeFromValue(e), n = this.enhancedNormalizer(t).label || `${e} (unknown)`, s = {
        id: e,
        label: n,
        ancestors: [],
        parentNode: E,
        isFallbackNode: !0,
        isRootNode: !0,
        isLeaf: !0,
        isBranch: !1,
        isDisabled: !1,
        isUnselectable: !1,
        isNew: !1,
        index: [-1],
        level: 0,
        raw: t
      };
      return this.forest.nodeMap[e] = s;
    },
    extractCheckedNodeIdsFromValue() {
      return this.modelValue == null ? [] : this.valueFormat === "id" ? this.multiple ? this.modelValue.slice() : [this.modelValue] : (this.multiple ? this.modelValue : [this.modelValue]).map((e) => this.enhancedNormalizer(e)).map((e) => e.id);
    },
    extractNodeFromValue(e) {
      const t = { id: e };
      if (this.valueFormat === "id")
        return t;
      const n = this.multiple ? Array.isArray(this.modelValue) ? this.modelValue : [] : this.modelValue ? [this.modelValue] : [];
      return Dn(
        n,
        (i) => i && this.enhancedNormalizer(i).id === e
      ) || t;
    },
    fixSelectedNodeIds(e) {
      let t = [];
      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === K)
        t = e;
      else if (this.valueConsistsOf === z)
        e.forEach((s) => {
          t.push(s);
          const i = this.getNode(s);
          i.isBranch && this.traverseDescendantsBFS(i, (o) => {
            t.push(o.id);
          });
        });
      else if (this.valueConsistsOf === q) {
        const s = S(), i = e.slice();
        for (; i.length; ) {
          const o = i.shift(), l = this.getNode(o);
          t.push(o), !l.isRootNode && (l.parentNode.id in s || (s[l.parentNode.id] = l.parentNode.children.length), --s[l.parentNode.id] === 0 && i.push(l.parentNode.id));
        }
      } else if (this.valueConsistsOf === Y) {
        const s = S(), i = e.filter((o) => {
          const l = this.getNode(o);
          return l.isLeaf || l.children.length === 0;
        });
        for (; i.length; ) {
          const o = i.shift(), l = this.getNode(o);
          t.push(o), !l.isRootNode && (l.parentNode.id in s || (s[l.parentNode.id] = l.parentNode.children.length), --s[l.parentNode.id] === 0 && i.push(l.parentNode.id));
        }
      }
      Q(this.forest.selectedNodeIds, t) && (this.forest.selectedNodeIds = t), this.buildForestState();
    },
    keepDataOfSelectedNodes(e) {
      this.forest.selectedNodeIds.forEach((t) => {
        if (!e[t])
          return;
        const n = {
          ...e[t],
          isFallbackNode: !0
        };
        this.forest.nodeMap[t] = n;
      });
    },
    isSelected(e) {
      return this.forest.selectedNodeMap[e.id] === !0;
    },
    traverseDescendantsBFS(e, t) {
      if (!e.isBranch)
        return;
      const n = e.children.slice();
      for (; n.length; ) {
        const s = n[0];
        s.isBranch && n.push(...s.children), t(s), n.shift();
      }
    },
    traverseDescendantsDFS(e, t) {
      e.isBranch && e.children.forEach((n) => {
        this.traverseDescendantsDFS(n, t), t(n);
      });
    },
    traverseAllNodesDFS(e) {
      this.forest.normalizedOptions.forEach((t) => {
        this.traverseDescendantsDFS(t, e), e(t);
      });
    },
    traverseAllNodesByIndex(e) {
      const t = (n) => {
        n.children.forEach((s) => {
          e(s) !== !1 && s.isBranch && t(s);
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
    handleMouseDown: w(function(t) {
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
          [R]: 0,
          [A]: 0,
          [B]: 0
        });
      });
      const n = e.trim().toLocaleLowerCase(), s = n.replace(/\s+/g, " ").split(" ");
      this.traverseAllNodesDFS((i) => {
        this.searchNested && s.length > 1 ? i.isMatched = s.every(
          (o) => Ne(!1, o, i.nestedSearchLabel)
        ) : i.isMatched = this.matchKeys.some(
          (o) => Ne(!this.disableFuzzyMatching, n, i.lowerCased[o])
        ), i.isMatched && (this.localSearch.noResults = !1, i.ancestors.forEach((o) => this.localSearch.countMap[o.id][R]++), i.isLeaf && i.ancestors.forEach((o) => this.localSearch.countMap[o.id][B]++), i.parentNode !== E && (this.localSearch.countMap[i.parentNode.id][T] += 1, i.isLeaf && (this.localSearch.countMap[i.parentNode.id][A] += 1))), (i.isMatched || i.isBranch && i.isExpandedOnSearch) && i.parentNode !== E && (i.parentNode.isExpandedOnSearch = !0, i.parentNode.hasMatchedDescendants = !0);
      }), t();
    },
    handleRemoteSearch() {
      const { searchQuery: e } = this.trigger, t = this.getRemoteSearchEntry(), n = () => {
        this.initialize(), this.resetHighlightedOptionWhenNecessary(!0);
      };
      if ((e === "" || this.cacheOptions) && t.isLoaded)
        return n();
      this.callLoadOptionsProp({
        action: Rn,
        args: { searchQuery: e },
        isPending() {
          return t.isLoading;
        },
        start: () => {
          t.isLoading = !0, t.isLoaded = !1, t.loadingError = "";
        },
        succeed: (s) => {
          t.isLoaded = !0, t.options = s, this.trigger.searchQuery === e && n();
        },
        fail: (s) => {
          t.loadingError = G(s);
        },
        end: () => {
          t.isLoading = !1;
        }
      });
    },
    getRemoteSearchEntry() {
      const { searchQuery: e } = this.trigger, t = this.remoteSearch[e] || {
        ...X(),
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
      var t, n;
      const e = (n = (t = this.$refs.menu) == null ? void 0 : t.$refs) == null ? void 0 : n.menu;
      return e && e.nodeName !== "#comment" ? e : null;
    },
    setCurrentHighlightedOption(e, t = !0) {
      const n = this.menu.current;
      if (n != null && n in this.forest.nodeMap && (this.forest.nodeMap[n].isHighlighted = !1), this.menu.current = e.id, e.isHighlighted = !0, this.menu.isOpen && t) {
        const s = () => {
          const i = this.getMenu(), o = i.querySelector(`.vue-treeselect__option[data-id="${e.id}"]`);
          o && Ze(i, o);
        };
        this.getMenu() ? s() : this.$nextTick(s);
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
      const e = ve(this.visibleOptionIds);
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
      const e = S();
      this.forest.selectedNodeIds.forEach((n) => {
        e[n] = !0;
      }), this.forest.selectedNodeMap = e;
      const t = S();
      this.multiple && (this.traverseAllNodesByIndex((n) => {
        t[n.id] = se;
      }), this.selectedNodes.forEach((n) => {
        t[n.id] = $e, !this.flat && !this.disableBranchNodes && n.ancestors.forEach((s) => {
          this.isSelected(s) || (t[s.id] = Be);
        });
      })), this.forest.checkedStateMap = t;
    },
    enhancedNormalizer(e) {
      return {
        ...e,
        ...this.normalizer(e, this.getInstanceId())
      };
    },
    normalize(e, t, n) {
      let s = t.map((i) => [this.enhancedNormalizer(i), i]).map(([i, o], l) => {
        this.checkDuplication(i), this.verifyNodeShape(i);
        const { id: c, label: d, children: f, isDefaultExpanded: g } = i, p = e === E, v = p ? 0 : e.level + 1, N = Array.isArray(f) || f === null, D = !N, $ = !!i.isDisabled || !this.flat && !p && e.isDisabled, V = !!i.isUnselectable, L = !!i.isNew, M = this.matchKeys.reduce((h, u) => ({
          ...h,
          [u]: $n(i[u]).toLocaleLowerCase()
        }), {}), P = p ? M.label : e.nestedSearchLabel + " " + M.label;
        this.forest.nodeMap[c] = S();
        const a = this.forest.nodeMap[c];
        if (a.id = c, a.label = d, a.level = v, a.ancestors = p ? [] : [e].concat(e.ancestors), a.index = (p ? [] : e.index).concat(l), a.parentNode = e, a.lowerCased = M, a.nestedSearchLabel = P, a.isDisabled = $, a.isUnselectable = V, a.isNew = L, a.isMatched = !1, a.isHighlighted = !1, a.isBranch = N, a.isLeaf = D, a.isRootNode = p, a.raw = o, N) {
          const h = Array.isArray(f);
          a.childrenStates = { ...X(), isLoaded: h }, a.isExpanded = typeof g == "boolean" ? g : v < this.defaultExpandLevel, a.hasMatchedDescendants = !1, a.hasDisabledDescendants = !1, a.isExpandedOnSearch = !1, a.showAllChildrenOnSearch = !1, a.count = {
            [T]: 0,
            [R]: 0,
            [A]: 0,
            [B]: 0
          }, a.children = h ? this.normalize(a, f, n) : [], g === !0 && a.ancestors.forEach((u) => {
            u.isExpanded = !0;
          }), !h && typeof this.loadOptions != "function" ? y(
            () => !1,
            () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
          ) : !h && a.isExpanded && this.loadChildrenOptions(a);
        }
        if (a.ancestors.forEach((h) => h.count[R]++), D && a.ancestors.forEach((h) => h.count[B]++), p || (e.count[T] += 1, D && (e.count[A] += 1), $ && (e.hasDisabledDescendants = !0)), n && n[c]) {
          const h = n[c];
          a.isMatched = h.isMatched, a.showAllChildrenOnSearch = h.showAllChildrenOnSearch, a.isHighlighted = h.isHighlighted, h.isBranch && a.isBranch && (a.isExpanded = h.isExpanded, a.isExpandedOnSearch = h.isExpandedOnSearch, h.childrenStates.isLoaded && !a.childrenStates.isLoaded ? a.isExpanded = !1 : a.childrenStates = { ...h.childrenStates });
        }
        return a;
      });
      if (this.branchNodesFirst) {
        const i = s.filter((l) => l.isBranch), o = s.filter((l) => l.isLeaf);
        s = i.concat(o);
      }
      return s;
    },
    loadRootOptions() {
      this.callLoadOptionsProp({
        action: In,
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
          this.rootOptionsStates.loadingError = G(e);
        },
        end: () => {
          this.rootOptionsStates.isLoading = !1;
        }
      });
    },
    loadChildrenOptions(e) {
      const { id: t, raw: n } = e;
      this.callLoadOptionsProp({
        action: xn,
        args: {
          // We always pass the raw node instead of the normalized node to any
          // callback provided by the user of this component.
          // Because the shape of the raw node is more likely to be closing to
          // what the back-end API service of the application needs.
          parentNode: n
        },
        isPending: () => this.getNode(t).childrenStates.isLoading,
        start: () => {
          this.getNode(t).childrenStates.isLoading = !0, this.getNode(t).childrenStates.loadingError = "";
        },
        succeed: () => {
          this.getNode(t).childrenStates.isLoaded = !0;
        },
        fail: (s) => {
          this.getNode(t).childrenStates.loadingError = G(s);
        },
        end: () => {
          this.getNode(t).childrenStates.isLoading = !1;
        }
      });
    },
    callLoadOptionsProp({ action: e, args: t, isPending: n, start: s, succeed: i, fail: o, end: l }) {
      if (!this.loadOptions || n())
        return;
      s();
      const c = yn((f, g) => {
        f ? o(f) : i(g), l();
      }), d = this.loadOptions({
        id: this.getInstanceId(),
        instanceId: this.getInstanceId(),
        action: e,
        ...t,
        callback: c
      });
      Re(d) && d.then(() => {
        c();
      }, (f) => {
        c(f);
      }).catch((f) => {
        console.error(f);
      });
    },
    checkDuplication(e) {
      y(
        () => !(e.id in this.forest.nodeMap && !this.forest.nodeMap[e.id].isFallbackNode),
        () => `Detected duplicate presence of node id ${JSON.stringify(e.id)}. Their labels are "${this.forest.nodeMap[e.id].label}" and "${e.label}" respectively.`
      );
    },
    verifyNodeShape(e) {
      y(
        () => !(e.children === void 0 && e.isBranch === !0),
        () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead."
      );
    },
    select(e) {
      if (this.disabled || e.isDisabled || e.isUnselectable)
        return;
      this.single && this.clear();
      const t = this.multiple && !this.flat ? this.forest.checkedStateMap[e.id] === se : !this.isSelected(e);
      t ? this._selectNode(e) : this._deselectNode(e), this.buildForestState(), t ? this.$emit("select", e.raw, this.getInstanceId()) : this.$emit("deselect", e.raw, this.getInstanceId()), this.localSearch.active && t && (this.single || this.clearOnSelect) && this.resetSearchQuery(), this.single && this.closeOnSelect && (this.closeMenu(), this.searchable && (this._blurOnSelect = !0));
    },
    clear() {
      this.hasValue && (this.single || this.allowClearingDisabled ? this.forest.selectedNodeIds = [] : this.forest.selectedNodeIds = this.forest.selectedNodeIds.filter(
        (e) => this.getNode(e).isDisabled || this.getNode(e).isUnselectable
      ), this.buildForestState());
    },
    // This is meant to be called only by `select()`.
    _selectNode(e) {
      if (this.single || this.disableBranchNodes)
        return this.addValue(e);
      if (this.flat) {
        this.addValue(e), this.autoSelectAncestors ? e.ancestors.forEach((n) => {
          !this.isSelected(n) && !n.isDisabled && !n.isUnselectable && this.addValue(n);
        }) : this.autoSelectDescendants && this.traverseDescendantsBFS(e, (n) => {
          !this.isSelected(n) && !n.isDisabled && !n.isUnselectable && this.addValue(n);
        });
        return;
      }
      const t = e.isLeaf || /* node.isBranch && */
      !e.hasDisabledDescendants || /* node.isBranch && */
      this.allowSelectingDisabledDescendants;
      if (t && this.addValue(e), e.isBranch && this.traverseDescendantsBFS(e, (n) => {
        (!n.isDisabled || !n.isUnselectable || this.allowSelectingDisabledDescendants) && this.addValue(n);
      }), t) {
        let n = e;
        for (; (n = n.parentNode) !== E && n.children.every(this.isSelected); )
          this.addValue(n);
      }
    },
    // This is meant to be called only by `select()`.
    _deselectNode(e) {
      if (this.disableBranchNodes)
        return this.removeValue(e);
      if (this.flat) {
        this.removeValue(e), this.autoDeselectAncestors ? e.ancestors.forEach((n) => {
          this.isSelected(n) && !n.isDisabled && !n.isUnselectable && this.removeValue(n);
        }) : this.autoDeselectDescendants && this.traverseDescendantsBFS(e, (n) => {
          this.isSelected(n) && !n.isDisabled && !n.isUnselectable && this.removeValue(n);
        });
        return;
      }
      let t = !1;
      if (e.isBranch && this.traverseDescendantsDFS(e, (n) => {
        (!n.isDisabled || !n.isUnselectable || this.allowSelectingDisabledDescendants) && (this.removeValue(n), t = !0);
      }), e.isLeaf || /* node.isBranch && */
      t || /* node.isBranch && */
      e.children.length === 0) {
        this.removeValue(e);
        let n = e;
        for (; (n = n.parentNode) !== E && this.isSelected(n); )
          this.removeValue(n);
      }
    },
    addValue(e) {
      this.forest.selectedNodeIds.push(e.id), this.forest.selectedNodeMap[e.id] = !0;
    },
    removeValue(e) {
      De(this.forest.selectedNodeIds, e.id), delete this.forest.selectedNodeMap[e.id];
    },
    removeLastValue() {
      if (!this.hasValue)
        return;
      if (this.single)
        return this.clear();
      const e = ve(this.internalValue), t = this.getNode(e);
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
function zn(e) {
  return typeof e == "string" ? e : e != null && !xe(e) ? JSON.stringify(e) : "";
}
const Fn = {
  name: "vue-treeselect--hidden-fields",
  inject: ["instance"],
  render() {
    const {
      instance: e
    } = this;
    if (!e || !("name" in e) || !e.name || e.disabled || !e.hasValue)
      return null;
    let t = e.internalValue.map(zn);
    return e.multiple && e.joinValues && (t = [t.join(e.delimiter)]), t.map((n, s) => r("input", {
      type: "hidden",
      name: e.name,
      value: n,
      key: "hidden-field-" + s
    }, null));
  }
}, Wn = [m.ENTER, m.END, m.HOME, m.ARROW_LEFT, m.ARROW_UP, m.ARROW_RIGHT, m.ARROW_DOWN], ke = {
  name: "vue-treeselect--input",
  inject: ["instance"],
  data: () => ({
    inputWidth: ye,
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
    this.debouncedCallback = Jt(this.updateSearchQuery, An, {
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
      } = this, n = "which" in e ? e.which : (
        /* istanbul ignore next */
        e.keyCode
      );
      if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) {
        if (!t.menu.isOpen && _(Wn, n))
          return e.preventDefault(), t.openMenu();
        switch (n) {
          case m.BACKSPACE: {
            t.backspaceRemoves && !this.value.length && t.removeLastValue();
            break;
          }
          case m.ENTER: {
            if (e.preventDefault(), t.menu.current === null)
              return;
            const s = t.getNode(t.menu.current);
            if (s.isBranch && t.disableBranchNodes)
              return;
            t.select(s);
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
            const s = t.getNode(t.menu.current);
            s.isBranch && t.shouldExpand(s) ? (e.preventDefault(), t.toggleExpanded(s)) : !s.isRootNode && (s.isLeaf || s.isBranch && !t.shouldExpand(s)) && (e.preventDefault(), t.setCurrentHighlightedOption(s.parentNode));
            break;
          }
          case m.ARROW_UP: {
            e.preventDefault(), t.highlightPrevOption();
            break;
          }
          case m.ARROW_RIGHT: {
            const s = t.getNode(t.menu.current);
            s.isBranch && !t.shouldExpand(s) && (e.preventDefault(), t.toggleExpanded(s));
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
      } = this, t = {}, n = [];
      return e.searchable && !e.disabled && (n.push(this.renderInput()), this.needAutoSize && n.push(this.renderSizer())), e.searchable || ne(t, {
        on: {
          focus: this.onFocus,
          blur: this.onBlur,
          keydown: this.onKeyDown
        },
        ref: "input"
      }), !e.searchable && !e.disabled && ne(t, {
        attrs: {
          tabIndex: e.tabIndex
        }
      }), r("div", He({
        class: "vue-treeselect__input-container"
      }, t), [n]);
    },
    renderInput() {
      const {
        instance: e
      } = this;
      return r("input", {
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
      return r("div", {
        ref: "sizer",
        class: "vue-treeselect__sizer"
      }, [this.value]);
    },
    updateInputWidth() {
      this.inputWidth = Math.max(ye, this.$refs.sizer.scrollWidth + 15);
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
}, ze = {
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
    return r("div", {
      class: t
    }, [e.placeholder]);
  }
}, Hn = {
  name: "vue-treeselect--single-value",
  inject: ["instance"],
  methods: {
    renderSingleValueLabel() {
      const {
        instance: e
      } = this, t = e.selectedNodes[0], n = e.$slots["value-label"];
      return n ? n({
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
    } = this, n = e.hasValue && !e.trigger.searchQuery;
    return t([n && r("div", {
      class: "vue-treeselect__single-value"
    }, [this.renderSingleValueLabel()]), r(ze, null, null), r(ke, {
      ref: "input"
    }, null)]);
  }
}, re = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Pn = {
  name: "vue-treeselect--x"
}, jn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
}, Un = /* @__PURE__ */ Ee("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1), Qn = [
  Un
];
function Kn(e, t, n, s, i, o) {
  return H(), ie("svg", jn, Qn);
}
const Fe = /* @__PURE__ */ re(Pn, [["render", Kn]]), qn = {
  name: "vue-treeselect--multi-value-item",
  inject: ["instance"],
  props: {
    node: {
      type: Object,
      required: !0
    }
  },
  methods: {
    handleMouseDown: w(function() {
      const {
        instance: t,
        node: n
      } = this;
      t.select(n);
    })
  },
  render() {
    const {
      instance: e,
      node: t
    } = this, n = {
      "vue-treeselect__multi-value-item": !0,
      "vue-treeselect__multi-value-item-disabled": t.isDisabled || t.isUnselectable,
      "vue-treeselect__multi-value-item-new": t.isNew
    }, s = e.$slots["value-label"], i = s ? s({
      node: t
    }) : t.label;
    return r("div", {
      class: "vue-treeselect__multi-value-item-container"
    }, [r("div", {
      class: n,
      onMousedown: this.handleMouseDown
    }, [r("span", {
      class: "vue-treeselect__multi-value-label"
    }, [i]), r("span", {
      class: "vue-treeselect__icon vue-treeselect__value-remove"
    }, [r(Fe, null, null)])])]);
  }
}, Yn = {
  name: "vue-treeselect--multi-value",
  inject: ["instance"],
  methods: {
    renderMultiValueItems() {
      const {
        instance: e
      } = this;
      return e.internalValue.slice(0, e.limit).map(e.getNode).map((t) => r(qn, {
        key: `multi-value-item-${t.id}`,
        node: t
      }, null));
    },
    renderExceedLimitTip() {
      const {
        instance: e
      } = this, t = e.internalValue.length - e.limit;
      return t <= 0 ? null : r("div", {
        class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
        key: "exceed-limit-tip"
      }, [r("span", {
        class: "vue-treeselect__limit-tip-text"
      }, [e.limitText(t)])]);
    }
  },
  render() {
    const {
      renderValueContainer: e
    } = this.$parent;
    return e(r("div", {
      class: "vue-treeselect__multi-value",
      name: "vue-treeselect__multi-value-item--transition"
    }, [this.renderMultiValueItems(), this.renderExceedLimitTip(), r(ze, {
      key: "placeholder"
    }, null), r(ke, {
      ref: "input",
      key: "input"
    }, null)]));
  }
}, Xn = {
  name: "vue-treeselect--arrow"
}, Gn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
}, Jn = /* @__PURE__ */ Ee("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1), Zn = [
  Jn
];
function es(e, t, n, s, i, o) {
  return H(), ie("svg", Gn, Zn);
}
const We = /* @__PURE__ */ re(Xn, [["render", es]]), ts = {
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
      return e.hasValue && e.internalValue.some((t) => !e.getNode(t).isDisabled || !e.getNode(t).isUnselectable);
    }
    /* eslint-enable valid-jsdoc */
  },
  methods: {
    renderX() {
      const {
        instance: e
      } = this, t = e.multiple ? e.clearAllText : e.clearValueText;
      return this.shouldShowX ? r("div", {
        class: "vue-treeselect__x-container",
        title: t,
        onMousedown: this.handleMouseDownOnX
      }, [r(Fe, {
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
      return this.shouldShowArrow ? r("div", {
        class: "vue-treeselect__control-arrow-container",
        onMousedown: this.handleMouseDownOnArrow
      }, [r(We, {
        class: t
      }, null)]) : null;
    },
    handleMouseDownOnX: w(function(t) {
      t.stopPropagation(), t.preventDefault();
      const {
        instance: n
      } = this, s = n.beforeClearAll(), i = (o) => {
        o && n.clear();
      };
      Re(s) ? s.then(i) : setTimeout(() => i(s), 0);
    }),
    handleMouseDownOnArrow: w(function(t) {
      t.preventDefault(), t.stopPropagation();
      const {
        instance: n
      } = this;
      n.focusInput(), n.toggleMenu();
    }),
    // This is meant to be called by child `<Value />` component.
    renderValueContainer(e) {
      return r("div", {
        class: "vue-treeselect__value-container"
      }, [e]);
    }
  },
  render() {
    const {
      instance: e
    } = this, t = e.single ? Hn : Yn;
    return r("div", {
      class: "vue-treeselect__control",
      onMousedown: e.handleMouseDown
    }, [r(t, {
      ref: "value-container"
    }, null), this.renderX(), this.renderArrow()]);
  }
}, b = {
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
    return r("div", {
      class: `vue-treeselect__tip vue-treeselect__${e}-tip`
    }, [r("div", {
      class: "vue-treeselect__icon-container"
    }, [r("span", {
      class: `vue-treeselect__icon-${t}`
    }, null)]), r("span", {
      class: `vue-treeselect__tip-text vue-treeselect__${e}-tip-text`
    }, [this.$slots.default()])]);
  }
};
let J, Z, ee;
const ns = {
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
      } = this, n = {
        "vue-treeselect__option": !0,
        "vue-treeselect__option--disabled": t.isDisabled,
        "vue-treeselect__option--unselectable": t.isUnselectable,
        "vue-treeselect__option--selected": e.isSelected(t),
        "vue-treeselect__option--highlight": t.isHighlighted,
        "vue-treeselect__option--matched": e.localSearch.active && t.isMatched,
        "vue-treeselect__option--hide": !this.shouldShow
      };
      return r("div", {
        class: n,
        onMouseenter: this.handleMouseEnterOption,
        "data-id": t.id
      }, [this.renderArrow(), this.renderLabelContainer([this.renderCheckboxContainer([this.renderCheckbox()]), this.renderLabel()])]);
    },
    renderSubOptionsList() {
      return this.shouldExpand ? r("div", {
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
        const n = {
          "vue-treeselect__option-arrow": !0,
          "vue-treeselect__option-arrow--rotated": this.shouldExpand
        };
        return r("div", {
          class: "vue-treeselect__option-arrow-container",
          onMousedown: this.handleMouseDownOnArrow
        }, [r("div", {
          name: "vue-treeselect__option-arrow--prepare"
        }, [r(We, {
          class: n
        }, null)])]);
      }
      return (
        /*node.isLeaf && */
        e.hasBranchNodes ? (J || (J = r("div", {
          class: "vue-treeselect__option-arrow-placeholder"
        }, [j(" ")])), J) : null
      );
    },
    renderLabelContainer(e) {
      return r("div", {
        class: "vue-treeselect__label-container",
        onMousedown: this.handleMouseDownOnLabelContainer
      }, [e]);
    },
    renderCheckboxContainer(e) {
      const {
        instance: t,
        node: n
      } = this;
      return t.single || t.disableBranchNodes && n.isBranch ? null : r("div", {
        class: "vue-treeselect__checkbox-container"
      }, [e]);
    },
    renderCheckbox() {
      const {
        instance: e,
        node: t
      } = this, n = e.forest.checkedStateMap[t.id], s = {
        "vue-treeselect__checkbox": !0,
        "vue-treeselect__checkbox--checked": n === $e,
        "vue-treeselect__checkbox--indeterminate": n === Be,
        "vue-treeselect__checkbox--unchecked": n === se,
        "vue-treeselect__checkbox--disabled": t.isDisabled,
        "vue-treeselect__checkbox--unselectable": t.isUnselectable
      };
      return Z || (Z = r("span", {
        class: "vue-treeselect__check-mark"
      }, null)), ee || (ee = r("span", {
        class: "vue-treeselect__minus-mark"
      }, null)), r("span", {
        class: s
      }, [Z, ee]);
    },
    renderLabel() {
      const {
        instance: e,
        node: t
      } = this, n = t.isBranch && (e.localSearch.active ? e.showCountOnSearchComputed : e.showCount), s = n ? e.localSearch.active ? e.localSearch.countMap[t.id][e.showCountOf] : t.count[e.showCountOf] : NaN, i = "vue-treeselect__label", o = "vue-treeselect__count", l = e.$slots["option-label"];
      return l ? l({
        node: t,
        shouldShowCount: n,
        count: s,
        labelClassName: i,
        countClassName: o
      }) : r("label", {
        class: i
      }, [t.label, n && r("span", {
        class: o
      }, [j("("), s, j(")")])]);
    },
    renderSubOptions() {
      const {
        node: e
      } = this;
      return e.childrenStates.isLoaded ? e.children.map((t) => r(F("vue-treeselect--option"), {
        node: t,
        key: t.id
      }, null)) : null;
    },
    renderNoChildrenTip() {
      const {
        instance: e,
        node: t
      } = this;
      return !t.childrenStates.isLoaded || t.children.length ? null : r(b, {
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
      return t.childrenStates.isLoading ? r(b, {
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
      return t.childrenStates.loadingError ? r(b, {
        type: "error",
        icon: "error"
      }, {
        default: () => [t.childrenStates.loadingError, r("a", {
          class: "vue-treeselect__retry",
          title: e.retryTitle,
          onMousedown: this.handleMouseDownOnRetry
        }, [e.retryText])]
      }) : null;
    },
    handleMouseEnterOption(e) {
      const {
        instance: t,
        node: n
      } = this;
      e.target === e.currentTarget && t.setCurrentHighlightedOption(n, !1);
    },
    handleMouseDownOnArrow: w(function() {
      const {
        instance: t,
        node: n
      } = this;
      t.toggleExpanded(n);
    }),
    handleMouseDownOnLabelContainer: w(function() {
      const {
        instance: t,
        node: n
      } = this;
      n.isBranch && (n.isUnselectable || t.disableBranchNodes) ? t.toggleExpanded(n) : t.select(n);
    }),
    handleMouseDownOnRetry: w(function() {
      const {
        instance: t,
        node: n
      } = this;
      t.loadChildrenOptions(n);
    })
  },
  render() {
    const {
      node: e
    } = this, n = {
      "vue-treeselect__list-item": !0,
      [`vue-treeselect__indent-level-${this.instance.shouldFlattenOptions ? 0 : e.level}`]: !0
    };
    return r("div", {
      class: n
    }, [this.renderOption(), e.isBranch ? r("div", null, [this.renderSubOptionsList()]) : ""]);
  }
}, ss = {
  top: "top",
  bottom: "bottom",
  above: "top",
  below: "bottom"
}, is = {
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
      return e.menu.isOpen ? r("div", {
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
      } = this, t = e.getRemoteSearchEntry(), n = e.trigger.searchQuery === "" && !e.defaultOptions, s = n ? !1 : t.isLoaded && t.options.length === 0;
      return n ? this.renderSearchPromptTip() : t.isLoading ? this.renderLoadingOptionsTip() : t.loadingError ? this.renderAsyncSearchLoadingErrorTip() : s ? this.renderNoResultsTip() : this.renderOptionList();
    },
    renderOptionList() {
      const {
        instance: e
      } = this;
      return r("div", {
        class: "vue-treeselect__list"
      }, [e.forest.normalizedOptions.map((t) => r(ns, {
        node: t,
        key: t.id
      }, null))]);
    },
    renderSearchPromptTip() {
      const {
        instance: e
      } = this;
      return r(b, {
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
      return r(b, {
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
      return r(b, {
        type: "error",
        icon: "error"
      }, {
        default: () => [e.rootOptionsStates.loadingError, r("a", {
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
      return r(b, {
        type: "error",
        icon: "error"
      }, {
        default: () => [t.loadingError, r("a", {
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
      return r(b, {
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
      return r(b, {
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
      const t = e.getMenu(), n = e.getControl(), s = t.getBoundingClientRect(), i = n.getBoundingClientRect(), o = s.height, l = window.innerHeight, c = i.top, d = window.innerHeight - i.bottom, f = i.top >= 0 && i.top <= l || i.top < 0 && i.bottom > 0, g = d > o + _e, p = c > o + _e;
      f ? e.openDirection !== "auto" ? e.menu.placement = ss[e.openDirection] : g || !p ? e.menu.placement = "bottom" : e.menu.placement = "top" : e.closeMenu();
    },
    setupMenuSizeWatcher() {
      const {
        instance: e
      } = this, t = e.getMenu();
      this.menuSizeWatcher || (this.menuSizeWatcher = {
        remove: fe(t, this.adjustMenuOpenDirection)
      });
    },
    setupMenuResizeAndScrollEventListeners() {
      const {
        instance: e
      } = this, t = e.getControl();
      this.menuResizeAndScrollEventListeners || (this.menuResizeAndScrollEventListeners = {
        remove: pe(t, this.adjustMenuOpenDirection)
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
        remove: pe(t, this.updateMenuContainerOffset)
      });
    },
    setupControlSizeWatcher() {
      const {
        instance: e
      } = this, t = e.getControl();
      this.controlSizeWatcher || (this.controlSizeWatcher = {
        remove: fe(t, () => {
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
      } = this, t = this.$el, s = e.getControl().getBoundingClientRect();
      t && (t.style.width = s.width + "px");
    },
    updateMenuContainerOffset() {
      const {
        instance: e
      } = this, t = e.getControl();
      if (t) {
        const n = t.getBoundingClientRect(), s = Math.round(n.left) + "px", i = Math.round(n.bottom + window.scrollY) + "px", o = this.$refs["menu-container"].style;
        o.top = i, o.left = s;
      }
    }
  },
  render() {
    return r("div", {
      ref: "menu-container",
      class: this.classes,
      style: this.menuContainerStyle
    }, [r("div", {
      name: "vue-treeselect__menu--transition"
    }, [this.renderMenu()])]);
  }
}, rs = Pe({
  name: "vue-treeselect",
  mixins: [kn],
  components: {
    HiddenFields: Fn,
    Control: ts,
    Menu: is
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
function os(e, t, n, s, i, o) {
  const l = F("HiddenFields"), c = F("Control"), d = F("Menu");
  return H(), ie("div", {
    ref: "wrapper",
    class: je(e.wrapperClass)
  }, [
    r(l),
    r(c, { ref: "control" }, null, 512),
    (H(), Ue(Qe, {
      disabled: !e.appendToBody,
      to: "body"
    }, [
      r(d, { ref: "menu" }, null, 512)
    ], 8, ["disabled"]))
  ], 2);
}
const as = /* @__PURE__ */ re(rs, [["render", os]]);
export {
  as as Treeselect,
  as as default
};
