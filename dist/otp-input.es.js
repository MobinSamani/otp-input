import { withDirectives as g, openBlock as l, createElementBlock as d, vModelText as y, resolveComponent as h, toDisplayString as p, createCommentVNode as m, createElementVNode as s, Fragment as v, renderList as b, createBlock as V, createVNode as C, createTextVNode as $ } from "vue";
const x = {
  props: ["modelValue"],
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    }
  }
}, u = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [c, a] of t)
    n[c] = a;
  return n;
}, k = {
  name: "OTP Input Box",
  mixins: [x],
  props: {
    index: { type: Number, required: !0 }
  },
  mounted() {
    this.index || this.handleFocus();
  },
  methods: {
    goToNextInput() {
      const e = document.getElementById(`code-${this.index + 1}`);
      e ? e.focus() : this.$emit("confirm");
    },
    handleFocus() {
      this.$refs.input.select();
    },
    handlePaste(e) {
      const t = (e.clipboardData || window.clipboardData).getData("text").trim();
      t.length > 1 ? this.$emit("codePaste", t) : this.model = t;
    }
  }
}, w = ["id"];
function I(e, t, n, c, a, o) {
  return g((l(), d("input", {
    ref: "input",
    id: `code-${n.index}`,
    autocomplete: "off",
    maxlength: "1",
    class: "bg-gray-200 h-full w-full py-4 text-3xl text-center text-gray-800 rounded-lg flex items-center justify-center",
    "onUpdate:modelValue": t[0] || (t[0] = (i) => e.model = i),
    onInput: t[1] || (t[1] = (...i) => o.goToNextInput && o.goToNextInput(...i)),
    onFocus: t[2] || (t[2] = (...i) => o.handleFocus && o.handleFocus(...i)),
    onPaste: t[3] || (t[3] = (...i) => o.handlePaste && o.handlePaste(...i))
  }, null, 40, w)), [
    [
      y,
      e.model,
      void 0,
      { trim: !0 }
    ]
  ]);
}
const P = /* @__PURE__ */ u(k, [["render", I]]), N = {
  name: "OTP Input",
  mixins: [x],
  components: {
    InputBox: P
  },
  props: {
    title: String,
    description: String,
    length: { type: Number, default: 6 }
  },
  methods: {
    paste(e) {
      this.model = e.slice(0, this.length).split(""), this.$nextTick(this.confirm);
    },
    confirm() {
      this.model.filter((e) => e.length).length === this.length && this.$emit("confirm");
    }
  }
}, T = { class: "flex flex-col gap-y-6" }, B = {
  key: 0,
  class: "flex flex-col gap-y-2"
}, D = {
  key: 0,
  class: "text-lg font-bold"
}, F = {
  key: 1,
  class: "text-gray-500"
}, O = { class: "flex gap-x-2" };
function S(e, t, n, c, a, o) {
  const i = h("input-box");
  return l(), d("div", T, [
    n.title || n.description ? (l(), d("div", B, [
      n.title ? (l(), d("div", D, p(n.title), 1)) : m("", !0),
      n.description ? (l(), d("div", F, p(n.description), 1)) : m("", !0)
    ])) : m("", !0),
    s("div", O, [
      (l(!0), d(v, null, b(n.length, (f, r) => (l(), V(i, {
        key: r,
        index: r,
        modelValue: e.model[r],
        "onUpdate:modelValue": (_) => e.model[r] = _,
        onCodePaste: o.paste,
        onConfirm: o.confirm
      }, null, 8, ["index", "modelValue", "onUpdate:modelValue", "onCodePaste", "onConfirm"]))), 128))
    ])
  ]);
}
const j = /* @__PURE__ */ u(N, [["render", S]]), U = {
  name: "App",
  components: {
    OtpInput: j
  },
  data() {
    return {
      verificationCode: []
    };
  },
  methods: {
    confirm() {
      alert(`Verification code is: ${this.verificationCode.join("")}`);
    }
  }
}, A = { class: "min-h-screen bg-gray-100 flex items-center justify-center p-8" }, E = { class: "flex flex-col gap-y-8 w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4" }, M = /* @__PURE__ */ s("div", { class: "flex items-center justify-center gap-2 flex-wrap text-center" }, [
  /* @__PURE__ */ s("div", { class: "text-gray-600" }, "A Vue OTP Input Component by"),
  /* @__PURE__ */ s("a", {
    class: "font-bold",
    href: "https://MobinSamani.com",
    target: "_blank"
  }, "MobinSamani.com")
], -1), q = { class: "bg-white shadow rounded-lg p-8 flex flex-col gap-y-8" }, L = { class: "flex flex-col gap-y-4" }, W = /* @__PURE__ */ s("div", { class: "text-sm text-center opacity-25" }, [
  /* @__PURE__ */ $("Didn't get a code? "),
  /* @__PURE__ */ s("span", { class: "underline" }, "Click to resend.")
], -1), z = /* @__PURE__ */ s("button", {
  disabled: "",
  class: "bg-blue-900 text-white rounded p-2 opacity-25"
}, "Verify", -1);
function G(e, t, n, c, a, o) {
  const i = h("otp-input");
  return l(), d("div", A, [
    s("div", E, [
      M,
      s("div", q, [
        s("div", L, [
          C(i, {
            title: "Please check your email",
            description: "We've sent a code to mail@domain.com",
            modelValue: a.verificationCode,
            "onUpdate:modelValue": t[0] || (t[0] = (f) => a.verificationCode = f),
            onConfirm: o.confirm
          }, null, 8, ["modelValue", "onConfirm"]),
          W
        ]),
        z
      ])
    ])
  ]);
}
const J = /* @__PURE__ */ u(U, [["render", G]]);
export {
  J as default
};
