module.exports = {
  default: {
    require: [
      "steps/*.js",
      "hooks/*.js"
    ],
    parallel: 2,
    format: [
      "progress",
      "json:reports/cucumber-report.json"
    ],
    timeout: 30000
  }
};