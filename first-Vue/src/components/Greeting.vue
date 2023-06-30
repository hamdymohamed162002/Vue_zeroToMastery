<template>
    <div>
{{ greeting }}
    </div>
</template>

<script >
export default {
    name: 'Greeting',
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}
</script>
<style scoped>
div {
  color: red;
}
</style>

