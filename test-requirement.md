# 🛕 GoldenCity – Developer & Designer Test Suite

This repository contains technical test descriptions for different roles at **GoldenCity**. Each candidate may select one or more test items that are appropriate for him and is required to complete their assigned task using this project.

---

---

## 🖥 Frontend Developer Test (60 mins)
```
Task: 

Enhance the existing landing page by improving visuals, usability, and theme functionality.
The goal is to evaluate your skills in UI development, responsive design, and interactive user experience.

Update the landing page with:

-   New background image & updated animation
-   Dark/Light mode toggle in the navbar
-   Smooth transitions between modes
-   Must be fully responsive (desktop, tablet, mobile)

Deliverables:

1. Source Code
    - Updated demo project files.
    - Compatible with the existing project (React, Next.js, or your stack).
    👉 Upload to your GitHub and submit the repository link

2. Demo Video
    - Demo project running locally (npm start or similar).
    - The landing page before & after the update.
    - The dark/light toggle in action.
    - Smooth transitions and responsiveness on different screen sizes.
    - Brief voiceover or captions describing key improvements. (Optional)
    👉 Upload to Google Drive or Room and submit the link
```
---

---

## ⚙️ Backend Developer Test (60 mins)
```
Task:

Implement a basic `CRUD API` for the memo function.
The goal is to assess your skills of RESTful API design, code structure, and data processing, as well as structural and functional integration with existing projects.

Endpoints:

-   `POST /notes` – Create a new note
-   `GET /notes` – Retrieve all notes
-   `GET /notes/:id` – Retrieve a specific note by ID
-   `PUT /notes/:id` – Update a note by ID
-   `DELETE /notes/:id` – Delete a note by ID

⚠️ Use in-memory array (no DB required)

Deliverables:
Candidates should submit the following items after completing the task.

1. Source Code
    - Updated demo project files (organized structured, Integration with demo).
    - Code should run with minimal setup.
    👉 Upload to your GitHub and submit the repository link
2. Demo Video
    - Demo project running locally (npm start or similar).
    - Example API calls using Postman, curl, or a simple frontend.
    - Responses shown in the terminal or Postman console.
    - Brief voiceover or text explanation. (Optional)
    👉 Upload to Google Drive or Room and submit the link
```



---

---

## 🌐 Web3 Developer Test (60 mins)
```
Task:

Integrate MetaMask into the existing web project to demonstrate your understanding of Web3 wallet connection, Ethereum provider events, and frontend interaction with blockchain accounts.
The goal is to evaluate your ability to implement seamless wallet connection and handle dynamic user account changes.  

Integrate MetaMask wallet with the project:

1.  Wallet Connection
    - Detect if MetaMask is installed in the browser.  
    - If not installed, show a message prompting the user to install MetaMask.  
    - If available:
        - Display a “Connect Wallet” button.
        - After successful connection, show the connected wallet address on the page.

2.  Display Connected Wallet Address
    - Display the wallet address (e.g., 0x1234...abcd).  
    - Format the address for readability (shorten middle characters).  
    - Optionally display network name or chain ID.  

3.  Handle Account & Network Changes
    - Display wallet address when the user switches accounts.
    - Display network name when the user switches chains.
    - If the user disconnects, show the Connect Wallet prompt again.

4.  Optional Enhancements (Bonus)
    - Show user’s ETH/MATIC balance using ethers.js or web3.js.
    - Add a “Disconnect” button to reset the wallet state.
    - Support multiple networks (Ethereum, Polygon, BSC Testnet).

Deliverables:

1. Source Code
    👉 Upload to your GitHub and submit the repository link
2. Demo Video
    - Demo project running locally (npm start or similar).
    - Connect MetaMask.
    - Display the connected address.
    - Handle account/network switches
    -  Add brief voiceover or captions explaining your work. (Optional)
    👉 Upload to Google Drive or Room and submit the link
```
---

---


## ⛓ Blockchain Developer Test (60 mins)
```
Task:

Create and deploy a Solidity smart contract that demonstrates your understanding of blockchain logic, state management, and interaction with Web3 frontend or scripts.
The goal is to evaluate your ability to design, code, and test smart contracts effectively.

Voting smart contracts:

1.  Smart Contract: `Voting.sol`

    - `addCandidate(string name)` – Only owner
    - `vote(uint candidateIndex)` – One vote per user
    - `getCandidates()` – Returns all candidates & vote counts
    - `getWinner()` – Returns winner’s name

2.  Backend (Node.js + Web3.js)

    - `POST /candidates` – Add candidate (owner only)
    - `GET /candidates` – List all candidates
    - `POST /vote` – Cast a vote
    - `GET /winner` – Get winner’s name

3.  Rules
    - Prevent double voting from the same address.
    - Only allow valid proposal IDs.
    - Use simple mappings and structs — no external libraries required.


Deliverables:

1. Source Code
    👉 Upload to your GitHub and submit the repository link
2. Demo Video
    - Demo project running locally (npm start or similar).
    - Contract deployment.
    - Reading results in console or frontend UI.
    - Explain logic briefly or annotate the steps. (Optional)
    👉 Upload to Google Drive or Room and submit the link
```
---

---

## 🎨 Designer Test (60 mins)
```
Task: 

Redesign a modern and user-friendly landing page for our product or service.  
The goal is to evaluate your design thinking, visual style, and ability to create clean, functional layouts that enhance user experience.

Deliverables:

 Feedback documentation
    - Evaluate color palette, typography, spacing, and overall aesthetics.
    - Is the layout structured logically? Are sections balanced and easy to scan?
    - Does the design feel intuitive and user-friendly? Are user flows clear?
    - Overall Impression.
    - UI improvement direction.
    - Related Figma Designs. (Optional)
    👉 Upload to Google Drive and submit the link

```
---

---

## 🧪 QA Engineer Test (50–60 mins)
```
Task:

Manually and/or automatically test a web project to evaluate your skills in bug identification, test case creation, and basic automation.  
The goal is to assess your ability to ensure software quality, report issues clearly, and suggest improvements.

QA test:

1.  Project Setup
    - Set up the project locally following provided instructions.  
    - Ensure all dependencies and environments are correctly installed.

2.  Manual Testing
    - Test key features, including but not limited to:
    - Wallet connection (if Web3 project)  
    - UI elements and navigation  
    - Forms and data submission  
    - Any interactive or dynamic features
3.  Identify at least 3 critical issues or bugs.  
    - Steps to reproduce
    - Expected vs. actual result
    - Severity level
4.  Create 3 detailed test cases with:
    - Test Case ID
    - Scenario 
    - Steps
    - Expected/Actual Result
    - Status

Deliverables:

    - Bug Report (Google Docs or Notion)
    - Test cases (Excel or Google Sheets)
    - Optional automation script (GitHub or ZIP)
    - 3–5 min video explaining key findings
```
---

---

## ⏱ Submission Note

All candidates must complete the assessment within **24 hours** and submit their deliverables including the **video demonstration**.

---
