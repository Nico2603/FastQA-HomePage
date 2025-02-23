export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} <strong>FastQA</strong>. 
        Todos los derechos reservados. <br />
        <small>
          Construido con pasión por el testing automatizado y el desarrollo de software.
        </small>
      </p>
    </footer>
  );
}
