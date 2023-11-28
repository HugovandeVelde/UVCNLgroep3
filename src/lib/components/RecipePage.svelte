<!-- YourComponent.svelte -->
<script>
  import RecipeJavascript from '../components/RecipeJavascript.svelte';
import ExternalScript from '../components/RecipeJavascript.svelte';

let steps = [
    "Stap 1: Kook de spaghetti\nBreng een grote pan met water aan de kook.\nVoeg een snufje zout toe aan het kokende water.\nKook de spaghetti volgens de aanwijzingen op de verpakking totdat het beetgaar is.\nGiet de spaghetti af in een vergiet en zet deze opzij.",
    "Stap 2: Rooster de pijnboompitten\nVerhit een koekenpan op middelhoog vuur.\nVoeg de pijnboompitten toe en rooster ze gedurende ongeveer 3 minuten, of tot ze goudbruin zijn.\nHaal de geroosterde pijnboompitten van het vuur en leg ze op een bord om af te koelen.",
    "Stap 3: Maak de pesto\nPlaats de geroosterde pijnboompitten, geraspte kaas en knoflook in een keukenmachine.\nVoeg de verse basilicumblaadjes en olijfolie toe.\nPulseer de ingrediënten in de keukenmachine tot een smeuïge pesto ontstaat.\nBreng de pesto op smaak met peper en zout.",
    "Stap 4: Combineer met de spaghetti\nSchep ongeveer 4 eetlepels van de pesto door de gekookte spaghetti en meng goed.",
    "Stap 5: Serveer\nVerdeel de met pesto gegarneerde spaghetti over 6 borden.\nOptioneel: Garneer met extra kaas en basilicumblaadjes voor een aantrekkelijke presentatie.\nServeer de gerechten onmiddellijk. Eet smakelijk!"
  ];

  let currentStep = 0;

  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep += 1;
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      currentStep -= 1;
    }
  }

  import { goto } from '$app/navigation';

function navigateToAnotherPage() {
  // Replace '/your-target-page' with the path of the page you want to navigate to
  goto('recipeSteps');
}
</script>
<style>
  /* Add TailwindCSS classes */
  /* For mobile screens */
  @media (max-width: 640px) {
    .mobile-bg {
      background-color: #b9f6ca; /* Light green color */
      /* You can customize this color by changing the hex code */
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px; /* Adjust this padding as needed */
    }
    .welcome-text {
      /* Style for the welcome text */
      font-size: 24px;
      text-align: center;
      margin-bottom: 20px; /* Adjust space between text and boxes */
    }
    .boxes-container {
      /* New class for the container holding the boxes */
      display: flex;
      justify-content: space-around; /* Adjust alignment of boxes */
      width: 100%; /* Take full width */
    }
    .box {
    /* Style for the boxes */
   
    border: 2px solid #000; /* Border around the boxes */
    margin-bottom: 20px; /* Adjust space between boxes */
    border-radius: 8px; /* Rounded edges */
    overflow: hidden; /* Ensure content doesn't overflow */
    display: flex; /* Make the box a flex container */
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items horizontally */
    background-color: #50C878;
    max-width: 240px;
    max-height: 200px;
  }
  .box img {
    /* Style for images */
    width: 100%; /* Ensure the image fills the box */
    height: 100%; /* Ensure the image fills the box */
    object-fit: cover; /* Cover the box with the image */
    border-radius: 5px; /* Round the image corners */
  }
    .box-text {
      /* Style for text below images */
      margin: 10px 0; /* Adjust space between image and text */
    }
    .line {
    /* Style for the line */
    width: 100%;
    border-bottom: 1px solid black; /* Line under the image */
    margin-bottom: 10px; /* Adjust space between image and line */
  }
  nav {
  background-color: #087C44;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Set width to 100% for full width */
  position: sticky; /* Fix the navbar position at the top */
  bottom: 0;
  left: 0; /* Align with the left edge */
  z-index: 1000; /* Set a high z-index to ensure it's above other elements */
}

  a {
    text-decoration: none;
    color: white;
    margin: 10px;
  }
  }

  main {
    text-align: center;
    padding: 20px;
  }

  button {
    font-size: 16px;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
  }

  ul {
    list-style: none;
    width: 100%;
    margin-left: 30px;
    font-style: normal;
    font-weight: 400;
    
    line-height: 29px;

    color: #000000;

  }

  li {
    margin-bottom: 10px;
    margin-right: 20px;
  }

  label {
    color: black;
  }

  /* Give each checkbox a black outline */
  input[type="checkbox"] {
    border: 1px solid black;
  }

  
</style>
<main>

<div class="mobile-bg w-screen h-screen">
  <h1 class="welcome-text">Pasta Pesto</h1>
  
  <!-- Boxes container -->
  <div class="boxes-container">
    <!-- Box 1 -->
    <div class="box">
      <img src="./src/img/pastaPesto.png" alt="Image 1" />
      
     
    </div>
  </div>
 
  <h2>Needed ingredients:</h2>
  <!-- YourComponent.svelte -->
<ul>
  <li>
      <input type="checkbox" id="spaghetti">
      <label for="spaghetti">450 g spaghetti</label>
  </li>
  <li>
      <input type="checkbox" id="pijnboompitten">
      <label for="pijnboompitten">3 el pijnboompitten</label>
  </li>
  <li>
      <input type="checkbox" id="ParmigianoReggiano">
      <label for="ParmigianoReggiano">37.5 g Parmigiano Reggiano</label>
  </li>
  <li>
      <input type="checkbox" id="teenknoflook">
      <label for="teenknoflook">1½ teenknoflook</label>
  </li>
  <li>
      <input type="checkbox" id="versebasilicum">
      <label for="versebasilicum">45 g verse basilicum</label>
  </li>
  <li>
      <input type="checkbox" id="olijfolieextravierge">
      <label for="olijfolieextravierge">9 el olijfolie extra vierge</label>
  </li>
</ul>

<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" on:click={navigateToAnotherPage}>Ga naar de Bereidingswijze</button>


  <!-- <h1>Bereidingswijze</h1>
  <h3>{steps[currentStep]}</h3>
  <div class="flex justify-between">
  <button button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={prevStep} disabled={currentStep === 0}>Vorige stap</button>
  <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" on:click={nextStep} disabled={currentStep === steps.length - 1}>Volgende stap</button>
 </div> -->


</div>  
<RecipeJavascript />
</main>