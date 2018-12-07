<template>
  <i 
    :class="`ac-icon-${name}`"
    :style="styleObj">
  </i>
</template>

<script>
export default {
  name: 'AcIcon',
  props: {
    name: String,
    color: String,
    size: String
  },
  components: {
    styleObj() {
      return {
        color: this.color,
        fontSize: this.size
      };
    },
  }
}
</script>
