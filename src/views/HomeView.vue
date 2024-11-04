<template>
<div class="home">
  <div class="feature-card">
    <router-link to="/movie/tt0409591">
      <img src="https://prod-printler-front-as.azurewebsites.net/media/photo/183862.jpg?mode=crop&width=725&height=1024&rnd=0.0.1" alt="naruto poster" class="featured-img" />
      <div class="deatil">
<h3>naruto</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum commodi dolor quasi libero minus, aliquid temporibus ratione nam provident quam dolores unde, odit distinctio sequi at. Necessitatibus consequatur dicta praesentium?</p>
      </div>

    </router-link>
  </div>

  Home
</div>

</template>

<script>
export default{

}
</script>

<style lang="scss">
.home {
  .feature-card {
    position: relative;

    .featured-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;

      position: relative;
      z-index: 0;
    }
    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0, 0.6);
      padding: 16px;
      z-index: 1;
    
      h3 {
        color:#fff;
        margin-bottom: 16px;
      }

      p{
        color: #fff;
      }
    
    }
  }
}

</style>