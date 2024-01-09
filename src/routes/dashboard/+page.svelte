<!--dashboard.svelte-->
<script>
    import BottomBar from "../../lib/components/BottomBar.svelte";
      import { requestedAllData } from '../../lib/users';
      import { requestedAllRecipeData } from '../../lib/index';
      console.log(requestedAllData)
  </script>
  
  <div class="flex flex-col items-center p-5 font-sans">
  
      <div class="text-center text-lg mb-2.5">
          <h1>Welcome back, (name)!</h1>
      </div>
      
      <div class="w-full text-center mb-5">
          <!-- Add the URL to your logo here -->
          <img src="/src/img/logo.png" alt="Our Logo" class="max-w-full h-auto">
      </div>
  
      <div class="text-center text-lg mb-2.5">
          <h1>Search Recipes</h1>
          <a href="/search">
              <button class="px-6 py-3.5 text-base bg-blue-500 text-white rounded-lg cursor-pointer mb-5">Search Page</button>
          </a>
      </div>
  
      <div class="text-center text-lg mb-2.5">
          <h1>Recommended Recipes</h1>    
      </div>
  
      <div class="flex flex-col items-center mb-5">
    <!-- Row 1 -->
    <div class="w-32 h-32 border border-gray-300 rounded-lg text-center box-border relative">
        <a href="/recipe/1" class="flex flex-row justify-center gap-5 mb-5">
            <h3>{requestedAllRecipeData[1].name}</h3>
            <!-- More information about recommended recipe 1 -->                                
        </a>        
        </div>
        <div class="w-32 h-32 border border-gray-300 rounded-lg text-center box-border relative">
            <a href="/recipe/2" class="flex flex-row justify-center gap-5 mb-5">
            <h3>{requestedAllRecipeData[2].name}</h3>
            <!-- More information about recommended recipe 2 -->
        </a>
        </div>
    </div>
    <!-- Row 2 -->
    <div class="flex flex-row justify-center gap-5 mb-5">
        <div class="w-32 h-32 border border-gray-300 rounded-lg text-center box-border relative">
            <a href="/recipe/3" class="flex flex-row justify-center gap-5 mb-5">
            <h3>{requestedAllRecipeData[3].name}</h3>
            <!-- More information about recommended recipe 3 -->
        </a>
        </div>
        <div class="w-32 h-32 border border-gray-300 rounded-lg text-center box-border relative">
            <a href="/recipe/4" class="flex flex-row justify-center gap-5 mb-5">
            <h3>{requestedAllRecipeData[4].name}</h3>
            <!-- More information about recommended recipe 4 -->
        </a>
        </div>
    </div>

    <!-- Additional rows as needed -->
    <!-- For odd number of recipes, the last row will have one item -->
    <div class="flex flex-row justify-center gap-5 mb-5">
        <div class="w-32 h-32 border border-gray-300 rounded-lg text-center box-border relative">
            <a href="/recipe/5" class="flex flex-row justify-center gap-5 mb-5">
            <h3>{requestedAllRecipeData[5].name}</h3>
            <!-- More information about recommended recipe 5 -->
        </a>
        </div>
    </div>
</div>

  
     <BottomBar />
  
      <!-- Other sections or components for your dashboard -->

  