function createNavbar(relativePath, placeholderInput) {
  const navbar = document.createElement("div");
  navbar.innerHTML = `
<a href = "${relativePath}/register-page/register.html">SignUp Page</a>
<a href = "${relativePath}/login-page/login.html">LogIn Page</a>
<a href = "${relativePath}/function-test/test.html">Test Page</a>
`;

  placeholderInput.appendChild(navbar);
}

export default createNavbar;
