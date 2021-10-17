<template>
  <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <div class="card p-4">
        <div class=" image d-flex flex-column justify-content-center align-items-center"> 
            <button class="btn btn-secondary"> <img src="../assets/login.png" height="100" width="100" /></button> 
                <div v-if="!Session.user">
                    <a @click="login">
                        Log in
                    </a>
                    </div>
                    <div class="name_profile" v-else>
                        {{name}}
                    </div>
             <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> 
                <span><i class="fa fa-twitter">Twitter</i></span>
                <br>
                <span><i class="fa fa-facebook-f">Facebook</i></span>
                <br>
                <span><i class="fa fa-instagram">Instagram</i></span> 
                <br>
                <span><i class="fa fa-linkedin">Linkedin</i></span> 
             </div>
            <div class="d-flex flex-row justify-content-center align-items-center mt-3"> 
                <span class="number">xxxx<span class="follow">Followers</span>
                </span> 
            </div>
            <div class=" d-flex mt-2"> 
                <button class="btn1 btn-dark">Edit Profile</button> 
            </div>
            <div class="text mt-3"> 
                <span>bio XXXXX</span> 
            </div>
            <div class="text mt-3"> 
                <span>PhoneNumber xxx-xxx-xxxx</span> 
            </div>
            <div class=" px-2 rounded mt-4 date "> 
                <span class="join">Joined Date xxxx</span> 
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Session from "../services/session";


export default {
    data: ()=>{
        return ({
            Session
        })
    },
    methods: {
        login(){
            this.$router.push('/login')
            //this.Session.Login();
        }
    },
    computed:{
        name(){
            return this.Session.user.firstName + '' + this.Session.user.lastName;
        }
    }
}
</script>

<style>
.name_profile{
    color: rgb(0, 0, 0);
    background-color:rgb(249, 249, 250);
}

.card {
    margin: auto;
    width: 350px;
    background-color: rgb(252, 252, 253);
    border-color: blue;
    cursor: pointer;
    transition: all 0.5s
}

.image img {
    transition: all 0.5s
}

.card:hover .image img {
    transform: scale(1.5)
}

.btn {
    height: 140px;
    width: 140px;
    border-radius: 50%
}

.name {
    font-size: 22px;
    font-weight: bold
}

.idd {
    font-size: 14px;
    font-weight: 600
}

.idd1 {
    font-size: 12px
}

.number {
    font-size: 22px;
    font-weight: bold
}

.follow {
    font-size: 12px;
    font-weight: 500;
    color: #080808
}

.btn1 {
    height: 40px;
    width: 150px;
    border: none;
    background-color: #000;
    color: #aeaeae;
    font-size: 15px
}

.text span {
    font-size: 13px;
    color: #000000;
    font-weight: 500
}

.icons i {
    font-size: 19px
}

hr .new1 {
    border: 1px solid
}

.join {
    font-size: 14px;
    color: #000000;
    font-weight: bold
}

.date {
    background-color: rgb(0, 0, 0)
}
</style>