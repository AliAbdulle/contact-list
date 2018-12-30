import contact from "./contact"
import contectCollection from "./contactCollection"
const contactList = {
    contactify() {
        contactCollection.getallContacts()
        .then(allContacts => {
            let contactFragment = document.createDocumentFragment();
            allContacts.forEach(contactIttirate => {
            let contactHTML = contact.contactBuilder(contactIttirate)
            contactFragment.appendChild(contactHTML) 
            })
        let contactOutput = document.getElementsByClassName("output")
            contactOutput.appendChild(contactFragment)
        })
    }
}
export default contactList