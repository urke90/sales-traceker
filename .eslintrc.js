module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        'react/function-component-definition': {
            namedComponents: 'function-declaration'
        },
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off'
    }
};
