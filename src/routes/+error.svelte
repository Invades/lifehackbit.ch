<script>
// No logic needed for static 404 page
</script>

<div class="font-mono text-[1vh] text-white min-h-screen flex flex-col select-none overflow-x-hidden pb-6 relative">
    <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-center z-[60]">
        <a href="/" class="text-decoration-none mb-4" aria-label="Home">
            <div class="ascii-container">
                <div class="glitch" id="ascii-art-small"></div>
            </div>
        </a>
        <div class="container px-1 max-w-xs">
            <div class="relative mb-6">
                <div class="bg-[rgba(0,0,0,0.3)] p-6 content-center rounded-lg backdrop-blur-md border border-white border-opacity-10 flex flex-col items-center">
                    <p class="text-lg text-gray-400 mb-2">╭∩╮(◣︵◢)╭∩╮</p>
                    <p class="text-lg text-gray-400 mb-2">𝕋𝕙𝕚𝕤 𝕡𝕒𝕘𝕖 𝕕𝕠𝕤𝕖𝕟𝕥 𝕖𝕩𝕚𝕤𝕤𝕥</p>
                    <a href="/" class="underline text-lg text-white text-opacity-60 hover:text-opacity-80 transition-all duration-300">𝓗𝓸𝓶𝓮𝓻</a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
:global(.ascii-container) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}
</style>