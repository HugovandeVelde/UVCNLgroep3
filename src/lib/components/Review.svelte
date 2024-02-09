<!-- <script>
    export let timeslot;
    import { selectedUser } from '../../stores/selectedCustomerStore';
    
    function selectACustomer() {
      console.log('selected', date);
      selectedUser.update(() => ({...date.review}));
      // $selectedCustomer.id = timeslot.appointment.id;
      // $selectedCustomer.name = timeslot.appointment.name;
      // $selectedCustomer.breed = timeslot.appointment.breed;
    }
  </script>
  
  <div class="review cursor-pointer" id={date.dateId}>
    {#if !date.review}
      <ul class="flex flex-wrap justify-between bg-slate-100 rounded-lg">
        <li class="bg-slate-100 mr-2 p-2 rounded-l-lg">{date.starttime}</li>
        <li class="bg-slate-100 mr-2 p-2">---</li>
      </ul>
    {:else}
      <ul
        on:mousedown={selectAUser}
        class="flex flex-wrap justify-between bg-yellow-100 rounded-lg"
      >
        <li class="bg-yellow-300 mr-2 p-2 rounded-l-lg">{date.starttime}</li>
        <li class="mr-2 p-2">{date.review.name}</li>
        <li class="mr-2 p-2">{date.review.breed}</li>
      </ul>
    {/if}
  </div>
   -->