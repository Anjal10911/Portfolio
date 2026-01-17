"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    type: "design",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/meeodgbb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          type: formData.type,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", type: "design", message: "" });
        alert("Message sent successfully!");
      } else {
        setStatus("error");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      alert("Error sending message.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Interested in collaborating or discussing opportunities?
          Fill out the form below and I&apos;ll get back to you.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-red-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-300"
              >
                Fill up the form and I will get back to you within 24 hours.
              </Typography>
              <div className="flex gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  anjalik0911@gmail.com
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <TicketIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  Bangalore, India
                </Typography>
              </div>
              {/* <div className="flex items-center gap-5 mt-6">
                <a
                  href="https://www.linkedin.com/in/anjali-kumari-91a504247"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton variant="text" color="white" size="lg">
                    <i className="fa-brands fa-linkedin text-2xl" />
                  </IconButton>
                </a>
                <a href="https://github.com/Anjal10911" target="_blank" rel="noreferrer">
                  <IconButton variant="text" color="white" size="lg">
                    <i className="fa-brands fa-github text-2xl" />
                  </IconButton>
                </a>
                <a href="https://leetcode.com/u/Basicallyanjali/" target="_blank" rel="noreferrer">
                  <IconButton variant="text" color="white" size="lg">
                    <i className="fa-solid fa-code text-2xl" />
                  </IconButton>
                </a>
              </div> */}
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="eg. Lucas"
                    required
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="eg. Jones"
                    required
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="eg. lucas@mail.com"
                  required
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  What are you interested on?
                </Typography>
                <div className="-ml-3 mb-14 ">
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="type"
                    label="Design"
                    value="design"
                    checked={formData.type === "design"}
                    onChange={handleChange}
                  />
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="type"
                    label="Development"
                    value="development"
                    checked={formData.type === "development"}
                    onChange={handleChange}
                  />
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="type"
                    label="Support"
                    value="support"
                    checked={formData.type === "support"}
                    onChange={handleChange}
                  />
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="type"
                    label="Other"
                    value="other"
                    checked={formData.type === "other"}
                    onChange={handleChange}
                  />
                </div>
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex justify-end">
                  <Button className="w-full md:w-fit bg-red-600 hover:bg-red-700" size="md" type="submit" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Send message"}
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
