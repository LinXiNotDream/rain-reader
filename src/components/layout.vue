<template>
    <div class="default-header">
        <slot name="header"></slot>
    </div>
    <div class="default-content">
        <div class="default-menu">
            <slot name="menu"></slot>
        </div>
        <div class="default-content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped></style>
