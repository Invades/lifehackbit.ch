<script>
    import Ascii from '$lib/components/ascii.svelte';
    import Button from '$lib/components/button.svelte';
    import SocialLink from '$lib/components/social_link.svelte';
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
    <SocialLink 
        href="https://steamcommunity.com/groups/lifehackbitch"
        icon="mdi:steam"
        label="Steam group"
        position="top-right"
    />
    <SocialLink 
        href="https://github.com/Invades/lifehackbit.ch"
        icon="mdi:github"
        label="Github page"
        position="top-left"
    />
    <Ascii small={false} />
    <p class="font-serif italic mt-4 text-sm !text-stone-400 text-center border border-white border-opacity-5 !bg-stone-900 !bg-opacity-50 p-2 rounded backdrop-blur">Original lifehackerz Since 200...</p>
    <div class="inline-flex space-x-2">
        <Button href="/2018">𝓗𝓪𝓬𝓴𝔃</Button>
        <Button href="/quotes">𝓠𝓾𝓸𝓽𝓪𝓼</Button>
        <Button href="/text-gen">𝓣𝓮𝔁𝓼𝓽</Button>
    </div>
</div>