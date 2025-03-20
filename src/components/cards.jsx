import React from "react";

const services = [
  {
    name: "A Unique Combination of Therapies for Body, Mind, and Soul",
    service: [
      {
        name: "Full Treatment Pack",
        duration: "100 Mins",
        price: "₹3,200",
        therapies: ["Abhyanga", "Shirodhara", "Steam"],
        description:
          "Whole body oil massage with Himalayan herbs to relax, heal, and rejuvenate. Includes herbal oil drops on the third eye for better focus, improved sleep, and deep relaxation. The therapy purifies the body with herbal sweating.",
      },
      {
        name: "Senses Cleanse Pack",
        duration: "100 Mins",
        price: "₹2,500",
        therapies: [
          "Abhyanga",
          "Steam",
          "NASYAM Karma Poorn",
          "Kawala With Herbal Smoking",
        ],
        description:
          "A complete Ayurvedic cleanse for the senses. Includes oil massage, nasal drops for sinus relief, ear drops for better hearing, and herbal smoking for enhanced taste perception.",
      },
      {
        name: "Liver Cleanse Pack",
        duration: "4 Days",
        price: "₹9,000",
        therapies: ["Abhyanga", "Steam", "Virechan (purgation liquid)"],
        description:
          "Herbal oil massage, steam purification, and a special herbal drink for liver detox. Helps with acidity, heartburn, and chakra balancing.",
      },
      {
        name: "Colon Cleanse Pack",
        duration: "90 Mins",
        price: "₹2,300",
        therapies: ["Abhyanga", "Steam", "Medicated Herbal Basti"],
        description:
          "A detox therapy combining oil massage, steam purification, and a herbal enema for colon cleansing, relieving gas, and improving gut health.",
      },
      {
        name: "Kidney Cleanse Pack",
        duration: "100 Mins",
        price: "₹3,200",
        therapies: ["Abhyanga", "Steam", "Drinking Herbs with Kidney Dhaara"],
        description:
          "A combination of kidney oil therapy, herbal massage, and herbal drinks to flush toxins and support kidney function.",
      },
      {
        name: "Mind Rejuvenation Pack",
        duration: "100 Mins",
        price: "₹3,200",
        therapies: ["Shirodhara", "Nasyam", "Herbal Smoke"],
        description:
          "A therapy focused on relaxation, stress relief, and improved mental clarity. Helps with anxiety and nasal congestion.",
      },
    ],
  },
  {
    name: "Ayurvedic Therapy & Healing",
    service: [
      {
        name: "Oil Shirodhara",
        duration: "45 Mins",
        price: "₹1,800",
        description:
          "A deeply relaxing therapy where a continuous stream of warm herbal oil is poured on the forehead. It helps in reducing stress, anxiety, insomnia, and enhances mental clarity.",
      },
      {
        name: "Himalayan Abhyanga Massage",
        duration: "60 Mins",
        price: {
          two_hands: "₹1,400",
          four_hands: "₹1,600",
        },
        description:
          "A rejuvenating full-body oil massage using herbal-infused oils to nourish the skin, improve blood circulation, relieve muscle stiffness, and detoxify the body.",
      },
      {
        name: "Deep Tissue Massage",
        duration: "60 Mins",
        price: "₹1,600",
        description:
          "A therapeutic massage that targets deeper layers of muscles and connective tissue. Helps relieve chronic pain, muscle tightness, and improves mobility by reducing tension.",
      },
      {
        name: "Refreshing Aroma Massage",
        duration: "60 Mins",
        price: "₹1,500",
        description:
          "A soothing massage with aromatic essential oils that relaxes the body and mind. Helps relieve stress, uplift mood, and promote a deep sense of relaxation.",
      },
      {
        name: "Lustre Ubatan Massage",
        duration: "60 Mins",
        price: "₹1,400",
        description:
          "A traditional Ayurvedic beauty treatment that uses herbal mustard paste to cleanse, exfoliate, and brighten the skin, leaving it soft and glowing.",
      },
      {
        name: "Exfoliating Udwartana (Scrub Massage)",
        duration: "60 Mins",
        price: "₹1,300",
        description:
          "A dry powder massage using herbal blends to exfoliate the skin, remove dead cells, improve blood circulation, and promote a toned and refreshed look.",
      },
      {
        name: "Marma Massage (Ayurvedic Pressure Points)",
        duration: "60 Mins",
        price: "₹1,700",
        description:
          "A specialized Ayurvedic therapy that applies gentle pressure on vital energy points (Marmas) to release blockages, enhance energy flow, and promote overall healing and well-being.",
      },
    ],
  },
];

export function Cards() {
  return (
    <section className="bg-[#faf9f7] p-6 flex flex-col gap-20">
      {services.map(({ name, service }, index) => (
        <div>
          <h3 className="text-2xl font-medium text-primary" key={index}>
            {name}
          </h3>
          <ul className="mt-5 px-2 grid grid-cols-2 gap-x-3 list-none *:border-t  *:border-gray-400">
            {/* <ul className="mt-5 px-2 flex flex-col gap-2 list-none *:border-t  *:border-gray-400"> */}
            {service.map(
              ({ name, duration, price, therapies, description }, index) => (
                <li key={index} className="flex flex-col justify-between pt-3 pb-16 px-4 hover:bg-gray-600/20 cursor-default duration-300 transition-all">
                  <div>
                    <h5 className="text-xl/tight font-medium">{name}</h5>
                    {therapies && <span className="font-medium font-lg/snug text-gray-600 font-xl ">
                      <span className="font-semibold ">Therapies</span> -{" "}
                      <span className="italic">{therapies.join(", ")}</span>
                    </span>}
                    <p className="text-lg/tight my-2 text-gray-700 font-light">
                      {description}
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between mt-3 text-black">
                      <span className="font-medium">Duration - {duration}</span>
                      Price - {typeof price !== 'object' && price}
                    </div>
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      ))}
    </section>
  );
}
