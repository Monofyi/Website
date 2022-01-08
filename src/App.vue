<template>
	<Header/>
</template>
<script>
import Header from '@/components/Header.vue'

export default {
	name: 'App',
	components: {
		Header
	}
}
</script>
<style lang="scss">
:root {
	scroll-behavior: smooth;

	--color-bg: #fff;

	--color-text: #0f0f0f;
	--color-text-light: #838383;

	--color-primary: #fE7624;
	--color-secondary: #205eff;
}

body {
	margin: 0;

	font-size: clamp(10px, 1.5vw, 16px);
	font-family: 'Open Sans', sans-serif;

	a {
		color: inherit;
		text-decoration: none;
	}

	ul {
		list-style: none;
	}
}

</style>