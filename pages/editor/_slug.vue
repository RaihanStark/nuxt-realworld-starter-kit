<template>
  <h1>{{ params }}asdfasdfasfasdfasdfasfasdfdf</h1>
</template>

<script>
export default {
  data() {
    return {
      params: this.$route.params.slug,
    }
  },
}
</script>
