import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
//import the theme css form assets folder
import Layout from './Pages/Layout.vue';


createInertiaApp({
    resolve: name => {
        const pages =
            import.meta.glob(['./Pages/*.vue', './Pages/**/*.vue'], { eager: true })
        let page = pages[`./Pages/${name}.vue`]
        page.default.layout = name.startsWith('Auth/') ? undefined : Layout
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue)
            .mount(el)
    },
})
