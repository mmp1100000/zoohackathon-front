console.log(process.env);
export default {
/*    i18n: {
        locale: process.env.VUE_APP_I18N_LOCALE || "en",
        fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
    },*/
    api: {
        baseUrl: process.env.VUE_APP_BACKEND_BASE_URL,
        data: {
            upload: '/data/upload'
        }
    }
}
