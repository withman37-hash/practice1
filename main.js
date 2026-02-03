document.addEventListener('DOMContentLoaded', () => {
    // Data for the master list
    const services = [
        // Existing
        { category: '쇼핑', name: '카카오선물하기', criteria: { lifestyle: 'S', public: 'A', data: 'B', tech: 'S' }, grade: 'S' },
        { category: '교통', name: '카카오T', criteria: { lifestyle: 'S', public: 'B', data: 'A', tech: 'S' }, grade: 'S' },
        { category: '콘텐츠', name: '카카오페이지', criteria: { lifestyle: 'A', public: 'C', data: 'A', tech: 'A' }, grade: 'A' },
        { category: '금융', name: '카카오페이', criteria: { lifestyle: 'A', public: 'A', data: 'A', tech: 'S' }, grade: 'A' },
        { category: '소셜', name: '카카오스토리', criteria: { lifestyle: 'B', public: 'C', data: 'B', tech: 'B' }, grade: 'B' },
        // New from image, with AI-recommended grades
        { category: '교통', name: '모두의 주차장', criteria: { lifestyle: 'S', public: 'B', data: 'S', tech: 'A' }, grade: 'A' },
        { category: '라이프스타일', name: '왓섭 (구독관리)', criteria: { lifestyle: 'S', public: 'B', data: 'A', tech: 'S' }, grade: 'A' },
        { category: '금융', name: '증권플러스', criteria: { lifestyle: 'S', public: 'A', data: 'S', tech: 'S' }, grade: 'S' },
        { category: '콘텐츠', name: '뮤직카우', criteria: { lifestyle: 'A', public: 'B', data: 'A', tech: 'A' }, grade: 'B' },
        { category: '의료', name: '닥터나우', criteria: { lifestyle: 'S', public: 'A', data: 'A', tech: 'A' }, grade: 'A' },
        { category: '금융', name: '웰컴 (웰컴저축은행)', criteria: { lifestyle: 'A', public: 'S', data: 'S', tech: 'S' }, grade: 'S' },
        { category: '쇼핑', name: '어글리어스', criteria: { lifestyle: 'A', public: 'S', data: 'A', tech: 'B' }, grade: 'B' },
        { category: '금융', name: '오픈플랜 (토글)', criteria: { lifestyle: 'A', public: 'A', data: 'S', tech: 'S' }, grade: 'A' },
        { category: '부동산', name: '빅밸류 (부동산데이터)', criteria: { lifestyle: 'B', public: 'S', data: 'S', tech: 'S' }, grade: 'A' },
        { category: '라이프스타일', name: '리브로피아', criteria: { lifestyle: 'B', public: 'S', data: 'A', tech: 'A' }, grade: 'C' },
        { category: '금융', name: '뱅셀 (뱅크샐러드)', criteria: { lifestyle: 'S', public: 'A', data: 'S', tech: 'S' }, grade: 'S' },
        { category: '라이프스타일', name: '스클랩 (영수증관리)', criteria: { lifestyle: 'S', public: 'B', data: 'S', tech: 'A' }, grade: 'A' }
    ];

    // DOM Elements
    const menuGroupTitle = document.querySelector('.menu-group-title');
    const submenu = document.querySelector('.submenu');
    const submenuLinks = document.querySelectorAll('.submenu a');
    const pageTitle = document.getElementById('page-title');
    const pageSections = document.querySelectorAll('.page-section');
    const tableBody = document.getElementById('service-table-body');
    const affiliateCount = document.getElementById('affiliate-count');
    const emailForm = document.getElementById('email-form');
    let performanceChart = null; // To hold the chart instance

    // Function to render the performance chart
    const renderPerformanceChart = () => {
        const ctx = document.getElementById('performance-chart').getContext('2d');
        if (performanceChart) {
            performanceChart.destroy(); // Destroy previous chart instance
        }
        performanceChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['11.05', '11.06', '11.07', '11.08', '11.09', '11.10', '11.11', '11.12'],
                datasets: [
                    {
                        label: '노출수',
                        data: [450000, 554469, 580000, 520000, 580000, 650000, 250000, 150000],
                        backgroundColor: '#FFD166',
                        yAxisID: 'y-axis-impressions',
                    },
                    {
                        label: 'CTR',
                        data: [48, 46.95, 50, 49, 50, 52, 20, 10],
                        type: 'line',
                        borderColor: '#EF476F',
                        yAxisID: 'y-axis-ctr',
                        tension: 0.4,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    'y-axis-impressions': {
                        type: 'linear',
                        position: 'left',
                        beginAtZero: true,
                         max: 800000
                    },
                    'y-axis-ctr': {
                        type: 'linear',
                        position: 'right',
                        beginAtZero: true,
                        max: 60,
                        grid: {
                            drawOnChartArea: false, 
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.dataset.label === '노출수') {
                                    label += context.parsed.y.toLocaleString();
                                } else if (context.dataset.label === 'CTR') {
                                    label += context.parsed.y + '%';
                                }
                                 if (context.dataIndex === 1 && context.dataset.label === '노출수') {
                                    return [
                                        `노출수: 554,469`,
                                        `클릭수: 260,349`,
                                        `CTR: 46.95%`
                                    ];
                                }

                                return label;
                            }
                        }
                    }
                }
            }
        });
    };

    // Function to switch between pages
    const showPage = (pageId) => {
        pageSections.forEach(section => {
            section.classList.add('hidden');
        });
        const activePage = document.getElementById(`${pageId}-section`);
        if (activePage) {
            activePage.classList.remove('hidden');
        }
        if (pageId === 'dashboard') {
            renderPerformanceChart();
        }
    };

    // Function to update the active menu link
    const setActiveLink = (link) => {
        submenuLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    };
    
    // Function to create a grade span
    const createGradeSpan = (grade) => {
        if (!grade) return '';
        return `<span class="grade grade-${grade.toLowerCase()}">${grade}</span>`;
    };

    // Populate the master list table
    const populateTable = () => {
        tableBody.innerHTML = ''; // Clear existing rows
        services.forEach((service, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${service.category}</td>
                <td>${service.name}</td>
                <td>${createGradeSpan(service.criteria.lifestyle)}</td>
                <td>${createGradeSpan(service.criteria.public)}</td>
                <td>${createGradeSpan(service.criteria.data)}</td>
                <td>${createGradeSpan(service.criteria.tech)}</td>
                <td>${createGradeSpan(service.grade)}</td>
            `;
            tableBody.appendChild(row);
        });
        affiliateCount.textContent = `전체 ${services.length}개`;
    };

    // Accordion menu handler
    menuGroupTitle.addEventListener('click', (e) => {
        e.preventDefault();
        submenu.classList.toggle('open');
        menuGroupTitle.classList.toggle('open');
    });

    // Submenu link click handler
    submenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = e.target.dataset.page;
            const pageName = e.target.textContent.replace(/^[0-9.]+\s/, '');
            
            pageTitle.textContent = pageName;
            setActiveLink(e.target);
            showPage(pageId);
        });
    });

    // Email form submission handler
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const recipient = document.getElementById('recipient').value;
        const subject = document.getElementById('subject').value;
        const body = document.getElementById('body').value;
        const attachment = document.getElementById('attachment').files[0];

        console.log('메일 발송 정보:', {
            recipient,
            subject,
            body,
            attachment: attachment ? attachment.name : '없음'
        });

        alert('메일이 발송되었습니다. (콘솔에서 정보 확인)');
        emailForm.reset();
    });

    // Initial setup
    const initialSetup = () => {
        submenu.classList.add('open');
        menuGroupTitle.classList.add('open');
        menuGroupTitle.classList.add('active');

        const initialPage = document.querySelector('.submenu a.active');
        if (initialPage) {
            const pageId = initialPage.dataset.page;
            const pageName = initialPage.textContent.replace(/^[0-9.]+\s/, '');
            pageTitle.textContent = pageName;
            showPage(pageId);
            populateTable();
        }
    };

    initialSetup();
});
