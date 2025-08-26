// Schedule Detail Page JavaScript

// Current week data
let currentWeek = {
    startDate: new Date('2025-08-25'),
    endDate: new Date('2025-08-31'),
    weekNumber: 4,
    month: 8,
    year: 2025
};

// Schedule data for different weeks
const scheduleData = {
    '2024-01-15': {
        'monday': [
            {
                time: '08:00 - 11:30',
                title: 'Họp giao ban đầu tuần',
                location: 'Phòng họp A - Tầng 2',
                host: 'Đ/c Nguyễn Văn A',
                priority: 'high',
                type: 'morning'
            },
            {
                time: '14:00 - 16:00',
                title: 'Làm việc với đoàn công tác',
                location: 'Phòng khách VIP',
                host: 'Đoàn từ Bộ Nội vụ',
                priority: 'medium',
                type: 'afternoon'
            }
        ],
        'tuesday': [
            {
                time: '08:00 - 10:00',
                title: 'Kiểm tra công tác chuẩn bị',
                location: 'Các phòng ban',
                host: 'Đ/c Trần Thị B',
                priority: 'medium',
                type: 'morning'
            },
            {
                time: '14:00 - 17:00',
                title: 'Họp Ban Chỉ đạo',
                location: 'Hội trường chính',
                host: 'Đ/c Lê Văn C',
                priority: 'high',
                type: 'afternoon'
            }
        ],
        'wednesday': [
            {
                time: '08:00 - 11:00',
                title: 'Làm việc với các sở, ban, ngành',
                location: 'Phòng họp B',
                host: 'Đ/c Phạm Văn D',
                priority: 'high',
                type: 'morning'
            },
            {
                time: '14:00 - 16:30',
                title: 'Kiểm tra hồ sơ, tài liệu',
                location: 'Văn phòng',
                host: 'Đ/c Hoàng Thị E',
                priority: 'low',
                type: 'afternoon'
            }
        ],
        'thursday': [
            {
                time: '08:00 - 10:30',
                title: 'Họp giao ban giữa tuần',
                location: 'Phòng họp A',
                host: 'Đ/c Nguyễn Văn A',
                priority: 'medium',
                type: 'morning'
            },
            {
                time: '14:00 - 17:00',
                title: 'Làm việc với đoàn công tác tỉnh',
                location: 'Phòng khách VIP',
                host: 'Đoàn từ tỉnh An Giang',
                priority: 'medium',
                type: 'afternoon'
            }
        ],
        'friday': [
            {
                time: '08:00 - 11:00',
                title: 'Kiểm tra công tác tuần',
                location: 'Các phòng ban',
                host: 'Đ/c Trần Thị B',
                priority: 'medium',
                type: 'morning'
            },
            {
                time: '14:00 - 16:00',
                title: 'Họp tổng kết tuần',
                location: 'Phòng họp A',
                host: 'Đ/c Nguyễn Văn A',
                priority: 'high',
                type: 'afternoon'
            }
        ]
    }
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeSchedulePage();
    addEventListeners();
    initializeViewToggle();
});

function initializeSchedulePage() {
    updateCurrentWeekDisplay();
    updateSummaryStats();
    addLoadingAnimations();
}

