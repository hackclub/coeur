<script>
    import { base } from "$app/paths";
    import { onMount } from 'svelte';
    import { products } from "$lib/shop.js";

    let cart = $state([]);
    for (let i = 0; i < products.length; i++) {
        cart.push(0);
    }
    let checkOut = $state(false);
    $effect(function() {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i] > 0) {
                checkOut = true;
                return;
            }
        }
        checkOut = false;
    })

    let Mobile = $state("");
    let charX = $state(0);
    import Footer from "$lib/footer.svelte";

    $effect(function() {
        if (charX <= 900) {
            Mobile = "Mobile";
        }
        else {
            Mobile = "";
        }
    })

    function modifyCart(mode, id) {
        if (mode == 0) {
            if (cart[id] > 0) {
                cart[id]--;
            }
        }
        else {
            cart[id]++;
        }
        //console.log(getOrder())
    }
    function getOrder() {
        let order = "";
        for (let i = 0; i < cart.length; i++) {
            if (cart[i] > 0) {
                order += "[" + products[i].name + ";" + products[i].hearts + ";" + cart[i] + "]";
            }
        }
        window.location.href = base + "/shop/confirmation?order=" + order;
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
        margin-top: 400px;
        z-index: 1;
        background-color: rgb(128, 12, 60);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        padding: 20px;
        padding-top: 40px;
        text-align: center;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

        div {
            background-color: rgb(155, 24, 74);
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.192);
            transition: 0.3s all ease-in-out;
            padding: 20px;
            border-radius: 35px;
            margin: 20px;
            border: 10px solid rgba(197, 68, 120, 0);
            h2 {
                font-family: Montserrat, Gabarito, Futura;
                margin-bottom: 20px;
                margin-top: 20px;
            }
            img {
                max-height: 200px;
                border-radius: 30px;
                user-select: none;
                -webkit-user-drag: none;
            }
            span.hcb {
                font-family: Gabarito;
                background-color: rgb(190, 56, 112);
                padding: 8px;
                border-radius: 10px;
                color: white;
            }
            h3 {
                font-family: Montserrat, Gabarito, Futura;
                font-weight: 800;
                span {
                    transform: translateY(5px);
                }
            }
            button {
                background-color: rgb(197, 68, 119);
                margin: 5px;
            }
            button.invisible {
                background-color: rgb(184, 31, 92);
                cursor: not-allowed;
            }
            button.invisible:hover {
                background-color: rgb(184, 31, 92);
                color: white;
            }
            button:hover {
                background-color: white;
                color: rgb(197, 68, 119);
            }
        }
        div:hover {
            border: 10px solid rgb(197, 68, 119);
        }
        div.purchased {
            border: 10px solid rgb(250, 120, 176);
            box-shadow: 0px 0px 10px 10px rgba(185, 163, 167, 0.24);
        }
    }

    #title {
        padding: 20px;
        left: 30px;
        right: 30px;
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.377);
        background-color: rgb(200, 62, 85);
        border-radius: 20px;
        position: fixed;
        top: 50px;
        z-index: -1;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.406);
    }

    #checkOut {
        position: fixed;
        transform: translate(-50%, -50%);
        left: 95%;
        top: -200px;
        transition: top 0.7s ease-in-out;
        button {
            background-color: rgb(116, 49, 93);
        }
        button:hover {
            background-color: white;
            color: rgb(104, 44, 54);
        }
    }
    #checkOut.active {
        top: 60px;
    }
    #checkOut.active button {
        box-shadow: 0px 0px 10px 5px rgb(218, 119, 176);
        animation: pulse 1.5s infinite ease-in-out;
    }
    #checkOut.mobile {
        left: 85%;
    }
    @keyframes pulse {
        0%, 100% {
            box-shadow: 0px 0px 10px 3px rgb(218, 119, 176);
        }
        50% {
            box-shadow: 0px 0px 10px 8px rgb(218, 119, 176);
        }
    }
</style>
<svelte:window bind:innerWidth={charX}></svelte:window>
<div id="background">
    <img src="{base}/images/landing{Mobile}/1.png" alt="Heart background" />
</div>
<div id="title">
    <h1 style:margin-top=50px style:font-size=50px>SHOP</h1>
    <p style:margin-bottom=10px>Welcome to the shop for Version 1 of <span translate="no">Cœur</span>! Prices and the catalog of items below should be confirmed and you can now purchase items! Do note that prices and the catalog of items may change for Version 2.</p>
    <p><button onclick={function() {window.location.href = base + "/"}}>Return Home</button></p>
</div>
<div id="content">
{#each products as x}
    <div class:purchased={cart[x.id] > 0}>
        <img src="{base}/images/shop/{x.img}.png" alt="Boy holding plushie" />
        <h2>{x.name}</h2>
        <h3 translate="no"><span class="material-symbols-outlined" translate="no">favorite</span> {x.hearts} {#if cart[x.id] > 0}<i>(x {cart[x.id]})</i>{/if}</h3>
        <p><button class="purchase" class:invisible={cart[x.id] == 0} translate="no" onclick={function() {modifyCart(0, x.id)}}>-</button><button class="purchase" translate="no"  onclick={function() {modifyCart(1, x.id)}}>+</button></p>
        <p>{x.desc}</p>
        {#if x.grant}<span class="hcb">HCB Grant</span>{/if}
    </div>
{/each}
</div>
<div id="checkOut" class:active={checkOut} class:mobile={Mobile=="Mobile"}>
    <p><button style:padding=20px onclick={getOrder}><span class="material-symbols-outlined">shopping_cart_checkout</span></button></p>
</div>
<Footer />