// eruda.d.ts
declare module 'eruda' {
  const eruda: {
    init: (config?: any) => void;
    // Add other eruda methods as needed
  };
  export = eruda;
}

// Augment the global Window interface
interface Window {
  eruda: typeof eruda;
}
