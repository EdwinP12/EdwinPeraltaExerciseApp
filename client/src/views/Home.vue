<template>
  <div class="home">
    <div class="container">
    <div class="tips">
      <h1>Tips</h1>
          <ul style="list-style-type:disc">
            <p>Exercise daily for at least an hour.</p>
            <p>Eat the Right Foods and Portion Each Meal. </p>
            <p>Keep Track of Calories and Food Intake Per Day.</p>
            <p>Be Sure to Get Sleep.</p>
            <p>Stay Motivated.</p>
          </ul>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style>
.container {
  position: relative;
}

.tips {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 23px;
  margin-left: auto;
  margin-right: auto;
}
</style>

