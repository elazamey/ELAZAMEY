import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Contact Me
      </h1>
      <div className="max-w-md mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
