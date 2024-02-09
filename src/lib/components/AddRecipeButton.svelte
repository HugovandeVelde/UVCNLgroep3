<!-- lib/components/AddRecipeButton.svelte -->
<script>
  import { navigate } from 'svelte-routing';

  const addRecipe = () => {
    // Navigate to the page where users can add a new recipe
    navigate('/add-recipe');
  };
</script>

<button on:click={addRecipe}>
  Add Recipe
</button>
