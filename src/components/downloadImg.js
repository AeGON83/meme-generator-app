

export default function downloadImage() {
    const div = document.getElementsByClassName('img-container')[0]
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const scale = window.devicePixelRatio;

    canvas.width = div.offsetWidth * scale;
    canvas.height = div.offsetHeight * scale;

    html2canvas(div, {
        canvas: canvas,
        useCORS: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: -window.scrollY,
        width: canvas.width,
        height: canvas.height
    }).then(function (canvas) {
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'my-image.png';
        link.href = dataUrl;
        link.click();
    });
}