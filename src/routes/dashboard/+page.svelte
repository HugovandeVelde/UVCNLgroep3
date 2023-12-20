<div class="flex flex-col items-center justify-center min-h-screen font-sans">

<script>
  import BottomBar from "../../lib/components/BottomBar.svelte";
    import { requestedAllData } from '../../lib/users';
    import { requestedAllRecipeData } from '../../lib/index';
    console.log(requestedAllData)
</script>


<div class="dashboard">

    <div class="header">
        <h1>Welcome back, (name)!</h1>
    </div>
    
    <div class="w-72 mb-8 mx-auto">
        <!-- Add the URL to your logo here -->
        <img src="/src/img/logo.png" alt="Our Logo" class="max-w-full h-auto">
    </div>

    <div class="text-center text-xl mb-5">
        <h1>Search Recipes</h1>
        <a href="/search">
            <button class="search-button">Search Page</button>
        </a>
        <button class="py-3 px-4 text-lg bg-blue-500 text-white rounded cursor-pointer mb-8">Search Page</button>
    </div>

    <div class="header">
        <h1>Recommended Recipes</h1>    
    </div>

    <div class="flex flex-wrap justify-center gap-4 mb-8">
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
</div>