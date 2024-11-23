<template>
    <div class="justify-center items-center text-center">
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div class="container mx-auto">
                <h1 class="font-semibold text-2xl my-2">Leaderboard</h1>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">Rank</th>
                                <th scope="col" class="px-6 py-3">Country</th>
                                <th scope="col" class="px-6 py-3">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(data, index) in countryData" :key="index">
                                <td class="px-6 py-4 font-medium text-gray-90">
                                    {{ index + 1 }}
                                </td>
                                <td class="px-6 py-4 font-medium text-gray-90">
                                    {{ data.country }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ data.score }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'

const countryData = ref([])
const loading = ref(true);

onMounted(async () => {
    try {
        const response = await axios.get('https://api.m-code.my.id/api/count')
        console.log(response.data);
        countryData.value = response.data.data.sort((a, b) => b.score - a.score);
    } catch (error) {
        console('error fetching data! ', error)
    } finally {
        loading.value = false
    }
    return {
        countryData,
        loading,
    };
})

</script>