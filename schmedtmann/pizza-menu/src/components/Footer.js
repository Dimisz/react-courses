const Footer = () => {
  const hour = new Date().getHours();
  // const hour = 22;
  const openingHour = 12;
  const closingHour = 22;
  const open = (hour >= openingHour && hour < closingHour);

  return(
    <footer className="footer">
       We are currently {open ? 'open' : 'closed'}
    </footer>
  );
}

export default Footer;