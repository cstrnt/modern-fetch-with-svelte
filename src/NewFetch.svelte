<script>
  import Error from "./Error.svelte";
  import Spinner from "./Spinner.svelte";
  import { getData } from "./fetcher";
  const response = getData("http://localhost:4545");
</script>

<h1>New Fetch</h1>
{#await response}
  <Spinner />
{:then data}
  <code>{new Date(data).toTimeString()}</code>
{:catch}
  <Error />
{/await}
