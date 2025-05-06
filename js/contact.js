
translations = {
    en:{
      
    },
  
    hi:{
      home: "होम",
      about: "हमारे बारे में",
      services: "सेवाएं",
      contacth: "संपर्क करें",
      touch:"सुविधा समाधान के लिए हमारी टीम से संपर्क करें।",
      Send:"हमसे संपर्क करने के लिए संदेश भेजें",
      Sendp:"नीचे दिया गया फॉर्म भरें और हम जल्द ही आपसे संपर्क करेंगे।",
      namel:"आपका नाम",
      namep:"अपना पूरा नाम दर्ज करें",
      Email:"ईमेल जानकारी",
      Emailp:"अपना ईमेल पता दर्ज करें",
      Phone:"फोन नंबर",
      Phonep:"कृपया अपना फोन नंबर भरें",
      Subject:"विषय",
      Subjectp:"यह किस विषय से संबंधित है?",
      Service:"आवश्यक सेवा",
      Services:"कृपया आवश्यक सेवा का चयन करें",
      pch:"कीट नियंत्रण",
      snh:"सैनिटाइजेशन",
      trh:"विशेषज्ञ व्यापारी",
      wph:"जलरोधक समाधान",
      wwh:"गोदाम",
      Other:"अन्य",
      yrmsg:"आपका संदेश",
      yrmsgd:"कृपया अपनी सुविधा समाधान की जरूरतों के बारे में जानकारी दें",
      consent:"मैं इस वेबसाइट को मेरी जानकारी संग्रहित करने की अनुमति देता/देती हूँ ताकि वे मुझे उत्तर दे सकें।",
      smsg:"संदेश भेजें",
      fq:"हमसे अक्सर पूछे जाने वाले प्रश्न",
      fqs:"हमारी सेवाओं से संबंधित सवालों के जवाब जानें",
      fq1:"आपकी सेवाएं किस क्षेत्र में उपलब्ध हैं?",
      fqs1:"हम मुख्य रूप से भोपाल और मध्य प्रदेश के आस-पास के क्षेत्रों में सेवाएं उपलब्ध कराते हैं। यदि आपको विशेष सेवा क्षेत्र के बारे में जानकारी चाहिए, तो कृपया हमसे सीधे संपर्क करें।",
      fq2:"क्या आपके उपचार बच्चों और पालतू जानवरों के लिए सुरक्षित हैं?",
      fqs2:"हां, हम ऐसे उत्पादों का उपयोग करते हैं जो परिवारों और पालतू जानवरों के लिए सुरक्षित होते हैं, जब इन्हें निर्देशों के अनुसार उपयोग किया जाता है। हम उपचार के दौरान और बाद में उठाए जाने वाले किसी भी सुरक्षा उपायों के बारे में विशेष निर्देश प्रदान करेंगे।",
      fq3:"क्या आप नि:शुल्क निरीक्षण की सेवा देते हैं?",
      fqs3:"हां, हम सामान्य सुविधा समाधान का मूल्यांकन करने के लिए नि:शुल्क निरीक्षण प्रदान करते हैं। इससे हमें आपकी विशेष आवश्यकताओं के अनुरूप सटीक उद्धरण देने में मदद मिलती है।",
      fq4:"आप सेवा की नियुक्ति कितनी जल्दी निर्धारित कर सकते हैं?",
      fqs4:"हम सामान्य सेवाओं के लिए 24-48 घंटे के भीतर नियुक्तियां निर्धारित करने में सक्षम होते हैं। आपातकालीन स्थितियों में, हम जब संभव हो, त्वरित सेवा प्रदान करते हैं।",
      fq5:"क्या आप अपनी सेवाओं की गारंटी देते हैं?",
      fqs5:"हां, हम अपनी सेवाओं की गारंटी प्रदान करते हैं। गारंटी की शर्तें सेवा के प्रकार पर निर्भर करती हैं, और हम इन शर्तों पर चर्चा करने के लिए आपकी परामर्श के दौरान उपलब्ध होंगे।",
      need:"क्या आपको तत्काल सहायता की आवश्यकता है?",
      nnedp:"तत्काल सेवा प्राप्त करने के लिए हमें अभी कॉल करें (+91) 88272 22101 पर।",
      call:"अभी कॉल करें"
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
  
       
        if (el.hasAttribute("placeholder") && translations[lang] && translations[lang][key]) {
            el.setAttribute("placeholder", translations[lang][key]); 
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
  