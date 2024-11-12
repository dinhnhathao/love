function startAnimation() {
    const button = document.getElementById('button');
    const fireworksContainer = document.getElementById('fireworks');
    const starsContainer = document.getElementById('stars');
    const loveMessage = document.getElementById('loveMessage');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const earth = document.getElementById('earth');

    // Phát nhạc
    backgroundMusic.play();

    // Ẩn nút và chuyển nền thành màu hồng tối trước, rồi sang đen
    button.style.display = 'none';
    document.body.style.backgroundColor = '#d63384';

    setTimeout(() => {
        document.body.style.backgroundColor = 'black';

        // Hiển thị các ngôi sao sau 1 giây
        setTimeout(() => {
            starsContainer.style.display = 'block';
            createStars();
        }, 1000);

        // Hiệu ứng pháo hoa sau 4 giây (kéo dài 8 giây)
        setTimeout(() => {
            fireworksContainer.style.display = 'block';
            createFireworks();
        }, 4000);

        // Hiệu ứng bắn tim diễn ra ở giây thứ 12 (kéo dài 5 giây)
        setTimeout(() => {
            createHearts();
        }, 12000);

        // Trái đất sẽ xuất hiện ở giây thứ 18 (kéo dài 7 giây)
        setTimeout(() => {
            earth.style.display = 'block';
        }, 18000);

        // Hiệu ứng Love Message xuất hiện ở giây thứ 26
        setTimeout(() => {
            showLoveMessage();
        }, 26000);

        // Mèo chạy xuất hiện ở giây thứ 28
        setTimeout(() => {
            showCatGif();
        }, 28000);

    }, 2000);
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;
        starsContainer.appendChild(star);
    }
}

function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    const colors = ['#f20044', '#9B37ED', '#FFFFFF'];
    let count = 1000;

    const interval = setInterval(() => {
        if (count > 0) {
            const dot = document.createElement('div');
            const size = Math.random() * 10 + 5;
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;

            dot.style.position = 'absolute';
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            dot.style.borderRadius = '50%';
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            dot.classList.add('sparkle');
            fireworksContainer.appendChild(dot);

            setTimeout(() => {
                dot.remove();
            }, 1000);

            count--;
        } else {
            clearInterval(interval);
        }
    }, 7);

    // Tự động ẩn pháo hoa sau 8 giây
    setTimeout(() => {
        fireworksContainer.style.display = 'none';
    }, 8000);
}

function createHearts() {
    const heartColors = ['red', 'pink', 'purple'];
    let count = 600;

    const interval = setInterval(() => {
        if (count > 0) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '💗';
            const x = Math.random() * window.innerWidth;

            heart.style.left = `${x}px`;
            heart.style.top = `-30px`;
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.style.transform = `translateY(${window.innerHeight + 30}px)`;
                heart.style.opacity = 0;
            }, 10);

            setTimeout(() => {
                heart.remove();
            }, 5100);

            count--;
        } else {
            clearInterval(interval);
        }
    }, 15);
}

function showLoveMessage() {
    const loveMessage = document.getElementById('loveMessage');
    const earth = document.getElementById('earth');
    
    // Hiển thị love message
    loveMessage.style.opacity = 1;

    // Di chuyển trái đất lên 300px sau khi love message xuất hiện
    earth.style.transition = 'top 5s ease'; // Thêm hiệu ứng di chuyển
    earth.style.top = `${parseInt(window.getComputedStyle(earth).top, 10) - 150}px`; // Di chuyển trái đất lên 300px
}


function showCatGif() {
    const catGif = document.getElementById('catGif');
    catGif.style.display = 'block';
    catGif.style.animation = 'moveCat 5s forwards';
}
