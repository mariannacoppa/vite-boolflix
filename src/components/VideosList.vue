<script>
import { store } from '../store';
import axios from 'axios';
export default {
    data() {
        return{
            store,
        }
    },
    created() {
        this.getVideos();
    },
    methods: {
        getVideos() {
            axios.get(store.apiUrl).then((response) => {
                store.videoList = response.data.data;
            });
        }
    }
}
</script>
<template>
    <div>
        video item
    </div>
</template>
<style lang="scss">
    
</style>