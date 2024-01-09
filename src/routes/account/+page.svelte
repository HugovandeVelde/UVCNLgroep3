<!-- Account.svelte -->
<script>
    let username = "User123";
    let email = "user@example.com";
    import BottomBar from '../../lib/components/BottomBar.svelte';
    let userProfilePicture = "";
</script>

<div
    class="bg-cover bg-center"
    style="background-image: url('./src/img/background.png')"
>
<div class="flex justify-center items-center h-screen">
    <div class="text-center">
        <div class="absolute left-4 top-4">
            <button onclick="history.back()">Go Back
                <!-- SVG Arrow Icon -->
                <svg
                    class="w-6 h-6 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10.707 4.293a1 1 0 0 1 1.414 1.414L8.414 10l3.707 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 0 1.414z"
                    />
                </svg>
                <!-- Text -->
            </button>
        </div>

        <!-- Profile Picture -->
        <div class="inline-block relative w-20 h-20 rounded-full overflow-hidden">
            <img
                class="w-full h-full object-cover rounded-full"
                    src="./src/img/shariqueen.png"
                    alt="Profile"
                />
            </div>


            <!-- Account Information -->
            <div class="mb-4">
                <p>
                    Username: <span class="font-medium" id="username"
                        >{username}</span
                    >
                </p>
                <p>
                    Email: <span class="font-medium" id="email">{email}</span>
                </p>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <!-- Box 1: Gegevens -->
                <a href="#" class="bg-gray-200 p-4 rounded-md text-center block">
                    Gegevens
                </a>

                <!-- Box 2: Eat together geschiedenis -->
                <a href="#" class="bg-gray-200 p-4 rounded-md text-center block">
                    Eat together geschiedenis
                </a>

                <!-- Box 3: Privacy -->
                <a href="#" class="bg-gray-200 p-4 rounded-md text-center block">
                    Privacy
                </a>

                <!-- Box 4: Help -->
                <a href="#" class="bg-gray-200 p-4 rounded-md text-center block">
                    Help
                </a>

                <!-- Box 5: FAQ -->
                <a href="#" class="bg-gray-200 p-4 rounded-md text-center block">
                    FAQ
                </a>

                <!-- Box 6: Feedback -->
                <a href="#" class="bg-gray-200 p-4 rounded-md text-center block">
                    Feedback
                </a>
                <button class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded absolute top-4 right-4 z-10">
    Logout
  </button>
            </div>
        </div>
    </div>
</div>

    <BottomBar profilePictureUrl={userProfilePicture} />

<style>
    /* Include Tailwind CSS classes */
    @import "tailwindcss/base";
    @import "tailwindcss/components";
    @import "tailwindcss/utilities";
</style>