function addEventListeners() {
    // Add click events for schedule items
    document.querySelectorAll('.schedule-item').forEach(item => {
        item.addEventListener('click', function() {
            showScheduleDetails(this);
        });
        
        // Keyboard navigation
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showScheduleDetails(this);
            }
        });
    });
    
    // Add focus events for accessibility
    document.querySelectorAll('.week-nav, .nav-btn').forEach(btn => {
        btn.addEventListener('focus', function() {
            this.style.outline = '2px solid #3b82f6';
            this.style.outlineOffset = '2px';
        });
        
        btn.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

function previousWeek() {
    currentWeek.startDate.setDate(currentWeek.startDate.getDate() - 7);
    currentWeek.endDate.setDate(currentWeek.endDate.getDate() - 7);
    currentWeek.weekNumber--;
    
    if (currentWeek.weekNumber < 1) {
        currentWeek.weekNumber = 4;
        currentWeek.month--;
        if (currentWeek.month < 1) {
            currentWeek.month = 12;
            currentWeek.year--;
        }
    }
    
    updateCurrentWeekDisplay();
    updateScheduleData();
    addWeekTransitionAnimation();
}

function nextWeek() {
    currentWeek.startDate.setDate(currentWeek.startDate.getDate() + 7);
    currentWeek.endDate.setDate(currentWeek.endDate.getDate() + 7);
    currentWeek.weekNumber++;
    
    if (currentWeek.weekNumber > 4) {
        currentWeek.weekNumber = 1;
        currentWeek.month++;
        if (currentWeek.month > 12) {
            currentWeek.month = 1;
            currentWeek.year++;
        }
    }
    
    updateCurrentWeekDisplay();
    updateScheduleData();
    addWeekTransitionAnimation();
}

function updateCurrentWeekDisplay() {
    const startDate = currentWeek.startDate.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    const endDate = currentWeek.endDate.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    const currentWeekElement = document.querySelector('.current-week h3');
    const currentWeekDesc = document.querySelector('.current-week p');
    
    if (currentWeekElement && currentWeekDesc) {
        currentWeekElement.textContent = `Tuần ${startDate} - ${endDate}`;
        currentWeekDesc.textContent = `Tuần thứ ${currentWeek.weekNumber} của tháng ${currentWeek.month} năm ${currentWeek.year}`;
    }
}

function updateScheduleData() {
    // This function would update the schedule data based on the selected week
    // For demo purposes, we'll just show a loading state
    const scheduleContainer = document.querySelector('.schedule-container');
    
    if (scheduleContainer) {
        scheduleContainer.classList.add('loading');
        
        // Simulate loading
        setTimeout(() => {
            scheduleContainer.classList.remove('loading');
            // Here you would normally fetch and update the schedule data
        }, 500);
    }
}

function addWeekTransitionAnimation() {
    const scheduleContainer = document.querySelector('.schedule-container');
    
    if (scheduleContainer) {
        scheduleContainer.style.opacity = '0';
        scheduleContainer.style.transform = 'translateY(20px)';
        scheduleContainer.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            scheduleContainer.style.opacity = '1';
            scheduleContainer.style.transform = 'translateY(0)';
        }, 300);
    }
}

function addLoadingAnimations() {
    // Add staggered animation for day columns (7 days)
    const dayColumns = document.querySelectorAll('.day-column');
    
    dayColumns.forEach((column, index) => {
        column.style.opacity = '0';
        column.style.transform = 'translateY(30px)';
        column.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            column.style.opacity = '1';
            column.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function showScheduleDetails(scheduleItem) {
    const time = scheduleItem.querySelector('.time').textContent;
    const title = scheduleItem.querySelector('h4').textContent;
    const location = scheduleItem.querySelector('p:first-of-type').textContent;
    const host = scheduleItem.querySelector('p:last-of-type').textContent;
    const priority = scheduleItem.querySelector('.priority')?.textContent || 'Không có';
    
    // Create modal content
    const modalContent = `
        <div class="schedule-detail-modal">
            <div class="detail-header">
                <h3>${title}</h3>
                <span class="detail-time">${time}</span>
            </div>
            <div class="detail-content">
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span><strong>Địa điểm:</strong> ${location}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-user"></i>
                    <span><strong>Chủ trì/Phụ trách:</strong> ${host}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-flag"></i>
                    <span><strong>Mức độ ưu tiên:</strong> ${priority}</span>
                </div>
            </div>
            <div class="detail-actions">
                <button class="nav-btn" onclick="editSchedule()">
                    <i class="fas fa-edit"></i> Chỉnh sửa
                </button>
                <button class="nav-btn" onclick="deleteSchedule()">
                    <i class="fas fa-trash"></i> Xóa
                </button>
            </div>
        </div>
    `;
    
    // Show modal (you can implement your own modal system)
    showModal(modalContent);
}

function showModal(content) {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'schedule-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                ${content}
            </div>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', () => closeModal(modal));
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal(modal);
        }
    });
    
    // Escape key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal(modal);
        }
    });
}

