


  const pages = document.querySelectorAll('.page');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  let currentPage = 0;

  function showPage(index) {
    if (index < 0 || index >= pages.length) return;

    // إخفاء الصفحة الحالية
    pages[currentPage].classList.add('fade-out');
    setTimeout(() => {
      pages[currentPage].style.display = 'none';
      pages[currentPage].classList.remove('fade-out');

      // إظهار الصفحة الجديدة
      pages[index].style.display = 'flex';
      pages[index].classList.add('fade-in');

      // تمرير الشاشة لأعلى الصور
      document.querySelector(".images").scrollIntoView({ behavior: "smooth" });

      // إعادة تعيين الأنيميشن بعد عرضها
      setTimeout(() => {
        pages[index].classList.remove('fade-in');
      }, 500);

      currentPage = index;

      // تحديث عرض الأزرار
      prevBtn.style.display = currentPage === 0 ? 'none' : 'inline-block';
      nextBtn.style.display = currentPage === pages.length - 1 ? 'none' : 'inline-block';
    }, 400);
  } // ← هذا هو القوس اللي كان ناقص

  nextBtn.addEventListener('click', () => showPage(currentPage + 1));
  prevBtn.addEventListener('click', () => showPage(currentPage - 1));

  // البداية: عرض الصفحة الأولى
  pages.forEach((page, i) => {
    page.style.display = i === 0 ? 'flex' : 'none';
  });
  prevBtn.style.display = 'none';
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const icon = document.querySelector('.VidBtn i');

function showVideo(videoToShow, videoToHide, mute) {
  videoToHide.pause();
  videoToHide.classList.remove('fade-in');
  videoToHide.style.display = 'none';

  videoToShow.style.display = 'block';
  videoToShow.classList.add('fade-in');
  videoToShow.muted = mute;
  videoToShow.currentTime = 0;
  videoToShow.play();

  if (videoToShow.muted) {
    icon.classList.remove('fa-volume-high');
    icon.classList.add('fa-volume-xmark');
  } else {
    icon.classList.remove('fa-volume-xmark');
    icon.classList.add('fa-volume-high');
  }
}

function playVideo1() {
  showVideo(video1, video2, true); // خلي الفيديو الأول يبدأ مكتوم (true)
}

function playVideo2() {
  showVideo(video2, video1, true); // الفيديو الثاني مكتوم دائماً
}

video1.onended = () => {
  playVideo2();
};

video2.onended = () => {
  playVideo1();
};

function toggleMute() {
  const activeVideo = video2.style.display === 'block' ? video2 : video1;

  if (activeVideo.muted) {
    activeVideo.muted = false;
    icon.classList.remove('fa-volume-xmark');
    icon.classList.add('fa-volume-high');
  } else {
    activeVideo.muted = true;
    icon.classList.remove('fa-volume-high');
    icon.classList.add('fa-volume-xmark');
  }
}

// شغل الفيديو الأول مباشرة بعد تحميل الصفحة
window.onload = () => {
  playVideo1();
};


  


