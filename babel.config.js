// babel.config.js

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    // 执行顺序由右往左,所以先处理ts,再处理jsx,最后再试一下babel转换为低版本语法
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    "plugins": [
        isDev && require.resolve('react-refresh/babel'),
        "@babel/plugin-transform-runtime"
    ].filter(Boolean)
}
  