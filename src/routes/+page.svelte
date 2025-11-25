<script lang="ts">
  let { data } = $props();
</script>

<h1>Welcome to SvelteKit</h1>

<p>
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a>
	to read the documentation
</p>

<p>From the server:</p>

<div style="padding: 0.5rem 1rem; border: 1px solid currentColor;">
  <p><code>NODE_ENV={data.NODE_ENV}</code></p>
  <p><code>NAME={data.NAME}</code></p>
</div>
