document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('text-input');
  const checkBtn = document.getElementById('check-btn');
  const result = document.getElementById('result');
  
  function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
  }
  
  checkBtn.addEventListener('click', function() {
    const text = textInput.value;
    
    if (!text) {
      alert('Please input a value');
      return;
    }
    
    const palindromeResult = isPalindrome(text);
    
    result.textContent = `${text} is ${palindromeResult ? 'a' : 'not a'} palindrome`;
    
    result.className = palindromeResult ? 'palindrome' : 'not-palindrome';
  });
  
  textInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      checkBtn.click();
    }
  });
});
