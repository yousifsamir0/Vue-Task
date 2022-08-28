<template>
    <div :class="type+' expand'" >
        <h1>{{title}}</h1>
    </div>
</template>



<script>
    export default {
        name:"Expanded",
        props:{
            title:String,
            type:String
        }

    }
</script>



<style scoped>
.expand{

    width :80%;
    margin: 20px auto;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.expand:hover{
    transform:scaleY(1.1);
}
.primary{
    background-color:#cae5e6;
    height: 15vh;
    margin-bottom: 0px; 
    font-size: 1vw;
}
.secondary{
    color: white;
    background-color:#0b939a;
    height: 8vh;
    margin-top: 0px;
    font-size: 0.7vw;

}
</style>