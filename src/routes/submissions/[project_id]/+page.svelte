<script>
    import { onMount } from "svelte";

    import { page } from "$app/state";

    import { base } from "$app/paths";

    import Footer from "$lib/footer.svelte";

    let projectId = $state(page.params.project_id);
    let projectName = $state("Loading...");
    let hours = $state(0);
    let sugarRushes = $state([]);
    let hearts = $state(0);
    //let username = $state("");
    let slackId = $state("");
    let totalHearts = $state(0);
    let totalProjects = $state(0);
    let notes = $state("")

    onMount(async function() {
        let data = await fetch("https://raw.githubusercontent.com/lynn89-eefje/coeur-database/refs/heads/main/submissions.json");
        let response = await data.json();
        console.log(response);

        

        //console.log(projectId);

        for (let i = 0; i < response.length; i++) {
            if (response[i].id == projectId) {
                console.log(true);
                projectName = response[i].name;
                hours = response[i].hours;
                //username = response[i].username;  -> No longer used due to styling purposes (name length can mess stuff up) and review efficiency (we need to manually write it for each review)
                slackId = response[i].slack_id;
                sugarRushes = response[i].sugar_rushes;
                hearts = response[i].hearts;
                notes = response[i].notes;
            }
        }
        if (slackId == "") {
            projectName = "ERROR"
            notes="This project does not exist"
        }
        else {
            for (let i = 0; i < response.length; i++) {
                if (response[i].slack_id == slackId) {
                    totalHearts += response[i].hearts;
                    totalProjects++;
                }
            }
        }
        console.log(totalHearts);
    })
</script>
<svelte:head>
    <title>{projectName} | Coeur</title>
</svelte:head>
<style>
    #background {
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(78, 26, 78);
        background-image: repeating-linear-gradient(60deg, rgb(78, 26, 78), rgb(78, 26, 78) 50px, rgb(95, 45, 95) 50px, rgb(95, 45, 95) 100px)
    }
    * {
        text-align: center;
    }
    h1 {
        font-size: 50px;
        font-weight: 900;
        color: rgb(255, 145, 163);
        text-shadow: 0px 5px 10px rgba(223, 167, 177, 0.26);
    }
    #pinkBackground {
        background-color: rgb(255, 66, 161);
        margin-top: -40px;
        padding-top: 20px;
    }
    #pinkContainer {
        margin: 30px;
        margin-top: 40px;
        padding: 20px;
        border-radius: 50px;
        background-color: rgb(146, 45, 96);
    }

    .rush {
        background-color: rgb(128, 0, 70);
        border: 5px rgb(190, 77, 140) solid;
        margin: 30px;
        border-radius: 20px;
        padding: 20px;
    }
</style>
<div id="background">
    <img src="/images/landing/1.png" alt="Background" style="visibility: hidden">
</div>
<p><button style:margin-top=30px style:border="4px pink solid" onclick={function() {window.location.href = base + "/"}}>Return to Site</button></p>
<p style:margin-top=50px>Project Review</p>
<h1 style:margin-bottom=10px>{projectName}</h1>
<h2 style:margin-bottom=10px style:color=pink>{slackId}</h2>
<h3 style:margin-bottom=100px>Total Hearts: {totalHearts}</h3>
<img src="/images/orphHeidi.png" style="width: 100%" alt="Orpheus and Heidi" />
<div id="pinkBackground">
    <!--255, 66, 161-->
    <div id="pinkContainer">
        {#if hearts > 1}
        <h2 style:margin-top=30px>{hearts} Hearts Awarded</h2>
        {/if}
        {#if hearts == 1}
        <h2 style:margin-top=30px>{hearts} Heart Awarded</h2>
        {/if}
        {#if hearts == 0}
        <h2 style:margin-top=30px>No Hearts Awarded</h2>
        {/if}
        <p style:font-size=20px style:margin-bottom=70px>{notes}</p>
        <h3>Sugar Rushes</h3>
        {#each sugarRushes as x}
            <div class="rush">
                <h4>+{x[0]}</h4>
                <p>{x[1]}</p>
            </div>
        {/each}
        {#if sugarRushes.length == 0}
        <p>None</p>
        {/if}

    </div>
    <Footer />
</div>