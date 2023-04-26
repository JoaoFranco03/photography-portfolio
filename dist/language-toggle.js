const toggleLanguageButton = document.getElementById('toggle-language');
toggleLanguageButton.addEventListener('click', () => {
  const currentLanguage = document.documentElement.lang;
  const newLanguage = currentLanguage === 'en' ? 'zh' : 'en';
  document.documentElement.lang = newLanguage;
  toggleLanguageButton.innerText = newLanguage === 'en' ? '中文' : 'English';
  console.log(window.location.href);
  if (currentLanguage === 'en' && newLanguage === 'zh') {
    window.location.href.replace("/zh", "");
  }
  if (currentLanguage === 'zh' && newLanguage === 'en') {
    window.location.href = "/zh" + window.location.href;
  }
});

  