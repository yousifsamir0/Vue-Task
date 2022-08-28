<template>
    <div :class="answer+' question'">
        <div class="txt">
            <h4 class="id">{{q.id}}</h4>
            <h4 class="age">60-70</h4>
            <h4 class="q">{{q.question}}</h4>
        </div>
        <div class="inp">
            <input type="radio" :name="'q'+qid" value="yes" v-model="answer">
            <input type="radio" :name="'q'+qid" value="no" v-model="answer">
            <input type="radio" :name="'q'+qid" value="not-shown" v-model="answer">
            <input type="radio" :name="'q'+qid" value="not-clear" v-model="answer">
        </div>

    </div>

</template>

<script>
    import { ref ,watch} from 'vue';

    export default {
        name:'Question',
        emits:['qchange'],
        props:{
            qid:String,
            q:Object,
        },
        setup(props,context){
            const answer = ref('');
            
            watch(answer,(newValue)=>{
                context.emit('qchange',{answer,id:props.q.id})
            },{immediate:true})

            return{
                answer
            }
        }
    }
</script>

<style scoped>
.question{
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-top: 1px solid rgba(128, 128, 128, .1);
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    height: 10vh;
    
    
    
}
.yes{background-color:#cae5e6;}
.no{background-color: #ffe4e1;}
.not-shown{background-color: #eff1d7;}
.not-clear{background-color: #e9d3ff;}
.txt{
    width: 70%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
}
.inp{
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
}
.inp > *{
    margin:4vh 3vw;
}
.txt > * {
    margin-left : 4vw;
}
</style>
