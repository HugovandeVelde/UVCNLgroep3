<!-- Account.svelte -->
<script>
  import { onMount } from "svelte";
  import BackButton from "../../lib/components/BackButton.svelte";
  import BottomBar from "../../lib/components/BottomBar.svelte";
  import { createClient } from "@supabase/supabase-js";
  const supabaseUrl = "https://ejgeorrwvtzqlbaxbnut.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZ2VvcnJ3dnR6cWxiYXhibnV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0NzAwNjIsImV4cCI6MjAyMzA0NjA2Mn0.iB81lYinhUuK8cGwWVFIoI3-26qiuAf6TLpX5T3r318";
  const supabase = createClient(supabaseUrl, supabaseKey);
  let currentUser = 1;
  let friends = "";
  let userLength = "";
  let friendLength = "";
  let notFriend = [];

  onMount(async () => {
  try {
    const { data, error } = await supabase.from("Friends").select("*");

    if (error) {
      console.error("Error fetching Friends:", error.message);
    } else {
      friends = data;
      friendLength = friends.length;
      console.log("Fetched friends:", friends);

      // Verplaats de logica hier om ervoor te zorgen dat deze wordt uitgevoerd nadat vrienden zijn opgehaald
      notFriend = devideUsers();
    }
  } catch (error) {
    console.error("Error in onMount:", error.message);
  }
});


  let users = "";
  onMount(async () => {
    const res = await fetch("http://localhost:4006/users/");
    users = await res.json();
    userLength = users.length;
    console.log(users);
    });

  // vriend toevoegen
  async function postData(recieve) {
    const data = {
      recieverID: recieve,
      senderID: currentUser,
      status: "pending",
    };
    {
      window.location.replace("http://localhost:5173/vriendenToevoegen");
    }

    const { data: newFriend, error } = await supabase
      .from("Friends")
      .upsert([data]);

    if (error) {
      console.error("Error posting data:", error.message);
    } else {
      console.log("Data posted:", newFriend);
    }
  }
  function devideUsers() {
    let acceptedFriends = [];
    let requestedFriends = [];
    let notFriends = [];
    let counter = 0;
    console.log( friends[2])
    for (let m = 0; m < userLength; m++) {
      let checkedUserId = userLength - m;
      for (let i = 0; i < friendLength; i++) {
        if (
          (users[m].id === friends[i].recieverID &&
            friends[i].senderID === currentUser &&
            friends[i].status === "accepted") ||
          (users[m].id === friends[i].senderID &&
            currentUser === friends[i].recieverID &&
            friends[i].status === "accepted")
        ) {
          acceptedFriends.push(6 - checkedUserId);
        } else if (
          (users[m].id === friends[i].recieverID &&
            friends[i].senderID === currentUser &&
            friends[i].status === "pending") ||
          (users[m].id === friends[i].senderID &&
            currentUser === friends[i].recieverID &&
            friends[i].status === "pending")
        ) {
          requestedFriends.push(6 - checkedUserId);
        }
      }
    }
    for (let i = 0; i < userLength; i++) {
      notFriends.push(i + 1);
    }
    for (let i = 0; i < acceptedFriends.length; i++) {
      const index = notFriends.indexOf(acceptedFriends[i]);
      const x = notFriends.splice(index, 1);
    }
    for (let i = 0; i < requestedFriends.length; i++) {
      const index = notFriends.indexOf(requestedFriends[i]);
      console.log(index)
      const x = notFriends.splice(index, 1);
      console.log(x)
    }
    notFriends.splice(currentUser - 1, 1);
    console.log("accepted friend:" + acceptedFriends);
    console.log("requested friend:" + requestedFriends);
    console.log("not friend:" + notFriends);
    return notFriends;
  }
  console.log(friends)
</script>

<main class="bg-[#F0FFEA]">
  <BackButton />
  <div class="bg-[#F0FFEA] flex flex-col min-h-screen pt-5 pb-24">
    <div class="text-center">
      <h1 class="font-semibold">gebruikers</h1>
    </div>

    <!-- haalt alle verzoekken op die de gebuiker heeft gekregen en die geaccepteerd zijn  -->

    {#each users as user}
      {#if user.id != currentUser}
        {#each friends as friend}
          {#if (user.id === friend.recieverID && friend.senderID === currentUser && friend.status === "accepted") || (user.id === friend.senderID && currentUser === friend.recieverID && friend.status === "accepted")}
            <div class="snap-center flex">
              <div class="border border-gray-500 rounded-lg w-5/6 ml-10 mt-10">
                <img
                  src="./../src/img/profilePick.png"
                  alt="klok"
                  class="w-24 inline-block float-right"
                />

                <h2 class="ml-8 mt-2 text-xl font-semibold">{user.name}</h2>
                <div
                  class="ml-4 mb-2 mt-6 w-auto inline-block pl-1 pr-2 bg-gray-400 border-2 border-black rounded-lg"
                >
                  <button class="p-1 pr-4 pl-4">toegevoegd</button>
                </div>
              </div>
            </div>
          {:else if (user.id === friend.recieverID && friend.senderID === currentUser && friend.status === "pending") || (user.id === friend.senderID && currentUser === friend.recieverID && friend.status === "pending")}
            <div class="snap-center flex">
              <div class="border border-gray-500 rounded-lg w-5/6 ml-10 mt-10">
                <img
                  src="./../src/img/profilePick.png"
                  alt="klok"
                  class="w-24 inline-block float-right"
                />

                <h2 class="ml-8 mt-2 text-xl font-semibold">{user.name}</h2>
                <div
                  class="ml-4 mb-2 mt-6 w-auto inline-block pl-1 pr-2 bg-gray-400 border-2 border-black rounded-lg"
                >
                  <button class="p-1 pr-4 pl-4">in afwachting</button>
                </div>
              </div>
            </div>
          {/if}
        {/each}
      {/if}
    {/each}
    {#each notFriend as friend}
      <div class="snap-center flex">
        <div class="border border-gray-500 rounded-lg w-5/6 ml-10 mt-10">
          <img
            src="./../src/img/profilePick.png"
            alt="klok"
            class="w-24 inline-block float-right"
          />

          <h2 class="ml-8 mt-2 text-xl font-semibold">
            {users[friend - 1].name}
          </h2>
          <div
            class="ml-4 mb-2 mt-6 w-auto inline-block pl-1 pr-2 bg-green-400 border-2 border-black rounded-lg"
          >
            <button on:click={() => postData(friend)} class="p-1 pr-4 pl-4"
              >toevoegen</button
            >
          </div>
        </div>
      </div>
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
