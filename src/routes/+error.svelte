<script>
    import PageLayout from '$lib/components/page_layout.svelte';
    import Card from '$lib/components/card.svelte';
    import Link from '$lib/components/nav_link.svelte';
</script>

<PageLayout showIssueTracker={false} className="font-mono text-[1vh]">
    <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-center z-[60]">
        <div class="container px-1 max-w-xs">
            <div class="relative mb-6">
                <Card className="p-6 content-center items-center justify-center flex flex-col text-lg text-gray-400 mb-2">
                    <p class="text-lg text-gray-400 mb-2">╭∩╮(◣︵◢)╭∩╮</p>
                    <p class="text-lg text-gray-400 mb-2">𝕋𝕙𝕚𝕤 𝕡𝕒𝕘𝕖 𝕕𝕠𝕤𝕖𝕟𝕥 𝕖𝕩𝕚𝕤𝕤𝕥</p>
                    <Link href="/">𝓗𝓸𝓶𝓮𝓻</Link>
                </Card>
            </div>
        </div>
    </div>
</PageLayout>
