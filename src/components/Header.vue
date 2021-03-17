<template>
  <h1>Header
    <br>
    {{usersList}}
  </h1>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",

  computed: {
    // получаем данные из нужного модуля хранилища
    ...mapGetters("users", ["usersList"])
  }
};
</script>
