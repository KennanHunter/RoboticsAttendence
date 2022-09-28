<script lang="ts">
	import Header from '$lib/common/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		height: 100%;
	}
</style>
