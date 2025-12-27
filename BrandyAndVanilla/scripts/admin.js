// Admin Dashboard Logic

document.addEventListener('DOMContentLoaded', () => {
    // Mock Data
    const orders = [
        { id: '1024', customer: 'Sarah Jenkins', items: '1x Guava Dream (8")', total: '$68.00', status: 'New' },
        { id: '1023', customer: 'Ana Garcia', items: '1x Classic (8")', total: '$65.00', status: 'New' },
        { id: '1022', customer: 'John Doe', items: '2x Dulce de Leche (6")', total: '$100.00', status: 'Completed' },
        { id: '1021', customer: 'Mike Ross', items: '1x Classic (10")', total: '$85.00', status: 'Completed' }
    ];

    const tableBody = document.getElementById('ordersTableBody');

    function renderOrders() {
        tableBody.innerHTML = '';
        orders.forEach(order => {
            const tr = document.createElement('tr');
            const statusClass = order.status === 'New' ? 'status-new' : 'status-completed';
            
            tr.innerHTML = `
                <td>#${order.id}</td>
                <td>${order.customer}</td>
                <td>${order.items}</td>
                <td>${order.total}</td>
                <td><span class="status-badge ${statusClass}">${order.status}</span></td>
                <td><button class="btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;" onclick="viewOrder('${order.id}')">View</button></td>
            `;
            tableBody.appendChild(tr);
        });
    }

    // Initial Render
    renderOrders();

    // Expose viewOrder to global scope for the onclick handler
    window.viewOrder = (id) => {
        alert(`Viewing details for Order #${id}\n\n(This would open a modal in the full app)`);
    };
});
