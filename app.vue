<template>
  <div>
    <select class="mx-3 my-1 w-48" :disabled="computedSelectOptions.length === 0" v-model="selectedFriend" name="friends" id="friends">
      <template v-for="friend in computedSelectOptions">
        <option class="flex items-center py-1 px-2 bg-gray-800 text-white" :value="friend.id">
          <nuxt-img class="m-1 rounded-full" :height="'10px'" :src="`/images/profiles/${friend.id}.jpg`" alt="test" />
          <div class="font-semibold mx-2">
            {{ useCapitalizeFirstLetter(friend.id) }}
          </div>
        </option> 
      </template>
    </select>
    <div>
    <div class="flex mx-2 h-12">
      <div class="flex items-center" v-if="selectedFriends.size > 0">
        <select v-model="selectedFilterType" >
          <option default class="flex items-center py-1 px-2 bg-gray-800 text-white" :value="'OR'">
            OR
          </option>
          <option class="flex items-center py-1 px-2 bg-gray-800 text-white" :value="'AND'">
            AND
          </option>
        </select>
      </div>
      <FriendThumbnail v-for="friend in selectedFriends" :user="friend" @delete="removeSelectedFriend" />
    </div>
    </div>
    <template v-for="mockObject in computedAlbums">
      <MusicCard :card-info="mockObject"/>
    </template>
  </div>
</template>

<script setup lang="ts">
import mock from '~/assets/mock-data/mock.json'
import type { useCardType } from '@/composables/useTypes'
onMounted(() => {
  document.body.className = "bg-black font-sans";
});
const selectedFriend = ref<string|null>(null);
const selectedFriends = ref<Set<string>>(new Set<string>());
const computedSelectOptions = computed(() => {
  if(selectedFriends.value.size === 0){
    return mock.friends
  }
  return mock.friends.filter(friend => !selectedFriends.value.has(friend.id))
})
watch(
  () => selectedFriend.value,
  (newValue)=> {
    if(newValue){
      selectedFriends.value.add(newValue)
    }
    selectedFriend.value = null
  }
)
function removeSelectedFriend(id: string){
  selectedFriends.value.delete(id)
}

const selectedFilterType = ref<string>('OR');
const computedAlbums = computed(() => {
  if(selectedFriends.value.size === 0){
    return mock.albums
  }
  if(selectedFilterType.value === 'AND'){
    return mock.albums.filter(album => andFriendFilter(album))
  }
  return mock.albums.filter(album => orFriendFilter(album))
})
function andFriendFilter(album: useCardType){
  const friends = album.ratings.friends.map(friendRating => friendRating.id)
  const selectedFriendIterator = selectedFriends.value.values()
  for(let i = 0; i < selectedFriends.value.size; i++){
    if(!friends.includes(selectedFriendIterator.next().value)){
      return false
    }
  }
  return true
}
function orFriendFilter(album: useCardType){
  const friends = album.ratings.friends.map(friendRating => friendRating.id)
  for(let i = 0; i < friends.length; i++){
    if(selectedFriends.value.has(friends[i])){
      return true
    }
  }
  return false
}
</script>
