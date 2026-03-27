<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import Footer from "$lib/footer.svelte";

    let mobile = $state("");
    let charY = $state(0);
    onMount(() => {
        if (window.innerWidth <= 900) {
            mobile = "Mobile";
        }
        else {
            mobile = "";
        }
        window.addEventListener("resize", function() {
            if (this.window.innerWidth <= 800) {
                mobile = "Mobile";
            }
            else {
                mobile = "";
            }
        })
    })

    let mobileFactor = $state(1);
    $effect(function() {
        if (mobile == "Mobile") {
            mobileFactor = 2.2;
        }
        else {
            mobileFactor = 1;
        }
    })

    let submissionsOpen = $state(false);
    let submissionMessage = $state("");
    onMount(async function() {
        let raw = await fetch("https://raw.githubusercontent.com/lynn89-eefje/coeur-database/refs/heads/main/v2.json");
        let json = await raw.json();
        console.log(json);

        if (json.submission_status == 1) {
            submissionsOpen = true;
            submissionMessage = `Then submit now! Submissions close on ${json.end_date}`
        }
        else if (json.submission_status == 0) {
            if (json.channel_members >= 200) {
                submissionMessage = "Submissions should open soon! Check back here or look out for updates on our Slack channel (#coeur)"
            }
            else {
                submissionMessage = `Submissions for Version 2 will open when we reach 200 channel members for our Slack channel! We're currently around ${json.channel_members}/200!`
            }
        }
        else {
            submissionMessage = "Submissions have now closed!"
        }
    })
</script>
<svelte:head>
    <title>Coeur</title>
    {#each [1, 2, 3, 4, 5] as num}
        <link rel="preload" as="image" href="{base}/images/landing/{num}.png"/>
        <link rel="preload" as="image" href="{base}/images/landingMobile/{num}.png"/>
    {/each}
    {#each [1, 2, 3, 4] as num}
        <link rel="preload" as="image" href="{base}/images/wave{num}.png" />
    {/each}
</svelte:head>
<svelte:window bind:scrollY={charY}></svelte:window>
<style>
    .graphic {
        transform-origin: bottom center;
    }
    
    #landing {
        overflow: clip;
        position: relative;
        user-select: none;
        -webkit-user-drag: none;
        img {
            position: absolute;
            user-select: none;
            -webkit-user-drag: none;
            bottom: 0;
            top: auto;
            right: 0;
            left: 0;
        }
    } 

    #landing img:first-child {
        position: relative;
        display: block;
        z-index: 0;
    }

    .wave {
        animation: wave 4s infinite ease-in-out;
    }

    .waveDown {
        animation: waveDown 5s infinite ease-in-out;
        animation-delay: 2s;
    }

    @keyframes wave {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(8px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    @keyframes waveDown {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-8px);
        }
        100% {
            transform: translateY(0px);
        }
    }
 
    #ys {
        display: grid;
        padding-top: 50px;
        padding-left: 20px;
        padding-right: 20px;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        background-color: rgb(255, 66, 161);
        overflow: clip;
        div {
            padding: 20px;
        }
        div:first-child {
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        div:last-child {
            text-align: center;
        }
    }
    #ws {
        background-color: rgb(138, 69, 128);
        z-index: 1;
    }
    #grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        overflow: clip;
        padding-left: 20px;
        padding-right: 20px;
        z-index: 1;

        div {
            padding: 20px;
        }
    }
    #grid div:first-child {
        text-align: center;
    }
    #grid div:last-child {
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    #grid.mobile {
        div:first-child {
            text-align: right;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            
        }
        div:last-child {
            text-align: center;
        }
    }

    #sugarRush {
        background-color: rgb(129, 19, 65);
        text-align: center;
        position: relative;
        padding-bottom: 20px;

        h1, h2, p {
            padding: 20px;
        }

        #sugarGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-gap: 20px;
            margin-left: 20px;
            margin-right: 20px;

            div {
                background-color: rgb(161, 86, 118);
                border: 5px solid rgb(182, 110, 140);
                border-radius: 20px;
                padding-top: 20px;
                h3, p {
                    padding: 10px;
                }
                h3 {
                    font-family: Montserrat, Gabarito, Futura;
                    font-weight: 800;
                }
            }
        }
    }

    #submit {
        background-color: rgb(162, 72, 80);
        text-align: center;

        button {
            background-color: rgb(67, 17, 21);
            color: white;
            margin-bottom: 30px;
        }
        button:hover {
            color: rgb(67, 17, 21);
            background-color: white;
        }
    }

    #faq {
        background-image: url("{base}/images/landing/1.png");
        background-color: rgb(130, 30, 65);
        padding-bottom: 20px;
        text-align: center;
        h1 {
            padding: 20px;
        }
        div {
            h2, p {
                padding: 10px;
            }
            background-color: rgb(161, 86, 118);
            border: 5px solid rgb(182, 110, 140);
            border-radius: 20px;
            padding-top: 20px;
            margin: 20px;
        }
    }
