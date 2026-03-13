// 读取合并后的配置文件
async function loadConfig() {
  try {
    const response = await fetch('./app-config.json');
    if (!response.ok) throw new Error('配置文件加载失败');
    return await response.json();
  } catch (err) {
    console.error('配置加载错误：', err);
    // 兜底默认配置
    return {
      welcome: { content: '欢迎使用' },
      countdown: { targetDate: '2024-12-31', text: '距离目标时间' },
      wifi: { name: '默认WiFi', password: '12345678' },
      layout: {
        welcomeContent: { top: '10vh', left: '0' },
        weatherTime: { right: '40px' }
      }
    };
  }
}

// 渲染倒计时
function renderCountdown(targetDate, text) {
  const countdownText = document.getElementById('countdownText');
  const countdownValue = document.getElementById('countdownValue');
  countdownText.textContent = text;

  function updateCountdown() {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target - now;

    if (diff <= 0) {
      countdownValue.textContent = '已到期';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownValue.textContent = `${days}天 ${hours}时 ${minutes}分 ${seconds}秒`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// 渲染WIFI信息
function renderWifi(wifiConfig) {
  document.getElementById('wifiName').textContent = wifiConfig.name;
  document.getElementById('wifiPwd').textContent = wifiConfig.password;
}

// 渲染时间
function renderTime() {
  const timeEl = document.getElementById('currentTime');
  
  function updateTime() {
    const now = new Date();
    timeEl.textContent = now.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }

  updateTime();
  setInterval(updateTime, 1000);
}

// 渲染天气（示例：实际需对接天气API）
async function renderWeather(weatherConfig) {
  const weatherEl = document.getElementById('currentWeather');
  try {
    // 示例：替换为真实API请求
    // const res = await fetch(`https://api.weather.com/...?city=${weatherConfig.city}&key=${weatherConfig.apiKey}`);
    // const data = await res.json();
    // weatherEl.textContent = `${data.temp}°C ${data.condition}`;
    
    // 模拟数据
    weatherEl.textContent = '25°C 晴';
  } catch (err) {
    weatherEl.textContent = '天气加载失败';
    console.error('天气接口错误：', err);
  }
}

// 初始化页面
async function init() {
  const config = await loadConfig();
  
  // 渲染各模块
  renderCountdown(config.countdown.targetDate, config.countdown.text);
  renderWifi(config.wifi);
  renderTime();
  await renderWeather(config.weather);

  // 可选：动态调整布局（如果需要从配置动态控制）
  const welcomeContent = document.querySelector('.welcome-content');
  welcomeContent.style.top = config.layout.welcomeContent.top;
  welcomeContent.style.left = config.layout.welcomeContent.left;

  const weatherTimeBox = document.querySelector('.weather-time-box');
  weatherTimeBox.style.right = config.layout.weatherTime.right;
  weatherTimeBox.style.top = config.layout.welcomeContent.top; // 与welcome-content顶部对齐
}

// 页面加载后初始化
window.addEventListener('DOMContentLoaded', init);