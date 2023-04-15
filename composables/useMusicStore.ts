import { defineStore } from "pinia";

export const useMusicStore = defineStore('music', () => {
  //* State
  const selectedTitle = ref<{title: string, type: string, data: [{id: string, rating: number}] } | null>(null)
  //* Getter
  const computedSelectedTitle = computed(() => selectedTitle);
  //* Action
  function setSelectedTitle(title: string, type: string, data: [{id: string, rating: number}]){
    selectedTitle.value = { title, type, data }
  }
  function resetSelectedTitle(){
    selectedTitle.value = null
  }
  return { selectedTitle , computedSelectedTitle, setSelectedTitle, resetSelectedTitle }
})