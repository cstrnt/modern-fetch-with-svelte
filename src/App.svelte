<script>
  import OldFetch from "./OldFetch.svelte";
  import NewFetch from "./NewFetch.svelte";
  let currentPage = 1;
  function handlePageswitch() {
    currentPage = currentPage === 1 ? 2 : 1;
  }
</script>

<button class="button is-primary" on:click={handlePageswitch}>
  Switch Page
</button>
{#if currentPage === 1}
  <OldFetch />
{:else}
  <NewFetch />
{/if}
