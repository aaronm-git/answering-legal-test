# Answering Legal Test

This is a test project for Answering Legal using Next.js app router and Tailwind CSS.

## Candidate Information

- Name: Aaron Molina
- Email: hire@aaronmolina.me
- Website: aaronmolina.me

## Project Information

### Project Assignment - Frontend Technical Challenge

We would like you to complete a small project to evaluate your frontend development skills. Please read the following instructions carefully:

#### Requirements

1. **Stack to Use**
   - Next.js
   - TypeScript
   - Tailwind CSS

2. **Design**
   - You will receive a Figma design file that you should implement as closely as possible.
   - The Figma file will also include a link to a Google Drive folder with the images you will need for the design.
   - Please pay attention to layout, responsiveness, and design details.

3. **Functionality**
   - Implement the page from the design.
   - Include a form (as shown in the design).
     - The form does **not** need to be connected to a backend.
     - On submission, show some kind of confirmation state (e.g., a success message or an alert).
     - Handle basic validation and error states (e.g., required fields, invalid email).

4. **Deployment**
   - Deploy the project on Vercel.

#### Evaluation Criteria

We will evaluate based on:

- Code quality (clean, modular, well-structured).
- Responsiveness and design fidelity (matches the Figma design).
- Use of TypeScript (types/interfaces, proper typing).
- Form handling (validation, error states, submission feedback).
- Attention to detail (small UI/UX touches).

#### Delivery

- Please send us:
  - The Vercel deployment link.
  - The GitHub repository link with your code.
- Send both links by email to nick@answeringlegal.com and giseller@answeringlegal.com.

## Technologies

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Biome](https://biomejs.dev)
- [Vercel](https://vercel.com)

## Challenges / Project Notes

- In our layout file, we use the Montserrat font from Google Fonts and only include the weights we need to minimize build size.
- There are some misconfiguration and many inconsistencies in the design file. I highly recommend a more detailed design file next time and synchronize the figma file settings to mirror accurate font sizes and spacing. I can add more detail over the phone if you like.
- The form submits with a success message or error message when the form is submitted using a toast notification.
- The form uses a server action to submit the form data.
- The form uses a zod schema to validate the form data.
- I used reusable components architecture to build the project so that components can be reused across the project.

## Project Structure

```
answering-legal-test/
├── app/
│ ├── page.tsx
│ └── layout.tsx
└── public/
└── images/
└── ...
```

## Installation

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the working application.

## Links

### Vercel

Vercel live deployment link:
[https://answering-legal-test.vercel.app](https://answering-legal-test.vercel.app)

### GitHub Repository

GitHub repository link:
[https://github.com/aaronm-git/answering-legal-test](https://github.com/aaronm-git/answering-legal-test)
