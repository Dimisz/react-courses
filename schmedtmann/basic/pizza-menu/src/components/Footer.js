const Footer = () => {
  const hour = new Date().getHours();
  // const hour = 22;
  const openingHour = 12;
  const closingHour = 22;
  const open = (hour >= openingHour && hour < closingHour);

  return(
    <footer className="footer">
       {
        open
        ?
        <div className="order">
          <p>We're open until {closingHour}. Come visit us or order online.</p>
          <button className="btn">
            Order
          </button>
        </div>
        :
        <p>
          We are happy to serve you between {openingHour} and {closingHour}!
        </p>
       }
    </footer>
  );
}

export default Footer;