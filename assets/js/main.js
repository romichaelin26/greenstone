// Green Stone Landscaping - Main Interactive Engine

document.addEventListener('DOMContentLoaded', () => {
    // 0. Opening Logo Animation Splash
    initOpeningLogoAnimation();

    // 1. Theme Management (Dark/Light mode)
    initThemeManager();

    // 2. Header & Mobile Navigation
    initNavigation();

    // 3. Render Dynamic Content from Data Store
    renderServices();
    renderBeforeAfterCases();
    renderProjects('all');
    renderProcessTimeline();
    renderMaterialLibrary();
    renderTestimonials();
    renderBlogs();
    renderFAQs();
    renderStatsCounters();

    // 4. Interactive Components
    initBeforeAfterSlider();
    initLandscapeVisualizer();
    initAICostEstimator();
    initQuotationMaker();
    initAdminDashboard();
    initContactForm();
    initBackToTop();
});

/* ==========================================================================
   1. THEME MANAGER
   ========================================================================== */
function initThemeManager() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const savedTheme = localStorage.getItem('gs_theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('gs_theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

/* ==========================================================================
   2. NAVIGATION & HEADER AUTO-HIDE
   ========================================================================== */
function initNavigation() {
    const navbar = document.getElementById('main-header');
    const bottomNav = document.getElementById('mobile-bottom-nav');
    const quickBar = document.getElementById('floating-quick-bar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-item-link, .mobile-bottom-link');

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Scrolled background styling
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Smart Auto-Hide Header & Mobile Navigation Bars on Scroll
        if (currentScrollY > 120 && currentScrollY > lastScrollY) {
            navbar.classList.add('nav-hidden');
            if (bottomNav) bottomNav.classList.add('nav-hidden');
            if (quickBar) quickBar.classList.add('nav-hidden');
        } else {
            navbar.classList.remove('nav-hidden');
            if (bottomNav) bottomNav.classList.remove('nav-hidden');
            if (quickBar) quickBar.classList.remove('nav-hidden');
        }

        lastScrollY = currentScrollY;
    });

    // Toggle Mobile Menu Drawer
    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });
    }

    // Auto-close mobile menu when a navigation item is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
}

/* ==========================================================================
   3. RENDER DYNAMIC DATA SECTIONS
   ========================================================================== */
function renderServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    grid.innerHTML = GREEN_STONE_DATA.services.map(s => `
        <article class="service-card" id="service-${s.id}">
            <h3 class="service-card-title">${s.title}</h3>
            <p class="service-card-desc">${s.shortDesc}</p>
            <ul class="service-feature-list">
                ${s.features.map(f => `<li class="service-feature-item">${f}</li>`).join('')}
            </ul>
            <button class="btn btn-secondary btn-sm" onclick="openServiceModal('${s.id}')">Learn More</button>
        </article>
    `).join('');
}

function renderBeforeAfterCases() {
    const container = document.getElementById('before-after-cases-wrap');
    if (!container) return;

    const firstCase = GREEN_STONE_DATA.beforeAfterCases[0];
    container.innerHTML = `
        <div class="before-after-container" id="ba-main-slider">
            <img src="${firstCase.afterImage}" class="before-after-image" alt="After Transformation">
            <div class="badge-overlay badge-after">AFTER RECONSTRUCTION</div>
            
            <div class="before-image-wrap" id="ba-before-wrap">
                <img src="${firstCase.beforeImage}" alt="Before Transformation" id="ba-before-img">
                <div class="badge-overlay badge-before">BEFORE RENOVATION</div>
            </div>
            
            <div class="slider-handle" id="ba-handle">
                <div class="handle-button"></div>
            </div>
        </div>
        <div style="margin-top: 1.5rem; text-align: center;">
            <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem;">${firstCase.title}</h3>
            <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto;">${firstCase.description}</p>
        </div>
    `;
}

