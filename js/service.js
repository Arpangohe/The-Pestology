translations ={
    en:{
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      our_services:"Our Services",
      our_servicespro:"Professional pest control solutions for residential and commercial properties",
      our_servicespp:"We offer a wide range of pest control services tailored to meet your specific needs. Our team of experts uses safe, effective, and environmentally friendly methods to eliminate and prevent pest infestations.",
    our_servicesp:"Comprehensive Pest Management Solutions",
    General_Pest:"General Pest Control",
    Generalpservl1:"Cockroach Control",
    Generalpservl2:"Mosquito Control",
    Generalpservl3:"Housefly Management",
    Generalpservl4:"Bed Bug Elimination",
    Generalpservl5:"Rat & Rodent Control",
    Learn:"Learn More",
    Termite_Control:"Termite Control",
    Termite_Controlp:"Our comprehensive termite control services help protect your property from destructive termite infestations.",
    Termitel1:"Pre-Construction Treatment",
    Termitel1:"Pre-Construction Treatment",
    Termitel2:"Post-Construction Treatment",
    Termitel3:"Termite Inspection",
    Termitel4:"Termite Baiting Systems",
    Termitel5:"Preventative Measures",
    cta_sectionh:"Need Professional Pest Control Services?",
    cta_sectionp:"Contact us today for a free inspection and customized treatment plan tailored to your specific pest control needs.",
    Quote:"Get a Free Quote"
    },

    hi:{
    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएं",
    contact: "संपर्क करें",
    our_services:"हमारी सेवाएँ",
    our_servicespro:"आवासीय और व्यावसायिक परिसरों के लिए पेशेवर कीट नियंत्रण समाधान",
    our_servicespp:"हम आपकी ज़रूरतों के अनुसार कीट नियंत्रण सेवाओं की एक पूरी श्रृंखला प्रदान करते हैं। हमारी एक्सपर्ट टीम सुरक्षित, असरदार और पर्यावरण के अनुकूल तरीकों से कीटों को खत्म करती है और दोबारा होने से रोकती है।",
    our_servicesp:"हर परिस्थिति के लिए संपूर्ण सुविधा समाधान",
    General_Pest:"सामान्य कीट नियंत्रण",
    General_Pestp:"हमारी सामान्य कीट नियंत्रण सेवाएं, घर में पाए जाने वाले आम कीटों को हटाने और उनके दोबारा फैलने से रोकने के लिए विशेष रूप से बनाई गई हैं।",
    Generalpservl1:"कॉकरोच कंट्रोल सेवा",
    Generalpservl2:"मच्छर नियंत्रण सेवा",
    Generalpservl3:"मक्खी नियंत्रण सेवा",
    Generalpservl4:"खटमल उन्मूलन",
    Generalpservl5:"चूहा एवं कुंतक नियंत्रण",
    Learn:"अधिक जानें",
    Termite_Control:"दीमक नियंत्रण सेवा",
    Termite_Controlp:"हमारी समग्र दीमक नियंत्रण सेवाएं आपकी संपत्ति को विनाशकारी दीमक के संक्रमण से बचाने में मदद करती हैं।",
    Termitel1:"पूर्व निर्माण उपचार",
    Termitel2:"निर्माण के बाद सुरक्षा उपचार",
    Termitel3:"दीमक निरीक्षण",
    Termitel4:"दीमक नियंत्रण प्रणाली",
    Termitel5:"रोकथाम उपाय",
    cta_sectionh:"क्या आपको कीट नियंत्रण में मदद चाहिए?",
    cta_sectionp:"आज ही हमसे संपर्क करें, मुफ्त निरीक्षण करवाएं और अपनी आवश्यकताओं के अनुसार कस्टम उपचार योजना पाएं।",
    Quote:"मुफ्त अनुमान प्राप्त करें"
        

    }
}

function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      } else {
        console.warn(`Missing translation for '${key}' in '${lang}'`);
      }
    });
  
    localStorage.setItem("lang", lang);
    const languageSelector = document.getElementById("language");
    if (languageSelector) {
      languageSelector.value = lang;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    changeLanguage(savedLang);
  
    const languageSelector = document.getElementById("language");
    if (languageSelector) {
      languageSelector.addEventListener("change", e => {
        changeLanguage(e.target.value);
      });
    }
  });