<script>
    // Hier kun je je Svelte-logica plaatsen
</script>

<style>
    /* Stijlen voor je dashboard lay-out */
    .dashboard {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: Arial, sans-serif;
    }

    .header {
        text-align: center;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .search-button {
        padding: 15px 25px;
        font-size: 16px;
        background-color: #3498db;
        color: #fff;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin-bottom: 20px;
    }

    .recommended {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin-bottom: 20px;
    }

    .recommended-item {
        width: 250px; /* Vaste breedte van 250 pixels */
        height: 250px; /* Vaste hoogte van 250 pixels */
        border: 1px solid #ccc;
        border-radius: 5px;
        text-align: center;
        box-sizing: border-box;
        position: relative;
    }

    .recommended-item h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
    }

    .account-buttons {
        display: flex;
        justify-content: space-around;
        width: 80%;
        max-width: 600px;
        margin-bottom: 20px;
    }

    .account-button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #2ecc71;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 10px;
    }

    .logo {
        width: 450px; /* Aangepaste grootte van het logo */
        margin-bottom: 20px;
        text-align: center; /* Centreren van het logo */
    }
    
    .logo img {
        max-width: 100%; /* Zorgt ervoor dat het logo binnen de opgegeven breedte blijft */
        height: auto;
    }

</style>

<div class="dashboard">

    <div class="header">
    <h1>Welkom terug, (naam)!</h1>
    </div>
    
    <div class="logo">
        <!-- Voeg hier de URL naar jouw logo in -->
        <img src="/src/img/logo.png" alt="Ons Logo">
    </div>

    <div class="header">
        <h1>Recepten Zoeken</h1>
        <button class="search-button">Zoekpagina</button>
    </div>

    <div class="header">
        <h1>Aanbevolen Recepten</h1>    
    </div>

    <div class="recommended">
        <!-- Horizontaal scrollende aanbevolen gerechten -->
        <div class="recommended-item">
            <h3>Recept 1</h3>
            <!-- Meer informatie over aanbevolen recept 1 -->
        </div>
        <div class="recommended-item">
            <h3>Recept 2</h3>
            <!-- Meer informatie over aanbevolen recept 2 -->
        </div>
        <div class="recommended-item">
            <h3>Recept 3</h3>
            <!-- Meer informatie over aanbevolen recept 2 -->
        </div>
        <div class="recommended-item">
            <h3>Recept 4</h3>
            <!-- Meer informatie over aanbevolen recept 2 -->
        </div>
        <div class="recommended-item">
            <h3>Recept 5</h3>
            <!-- Meer informatie over aanbevolen recept 2 -->
        </div>
        <!-- Voeg hier meer aanbevolen recepten toe -->
    </div>

    <div class="account-buttons">
        <button class="account-button">Mijn Account</button>
        <button class="account-button">Geschiedenis</button>
        <button class="account-button">Vriendenlijst</button>
        <button class="account-button">Opgeslagen gerechten</button>
    </div>

    <!-- Andere secties of componenten voor je dashboard -->
</div>
