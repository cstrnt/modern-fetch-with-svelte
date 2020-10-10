<script>
  import Error from "./Error.svelte";
  import Spinner from "./Spinner.svelte";
  async function getData() {
    const response = await fetch("http://localhost:4545");
    const data = await response.json();
    return data;
  }
  let response = getData();
</script>

<h1>Old Fetch</h1>
{#await response}
  <Spinner />
{:then data}
  <code>{new Date(data).toTimeString()}</code>
{:catch}
  <Error />
{/await}
