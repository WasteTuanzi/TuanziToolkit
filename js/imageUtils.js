// 获取图片尺寸的工具函数
export function getImageDimensions(base64Image) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function() {
            resolve({
                width: this.naturalWidth,
                height: this.naturalHeight
            });
        };
        img.onerror = function() {
            reject(new Error('Failed to load image'));
        };
        img.src = base64Image;
    });
}

// 导出到全局作用域
window.getImageDimensions = getImageDimensions;