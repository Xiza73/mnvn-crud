<template>
  <ul>
    <li
      v-for="(product, i) in products"
      :key="i"
      @click="this.$router.push(`/products/${product._id}`)"
    >
      {{ product.name }} - {{ product.description }} - {{ product.imgURL }} -
      {{ product.price }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as productService from "@/services/product.service";
import { Product } from "@/interfaces/product.interface";

export default defineComponent({
  data() {
    return {
      products: [] as Product[],
    };
  },
  methods: {
    async loadProducts() {
      /*const res = await fetch(`http://localhost:3050/api/product`);
      const data = await res.json()
      this.products = data.products*/
      const res = await productService.getProducts();
      this.products = res!.data.products;
      console.log(this.products);
    },
  },
  mounted() {
    this.loadProducts();
  },
});
</script>

<style lang="scss">
ul {
  background-color: blue;
  li {
    background-color: yellow;
  }
}
</style>