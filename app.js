const generateColourBtn = document.getElementById('generate-btn')
const colorContainer = document.getElementById('color-container')
const hexContainer = document.getElementById('hex-container')
const colorPicker = document.getElementById('color-picker')
const modeSelection = document.getElementById('mode-selection')



generateColourBtn.addEventListener('click', function(e) {
    e.preventDefault()
    colorContainer.innerHTML = ''
    hexContainer.innerHTML = ''
    const pickedColor = colorPicker.value
    const pickedMode = modeSelection.value
    console.log(modeSelection.value)
    fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor.slice(1)}&mode=${pickedMode}&count=5`)
        .then(res => res.json())
        .then(data => {
            const generateColors = data.colors
            generateColors.forEach(color => {
                // create the colour divs
                const colorDiv = document.createElement('div')
                colorDiv.classList.add('h-1/5', 'md:h-full', 'md:w-1/5')
                colorDiv.style.backgroundColor = color.hex.value
                colorContainer.appendChild(colorDiv)
                // display the hex colds of the above colours
                hexContainer.innerHTML += `
                    <div class="h-1/5 md:w-1/5 md:h-24 flex justify-center items-center">${color.hex.value}</div>
                `
            })
        })
})