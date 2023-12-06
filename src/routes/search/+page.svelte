<!DOCTYPE html>
<script>
    let filters = {
        pricePerPortion: 3,
        countryOfOrigin: "",
        allergies: [],
        kcal: 10,
        fat: 10,
        sugar: 10,
    };

    function applyFilters() {
        filteredProducts = products.filter(product => {
            let match = true;

            if (filters.pricePerPortion && product.pricePerPortion !== filters.pricePerPortion) {
                match = false;
            }

            if (filters.countryOfOrigin && product.countryOfOrigin !== filters.countryOfOrigin) {
                match = false;
            }

            if (filters.allergies.length > 0) {
                for (let allergy of filters.allergies) {
                    if (!product.allergies.includes(allergy)) {
                        match = false;
                        break;
                    }
                }
            }

            if (filters.kcal && product.kcal !== filters.kcal) {
                match = false;
            }

            if (filters.fat && product.fat !== filters.fat) {
                match = false;
            }

            if (filters.sugar && product.sugar !== filters.sugar) {
                match = false;
            }

            return match;
        });
    }
</script>

<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Tailwind Search Page</title>
        <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"
            rel="stylesheet"
        />
    </head>

    <body class="bg-gray-200 p-4">
        <script>
            let filters = {
                pricePerPortion: 3,
                countryOfOrigin: "",
                allergies: [],
                kcal: 10,
                fat: 10,
                sugar: 10,
            };

            function applyFilters() {
                // Your existing filtering logic remains unchanged
            }
        </script>

        <div class="container mx-auto">
            <div class="bg-white rounded-lg shadow-md p-8 mb-6">
                <h1 class="text-2xl font-bold mb-4">Search Page</h1>

                <div class="mb-4">
                    <label for="pricePerPortion">Price per Portion:</label>
                    <input
                        type="range"
                        id="pricePerPortion"
                        min="0"
                        max="25"
                        step="0.1"
                        class="w-full rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                        bind:value={filters.pricePerPortion}
                        on:change={applyFilters}
                    />
                    <output>{filters.pricePerPortion}</output>
                </div>
                
                <!-- Repeat the same structure for other sliders (kcal, fat, sugar) -->
                

                <div class="mb-4">
                    <label for="countryOfOrigin">Origin of Recipe:</label>
                    <div class="flex flex-col">
                        <!-- Radio inputs with Tailwind classes -->
                        <!-- For each radio option, use Tailwind classes -->
                        <label for="Italian" class="mr-4">
                            <input
                                type="radio"
                                id="Italian"
                                name="countryOfOrigin"
                                value="Italian"
                                class="mr-1"
                                bind:group={filters.countryOfOrigin}
                                on:change={applyFilters}
                            />
                            Italian
                        </label>
                        <label for="French" class="mr-4">
                            <input
                                type="radio"
                                id="French"
                                name="countryOfOrigin"
                                value="French"
                                class="mr-1"
                                bind:group={filters.countryOfOrigin}
                                on:change={applyFilters}
                            />
                            French
                        </label>
                        <label for="Asian" class="mr-4">
                            <input
                                type="radio"
                                id="Asian"
                                name="countryOfOrigin"
                                value="Asian"
                                class="mr-1"
                                bind:group={filters.countryOfOrigin}
                                on:change={applyFilters}
                            />
                            Asian
                        </label>
                        <label for="Spanish" class="mr-4">
                            <input
                                type="radio"
                                id="Spanish"
                                name="countryOfOrigin"
                                value="Spanish"
                                class="mr-1"
                                bind:group={filters.countryOfOrigin}
                                on:change={applyFilters}
                            />
                            Spanish
                        </label>
                        <label for="Dutch" class="mr-4">
                            <input
                                type="radio"
                                id="Dutch"
                                name="countryOfOrigin"
                                value="Dutch"
                                class="mr-1"
                                bind:group={filters.countryOfOrigin}
                                on:change={applyFilters}
                            />
                            Dutch
                        </label>
                        <label for="American" class="mr-4">
                            <input
                                type="radio"
                                id="American"
                                name="countryOfOrigin"
                                value="American"
                                class="mr-1"
                                bind:group={filters.countryOfOrigin}
                                on:change={applyFilters}
                            />
                            American
                        </label>
                    </div>
                </div>

                <div class="mb-4">
                    <label for="allergies">Allergies/Preferences:</label>
                    <div class="flex flex-col">
                        <!-- Checkbox inputs with Tailwind classes -->
                        <!-- For each checkbox option, use Tailwind classes -->
                        <div class="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id="vegan"
                                class="mr-2"
                                bind:group={filters.allergies}
                                value="vegan"
                                on:change={applyFilters}
                            />
                            <label for="vegan">Vegan</label>
                        </div>
                        <div class="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id="gluten-free"
                                class="mr-2"
                                bind:group={filters.allergies}
                                value="gluten-free"
                                on:change={applyFilters}
                            />
                            <label for="gluten-free">Gluten-free</label>
                        </div>
                        <div class="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id="dairy-free"
                                class="mr-2"
                                bind:group={filters.allergies}
                                value="dairy-free"
                                on:change={applyFilters}
                            />
                            <label for="dairy-free">Dairy-free</label>
                        </div>
                        <div class="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id="nut-free"
                                class="mr-2"
                                bind:group={filters.allergies}
                                value="nut-free"
                                on:change={applyFilters}
                            />
                            <label for="nut-free">Nut-free</label>
                        </div>
                        <div class="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id="wheat-free"
                                class="mr-2"
                                bind:group={filters.allergies}
                                value="wheat-free"
                                on:change={applyFilters}
                            />
                            <label for="wheat-free">Wheat-free</label>
                        </div>
                        <div class="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id="soy-free"
                                class="mr-2"
                                bind:group={filters.allergies}
                                value="soy-free"
                                on:change={applyFilters}
                            />
                            <label for="soy-free">Soy-free</label>
                        </div>
                        <div class="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id="fish-free"
                                class="mr-2"
                                bind:group={filters.allergies}
                                value="fish-free"
                                on:change={applyFilters}
                            />
                            <label for="fish-free">Fish-free</label>
                        </div>
                    </div>
                </div>
                

                <div class="mb-4">
                    <label for="kcal">Amount of kcal per 100g:</label>
                    <input
                        type="range"
                        id="kcal"
                        min="0"
                        max="500"
                        step="10"
                        class="w-full rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                        bind:value={filters.kcal}
                        on:input={applyFilters}
                    />
                    <output>{filters.kcal}</output>
                </div>

                <div class="mb-4">
                    <label for="fat">Amount of fat per 100g:</label>
                    <input
                        type="range"
                        id="fat"
                        min="0"
                        max="50"
                        step="1"
                        class="w-full rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                        bind:value={filters.fat}
                        on:input={applyFilters}
                    />
                    <output>{filters.fat}</output>
                </div>

                <div class="mb-4">
                    <label for="sugar">Amount of sugar per 100g:</label>
                    <input
                        type="range"
                        id="sugar"
                        min="0"
                        max="50"
                        step="1"
                        class="w-full rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                        bind:value={filters.sugar}
                        on:input={applyFilters}
                    />
                    <output>{filters.sugar}</output>
                </div>
            </div>
        </div>
    </body>
</html>
