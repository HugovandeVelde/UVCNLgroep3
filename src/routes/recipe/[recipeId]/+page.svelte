<!-- YourComponent.svelte -->
<script>
    import { page } from '$app/stores'
    import { requestedAllData } from '../../../lib/users';
    import { requestedAllRecipeData } from '../../../lib/index';
    const recipeId = $page.params.recipeId;
    let recipe
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
        background-color: #50c878;
        max-width: 240px;
        max-height: 200px;
      }
  
      main {
        text-align: center;
        padding: 0px;
      }
  
      .profile-border {
        border: 2px solid #10b981; /* Use the same color as border-green-500 in Tailwind */
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
      }
    }
  </style>
  
<main>
  {recipe = requestedAllRecipeData[recipeId]}
  <div class="mobile-bg w-screen"></div>
  <div class="profile-border">
    <!-- Profile Image -->
    <!-- Profile Info -->
    <div class="profile-info">
      <h3>{recipe.name}</h3>
      <p>{recipe.creator_id}</p>
      <p>[tijd voor het maken]</p>
      <p>[voedingswaarden]</p>
    </div>
  </div>

  <div>
    <h2>[Ingredient name] [hoeveelheid]</h2>
    <br />
    <h2>[Ingredient name] [hoeveelheid]</h2>
    <br />
    <h2>[Ingredient name] [hoeveelheid]</h2>
    <br />
    <h2>[Ingredient name] [hoeveelheid]</h2>
    <br />
    <h2>[Ingredient name] [hoeveelheid]</h2>
    <br />
    <div>
      <h2>[step nr.]</h2>
      <h3>[step instruction]</h3>
      <h2>[step nr.]</h2>
      <h3>[step instruction]</h3>
      <h2>[step nr.]</h2>
      <h3>[step instruction]</h3>
      <h2>[step nr.]</h2>
      <h3>[step instruction]</h3>
      <!-- YourComponent.svelte -->

      <!-- <h1>Bereidingswijze</h1>
  <h3>{steps[currentStep]}</h3>
  <div class="flex justify-between">
  <button button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={prevStep} disabled={currentStep === 0}>Vorige stap</button>
  <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" on:click={nextStep} disabled={currentStep === steps.length - 1}>Volgende stap</button>
 </div> -->
    </div>
  </div>
</main>
