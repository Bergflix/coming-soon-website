<script context="module">
	export function load({ page, fetch, session, context }) {
		return {
			status: 307,
			redirect: '/about'
		};
	}
</script>
