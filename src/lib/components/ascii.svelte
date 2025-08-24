<script lang="ts">
  export let small: boolean = false;
  export let text: string = 
`　　　　　　　　　　．：　　　　　　　　　　　　　　　　　　　　　　　　：　　　　　　　　　　　
　　　　　　　７　　．Ｂ：　　　　　　　　　　　　　　　　　　　　　　７Ｂ　　：ｒ　　　　　　　
　　　　　　Ｘ７　　　ＢＢ．　　　　　　　　　　　　　　　　　　　　ｒＢＢ　　　Ｓｉ　　　　　　
　　　　　：Ｂ　　　　ＢＢＢ：　　　　　　　　　　　　　　　　　　７ＢＢＢ　　　　Ｂ　　　　　　
　　　　　８７　　　　ＢＢＢＢ：　　　　　　　　　　　　　　　　７ＢＢＢＢ　　　　Ｍ７　　　　　
　　　　　Ｂ：　　　　ＢＢＢＢＢｉ　　　　　　　　　　　　　　７ＢＢＢＢＢ　　　　ＸＸ　　　　　
　　　　　Ｂ．　　　　ＢＢＢＢＢＢ７　　　　　　　　　　　　２ＢＢＢＢＢＢ　　　　Ｓ０　　　　　
　　　　　Ｂ：　　　　ＢＢＢＢＢＢＢＸ　　　　　　　　　　ＭＢＢＢＢＢＢＢ　　　　Ｘ２　　　　　
　　　　　Ｓ２　　　　ＢＢＢＢＢＢＢＢ７　　　　　　　　ＳＢＢＢＢＢＢＢＭ　　　　Ｍ：　　　　　
　　　　　　Ｍ　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　：８　　　　　　
　　　　　　ｉＭ　　　　　　　　　　　　　ＸＸＸＸＸＸＸ　　　　　　　　　　　　．０　　　　　　
.　 　　　　　　　 　　　　ＸＸＸＸＸＸ　　　　　　　　　　　.　`;
</script>

<a
  href="/"
  class={`glitch whitespace-pre inline-block text-center relative z-[1] no-underline ${
    small
      ? "text-[clamp(5px,0.6vh,7px)] mt-6 mb-8"
      : "text-[clamp(7px,0.8vh,20px)] md:text-[clamp(12px,1.2vh,32px)] lg:text-[clamp(16px,1.5vh,10px)]"
  } transform scale-[1] origin-center`}
  id={small ? "ascii-art-small" : "ascii-art"}
  data-text={text}
>
  {text}
</a>