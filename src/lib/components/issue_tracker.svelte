<script lang="ts">
    import Link from './nav_link.svelte';
    import { onMount } from 'svelte';
    let scale = 1;
    const minScale = 0.7;
    function updateScale() {
        const w = window.innerWidth;
        let newScale = w < 400 ? 0.7 : w < 600 ? 0.85 : 1;
        scale = Math.max(newScale, minScale);
    }
    onMount(() => {
        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    });
</script>

<div class="absolute top-2.5 right-2.5 p-2 bg-rgba(255, 255, 255, 0.05) border border-white border-opacity-10 text-[rgba(255,255,255,0.5)] rounded backdrop-blur text-sm min-w-[120px] min-h-[36px] z-[80] origin-top-right whitespace-nowrap overflow-x-auto" style="transform: scale({scale}); min-width:120px; min-height:36px;">
    Report issues and suggest additions <Link href="https://github.com/Invades/lifehackbit.ch/issues" blank={true}>here</Link>
</div>
