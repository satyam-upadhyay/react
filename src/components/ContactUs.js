import { useState } from "react";

const Section = ({ name, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold text-xl">{name}</h1>
      {isVisible ? (
        <>
          <button
            className="font-bold underline"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Hide
          </button>

          <h1>{description}</h1>
        </>
      ) : (
        <>
          <button
            className="font-bold underline"
            onClick={() => {
              setIsVisible(true);
            }}
          >
            Show
          </button>
        </>
      )}
    </div>
  );
};

const ContactUs = () => {
  const [isSection, setIsSection] = useState("");
  return (
    <div>
      <h1>Contact Us</h1>
      <Section
        setIsVisible={(props) => {
          props ? setIsSection("about") : setIsSection("");
        }}
        isVisible={isSection === "about"}
        name="About Section"
        description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
      />
      <Section
        setIsVisible={(props) => {
          props ? setIsSection("team") : setIsSection("");
        }}
        isVisible={isSection === "team"}
        name="Team Section"
        description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
      />
      <Section
        setIsVisible={(props) => {
          props ? setIsSection("career") : setIsSection("");
        }}
        isVisible={isSection === "career"}
        name="Career Section"
        description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
      />
    </div>
  );
};

export default ContactUs;
