<script>
    export let form;
    const newUser = {
    name: 'test test',
    email: 'test@example.com',
    password: 'Test'
    };
    export {newUser};
</script>

<div class="register flex flex-col justify-center items-center h-screen">
    <h1 class="text-3xl font-bold">Register</h1>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    method="POST" action="/register?/create">

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
            <input class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="text" id="username" placeholder="Username" required />
        </div>
        <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="email" id="email" placeholder="Email" required/>
        </div>
        <div class="mb-4">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="password" id="password" placeholder="**********" required/>
        </div>
        <div class="mb-4">
            <label for="passwordConfirm" class="block text-gray-700 text-sm font-bold mb-2">password Confirm</label>
            <input class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="password" id="passwordConfirm" placeholder="**********" required/>
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Register</button>
    </form>
</div>