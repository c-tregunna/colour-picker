const generateColourBtn = document.getElementById('generate-btn')
const colorContainer = document.getElementById('color-container')
const hexContainer = document.getElementById('hex-container')
const colorPicker = document.getElementById('color-picker')
const modeSelection = document.getElementById('mode-selection')

function renderColors() {
    const pickedColor = colorPicker.value.slice(1) //slice(1) starts string at 1 index, removing the #
    const pickedMode = modeSelection.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor}&mode=${pickedMode}&count=5`) 
        .then(res => res.json())
        .then(data => {
            const generateColors = data.colors
            generateColors.forEach(color => {
                // create the colour divs - have to create element as bg-[${color.hex.value}] not working, so need to add using regular css
                const colorDiv = document.createElement('div')
                colorDiv.classList.add('h-1/5', 'md:h-full', 'md:w-1/5')
                colorDiv.style.backgroundColor = color.hex.value
                colorContainer.appendChild(colorDiv)

                // display the hex colds of the above colours
                hexContainer.innerHTML += `
                    <div class="h-1/5 md:w-1/5 md:h-24 flex justify-center items-center cursor-pointer">${color.hex.value}</div>
                `
            })
        })
}

generateColourBtn.addEventListener('click', function(e) {
    e.preventDefault()
    colorContainer.innerHTML = ''
    hexContainer.innerHTML = ''
    renderColors()

})

// dark mode button
const darkModeBtn = document.getElementById('dark-mode-btn')
darkModeBtn.addEventListener('click', function(e) {
    document.documentElement.classList.toggle('dark')
})

function copyHexCode(e) {
    if(e.target && e.target.tagName === 'DIV') {
        const hexCode = e.target.textContent.trim() //trim() remove any whitespace before of after text
        navigator.clipboard.writeText(hexCode)
        e.target.textContent = "Copied to Clipboard!";
        setTimeout(() => e.target.textContent = hexCode, 1500); //sets the text back to the hexcode
    }
}

hexContainer.addEventListener('click', copyHexCode)
