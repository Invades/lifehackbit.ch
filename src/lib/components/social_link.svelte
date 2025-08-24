<script lang="ts">
    import Icon from '@iconify/svelte';
    
    export let href: string;
    export let icon: string;
    export let label: string;
    export let position: 'top-left' | 'top-right' = 'top-right';
</script>

<a 
    class="transition-all duration-300 ease-in-out text-opacity-60 hover:text-opacity-100 fixed top-2.5 p-2 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white border-opacity-10 text-[rgba(255,255,255,0.5)] rounded backdrop-blur z-50 {position === 'top-left' ? 'left-2.5' : 'right-2.5'}"
    {href}
    target="_blank"
    aria-label={label}
>
    <Icon {icon} width="32" height="32" />
</a>
