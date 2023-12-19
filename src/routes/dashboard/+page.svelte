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
    padding: 20px; /* Add some padding for better spacing */
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
        width: 150px; /* Fixed width of 250 pixels */
        height: 150px; /* Fixed height of 250 pixels */
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
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
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
    width: 45%; /* Adjust button width for better spacing */
    max-width: 200px;
    text-align: center;
}

.logo {
    width: 100%; /* Adjust logo to fill the container */
    text-align: center;
    margin-bottom: 20px;
}

.logo img {
    max-width: 100%;
    height: auto;
}

</style>

<div class="dashboard">

    <div class="header">
        <h1>Welcome back, (name)!</h1>
    </div>
    
    <div class="logo">
        <!-- Add the URL to your logo here -->
        <img src="/src/img/logo.png" alt="Our Logo">
    </div>

    <div class="header">
        <h1>Search Recipes</h1>
        <a href="/search">
            <button class="search-button">Search Page</button>
        </a>
    </div>
    

    <div class="header">
        <h1>Recommended Recipes</h1>    
    </div>

    <div class="recommended">
        <!-- Horizontally scrolling recommended recipes -->
        <div class="recommended-item">
            <h3>{requestedAllRecipeData[2].name}</h3>
            <!-- More information about recommended recipe 1 -->
        </div>
        <div class="recommended-item">
            <h3>{requestedAllRecipeData[2].name}</h3>
            <!-- More information about recommended recipe 2 -->
        </div>
        <div class="recommended-item">
            <h3>{requestedAllRecipeData[3].name}</h3>
            <!-- More information about recommended recipe 3 -->
        </div>
        <div class="recommended-item">
            <h3>{requestedAllRecipeData[4].name}</h3>
            <!-- More information about recommended recipe 4 -->
        </div>
        <div class="recommended-item">
            <h3>{requestedAllRecipeData[5].name}</h3>
            <!-- More information about recommended recipe 5 -->
        </div>
        <!-- Add more recommended recipes here -->
    </div>

    <div class="account-buttons">
        <button class="account-button">
            <a href="/account">
                My Account
            </a>
        </button>
        <button class="account-button">History</button>
        <button class="account-button">Friends List</button>
        <button class="account-button">Saved Recipes</button>
    </div>

    <!-- Other sections or components for your dashboard -->
</div>
