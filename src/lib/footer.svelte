<script>
    import { base } from "$app/paths"
</script>

<style>
    div {
        background-color: rgb(170, 83, 167);
        padding: 20px;
        text-align: center;
    }
</style>

<div>
    <button onclick={function() {window.location.href = "https://hackclub.com"}}>Hack Club</button>
    <p>Made with love; by teens, for teens</p>
    <span style:color="white" class="material-symbols-outlined" translate="no">favorite</span>
    <nav><a href="{base}/">Home</a> | <a href="{base}/privacy">Privacy Policy</a></nav>
</div>