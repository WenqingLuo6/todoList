# Todo List Project

这是一个使用 React 和 Material-UI库 构建的 Todo List 项目。项目通过父子组件之间的 `props` 传递数据和回调函数的方式实现组件间的数据共享, 使用localStorage实现数据本地持久化。

## 安装和启动

### 环境需求

- Node.js
- npm 包管理工具

### 安装步骤

1. 克隆项目仓库到本地：

`   git clone https://github.com/yourusername/todolist-project.git
`
   
2. 安装依赖：

`npm install`
### 启动项目：

`npm start`

启动命令会在本地服务器上运行应用程序。在浏览器中访问 http://localhost:3000 查看运行效果

## 数据共享方案选型原因
本项目采用父子组件之间通过 props 传递数据和回调函数的方式进行数据共享。主要原因如下：

1. 简单易用：使用 props 进行数据传递和回调函数进行事件处理是 React 中最基础和常见的模式，易于理解和使用。
2. 明确的数据流向：父组件通过 props 向子组件传递数据，子组件通过回调函数向父组件传递事件，数据流向明确，有助于维护和调试。
3. 适用于小型项目：对于相对简单和小型的项目，这种方式足够满足需求，无需引入复杂的状态管理库。