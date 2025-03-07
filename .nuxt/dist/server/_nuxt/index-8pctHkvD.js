import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TheAbout",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      "Desktop программа устанавливается на Ваш личный компьютер",
      "Возможность парсить Ваш персональный пул сайтов и ресурсов",
      "Автоматическое обновление программы",
      "Настройка конфигурации данных",
      "Одновременно от 10 до 20 независимых процессов сбора данных",
      "Планирование процессов парсинга",
      "4 формата выгрузки",
      "Соблюдение законов РФ"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))}><div class="about__text"><p class="font-bold">Sapsan — </p><h1>Личный инструмент для парсинга сайтов</h1></div><div class="pl-6"><ul class="list-disc text-xl leading-loose"><!--[-->`);
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
const _imports_0$2 = "" + __buildAssetsURL("manager.CxeGbQs5.jpg");
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-90160154><div class="manager" data-v-90160154><p class="font-bold text-2xl" data-v-90160154>Управление</p><p class="text-xl leading-normal" data-v-90160154>На странице &quot;Управление&quot; отображаются: 1. пул сайтов в дереве, которые можно выбрать для настройки; 2. настройка конфигурации, где можно выбрать необходимые поля для парсинга; 3. настройка запуска, где можно указать формат выгрузки, название процесса и кнопка запуска</p></div><img${ssrRenderAttr("src", _imports_0$2)} class="w-full h-full object-cover rounded-xl" data-v-90160154></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheManager.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TheManager = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-90160154"]]);
const _imports_0$1 = "" + __buildAssetsURL("process.DFqD5qhF.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-6e7ad3ab><div class="process" data-v-6e7ad3ab><p class="font-bold text-2xl leading-normal" data-v-6e7ad3ab>Процессы</p><p class="text-xl leading-normal" data-v-6e7ad3ab>На странице &quot;Процессы&quot; отображаются все запущенные процессы сбора данных. Одновременно может работать 10-20 процессов в зависимости от мощности компьютера. По каждому процессу можно узнать информацию: когда запущено и примерное окончание, процентное состояние процесса сбора, папка куда будет скачан результат сбора</p></div><img${ssrRenderAttr("src", _imports_0$1)} class="w-full h-full object-cover rounded-xl" data-v-6e7ad3ab></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheProcess.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TheProcess = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-6e7ad3ab"]]);
const _imports_0 = "" + __buildAssetsURL("reader.CWmzyk0v.jpg");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-54a03d0a><div class="reader" data-v-54a03d0a><p class="font-bold text-2xl" data-v-54a03d0a>Редактор</p><p class="text-xl" data-v-54a03d0a>На странице &quot;Редактор&quot; можно посмотреть, отредактировать сгенерированный файл</p></div><img${ssrRenderAttr("src", _imports_0)} class="w-full h-full object-cover rounded-xl" data-v-54a03d0a></div>`);
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
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-b71411ec><div class="contact" data-v-b71411ec><p class="font-bold text-2xl leading-normal" data-v-b71411ec>Контакты</p><p class="text-xl leading-normal" data-v-b71411ec> Телеграм автора: <a href="https://t.me/ChernovSD" class="font-bold" data-v-b71411ec>ChernovSD</a></p></div></div>`);
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sale" }, _attrs))} data-v-9d4e3e48><p class="font-bold text-2xl leading-normal" data-v-9d4e3e48>Формат продажи</p><p class="text-xl leading-normal" data-v-9d4e3e48>Пользование платформой бесплатно</p><p class="text-xl leading-normal" data-v-9d4e3e48>Платно - написание для Вас скриптов для Вашего пула сайтов и ресурсов, которые будут работать на данной платформе; правка платформы под Ваши запросы</p></div>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-8pctHkvD.js.map
