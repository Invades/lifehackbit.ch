<script lang="ts">
    import { onMount } from 'svelte';
    import load_2018 from '$lib/2018';
    import PageLayout from '$lib/components/page_layout.svelte';
    import Input from '$lib/components/input.svelte';
    import Counter from '$lib/components/counter.svelte';
    import IconButton from '$lib/components/icon_button.svelte';
    import Popup from '$lib/components/popup.svelte';
    import Icon from '@iconify/svelte';
    import { unattendedMode } from '$lib/stores';

    let popupComponent: Popup;
    let fileCount = 0;

    onMount(() => {
        // Expose the confirmation function globally
        (window as any).showDownloadConfirmation = (filename: string) => {
            popupComponent.showDownloadConfirmation(filename);
        };
        
        // Expose the unattended mode state globally
        (window as any).getUnattendedMode = () => {
            let value = false;
            unattendedMode.subscribe(state => { value = state; })();
            return value;
        };

        // Expose function to update file count globally
        (window as any).updateFileCount = (count: number) => {
            fileCount = count;
        };
        
        load_2018();
    });
</script>

<PageLayout centered={true} className="overflow-auto">
    <div class="mt-1 flex flex-col items-center text-center">
        <div class="w-full max-w-xl">
            <Input 
                id="filter-input" 
                placeholder="Filter" 
                className="w-full max-w-xl z-50 mt-1 mb-2"
            />
        </div>
        <Counter 
            id="file-count" 
            label="Files" 
            count={fileCount} 
            className="mb-2 z-50"
        />
        <div id="file-list-container" class="max-w-xl mb-1 max-h-[57.5vh] h-[57.5vh]">
            <div id="file-list" class="flex flex-col min-w-[300px] border bg-[rgba(255,255,255,0.05)] bg-opacity-50 p-2 rounded-lg border-white border-opacity-10 backdrop-blur scrollbar h-full overflow-y-auto"></div>
        </div>
        <div id="progress-bar" class="h-[6px] opacity-0 w-full backdrop-blur bg-[rgba(150,150,150,0.5)] border border-white border-opacity-10 rounded-lg transition-opacity duration-300 ease-in-out mb-1"></div>
        <div class="flex items-center text-5xl gap-2">
            <IconButton id="random-select">
                <Icon icon="mdi:dice-multiple" width="1.2em" height="1.2em" />
                Roll
            </IconButton>
            
            <IconButton id="about" on:click={() => popupComponent.showAbout()}>
                <Icon icon="material-symbols:question-mark" width="1.2em" height="1.2em" />
                About
            </IconButton>
            
            <IconButton id="settings" on:click={() => popupComponent.showSettings()}>
                <Icon icon="material-symbols:settings" width="1.2em" height="1.2em" />
                Settings
            </IconButton>
        </div>
    </div>

    <Popup 
        bind:this={popupComponent}
        confirmText="𝓭𝓸𝔁𝓷𝓵𝓸𝓪𝓷𝓭"
        cancelText="𝓬𝓪𝓷𝓬𝓮𝓵𝓵"
    />
</PageLayout>