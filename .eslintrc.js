module.exports = {
  root: true,
  extends: [
    "universe/native",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: [
    // "react",
    "@typescript-eslint",
    "promise",
    "unicorn",
    "simple-import-sort",
  ],
  env: {
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: ["tsconfig.json", "tsconfig.eslint.json"],
    tsconfigRootDir: __dirname,
  },
  rules: {
    quotes: ["error", "double"],
    camelcase: "warn",
    "capitalized-comments": "off",
    "default-param-last": ["error"],
    eqeqeq: "error",
    "import/order": "off",
    // "import/order": [
    //   "error",
    //   {
    // groups: [
    //   "builtin",
    //   "external",
    //   "internal",
    //   "parent",
    //   "sibling",
    //   "object",
    //   "type",
    //   "index",
    //   "unknown",
    // ],
    // "newlines-between": "always",
    // pathGroups: [
    //   {
    //     pattern: "expo**",
    //     group: "builtin",
    //     position: "before",
    //   },
    //   {
    //     pattern: "react**",
    //     group: "builtin",
    //     position: "before",
    //   },
    //   {
    //     pattern: "@/asset/s**",
    //     group: "internal",
    //     position: "after",
    //   },
    //   {
    //     pattern: "@/components/**",
    //     group: "internal",
    //     position: "after",
    //   },
    //   {
    //     pattern: "@/constants/**",
    //     group: "internal",
    //     position: "after",
    //   },
    // ],
    // distinctGroup: true,
    // pathGroupsExcludedImportTypes: ["react"],
    // alphabetize: {
    //   order:
    //     "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
    //   orderImportKind: "asc",
    //   caseInsensitive: true /* ignore case. Options: [true, false] */,
    // },
    // warnOnUnassignedImports: true,
    //   },
    // ],
    // M
    "max-params": ["warn", 3],
    // N
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-empty-function": "warn",
    "no-param-reassign": "error",
    // P
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "*", next: "block-like" },

      { blankLine: "always", prev: ["import"], next: "*" },
      {
        blankLine: "any",
        prev: ["import"],
        next: ["import"],
      },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "prefer-const": "error",
    "prefer-object-spread": "warn",
    // R
    "require-await": "error",
    // S
    "sort-vars": "error",
    "sort-imports": ["off"],

    // React
    "react/jsx-newline": "warn",
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/jsx-sort-props": ["warn", { ignoreCase: true }],

    // Ensures props and state inside functions are always up-to-date
    "react-hooks/exhaustive-deps": "warn",

    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "no-useless-catch": "off",
    // "import/no-default-export": "error",

    // Allow most functions to rely on type inference
    // If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed
    "@typescript-eslint/explicit-function-return-type": "off",
    // Airbnb prefers forEach
    "unicorn/no-array-for-each": "off",
    "unicorn/no-array-reduce": "off",
    // Conflicts with Webpack 5 polyfills
    "unicorn/prefer-node-protocol": "off",
    "no-void": [
      "error",
      {
        allowAsStatement: true,
      },
    ],
    "no-restricted-syntax": "off",
    "no-restricted-exports": "off",
    "jsx-a11y/no-autofocus": "off",
    "react/prop-types": "off",
    "react/no-unused-prop-types": "off",
    "react/no-array-index-key": "off",
    "react/require-default-props": [
      "off",
      {
        ignore: ["StatusBar"],
      },
    ],
    "react/react-in-jsx-scope": "off",

    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        ignore: [String.raw`^.*\.d\.ts$`],
      },
    ],
    "unicorn/prefer-top-level-await": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          props: {
            properties: false,
          },
        },
      },
    ],
    "unicorn/prefer-array-find": "off",
    "unicorn/no-abusive-eslint-disable": "off",
    "unicorn/no-null": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/consistent-function-scoping": "off",
    "promise/always-return": "off",
    "import/no-relative-parent-imports": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        // Allow CJS until ESM support improves
        "@typescript-eslint/no-var-requires": "off",
        "unicorn/prefer-module": "off",
      },
    },
    // https://dev.to/julioxavierr/sorting-your-imports-with-eslint-3ped
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Side effect imports
              [String.raw`^\u0000`],
              // Absolute packages with `react` related come first
              ["^react", String.raw`^@?\w`],
              // Internal packages
              [
                "^types(/.*|$)",
                "^utils(/.*|$)",
                "^api(/.*|$)",
                "^hooks(/.*|$)",
                "^components(/.*|$)",
              ],
              // Parent imports with `..` last
              [String.raw`^\.\.(?!/?$)`, String.raw`^\.\./?$`],
              // Other relative imports with same-folder imports and `.` last
              [
                String.raw`^\./(?=.*/)(?!/?$)`,
                String.raw`^\.(?!/?$)`,
                String.raw`^\./?$`,
              ],
              // Style imports
              // TODO import global scss should be not here but on the top
              ["^styles(/.*|$)", String.raw`^.+\.?(scss)$`],
              // Assets
              ["^(assets)(/.*|$)"],
              // Translations
              ["^i18n(/.*|$)"],
              // Local assets
              ["^/./(assets)(/.*|$)"],
            ],
          },
        ],
      },
    },
    // {
    //   files: [
    //     './src/pages/**/*.ts',
    //     './src/pages/**/*.tsx',
    //   ],
    //   rules: {
    //     'import/no-default-export': 'off',
    //   },
    // },
  ],
};
