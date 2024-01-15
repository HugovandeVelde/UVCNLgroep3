<script>
  import { page } from "$app/stores";
  import { requestedAllData } from "../../../lib/users";
  import { requestedAllRecipeData } from "../../../lib/index";
  import { requestedAllIngredients } from "../../../lib/ingredients";
  import { requestedAllSteps } from "../../../lib/steps";
  import BottomBar from "../../../lib/components/BottomBar.svelte";

  const recipeId = $page.params.recipeId;
  let numberOfInvites = 1;
  function changeNumberOfInvites(value) {
    numberOfInvites = +value;
  }
</script>

<body class="bg-[#F0FFEA] flex flex-col min-h-screen pt-5">
  <header>
    <h1 class="title">{requestedAllRecipeData[recipeId].name}</h1>
  </header>
  <main>
    <table>
      <tr>
        <td>Hoe veel mensen wil je uitnodigen:</td>
        <td><input placeholder="3" /></td>
      </tr>
      <tr>
        <td>Wanneer wil je mensen uitnodigen:</td>
        <td><input type="date" /></td>
      </tr>
      <tr>
        <td>Hoelaat wil je mensen uitnodigen;</td>
        <td><input type="time" /></td>
      </tr>
      <tr>
        <td>Waar wil je mensen uitnodigen:</td>
        <td><input placeholder="3" /></td>
      </tr>
      <tr>
        <td>Hoe duur zal het eten zijn:</td>
        <td><input placeholder="€15,50" /></td>
      </tr>
    </table>
    <div class='invitationButton'>
        <div class='mr-2 ml-2'>
                  <p>Deel uitnodiging</p>
        </div>

    </div>
  </main>
</body>

<style>
  header,
  input {
    text-align: center;
  }
  header {
    font-size: 50px;
  }
  main {
    margin-top: 8%;
  }
  input {
    width: 140px;
    border: black solid 1px;
    border-radius: 5px;
  }
  table {
    margin-top: 5px;
    margin-left: 5%;
    margin-right: 5%;
  }
  .invitationButton{
    background-color: green;
    border: black solid 1px;
    border-radius: 5px;
    width: fit-content;
    margin-left: 30%;
    margin-top: 30%;
  }
  p{
    color: white;
  }
</style>
