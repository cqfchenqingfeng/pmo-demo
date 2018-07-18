<template>
  <div class="home">
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Body from '@/components/body.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'home',
  components: {
    Body,
    Footer
  }
}
</script>
