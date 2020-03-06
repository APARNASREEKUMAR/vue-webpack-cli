<template>
  <div>
  <h2 id="heading1">Welcome to Todo App</h2>
    <div class="container form-group">
    <ul>
     <li v-for="item in items" :key="item.itemId" class="form-control">
       {{item.itemName}}
       <input type="checkbox" v-model=item.completed>
       <button class="btn btn-warning btn-sm">Edit Item</button>
       <button class="btn btn-danger btn-sm">Delete Item</button>
     </li>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.items = this.$store.getters.items
  },
  methods: {
  }
}

</script>
<style>
  #heading1 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #32188c;
    margin-top: 40px;
    margin-top: 60px;
    margin-left: 100px;
    margin-right: 100px;
    border-style: dashed;
    border-color: crimson;
    padding: 20px;
  }
</style>
