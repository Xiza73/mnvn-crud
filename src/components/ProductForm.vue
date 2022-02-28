<template>
  <h1>Product Form Works!</h1>
  <form @submit.prevent="saveTask()">
    <input type="text" placeholder="Nombre" v-model="product.name" required />
    <textarea
      rows="3"
      placeholder="Description"
      v-model="product.description"
      required
    ></textarea>
    <input
      type="text"
      placeholder="Url de imagen"
      v-model="product.imgURL"
      required
    />
    <input
      type="text"
      placeholder="Precio"
      pattern="[0-9]+"
      v-model.number="product.price"
      required
    />
    <button type="submit">Save</button>
  </form>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { Product } from "@/interfaces/product.interface";
import * as productService from "@/services/product.service";

export default defineComponent({
  data() {
    return {
      product: {} as Product,
      setting: {
        regExp: /^[0\D]*|\D*/g, // Match any character that doesn't belong to the positive integer
        replacement: "",
        val: "223",
      },
    };
  },
  methods: {
    async saveTask() {
      const res = await productService.createProduct(this.product);
      console.log(res);
      this.$router.push({
          name: 'products'
      })
    },
  },
});
</script>