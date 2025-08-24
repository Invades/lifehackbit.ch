<script lang="ts">
    export let show: boolean = false;
    export let title: string = '';
    export let message: string = '';
    export let infoText: string = '';
    export let confirmText: string = 'Confirm';
    export let cancelText: string = 'Cancel';
    export let onConfirm: (() => void) | undefined = undefined;
    export let onCancel: (() => void) | undefined = undefined;
</script>

{#if show}
    <div class="fixed top-0 left-0 z-50 bg-black bg-opacity-50 transition-all duration-300 ease-in-out w-full h-full">
        <div class="backdrop-blur fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-black bg-opacity-70 border border-white border-opacity-10 rounded-lg p-4 text-white transition-all duration-300 ease-in-out max-w-[80%] w-[300px] z-50">
            {#if title}
                <h3 class="text-lg font-bold mb-2">{title}</h3>
            {/if}
            <p class="mb-2">{message}</p>
            {#if infoText}
                <p class="text-sm text-opacity-50 text-white mb-4">{infoText}</p>
            {/if}
            <div class="flex justify-center gap-2 pt-2">
                <button 
                    class="rounded transition-all duration-200 inline-block ease-in-out px-3 text-base py-2 hover:text-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:transform hover:scale-105"
                    on:click={onCancel}
                >
                    {cancelText}
                </button>
                <button 
                    class="rounded transition-all duration-200 inline-block ease-in-out px-3 text-base py-2 hover:text-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:transform hover:scale-105"
                    on:click={onConfirm}
                >
                    {confirmText}
                </button>
            </div>
        </div>
    </div>
{/if}
