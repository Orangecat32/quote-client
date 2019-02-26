module.exports = {
  plugins: ['react', 'relay', 'babel', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true
  },
  extends: [
    'google',
    'fbjs',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, alwaysParens: 'always' }
    ],
    'no-unused-vars': 1,
    'no-console': 'off',
    semi: 2,
    'max-len': 0
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.53'
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' }
    ]
  }
};

// something
