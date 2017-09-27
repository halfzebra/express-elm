const elmStaticHtml = require('elm-static-html-lib').default;
const path = require('path');
const executablePaths = require('elm/platform').executablePaths;

const elmMakePath = executablePaths[ 'elm-make' ];
const installMethod = executablePaths[ 'elm-package' ];
const compiled = {};

module.exports = (filePath, options, callback) => {
  const { name, dir } = path.parse(filePath);
  const decoder = `${name}.decoder`;
  const alreadyRun = compiled[ name ];
  const elmStaticHtmlOptions = Object.assign({ installMethod, elmMakePath, decoder, alreadyRun }, options);

  elmStaticHtml(dir, `${name}.view`, elmStaticHtmlOptions)
    .then((generatedHtml) => {
      compiled[ name ] = true;
      callback(null, generatedHtml);
    })
    .catch(callback);
};
