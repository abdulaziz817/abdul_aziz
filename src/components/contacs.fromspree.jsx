import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xknlaeyn");
  if (state.succeeded) {
    return <p>Terima kasih!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="md:w-1/3 space-y-2">
      <label className="inline text-sm font-medium mb-2 " htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="py-3 px-4 block w-full border-gray-200 dark:bg-transparent outline-none border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder="example@site.com"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        className="py-3 px-4 block w-full border-gray-200 border dark:bg-transparent outline-none rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder="Komen apa aja boleh..."
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        class="py-3 px-4  inline-flex border border-gray-200 dark:bg-transparent dark:text-white outline-none items-center gap-x-2 text-sm font-medium rounded-lg  bg-white text-gray-800  hover:bg-gray-50"
      >
        Kirim
        <svg
          class="flex-shrink-0 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}

export default ContactForm;
