import {
  NavigationBar,
  Header,
  Button,
  HeroSection,
  Card,
  TransitionCards,
  BookingForm,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="my-16 mx-auto max-w-6xl gap-5 flex flex-col text-center">
        <h2 className="text-4xl font-semibold font-outfit">
          Welcome to Ayurhome Ayurvedic Treatment Centre
        </h2>
        <p className="text-xl text-gray-700 font-dosis">
          At Ayuryoga Ayurveda Treatment Centre, we proudly uphold a legacy
          spanning over a century in healthcare and Ayurvedic medicine in India.
          Our esteemed journey began with the renowned Ayurvedic Doctor, Late
          Dr. G. R. Agarwal, and was further advanced by Ayurved Siromani Vaidya
          Late Sh. V. C. Agarwal. Our commitment to holistic wellness and
          traditional Ayurvedic practices has established us as a trusted name
          in the industry.
        </p>
        <p className="text-xl text-gray-700 font-dosis">
          Our state-of-the-art Herbal Museum houses an extensive collection of
          900 medicinal herbs, each carefully curated for their efficacy in
          treating chronic diseases and sexual disorders. This unique repository
          underscores our dedication to natural healing and the profound wisdom
          of Ayurveda. Explore our rich heritage and discover the transformative
          power of Ayurveda at Ayuryoga Ayurveda Treatment Centre.
        </p>
      </section>
      <div className="grid grid-cols-4 max-w-7xl gap-6 w-full mx-auto">
        {[
          {
            img: "/images/thinking.png",
            alt: "thinking",
            title: "our mission",
            description:
              "Our ultimate mission is to spread good health, happiness and peace.",
          },
          {
            img: "/images/clipboard.png",
            alt: "clipboard",
            title: "our history",
            description: "100-year-old lineage in ayurvedic treatment india.",
          },
          {
            img: "/images/vision.png",
            alt: "vision",
            title: "our vision",
            description:
              "To render services for Physical, Mental, and Spiritual well-being.",
          },
          {
            img: "/images/success.png",
            alt: "success",
            title: "our success",
            description:
              "Herbal Museum of 900 Herbs which are useful in chronical disease ",
          },
        ].map(({ img, alt, title, description }) => (
          <Card
            img={img}
            key={alt}
            alt={alt}
            title={title}
            description={description}
          />
        ))}
      </div>
      <div className="w-full py-10 bg-gray-900/60 relative flex justify-between px-96 my-20">
        <Image
          className="w-full h-full object-center absolute left-0 top-0 -z-10 object-cover"
          src="/images/counter-bg.jpg"
          width={20000}
          height={20000}
          alt="counter"
        />
        {[
          { title: "5000+", subtitle: "Happy Customers" },
          { title: "5+", subtitle: "Ayurvedic Doctor" },
          { title: "50", subtitle: "Medical Workers" },
          { title: "10+", subtitle: "Years Experience" },
        ].map(({ title, subtitle }) => (
          <TransitionCards key={title} title={title} subtitle={subtitle} />
        ))}
      </div>
      <section className="my-16 mx-auto max-w-6xl gap-5 flex flex-col text-center">
        <h2 className="text-4xl font-semibold font-outfit">
          Ayuryoga: Leading Ayurvedic Treatments in India for Over a Century
        </h2>
        <p className="text-xl text-gray-700 font-dosis">
          For over 120 years and through four generations, the Ayuryoga Family
          has been a beacon of Ayurvedic treatments in India and a source of
          healing for communities worldwide. Since 1982, Vaidyaratnam Dr. Rakesh
          Agarwal, Dr. Neelam Agarwal, Yogi Dr. Amrit Raj, and Dr. Arjun Raj
          have upheld these rich traditions. They have been dedicated to
          supporting patients in their health journeys, fostering personal and
          spiritual growth, and educating them on how to take greater
          responsibility for their well-being and life.
        </p>
        <p className="text-xl font-dosis text-gray-700">
          We offer the best Ayurvedic treatment in India, addressing a wide
          range of health and sexual problems with proven, natural remedies. Our
          comprehensive approach ensures personalized care that promotes
          holistic healing and long-term wellness. Trust Ayuryoga Ayurveda
          Treatment Centre to provide unparalleled Ayurvedic solutions tailored
          to your unique health needs.
        </p>
      </section>
      <BookingForm />
    </>
  );
}
