<template>
    <div class="min-h-screen justify-center items-center m-2">
        <div class="flex flex-row items-center justify-center gap-3">
            <Jword></Jword>
            <Nword></Nword>
        </div>
        <div class="w-full md:w-[40%] mx-auto">
            <Score></Score>
        </div>
    </div>
</template>

<script setup>
import Score from '../components/api-data.vue'
import Jword from '../components/jword-button.vue'
import Nword from '../components/nword-button.vue'
</script>