import React from 'react';

export default function About() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: '#FFFDE6', // Cream / Light Ivory
      }}
    >
      {/* 🔥 Hero Section with Video */}
  <section className="relative w-full h-96 md:h-[32rem] overflow-hidden rounded-b-3xl">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/v1.mp4" // Replace with your video file
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Optional overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">
            About{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-red-400 bg-clip-text text-transparent">
              KPT Mangalore Sports
            </span>
          </h1>
          <p className="text-lg md:text-xl text-cyan-100 font-medium drop-shadow">
            Champions in Spirit, Champions in Action
          </p>
        </div>
      </section>

      {/* 📊 Stats Section */}
  <section className="max-w-5xl mx-auto mt-8 md:mt-12 mb-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-100 via-white to-cyan-100 rounded-xl shadow-lg p-6 text-center flex flex-col justify-end h-full min-h-[140px]">
            <div className="text-4xl font-bold text-blue-700 mb-2 mt-4">11+</div>
            <div className="text-lg font-medium text-blue-800">Years of Excellence</div>
          </div>
          <div className="bg-gradient-to-br from-pink-100 via-white to-yellow-100 rounded-xl shadow-lg p-6 text-center flex flex-col justify-end h-full min-h-[140px]">
            <div className="text-4xl font-bold text-pink-600 mb-2 mt-4">52</div>
            <div className="text-lg font-medium text-pink-700">Points in 44th State Meet</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-200 via-blue-100 to-blue-400 rounded-xl shadow-lg p-6 text-center flex flex-col justify-end h-full min-h-[140px]">
            <div className="text-4xl font-bold text-blue-700 mb-2 mt-4">45th</div>
            <div className="text-lg font-medium text-blue-900">
              State-level Inter-Polytechnic
            </div>
          </div>
        </div>
      </section>

      {/* 📖 Main Content Section */}
      <section className="max-w-4xl mx-auto bg-[#fdf6e3] p-8 rounded-2xl shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Our Story</h2>
        <div className="text-gray-800 leading-relaxed space-y-4 text-justify">
          <p>
            Over the last <span className="font-semibold text-blue-700">11 years</span>,{' '}
            <span className="font-semibold text-blue-700">KPT Mangaluru</span> has established
            itself as a powerhouse in inter-polytechnic sports across Karnataka. With a deep
            commitment to sportsmanship, discipline, and excellence, our athletes have consistently
            set high standards both on and off the field.
          </p>
          <p>
            From athletics and team sports to individual brilliance, KPT’s journey is marked by
            relentless training, community support, and a culture of encouragement. The institution
            believes in the holistic development of its students, and sporting excellence is one of
            its core pillars.
          </p>
          <p>
            With every victory, KPT Mangaluru continues to inspire, proving that discipline and
            passion always yield results. We are proud to be champions — not just in medals, but
            in spirit.
          </p>
          <p>
            Our institution proudly participated in the <span className="font-semibold text-blue-700">45th State-Level Sports Meet</span>, 
            with students from various branches representing the college in track, field, and indoor events. A total of <span className="font-semibold">21 students</span> took part 
            in this prestigious competition, bringing laurels to the institution through their outstanding performance.
          </p>
          <p>Our students won an impressive tally of <span className="font-semibold">25 gold medals, 4 silver medals, and 1 bronze medal</span>. 
            The boys' team secured 18 medals in individual and team events, while the girls' team secured 17 medals. 
            Among the participants, 14 students competed in multiple events, out of which 7 students contributed a total of 21 medals.
          </p>
          <p>
            Each student’s dedication was instrumental in achieving these results, with participation spanning <span className="font-semibold">31 events</span> covering sprints, long-distance runs, jumps, throws, and relays. 
            Notable performers included <span className="font-semibold">Rakshit R. Devadiga</span> from the first-year Electrical branch in boys’ events, and <span className="font-semibold">Anitha</span> from the first-year Computer Science branch in girls’ events.
          </p>
          <p>
            <span className="font-semibold">K. Kishan Shetty</span> from the first-year Mechanical branch won the Individual Championship Award in the boys’ category, while Anitha won the same in the girls’ category.
          </p>
          <p>
            The team effort and individual excellence resulted in our college being awarded the prestigious <span className="font-semibold text-blue-700">General Championship Trophy</span>. 
            Boys secured 49 individual prizes, and girls secured 61, bringing the total to 110 individual prizes. These achievements highlight the talent, discipline, and hard work of our athletes.
          </p>
          <p>
            The gold medals were awarded for first-place finishes, silver for second, and bronze for third. The state-level sports meet tested athletes’ physical and mental endurance, strengthened teamwork, and enhanced sportsmanship. Coaches provided rigorous training, while students practiced daily to improve their performance in both individual and team events.
          </p>
          <p>
            Participation in the meet fostered a sense of pride, motivation, and healthy competition among students. The college celebrated each participant during a felicitation ceremony, acknowledging their dedication, perseverance, and achievements. These accomplishments set a benchmark for future students, inspiring them to excel in sports while balancing academics effectively.
          </p>
          <p>
            The meet also helped identify emerging talent for state and national-level competitions, further enhancing our institution’s reputation in sports. Through guidance from senior students and coaches, along with support from parents and faculty, the athletes demonstrated discipline, collaboration, and time management.
          </p>
           <p>
            The success of both the boys’ and girls’ teams reflects the effectiveness of our training programs and serves as motivation for future participants to continue striving for excellence. We extend heartfelt congratulations to all students, coaches, and staff involved in this remarkable achievement.
          </p>
        </div>
      </section>
    </div>
  );
}
