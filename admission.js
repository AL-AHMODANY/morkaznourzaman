
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('admissionForm');

// // selecyt the form
// form.addEventListener("submit", function (e) {
//   e.preventDefault(); 

//   //get values
//   const fullName = document.getElementById('fullName').value;
//   const phone = document.getElementById('phone').value;
//   const gender = document.getElementById('gender').value;

//   const admissionData = {
//     fullName,
//     phoneNumber,
//     gender,
//     submittedAt: new Date().toIsoString(),
//   };
//    // Retrieve existing submissions or create empty array
//         const existingData = JSON.parse(localStorage.getItem('admissions'))  || [];

//         // Add new submission
//         existingData.push(admissionData);
//   //  save to local storage
//   localStorage.setItem("admissionForm", JSON.stringify(existingData));
//   // optional alert
//   alert('Form Submitted Succesfully');
//   //   reset form
//   form.reset();
//       });
// });

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('admissionForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // stop page reload

        // Get form values
        const fullName = document.getElementById('fullName').value;
        const phone = document.getElementById('phone').value;
        const gender = document.getElementById('gender').value;

        // Create submission object
        const admissionData = {
            fullName,
            phone,
            gender,
            submittedAt: new Date().toISOString()
        };

        // Get existing submissions or empty array
        const existingData = JSON.parse(localStorage.getItem('admissions')) || [];

        // Add new submission
        existingData.push(admissionData);

        // Save back to localStorage
        localStorage.setItem('admissions', JSON.stringify(existingData));

        // Alert user
        alert('Form submitted successfully!');

        // Reset form
        form.reset();
    });
});


