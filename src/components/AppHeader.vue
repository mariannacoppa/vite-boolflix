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
        this.searchVideos();
    },
    methods: {
        searchVideos() {
            if (this.search === '' || this.search == undefined) {
                axios.get(store.apiUrl+store.queryParam).then((response) => {
                    store.videoList = response.data.results;
                });
            }
            else {
                axios.get(store.apiUrl+'&query='+this.search).then((response) => {
                    store.videoList = response.data.results;
                });
            }
        }
    }
}
</script>
<template>
    <header class="d-flex justify-content-between">
        <h1 class="ms-5 text-white py-3">Boolflix</h1>
        <div class="searchbar">
            <input type="search" placeholder="search video" v-model="search">
            <button class="btn btn-primary" @click="searchVideos">find</button>
        </div>
    </header>
</template>
<style lang="scss">
header {
    background-color: black;
}
</style>