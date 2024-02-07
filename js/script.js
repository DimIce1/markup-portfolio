const menuBtn = document.querySelector('.menu__icon')
const menu = document.querySelector('.menu__list')

if (menuBtn && menu) {
	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active')
		menu.classList.toggle('active')
	})
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.toggle('active')
			menu.classList.toggle('active')
    })
  })
}

const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchors => {
	anchors.addEventListener('click', e => {
		e.preventDefault()

		const blockID = anchors.getAttribute('href').substring(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
})

const createSelectedSection = root => {
	const nav = root.querySelector('nav')

	root.querySelectorAll('.observe').forEach(s => {
		new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
          nav.querySelectorAll('a').forEach(link => link.classList.remove('active'))
					let id = entry.target.getAttribute('id')
					nav.querySelector(`a[href="#${id}"]`).classList.add('active')
				}
			})
		}, {}).observe(s)
	})
}

createSelectedSection(document.querySelector('#page'))
