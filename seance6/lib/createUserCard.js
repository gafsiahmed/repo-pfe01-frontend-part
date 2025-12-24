export default function createUserCard(user){

    const userCard = document.createElement('div')
    userCard.classList.add('userCard')

    const userImage  = document.createElement('img')

    userImage.src = user.picture.large
    userImage.classList.add('userImage')

    const userFullName =  document.createElement('h3')

    userFullName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}  `

    const userAdress = document.createElement('p')
    userAdress.textContent = `${user.location.street.number} ${user.location.street.name} / ${user.location.city} , ${user.location.state} , ${user.location.country} ` 

    const userEmail = document.createElement('p')

    userEmail.textContent = user.email

    userCard.appendChild(userImage)
    userCard.appendChild(userFullName)
    userCard.appendChild(userAdress)
    userCard.appendChild(userEmail)

    return userCard
   
}