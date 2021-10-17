<template>
  <div v-if="!Session.user">
          <a @click="login">
            Log in
          </a>
        </div>
        <div class="name" v-else>
            Hello {{name}}
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
.name{
    color: antiquewhite;
    background-color:rgb(25, 31, 66);
}
</style>