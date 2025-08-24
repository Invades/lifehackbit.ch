<script lang="ts">
  export let id: string = '';
  export let onClick: (() => void) | undefined = undefined;
  export let type: "button" | "submit" | "reset" | null | undefined = "button";
  export let className: string = '';
  export let small: boolean = false;
  export let href: string | undefined = undefined;
</script>


{#if href}
  <a
    id={id}
    href={href}
    class={small
      ? `px-3 py-1.5 text-sm bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded-lg backdrop-blur transition-all duration-300 ${className}`
      : `mt-[5px] inline-block py-[5px] px-[15px] text-base text-[rgb(148,148,148)] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] border border-white border-opacity-5 rounded text-center no-underline cursor-pointer transition-all duration-200 ease-in-out backdrop-blur opacity-90 hover:opacity-100 ${className}`
    }
    ><slot /></a>
{:else}
  <button
    id={id}
    type={type}
    class={small
      ? `px-3 py-1.5 text-sm bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded-lg backdrop-blur transition-all duration-300 ${className}`
      : `mt-[5px] inline-block py-[5px] px-[15px] text-base text-[rgb(148,148,148)] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] border border-white border-opacity-5 rounded text-center no-underline cursor-pointer transition-all duration-200 ease-in-out backdrop-blur opacity-90 hover:opacity-100 ${className}`
    }
    on:click={onClick}
  >
    <slot />
  </button>
{/if}
