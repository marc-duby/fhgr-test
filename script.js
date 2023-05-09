// Create document ondomready event
document.addEventListener('DOMContentLoaded', () => {
	// get all the elements on the page
	const elements = document.querySelectorAll('*')

	// set the initial opacity of each element to 0
	elements.forEach((element) => {
		element.style.opacity = 0
	})

	// fade in each element in sequence
	let delay = 0
	elements.forEach((element) => {
		setTimeout(() => {
			element.style.transition = 'opacity 1s'
			element.style.opacity = 1
		}, delay)
		delay += 500
	})
})
