document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const loadMoreButton = document.getElementById("load-more");
    let currentPage = 3; // Comenzar en la página 3

    // Función para cargar imágenes desde la API
    function loadImages() {
        const apiUrl = `https://picsum.photos/v2/list?page=${currentPage}&limit=9`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                data.forEach(image => {
                    const img = document.createElement("img");
                    img.src = image.download_url;
                    img.alt = image.author;
                    gallery.appendChild(img);
                });
                currentPage++;
            })
            .catch(error => {
                console.error("Error al cargar imágenes:", error);
            });
    }

    // Cargar las primeras imágenes al cargar la página
    loadImages();

    // Agregar un evento al botón de "Cargar Más"
    loadMoreButton.addEventListener("click", loadImages);
});
