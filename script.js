// DOM Elements
const modal = document.getElementById('unitModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');
const cards = document.querySelectorAll('.card');
const lastUpdateElement = document.getElementById('last-update');

// Unit data
const unitData = {
    'thanh-uy': {
        name: 'THÀNH ỦY CẦN THƠ',
        description: 'Ban lãnh đạo Đảng bộ thành phố Cần Thơ',
        units: [
            'Văn phòng Thành ủy',
            'Ban Tổ chức Thành ủy',
            'Ban Tuyên giáo và Dân vận Thành ủy',
            'Ban Nội chính Thành ủy',
            'Ban Dân vận Thành ủy',
            'Ban Kinh tế Thành ủy'
        ],
        status: '6/6 đơn vị đã cập nhật',
        color: '#e74c3c'
    },
    'hdnd': {
        name: 'HĐND TP CẦN THƠ',
        description: 'Hội đồng Nhân dân thành phố Cần Thơ',
        units: [
            'Văn phòng HĐND',
            'Ban Kinh tế - Ngân sách',
            'Ban Văn hóa - Xã hội',
            'Ban Pháp chế',
            'Ban Dân tộc và Tôn giáo'
        ],
        status: '5/5 đơn vị đã cập nhật',
        color: '#e74c3c'
    },
    'dbqh': {
        name: 'ĐOÀN ĐBQH TP CẦN THƠ',
        description: 'Đoàn Đại biểu Quốc hội thành phố Cần Thơ',
        units: [
            'Văn phòng Đoàn ĐBQH',
            'Tổ Thư ký',
            'Tổ Giúp việc'
        ],
        status: '3/3 đơn vị đã cập nhật',
        color: '#e74c3c'
    },
    'ubnd': {
        name: 'UBND TP CẦN THƠ',
        description: 'Ủy ban Nhân dân thành phố Cần Thơ',
        units: [
            'Văn phòng UBND',
            'Ban Quản lý Đầu tư',
            'Ban Quản lý Dự án',
            'Ban Tài chính - Kế toán',
            'Ban Hành chính - Tổ chức'
        ],
        status: '5/5 đơn vị đã cập nhật',
        color: '#e74c3c'
    },
    'van-phong': {
        name: 'VĂN PHÒNG, CÁC BAN XDĐ VÀ ĐƠN VỊ TRỰC THUỘC',
        description: 'Quản lý hành chính và các đơn vị trực thuộc',
        units: [
            'Văn phòng Thành ủy',
            'Ban Tổ chức Thành ủy',
            'Ban Tuyên giáo và Dân vận Thành ủy',
            'Ban Nội chính Thành ủy',
            'Trường Chính trị thành phố',
            'Báo và Phát thanh, Truyền hình Cần Thơ'
        ],
        status: '6/6 đơn vị đã cập nhật',
        color: '#27ae60'
    },
    'dang-uy': {
        name: 'ĐẢNG ỦY TRỰC THUỘC THÀNH ỦY',
        description: 'Các đảng ủy trực thuộc Thành ủy',
        units: [
            'Đảng ủy Khối Dân chính Đảng',
            'Đảng ủy Khối Doanh nghiệp',
            'Đảng ủy Khối Cơ quan',
            'Đảng ủy Khối Trường học'
        ],
        status: '4/4 đơn vị đã cập nhật',
        color: '#27ae60'
    },
    'phuong-xa': {
        name: 'ĐẢNG ỦY PHƯỜNG XÃ',
        description: 'Đảng ủy cấp phường, xã',
        units: [
            'Đảng ủy phường An Nghiệp',
            'Đảng ủy phường An Cư',
            'Đảng ủy phường An Hòa',
            'Đảng ủy phường An Lạc',
            'Đảng ủy phường An Phú',
            'Đảng ủy phường Cái Khế'
        ],
        status: '6/6 đơn vị đã cập nhật',
        color: '#27ae60'
    },
    'mttq': {
        name: 'ỦY BAN MTTQ & CÁC TỔ CHỨC CT-XH',
        description: 'Mặt trận Tổ quốc và các tổ chức chính trị - xã hội',
        units: [
            'Ủy ban MTTQ Việt Nam TP Cần Thơ',
            'Liên đoàn Lao động TP',
            'Đoàn Thanh niên Cộng sản HCM',
            'Hội Liên hiệp Phụ nữ TP',
            'Hội Nông dân TP',
            'Hội Cựu chiến binh TP'
        ],
        status: '6/6 đơn vị đã cập nhật',
        color: '#27ae60'
    },
    'so-ban': {
        name: 'SỞ BAN NGÀNH',
        description: 'Các sở, ban, ngành chuyên môn',
        units: [
            'Sở Nội vụ',
            'Sở Tài chính',
            'Sở Kế hoạch và Đầu tư',
            'Sở Tài nguyên và Môi trường',
            'Sở Giao thông Vận tải',
            'Sở Xây dựng',
            'Sở Nông nghiệp và PTNT',
            'Sở Công thương'
        ],
        status: '8/8 đơn vị đã cập nhật',
        color: '#27ae60'
    },
    'ubnd-phuong': {
        name: 'UBND PHƯỜNG XÃ',
        description: 'Ủy ban Nhân dân phường, xã',
        units: [
            'UBND phường An Nghiệp',
            'UBND phường An Cư',
            'UBND phường An Hòa',
            'UBND phường An Lạc',
            'UBND phường An Phú',
            'UBND phường Cái Khế'
        ],
        status: '6/6 đơn vị đã cập nhật',
        color: '#27ae60'
    }
};

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    addEventListeners();
});

