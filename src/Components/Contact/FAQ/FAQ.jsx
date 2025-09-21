import React, { useState } from "react";
import faqImage from "../../../assets/Contact img/FAQ/FAQ Icons.svg"; // keep your path

const faqs = [
  {
    question: "How do I enroll in an online course?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "Are there any prerequisites for enrolling in online courses?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "What are the technical requirements for online learning?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "What if I encounter technical difficulties?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
  {
    question: "Are there live classes, or can I learn at my own pace?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Amet ornare sit leo tristique sollicitudin ipsum diam fames. A vel iaculis lorem risus sit et. Auctor ipsum amet nibh sagittis accumsan pretium pulvinar proin urna ac.",
  },
];

// Plus/minus icon with smooth transition
function PlusMinusIcon({ open }) {
  return (
    <svg
      className="w-6 h-6 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {/* horizontal line */}
      <line x1="5" y1="12" x2="19" y2="12" />
      {/* vertical line (scales away when open) */}
      <line
        x1="12"
        y1="5"
        x2="12"
        y2="19"
        className={`origin-center transition-transform duration-300 ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="min-h-screen bg-[#F1F7F9] flex flex-col items-center px-6 lg:px-20 py-12">
      {/* Image + Title */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-40 mb-12">
        <img
          src={faqImage}
          alt="FAQ Illustration"
          className="max-w-xs w-70"
        />
        <div className="text-center lg:text-left">
          <h3 className="text-sm font-medium leading-10 uppercase tracking-wide">
            Contact Us
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 w-80">
            Frequently asked questions
          </h2>
        </div>
      </div>

      {/* FAQ List */}
      <div className="w-full lg:w-2/3">
        {faqs.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div key={i} className="border-b border-gray-200 py-4">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-teal-600">
                  <PlusMinusIcon open={open} />
                </span>
              </button>

              {/* Smooth dropdown */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
