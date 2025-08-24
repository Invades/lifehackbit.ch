<script lang="ts">
    import { onMount } from 'svelte';
    import { init_generator } from '$lib/generator';
    import Button from '$lib/components/button.svelte';
    import TextArea from '$lib/components/text_area.svelte';
    import Card from '$lib/components/card.svelte';
    import PageLayout from '$lib/components/page_layout.svelte';

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

<PageLayout>
    <div class="flex-1 flex items-center justify-center">
        <div class="container px-1 max-w-6xl">
            <div class="relative z-30 mb-6">
                <Card className="p-2">
                    <div class="flex items-center justify-center">
                        <div id="style-select-container"></div>
                    </div>
                </Card>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                    <div class="mb-2">
                        <label for="original-text" class="block text-sm text-gray-400 mb-1">original text</label>
                    </div>
                    <TextArea
                        id="original-text"
                        placeholder="produce your heat quotes here"
                        className=""
                        onInput={undefined}
                    />
                    <div class="flex flex-wrap gap-1 mt-3 justify-start">
                        <Button small={true} onClick={() => insert_text('(◣_◢)')}> (◣_◢) </Button>
                        <Button small={true} onClick={() => insert_text('(◣︵◢)')}> (◣︵◢) </Button>
                        <Button small={true} onClick={() => insert_text('¯\\_(ツ)_/¯')}> ¯\_(ツ)_/¯ </Button>
                        <Button small={true} onClick={() => insert_text('( ͡° ͜ʖ ͡°)')}> ( ͡° ͜ʖ ͡°) </Button>
                        <Button small={true} onClick={() => insert_text('ಠ_ಠ')}> ಠ_ಠ </Button>
                    </div>
                </Card>

                <Card>
                    <div class="mb-2 flex justify-between items-center">
                        <label for="generated-text" class="block text-sm text-gray-400">final text</label>
                    </div>
                    <TextArea
                        id="generated-text"
                        placeholder="your swaggy text will appear here..."
                        readonly={true}
                        className=""
                        onInput={undefined}
                    />
                    <div class="flex flex-wrap gap-2 mt-3 justify-end">
                        <Button small={true} id="copy-button" onClick={copy_text}>copy</Button>
                        <Button small={true} id="settings-button" onClick={() => { console.log('wip'); }}>settings</Button>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</PageLayout>

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
