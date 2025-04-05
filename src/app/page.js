import {
  NavigationBar,
  Header,
  Button,
  HeroSection,
  Card,
  TransitionCards,
  BookingForm,
  Heading,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <section className="my-16 max-md:my-8 mx-auto max-w-7xl gap-5 flex flex-col text-center px-6 max-sm:px-2">
        <Heading>Welcome to Ayurhome Ayurvedic Treatment Centre</Heading>
        <p className="text-base text-gray-700 font-poppins">
          At Ayuryoga Ayurveda Treatment Centre, we proudly uphold a legacy
          spanning over a century in healthcare and Ayurvedic medicine in India.
          Our esteemed journey began with the renowned Ayurvedic Doctor, Late
          Dr. G. R. Agarwal, and was further advanced by Ayurved Siromani Vaidya
          Late Sh. V. C. Agarwal. Our commitment to holistic wellness and
          traditional Ayurvedic practices has established us as a trusted name
          in the industry.
        </p>
        <p className="text-base text-gray-700 font-poppins">
          Our state-of-the-art Herbal Museum houses an extensive collection of
          900 medicinal herbs, each carefully curated for their efficacy in
          treating chronic diseases and sexual disorders. This unique repository
          underscores our dedication to natural healing and the profound wisdom
          of Ayurveda. Explore our rich heritage and discover the transformative
          power of Ayurveda at Ayuryoga Ayurveda Treatment Centre.
        </p>
      </section>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 *:mx-auto max-sm:px-2 px-6 max-w-7xl gap-6 max-md:gap-2 w-full mx-auto">
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
      <div className="w-full py-10 bg-black/20 relative mt-20">
        <Image
          className="w-full h-full absolute left-0 top-0 -z-10 object-cover"
          src="/images/banner.jpg"
          width={20000}
          height={20000}
          alt="counter"
        />
        <div className="flex justify-between max-w-7xl mx-auto max-md:hidden">
          {[
            { title: "5000+", subtitle: "Happy Customers" },
            { title: "5+", subtitle: "Ayurvedic Doctor" },
            { title: "50", subtitle: "Medical Workers" },
            { title: "10+", subtitle: "Years Experience" },
          ].map(({ title, subtitle }) => (
            <TransitionCards key={title} title={title} subtitle={subtitle} />
          ))}
        </div>
      </div>
      <section className=" relative font-poppins z-0 text-left">
        <div className="absolute h-full w-full -z-10">
          <Image
            src="/images/ayurveda.png"
            className="w-full h-full object-bottom opacity-20  object-cover"
            alt="img"
            width={2000}
            height={2000}
          />
        </div>
        <div className="py-16 max-md:py-6 max-md:mt-4 mx-auto max-w-7xl gap-3 flex flex-col ">
          <Heading>
            <h2 className="text-4xl font-semibold text-center">Ayuryoga</h2>
          </Heading>
          <span className="w-28 h-0.5 bg-black mx-auto mb-3" />

          <div className="flex gap-6 max-md:flex-col-reverse px-2">
            <div className="flex flex-col gap-3 text-base text-gray-700">
              <Heading className="text-xl text-left font-semibold text-heading">
                Leading Ayurvedic Treatments in India for Over a Century
              </Heading>
              <p>
                For over 100 years, Ayuryoga has been at the forefront of
                Ayurveda, providing holistic healing and wellness solutions
                rooted in ancient traditions. With a legacy built on trust,
                authenticity, and expertise, we offer time-tested treatments
                that promote physical, mental, and emotional well-being.
              </p>
              <p>
                At Ayuryoga, we combine traditional Ayurvedic wisdom with modern
                techniques to deliver personalized treatments that address the
                root cause of ailments. Our expert Vaidyas (Ayurvedic doctors)
                specialize in detoxification (Panchakarma), rejuvenation
                therapies, pain management, and chronic disease treatments.
                Whether you seek relief from stress, joint pain, digestive
                disorders, or skin problems, we offer natural remedies tailored
                to your needs.
              </p>
              <p>
                With decades of experience, Ayuryoga ensures that every
                treatment is customized to align with your unique body
                constitution (Prakriti). Our wellness centers provide a serene
                and healing environment where you can embark on your journey to
                natural healing and vitality.
              </p>
            </div>
            <Image
              src="/images/our_vision.webp"
              className="max-w-md max-md:max-w-full object-cover"
              alt="img"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </section>

      <section className=" relative font-poppins z-0 text-left">
        {/* <div className="absolute h-full w-full -z-10">
          <Image
            src="/images/542.jpg"
            className="w-full h-full opacity-20 object-cover"
            alt="img"
            width={2000}
            height={2000}
          />
        </div> */}
        <div className="mx-auto max-w-7xl gap-3 flex flex-col py-16 max-md:py-6">
          <Heading>
            <h2 className="text-4xl font-semibold text-center">Our Vision</h2>
          </Heading>
          <span className="w-28 h-0.5 bg-black mx-auto mb-3" />
          <div className="flex gap-6 flex-row-reverse px-2 max-md:flex-col-reverse">
            <div className="flex flex-col gap-3 text-base text-gray-700">
              <Heading className="text-xl text-left font-semibold text-heading">
                Bringing Ayurveda to Every Life
              </Heading>
              <p>
                At AyurHomeIndia, our vision is to make Ayurveda an integral
                part of every individual’s life, fostering physical, mental, and
                spiritual well-being. We are dedicated to reviving and
                modernizing this ancient healing science to meet contemporary
                health challenges, ensuring that every person, regardless of age
                or background, benefits from its profound wisdom.
              </p>
              <p>
                Our goal is to create a serene, holistic, and nurturing
                environment where traditional Ayurvedic principles blend
                seamlessly with modern healthcare advancements. We strive to
                offer personalized wellness solutions, addressing the root
                causes of ailments rather than just symptoms. By promoting
                balance and harmony in the mind, body, and spirit, we aim to
                empower individuals with knowledge and lifestyle practices that
                enhance longevity and vitality.
              </p>
              <p>
                Beyond treatments, our vision extends to educating and inspiring
                individuals to adopt Ayurveda as a way of life. Through
                workshops, consultations, and customized health plans, we
                encourage preventive healthcare, detoxification, and
                rejuvenation. We believe that Ayurveda holds the key to a
                healthier and more harmonious world, and we are committed to
                making its benefits accessible to everyone.
              </p>
            </div>
            <Image
              src="/images/banner-2.jpg"
              className="max-w-md max-md:max-w-full object-cover"
              alt="img"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </section>
      <BookingForm />
    </div>
  );
}
