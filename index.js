// https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]',
);
//vybere z DOMu přepínač na barevný mód

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
};
// pokud je cíl zaškrtnutý, změní jeho atribute data-theme na 'dark', pokud není, změní atribut data-theme na 'light'

toggleSwitch.addEventListener('change', switchTheme, false);
// přidává elementu toggleSwitch event listener na změnu. při změně se zavolá funkce switchTheme



const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
// je v localStorage uložený item 'theme'? pokud ano, přidej proměnné currentTheme tuto hodnotu, jinak nic

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
// pokud je nějaká uložená theme v localStorage, pak nastav atribut data-theme na currentTheme + pokud je currentTheme tmavý mód, přepni přepínač na true (zaškrtnutý)
