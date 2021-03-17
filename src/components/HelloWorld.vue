<template>
  <div class="hello">
    <h1>Hello World</h1>
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HelloWorld",

  methods: {
    ...mapActions("users", ["addNewUser"]),

    addUser() {
      const newUser = {
        name: "Ivan",
        age: 23,
      };
      this.addNewUser(newUser);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
