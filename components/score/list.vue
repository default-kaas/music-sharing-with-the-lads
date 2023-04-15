<template>
  <!--TODO: Check of this is done correctly => flex-shrink overflow-y-auto for scrolling on the Y axis -->
  <div class="rating-scrollbar flex-grow border border-gray-800 rounded flex-shrink overflow-y-auto h-24">
    <template v-if="musicStore.computedSelectedTitle.value?.title === cardInfo.title">
      <template v-if="musicStore.computedSelectedTitle.value?.type === 'you'">
        <div class="flex rounded bg-gray-800 items-center h-full">
          <nuxt-img class="m-1 p-1 rounded-full" :height="'120px'" :src="`/images/profiles/rodney-marrelli.jpg`" alt="test" />
          <div class="ml-1 mr-3 rounded px-2 py-1" :class="getRatingColor(cardInfo.ratings.you.rating)">{{ cardInfo.ratings.you.rating  }}</div>
          <div>Ut lacinia tellus ac sapien porttitor interdum</div>
        </div>
      </template>
      <template v-else>
        <div class="flex m-1 p-1 rounded bg-gray-800 items-center" v-for="rating in musicStore.computedSelectedTitle.value?.data">  
          <nuxt-img class="m-1 rounded-full" :height="'60px'" :src="`/images/profiles/${rating.id}.jpg`" alt="test" />
          <div class="ml-1 mr-3 rounded px-2 py-1" :class="getRatingColor(rating.rating)">{{ rating.rating }}</div>
          <div>
            <div class="font-bold">
              {{ useCapitalizeFirstLetter(rating.id) }}
            </div>
            <div class="flex">
              
              <div>Ut lacinia tellus ac sapien porttitor interdum</div>
            </div>
          </div>
        </div>
      </template>
    </template>
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
const musicStore = useMusicStore()
function getRatingColor(rating: number){
  switch(true){
    case rating >= 75:
      return 'bg-gray-500'
    case rating >= 50:
      return 'bg-gray-400'
    case rating >= 25:
      return 'bg-gray-300'
    default:
      'bg-gray-100'
  }
}
</script>

<style scoped>
/* width */
.rating-scrollbar::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.rating-scrollbar::-webkit-scrollbar-track {
  background:  rgb(107 114 128);
}

/* Handle */
.rating-scrollbar::-webkit-scrollbar-thumb {
  background:   rgb(55 65 81);
}

/* Handle on hover */
.rating-scrollbar::-webkit-scrollbar-thumb:hover {
  background: black; 
}
</style>