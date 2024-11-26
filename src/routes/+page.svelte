<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
        const params = new URLSearchParams(window.location.search);
        const redirect_path = params.get('path');
        
        if (redirect_path) {
            params.delete('path');
            const new_url = redirect_path + (params.toString() ? '?' + params.toString() : '');
            goto(new_url);
        }
    });
</script>

<div class="text-white min-h-screen flex flex-col justify-center items-center select-none overflow-hidden fixed inset-0">
    <div class="ascii-container font-mono text-lg leading-none">
        <pre id="ascii-art" class="glitch"></pre>
    </div>
    <p class="font-serif italic mt-4 text-sm !text-stone-400 text-center border border-white border-opacity-5 !bg-stone-900 !bg-opacity-50 p-2 rounded backdrop-blur">Original lifehackerz Since 200...</p>
    <div class="inline-flex space-x-2">
        <a id="button" href="/quotes" class="text-lg">𝓠𝓾𝓸𝓽𝓪𝓼</a>
        <a id="button" href="https://steamcommunity.com/groups/lifehackbitch" target="_blank" class="text-lg">𝓖𝓻𝓸𝓾𝓹𝓹𝓮</a>
        <a id="button" href="/2018" class="text-lg">𝓗𝓪𝓬𝓴𝔃</a>
    </div>
</div>