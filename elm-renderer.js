const elmStaticHtml = require('elm-static-html-lib').default;
const path = require('path');
const executablePaths = require('elm/platform').executablePaths;

module.exports = (filePath, options, callback) => {
    const { name, dir } = path.parse(filePath);
    const { model } = options;
    const decoder = `${name}.decoder`;
    const installMethod = executablePaths[ 'elm-package install --y' ];
    const elmMakePath = executablePaths[ 'elm-make' ];
    const elmStaticHtmlOptions = { installMethod, elmMakePath, decoder, model };

    elmStaticHtml(dir, `${name}.view`, elmStaticHtmlOptions)
        .then((generatedHtml) => {
            return callback(null, generatedHtml)
        });
};
