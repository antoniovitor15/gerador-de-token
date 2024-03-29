function generateToken() {
    return new Promise((resolve, reject) => {
      const tokenLength = 16; // Quantidade de caracteres do token
      const buffer = new Uint8Array(tokenLength);
      window.crypto.getRandomValues(buffer);
      resolve(Array.from(buffer, byte => byte.toString(16).padStart(2, '0')).join(''));
    });
  }
  
  document.getElementById('generateTokenBtn').addEventListener('click', async () => {
    try {
      const token = await generateToken();
      document.getElementById('tokenDisplay').textContent = "Token gerado: " + token;
    } catch (err) {
      console.error("Erro ao gerar token:", err);
    }
  });
  