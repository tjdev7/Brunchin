const { defineConfig } = require('cypress')

module.exports = defineConfig({
    projectId: '135bp8',
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },

    component: {
        devServer: {
            framework: 'create-react-app',
            bundler: 'webpack',
        },
    },
})
