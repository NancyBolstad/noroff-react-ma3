(this['webpackJsonpnoroff-react-ma3'] = this['webpackJsonpnoroff-react-ma3'] || []).push([
  [0],
  {
    108: function(n, e, t) {
      'use strict';
      var r = t(2),
        o = t(0),
        i = t(1);
      function a() {
        var n = Object(r.a)([
          '\n      background-image: url(',
          ');\n      background-position: center;\n      background-size: cover;\n    ',
        ]);
        return (
          (a = function() {
            return n;
          }),
          n
        );
      }
      function c() {
        var n = Object(r.a)(['\n      grid-row: ', ';\n    ']);
        return (
          (c = function() {
            return n;
          }),
          n
        );
      }
      function u() {
        var n = Object(r.a)([
          '\n      @media all and (min-width: ',
          'px) {\n        grid-column: ',
          ';\n      }\n    ',
        ]);
        return (
          (u = function() {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = Object(r.a)([
          '\n  background-color: ',
          ';\n  display: flex;\n  ',
          ';\n  ',
          ';\n  ',
          ';\n',
        ]);
        return (
          (l = function() {
            return n;
          }),
          n
        );
      }
      function m() {
        var n = Object(r.a)([
          '\n  display: grid;\n  grid-gap: ',
          'rem;\n  grid-auto-rows: 260px;\n  grid-template-columns: 1fr;\n\n  @media all and (min-width: ',
          'px) {\n    grid-auto-rows: 306px;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: ',
          'rem;\n  }\n',
        ]);
        return (
          (m = function() {
            return n;
          }),
          n
        );
      }
      var s = i.d.div(
          m(),
          function(n) {
            return n.theme.spacing.xs;
          },
          function(n) {
            return n.theme.mediaQueries.medium;
          },
          function(n) {
            return n.theme.spacing.s;
          },
        ),
        f = i.d.div(
          l(),
          function(n) {
            return n.theme.colors.primary;
          },
          function(n) {
            return (
              n.column &&
              Object(i.c)(
                u(),
                function(n) {
                  return n.theme.mediaQueries.medium;
                },
                n.column,
              )
            );
          },
          function(n) {
            return n.row && Object(i.c)(c(), n.row);
          },
          function(n) {
            return n.background && Object(i.c)(a(), n.background);
          },
        ),
        d = s,
        h = t(17);
      function g() {
        var n = Object(r.a)([
          '\n      background-image: url(',
          ');\n      background-size: cover;\n      background-position: center;\n    ',
        ]);
        return (
          (g = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = Object(r.a)(['\n  width: 100%;\n  ', ';\n']);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      t.d(e, 'a', function() {
        return v;
      });
      var b = i.d.div(p(), function(n) {
          return n.imageURL && Object(i.c)(g(), n.imageURL);
        }),
        v = function(n) {
          var e = n.images,
            t = n.text;
          return o.createElement(
            o.Fragment,
            null,
            !!t && o.createElement(h.a, { content: t }),
            o.createElement(
              d,
              null,
              e.map(function(n, e) {
                return o.createElement(
                  f,
                  {
                    key: e,
                    row: 0 === e || 3 === e ? 'span 2' : void 0,
                    column: 0 === e ? 'span 2' : 3 === e ? 'span 3' : void 0,
                  },
                  o.createElement(b, { imageURL: n.imageURL }),
                );
              }),
            ),
          );
        };
      e.b = v;
    },
    109: function(n, e, t) {
      'use strict';
      (function(n) {
        t.d(e, 'a', function() {
          return a;
        });
        var r = t(0),
          o = t(223),
          i = t(108),
          a = {
            imageURL:
              'https://res.cloudinary.com/oyvindhermansen/image/upload/v1568385948/qfwh7yghtj5buvssnvzc.jpg',
          },
          c = r.createElement(i.a, { images: [a, a, a], text: 'Lorem Images' });
        Object(o.storiesOf)('Component/ImageGrid', n).add('Basic usage', function() {
          return c;
        });
      }.call(this, t(79)(n)));
    },
    15: function(n, e, t) {
      'use strict';
      var r = t(2),
        o = t(1);
      function i() {
        var n = Object(r.a)(['\n        line-height: ', ';\n      ']);
        return (
          (i = function() {
            return n;
          }),
          n
        );
      }
      function a() {
        var n = Object(r.a)([
          '\n    font-family: ',
          ';\n    font-weight: ',
          ';\n    font-size: ',
          'rem;\n    ',
          ';\n  ',
        ]);
        return (
          (a = function() {
            return n;
          }),
          n
        );
      }
      e.a = function(n) {
        return Object(o.c)(
          a(),
          n.family,
          n.weight,
          n.size,
          n.lineHeight && Object(o.c)(i(), n.lineHeight),
        );
      };
    },
    17: function(n, e, t) {
      'use strict';
      var r = t(2),
        o = t(0),
        i = t(1),
        a = t(15);
      function c() {
        var n = Object(r.a)([
          '\n  margin: ',
          'rem auto;\n  color: ',
          ';\n  ',
          ';\n  text-align: center;\n\n  @media all and (min-width: 600px) {\n    margin: ',
          'rem 0;\n  }\n',
        ]);
        return (
          (c = function() {
            return n;
          }),
          n
        );
      }
      var u = i.d.h1(
        c(),
        function(n) {
          return n.theme.spacing.m;
        },
        function(n) {
          return n.isPrimaryColor ? n.theme.colors.primary : n.theme.colors.secondary;
        },
        function(n) {
          return Object(a.a)(n.theme.fonts.h1);
        },
        function(n) {
          return n.theme.spacing.l;
        },
      );
      e.a = function(n) {
        var e = n.content,
          t = n.isPrimaryColor;
        return o.createElement(u, { isPrimaryColor: t }, e);
      };
    },
    230: function(n, e, t) {
      n.exports = t(434);
    },
    235: function(n, e, t) {},
    236: function(n, e, t) {},
    434: function(n, e, t) {
      'use strict';
      t.r(e);
      var r = t(0),
        o = t.n(r),
        i = t(105),
        a = t.n(i),
        c = (t(235), t(236), t(60)),
        u = t(45),
        l = t(2),
        m = t(1),
        s = t(15),
        f = "'Muli', sans-serif",
        d = 400,
        h = 700,
        g = {
          spacing: { xs: 0.5, s: 1, m: 1.5, l: 3, xl: 5 },
          fonts: {
            h1: { family: f, weight: h, size: 3.125, lineHeight: 1.15 },
            h2: { family: f, weight: h, size: 2.1875, lineHeight: 1.15 },
            h3: { family: f, weight: h, size: 1.5625, lineHeight: 1.15 },
            h4: { family: f, weight: h, size: 1.25, lineHeight: 1.15 },
            h5: { family: f, weight: d, size: 1.125, lineHeight: 1.15 },
            h6: { family: f, weight: h, size: 1, lineHeight: 1.15 },
            b1: { family: f, weight: d, size: 1, lineHeight: 1.5 },
            b2: { family: f, weight: h, size: 1.125, lineHeight: 1.15 },
            b3: { family: f, weight: h, size: 1.125, lineHeight: 1.15 },
          },
          mediaQueries: { small: 600, medium: 768, large: 1280 },
          colors: {
            primary: '#2B2928',
            primaryVariant: '#555453',
            secondary: '#3f18aa',
            secondaryVariant: '#3d17a5',
            background: '#ffffff',
            surface: '#f7f8f6',
            error: '#e4d815',
            onPrimary: '#f7f8f6',
            onSecondary: '#ffffff',
            onBackground: '#2B2928',
            onSurface: '#2B2928',
            onError: '#ffffff',
          },
        };
      function p() {
        var n = Object(l.a)(['']);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      function b() {
        var n = Object(l.a)([
          '\n  body {\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: antialiased;\n    color: ',
          ';\n    ',
          '\n  }\n  * {\n    box-sizing: border-box;\n  }\n',
        ]);
        return (
          (b = function() {
            return n;
          }),
          n
        );
      }
      var v = Object(m.b)(
          b(),
          function(n) {
            return n.theme.colors.onBackground;
          },
          function(n) {
            return Object(s.a)(n.theme.fonts.b1);
          },
        ),
        w = m.d.div(p()),
        y = function(n) {
          var e = n.children;
          return r.createElement(
            m.a,
            { theme: g },
            r.createElement('div', null, r.createElement(v, null), r.createElement(w, null, e)),
          );
        },
        x = t(17);
      function E() {
        var n = Object(l.a)([
          '\n  display: flex;\n  flex-direction: column;\n  padding: ',
          'rem;\n  max-width: 1440px;\n  margin: 0 auto;\n',
        ]);
        return (
          (E = function() {
            return n;
          }),
          n
        );
      }
      var j = m.d.div(E(), function(n) {
          return n.theme.spacing.m;
        }),
        O = function(n) {
          var e = n.children;
          return e ? r.createElement(j, null, e) : null;
        },
        k =
          (r.createElement(
            'svg',
            { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
            r.createElement('path', {
              d:
                'M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z',
            }),
          ),
          r.createElement(
            'svg',
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', 'aria-hidden': !0 },
            r.createElement('path', {
              d:
                'M9.99396 0C4.48629 0 0 4.48629 0 9.99396C0 15.5016 4.48629 19.9879 9.99396 19.9879C12.389 19.9879 14.5886 19.1374 16.3124 17.7256L22.2795 23.6927C22.3716 23.7886 22.4819 23.8652 22.604 23.918C22.726 23.9707 22.8574 23.9986 22.9903 23.9999C23.1233 24.0013 23.2552 23.9761 23.3783 23.9258C23.5014 23.8756 23.6132 23.8013 23.7073 23.7073C23.8013 23.6132 23.8756 23.5014 23.9258 23.3783C23.9761 23.2552 24.0013 23.1233 23.9999 22.9903C23.9986 22.8574 23.9707 22.726 23.918 22.604C23.8652 22.4819 23.7886 22.3716 23.6927 22.2795L17.7256 16.3124C19.1374 14.5886 19.9879 12.389 19.9879 9.99396C19.9879 4.48629 15.5016 0 9.99396 0ZM9.99396 1.99879C14.4214 1.99879 17.9891 5.56652 17.9891 9.99396C17.9891 14.4214 14.4214 17.9891 9.99396 17.9891C5.56652 17.9891 1.99879 14.4214 1.99879 9.99396C1.99879 5.56652 5.56652 1.99879 9.99396 1.99879Z',
            }),
          ),
          r.createElement(
            'svg',
            {
              width: '26',
              height: '16',
              viewBox: '0 0 26 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.createElement('rect', { y: '14', width: '26', height: '2' }),
            r.createElement('rect', { y: '7', width: '26', height: '2' }),
            r.createElement('rect', { width: '26', height: '2' }),
          ),
          r.createElement(
            'svg',
            { viewBox: '0 0 21 20', xmlns: 'http://www.w3.org/2000/svg' },
            r.createElement('rect', {
              x: '18.7324',
              y: '19.5586',
              width: '26',
              height: '2',
              transform: 'rotate(-136.096 18.7324 19.5586)',
            }),
            r.createElement('rect', {
              x: '0.0859375',
              y: '18.2207',
              width: '26',
              height: '2',
              transform: 'rotate(-44.4891 0.0859375 18.2207)',
            }),
          ),
          r.createElement(
            'svg',
            {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.createElement('path', {
              d:
                'M10 0.958984C4.48 0.958984 0 5.37212 0 10.8097C0 16.2473 4.48 20.6605 10 20.6605C15.52 20.6605 20 16.2473 20 10.8097C20 5.37212 15.52 0.958984 10 0.958984ZM11 15.7351H9V9.82466H11V15.7351ZM11 7.85451H9V5.88436H11V7.85451Z',
            }),
          ),
          r.createElement(
            'svg',
            {
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r.createElement('path', {
              d:
                'M6.09586 10.8437L1.92586 6.67367L0.505859 8.08367L6.09586 13.6737L18.0959 1.67367L16.6859 0.263672L6.09586 10.8437Z',
            }),
          ));
      function C() {
        var n = Object(l.a)([
          '\n  display: flex;\n  align-items: center;\n  max-width: 615px;\n  svg {\n    width: 1.5rem;\n    height: 1.5rem;\n    fill: ',
          ';\n    margin-left: ',
          'rem;\n    margin-top: 0.5rem;\n  }\n',
        ]);
        return (
          (C = function() {
            return n;
          }),
          n
        );
      }
      function L() {
        var n = Object(l.a)([
          '\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  margin-bottom: ',
          'rem;\n  width: 100%;\n  p {\n    max-width: 615px;\n  }\n',
        ]);
        return (
          (L = function() {
            return n;
          }),
          n
        );
      }
      function z() {
        var n = Object(l.a)([
          '\n  width: 100%;\n  max-width: 680px;\n  margin: 0 auto;\n  padding: ',
          'rem ',
          'rem;\n  display: flex;\n  flex-direction: column;\n',
        ]);
        return (
          (z = function() {
            return n;
          }),
          n
        );
      }
      function B() {
        var n = Object(l.a)([
          '\n  width: 100%;\n  background: ',
          ';\n  color: ',
          ';\n  overflow: auto;\n',
        ]);
        return (
          (B = function() {
            return n;
          }),
          n
        );
      }
      var P = m.d.div(
          B(),
          function(n) {
            return n.theme.colors.surface;
          },
          function(n) {
            return n.theme.colors.onSurface;
          },
        ),
        H = m.d.ul(
          z(),
          function(n) {
            return n.theme.spacing.m;
          },
          function(n) {
            return n.theme.spacing.xl;
          },
        ),
        S = m.d.li(L(), function(n) {
          return n.theme.spacing.s;
        }),
        M = m.d.div(
          C(),
          function(n) {
            return n.theme.colors.secondary;
          },
          function(n) {
            return n.theme.spacing.xs;
          },
        ),
        V = {
          title: 'Lorem ipsum dolor',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        q = {
          title: 'Pellentesque ac sapien',
          content:
            'Pellentesque ac sapien ac felis accumsan rutrum. Pellentesque ac sapien ac felis accumsan rutrum. Pellentesque ac sapien ac felis accumsan rutrum.',
        },
        N = { sectionTitle: 'Molestie Pellentesque', list: [V, q, q, V] },
        I = function() {
          var n = N.sectionTitle,
            e = N.list;
          return r.createElement(
            P,
            null,
            r.createElement(x.a, { content: n }),
            r.createElement(
              H,
              null,
              (e || []).map(function(n, e) {
                return r.createElement(
                  S,
                  { key: e },
                  !!n.title && r.createElement(M, null, k, r.createElement('h2', null, n.title)),
                  !!n.content && r.createElement('p', null, n.content),
                );
              }),
            ),
          );
        },
        Q = t(108),
        Z = t(109),
        R = function() {
          return r.createElement(
            y,
            null,
            r.createElement(x.a, {
              content: 'Noroff React App Module Assignment 3',
              isPrimaryColor: !0,
            }),
            r.createElement(
              O,
              null,
              r.createElement(Q.b, { images: [Z.a, Z.a, Z.a] }),
              r.createElement(I, null),
            ),
          );
        },
        U = t(228);
      function A() {
        var n = Object(l.a)(['\n  ', ';\n']);
        return (
          (A = function() {
            return n;
          }),
          n
        );
      }
      function W() {
        var n = Object(l.a)([
          '\n  height: 40px;\n  width: 60%;\n  background-color: ',
          ';\n  border: 1px solid ',
          ';\n  border-bottom: 2px solid ',
          ';\n  padding: 0 32px;\n  outline: none;\n  transition: border-color 0.1s ease-in-out;\n  ',
          ';\n\n  &::placeholder {\n    color: ',
          ';\n  }\n  &:active,\n  &:focus {\n    border-bottom: 2px solid ',
          ';\n  }\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n  &:placeholder-shown {\n    border: 1px solid ',
          ';\n  }\n\n  @media all and (min-width: ',
          'px) {\n    min-width: 150px;\n  }\n',
        ]);
        return (
          (W = function() {
            return n;
          }),
          n
        );
      }
      function F() {
        var n = Object(l.a)([
          '\n  width: 40%;\n  border: 1px solid ',
          ';\n  color: ',
          ';\n  padding: 0 32px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  ',
          ';\n',
        ]);
        return (
          (F = function() {
            return n;
          }),
          n
        );
      }
      function G() {
        var n = Object(l.a)([
          '\n  ',
          ';\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: ',
          'rem 0;\n',
        ]);
        return (
          (G = function() {
            return n;
          }),
          n
        );
      }
      function J() {
        var n = Object(l.a)([
          '\n  max-width: 480px;\n  margin: 0 auto;\n  padding: ',
          'rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  button {\n    margin-top: ',
          'rem;\n  }\n',
        ]);
        return (
          (J = function() {
            return n;
          }),
          n
        );
      }
      var T = m.d.form(
          J(),
          function(n) {
            return n.theme.spacing.s;
          },
          function(n) {
            return n.theme.spacing.s;
          },
        ),
        Y = m.d.label(
          G(),
          function(n) {
            return Object(s.a)(n.theme.fonts.b2);
          },
          function(n) {
            return n.theme.spacing.s;
          },
        ),
        $ = m.d.span(
          F(),
          function(n) {
            return n.theme.colors.secondary;
          },
          function(n) {
            return n.theme.colors.secondary;
          },
          function(n) {
            return Object(s.a)(n.theme.fonts.b2);
          },
        ),
        D = m.d.input(
          W(),
          function(n) {
            return n.theme.colors.background;
          },
          function(n) {
            return n.theme.colors.primaryVariant;
          },
          function(n) {
            return n.theme.colors.primary;
          },
          function(n) {
            return Object(s.a)(n.theme.fonts.b1);
          },
          function(n) {
            return n.theme.colors.primaryVariant;
          },
          function(n) {
            return n.theme.colors.secondary;
          },
          function(n) {
            return n.theme.colors.primaryVariant;
          },
          function(n) {
            return n.theme.mediaQueries.small;
          },
        ),
        K = m.d.span(A(), function(n) {
          return Object(s.a)(n.theme.fonts.b2);
        });
      function X() {
        var n = Object(l.a)([
          '\n      background-color: transparent;\n      color: ',
          ';\n      border-color: ',
          ';\n      &:hover,\n      &:active,\n      &:focus {\n        background-color: ',
          ';\n        color: ',
          ';\n        svg {\n          fill: ',
          ';\n        }\n      }\n      svg {\n        fill: ',
          ';\n      }\n    ',
        ]);
        return (
          (X = function() {
            return n;
          }),
          n
        );
      }
      function _() {
        var n = Object(l.a)([
          '\n      background-color: ',
          ';\n      color: ',
          ';\n      border: none;\n      &:hover,\n      &:active,\n      &:focus {\n        background-color: ',
          ';\n      }\n      svg {\n        fill: ',
          ';\n      }\n    ',
        ]);
        return (
          (_ = function() {
            return n;
          }),
          n
        );
      }
      function nn() {
        var n = Object(l.a)([
          '\n      background-color: ',
          ';\n      border-color: ',
          ';\n      color: ',
          ';\n      svg {\n        fill: ',
          ';\n      }\n      &:hover,\n      &:active,\n      &:focus {\n        background-color: ',
          ';\n        color: ',
          ';\n        svg {\n          fill: ',
          ';\n        }\n      }\n    ',
        ]);
        return (
          (nn = function() {
            return n;
          }),
          n
        );
      }
      function en() {
        var n = Object(l.a)([
          '\n      background-color: ',
          ';\n      color: ',
          ';\n      &:hover,\n      &:active,\n      &:focus {\n        opacity: 0.9;\n      }\n      svg {\n        fill: ',
          ';\n      }\n    ',
        ]);
        return (
          (en = function() {
            return n;
          }),
          n
        );
      }
      function tn() {
        var n = Object(l.a)([
          '\n      height: 45px;\n      min-width: 250px;\n      padding-left: 75px;\n      padding-right: 75px;\n      border-radius: 35px;\n      ',
          ';\n\n      @media all and (min-width: ',
          'px) {\n        height: 50px;\n      }\n    ',
        ]);
        return (
          (tn = function() {
            return n;
          }),
          n
        );
      }
      function rn() {
        var n = Object(l.a)([
          '\n      height: 42px;\n      width: 100%;\n      padding: 0 20px;\n      ',
          ';\n\n      @media all and (min-width: ',
          'px) {\n        width: 160px;\n      }\n    ',
        ]);
        return (
          (rn = function() {
            return n;
          }),
          n
        );
      }
      function on() {
        var n = Object(l.a)([
          '\n      height: 40px;\n      min-width: 75px;\n      padding: 0 32px;\n      ',
          ';\n\n      @media all and (min-width: ',
          'px) {\n        padding: 0 20px;\n      }\n    ',
        ]);
        return (
          (on = function() {
            return n;
          }),
          n
        );
      }
      function an() {
        var n = Object(l.a)([
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  text-decoration: none;\n  width: fit-content;\n  border: 2px solid transparent;\n  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;\n  &:disabled {\n    pointer-events: none;\n    opacity: 0.6;\n  }\n  svg {\n    width: 24px;\n    height: 24px;\n    margin-left: ',
          'rem;\n  }\n  ',
          ';\n  ',
          ';\n  ',
          ';\n  ',
          ';\n  ',
          ';\n  ',
          ';\n  ',
          ';\n',
        ]);
        return (
          (an = function() {
            return n;
          }),
          n
        );
      }
      var cn = m.d.button(
          an(),
          function(n) {
            return n.theme.spacing.xs;
          },
          function(n) {
            return (
              'small' === n.size &&
              Object(m.c)(on(), Object(s.a)(n.theme.fonts.b2), function(n) {
                return n.theme.mediaQueries.small;
              })
            );
          },
          function(n) {
            return (
              'medium' === n.size &&
              Object(m.c)(rn(), Object(s.a)(n.theme.fonts.b2), function(n) {
                return n.theme.mediaQueries.small;
              })
            );
          },
          function(n) {
            return (
              'large' === n.size &&
              Object(m.c)(tn(), Object(s.a)(n.theme.fonts.b3), function(n) {
                return n.theme.mediaQueries.small;
              })
            );
          },
          function(n) {
            return (
              'primary' === n.variant &&
              Object(m.c)(
                en(),
                function(n) {
                  return n.theme.colors.secondary;
                },
                function(n) {
                  return n.theme.colors.onSecondary;
                },
                function(n) {
                  return n.theme.colors.onPrimary;
                },
              )
            );
          },
          function(n) {
            return (
              'secondary' === n.variant &&
              Object(m.c)(
                nn(),
                function(n) {
                  return n.theme.colors.background;
                },
                function(n) {
                  return n.theme.colors.secondary;
                },
                function(n) {
                  return n.theme.colors.onBackground;
                },
                function(n) {
                  return n.theme.colors.secondary;
                },
                function(n) {
                  return n.theme.colors.secondary;
                },
                function(n) {
                  return n.theme.colors.onSecondary;
                },
                function(n) {
                  return n.theme.colors.onSecondary;
                },
              )
            );
          },
          function(n) {
            return (
              'tertiary' === n.variant &&
              Object(m.c)(
                _(),
                function(n) {
                  return n.theme.colors.background;
                },
                function(n) {
                  return n.theme.colors.onBackground;
                },
                function(n) {
                  return (
                    (e = n.theme.colors.background),
                    (t = '0.8'),
                    (e = e.replace('#', '')),
                    'rgba(' +
                      parseInt(e.substring(0, 2), 16) +
                      ',' +
                      parseInt(e.substring(2, 4), 16) +
                      ',' +
                      parseInt(e.substring(4, 6), 16) +
                      ',' +
                      t +
                      ')'
                  );
                  var e, t;
                },
                function(n) {
                  return n.theme.colors.onBackground;
                },
              )
            );
          },
          function(n) {
            return (
              'quaternary' === n.variant &&
              Object(m.c)(
                X(),
                function(n) {
                  return n.theme.colors.onPrimary;
                },
                function(n) {
                  return n.theme.colors.onPrimary;
                },
                function(n) {
                  return n.theme.colors.onPrimary;
                },
                function(n) {
                  return n.theme.colors.onBackground;
                },
                function(n) {
                  return n.theme.colors.onBackground;
                },
                function(n) {
                  return n.theme.colors.onPrimary;
                },
              )
            );
          },
        ),
        un = (cn.withComponent('a'), cn.withComponent('input'), cn),
        ln = t(110),
        mn = ln
          .a()
          .shape({
            userName: ln.b().required('\ud83d\udd25Invalid user name.'),
            password: ln.b().min(4, '\ud83d\udd25At least four characters.'),
          }),
        sn = function() {
          var n = Object(U.a)({ validationSchema: mn }),
            e = n.handleSubmit,
            t = n.register,
            o = n.errors,
            i = Object(u.f)();
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(x.a, { content: 'Login', isPrimaryColor: !0 }),
            r.createElement(
              T,
              {
                onSubmit: e(function(n) {
                  n.userName && n.password && i.push('/profile');
                }),
              },
              r.createElement(
                Y,
                null,
                r.createElement($, null, 'Username'),
                r.createElement(D, {
                  type: 'text',
                  name: 'userName',
                  placeholder: 'Your username',
                  ref: t,
                }),
              ),
              o.userName && r.createElement(K, null, o.userName.message),
              r.createElement(
                Y,
                null,
                r.createElement($, null, 'Password'),
                r.createElement(D, {
                  type: 'password',
                  name: 'password',
                  placeholder: 'Your password',
                  ref: t,
                }),
              ),
              o.password && r.createElement(K, null, o.password.message),
              r.createElement(un, { size: 'medium', variant: 'primary', type: 'submit' }, 'Login'),
            ),
          );
        },
        fn = function() {
          return r.createElement(y, null, r.createElement(O, null, r.createElement(sn, null)));
        },
        dn = function() {
          return r.createElement(
            y,
            null,
            r.createElement(x.a, { content: 'News List', isPrimaryColor: !0 }),
            r.createElement(O, null, r.createElement(I, null)),
          );
        };
      function hn() {
        var n = Object(l.a)(['\n  list-style-type: none;\n']);
        return (
          (hn = function() {
            return n;
          }),
          n
        );
      }
      function gn() {
        var n = Object(l.a)(['\n  flex: 1;\n  display: flex;\n']);
        return (
          (gn = function() {
            return n;
          }),
          n
        );
      }
      function pn() {
        var n = Object(l.a)([
          '\n  border: 2px solid ',
          ';\n  list-text-style: none;\n  padding: 0.5rem 2rem;\n',
        ]);
        return (
          (pn = function() {
            return n;
          }),
          n
        );
      }
      function bn() {
        var n = Object(l.a)([
          '\n  color: ',
          ';\n  font-size: 1.75rem;\n  font-weight: bold;\n  margin-right: ',
          'rem;\n  text-decoration: none;\n  padding: 0.5rem 1.5rem;\n\n  &:hover {\n    opacity: 0.8;\n  }\n',
        ]);
        return (
          (bn = function() {
            return n;
          }),
          n
        );
      }
      function vn() {
        var n = Object(l.a)([
          '\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  list-style-type: none;\n  }\n',
        ]);
        return (
          (vn = function() {
            return n;
          }),
          n
        );
      }
      function wn() {
        var n = Object(l.a)([
          '\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n',
        ]);
        return (
          (wn = function() {
            return n;
          }),
          n
        );
      }
      function yn() {
        var n = Object(l.a)([
          '\n  width: 100%;\n  height: 78px;\n  background: ',
          ';\n  color: ',
          ';\n',
        ]);
        return (
          (yn = function() {
            return n;
          }),
          n
        );
      }
      var xn = m.d.header(
          yn(),
          function(n) {
            return n.theme.colors.secondaryVariant;
          },
          function(n) {
            return n.theme.colors.onSecondary;
          },
        ),
        En = m.d.nav(wn()),
        jn = m.d.ul(vn()),
        On = Object(m.d)(c.b)(
          bn(),
          function(n) {
            return n.theme.colors.onSecondary;
          },
          function(n) {
            return n.theme.spacing.s;
          },
        ),
        kn = Object(m.d)(On)(pn(), function(n) {
          return n.theme.colors.onSecondary;
        }),
        Cn = m.d.div(gn()),
        Ln = m.d.div(hn()),
        zn = function() {
          var n = Object(u.g)();
          return r.createElement(
            y,
            null,
            r.createElement(
              xn,
              null,
              r.createElement(
                En,
                null,
                r.createElement(
                  jn,
                  null,
                  r.createElement(
                    Cn,
                    null,
                    r.createElement('li', null, r.createElement(On, { to: '/' }, 'L-o-G-o')),
                    r.createElement('li', null, r.createElement(On, { to: '/' }, 'Home')),
                    r.createElement('li', null, r.createElement(On, { to: '/news' }, 'News List')),
                  ),
                ),
                r.createElement(
                  Ln,
                  null,
                  r.createElement(
                    'li',
                    null,
                    r.createElement(
                      kn,
                      { to: '/login' },
                      '/profile' === n.pathname ? 'Log Out' : 'Login',
                    ),
                  ),
                ),
              ),
            ),
          );
        },
        Bn = function() {
          return r.createElement(
            y,
            null,
            r.createElement(x.a, { content: 'Welcome back!', isPrimaryColor: !0 }),
            r.createElement(O, null, r.createElement(I, null)),
          );
        },
        Pn = function() {
          return o.a.createElement(
            c.a,
            null,
            o.a.createElement(
              'div',
              null,
              o.a.createElement(zn, null),
              o.a.createElement(
                u.c,
                null,
                o.a.createElement(u.a, { path: '/profile' }, o.a.createElement(Bn, null)),
                o.a.createElement(u.a, { path: '/login' }, o.a.createElement(fn, null)),
                o.a.createElement(u.a, { path: '/news' }, o.a.createElement(dn, null)),
                o.a.createElement(u.a, { path: '/' }, o.a.createElement(R, null)),
              ),
            ),
          );
        };
      var Hn = function() {
        return o.a.createElement(Pn, null);
      };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
      );
      a.a.render(o.a.createElement(Hn, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function(n) {
              n.unregister();
            })
            .catch(function(n) {
              console.error(n.message);
            });
    },
  },
  [[230, 1, 2]],
]);
//# sourceMappingURL=main.747cc1b7.chunk.js.map
