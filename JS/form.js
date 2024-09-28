document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('precalificarBtn')) {
        const buttons = document.querySelectorAll('.option');
        let selectedOption = '';
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                buttons.forEach(btn => btn.classList.remove('selected'));
                this.classList.add('selected');
                selectedOption = this.getAttribute('data-option');
            });
        });
        const precalificarBtn = document.getElementById('precalificarBtn');
        if (precalificarBtn) {
            precalificarBtn.addEventListener('click', function(event) {
                event.preventDefault();
                if (selectedOption) {
                    localStorage.setItem('selectedService', selectedOption);
                    window.location.href = 'formulario.html';
                } else {
                    alert('Por favor, selecciona una opción.');
                }
            });
        }
    }
    if (window.location.href.includes('formulario.html')) {
        const selectedService = localStorage.getItem('selectedService');
        if (selectedService) {
            const serviceSelect = document.getElementById('serviceType');
            if (serviceSelect) {
                const options = serviceSelect.options;
                for (let i = 0; i < options.length; i++) {
                    if (options[i].textContent.trim().toLowerCase() === selectedService.trim().toLowerCase()) {
                        options[i].selected = true;
                        break;
                    }
                }
            } else {
                console.log("Error: No se encontró el elemento <select> con id 'serviceType'");
            }
        } else {
            console.log("No hay servicio seleccionado en localStorage");
        }
    }
});
