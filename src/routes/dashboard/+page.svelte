<!--dashboard.svelte-->
<script>
    import BottomBar from "../../lib/components/BottomBar.svelte";
    import { requestedAllData } from "../../lib/users";
    import { requestedAllRecipeData } from "../../lib/index";

    let currentUser = null;
    let knowsEmail = false;
    let form = { error: null, email: "", password: "" };
    let isSubmitted = false;

    function handleSubmit(event) {
        event.preventDefault();
        isSubmitted = true;

        // Find the user with matching email and password
        const user = requestedAllData.find(u => u.email === form.email && u.password === form.password);
        if (user) {
            currentUser = user;
            window.location.replace("http://localhost:5173/dashboard");
    } else {
        form.error = "Invalid email or password";
    }
}
</script>


<main
    class="bg-[#F0FFEA] flex flex-col items-center justify-center min-h-screen pt-5"
>
    <div
        class="flex flex-col items-center w-full max-w-screen-lg p-5 font-sans"
    >
        <!-- Logo Section -->
        <div class="w-full mb-5 flex justify-center">
            <img
                src="/src/img/logo.png"
                alt="Our Logo"
                class="max-w-full h-auto mix-blend-multiply"
            />
        </div>

        <!-- Welcome Back Section -->
        <div class="text-center text-lg mb-2.5">
            {#if currentUser}
                <h1>Welcome back, {currentUser.name}!</h1>
            {:else}
                <h1>Welcome back!</h1>
            {/if}
        </div>

        <div class="text-center text-lg mb-2.5">
            <h1>Search Recipes</h1>
            <a href="/search">
                <button
                    class="px-6 py-3.5 text-base bg-blue-500 text-white rounded-lg cursor-pointer mb-5"
                    >Search Page</button
                >
            </a>
        </div>

        <div class="w-full flex flex-col items-center">
            <h2 class="font-bold text-2xl text-center mb-5">
                Recommended Recipes
            </h2>
            <div class="flex justify-center w-full mb-5">
                <!-- Box 1 -->
                <div class="w-1/3 p-2">
                    <div
                        class="flex flex-col items-center border-2 border-black rounded-lg overflow-hidden bg-[#50c878]"
                    >
                        <img
                            src="./src/img/pastaPesto.png"
                            alt="pastaPesto"
                            class="w-32 h-24 object-cover"
                        />
                        <div class="border-b-2 border-black w-full"></div>
                        <a
                            href="/recipe/1"
                            class="flex flex-row justify-center gap-5 mb-5"
                        >
                            <div class="p-2">
                                <p>{requestedAllRecipeData[1].name}</p>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Box 2 -->
                <div class="w-1/3 p-2">
                    <div
                        class="flex flex-col items-center border-2 border-black rounded-lg overflow-hidden bg-[#50c878]"
                    >
                        <img
                            src="./src/img/kipTeriyaki.png"
                            alt="KipTeriyaki"
                            class="w-32 h-24 object-cover"
                        />
                        <div class="border-b-2 border-black w-full"></div>
                        <a
                            href="/recipe/2"
                            class="flex flex-row justify-center gap-5 mb-5"
                        >
                            <div class="p-2">
                                {requestedAllRecipeData[2].name}
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Box 3 -->
                <div class="w-1/3 p-2">
                    <div
                        class="flex flex-col items-center border-2 border-black rounded-lg overflow-hidden bg-[#50c878]"
                    >
                        <img
                            src="./src/img/shoarmaBowl.png"
                            alt="shoarmaBowl"
                            class="w-32 h-24 object-cover"
                        />
                        <div class="border-b-2 border-black w-full"></div>
                        <a
                            href="/recipe/3"
                            class="flex flex-row justify-center gap-5 mb-5"
                        >
                            <div class="p-2">
                                {requestedAllRecipeData[3].name}
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="w-full flex flex-col items-center">
                <div class="flex justify-center w-full mb-5">
                    <!-- Box 1 -->
                    <div class="w-1/3 p-2">
                        <div
                            class="flex flex-col items-center border-2 border-black rounded-lg overflow-hidden bg-[#50c878]"
                        >
                            <img
                                src="./src/img/kipTeriyaki.png"
                                alt="kipTeriyaki2"
                                class="w-32 h-24 object-cover"
                            />
                            <div class="border-b-2 border-black w-full"></div>
                            <a
                                href="/recipe/4"
                                class="flex flex-row justify-center gap-5 mb-5"
                            >
                                <div class="p-2">
                                    {requestedAllRecipeData[4].name}
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- Box 2 -->
                    <div class="w-1/3 p-2">
                        <div
                            class="flex flex-col items-center border-2 border-black rounded-lg overflow-hidden bg-[#50c878]"
                        >
                            <img
                                src="./src/img/kipTeriyaki.png"
                                alt="ja"
                                class="w-32 h-24 object-cover"
                            />
                            <div class="border-b-2 border-black w-full"></div>
                            <a
                                href="/recipe/5"
                                class="flex flex-row justify-center gap-5 mb-5"
                            >
                                <div class="p-2">
                                    {requestedAllRecipeData[5].name}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <BottomBar />

        <!-- Other sections or components for your dashboard -->
    </div>
</main>