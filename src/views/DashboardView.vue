<template>
    <div>
        <DashboardVue />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import DashboardVue from '../components/DashboardVue.vue'

export default defineComponent({
    name: 'DashboardView',
    components: {
        DashboardVue
    }
})
</script>
