
<template>
  <form style="border:1px solid #ccc">
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="firstName"><b>FirstName</b></label>
    <input type="text" placeholder="Enter First Name" name="firstName" id="firstName" v-model="firstName" required>

    <label for="lastName"><b>LastName</b></label>
    <input type="text" placeholder="Enter Last Name" name="lastName" id="lastName" v-model="lastName" required>

    <label for="handle"><b>Handle</b></label>
    <input type="text" placeholder="Enter Handle" name="handle" id="handle" v-model="handle" required>

    <label for="picture"><b>Picture</b></label>
    <input type="url" placeholder="Enter Picture" name="picture" id="picture" v-model="picture" required>
    <br>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" id="password"  v-model="password" required>

    <hidden type="boolean" name="isAdmin" id="isAdmin" v-model="isAdmin"></hidden>

    <label for="emails"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" v-model="emails" required >
    
    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
    </label>
    
    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn" @click.prevent="signup" >Sign Up</button>
    </div>
  </div>
</form>
</template>

<script>
import { Add } from '../services/users';
export default {
    data (){
        return ({ 
          
            firstName: null,
            lastName: null,
            handle: null,
            picture:null,
            password: null,
            isAdmin: false,
            emails: null,
        })
    },
    methods: {
        async signup(){
          const response = await Add( { firstName: this.firstName, lastName: this.lastName, handle: this.handle, pic: this.picture, password: this.password, isAdmin: this.isAdmin} );
            console.log(response);
            if(response)
            {
              this.$router.push('/login');
            }
            
        }
    },
}
</script>

<style>
/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
</style>