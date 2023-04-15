<template>
  <div>
    <div>
      Curious? here is an example
    </div>
    <div>
      <template v-for="platform in cardInfo.platforms">
        <a v-if="platform.name === 'spotify'" :href="platform.link" target="_blank">
          <IconCSS class="text-white mx-2 text-3xl" name="logos:spotify-icon" />
        </a>
        <a v-if="platform.name === 'youtube'" :href="platform.link" target="_blank">
          <IconCSS class="text-white mx-2 text-4xl" name="ph:youtube-logo-fill"  />
        </a>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { useCardType } from '@/composables/useTypes'
defineProps({
  cardInfo: {
    type: Object as () => useCardType,
    required: true,
  }
})
</script>