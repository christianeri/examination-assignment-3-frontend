

const regExName:RegExp = /^[a-zA-Z\s]*$/ 
const regExEmail:RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  

export const validateText = (elementName:string, value:string, minLength:number = 2) => {
     if (value.length === 0) {
          return `${elementName} is required`
     } else if (value.length < minLength) {
          return `${elementName} must contain at least ${minLength} characters`
     } else 
          return ''
}

export const validateEmail = (elementName:string, value:string, regEx:RegExp = regExEmail) => {
     if (value.length === 0) {
          return `${elementName} is required`
     } else if (!regEx.test(value)) {
          return `${elementName} must be of valid format (ex: username@domain.com)`
     } else 
          return ''
}