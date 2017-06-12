const body = document.body
const sectionNodes = document.querySelectorAll('.Content')
const menuNode = document.querySelector('#Menu')
const menu = menuNode.getBoundingClientRect()
const sections = []

sectionNodes.forEach(function(el) {
    sections.push({
        dark: el.classList.contains('top'),
        top: el.offsetTop
    })
})

function getActiveSection(y, pad) {
    for (var i = 0; i < sections.length; i++) {
        const curr = sections[i]
        const next = sections[i + 1]
        if (y >= curr.top && (next == null || y < next.top)) {
            return curr
        }
    }
}

let dark = getActiveSection(window.scrollY).dark

body.classList.toggle('over-dark', dark)

let skip = false

document.addEventListener('scroll', function(e) {
    if (skip) return
    const y = window.scrollY
    const pad = menu.height
    const active = getActiveSection(y + pad)
    if (active.dark != dark) {
        dark = active.dark
        body.classList.toggle('over-dark', dark)
    }
    skip = true
    setTimeout(function() {
        skip = false
    }, 75)
})
