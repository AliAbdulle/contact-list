const contacts = {

    // this method takes one argument, which we expact to be an object that represents a contact-list and will have the following structure:
    contactBuilder(contactObj) {
        let contactArticle = document.createElement("article")
        let contactName = document.createElement("h3")
        contactName.textContent = contactObj.name
        let ContactNumber = document.createElement("p");
        ContactNumber.textContent = contactObj.number
        let contactAddress = document.createElement("p")
        contactAddress.textContent = contactObj.address

        contactArticle.appendChild(contactName)
        contactArticle.appendChild(ContactNumber)
        contactArticle.appendChild(contactAddress)

        return
        contactArticle
        }
    }
export default contacts















// const contact = {
//     contactHTML(value) {
//        let contactHTML = `
//        <article>
//         <h3>Name: ${value.name}</h3>
//         <p>Phone Number: ${value.number}</p>
//         <p>Address: ${value.address}</p>
//         </article>
//         `
//     let contactBuilder = document.createElement("article")
//     contactBuilder.innerHTML = contactHTML;
//     return 
//         contactBuilder
//     }
// }
// export default contact;









// const createContact = function(name, number, address) {
//     return
//     name,
//     number,
//     address
// }













