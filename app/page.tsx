import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  return (
    <main className="min-h-screen bg-[#f1f5f9] text-white font-sans sm:px-20 xl:px-17 ">
      <div className="max-w-screen-xl mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-left p-6 space-y-4 md:space-y-0 ">
        <h1 className="text-2xl font-bold text-[#000000]  ">I. A. I.</h1>
        <nav className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-semibold ">
          <a href="#about" className="hover:underline text-[#000000] ">About</a>
          <a href="#projects" className="hover:underline text-[#000000]">Projects</a>
          <a href="#blog" className="hover:underline text-[#000000]">Blog</a>
        </nav>
      </header>

      <section className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-16 bg-[#ffffff] text-center md:text-left">
        <div className="w-full md:w-1/2 px-4 sm:px-6 -translate-x-20 ">
          <h2 className="text-4xl sm:text-4xl font-bold mb-3 text-[#000000] ">Hi, I'm Izuka Ikedionwu</h2>
          <p className="text-lg sm:text-xl text-[#000000] mb-4">
            I am an electrical engineer with experience in digital and analog electrical systems,
            embedded systems, computer architecture, and software development. I’m driven by learning new technologies, improving how systems and teams operate, and 
            delivering real results. I’m usually working on multiple projects and enjoy connecting, collaborating, and building alongside like-minded people. Check out
            my Github, LinkedIn, resume and contact me if you would like to get in touch. 
          </p>
          <div className="w-full md:w-1/2 flex justify-left">
            <a href="https://www.linkedin.com/in/izuka-ikedionwu" target="_blank" rel="noopener noreferrer">
              <Image src="/li_logo.svg" alt="LinkedIn" width={50} height={50} />
            </a>
            <a href="https://github.com/izukaike" target="_blank" rel="noopener noreferrer">
              <Image src="/github_logo.svg" alt="GitHub" width={50} height={50} />
            </a>
            <a href="mailto:izukaikedionwu@gmail.com">
              <Image src="/email_logo.svg" alt="Email" width={50} height={50} />
            </a>
            <a href="/Izuka_Ikedionwu_Resume_v0.pdf">
              <Image src="/resume.svg" alt="Resume" width={45} height={45} />
            </a>
          </div>
        </div>
        
    <div className="relative w-80 h-80">
  {/* Top-left */}
  <div className="absolute top-0 left-0 w-50 h-50 rounded-full overflow-hidden border-4 border-white shadow-lg -translate-y-33">
    <Image src="/me0.jpg" alt="Photo 1" width={512} height={512} className="object-cover w-full h-full" />
  </div>

  {/* Top-right */}
  <div className="absolute top-6 right-0 w-50 h-50 rounded-full overflow-hidden border-4 border-white shadow-lg translate-x-15">
    <Image src="/me1_icon.jpg" alt="Photo 2" width={256} height={256} className="object-cover w-full h-full" />
  </div>

  {/* Bottom-left */}
  <div className="absolute bottom-4 left-0 w-50 h-50 rounded-full overflow-hidden border-4 border-white shadow-lg -translate-x-25">
    <Image src="/me2_icon.jpg" alt="Photo 3"width={256} height={256} className="object-cover w-full h-full" />
  </div>

  {/* Bottom-right */}
  <div className="absolute bottom-0 right-4 w-50 h-50 rounded-full overflow-hidden border-4 border-white shadow-lg translate-y-33">
    <Image src="/me3_icon.jpg" alt="Photo 4" width={512} height={512} className="object-cover w-full h-full" />
  </div>
</div>
      </section>

      <section id="about" className="min-h-[90vh] p-6 sm:p-12 bg-[#ffffff] text-[#eaeaea]">
        <div className="grid md:grid-cols-1 gap-12 max-w-6xl mx-auto text-[#000000]">
          <div>
            <h3 className="text-4xl font-bold mb-4 text-center">About Me</h3>

            <h4 className="text-2xl font-bold text-[#000000] mb-3">
            Who am I?
            </h4>

            <div className="space-y-4 text-xl leading-relaxed mb-3">
              <p>I’m an Oklahoma native based in Texas, joining Blue Origin
                 full-time as an Electrical Engineer in the New Grad Rotation Program,
                  where I get to work on cutting-edge space technology. I founded Launchpad,
                   a youth engineering initiative focused on inspiring more students to pursue
                    engineering. Additionally, I also run a 
                {' '}<a 
                  href="https://substack.com/@thetechhorizon" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#777777] font-bold hover:underline"
                >
                  blog
                </a>{' '}

                 giving my thoughts on space tech, engineering, and business.
                 
                 </p>

                 <p>
                  In my freetime I enjoy staying active whether that is running, working out, and playing pick up basketball.
                  I am also a big fan of the arts so I love listening to music, watching movies, and reading books, and going 
                  to all kinds of museums.
                 </p>
            </div>

            <h4 className="text-2xl font-bold text-[#000000] mb-3">
            How did I get here?
            </h4>

            <div className="space-y-4 text-xl leading-relaxed mb-3">
              <p> I earned my B.S. and MEng in electrical & computer engineering from
                 Baylor University with minors in computer science and mathematics focusing on electronics, FPGAs, and embedded systems.
              </p>
              <p> Outside of the classroom I was very curious and involved in extra curriculars.
                I was the Vice-President of Computing for Compassion (C4C), where I led efforts to host hackathons, social events,
                guest speakers, and ultimately started and ran a computer technology class for middle and high schoolers.</p>
                <p>Additionally,
                I was a university tutor for Baylor helping students in calculus 1-3, introductory engineering, computer science, and physics classes for 2. I also led
                a classroom of +25 students weekly creating lesson plans, worksheets, and university website study guides that are still in use over 4 years later
                </p>
                <p>Finally, I was involved in my universities aerospace club where  I was the lead electrical engineer directed all electricla systems for the schools first
                2 liquid fueled rocket engines.
              </p>

            </div>

            <h4 className="text-2xl font-bold text-[#000000] mb-3">
            Where do I want to go?
            </h4>

            <div className="space-y-4 text-xl leading-relaxed mb-10">
              <p> I want to be an elite engineer chasing hard problems with ambitious people, especially
                in aerospace and other frontier industries. Over time, I hope to grow into leadership roles
                 where I can connect engineering with business and help scale big ideas into real impact. Long
                  term, I’d love to build, lead, or invest in companies that genuinely push humanity forward while continuing to grow, stay disciplined, and surround myself with 
                  ambitious people doing the same. 
              </p>
            </div>
          <h4 className=" text-center text-3xl font-semibold mb-4">Professional</h4>
          </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto text-[#000000]">
              
              <div className="space-y-10">
                <h3 className="text-2xl font-semibold mb-4">Industry</h3>
                <li className="flex items-center gap-4 text-xl mb-5">
                  <Image src="/spacex_logo.svg" alt="SpaceX" width={42} height={42} />
                  <div><strong>SpaceX</strong> – Starlink Hardware Design Engineer</div>
                </li>
                
                <li className="flex items-center gap-4 text-xl mb-5">
                  <Image src="/spacex_logo.svg" alt="SpaceX" width={42} height={42} />
                  <div><strong>SpaceX</strong> – Data & Control Systems Engineer</div>
                </li>
                
                <li className="flex items-center gap-4 text-xl mb-5">
                  <Image src="/lm_logo.svg" alt="Lockheed Martin" width={42} height={42} />
                  <div><strong>Lockheed Martin</strong> – Embedded Systems Engineer</div>
                </li>
                
                <li className="flex items-center gap-4 text-xl mb-5">
                  <Image src="/nv_icon.png" alt="Non-Von,LLC" width={42} height={42} />
                  <div><strong>Non-Von, LLC</strong> – Hardware Systems Engineer</div>
                </li>
                
                <li className="flex items-center gap-4 text-xl mb-5">
                  <Image src="/em_Logo.png" alt="ExxonMobil" width={42} height={42} />
                  <div><strong>ExxonMobil</strong> – Software Engineer</div>
                </li>

                <h3 className="text-2xl font-semibold mb-4 ">Extra</h3>
                <li className="flex items-center gap-4 text-xl mb-5">
                    <Image src="/c4c_icon.png" alt="Baylor University" width={42} height={42} />
                   <div><strong>Computing For Compassion (C4C)</strong> – Vice President</div>
                  </li>
                  
                  <li className="flex items-center gap-4 text-xl mb-5">
                    <Image src="/bu_logo.png" alt="Baylor University" width={42} height={42} />
                    <div><strong>Baylor University</strong> – Master Tutor</div>
                  </li>
                  
                  <li className="flex items-center gap-4 text-xl mb-5">
                    <Image src="/nsbe_icon.png" alt="Baylor University" width={42} height={42} />
                    <div><strong>National Society of Black Engineers</strong> – Memeber & Mentor</div>
                  </li>
                  
                  <li className="flex items-center gap-4 text-xl mb-5">
                    <Image src="/bu_logo.png" alt="Baylor University" width={42} height={42} />
                    <div><strong>Baylor Buddies</strong> – Elementary School Volunteer</div>
                  </li>
              </div>
             
  
             
            <div className="space-y-10">
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-x-5 gap-y-4 mb-4 bg-[#ffffff]">
              {[
                'Analog Circuits','Mixed-Signal Circuits', 'Digital Circuits', 'Networking', 'Data Analysis', 'DFX/DFM/DFT'
                , 'PCB Schematic/Simulation/Layout','FPGA', 'GNSS/RF/EMI System Testing',' Power Electronics Design','Firmware',
                 'Autonomous Control Systems', 'Computer Vision', 'Industrial Panel Design', 'Motor Control', 'DAQ/Sensors', 'Digital Comms', 'Embedded Electronics'
              ].map(skill => (
                <span key={skill} className="bg-[#f1f5f9] px-3 py-1 rounded-full text-sm text-[#000000]">
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-x-5 gap-y-4 mb-4">
              {[
                'C/C++','Oscilliscope', 'Python', 'SystemVerilog','Git', 'Vector Network Analyzer', 'KiCad','Electronic Load (E-Load)', 'Thermal Chamber','Linux/Bash', 'Altium', 'Spectrum Analyzer', 'Signal Generator'
                , 'Multimeter/DMM', 'Power Supply', 'LabVIEW', 'Logic Analyzer','Soldering Station','3D Printing',  'MATLAB/Simulink', 'NX Siemens CAD'
              ].map(skill => (
                <span key={skill} className="bg-[#f1f5f9] px-3 py-1 rounded-full text-sm text-[#000000]">
                  {skill}
                </span>
              ))}
            </div>
            

            </div>
                
            </div>
            
            </div>
            
          
      </section>

      <section id="projects" className="min-h-[80vh] p-6 sm:p-12 bg-[#ffffff] text-[#f0f0f0]">
        <h3 className=" text-center text-4xl font-bold mb-6 text-[#000000]">Projects</h3>
        <ul className="space-y-12">
        <li className="flex gap-12 items-center">
              <Image src="/blp1.png" alt="Rocket Engine Project" width={315} height={315} className="rounded-md object-cover" />
              <div>
                <Link href="/projects/engine1">
                  <h4 className="text-2xl font-semibold text-[#000000] underline hover:text-[#00b3b3]">
                    Rocket Engine Testing Software Platform
                  </h4>
                </Link>
                <p className="text-[#000000]">Programmed C++ software and a Python GUI for real-time control, telemetry, and data acquisition of 
                  a liquid-fueled rocket engine used by a team of 9 engineers to rapidly test the engine with 
                  dependable ground support tooling.</p>
              </div>
            </li>
              <li className="flex gap-12 items-center">
            <Image src="/blp2.png" alt="Electronics System Project" width={315} height={315} className="rounded-md object-cover" />
            <div>
              <Link href="/projects/engine2">
                <h4 className="text-2xl font-semibold text-[#000000] underline hover:text-[#00b3b3]">
                  Full-Stack Engine Electronics System
                </h4>
              </Link>
              <p className="text-[#000000]">Designed and validated electronics for control, telemetry, data acquisition, and power for a liquid-fueled rocket engine hot-fire test maximizing
                reliability and minimizing time between attempts</p>
            </div>
          </li>
          <li className="flex gap-12 items-center">
              <Image src="/auto_boat.png" alt="Autonomous Boat Project" width={315} height={315} className="rounded-md object-cover" />
              <div>
                <Link href="/projects/auto">
                  <h4 className="text-2xl  font-semibold text-[#000000] underline hover:text-[#00b3b3]">
                    Autonomous Boat Navigation System
                  </h4>
                </Link>
                <p className="text-[#000000]">Made an embedded control system using motor drivers, a camera, and real-time software for international
                  competition, RoboBoat, to make an autonomous water navigation boat.</p>
              </div>
            </li>
          <li className="flex gap-12 items-center">
           <Image src="/full_processor_pic.png" alt="FPGA Processor Project" width={315} height={315} className="rounded-md object-cover" />
            <div>
              <Link href="/projects/fpga">
                <h4 className="text-2xl  font-semibold  text-[#000000] underline hover:text-[#00b3b3]">
                  FPGA Based 64-Bit Processor & Assembler 
                </h4>
              </Link>
              <p className="text-[#000000]">Programmed an assembler in Python, a 64-bit pipelined ARM processor, and DDR2 memory controller interface
                in SystemVerilog to execute 23 instructions to better understand Computer Architecture, Computer Systems, and RAM design</p>
            </div>
          </li>
        </ul>
      </section>

      <section id="blog" className="min-h-[20vh] p-6 sm:p-12 bg-[#ffffff] text-[#000000]">
        <h3 className="text-4xl font-bold mb-4">Blog</h3>
          <p className="max-w-2xl mx-auto text-center text-lg">
            "I write as I investigate. Writing is another form of discovery."
                 — Johannes Kepler 
        </p>
        <Link href="https://substack.com/@thetechhorizon">   
              <p className="underline hover:text-[#4cd4cb] text-center text-2xl font-semibold">  Click Here to Read!</p>
        </Link>
      </section>

      <footer className="p-4 sm:p-6 text-center text-[#aaaaaa]">
        &copy; 2025 Izuka Ikedionwu — All Rights Reserved
      </footer>
      </div>
    </main>
  );
}