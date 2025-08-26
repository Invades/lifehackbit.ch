<script lang="ts">
    import { fade, scale } from 'svelte/transition';
    import { unattendedMode, setUnattendedMode } from '$lib/stores';
    import Icon from '@iconify/svelte';
    
    export let show: boolean = false;
    export let type: 'confirm' | 'settings' | 'info' = 'confirm';
    
    export let message: string = '';
    export let confirmText: string = 'Confirm';
    export let cancelText: string = 'Cancel';
    export let infoText: string = '';
    
    let pendingDownload: string | null = null;
    
    // Remove the popupContent reactive variable since we'll handle settings differently
    
    export function showDownloadConfirmation(filename: string) {
        type = 'confirm';
        message = `Download ${filename}?`;
        pendingDownload = filename;
        show = true;
    }
    
    export function showAbout() {
        type = 'info';
        show = true;
    }
    
    export function showSettings() {
        type = 'settings';
        show = true;
    }
    
    function handleConfirm() {
        if (pendingDownload) {
            window.open(`https://priv9.solutions/dlls/${pendingDownload}`, '_blank');
            pendingDownload = null;
        }
        show = false;
    }
    
    function handleCancel() {
        pendingDownload = null;
        show = false;
    }
    
    function handleClose() {
        show = false;
    }
    
    function handleOverlayClick(event: MouseEvent) {
        if (event.target === event.currentTarget) {
            if (type === 'confirm') {
                handleCancel();
            } else {
                handleClose();
            }
        }
    }
    
    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            if (type === 'confirm') {
                handleCancel();
            } else {
                handleClose();
            }
        }
    }
    
    $: if (show) {
        setTimeout(() => {
            const modal = document.querySelector('[role="dialog"]') as HTMLElement;
            if (modal) modal.focus();
        }, 0);
    }
</script>

{#if show}
    <!-- Debug: show is true, type is {type} -->
    <div 
        class="fixed top-0 left-0 z-50 bg-black bg-opacity-50 w-full h-full cursor-default"
        on:click={handleOverlayClick}
        on:keydown={handleKeydown}
        role="dialog"
        aria-modal="true"
        aria-label="Modal dialog"
        tabindex="-1"
        contenteditable="false"
        in:fade={{ duration: 300 }}
        out:fade={{ duration: 200 }}
    >
        <div 
            class="backdrop-blur fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-black bg-opacity-70 border border-white border-opacity-10 rounded-lg p-4 text-white max-w-[90%] w-[300px] max-h-[80vh] overflow-y-auto z-50"
            in:scale={{ duration: 300, start: 0.8, opacity: 0 }}
            out:scale={{ duration: 200, start: 0.8, opacity: 0 }}
        >
            {#if type === 'confirm'}
                <p class="mb-2">{message}</p>
                {#if infoText}
                    <p class="text-sm text-opacity-50 text-white mb-4">{infoText}</p>
                {/if}
                <div class="flex justify-center gap-2 pt-2">
                    <button 
                        class="rounded transition-all duration-200 inline-block ease-in-out px-3 text-base py-2 cursor-pointer hover:text-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:transform hover:scale-105"
                        on:click={handleCancel}
                    >
                        {cancelText}
                    </button>
                    <button 
                        class="rounded transition-all duration-200 inline-block ease-in-out px-3 text-base py-2 cursor-pointer hover:text-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:transform hover:scale-105"
                        on:click={handleConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            {:else if type === 'settings'}
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-bold">Settings</h3>
                </div>
                <div class="space-y-4">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between p-3 bg-white bg-opacity-5 rounded border border-white border-opacity-10">
                            <div class="flex items-center space-x-3">
                                <Icon icon="mingcute:surprise-fill" width="1.2em" height="1.2em" class='text-gray-400' />
                                <div>
                                    <h4 class="font-semibold">Unattended</h4>
                                </div>
                            </div>
                            <button 
                                type="button"
                                class="w-4 h-4 rounded border border-white border-opacity-20 cursor-pointer transition-all duration-300 ease-in-out hover:border-opacity-40 hover:bg-opacity-20 {!$unattendedMode ? 'bg-white bg-opacity-10' : 'bg-white bg-opacity-50'}"
                                on:click={() => setUnattendedMode(!$unattendedMode)}
                                on:keydown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setUnattendedMode(!$unattendedMode);
                                    }
                                }}
                                aria-label="Toggle unattended mode"
                                aria-checked={$unattendedMode}
                                role="checkbox"
                            >
                            </button>
                        </div>
                        <p class="text-gray-400">work in progress</p>
                    </div>
                </div>
            {:else if type === 'info'}
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-bold">About</h3>
                </div>
                <div class="space-y-4">
                    <p>A collection of cheats for 2018 hvh, varying in quality/age, all links were verified at one point before being added here.</p>
                    <div class="mt-4 p-3 bg-white bg-opacity-10 rounded">
                        <p class="text-sm font-bold">Use at own risk</p>
                    </div>
                </div>
            {/if}
        </div>
    </div>
{/if}