function initializeApp() {
    // Set last update time
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    lastUpdateElement.textContent = now.toLocaleDateString('vi-VN', options);
    
    // Add loading animation to cards
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
}

function addEventListeners() {
    // Card click events
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            showUnitDetails(category);
        });
        
        // Keyboard navigation
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const category = this.dataset.category;
                showUnitDetails(category);
            }
        });
    });
    
    // Modal close events
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function showUnitDetails(category) {
    const unit = unitData[category];
    if (!unit) return;
    
    modalContent.innerHTML = `
        <div class="modal-header" style="border-left: 5px solid ${unit.color}; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: ${unit.color}; margin-bottom: 10px;">${unit.name}</h2>
            <p style="color: #7f8c8d; font-size: 1.1rem;">${unit.description}</p>
        </div>
        
        <div class="modal-body">
            <div class="status-info" style="background: ${unit.color}15; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
                <h4 style="color: ${unit.color}; margin-bottom: 10px;">
                    <i class="fas fa-chart-bar"></i> Trạng thái cập nhật
                </h4>
                <p style="font-size: 1.1rem; font-weight: 600;">${unit.status}</p>
            </div>
            
            <div class="units-list">
                <h4 style="color: #2c3e50; margin-bottom: 15px;">
                    <i class="fas fa-list"></i> Danh sách đơn vị
                </h4>
                <div class="units-grid">
                    ${unit.units.map(unitName => `
                        <div class="unit-item" style="
                            background: white; 
                            padding: 15px; 
                            border-radius: 10px; 
                            border-left: 3px solid ${unit.color};
                            margin-bottom: 10px;
                            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                            transition: all 0.3s ease;
                            cursor: pointer;
                        " onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform='translateX(0)'" onclick="openSchedulePage('${unitName}')">
                            <i class="fas fa-building" style="color: ${unit.color}; margin-right: 10px;"></i>
                            ${unitName}
                            <div style="margin-top: 10px;">
                                <button style="
                                    background: ${unit.color}; 
                                    color: white; 
                                    border: none; 
                                    padding: 8px 16px; 
                                    border-radius: 20px; 
                                    cursor: pointer;
                                    font-size: 0.9rem;
                                    font-weight: 500;
                                    transition: all 0.3s ease;
                                " onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
                                    <i class="fas fa-calendar-week"></i> Xem lịch tuần
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="modal-footer" style="margin-top: 25px; text-align: center;">
            <button onclick="closeModal()" style="
                background: ${unit.color}; 
                color: white; 
                border: none; 
                padding: 12px 25px; 
                border-radius: 25px; 
                cursor: pointer;
                font-weight: 500;
                transition: all 0.3s ease;
            " onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
                <i class="fas fa-times"></i> Đóng
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation
    modalContent.style.opacity = '0';
    modalContent.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        modalContent.style.transition = 'all 0.3s ease';
        modalContent.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
}

function closeModal() {
    modalContent.style.transition = 'all 0.2s ease';
    modalContent.style.opacity = '0';
    modalContent.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 200);
}

function goHome() {
    // Add smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Add visual feedback
    const header = document.querySelector('.header');
    header.style.transform = 'scale(1.02)';
    header.style.transition = 'transform 0.3s ease';
    
    setTimeout(() => {
        header.style.transform = 'scale(1)';
    }, 300);
}

// Add search functionality
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Tìm kiếm đơn vị...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 15px 20px;
        border: 2px solid rgba(59, 130, 246, 0.2);
        border-radius: 25px;
        font-size: 1rem;
        margin: 20px auto;
        display: block;
        transition: all 0.3s ease;
        outline: none;
        background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
    `;
    
    // Insert search input after header
    const header = document.querySelector('.header');
    header.parentNode.insertBefore(searchInput, header.nextSibling);
    
    // Search functionality
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            } else {
                card.style.opacity = '0.3';
                card.style.transform = 'scale(0.95)';
            }
        });
    });
    
    // Focus effects
    searchInput.addEventListener('focus', function() {
        this.style.borderColor = '#3b82f6';
        this.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
    });
    
    searchInput.addEventListener('blur', function() {
        this.style.borderColor = 'rgba(59, 130, 246, 0.2)';
        this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.06)';
    });
}

// Initialize search functionality
setTimeout(addSearchFunctionality, 1000);

// Add smooth animations for better UX
function addSmoothAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Initialize animations
setTimeout(addSmoothAnimations, 500);

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        // Add focus styles for keyboard navigation
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('focus', function() {
                this.style.outline = '2px solid #3498db';
                this.style.outlineOffset = '2px';
            });
            
            card.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });
    }
});

// Performance optimization
function optimizePerformance() {
    // Debounce search input
    let searchTimeout;
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                // Search logic here
            }, 300);
        });
    }
}

// Function to open schedule page
function openSchedulePage(unitName) {
    // Close current modal
    closeModal();
    
    // Show loading message
    const loadingMsg = document.createElement('div');
    loadingMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        text-align: center;
    `;
    loadingMsg.innerHTML = `
        <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: #3b82f6; margin-bottom: 15px;"></i>
        <p>Đang chuyển đến trang lịch làm việc của ${unitName}...</p>
    `;
    
    document.body.appendChild(loadingMsg);
    
    // Simulate loading and redirect
    setTimeout(() => {
        document.body.removeChild(loadingMsg);
        window.location.href = 'schedule-detail.html';
    }, 1500);
}

// Initialize performance optimizations
setTimeout(optimizePerformance, 2000);
