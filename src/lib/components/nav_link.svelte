<script>
    export let href = '#';
    export let blank = false;
</script>

<a href={href} class="underline text-white transition-all duration-300 ease-in-out text-opacity-60 hover:text-opacity-80" target={blank ? '_blank' : undefined}>
    <slot />
</a>