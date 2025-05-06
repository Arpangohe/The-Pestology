translations ={
    en:{

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