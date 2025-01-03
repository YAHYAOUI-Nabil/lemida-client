import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as Toast from "@radix-ui/react-toast";

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email non valide"
    )
    .required(),
});

const NewsLetter = () => {
  const [open, setOpen] = React.useState(false);
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const submit = (values) => {
    console.log(values);
    setOpen(true);
  };

  return (
    <Toast.Provider swipeDirection="right">
      <section className="sm:px[282px] px-mobile_padding py-[34px] max-lg:pb-[32px] bg-[#F6F6F6] relative">
        <div className="flex flex-col gap-4 items-center py-5">
          <div className="flex flex-col items-center">
            <p className="md:text-2xl text-lg md:leading-[46px] leading-[37px] font-semibold text-center">
              Inscrivez-vous à notre newsletter
            </p>
            <p className="md:w-[518px] md:text-base text-sm leading-7 font-normal text-center">
              Et tenez-vous au courant de nos actualités, nos dernières
              formations et des meilleurs astuces pour vous former !
            </p>
          </div>
          <div className="md:w-[682px] w-[350px]">
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(submit)}
            >
              <input
                type="email"
                className={`${
                  errors.email && "border border-red-600"
                } w-full h-[50px] px-4 py-2 rounded-[30px] bg-white focus:outline-none`}
                placeholder="Entrez votre adresse email"
                {...register("email")}
              />
              <button
                type="submit"
                className="w-full h-[50px] px-[15px] py-1.5 rounded-full bg-primary hover:bg-secondary hover:text-primary border border-transparent hover:border-primary transition-all duration-500 ease-in-out font-medium text-white"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </section>
      <Toast.Root
        className="relative flex flex-col gap-4 rounded-md bg-white p-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="mb-[5px] text-lg font-medium text-slate-500 text-center [grid-area:_title]">
          Inscription réussie
        </Toast.Title>
        <Toast.Description asChild>
          <p className="text-sm">
            Vous recevrez bientôt nos newsletters dans votre boîte mail.
          </p>
        </Toast.Description>
        <Toast.Action
          className="[grid-area:_action]"
          asChild
          altText="Goto schedule to undo"
        >
          <button className="absolute top-4 right-4 inline-flex h-[25px] items-center justify-center rounded-md  px-2.5 text-xs font-medium leading-[25px] text-slate-500 shadow-[inset_0_0_0_1px] hover:shadow-[inset_0_0_0_1px] focus:shadow-[0_0_0_2px]">
            X
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </Toast.Provider>
  );
};

export default NewsLetter;
