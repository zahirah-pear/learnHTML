# Exercise 4: Creating Custom Components

## 📝 Learning Objectives

- Understand what React components are
- Learn to create function components
- Follow component naming conventions
- Compose components together
- Reuse components multiple times

## 📚 Background

Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.

Think of components like JavaScript functions:

- They are just functions that return JSX
- They can be reused multiple times throughout your app
- They help organize your code into logical, manageable pieces

**Component Rules:**

1. Component names must start with a capital letter (PascalCase)
2. Components must return JSX (or null)
3. Components are just functions!

```jsx
// This is a component
function Welcome() {
  return <h1>Hello!</h1>;
}

// Use it like an HTML tag
<Welcome />;
```

**Why Components?**

Instead of writing everything in one giant piece of JSX, we break it into smaller, reusable pieces:

```jsx
// Without components - hard to read and reuse
function App() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Some text</p>
      <h1>Welcome!</h1>
      <p>Some text</p>
    </div>
  );
}

// With components - clean and reusable!
function WelcomeCard() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Some text</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <WelcomeCard />
      <WelcomeCard />
    </div>
  );
}
```

## 🎯 Exercise

Create your first custom React components and compose them together.

### Requirements:

1. Create a `Header` component that displays a title
2. Create a `Message` component that displays a message
3. Create a `Button` component with static text
4. Create a `Footer` component with copyright text
5. Compose all components together in an `App` component
6. Reuse components multiple times

### Bonus Challenges:

- Create a `Hero` component that displays hardcoded hero information
- Create multiple different hero components (Hero1, Hero2, Hero3)
- Experiment with different component compositions
- Add more styling to your components

## 🧪 Testing

Open `exercise.html` with Live Server and you should see:

- Your custom components rendered on the page
- Multiple instances of components
- Components composed together

## ⏱️ Time

**~10-15 minutes**
