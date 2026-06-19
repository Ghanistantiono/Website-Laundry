// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

if(mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
if(closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMobileMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if(question) {
        question.addEventListener('click', () => {
            // Close other open answers
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    if(otherAnswer) otherAnswer.classList.remove('open');
                    if(otherIcon) otherIcon.classList.remove('open');
                }
            });

            // Toggle current answer
            if(answer) answer.classList.toggle('open');
            if(icon) icon.classList.toggle('open');
        });
    }
});

// Form Handling & Validation
const pickupForm = document.getElementById('pickup-form');
const waBtn = document.getElementById('btn-wa');
const emailBtn = document.getElementById('btn-email');

function validateForm() {
    const nama = document.getElementById('nama').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const layanan = document.getElementById('layanan').value;
    const alamat = document.getElementById('alamat').value.trim();

    if (!nama || !whatsapp || !layanan || !alamat) {
        alert('Mohon lengkapi field yang wajib diisi (*): Nama, Nomor WhatsApp, Jenis Layanan, dan Alamat Pickup.');
        return false;
    }
    return true;
}

function getFormData() {
    return {
        nama: document.getElementById('nama').value.trim(),
        whatsapp: document.getElementById('whatsapp').value.trim(),
        email: document.getElementById('email').value.trim() || '-',
        layanan: document.getElementById('layanan').value,
        alamat: document.getElementById('alamat').value.trim(),
        tanggal: document.getElementById('tanggal').value || '-',
        jam: document.getElementById('jam').value || '-',
        catatan: document.getElementById('catatan').value.trim() || '-'
    };
}

if(waBtn) {
    waBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (validateForm()) {
            const data = getFormData();
            const text = `Halo Admin Easy Clean, saya ingin menggunakan layanan laundry.\n\n` +
                         `Nama: ${data.nama}\n` +
                         `Nomor WhatsApp: ${data.whatsapp}\n` +
                         `Email: ${data.email}\n` +
                         `Jenis Layanan: ${data.layanan}\n` +
                         `Alamat Pickup: ${data.alamat}\n` +
                         `Tanggal Pickup: ${data.tanggal}\n` +
                         `Jam Pickup: ${data.jam}\n` +
                         `Catatan Tambahan: ${data.catatan}`;
            
            const encodedText = encodeURIComponent(text);
            const waUrl = `https://wa.me/6287878851973?text=${encodedText}`;
            window.open(waUrl, '_blank');
        }
    });
}

if(emailBtn) {
    emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (validateForm()) {
            const data = getFormData();
            const body = `Ada permintaan layanan laundry baru dari website Easy Clean.\n\n` +
                         `Nama Pelanggan: ${data.nama}\n` +
                         `Nomor WhatsApp: ${data.whatsapp}\n` +
                         `Email: ${data.email}\n` +
                         `Jenis Layanan: ${data.layanan}\n` +
                         `Alamat Pickup: ${data.alamat}\n` +
                         `Tanggal Pickup: ${data.tanggal}\n` +
                         `Jam Pickup: ${data.jam}\n` +
                         `Catatan Tambahan: ${data.catatan}`;
            
            const encodedBody = encodeURIComponent(body);
            const subject = encodeURIComponent('[Easy Clean] Permintaan Pickup Laundry Baru');
            const emailUrl = `mailto:ghanis.tantiono73@gmail.com?subject=${subject}&body=${encodedBody}`;
            window.location.href = emailUrl;
        }
    });
}

// Header Scroll Effect
const header = document.getElementById('main-header');
const desktopNav = document.getElementById('desktop-nav');
const mobileMenuBtnColor = document.getElementById('mobile-menu-btn');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.remove('bg-transparent');
            header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
            
            if(desktopNav) { desktopNav.classList.remove('text-white'); desktopNav.classList.add('text-[#113255]'); }
            if(mobileMenuBtnColor) { mobileMenuBtnColor.classList.remove('text-white'); mobileMenuBtnColor.classList.add('text-[#113255]'); }
        } else {
            header.classList.add('bg-transparent');
            header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
            
            if(desktopNav) { desktopNav.classList.add('text-white'); desktopNav.classList.remove('text-[#113255]'); }
            if(mobileMenuBtnColor) { mobileMenuBtnColor.classList.add('text-white'); mobileMenuBtnColor.classList.remove('text-[#113255]'); }
        }
    });
}
