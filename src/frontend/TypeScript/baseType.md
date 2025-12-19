# TypeScript 基础核心概念

## 1.核心概念

### 1.1 类型注解

TypeScript 允许为变量、函数参数和返回值添加类型注解。

```typescript
let message: string = 'Hello, TypeScript!';
function add(a: number, b: number): number {
    return a + b;
}
```

### 1.2  基础类型

TypeScript 支持 JavaScript 的所有基础类型，并扩展了一些新类型。

```typescript
let isDone: boolean = false;
let age: number = 30;
let name: string = "Alice";
let list: number[] = [1, 2, 3]; // 数组
let tuple: [string, number] = ["Alice", 30]; // 元组
let notSure: any = 4; // 任意类型
let u: undefined = undefined; // undefined
let n: null = null; // null
```
