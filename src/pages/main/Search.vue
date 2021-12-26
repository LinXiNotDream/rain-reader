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
import { getSearchBook } from '@/api'

const value = ref<string>('')

const onSearch = async (searchValue: string) => {
  const res = await getSearchBook({ keyWord: searchValue }, {})
  console.log(res)
}
</script>

<style lang="scss" scoped></style>
