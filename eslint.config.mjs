import eslintPluginImport from 'eslint-plugin-import';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

const eslintConfig = defineConfig([
  ...nextVitals,
  eslintConfigPrettier,
  {
    rules: {
      camelcase: 'off',
      'no-console': 'warn',
      'no-nested-ternary': 0,
      'no-param-reassign': 0,
      'no-underscore-dangle': 0,
      'no-restricted-exports': 0,
      'no-promise-executor-return': 0,
      'import/prefer-default-export': 0,
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'prefer-destructuring': [1, { object: true, array: false }],
      'perfectionist/sort-imports': [
        'warn',
        {
          order: 'asc',
          type: 'line-length',
          fallbackSort: { type: 'unsorted' },
          environment: 'node',
        },
      ],
    },
  },
  {
    plugins: {
      import: eslintPluginImport,
      perfectionist: eslintPluginPerfectionist,
      'unused-imports': eslintPluginUnusedImports,
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
