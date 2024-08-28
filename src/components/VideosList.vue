<script>
import { store } from '../store';
import axios from 'axios';
import vFlagIcons from 'v-flag-icons'
import 'v-flag-icons/css/rectangular.min.css'
export default {
    data() {
        return{
            store,
        }
    },
    components: {
        vFlagIcons
    },
    created() {
        this.getVideos();
    },
    methods: {
        getVideos() {
            axios.get(store.apiUrl+store.queryParam).then((response) => {
                store.videoList = response.data.results;
            });
        },
        getLangIcons(langText) {
              // Validate the input to be exactly two characters long and all alphabetic
            if (!langText || langText.length !== 2 || !/^[a-zA-Z]+$/.test(langText)) {
                return '🏳️'; // White Flag Emoji for unknown or invalid country codes
            }

            // Convert the country code to uppercase to match the regional indicator symbols
            const code = langText.toUpperCase();
            
            // Calculate the offset for the regional indicator symbols
            const offset = 127397;
            
            // Convert each letter in the country code to its corresponding regional indicator symbol
            const flag = Array.from(code).map(letter => String.fromCodePoint(letter.charCodeAt(0) + offset)).join('');
            
            return flag;
        }
    }
}
</script>
<template>
    <div>
        <div class="container">
            <div class="row-list">
                <div class="col-20" v-for="video in store.videoList" :key="video.id">
                    <div class="video">
                        <img :src="video.poster_path" alt="">
                        <h6>
                            {{ video.title }}
                            {{ video.original_title }}
                            <!-- {{ getLangIcons(video.original_language) }} -->
                            <vf-icon country="video.original_language"/>
                            {{ video.vote_average }}
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