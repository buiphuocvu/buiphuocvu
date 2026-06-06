import { useState, useEffect } from 'react';

// ── Constants ───────────────────────────────────────────────────────────────
const LINKS = {
  github: 'https://github.com/buiphuocvu',
  linkedin: 'https://linkedin.com/in/buiphuocvu',
  email: 'mailto:buiphuocvu2015@gmail.com',
  cv: 'https://github.com/buiphuocvu/buiphuocvu/raw/main/Bui-Phuoc-Vu_CV.pdf',
};

interface Project {
  name: string;
  desc: string;
  tech: string[];
  github: string;
  demo: string | null;
}

const PROJECTS: Project[] = [
  {
    name: 'Food Ordering V1.0',
    desc: 'Ứng dụng đặt món ăn trực tuyến — menu, giỏ hàng, thanh toán. Responsive mobile & desktop. CI/CD tự động qua Netlify, build dưới 30 giây.',
    tech: ['Bootstrap 5', 'Tailwind CSS', 'JavaScript ES6+'],
    github: 'https://github.com/buiphuocvu/PROJECT-FOOD-ORDERING-V1.0',
    demo: null,
  },
  {
    name: 'Course365 Dashboard',
    desc: 'Dashboard quản lý khóa học với CRUD đầy đủ — thêm, sửa, xóa, tìm kiếm real-time. React Hooks (useState, useEffect) + component architecture.',
    tech: ['React 18', 'JavaScript', 'CSS3'],
    github: 'https://github.com/buiphuocvu/Course-Management-Dashboard',
    demo: null,
  },
  {
    name: 'E-Learning Platform UI',
    desc: 'Giao diện học trực tuyến — module bài học, thanh tiến độ, đăng nhập/đăng ký. CSS thuần Flexbox & Grid, responsive từ 375px.',
    tech: ['HTML5', 'CSS3', 'JavaScript ES6+'],
    github: 'https://github.com/buiphuocvu/-E-Learning',
    demo: null,
  },
];

const SKILLS = [
  { cat: 'Languages', items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'TypeScript'] },
  { cat: 'Framework / UI', items: ['React 18', 'Tailwind CSS', 'Bootstrap 5'] },
  { cat: 'Tools', items: ['Git', 'GitHub', 'VSCode', 'Vite', 'npm'] },
  { cat: 'Deploy / Design', items: ['Netlify', 'Vercel', 'Figma'] },
];

const NAV_LINKS = [
  { label: 'Về tôi', href: '#about' },
  { label: 'Kỹ năng', href: '#skills' },
  { label: 'Dự án', href: '#projects' },
  { label: 'Liên hệ', href: '#contact' },
];

// ── Sub-components ──────────────────────────────────────────────────────────
function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <h2 className="text-2xl font-bold text-white mb-8">
      <span className="font-mono text-blue-400 text-lg mr-2">{n}.</span>
      {title}
    </h2>
  );
}

function TechBadge({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      className={
        accent
          ? 'text-xs bg-blue-900/50 text-blue-300 border border-blue-800/60 px-2.5 py-1 rounded-full'
          : 'bg-slate-800 text-slate-300 text-sm px-3 py-1.5 rounded-full border border-slate-700 hover:border-slate-500 transition'
      }
    >
      {label}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500/40 transition-colors duration-300 group">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-white text-lg leading-tight group-hover:text-blue-400 transition-colors">
          {project.name}
        </h3>
        <div className="flex gap-3 shrink-0 pt-0.5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition text-sm"
            aria-label="GitHub"
          >
            ⌥
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition text-sm"
              aria-label="Live demo"
            >
              ↗
            </a>
          )}
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.desc}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} accent />
        ))}
      </div>

      <div className="flex gap-4 text-sm border-t border-slate-800 pt-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition flex items-center gap-1"
        >
          <span>⌥</span> GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
          >
            <span>▶</span> Live demo
          </a>
        )}
      </div>
    </article>
  );
}

// ── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">

      {/* ── Navbar ── */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-950/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
        } border-b border-slate-800/60`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-mono font-bold text-blue-400 text-lg tracking-tight hover:text-blue-300 transition">
            BPV<span className="text-slate-500">.</span>dev
          </a>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-7 text-sm text-slate-400">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="hover:text-white transition">
                {label}
              </a>
            ))}
            <a
              href={LINKS.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg font-medium transition"
            >
              Download CV
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="sm:hidden text-slate-400 hover:text-white transition p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="sm:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="text-slate-300 hover:text-white transition" onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-medium">
              Download CV ↗
            </a>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center px-6 pt-16">
        <div className="max-w-5xl mx-auto w-full py-24">
          <p className="font-mono text-blue-400 text-sm mb-4 tracking-wider">Xin chào, tôi là</p>

          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 leading-tight">
            Bùi Phước Vũ
          </h1>

          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-400 mb-8">
            Lập trình viên Frontend
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mb-10 leading-relaxed">
            Xây dựng giao diện web{' '}
            <span className="text-slate-200 font-medium">sạch, hiệu quả</span> với{' '}
            <span className="text-blue-400 font-medium">React · TypeScript · Tailwind CSS</span>.
            Nền tảng 10+ năm Business Development, đang chuyển hướng toàn thời gian sang phát triển web.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg shadow-blue-900/30"
            >
              Xem dự án →
            </a>
            <a
              href={LINKS.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              📄 Download CV
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              🐙 GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <SectionLabel n="01" title="Về tôi" />

          <div className="grid sm:grid-cols-5 gap-10">
            <div className="sm:col-span-3 text-slate-400 leading-relaxed space-y-4">
              <p>
                Tôi là <span className="text-slate-200 font-medium">Frontend Developer</span> đang chuyển hướng
                toàn thời gian từ nền tảng{' '}
                <span className="text-slate-200 font-medium">10+ năm Business Development & Thương mại quốc tế</span>.
                Kinh nghiệm làm việc với đối tác quốc tế giúp tôi hiểu sản phẩm từ góc độ người dùng thực sự.
              </p>
              <p>
                Tôi xây dựng giao diện web chuẩn{' '}
                <span className="text-blue-400">responsive</span>,{' '}
                <span className="text-blue-400">sạch code</span>, dễ maintain — sử dụng React, TypeScript và
                Tailwind CSS. Tìm kiếm vị trí{' '}
                <span className="text-slate-200 font-medium">Frontend Developer</span> tại công ty
                tech/product trong môi trường Agile.
              </p>
            </div>

            <div className="sm:col-span-2">
              <ul className="space-y-3 text-sm">
                {([
                  ['📍', 'TP. Hồ Chí Minh, Việt Nam'],
                  ['🎯', 'Frontend Developer (full-time)'],
                  ['🌱', 'Đang học: React 19, Next.js, Vitest'],
                  ['💼', '10+ năm Business Development'],
                ] as [string, string][]).map(([icon, text]) => (
                  <li key={text} className="flex gap-3 text-slate-400">
                    <span className="text-base">{icon}</span>
                    <span>{text}</span>
                  </li>
                ))}
                <li className="flex gap-3 text-slate-400">
                  <span className="text-base">📧</span>
                  <a href={LINKS.email} className="text-blue-400 hover:text-blue-300 transition">
                    buiphuocvu2015@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel n="02" title="Kỹ năng kỹ thuật" />

          <div className="grid sm:grid-cols-2 gap-5">
            {SKILLS.map(({ cat, items }) => (
              <div
                key={cat}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition"
              >
                <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
                  {cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <TechBadge key={item} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <SectionLabel n="03" title="Dự án nổi bật" />

          <div className="grid sm:grid-cols-3 gap-5">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-slate-600 hover:border-blue-500 text-slate-400 hover:text-blue-400 px-6 py-2.5 rounded-xl text-sm transition"
            >
              Xem thêm trên GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel n="04" title="Liên hệ" />

          <div className="max-w-xl">
            <p className="text-slate-400 leading-relaxed mb-10">
              Tôi đang tìm kiếm cơ hội mới với vị trí{' '}
              <span className="text-slate-200">Frontend Developer</span>.
              Nếu bạn có một vị trí phù hợp hoặc muốn trao đổi thêm — hộp thư luôn mở!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={LINKS.email}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg shadow-blue-900/30"
              >
                📧 Gửi email
              </a>
              <a
                href={LINKS.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                📄 Download CV
              </a>
            </div>

            <div className="mt-8 flex gap-6">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition text-sm"
              >
                GitHub ↗
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition text-sm"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-slate-500 text-sm">
        <p>
          Designed & Built by{' '}
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
            Bùi Phước Vũ
          </a>{' '}
          · React · TypeScript · Tailwind CSS
        </p>
        <p className="mt-1 text-xs text-slate-600">2026</p>
      </footer>
    </div>
  );
}
