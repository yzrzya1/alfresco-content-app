!(function(n, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e(
        require('ng.common'),
        require('shared'),
        require('ng.core'),
        require('adf.extensions')
      ))
    : 'function' == typeof define && define.amd
    ? define(['ng.common', 'shared', 'ng.core', 'adf.extensions'], e)
    : 'object' == typeof exports
    ? (exports.plugin1 = e(
        require('ng.common'),
        require('shared'),
        require('ng.core'),
        require('adf.extensions')
      ))
    : (n.plugin1 = e(
        n['ng.common'],
        n.shared,
        n['ng.core'],
        n['adf.extensions']
      ));
})('undefined' != typeof self ? self : this, function(n, e, l, u) {
  return (function(n) {
    var e = {};
    function l(u) {
      if (e[u]) return e[u].exports;
      var t = (e[u] = { i: u, l: !1, exports: {} });
      return n[u].call(t.exports, t, t.exports, l), (t.l = !0), t.exports;
    }
    return (
      (l.m = n),
      (l.c = e),
      (l.d = function(n, e, u) {
        l.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: u });
      }),
      (l.r = function(n) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(n, '__esModule', { value: !0 });
      }),
      (l.t = function(n, e) {
        if ((1 & e && (n = l(n)), 8 & e)) return n;
        if (4 & e && 'object' == typeof n && n && n.__esModule) return n;
        var u = Object.create(null);
        if (
          (l.r(u),
          Object.defineProperty(u, 'default', { enumerable: !0, value: n }),
          2 & e && 'string' != typeof n)
        )
          for (var t in n)
            l.d(
              u,
              t,
              function(e) {
                return n[e];
              }.bind(null, t)
            );
        return u;
      }),
      (l.n = function(n) {
        var e =
          n && n.__esModule
            ? function() {
                return n.default;
              }
            : function() {
                return n;
              };
        return l.d(e, 'a', e), e;
      }),
      (l.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e);
      }),
      (l.p = ''),
      l((l.s = 0))
    );
  })({
    0: function(n, e, l) {
      n.exports = l('zUnb');
    },
    '0S4P': function(e, l) {
      e.exports = n;
    },
    cfyg: function(n, l) {
      n.exports = e;
    },
    vOrQ: function(n, e) {
      n.exports = l;
    },
    'yX+R': function(n, e) {
      n.exports = u;
    },
    zUnb: function(n, e, l) {
      'use strict';
      l.r(e);
      var u = l('yX+R'),
        t = (function() {
          return function() {
            this.x = !1;
          };
        })(),
        o = (function() {
          return function() {};
        })(),
        r = (function() {
          function n(n) {
            n.setComponents({ 'plugin1.main': t }), console.log(n);
          }
          return (n.entry = t), (n.component2 = o), n;
        })(),
        i = l('vOrQ'),
        d = l('0S4P'),
        c = l('cfyg'),
        a = i['\u0275crt']({ encapsulation: 2, styles: [], data: {} });
      function f(n) {
        return i['\u0275vid'](
          0,
          [
            (n()(),
            i['\u0275eld'](
              0,
              0,
              null,
              null,
              1,
              'p',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), i['\u0275ted'](-1, null, ['Hidden text']))
          ],
          null,
          null
        );
      }
      function p(n) {
        return i['\u0275vid'](
          0,
          [
            (n()(),
            i['\u0275eld'](
              0,
              0,
              null,
              null,
              1,
              'h3',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), i['\u0275ted'](-1, null, ['Plugin 1'])),
            (n()(), i['\u0275and'](16777216, null, null, 1, null, f)),
            i['\u0275did'](
              3,
              16384,
              null,
              0,
              d.NgIf,
              [i.ViewContainerRef, i.TemplateRef],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (n()(),
            i['\u0275eld'](
              4,
              0,
              null,
              null,
              2,
              'button',
              [['sharedBtn', '']],
              null,
              [[null, 'click']],
              function(n, e, l) {
                var u = !0,
                  t = n.component;
                return 'click' === e && (u = 0 != (t.x = !t.x) && u), u;
              },
              c['View_\u0275a_0'],
              c['RenderType_\u0275a']
            )),
            i['\u0275did'](5, 49152, null, 0, c['\u0275a'], [], null, null),
            (n()(), i['\u0275ted'](-1, 0, ['Shared Button Example'])),
            (n()(),
            i['\u0275eld'](
              7,
              0,
              null,
              null,
              10,
              'shared-tabs',
              [],
              null,
              null,
              null,
              c['View_\u0275c_0'],
              c['RenderType_\u0275c']
            )),
            i['\u0275did'](8, 49152, null, 0, c['\u0275c'], [], null, null),
            (n()(),
            i['\u0275eld'](
              9,
              0,
              null,
              0,
              2,
              'shared-tab',
              [['title', 'Tab 1']],
              [[8, 'hidden', 0]],
              null,
              null,
              c['View_\u0275b_0'],
              c['RenderType_\u0275b']
            )),
            i['\u0275did'](
              10,
              49152,
              null,
              0,
              c['\u0275b'],
              [c['\u0275c']],
              { title: [0, 'title'] },
              null
            ),
            (n()(), i['\u0275ted'](-1, 0, [' Tab 1 contents '])),
            (n()(),
            i['\u0275eld'](
              12,
              0,
              null,
              0,
              2,
              'shared-tab',
              [['title', 'Tab 2']],
              [[8, 'hidden', 0]],
              null,
              null,
              c['View_\u0275b_0'],
              c['RenderType_\u0275b']
            )),
            i['\u0275did'](
              13,
              49152,
              null,
              0,
              c['\u0275b'],
              [c['\u0275c']],
              { title: [0, 'title'] },
              null
            ),
            (n()(), i['\u0275ted'](-1, 0, [' Tab 2 contents '])),
            (n()(),
            i['\u0275eld'](
              15,
              0,
              null,
              0,
              2,
              'shared-tab',
              [['title', 'Tab 3']],
              [[8, 'hidden', 0]],
              null,
              null,
              c['View_\u0275b_0'],
              c['RenderType_\u0275b']
            )),
            i['\u0275did'](
              16,
              49152,
              null,
              0,
              c['\u0275b'],
              [c['\u0275c']],
              { title: [0, 'title'] },
              null
            ),
            (n()(), i['\u0275ted'](-1, 0, [' Tab 3 contents ']))
          ],
          function(n, e) {
            n(e, 3, 0, e.component.x),
              n(e, 10, 0, 'Tab 1'),
              n(e, 13, 0, 'Tab 2'),
              n(e, 16, 0, 'Tab 3');
          },
          function(n, e) {
            n(e, 9, 0, i['\u0275nov'](e, 10).hidden),
              n(e, 12, 0, i['\u0275nov'](e, 13).hidden),
              n(e, 15, 0, i['\u0275nov'](e, 16).hidden);
          }
        );
      }
      function s(n) {
        return i['\u0275vid'](
          0,
          [
            (n()(),
            i['\u0275eld'](
              0,
              0,
              null,
              null,
              1,
              'app-plugin-1',
              [],
              null,
              null,
              null,
              p,
              a
            )),
            i['\u0275did'](1, 49152, null, 0, t, [], null, null)
          ],
          null,
          null
        );
      }
      var b = i['\u0275ccf']('app-plugin-1', t, s, {}, {}, []),
        m = i['\u0275crt']({ encapsulation: 2, styles: [], data: {} });
      function g(n) {
        return i['\u0275vid'](
          0,
          [
            (n()(),
            i['\u0275eld'](
              0,
              0,
              null,
              null,
              1,
              'h1',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (n()(), i['\u0275ted'](-1, null, ['Your ad could be here...']))
          ],
          null,
          null
        );
      }
      function y(n) {
        return i['\u0275vid'](
          0,
          [
            (n()(),
            i['\u0275eld'](
              0,
              0,
              null,
              null,
              1,
              'app-plugin-1-second',
              [],
              null,
              null,
              null,
              g,
              m
            )),
            i['\u0275did'](1, 49152, null, 0, o, [], null, null)
          ],
          null,
          null
        );
      }
      var v = i['\u0275ccf']('app-plugin-1-second', o, y, {}, {}, []),
        _ = i['\u0275cmf'](r, [], function(n) {
          return i['\u0275mod']([
            i['\u0275mpd'](
              512,
              i.ComponentFactoryResolver,
              i['\u0275CodegenComponentFactoryResolver'],
              [[8, [b, v]], [3, i.ComponentFactoryResolver], i.NgModuleRef]
            ),
            i['\u0275mpd'](4608, d.NgLocalization, d.NgLocaleLocalization, [
              i.LOCALE_ID,
              [2, d['\u0275angular_packages_common_common_a']]
            ]),
            i['\u0275mpd'](1073742336, d.CommonModule, d.CommonModule, []),
            i['\u0275mpd'](1073742336, c.SharedModule, c.SharedModule, []),
            i['\u0275mpd'](1073742336, r, r, [u.ExtensionService])
          ]);
        });
      l.d(e, 'Plugin1Module', function() {
        return r;
      }),
        l.d(e, 'Plugin1ModuleNgFactory', function() {
          return _;
        }),
        (e.default = _);
    }
  });
});
