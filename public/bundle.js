// (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//   "use strict";
  
//   Object.defineProperty(exports, "__esModule", {
//     value: true
//   });
//   exports.default = void 0;
// }]})
        //contact.js

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
  };

        //contact list

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

    //contact form


const contactForm = {
  creatContact() {
      let inputForm =
      `
      <article>
          <fieldset>
              <label for="contact_name">Name:</label>
              <input id="contact_name" name="contact_name" type="text" autofocus />
          </fieldset>
          <fieldset>
              <label for="contact_number">Number:</label>
              <input id="contact_number" name="contact_number" type="text" autofocus />
          </fieldset>
          <fieldset>
              <label for="contact_address">Address:</label>
              <input id="contact_address" name="contact_address" type="text" autofocus />
          </fieldset>
          <button class="btn contact_save">Save Contact</button>
      </article>
      `
      let displayContainer = document.querySelector(".output");
      displayContainer.innerHTML = inputForm;

  },
      contactListener (){
          let contactSaveBtn = document.querySelector(".contact_save");
          contactSaveBtn.addEventListener("click", ()=> {
              let contactName = document.querySelector("#contact_name").Value;
              let contactNumber = document.getElementById("contact_number").Value;
              let contactAddress = document.getElementById("contact_address").value;



              const contactObject = {
                  name: name,
                  number: number,
                  address: address
              }
          contactCollection.saveContact(contactObject)
          .then (function () {
              contactList.contactify()
          })
              
          })
      }
  }



        //conatct form

        const contactCollection = {
          getContactList() {
          return fetch("http://localhost:8088/contacts")
          .then(response => response.json())
          },
          saveContact (contactToSave) {
             return fetch("http://localhost:8088/contacts", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(contactToSave)
              });
          }
      }