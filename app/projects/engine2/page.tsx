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
        <div className="flex flex-col justify-end">
          <h1 className="text-4xl font-bold text-[#4cd4cb] mb-1">Full-Stack Engine Electronics System</h1>
          <section className="mt-1 mb-8">
            <a
              href="https://github.com/izukaike/Baylor_Liquid_Propulsion_Electrical_System"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4cd4cb] underline hover:text-[#00b3b3] text-lg mb-8"
            >
              Check out more details here →
            </a>
         </section>
          <p className="text-lg  font-semibold text-[#f0f0f0] mb-8">
          I led the design of the full-stack electronics system that powered Baylor Aero’s second liquid rocket engine. 
          With a tight two-semester timeline and a limited budget, I served as Lead Electrical Engineer selecting, designing,
          integrating, and testing the system’s sensors, actuators, control, data acquisition, and power electronics. 
          To stay within constraints, I replaced the need for expensive commercial DAQ hardware by engineering custom
          solutions that enabled fast and reliable engine testing.
         </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Linux', 'Python', 'H-I-T-L', 'Mixed-Signal IC', 'Microcontrollers','Power Electronics',
              'Sensor Integration', 'Transistor Circuits', 'Battery Management','C++','Soldering',
              'Schematic Capture', 'SI/PI', 'Electromechanics','Actuator Interface','Automated Lab Testing', 'Wireless Telemetry',
              'Networking', 'Data Visualization', 'Signal Chain Design', 'Lab Equipment'
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
              src="/hw_top_2.png"
              alt="Main Project"
              width={500}
              height={500}
              className="rounded-md border border-white"
            />
            <figcaption className="mt-3 text-sm font-semibold text-[#c0c0c0]">
            Main Circuit Board With Hand Soldered Control (Green), Data Acquisition 
            (Red), and Power (Blue) Electronics whihc connects with Raspberry Pi 4b+
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="mb-10">
          <h2 className="text-3xl font-semibold text-[#4cd4cb] mb-12 text-left">Project Overview</h2>
          <div className="grid md:grid-cols-1 gap-10">
            {/* Left: Diagram */}
            <div className="flex justify-center items-center p-4">
              <Image
                src="/v2_diagram.png"
                alt="System Diagram"
                className="rounded-md border border-[#4cd4cb] w-full max-w-[600px] max-h-[900px] object-cover"
                width={600}
                height={600}
              />
            </div>
            {/* Right: Details */}
            <div className="text-[#f0f0f0] text-base space-y-6">
            <p>Directed sensors, actuators, data acquisition, control, power electronics for rocket engine testing.</p>
              <div className="grid grid-cols-1 gap-x-8">
                <div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Linux Based C++ or Python (esp32 & RPi4) </li>
                    <ul className="list-disc list-inside ml-6 mt-1">
                       <li>Wi-Fi (experimental telemetry)</li>
                       <li>BLE (experimental telemetry)</li>
                       <li>UART (telemetry)</li>
                       <li>SPI (interface Linux with DAC and ADC)</li>
                       <li>ADC (sensor data acquisition)</li>
                       <li>DAC (sensor calibration, testing, validation)</li>
                       <li>GPIO(ignition coil, feedback, and solenoid valves)</li>
                    </ul>
                    <li>API design to interface back-end (my code) with 2 front developers for real time GUI</li>
                    <li>Used Python openpyxl to streamline test sequencing to increase test tries 5x</li>
                    <li>Developed C++ for Current and Voltage Sensor Signal Processing and Optimization</li>
                    <li>Implemented OOP and State Machine software architecture </li>
                    <li>Utilized linux/bash for hardware-in-the-loop test automation, networking, and hardware interface</li>
                    <li>Made an 8 Channel Signal Generator (MCU + 4x DAC + Filter)</li>
                    <li>Selected 5 pressure transducers, 1 force load cell (differential), and 1 thermocouple satisfying mechanical, cost, integration time, and electrical requirements</li>
                    <li>Selected and hand soldered DC-DC Boost-Converter(12V-24V), DC-DC Buck-Converter (7.2V-5V), and LDO</li>
                    <li>Refactored commercial product into custom Li-Ion battery module integrating a DC-DC Buck Converter</li>
                    <li>Schematic capture and soldering of actuator driver (high-side load switching of MOSFETS and relays), data acquisition (4x ADCs, filtering, linearization), and power delivery and passive components</li>
                    <li>Integrated sensors and valves with electronics for control at >236 ft.</li>
                  </ul>
                </div>
              </div>
              <p>
                The firmware enabled synchronized sampling and real-time response to valve actuation. Additionally, 
                I used Hardware-In-The-Loop-Testing by synchronizing 4 DAC's to simulate sensor data. Next, I  experimented with BLE
                telemetry but settled on Wi-Fi telemetry code in Python.  
              </p>
            </div>
          </div>
        </section>
     
    </main>
  );
}