function closeModal(modal) {
    modal.style.opacity = '0';
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
}

function editSchedule() {
    // Implementation for editing schedule
    alert('Chức năng chỉnh sửa lịch làm việc sẽ được phát triển sau.');
}

function deleteSchedule() {
    // Implementation for deleting schedule
    if (confirm('Bạn có chắc chắn muốn xóa lịch làm việc này?')) {
        alert('Đã xóa lịch làm việc.');
        closeModal(document.querySelector('.schedule-modal'));
    }
}

function goBack() {
    // Go back to main page
    window.location.href = 'index.html';
}

function printSchedule() {
    // Print the schedule
    window.print();
}

function exportSchedule() {
    // Export schedule to PDF
    alert('Chức năng xuất PDF sẽ được phát triển sau.');
}

// Share and Export Functions
function shareSchedule() {
    if (navigator.share) {
        navigator.share({
            title: 'Lịch Làm Việc Tuần - Báo và Phát thanh, Truyền hình Cần Thơ',
            text: 'Lịch làm việc tuần 25/08 - 31/08/2025',
            url: window.location.href
        }).then(() => {
            showNotification('Đã chia sẻ lịch làm việc thành công!');
        }).catch((error) => {
            console.log('Error sharing:', error);
            showNotification('Không thể chia sẻ lịch làm việc');
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        copyLink();
    }
}

function addToCalendar() {
    // Create iCal content
    const icalContent = generateICalContent();
    
    // Create download link
    const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'lich-lam-viec-tuan-25-31-08-2025.ics';
    link.click();
    
    showNotification('Đã tải xuống file iCal!');
}

function generateICalContent() {
    const scheduleItems = document.querySelectorAll('.schedule-item');
    let icalContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Báo và Phát thanh, Truyền hình Cần Thơ//Lịch làm việc//VI
CALSCALE:GREGORIAN
METHOD:PUBLISH
`;

    scheduleItems.forEach((item, index) => {
        const title = item.querySelector('h4').textContent;
        const time = item.querySelector('.time').textContent;
        const location = item.querySelector('p:last-of-type').textContent.replace('Điểm tại ', '');
        const priority = item.querySelector('.priority')?.textContent || '';
        
        // Parse time and date
        const timeMatch = time.match(/(\d{1,2}):(\d{2})/);
        if (timeMatch) {
            const hour = parseInt(timeMatch[1]);
            const minute = parseInt(timeMatch[2]);
            
            // Get date from day column
            const dayColumn = item.closest('.day-column');
            const dateText = dayColumn.querySelector('.date').textContent;
            const date = new Date(dateText.split('/').reverse().join('-'));
            date.setHours(hour, minute, 0);
            
            const endDate = new Date(date);
            endDate.setHours(hour + 1, minute, 0);
            
            const startDateStr = date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
            const endDateStr = endDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
            
            icalContent += `BEGIN:VEVENT
UID:event-${index}-${Date.now()}@canthotv.vn
DTSTART:${startDateStr}
DTEND:${endDateStr}
SUMMARY:${title}
DESCRIPTION:${priority}
LOCATION:${location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
`;
        }
    });
    
    icalContent += `END:VCALENDAR`;
    return icalContent;
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showNotification('Đã sao chép link vào clipboard!');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Đã sao chép link vào clipboard!');
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(16, 185, 129, 0.3);
        z-index: 10000;
        font-weight: 500;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function updateSummaryStats() {
    // Calculate and update summary statistics
    const totalEvents = document.querySelectorAll('.schedule-item').length;
    const highPriority = document.querySelectorAll('.priority.high').length;
    const mediumPriority = document.querySelectorAll('.priority.medium').length;
    const totalDays = 7; // Monday to Sunday
    
    // Update summary numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 4) {
        statNumbers[0].textContent = totalEvents;
        statNumbers[1].textContent = highPriority;
        statNumbers[2].textContent = mediumPriority;
        statNumbers[3].textContent = totalDays;
    }
}

// Add some interactive features
function addInteractiveFeatures() {
    // Add hover effects for schedule items
    document.querySelectorAll('.schedule-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
    
    // Add click effects for buttons
    document.querySelectorAll('.nav-btn, .week-nav').forEach(btn => {
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        btn.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Initialize interactive features
setTimeout(addInteractiveFeatures, 1000);

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Left arrow - previous week
    if (e.key === 'ArrowLeft' && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        previousWeek();
    }
    
    // Right arrow - next week
    if (e.key === 'ArrowRight' && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        nextWeek();
    }
    
    // Ctrl + P - print
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        printSchedule();
    }
    
    // Ctrl + S - export
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        exportSchedule();
    }
});

// Add performance optimizations
function optimizePerformance() {
    // Debounce week navigation
    let navigationTimeout;
    
    document.querySelectorAll('.week-nav').forEach(btn => {
        btn.addEventListener('click', function() {
            clearTimeout(navigationTimeout);
            navigationTimeout = setTimeout(() => {
                // Navigation logic here
            }, 100);
        });
    });
    
    // Lazy load schedule data
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Load data when visible
                entry.target.classList.add('loaded');
            }
        });
    });
    
    document.querySelectorAll('.day-column').forEach(column => {
        observer.observe(column);
    });
}

// View Toggle Functions
function initializeViewToggle() {
    // Set default view from localStorage or default to timeline
    const savedView = localStorage.getItem('scheduleView') || 'timeline';
    switchView(savedView);
    
    // Add view toggle event listeners
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            switchView(view);
        });
    });
}

function switchView(viewType) {
    const scheduleContainer = document.querySelector('.schedule-container');
    const viewBtns = document.querySelectorAll('.view-btn');
    
    // Remove active class from all buttons
    viewBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to selected button
    const activeBtn = document.querySelector(`[data-view="${viewType}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Update container classes
    scheduleContainer.classList.remove('timeline-view', 'grid-view', 'list-view');
    
    if (viewType === 'list') {
        scheduleContainer.classList.add('list-view');
        animateToListView();
    } else if (viewType === 'grid') {
        scheduleContainer.classList.add('grid-view');
        animateToGridView();
    } else {
        // Default to timeline view
        scheduleContainer.classList.add('timeline-view');
        animateToTimelineView();
    }
    
    // Save preference to localStorage
    localStorage.setItem('scheduleView', viewType);
    
    // Update summary stats layout
    updateSummaryLayout(viewType);
}

function animateToListView() {
    const dayColumns = document.querySelectorAll('.day-column');
    
    dayColumns.forEach((column, index) => {
        column.style.opacity = '0';
        column.style.transform = 'translateY(20px)';
        column.style.transition = 'all 0.4s ease';
        
        setTimeout(() => {
            column.style.opacity = '1';
            column.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function animateToGridView() {
    const dayColumns = document.querySelectorAll('.day-column');
    
    dayColumns.forEach((column, index) => {
        column.style.opacity = '0';
        column.style.transform = 'scale(0.9)';
        column.style.transition = 'all 0.4s ease';
        
        setTimeout(() => {
            column.style.opacity = '1';
            column.style.transform = 'scale(1)';
        }, index * 100);
    });
}

function animateToTimelineView() {
    const dayColumns = document.querySelectorAll('.day-column');
    
    dayColumns.forEach((column, index) => {
        column.style.opacity = '0';
        column.style.transform = 'translateX(-30px)';
        column.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            column.style.opacity = '1';
            column.style.transform = 'translateX(0)';
        }, index * 150);
    });
}

function updateSummaryLayout(viewType) {
    const summaryCard = document.querySelector('.summary-card');
    
    if (viewType === 'list') {
        summaryCard.style.marginTop = '30px';
        summaryCard.style.borderRadius = '20px';
    } else if (viewType === 'timeline') {
        summaryCard.style.marginTop = '25px';
        summaryCard.style.borderRadius = '15px';
    } else {
        summaryCard.style.marginTop = '25px';
        summaryCard.style.borderRadius = '15px';
    }
}

// Initialize performance optimizations
setTimeout(optimizePerformance, 2000);
