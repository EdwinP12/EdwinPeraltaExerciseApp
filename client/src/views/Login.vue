<template>
  <form class="section" @submit.prevent="login()">
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
<div class="hero is-fullheight is-primary" style="background-color: rgb(25, 0, 85);">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-8 is-offset-2">
        <h3 class="title has-text-white">Login</h3>
<hr class="login-hr">
<p class="subtitle has-text-white">Please login to see our cool stuff!</p>
<div class="box">
  <div class="box">
    <img src="../assets/login.png">
  </div>
  <div class="title has-text-grey is-5">Please enter your Username and Password.</div>
</div>
<form>
  <div class="field">
    <div class="control">
      <input class="input is-large" type="username" v-model="email" autofocus="">
    </div>
  </div>
  <div class="field">
    <div class="control">
      <input class="input is-large" type="password" v-model="password">
    </div>
  </div>
</form>
<label class="checkbox" style="margin: 20px;">
  <input type="checkbox">
    Remember me
</label>
<div class="field">
        <p class="control">
            <button class="button is-success">
            Login
            </button>
        </p>
        </div>
<p class="has-text-grey">
  <a href="SignUpPage.html">Sign Up</a> &nbsp;·&nbsp;
  <a href="ContactPage.html">Forgot Password</a> &nbsp;·&nbsp;
  <a href="ContactPage.html">Need Help?</a>
</p>
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