 

const ContactForm = ({edit}) => {
  return (
    <form className={`flex flex-col rounded-2xl shadow-[0_6px_10px_rgba(0,0,0,0.2)] p-4 ${edit}`}>
      <label>Full name</label>
      <input
        type="text"
        placeholder="Enter your name"
        className="border-[1px] py-2 px-4 my-2 rounded-xl border-zinc-400"
      />

      <label htmlFor="" className="pt-4">Email</label>
      <input
        type="text"
        placeholder="Enter your email"
        className="border-[1px] py-2 px-4 my-2 rounded-xl border-zinc-400"
      />

      <label htmlFor="" className="pt-4">Message</label>
      <textarea
        rows="4"
        name=""
        id=""
        className="resize-none border-[1px] py-2 px-4 my-2 rounded-xl  border-zinc-400"
      ></textarea>

      <button className="p-4 bg-[#FF6F00] rounded-3xl font-medium md:font-normal my-4 text-white active:scale-[0.9]">
        Submit application{" "}
      </button>
    </form>
  );
};

export default ContactForm;
