<template>
<div class="flex flex-col border border-gray-800 rounded">
  <div class="bg-gray-800 text-center py-1 font-bold">
    Scores
  </div>
  <div class="grid grid-cols-2 m-1">
    <button 
      @click="setCurrentType('you', ratings.critics)" 
      class="flex flex-col p-1"
      :class="getActiveRatingBackground('you')">
      <h3 class="text-lg font-medium">Your:</h3>
      <div>{{ ratings.you.rating }}</div>
    </button>
    <button 
      @click="setCurrentType('similar', ratings.similar)" 
      class="flex flex-col p-1"
      :class="getActiveRatingBackground('similar')">
      <h3 class="text-lg font-medium">Similar people:</h3>
      <div>{{ useMeanBy(ratings.similar, 'rating').toFixed(0) }}</div>
    </button>
    <button 
      @click="setCurrentType('friends', ratings.friends)" 
      class="flex flex-col p-1"
      :class="getActiveRatingBackground('friends')">
      <h3 class="text-lg font-medium">Friends:</h3>
      <div>{{ useMeanBy(ratings.friends, 'rating').toFixed(0) }}</div>
    </button>
    <button 
      @click="setCurrentType('critics', ratings.critics)" 
      class="flex flex-col p-1"
      :class="getActiveRatingBackground('critics')">
      <h3 class="text-lg font-medium">Critics:</h3>
      <div>{{ useMeanBy(ratings.critics, 'rating').toFixed(0) }}</div>
    </button>
  </div>
</div>
</template>

<script setup lang="ts">
const props = defineProps({
  ratings:{
    type: Object as () => {
      critics: [{id: string, rating:  number}],
      you: {id: string, rating:  number},
      friends: [{id: string, rating:  number}],
      similar: [{id: string, rating:  number}]
    },
    required: true
  },
  title:{
    type: String,
    required: true
  }
})
const musicStore = useMusicStore()
function setCurrentType(type: string, data: [{id: string, rating: number}]){
  musicStore.setSelectedTitle(props.title, type, data)
}
function getActiveRatingBackground(type: string){
  return musicStore.computedSelectedTitle.value?.title === props.title && musicStore.computedSelectedTitle.value?.type === type ? 'bg-gray-800 rounded' : ''
}
</script>
