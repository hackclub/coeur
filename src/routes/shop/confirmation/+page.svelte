<script>
    import { base } from "$app/paths";
    import { onMount } from 'svelte';
    import { products } from "$lib/shop.js";

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

</script>
<svelte:head>
    <title>Shop | Coeur</title>
</svelte:head>
<style>
    h1, p {
        text-align: center;
    }
    button {
        background-color: rgb(104, 35, 89);
    }
    button:hover {
        background-color: white;
        color: rgb(104, 35, 89);
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
    }


</style>
<svelte:window bind:innerWidth={charX}></svelte:window>
<div id="background">
    <img src="{base}/images/landing{Mobile}/1.png" alt="Heart background" />
</div>
<div id="title">
    <h1 style:margin-top=50px style:font-size=50px>CONFIRMATION</h1>
    <p style:margin-bottom=10px>Please review your order. If all the details below are correct, you may proceed.</p>
    <p><button onclick={function() {window.location.href = `https://forms.hackclub.com/t/9KmPUpin2Vus?order=${rawOrder}&total=${total}`}}>Continue</button></p>
</div>
<div id="content">

{#each cart as x}
<h3>{x[0]}</h3>
<p translate="no">{x[1]} (x {x[2]})</p>
{/each}
<p>______________</p>
<h1>{total} total hearts</h1>
<p>You should make sure that you can afford this total based on the amount of hearts that you've earned from projects.</p>
</div>
<Footer />