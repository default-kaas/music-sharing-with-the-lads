<template>
  <div class="flex items-center m-1 py-1 px-2 rounded-full bg-gray-800 text-white">
    <nuxt-img class="m-1 rounded-full" :height="'30px'" :src="`/images/profiles/${user}.jpg`" alt="test" />
    <div class="font-semibold mx-2">
      {{ useCapitalizeFirstLetter(user) }}
    </div>
    <button @click="removeFriendFilter()" class="text-center font-bold text-xs rounded-full bg-gray-600 px-1">
      X
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  user:{
    type: String,
    required: true
  }
})
const emit = defineEmits(['delete'])
function removeFriendFilter(){
  emit('delete', props.user)
}
</script>