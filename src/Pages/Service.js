import React from 'react'

const Service = () => {
  const services = [
    {
      id: 1,
      title: 'Custom Software Development',
      description:
        'Build scalable, secure, and user-friendly software tailored to your business needs.',
      icon: '💻',
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      description:
        'Streamline your operations with robust cloud computing services and integration.',
      icon: '☁️',
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description:
        'Enhance your online presence and reach your target audience effectively.',
      icon: '📈',
    },
    {
      id: 4,
      title: 'Technical Support',
      description:
        '24/7 support services to keep your business running smoothly.',
      icon: '🔧',
    },
    {
      id: 5,
      title: 'E-commerce Development',
      description:
        'Launch feature-rich e-commerce platforms to grow your online business.',
      icon: '🛒',
    },
    {
      id: 6,
      title: 'UI/UX Design',
      description:
        'Craft visually stunning and user-friendly interfaces for your products.',
      icon: '🎨',
    },
  ];
  
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, ExampleCorp',
      feedback:
        'The team delivered an outstanding solution that significantly boosted our efficiency. Highly recommended!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Founder, StartupCo',
      feedback:
        'Their attention to detail and commitment to excellence set them apart. Excellent work!',
    },
  ];
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="text-lg mt-4">
            Transforming businesses with innovative and reliable solutions.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 mt-6 rounded-full shadow-md hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </header>

      {/* Services Section */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white shadow-md rounded-lg p-6 text-center transition transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-xl font-semibold">Expert Team</h3>
              <p className="text-gray-600">
                Our experienced professionals deliver top-notch solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600">
                We’re always here to help with any issues or queries.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Affordable Pricing</h3>
              <p className="text-gray-600">
                High-quality services that fit your budget.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Timely Delivery</h3>
              <p className="text-gray-600">
                We meet deadlines without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white shadow-md rounded-lg p-6"
              >
                <p className="text-gray-600 mb-4">&quot;{testimonial.feedback}&quot;</p>
                <div className="text-right">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <span className="text-gray-500 text-sm">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Contact us today to discuss your requirements and get a free quote.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-md hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}

export default Service