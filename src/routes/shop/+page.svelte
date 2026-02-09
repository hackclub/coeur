<script>
    import { base } from "$app/paths";

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
        margin-top: 380px;
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
            border-radius: 20px;
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
        }
        div:hover {
            border: 10px solid rgb(197, 68, 119);
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
</style>
<svelte:window bind:innerWidth={charX}></svelte:window>
<div id="background">
    <img src="{base}/images/landing{Mobile}/1.png" alt="Heart background" />
</div>
<div id="title">
    <h1 style:margin-top=50px style:font-size=50px>SHOP</h1>
    <p style:margin-bottom=10px>The shop is under construction and is subject to changes, along with the catalog of items and the price of each item. Items cannot currently be purchased.</p>
    <p><button onclick={function() {window.location.href = base + "/"}}>Return Home</button></p>
</div>
<div id="content">
    <div>
        <img src="{base}/images/shop/plushie.png" alt="Boy holding plushie" />
        <h2>Heart Plushie</h2>
        <h3><span class="material-symbols-outlined">favorite</span> 2</h3>
        <p>$10 USD for a heart themed plushie, or heart themed plushies! You can put this grant towards Amazon, Miniso, Shopee, Ikea, or EBay.</p>
        <span class="hcb">HCB Grant</span>
    </div>
    <div>
        <img src="{base}/images/shop/pens.png" alt="Pens" />
        <h2>Heart Themed Stationary</h2>
        <h3><span class="material-symbols-outlined">favorite</span> 2</h3>
        <p>$10 USD for heart themed stationary! You can put this grant towards Amazon, Miniso, Shopee, Ikea, or EBay.</p>
        <span class="hcb">HCB Grant</span>
    </div>
    <div>
        <img src="{base}/images/shop/sugarRush.png" alt="Sugar rush sticker"/>
        <h2>Sugar Rush Orpheus Sticker</h2>
        <h3><span class="material-symbols-outlined">favorite</span> 3</h3>
        <p>Don't try consuming this much sugar at home... you can get the sticker, though.</p>
    </div>
    <div>
        <img src="{base}/images/shop/lamp.png" alt="Lamp" />
        <h2>Heart Lamp</h2>
        <h3><span class="material-symbols-outlined">favorite</span> 5</h3>
        <p>$20 USD for a heart themed lamp, or heart themed lamps! You can put this grant towards Amazon, Miniso, Shopee, Ikea, or EBay.</p>
        <span class="hcb">HCB Grant</span>

    </div>
    <div>
        <img src="{base}/images/shop/sweatshirt.png" alt="Sweatshirt"/>
        <h2>Sweatshirt</h2>
        <h3><span class="material-symbols-outlined">favorite</span> 20</h3>
        <p>Featuring Orpheus and Heidi, the official <span>Cœur</span> sweatshirt with Hack Club branding!</p>
        

    </div>
</div>
<Footer />