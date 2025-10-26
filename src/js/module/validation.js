export function setupFormValidation() {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  // --- Показ ошибки ---
  function showError(input, message) {
    const errorEl = document.getElementById(`error-${input.id}`);
    errorEl.textContent = message;
    errorEl.hidden = false;
    input.classList.add('is-invalid');
    input.setAttribute('aria-invalid', 'true');
  }

  // --- Очистка ошибки ---
  function clearError(input) {
    const errorEl = document.getElementById(`error-${input.id}`);
    errorEl.hidden = true;
    errorEl.textContent = '';
    input.classList.remove('is-invalid');
    input.removeAttribute('aria-invalid');
  }

  // --- Проверка email ---
  function isValidEmail(value) {
    const pattern = /^(?!\d+@)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return pattern.test(value.trim());
  }

// Проверка имени: заглавная буква + корректный формат
  function isValidName(value) {
    const namePattern = /^[A-ZА-ЯЁ][a-zа-яё]+(?:[ -][A-ZА-ЯЁ][a-zа-яё]+)*$/;
    return namePattern.test(value.trim());
  }

  // --- Проверка конкретного поля ---
  function validateField(input) {
    const value = input.value.trim();

    if (input.id === 'name' && !isValidName(value)) {
      showError(input, 'Имя должно начинаться с заглавной буквы и содержать только буквы');
      return false;
    }

    if (!value) {
      showError(input, 'Поле обязательно для заполнения');
      return false;
    }


    if (input.id === 'email' && !isValidEmail(value)) {
      showError(input, 'Недопустимый формат');
      return false;
    }

    clearError(input);
    return true;
  }

  // --- Проверка всей формы ---
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValidName = validateField(nameInput);
    const isValidEmail = validateField(emailInput);

    if (isValidName && isValidEmail) {
      alert('Форма успешно отправлена!');
      form.reset();
    }
  });

  // --- Скрытие ошибки при вводе заново ---
  [nameInput, emailInput].forEach((input) => {
    input.addEventListener('input', () => {
      // если поле ранее было ошибочным — проверяем заново
      if (input.classList.contains('is-invalid')) {
        validateField(input);
      }
    });
  });
}
