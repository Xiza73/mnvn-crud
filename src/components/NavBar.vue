<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">products</router-link>
      </li>
      <li>
        <router-link to="/products/new">create product</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'NavBar'
});
</script>
