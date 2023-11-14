1. 创建一个 pinia（根存储）并将其传递给应用程序.
2. 通过 defineStore 定义数据模块
   ```js
   const useDemo = defineStore("demo", {
     state() {
       return {
         count: 0,
       };
     },
   });
   ```
3. 使用数据及修改数据

```js
const demo = useDemo();
// 使用
demo.count;
// 修改方法1 优点：直观方便快捷 缺点：不能一次性修改多个
demo.count = 1234;
// 修改方法2 优点：一次性修改多个数据
demo.$patch({ count: 4321 });
// 数组除了上述修改的方式还具备使用数据方法（push、pop、shift、unshift、sort、splice、reverse）修改数据
```
