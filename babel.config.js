module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      // NativeWind-এর জন্য jsxImportSource সেট করুন
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      // NativeWind Babel plugin যোগ করুন
      "nativewind/babel",
    ],
  };
};