function parallax(event){
	this.querySelectorAll('.layer').forEach(layer => {
		var speed = layer.getAttribute('data-speed');
		layer.style.transform = `translateX(${event.clientX*speed/1000}px)`
	})
}

document.addEventListener('mousemove', parallax);