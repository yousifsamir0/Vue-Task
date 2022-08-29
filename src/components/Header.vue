<template>
    <div class="header">
        <nav>
            <div class="container">
                
                <div class="icons">
                    <i class="menu fa-solid fa-bars"></i>
                    <i class="fa-solid fa-gear"></i>
                    <i class="fa-solid fa-message"></i>
                    <i class="fa-solid fa-bell"></i>
                    <i class="fa-solid fa-circle-user"></i>
                </div>
                <div class="logo">
                    LOGO
                </div>
            </div>
        </nav>
        <div  class="child-info">
            <h3 >بيانات الطفل أحمد محمد أحمد</h3>
        </div>
        <div class="newRev">
            <h4>عمل تقييم جديد</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Header',

    }
</script>

<style scoped>
    .header{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    nav{
        height: 15vh;
        display: flex;
        flex-direction: row;
        align-content: center;
        margin-bottom: 60px;
        -webkit-box-shadow: 0px 6px 12px 0px rgba(0,0,0,0.41);
        -moz-box-shadow: 0px 6px 12px 0px rgba(0,0,0,0.41);
        box-shadow: 0px 6px 12px 0px rgba(0,0,0,0.41);
    }
    .container{
        width: 95%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        justify-items: center;
        margin: auto auto;
    }
    .menu{
        display: none;
    }
    .icons{
        font-size: 32px;
        color: #09939a;
        margin :auto auto auto 0; 
        cursor: pointer;
    }
    i{
        margin: 1vh 1vw;
    }
    .logo{
        margin : auto 0 auto auto;
        font-size: 10vh;
        font-weight:bolder;
        letter-spacing: 10px;
        color:#09939a;
        cursor: pointer;
    }
    .child-info{
        height: 19vh;
        display: flex;
        flex-direction: row-reverse;
        font-size: 3vmin;
        /* background-color: aqua; */
    }
    .child-info > h3{
        margin :auto 4vw auto auto;
    }

    .newRev{
        height: 12vh;
        display: flex;
        flex-direction: row-reverse;
        font-size: 3vmin;
        background-color: rgb(236,236,236) ;
        margin-bottom: 8vh;
    }
    .newRev > h4{
        margin :auto 6vw auto auto;
    }



    @media screen and (max-width: 600px) {

        /* .icons{display: none;} */
        .logo{margin: auto;}
        .menu,.icons{display: block;margin-right: 0;}

        .icons i:not(:first-child){display: none;}
        
    }
    
</style>