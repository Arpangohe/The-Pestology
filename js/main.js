document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector(".mobile-toggle")
  const navList = document.querySelector(".nav-list")

  if (mobileToggle) {
    mobileToggle.addEventListener("click", function () {
      navList.classList.toggle("active")
      this.classList.toggle("active")
    })
  }

  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")

  if (testimonials.length > 0 && prevBtn && nextBtn) {
    let currentIndex = 0

    // Hide all testimonials except the first one
    testimonials.forEach((testimonial, index) => {
      if (index !== 0) {
        testimonial.style.display = "none"
      }
    })

    // Show next testimonial
    nextBtn.addEventListener("click", () => {
      testimonials[currentIndex].style.display = "none"
      currentIndex = (currentIndex + 1) % testimonials.length
      testimonials[currentIndex].style.display = "block"
    })

    // Show previous testimonial
    prevBtn.addEventListener("click", () => {
      testimonials[currentIndex].style.display = "none"
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
      testimonials[currentIndex].style.display = "block"
    })
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item")

  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")

      question.addEventListener("click", () => {
        // Close all other FAQ items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
            const otherIcon = otherItem.querySelector(".faq-toggle i")
            if (otherIcon.classList.contains("fa-minus")) {
              otherIcon.classList.remove("fa-minus")
              otherIcon.classList.add("fa-plus")
            }
          }
        })

        // Toggle current FAQ item
        item.classList.toggle("active")

        // Change icon
        const icon = item.querySelector(".faq-toggle i")
        if (item.classList.contains("active")) {
          icon.classList.remove("fa-plus")
          icon.classList.add("fa-minus")
        } else {
          icon.classList.remove("fa-minus")
          icon.classList.add("fa-plus")
        }
      })
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })

  // Footer Contact Form
  const footerForm = document.getElementById("footer-contact-form")

  if (footerForm) {
    footerForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Simple form validation
      const name = this.querySelector("#footer-name").value
      const email = this.querySelector("#footer-email").value
      const subject = this.querySelector("#footer-subject").value
      const message = this.querySelector("#footer-message").value

      if (name && email && subject && message) {
        // In a real application, you would send this data to a server
        alert("Thank you for your message! We will get back to you soon.")
        this.reset()
      } else {
        alert("Please fill in all fields.")
      }
    })
  }
})

    // iconss msgss

    const mainIcon = document.getElementById("main-icon");
  const msgIcon = document.getElementById("msg-icon");
  const phoneIcon = document.getElementById("phone-icon");

  let isOpen = false;

  mainIcon.addEventListener("click", () => {
    isOpen = !isOpen;
    msgIcon.classList.toggle("show", isOpen);
    phoneIcon.classList.toggle("show", isOpen);
  });

  // htmp popup
  const popupOverlay = document.getElementById("popupOverlay");
    const popupBox = document.getElementById("popupBox");

    function showPopup() {
      popupOverlay.classList.add("active");
    }

    function closePopup() {
      popupOverlay.classList.remove("active");
    }

    function navigateToService(service) {
      console.log("Navigating to service:", service);
      closePopup();
    }

    function navigateToContact() {
      console.log("Navigating to contact page");
      closePopup();
    }

    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        showPopup();
        setTimeout(() => {
          closePopup();
        }, 10000); // Auto close after 10 sec
      }, 1000); // Show after 1 sec
    });

    popupOverlay.addEventListener("click", (e) => {
      if (e.target === popupOverlay) {
        closePopup();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    });
// ---------------------------------------

// language translate
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact",
    get_quote: "Get Quote",
    hero_title: "Experienced Facility Solutions",
    hero_desc: "From pest management to sanitation solutions, we provide hassle-free solutions for your everyday problems.",
    our_services: "Our Services",
    welcome_heading: "Welcome to The Pestology",
    welcome_sub: "Your trusted and professional partner for comprehensive facility solutions",
    who_we_are: "Who We Are?",
    sub_text_p: "We are a multifaceted solutions company established in 2022 to make life easier. From pest management to sanitation solutions, we provide easy and effective solutions for everyday problems. Our services are delivered through high-quality products and seamless services to make your life smooth and hassle-free.",
    sub_text_p1: "Located in Bhopal, Madhya Pradesh, we provide high-quality services to residential homes, commercial offices, schools, restaurants, factories, and other locations through our professional services.",
    ISO: "ISO 9001:2015 Certified",
    PI: "Our Team",
    learn_more: "Learn More About Us",
    // services-----------
    srv_sub: "Comprehensive facility solutions for all your needs",
    pch: "Pest Control",
    pcp: "Effective pest management solutions to keep your premises pest-free.",
    // Sanitization-----------------
    snh: "Sanitization",
    snp: "Professional sanitization services to maintain hygiene and prevent infections.",
    // Traders
    trh: "Expert Traders",
    trp: "High-quality products and materials for all your facility management needs.",
    // water
    wph: "Waterproofing Solutions",
    wpp: "Best waterproofing solutions to protect your property from water damage.",
    // Warehouse
    wwh: "Warehouse",
    wwp: "Comprehensive warehouse management and pest control solutions.",
    // ---------------------------------
    view_all_services: "View All Services",
    sws: "Sectors We Serve",
    sectors_sub: "Providing solutions across various industries",
    // ----------------------------------------
    such: "Schools & University Campuses",
    csh: "Construction Sites",
    rhh: "Residential Areas",
    coh: "Commercial Offices",
    rh: "Food Service Establishments",
    fh: "Factories",
    // -----------------------------------
    wocsh: "What Our Clients Say",
    wocsp: "Hear from our satisfied customers",
    cp: "Pestology provided excellent pest control services for our office. Their team kept our place pest-free. We highly recommend their services!",
    cp1: "We have been using The Pestology's sanitization services for our restaurant, and the results have been excellent. Their attention to detail and use of high-quality products have helped us maintain the highest hygiene standards.",
    cp2: "The waterproofing done by The Pestology completely fixed our leakage problem. The team did a great job and completed it on time. Their service is excellent.",
    cta: "Ready to Get Started?",
    ctap: "Contact us today for a free consultation.",
    Contact_Us: "Contact Us Now"
  },
  hi:{
    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएं",
    contact: "संपर्क करें",
    get_quote: "कोट प्राप्त करें",
    hero_title: "अनुभवी सुविधा समाधान",
    hero_desc: "कीट प्रबंधन से लेकर स्वच्छता समाधान तक, हम आपके रोजमर्रा की समस्याओं के लिए परेशानी मुक्त समाधान प्रदान करते हैं।",
    our_services:"हमारी सेवाएं",
    get_quote: "कोट प्राप्त करें",
    welcome_heading:"The Pestology में आपका स्वागत है",
    welcome_sub:"समग्र सुविधा समाधान हेतु आपका भरोसेमंद और पेशेवर साझेदार",
    who_we_are:"हम कौन हैं?",
    sub_text_p:"हम एक बहुपरकारी समाधान कंपनी हैं, जिसे 2022 में जीवन को आसान बनाने के लिए शुरू किया गया। हम कीट प्रबंधन से लेकर स्वच्छता समाधान तक, रोज़मर्रा की समस्याओं के लिए आसान और प्रभावी समाधान प्रदान करते हैं। हमारी सेवाएं बेहतरीन गुणवत्ता वाले उत्पादों और निर्बाध सेवाओं के माध्यम से प्रदान की जाती हैं, ताकि आपका जीवन सहज और परेशानी मुक्त हो सके।",
    sub_text_p1:"भोपाल, मध्य प्रदेश में स्थित, हम अपने पेशेवर सेवाओं के जरिए आवासीय घरों, व्यवसायिक कार्यालयों, स्कूलों, रेस्तरां, कारखानों और अन्य स्थानों पर उच्च गुणवत्ता वाली सेवाएं प्रदान करते हैं।",
    ISO:"ISO 9001:2015 प्रमाणित",
    PI:"हमारी टीम",
    learn_more: "हमारे बारे में और जानें",
    // services-----------
    our_services:"हमारी सेवाएं",
    srv_sub:"आपकी सभी ज़रूरतों के लिए व्यापक सुविधा समाधान",
    pch:"कीट नियंत्रण",
    pcp:"आपके स्थान को कीट-मुक्त रखने के लिए प्रभावी कीट प्रबंधन समाधान।",
     // Sanitization-----------------
     snh:"सैनिटाइजेशन",
     snp:"हाइजीन बनाए रखने और संक्रमण से बचाव के लिए प्रोफेशनल सैनिटाइजेशन सेवाएं।",
     // Traders
    trh:"विशेषज्ञ व्यापारी",
    trp:"आपकी सभी सुविधा प्रबंधन आवश्यकताओं के लिए उच्च गुणवत्ता वाले उत्पाद और सामग्री।",
    // water
    wph:"जलरोधक समाधान",
    wpp:"आपकी संपत्ति को जल क्षति से सुरक्षित रखने के लिए सर्वोत्तम जलरोधक समाधान।",
    // Warehouse
    wwh:"गोदाम",
    wwp:"व्यापक गोदाम प्रबंधन और कीट नियंत्रण समाधान।",
    // ---------------------------------
    view_all_services: "सभी सेवाएं देखें",
    
    sws:"हम जिन क्षेत्रों में अपनी सेवाएं प्रदान करते हैं",
    sectors_sub: "विभिन्न उद्योगों में समाधान प्रदान करना",
    // ----------------------------------------
    such:"विद्यालय एवं विश्वविद्यालय परिसर",
    csh:"निर्माण स्थल",
    rhh:"आवासीय क्षेत्र",
    coh:"व्यावसायिक कार्यालय",
    rh:"भोजन सेवा प्रतिष्ठान",
    fh:"कारख़ाना",
    // -----------------------------------
    wocsh:"हमारे ग्राहकों के विचार",
    wocsp:"हमारे संतुष्ट ग्राहकों के अनुभव जानें",
    cp:"Pestology ने हमारे ऑफिस के लिए बहुत अच्छे कीट नियंत्रण सेवाएं दीं। उनकी टीम ने हमारी जगह को कीट-मुक्त रखा। हम इनकी सेवाओं की पूरी सिफारिश करते हैं!",
    cp1:"हम अपने रेस्टोरेंट के लिए The Pestology की सैनिटाइजेशन सेवाओं का उपयोग कर रहे हैं, और परिणाम अत्यंत उत्कृष्ट रहे हैं। उनकी बारीकी पर ध्यान देने की क्षमता और उच्च गुणवत्ता वाले उत्पादों का उपयोग हमें सर्वोच्च स्वच्छता मानकों को बनाए रखने में सहायक रहा है।",
    cp2:"The Pestology ने जो वॉटरप्रूफिंग की, उससे हमारी लीकेज की समस्या पूरी तरह ठीक हो गई। टीम ने बढ़िया और समय पर काम किया। उनकी सेवा शानदार है।",
    cta:"क्या आप शुरू करने के लिए तैयार हैं?",
    ctap:"आज ही हमसे संपर्क करें और मुफ्त सलाह लें।",
    Contact_Us:"अभी हमसे संपर्क करें"
  }
}
    // index hinditranslate
    function changeLanguage(lang) {
      // Update active button styling
      document.getElementById('en-btn').classList.remove('active');
      document.getElementById('hi-btn').classList.remove('active');
      document.getElementById(`${lang}-btn`).classList.add('active');
      
      // Update content based on data-i18n attributes
      document.querySelectorAll('[data-i18n]').forEach(element => {
          const key = element.getAttribute('data-i18n');
          if (translations[lang] && translations[lang][key]) {
              element.textContent = translations[lang][key];
          }
      });
      
      // Update HTML lang attribute
      document.documentElement.lang = lang;
      
      // Store selected language in localStorage for persistence
      localStorage.setItem('selectedLanguage', lang);
  }
  
  // Initialize language on page load
  document.addEventListener('DOMContentLoaded', function() {
      // Check if user has previously selected a language
      const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
      changeLanguage(savedLanguage);
  });
