<script lang="ts">
	const logos = [
		'/footer/3.svg',
		'/footer/1.svg',
		'/footer/2.svg',
		'/footer/lenny.svg',
		'/footer/scripting.svg',
		'/footer/blank.svg'
	];
	const sequence = Array.from({ length: 9 }, () => logos).flat();
</script>

<footer
	class="fixed inset-x-0 bottom-0 z-10 overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]/25 text-xs text-[var(--color-text-muted)] backdrop-blur-xl shadow-[0_-8px_24px_rgba(0,0,0,0.25)]"
>
	<a href="https://lifehack.re" aria-label="Powered by lifehack.re" class="block w-full overflow-hidden py-2">
		<span class="marquee-track" aria-hidden="true">
			{#each [0, 1] as copy (copy)}
				<span class="marquee-group">
					{#each sequence as logo}
						<img class="marquee-logo" src={logo} alt="" draggable="false" />
					{/each}
				</span>
			{/each}
		</span>
	</a>
</footer>

<style>
	.marquee-track {
		display: flex;
		width: max-content;
		animation: marquee 90s linear infinite;
		will-change: transform;
	}

	.marquee-group {
		display: flex;
		flex: none;
		align-items: center;
		justify-content: flex-start;
		gap: 6px;
		box-sizing: border-box;
		width: max-content;
		padding-inline: 3px;
		white-space: nowrap;
	}

	.marquee-logo {
		display: block;
		flex: none;
		width: auto;
		height: 24px;
		max-width: 96px;
		object-fit: contain;
		filter: brightness(0.65);
		transition: filter 300ms ease;
	}

	a:hover .marquee-logo,
	a:focus-visible .marquee-logo {
		filter: brightness(1);
	}

	@keyframes marquee {
		from { transform: translate3d(0, 0, 0); }
		to { transform: translate3d(-50%, 0, 0); }
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-track { animation: none; }
	}
</style>
