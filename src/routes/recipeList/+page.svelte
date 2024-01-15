<script>
    import { onMount } from 'svelte';
    import BottomBar from "../../lib/components/BottomBar.svelte";
    import { requestedAllData } from "../../lib/users";
    import { requestedAllRecipeData } from "../../lib/index";
    console.log(requestedAllData);
    let recipes = requestedAllRecipeData;
    console.log(requestedAllRecipeData);
<<<<<<< HEAD
=======
    onMount(async () => {
        const res = await fetch("http://localhost:4006/recipes/");
		recipes = await res.json();
	});

>>>>>>> dc2ce86c6c8a1618780dabe4d076e335a9d347fb
</script>

<div class="dashboard">
    <div class="logo">
        <!-- Your logo -->
        <img src="/src/img/logo.png" alt="Our Logo" />
    </div>
    <div class="header">
        <h1>Search Results:</h1>
    </div>
    <div class="recipe-container">
        {#each recipes as recipe}
            <div class="recipe-item">
                <a href={`http://localhost:5173/recipe/${recipe.id}`}>
                    <div class="recipe-box">
                        <!-- Box content for recipe -->
                    </div>
                    <p>{recipe.name}</p>
                </a>
            </div>
        {/each}
    </div>
    <ol>
        {#each requestedAllRecipeData as recipe}
            <div class="container">
                <div class="nameContainer">
                    <a
                        class="containerText name"
                        href="/recipe/{recipe.id - 1}"
                        >{recipe.name}</a
                    >
                </div>
                <div class="prepTimeContainer">
                    <img
                        src="./../src/img/klok.png"
                        alt="klok"
                        class="klokImg"
                    />
                    <p class="containerText prepTimeText">{recipe.prepTime}</p>
                </div>
            </div>
        {/each}
    </ol>
</div>

<style>
    /* Styles for your dashboard layout */
    .dashboard {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px; /* Add padding to create space from the top */
        font-family: Arial, sans-serif;
    }

    .header {
        text-align: center;
        font-size: 24px;
        margin-bottom: 20px;
    }

    .logo {
        width: 250px;
        margin-bottom: 20px;
        text-align: center;
    }

    .logo img {
        max-width: 100%;
        height: auto;
    }

    .recipe-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 90%;
        max-width: 800px;
        margin-top: 20px;
    }

    .recipe-item {
        width: calc(50% - 10px);
        margin-bottom: 20px;
        box-sizing: border-box;
        text-align: center; /* Center align text */
    }

    .recipe-item p {
        margin: 5px 0;
    }

    .recipe-box {
        width: 100%;
        height: 200px; /* Adjust the height of the clickable box */
        border: 1px solid #ccc;
        border-radius: 5px;
        text-align: center;
        box-sizing: border-box;
        position: relative;
        cursor: pointer;
    }

    .recipe-box:hover {
        /* Add hover effects if desired */
        background-color: #f0f0f0;
    }

    /* .recipe-box p {
        margin: 5px 0;
    } */

    /* Adjust image styles if using images in the box */
    /* .recipe-box img {
        max-width: 100%;
        height: auto;
    } */

    /* For screens smaller than 768px (typical mobile devices) */
    @media (max-width: 768px) {
        .recipe-item {
            width: 100%; /* Occupy full width on smaller screens */
        }

        .recipe-box {
            height: 150px; /* Reduce box height for smaller screens */
        }
    }
</style>