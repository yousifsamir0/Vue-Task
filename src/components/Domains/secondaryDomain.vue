<template>
    <div>
        <div @click="expand" :class="toggle? 'sec-domain toggled':'sec-domain'">
            <h3>المجال الفرعي: <span>{{sdKey}}</span></h3>
            <!-- <h3>عدد المجالات الفرعية: 13</h3> -->
            <h3>مهارات متاحة: <span>{{qcount}}</span></h3>
            <h3>الفجوة العمرية: <span>5 شهور</span></h3>
            <h3>متبقي: <span>{{remaining}}</span>  </h3>
            <h3>نقاط قوة: <span>{{countYes}}</span></h3>
            <h3>نقاط ضعف: <span>{{countNo}}</span></h3>
            <h3>اخري: <span>{{countOther}}</span></h3>
        </div>

        <div  v-show="toggle">
            <Form :key="sdKey"></Form>
        </div>


    </div>
</template>

<script>
    import toggler from '@/mixins/toggler';
    import Form from './Form.vue';
    import {getCurrentInstance, provide, reactive, ref,toRefs, watch,onMounted} from 'vue';




    export default {
    name: "SecondaryDomain",
    mixins: [toggler],
    components: { Form },
    setup(p,context){
        
        
        const questions = ref([
            {id:0,question:"يستمتع بالاستماع للقصص ويحب مشاهدتها باستقلالية",answer:''},
            {id:1,question:"يستمتع بالاستماع للقصص ويحب مشاهدتها باستقلالية",answer:''},
            {id:2,question:"يستمتع بالاستماع للقصص ويحب مشاهدتها باستقلالية",answer:''},
            {id:3,question:"يستمتع بالاستماع للقصص ويحب مشاهدتها باستقلالية",answer:''},
            {id:4,question:"يستمتع بالاستماع للقصص ويحب مشاهدتها باستقلالية",answer:''},
        ]);
        const sdKey= ref(getCurrentInstance().vnode.key);
        const myid = sdKey.value.split(',')[1];
        const Did = sdKey.value.split(',')[0];
        const mystate = reactive({
            qcount:0,
            remaining:0,
            countYes:0,
            countNo:0,
            countOther:0,
        })
   
 
        watch(questions.value,
        ()=>{
            mystate.countNo =  questions.value.filter((item)=>(item.answer==='no')).length;
            mystate.qcount =  questions.value.length;
            mystate.remaining =  questions.value.filter((item)=>(item.answer==='')).length;
            mystate.countYes =  questions.value.filter((item)=>(item.answer==='yes')).length;
            mystate.countOther =  questions.value.filter((item)=>(item.answer.includes('not'))).length;

            context.emit("updateS",{id:myid,mystate})
        },
        {immediate:true})

        provide("questions",questions);

    
        return {
            sdKey,
            ...toRefs(mystate)

        }
    }
}
</script>

<style scoped>

.sec-domain{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    background-color:#cae5e6;
    color: black;
    margin: 0px auto 20px  auto;
    width: 100%;
    height: 10vh;
    font-size: 2vmin;
    cursor: pointer;
}
.toggled{
    margin:0 auto;
}
.sec-domain:hover{
    background-color: #14d6e0;
    transform: scaleY(1.1);
}
span{
    color: #1b847a;
}

</style>