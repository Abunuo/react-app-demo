/*
 * @Date: 2021-12-31 12:00:15
 * @Description: 覆盖部分 webpack 配置
 */
const { override, fixBabelImports, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addWebpackAlias({
    // eslint-disable-next-line no-useless-computed-key
    ['@']: path.resolve(__dirname, 'src')
  })
)