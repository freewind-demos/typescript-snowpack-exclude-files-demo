TypeScript Snowpack Exclude Files Demo
=================================

Snowpack会把mount范围内的每一个可能的文件都编译为esm以供使用浏览器使用。

如果某个文件中包含了对node的引用，将会报错。如果那个文件不会被真的使用到，可以把它exclude掉。

注意exclude的时候，其路径不是以项目根目录为根，而是以mount之后的目录为根。

```
npm install
npm run demo
```

将会在build下生成最终文件。

如果exclude不对，将会报错，如：

```
[snowpack] Package "path" not found. Have you installed it? 
```
