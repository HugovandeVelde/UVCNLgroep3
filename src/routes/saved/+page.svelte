<script>
    import { onMount } from 'svelte';
    import { requestedAllRecipeData } from "../../lib/index";
    let recipes = requestedAllRecipeData;
    onMount(async () => {
        const res = await fetch("http://localhost:4006/recipes/");
		recipes = await res.json();
	});
</script>

<div class="dashboard">
    <div class="logo">
        <!-- Your logo -->
        <img src="/src/img/logo.png" alt="Our Logo" class="max-w-full" />
    </div>
    <div class="header text-center mb-8">
        <h1 class="text-4xl font-bold">Saved Recipes</h1>
    </div>
    <div class="flex flex-col items-center w-full mt-4 mx-auto">
        {#each recipes as recipe}
            <div class="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 mb-4">
                <a href={`http://localhost:5173/recipe/${recipe.id}`} class="block rounded overflow-hidden hover:bg-gray-100 shadow-md">
                    <div class="flex flex-col items-center p-4">
                        <p class="text-xl font-semibold">{recipe.name}</p>
                        <!-- Optionally, add more details here -->
                    </div>
                </a>
            </div>
        {/each}
    </div>
</div>

<style>
    /* You can keep any additional styles or global styles here if needed */
</style>
