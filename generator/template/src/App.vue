<template lang="pug">

  #app

    header
      .layout
        h1 vue-paratus

    router-view

</template>

<style lang="scss" src="@/assets/scss/style.scss"></style>

<script lang="ts">
import { Component, Ref, Watch, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component
export default class App extends Vue {}
</script>
