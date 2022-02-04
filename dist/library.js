'use strict';

var vue = require('vue');

var script$2 = vue.defineComponent({
  name: 'BaseButton',
  props: {
    child: vue.VueElement,
    onFocus: Object,
    onClick: Function,
  }
});

const _hoisted_1$2 = {
  class: "bg-black",
  type: "text"
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1$2))
}

script$2.render = render$2;
script$2.__file = "src/components/base/BaseButton.vue";

var script$1 = vue.defineComponent({
  name: 'PrimaryButton',
  extends: script$2,
  props: {
    callback: Function,
    contactsPromise: Promise
  }
});

const _hoisted_1$1 = {
  class: "bg-blue",
  type: "text"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1$1))
}

script$1.render = render$1;
script$1.__file = "src/components/buttons/PrimaryButton.vue";

var script = vue.defineComponent({
  name: 'SecondaryButton'
});

const _hoisted_1 = {
  class: "bg-blue",
  type: "text"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1))
}

script.render = render;
script.__file = "src/components/buttons/SecondaryButton.vue";

var components = { PrimaryButton: script$1, SecondaryButton: script };

const plugin = {
  install (Vue) {
    for (const componentKey in components) {
      if (components.hasOwnProperty(componentKey)) {
        const component = components[componentKey];
        Vue.component(component.name, component);
      }
    }
  }
};

module.exports = plugin;
