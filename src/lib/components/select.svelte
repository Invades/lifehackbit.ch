<script lang="ts">
    export let id: string = '';
    export let value: string = '';
    export let className: string = '';
    export let onInput: ((e: Event) => void) | undefined = undefined;
</script>

<select
    {id}
    bind:value
    on:input={onInput}
    class="text-sm bg-[rgba(255,255,255,0.05)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded backdrop-blur text-[0.9em] p-2 opacity-70 transition-all duration-200 focus:opacity-100 focus:border-opacity-20 {className}"
>
    <slot />
</select>
