<script>
    import { onMount } from 'svelte';
    import load_2018 from '$lib/2018';

    onMount(() => {
        load_2018();
    });
</script>

<div class="font-mono text-[1.5vh] overflow-auto text-white min-h-screen flex flex-col justify-center items-center select-none">
    <div class="fixed top-2.5 right-2.5 p-2 bg-rgba(255, 255, 255, 0.05) border border-white border-opacity-10 text-[rgba(255,255,255,0.5)] rounded backdrop-blur text-[0.9em] z-50">
        Report issues and suggest additions <a class="underline text-white transition-all duration-300 ease-in-out text-opacity-60 hover:text-opacity-80" href="https://github.com/Invades/lifehackbit.ch/issues" target="_blank">here</a>
    </div>
    <a href="/" class="text-decoration-none" aria-label="Home">
        <div class="ascii-container">
            <div class="glitch" id="ascii-art-small"></div>
        </div>
    </a>
    
    <div class="mt-1 flex flex-col items-center text-center">
        <div class="w-full max-w-xl">
            <input type="text" id="filter-input" class="text-sm w-full max-w-xl bg-[rgba(255,255,255,0.05)] border border-white border-opacity-10 text-[rgba(255,255,255,0.8)] rounded backdrop-blur text-[0.9em] z-50 mt-1 p-2 opacity-70 placeholder:text-[rgba(255,255,255,0.5)] mb-2" placeholder="Filter" autocomplete="off">
        </div>
        <div id="file-count" class="mb-2 border bg-[rgba(255,255,255,0.05)] border-white border-opacity-10 rounded backdrop-blur text-[1em] z-50 px-2 py-1 opacity-70 text-center"></div>
        <div id="file-list-container" class="max-w-xl mb-1 max-h-[57.5vh] h-[57.5vh]">
            <div id="file-list" class="flex flex-col min-w-[300px] border bg-[rgba(255,255,255,0.05)] bg-opacity-50 p-2 rounded-lg border-white border-opacity-10 backdrop-blur scrollbar h-full overflow-y-auto"></div>
        </div>
        <div id="progress-bar" class="h-[6px] opacity-0 w-full backdrop-blur bg-[rgba(150,150,150,0.5)] border border-white border-opacity-10 rounded-lg transition-opacity duration-300 ease-in-out mb-1"></div>
        <div class="flex items-center text-5xl">
            <svg role="button" tabindex="0" id="random-select" class="border border-white border-opacity-10 px-1 py-1 rounded bg-[rgba(80,80,80,0.5)] opacity-50 hover:opacity-100 backdrop-blur transition-all duration-300 ease-in-out hover:text-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:transform hover:scale-105 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-9.5 9a1.5 1.5 0 0 1 1.493 1.356l.007.154a1.5 1.5 0 0 1-2.993.144L7 15.5A1.5 1.5 0 0 1 8.5 14m7 0a1.5 1.5 0 0 1 1.493 1.356l.007.154a1.5 1.5 0 0 1-2.993.144L14 15.5a1.5 1.5 0 0 1 1.5-1.5M12 10.5a1.5 1.5 0 0 1 1.493 1.356l.007.154a1.5 1.5 0 0 1-2.993.144L10.5 12a1.5 1.5 0 0 1 1.5-1.5M8.5 7a1.5 1.5 0 0 1 1.493 1.356L10 8.51a1.5 1.5 0 0 1-2.993.144L7 8.5A1.5 1.5 0 0 1 8.5 7m7 0a1.5 1.5 0 0 1 1.493 1.356L17 8.51a1.5 1.5 0 0 1-2.993.144L14 8.5A1.5 1.5 0 0 1 15.5 7"/></g></svg>
            <label for="unattended" class="ml-2">
                <input type="checkbox" id="unattended" name="silent" class="hidden">
                <svg id="unattended-svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" class="border border-white border-opacity-10 cursor-pointer transition-all duration-300 ease-in-out px-1 py-[0.2em] rounded mt-0 bg-[rgba(80,80,80,0.5)] opacity-50 hover:opacity-100 backdrop-blur hover:text-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:transform hover:scale-105">
                    <g fill="currentColor">
                        <path d="M8.896 27.617a6 6 0 0 0 .306-.13c1.829.957 4.086 1.51 6.797 1.51c2.804 0 5.122-.592 6.983-1.61l.019.011l.042.023l.043.019a6.6 6.6 0 0 0 2.605.556C23.245 29.9 19.994 30.998 16 30.998c-3.99 0-7.238-1.096-9.683-2.996a5.8 5.8 0 0 0 2.58-.385m18.114-.806c-.898.264-1.927.253-2.972-.08a6 6 0 0 1-.557-.21c-.971-.532-1.417-1.21-1.855-1.877c-.36-.549-.716-1.09-1.355-1.533l-2.473-1.428a1.5 1.5 0 0 1 .58-2.79l-.08-.045a1.5 1.5 0 0 1 1.5-2.598l3.198 1.847l.03-.013l-.395-4.446l-.002-.026a1.5 1.5 0 0 1 2.935-.532a1.5 1.5 0 0 1 2.685.92v4.487l1.145-1.824c.362-.656 1.197-.877 1.865-.494c.67.385.917 1.234.547 1.89l-1.152 2.715c-.19.474-.315 1.033-.447 1.618c-.269 1.195-.563 2.5-1.473 3.41a4 4 0 0 1-1.724 1.01"/><path d="M21.636 13.727a2.5 2.5 0 0 1 .242-1.314a2.5 2.5 0 0 0-3.768 2.82a2.5 2.5 0 0 1 2.19.151l1.563.903z"/><path d="M29.25 14a2.5 2.5 0 0 0-.658-1.69c-.498-2.144-1.448-4.033-2.828-5.532C23.647 4.48 20.43 3 15.999 3c-4.43 0-7.648 1.48-9.764 3.778c-1.63 1.769-2.66 4.082-3.053 6.716a2.43 2.43 0 0 0-2.148 1.347c.213-3.614 1.436-6.927 3.73-9.418C7.314 2.654 11.095 1 15.999 1s8.686 1.654 11.236 4.423c2.331 2.532 3.556 5.912 3.739 9.595a2.36 2.36 0 0 0-1.724.36zM13 25c0 1.652 1.348 3 3 3s3-1.348 3-3s-1.348-3-3-3s-3 1.348-3 3"/><path d="M6.92 12.8a1.37 1.37 0 0 1 1.82-.54c.514.271.764.829.661 1.367l.368-.65a1.436 1.436 0 0 1 1.905-.564c.674.354.914 1.182.537 1.849l-.1.175a1.4 1.4 0 0 1 .906.138c.674.355.915 1.183.537 1.85l-.323.57c.31-.05.637.002.925.17a1.32 1.32 0 0 1 .433 1.876l-3.594 5.5a4.82 4.82 0 0 1-2.463 2.144c-2.476.968-5.26-.235-6.218-2.687a4.7 4.7 0 0 1-.292-2.279a2 2 0 0 1-.002-.138l.082-2.532l-.304-3.035c-.075-.75.49-1.428 1.26-1.512c.765-.083 1.44.454 1.51 1.2l.099 1.076zm4.58-6.575a.75.75 0 0 1-.725.775C8.661 7.07 7.5 8.837 7.5 10.25a.75.75 0 0 1-1.5 0c0-2.087 1.674-4.647 4.725-4.75a.75.75 0 0 1 .775.725m9.5 0a.75.75 0 0 0 .725.775C23.839 7.07 25 8.837 25 10.25a.75.75 0 0 0 1.5 0c0-2.087-1.674-4.647-4.725-4.75a.75.75 0 0 0-.774.725"/></g>
                </svg>
            </label>
        </div>
    </div>

    <div id="overlay" class="hidden fixed top-0 left-0 z-50 bg-black bg-opacity-0 transition-all duration-300 ease-in-out w-full h-full"></div>
    <div id="confirmation" class="backdrop-blur hidden fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-black bg-opacity-70 border border-white border-opacity-10 rounded-lg p-4 text-white transition-all duration-300 ease-in-out max-w-[80%] w-[300px] opacity-0 z-50">
        <p id="confirmation-message"></p>
        <p id="info-text" class="text-sm text-opacity-50 text-white"></p>
        <div class="confirmation-buttons flex justify-center gap-2 pt-6">
            <button id="cancel-btn" class="rounded transition-all duration-200 inline-block ease-in-out px-3 text-base py-2 hover:text-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:transform hover:scale-105">𝓬𝓪𝓷𝓬𝓮𝓵𝓵</button>
            <button id="confirm-btn" class="rounded transition-all duration-200 inline-block ease-in-out px-3 text-base py-2 hover:text-shadow-[0_0_5px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:transform hover:scale-105">𝓭𝓸𝔁𝓷𝓵𝓸𝓪𝓷𝓭</button>
        </div>
    </div>
</div>