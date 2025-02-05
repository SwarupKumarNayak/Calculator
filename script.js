document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.button');
    const clear = document.querySelector('.clear');
    const nightModeBtn = document.querySelector('.night-mode');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('equal')) {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else if (button.classList.contains('clear')) {
                display.value = '';
            } else {
                display.value += button.textContent;
            }
        });
    });
    
    nightModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        nightModeBtn.textContent = document.body.classList.contains('dark') ? 'Day Mode' : 'Night Mode';
    });
});