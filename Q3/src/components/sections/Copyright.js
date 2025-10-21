const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Haseeb Shaikh </span>
        <ul className="social">
              <li>
                <a href="https://www.linkedin.com/in/haseebshaikh03/" target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/haseebshaikh03/" target="_blank">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/923322834263" target="_blank">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-github" />
                </a>
              </li>
            </ul>
      </div>
    </section>
  );
};
export default Copyright;
