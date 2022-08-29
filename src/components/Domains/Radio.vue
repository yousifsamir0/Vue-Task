<template>
    <div class="radio">
        <label>
            <input type="radio" :name="name" :value="value" @input="$emit('update:modelValue',$event.target.value)"  />
            <span></span>
        </label>
        
    </div>
    
</template>

<script>
    export default {
        name:'Radio',
        props:['name','value',],
    }
</script>

<style scoped>
    .radio{
        height: 13px;
        width: 13px;
        /* position: relative; */

    }
    input[type='radio']{
        display: none;
    }
    label{
        position: relative;
    }
    span{
        display: flex;
        justify-content: center;
        align-content: center;
        height: 20px;
        width:20px;
        border: 2px solid gray;
        border-radius: 50%;
        
    }
    span::after{
        content: '';
        height: 12px;
        width: 12px;
        border-radius: 50%;
        margin :auto;
        transform: translate(0,0) scale(0);
        transition: 0.3s ease-in-out 0s;
    }

    input:checked + span::after{
        
        transform: translate(0,0) scale(1);
        
        
    }
    input[value="yes"]:checked + span::after {background: #0c919b;}
    input[value="yes"]:checked + span {border-color: #0c919b;}
    input[value="no"]:checked + span::after {background: #ff776b;}
    input[value="no"]:checked + span {border-color: #ff776b;}
    input[value="not-shown"]:checked + span::after {background: #b2bc3e;}
    input[value="not-shown"]:checked + span {border-color: #b2bc3e;}
    input[value="not-clear"]:checked + span::after {background: #9521fa;}
    input[value="not-clear"]:checked + span {border-color: #9521fa;}
   

</style>