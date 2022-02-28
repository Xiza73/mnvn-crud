<template>
  <h1>Product Detail</h1>
  <form @submit.prevent="handleUpdate">
    <input
      type="text"
      placeholder="Nombre"
      v-model="currentProduct.name"
      required
    />
    <textarea
      rows="3"
      placeholder="Description"
      v-model="currentProduct.description"
      required
    ></textarea>
    <input
      type="text"
      placeholder="Url de imagen"
      v-model="currentProduct.imgURL"
      required
    />
    <input
      type="text"
      placeholder="Precio"
      pattern="[0-9]+"
      v-model.number="currentProduct.price"
      required
    />
    <button type="submit">Update</button>
    <button type="button" @click="handleDelete()">Delete</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as productService from "@/services/product.service";
import { Product } from "@/interfaces/product.interface";

export default defineComponent({
  data() {
    return {
      currentProduct: {} as Product,
    };
  },
  methods: {
    async loadProduct(id: string) {
      const res = await productService.getProduct(id);
      this.currentProduct = res!.data.product;
    },
    async handleUpdate() {
      if (typeof this.$route.params.id === "string") {
        const res = await productService.updateProduct(
          this.$route.params.id,
          this.currentProduct
        );
        console.log(res?.data.product);
        this.$router.push("/");
      }
    },
    async handleDelete() {
      if (typeof this.$route.params.id === "string") {
        const res = await productService.deleteProduct(this.$route.params.id);
        console.log(res?.data.product);
        this.$router.push("/");
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadProduct(this.$route.params.id);
    }
  },
});
</script>
