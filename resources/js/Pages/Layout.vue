<script setup>
import Navbar from './Components/Navbar.vue';
import Footer from './Components/Footer.vue';
import {Link, Head} from "@inertiajs/vue3";
</script>
<template>
    <Navbar />
    <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">
    </Head>

    <!-- Content goes here -->
    <slot />
<Footer/>

    <!-- <Footer /> -->
</template>
