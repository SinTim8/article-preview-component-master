const shareBtn = document.querySelector('.shareBtn');
const shareTooltip = document.querySelector('#share-tooltip');

shareBtn.addEventListener('click', () => {
    shareBtn.classList.toggle('is-active');
    shareTooltip.classList.toggle('is-active');
    const isOpen = shareTooltip.classList.contains('is-active');
    shareBtn.setAttribute('aria-expanded', isOpen);
});
