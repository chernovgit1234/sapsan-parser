import { defineComponent, defineAsyncComponent, onErrorCaptured, createVNode } from 'file://X:/sapsan/node_modules/vue/index.mjs';
import { i as injectHead, c as createError } from './server.mjs';
import 'file://X:/sapsan/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://X:/sapsan/node_modules/h3/dist/index.mjs';
import 'file://X:/sapsan/node_modules/ufo/dist/index.mjs';
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
import 'file://X:/sapsan/node_modules/vue/server-renderer/index.mjs';

const islandComponents = {
  "BrandedLogo": defineAsyncComponent(() => import(
    './BrandedLogo-D0A4_OjJ.mjs'
    /* webpackChunkName: "components/branded-logo-server" */
  ).then((c) => c.default || c)),
  "Frame": defineAsyncComponent(() => import(
    './Frame-FTdAMGtJ.mjs'
    /* webpackChunkName: "components/frame-server" */
  ).then((c) => c.default || c)),
  "Nuxt": defineAsyncComponent(() => import(
    './Nuxt-4TsjjvVa.mjs'
    /* webpackChunkName: "components/nuxt-server" */
  ).then((c) => c.default || c)),
  "NuxtSeo": defineAsyncComponent(() => import(
    './NuxtSeo-CvITZBS3.mjs'
    /* webpackChunkName: "components/nuxt-seo-server" */
  ).then((c) => c.default || c)),
  "Pergel": defineAsyncComponent(() => import(
    './Pergel-S9frJ1Sm.mjs'
    /* webpackChunkName: "components/pergel-server" */
  ).then((c) => c.default || c)),
  "SimpleBlog": defineAsyncComponent(() => import(
    './SimpleBlog-v4OAYMO1.mjs'
    /* webpackChunkName: "components/simple-blog-server" */
  ).then((c) => c.default || c)),
  "UnJs": defineAsyncComponent(() => import(
    './UnJs-DVE_KOV4.mjs'
    /* webpackChunkName: "components/un-js-server" */
  ).then((c) => c.default || c)),
  "Wave": defineAsyncComponent(() => import(
    './Wave-BuK9f7uS.mjs'
    /* webpackChunkName: "components/wave-server" */
  ).then((c) => c.default || c)),
  "WithEmoji": defineAsyncComponent(() => import(
    './WithEmoji-C-Av2uQ3.mjs'
    /* webpackChunkName: "components/with-emoji-server" */
  ).then((c) => c.default || c))
};
const islandRenderer = defineComponent({
  name: "IslandRenderer",
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const head = injectHead();
    head.headEntries().splice(0, head.headEntries().length);
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    onErrorCaptured((e) => {
      console.log(e);
    });
    return () => createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-wzAJKJvK.mjs.map
