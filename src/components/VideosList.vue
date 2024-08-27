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
        <div class="container">
            <div class="row-list">
                <div class="col-20" v-for="video in store.videoList" :key="video.id">
                    <div class="video">
                        <img :src="video.poster_path" alt="">
                        <h6>
                            {{ video.title }}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .row-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .col-20 {
        width: calc(100% / 5);
    }
    .video {
        background-color: burlywood;
        margin: 10px;
        img {
            max-width: 100%;
        }
    }
</style>