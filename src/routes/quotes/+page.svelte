<script>
    import { onMount } from 'svelte';
    import { init_quotes } from '$lib/quotes';

    onMount(() => {
        init_quotes();
    });
</script>

<div class="font-mono text-[1.5vh] text-white min-h-screen flex flex-col justify-start items-center select-none overflow-x-hidden">
    <div class="fixed top-2.5 right-2.5 p-2 bg-rgba(255, 255, 255, 0.05) border border-white border-opacity-10 text-[rgba(255,255,255,0.5)] rounded backdrop-blur text-[0.9em] z-50">
        Report issues and suggest additions <a class="underline text-white transition-all duration-300 ease-in-out text-opacity-60 hover:text-opacity-80" href="https://github.com/Invades/lifehackbit.ch/issues" target="_blank">here</a>
    </div>
    <a href="/" class="text-decoration-none mt-10 mb-2" aria-label="Home">
        <div class="ascii-container">
            <div class="glitch" id="ascii-art-small"></div>
        </div>
    </a>
    <div class="w-full max-w-xl">
        <div class="m-2 flex gap-2">
            <input type="text" id="filter-input" class="flex-1 text-sm bg-[rgba(255,255,255,0.05)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded-lg backdrop-blur text-[0.9em] p-2 opacity-70 placeholder:text-[rgba(255,255,255,0.5)]" placeholder="Filter" autocomplete="off">
            <select id="sort-select" class="text-sm bg-[rgba(255,255,255,0.05)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded-lg backdrop-blur text-[0.9em] p-2 opacity-70">
                <option value="old" class="bg-[rgb(20,20,20)]">Old → New</option>
                <option value="new" class="bg-[rgb(20,20,20)]">New → Old</option>
                <option value="az" class="bg-[rgb(20,20,20)]">A → Z</option>
                <option value="za" class="bg-[rgb(20,20,20)]">Z → A</option>
            </select>
        </div>
        <div class="flex justify-center">
            <div id="quote-counter" class="border max-w-[100px] bg-[rgba(255,255,255,0.05)] border-white border-opacity-10 rounded backdrop-blur text-[0.9em] px-2 py-1 opacity-70 text-center">
                Quotes: <span id="quote-count">0</span>
            </div>
        </div>
        <div id="quotes"></div>
    </div>
</div>