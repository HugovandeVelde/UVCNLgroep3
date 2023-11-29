<script>
    let activeTab = 'account'; // Set the default active tab
    
    function setActiveTab(tab) {
      activeTab = tab;
      // You can add logic here to handle tab changes, such as navigating to different routes or displaying different content
    }
  </script>
  
  <style>
    /* You can add Tailwind classes directly or import Tailwind in a separate file */
  </style>
  
  <div class="fixed bottom-0 w-full bg-green-500 flex justify-around py-3">
    <!-- Account Tab -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="flex-1 text-center cursor-pointer" class:font-bold={activeTab === 'search'} on:click={() => setActiveTab('search')}>
        <!-- SVG Search Icon -->
        <svg
          class="w-6 h-6 inline-block mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span>Search</span>
      </div>
    
    <!-- Saved Tab -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
     <!-- svelte-ignore a11y-missing-content -->
     <a href="http://localhost:5173/account" class="flex-1 text-center cursor-pointer" class:font-bold={activeTab === 'account'} on:click={() => setActiveTab('account')}>
        <img src="./src/img/kipTeriyaki.png" alt="Profile" class="w-6 h-6 rounded-full inline-block mr-2">
      </a>
    
    <!-- Search Tab -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="flex-1 text-center cursor-pointer" class:font-bold={activeTab === 'saved'} on:click={() => setActiveTab('saved')}>
        <!-- SVG Bookmark Icon -->
        <svg
          class="w-6 h-6 inline-block mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 3v18l7-5 7 5V3"></path>
        </svg>
        <span>Saved</span>
      </div>
      
  </div>
  