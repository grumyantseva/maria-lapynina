const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => { const open = navigation.hidden; navigation.hidden = !open; menuButton.setAttribute('aria-expanded', String(open)); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('header')) closeMenu(); });
const dialog = document.querySelector('#request');
const form = dialog.querySelector('form');
document.querySelectorAll('[data-program]').forEach(button => button.addEventListener('click', () => { form.reset(); form.querySelector('.form-status').textContent = ''; document.querySelector('#selected-program').textContent = button.dataset.program; dialog.showModal(); document.body.classList.add('modal-open'); }));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
form.addEventListener('submit', event => { event.preventDefault(); const name = form.elements.name.value.trim(); const contact = form.elements.contact.value.trim(); if (!name || !contact) { form.querySelector('.form-status').textContent = 'Введите имя и способ связи.'; return; } form.querySelector('.form-status').textContent = `${name}, всё готово! В рабочей версии заявка на «${document.querySelector('#selected-program').textContent}» будет отправлена тренеру. Сейчас данные не отправлялись.`; });
