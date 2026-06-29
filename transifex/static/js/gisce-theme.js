(function() {
  var storageKey = 'gisce-theme';

  function storedTheme() {
    try {
      return window.localStorage ? localStorage.getItem(storageKey) : null;
    } catch (e) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      if (window.localStorage) {
        localStorage.setItem(storageKey, theme);
      }
    } catch (e) {}
  }

  function applyTheme(theme) {
    var isDark = theme == 'dark';
    var root = document.documentElement;
    var toggle = document.getElementById('theme-toggle');

    if (isDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }

    if (toggle) {
      toggle.className = isDark ? 'theme-toggle is-dark' : 'theme-toggle';
      toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      toggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  function initThemeToggle() {
    var toggle = document.getElementById('theme-toggle');

    applyTheme(storedTheme() == 'dark' ? 'dark' : 'light');

    if (!toggle) {
      return;
    }

    toggle.onclick = function() {
      var nextTheme = document.documentElement.getAttribute('data-theme') == 'dark' ? 'light' : 'dark';
      saveTheme(nextTheme);
      applyTheme(nextTheme);
      return false;
    };
  }

  if (document.readyState != 'loading') {
    initThemeToggle();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else if (window.attachEvent) {
    window.attachEvent('onload', initThemeToggle);
  } else {
    window.onload = initThemeToggle;
  }
}());
