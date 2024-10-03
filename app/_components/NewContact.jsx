import React, {useRef, useState} from 'react'
import { useRouter } from 'next/navigation';

const NewContact = () => {
    const router = useRouter(); // useRouter kancasını tanımla
    const checkboxRef = useRef(null);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      setSuccess(null);
  
      try {
        const createdInquri = await createInquri({ data: formData });
        setSuccess("Enquiry created successfully!");
        router.push('/thank-you'); // Başarılı gönderimden sonra yönlendirme
      } catch (error) {
        setError("Error creating enquiry.");
      } finally {
        setLoading(false);
      }
    };

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 ">
          

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 text-center lg:grid-cols-3 pb-8">
               <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full shadow rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                  </div>  
                <div>
                  <label className="sr-only" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <input
                    className="w-full shadow rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="mobile-number"
                    id="phoneNumber"
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="w-full shadow rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="E-mail Address"
                    type="email"
                    id="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                </div>
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full shadow rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Your message here..."
                  rows="8"
                  id="message"
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            <div className="flex items-start mt-3 ">
              <input
                type="checkbox"
                id="permission"
                ref={checkboxRef}
                className="h-5 w-5 relative rounded border-gray-300 bg-white shadow-sm mr-2"
                />
              <label htmlFor="permission" className="text-center font-light inline-block text-xs text-gray-500 hover:cursor-pointer">
                By filling out this form, you are giving permission for a consultant from the UK Property Analysis and Consultancy Firm to contact you via phone, SMS, or email. The information you have entered into the form will not be shared with third parties.
              </label>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex ring-1 px-7 py-2 hover:bg-blue-900 rounded-full bg-blue-600 font-medium text-white sm:w-auto"
                disabled={!checkboxRef.current?.checked & loading}
              >
                Send
              </button>
            </div>
              </form>         
          </div>
        </div>
      </div>

    </section>
  );
};

export default NewContact