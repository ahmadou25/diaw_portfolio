document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0; // Indice de l'image affichée

    function showImage(index) {
        if (index >= images.length) {
            currentIndex = 0; // Revenir à la première image
        } else if (index < 0) {
            currentIndex = images.length - 1; // Revenir à la dernière image
        } else {
            currentIndex = index;
        }

        console.log("Nouvelle image affichée, index :", currentIndex);
        lightboxImg.src = images[currentIndex].src; // Mettre à jour l'image affichée
    }

    images.forEach((image, index) => {
        image.addEventListener("click", function () {
            currentIndex = index; // Stocker l'index de l'image cliquée
            lightbox.style.display = "flex"; // Afficher la lightbox
            showImage(currentIndex); // Afficher l'image
        });
    });

    // Bouton Fermer
    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Bouton Précédent
    prevBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // Empêche la fermeture de la lightbox
        showImage(currentIndex - 1);
    });

    // Bouton Suivant
    nextBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        showImage(currentIndex + 1);
    });

    // Fermer en cliquant à l'extérieur de l'image
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) { // Vérifie si on clique sur le fond et pas sur l'image
            lightbox.style.display = "none";
        }
    });

    // Défilement avec les flèches du clavier
    document.addEventListener("keydown", function (e) {
        if (lightbox.style.display === "flex") {
            if (e.key === "ArrowLeft") {
                showImage(currentIndex - 1);
            } else if (e.key === "ArrowRight") {
                showImage(currentIndex + 1);
            } else if (e.key === "Escape") {
                lightbox.style.display = "none";
            }
        }
    });

    prevBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // Empêche la propagation
        showImage(currentIndex - 1);
    });
    
    nextBtn.addEventListener("click", function (e) {
        e.stopPropagation(); // Empêche la propagation
        showImage(currentIndex + 1);
    });
});
//   skils/

// kilifa_consulting



