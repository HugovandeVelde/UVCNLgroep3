<!-- YourComponent.svelte -->

<style>
    /* Add TailwindCSS classes */
    /* For mobile screens */
    @media (max-width: 640px) {
      .mobile-bg {
        background-color: #b9f6ca; /* Light green color */
        /* You can customize this color by changing the hex code */
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px; /* Adjust this padding as needed */
      }
      .welcome-text {
        /* Style for the welcome text */
        font-size: 24px;
        text-align: center;
        margin-bottom: 20px; /* Adjust space between text and boxes */
      }
      .boxes-container {
        /* New class for the container holding the boxes */
        display: flex;
        justify-content: space-around; /* Adjust alignment of boxes */
        width: 100%; /* Take full width */
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
      background-color: #50C878;
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
  
  <div class="mobile-bg w-screen h-screen">
    <h1 class="welcome-text">Welkoom bij Eat'nShare</h1>
    
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
  </div>  