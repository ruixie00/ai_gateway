# 第一步：找一个带 Node.js 的房间
FROM node:18-alpine

# 第二步：设置工作目录
WORKDIR /app

# 第三步：把你的 package.json 复制进去
COPY package*.json ./

# 第四步：安装 npm 插件（这次绝对有 npm 了！）
RUN npm install

# 第五步：把所有代码复制进去
COPY . .

# 第六步：告诉 Zeabur 我们的端口是 8080
EXPOSE 8080

# 第七步：启动命令
CMD ["node", "index.js"]
