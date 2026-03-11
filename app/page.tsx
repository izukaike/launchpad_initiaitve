"use client";
import { useState } from "react";

export default function LaunchPadHomepage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(name);
    const body = encodeURIComponent(
      `Email: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:launchpad.stem@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Home Section */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center text-center px-6"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-12"
          style={{ backgroundImage: "url('/speaking_crowd.png')" }}
        ></div>

        <div className="relative z-10 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#39A8BD]">
            Empower • Educate • Elevate
          </p>

          <h1 className="mt-6 text-6xl font-black leading-tight text-[#39A8BD] md:text-7xl">
            Launchpad
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-9 text-[#40BAD2] text-slate-700 text-center">
            Launchpad is a community driven initiative focused on inspiring and
            equipping students through hands on engineering, mentorship, and
            real-world learning experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
            <a
              href="#about"
              className="bg-[#39A8BD] px-6 py-4 text-lg font-black uppercase text-white transition hover:bg-slate-900"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="border-2 border-[#39A8BD] px-6 py-4 text-lg font-black uppercase text-[#39A8BD] transition hover:bg-slate-100"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="relative bg-slate-50 py-24 items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-12"
          style={{ backgroundImage: "url('/launchpad_logo.png')" }}
        ></div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#39A8BD]">
            About Us
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#39A8BD] md:text-6xl items-center justify-center text-center px-6">
            Building A Foundation
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-8 text-slate-700">
                Launchpad was created from the belief that engineering and technology 
                should feel exciting, accessible, and empowering to all young people. 
                Through teaching middle and high school students over the years, it became 
                clear that many young people have tremendous potential but do always have the 
                exposure or opportunities to explore engineering. That is where Launchpad comes in.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Our goal is to help bridge the gap between the high potential of today’s youth and 
                fulfilling careers in engineering and technology. Launchpad introduces students to 
                engineering through interactive projects, mentorship, and exposure to real-world technology. 
                Instead of only learning concepts in theory, students get the opportunity to explore how engineers 
                think, design, and build solutions that impact the world.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-black text-[#39A8BD]">Empower</h3>
                <p className="mt-3 text-lg leading-8 text-slate-700">
                  Empower students and excite them about careers in engineering while inspiring them to change the world.
                </p>
              </div>

              <div className="bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-black text-[#39A8BD]">Educate</h3>
                <p className="mt-3 text-lg leading-8 text-slate-700">
                  Educate students about the many aspects of engineering and its various disciplines.
                </p>
              </div>
              <div className="bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-black text-[#39A8BD]">Elevate</h3>
                <p className="mt-3 text-lg leading-8 text-slate-700">
                  Elevate students pursue further education through guidance, support, and mentorship.
                </p>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/contact-bg.jpg')" }}
        ></div>

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr,0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#39A8BD]">
              Contact Us
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#39A8BD] md:text-6xl items-center justify-center text-center px-6">
              Lets Connect!
            </h2>
      
          </div>

          <form
            onSubmit={handleSend}
          className="bg-white p-8 shadow-sm ring-1 ring-slate-200"
           >
          <div className="grid gap-5">

            <div>
              <label className="mb-2 block text-sm font-black uppercase tracking-[0.18em] text-slate-600">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-slate-300 px-4 py-4 text-lg outline-none transition focus:border-[#0b6ff2]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black uppercase tracking-[0.18em] text-slate-600">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-slate-300 px-4 py-4 text-lg outline-none transition focus:border-[#0b6ff2]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-black uppercase tracking-[0.18em] text-slate-600">
                Message
              </label>
              <textarea
                placeholder=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[170px] w-full border-2 border-slate-300 px-4 py-4 text-lg outline-none transition focus:border-[#0b6ff2]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#083657] px-6 py-5 text-xl font-black uppercase text-white transition hover:bg-slate-900"
            >
              Send Message
            </button>

          </div>
        </form>
        </div>
      </section>
    </main>
  );
}
