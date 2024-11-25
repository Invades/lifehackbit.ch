<script lang="ts">
    import { onMount } from 'svelte';
    export let src: string;

    let script: HTMLScriptElement;

    onMount(() => {
        script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.type = 'module';
        document.body.appendChild(script);

        return () => {
            if (script) {
                document.body.removeChild(script);
            }
        };
    });
</script>