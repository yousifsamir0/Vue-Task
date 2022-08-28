<template>
    <div class="container">
        <Curriculum  :content="item" v-for="item in Curriculums"  :key="item.id"/>
    
    </div>
</template>

<script>
import Curriculum from './Curriculum.vue';

export default {
    name: "Curriculums",
    components: { Curriculum },
    data(){
        return{
            Curriculums:[
                {id:0, title:'منهج هيلب المرحلة العمرية من ١ الي ٦ سنوات ',content:["هيلب 1-6","هيلب 3-6"]},
                {id:1, title:'منهج هيلب المرحلة العمرية من ٦ الي ١٨ سنوات ',content:["هيلب 12-6","هيلب 12-18"]},
                {id:2, title:"مقاييس الصحة العامة",content:["test1","test2"]},
                {id:3, title:"التكامل الحسي",content:["test3","test4"]},
            ]
        }
    },
    
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
</style>