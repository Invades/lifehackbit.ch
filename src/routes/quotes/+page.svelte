<script lang="ts">
    import { onMount } from 'svelte';
    import { init_quotes } from '$lib/quotes';
    import PageLayout from '$lib/components/page_layout.svelte';
    import Input from '$lib/components/input.svelte';
    import Select from '$lib/components/select.svelte';
    import Counter from '$lib/components/counter.svelte';

    let quoteCount = 0;

    onMount(() => {
        // Expose function to update quote count globally
        (window as any).updateQuoteCount = (count: number) => {
            quoteCount = count;
        };
        
        init_quotes();
    });
</script>

<PageLayout>
    <div class="w-full max-w-xl">
        <div class="m-2 flex gap-2">
            <Input 
                id="filter-input" 
                placeholder="Filter" 
                className="flex-1 rounded-lg"
            />
            <Select id="sort-select" className="rounded-lg" />
        </div>
        <div class="flex justify-center">
            <Counter 
                id="quote-counter" 
                label="Quotes" 
                count={quoteCount}
                className="max-w-md mb-2"
            />
        </div>
        <div id="quotes" class="px-4"></div>
    </div>
</PageLayout>