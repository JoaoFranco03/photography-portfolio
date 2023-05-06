const toggleLanguageButton = document.getElementById('toggle-language');
toggleLanguageButton.addEventListener('click', () => {
  const currentLanguage = document.documentElement.lang;
  const newLanguage = currentLanguage === 'en' ? 'zh' : 'en';
  document.documentElement.lang = newLanguage;
  toggleLanguageButton.innerText = newLanguage === 'en' ? '中文' : 'English';
  const path = window.location.pathname;
  if (currentLanguage === 'en' && newLanguage === 'zh' && !path.includes('/zh/')) {
    window.location.href = `${window.location.origin}/zh${path}`;
  } else if (currentLanguage === 'zh' && newLanguage === 'en' && path.includes('/zh/')) {
    window.location.href = `${window.location.origin}${path.replace('/zh', '')}`;
  }
});