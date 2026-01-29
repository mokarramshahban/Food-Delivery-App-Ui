const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, <strong>Mokarram Shahban</strong>
      </p>
    </footer>
  );
};

export default Footer;