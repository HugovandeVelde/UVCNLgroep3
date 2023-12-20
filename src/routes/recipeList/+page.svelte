<script>
    import BottomBar from "../../lib/components/BottomBar.svelte";
      import { requestedAllData } from '../../lib/users';
      import { requestedAllRecipeData } from '../../lib/index';
      console.log(requestedAllData)
  </script>
  
  <style>
      /* Styles for your dashboard layout */
      .dashboard {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          font-family: Arial, sans-serif;
      }
  
      .header {
          text-align: center;
          font-size: 20px;
          margin-bottom: 10px;
      }
      .logo {
          width: 450px; /* Custom size of the logo */
          margin-bottom: 20px;
          text-align: center; /* Centering the logo */
      }
      
      .logo img {
          max-width: 100%; /* Keeps the logo within the specified width */
          height: auto;
      }
  
  </style>
  
  <div class="dashboard">
      
      <div class="logo">
          <!-- Add the URL to your logo here -->
          <img src="/src/img/logo.png" alt="Our Logo">
      </div>
      <div class="header">
          <h1>Recipes:</h1>    
      </div>
      <ol>
        {#each requestedAllRecipeData as recipe}
        <a href='http://localhost:5173/recipe/{recipe.id}'>{recipe.name}</a>  
        <br>
        {/each}
      </ol>
    </div>