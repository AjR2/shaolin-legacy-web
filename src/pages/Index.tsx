
import { carouselImages, announcements, instructors } from "@/data/homeData";
import ImageCarousel from "@/components/home/ImageCarousel";
import AnnouncementCard from "@/components/home/AnnouncementCard";
import InstructorProfile from "@/components/home/InstructorProfile";
import ContactForm from "@/components/home/ContactForm";

const Index = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Hero Carousel */}
      <ImageCarousel images={carouselImages} />

      {/* Announcements */}
      <section className="grid md:grid-cols-2 gap-6">
        {announcements.map((announcement, index) => (
          <AnnouncementCard
            key={index}
            title={announcement.title}
            date={announcement.date}
            content={announcement.content}
          />
        ))}
      </section>

      {/* Featured Instructors */}
      <section className="grid md:grid-cols-2 gap-6">
        {instructors.map((instructor, index) => (
          <InstructorProfile
            key={index}
            name={instructor.name}
            title={instructor.title}
            imageUrl={instructor.imageUrl}
            imageAlt={instructor.imageAlt}
            bio={instructor.bio}
          />
        ))}
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto">
        <ContactForm />
      </section>
    </div>
  );
};

export default Index;
