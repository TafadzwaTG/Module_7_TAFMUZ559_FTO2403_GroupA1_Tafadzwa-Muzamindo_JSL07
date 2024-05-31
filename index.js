// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
   // Select necessary DOM elements
    const cardForm = document.getElementById('cardForm');  // Form element
    const modal = document.getElementById('modal');  // Modal element
    const certificateContent = document.getElementById('certificateContent'); // Certificate content area
    const closeModal = document.querySelector('.close'); // Close button inside the modal
  
    // Hide the modal initially
    modal.style.display = 'none';

  // Add event listener to the form submission
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName'); // Student name input field
      const personalMessageInput = document.getElementById('personalMessage') ; // Personal message input field
      const courseNameInput = document.getElementById('courseName') // Course name input field

  ;  // Extract input values
      const studentName = studentNameInput.value; // Student name
      const personalMessage = personalMessageInput.value;  // Personal message
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

         // Validate input values
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
    
      <h3>Congratulations,${studentName}!</h3>
      <p>${personalMessage}</p>
      <p>Course: ${courseName}</p>
      <img src="logo.png" alt="Logo" style="width: 100px; height: auto; margin-bottom: 20px;">
      
     
      
    `;
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';   // Validate input values
      
    });
  });
  