import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import "../App.css"

function Decode() {
  const [inputValue, setInputValue] = useState("")
  const [targetValue, setTargetValue] = useState("")
  //Encode the message

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    setTargetValue(getTargetValue(event.target.value))
  }
  const getTargetValue = (inputValue) => {
    //Generate an array of the alphabet using ascii values
    let alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))

    //shift the alphabet letters based on the key
    function cipherAlphabet() {
      let key = document.getElementById("key").value

      key = parseInt(key)

      let newAlphabet = []
      //set the new indices for letters
      for (let i = 0; i < alphabet.length; i++) {
        newAlphabet.push(alphabet[(i + key) % 26])
      }
      return newAlphabet
    }

    //get the position of the string letter in the alphabet
    let letterIndex

    //string to hold the encoded message
    let cipher = ""

    //string to hold the value of encoded letter
    let cipherLetter

    //get the cipher alphabet based on the key provided
    let cipherAlpha = cipherAlphabet()

    // //get the value of the text to be ciphered
    // let message = document.getElementById("message").value

    //variables to hold special characters we want to check in the function
    let escape1 = "."
    let escape2 = " "

    //we split the message into an array of individual characters
    let splitMessage = inputValue.split("")

    if (document.getElementById("message").value === "") {
      document.getElementById("errorMessage").innerHTML =
        "Please enter text here"
    } else if (document.getElementById("key").value === "") {
      document.getElementById("errorMessage1").innerHTML =
        "Please enter a key value"
    } else if (isNaN(document.getElementById("key").value)) {
      document.getElementById("errorMessage1").innerHTML =
        "Please enter a numerical value"
    } else {
      //we loop through the given message
      for (let j = 0; j < inputValue.length; j++) {
        let upperLetter = String(splitMessage[j]).toUpperCase()

        //we check if the given character is uppercase
        if (String(splitMessage[j]) === upperLetter) {
          //nested if to check if it is a space or period and append to the cipher message
          if (String(splitMessage[j]) === escape1) {
            cipherLetter = escape1
            cipher += cipherLetter
          } else if (String(splitMessage[j]) === escape2) {
            cipherLetter = escape2
            cipher += cipherLetter
          } else if (
            String(splitMessage[j]) == Number(splitMessage[j]) &&
            !isNaN(Number(splitMessage[j]))
          ) {
            cipher += String(splitMessage[j])
          }
          //if not convert the letter to lowercase, get the index of the letter in the alphabet array
          //and use the index to get the letter a the same index in the cipheralphabet array
          //we then append add it to the new string
          else {
            let lower = splitMessage[j].toLowerCase()

            letterIndex = cipherAlpha.indexOf(lower)

            cipherLetter = String(alphabet[letterIndex]).toUpperCase()

            cipher += cipherLetter
          }
        }
        //if its lowercase, we get the index of the letter and
        //use the index to find a letter at the same index in the cipher alphabet
        //append the letter to the new string
        else {
          letterIndex = cipherAlpha.indexOf(splitMessage[j])

          cipherLetter = String(alphabet[letterIndex])

          cipher += cipherLetter
        }
      }
      // Your logic to calculate the target value based on the input value goes here
      return cipher
    }
  }
  function clear() {
    // document.getElementById("displayText").innerHTML = cipher
    // document.getElementById("message").value = ""
    document.getElementById("key").value = ""
    document.getElementById("errorMessage").innerHTML = ""
    document.getElementById("errorMessage1").innerHTML = ""
    setTargetValue("")
    setInputValue("")
  }
  return (
    <div className="container">
      <div className="holder">
        <div className="links">
          <button className="link0">
            <Link className="link" to="/encode">
              Encode
            </Link>
          </button>
        </div>
        <div className="links">
          <button className="link0">
            <Link className="link" to="/decode">
              Decode
            </Link>
          </button>
          <Outlet />
        </div>
      </div>
      <div className="messageArea">
        <div className="keyContainer">
          <h2>Shift-Key</h2>
          <input type="number" id="key" placeholder="0"></input>
          <p id="errorMessage1"></p>
        </div>

        <div className="mainArea">
          <div>
            <div className="headings">Cipher-Text</div>
            <div>
              <textarea
                type="text"
                id="message"
                onChange={handleInputChange}
                placeholder="Enter CipherText..."
                value={inputValue}
                rows="10"
                cols="50"
              />
              <p id="errorMessage"></p>
            </div>
          </div>
          <div>
            <div className="headings">Plaintext</div>
            <div>
              <textarea
                type="text"
                id="displayText"
                value={targetValue}
                rows="10"
                cols="50"
              />
            </div>
          </div>
        </div>

        <div>
          <button className="link0" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default Decode
