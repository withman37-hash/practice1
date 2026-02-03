document.addEventListener('DOMContentLoaded', () => {
    const serviceData = [
        { name: '모두의 주차장', life: 3, public: 1, data: 3, tech: 2, grade: 'A' },
        { name: '왓섭 (구독관리)', life: 3, public: 1, data: 2, tech: 3, grade: 'A' },
        { name: '증권플러스', life: 3, public: 2, data: 3, tech: 3, grade: 'S' },
        { name: '뮤직카우', life: 2, public: 1, data: 2, tech: 2, grade: 'B' },
        { name: '닥터나우', life: 3, public: 2, data: 2, tech: 2, grade: 'A' },
        { name: '웰컴 (웰컴저축은행)', life: 2, public: 3, data: 3, tech: 3, grade: 'S' },
        { name: '어글리어스', life: 2, public: 3, data: 2, tech: 1, grade: 'B' },
        { name: '오픈플랜 (토글)', life: 2, public: 2, data: 3, tech: 3, grade: 'A' },
        { name: '빅밸류 (부동산데이터)', life: 1, public: 3, data: 3, tech: 3, grade: 'A' },
        { name: '리브로피아', life: 1, public: 3, data: 3, tech: 3, grade: 'C' },
        { name: '뱅샐 (뱅크샐러드)', life: 3, public: 3, data: 3, tech: 3, grade: 'S' },
        { name: '스클럽 (영수증관리)', life: 3, public: 1, data: 3, tech: 2, grade: 'A' },
    ];

    const tableBody = document.getElementById('service-table-body');
    const affiliateCount = document.getElementById('affiliate-count');

    function renderTable() {
        tableBody.innerHTML = '';
        affiliateCount.textContent = `총 ${serviceData.length}개`;

        serviceData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
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
