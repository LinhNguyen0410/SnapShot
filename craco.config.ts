const path = require("path");

const setting = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@apis": path.resolve(__dirname, "src/apis"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/src/components$1",
      },
    },
  },
};
export default setting