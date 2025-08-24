<script lang="ts">
    import Ascii from './ascii.svelte';
    import IssueTracker from './issue_tracker.svelte';
    
    export let showIssueTracker: boolean = true;
    export let showAscii: boolean = true;
    export let asciiSmall: boolean = true;
    export let className: string = '';
    export let centered: boolean = false;
</script>

<div class="font-mono text-[1.5vh] text-white min-h-screen flex flex-col select-none overflow-x-hidden pb-6 relative {centered ? 'justify-center items-center' : 'justify-start items-center'} {className}">
    {#if showIssueTracker}
        <IssueTracker />
    {/if}
    
    {#if showAscii}
        <Ascii small={asciiSmall} />
    {/if}
    
    <slot />
</div>
