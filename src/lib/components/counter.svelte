<script lang="ts">
    export let id: string = '';
    export let label: string = '';
    export let count: number = 0;
    export let className: string = '';
</script>

<div {id} class="border bg-[rgba(255,255,255,0.05)] border-white border-opacity-10 rounded backdrop-blur text-[0.9em] px-2 py-1 opacity-70 text-center {className}">
    {label}: <span>{count}</span>
</div>
