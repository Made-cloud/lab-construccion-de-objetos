// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    
  }
  
  const newMail = new Mail(  )
  
  // Type your code above this line!
  
  Mail.prototype.printMail = function() {
      console.log(this.subject + ": " + this.message)
      return this.subject + ": " + this.message;
  }

// Type your code above this line!

  
newMail.printMail()