<script lang="ts">
    export let id: string = '';
    export let type: string = 'text';
    export let value: string = '';
    export let placeholder: string = '';
    export let className: string = '';
    export let onInput: ((e: Event) => void) | undefined = undefined;
    export let autocomplete: 'on' | 'off' | undefined = undefined;
</script>

<input
    {id}
    {type}
    {placeholder}
    {autocomplete}
    bind:value
    on:input={onInput}
    class="w-full min-w-0 text-sm bg-[rgba(255,255,255,0.05)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded backdrop-blur text-[0.9em] p-1.5 sm:p-2 opacity-70 placeholder:text-[rgba(255,255,255,0.5)] transition-all duration-200 focus:opacity-100 focus:border-opacity-20 {className}"
/>
