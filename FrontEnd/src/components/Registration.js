import React, { useState } from 'react';
import axios from 'axios';
function StudentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    schoolName: '',
    Class: '',
    subject: []
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData(prevState => {
        if (checked) {
          return {
            ...prevState,
            subject: [...prevState.subject, value]
          };
        } else {
          return {
            ...prevState,
            subject: prevState.subject.filter(subject => subject !== value)
          };
        }
      });
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:3000/api/register', formData);
      setSubmitted(true);
      alert('Registration successful');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error during registration. Please try again.');
    }
  };

  return (
    <div>
      <h2>Student Information Form</h2>
      {submitted ? (
        <div>
          <p>Thank you for submitting the form. We will contact you soon!</p>
          <input type="button" onClick={handleSubmit} />
        </div>
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
            <option value="Others">Other school</option>
          </select>

          <label>Parents/Guardian's Number:</label>
          <input type="text" id="phone" name="phone" required pattern="\d{10}" title="Please enter a Valid 10-digit phone number" />
          <label>Personal Number:</label>
          <input type="text" id="phone" name="phone" required pattern="\d{10}" title="Please enter a Valid 10-digit phone number" />

          <label>Class:</label>
          <input type="radio" id="class9" name="Class" value="Class 9th" checked={formData.Class === "Class 9th"} onChange={handleChange} required />
          <label htmlFor="class9">Class 9th</label>
          <input type="radio" id="class10" name="Class" value="Class 10th" checked={formData.Class === "Class 10th"} onChange={handleChange} />
          <label htmlFor="class10">Class 10th</label>
          <input type="radio" id="class11" name="Class" value="Class 11th" checked={formData.Class === "Class 11th"} onChange={handleChange} />
          <label htmlFor="class11">Class 11th</label>
          <input type="radio" id="class12" name="Class" value="Class 12th" checked={formData.Class === "Class 12th"} onChange={handleChange} />
          <label htmlFor="class12">Class 12th</label>

          <label>Subjects:</label>
          <input type="checkbox" id="subject1" name="subject" value="Mathematics" checked={formData.subject.includes("Mathematics")} onChange={handleChange} />
          <label htmlFor="subject1">Mathematics</label>
          <input type="checkbox" id="subject2" name="subject" value="Science" checked={formData.subject.includes("Science")} onChange={handleChange} />
          <label htmlFor="subject2">Science(For class 9th and 10th)</label>
          <input type="checkbox" id="subject3" name="subject" value="Physics" checked={formData.subject.includes("Physics")} onChange={handleChange} />
          <label htmlFor="subject3">Physics</label>
          <input type="checkbox" id="subject4" name="subject" value="Chemistry" checked={formData.subject.includes("Chemistry")} onChange={handleChange} />
          <label htmlFor="subject4">Chemistry</label>
          <input type="checkbox" id="subject5" name="subject" value="Biology" checked={formData.subject.includes("Biology")} onChange={handleChange} />
          <label htmlFor="subject5">Biology</label>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default StudentForm;
