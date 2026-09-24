import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/styles/Contact.scss";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [sending, setSending] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasNameError = name.trim() === "";
    const hasEmailError = email.trim() === "";
    const hasMessageError = message.trim() === "";

    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);

    if (hasNameError || hasEmailError || hasMessageError) {
      return;
    }

    if (!form.current) {
      return;
    }

    try {
      setSending(true);

      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string,
        }
      );

      alert("Message sent successfully!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send the message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get In Touch</h1>

          <p>
            Have a project, internship opportunity, or collaboration in mind?
            Feel free to get in touch and let's build something together.
          </p>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                id="name"
                name="name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                sx={{
                      "& .MuiInputBase-input": {
                        color: "inherit",
                        WebkitTextFillColor: "currentColor",
                      },
                    }}
              />

              <TextField
                required
                id="email"
                name="email"
                type="email"
                label="Your Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email" : ""}
                sx={{
                      "& .MuiInputBase-input": {
                        color: "inherit",
                        WebkitTextFillColor: "currentColor",
                      },
                    }}
              />
            </div>

            <TextField
              required
              id="message"
              name="message"
              label="Message"
              placeholder="Tell me about your project or opportunity"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter your message" : ""}
              sx={{
                    "& .MuiInputBase-input": {
                      color: "inherit",
                      WebkitTextFillColor: "currentColor",
                    },
                  }}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;