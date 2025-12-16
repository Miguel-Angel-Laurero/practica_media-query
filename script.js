        document.addEventListener('DOMContentLoaded', () => {
            const cardContainer = document.querySelector('.card-container');
            const likeButtons = document.querySelectorAll('.like-button');
            const actionButtons = document.querySelectorAll('.action-button');

            // 1. Lógica para el botón "Me Gusta" (like-button)
            likeButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const card = button.closest('.card');
                    const isLiked = card.classList.toggle('liked');

                    // Cambiar icono de hueco a relleno
                    const icon = button.querySelector('i');
                    if (isLiked) {
                        icon.classList.remove('far'); // Corazón hueco
                        icon.classList.add('fas');    // Corazón relleno
                        // Reordenación: Mover la tarjeta al principio del contenedor
                        cardContainer.prepend(card);
                    } else {
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                        // Aquí se necesitaría lógica más compleja para reordenar a su posición original,
                        // pero para el ejemplo básico de "aparecer primero", con prepend es suficiente.
                    }
                });
            });

            // 2. Lógica para el botón de Acción (action-button) - Efecto permanente
            actionButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const card = button.closest('.card');
                    const isToggled = card.classList.toggle('toggled');

                    // Cambiar el texto del botón al pulsar
                    if (isToggled) {
                        button.textContent = '¡GUARDADO!';
                    } else {
                        button.textContent = 'Ver Detalles';
                    }
                });
            });
        });