document.addEventListener('DOMContentLoaded', () => {
    const correctSlider = document.getElementById('correct-slider');
    const divertPowerPanel = document.getElementById('divert-power-panel');
    const acceptPowerPanel = document.getElementById('accept-power-panel');
    const fuseButton = document.getElementById('fuse-button');
    const completionMessage = document.getElementById('completion-message');

    correctSlider.addEventListener('input', () => {
        if (correctSlider.value === '100') {
            setTimeout(() => {
                divertPowerPanel.classList.add('hidden');
                acceptPowerPanel.classList.remove('hidden');
            }, 500);
        }
    });

    fuseButton.addEventListener('click', () => {
        fuseButton.style.backgroundColor = '#ffeb3b';
        completionMessage.classList.remove('hidden');
    });
});