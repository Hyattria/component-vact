
<template>
  <footer class="ac-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'AcFooter',
    componentName: 'AcFooter',
    props: {
      height: {
        type: String,
        default: '4rem'
      }
    }
  }
</script>
