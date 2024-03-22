"use client";
import { useState } from "react";
import { Container, Title } from "@mantine/core";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

function FaqSimple() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <Container size="sm" className="text-center text-white flex justify-center">
      <div className="max-w-md">
        <Title ta="center" className="m-3 text-3xl mb-4">
          Frequently Asked Questions
        </Title>

        <div className="border border-white rounded-md p-4">
          <div className="mb-4" onClick={() => toggleSection("password")}>
            <div className=" border-white rounded-md p-4">
              <h3 className="cursor-pointer font-bold">
                How can I reset my password?
              </h3>
              {openSection === "password" && (
                <p className="text-white">{placeholder}</p>
              )}
            </div>
          </div>

          <div className="mb-4" onClick={() => toggleSection("account")}>
            <div className="border-white rounded-md p-4">
              <h3 className="cursor-pointer  font-bold">
                Can I create more than one account?
              </h3>
              {openSection === "account" && (
                <p className="text-white">{placeholder}</p>
              )}
            </div>
          </div>

          <div className="mb-4" onClick={() => toggleSection("newsletter")}>
            <div className=" rounded-md p-4">
              <h3 className="cursor-pointer  font-bold">
                How can I subscribe to monthly newsletter?
              </h3>
              {openSection === "newsletter" && (
                <p className="text-white">{placeholder}</p>
              )}
            </div>
          </div>

          <div className="mb-4" onClick={() => toggleSection("creditCard")}>
            <div className=" rounded-md p-4">
              <h3 className="cursor-pointer  font-bold">
                Do you store credit card information securely?
              </h3>
              {openSection === "creditCard" && (
                <p className="text-white">{placeholder}</p>
              )}
            </div>
          </div>

          <div className="mb-4" onClick={() => toggleSection("payment")}>
            <div className="border-white rounded-md p-4">
              <h3 className="cursor-pointer  font-bold">
                What payment systems do you work with?
              </h3>
              {openSection === "payment" && (
                <p className="text-white">{placeholder}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default FaqSimple;
