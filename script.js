// script.js — Examples for assignment Parts 1–4

document.addEventListener('DOMContentLoaded', () => {
  // --- Part 1: Variables & Conditionals ---
  const ageInput = document.getElementById('ageInput');
  const checkAgeBtn = document.getElementById('checkAgeBtn');
  const ageResult = document.getElementById('ageResult');

  checkAgeBtn.addEventListener('click', () => {
    const age = Number(ageInput.value);
    // simple conditional
    if (Number.isNaN(age) || age < 0) {
      ageResult.textContent = 'Please enter a valid age.';
    } else if (age >= 18) {
      ageResult.textContent = 'You are an adult.';
    } else {
      ageResult.textContent = 'You are a minor.';
    }
  });

  // --- Part 2: Functions (reusable logic) ---
  // Function 1: calculate total
  function calculateTotal(price, qty) {
    const p = Number(price) || 0;
    const q = Number(qty) || 0;
    return p * q;
  }

  // Function 2: format currency (returns string)
  function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
  }

  const priceInput = document.getElementById('price');
  const qtyInput = document.getElementById('qty');
  const calcBtn = document.getElementById('calcBtn');
  const totalResult = document.getElementById('totalResult');

  calcBtn.addEventListener('click', () => {
    const total = calculateTotal(priceInput.value, qtyInput.value);
    totalResult.textContent = `Total: ${formatCurrency(total)}`;
  });

  // --- Part 3: Loops ---
  // Example 1: for loop — generate list items
  const genBtn = document.getElementById('genBtn');
  const genCount = document.getElementById('genCount');
  const generatedList = document.getElementById('generatedList');

  genBtn.addEventListener('click', () => {
    const count = Math.max(0, parseInt(genCount.value, 10) || 0);
    // clear previous
    generatedList.innerHTML = '';
    for (let i = 1; i <= count; i++) {
      const li = document.createElement('li');
      li.textContent = `Item ${i}`;
      generatedList.appendChild(li);
    }
  });

  // Example 2: while loop — simple countdown
  const startCountdown = document.getElementById('startCountdown');
  const countdownArea = document.getElementById('countdownArea');

  startCountdown.addEventListener('click', () => {
    let n = 5; // demonstration fixed start value
    countdownArea.textContent = `Starting: ${n}`;
    const id = setInterval(() => {
      n -= 1;
      if (n >= 0) {
        countdownArea.textContent = `Countdown: ${n}`;
      }
      if (n <= 0) {
        clearInterval(id);
        countdownArea.textContent = 'Lift off! 🚀';
      }
    }, 600);
  });

  // Small forEach example (array iteration)
  const sampleArray = [2, 4, 6];
  sampleArray.forEach((v, i) => {
    // This demonstrates a forEach usage — also visible in the console
    console.log(`forEach index:${i} value:${v}`);
  });

  // --- Part 4: DOM Interactions ---
  const nameInput = document.getElementById('nameInput');
  const greetBtn = document.getElementById('greetBtn');
  const greetResult = document.getElementById('greetResult');
  const toggleThemeBtn = document.getElementById('toggleTheme');

  // Interaction 1: show greeting (input handling + DOM update)
  greetBtn.addEventListener('click', () => {
    const name = (nameInput.value || '').trim();
    if (!name) {
      greetResult.textContent = 'Please enter your name.';
      return;
    }
    greetResult.textContent = `Hello, ${name}! Welcome to JS.`;
  });

  // Interaction 2: toggle theme (class toggle)
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // Interaction 3: dynamic element creation already covered in Part 3 (generated list)
  // Additional small interaction: click generated list items to mark them
  generatedList.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'LI') {
      e.target.classList.toggle('marked');
    }
  });
});