function renderProjects(filter = 'all') {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const filtered = filter === 'all' 
        ? GREEN_STONE_DATA.projects 
        : GREEN_STONE_DATA.projects.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(p => `
        <div class="project-card" onclick="openProjectModal('${p.id}')">
            <div class="project-thumb">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
                <span class="project-category-tag">${p.categoryName}</span>
            </div>
            <div class="project-info">
                <h3 class="project-title">${p.title}</h3>
                <p style="color: var(--text-secondary); font-size: 0.875rem;">${p.location}</p>
                <div class="project-meta-list">
                    <span>${p.area}</span>
                    <span>${p.duration}</span>
                    <span>${p.budget}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProjects(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderProjects(cat);
}

function renderProcessTimeline() {
    const grid = document.getElementById('process-timeline-grid');
    if (!grid) return;

    grid.innerHTML = GREEN_STONE_DATA.process.map(p => `
        <div class="process-card">
            <div class="process-step-num">${p.step}</div>
            <h3 class="process-card-title">${p.title}</h3>
            <p class="process-card-desc">${p.desc}</p>
        </div>
    `).join('');
}

function renderMaterialLibrary(searchQuery = '', catFilter = 'all') {
    const grid = document.getElementById('materials-grid');
    if (!grid) return;

    let items = GREEN_STONE_DATA.materials;
    if (catFilter !== 'all') {
        items = items.filter(m => m.category === catFilter);
    }
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        items = items.filter(m => 
            m.name.toLowerCase().includes(q) || 
            m.desc.toLowerCase().includes(q) ||
            m.tags.some(t => t.toLowerCase().includes(q))
        );
    }

    grid.innerHTML = items.map(m => `
        <div class="material-card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
                ${m.image ? `<div style="height: 180px; margin: -1.5rem -1.5rem 1rem -1.5rem; overflow: hidden; border-top-left-radius: var(--radius-md); border-top-right-radius: var(--radius-md);">
                    <img src="${m.image}" alt="${m.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'">
                </div>` : ''}
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                    <span style="font-size: 0.75rem; color: var(--sage-green); font-weight: 700; text-transform: uppercase;">${m.categoryName}</span>
                    <span style="font-size: 0.75rem; background: rgba(46, 125, 50, 0.2); color: var(--sage-green); padding: 0.15rem 0.5rem; border-radius: 4px; border: 1px solid var(--border-subtle);">${m.maintenance || 'Low'} Maint.</span>
                </div>
                <h4 style="font-size: 1.15rem; margin: 0.35rem 0;">${m.name}</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">${m.desc}</p>
                <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1rem;">
                    ${m.price ? `Est. Price: <span style="color: var(--sage-green);">${m.price}</span>` : ''}
                </div>
            </div>
            <div>
                <div style="display: flex; gap: 0.35rem; flex-wrap: wrap; margin-bottom: 1rem;">
                    ${m.tags ? m.tags.map(t => `<span style="font-size: 0.7rem; background: var(--sage-muted); color: var(--sage-green); padding: 0.2rem 0.5rem; border-radius: 4px;">${t}</span>`).join('') : ''}
                </div>
                <button class="btn btn-secondary btn-sm" style="width: 100%; padding: 0.5rem; font-size: 0.8rem;" onclick="openMaterialDetailModal('${m.id}')">View Specs & AI Recs</button>
            </div>
        </div>
    `).join('');
}

function openMaterialDetailModal(id) {
    const item = GREEN_STONE_DATA.materials.find(m => m.id === id);
    if (!item) return;

    alert(`MATERIAL SPECIFICATIONS:\n\nName: ${item.name}\nCategory: ${item.categoryName}\nEstimated Cost: ${item.price || 'Contact for quote'}\nClimate Suitability: ${item.climate || 'Kerala & All Tropical Zones'}\nSunlight Requirement: ${item.sunlight || 'Full Sun'}\nWater Needs: ${item.water || 'Low / Moderate'}\nMaintenance Level: ${item.maintenance || 'Low'}\n\nDescription: ${item.desc}`);
}

function renderTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;

    container.innerHTML = GREEN_STONE_DATA.testimonials.map(t => `
        <div class="testimonial-glass-card">
            <div>
                <div class="star-rating">${'★'.repeat(t.rating)}</div>
                <p class="testimonial-text">"${t.comment}"</p>
            </div>
            <div class="author-info">
                <div class="author-avatar">${t.name.charAt(0)}</div>
                <div>
                    <h4 style="font-size: 0.95rem;">${t.name}</h4>
                    <p style="font-size: 0.8rem; color: var(--text-muted);">${t.role} • ${t.project}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderBlogs() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;

    grid.innerHTML = GREEN_STONE_DATA.blogs.map(b => `
        <article class="project-card">
            <div class="project-thumb">
                <img src="${b.image}" alt="${b.title}">
                <span class="project-category-tag">${b.category}</span>
            </div>
            <div class="project-info">
                <span style="font-size: 0.75rem; color: var(--text-muted);">${b.date}</span>
                <h3 class="project-title" style="margin-top: 0.25rem;">${b.title}</h3>
                <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.5rem;">${b.summary}</p>
            </div>
        </article>
    `).join('');
}

function renderFAQs() {
    const container = document.getElementById('faq-accordion-wrap');
    if (!container) return;

    container.innerHTML = GREEN_STONE_DATA.faqs.map((f, idx) => `
        <div class="accordion-item ${idx === 0 ? 'open' : ''}">
            <button class="accordion-header" onclick="toggleAccordion(this)">
                <span>${f.q}</span>
                <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-body">
                <p>${f.a}</p>
            </div>
        </div>
    `).join('');
}

function toggleAccordion(btn) {
    const item = btn.parentElement;
    item.classList.toggle('open');
}

function renderStatsCounters() {
    const container = document.getElementById('stats-grid-container');
    if (!container) return;

    container.innerHTML = GREEN_STONE_DATA.stats.map(s => `
        <div class="stat-item">
            <div class="stat-number" data-target="${s.count}">${s.count}${s.suffix}</div>
            <div class="stat-label">${s.label}</div>
        </div>
    `).join('');
}

/* ==========================================================================
   4. BEFORE & AFTER DRAG ENGINE
   ========================================================================== */
function initBeforeAfterSlider() {
    setTimeout(() => {
        const slider = document.getElementById('ba-main-slider');
        const beforeWrap = document.getElementById('ba-before-wrap');
        const beforeImg = document.getElementById('ba-before-img');
        const handle = document.getElementById('ba-handle');

        if (!slider || !beforeWrap || !handle) return;

        let isDragging = false;

        function updateSlider(x) {
            const rect = slider.getBoundingClientRect();
            let offsetX = x - rect.left;
            if (offsetX < 0) offsetX = 0;
            if (offsetX > rect.width) offsetX = rect.width;
            
            const pct = (offsetX / rect.width) * 100;
            beforeWrap.style.width = `${pct}%`;
            handle.style.left = `${pct}%`;
            if (beforeImg) {
                beforeImg.style.width = `${rect.width}px`;
            }
        }

        slider.addEventListener('mousedown', (e) => { isDragging = true; updateSlider(e.clientX); });
        window.addEventListener('mouseup', () => isDragging = false);
        window.addEventListener('mousemove', (e) => { if (isDragging) updateSlider(e.clientX); });

        slider.addEventListener('touchstart', (e) => { isDragging = true; updateSlider(e.touches[0].clientX); });
        window.addEventListener('touchend', () => isDragging = false);
        window.addEventListener('touchmove', (e) => { if (isDragging) updateSlider(e.touches[0].clientX); });

        // Resize handler
        window.addEventListener('resize', () => {
            const rect = slider.getBoundingClientRect();
            if (beforeImg) beforeImg.style.width = `${rect.width}px`;
        });
    }, 200);
}

/* ==========================================================================
   5. LANDSCAPE VISUALIZER TOOL
   ========================================================================== */
let visualizerState = {
    bg: 'assets/images/user_photo_3.jpg',
    paving: 'Granite',
    plants: 'Tropical',
    water: true,
    lighting: true
};

function initLandscapeVisualizer() {
    updateVisualizerCanvas();
}

function setVizOption(key, val, el) {
    visualizerState[key] = val;
    if (el) {
        const siblings = el.parentElement.querySelectorAll('.viz-btn');
        siblings.forEach(s => s.classList.remove('active'));
        el.classList.add('active');
    }
    updateVisualizerCanvas();
}

function updateVisualizerCanvas() {
    const img = document.getElementById('viz-canvas-img');
    const statusText = document.getElementById('viz-status-desc');
    if (!img) return;

    if (visualizerState.paving === 'Granite') img.src = 'assets/images/user_photo_3.jpg';
    else if (visualizerState.paving === 'Basalt') img.src = 'assets/images/user_photo_2.jpg';
    else if (visualizerState.paving === 'Sandstone') img.src = 'assets/images/user_photo_1.jpg';
    else img.src = 'assets/images/user_photo_5.jpg';

    if (statusText) {
        statusText.innerHTML = `Preset: <strong>${visualizerState.paving} Paving</strong> + <strong>${visualizerState.plants} Flora</strong> ${visualizerState.water ? '+ Water Feature' : ''} ${visualizerState.lighting ? '+ LED Nightscape' : ''}`;
    }
}

/* ==========================================================================
   6. AI COST ESTIMATOR & QUOTATION MAKER
   ========================================================================== */
function initAICostEstimator() {
    const areaInput = document.getElementById('est-area');
    const areaVal = document.getElementById('est-area-val');
    if (!areaInput || !areaVal) return;

    areaInput.addEventListener('input', (e) => {
        areaVal.textContent = `${e.target.value} sq.ft`;
        calculateEstimate();
    });

    calculateEstimate();
}

function calculateEstimate() {
    const area = parseInt(document.getElementById('est-area')?.value || '1500');
    const style = document.getElementById('est-style')?.value || 'modern';
    
    const waterFeature = document.getElementById('chk-water')?.checked;
    const lighting = document.getElementById('chk-lighting')?.checked;
    const hardscape = document.getElementById('chk-hardscape')?.checked;
    const irrigation = document.getElementById('chk-irrigation')?.checked;

    let baseRate = 18; // $ per sq ft
    if (style === 'luxury') baseRate = 32;
    if (style === 'zen') baseRate = 25;

    let total = area * baseRate;
    if (waterFeature) total += 8500;
    if (lighting) total += 4200;
    if (hardscape) total += area * 12;
    if (irrigation) total += 3500;

    const minEstimate = Math.round(total * 0.9);
    const maxEstimate = Math.round(total * 1.15);

    const priceDisplay = document.getElementById('est-price-display');
    const breakdownDisplay = document.getElementById('est-breakdown-display');

    if (priceDisplay) {
        priceDisplay.textContent = `$${minEstimate.toLocaleString()} - $${maxEstimate.toLocaleString()}`;
    }

    if (breakdownDisplay) {
        breakdownDisplay.innerHTML = `
            <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Estimated Area: <strong>${area} sq.ft</strong></div>
            <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Base Landscape Construction: <strong>$${(area * baseRate).toLocaleString()}</strong></div>
            ${waterFeature ? '<div style="font-size: 0.85rem; color: var(--sage-green);">Custom Water Feature Included</div>' : ''}
            ${lighting ? '<div style="font-size: 0.85rem; color: var(--sage-green);">Smart LED Lighting Package Included</div>' : ''}
            ${irrigation ? '<div style="font-size: 0.85rem; color: var(--sage-green);">Automated Smart Irrigation Included</div>' : ''}
        `;
    }
}

/* --- ONLINE QUOTATION MAKER ENGINE (LANDSCAPING BOQ) --- */
let quotationItems = [];

function initQuotationMaker() {
    renderBOQPresetDropdown();
    updateQuotationTable();
}

function renderBOQPresetDropdown() {
    const select = document.getElementById('boq-preset-select');
    if (!select || !GREEN_STONE_DATA.boqPresets) return;

    select.innerHTML = '<option value="">-- Quick Select From 19 BOQ Categories --</option>' +
        GREEN_STONE_DATA.boqPresets.map((item, idx) => `
            <option value="${idx}">[${item.category}] ${item.name} (₹${item.rate}/${item.unit})</option>
        `).join('');
}

function addPresetBOQItem() {
    const select = document.getElementById('boq-preset-select');
    if (!select || select.value === '') return;

    const preset = GREEN_STONE_DATA.boqPresets[parseInt(select.value)];
    if (!preset) return;

    quotationItems.push({
        code: preset.code,
        category: preset.category,
        name: preset.name,
        unit: preset.unit,
        qty: preset.unit === 'sq.ft' ? 500 : (preset.unit === 'Nos' ? 2 : 1),
        rate: preset.rate,
        discount: 0,
        gst: 18
    });

    updateQuotationTable();
    select.value = '';
}

function updateQuotationTable() {
    const tableBody = document.getElementById('quote-items-body');
    const subtotalEl = document.getElementById('quote-subtotal');
    const taxEl = document.getElementById('quote-tax');
    const grandTotalEl = document.getElementById('quote-grand-total');

    if (!tableBody) return;

    if (quotationItems.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted); font-size: 0.9rem;">
                    🍃 <em>No BOQ items added yet. Select a preset from the 19 categories above or enter a custom item to build your quotation.</em>
                </td>
            </tr>
        `;
        if (subtotalEl) subtotalEl.textContent = '₹0';
        if (taxEl) taxEl.textContent = '₹0';
        if (grandTotalEl) grandTotalEl.textContent = '₹0';
        return;
    }

    let subtotal = 0;
    tableBody.innerHTML = quotationItems.map((item, idx) => {
        const lineTotal = item.qty * item.rate * (1 - (item.discount || 0) / 100);
        subtotal += lineTotal;
        return `
            <tr>
                <td style="padding: 0.75rem; font-size: 0.8rem; color: var(--sage-green); font-weight: 700;">${item.code || 'CUSTOM'}</td>
                <td style="padding: 0.75rem; font-size: 0.85rem;"><strong>${item.name}</strong><br><span style="font-size: 0.75rem; color: var(--text-muted);">${item.category || 'General'}</span></td>
                <td style="padding: 0.75rem;">
                    <input type="number" value="${item.qty}" min="1" style="width: 70px; padding: 0.25rem 0.5rem; background: var(--bg-secondary); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;" onchange="updateItemQty(${idx}, this.value)"> ${item.unit}
                </td>
                <td style="padding: 0.75rem;">
                    <input type="number" value="${item.rate}" min="0" style="width: 80px; padding: 0.25rem 0.5rem; background: var(--bg-secondary); border: 1px solid var(--border-subtle); color: var(--text-primary); border-radius: 4px;" onchange="updateItemRate(${idx}, this.value)">
                </td>
                <td style="padding: 0.75rem; text-align: right; font-weight: 700; color: var(--sage-green);">₹${Math.round(lineTotal).toLocaleString()}</td>
                <td style="padding: 0.75rem; text-align: center;">
                    <button class="btn btn-secondary btn-sm" onclick="removeQuoteItem(${idx})" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">Remove</button>
                </td>
            </tr>
        `;
    }).join('');

    const gstAmount = Math.round(subtotal * 0.18);
    const grandTotal = Math.round(subtotal + gstAmount);

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString()}`;
    if (taxEl) taxEl.textContent = `₹${gstAmount.toLocaleString()}`;
    if (grandTotalEl) grandTotalEl.textContent = `₹${grandTotal.toLocaleString()}`;
}

function updateItemQty(idx, val) {
    quotationItems[idx].qty = parseFloat(val) || 1;
    updateQuotationTable();
}

function updateItemRate(idx, val) {
    quotationItems[idx].rate = parseFloat(val) || 0;
    updateQuotationTable();
}

function addQuoteItemFromForm() {
    const nameInput = document.getElementById('add-item-name');
    const qtyInput = document.getElementById('add-item-qty');
    const rateInput = document.getElementById('add-item-rate');
    const unitInput = document.getElementById('add-item-unit');

    if (!nameInput || !qtyInput || !rateInput) return;

    const name = nameInput.value || 'Custom Landscaping Item';
    const qty = parseFloat(qtyInput.value) || 1;
    const rate = parseFloat(rateInput.value) || 0;
    const unit = unitInput ? unitInput.value : 'sq.ft';

    quotationItems.push({
        code: `ITEM-${quotationItems.length + 1}`,
        category: "Custom Item",
        name,
        qty,
        rate,
        unit,
        discount: 0,
        gst: 18
    });

    updateQuotationTable();
    nameInput.value = '';
}

function removeQuoteItem(index) {
    quotationItems.splice(index, 1);
    updateQuotationTable();
}

function saveBOQDraft() {
    localStorage.setItem('gs_boq_draft', JSON.stringify(quotationItems));
    alert('Landscaping BOQ Draft saved successfully to browser storage!');
}

function printQuotation() {
    window.print();
}

function saveAsPDF() {
    alert("Opening print dialog. Please select 'Save as PDF' as your Destination printer.");
    window.print();
}

function sendQuoteToWhatsApp() {
    const clientName = document.getElementById('quote-client-name')?.value || 'Valued Client';
    const location = document.getElementById('quote-client-location')?.value || 'Kerala';
    const projectType = document.getElementById('quote-project-type')?.value || 'Villa Landscape';
    
    let subtotal = 0;
    let itemsText = quotationItems.map((i, idx) => {
        const itemTotal = i.qty * i.rate;
        subtotal += itemTotal;
        return `${idx + 1}. *${i.name}* (${i.qty} ${i.unit} @ ₹${i.rate}): ₹${Math.round(itemTotal).toLocaleString()}`;
    }).join('%0A');

    const tax = Math.round(subtotal * 0.18);
    const grandTotal = subtotal + tax;

    const message = `🌿 *GREEN STONE LANDSCAPING*%0A*Official Bill of Quantities (BOQ)*%0A%0A*Customer:* ${clientName}%0A*Location:* ${location}%0A*Project Type:* ${projectType}%0A%0A*ITEMIZED BOQ BREAKDOWN:*%0A${itemsText}%0A%0A----------------------------------%0A*Subtotal:* ₹${subtotal.toLocaleString()}%0A*18% GST:* ₹${tax.toLocaleString()}%0A*ESTIMATED GRAND TOTAL:* ₹${grandTotal.toLocaleString()}%0A----------------------------------%0A%0APlease verify and confirm site inspection booking.%0AOffice: Chathannoor, Kollam, Kerala | Phone: +91 94959 90997`;

    window.open(`https://wa.me/919495990997?text=${message}`, '_blank');
}

/* ==========================================================================
   7. ADMIN DASHBOARD MODAL
   ========================================================================== */
function initAdminDashboard() {
    const adminOverlay = document.getElementById('admin-modal-overlay');
    const openAdminBtn = document.getElementById('open-admin-btn');
    const closeAdminBtn = document.getElementById('close-admin-btn');

    if (openAdminBtn && adminOverlay) {
        openAdminBtn.addEventListener('click', () => adminOverlay.classList.add('active'));
    }
    if (closeAdminBtn && adminOverlay) {
        closeAdminBtn.addEventListener('click', () => adminOverlay.classList.remove('active'));
    }
}

function switchAdminTab(tabName, btn) {
    document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const contentArea = document.getElementById('admin-tab-content');
    if (!contentArea) return;

    if (tabName === 'analytics') {
        contentArea.innerHTML = `
            <h2 style="margin-bottom: 1.5rem;">Performance Analytics</h2>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
                <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-subtle);">
                    <div style="color: var(--text-muted); font-size: 0.85rem;">Monthly Traffic</div>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--sage-green);">18,420</div>
                    <div style="color: #10b981; font-size: 0.8rem;">↑ 14% vs last month</div>
                </div>
                <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-subtle);">
                    <div style="color: var(--text-muted); font-size: 0.85rem;">Consultation Leads</div>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--sage-green);">142</div>
                    <div style="color: #10b981; font-size: 0.8rem;">↑ 22% conversion</div>
                </div>
                <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-subtle);">
                    <div style="color: var(--text-muted); font-size: 0.85rem;">Avg Project Value</div>
                    <div style="font-size: 2rem; font-weight: 700; color: var(--sage-green);">$84,500</div>
                    <div style="color: var(--text-muted); font-size: 0.8rem;">Q3 Target Reached</div>
                </div>
            </div>
        `;
    } else if (tabName === 'enquiries') {
        contentArea.innerHTML = `
            <h2 style="margin-bottom: 1.5rem;">Customer Enquiries & Bookings</h2>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Project Type</th>
                        <th>Location</th>
                        <th>Estimated Budget</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Eleanor Vance</td>
                        <td>Modern Villa Landscape</td>
                        <td>Beverly Hills</td>
                        <td>$120,000</td>
                        <td><span style="color: #10b981;">Confirmed</span></td>
                    </tr>
                    <tr>
                        <td>David Chen</td>
                        <td>Commercial Plaza</td>
                        <td>Irvine</td>
                        <td>$250,000</td>
                        <td><span style="color: #f59e0b;">In Design</span></td>
                    </tr>
                    <tr>
                        <td>Sophia Martinez</td>
                        <td>Courtyard Renovation</td>
                        <td>Malibu</td>
                        <td>$85,000</td>
                        <td><span style="color: #10b981;">In Construction</span></td>
                    </tr>
                </tbody>
            </table>
        `;
    } else {
        contentArea.innerHTML = `
            <h2 style="margin-bottom: 1.5rem;">Manage ${tabName.toUpperCase()}</h2>
            <p style="color: var(--text-secondary);">Interactive administrative controls active for Green Stone content management system.</p>
        `;
    }
}

/* ==========================================================================
   8. CONTACT FORM & BACK TO TOP
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', handleContactFormSubmit);
}

/* --- CONTACT FORM SUBMISSION TO WHATSAPP --- */
function handleContactFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value || 'Client';
    const phone = document.getElementById('contact-phone')?.value || 'Not provided';
    const service = document.getElementById('contact-service')?.value || 'Landscape Architecture';
    const message = document.getElementById('contact-message')?.value || 'Requesting a site consultation.';

    const formattedMessage = `🌿 *GREEN STONE LANDSCAPING*%0A*New Consultation Booking Request*%0A%0A*Client Name:* ${name}%0A*Phone Number:* ${phone}%0A*Service Requested:* ${service}%0A*Project Notes:* ${message}%0A%0APlease contact me to schedule a site visit.%0AOffice: Chathannoor, Kollam, Kerala`;

    window.open(`https://wa.me/919495990997?text=${formattedMessage}`, '_blank');
}

