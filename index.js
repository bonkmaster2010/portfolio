
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    document.body.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #f3f4f6, #e8eaed)`;
  });
  