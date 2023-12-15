<script>
  // import { getAllRequestsData } from '../../routes/api/friendRequests.js';
  import { onMount } from 'svelte';
  import { simpleTest } from '../../routes/api/friendRequests.js';
   
  onMount(async () => {
    console.log('requestedAllRequestsData', await simpleTest());
  }); 

  let requests = simpleTest();
  console.log('requests', requests);

</script>

<main class="">
  <div class="">
    <h1>Friend requests</h1>
    <p>{requests.sender}</p>
  </div>
</main>
