<template>
  <form class="section" @submit.prevent="login()">
  <div class="login">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
<div class="hero is-fullheight is-primary" style="background-color: rgb(25, 0, 85);">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-8 is-offset-2">
        <h3 class="title has-text-white">Login</h3>
<hr class="login-hr">
<p class="subtitle has-text-white">Please login to see our cool stuff!</p>
<div class="box">
  <div class="title has-text-grey is-5">Please enter your Username and Password.</div>
</div>
<form>
  <div class="field">
    <div class="control">
      <input class="input is-large" type="username" placeholder="Username" autofocus="" v-model="email">
    </div>
  </div>
  <div class="field">
    <div class="control">
      <input class="input is-large" type="password" placeholder="Password" v-model="password">
    </div>
  </div>
</form>
<label class="checkbox" style="margin: 20px;">
  <input type="checkbox">
    Remember me
</label>
<div class="buttons" v-if="!Session.user">
          <button @click="login">
            Log in
          </button>
    </div>
<p class="has-text-grey">
  <router-link to="/signup">Sign Up</router-link> &nbsp;·&nbsp;
  <router-link to="/contact">Forgot Password</router-link> &nbsp;·&nbsp;
  <router-link to="/contact">Need Help?</router-link>
</p>
      </div>
    </div>
  </div>
</div>
</div>
</form>
</template>

<script>
import Session from "../services/session";
export default {
    data: ()=>({
        email: null,
        password: null,
        Session
    }),
    methods: {
        login(){
            this.Session.Login(this.email, this.password);
        }
    }
}
</script>

<style>
</style>