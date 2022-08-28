<template>
    <div class="container">

        <Domain v-for="domain in domains" :key="domain.id" />
    
    <div class="btn-container">
        <mButton type="submit" title="اعتماد" ></mButton>
        <mButton type="save" title="حفظ" ></mButton>
        
    </div>
    </div>
</template>

<script>

import Domain from './mainDomain.vue';
import mButton from './Button.vue';
import { toRefs,reactive,provide } from 'vue';
    export default {
    name: "Domains",
    components: { Domain, mButton },
    setup(){
        const state = reactive({
            
            domains:[
                {id:0, name:"0 التنظيم الحسي",
                secDomains:[
                    {id:0, name :"التنظيم الحسي التناسقي 0",},
                    {id:1, name :"التنظيم الحسي التناسقي 1",},
                    {id:2, name :"التنظيم الحسي التناسقي 2",},
                    {id:3, name :"التنظيم الحسي التناسقي 3",},
                    {id:4, name :"التنظيم الحسي التناسقي 4",},
                ],
                },
                {id:1, name:"1 التنظيم الحسي",
                secDomains:[
                    {id:0, name :"التنظيم الحسي التناسقي 0",},
                    {id:1, name :"التنظيم الحسي التناسقي 1",},
                    {id:2, name :"التنظيم الحسي التناسقي 2",},
                    {id:3, name :"التنظيم الحسي التناسقي 3",},
                ],
                },
                {id:2, name:"2 التنظيم الحسي",
                secDomains:[
                    {id:0, name :"التنظيم الحسي التناسقي 0",},
                    {id:1, name :"التنظيم الحسي التناسقي 1",},
                    {id:2, name :"التنظيم الحسي التناسقي 2",},
                    {id:3, name :"التنظيم الحسي التناسقي 3",},
                ],
                },
                {id:3, name:"3 التنظيم الحسي",
                secDomains:[
                    {id:0, name :"التنظيم الحسي التناسقي 0",},
                    {id:1, name :"التنظيم الحسي التناسقي 1",},
                    {id:2, name :"التنظيم الحسي التناسقي 2",},
                    {id:3, name :"التنظيم الحسي التناسقي 3",},
                ],
                },
                
            ]
        })
        provide("state",state);
        return{
            ...toRefs(state),
        };
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
.btn-container{
    display: flex;
    flex-direction: row;
    margin :12vh auto;
    justify-content: space-between;
    
}

</style>