import React, { useState } from 'react';

function StudentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    schoolName: '',
    class: '',
    subject: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
  };

  return (
    <div>
      <h2>Student Information Form</h2>
      {submitted ? (
        <p>Thank you for submitting the form. We will contact you soon!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <label htmlFor="schoolName">School Name:</label>
          <select id="schoolName" name="schoolName" value={formData.schoolName} onChange={handleChange} required>
            <option value="">Select School</option>
            <option value="Kendriya Vidyalaya">Kendriya Vidyalaya</option>
            <option value="Devbhomi">Devbhomi</option>
            <option value="Shemford">Shemford</option>
            <option value="St. Theresa">St. Theresa</option>
            <option value="SGRR">SGRR</option>
          </select>

          <label>Class:</label>
          <input type="radio" id="class1" name="class" value="Class 1" checked={formData.class === "Class 1"} onChange={handleChange} required />
          <label htmlFor="class1">Class 1</label>
          <input type="radio" id="class2" name="class" value="Class 2" checked={formData.class === "Class 2"} onChange={handleChange} />
          <label htmlFor="class2">Class 2</label>
          <input type="radio" id="class3" name="class" value="Class 3" checked={formData.class === "Class 3"} onChange={handleChange} />
          <label htmlFor="class3">Class 3</label>

          <label>Subjects:</label>
          <input type="radio" id="subject1" name="subject" value="Mathematics" checked={formData.subject === "Mathematics"} onChange={handleChange} required />
          <label htmlFor="subject1">Mathematics</label>
          <input type="radio" id="subject2" name="subject" value="Science" checked={formData.subject === "Science"} onChange={handleChange} />
          <label htmlFor="subject2">Science</label>
          <input type="radio" id="subject3" name="subject" value="English" checked={formData.subject === "English"} onChange={handleChange} />
          <label htmlFor="subject3">English</label>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default StudentForm;
