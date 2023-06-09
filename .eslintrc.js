module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'react-hooks'
    ],
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'rules': {
        'react/jsx-indent': [2, 4, { indentLogicalExpressions: true }],
        indent: [2,4],
        '@typescript-eslint/no-empty-interface': 'warn',
        'react/jsx-props-no-spreading': 'warn',
        'react/react-in-jsx-scope': 'off',
        'max-statements': [2, 20],
        'react/display-name': 'off',
        'object-curly-spacing': [2, 'always'],
        'no-undef': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
    }
};