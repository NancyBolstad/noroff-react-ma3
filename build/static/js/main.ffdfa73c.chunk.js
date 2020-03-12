(this['webpackJsonpnoroff-react-ma3'] = this['webpackJsonpnoroff-react-ma3'] || []).push([
  [0],
  {
    38: function(n, e, t) {
      n.exports = t(51);
    },
    43: function(n, e, t) {},
    44: function(n, e, t) {},
    51: function(n, e, t) {
      'use strict';
      t.r(e);
      var r = t(0),
        o = t.n(r),
        i = t(28),
        a = t.n(i),
        c = (t(43), t(44), t(16)),
        l = t(13),
        u = t(3),
        m = t(2),
        s = "'Roboto', sans-serif",
        f = "'Anton', sans-serif",
        d = 400,
        h = 700,
        p = {
          spacing: { xs: 0.5, s: 1, m: 1.5, l: 3, xl: 5 },
          fonts: {
            h1: { family: f, weight: h, size: 2.875, lineHeight: 1.25 },
            h2: { family: f, weight: h, size: 2.5625, lineHeight: 1.15 },
            h3: { family: s, weight: h, size: 2.25, lineHeight: 1.15 },
            h4: { family: s, weight: h, size: 2.125, lineHeight: 1.15 },
            h5: { family: s, weight: d, size: 1.375, lineHeight: 1.15 },
            h6: { family: s, weight: h, size: 1, lineHeight: 1.15 },
            b1: { family: s, weight: d, size: 1, lineHeight: 1.5 },
            b2: { family: s, weight: h, size: 1.125, lineHeight: 1.15 },
            b3: { family: s, weight: h, size: 1.125, lineHeight: 1.15 },
          },
          mediaQueries: { small: 600, medium: 768, large: 1280 },
          colors: {
            primary: '#ffffff',
            primaryVariant: '#F8F8F9',
            secondary: '#ef3b7d',
            secondaryVariant: '#ec5990',
            background: '#191d3a',
            surface: '#516391',
            error: '#D6170C',
            onPrimary: '#000000',
            onSecondary: '#000000',
            onBackground: '#ffffff',
            onSurface: '#ffffff',
            onError: '#ffffff',
          },
        };
      function g() {
        var n = Object(u.a)(['']);
        return (
          (g = function() {
            return n;
          }),
          n
        );
      }
      function w() {
        var n = Object(u.a)([
          "\n  @import url('https://fonts.googleapis.com/css?family=Anton|Roboto&display=swap');  \n\n  body {\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: antialiased;\n    color: ",
          ';\n    background-color:',
          ';\n  }\n  * {\n    box-sizing: border-box;\n  }\n',
        ]);
        return (
          (w = function() {
            return n;
          }),
          n
        );
      }
      var b = Object(m.b)(
          w(),
          function(n) {
            return n.theme.colors.onBackground;
          },
          function(n) {
            return n.theme.colors.background;
          },
        ),
        x = m.d.div(g()),
        v = function(n) {
          var e = n.children;
          return r.createElement(
            m.a,
            { theme: p },
            r.createElement('div', null, r.createElement(b, null), r.createElement(x, null, e)),
          );
        };
      function y() {
        var n = Object(u.a)(['\n        line-height: ', ';\n      ']);
        return (
          (y = function() {
            return n;
          }),
          n
        );
      }
      function E() {
        var n = Object(u.a)([
          '\n    font-family: ',
          ';\n    font-weight: ',
          ';\n    font-size: ',
          'rem;\n    ',
          ';\n  ',
        ]);
        return (
          (E = function() {
            return n;
          }),
          n
        );
      }
      var j = function(n) {
        return Object(m.c)(
          E(),
          n.family,
          n.weight,
          n.size,
          n.lineHeight && Object(m.c)(y(), n.lineHeight),
        );
      };
      function O() {
        var n = Object(u.a)([
          '\n  margin: ',
          'rem auto;\n  color: ',
          ';\n  ',
          ';\n  text-align: center;\n\n  @media all and (min-width: 600px) {\n    margin: ',
          'rem 0;\n  }\n',
        ]);
        return (
          (O = function() {
            return n;
          }),
          n
        );
      }
      var C = m.d.h1(
          O(),
          function(n) {
            return n.theme.spacing.m;
          },
          function(n) {
            return n.isPrimaryColor ? n.theme.colors.primary : n.theme.colors.secondary;
          },
          function(n) {
            return j(n.theme.fonts.h1);
          },
          function(n) {
            return n.theme.spacing.l;
          },
        ),
        k = function(n) {
          var e = n.content,
            t = n.isPrimaryColor;
          return r.createElement(C, { isPrimaryColor: t }, e);
        };
      function L() {
        var n = Object(u.a)([
          '\n  display: flex;\n  flex-direction: column;\n  padding: ',
          'rem;\n  max-width: 1440px;\n  margin: 0 auto;\n',
        ]);
        return (
          (L = function() {
            return n;
          }),
          n
        );
      }
      var z = m.d.div(L(), function(n) {
          return n.theme.spacing.m;
        }),
        H = function(n) {
          var e = n.children;
          return e ? r.createElement(z, null, e) : null;
        },
        P =
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
      function V() {
        var n = Object(u.a)([
          '\n  display: flex;\n  align-items: center;\n  max-width: 615px;\n  svg {\n    width: 1.5rem;\n    height: 1.5rem;\n    fill: ',
          ';\n    margin-left: ',
          'rem;\n    margin-top: 0.5rem;\n  }\n',
        ]);
        return (
          (V = function() {
            return n;
          }),
          n
        );
      }
      function B() {
        var n = Object(u.a)([
          '\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  margin-bottom: ',
          'rem;\n  width: 100%;\n  p {\n    max-width: 615px;\n  }\n',
        ]);
        return (
          (B = function() {
            return n;
          }),
          n
        );
      }
      function S() {
        var n = Object(u.a)([
          '\n  width: 100%;\n  max-width: 680px;\n  margin: 0 auto;\n  padding: ',
          'rem ',
          'rem;\n  display: flex;\n  flex-direction: column;\n',
        ]);
        return (
          (S = function() {
            return n;
          }),
          n
        );
      }
      function M() {
        var n = Object(u.a)([
          '\n  width: 100%;\n  background: ',
          ';\n  color: ',
          ';\n  overflow: auto;\n',
        ]);
        return (
          (M = function() {
            return n;
          }),
          n
        );
      }
      var N = m.d.div(
          M(),
          function(n) {
            return n.theme.colors.surface;
          },
          function(n) {
            return n.theme.colors.onSurface;
          },
        ),
        Z = m.d.ul(
          S(),
          function(n) {
            return n.theme.spacing.m;
          },
          function(n) {
            return n.theme.spacing.xl;
          },
        ),
        q = m.d.li(B(), function(n) {
          return n.theme.spacing.s;
        }),
        F = m.d.div(
          V(),
          function(n) {
            return n.theme.colors.secondary;
          },
          function(n) {
            return n.theme.spacing.xs;
          },
        ),
        Q = {
          title: 'Lorem ipsum dolor',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        A = {
          title: 'Pellentesque ac sapien',
          content:
            'Pellentesque ac sapien ac felis accumsan rutrum. Pellentesque ac sapien ac felis accumsan rutrum. Pellentesque ac sapien ac felis accumsan rutrum.',
        },
        W = { sectionTitle: 'Molestie Pellentesque', list: [Q, A, A, Q] },
        J = function() {
          var n = W.sectionTitle,
            e = W.list;
          return r.createElement(
            N,
            null,
            r.createElement(k, { content: n }),
            r.createElement(
              Z,
              null,
              (e || []).map(function(n, e) {
                return r.createElement(
                  q,
                  { key: e },
                  !!n.title && r.createElement(F, null, P, r.createElement('h2', null, n.title)),
                  !!n.content && r.createElement('p', null, n.content),
                );
              }),
            ),
          );
        };
      function R() {
        var n = Object(u.a)([
          '\n  ul {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    list-style-type: none;\n    padding-top: 1.5rem;\n  }\n  a {\n    color: ',
          ';\n    font-size: 2rem;\n    font-weight: bold;\n    margin-right: 1.8rem;\n    text-decoration: none;\n    border: 1px solid ',
          ';\n    padding: 0.5rem 2.2rem;\n    border-radius: 20px;\n  }\n  a:hover {\n    opacity: 0.8;\n  }\n',
        ]);
        return (
          (R = function() {
            return n;
          }),
          n
        );
      }
      function T() {
        var n = Object(u.a)(['\n  width: 100%;\n  height: 78px;\n']);
        return (
          (T = function() {
            return n;
          }),
          n
        );
      }
      var Y = m.d.header(T()),
        D = m.d.nav(
          R(),
          function(n) {
            return n.theme.colors.secondaryVariant;
          },
          function(n) {
            return n.theme.colors.secondaryVariant;
          },
        ),
        I = function() {
          return r.createElement(
            Y,
            null,
            r.createElement(
              D,
              null,
              r.createElement(
                'ul',
                null,
                r.createElement('li', null, r.createElement(c.b, { to: '/' }, 'Home')),
                r.createElement('li', null, r.createElement(c.b, { to: '/login' }, 'Login')),
                r.createElement('li', null, r.createElement(c.b, { to: '/news' }, 'News')),
              ),
            ),
          );
        },
        U = function() {
          return r.createElement(
            v,
            null,
            r.createElement(I, null),
            r.createElement(k, { content: 'Home Page', isPrimaryColor: !0 }),
            r.createElement(
              H,
              null,
              r.createElement(J, null),
              r.createElement(J, null),
              r.createElement(J, null),
            ),
          );
        },
        $ = t(10),
        G = t(36);
      function K() {
        var n = Object(u.a)(['\n  text-transform: capitalize;\n  ', ';\n']);
        return (
          (K = function() {
            return n;
          }),
          n
        );
      }
      function X() {
        var n = Object(u.a)([
          '\n  height: 40px;\n  width: 60%;\n  background-color: ',
          ';\n  border: 1px solid ',
          ';\n  border-bottom: 2px solid ',
          ';\n  padding: 0 32px;\n  outline: none;\n  transition: border-color 0.1s ease-in-out;\n  ',
          ';\n\n  @media all and (min-width: ',
          'px) {\n    min-width: 150px;\n  }\n\n  &::placeholder {\n    color: ',
          ';\n  }\n  &:active,\n  &:focus {\n    border-bottom: 2px solid ',
          ';\n  }\n  &:disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n  &:placeholder-shown {\n    border: 1px solid ',
          ';\n  }\n',
        ]);
        return (
          (X = function() {
            return n;
          }),
          n
        );
      }
      function _() {
        var n = Object(u.a)([
          '\n  width: 40%;\n  border: 1px solid ',
          ';\n  color: ',
          ';\n  padding: 0 32px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  ',
          ';\n',
        ]);
        return (
          (_ = function() {
            return n;
          }),
          n
        );
      }
      function nn() {
        var n = Object(u.a)([
          '\n  ',
          ';\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: ',
          'rem;\n',
        ]);
        return (
          (nn = function() {
            return n;
          }),
          n
        );
      }
      function en() {
        var n = Object(u.a)([
          '\n  max-width: 380px;\n  margin: 0 auto;\n  padding: ',
          'rem;\n  display: flex;\n  flex-direction: column;\n',
        ]);
        return (
          (en = function() {
            return n;
          }),
          n
        );
      }
      var tn = m.d.form(en(), function(n) {
          return n.theme.spacing.s;
        }),
        rn = m.d.label(
          nn(),
          function(n) {
            return j(n.theme.fonts.b2);
          },
          function(n) {
            return n.theme.spacing.s;
          },
        ),
        on = m.d.span(
          _(),
          function(n) {
            return n.theme.colors.secondary;
          },
          function(n) {
            return n.theme.colors.secondary;
          },
          function(n) {
            return j(n.theme.fonts.b2);
          },
        ),
        an = m.d.input(
          X(),
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
            return j(n.theme.fonts.b1);
          },
          function(n) {
            return n.theme.mediaQueries.small;
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
        ),
        cn =
          (m.d.span(K(), function(n) {
            return j(n.theme.fonts.b2);
          }),
          t(21)),
        ln = cn
          .a()
          .shape({
            userName: cn.b().required(),
            password: cn.b().min(4, 'At least four characters'),
          });
      function un() {
        var n = Object(u.a)([
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
          (un = function() {
            return n;
          }),
          n
        );
      }
      function mn() {
        var n = Object(u.a)([
          '\n      background-color: ',
          ';\n      color: ',
          ';\n      &:hover,\n      &:active,\n      &:focus {\n        background-color: ',
          ';\n      }\n      svg {\n        fill: ',
          ';\n      }\n    ',
        ]);
        return (
          (mn = function() {
            return n;
          }),
          n
        );
      }
      function sn() {
        var n = Object(u.a)([
          '\n      height: 45px;\n      min-width: 250px;\n      padding-left: 75px;\n      padding-right: 75px;\n      border-radius: 35px;\n      ',
          ';\n\n      @media all and (min-width: ',
          'px) {\n        height: 50px;\n      }\n    ',
        ]);
        return (
          (sn = function() {
            return n;
          }),
          n
        );
      }
      function fn() {
        var n = Object(u.a)([
          '\n      height: 42px;\n      width: 100%;\n      padding: 0 20px;\n      ',
          ';\n\n      @media all and (min-width: ',
          'px) {\n        width: 160px;\n      }\n    ',
        ]);
        return (
          (fn = function() {
            return n;
          }),
          n
        );
      }
      function dn() {
        var n = Object(u.a)([
          '\n      height: 40px;\n      min-width: 75px;\n      padding: 0 32px;\n      ',
          ';\n\n      @media all and (min-width: ',
          'px) {\n        padding: 0 20px;\n      }\n    ',
        ]);
        return (
          (dn = function() {
            return n;
          }),
          n
        );
      }
      function hn() {
        var n = Object(u.a)([
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 30px;\n  cursor: pointer;\n  text-decoration: none;\n  width: fit-content;\n  border: 2px solid transparent;\n  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;\n  &:disabled {\n    pointer-events: none;\n    opacity: 0.6;\n  }\n  svg {\n    width: 24px;\n    height: 24px;\n    margin-left: ',
          'rem;\n  }\n  ',
          ';\n  ',
          ';\n  ',
          ';\n  ',
          ';\n  ',
          ';\n',
        ]);
        return (
          (hn = function() {
            return n;
          }),
          n
        );
      }
      var pn = m.d.button(
          hn(),
          function(n) {
            return n.theme.spacing.xs;
          },
          function(n) {
            return (
              'small' === n.size &&
              Object(m.c)(dn(), j(n.theme.fonts.b2), function(n) {
                return n.theme.mediaQueries.small;
              })
            );
          },
          function(n) {
            return (
              'medium' === n.size &&
              Object(m.c)(fn(), j(n.theme.fonts.b2), function(n) {
                return n.theme.mediaQueries.small;
              })
            );
          },
          function(n) {
            return (
              'large' === n.size &&
              Object(m.c)(sn(), j(n.theme.fonts.b3), function(n) {
                return n.theme.mediaQueries.small;
              })
            );
          },
          function(n) {
            return (
              'primary' === n.variant &&
              Object(m.c)(
                mn(),
                function(n) {
                  return n.theme.colors.secondary;
                },
                function(n) {
                  return n.theme.colors.onSecondary;
                },
                function(n) {
                  return n.theme.colors.secondaryVariant;
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
                un(),
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
        ),
        gn = (pn.withComponent('a'), pn),
        wn = function() {
          var n = r.useState(!1),
            e = Object($.a)(n, 2),
            t = e[0],
            o = e[1],
            i = Object(G.a)({ validationSchema: ln }),
            a = i.handleSubmit,
            c = i.register,
            l = i.errors;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(k, { content: t ? 'Welcome back' : 'Login Form', isPrimaryColor: !0 }),
            !t &&
              r.createElement(
                tn,
                {
                  onSubmit: a(function(n) {
                    n.userName && n.password && o(!0);
                  }),
                },
                r.createElement(
                  rn,
                  null,
                  r.createElement(on, null, 'Username'),
                  r.createElement(an, {
                    type: 'text',
                    name: 'userName',
                    placeholder: 'Your username',
                    ref: c,
                  }),
                ),
                l.userName && r.createElement('span', null, l.userName.message),
                r.createElement(
                  rn,
                  null,
                  r.createElement(on, null, 'Password'),
                  r.createElement(an, {
                    type: 'text',
                    name: 'password',
                    placeholder: 'Your password',
                    ref: c,
                  }),
                ),
                l.password &&
                  r.createElement('span', null, '\ud83d\udd25'.concat(l.password.message)),
                r.createElement(
                  gn,
                  { size: 'medium', variant: 'primary', type: 'submit' },
                  'Login',
                ),
              ),
          );
        },
        bn = function() {
          return r.createElement(
            v,
            null,
            r.createElement(I, null),
            r.createElement(H, null, r.createElement(wn, null)),
          );
        },
        xn = function() {
          return r.createElement(
            v,
            null,
            r.createElement(I, null),
            r.createElement(k, { content: 'News List', isPrimaryColor: !0 }),
            r.createElement(H, null, r.createElement(J, null)),
          );
        },
        vn = function() {
          return o.a.createElement(
            c.a,
            null,
            o.a.createElement(
              'div',
              null,
              o.a.createElement(
                l.c,
                null,
                o.a.createElement(l.a, { path: '/login' }, o.a.createElement(bn, null)),
                o.a.createElement(l.a, { path: '/news' }, o.a.createElement(xn, null)),
                o.a.createElement(l.a, { path: '/' }, o.a.createElement(U, null)),
              ),
            ),
          );
        };
      var yn = function() {
        return o.a.createElement(vn, null);
      };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
      );
      a.a.render(o.a.createElement(yn, null), document.getElementById('root')),
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
  [[38, 1, 2]],
]);
//# sourceMappingURL=main.ffdfa73c.chunk.js.map
