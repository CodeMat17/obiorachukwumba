import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Expertise } from "@/components/expertise";
import { Career } from "@/components/career";
import { Education } from "@/components/education";
import { Publications } from "@/components/publications";
import { Quotes } from "@/components/quotes";
import { Collaborate } from "@/components/collaborate";
import { Affiliations } from "@/components/affiliations";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Obiora Chukwumba",
  honorificSuffix: "PhD",
  jobTitle: "Author, Media Scholar, Journalist, Film Policy Expert, Lecturer",
  description:
    "Multifaceted media professional based in Abuja, Nigeria. Co-founder of HumAngle Media, lecturer at Veritas University Abuja, and film regulatory expert.",
  email: "chukwumba@veritas.edu.ng",
  telephone: "+2348095479795",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressRegion: "FCT",
    addressCountry: "NG",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "University of Abuja",
    },
    {
      "@type": "EducationalOrganization",
      name: "Benue State University, Makurdi",
    },
    {
      "@type": "EducationalOrganization",
      name: "IMT, Enugu",
    },
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "Veritas University, Abuja",
    },
    {
      "@type": "Organization",
      name: "HumAngle Media",
    },
  ],
  sameAs: [
    "https://linkedin.com/in/obiora-chukwumba-phd-61526766",
    "https://humanglemedia.com/author/obiora/",
  ],
  knowsAbout: [
    "Journalism",
    "Film Regulation",
    "Media Policy",
    "Conflict Reporting",
    "Nollywood",
    "Mass Communication",
    "Fact-checking",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Career />
        <Education />
        <Publications />
        <Quotes />
        <Collaborate />
        <Affiliations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
