import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const messages = {

    'en': {
        Home: 'Home'
    },
    'es': {
        Home: 'casa'
    }
};

export const il8n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
});