  import { defineConfig } from "cypress";

import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  projectId: '7ins6z',
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    "chromeWebSecurity": false,
    env:{
      hideCredentials:false,
      requestMode:false,
      snapshotOnly:false,
      failOnStatusCode: false
    },
    specPattern: 'cypress/e2e/*.{js,jsx,ts,tsx,feature}',
    //{feature,js,jsx,ts,tsx}',
    
    
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    
  },
});