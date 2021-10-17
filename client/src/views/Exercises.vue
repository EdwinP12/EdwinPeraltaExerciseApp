<template>
  <div class ="row">
      <div class = "column left">
        <h1><strong>Stretches</strong></h1>
        <p>The most obvious reason to stretch is for your own flexibility. As you get older, your muscles tighten and your range of motion decreases. 
            Improving your flexibility is a perfect way to loosen yourself up, get rid of stiff muscles and make your everyday tasks that much easier.</p>

        <h2><strong>Calf Stretch</strong></h2>
        <p>Calf stretches help to reduce pain, tightness and instability. 
            They help to reduce the risk of injury or conditions such as Achilles Tendonitis, Plantar Fasciitis and Cramp.</p>
        <img src ="../assets/calf-stretch.jpg" width = 300>


        <h2><strong>Quadriceps Stretch</strong></h2>
        <p>Quadricep stretches are a great way to reduce knee pain and help to prevent injuries. 
            Muscle tightness is a common cause of knee pain as it changes the way the forces go through the knee making it more prone to injury.</p>
        <img src ="../assets/quadriceps-stretch.jpg" width = 300>


        <h2><strong>Hamstring Stretch</strong></h2>
        <p> having tight hamstrings puts you at risk of knee pain and injury, so having good flexibility is important. 
            Most people have some tightness in their hamstrings, especially people who spend a lot of their day sitting.</p>
        <img src ="../assets/hamstring-stretch.jpg" width = 300>


        <h2><strong>Knee to Chest Stretch</strong></h2>
        <p>The single knee-to-chest exercise is an easy way to stretch your lower back, hamstrings and glutes.</p>
        <img src ="../assets/kneetochest-stretch.jpg" width = 300>



        <h2><strong>Shoulder Stretch</strong></h2>
        <p>Shoulder stretches can help relieve muscle tension, pain, and tightness in the neck and shoulders. 
            Stiff or tight shoulders can cause discomfort and limit a person’s range of motion.</p>
        <img src ="../assets/shoulder-stretch.jpg" width = 300>
 

        <h2><strong>Lunging Hip Flexor Stretch</strong></h2>
        <p>Lunging Hip Flexor Stretch If you continuously discovered yourself leaning forward or the side instead of standing straight, 
            it is a clear indicator that your hip flexors need training. 
            Tight hip flexors limit blood flow in the various parts of the body that increase the risk of heart problem, 
            stroke, weight gain and many other issues.</p>
        <img src ="../assets/lunging-stretch.jpg" width = 300>
      </div>

      <div class = "column right ">
        <h1><strong>Workouts</strong></h1>
        <p>Daily exercise strengthens your muscles, keeps your bones strong, and improves your skin. 
            And there are more benefits of exercise, such as increased relaxation, 
            better sleep and mood, strong immune function, and more.</p>

            <h2><strong>Barbell Curl</strong></h2>
            <p>The barbell curl is a classic biceps-builder. 
                This exercise targets the biceps and can add serious size and strength to the entire muscle when done correctly. 
                You can curl more weight with the barbell curl than other curl variations as you’re lifting a singular implement with both hands.</p>
            <img src ="../assets/barbell-workout.png" width = 300>

            <h2><strong>Triceps Dip</strong></h2>
            <p> Dips are a proven mass-builder on their own.Dips hit both the chest and triceps, but to favor the tris, 
                keep your body as vertical as possible.
                Don't lean forward and keep those elbows tight to your sides. </p>
            <img src ="../assets/tricept-workout.png" width = 300>
            
            <h2><strong>Bench Press</strong></h2>
            <p>The barbell curl is a classic biceps-builder. 
                This exercise targets the biceps and can add serious size and strength to the entire muscle when done correctly. 
                You can curl more weight with the barbell curl than other curl variations as you’re lifting a singular implement with both hands.</p>
            <img src ="../assets/benchpress-workout.jpg" width = 300>

            <h2><strong>Lat Pulldown</strong></h2>
            <p>Sit down at a lat pulldown station and grab the bar with an overhand grip that's just beyond shoulder width.
                 Without moving your torso, pull your shoulders back and down, and bring the bar down to your chest. 
                Pause, then slowly return to the starting position.</p>
            <img src ="../assets/latpulldown-workout.jpg" width = 300>

            <h2><strong>Leg Press</strong></h2>
            <p>The leg press, a type of resistance training exercise, is an excellent way to strengthen your legs . 
                It's done by pushing your legs against weights on a leg press machine. 
                Like all strength training exercises, leg presses build muscle, reduce the risk of injury, 
                and counteract age-related muscle loss.</p>
            <img src ="../assets/legpress-workout.jpg" width = 300>

            <h2><strong>Calisthenics</strong></h2>
            <p>Calisthenics involve whole body movements; hence, it works on the muscles of the entire body and builds muscular strength.
                It leads to overall energy boosting, better body stamina and high mental concentration.</p>
            <img src ="../assets/calisthenics-workout.jpg" width = 300>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Exercises',
  components: {
    
  }
}
</script>

<style>
.column {
    float: left;
  padding: 10px;
}
/* Left column */
.column.left {
  width: 45%;
  font-size: 25px;
}
/* Right column */
.column.right {
    float: right;
  width: 45%;
  font-size: 25px;
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