<template>
    <div>
        <Expandable @click="expand" type="primary" :title="content.title"/>
        <template v-if="toggle">
            <Expandable v-for="child in content.content" :key="child"  type="secondary" :title="child"/>
        </template>
    </div>
</template>

<script>
import toggler from '@/mixins/toggler'
import Expandable from './Expandable.vue';
    export default {
    name: "Curriculum",
    props: {
        title: String,
        content:Object,
    },
    components: { Expandable },
    mixins:[toggler]
}
</script>   
