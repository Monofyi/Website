<template>
	<div id="contact-us" class="contact-us">
		<h1>Contact Us</h1>

		<div class="contact-container">
			<div class="left">
				<p>
					If you wish to know more or purchase our products, please leave your details here. Our team will assist you
					further.
				</p>
				<form id="form">
					<div class="form-identity">
						<input id="name" type="text" name="name" placeholder="Name" required />
						<input id="mail" type="text" name="mail" placeholder="Email Address" required />
						<input id="number" type="text" name="number" placeholder="Contact Number" maxLength="10" required />
					</div>
					<textarea id="message" name="message" placeholder="Your Message" required />
					<input class="btn" type="submit" value="Submit" />
				</form>
			</div>
			<div class="right">
				<img
					src="../assets/illustrations/people/writing.svg"
					alt="Contact our team, we will get back to you as soon as possible."
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Contact",
};
</script>
