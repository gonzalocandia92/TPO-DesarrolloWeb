document.addEventListener("DOMContentLoaded", function () {
    const app = Vue.createApp({
        data() {
            return {
                images: [],
            };
        },
        methods: {
            loadImages() {
                const apiUrl = `https://picsum.photos/v2/list?page=3`;

                fetch(apiUrl)
                    .then((response) => response.json())
                    .then((data) => {
                        this.images = data;
                    })
                    .catch((error) => {
                        console.error("Error al cargar imágenes:", error);
                    });
            },
            showImage(image) {
                const enlargedImage = document.createElement("div");
                enlargedImage.classList.add("enlarged");
                enlargedImage.innerHTML = `<img src="${image.download_url}" alt="${image.author}">`;

                enlargedImage.addEventListener("click", function () {
                    document.body.removeChild(this);
                });

                document.body.appendChild(enlargedImage);
            },
        },
    });

    const vm = app.mount("#app");

    // Cargar las primeras imágenes al cargar la página
    vm.loadImages();
});




