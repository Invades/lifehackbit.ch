<script lang="ts">
    import { onMount } from 'svelte';
    import { init_generator } from '$lib/generator';

    let generatedText: string = '';

    function insert_text(text: string) {
        const textArea = document.getElementById('original-text') as HTMLTextAreaElement;
        if (textArea) {
            const start = textArea.selectionStart;
            const end = textArea.selectionEnd;
            const currentValue = textArea.value;
            textArea.value = currentValue.substring(0, start) + text + currentValue.substring(end);
            textArea.dispatchEvent(new Event('input'));
            textArea.selectionStart = textArea.selectionEnd = start + text.length;
            textArea.focus();
        }
    }

    function copy_text() {
        const textArea = document.getElementById('generated-text') as HTMLTextAreaElement;
        if (textArea) {
            navigator.clipboard.writeText(textArea.value).then(() => {
                const copyButton = document.getElementById('copy-button');
                if (copyButton) {
                    copyButton.classList.add('bg-[rgba(0,255,0,0.1)]');
                    setTimeout(() => {
                        copyButton.classList.remove('bg-[rgba(0,255,0,0.1)]');
                    }, 500);
                }
            });
        }
    }

    onMount(() => {
        init_generator();
    });
</script>

<div class="font-mono text-[1.5vh] text-white min-h-screen flex flex-col select-none overflow-x-hidden">
    <div class="fixed top-2.5 right-2.5 p-2 bg-rgba(255, 255, 255, 0.05) border border-white border-opacity-10 text-[rgba(255,255,255,0.5)] rounded backdrop-blur text-[0.9em] z-50">
        Report issues and suggest additions <a class="underline text-white transition-all duration-300 ease-in-out text-opacity-60 hover:text-opacity-80" href="https://github.com/Invades/lifehackbit.ch/issues" target="_blank">here</a>
    </div>
    <div class="fixed top-10 left-0 w-full flex justify-center z-50">
        <a href="/" class="text-decoration-none" aria-label="Home">
            <div class="ascii-container">
                <div class="glitch" id="ascii-art-small"></div>
            </div>
        </a>
    </div>

    <div class="flex-1 flex items-center justify-center">
        <div class="container px-4 max-w-6xl">
            <div class="relative z-[60] mb-6">
                <div class="bg-[rgba(0,0,0,0.3)] p-2 rounded-lg backdrop-blur-md border border-white border-opacity-10">
                    <div class="flex items-center justify-center">
                        <div id="style-select-container"></div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-[rgba(0,0,0,0.3)] p-4 rounded-lg backdrop-blur-md border border-white border-opacity-10">
                    <div class="mb-2">
                        <label for="original-text" class="block text-sm text-gray-400 mb-1">original text</label>
                    </div>
                    <textarea
                        id="original-text"
                        class="textbox w-full h-[300px] bg-[rgba(0,0,0,0.2)] text-white p-3 rounded-lg border border-white border-opacity-10 focus:outline-none focus:border-opacity-20 transition-all duration-200 resize-none"
                        placeholder="produce your heat quotes here"
                    ></textarea>
                    <div class="flex flex-wrap gap-2 mt-3">
                        <button 
                            class="px-3 py-1.5 text-sm bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded-lg backdrop-blur transition-all duration-300"
                            on:click={() => insert_text('(◣_◢)')}>
                            (◣_◢)
                        </button>
                        <button 
                            class="px-3 py-1.5 text-sm bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded-lg backdrop-blur transition-all duration-300"
                            on:click={() => insert_text('(◣︵◢)')}>
                            (◣︵◢)
                        </button>
                        <button 
                            class="px-3 py-1.5 text-sm bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded-lg backdrop-blur transition-all duration-300"
                            on:click={() => insert_text('¯\\_(ツ)_/¯')}>
                            ¯\_(ツ)_/¯
                        </button>
                        <button 
                            class="px-3 py-1.5 text-sm bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded-lg backdrop-blur transition-all duration-300"
                            on:click={() => insert_text('( ͡° ͜ʖ ͡°)')}>
                            ( ͡° ͜ʖ ͡°)
                        </button>
                        <button 
                            class="px-3 py-1.5 text-sm bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded-lg backdrop-blur transition-all duration-300"
                            on:click={() => insert_text('ಠ_ಠ')}>
                            ಠ_ಠ
                        </button>
                    </div>
                </div>

                <div class="bg-[rgba(0,0,0,0.3)] p-4 rounded-lg backdrop-blur-md border border-white border-opacity-10">
                    <div class="mb-2 flex justify-between items-center">
                        <label for="generated-text" class="block text-sm text-gray-400">final text</label>
                    </div>
                    <textarea
                        id="generated-text"
                        class="textbox w-full h-[300px] bg-[rgba(0,0,0,0.2)] text-white p-3 rounded-lg border border-white border-opacity-10 focus:outline-none focus:border-opacity-20 transition-all duration-200 resize-none"
                        readonly
                        placeholder="your swaggy text will appear here..."
                    ></textarea>
                    <div class="flex flex-wrap gap-2 mt-3">
                        <button 
                            id="copy-button"
                            class="px-3 py-1.5 text-sm bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded-lg backdrop-blur transition-all duration-300"
                            on:click={copy_text}>
                            copy
                        </button>
                        <button 
                            id="settings-button"
                            class="px-3 py-1.5 text-sm bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded-lg backdrop-blur transition-all duration-300"
                            on:click={() => {
                                console.log('hello');
                            }}>
                            settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    :global(textarea::placeholder) {
        color: rgba(255, 255, 255, 0.3);
    }

    :global(.textbox) {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
        transition: all 0.2s ease;
    }

    :global(.textbox:focus) {
        box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.3) !important;
    }

    :global(.textbox:focus-visible) {
        outline: none;
        -webkit-box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.1);
        box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.1);
    }

    :global(.textbox::-moz-focus-inner) {
        border: 0;
    }

    :global(.textbox:-moz-focusring) {
        outline: none;
    }
</style>