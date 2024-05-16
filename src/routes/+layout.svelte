<script>
    import Header from "./components/Header.svelte";
    import Popup from "./components/Popup.svelte";
</script>


<Popup/>
<Header/>
<slot/>




<style>
    :global(*){
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

</style>