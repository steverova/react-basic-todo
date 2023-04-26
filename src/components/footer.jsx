export function Footer() {
  return (
    <footer className="mt-5 py-3 text-center">
      <div className="container-fluid position-absolute bottom-0 d-flex justify-content-between border-top">
        <div className="p-3 ">
          <spa> Developed with:</spa>
          <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          <a
            href="https://es.react.dev/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="ms-3"
              style={{ width: "25px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt=""
            />
          </a>
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="ms-3"
              style={{ width: "25px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
              alt=""
            />
          </a>
          <a
            href="https://supabase.com/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="ms-3"
              style={{ width: "20px" }}
              src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
              alt=""
            />
          </a>
        </div>
        <div className="p-3">
          <a
            className="text-decoration-none"
            href="https://github.com/steverova"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="ms-3"
              style={{ width: "20px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg"
              alt=""
            />
            <span className="ms-3 text-white">Steverova</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
