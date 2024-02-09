<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { createClient } from "@supabase/supabase-js";
  import { writable } from 'svelte/store';
  import BackButton from "../../../lib/components/BackButton.svelte";
  import BottomBar from "../../../lib/components/BottomBar.svelte";

  // Initialize Supabase client with your Supabase credentials
  const supabaseUrl = "https://xgzhtopobzflsyffhwjn.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhnemh0b3BvYnpmbHN5ZmZod2puIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczOTU2MjksImV4cCI6MjAyMjk3MTYyOX0.aAiboJ2kFCARhYMvbq4MusUsr4WoqagqXTuOHdz2XVY";
  const supabase = createClient(supabaseUrl, supabaseKey);

  

  let reviews = [];
  const reviewId = +$page.params.reviewId;
  console.log(reviewId);

  // Initialize writable store to hold the form data
  const reviewFormData = writable({
    name: '',
    description: '',
    score: '',
  });

  let users = "";
  onMount(async () => {
    const res = await fetch("http://localhost:4006/users/");
    users = await res.json();
    console.log(users);
  });

  let currentUser = 1;

  // Fetch reviews from Supabase
  onMount(async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("creator_id", reviewId);

    if (error) {
      console.error("Error fetching reviews:", error.message);
    } else {
      reviews = data;
      console.log("Fetched reviews:", reviews);
    }
  });

  // Function to post data to Supabase
  async function postData() {
    console.log("hi");
    const formData = $reviewFormData; // Accessing the current value of the store
    const data = {
      creator_id: reviewId,
      name: formData.name,
      description: formData.description,
      score: formData.score,
    };

    const { data: newReview, error } = await supabase
      .from("reviews")
      .upsert([data]);

    if (error) {
      console.error("Error posting data:", error.message);
    } else {
      console.log("Data posted:", newReview);
    }
    window.location.replace(`http://localhost:5173/review/${reviewId}`);
    
  }

  // Function to delete review from Supabase
  async function deleteReview(id) {
    const { error } = await supabase
      .from("reviews")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting review:", error.message);
    } else {
      console.log("Review deleted successfully");
      // Fetch updated reviews after deletion
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("creator_id", reviewId);

      if (error) {
        console.error("Error fetching reviews after deletion:", error.message);
      } else {
        reviews = data;
        console.log("Updated reviews after deletion:", reviews);
      }
    }
  }
</script>
<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="bg-[#F0FFEA]">
    <BackButton />
  </div>
  <main class="bg-[#F0FFEA] flex flex-col items-center justify-center min-h-screen pt-5">
    <h1 class="text-2xl font-bold mb-6 mt-4">Reviews</h1>

    <div class="line mb-6"></div>
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md border-black mb-6">
      <h1 class="text-2xl font-bold mb-6">Schrijf een review over deze kok!</h1>
      <form class="mb-4" on:submit|preventDefault={postData}>
        <label class="block mb-4">
          Naam van de Review:
          <input type="text" class="mt-1 block w-full rounded-md border-black" bind:value={$reviewFormData.name} required />
        </label>
        <label class="block mb-4">
          Review Omschrijving:
          <input type="text" class="mt-1 block w-full border-black rounded-md" bind:value={$reviewFormData.description} required />
        </label>
        <label class="block mb-4">
          Review Score:
          <input type="text" class="mt-1 block w-full border-black rounded-md" bind:value={$reviewFormData.score} required />
        </label>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md">Post Review</button>
      </form>
    </div>
    <br>
    {#each reviews as Review }
      <!-- Display reviews based on reviewId -->
      <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md border-black">
        <p class="text-2xl font-bold">{Review.name}</p>
        <p class="mb-2">Review from: {users[currentUser].name}</p>
        <p class="mb-2">Omschrijving: {Review.description}</p>
        <p class="mb-6">Score: {Review.score}</p>
        <button on:click={() => deleteReview(Review.id)} class="bg-red-500 text-white py-2 px-4 rounded-md">Delete Review</button>
      </div>
      <br>
    {/each}
  </main>
  <br>
  <div class="bottombar">
  <BottomBar />
</div>"
<style>
  @media (max-width: 640px) {
    main {
      padding: 0px;
    }
    .bottombar {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    .max-w-md {
      width: 90%;
      margin: 0 auto;
    }
    .border-black {
      border: 1px solid black;
    }
    .max-w-md {
      width: 90%;
      margin: 0 auto;
    }
    .line {
      height: 1px;
      width: 95%;
      margin-left: 2.5%;
      margin-right: 2.5%;
      border: 1px solid black;
    }
  }
</style>