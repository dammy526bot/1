// 定義合法的網站列表
const trustedWebsites = [
    "discord.com", // Discord
    "google.com", // Google
    "github.com"  // GitHub
];

// 檢查當前網站 URL 是否在合法網站列表中
function isTrustedWebsite() {
    const currentUrl = window.location.href;
    for (let i = 0; i < trustedWebsites.length; i++) {
        if (currentUrl.includes(trustedWebsites[i])) {
            return true;  // 這是可信網站
        }
    }
    return false;  // 這是有毒或假冒網站
}

// 如果不是合法網站，顯示警告
if (!isTrustedWebsite()) {
    alert("警告：你正在訪問的網站可能是釣魚網站或不安全！請小心！");
}
