<template>
  <div class="container">

    <sidebar-menu-akahon @search-input-emit="search"/>
    <div>
    </div>
      <router-view></router-view>
      
      <footer class="footer is-primary">
        <div class="container">
          <div class="columns">
            <div class="column">
              <p> &copy Ali KHLIFI 2023 </p>
            </div>
          </div>
        </div>
      </footer>
  </div>

</template>

<script>
import SidebarMenuAkahon from "@/components/page/Sidebar-menu-akahon.vue"

export default {
  name: 'App', 
  components: { SidebarMenuAkahon,
  },
  data () {
    return {
    }
  },
  methods: {
    search() {
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/img/background-2.jpg");
  background-size: cover;
}

footer{
  background-color: #7f7f7f;
  
}

.column p{
  text-align: center;
  color:black;
  font-family:"Comic Sans MS", "Trebuchet MS", Georgia, serif;
  font-size:small
}


</style>
