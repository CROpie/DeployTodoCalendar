<script>
	/*
	import { enhance } from '$app/forms';
	export let form;
	*/

	export let data;
	let { supabase } = data;

	let email;
	let password;

	let login = true;

	const handleSignIn = async () => {
		const response = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (!response.error) {
			console.log('no error so redirecting...');
			window.location.href = '/home';
		}
	};

	const handleSignUp = async () => {
		console.log(location);
		await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/autologin`
			}
		});
	};

	const toggle = () => {
		login = !login;
	};
</script>

<div class="Login">
	<div class="login-box">
		{#if login}
			<form on:submit|preventDefault={handleSignIn}>
				<input name="email" bind:value={email} />
				<input type="password" name="password" bind:value={password} />
				<button>Sign in</button>
			</form>
			<div class="toggleContainer">
				<button class="outline secondary toggle" on:click={toggle}>Need to sign up?</button>
			</div>
		{:else}
			<form on:submit|preventDefault={handleSignUp}>
				<input name="email" bind:value={email} />
				<input type="password" name="password" bind:value={password} />
				<button>Sign up</button>
			</form>
			<div class="toggleContainer">
				<button class="outline secondary toggle" on:click={toggle}>Want to sign in?</button>
			</div>
		{/if}
	</div>

	<footer>
		<a href="http://www.freepik.com">Background image designed by Freepik</a>
	</footer>
</div>

<style>
	.login-box {
		flex: auto;

		margin: 5rem auto;
		width: 50%;
		border: 3px solid lightblue;
		padding: 2rem;
		border-radius: 0.5rem;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	input,
	button {
		text-shadow: 2px 2px 2px black;
		font-size: 1.5rem;
		color: white;
		background-color: transparent;
		padding: 0.5rem;
		border: 2px solid white;
		border-radius: 0.5rem;
		padding-left: 1rem;
	}
	input:hover,
	button:hover {
		background-color: rgba(138, 43, 226, 0.7);
	}
	p {
		text-align: center;
	}
	.message {
		font-size: 1rem;
		color: orange;
		text-shadow: 2px 2px 2px black;
		font-weight: 700;
	}
	.error {
		color: red;
		font-size: 0.75rem;
	}
	footer {
		text-align: center;
		height: 1rem;
		color: white;
	}
	a {
		color: white;
		font-size: 0.75rem;
	}
	.toggle {
		margin-top: 2rem;
	}
	.toggleContainer {
		display: flex;
		justify-content: center;
	}
</style>
