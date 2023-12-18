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
  
      .search-button {
          padding: 15px 25px;
          font-size: 16px;
          background-color: #3498db;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 20px;
      }
  
      .recommended {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
      }
  
      .recommended-item {
          width: 250px; /* Fixed width of 250 pixels */
          height: 250px; /* Fixed height of 250 pixels */
          border: 1px solid #ccc;
          border-radius: 5px;
          text-align: center;
          box-sizing: border-box;
          position: relative;
      }
  
      .recommended-item h3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          margin: 0;
      }
  
      .account-buttons {
          display: flex;
          justify-content: space-around;
          width: 80%;
          max-width: 600px;
          margin-bottom: 20px;
      }
  
      .account-button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #2ecc71;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin: 10px;
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
        <a href='http://localhost:5173/recipe/1'>{requestedAllRecipeData[1].name}</a>   
        <a href='http://localhost:5173/recipe/2'>{requestedAllRecipeData[2].name}</a>   
        <a href='http://localhost:5173/recipe/3'>{requestedAllRecipeData[3].name}</a>   
        <a href='http://localhost:5173/recipe/4'>{requestedAllRecipeData[4].name}</a>   
        <a href='http://localhost:5173/recipe/5'>{requestedAllRecipeData[5].name}</a>   
      </ol>
    </div>