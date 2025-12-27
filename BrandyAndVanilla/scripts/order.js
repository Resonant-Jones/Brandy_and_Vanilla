// Order Form Logic

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cakeOrderForm');
    const flavorSelect = document.getElementById('cakeFlavor');
    const sizeSelect = document.getElementById('cakeSize');
    const quantityInput = document.getElementById('cakeQuantity');
    const deliveryRadios = document.getElementsByName('delivery');
    const totalPriceEl = document.getElementById('totalPrice');

    // Helper to get query params (e.g. pre-select flavor from home page)
    const urlParams = new URLSearchParams(window.location.search);
    const preSelectedFlavor = urlParams.get('product');
    if (preSelectedFlavor) {
        flavorSelect.value = preSelectedFlavor;
    }

    function calculateTotal() {
        const flavorOption = flavorSelect.options[flavorSelect.selectedIndex];
        const basePrice = flavorOption.value ? parseFloat(flavorOption.dataset.price) : 0;
        
        const sizeOption = sizeSelect.options[sizeSelect.selectedIndex];
        // Logic: Base price is for 6 inch. 
        // 8 inch adds $20, 10 inch adds $40.
        // Wait, the select logic in HTML was: 
        // 6 inch (multiplier 1), 8 inch (+20), 10 inch (+40)
        // Let's adjust the calculation logic to match the HTML intent.
        
        // Actually, let's simplify:
        // Base Price (Flavor) + Size Surcharge
        let sizeSurcharge = 0;
        if (sizeSelect.value === "1.5") sizeSurcharge = 20;
        if (sizeSelect.value === "2") sizeSurcharge = 40;

        const quantity = parseInt(quantityInput.value) || 1;

        let deliveryCost = 0;
        for (const radio of deliveryRadios) {
            if (radio.checked && radio.value === 'delivery') {
                deliveryCost = 15;
            }
        }

        const total = ((basePrice + sizeSurcharge) * quantity) + deliveryCost;
        
        totalPriceEl.textContent = `Total: $${total.toFixed(2)}`;
        return total;
    }

    // Event Listeners
    flavorSelect.addEventListener('change', calculateTotal);
    sizeSelect.addEventListener('change', calculateTotal);
    quantityInput.addEventListener('input', calculateTotal);
    deliveryRadios.forEach(radio => radio.addEventListener('change', calculateTotal));

    // Initial calculation
    calculateTotal();

    // Form Submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const total = calculateTotal();
        const formData = new FormData(form);
        const orderDetails = Object.fromEntries(formData.entries());
        
        // In a real app, this would call your backend API
        // which would then create a Stripe Checkout session.
        
        // Mocking the process:
        const confirmMsg = `
            Order Summary:
            Flavor: ${flavorSelect.options[flavorSelect.selectedIndex].text}
            Size: ${sizeSelect.options[sizeSelect.selectedIndex].text}
            Quantity: ${quantityInput.value}
            Delivery: ${orderDetails.delivery}
            Total: $${total.toFixed(2)}
            
            Proceed to Payment? (This is a demo)
        `;

        if (confirm(confirmMsg)) {
            // Simulate API call
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Order placed successfully! You would now be redirected to Stripe.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                form.reset();
                calculateTotal();
            }, 1500);
        }
    });
});
