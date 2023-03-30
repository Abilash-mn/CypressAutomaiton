const { defineConfig } = require("cypress");
const cypress = require("cypress");

//cypress.config.js

module.exports = defineConfig({
  projectId: "a36ywg",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    specPattern: 'cypress/Integration/exosphere/*.js',
  },
  env: {
    url: "https://exosphere.sandbox.boomi.com/iframe.html?",
    url1: "https://exosphere.boomi.com",
  },
});
