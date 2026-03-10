import Image from 'next/image';

export default function RocketGUI() {
  const skills = [
    'Python', 'Motors Control', 'Computer Vision', 'PID Controller',
    'Control Systems', 'Project Management', 'FSM Design', 'Image Processing','Leadership'
  ];

  return (
    <main className="bg-[#0f2b3a] text-[#f0f0f0] min-h-screen font-sans px-4 sm:px-21 py-10 max-w-6xl mx-auto">
      {/* Title + Summary Row */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left Column — Title, Paragraph, Skills */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-[#4cd4cb] mb-1">Autonomous Boat Navigation System</h1>
          <section className="mt-1 mb-8">
            <a
              href="https://github.com/izukaike/RoboBoat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4cd4cb] underline hover:text-[#00b3b3] text-lg mb-8"
            >
              Check out more details here →
            </a>
         </section>
          <p className="text-lg  font-semibold text-[#f0f0f0] mb-8">
          For my senior capstone project Baylor University's RoboBoat team set out to compete internationally 
          by turning a remote-controlled boat into a fully autonomous system all within a semester. With a tight 
          timeline and minimal budget, I was the Electrical Engineering Systems Lead. I focused on the software and 
          the hardware of motor control. My work played a key role in getting the boat from manually controlled 
          to fully autonomous making it competition ready.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              'Python', 'Motor Control', 'Computer Vision', 'PID Controller','Simulation',
               'Control Systems', 'Project Management', 'FSM Design', 'Image Processing','Leadership','MATLAB/Simulink'
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
              src="/auto.png"
              alt="Main Project"
              width={450}
              height={450}
              className="rounded-md border border-white"
            />
            <figcaption className="mt-3 text-sm font-semibold text-[#c0c0c0]">
              Full Boat Equipped with 2 Thrusters and a Camera to Autonomously Navigate on Water and Complete Tasks
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-[#4cd4cb] mb-12 item-center">Project Overview</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Block Diagram Image */}
          <div className="p-4 rounded-md flex justify-center flex-col items-center">
            <Image
              src="/auto_state_diagram.png"
              alt="System Block Diagram"
              width={300}
              height={300}
              className="rounded-md object-contain"
            />
          </div>

          {/* Technical Explanation */}
          <div className="text-[#f0f0f0] text-base leading-relaxed item-center">
            <p className="mb-4">
            I engineered the embedded control system for an autonomous boat built for the international
             RoboBoat competition. As the Electrical Systems Lead, I developed a closed-loop control architecture
              using a <strong>Raspberry Pi 4B+</strong> and a <strong>PCA9685 hardware PWM module</strong> to drive 2 DC thrusters with precise, 
              low-latency pulse control. I implemented and tuned a <strong>motor control algorithm</strong> that incorporated camera 
              feedback and <strong>motor modeling in Simulink</strong> to maintain heading and perform controlled turns. Mission phases such
               as search, alignment, and docking were managed through a state machine-based control structure. On the
                perception side, we used an <strong>OpenCV based image processing pipeline</strong>  to extract object locations and 
                orientations from the onboard camera feed. The integrated system enabled the transition from manual
                 to fully autonomous operation and supported reliable task execution under competition constraints.
            </p>
          </div>
        </div>
      </section>

    
    </main>
  );
}