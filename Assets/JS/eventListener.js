const changeText = () => {
    const p = document.getElementById('text').addEventListener('click', () => {
        p.textContent = 'Text has been changed!';
    });
}