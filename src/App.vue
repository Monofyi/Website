<template>
	<Header/>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<main :key="$route.name">
					<component :is="Component" />
				</main>
			</transition>
		</router-view>
</template>
<script>
import Header from '@/components/Header.vue'

export default {
	name: 'App',
	components: {
		Header,
	}
}
</script>
<style lang="scss">
.fade {
	&-enter {
		&-active {
			opacity: 0;
			transform: translateY(-20px);
			transition: all .3s ease;
		}

		&-to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	&-leave {
		&-active {
			transition: all .3s ease;
		}

		&-to {
			opacity: 0;
			transform: translateY(20px);
		}
	}
}

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

	font-size: clamp(12px, 1.5vw, 16px);
	font-family: 'Open Sans', sans-serif;

	a {
		color: inherit;
		text-decoration: none;
	}

	ul {
		list-style: none;
	}

	*::selection {
		background: var(--color-primary);
		color: var(--color-bg);
	}
}

main {
	display: grid;
	margin: 120px auto;
	width: min(80%, 1360px);
	background: var(--color-bg);
	gap: 100px;
}
</style>