
const affiliates = [
    {
        id: 1,
        category: "기업복지몰",
        serviceName: "웰트리",
        partner: "이지웰(주)",
        startDate: "2022-05-16",
        status: "사용중",
        email: "contact@ezwel.com",
        description: "이지웰(EZWEL) 복지몰이란, 기본 생필품 구매부터 여행/레저, 영화관람권, 도서, 인기브랜드 제품까지! 다양한 카테고리의 상품들로 구성되어 있어 편리하게 할인 혜택을 누릴수 있습니다."
    },
    {
        id: 2,
        category: "택배배송",
        serviceName: "CU",
        partner: "BGF리테일",
        startDate: "2022-05-16",
        status: "사용중",
        email: "partner@bgfretail.com",
        description: "CU 편의점 택배 서비스입니다."
    },
    {
        id: 3,
        category: "모바일쿠폰",
        serviceName: "쿠팝",
        partner: "(주)다우기술",
        startDate: "2022-05-16",
        status: "사용중",
        email: "biz@daou.co.kr",
        description: "다양한 모바일 쿠폰을 발송하고 관리하는 서비스입니다."
    },
];

// --- DOM Elements ---
const pageTitle = document.getElementById("page-title");
const serviceListView = document.getElementById("service-list-view");
const serviceDetailView = document.getElementById("service-detail-view");
const affiliateCount = document.getElementById("affiliate-count");
const tableBody = document.getElementById("service-table-body");
const backToListBtn = document.getElementById("back-to-list-btn");
const detailForm = document.getElementById("detail-form");

// --- Functions ---

function showListView() {
    pageTitle.textContent = "서비스 관리";
    serviceDetailView.style.display = "none";
    serviceListView.style.display = "block";
}

function showDetailView(affiliate) {
    pageTitle.textContent = "서비스 상세 정보";
    serviceListView.style.display = "none";
    serviceDetailView.style.display = "block";

    document.getElementById("detail-partner").value = affiliate.partner;
    document.getElementById("detail-service-name").value = affiliate.serviceName;
    document.getElementById("detail-service-description").value = affiliate.description;
    
    detailForm.dataset.id = affiliate.id;
}

function renderAffiliates() {
    tableBody.innerHTML = "";
    affiliateCount.textContent = `${affiliates.length}개의 제휴 서비스가 있습니다.`;

    affiliates.forEach((affiliate, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><input type="checkbox" class="select-row" data-email="${affiliate.email}"></td>
            <td>${index + 1}</td>
            <td>${affiliate.category}</td>
            <td><a href="#" class="service-name-link" data-id="${affiliate.id}">${affiliate.serviceName}</a></td>
            <td>${affiliate.partner}</td>
            <td>${affiliate.startDate}</td>
            <td class="${affiliate.status === "사용중" ? "status-active" : "status-inactive"}">${affiliate.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

// --- Event Listeners ---

document.addEventListener("DOMContentLoaded", () => {
    renderAffiliates();

    tableBody.addEventListener("click", (e) => {
        if (e.target.classList.contains("service-name-link")) {
            e.preventDefault();
            const affiliateId = parseInt(e.target.dataset.id);
            const selectedAffiliate = affiliates.find(a => a.id === affiliateId);
            if (selectedAffiliate) {
                showDetailView(selectedAffiliate);
            }
        }
    });

    backToListBtn.addEventListener("click", showListView);

    detailForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const affiliateId = parseInt(e.target.dataset.id);
        const serviceName = document.getElementById("detail-service-name").value;
        const description = document.getElementById("detail-service-description").value;

        // Find and update the affiliate data
        const affiliate = affiliates.find(a => a.id === affiliateId);
        if(affiliate) {
            affiliate.serviceName = serviceName;
            affiliate.description = description;
            console.log("Updated Affiliate:", affiliate);
            alert("서비스 정보가 저장되었습니다.");
            renderAffiliates(); // Re-render the list to reflect changes
            showListView();
        }
    });
    
    // Email sending logic from previous step
    const emailModal = document.getElementById("email-modal");
    const sendEmailBtn = document.getElementById("send-email-btn");

    if (sendEmailBtn) {
        sendEmailBtn.onclick = () => {
            emailModal.style.display = "block";
        };
    }
});
