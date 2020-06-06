/* eslint-disable */
import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
    themes: {
        theme: {
            light: {
                primary: colors.purple,
                secondary: colors.blueGrey.lighten2,
                accent: colors.shades.black,
                error: colors.red.accent3,
            },
            dark: {
                primary: colors.blueGrey.darken2,
                secondary: colors.blueGrey.lighten2,
                accent: colors.shades.black,
            },
        },
    }
});