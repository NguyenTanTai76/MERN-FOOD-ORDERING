# React + TypeScript + Vite

This template provides a minimal setup to get **React** working in **Vite** with **HMR (Hot Module Replacement)** and some useful **ESLint rules**.

---

## 🔌 Currently, two official plugins are available:

- [`@vitejs/plugin-react`](https://vitejs.dev/plugins/#vitejs-plugin-react) — uses **Babel** for Fast Refresh
- [`@vitejs/plugin-react-swc`](https://vitejs.dev/plugins/#vitejs-plugin-react-swc) — uses **SWC** for Fast Refresh (faster)

---

## 📦 Expanding the ESLint Configuration

If you're building a **production-grade** application, we recommend updating your ESLint configuration to support **type-aware rules**.

### ✅ Step 1: Update `parserOptions`

Modify the ESLint config (for example in `eslint.config.js`) with this:

```js
export default {
  // other settings...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```
