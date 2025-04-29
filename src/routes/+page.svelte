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
    <a class="" 
       href="https://steamcommunity.com/groups/lifehackbitch" 
       target="_blank"
       aria-label="Steam group">
        <svg class="transition-all duration-300 ease-in-out text-opacity-60 hover:text-opacity-100 fixed top-2.5 right-2.5 p-2 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white border-opacity-10 text-[rgba(255,255,255,0.5)] rounded backdrop-blur z-50" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10c-4.6 0-8.45-3.08-9.64-7.27l3.83 1.58a2.84 2.84 0 0 0 2.78 2.27c1.56 0 2.83-1.27 2.83-2.83v-.13l3.4-2.43h.08c2.08 0 3.77-1.69 3.77-3.77s-1.69-3.77-3.77-3.77s-3.78 1.69-3.78 3.77v.05l-2.37 3.46l-.16-.01c-.59 0-1.14.18-1.59.49L2 11.2C2.43 6.05 6.73 2 12 2M8.28 17.17c.8.33 1.72-.04 2.05-.84s-.05-1.71-.83-2.04l-1.28-.53c.49-.18 1.04-.19 1.56.03c.53.21.94.62 1.15 1.15c.22.52.22 1.1 0 1.62c-.43 1.08-1.7 1.6-2.78 1.15c-.5-.21-.88-.59-1.09-1.04zm9.52-7.75c0 1.39-1.13 2.52-2.52 2.52a2.52 2.52 0 0 1-2.51-2.52a2.5 2.5 0 0 1 2.51-2.51a2.52 2.52 0 0 1 2.52 2.51m-4.4 0c0 1.04.84 1.89 1.89 1.89c1.04 0 1.88-.85 1.88-1.89s-.84-1.89-1.88-1.89c-1.05 0-1.89.85-1.89 1.89"/></svg>
    </a>
    <a class="" 
       href="https://github.com/Invades/lifehackbit.ch" 
       target="_blank"
       aria-label="Github page">
       <svg class="transition-all duration-300 ease-in-out text-opacity-60 hover:text-opacity-100 fixed top-2.5 left-2.5 p-2 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white border-opacity-10 text-[rgba(255,255,255,0.5)] rounded backdrop-blur z-50" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
    </a>
    <div class="ascii-container font-mono text-lg leading-none">
        <pre id="ascii-art" class="glitch"></pre>
    </div>
    <p class="font-serif italic mt-4 text-sm !text-stone-400 text-center border border-white border-opacity-5 !bg-stone-900 !bg-opacity-50 p-2 rounded backdrop-blur">Original lifehackerz Since 200...</p>
    <div class="inline-flex space-x-2">
        <a id="button" href="/2018" class="text-lg">𝓗𝓪𝓬𝓴𝔃</a>
        <a id="button" href="/quotes" class="text-lg">𝓠𝓾𝓸𝓽𝓪𝓼</a>
        <a id="button" href="/text-gen" class="text-lg">𝓣𝓮𝔁𝓼𝓽</a>
    </div>
</div>