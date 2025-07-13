# 🎭 Playwright Automation Exercise

![Playwright](https://img.shields.io/badge/Playwright-E2E%20Testing-green?logo=playwright)
![Status](https://img.shields.io/badge/status-in--progress-yellow)

This repository contains an end-to-end test automation project built with **[Playwright](https://playwright.dev/)** and TypeScript. It is based on the test cases from the site [Automation Exercise](https://automationexercise.com/), and follows best practices including Page Object Model (POM), helper utilities, and visual reporting.

---

## 🚀 Project Overview

📁 **Tech Stack**:

| Tool / Library                                                   | Description                                             |
| ---------------------------------------------------------------- | ------------------------------------------------------- |
| [Playwright](https://playwright.dev/)                            | Framework for end-to-end browser automation and testing |
| TypeScript                                                       | Strongly typed language for better maintainability      |
| Page Object Model (POM)                                          | Design pattern to encapsulate UI interactions           |
| [Allure Reporter](https://github.com/allure-framework/allure-js) | Advanced visual test reporting (in progress)            |
| HTML Reporter                                                    | Native Playwright reporter with trace/video support     |
| Faker.js                                                         | Dynamic data generation for user input fields           |
| GitHub Actions _(planned)_                                       | CI/CD integration for automatic test runs and reports   |

📁 **Directory Structure**:

├── pom/ → Page Object Models
├── tests/ → Test specifications (organized by feature)
├── utils/ → Helpers, data generators, screenshot utility
├── playwright.config.ts → Global test configuration

---

## ✅ Current Test Coverage

| Test Case ID | Description       | Status  |
| ------------ | ----------------- | ------- |
| TC01         | Register New User | ✅ Done |
| TC02 - TC26  | Coming soon...    | 🚧 WIP  |

> The project is still **in progress** — more test cases will be added soon following the official list from [Automation Exercise](https://automationexercise.com/test_cases).

---

## 📸 Reporting & Screenshots

- HTML reports are automatically generated after each run.
- Screenshots are attached to the report at key checkpoints using a custom helper.
- Traces and videos are retained on failure for easier debugging.

To view the latest test report:

```bash
npx playwright show-report
```

## 📦 How to Run

Make sure you have Node.js installed.

---

### 1️⃣ Install dependencies

```bash
npm install
```

### Run all tests (headless)

```bash
npm test
```

## 📌 Upcoming Features

- ✅ Finish implementing all 26 official test cases from [Automation Exercise](https://automationexercise.com/test_cases)
- 🧪 Improve test coverage across authentication, cart, and checkout flows
- 🧩 Add reusable custom commands and fixtures
- 🧠 Integrate smarter assertions and error handling
- 📊 CI/CD integration with GitHub Actions for automated runs
- 📁 Upload reports as GitHub Actions artifacts
- ✨ Add advanced reporting with **Allure Playwright Reporter**
