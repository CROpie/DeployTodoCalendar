<script>
	console.log('/ +layout.svelte');

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import '../app.css';
	import beerBear from '$lib/images/BearbeerCrop.png';

	import { page } from '$app/stores';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);
	$: console.log(session);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});

	const handleSignOut = async () => {
		await supabase.auth.signOut();
		window.location.href = '/';
	};
</script>

<div class="container">
	<div class="header">
		<div class="padding">
			<img src={beerBear} alt="Beer Bear" />
		</div>

		{#if session}
			<h2>Welcome!</h2>
			<button type="button" on:click={handleSignOut}>Log Out</button>
		{:else}
			<h2>Please log in to continue.</h2>
			<h3 class="padding2">.</h3>
		{/if}
	</div>

	<div class="main">
		<slot />
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.container {
		font-family: Arial;
	}
	.header {
		height: 4rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 2px solid white;
		font-size: 1.5rem;
	}
	.padding {
		margin-left: 2rem;
	}
	img {
		height: 4rem;
	}
	h2 {
		color: white;
		text-align: center;
		text-shadow: 2px 2px 2px black;
	}
	h3 {
		visibility: hidden;
		margin-right: 2rem;
	}
	button {
		font-family: Arial;
		border: 2px solid lightblue;
		background-color: transparent;
		color: white;
		border-radius: 0.5rem;
		outline: none;
		padding: 1rem;
		margin-right: 2rem;
	}
	button:hover {
		background-color: white;
		color: black;
	}
	button:active {
		background-color: black;
		color: white;
	}
	.main {
		height: 100%;
	}
</style>
