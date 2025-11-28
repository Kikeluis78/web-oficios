import ContactForm from '../components/ContactForm';
import MainLayout from '../layout/MainLayout';

const Contacto = () => {
  return (
    <MainLayout>
      <section id="contacto" className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto max-w-3xl bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
            Contáctanos
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Llena el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
          </p>

          {/* Formulario de contacto */}
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
};

export default Contacto;
