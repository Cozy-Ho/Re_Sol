<template>
  <div class = "all">
    <div class="header">
      <h2>{{ $route.params.storename }} Menu</h2>
    </div>

    <div class="main-content">
        <MenuList></MenuList>
    </div> 




  </div>
</template>

<script>
import MenuList from "../components/Menu/MenuList.vue";

export default {
  components: {
      MenuList
  },
  created(){
    this.$store.commit("setorder", this.$route.params.storename);
    this.$store.commit("setstore", this.$route.params.storename);
    this.$store.commit("setgoods", this.$route.params.storename);
    this.$store.commit("setcate", this.$route.params.storename);
    this.$store.commit("setdiscount", this.$route.params.storename);
  },
}

</script>

<style scoped>
    .header {
        position: relative;
        padding: 20px;
        margin-bottom: 20px;
        top: 0;
        border: 1px solid #bcbcbc;
    }

    .main-content {
        margin-bottom: 20px;
        position: fixed;
        overflow-y: auto;
        width: 100%
    }

    .all {
        top: 0;
        left: 0;
          width: 100%;
          height: 100%;
    }



</style>