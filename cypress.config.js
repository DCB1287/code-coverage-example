const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  env: {
    codeCoverage: {
      url: 'http://localhost:3001/__coverage__'
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      // include any other plugin code...
      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
      // It's IMPORTANT to return the config object
      // with any changed environment variables

      return config
    }
  }
})
