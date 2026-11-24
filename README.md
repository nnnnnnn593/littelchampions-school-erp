# LittelChampions ICSE School ERP Demo

React + Vite + TypeScript modular frontend.

## Run
```bash
npm install
npm run dev
```
Build with `npm run build`.

## Structure
- `src/components/layout`: Sidebar and Topbar
- `src/components/ui`: reusable components
- `src/pages`: dashboard, directory, attendance, fee pages and module placeholders
- `src/data`: generated demo records
- `src/types`: TypeScript models
- `src/utils`: LocalStorage helper
- `src/App.tsx`: routing and app state orchestration

Demo includes 500 sample students, 35 staff, directory views, attendance registers, selfie capture kiosk, fee mock workflow, role selector, charts, and local persistence.

**Limitations:** simulated network validation; camera capture is user-permission based; no biometric face recognition; mock fees only; no production authentication or backend. Do not use demo data/storage for real student information.