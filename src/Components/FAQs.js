import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Newsletter from "./Newsletter";

const FAQs = () => {
  let [openFirstFAQ, setOpenFirstFAQ] = React.useState(false);
  let [openSecondFAQ, setOpenSecondFAQ] = React.useState(false);
  let [openThirdFAQ, setOpenThirdFAQ] = React.useState(false);
  let [openFourthFAQ, setOpenFourthFAQ] = React.useState(false);
  let [openFifthFAQ, setOpenFifthFAQ] = React.useState(false);

  return (
    <div className="faqsSection" id="faqsSection">
      <h2 className="faqsHeading">Frequently Asked Questions</h2>
      <div className="faqs">
        {/* FAQ 1 */}

        <div
          className="faq"
          onClick={() => {
            setOpenFirstFAQ(!openFirstFAQ);

            // Closing other faqs if open

            setOpenSecondFAQ(false);
            setOpenThirdFAQ(false);
            setOpenFourthFAQ(false);
            setOpenFifthFAQ(false);
          }}
        >
          <h3 className="faqHeading">What is Netflix?</h3>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="faqAnswer">
          {openFirstFAQ ? (
            <FAQAnswer
              answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
              You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
            />
          ) : null}
        </div>
        {/* FAQ 2 */}

        <div
          className="faq"
          onClick={() => {
            setOpenSecondFAQ(!openSecondFAQ);

            // Closing other faqs if open

            setOpenFirstFAQ(false);
            setOpenThirdFAQ(false);
            setOpenFourthFAQ(false);
            setOpenFifthFAQ(false);
          }}
        >
          <h3 className="faqHeading">How much does Netflix cost?</h3>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="faqAnswer">
          {openSecondFAQ ? (
            <FAQAnswer answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $7 to $15 a month. No extra costs, no contracts." />
          ) : null}
        </div>

        {/* FAQ 3 */}

        <div
          className="faq"
          onClick={() => {
            setOpenThirdFAQ(!openThirdFAQ);

            // Closing other faqs if open

            setOpenFirstFAQ(false);
            setOpenSecondFAQ(false);
            setOpenFourthFAQ(false);
            setOpenFifthFAQ(false);
          }}
        >
          <h3 className="faqHeading">Where can I watch?</h3>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="faqAnswer">
          {openThirdFAQ ? (
            <FAQAnswer
              answer="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

              You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
            />
          ) : null}
        </div>

        {/* FAQ 4 */}

        <div
          className="faq"
          onClick={() => {
            setOpenFourthFAQ(!openFourthFAQ);

            // Closing other faqs if open

            setOpenFirstFAQ(false);
            setOpenSecondFAQ(false);
            setOpenThirdFAQ(false);
            setOpenFifthFAQ(false);
          }}
        >
          <h3 className="faqHeading">How do I cancel?</h3>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="faqAnswer">
          {openFourthFAQ ? (
            <FAQAnswer answer="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." />
          ) : null}
        </div>

        {/* FAQ 5 */}

        <div
          className="faq"
          onClick={() => {
            setOpenFifthFAQ(!openFifthFAQ);
            // Closing other faqs if open

            setOpenFirstFAQ(false);
            setOpenSecondFAQ(false);
            setOpenThirdFAQ(false);
            setOpenFourthFAQ(false);
          }}
        >
          <h3 className="faqHeading">What can I watch on Netflix?</h3>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="faqAnswer">
          {openFifthFAQ ? (
            <FAQAnswer answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." />
          ) : null}
        </div>
      </div>
      <Newsletter />
    </div>
  );
};
export default FAQs;

const FAQ = ({ faq, faqID, faqIconID }) => {
  return (
    <div className="faq" id={faqID}>
      <h3 className="faqHeading">{faq}</h3>
      <FontAwesomeIcon id={faqIconID} icon={faPlus} />
    </div>
  );
};

const FAQAnswer = ({ answer }) => {
  return <h4>{answer}</h4>;
};
