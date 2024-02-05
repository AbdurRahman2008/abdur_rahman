
let emails = ['111abdurrehman111@gmail.com', 'saathtech@gmail.com']
let passes = ['password123', '123456']

      function checkAddress(email, pwd){

   let user_email = document.getElementById(email).value
   let user_pwd = document.getElementById(pwd).value

   if ( user_email !== "" && user_pwd !== "") {
  
     
      if( emails.includes(user_email) && passes.includes(user_pwd)) {
          alert(` Welcome ${user_email} to our page `)

          if(emails.indexOf(user_email) == passes.indexOf(user_pwd)) {
              document.write(``)
          }
          else {
              alert("Invalid email address or password! Please enter correct credentials.")
          }
      }
      else {
          alert("Invalid email address or password! Please enter correct credentials.")
      }

   }

   else {
      alert("Please enter a email address and password")
   }

  }