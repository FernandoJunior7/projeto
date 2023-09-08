function toggleMode(){
  // document = html
  const html = document.documentElement;

  // Essa função toda pode ser substituída por essa de baixo (toggle) 
  html.classList.toggle(`light`);

  // pegar a tag img
  const img = document.querySelector(`#profile img`);

  // se tiver light mode, mudar a source da imagem
   if (html.classList.contains("light")) {
    img.setAttribute(`src`, `./assets/avatar-light.png`);
    img.setAttribute(
      `alt`,
      `Mayk Brito sorrindo com fundo gradiente rosa e azul`
    );
   } else {
    img.setAttribute(`src`, `./assets/avatar.png`);
    img.setAttribute(`alt`, `Mayk Brito sorrindo com fundo sólido amarelo`);
   }
}