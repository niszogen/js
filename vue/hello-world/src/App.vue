<template>
<section>
<p v-if="like > 0"> 
  LAJKI {{ like }} 
</p>
<p v-else> 
  ŁO NIE NIKT NIE DAŁ LAJKA 
</p>
<button v-on:click="likeC()" type="button" class="btn btn-primary">
  LAJK
  </button>
  </section>
</template>

<script>


export default {
  data(){
    return {
        like: 0,
    }
  },

  methods: {
    likeC() {
      this.like++;
    },
  }
}
</script>
