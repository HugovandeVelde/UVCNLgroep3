<!-- Account.svelte -->
<script>
  import { onMount } from "svelte";
  import BackButton from "../../lib/components/BackButton.svelte";
  import BottomBar from "../../lib/components/BottomBar.svelte";
  import { createClient } from "@supabase/supabase-js";
  const supabaseUrl = "https://ejgeorrwvtzqlbaxbnut.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZ2VvcnJ3dnR6cWxiYXhibnV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0NzAwNjIsImV4cCI6MjAyMzA0NjA2Mn0.iB81lYinhUuK8cGwWVFIoI3-26qiuAf6TLpX5T3r318";
  const supabase = createClient(supabaseUrl, supabaseKey);
  let currentUser = 1;
  let friends = "";

  
  onMount(async () => {
    const { data, error } = await supabase
      .from("Friends")
      .select("*")

    if (error) {
      console.error("Error fetching Friends:", error.message);
    } else {
      friends = data;
      console.log("Fetched friends:", friends);
    }
  }); 
  let users = "";
  onMount(async () => {
    const res = await fetch("http://localhost:4006/users/");
    users = await res.json();
    console.log(users);
  });

  async function deleteData(id) {
    const { error } = await supabase
      .from("Friends")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting friend:", error.message);
    } else {
      console.log("Friend deleted successfully");
      // Fetch updated reviews after deletion
      const { data, error } = await supabase
        .from("Friends")
        .select("*")
        .eq("id", id);

      if (error) {
        console.error("Error fetching friends after deletion:", error.message);
      } else {
        friends = data;
        console.log("Updated friend after deletion:", friends);
      }
    }
  }
</script>

<main class="bg-[#F0FFEA]">
  <BackButton />
  <div class="bg-[#F0FFEA] flex flex-col min-h-screen pt-5 pb-24">
    <div class="text-center">
      <h1 class="font-semibold">Mijn vrienden</h1>
    </div>

    <!-- haalt alle verzoekken op die de gebuiker heeft gekregen en die geaccepteerd zijn  -->

    {#each friends as friend}
      {#if friend.recieverID === currentUser && friend.status === "accepted"}
        <div class="snap-center flex">
          <div class="border border-gray-500 rounded-lg w-5/6 ml-10 mt-10">
            <img
              src="./../src/img/profilePick.png"
              alt="klok"
              class="w-24 inline-block float-right"
            />

            {#each users as user}
              {#if user.id === friend.senderID}
                <h2 class="ml-8 mt-2 text-xl font-semibold">{user.name}</h2>

                <p></p>
                <div
                  class="ml-4 mb-2 mt-6 w-auto inline-block pl-1 pr-2 bg-gray-400 rounded-lg"
                >
                  <button on:click={deleteData(+friend.senderID)} class="p-1 pr-4 pl-4"
                    >Verwijderen</button
                  >
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/if}

      <!-- haalt alle verzoekken op die de gebuiker heeft gekregen en die geaccepteerd zijn  -->

      {#if friend.senderID === currentUser && friend.status === "accepted"}
        <div class="snap-center flex">
          <div class="border border-gray-500 rounded-lg w-5/6 ml-10 mt-10">
            <img
              src="./../src/img/profilePick.png"
              alt="klok"
              class="w-24 inline-block float-right"
            />

            {#each users as user}
              {#if user.id === friend.recieverID}
                <h2 class="ml-8 mt-2 text-xl font-semibold">{user.name}</h2>

                <p></p>
                <div
                  class="ml-4 mb-2 mt-6 w-auto inline-block pl-1 pr-2 bg-gray-400 rounded-lg"
                >
                  <button on:click={deleteData(friend.id)} class="p-1 pr-4 pl-4"
                    >Verwijderen</button
                  >
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </div>
  <BottomBar />
</main>

<style>
  /* Include Tailwind CSS classes */
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";
</style>
