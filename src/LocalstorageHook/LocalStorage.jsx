import { useState } from "react"


function LocalStorage({textareaValue}) {


const localData = localStorage.getItem(textareaValue);
    
 const [storageValue , setStorageValue] = useState({
          storeValue : localStorage.getItem(textareaValue),
          getValue : JSON.parse(textareaValue)
      })

  return { storageValue , setStorageValue }
   
  
}

export default LocalStorage
