<script lang="ts">
  export let className: string = '';
</script>

<div class={`bg-[rgba(0,0,0,0.3)] p-2 rounded-lg backdrop-blur-md border border-white border-opacity-10 ${className}`}>
  <slot />
</div>
