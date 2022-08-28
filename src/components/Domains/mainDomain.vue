<template>
    <div>
        <div @click="expand" class="domain">
            <h3>المجال: {{dKey}}</h3>
            <h3>عدد المجالات الفرعية: {{countsecD}}</h3>
            <h3>مهارات متاحة: {{allQ}}</h3>
            <h3>متبقي: {{allRemaining}}  </h3>
            <h3>نقاط قوة: {{allYes}}</h3>
            <h3>نقاط ضعف: {{allNo}}</h3>
            <h3>اخري: {{allOther}}</h3>
        </div>
        <div class="sec-container" v-show="toggle">
            <SecondaryDomain @updateS="handleUpdate" v-for="secD in domains[dKey].secDomains" :key="dKey+','+secD.id" />

        </div>
    </div>
</template>

<script>
import toggler from '../../mixins/toggler'
import SecondaryDomain from './secondaryDomain.vue';
import {reactive,ref,toRefs, inject,getCurrentInstance, computed, watch } from 'vue';
    export default {
    name: "Domain",
    components: { SecondaryDomain },
    mixins:[toggler],
    setup(){
        const dKey = ref(getCurrentInstance().vnode.key);
        const state = toRefs(inject('state',{}));
        const counts = reactive({
            allYes:0,
            allNo:0,
            allOther:0,
            allQ:0,
            allRemaining:0,
        })
        const childrensData = ref({})
        const countsecD = computed(function(){
            return state.domains.value[dKey.value].secDomains.length
        })
        const handleUpdate= (data)=>{
            childrensData.value = {...childrensData.value,[data.id]:data.mystate }
            // console.log(childrensData.value)
        };

        watch(childrensData,()=>{
            counts.allYes= 0
            counts.allNo=0
            counts.allOther=0
            counts.allQ=0
            counts.allRemaining=0
            for(const key in childrensData.value){
                counts.allYes += childrensData.value[key].countYes; 
                counts.allNo += childrensData.value[key].countNo;
                counts.allOther += childrensData.value[key].countOther;
                counts.allQ += childrensData.value[key].qcount;
                counts.allRemaining += childrensData.value[key].remaining;
            }
        },
        )

        return{
            dKey,
            ...state,
            ...toRefs(counts),
            countsecD,
            handleUpdate,
        }
    },
}
</script>

<style scoped>
.domain{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    background-color:#0b939a;
    color: white;
    margin: 2vh auto 0px  auto;
    width: 85%;
    height: 10vh;
    font-size: 2vmin;
    cursor: pointer;
    
}
.domain:hover{
    transform: scaleY(1.1);
}
.sec-container{
    background-color: #dceceb;
    width: 85%;
    margin :auto;
}

</style>