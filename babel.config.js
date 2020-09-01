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
                    translations: LOCALE === 'es' ? 'i18n/es.po' : 'default',
                },
            },
        ],
    ],
}
