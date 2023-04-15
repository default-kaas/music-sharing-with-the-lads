<template>
  <div class="bg-gray-900 rounded text-white m-3 p-3">
    <h2 class="font-bold text-3xl p-1">
      {{ cardInfo.artist + ' - ' + cardInfo.title }}
    </h2>
    <div class="flex p-1">
      <div class="flex flex-col">
        <nuxt-img :height="'240px'" :src="cardInfo.image" alt="test" class="rounded-lg"/>
      </div>
      <div class="flex flex-col mx-3 p-1 flex-grow">

        <ScoreList :card-info="cardInfo" />
        <PlatformList :card-info="cardInfo" />
      </div>
      <div class="flex flex-col p-1">
        <div class="flex flex-col align-middle justify-center flex-grow">
          <ScoreGrid :title="cardInfo.title" :ratings="cardInfo.ratings"/>
        </div>
        <div>
          {{ cardInfo.release }} / release
        </div>
        <div>
          {{ cardInfo.sub_generes.join(', ') }} / generes
        </div>
      </div>
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