<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import Footer from "$lib/footer.svelte";

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
    <title>Privacy Policy | Coeur</title>
    <link rel="preload" href="{base}/images/landing/1.png" as="image" />
    <link rel="preload" href="{base}/images/landingMobile/1.png" as="image" />
</svelte:head>
<svelte:window bind:innerWidth={charX}></svelte:window>

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
        div {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 70%;
            padding: 20px;
            border-radius: 20px;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.371);
            text-align: center;
            background-color: rgb(192, 48, 110);
        }
    }
    #content {
        margin-top: 500px;
        z-index: 1;
        background-color: rgb(148, 75, 148);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        padding: 20px;
        padding-top: 40px;
        text-align: center;

        div {
            background-color: rgb(114, 43, 114);
            border: 5px solid rgb(179, 122, 179);
            padding: 10px;
            padding-top: 20px;
            border-radius: 20px;
            margin: 20px;
            h3 {
                font-family: Montserrat, Gabarito, Futura;
            }
        }
    }
</style>
<div id="header">
    <img src="{base}/images/landing{mobile}/1.png" alt="Heart background"/>
    <div>
        <h1 style:margin-bottom=20px>Privacy Policy</h1>
        <h2 style:margin-bottom=40px>Your privacy is paramount to us</h2>
        <button onclick={function() {window.location.href = base + "/"}}>Return Home</button>

    </div>
</div>
<div id="content">
    <h2 style:margin-bottom=20px><span translate="no">Cœur</span> is dedicated to keeping your personal information secure and safe, and committed to having no data breach incidents. Below are our privacy policies for handling your data.</h2>
    <div>
        <h3>Identity Vault Verification</h3>
        <p>Identity Vault will be used to verify your eligibility. No staff member outside HCB's operations team can directly access your data in the Identity Vault at <a href="https://auth.hackclub.com">auth.hackclub.com</a>. <span translate="no">Cœur</span> staff will only receive your full legal name, email, eligibility to participate, and outside information that we request from you on your submission form.</p>
    </div>
    <div>
        <h3>Authorized Access to Information</h3>
        <p>All individuals that have access to your submission data and Identity Vault information are under NDA. This includes all staff for <span translate="no">Cœur</span>. No public API, behind auth or not, will contain PII (personally identifiable information), which includes preferred names, legal names, and shipping addresses. All PII will be securely stored on Airtable, Fillout, or on a local computer. Any data stored locally will be deleted at the end of the event; only individuals under NDA will be storing or accessing information locally.</p>
    </div>
    <div>
        <h3>Usage of Artificial Intelligence</h3>
        <p>No PII (personally identifiable information), which includes preferred names, legal names, and shipping addresses, will be given to any publically available AI model or platform. Statistics such as coding hours or heart balances, as well as publically available information such as usernames or Slack IDs, may be given to a publically available AI model or platform.</p>
    </div>
</div>
<Footer />