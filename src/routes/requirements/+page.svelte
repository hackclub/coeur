<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import Footer from "$lib/footer.svelte";

    let scroll = $state(0);

    let mobile = $state("");
    let charX = $state(0);
    $effect(function() {
        if (charX <= 900) {
            mobile = "Mobile";
        }
        else {
            mobile = "";
        }
    })
</script>
<svelte:head>
    <title>Requirements | Coeur</title>
    <link rel="preload" href="{base}/images/landing/1.png" as="image" />
    <link rel="preload" href="{base}/images/landingMobile/1.png" as="image" />
    <link rel="preload" href="{base}/images/wave5.png" as="image" />
    <link rel="preload" href="{base}/images/heidiEnvelope.png" as="image" />
</svelte:head>
<svelte:window bind:innerWidth={charX} bind:scrollY={scroll}></svelte:window>

<style>
    #header {
        z-index: -1;
        height: 400px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        img {
            width: 100%;
            overflow: clip;
        }
        #parallax {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 80%;
            text-align: center;
            text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.185);
            h1 {
                font-size: 40px;
                font-weight: 900;
            }

        }
    }
    #content {
        margin-top: 450px;
        z-index: 1;
        #container {
            background-color: rgb(83, 26, 50);
            padding: 20px;
            padding-top: 30px;
            text-align: center;
        }

        #container div {
            background-color: rgb(134, 59, 90);
            border: 5px solid rgb(219, 192, 219);
            padding: 10px;
            padding-top: 20px;
            border-radius: 20px;
            
            margin: 20px;
            h3 {
                font-family: Montserrat, Gabarito, Futura;
            }
            
        }
    }

    @keyframes occilate {
        0%, 100% {
            transform: translateY(0) rotate(1deg);
        }
        50% {
            transform: translateY(20px) rotate(3deg);
        }
    }
    #heidiEnvelope {
        animation: occilate 3s infinite ease-in-out;
    }
</style>
<div id="header">
    <img src="{base}/images/landing{mobile}/1.png" alt="Heart background"/>
    <div id="parallax">
        <div id="parallaxContent" style:transform = "translateY({scroll*0.7}px)">
                <h1>REQUIREMENTS</h1>
                <p style:margin-bottom=40px>These must be completed for all submissions to <span translate="no">Cœur</span></p>
                {#if mobile == ""}
            <img id="heidiEnvelope" src="{base}/images/heidiEnvelope.png" alt="Heidi in an envelope" style="width: 35%; height: auto; display: block; margin: 0 auto;" />
            {:else}
            <img id="heidiEnvelope" src="{base}/images/heidiEnvelope.png" alt="Heidi in an envelope" style="width: 65%; height: auto; display: block; margin: 0 auto;" />
            {/if}
        </div>
        
    </div>
</div>
<div id="content">
    <img src="{base}/images/wave5.png" alt="Wave graphic" style:width=100% style:transform="translateY(15px)"/>

    <div id="container">
        <button onclick={function() {window.location.href = base + "/"}}>Return Home</button>

        <div>
            <h3>Minimum 6 Hours</h3>
            <p>You must work on each submission for a minimum of 6 hours before submitting. All hours must be tracked on <a href="https://hackatime.hackclub.com">Hackatime</a></p>
        </div>
        <div>
            <h3>Theme</h3>
            <p>All projects must be e-cards, made about either someone you love <i>(find cool)</i> or about something that you love.</p>
        </div>
        <div>
            <h3>Deployed on the Web</h3>
            <p>All submissions need to be be deployed on the web and should remain on the web. You can choose between hosting your site statically or on a server; however, server crashes will not warrant accomodation.</p>
        </div>
        <div>
            <h3>Usage of Artificial Intelligence</h3>
            <p>No submission should ever be written by AI. Usage of AI is permitted for reference and must be written into your project by you entirely. AI reference code cannot make up more than 30% of your submission.</p>
        </div>
        <div>
            <h3>Accessibility</h3>
            <p>All submissions should fully work on mobile and desktop/laptop devices. This can be through interaction with the GUI.</p>
        </div>
        <div>
            <h3>Including a README</h3>
            <p>The repository that contains your code must include a <i>README.md</i>. Your README should include a description of your e-card and who/what it's for/about, what framework or languages you used to make it, areas in which you pushed yourself to make a new feature, and a list of all sugar rushes that apply to your project (alongside an explanation for why you should get that sugar rush). No sugar rushes will be applied to projects that do not have them listed on the README.</p>
        </div>
    </div>
</div>
<Footer />