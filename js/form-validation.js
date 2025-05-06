document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form")
  const formMessage = document.getElementById("form-message")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const phone = document.getElementById("phone").value
      const subject = document.getElementById("subject").value
      const service = document.getElementById("service").value
      const message = document.getElementById("message").value
      const consent = document.getElementById("consent").checked

      // Validate form
      let isValid = true
      let errorMessage = ""

      if (!name) {
        isValid = false
        errorMessage += "Name is required. "
      }

      if (!email) {
        isValid = false
        errorMessage += "Email is required. "
      } else if (!isValidEmail(email)) {
        isValid = false
        errorMessage += "Please enter a valid email address. "
      }

      if (!phone) {
        isValid = false
        errorMessage += "Phone number is required. "
      }

      if (!subject) {
        isValid = false
        errorMessage += "Subject is required. "
      }

      if (!service) {
        isValid = false
        errorMessage += "Please select a service. "
      }

      if (!message) {
        isValid = false
        errorMessage += "Message is required. "
      }

      if (!consent) {
        isValid = false
        errorMessage += "You must consent to having your information stored. "
      }

      // Display validation results
      if (isValid) {
        // In a real application, you would send this data to a server
        formMessage.className = "form-message success"
        formMessage.textContent = "Thank you for your message! We will get back to you shortly."
        contactForm.reset()

        // Clear success message after 5 seconds
        setTimeout(() => {
          formMessage.textContent = ""
          formMessage.className = "form-message"
        }, 5000)
      } else {
        formMessage.className = "form-message error"
        formMessage.textContent = errorMessage
      }
    })
  }

  // Helper function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Phone number formatting
  const phoneInput = document.getElementById("phone")
  if (phoneInput) {
    phoneInput.addEventListener("input", function (e) {
      // Get input value and remove non-numeric characters
      const input = this.value.replace(/\D/g, "")

      // Format the phone number as (XXX) XXX-XXXX
      if (input.length > 0) {
        // Add the area code parentheses
        if (input.length <= 3) {
          this.value = input
        }
        // Add the space after area code
        else if (input.length <= 6) {
          this.value = input.substring(0, 3) + " " + input.substring(3)
        }
        // Add the hyphen
        else {
          this.value = input.substring(0, 3) + " " + input.substring(3, 6) + " " + input.substring(6, 10)
        }
      }
    })
  }
})
