<template>
    <div class="container">
       <!--<SearchBar v-on:termChange="onTermChange"></SearchBar>-->
        <SearchBar @termChange="onTermChange"></SearchBar>
        <div class="row">
            <VideoDetail :video="selectedVideo" />
            <!--<VideoList v-bind:videos="videos"></VideoList>-->
            <!-- identical to the following -->
            <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import SearchBar from './components/SearchBar';
    import VideoList from './components/VideoList';
    import VideoDetail from './components/VideoDetail';

    const API_KEY = 'AIzaSyCO6XAVTU_OGufJWmh6fBLNZ_hONPqGfDo';
    // https://developers.google.com/youtube/v3/docs/

    export default {
        // el: vue automatically looks at template element as a root element, so we don't need to specify el property.
        name: 'App',
        components: {
          SearchBar,
          VideoList,
          VideoDetail
        },
        data() {
            return {
              videos: [],
              selectedVideo: null
            };
        },
        methods: {
          onTermChange(searchTerm) {
            // console.log(searchTerm);
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                  key: API_KEY,
                  type: 'video',
                  part: 'snippet',
                  q: searchTerm
                }
            }).then(response => {
                this.videos = response.data.items;
            })
          },
          onVideoSelect(video) {
            // console.log(video)
            this.selectedVideo = video;
          }
        }
    };
</script>