module.exports = {
    arrowParens: 'always',
    bracketSameLine: true,
    bracketSpacing: true,
    singleQuote: true,
    printWidth: 100,
    trailingComma: 'all',
    endOfLine: 'auto',
    overrides: [
      {
        files: ["./src/configuration/translations/locales/**/*.json"],
        options: {
          tabWidth: 4
        }
      }
    ]
  };
  