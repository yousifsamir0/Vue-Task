<template>
    <button :class="type">{{title}}</button>
</template>

<script>
    export default {
        name:"Button",
        props:{
            type:String,
            title:String,
        },
    }
</script>

<style scoped>
button{
    padding: 1vh 2vw;
    height: 10vh;
    width: 17vw;
    text-align: center;
    color: white;
    border-radius: 10px;
    border: 0;
    margin :0vh 1.5vw;
    font-weight: bold;
    font-size: 3vmin;
    font-family: 'Tajawal', sans-serif;
    cursor: pointer;
}
button:hover{
    transform: scale(1.1);
}

.save{
    background-color: #0b939a;
}
.submit{
    background-color: #0072f9;
}
.save:hover{
    background-color: #14d6e0;
}
.submit:hover{
    background-color: #61a7fa; 

}
</style>