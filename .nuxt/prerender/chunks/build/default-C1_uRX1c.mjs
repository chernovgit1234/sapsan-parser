import { defineComponent, useSSRContext, mergeProps } from 'file://X:/sapsan/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from 'file://X:/sapsan/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheFooter",
  __ssrInlineRender: true,
  props: {
    background: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        style: { "background": props.background ? props.background : "#ffffff" }
      }, _attrs))} data-v-8b48d905><div class="container" data-v-8b48d905> Sapsan 2025 \u2003 \u0421\u0430\u0439\u0442 \u0441\u0434\u0435\u043B\u0430\u043B: Sergey Chernov </div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8b48d905"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  emits: ["scrollTo"],
  setup(__props, { emit: __emit }) {
    const items = [
      { name: "\u041E \u043F\u0430\u0440\u0441\u0435\u0440\u0435", id: "aboutSection" },
      { name: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435", id: "managerSection" },
      { name: "\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u044B", id: "processSection" },
      { name: "\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440", id: "readerSection" },
      { name: "\u0424\u043E\u0440\u043C\u0430\u0442 \u043F\u0440\u043E\u0434\u0430\u0436\u0438", id: "saleSection" },
      { name: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B", id: "contactSection" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))} data-v-4797e779><header class="header" data-v-4797e779><div class="header__body container-header" data-v-4797e779><div class="header__logo" data-v-4797e779><span class="header__logo-main" data-v-4797e779>Sapsan</span><span class="header__logo-label" data-v-4797e779>\u043B\u0438\u0447\u043D\u044B\u0439 \u043F\u0430\u0440\u0441\u0435\u0440</span></div><ul class="navigate" data-v-4797e779><!--[-->`);
      ssrRenderList(items, (item, i) => {
        _push(`<li class="navigate__item" data-v-4797e779><p class="navigate__name" data-v-4797e779>${ssrInterpolate(item.name)}</p></li>`);
      });
      _push(`<!--]--></ul></div></header><main class="container" data-v-4797e779>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`\u043D\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B`);
      }, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(TheFooter, { background: "#fff" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4797e779"]]);

export { _default as default };
//# sourceMappingURL=default-C1_uRX1c.mjs.map
