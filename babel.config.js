const {
    env: { LOCALE },
} = process

module.exports = {
    presets: [['babel-preset-gatsby']],
    plugins: [
        [
            'babel-plugin-ttag',
            {
                resolve: {
                    translations: LOCALE  ? `i18n/${LOCALE}.po`  : 'default',
                },
            },
        ],
    ],
}
