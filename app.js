fetch("https://www.thecolorapi.com/scheme?hex=0047AB&mode=monochrome&count=2")
    .then(res => res.json())
    .then(data => console.log(data))