const Footer = () => {
  return (
    <footer
      className="bg-light mt-4 w-100 text-dark p-2"
      // the custome styling below will fix footer to bottom
      // padding added to the outlet container so no content is hidden by footer
      style={{ position: "fixed", bottom: "0", height: "60px" }}
    >
      <div className="container text-center mb-5">
        <h4>&trade; {new Date().getFullYear()} - Taking Stock</h4>
      </div>
    </footer>
  );
};

export default Footer;