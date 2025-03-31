function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

const unsafeInput = '<script>alert("XSS Attack")</script>';
const safeInput = sanitizeInput(unsafeInput);
console.log(safeInput); // 將返回防止XSS的安全文本
