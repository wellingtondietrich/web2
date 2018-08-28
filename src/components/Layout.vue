<template>
    <v-app>
        
        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-toolbar>

        <v-content>
            <v-container fluid>
                <v-layout align-center justify-center>
                    <router-view></router-view>
                </v-layout>
            </v-container>
        </v-content>

    </v-app>
</template>
