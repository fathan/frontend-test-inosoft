module.exports = {
  "transform": {
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/resources/js/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
}