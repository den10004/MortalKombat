import {createElement} from './createElement.js'

export const createReloadButton = () => {
    const $reloadWrap = createElement('div', 'reloadWrap')
    const $button = createElement('button', 'button')
    $button.innerHTML = "restart";

    $reloadWrap.appendChild($button)
    $reloadWrap.addEventListener('click', function () {
        window.location.reload()
    })
    return $reloadWrap
}