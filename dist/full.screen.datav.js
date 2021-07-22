(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue'), require('Echarts'), require('crypto')) :
  typeof define === 'function' && define.amd ? define(['vue', 'Echarts', 'crypto'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.fullScreen = factory(global.vue, global.Echarts, global.crypto));
}(this, (function (vue, Echarts, crypto) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Echarts__default = /*#__PURE__*/_interopDefaultLegacy(Echarts);
  var crypto__default = /*#__PURE__*/_interopDefaultLegacy(crypto);

  var script$1 = {
    name: 'TestComponent',
    setup: function setup() {
      var a = vue.ref(222);
      return {
        a: a
      };
    }
  };

  var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-7cc4288f");

  vue.pushScopeId("data-v-7cc4288f");

  var _hoisted_1 = {
    "class": "test"
  };

  vue.popScopeId();

  var render$1 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1, vue.toDisplayString($setup.a), 1
    /* TEXT */
    );
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$1 = ".test[data-v-7cc4288f] {\n  color: #6fc;\n}";
  styleInject(css_248z$1);

  script$1.render = render$1;
  script$1.__scopeId = "data-v-7cc4288f";
  script$1.__file = "src/components/Test/Test.vue";

  function Test (Vue) {
    Vue.component(script$1.name, script$1);
  }

  const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

  let poolPtr = rnds8Pool.length;
  function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
      crypto__default['default'].randomFillSync(rnds8Pool);
      poolPtr = 0;
    }

    return rnds8Pool.slice(poolPtr, poolPtr += 16);
  }

  var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

  function validate(uuid) {
    return typeof uuid === 'string' && REGEX.test(uuid);
  }

  /**
   * Convert array of 16 byte values to UUID string format of the form:
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */

  const byteToHex = [];

  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).substr(1));
  }

  function stringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields

    if (!validate(uuid)) {
      throw TypeError('Stringified UUID is invalid');
    }

    return uuid;
  }

  function v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }

      return buf;
    }

    return stringify(rnds);
  }

  var script = {
    name: 'VueEcharts',
    props: {
      options: Object,
      theme: [String, Object]
    },
    setup: function setup(ctx) {
      console.log(ctx.theme);
      var dom;
      var chart;
      var className = "echarts".concat(v4());

      var initChart = function initChart() {
        if (!chart) {
          dom = document.getElementsByClassName(className)[0];
          chart = Echarts__default['default'].init(dom, ctx.theme);
        }

        ctx.options && chart.setOption(ctx.options);
      };

      vue.onMounted(function () {
        initChart();
      });
      vue.watch(function () {
        return ctx.options;
      }, function () {
        initChart();
      });
      return {
        className: className
      };
    }
  };

  var _withId = /*#__PURE__*/vue.withScopeId("data-v-38cd74e2");

  var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", {
      "class": [$setup.className, 'echarts']
    }, null, 2
    /* CLASS */
    );
  });

  var css_248z = ".echarts[data-v-38cd74e2] {\n  height: 100%;\n  width: 100%;\n}";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-38cd74e2";
  script.__file = "src/components/VueEcharts/VueEcharts.vue";

  function VueEcharts (Vue) {
    Vue.component(script.name, script);
  }

  // es6只有export可以触发tree shaking机制。commonjs只有exports可以触发tree shaking机制
  function index (Vue) {
    Vue.use(Test);
    Vue.use(VueEcharts);
  }

  return index;

})));
