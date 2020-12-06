<template>
  <div class="moduleA">
    <div class="counter">
      <button @click="setValue(value + 1)">+</button>
      <span class="result">{{ value }}</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import c from '../constants'

  export default {
    name: c.MODULE_NAME,
    computed: {
      ...mapGetters(c.MODULE_NAME, ['value']),
    },
    methods: {
      ...mapActions(c.MODULE_NAME, ['setValue'])
    }
  }
</script>

<style scoped>
  .counter {
    display: inline-block;
    border: 1px solid;
    border-radius: 10px;
    padding: 20px;
  }

  button {
    margin-right: 10px;
  }
</style>
