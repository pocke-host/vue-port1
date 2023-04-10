<script>
import {useToast} from 'vue-toast-notification';

export default {
  mounted() {
    const toast = useToast();
    toast.success('Hey there!', 
    {
      position: 'top-right',
      duration: '3000',
      pauseOnHover: true,
    });
  },
};
</script>
<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/social" class="nav-link">Socials</router-link>
          </li>
        </ul>
      </div>
    </nav> 
    <div>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/06/chris-ried-512801-unsplash.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="https://www.theforage.com/blog/wp-content/uploads/2022/09/tech-companies.jpg" class="d-block w-100">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
</template>