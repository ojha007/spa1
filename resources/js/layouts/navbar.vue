<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                fixed
                app
                dark
        >
            <v-list>
                <v-list>
                    <v-list-tile avatar @click="">
                        <v-list-tile-avatar>
                            <img src="https://randomuser.me/api/portraits/men/85.jpg">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>John deo</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ $t('Home') }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>contact_mail</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Contact</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="grey darken-3"
                   right fixed app>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-menu offset-y dark>
                    <template v-slot:activator="{ on }">
                        <v-btn flat dark style="min-width:65px" v-on="on">
                            <v-img src="images/images.png" stylw="width:26px;">
                            </v-img>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-tile @click="">
                            <v-list-tile-avatar tile
                                                size="30">
                                <v-img src="images/download.png"></v-img>
                            </v-list-tile-avatar>
                            <v-list-tile-title>Spanish</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
            <v-toolbar-side-icon @click.stop="drawer = !drawer" light color="white"></v-toolbar-side-icon>
        </v-toolbar>

    </v-app>


</template>
<script>
    export default {
        data: () => ({
            drawer: false
        }),

    }
</script>