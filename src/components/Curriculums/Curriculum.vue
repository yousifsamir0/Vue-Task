<template>
    <div>
        <Expandable @click="expand" type="primary" :title="content.title"/>
        <template v-if="toggle">
            <Expandable @click="link" v-for="child in content.content" :key="child"  type="secondary" :title="child"/>
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
    methods:{
        link(){
            this.$router.push('domain');
        }
    },
    components: { Expandable },
    mixins:[toggler]
}
</script>   
