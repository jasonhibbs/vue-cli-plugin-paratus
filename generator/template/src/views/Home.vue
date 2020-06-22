<template lang="pug">

  main
    .layout
      p
        loader Awaiting work…

</template>
<script lang="ts">
import { Component, Ref, Vue, Watch } from 'vue-property-decorator';
import Loader from '@/components/Loader.vue';

@Component({
  components: {
    Loader,
  },
})
export default class Home extends Vue {}
</script>
