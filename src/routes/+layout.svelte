<script>
	import '../app.css';
    import load_ascii from '$lib/ascii';
    import { onMount } from 'svelte';
    import { afterNavigate } from '$app/navigation';
	let { children } = $props();

    onMount(load_ascii);
    afterNavigate(load_ascii);
</script>

<svelte:head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" type="image/x-icon" href="/favicon.ico">
	<meta name="darkreader-lock">
	<meta name="description" content="LIFEEEEHAAAACK BITCH!!! (◣_◢)">
	<meta property="og:image" content="/lifehackbitch.png">
	<meta name="keywords" content="lifehack, lifehacker, csgo, cs2, cheat, cheater, cheaters, LIFEHACK BITCH, LIFEEEEHAAAACK BITCH!!! (◣_◢), skeet.cc, gamesense.pub, neverlose.cc, hvh, skeet invite, fatality.win, fatality, neverlose, skeet, fatality invite, neverlose invite, skibid toilet, family guy funny moments">
	<title>LIFEEEHAAACK BITCH!!!</title>
</svelte:head>

<main>
	{@render children()}
</main>
