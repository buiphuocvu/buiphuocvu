# Task 44.10 — Portfolio Dev Checklist
**Bùi Phước Vũ** | Lập trình viên Frontend | Tháng 6 / 2026

---

## 4 câu hỏi nền tảng (SubTask 1)

| Câu hỏi | Trả lời |
|---------|---------|
| **Bạn là ai?** | Lập trình viên Frontend đang chuyển hướng từ Business Development, nền tảng 10+ năm làm việc với đối tác quốc tế |
| **Bạn làm được gì?** | Xây dựng web application với React, TypeScript, Tailwind CSS; tích hợp REST API; deploy lên Vercel/Netlify |
| **Bạn dùng tech gì?** | React · TypeScript · Tailwind CSS · Bootstrap · HTML5 · CSS3 · JavaScript ES6+ · Git · GitHub · Vite |
| **Bạn muốn vị trí gì?** | Frontend Developer tại công ty tech/product, môi trường Agile |

---

## 3 Kênh Portfolio (SubTask 2)

- [x] **CV** — `Bui-Phuoc-Vu_CV_v1.0.html` (mở trình duyệt → Ctrl+P → Save as PDF)
- [ ] **GitHub** — https://github.com/buiphuocvu (cập nhật avatar, bio, pin repos)
- [x] **Portfolio Website** — https://buiphuocvu.netlify.app

---

## CV (SubTask 3–9)

- [x] **SubTask 3** — Tạo CV file `.docx` → `Bui-Phuoc-Vu_Lap-Trinh-Vien-Frontend_CV.docx`
- [x] **SubTask 4** — Summary 3-4 dòng: mục tiêu + tech chính (React, TS, Tailwind)
- [x] **SubTask 5** — Kỹ năng Frontend: HTML5, CSS3, JS ES6+, React, TS, Tailwind, Bootstrap, Responsive
- [x] **SubTask 6** — Công cụ: Git, GitHub, VSCode, Figma, Vite, npm/yarn, Vercel, Netlify
- [x] **SubTask 7** — 3 project đã chọn:
  - Food Ordering V1.0 (Bootstrap + Tailwind)
  - Course365 Dashboard (React CRUD)
  - E-Learning Platform UI (HTML/CSS/JS)
- [x] **SubTask 8** — Mỗi project có: Tên · Tech · Demo link · GitHub link · 2 bullets mô tả
- [x] **SubTask 9** — Kiểm tra CV trước khi export PDF:
  - [x] Không dùng "đam mê", "chăm chỉ", "nhiệt tình", "biết cơ bản" ✓
  - [x] Dùng bullet facts cụ thể (30s build, CI/CD, CRUD, Flexbox/Grid...) ✓
  - [x] Kiểm tra lỗi chính tả tiếng Việt ✓
  - [x] Vừa 1 trang (A4) ✓
  - [ ] Export PDF: Mở `Bui-Phuoc-Vu_CV_v1.0.html` → Ctrl+P → Save as PDF

---

## GitHub (SubTask 10–20)

### Profile
- [ ] **SubTask 10** — Cập nhật avatar rõ mặt (ảnh chuyên nghiệp, ánh sáng tốt)
- [ ] **SubTask 11** — Cập nhật bio:
  ```
  Lập trình viên Frontend | React · TypeScript · Tailwind CSS
  ```
- [ ] **SubTask 12** — Thêm vào profile:
  - Website: `https://buiphuocvu.netlify.app`
  - (Sau khi có PDF) Link CV: upload lên Google Drive / GitHub Releases → copy link vào bio

### Repos & READMEs
- [ ] **SubTask 13** — Pin 3–6 repos:
  - `PROJECT-FOOD-ORDERING-V1.0`
  - `Course-Management-Dashboard`
  - `-E-Learning`
  - (Thêm các repo khác nếu có)

> **Dùng `README-template.md` đã tạo** — copy vào từng repo và điền thông tin thực tế

