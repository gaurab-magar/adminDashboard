import React from 'react'

const Service = () => {
  const services = [
    {
      id: 1,
      title: 'Custom Software Development',
      description:
        'Build scalable, secure, and user-friendly software tailored to your business needs.',
      icon: 'https://media.istockphoto.com/id/1202870693/photo/future-artificial-intelligence-robot-and-cyborg.jpg?s=1024x1024&w=is&k=20&c=6-MuVlX1v0N60gsZCqHc53NqZUPFGLoJf7TwciG3QbU=',
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      description:
        'Streamline your operations with robust cloud computing services and integration.',
      icon: 'https://media.istockphoto.com/id/1295899278/photo/businessman-hand-holding-cloud-computing-online-connecting-to-big-data-analytics-block-chain.jpg?s=1024x1024&w=is&k=20&c=gaN2-nCeTuDOOiwjHdifQ2na8yFoiBp_nWVFCMqCtZI=',
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description:
        'Enhance your online presence and reach your target audience effectively.',
      icon: 'https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=1024x1024&w=is&k=20&c=N65ufLsxvt6b5XaKSitmu09gDUhEitFqfM4cWG7CTMk=',
    },
    {
      id: 4,
      title: 'Technical Support',
      description:
        '24/7 support services to keep your business running smoothly.',
      icon: 'https://media.istockphoto.com/id/1332104709/photo/shot-of-a-young-male-engineer-using-his-laptop-in-a-server-room.jpg?s=1024x1024&w=is&k=20&c=MAhJL---c2n8Ei5oWHADXb-5rVtjvHtAsYzxXfpVUe4=',
    },
    {
      id: 5,
      title: 'E-commerce Development',
      description:
        'Launch feature-rich e-commerce platforms to grow your online business.',
      icon: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      title: 'UI/UX Design',
      description:
        'Craft visually stunning and user-friendly interfaces for your products.',
      icon: 'https://media.istockphoto.com/id/2169040419/photo/ux-ui-designers-discussing-and-brainstorming-on-wireframes-for-a-website-and-mobile-app.jpg?s=1024x1024&w=is&k=20&c=9YcElt_Wy_i6SLN81hdPPqeO_xcnGX7AkNWs20H4XXM=',
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
            <header 
              className="relative bg-cover bg-center bg-no-repeat text-white py-20" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} 
            >
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Content */}
              <div className="relative z-10 container mx-auto text-center px-4">
                <h1 className="text-4xl font-bold">Our Services</h1>
                <p className="text-lg mt-4 font-extralight">
                  Transforming businesses with innovative and reliable solutions.
                </p>
                <button className="bg-white text-slate-700 px-6 py-2 mt-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
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
                {/* <div className="text-5xl mb-4">{service.icon}</div> */}
                <div className="mb-4">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-full h-36 rounded-t-md object-cover shadow-md"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-no-repeat bg-cover bg-center relative" style={{backgroundImage:"url('https://images.unsplash.com/photo-1657238672378-ae37f696b0ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container z-10 relative mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-xl font-semibold">Expert Team</h3>
              <p className="text-slate-400">
                Our experienced professionals deliver top-notch solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-slate-400">
                We’re always here to help with any issues or queries.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Affordable Pricing</h3>
              <p className="text-slate-400">
                High-quality services that fit your budget.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Timely Delivery</h3>
              <p className="text-slate-400">
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
      <section className="text-white py-20 bg-no-repeat bg-cover bg-center bg-fixed relative" style={{backgroundImage:"url('https://plus.unsplash.com/premium_photo-1673413558326-341c34f66db1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
      <div className='bg-black opacity-50 absolute inset-0'></div>
        <div className="container z-10 relative text-white mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 font-extralight">
            Contact us today to discuss your requirements and get a free quote.
          </p>
          <button className="bg-white text-slate-600 px-6 py-2 rounded-full shadow-md hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}

export default Service