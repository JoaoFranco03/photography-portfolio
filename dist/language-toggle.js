const toggleLanguageButton = document.getElementById('toggle-language');
toggleLanguageButton.addEventListener('click', () => {
  const currentLanguage = document.documentElement.lang;
  const newLanguage = currentLanguage === 'en' ? 'zh' : 'en';
  document.documentElement.lang = newLanguage;
  toggleLanguageButton.innerText = newLanguage === 'en' ? 'Chinese' : 'English';
  const url = window.location.href;
  if (currentLanguage === 'en' && newLanguage === 'zh' && !url.includes('/zh/')) {
    window.location.href = url.replace('/dist/', '/dist/zh/');
  } else if (currentLanguage === 'zh' && newLanguage === 'en' && url.includes('/zh/')) {
    window.location.href = url.replace('/dist/zh/', '/dist/');
  }
});