function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ==========================================================================
   9. CINEMATIC KERALA LANDSCAPE OPENING ANIMATION ENGINE (6-8 SECONDS)
   ========================================================================== */
let splashAudioMuted = false;
let splashAnimTimer = null;
let splashAudioCtx = null;

function initOpeningLogoAnimation() {
    const splash = document.getElementById('preloader-splash');
    const bgLayer = document.getElementById('splash-bg-layer');
    const stageText = document.getElementById('splash-stage-text');
    const logoStage = document.getElementById('splash-logo-stage');
    const canvas = document.getElementById('splash-canvas');

    if (!splash || !canvas) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        splash.style.display = 'none';
        return;
    }

    // Canvas Particle & Ambient Fog Engine (Clean - No Circle Shapes)
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    function renderCanvas() {
        ctx.clearRect(0, 0, width, height);
        if (!splash.classList.contains('hide-splash')) {
            requestAnimationFrame(renderCanvas);
        }
    }
    renderCanvas();

    // 4-SCENE SEQUENCE ORCHESTRATION (0 - 8 SECONDS)
    
    // SCENE 1: Nature Awakens (0s - 2s)
    playAmbientTone(220, 1.5);
    if (stageText) stageText.textContent = "Nature Awakens in Kerala";

    // SCENE 2: Stone Walkway Appears (2s - 4s)
    setTimeout(() => {
        if (stageText) {
            stageText.style.opacity = '0';
            setTimeout(() => {
                stageText.textContent = "Crafting Natural Stone Pathways";
                stageText.style.opacity = '1';
            }, 300);
        }
        
        let stoneInterval = setInterval(() => {
            if (stonesRevealed < maxStones) stonesRevealed++;
            else clearInterval(stoneInterval);
        }, 220);

        playAmbientTone(330, 1.2);
    }, 2000);

    // SCENE 3: Kerala Garden Reveals (4s - 6s)
    setTimeout(() => {
        if (bgLayer) {
            bgLayer.style.backgroundImage = "url('assets/images/user_photo_3.jpg')";
            bgLayer.classList.add('active');
        }
        if (stageText) {
            stageText.style.opacity = '0';
            setTimeout(() => {
                stageText.textContent = "Harmonizing Architecture with Nature";
                stageText.style.opacity = '1';
            }, 300);
        }

        playAmbientTone(440, 1.5);
    }, 4000);

    // SCENE 4: Logo Formation & Chime (6s - 8s)
    setTimeout(() => {
        if (stageText) stageText.style.opacity = '0';
        if (logoStage) logoStage.classList.add('active');

        playLogoChime();
    }, 6000);

    // TRANSITION TO HOMEPAGE (8s)
    splashAnimTimer = setTimeout(() => {
        skipSplashAnimation();
    }, 8200);
}

