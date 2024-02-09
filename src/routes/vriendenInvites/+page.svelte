<!-- Account.svelte -->
<script>
  import { onMount } from "svelte";
  import BackButton from "../../lib/components/BackButton.svelte";
  import BottomBar from "../../lib/components/BottomBar.svelte";
  import { createClient } from "@supabase/supabase-js";
  const supabaseUrl = "https://ejgeorrwvtzqlbaxbnut.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZ2VvcnJ3dnR6cWxiYXhibnV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0NzAwNjIsImV4cCI6MjAyMzA0NjA2Mn0.iB81lYinhUuK8cGwWVFIoI3-26qiuAf6TLpX5T3r318";
  const supabase = createClient(supabaseUrl, supabaseKey);
  let currentUser = 5;
  let friends = "";
  let Friends = "";

  // importeren van de data van vrienden en users
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
  async function updateFriendStatus(id, newStatus) {
  try {
    // Update de vriend met het opgegeven ID naar de nieuwe status
    const { data, error } = await supabase
      .from("Friends")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      console.error("Error updating friend status:", error.message);
      return;
    }
    window.location.replace("http://localhost:5173/vriendenInvites");
    if (data && data.length > 0) {
      const updatedFriend = data[0];
      console.log("Friend status updated successfully:", updatedFriend);
      // Je kunt de bijgewerkte vriend hier verder verwerken indien nodig
    } else {
      console.log("No friend found with the specified ID:", id);
    }
  } catch (error) {
    console.error("Error in updateFriendStatus:", error.message);
  }
}

</script>

<main class="bg-[#F0FFEA]">
  <BackButton />
  <div class="bg-[#F0FFEA] flex flex-col min-h-screen pt-5 pb-24">
    <div class="text-center">
      <h1 class="font-semibold">volgverzoeken</h1>
    </div>
    {#each users as user}
      {#if user.id != currentUser}
        {#each friends as friend}
          {#if (user.id === friend.recieverID && friend.senderID === currentUser && friend.status === "pending") || (user.id === friend.senderID && currentUser === friend.recieverID && friend.status === "pending")}
            <div class="snap-center flex">
              <div class="border border-gray-500 rounded-lg w-5/6 ml-10 mt-10">
                <img
                  src="./../src/img/profilePick.png"
                  alt="klok"
                  class="w-24 inline-block float-right"
                />

                <h2 class="ml-8 mt-2 text-xl font-semibold">{user.name}</h2>

                <p></p>
                <div
                  class="ml-4 mb-2 mt-6 w-auto inline-block pl-1 pr-2 bg-green-500 rounded-lg"
                >
                  <button
                    on:click={updateFriendStatus(friend.id, "accepted")}
                    class="p-1 pr-4 pl-4">accepteren</button
                  >
                </div>
                <div
                  class="ml-4 mb-2 mt-6 w-auto inline-block pl-1 pr-2 bg-red-500 rounded-lg"
                >
                  <button
                    on:click={updateFriendStatus(+friend.id, "delete")}
                    class="p-1 pr-4 pl-4">afwijzen</button
                  >
                </div>
              </div>
            </div>
          {/if}
        {/each}
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
