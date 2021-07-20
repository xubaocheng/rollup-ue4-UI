<template>
  <div class="test">{{a}}</div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'TestComponent',
  setup() {
    const a = ref(222)
    return {
      a,
    }
  },
}
</script>

<style lang="scss" scoped>
.test {
  color: #6fc;
}
</style>