function skipSplashAnimation() {
    const splash = document.getElementById('preloader-splash');
    if (splash) {
        splash.classList.add('hide-splash');
    }
    if (splashAnimTimer) clearTimeout(splashAnimTimer);
}

function toggleSplashAudio() {
    splashAudioMuted = !splashAudioMuted;
    const btn = document.getElementById('splash-mute-btn');
    if (btn) btn.textContent = splashAudioMuted ? 'Unmute' : 'Mute';
}

function playAmbientTone(freq, duration) {
    if (splashAudioMuted) return;
    try {
        if (!splashAudioCtx) splashAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = splashAudioCtx.createOscillator();
        const gain = splashAudioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, splashAudioCtx.currentTime);
        gain.gain.setValueAtTime(0.01, splashAudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.12, splashAudioCtx.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, splashAudioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(splashAudioCtx.destination);
        osc.start();
        osc.stop(splashAudioCtx.currentTime + duration);
    } catch (e) {}
}

function playLogoChime() {
    if (splashAudioMuted) return;
    try {
        if (!splashAudioCtx) splashAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
            setTimeout(() => {
                const osc = splashAudioCtx.createOscillator();
                const gain = splashAudioCtx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, splashAudioCtx.currentTime);
                gain.gain.setValueAtTime(0.01, splashAudioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.2, splashAudioCtx.currentTime + 0.1);
                gain.gain.exponentialRampToValueAtTime(0.001, splashAudioCtx.currentTime + 1.8);
                osc.connect(gain);
                gain.connect(splashAudioCtx.destination);
                osc.start();
                osc.stop(splashAudioCtx.currentTime + 1.8);
            }, idx * 140);
        });
    } catch (e) {}
}