</style>
<div id="landing">
    {#if mobile == ""}
    <img src="{base}/images/landing{mobile}/1.png" style:transform="translateY({charY*0.5*mobileFactor}px)" alt="background"/>
    {:else}
    <img src="{base}/images/landing{mobile}/1.png" alt="background"/>
    {/if}
    <img src="{base}/images/landing{mobile}/2.png" style:transform="translateY({charY*0.5*mobileFactor}px)" id="titleLogo" translate="no" alt="Title" class="graphic"/>
    <img src="{base}/images/landing{mobile}/3.png" class="graphic" alt="Orpheus and Heidi" />
    <img src="{base}/images/landing{mobile}/4.png" class="graphic wave" alt="Pink Wave"/>
    <img src="{base}/images/landing{mobile}/5.png" class="graphic" alt="Orpheus's Hands" />
</div>
<div id="ys">
    <div>
        <h1 style:font-size="50px">Make E-Cards</h1>
        <h3>E-Cards should be viewable on the web and engaging!</h3>
        <button onclick={function() {window.location.href = base + "/requirements"}} style:margin-top="20px" style:width="60%">View requirements for submissions</button>
    </div>
    <div>
        <a href="https://hacklyn.city/orpheus"><img translate="no" src="{base}/images/orpheusCard.png" alt="Demo e-card" style:max-width=90% style:transform="rotate(2deg)"/></a>
        <p>Check out this example! <i>(Click on the image)</i></p>
        <p><button>More Resources</button></p>
    </div>
</div> 
<div id="ws">
    <img class="waveDown" src="{base}/images/wave1.png" alt="Wave graphic" style:width="100%" style:user-select="none" style:-webkit-user-drag="none"/>
    <div id="grid" class:mobile={mobile != ""}>
        {#if mobile == ""}
        <div>
            <img translate="no" src="{base}/images/sweatshirt.png" alt="Sweatshirt" style:max-width=60% style:height="auto" style:transform="rotate(-2deg)" style:border-radius=30px/>
            <p>Each item requires hearts to purchase. You can earn hearts from your submissions; the amount of hearts for each submission depends on the quality of your project, duration of time you put into making it, and sugar rushes <i>(next section)</i>.</p>
        </div>
        <div>
            <h1 style:font-size="50px">Earn Prizes</h1>
            <h3>The shop includes heart themed merch and even a Hack Club sweatshirt!</h3>
            <button onclick = {function() { window.location.href = base + "/shop"}} style:margin-top="20px" style:width="60%">Check out the Shop</button>
        </div>
        {:else}
        <div>
            <h1 style:font-size="50px">Earn Prizes</h1>
            <h3>The shop includes heart themed merch and even a Hack Club sweatshirt!</h3>
            <button onclick = {function() { window.location.href = base + "/shop"}} style:margin-top="20px" style:width="60%">Check out the Shop</button>
        </div>
        <div> 
            <img style:border-radius=30px style="display: flex; align-self: center;" translate="no" src="{base}/images/sweatshirt.png" alt="Sweatshirt" style:max-width=60% style:height="auto" style:transform="rotate(-2deg)"/>
            <p>Each item requires hearts to purchase. You can earn hearts from your submissions; the amount of hearts for each submission depends on the quality of your project, duration of time you put into making it, and sugar rushes <i>(next section)</i>.</p>
        </div>
        {/if} 
    </div>
</div>
<div id="sugarRush">
    <img class="waveDown" src="{base}/images/wave2.png" alt="Wave graphic" style:width="100%" style:user-select="none" style:-webkit-user-drag="none"/>
    <h1 style:font-size=50px>Sugar Rushes!</h1>
    <p style:margin-bottom=30px>You can earn more hearts for each project you submit by getting sugar rushes. Sugar rushes are bonuses for completing tasks and pushing your bounds!</p>
    {#if mobile == ""}
    <img src="{base}/images/donut.png" alt="Orpheus in a giant donut" style="width: 30%; height: auto"/>
    {:else}
    <img src="{base}/images/donut.png" alt="Orpheus in a giant donut" style="width: 50%; height: auto;"/>
    {/if}
    <h2 style:font-family="Playwrite DK Loopet, Montserrat, Gabarito" style:margin-bottom=20px>Sugar Rush Bonuses</h2>
    <div id="sugarGrid">
        <div>
            <h3>+1 Heart</h3>
            <p>Spend over 12 hours on your project</p>
        </div>
        <div>
            <h3>+1 Heart</h3>
            <p>Have your project work fully on mobile and desktop. Your responsive design should work well.</p>
        </div>
        <div>
            <h3>+1 Heart</h3>
            <p>Make a card for someone in Hack Club! Include a picture in the slack channel of you sending them the card.</p>
        </div>
        <!--<div>
            <h3>+1 Heart</h3>
            <p>Full usability through keyboard. Users should be able to fully control what pages they are on without having to use buttons or elements on the UI.</p>
        </div>-->
        <div>
            <h3>+1 Heart</h3>
            <p>Use a web-framework you've never learned or used before!</p>
        </div>
        <div>
            <h3>+2 Hearts</h3>
            <p>Participate in a demo and get approved by staff for this bonus. Demos will be announced in the slack channel. You can only get this bonus once for an individual project.</p>
        </div>
        <div>
            <h3>+3 Hearts</h3>
            <p>Exceptional quality project. This sugar rush is awarded by staff only to impressive and well-built projects. You do not need to list this on your README.</p>
         </div>
    </div>
    <p>More may be added in the future. Check back here periodically!</p>
</div>
<div id="submit">
    <img src="{base}/images/wave3.png" alt="Wave graphic" class="waveDown" style="width: 100%; user-select: none; -webkit-user-drag: none" />

    <h1 style="padding: 20px;">Ready to submit?</h1>
    {#if submissionsOpen}
    <p>{submissionMessage}</p>
    <button onclick={function() {window.location.href = "https://submit.hackclub.com/coeur"}}>Submit Work</button><br>
    {:else}
    <p>{submissionMessage}</p>
    {/if}
    
    {#if mobile == ""}
    <img src="{base}/images/envelope.png" alt="Envelope" style="max-width: 500px; transform: rotate(3deg);"/>
    {:else}
    <img src="{base}/images/envelope.png" alt="Envelope" style="max-width: 200px; transform: rotate(3deg);"/>
    {/if}
</div>
<div id="faq">
    <img class="waveDown" alt="Wave graphic" src="{base}/images/wave4.png" style="width: 100%; height: auto; user-select: none; -webkit-user-drag: none" /> 
    <h1 style:text-shadow="0px 0px 20px grey">FAQ</h1>
    <div>
        <h2>Can I participate in this program?</h2>
        <p>If you are 13-18 and in high school, then yes! However, we aren't able to ship items or distribute grants in some countries <i>(most countries are supported)</i>. Let us know if you have any doubts about your ability to recieve prizes!</p>
    </div>
    <div>
        <h2>Can I submit multiple projects?</h2>
        <p>Yes! You can make multiple e-cards; however, you should challenge yourself to add more features to each new submission <i>(we will check the progression of your submissions)</i>. For prizes such as the sweatshirt, you aren't likely to get enough hearts from one submission to purchase.</p>
    </div>
    <div>
        <h2>Can I use Lapse?</h2>
        <p>You can use <a href="https://lapse.hackclub.com">Lapse</a> to track hours worked on graphics and art; however, this should not exceed 20% of the total hours you submit.</p>
    </div>
    <div>
        <h2>How many hours do I need to put into a project at minimum?</h2>
        <p>You need to put in 6 hours for each submission, at a minimum.</p>
    </div>
    <div>
        <h2>If I get a grant for an item, how can I use it?</h2>
        <p>All grants will be processed and distributed on <a href="https://hcb.hackclub.com">HCB</a>. You should signup on the platform and use the same email that you use on your submission form.</p>
    </div>
    <div>
        <h2>How many hearts will an average project get?</h2>
        <p>Projects are awarded between 2-10 hearts based on overall quality. From this, sugar rushes are then applied. The demo project would get around 8 hearts in total, including one +2 sugar rush.</p>
    </div>
    <div>
        <h2>I have more questions!</h2>
        <p>Ask your questions in the <i>{"#coeur"}</i> channel on the Hack Club slack!</p>
    </div>
</div>
<Footer />