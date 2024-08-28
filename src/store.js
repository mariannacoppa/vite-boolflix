import { reactive } from "vue";
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=208e1365b6c798ea50edf91deb879c48',
    queryParam: '&query=a',
    videoList: []
});