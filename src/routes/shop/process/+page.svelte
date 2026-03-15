<script>
    import { base } from "$app/paths";
    import { onMount } from 'svelte';
    import { products } from "$lib/shop.js";

    let Mobile = $state("");
    let charX = $state(0);
    import Footer from "$lib/footer.svelte";

    let slackID = $state("");
    let totalHearts = $state(0);
    let totalUserHearts = $state(0);
    let rawOrder = $state("");
    let cart = $state([]);
    function process() {
        totalHearts = 0;
        totalUserHearts = 0;
        cart = [];
        let newOne = []
        let newPlace = "";
        // [Stationary;2;1][Orpheus%20x%20Heidi%20Sweatshirt;20;1]
        for (let i = 1; i < rawOrder.length-1; i++) {
            if (rawOrder.substring(i, i+1) == ";") {
                newOne.push(newPlace);
                newPlace = "";
            }
            else if (rawOrder.substring(i, i+1) == "]") {
                newOne.push(newPlace);
                for (let i = 0; i < products.length; i++) {
                    if (products[i].name == newOne[0]) {
                        if (products[i].hearts == newOne[1]) {
                            newOne.push("");
                        }
                        else {
                            newOne.push(`This product should cost ${products[i].hearts} hearts`);
                        }
                    }
                }
                if (newOne[3] == null) {
                    newOne.push("Could not find item");
                }
                cart.push(newOne);
                totalHearts += (newOne[2]*newOne[1]);
                newOne = [];
                newPlace = "";
                i++;
            }
            else {
                newPlace += rawOrder.substring(i, i+1);
            }
        }
        if (newPlace != "") {
            newOne.push(newPlace);
            totalHearts += (newOne[2]*newOne[1]);
            cart.push(newOne);
        }
        console.log(cart);
        total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += (parseInt(cart[i][1]) * parseInt(cart[i][2]));
        }
        user();
    }

    async function user() {
        let raw = await fetch("https://raw.githubusercontent.com/lynn89-eefje/coeur-database/refs/heads/main/submissions.json");
        let json = await raw.json();
        //console.log(json);
        for (let i = 0; i < json.length; i++) {
            if (json[i].slack_id == slackID) {
                totalUserHearts += json[i].hearts;
            }
        }
    }

    $effect(function() {
        if (charX <= 900) {
            Mobile = "Mobile";
        }
        else {
            Mobile = "";
        }
    })
    let total = $state("Loading...");

</script>
<svelte:head>
    <title>Shop | Coeur</title>
</svelte:head>
<style>
    h1, p {
        text-align: center;
    }
    input[type="submit"] {
        background-color: rgb(104, 35, 89);
        color: white;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
    }
    input[type="submit"]:hover {
        background-color: white;
        color: rgb(104, 35, 89);
        transform: scale(1.1);
    }
    #background {
        z-index: -1;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        img {

            width: 100em;
            overflow: clip;
        }
    }
    #content {
        margin-top: 50px;
        z-index: 1;
        background-color: rgb(128, 12, 60);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        padding: 20px;
        padding-top: 40px;
        text-align: center;
    }

    #title {
        padding: 20px;
        margin-left: 30px;
        margin-right: 30px;
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.377);
        background-color: rgb(200, 62, 85);
        border-radius: 20px;
        margin-top: 50px;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.406);

        h1 {
            font-size: 50px;
        }
        h1.mobile {
            font-size: 30px;
        }

        form {
            text-align: center;
        }
    }
    h2 {
        margin-bottom: 20px;
    }
    .product {
        padding: 20px;
        background-color: rgb(184, 56, 116);
        border-radius: 30px;
        margin: 20px;
        margin-top: 30px;
    }


</style>
<svelte:window bind:innerWidth={charX}></svelte:window>
<div id="background">
    <img src="{base}/images/landing{Mobile}/1.png" alt="Heart background" />
</div>
<div id="title">
    <h1 style:margin-top=50px class:mobile={Mobile == "Mobile"}>PROCESS ORDER</h1>
    <form style:margin-top=30px onsubmit={process}>
        <input bind:value={slackID} required type="text" placeholder="Slack ID"><br>
        <input bind:value={rawOrder} required style:margin-top=15px type="text" placeholder="Order"><br>
        <input style:margin-top=15px type="submit">
    </form>
</div>
<div id="content">
<h2>User</h2>
<p>{slackID}</p>
{#if cart.length > 0}
<h3 style:font-family="Montserrat">{totalHearts} hearts are needed for this purchase. User has {totalUserHearts}.</h3>
{#if totalUserHearts >= totalHearts}
<h3 style:font-family="Montserrat">Thir purchase is valid.</h3>
{:else}
<h3 style:font-family="Montserrat" style:font-weight=800>This purchase is invalid.</h3>
{/if}
{/if}
<p>______________</p>
<h2>Breakdown</h2>
{#each cart as x}
<div class="product">
    <h3>{x[0]}</h3>
    <p translate="no">{x[1]} (x {x[2]})</p>
    <p>{x[3]}</p>
</div>
{/each}
{#if Mobile == ""}
<img id="heidiEnvelope" src="{base}/images/donut.png" alt="Orpheus in a donut" style="width: 35%; height: auto; display: block; margin: 0 auto;" />
{:else}
<img id="heidiEnvelope" src="{base}/images/donut.png" alt="Orpheus in a donut" style="width: 65%; height: auto; display: block; margin: 0 auto;" />
{/if}
</div>
<Footer />