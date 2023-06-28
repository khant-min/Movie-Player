import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const toast = useToast();
  const form = useRef<HTMLFormElement>(null!);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pmaeg8v",
        "template_lmdy6iv",
        form.current,
        "xbZzt6V4t69qmvYff"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          toast({
            title: "Successfully Sent!",
            status: "success",
            isClosable: true,
          });
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box className="center flex-col p-10 bg-[#eaf5c9] w-[50%] m-auto my-10 rounded-xl">
      <form ref={form} onSubmit={sendEmail} className="w-full">
        <Heading className="font-header text-3xl text-center mb-10">
          Contact the Developer
        </Heading>
        <Stack className="w-full contact">
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

          <Button type="submit" className="font-header bg-white pt-10">
            Send
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Contact;
