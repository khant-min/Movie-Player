import { Box, Button, Heading, Input, Stack, Textarea } from "@chakra-ui/react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../global.types";

const Contact = () => {
  const { darkTheme } = useAuth() as DataContextProps;
  const form = useRef<HTMLFormElement>(null!);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_MAIL_SERVICE,
        import.meta.env.VITE_MAIL_TEMPLATE,
        form.current,
        import.meta.env.VITE_MAIL_PWD
      )
      .then(
        (result: any) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
        },
        (err: any) => {
          console.log(err.text);
          toast.error(err.message);
        }
      );
  };

  return (
    <Box
      className={`animate center flex-col p-10 w-[90%]  md:w-[50%] m-auto my-10 rounded-xl ${
        darkTheme ? "bg-[#302b63] text-white" : "bg-[#eaf5c9] "
      }`}
    >
      <form ref={form} onSubmit={sendEmail} className="w-full">
        <Heading className="font-header text-3xl text-center mb-10">
          Contact the Developer
        </Heading>
        <Stack className="w-full contact text-black">
          <Input
            placeholder="What's your name"
            required
            autoComplete="off"
            name="user_name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setName(e.target.value)
            }
          />
          <Input
            placeholder="What's your email"
            required
            type="email"
            name="user_email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setEmail(e.target.value)
            }
          />
          <Textarea
            placeholder="What's your message"
            resize="none"
            required
            name="message"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
              setMessage(e.target.value)
            }
          />

          <Button
            type="submit"
            className="font-header bg-white pt-10 text-black"
          >
            Send
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Contact;
