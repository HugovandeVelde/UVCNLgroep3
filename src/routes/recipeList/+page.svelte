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
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  
    .header {
      text-align: center;
      font-size: 24px;
      margin-bottom: 20px;
    }
  
    .container {
      width: 300px;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-sizing: border-box;
      position: relative;
      background-color: #fff;
      padding: 15px;
      margin-bottom: 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  
    .containerText {
      margin-left: 10px;
      text-decoration: none;
      color: #333;
    }
  
    .containerText:hover {
      color: #007bff;
    }
  
    .title {
      margin-bottom: 20px;
      margin-top: 20px;
      color: #333;
    }
  
    .klokImg {
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }
  
    .nameContainer {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  
    .name {
      margin: 0;
      flex-grow: 1;
    }
  
    .prepTimeContainer {
      display: flex;
      align-items: center;
    }
  
    .prepTimeText {     
    }
  </style>
  
  <div class="dashboard">
    <div class="header">
      <h1 class="title">Recipes:</h1>
    </div>
    <ol>
      {#each requestedAllRecipeData as recipe}
      <div class='container'>
        <div class="nameContainer">
          <a class='containerText name' href='http://localhost:5173/recipe/{recipe.id - 1}'>{recipe.name}</a>
        </div>
        <div class="prepTimeContainer">
          <img src='./../src/img/klok.png' alt='klok' class='klokImg'>
          <p class='containerText prepTimeText'>{recipe.prepTime}</p>
        </div>
      </div>
      {/each}
    </ol>
  </div>