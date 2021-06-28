const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchToggle = document.querySelector('input#theme-switch-toggle');
themeSwitchToggle.addEventListener('change', onthemeSwitchToggleClick);

getCurrentTheme();

function onthemeSwitchToggleClick(evt) {
  document.body.classList.toggle(Theme.DARK);
  document.body.classList.toggle(Theme.LIGHT);

  localStorage.setItem('theme', document.body.classList);
}

function getCurrentTheme() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.body.classList.add(currentTheme);
    themeSwitchToggle.checked = currentTheme === Theme.LIGHT ? false : true;
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
}