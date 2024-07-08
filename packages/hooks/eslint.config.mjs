import config, { plugins } from "eslint-config-standard";

export default [
  ...[
    {
      extends: ["plugin:react-hooks/recommended", "prettier"],
      plugins: ["react-hooks"],
      rules: {
        "no-unused-vars": "error",
        "no-undef": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
  ].concat(config),
];
