// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize basic functionality
    initContactButtons();
    initVideoHandling();
    initBasicHoverEffects();
    initSmoothScrolling();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Basic contact button interactions
function initContactButtons() {
    const contactButtons = document.querySelectorAll('.contact-btn');
    
    contactButtons.forEach(button => {
        // Add basic click feedback
        button.addEventListener('click', function(e) {
            // Add simple feedback animation
            this.style.transform = 'translateY(-4px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-4px) scale(1)';
            }, 150);
            
            // Show success feedback for phone number
            if (this.classList.contains('phone-btn')) {
                showContactFeedback('Номер телефона скопирован!');
            } else if (this.classList.contains('email-btn')) {
                showContactFeedback('Открываем почту...');
            } else if (this.classList.contains('telegram-btn')) {
                showContactFeedback('Переходим в Telegram...');
            }
        });
    });
}

// Show simple contact feedback
function showContactFeedback(message) {
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #8b5cf6, #ec4899);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 1000;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.style.opacity = '1';
        feedback.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        feedback.style.opacity = '0';
        feedback.style.transform = 'translateX(100px)';
        setTimeout(() => feedback.remove(), 300);
    }, 3000);
}

// Basic video handling
function initVideoHandling() {
    const videoContainer = document.querySelector('.video-container');
    const videoIframe = document.querySelector('.portfolio-video');
    
    if (videoIframe && videoContainer) {
        // Create simple loading indicator
        const loadingDiv = document.createElement('div');
        loadingDiv.innerHTML = `
            <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #e0e0e0;
                text-align: center;
                z-index: 2;
                font-weight: 500;
            ">
                <div style="
                    width: 40px;
                    height: 40px;
                    border: 3px solid rgba(236, 72, 153, 0.3);
                    border-top: 3px solid #ec4899;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 10px;
                "></div>
                <p>Загрузка портфолио...</p>
            </div>
        `;
        
        // Add spinner animation
        const spinnerStyle = document.createElement('style');
        spinnerStyle.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(spinnerStyle);
        
        videoContainer.appendChild(loadingDiv);
        
        // Handle iframe load
        videoIframe.addEventListener('load', function() {
            setTimeout(() => {
                loadingDiv.style.opacity = '0';
                setTimeout(() => {
                    loadingDiv.remove();
                }, 300);
            }, 1500);
        });
    }
}

// Basic hover effects
function initBasicHoverEffects() {
    // Experience items basic hover
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(12px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Skills items basic hover
    const skillItems = document.querySelectorAll('.skills-list li');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(12px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Language items basic hover
    const languageItems = document.querySelectorAll('.language-item');
    languageItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            const level = this.querySelector('.level');
            if (level) {
                level.style.transform = 'scale(1.05)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            const level = this.querySelector('.level');
            if (level) {
                level.style.transform = 'scale(1)';
            }
        });
    });
    
    // Video container basic hover
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        videoContainer.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        videoContainer.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Project cards hover
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Copy to clipboard functionality for phone number (desktop only)
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
        });
    }
}

// Enhanced phone button functionality
document.addEventListener('DOMContentLoaded', function() {
    const phoneBtn = document.querySelector('.phone-btn');
    if (phoneBtn) {
        phoneBtn.addEventListener('click', function(e) {
            // On mobile, allow normal tel: behavior
            if (window.innerWidth <= 768) {
                return; // Let the default behavior happen
            }
            
            // On desktop, copy to clipboard
            e.preventDefault();
            const phoneNumber = '+79773387774';
            copyToClipboard(phoneNumber).then(() => {
                showContactFeedback('Номер телефона скопирован!');
            }).catch(() => {
                console.log('Copy failed');
            });
        });
    }
});

// Ensure all text is visible and properly rendered
function ensureTextVisibility() {
    // Force repaint to ensure all text renders properly
    const allTextElements = document.querySelectorAll('h1, h2, h3, p, li, span');
    allTextElements.forEach(element => {
        element.style.opacity = '0.99';
        setTimeout(() => {
            element.style.opacity = '1';
        }, 10);
    });
}

// Call text visibility function on load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(ensureTextVisibility, 100);
});

// Performance optimization: Respect user's motion preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--duration-normal', '0s');
    document.documentElement.style.setProperty('--duration-fast', '0s');
}

// Export basic functions for debugging
window.ResumeApp = {
    initContactButtons,
    initVideoHandling,
    initBasicHoverEffects,
    ensureTextVisibility,
    copyToClipboard
};