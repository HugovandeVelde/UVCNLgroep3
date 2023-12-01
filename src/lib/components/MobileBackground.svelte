<div class="mobile-bg w-screen h-screen">
  <h1 class="welcome-text">Welkom bij Eat'nShare</h1>

  <!-- Boxes container -->
  <div class="boxes-container">
    <!-- Box 1 -->
    <div class="box">
      <img src="./src/img/pastaPesto.png" alt="Image 1" />
      <div class="line"></div>
      <div class="box-text">Pasta pesto</div>
    </div>

    <!-- Box 2 -->
    <div class="box">
      <img src="./src/img/kipTeriyaki.png" alt="Image 2" />
      <div class="line"></div>
      <div class="box-text">Kip teriyaki</div>
    </div>

    <!-- Box 3 -->
    <div class="box">
      <img src="./src/img/shoarmaBowl.png" alt="Image 3" />
      <div class="line"></div>
      <div class="box-text">Shoarma bowl</div>
    </div>
  </div>

  <!-- <nav class="bg-gray-800 p-4">
      
      <div class="container mx-auto flex justify-between items-center">
        
        <img src="./src/img/shariqueen.png" alt="Profile Image" />
    
        
        <div class="space-x-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            yo mama
          </button>
        </div>
      </div>
    </nav> -->
  <nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Branding/Logo -->
      <a href="#" class="text-white text-xl font-bold">My Website</a>

      <!-- Navigation Links -->
      <div class="space-x-4">
        <a href="#" class="text-white">Home</a>
        <a href="#" class="text-white">About</a>
        <a href="#" class="text-white">Services</a>
      </div>
    </div>
  </nav>
</div>

<!-- YourComponent.svelte -->

<style>
  /* Add TailwindCSS classes */
  /* For mobile screens */
  @media (max-width: 640px) {
    .mobile-bg {
     
    }
    .welcome-text {
      /* Style for the welcome text */
      font-size: 24px;
      text-align: center;
      margin-bottom: 20px; /* Adjust space between text and boxes */
    }
    .box {
      /* Style for the boxes */
      width: 30%; /* Adjust box width */
      border: 2px solid #000; /* Border around the boxes */
      margin-bottom: 20px; /* Adjust space between boxes */
      border-radius: 8px; /* Rounded edges */
      overflow: hidden; /* Ensure content doesn't overflow */
      display: flex; /* Make the box a flex container */
      flex-direction: column; /* Stack items vertically */
      align-items: center; /* Center items horizontally */
      background-color: #50c878;
    }
    .box img {
      /* Style for images */
      width: 100%; /* Ensure the image fills the box */
      height: 100%; /* Ensure the image fills the box */
      object-fit: cover; /* Cover the box with the image */
      border-radius: 5px; /* Round the image corners */
    }
    .box-text {
      /* Style for text below images */
      margin: 10px 0; /* Adjust space between image and text */
    }
    .line {
      /* Style for the line */
      width: 100%;
      border-bottom: 1px solid black; /* Line under the image */
      margin-bottom: 10px; /* Adjust space between image and line */
    }
  }

  </style>