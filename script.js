// Espera a que el DOM esté completamente cargado para ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       FUNCIONALIDAD PARA EL SLIDER DE LA PÁGINA DE INICIO (index.html)
       ========================================================================== */
    
    // Solo ejecuta el código del slider si estamos en la página de inicio
    if (document.querySelector('.hero-slider')) {
        const slides = document.querySelectorAll('.slide');
        const sliderWrapper = document.querySelector('.slider-wrapper');
        const nextBtn = document.querySelector('.next');
        const prevBtn = document.querySelector('.prev');
        const dots = document.querySelectorAll('.dot');
        
        let currentIndex = 0;
        let slideInterval;

        function goToSlide(index) {
            // Validar el índice
            if (index < 0) {
                index = slides.length - 1;
            } else if (index >= slides.length) {
                index = 0;
            }

            // Mover el contenedor de slides
            sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
            updateDots();
        }
        
        function updateDots() {
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        function nextSlide() {
            goToSlide(currentIndex + 1);
        }

        function prevSlide() {
            goToSlide(currentIndex - 1);
        }
        
        // Iniciar el slider automático
        function startSlider() {
            slideInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
        }

        // Detener el slider al interactuar
        function stopSlider() {
            clearInterval(slideInterval);
        }

        // Asignar eventos a los botones y puntos
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopSlider(); // Detiene el auto-slide si el usuario interactúa
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopSlider();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
                stopSlider();
            });
        });

        // Iniciar todo
        goToSlide(0);
        startSlider();
    }


    /* ==========================================================================
       FUNCIONALIDAD PARA EL FORMULARIO DE LOGIN (admin-login.html)
       ========================================================================== */

    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Prevenir que el formulario se envíe de la forma tradicional
            event.preventDefault(); 
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simulación de validación (en un proyecto real, esto sería más complejo)
            if (username.trim() === '' || password.trim() === '') {
                alert('Por favor, completa ambos campos.');
            } else {
                // Simulación de un login exitoso
                alert('¡Ingreso exitoso!');
                // Redirigir al panel de administración
                window.location.href = 'admin-panel.html'; 
            }
        });
    }


    /* ==========================================================================
       FUNCIONALIDAD PARA EL PANEL DE ADMINISTRACIÓN (admin-panel.html)
       ========================================================================== */
    
    // Botón para agregar un nuevo servicio
    const addServiceBtn = document.querySelector('.add-service-btn');
    if(addServiceBtn) {
        addServiceBtn.addEventListener('click', () => {
            // En un futuro, esto abriría un modal o un formulario
            alert('Funcionalidad para agregar un nuevo servicio (futura implementación).');
        });
    }

    // Botones para eliminar un servicio
    const deleteButtons = document.querySelectorAll('.btn-danger');
    if (deleteButtons.length > 0) {
        deleteButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                // Muestra un diálogo de confirmación
                const confirmed = confirm('¿Estás seguro de que deseas eliminar este servicio?');

                if (confirmed) {
                    // Si el usuario confirma, elimina la fila de la tabla
                    const rowToDelete = event.target.closest('tr');
                    rowToDelete.remove();
                    // En una aplicación real, aquí se haría una llamada a la API para eliminar el dato
                    alert('Servicio eliminado exitosamente (simulación).');
                }
            });
        });
    }

});