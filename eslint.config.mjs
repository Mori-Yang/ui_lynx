import tsEslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
export default [
    {
        files: ["src/**/*.js", "src/**/*.ts", "src/**/*.tsx"]
    },
    ...tsEslint.configs.recommended,
    {
        rules: {
            'prefer-template': ['warn'],
            '@typescript-eslint/consistent-type-imports': ['error', {
                prefer: 'type-imports',
                fixStyle: 'separate-type-imports',
            }],
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    args: 'after-used',
                    varsIgnorePattern: '^_',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
    stylistic.configs.recommended,
    {
        rules: {
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/indent': ['error', 4],
        },
    },
];
