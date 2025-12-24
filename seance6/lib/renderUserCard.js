export default function renderUserCard(card){
    const container = document.querySelector('#user-container')

    container.innerHTML = ''
    container.appendChild(card)
}
