import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Image
              src="/PROM_logo_small_blue (1).svg"
              alt="Prom Consulting"
              width={28}
              height={28}
            />
            <span>Сделано с любовью в <strong>Prom Consulting</strong></span>
          </div>
          <div className="footer-year">
            © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
