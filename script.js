// ===============================
// Sidebar Toggle Logic
// ===============================
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

// Open sidebar on mobile
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    sidebar.classList.add('show');
  });
}

// Close sidebar on mobile
if (closeSidebarBtn) {
  closeSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
  });
}

// ===============================
// Modal Logic (10)
// ===============================
const modal = document.getElementById('articleModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');
const articleForm = document.getElementById('articleForm');

// Function to open modal
function openModal() {
  modal.classList.add('active');
  // Prevent body scrolling when modal is open
  document.body.style.overflow = 'hidden';
}


function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
 
  setTimeout(() => {
    articleForm.reset();
  }, 300);
}


if (openModalBtn) openModalBtn.addEventListener('click', openModal);
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);


modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});


articleForm.addEventListener('submit', (e) => {
  e.preventDefault(); 
  

  const title = document.getElementById('title').value;
  alert(`Article "${title}" saved successfully!`);
  
  closeModal();
});


const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('viewsChart').getContext('2d');
  

  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(67, 24, 255, 0.4)'); 
  gradient.addColorStop(1, 'rgba(67, 24, 255, 0.0)');

  const viewsChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Page Views',
        data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
        borderColor: '#4318FF',
        backgroundColor: gradient,
        borderWidth: 3,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#4318FF',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true,
        tension: 0.4 
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false 
        },
        tooltip: {
          backgroundColor: '#2B3674',
          titleFont: { family: "'Inter', sans-serif", size: 13 },
          bodyFont: { family: "'Inter', sans-serif", size: 14, weight: 'bold' },
          padding: 12,
          cornerRadius: 8,
          displayColors: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(224, 229, 242, 0.5)',
            drawBorder: false,
          },
          ticks: {
            color: '#A3AED0',
            font: { family: "'Inter', sans-serif", size: 12 },
            callback: function(value) {
              return value / 1000 + 'k'; 
            }
          }
        },
        x: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            color: '#A3AED0',
            font: { family: "'Inter', sans-serif", size: 12 }
          }
        }
      }
    }
  });
});
