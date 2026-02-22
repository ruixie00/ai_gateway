const express = require('express');
const app = express();
const port = 3000;

// 允许接收JSON格式的数据
app.use(express.json());

// 这是网关的"大门"，有人访问就会看到这个
app.get('/', (req, res) => {
  res.send('🎉 恭喜！网关运行成功！');
});

// 这是接收Kelivo消息的"信箱"
app.post('/api/chat', (req, res) => {
  console.log('收到Kelivo的消息：', req.body);
  
  // 先回复一个测试消息
  res.json({
    success: true,
    message: '网关收到你的消息啦！',
    data: req.body
  });
});

// 启动网关
app.listen(port, () => {
  console.log(`🚀 网关启动成功！访问地址：http://localhost:${port}`);
});