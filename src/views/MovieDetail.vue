<template>
<div class="movie-detail">
    <!-- Detail {{$route.params.id }} -->
     <h2>{{movie.Title}}</h2>
     <p>{{movie.Year}}</p>
     <img :src="movie.Poster" alt="poster" class="featured-image">
     <p>{{ movie.Plot }}</p>
    </div>

</template>

<script>
import {ref, onBeforeMount} from 'vue';
import {useRoute} from 'vue-router';
import env from '@/env.js';

export default {
    setup (){

        const movie = ref({});
       const route = useRoute();

onBeforeMount(() => {
    //console.log("Before Mount");
    fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
    .then(response => response.json())
    .then(data =>{
//console.log(data);
movie.value=data;
    });
    
});

return {
    movie
}


    }
}
</script>

<style>
</style>