- [ ] **SubTask 14** — Mở từng repo → tạo/sửa `README.md` (dùng template)
- [ ] **SubTask 15** — README có mô tả + tech stack table
- [ ] **SubTask 16** — Thêm screenshot UI:
  1. Chụp màn hình app đang chạy
  2. Lưu vào thư mục `screenshots/` trong repo
  3. Thêm `![Preview](./screenshots/preview.png)` vào README
- [ ] **SubTask 17** — Thêm hướng dẫn chạy:
  ```bash
  git clone https://github.com/buiphuocvu/TEN-REPO.git
  cd TEN-REPO
  npm install
  npm run dev
  ```
- [ ] **SubTask 18** — Thêm link demo live vào README (sau khi deploy)
- [ ] **SubTask 19** — Kiểm tra repo không có `node_modules/`, `.env`:
  ```gitignore
  # .gitignore nên có:
  node_modules/
  .env
  .env.local
  dist/
  .next/
  ```
- [ ] **SubTask 20** — Cải thiện commit messages:
  - ✅ `feat: add cart functionality`
  - ✅ `fix: resolve responsive layout on mobile`
  - ❌ `update`, `fix`, `abc`, `done`, `wip`

---

## Deploy (SubTask 21–30)

**Project chọn deploy:** Food Ordering V1.0 (đã có tại buiphuocvu.netlify.app)

- [x] **SubTask 21** — Đã chọn project React/JS deploy
- [x] **SubTask 22** — Code đã có trên GitHub: https://github.com/buiphuocvu/PROJECT-FOOD-ORDERING-V1.0
- [x] **SubTask 23** — Đã dùng Netlify: https://buiphuocvu.netlify.app
- [ ] **SubTask 24–28** — Kiểm tra deploy còn hoạt động, cấu hình đúng:
  - Build command: `npm run build`
  - Publish directory: `dist` (Vite) hoặc `build` (CRA)
- [ ] **SubTask 29** — Dán link deploy vào README + CV ✓ (đã có trong CV)
- [ ] **SubTask 30** — Tổng kiểm tra:
  - [ ] CV có link GitHub: github.com/buiphuocvu ✓
  - [ ] CV có link Demo: buiphuocvu.netlify.app ✓
  - [ ] GitHub profile có link Portfolio ✓
  - [ ] README của từng repo có link demo
  - [ ] Tất cả link hoạt động
  - [ ] CV đã export PDF

---

## Danh sách repo (SubTask 13 — pin lên GitHub)

| Repo | Link | README | Screenshot | Deploy |
|------|------|--------|------------|--------|
| Food Ordering V1.0 | [github.com/buiphuocvu/PROJECT-FOOD-ORDERING-V1.0](https://github.com/buiphuocvu/PROJECT-FOOD-ORDERING-V1.0) | [ ] | [ ] | buiphuocvu.netlify.app |
| Course365 Dashboard | [github.com/buiphuocvu/Course-Management-Dashboard](https://github.com/buiphuocvu/Course-Management-Dashboard) | [ ] | [ ] | — |
| E-Learning Platform UI | [github.com/buiphuocvu/-E-Learning](https://github.com/buiphuocvu/-E-Learning) | [ ] | [ ] | — |

---

## Files trong thư mục này

| File | Mục đích |
|------|----------|
| `Bui-Phuoc-Vu_CV_v1.0.html` | **CV v1.0** — mở trình duyệt → Ctrl+P → Save as PDF |
| `Bui-Phuoc-Vu_Lap-Trinh-Vien-Frontend_CV.docx` | CV bản Word (backup) |
| `README-template.md` | Template README cho GitHub repos |
| `GitHub-Profile-README.md` | README cho repo `buiphuocvu/buiphuocvu` (GitHub profile) |
| `PORTFOLIO-CHECKLIST.md` | File này |

---

*Cập nhật: Tháng 6 / 2026*
