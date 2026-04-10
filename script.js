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

// Function to close modal
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
  // Reset form when closing
  setTimeout(() => {
    articleForm.reset();
  }, 300);
}

// Event Listeners for Modal
if (openModalBtn) openModalBtn.addEventListener('click', openModal);
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the content box
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Handle Form Submission
articleForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload
  
  // Here, a real app would send data to a backend.
  // For demonstration, we simply show an alert and close the modal.
  const title = document.getElementById('title').value;
  alert(`Article "${title}" saved successfully!`);
  
  closeModal();
});

// ===============================
// Filter Buttons Interactivity
// ===============================
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
  });
});

// ===============================
// Chart.js Setup (Data Viz 10)
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('viewsChart').getContext('2d');
  
  // Creating a nice gradient for the line chart
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(67, 24, 255, 0.4)'); // Primary color with opacity
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
        tension: 0.4 // Creates smooth, curved lines
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false // We hide the legend for a cleaner look
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
              return value / 1000 + 'k'; // Format as '12k', '25k'
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
