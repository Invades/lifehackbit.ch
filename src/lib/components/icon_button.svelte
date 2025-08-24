<script lang="ts">
    export let id: string = '';
    export let className: string = '';
    export let disabled: boolean = false;
</script>

<button
    {id}
    class="border border-white border-opacity-10 px-1 py-1 text-sm rounded bg-[rgba(80,80,80,0.5)] opacity-50 hover:opacity-100 backdrop-blur transition-all duration-300 ease-in-out hover:text-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:transform hover:scale-105 cursor-pointer flex items-center gap-1 {disabled ? 'opacity-30 cursor-not-allowed' : ''} {className}"
    on:click
    {disabled}
>
    <slot />
</button>
