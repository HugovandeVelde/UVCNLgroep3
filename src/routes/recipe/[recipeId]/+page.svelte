<!-- YourComponent.svelte -->
<script>
  import { page } from "$app/stores";
  import { requestedAllData } from "../../../lib/users";
  import { requestedAllRecipeData } from "../../../lib/index";
  const recipeId = $page.params.recipeId;
  let recipe;
</script>

<main>
  <p class='invisible'>{(recipe = requestedAllRecipeData[recipeId])}</p>
  <table width="90%">
    <tr>
      <th colspan="5">
        <h2>{recipe.name}</h2>
      </th>
    </tr>
    <tr>
      <td colspan="5" class='center'>
        {#each requestedAllData as user}
          {#if user.id === recipe.creator_id}
            <h5 class='mb-8'>{user.name}</h5>
          {/if}
        {/each}
      </td>
    </tr>
    </table>
    <div class='line'></div>
    <table>
    <tr>
      <td class="logoVak">
        <img src="./../src/img/klok.png" alt="klok" class="logoImg" />
      </td>
      <td colspan="2">{recipe.prepTime}</td>
    </tr>
    <tr>
      <td class="logoVak">
        <img src="./../src/img/kcalLogo.png" alt="kcal" class="logoImg" />
      </td>
      <td colspan="2">{recipe.energy}</td>
    </tr>
    <tr>
      <td class="logoVak">
        <img src="./../src/img/olieLogo.png" alt="vet" class="logoImg" />
      </td>
      <td colspan="2">{recipe.fat} vetten</td>
    </tr>
    <tr>
      <td class="logoVak">
        <img src="./../src/img/eiwittenLogo.png" alt="eiwit" class="logoImg" />
      </td>
      <td colspan="2">{recipe.proteine} eiwitten</td>
    </tr>
    <tr>
      <td class="logoVak">
        <img src="./../src/img/tarweLogo.png" alt="tarwe" class="logoImg" />
      </td>
      <td colspan="2">{recipe.carbohydrate} koolhydraten</td>
    </tr>
    <tr>
      <td class="logoVak">
        <img src="./../src/img/mixerLogo.png" alt="mixer" class="logoImg" />
      </td>
      <td colspan="2">{recipe.kitchenware}</td>
    </tr>
  </table>
  <div class='line'></div>
  <!-- <div>
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
  <!-- </div>
  </div>  -->
</main>

<style>
  /* Add TailwindCSS classes */
  /* For mobile screens */
  @media (max-width: 640px) {
    main {
      padding: 0px;
    }
  .line {
    height: 1px;
    width: 95%;
    margin-left: 2.5%;
    border: 1px solid black;
  }
    h2 {
      font-size: 1.5rem;
      font-weight: bold;
    }
    h5 {
      font-size: 1.2rem;
      font-weight: bold;
    }
    /* table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
    } */
    .logoImg {
      height: 20px;
      width: 20px;
      display: block; 
      margin-left: 70%; 
      margin-right: auto;
      
    }
    table {
      margin: 5%;
    }
    .logoVak {
      text-align: left;
      width: 30%;
      
    }
    .center{
      text-align: center;
    }
  }
</style>
