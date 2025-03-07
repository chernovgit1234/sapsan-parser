import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'file://X:/sapsan/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file://X:/sapsan/node_modules/vue/server-renderer/index.mjs';
import { parseURL } from 'file://X:/sapsan/node_modules/ufo/dist/index.mjs';
import { g as useSiteConfig } from './server.mjs';
import 'file://X:/sapsan/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://X:/sapsan/node_modules/h3/dist/index.mjs';
import 'file://X:/sapsan/node_modules/destr/dist/index.mjs';
import 'file://X:/sapsan/node_modules/hookable/dist/index.mjs';
import 'file://X:/sapsan/node_modules/node-mock-http/dist/index.mjs';
import 'file://X:/sapsan/node_modules/defu/dist/defu.mjs';
import 'file://X:/sapsan/node_modules/klona/dist/index.mjs';
import 'file://X:/sapsan/node_modules/scule/dist/index.mjs';
import 'file://X:/sapsan/node_modules/radix3/dist/index.mjs';
import 'file://X:/sapsan/node_modules/consola/dist/index.mjs';
import 'file://X:/sapsan/node_modules/unstorage/dist/index.mjs';
import 'file://X:/sapsan/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://X:/sapsan/node_modules/@unocss/core/dist/index.mjs';
import 'file://X:/sapsan/node_modules/@unocss/preset-wind3/dist/index.mjs';
import 'file://X:/sapsan/node_modules/devalue/index.js';
import 'file://X:/sapsan/node_modules/nuxt-og-image/node_modules/ohash/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://X:/sapsan/node_modules/pathe/dist/index.mjs';
import 'file://X:/sapsan/node_modules/unstorage/drivers/fs.mjs';
import 'file:///X:/sapsan/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://X:/sapsan/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://X:/sapsan/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file://X:/sapsan/node_modules/unctx/dist/index.mjs';
import 'file://X:/sapsan/node_modules/unhead/dist/index.mjs';
import 'file://X:/sapsan/node_modules/@unhead/shared/dist/index.mjs';
import 'file://X:/sapsan/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://X:/sapsan/node_modules/@unhead/addons/dist/index.mjs';
import 'file://X:/sapsan/node_modules/@unhead/schema-org/dist/vue.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimpleBlog",
  __ssrInlineRender: true,
  props: {
    title: { default: "title" },
    website: {}
  },
  setup(__props) {
    const props = __props;
    const website = computed(() => {
      return props.website || parseURL(useSiteConfig().url).host;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full w-full flex items-start justify-start border-solid border-blue-500 border-[12px] bg-gray-50" }, _attrs))}><div class="flex items-start justify-start h-full"><div class="flex flex-col justify-between w-full h-full"><h1 class="text-[80px] p-20 font-black text-left">${ssrInterpolate(_ctx.title)}</h1><p class="text-2xl pb-10 px-20 font-bold mb-0">${ssrInterpolate(unref(website))}</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-og-image/dist/runtime/app/components/Templates/Community/SimpleBlog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SimpleBlog-v4OAYMO1.mjs.map
