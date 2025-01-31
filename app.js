const generateColourBtn = document.getElementById('generate-btn')
const colorContainer = document.getElementById('color-container')
const hexContainer = document.getElementById('hex-container')


generateColourBtn.addEventListener('click', function(e) {
    e.preventDefault()
    fetch("https://www.thecolorapi.com/scheme?hex=0047AB&mode=monochrome&count=5")
    .then(res => res.json())
    .then(data => {
        const generateColors = data.colors
        generateColors.forEach(color => {
            const colorDiv = document.createElement('div')
            colorDiv.classList.add('h-1/5', 'md:h-full', 'md:w-1/5')
            colorDiv.style.backgroundColor = color.hex.value
            colorContainer.appendChild(colorDiv)

            hexContainer.innerHTML += `
                <div class="h-1/5 md:w-1/5 md:h-24 flex justify-center items-center">${color.hex.value}</div>
            `
            console.log(color.hex.value)
        })
    })
})