import { e as buildAssetsURL } from '../_/nitro.mjs';
import { mergeProps, defineComponent, useSSRContext } from 'file://X:/sapsan/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file://X:/sapsan/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file://X:/sapsan/node_modules/h3/dist/index.mjs';
import 'file://X:/sapsan/node_modules/ufo/dist/index.mjs';
import 'file://X:/sapsan/node_modules/destr/dist/index.mjs';
import 'file://X:/sapsan/node_modules/hookable/dist/index.mjs';
import 'file://X:/sapsan/node_modules/ofetch/dist/node.mjs';
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TheAbout",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "Desktop \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0412\u0430\u0448 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440",
      "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0430\u0440\u0441\u0438\u0442\u044C \u0412\u0430\u0448 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0443\u043B \u0441\u0430\u0439\u0442\u043E\u0432 \u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432",
      "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B",
      "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445",
      "\u041E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043E\u0442 10 \u0434\u043E 20 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0441\u0431\u043E\u0440\u0430 \u0434\u0430\u043D\u043D\u044B\u0445",
      "\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430",
      "4 \u0444\u043E\u0440\u043C\u0430\u0442\u0430 \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0438",
      "\u0421\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u043E\u043D\u043E\u0432 \u0420\u0424"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))}><div class="about__text"><p class="font-bold">Sapsan \u2014 </p><h1>\u041B\u0438\u0447\u043D\u044B\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 \u0441\u0430\u0439\u0442\u043E\u0432</h1></div><div class="pl-6"><ul class="list-disc text-xl leading-loose"><!--[-->`);
      ssrRenderList(items, (item, i) => {
        _push(`<li><span>${ssrInterpolate(item)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheAbout.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0$2 = "" + buildAssetsURL("manager.CxeGbQs5.jpg");
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-90160154><div class="manager" data-v-90160154><p class="font-bold text-2xl" data-v-90160154>\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435</p><p class="text-xl leading-normal" data-v-90160154>\u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 &quot;\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435&quot; \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F: 1. \u043F\u0443\u043B \u0441\u0430\u0439\u0442\u043E\u0432 \u0432 \u0434\u0435\u0440\u0435\u0432\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043B\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438; 2. \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438, \u0433\u0434\u0435 \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u043F\u043E\u043B\u044F \u0434\u043B\u044F \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430; 3. \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0437\u0430\u043F\u0443\u0441\u043A\u0430, \u0433\u0434\u0435 \u043C\u043E\u0436\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442 \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0438, \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0438 \u043A\u043D\u043E\u043F\u043A\u0430 \u0437\u0430\u043F\u0443\u0441\u043A\u0430</p></div><img${ssrRenderAttr("src", _imports_0$2)} class="w-full h-full object-cover rounded-xl" data-v-90160154></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheManager.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TheManager = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-90160154"]]);
const _imports_0$1 = "" + buildAssetsURL("process.DFqD5qhF.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-6e7ad3ab><div class="process" data-v-6e7ad3ab><p class="font-bold text-2xl leading-normal" data-v-6e7ad3ab>\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u044B</p><p class="text-xl leading-normal" data-v-6e7ad3ab>\u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 &quot;\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u044B&quot; \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F \u0432\u0441\u0435 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0441\u0431\u043E\u0440\u0430 \u0434\u0430\u043D\u043D\u044B\u0445. \u041E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C 10-20 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430. \u041F\u043E \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0443 \u043C\u043E\u0436\u043D\u043E \u0443\u0437\u043D\u0430\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E: \u043A\u043E\u0433\u0434\u0430 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u043E \u0438 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435, \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0441\u0431\u043E\u0440\u0430, \u043F\u0430\u043F\u043A\u0430 \u043A\u0443\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043A\u0430\u0447\u0430\u043D \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0441\u0431\u043E\u0440\u0430</p></div><img${ssrRenderAttr("src", _imports_0$1)} class="w-full h-full object-cover rounded-xl" data-v-6e7ad3ab></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheProcess.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TheProcess = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-6e7ad3ab"]]);
const _imports_0 = "" + buildAssetsURL("reader.CWmzyk0v.jpg");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-54a03d0a><div class="reader" data-v-54a03d0a><p class="font-bold text-2xl" data-v-54a03d0a>\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440</p><p class="text-xl" data-v-54a03d0a>\u041D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 &quot;\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440&quot; \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C, \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B</p></div><img${ssrRenderAttr("src", _imports_0)} class="w-full h-full object-cover rounded-xl" data-v-54a03d0a></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheReader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TheReader = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-54a03d0a"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-b71411ec><div class="contact" data-v-b71411ec><p class="font-bold text-2xl leading-normal" data-v-b71411ec>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</p><p class="text-xl leading-normal" data-v-b71411ec> \u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0430\u0432\u0442\u043E\u0440\u0430: <a href="https://t.me/ChernovSD" class="font-bold" data-v-b71411ec>ChernovSD</a></p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheContact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TheContact = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b71411ec"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sale" }, _attrs))} data-v-9d4e3e48><p class="font-bold text-2xl leading-normal" data-v-9d4e3e48>\u0424\u043E\u0440\u043C\u0430\u0442 \u043F\u0440\u043E\u0434\u0430\u0436\u0438</p><p class="text-xl leading-normal" data-v-9d4e3e48>\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E</p><p class="text-xl leading-normal" data-v-9d4e3e48>\u041F\u043B\u0430\u0442\u043D\u043E - \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0412\u0430\u0441 \u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432 \u0434\u043B\u044F \u0412\u0430\u0448\u0435\u0433\u043E \u043F\u0443\u043B\u0430 \u0441\u0430\u0439\u0442\u043E\u0432 \u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0430 \u0434\u0430\u043D\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435; \u043F\u0440\u0430\u0432\u043A\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043F\u043E\u0434 \u0412\u0430\u0448\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u044B</p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheSale.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TheSale = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9d4e3e48"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sections" }, _attrs))}><section id="aboutSection" class="select-none">`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</section><section id="managerSection" class="select-none">`);
      _push(ssrRenderComponent(TheManager, null, null, _parent));
      _push(`</section><section id="processSection" class="select-none">`);
      _push(ssrRenderComponent(TheProcess, null, null, _parent));
      _push(`</section><section id="readerSection" class="select-none">`);
      _push(ssrRenderComponent(TheReader, null, null, _parent));
      _push(`</section><section id="saleSection" class="select-none">`);
      _push(ssrRenderComponent(TheSale, null, null, _parent));
      _push(`</section><section id="contactSection" class="select-none">`);
      _push(ssrRenderComponent(TheContact, null, null, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-8pctHkvD.mjs.map
