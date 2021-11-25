<template>
  <a-input-search
    v-model:value="value"
    placeholder="Search book name"
    style="width: 200px"
    @search="onSearch"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string>('')

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue)
  console.log('or use this.value', value.value)
}
</script>

<style lang="scss" scoped></style>
