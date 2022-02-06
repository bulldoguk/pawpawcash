<template>
  <div>
    <h1>Loading page</h1>
    <button @click="getLinkToken">Create</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "IndexPage",
  methods: {
    ...mapActions({
      getLinkToken: "plaid/getLinkToken",
    }),
  },
};
</script>
