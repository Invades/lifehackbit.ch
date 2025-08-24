<script lang="ts">
  export let id: string = '';
  export let value: string = '';
  export let placeholder: string = '';
  export let readonly: boolean = false;
  export let onInput: ((e: Event) => void) | undefined;
  export let className: string = '';
</script>

<textarea
  id={id}
  class="textbox w-full h-[300px] bg-[rgba(0,0,0,0.2)] text-white p-3 rounded-lg border border-white border-opacity-10 focus:outline-none focus:border-opacity-20 transition-all duration-200 resize-none {className}"
  placeholder={placeholder}
  bind:value={value}
  readonly={readonly}
  on:input={onInput}
></textarea>
