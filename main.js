document.addEventListener('DOMContentLoaded', () => {
    const services = [
        {
            category: '쇼핑',
            name: '카카오선물하기',
            criteria: {
                lifestyle: 'S', 
                public: 'A', 
                data: 'B', 
                tech: 'S'  
            },
            grade: 'S'
        },
        {
            category: '교통',
            name: '카카오T',
            criteria: {
                lifestyle: 'S',
                public: 'B',
                data: 'A',
                tech: 'S'
            },
            grade: 'S'
        },
        {
            category: '콘텐츠',
            name: '카카오페이지',
            criteria: {
                lifestyle: 'A',
                public: 'C',
                data: 'A',
                tech: 'A'
            },
            grade: 'A'
        },
        {
            category: '금융',
            name: '카카오페이',
            criteria: {
                lifestyle: 'A',
                public: 'A',
                data: 'A',
                tech: 'S'
            },
            grade: 'A'
        },
        {
            category: '소셜',
            name: '카카오스토리',
            criteria: {
                lifestyle: 'B',
                public: 'C',
                data: 'B',
                tech: 'B'
            },
            grade: 'B'
        }
    ];

    const tableBody = document.getElementById('service-table-body');
    const affiliateCount = document.getElementById('affiliate-count');

    affiliateCount.textContent = `전체 ${services.length}개`;

    services.forEach((service, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${service.category}</td>
            <td>${service.name}</td>
            <td>${service.criteria.lifestyle}</td>
            <td>${service.criteria.public}</td>
            <td>${service.criteria.data}</td>
            <td>${service.criteria.tech}</td>
            <td>${service.grade}</td>
        `;
        tableBody.appendChild(row);
    });
});
