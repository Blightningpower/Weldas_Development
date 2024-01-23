// 2.0

const weldingWorker = document.querySelector('.welding-worker');
const existingFooterContent = document.querySelector('.existing-footer-content');
const emailForm = document.querySelector('.email-form');
const topFooter = document.querySelector('.top-footer');

weldingWorker.addEventListener('click', () => {
  weldingWorker.classList.add('welding-animation');
  setTimeout(() => {
    topFooter.classList.add('fire');
  }, 0);

  setTimeout(() => {
    topFooter.classList.add('fire');
    existingFooterContent.style.animation = 'slideDown 2s';
    existingFooterContent.addEventListener('animationend', () => {
      existingFooterContent.style.display = 'none';
      emailForm.classList.add('visible');
      weldingWorker.style.visibility = 'hidden'; // Use visibility instead of display to preserve space
    });
  }, 5000);
});
