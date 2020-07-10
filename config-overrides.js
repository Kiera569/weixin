const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  addLessLoader
} = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: true
  }),
  addDecoratorsLegacy(),
  addLessLoader()
);
