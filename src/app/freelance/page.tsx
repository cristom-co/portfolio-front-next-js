import Head from 'next/head';
import WhatsappButton from '../components/WhatsappButton';

export default function Freelance() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-5">
      <Head>
        <title>Freelance Fullstack Developer | React, Vue, Node, TypeScript</title>
        <meta name="description" content="Fullstack developer specializing in React.js, Vue.js, Node.js, and TypeScript. Let's build high-performance web apps, mobile apps, and SaaS platforms together!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="text-center py-16 bg-white w-full shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Hey there! 👋 Let’s turn your vision into reality.</h1>
          <p className="text-xl text-gray-600">Fullstack Developer | React.js, Vue.js, Node.js, TypeScript</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-4xl px-4 py-12">
        {/* Section: What I can do for you */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800 border-b-2 border-blue-600 pb-2">🚀 What I can do for you</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            <li>Fullstack development with <strong>React.js</strong>, <strong>Vue.js</strong>, <strong>Node.js</strong>, and <strong>TypeScript</strong>.</li>
            <li>Build high-performance <strong>web apps</strong>, <strong>mobile apps</strong>, and <strong>SaaS platforms</strong> from scratch.</li>
            <li>Develop and customize <strong>CMS templates</strong>, <strong>WordPress</strong>, and <strong>WooCommerce</strong> sites.</li>
            <li>Convert <strong>Figma</strong>, <strong>PSD</strong>, or image designs into pixel-perfect <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.</li>
            <li>Optimize websites for <strong>SEO</strong>, <strong>page speed</strong>, and overall performance.</li>
            <li>Design and build intuitive <strong>UI/UX</strong> experiences using <strong>Figma</strong> and <strong>Adobe XD</strong>.</li>
            <li>Set up and manage databases like <strong>PostgreSQL</strong>, <strong>Firestore</strong>, and <strong>Supabase</strong>.</li>
            <li>Automate deployments and streamline development with <strong>CI/CD pipelines</strong>.</li>
          </ul>
        </section>

        {/* Section: What I bring to the table */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800 border-b-2 border-blue-600 pb-2">🧠 What I bring to the table</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            <li><strong>7+ years</strong> of experience as a Frontend Engineer, delivering results for international clients and large companies.</li>
            <li>Experience working on <strong>global projects</strong> across various industries.</li>
            <li>A blend of <strong>development</strong> and <strong>design expertise</strong>, ensuring both functionality and aesthetics.</li>
            <li>A passion for crafting <strong>eye-catching</strong>, beautifully designed websites that are <strong>fast</strong>, <strong>scalable</strong>, and <strong>reliable</strong>.</li>
          </ul>
        </section>

        {/* Section: Why work with me? */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800 border-b-2 border-blue-600 pb-2">⚡ Why work with me?</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            <li><strong>Client-Centric Approach</strong>: I take the time to understand your unique needs and tailor solutions specifically for you.</li>
            <li><strong>Clear Communication</strong>: Expect transparent project timelines, regular updates, and no surprises.</li>
            <li><strong>Commitment to Quality</strong>: I don’t just build websites — I craft experiences with attention to detail and a high standard of excellence.</li>
            <li><strong>Proactive Problem Solver</strong>: I thrive on challenges and am always looking for ways to optimize, enhance, and future-proof your digital products.</li>
          </ul>
        </section>

        {/* Section: Puedes encontrar más información */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800 border-b-2 border-blue-600 pb-2">🔍 You can find more information
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>Connect with me on these platforms to learn more about my work and experience!</p>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://www.linkedin.com/in/cristombe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  My Website
                </a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~010772ee5b4f404db9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Upwork
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/cristom-co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 bg-white shadow-sm rounded-lg">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Let’s collaborate and bring your project to life — smoothly and stress-free! 🚀</h2>
            <p className="text-xl text-gray-600 mb-8">Feel free to reach out — I’d love to discuss your ideas and explore how we can work together.</p>
          </div>
        </section>
      </main>

      <WhatsappButton />

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 bg-white w-full shadow-sm">
        <p>© {new Date().getFullYear()} Cristhian Tombe. All rights reserved.</p>
      </footer>
    </div>
  );
}