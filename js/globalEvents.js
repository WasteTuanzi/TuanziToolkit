function addGlobalMouseListener(dotNetHelper) {
    document.addEventListener('mouseup', function (e) {
        dotNetHelper.invokeMethodAsync('HandleGlobalMouseUp');
    });

    document.addEventListener('touchend', function (e) {
        dotNetHelper.invokeMethodAsync('HandleGlobalMouseUp');
    });
}

// 导出函数
window.addGlobalMouseListener = addGlobalMouseListener;