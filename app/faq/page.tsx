'use client';
import React, { useState } from "react";
import { Container, Title } from "@mantine/core";

function FaqSimple() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const faqs = [
    {
      question: "What is Ahamenes Space Club?",
      answer:
        "Ahamenes Space Club is a student organization at Aastu dedicated to exploring and promoting interest in space exploration and astronomy among students.",
    },
    {
      question: "How can I join Ahamenes Space Club?",
      answer:
        "To join Ahamenes Space Club, visit our club office located on the third floor of the Student Center. You can also reach out to us via email at info@ahamenesspaceclub.com for more information.",
    },
    {
      question: "Does Ahamenes Space Club organize stargazing events?",
      answer:
        "Yes, Ahamenes Space Club frequently organizes stargazing events where members can observe celestial bodies through telescopes and learn about astronomy.",
    },
    {
      question: "Can non-students join Ahamenes Space Club?",
      answer:
        "Ahamenes Space Club is primarily for students of Aastu. However, we occasionally welcome non-students to participate in our events and activities.",
    },
    {
      question: "What are the benefits of joining Ahamenes Space Club?",
      answer:
        "Joining Ahamenes Space Club provides opportunities to engage in hands-on astronomy activities, connect with like-minded students, and participate in educational events and workshops.",
    },
    {
      question: "Does Ahamenes Space Club offer telescope rentals?",
      answer:
        "Yes, Ahamenes Space Club offers telescope rentals for members who wish to explore astronomy on their own or participate in stargazing events.",
    },
  ];

  return (
    <Container size="lg" className="text-center text-white flex justify-center">
      <div className="max-w-lg">
        <Title ta="center" className="m-1 text-3xl mb-9">
          Frequently Asked Questions
        </Title>

        <div className="border border-white rounded-lg p-2">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2" onClick={() => toggleSection(`${index}`)}>
              <div className="border-white rounded-md p-4 cursor-pointer">
                <h3 className="font-bold">{faq.question}</h3>
                {openSection === `${index}` && <p className="text-white pt-2 mt-2">{faq.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default FaqSimple;
