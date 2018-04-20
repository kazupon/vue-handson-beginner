---
sidebar: auto
---
# イントロダクション

<template>
  <div id="handson-intro"></div>
</template>

<script>
export default {
  mounted () {
    const target = document.querySelector('#handson-intro') 
    const el = document.createElement('script') 
    el.async = true
    el.src = 'https://speakerdeck.com/assets/embed.js'
    el.setAttribute('class', 'speakerdeck-embed')
    el.setAttribute('data-id', '0eb54e63487a45d7880cf23e17d4da5f')
    el.setAttribute('data-ratio', '1.33333333333333')
    target.appendChild(el)
  }
}
</script>
