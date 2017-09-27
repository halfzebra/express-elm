const elmRenderer = require('../lib/elm-renderer');
const path = require('path');
const expect = require('unexpected');

describe('Elm Renderer', () => {
  it('Wil compile the template', done => {
    elmRenderer(
      path.resolve(__dirname, './fixtures/Name.elm'),
      { model: 'Noah' },
      (err, html) =>  {
        expect(html, 'to be', 'Noah');
        done()
      }
    )
  });
});
