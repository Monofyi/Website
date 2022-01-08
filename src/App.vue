<template>
	<p>Hello World</p>
</template>
<script>
export default {
	name: 'App'
}
</script>
<style lang="scss">
:root {
	scroll-behavior: smooth;

	--color-bg: #fff;

	--color-text: #000;
	--color-text-light: #838383;

	--color-primary: #fE7624;
	--color-secondary: #205eff;
}

body {
	margin: 0;

	font-size: clamp(10px, 1.5vw, 29px);
	font-family: 'Open Sans', sans-serif;

	ul {
		list-style: none;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
}

</style>