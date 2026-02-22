const express = require('express');
const app = express();

// 【关键的第三行】优先使用服务器分配的端口，如果没有就用 3000
const port = process.env.PORT || 8080;

// 允许接收 JSON 格式的数据
app.use(express.json());

// 根路径测试
app.get('/', (req, res) => {
  res.send('🎉 恭喜！Kiki 的网关运行成功啦！');
});

// 接收 Kelivo 消息的信箱
app.post('/api/chat', (req, res) => {
  console.log('收到 Kelivo 的消息：', req.body);
  res.json({
    success: true,
    message: '网关收到消息！',
    data: req.body
  });
});

// 启动网关
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 网关已在端口 ${port} 启动`);
});

