# C语言学习

## 1. 环境搭建

### 1.1 Windows 下编译器安装  （C 语言编译器用于把源代码编译成最终的可执行程序。）

地址：[MinGW](https://www.mingw-w64.org/)

下载后，放到非中文路径解压，然后把bin文件路径添加到系统环境变量path中。

```bash
gcc -v
# 查看版本信息 确认是否安装成功
```

### 1.2 安装vscode插件

插件：C/C++ 和 C/C++ Runner（编译调试）

- 安装完成左下角就可以编译运行调试C语言代码的按钮

### 1.3 编写代码

1. 第一个C程序

```c
#include <stdio.h>
int main()
{
   /* 我的第一个 C 程序 */
   printf("Hello, World! \n");
   
   return 0;
}
```

解释：

- `#include <stdio.h>` 是一个预处理指令，用于包含标准输入输出库的头文件。包含一些常用的输入输出函数，如printf()
- `int main()` 是主函数，是每个 C 程序的入口点。返回int类型的值，0表示程序正常结束。
- `/* 我的第一个 C 程序 */` 是注释，用于对代码进行解释说明。
- `printf("Hello, World! \n");` 是一个函数调用，用于在屏幕上打印输出 "Hello, World! "。
- `return 0;` 是主函数的返回语句，用于返回一个整数值给操作系统。

## 2. 编译 & 执行 C 程序

### 2.1 使用 gcc

```bash
# 进入代码所在的目录
gcc -o hello hello.c
# 将hello.c编译成可执行文件，命名为hello
./hello
# 在Linux或Mac下运行程序
```

在Windows下使用：

```bash
.\hello.exe
```

### 2.2 使用 vscode

- 直接点击右上角的绿色播放按钮。

## 3. 数据类型

### 3.1 数据类型

C语言中主要有以下几种数据类型：

#### 3.1.1 基本数据类型

数据类型有整数型、浮点型、字符型、指针型、结构体型、共用体型、枚举型等。

| 类型     | 存储大小（字节）      | 说明       | 值范围 |
|--------|----------|-----------------------------------|----------------|
|char    | 1        | 存储单个字符                                                 | -128 到 127 或 0 到 255 |
|signed char| 1        | 存储有符号字符型值                                           | -128 到 127 |
|unsigned char| 1        | 存储无符号字符型值                                           | 0 到 255 |
|int    | 2 或 4   | 存储整型值                                                   | -32,768 到 32,767 或 -2,147,483,648 到 2,147,483,647 |
|unsigned int| 2 或 4   | 存储无符号整型值                                             | 0 到 65,535 或 0 到 4,294,967,295 |
|short  | 2        | 存储短整型值                                                 | -32,768 到 32,767 |
|unsigned short| 2        | 存储无符号短整型值                                           | 0 到 65,535 |
|long   | 4        | 存储长整型值                                                 | -2,147,483,648 到 2,147,483,647 |
|unsigned long| 4        | 存储无符号长整型值                                           | 0 到 4,294,967,295 |
|float  | 4        | 单精度浮点数，占用4个字节（32位）                              | -3.4E+38 到 3.4E+38 |
|double | 8        | 双精度浮点数，占用8个字节（64位）                              | -1.7E+308 到 1.7E+308 |
|long double| 16       | 扩展精度浮点数，占用16个字节（128位）                     | -1.18E+4932 到 1.18E+4932 |

### 3.2 变量

#### 3.2.1 定义变量

- 数据类型 变量名 = 值;
例如：int a = 10;

- 代码示例

```c
// #include <stdio.h>
// int main()
// {
//   unsigned long id = 3;   // unsigned long表示无符号长整型，占8个字节
//   unsigned char weight = 70;  // unsigned char表示无符号字符型，占1个字节
//   unsigned char age = 18;  // unsigned char表示无符号字符型，占1个字节
//   float height = 1.75f;   // 小数可以用float类型存储
//   printf("id=%ld\n", id);  // %ld表示长整型数据的格式化输出
//   printf("weight=%d kg\n", weight);  // %d表示整型数据的格式化输出
//   printf("age=%d\n", age);  // %d表示整型数据的格式化输出
//   printf("height=%.2f m\n", height);   // %.2f表示保留2位小数
//   return 0;
// }

#include <stdio.h>
int main(){
  int intSize = sizeof(int);  // sizeof是一个操作符，可以用来获取数据类型的存储大小

  printf("int 储存大小%d bytes\n",intSize);
}
```

#### 3.2.2 变量规则

特别说明：

- 初始化变量时候要给变量赋值，否则变量的值是随机的
- C语言中，变量名必须以字母或下划线 _ 开头
- 变量名可以包含字母、下划线和数字（0-9）
- 变量名不能为C语言的关键字，如 int、char 等。

#### 3.2.3 初始化常量

1. const 关键字定义常量
2. 使用 #define 预处理指令定义常量

- 使用 const 关键字定义常量
- 代码示例

```c
#include <stdio.h>
int main(){
  const int a = 10;
  printf("%d",a);
  return 0;
}
```

- 使用 #define 预处理指令定义常量
- 代码示例

```c
#include <stdio.h>
#define PI 3.14f
int main(){
  printf("%f",PI);
  return 0;
}
```

## 4. 运算符

### 4.1 算术运算符

#### 4.1.1 算术运算符定义

| 运算符 | 描述                                                         |
|------|--------------------------------------------------------|
| +    | 加法运算，例如：5+3=8。                                       |
| -    | 减法运算，例如：5-3=2。                                       |
| *    | 乘法运算，例如：5*3=15。                                      |
| /    | 除法运算，例如：5/3=1（整数结果）。使用浮点数可以获得小数部分，例如：5.0/3.0=1.667。  |
| %    | 取模或余数运算，例如：5%3=2（5除以3的余数）。                    |
| ++   | 自增运算符，使变量的值增加1。例如：a++将变量a的值加1。          |
| --   | 自减运算符，使变量的值减少1。例如：--a将变量a的值减1。         |

#### 4.1.2 算术运算符示例

```c
#include <stdio.h>
int main(){
  int a = 10;
  int b = 5;
  int c = a + b;
  c=a-b;
  printf("c=a-b = %d\n",c);
  c=a*b;
  printf("c=a*b = %d\n",c);
  c=a/b;
   printf("c=a/b = %d\n",c);
  c=a%b;
  printf("c=a%%b = %d\n",c);
  c=a++;  // 先赋值再加1  c=a; a=a+1;
  printf("c=a++ = %d\n",c);
  c=a--;
  printf("c=a-- = %d\n",c);

  a=20;
  c=++a;  // 先加再加赋值给c  a=a+1; c=a;
  printf("c=++a = %d\n",c);
  c=--a;  // 先减再赋值给c  a=a-1; c=a;
  printf("c=--a = %d\n",c);
  return 0;
}
```

### 4.2 关系运算符

关系运算符用于比较两个操作数的值，并返回一个布尔值（真或假）

#### 4.2.1 关系运算符定义

- 实例定义 A=10,B=20

| 运算符 | 描述                 | 实例        |
|------|--------------------|----------------|
| ==   | 检查两个操作数的值是否相等，如果相等则条件为真。     | (A == B) 为假。 |
| !=   | 检查两个操作数的值是否不相等，如果不相等则条件为真。 | (A != B) 为真。|
| >    | 检查左操作数的值是否大于右操作数的值，如果是则条件为真。 | (A > B) 为假。|
| <    | 检查左操作数的值是否小于右操作数的值，如果是则条件为真。 | (A < B) 为真。|
| >=   | 检查左操作数的值是否大于或等于右操作数的值，如果是则条件为真。 | (A >= B) 为假。|
| <=   | 检查左操作数的值是否小于或等于右操作数的值，如果是则条件为真。 | (A <= B) 为真。|

#### 4.2.2 关系运算符示例

```c
#include <stdio.h>
int main()
{
 int a = 10;
 int b = 10;
 unsigned char temp = 30;

 if(a > b)
 {
   printf("a > b\n");
 }
 else if(a < b)
 {
   printf("a < b\n");
 }
 else
 {
   printf("a = b\n");
 }

 if(temp>50){
  printf("温度大于50度,停止加热\n");
 }else{
  printf("温度小于50度,开始加热\n");
 }
 return 0;
}
```

### 4.3 逻辑运算符

逻辑运算符用于连接多个条件表达式，并返回一个布尔值（真或假）

#### 4.3.1 逻辑运算符定义

| 运算符 | 描述                                                         |
|------|--------------------------------------------------------|
| &&   | 逻辑与运算符，当且仅当两个操作数都为真时，条件才为真。 |
| \|\| | 逻辑或运算符，当两个操作数中至少有一个为真时，条件为真。 |
| !    | 逻辑非运算符，用于反转操作数的逻辑状态。如果操作数为真，则逻辑非为假；如果操作数为假，则逻辑非为真。 |

#### 4.3.2 逻辑运算符示例

```c
// 逻辑运算符
#include <stdio.h>
int main () {
  int a = 10;
  int b = 0;
  int c = a && b;
  printf("c = %d\n", c);
  if(a && b) {
    printf("a && b = true\n");
  } else {
    printf("a && b = false\n");
  }
  if(a || b) {
    printf("a || b = true\n");
  } else {
    printf("a || b = false\n");
  }

  if(!b){
    printf("!b = true\n");
  }
  return 0;
}
```

### 4.4 位运算符

#### 4.4.1 位运算符定义

| 运算符 | 描述                                                         |
|------|--------------------------------------------------------|
| &    | 按位与运算符，对应位都是1时，结果位才为1。                 |
| \|   | 按位或运算符，对应位都是0时，结果位才为0。                 |
| ^    | 按位异或运算符，对应位不同时，结果位为1。                  |
| ~    | 按位取反运算符，将操作数的每一位取反。 例如，~5将把二进制表示中的101（即5）变为-6。 因为第一位是符号位，所以实际上是取反再加1。 即：~x = -(x+1) |
| <<   | 左移运算符，将操作数的位向左移动指定的位数。低位补0。               |
| >>   | 右移运算符，将操作数的位向右移动指定的位数。高位补0。               |

#### 4.4.2 位运算符示例

```c
#include <stdio.h>
int main () {
  int a = 60;
  int b = 13;
  int c = 0;
  c = a & b;  // 按位与运算符
  printf("c = a & b = %d\n", c);
  c = a | b;  // 按位或运算符
  printf("c = a | b = %d\n", c);
  c = a ^ b;  // 按位异或运算符
  printf("c = a ^ b = %d\n", c);
  c = ~a;  // 按位取反运算符
  printf("c = ~a = %d\n", c);
  c = a << 2;  // 左移运算符
  printf("c = a << 2 = %d\n", c);
  c = a >> 2;  // 右移运算符
  printf("c = a >> 2 = %d\n", c);
 
  return 0;
}
```

### 4.5 赋值运算符

#### 4.5.1 赋值运算符定义

| 运算符 | 描述                                                         | 实例 |
|------|----------------------------------------------|-----------------------|
| =    | 简单的赋值运算符，将右侧操作数的值赋给左侧的变量。 | C = A + B 将把A+B 的运算结果赋给C  |
| +=   | 加且赋值运算符，把右操作数加上左操作数的结果赋值给左操作数。 | C += A 等价于 C = C + A    |
| -=   | 减且赋值运算符，把右操作数减去左操作数的结果赋值给左操作数。 | C -= A 等价于 C = C - A    |

#### 4.5.2 赋值运算符示例

```c
// 赋值运算符 
#include <stdio.h>
int main () {
  int a = 10;
  int c = 0;
  c = a;  // 简单赋值运算符
  printf("c = a = %d\n", c);
  c += a;  // c = c + a;  加法赋值运算符
  printf("c += a = %d\n", c);
  c -= a;  // c = c - a;  减法赋值运算符
  printf("c -= a = %d\n", c);
  c *= a;  // c = c * a;  乘法赋值运算符
  printf("c *= a = %d\n", c);
  c /= a;  // c = c / a;  除法赋值运算符
  printf("c /= a = %d\n", c);
  c %= a;  // c = c % a;  取余赋值运算符
  printf("c %%= a = %d\n", c);
  return 0;
}
```

## 5. 条件语句

1. if 语句
2. switch 语句

### 5.1 if 语句

- if 语句用于基于不同的条件来执行不同的动作。
- 示例代码：

```c
// if 语句 描述上面示例
#include <stdio.h>
int main () {
  int grade = 'C';
  if(grade == 'A'){
    printf("成绩为A\n");
  }else if(grade == 'B'){
    printf("成绩为B\n");
  }else if(grade == 'C'){
    printf("成绩为C\n");
  }else{
    printf("成绩错误\n");
  }
  return 0;
}
```

### 5.2 switch 语句

- switch 语句用于基于不同的值来执行不同的动作。
- 示例代码：

```c
// switch 语句 描述上面示例
#include <stdio.h>
int main () {
  int grade = 'C';
  switch (grade){
    case 'A':
      printf("成绩为A\n");
      break;
    case 'B':
      printf("成绩为B\n");
      break;
    case 'C':
      printf("成绩为C\n");
      break;
    default:
      printf("成绩错误\n");
      break;
  }
  return 0;
}
```

## 6. 循环语句

1. for 循环
2. while 循环
3. do...while 循环

### 6.1 for 循环

- for 循环用于重复执行相同的代码块，直到指定的条件不再满足。
- 示例代码：

```c
// for 循环 演示程序
#include <stdio.h>
int main () {
  int i = 0;
  for (i = 0; i < 10; i++) {
    printf("i = %d\n", i);
  }
  return 0;
}
```

### 6.2 while 循环

- while 循环用于重复执行相同的代码块，直到指定的条件不再满足。
- 示例代码：

```c
// while 循环演示程序
#include <stdio.h>
int main () {
  int i = 0;
  printf("开始加热\n");
  while (i < 30) {
    i++;
    printf("当前温度为%d\n", i);
  }
  printf("停止加热，温度已到达%d度\n",i);
 
  return 0;
}
```

## 7. 函数

### 7.1 函数定义

- 在 C 语言中，函数是一组一起执行一个任务的语句的集合。每个C程序都至少有一个函数，即主函数 `main()` ，所有简单的程序都可以定义其他额外的函数。
- 你可以把代码划分到不同的函数中。如何划分代码到不同的函数由程序员根据需要决定。
- 示例代码：

```c
// 函数演示程序
#include <stdio.h>
void printHello() {
  printf("Hello, World!\n");
}
int main () {
  printHello();
  return 0;
}
```

### 7.2 函数的参数和返回值

- 可以向函数传递值，从函数获取值。
- 示例代码：

```c
// 带参数和返回值的函数
#include <stdio.h>
int sum(int a, int b) {
  return (a + b);
}
int main () {
  int result = sum(10, 20);
  printf("结果为: %d\n", result);
  return 0;
}
```

## 8. 数组

### 8.1 数组定义

- C 语言支持一种叫做数组的数据结构，它可以存储一个固定大小的相同类型元素的顺序集合。
- 示例代码：

```c
// 数组演示程序
#include <stdio.h>
int main () {
  int numbers[5] = {10, 20, 30, 40, 50};
  printf("numbers[0] 的值为: %d\n", numbers[0]);
  return 0;
}


// 数组的定义和初始化

// int main(){
//   int arr[5] = {1,2,3,4,5};
//   printf("arr[0] = %d\n",arr[0]);
//   printf("arr[1] = %d\n",arr[1]);
//   printf("arr[2] = %d\n",arr[2]);
//   printf("arr[3] = %d\n",arr[3]);
//   printf("arr[4] = %d\n",arr[4]);

//   // 修改数组元素
//   arr[0] = 10;
//   arr[1] = 20;
//   arr[2] = 30;
//   arr[3] = 40;
//   arr[4] = 50;

//   printf("修改后：\n");
//   printf("arr[0] = %d\n",arr[0]);
//   printf("arr[1] = %d\n",arr[1]);
//   printf("arr[2] = %d\n",arr[2]);
//   printf("arr[3] = %d\n",arr[3]);
//   printf("arr[4] = %d\n",arr[4]);

//   return 0;
// } 

// 数组的遍历和计算数组长度
int main (){
  int arr[100];
  for (int i = 0; i < 100; i++){
    arr[i]=i;
    printf("arr[%d] = %d\n",i,arr[i]);
  }
  int arrSize = sizeof(arr)/sizeof(int);  // 数组长度等于 数组总字节数/单个元素字节数 int在64位操作系统站位4字节
  printf("arrSize = %d\n",arrSize);
}

```

## 9. 字符串

### 9.1 字符串定义

- 在 C 语言中，字符串实际上是一个字符数组，以空字符 `\0` 结尾。
- 示例代码：

```c
// 字符串定义演示程序
#include <stdio.h>

int main (){

  // 字符串声明方式1
  char string[6]={'h','e','l','l','o','\0'}; // 字符数组
  printf("string = %s\n",string); // %s 用于输出字符串

  // 字符串声明方式2
  char string2[]="hello2";
  printf("string2 = %s\n",string2);

  return 0;
}
```

### 9.2 字符串函数

- C 语言提供了一些标准库函数来处理字符串，例如 `strlen()`、`strcpy()`、`strcat()` 和 `strcmp()` 等。

- 引入标准库的头文件 `<string.h>` 来使用这些函数。

- 表格：

| 函数名 | 功能 | 实例 |
| --- | --- | ------ |
| `strlen()` | 计算字符串的长度 | `strlen("hello")` |
| `strcpy()` | 复制字符串 | `strcpy(dest, src)` |
| `strcat()` | 连接字符串 | `strcat(dest, src)` |
| `strcmp()` | 比较字符串，如果相等返回0 str1>str2 则返回大于0 str1<str2 则返回小于0 | `strcmp(str1, str2)` |

- 示例代码：

```c
// 字符串函数演示程序
#include <stdio.h>
#include <string.h>
int main (){
  char string1[10]="hello";
  char string2[10]="world";
  char string3[10];
  int len;
  // 复制字符串
  strcpy(string3,string1);
  printf("string3 = %s\n",string3);   // 输出：hello
  // 连接字符串
  strcat(string1,string2);
  printf("string1 = %s\n",string1);   // 输出：hello world
  // 比较字符串
  len = strcmp(string1,string2);
  printf("len = %d\n",len);   // 输出：-1 因为 "hello" < "world"
  // 比较字符串
  len = strcmp(string3,string1);
  printf("len = %d\n",len);   // 输出：0 因为 "hello" == "hello"

  return 0;
}
```

## 10. 指针

### 10.1 指针定义

- 在 C 语言中，所有变量都存储在内存中的某个位置。每个变量都有一个内存位置，指向变量的指针保存了变量的内存地址。
- 示例代码：

```c
// 指针演示程序
#include <stdio.h>
int main () {
  int var = 20;
  int *ptr;  // 定义一个 int 类型的指针 ptr
  ptr = &var;  // 获取变量 var 的地址，并赋值给指针 ptr
  printf("var 的值: %d\n", *ptr);  // 解引用指针，输出指针指向的内存地址的变量值
  return 0;
}

// 完成变量交换，使用指针传递，会影响原变量值
void swap(int *a, int *b) {
  printf("交换前: a=%d, b=%d\n", *a, *b);
  int temp = *a;
  *a = *b;      // 通过解引用修改原变量
  *b = temp;    // 完成实际交换
}

int main() {
  int a = 10, b = 20;
  swap(&a, &b);  // ✅ 类型匹配
  printf("交换后: a=%d, b=%d", a, b); // 输出：a=20, b=10
  return 0;
}


```

## 11. 结构体

### 11.1 结构体定义

基本语法：

- 结构体是一种用户自定义的数据类型，它允许将不同类型的数据组合在一起形成一个整体。
- 示例代码：

```c
#include <stdio.h>
#include <string.h>  // 引入字符串处理函数库
// 写法1
struct Books {
  char title[50];
  char author[50];
  char subject[100];
  int book_id;
};

int main() {

  struct Books Book1;        // 声明 Book1，类型为 Books  未初始化
  strcpy(Book1.title, "C Programming");
  strcpy(Book1.author, "Nuha Ali");
  strcpy(Book1.subject, "C Programming Tutorial");
  Book1.book_id = 12345;


  printf("Book 1 title : %s\n", Book1.title);   // %s 用于输出字符串
  printf("Book 1 author : %s\n", Book1.author);
  printf("Book 1 subject : %s\n", Book1.subject);
  printf("Book 1 id : %d\n", Book1.book_id);  // %d 用于输出整数
  

  return 0;
}


// 写法2： 初始化赋值   推荐这种写法
struct Books {
  char title[50];
  char author[50];
  char subject[100];
  int book_id;
};

int main() {
// 声明 Book1，类型为 Books并初始化赋值
  struct Books Book1={
    "C Programming",
    "Nuha Ali",
    "C Programming Tutorial",
    1234567
  };

  printf("Book 1 title : %s\n", Book1.title);   // %s 用于输出字符串
  printf("Book 1 author : %s\n", Book1.author);
  printf("Book 1 subject : %s\n", Book1.subject);
  printf("Book 1 id : %d\n", Book1.book_id);  // %d 用于输出整数
  

  return 0;
}



// 写法3：定义结构体类型并直接初始化赋值   不推荐这个写法 应该定义和初始化分开写

struct Books {
  char title[50];
  char author[50];
  char subject[100];
  int book_id;
} Book1={
    "初始化赋值",
    "Nuha Ali",
    "C Programming Tutorial",
    12345678
};

int main() {
  printf("Book 1 title : %s\n", Book1.title);   // %s 用于输出字符串
  printf("Book 1 author : %s\n", Book1.author);
  printf("Book 1 subject : %s\n", Book1.subject);
  printf("Book 1 id : %d\n", Book1.book_id);  // %d 用于输出整数
  return 0;
}
```

### 11.2 结构作为函数参数

- 您可以把结构作为函数参数，传参方式与其他类型的变量或指针类似。您可以使用实例中的方式来访问结构变量：

```c
#include <stdio.h>
struct Books {
  char title[50];
  char author[50];
  char subject[100];
  int book_id;
};

void print(struct Books book){
  printf("Book title : %s\n", book.title);
  printf("Book author : %s\n", book.author);
  printf("Book subject : %s\n", book.subject);
  printf("Book id : %d\n", book.book_id);
}


int main() {
// 声明 Book1，类型为 Books并初始化赋值
  struct Books Book1={
    "C Programming",
    "Nuha Ali",
    "C Programming Tutorial",
    1234567
  };

  struct Books Book2={
    "D Programming",
    "Nuha",
    "D",
    123
  };

  struct Books Book3={
    "E Programming",
    "王五",
    "E",
    123456
  };

  print(Book1);
  print(Book2);
  print(Book3);

  return 0;
}
```

### 11.3 结构体指针

- 结构体指针是一种指向结构体的指针。您可以通过结构体指针来访问结构体成员。

```c
#include <stdio.h>
#include <string.h>  // 引入字符串处理函数库

struct Books {
  char title[50];
  char author[50];
  char subject[100];
  int book_id;
};

void print(struct Books *book){
  printf("Book title : %s\n", book->title);  // 使用指针访问结构体成员  -> 符号用于访问指针指向的结构体成员
  printf("Book author : %s\n", book->author);
  printf("Book subject : %s\n", book->subject);
  printf("Book id : %d\n", book->book_id);
  strcpy(book->title, "自定义标题");
}


int main() {
// 声明 Book1，类型为 Books并初始化赋值
  struct Books Book1={
    "C Programming",
    "Nuha Ali",
    "C Programming Tutorial",
    1234567
  };

  print(&Book1); // 直接传递地址


  printf("Book 1 title : %s\n", Book1.title);   // %s 用于输出字符串   变量因为指针传递，所以这里的title已经被外层函数print修改了

  return 0;
}
```

## 12. 预处理器指令  -- 由预处理器执行的一段文本指令，在编译之前被处理

- 如```#define, #ifdef, #endif ，#ifndef```等，用于编译预处理
- 如下：

  | 指令 | 说明 |
  | --- | --- |
  | #define | 定义宏常量或宏函数。例如：#define PI 3.14159265358979323846 |
  | #ifdef | 如果定义了宏,则返回真 |
  | #ifndef | 如果没有定义宏,则返回真 |
  | #endif | 结束条件编译，结束一个#if...#else条件编译块 |

***#define 指令***

- 定义宏常量或宏函数。例如：#define PI 3.14159265358979323846
- 示例代码：

```c
#include <stdio.h>
#define NAME "WangWu"  // 定义常量

int main() {
  printf("Hello, %s\n", NAME);  // 宏替换为 "WangWu"
  printf("Hello, %s\n", "WangWu");  // 直接字符串  等同于上面的宏定义  打印出来一样
  return 0;
}
```

***#ifdef #endif 指令***

- 用于判断宏是否定义。例如：
- 示例代码：

```c
#include <stdio.h>

#define DEBUG    // 定义宏变量，下面的代码ifdef...#endif 会根据这个变量是否定义来判断是否执行   
#ifdef DEBUG
  #define MESSAGE "Debug mode"
#endif

int main() {
  // 打印信息
  #ifdef DEBUG
    printf("DEBUG: %s\n", MESSAGE);
  #endif
  return 0;
}
```

### 12.1 宏定义介绍和用法 -- 宏常量

- 宏定义是一种简单的文本替换机制，用于定义常量和函数。一般有```#define```关键字。

```c
#include <stdio.h>
#define NAME "WangWu"  // 定义常量

int main() {
  printf("Hello, %s\n", NAME);  // 宏替换为 "WangWu"
  printf("Hello, %s\n", "WangWu");  // 直接字符串  等同于上面的宏定义  打印出来一样
  return 0;
}
```

### 12.2 宏定义介绍和用法 -- 宏函数

***宏定义函数和普通函数的区别：***

```c
#include <stdio.h>
#define SQUARE(x) (x) * (x) // 定义宏函数   // 最好加上括号  避免优先级问题  防止优先级问题 比如 SQUARE(a+b) 应该替换为 (a+b)*(a+b) 否则会变成 a+b*a+b 导致超预期的错误

int square(int x){  // 定义函数
  return x * x;
}
int main() {
  int a = 5;
  int b = SQUARE(a);  // 宏替换为 a * a
  int c = square(a);  // 调用函数   等同于上面的宏定义  打印出来一样

  printf("%d\n", b);  // 输出 25
  printf("%d\n", c);  // 输出 25
  return 0;
}
```

***宏延续运算符（\）***

- 一个宏通常写在一个单行上。但是如果宏太长，一个单行容纳不下，则使用宏延续运算符（\）。例如：

```c
#define square(x) \
    ((x) * (x))
```

***标记粘贴运算符（##）***

- 标记粘贴运算符（##）用于在宏定义中将两个标记合并为一个。例如：
- 示例代码：

```c
// 标记黏贴运算符  ##
#include <stdio.h>
#define CONCAT(x, y) x##y   // 定义宏函数 ## 会拼接两个参数为一个变量名
int main() {
  int ab=30;
  int c = CONCAT(a, b);  // 宏替换为 int c=ab
  printf("%d\n", c);  // 输出 30
  return 0;
}
```

## 13. typedef 关键字  -- 由编译器执行的

- typedef 关键字用于为数据类型定义别名。例如：
- 示例代码：

```c
#include <stdio.h>
typedef unsigned int myInt;  // 定义别名
int main() {
  myInt a = 10;  // 等同于 int a = 10;
  printf("%d\n", a);
  return 0;
}

// 类型定义之后，标识符 myInt可作为类型 unsigned int 的缩写，例如：

// 原来写法：
// unsigned int a;

// 新写法：
// myInt a;

```
