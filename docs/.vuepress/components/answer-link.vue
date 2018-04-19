<template>
  <a :href="url" target="_blank">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ['url']
}
</script>
