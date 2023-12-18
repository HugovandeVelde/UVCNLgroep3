<!-- YourComponent.svelte -->
<script>
    
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

  main {
    text-align: center;
    padding: 0px;
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
    font-style: normal;
    font-weight: 400;
    
    line-height: 29px;

    color: #000000;

  }

    .profile-border {
    border: 2px solid #10B981; /* Use the same color as border-green-500 in Tailwind */
    display: flex;
    align-items: center;
    padding: 1rem;
  }
  .profile-info {
    flex-grow: 1; /* Allow the text to take remaining space */
  }

  .profile-info h3 {
    font-size: 1.5rem; /* Adjust the font size as needed */
    font-weight: bold;
  }}
</style>
<main> 

<div class="mobile-bg w-screen">
      </div>
  <div class="profile-border">
    <!-- Profile Image -->
    <!-- Profile Info -->
    <div class="profile-info">
        <h3>[recipename]</h3>
        <p>[username]</p>
    </div>
</div>
  <h2>[step nr.]</h2>
  <h3>[step instruction]</h3>
  <h2>[step nr.]</h2>
  <h3>[step instruction]</h3>
  <h2>[step nr.]</h2>
  <h3>[step instruction]</h3>
  <h2>[step nr.]</h2>
  <h3>[step instruction]</h3>
  <!-- YourComponent.svelte -->


<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" on:click={navigateToAnotherPage}>Ga naar de Bereidingswijze</button>


  <!-- <h1>Bereidingswijze</h1>
  <h3>{steps[currentStep]}</h3>
  <div class="flex justify-between">
  <button button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={prevStep} disabled={currentStep === 0}>Vorige stap</button>
  <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" on:click={nextStep} disabled={currentStep === steps.length - 1}>Volgende stap</button>
 </div> -->


</main>