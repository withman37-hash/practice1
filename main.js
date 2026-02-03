document.addEventListener('DOMContentLoaded', () => {
    const serviceData = [
        { no: 1, category: '교통', name: '모두의 주차장', life: 3, public: 1, data: 3, tech: 2, grade: 'A' },
        { no: 2, category: '금융', name: '왓섭 (구독관리)', life: 3, public: 1, data: 2, tech: 3, grade: 'A' },
        { no: 3, category: '금융', name: '증권플러스', life: 3, public: 2, data: 3, tech: 3, grade: 'S' },
        { no: 4, category: '엔터', name: '뮤직카우', life: 2, public: 1, data: 2, tech: 2, grade: 'B' },
        { no: 5, category: '의료', name: '닥터나우', life: 3, public: 2, data: 2, tech: 2, grade: 'A' },
        { no: 6, category: '금융', name: '웰컴 (웰컴저축은행)', life: 2, public: 3, data: 3, tech: 3, grade: 'S' },
        { no: 7, category: '쇼핑', name: '어글리어스', life: 2, public: 3, data: 2, tech: 1, grade: 'B' },
        { no: 8, category: '금융', name: '오픈플랜 (토글)', life: 2, public: 2, data: 3, tech: 3, grade: 'A' },
        { no: 9, category: '부동산', name: '빅밸류 (부동산데이터)', life: 1, public: 3, data: 3, tech: 3, grade: 'A' },
        { no: 10, category: '도서', name: '리브로피아', life: 1, public: 3, data: 3, tech: 3, grade: 'C' },
        { no: 11, category: '금융', name: '뱅샐 (뱅크샐러드)', life: 3, public: 3, data: 3, tech: 3, grade: 'S' },
        { no: 12, category: '금융', name: '스클럽 (영수증관리)', life: 3, public: 1, data: 3, tech: 2, grade: 'A' },
    ];

    const tableBody = document.getElementById('service-table-body');
    const affiliateCount = document.getElementById('affiliate-count');

    function renderTable() {
        tableBody.innerHTML = '';
        affiliateCount.textContent = `총 ${serviceData.length}개`;

        serviceData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.no}</td>
                <td>${item.category}</td>
                <td>${item.name}</td>
                <td>${renderStars(item.life)}</td>
                <td>${renderStars(item.public)}</td>
                <td>${renderStars(item.data)}</td>
                <td>${renderStars(item.tech)}</td>
                <td>${renderGradeSelector(item.grade)}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    function renderStars(count) {
        const select = document.createElement('select');
        select.classList.add('star-rating');
        for (let i = 1; i <= 5; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = '★'.repeat(i) + '☆'.repeat(5 - i);
            if (i === count) {
                option.selected = true;
            }
            select.appendChild(option);
        }
        return select.outerHTML;
    }

    function renderGradeSelector(grade) {
        const select = document.createElement('select');
        select.classList.add('grade-selector');
        ['S', 'A', 'B', 'C'].forEach(g => {
            const option = document.createElement('option');
            option.value = g;
            option.textContent = g;
            if (g === grade) {
                option.selected = true;
            }
            select.appendChild(option);
        });
        return select.outerHTML;
    }

    // Email Modal Logic
    const emailModal = document.getElementById('email-modal');
    const sendEmailBtn = document.getElementById('send-email-btn');
    const closeBtn = document.querySelector('.close-btn');
    const cancelBtn = document.getElementById('cancel-btn');

    sendEmailBtn.onclick = () => emailModal.style.display = 'block';
    closeBtn.onclick = () => emailModal.style.display = 'none';
    cancelBtn.onclick = () => emailModal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target == emailModal) {
            emailModal.style.display = 'none';
        }
    };

    renderTable();
});
