<template>
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/main/Main'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
  @import './css/global.scss';
  @import './css/font.scss';
  @import './css/main.scss';
  @import './css/intro.scss';
</style>
