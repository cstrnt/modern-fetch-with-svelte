<script>
  import Error from "./Error.svelte";
  import Spinner from "./Spinner.svelte";
  import { getData } from "./fetcher";
  const response = getData("https://0nzwp.sse.codesandbox.io/");
</script>

<h1>New Fetch</h1>
{#await $response}
  <Spinner />
{:then data}
  <code>{new Date(data).toTimeString()}</code>
{:catch}
  <Error />
{/await}
