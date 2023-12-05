<script>
    let form = {
      error: null,
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
  
    async function handleSubmit(event) {
      event.preventDefault();
      const newUser = {
        name: form.name,
        email: form.email,
        password: form.password
      };
  
      // Post the new user data to the backend
      await postData('users', newUser);
  console.log(newUser)
      // Optionally, reset form fields after successful submission
      form.name = '';
      form.email = '';
      form.password = '';
    }
  
    async function postData(endpoint, data) {
      try {
        const response = await fetch(`http://localhost:4002/${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        // Optionally handle the response from the server
        const result = await response.json();
        console.log('Data posted:', result);
      } catch (error) {
        console.error('Fetch error:', error);
        // Optionally handle errors here
      }
    }
  </script>
  
  <form on:submit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

    <!-- svelte-ignore missing-declaration -->
    {#if form?.error}
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert">
      <strong class="font-bold">Error!</strong>
      <span class="block sm:inline">{form.error}</span> 
    </div>
    {/if}
        <div class="mb-4">
            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input bind:value={form.name} class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="text" id="username" placeholder="Username" required />
        </div>
        <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input bind:value={form.email} class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="email" id="email" placeholder="Email" required/>
        </div>
        <div class="mb-4">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input bind:value={form.password} class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="password" id="password" placeholder="**********" required/>
        </div>
        <div class="mb-4">
            <label for="passwordConfirm" class="block text-gray-700 text-sm font-bold mb-2">password Confirm</label>
            <input class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="password" id="passwordConfirm" placeholder="**********" required/>
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Register</button>
</form>
    