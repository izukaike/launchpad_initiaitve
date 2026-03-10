import Image from 'next/image';

export default function RocketGUI() {
  const skills = [
    'Bare-Metal C++', 'Python GUI', 'Telemetry', 'Real-Time Systems',
    'Data Acquisition', 'System Design', 'SI/PI Considerations', 'Embedded Firmware'
  ];

  return (
    <main className="bg-[#0f2b3a] text-[#f0f0f0] min-h-screen font-sans px-4 sm:px-21 py-10 max-w-6xl mx-auto">
      {/* Title + Summary Row */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left Column — Title, Paragraph, Skills */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-[#4cd4cb] mb-1">Rocket Engine Testing Software Platform</h1>
          <section className="mt-1 mb-8">
            <a
              href="https://github.com/izukaike/Liquid_Fueled_Rocket_Engine_Electrical_System"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4cd4cb] underline hover:text-[#00b3b3] text-lg mb-8"
            >
              Check out more details here →
            </a>
         </section>
          <p className="text-lg  font-semibold text-[#f0f0f0] mb-8">
          Baylor Unviersity's aerospace engineering club's first attempt to hot-fire a liquid-fueled rocket engine had a tight two-semester 
          and very limited budget. As the electrical engineering lead, I developed the embedded software and real-time GUI, replacing
          a pricy LabVIEW license with a fully custom solution that powered the team’s first full-scale engine test.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              'Bare-Metal C++', 'Python', 'Data Visualization', 'Budgeting', 'Microcontrollers','Electromechanics',
              'Sensors & Actuator Interface', 'Project Managment', 'Leadership','Signal Processing','System Design','Schematics','SI/PI',
              'Wired Telemetry'
            ].map((skill, idx) => (
              <span
                key={idx}
                className="bg-[#194159] text-white px-3 py-1 rounded-full text-sm border border-[#4cd4cb]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column — Centered Image */}
        <div className="flex justify-center items-center">
          <figure className="text-center">
            <Image
              src="/v1_GUI.png"
              alt="Main Project"
              width={450}
              height={450}
              className="rounded-md border border-white"
            />
            <figcaption className="mt-3 text-sm font-semibold text-[#c0c0c0]">
              Main Dashboard Used By 9 Engineers To Operate Rocket Engine
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-[#4cd4cb] mb-12 item-center">Project Overview</h2>
        <div className="grid md:grid-cols-1 gap-6">
          {/* Block Diagram Image */}
          <div className="p-4 rounded-md flex justify-center flex-col items-center">
            <Image
              src="/high_level_ee_system.png"
              alt="System Block Diagram"
              width={500}
              height={450}
              className="rounded-md object-contain"
            />
          </div>

          {/* Technical Explanation */}
          <div className="text-[#f0f0f0] text-base space-y-6">
            <p>Responsible for circuit design, front-end, and back-end implementation of rocket engine control.</p>
              <div className="grid grid-cols-1 gap-x-8">
                <div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Bare-metal drivers</li>
                    <ul className="list-disc list-inside ml-6 mt-1">
                       <li>GPIO (ignition coil, feedback, and solenoid valves)</li>
                       <li>ADC (sensor data acquisition)</li>
                       <li>UART (telemetry between microcontroller and host computer)</li>
                       <li>EEPROM (critical data read/write interface)</li>
                    </ul>
                    <li>Reduced Telemetry bottleneck by 38% using bitwise telemetry algorithm for 3 (C++ and Python) Pressure Transducer sensors</li>
                    <li>Developed C++ for Current and Voltage Sensor Signal Processing and Optimization</li>
                    <li>Implemented Object-Oriented Programming Architecture</li>
                    <li>Used Python (PyQt) multithreading for 4 real-time plots, engine health, two-factor safety, hot fire testing, and coil control</li>
                    <li>Created automated data recording (OpenPyXL to XLSX) and post-run analysis (Matplotlib/Tkinter), supporting operator review and pass/fail gating.</li>
                    <li>Integrated and tested LS2 ignition coil, pressure transducers, relays, DC-DC converter, 12V battery, and supporting components on rocket engine test stand using multimeter, oscilloscope, and soldering tools</li>
                    <li>Designed data flow for real-time logging, safety interlocks, and GUI visualization</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
      </section>

    
    </main>
  );
}