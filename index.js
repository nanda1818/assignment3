// Step 2: Data Object Store
const studentData = {
  621620: {
    name: "Rafi Mohammad",
    rollNumber: "621620",
    collegeName: "JNTU College of Engineering",
    joiningDate: "August 2018",
  },
};

function showStudentDetails() {
  const rollNumber = document.getElementById("rollInput").value.trim();
  const resultDiv = document.getElementById("result");

  // Find student by ID (Roll Number)
  const student = studentData[rollNumber];

  if (student) {
    resultDiv.innerHTML = `
                <h3>Student Details</h3>
                <p><strong>Name:</strong> ${student.name}</p>
                <p><strong>Roll Number:</strong> ${student.rollNumber}</p>
                <p><strong>College Name:</strong> ${student.collegeName}</p>
                <p><strong>Joining Date:</strong> ${student.joiningDate}</p>
            `;
  } else {
    resultDiv.innerHTML = `<p class="error">Student record not found for Roll Number: ${rollNumber}</p>`;
  }
}
