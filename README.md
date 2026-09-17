# CampusCare — Campus Clinic Appointment and Queue Management
Front-end only: strictly HTML/CSS/JavaScript.

Target audience: Students.
Purpose: Help students book campus clinic visits, view upcoming appointments, and monitor their queue.

Main functions:
1. Student profile/account
2. Book appointment
3. View live queue
4. Manage appointments
5. Cancel appointment

UI principles:
- Consistency: one font, palette, spacing system, components, and navigation.
- Feedback: loading states, success messages, toast notifications, queue updates.
- Confirming Destructive Behavior: cancellation and sign-out use confirmation modals.
- UCD: student-focused information, simple language, responsive layout, prominent common actions.

Style guide:
Primary #176B55
Secondary #123D36
Accent #BFE6D4
Background #F5F7F9
Text #17212B
Success #16734E
Error #B93838
Warning #C78316
Typography: Inter/system-ui; body 15px; headings 20–32px; buttons 13px bold; captions 10–12px.
Spacing: 8px base system; common padding 16–24px.
Components: consistent buttons, inputs, cards, modals, navigation with hover/active/disabled states.
Accessibility: visible focus states, minimum 44px button/input height, readable contrast, labels for fields, responsive layout.

Database:
The browser does not connect directly to the database. api.js is an adapter. Replace its demo methods with your existing REST API.
Architecture: HTML/CSS/JS → REST API → Existing Database.
