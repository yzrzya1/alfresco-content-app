!(function(n, l) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = l(
        require('ng.common'),
        require('shared'),
        require('ng.core')
      ))
    : 'function' == typeof define && define.amd
    ? define(['ng.common', 'shared', 'ng.core'], l)
    : 'object' == typeof exports
    ? (exports.plugin1 = l(
        require('ng.common'),
        require('shared'),
        require('ng.core')
      ))
    : (n.plugin1 = l(n['ng.common'], n.shared, n['ng.core']));
})('undefined' != typeof self ? self : this, function(n, l, e) {
  return (function(n) {
    var l = {};
    function e(u) {
      if (l[u]) return l[u].exports;
      var t = (l[u] = { i: u, l: !1, exports: {} });
      return n[u].call(t.exports, t, t.exports, e), (t.l = !0), t.exports;
    }
    return (
      (e.m = n),
      (e.c = l),
      (e.d = function(n, l, u) {
        e.o(n, l) || Object.defineProperty(n, l, { enumerable: !0, get: u });
      }),
      (e.r = function(n) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(n, '__esModule', { value: !0 });
      }),
      (e.t = function(n, l) {
        if ((1 & l && (n = e(n)), 8 & l)) return n;
        if (4 & l && 'object' == typeof n && n && n.__esModule) return n;
        var u = Object.create(null);
        if (
          (e.r(u),
          Object.defineProperty(u, 'default', { enumerable: !0, value: n }),
          2 & l && 'string' != typeof n)
        )
          for (var t in n)
            e.d(
              u,
              t,
              function(l) {
                return n[l];
              }.bind(null, t)
            );
        return u;
      }),
      (e.n = function(n) {
        var l =
          n && n.__esModule
            ? function() {
                return n.default;
              }
            : function() {
                return n;
              };
        return e.d(l, 'a', l), l;
      }),
      (e.o = function(n, l) {
        return Object.prototype.hasOwnProperty.call(n, l);
      }),
      (e.p = ''),
      e((e.s = 0))
    );
  })({
    0: function(n, l, e) {
      n.exports = e('zUnb');
    },
    '0S4P': function(l, e) {
      l.exports = n;
    },
    cfyg: function(n, e) {
      n.exports = l;
    },
    vOrQ: function(n, l) {
      n.exports = e;
    },
    zUnb: function(n, l, e) {
      'use strict';
      e.r(l);
      var u = (function() {
          return function() {
            this.x = !1;
          };
        })(),
        t = (function() {
          return function() {};
        })(),
        o = (function() {
          function n() {}
          return (n.entry = u), (n.component2 = t), n;
        })(),
        r = e('vOrQ'),
        d = e('0S4P'),
        i = e('cfyg'),
        c = r['\u0275crt']({ encapsulation: 2, styles: [], data: {} });
      function a(n) {
        return r['\u0275vid'](
          0,
          [
            (n()(),
            r['\u0275eld'](
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
            (n()(), r['\u0275ted'](-1, null, ['Hidden text']))
          ],
          null,
          null
        );
      }
      function f(n) {
        return r['\u0275vid'](
          0,
          [
            (n()(),
            r['\u0275eld'](
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
            (n()(), r['\u0275ted'](-1, null, ['Plugin 1'])),
            (n()(), r['\u0275and'](16777216, null, null, 1, null, a)),
            r['\u0275did'](
              3,
              16384,
              null,
              0,
              d.NgIf,
              [r.ViewContainerRef, r.TemplateRef],
              { ngIf: [0, 'ngIf'] },
              null
            ),
            (n()(),
            r['\u0275eld'](
              4,
              0,
              null,
              null,
              2,
              'button',
              [['sharedBtn', '']],
              null,
              [[null, 'click']],
              function(n, l, e) {
                var u = !0,
                  t = n.component;
                return 'click' === l && (u = 0 != (t.x = !t.x) && u), u;
              },
              i['View_\u0275a_0'],
              i['RenderType_\u0275a']
            )),
            r['\u0275did'](5, 49152, null, 0, i['\u0275a'], [], null, null),
            (n()(), r['\u0275ted'](-1, 0, ['Shared Button Example'])),
            (n()(),
            r['\u0275eld'](
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
              i['View_\u0275c_0'],
              i['RenderType_\u0275c']
            )),
            r['\u0275did'](8, 49152, null, 0, i['\u0275c'], [], null, null),
            (n()(),
            r['\u0275eld'](
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
              i['View_\u0275b_0'],
              i['RenderType_\u0275b']
            )),
            r['\u0275did'](
              10,
              49152,
              null,
              0,
              i['\u0275b'],
              [i['\u0275c']],
              { title: [0, 'title'] },
              null
            ),
            (n()(), r['\u0275ted'](-1, 0, [' Tab 1 contents '])),
            (n()(),
            r['\u0275eld'](
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
              i['View_\u0275b_0'],
              i['RenderType_\u0275b']
            )),
            r['\u0275did'](
              13,
              49152,
              null,
              0,
              i['\u0275b'],
              [i['\u0275c']],
              { title: [0, 'title'] },
              null
            ),
            (n()(), r['\u0275ted'](-1, 0, [' Tab 2 contents '])),
            (n()(),
            r['\u0275eld'](
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
              i['View_\u0275b_0'],
              i['RenderType_\u0275b']
            )),
            r['\u0275did'](
              16,
              49152,
              null,
              0,
              i['\u0275b'],
              [i['\u0275c']],
              { title: [0, 'title'] },
              null
            ),
            (n()(), r['\u0275ted'](-1, 0, [' Tab 3 contents ']))
          ],
          function(n, l) {
            n(l, 3, 0, l.component.x),
              n(l, 10, 0, 'Tab 1'),
              n(l, 13, 0, 'Tab 2'),
              n(l, 16, 0, 'Tab 3');
          },
          function(n, l) {
            n(l, 9, 0, r['\u0275nov'](l, 10).hidden),
              n(l, 12, 0, r['\u0275nov'](l, 13).hidden),
              n(l, 15, 0, r['\u0275nov'](l, 16).hidden);
          }
        );
      }
      function p(n) {
        return r['\u0275vid'](
          0,
          [
            (n()(),
            r['\u0275eld'](
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
              f,
              c
            )),
            r['\u0275did'](1, 49152, null, 0, u, [], null, null)
          ],
          null,
          null
        );
      }
      var s = r['\u0275ccf']('app-plugin-1', u, p, {}, {}, []),
        b = r['\u0275crt']({ encapsulation: 2, styles: [], data: {} });
      function m(n) {
        return r['\u0275vid'](
          0,
          [
            (n()(),
            r['\u0275eld'](
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
            (n()(), r['\u0275ted'](-1, null, ['Your ad could be here...']))
          ],
          null,
          null
        );
      }
      function g(n) {
        return r['\u0275vid'](
          0,
          [
            (n()(),
            r['\u0275eld'](
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
              m,
              b
            )),
            r['\u0275did'](1, 49152, null, 0, t, [], null, null)
          ],
          null,
          null
        );
      }
      var y = r['\u0275ccf']('app-plugin-1-second', t, g, {}, {}, []),
        _ = r['\u0275cmf'](o, [], function(n) {
          return r['\u0275mod']([
            r['\u0275mpd'](
              512,
              r.ComponentFactoryResolver,
              r['\u0275CodegenComponentFactoryResolver'],
              [[8, [s, y]], [3, r.ComponentFactoryResolver], r.NgModuleRef]
            ),
            r['\u0275mpd'](4608, d.NgLocalization, d.NgLocaleLocalization, [
              r.LOCALE_ID,
              [2, d['\u0275angular_packages_common_common_a']]
            ]),
            r['\u0275mpd'](1073742336, d.CommonModule, d.CommonModule, []),
            r['\u0275mpd'](1073742336, i.SharedModule, i.SharedModule, []),
            r['\u0275mpd'](1073742336, o, o, [])
          ]);
        });
      e.d(l, 'Plugin1Module', function() {
        return o;
      }),
        e.d(l, 'Plugin1ModuleNgFactory', function() {
          return _;
        }),
        (l.default = _);
    }
  });
});
