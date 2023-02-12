import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const ContactForm = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    emailAddress: yup.string().required(),
    companyName: yup.string().required(),
    userMessage: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <div className="mt-24 mx-6">
      <h1
        className="text-center text-[28px] sm:text-[40px] font-bold"
        id="test"
      >
        Contact Us For Access
      </h1>
      <form action="" className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap max-w-[650px] gap-y-8 gap-x-4 mx-auto justify-center border shadow-xl border-gray-700 rounded-xl md:p-14 py-8 px-4">
          <input
            type="text"
            placeholder="First Name"
            className="bg-hero-card text-center border border-gray-700 rounded-2xl p-2 max-w-[600px] w-full"
            {...register("firstName")}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-hero-card text-center border border-gray-700 rounded-2xl p-2 max-w-[600px] w-full"
            {...register("lastName")}
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-hero-card text-center border border-gray-700 rounded-2xl p-2 max-w-[600px] w-full"
            {...register("emailAddress")}
          />
          <input
            type="text"
            placeholder="Company Name"
            className="bg-hero-card text-center border border-gray-700 rounded-2xl p-2 max-w-[600px] w-full"
            {...register("companyName")}
          />
          <textarea
            className="bg-hero-card order rounded-2xl border-gray-700 min-h-[200px] max-w-[600px] p-3 w-full"
            placeholder="Enter Your Message Here"
            {...register("userMessage")}
          ></textarea>
          <button className=" shadow-xl px-4 py-2 rounded-xl bg-button-color max-w-[600px] w-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
