---
title: "How I set up my new ReactJS projects!"
description: "Using Classic Yarn, ViteJS & TailwindCSS"
pubDate: "16 November 2022"
---

# How I set up my new ReactJS projects!

## Step 0: Installing NodeJS on your machine

If you haven’t installed node, then I am genuinely surprised that you are here. Anyways I got you covered.

Go to the NodeJS official website, then download and install the executable file for your operating system.

To check whether you have installed NodeJS correctly open Command Prompt or Terminal and type the following commands.

```bash
node --version
```

and

```bash
npm --version
```

If installed correctly, both commands should print out a version number.

## Step 1: Yarn for the win!

If you are from the Node world, you probably heard for ‘npm’, if not ‘npm’ is a package manager for NodeJS. Similarly, there are pnpm, yarn etc.

But from my experience, Yarn is super-fast. Because it is simpler to use and get started with, we are using the older yarn. This version is called Classic Yarn (v1). The newer version Yarn V2 promises more faster & secure.

Now let’s install yarn in your computer globally.

Open the Terminal/Command Prompt and type the following command

```bash
npm install --global yarn
```

After doing its thing, let’s check whether we have installed properly. Use the below commands

```bash
yarn --version
```

This should print out a version number.

Great, we are nearly halfway there!

## Step 2: Using Vite’s CLI for the starter template

Vite (pronounced “veet”) is a build tool that aims to provide a faster and leaner development experience for modern web projects. Thats what they said in their website. Check it out

So, let’s get started!

Type the following command in your terminal (PS: The folder will be created in the current working directory)

```bash
yarn create vite
```

The CLI will ask for the following details.

1. Your project name, this will be your folder name \*(so no spaces, instead use ‘-’)
2. Select your framework, ikr .. vite supports not only react, also Preact, VueJS, SvelteJS, vanilla JavaScript & many more. But for react… select react ^-^
3. Now you have the option to select, JavaScript or TypeScript — Now this totally up to you.
4. Open your project’s folder in VS Code.

## Step 3: Adding TailwindCSS to our project

1. Before adding TailwindCSS remove all the CSS files from the project, except index.css
2. TailwindCSS requires some dev dependencies to work, so let’s install them.
