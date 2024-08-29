import React from 'react'
import './css/Experience.css'
function Experience() {
  return (
    <>
      <div className="experience">
        <h1>Topper's Wall</h1>
      </div>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/Images/Arush.png" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="/Images/Abhinav.png" class="d-block w-100" alt="..."/>
              
          </div>
          <div class="carousel-item">
            <img src="/Images/Akash.png" class="d-block w-100" alt="..."/>
              
          </div>
          <div class="carousel-item">
            <img src="/Images/Vidyavaridhi.png" class="d-block w-100" alt="..."/>
              
          </div>
          <div class="carousel-item">
            <img src="/Images/Screenshot (209).png" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="experience">
        <h1>Owner's Desk</h1>
        <section id="owners-desk">
  <div class="container">
    <h3><strong>Welcome to Gyanm Academy!</strong></h3> <br /><br />
    <p>At Gyanm Academy, we believe that every student has the potential to achieve greatness. As the founder and owner, I am committed to providing a nurturing and inspiring environment where students can excel academically and grow personally.</p>
    <p>Our center was established with the vision of making quality education accessible to all. We understand the unique challenges that each student faces, and it is our mission to support and guide them on their educational journey. Our team of dedicated educators shares a passion for teaching and is committed to helping students reach their full potential.</p>
    <p>Education is not just about passing exams; it's about building a strong foundation for the future. We strive to instill a love for learning in our students, encouraging them to think critically, explore new ideas, and develop the skills they need to succeed in life.</p>
    <p>We are proud of the community we have built and the success stories of our students. Their achievements are a testament to the hard work, dedication, and collaborative spirit that define our tuition center.</p>
    <p>Thank you for trusting us with your child's education. Together, we will continue to strive for excellence and help each student achieve their dreams.</p>
    <p><strong>Warm regards,</strong></p>
    <p>Amit Uniyal <br/>
    Founder of Gyanm Academy</p>
  </div>
</section>

      </div>
    </>
  )
}

export default Experience
