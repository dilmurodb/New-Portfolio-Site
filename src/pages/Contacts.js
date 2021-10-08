import { useEffect } from "react";
const Contacts = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <h1>Contacts</h1>
      <p>
        E-Mail dilmurod.bukharov@gmail.com Phone Mobile Number: (412)758-1167
        GitHub LinkedIn
      </p>
    </div>
  );
};

export default Contacts;
