<template>
    <div class="container">
        <div class="header">

            <div class="right">
                <h3>مسلسل</h3>
                <h3>العمر</h3>
                <h3>المهارة</h3>
            </div>
            <div class="labels">
                <h3 >نعم</h3>
                <h3>لا</h3>
                <h3>غير قابل<br>للظهور</h3>
                <h3>غير واضح</h3>
            </div>
        </div>
        
        <div class="questions">
            <Question @qchange="updateQs" v-for="q in questions" :q="q" :key="q.id" :qid="q.id+','+this.$.vnode.key"/>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue';
import Question from './Question.vue';
    export default {
    name: "Form",
    components: { Question },
    setup(){

        const questions = inject("questions",[])



        const updateQs = function(param){
            // console.log(param);
            questions.value[param.id].answer=param.answer
            questions.value=questions.value.concat([])
            
        };



        return{
            questions,
            updateQs,
        }
    },
}
</script>

<style scoped>

.container{
    width :100%;
    background-color:white;
    height: auto;
    margin-bottom: 2vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header{
    margin-top: 2vh;
    width: 100%;
    height: 12vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    font-size: 2vmin;
    

}

.labels{
    width: 40%;
    height:10vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-left: 3vw;
    

}
.right{
    display: flex;
    width:auto;
    flex-direction: row-reverse;
    margin-right: 0vw;
    
}
.right > * {
    margin :auto 2vw;
}
.labels > * {
    margin :auto 2vw;

}
.questions{

    display: flex;
    width: 90%;
    margin: auto;
    margin-bottom:7vh;
    flex-direction: column;
    /* border: 4px solid black; */
    height: auto;
    font-size: 2vmin;
    
}
.questions:last-child{
    border-bottom: 1px solid rgba(128, 128, 128, .1);

}

</style>