module.exports = {
  extends: 'erb',
  plugins: ['@typescript-eslint', 'jsx-a11y'], // Certifique-se de incluir o plugin jsx-a11y
  rules: {
    // Regras personalizadas
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'htmlFor', // Use o atributo htmlFor para associação
        depth: 3, // Permite elementos de controle aninhados até 3 níveis
      },
    ],
    // Outras regras existentes
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-import-module-exports': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.ts'),
      },
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
