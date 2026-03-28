<script>
    import { base } from "$app/paths";
    import { onMount } from 'svelte';
    import { products } from "$lib/shop.js";
    import { fly } from "svelte/transition"

    let Mobile = $state("");
    let charX = $state(0);
    import Footer from "$lib/footer.svelte";

    let rawOrder = $state("");
    let cart = $state([]);
    onMount(function() {
        let params = new URLSearchParams(document.location.search);
        rawOrder = params.get("order");
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
                cart.push(newOne);
                newOne = [];
                newPlace = "";
                i++;
            }
            else {
                newPlace += rawOrder.substring(i, i+1);
            }
        }
        newOne.push(newPlace);
        cart.push(newOne);
        console.log(cart);
        total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += (parseInt(cart[i][1]) * parseInt(cart[i][2]));
        }
    })

    $effect(function() {
        if (charX <= 900) {
            Mobile = "Mobile";
        }
        else {
            Mobile = "";
        }
    })
    let total = $state("Loading...");

    let balances = $state({})
    onMount(async () => {
        let raw = await fetch("https://raw.githubusercontent.com/lynn89-eefje/coeur-database/refs/heads/main/purchases.json");
        let purchases = await raw.json();
        let raw2 = await fetch("https://raw.githubusercontent.com/lynn89-eefje/coeur-database/refs/heads/main/submissions.json");
        let profits = await raw2.json();

        for (let i = 0; i < profits.length; i++) {
            if (balances[profits[i].slack_id] == null) {
                balances[profits[i].slack_id] = profits[i].hearts;
            }
            
        }
        for (let i = 0; i < purchases.length; i++) {
            balances[purchases[i].slack_id] -= purchases[i].payment;
        }
        console.log(balances);
    })

    let slackID = $state("");
    let invalidBalance = $state(false);
    function checkBalance() {
        event.preventDefault();
        if (balances[slackID] >= total) {
            window.location.href = `https://forms.hackclub.com/t/9KmPUpin2Vus?order=${rawOrder}&total=${total}`;
        }
        else {
            invalidBalance = true;
        }
    }

</script>
<svelte:head>
    <title>Shop | Coeur</title>
</svelte:head>
<style>
    h1, p {
        text-align: center;
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
    }

    #invalidBalance {
        position: fixed;
        background-color: rgb(139, 68, 113);
        border-radius: 30px;
        padding: 20px;
        transform: translate(-50%, 0%);
        bottom: 30px;
        left: 50%;
        box-shadow: 0px 0px 20px 10px pink;
    }


</style>
<svelte:window bind:innerWidth={charX}></svelte:window>
<div id="background">
    <img src="{base}/images/landing{Mobile}/1.png" alt="Heart background" />
</div>
<div id="title">
    <h1 style:margin-top=50px class:mobile={Mobile == "Mobile"}>CONFIRMATION</h1>
    <p style:margin-bottom=10px>Please review your order and provide your Slack ID in order to proceed.</p>
    <!--<p><button style:margin-right=5px onclick={function() {window.location.href = `https://forms.hackclub.com/t/9KmPUpin2Vus?order=${rawOrder}&total=${total}`}}>Proceed</button> <button style:margin-left=5px onclick={function() {window.location.href = `${base}/shop`}}>Return</button></p>-->
    <form onsubmit={checkBalance}>
        <p><input bind:value={slackID} style:border-radius=15px style:padding=10px type="text" min=11 max=11 placeholder="Slack ID"></p>
    </form>
</div>
<div id="content">

{#each cart as x}
<h3>{x[0]}</h3>
<p translate="no">{x[1]} (x {x[2]})</p>
{/each}
<p>______________</p>
<h1>{total} total hearts</h1>
{#if Mobile == ""}
<img id="heidiEnvelope" src="{base}/images/heidiEnvelope.png" alt="Heidi in an envelope" style="width: 35%; height: auto; display: block; margin: 0 auto;" />
{:else}
<img id="heidiEnvelope" src="{base}/images/heidiEnvelope.png" alt="Heidi in an envelope" style="width: 65%; height: auto; display: block; margin: 0 auto;" />
{/if}
</div>
{#if invalidBalance}
<div id="invalidBalance" transition:fly={{y:200}}>
    <p>Your balance is invalid. Double check the Slack ID that you've inputted. If you think this is a mistake, contact us in our Slack channel.</p>
</div>
{/if}
<Footer />