import { defineComponent, mergeProps, useSSRContext } from 'file://X:/sapsan/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file://X:/sapsan/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BrandedLogo",
  __ssrInlineRender: true,
  props: {
    title: { default: "title" },
    logo: { default: "https://nuxt.com/assets/design-kit/logo-white.png" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { backgroundImage: "linear-gradient(to right, #24243e, #302b63, #0f0c29)" },
        class: "h-full w-full flex items-start justify-start"
      }, _attrs))}><div class="flex items-start justify-start h-full"><div class="flex flex-col justify-between w-full h-full p-20"><img${ssrRenderAttr("src", _ctx.logo)} height="50"><h1 class="text-[60px] text-white font-bold text-left">${ssrInterpolate(_ctx.title)}</h1></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/BrandedLogo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=BrandedLogo-D0A4_OjJ.mjs.map
