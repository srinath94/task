## 🎯 Project Overview
A simple counter application that should only display positive numbers with increment and decrement functionality. This project demonstrates comprehensive end-to-end testing using Playwright with automated CI/CD pipeline verification.

This counter application:
- Displays default counter value 0.
- Increments when the "+" button is pressed
- Decrements when the "-" button is pressed
- Includes E2E test coverage

## 🚀 Quick Start

### Prerequisites
- Node.js 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd counter-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run start
   ```

## 🧪 Testing

### Running Tests Locally

1. **Run all E2E tests:**
   ```bash
   npm run test
   ```

2. **Run tests in headed mode:**
   ```bash
   npm run test:headed
   ```

### Test Structure

```
TASK
├── fixtures/
│   └── Fixtures.ts                # Test fixtures for shared setup
├── pages/                         # Page Object Models
│   └── CounterPage.ts
├── tests/
│   └── counter.spec.ts            # test file
├── playwright.config.ts           # Playwright config
└── Testplan.md                    # TestCases

```

## 🎯 Testing Framework Choice

**Selected Framework: Playwright**

## Why Playwright over Cypress?

- **True Cross-Browser Support**  
  Playwright runs on **Chromium, Firefox, and Safari (WebKit)** natively.  
  Cypress Safari support is *experimental* and actually powered by Playwright’s WebKit engine.  

- **Built-in Parallel Execution**  
  Playwright supports **parallel runs out of the box**.  
  Cypress requires a **paid Cloud plan** for parallelization and advanced dashboards.  

- **Advanced Scenarios Supported**  
  - Seamless iframe handling with `frameLocator()` (Cypress needs plugins).  
  - Multiple tabs/windows testing (not possible in Cypress).  
  - Strong network interception and mocking built-in.  

- **Completely Free & Open Source**  
  All features are included **without licensing**.  
  Cypress gates key features like parallelization and traceViwer(for debugging) behind a paid plan.  

- **AI & Future-Proofing**  
  Playwright integrates with AI via **MCP (Model Context Protocol)**, enabling test generation and debugging with tools like GitHub Copilot.  
  Cypress has limited AI tooling, mostly tied to its paid Cloud.  

- **Developer-Friendly API**  
  - Uses standard `async/await` and works seamlessly with modern IDEs (official VS Code plugin).  
  - Cypress uses a **custom command queue**, making debugging and logging less intuitive.  


## How I used AI tools for this project.
I used AI tools mainly(ChatGPT) as a support assistant to speed up my work. For example, I leveraged it to generate method signatures and JSDoc comments in Playwright, which improved code clarity and saved time. I also used it to understand and adjust Playwright configuration parameters and to modify my GitHub Actions YAML file for CI/CD setup. Additionally, it helped me with general guidance when I was stuck, acting as a quick reference instead of spending extra time searching through documentation.
