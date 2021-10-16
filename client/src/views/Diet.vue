<template>
  <div class="row">
  <div class="column">
    <h1><strong>Fruits</strong></h1>
    <p>Fresh, frozen, or canned fruits are great choices. 
        Try fruits beyond apples and bananas such as mango, pineapple or kiwi fruit. 
        When fresh fruit is not in season, try a frozen, canned, or dried variety. 
        Be aware that dried and canned fruit may contain added sugars or syrups. 
        Choose canned varieties of fruit packed in water or in its own juice.</p>
  </div>
  
  <div class="column">
    <h1><strong>Vegtables</strong></h1>
    <p>Add variety to grilled or steamed vegetables with an herb such as rosemary. 
        You can also sauté (panfry) vegetables in a non-stick pan with a small amount of cooking spray. 
        Or try frozen or canned vegetables for a quick side dish—just microwave and serve. 
        Look for canned vegetables without added salt, butter, or cream sauces. 
        For variety, try a new vegetable each week.</p>
  </div>
  
  <div class="column">
    <h1><strong>Meats</strong></h1>
    <p>If your favorite recipe calls for frying fish or breaded chicken, 
        try healthier variations by baking or grilling. 
        Maybe even try dry beans in place of meats. 
        Ask friends and search the internet and magazines for recipes with fewer calories ― 
        you might be surprised to find you have a new favorite dish!</p>
  </div>
  <div class="column">
    <h1><strong>Comfort Foods</strong></h1>
    <p>Healthy eating is all about balance. You can enjoy your favorite foods, 
        even if they are high in calories, fat or added sugars. 
        The key is eating them only once 
        in a while and balancing them with healthier foods and more physical activity.</p>
  </div>
  <div class="picture">
    <img src = "../assets/fruits.jpg"  height="8">
  </div>

</div>
</template>

<script>
export default {
  name: 'Diet',
  components: {
    
  }
}
</script>

<style>
.column {
  float: left;
  width: 50%;
  padding: 15px;
  font-size: 30px;
}
.picture {
  margin-left: auto;
  margin-right: auto;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
  border: black;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width:600px) {
  .column {
    width: 100%;
  }
}
</style>