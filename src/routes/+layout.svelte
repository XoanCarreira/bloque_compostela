<script>
    import Header from "./components/Header.svelte";
</script>

<Header/>
<slot/>




<style>
    :global(*){
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

</style>