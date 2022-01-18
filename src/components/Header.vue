<template>
	<header class="header">
		<div class="header--container">
			<a href="/" class="word-mark">
				<img src="../assets/logo.svg" alt="Bite Cope Startup logo" />
				Bitecope
			</a>

			<nav class="nav">
				<ul class="nav--container">
					<li>
						<router-link to="/" class="nav--link"> Home </router-link>
					</li>
					<li>
						<router-link to="subscription" class="nav--link"> Subscription </router-link>
					</li>
					<li>
						<router-link to="contact" class="nav--link"> Contact </router-link>
					</li>
				</ul>

				<div class="menu" :class="{ open: menuOpen }">
					<ul class="menu--container mobile">
						<li>
							<router-link to="/" class="nav--link"> Home </router-link>
						</li>
						<li>
							<router-link to="subscription" class="nav--link"> Subscription </router-link>
						</li>
						<li>
							<router-link to="contact" class="nav--link"> Contact </router-link>
						</li>
					</ul>
					<ul class="menu--container">
						<li>
							<router-link to="t&c" class="nav--link"> T&C </router-link>
						</li>
						<li>
							<router-link to="faq" class="nav--link"> FAQ </router-link>
						</li>
						<li>
							<router-link to="privacy" class="nav--link"> Privacy Policy </router-link>
						</li>
					</ul>
				</div>
				<div id="hamburger" :class="{ open: menuOpen }" @click="toggleMenu()">
					<svg width="28" height="28" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
						<g stroke="black">
							<path
								d="M4.79817e-06 3C4.79817e-06 3 5.51343e-06 3 0 2.00024L32 2C32 2.27613 32 2.00024 32 3.00024L4.79817e-06 3Z"
								fill="black"
							/>
							<path
								d="M4.79817e-06 15C4.79817e-06 15 5.51343e-06 15 0 14.0002L32 14C32 14.2761 32 14.0002 32 15.0002L4.79817e-06 15Z"
								fill="black"
							/>
							<path
								d="M4.79817e-06 27C4.79817e-06 27 5.51343e-06 27 0 26.0002L32 26C32 26.2761 32 26.0002 32 27.0002L4.79817e-06 27Z"
								fill="black"
							/>
						</g>
					</svg>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header.vue",
	data() {
		return {
			menuOpen: false,
		};
	},
	methods: {
		toggleMenu() {
			this.menuOpen = !this.menuOpen;
		},
	},
};
</script>

<style lang="scss" scoped>
@keyframes Spin {
	to {
		transform: rotate(360deg);
	}
}

@keyframes SlideLeft {
	from {
		transform: translateX(-10%);
		opacity: 0;
	}
}

@keyframes Fade {
	from {
		opacity: 0;
	}
}

.header {
	z-index: 100;
	background-color: var(--color-bg);
	box-shadow: 0 1px 5px 0 var(--color-text);
	margin: 0 auto;
	position: fixed;
	width: 100%;
	top: 0;

	&--container {
		margin: 0 auto;
		width: min(80%, 1360px);
		background-color: var(--color-bg);

		display: flex;
		justify-content: space-between;
		align-items: center;

		position: relative;
	}
}

.nav {
	display: flex;
	align-items: center;
	gap: 2em;

	&--container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		animation: SlideLeft 1s cubic-bezier(0.42, 0, 0.12, 1.34);
	}

	&--link {
		padding: 10px 20px;
		transition: all 0.3s ease;

		&:hover {
			color: var(--color-primary);
		}
	}

	a {
		font-family: "Montserrat", sans-serif;
		font-size: 1.2em;
		font-weight: 600;
	}
}

.word-mark {
	display: flex;
	align-items: center;
	animation: Fade 1s ease-in-out;
	padding: 8px 0;
	gap: 10px;

	font-family: "Righteous", sans-serif;
	font-weight: 400;
	font-size: 1.6em;

	transition: all 0.3s ease-in-out;

	&:hover {
		color: var(--color-primary);
	}

	img {
		animation: Spin 1s cubic-bezier(0.42, 0, 0.12, 1.34);
		width: clamp(32px, 4vw, 48px);
	}
}

.menu {
	z-index: -1;
	display: flex;
	position: absolute;
	transform: translateY(-150%);
	transition: transform 0.5s ease-in-out;
	margin-top: 20px;
	left: 10px;
	right: 10px;
	top: 100%;
	gap: 20px;

	&--container {
		padding: 10px 0;
		width: 100%;

		display: flex;
		justify-content: space-around;
		border-radius: 4px;

		box-shadow: 0 1px 5px 0 var(--color-text);
		background-color: var(--color-bg);

		li {
			padding: 10px 0;
		}
	}

	&.open {
		transform: translateY(0);
	}
}

#hamburger {
	display: flex;
	user-select: none;
	cursor: pointer;
	--webkit-tap-highlight-color: transparent;

	svg {
		overflow: visible;
		width: clamp(22px, 4vw, 32px);
		animation: Fade 2s ease-in-out;
		aspect-ratio: 1;
		height: 100%;

		g {
			fill: var(--text-color);
			transition: all 0.3s ease;

			path {
				transition: all 0.3s ease;

				&:nth-child(3) {
					transform-origin: bottom left;
				}
			}
		}

		&:hover g {
			stroke: var(--color-primary);
		}
	}

	&.open svg g {
		transform: translateX(7px) translateY(3px);

		path {
			&:nth-child(1) {
				transform: rotate(45deg);
			}

			&:nth-child(2) {
				transform: scaleX(0);
			}

			&:nth-child(3) {
				transform: rotate(-45deg) translateY(-1.5px) translateX(3px);
			}
		}
	}
}

.mobile {
	display: none;
}

@media screen and (max-width: 648px) {
	.nav--container {
		display: none;
	}

	.menu {
		transition: 0s;
		transition-delay: 0.5s;
		gap: 40px;

		&--container {
			flex-direction: column;
			transition: all 0.5s ease;

			&:nth-child(1) {
				transform: translateX(-150%);
			}

			&:nth-child(2) {
				transform: translateX(150%);
			}
		}

		&.open {
			transition: 0s;
		}

		&.open .menu--container {
			transform: translateX(0);
		}
	}

	.mobile {
		display: flex;
	}
}

@media screen and (max-width: 496px) {
	.menu {
		flex-direction: column;
		gap: 10px;
	}
}
</style>
