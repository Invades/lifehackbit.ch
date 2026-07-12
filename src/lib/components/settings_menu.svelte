<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, scale } from 'svelte/transition';
    import Icon from '@iconify/svelte';

    let open = false;
    let backgroundOpacity = 30;
    let performanceMode = false;
    let dialog: HTMLDivElement;

    const applySettings = () => {
        document.documentElement.style.setProperty('--background-opacity', String(backgroundOpacity / 100));
        document.documentElement.classList.toggle('performance-mode', performanceMode);
    };

    const saveSettings = () => {
        applySettings();
        localStorage.setItem('site-settings', JSON.stringify({ backgroundOpacity, performanceMode }));
    };

    onMount(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('site-settings') ?? '{}');
            if (typeof saved.backgroundOpacity === 'number') {
                backgroundOpacity = Math.min(100, Math.max(0, saved.backgroundOpacity));
            }
            if (typeof saved.performanceMode === 'boolean') performanceMode = saved.performanceMode;
        } catch {
        }
        applySettings();
    });

    $: if (open) {
        setTimeout(() => dialog?.focus(), 0);
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape') open = false;
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<button
    class="settings-cog fixed bottom-3 right-3 z-[60] flex h-8 w-8 items-center justify-center rounded border border-white border-opacity-10 bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.5)] backdrop-blur transition-colors duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    type="button"
    aria-label="Open settings"
    aria-haspopup="dialog"
    aria-expanded={open}
    on:click={() => open = true}
>
    <Icon icon="material-symbols:settings" width="1.25em" height="1.25em" />
</button>

{#if open}
    <div
        class="fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4"
        role="presentation"
        on:click={(event) => event.target === event.currentTarget && (open = false)}
        in:fade={{ duration: 200 }}
        out:fade={{ duration: 150 }}
    >
        <div
            bind:this={dialog}
            class="w-[340px] max-w-full rounded-lg border border-white border-opacity-10 bg-black bg-opacity-70 p-4 font-mono text-sm text-white shadow-2xl backdrop-blur"
            role="dialog"
            aria-modal="true"
            aria-labelledby="settings-title"
            tabindex="-1"
            in:scale={{ duration: 220, start: 0.9, opacity: 0 }}
            out:scale={{ duration: 150, start: 0.9, opacity: 0 }}
        >
            <div class="mb-4">
                <h2 id="settings-title" class="text-lg font-bold">Settings</h2>
            </div>

            <div class="space-y-3">
                <label class="block rounded border border-white border-opacity-10 bg-white bg-opacity-5 p-3" for="background-opacity">
                    <span class="mb-2 flex items-center justify-between gap-3">
                        <span class="flex items-center gap-2 font-semibold">
                            <Icon icon="material-symbols:opacity" width="1.25em" height="1.25em" class="text-gray-400" />
                            Background opacity
                        </span>
                        <span class="text-xs text-gray-400">{backgroundOpacity}%</span>
                    </span>
                    <input id="background-opacity" class="w-full cursor-pointer accent-white" type="range" min="0" max="100" step="5" bind:value={backgroundOpacity} on:input={saveSettings} />
                </label>

                <div class="flex items-center justify-between gap-3 rounded border border-white border-opacity-10 bg-white bg-opacity-5 p-3">
                    <div>
                        <div class="flex items-center gap-2 font-semibold">
                            <Icon icon="material-symbols:speed" width="1.25em" height="1.25em" class="text-gray-400" />
                            Performance mode
                        </div>
                    </div>
                    <button
                        class="h-4 w-4 shrink-0 cursor-pointer rounded border border-white border-opacity-20 transition-all duration-300 ease-in-out hover:border-opacity-40 hover:bg-opacity-20 {performanceMode ? 'bg-white bg-opacity-50' : 'bg-white bg-opacity-10'}"
                        type="button"
                        role="checkbox"
                        aria-checked={performanceMode}
                        aria-label="Toggle performance mode"
                        on:click={() => { performanceMode = !performanceMode; saveSettings(); }}
                    >
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}
