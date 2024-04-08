// ....................toggle icon navbar ................
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

// ....................scroll section active link ................
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute['id'];

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('action');
                document.querySelector('header nav a[href* =' + id + ']').classList.add('active');
            });
        };
    });
};

// .................... sticky navbar ................
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// ....................remove toggle icon and navbar................
window.addEventListener('scroll', () => {
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
});

// .................... scroll reveal ................
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, services-container', 'portfolio-box', 'contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, about-content', { origin: 'right' });

// .................... typed js ................
const typed = new Typed('.multiple-text', {
    strings: ['Backend Developer', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

// .................... dark mode js ................
const toggleDarkMode = document.querySelector('.toggle-dark-mode');

toggleDarkMode.addEventListener('click', () => {
  container.classList.toggle('dark-mode');
  toggleDarkMode.classList.toggle('active');
});

// .................... dark mode js ................

// const container = document.querySelector('.container');

// const cloneContainer = container.cloneNode(true);
// cloneContainer.id = 'dark-container';
// document.body.appendChild(cloneContainer);


// // Function to send email
// function sendEmail(event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Get user input from form fields
//     const fullName = document.querySelector('#fullname').value;
//     const email = document.querySelector('#email').value;
//     const phone = document.querySelector('#phone').value;
//     const subject = document.querySelector('#subject').value;
//     const message = document.querySelector('#message').value;
  
//     // Send email using EmailJS serviceId and templateId
//     emailjs.send("service_y9i7grt","template_cnyrt2x",{
//       from_name: fullName,
//       from_email: email,
//       from_phone: phone,
//       subject: subject,
//       message: message,
//     }).then(
//       function (response) {
//         console.log("Email sent successfully", response);
//         alert("Email sent successfully");
//       },
//       function (error) {
//         console.error("Email send failed", error);
//         alert("Email send failed");
//       }
//     );
//   }
  
//   // Attach event listener to the form for form submission
//   document.getElementById("contact-form").addEventListener("submit", sendEmail);


// const btn = document.getElementById('button');

// document.getElementById('contact-form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_cnyrt2x';

   
//    // Send email using EmailJS serviceId and templateId
//    emailjs.sendForm(serviceID, templateID, this,{
//    })
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Email sent successfully!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });


const btn = document.getElementById('button');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_cnyrt2x';

    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS serviceId, templateId, and form data
    emailjs.sendForm(serviceID, templateID, this, {
        from_name: fullName,
        from_email: email,
        from_phone: phone,
        subject: subject,
        message: message
    }).then(() => {
        btn.value = 'Send Message';
        alert('Email sent successfully!');
    }).catch((err) => {
        btn.value = 'Send Message';
        alert('Email send failed: ' + JSON.stringify(err));
    });
});
