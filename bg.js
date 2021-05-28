const button = document.querySelector("button");
const h1 = document.querySelector('h1');
document.body.style.textAlign = 'center';
button.style.borderRadius = '8px'

button.addEventListener('click', function() {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    h1.style.color = 'rgba(29, 29, 29, 0.959)';
});
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`;
}