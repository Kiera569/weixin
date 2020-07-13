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
  // addLessLoader({
  //   lessOptions: {
  //     javascriptEnabled: true,
  //     modifyVars: { "@primary-color": "#1DA57A" }
  //   }
  // })  版本6.0
  addLessLoader({
    javascriptEnabled: true
  })
);
