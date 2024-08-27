<script>
import AppHeader from './components/AppHeader.vue';
import VideosList from './components/VideosList.vue';
import DetailVideo from './components/DetailVideo.vue';
import { store } from './store';
import axios from 'axios';
export default {
    components: {
        AppHeader,
        VideosList,
        DetailVideo
    }
}
</script>
<template>
    <header>
        <AppHeader />
    </header>
    <main>
        <VideosList />
        <DetailVideo />
    </main>
</template>
<style lang="scss">
  @import './styles/generals.scss';
</style>