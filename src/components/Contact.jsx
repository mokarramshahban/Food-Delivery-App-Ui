import react from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Contact Us</h1>
      <form>
        <label htmlFor="">Name</label>
        <input type="text" name="name" />
        <label htmlFor="">Message</label>
        <input type="text" name="message" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
