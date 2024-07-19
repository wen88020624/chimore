# 使用 Node.js 20 作为构建阶段的基础镜像
FROM node:20 AS build-stage

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件
COPY . .

# 构建项目
RUN npm run build

# 使用 Nginx 作为生产阶段的基础镜像
FROM nginx:alpine

# 复制构建后的文件到 Nginx 的静态文件目录
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 暴露 Nginx 的端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
