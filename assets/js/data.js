// Green Stone Landscaping - Data Store

const GREEN_STONE_DATA = {
    brand: {
        name: "Green Stone Landscaping",
        tagline: "Transforming Outdoor Spaces Into Living Masterpieces.",
        description: "Premium landscape design, garden construction, paving, lighting, irrigation, and maintenance.",
        logo: "assets/images/logo.png",
        phone: "+91 94959 90997",
        email: "info@greenstonelandscape.in",
        whatsapp: "919495990997",
        address: "Chathannoor, Kollam, Kerala, India",
        hours: "Mon - Sat: 8:30 AM - 6:30 PM"
    },
    
    stats: [
        { label: "Completed Projects", value: "500+", count: 500, suffix: "+" },
        { label: "Years Experience", value: "12+", count: 12, suffix: "+" },
        { label: "Client Satisfaction", value: "98%", count: 98, suffix: "%" },
        { label: "Design Awards", value: "24", count: 24, suffix: "" }
    ],

    services: [
        {
            id: "landscape-design",
            title: "Landscape Design",
            shortDesc: "Custom garden planning and interactive 3D visualization.",
            fullDesc: "Our landscape architects create holistic outdoor master plans tailored to your property. We combine site analysis, soil hydrology, native flora selection, and 3D architectural renders so you can experience your garden before ground is broken.",
            features: ["Custom 3D Renders", "Soil & Drainage Analysis", "Plant Palette Curation", "Sunlight Mapping"]
        },
        {
            id: "garden-construction",
            title: "Garden Construction",
            shortDesc: "Complete installation with premium eco-friendly materials.",
            fullDesc: "Turn design concepts into reality with our expert construction team. From site excavation and soil enrichment to precise planting and organic mulching, we handle every detail with master craftsmanship.",
            features: ["Turnkey Execution", "Soil Optimization", "Specimen Tree Planting", "Eco-Friendly Mulching"]
        },
        {
            id: "hardscaping",
            title: "Hardscaping",
            shortDesc: "Natural stone paving, pathways, patios, and retaining walls.",
            fullDesc: "Elevate your outdoor living space with durable, elegant hardscaping. We work with granite, slate, basalt, and limestone to build custom patios, retaining walls, fire pits, and stone walkways.",
            features: ["Permeable Paving", "Natural Stone Walls", "Fire Pits & Outdoor Kitchens", "Stepping Paths"]
        },
        {
            id: "water-features",
            title: "Water Features",
            shortDesc: "Custom ponds, cascading fountains, and relaxing waterfalls.",
            fullDesc: "Infuse your landscape with soothing sound and visual tranquility. We design bio-filtered koi ponds, modern infinity-edge water walls, and energy-efficient fountain recirculating systems.",
            features: ["Biological Filtration", "LED Underwater Lights", "Natural Rock Cascades", "Zero-Maintenance Ponds"]
        },
        {
            id: "outdoor-lighting",
            title: "Outdoor Lighting",
            shortDesc: "Decorative, architectural, and smart landscape lighting.",
            fullDesc: "Transform your outdoor atmosphere after dusk with energy-efficient low-voltage LED lighting. We highlight architectural features, pathways, specimen trees, and water elements with smartphone controls.",
            features: ["Smart WiFi Control", "Low-Voltage Brass Fixtures", "Tree Uplighting", "Pathway Safety Illumination"]
        },
        {
            id: "irrigation-systems",
            title: "Irrigation Systems",
            shortDesc: "Automatic smart watering and rainwater recycling solutions.",
            fullDesc: "Conserve water while keeping your plants thriving. Our weather-sensing smart irrigation systems adjust watering schedules automatically based on real-time climate data.",
            features: ["Drip Irrigation", "Weather Sensor Integration", "Rainwater Harvesting", "Zoned Sprinkler Layouts"]
        },
        {
            id: "lawn-installation",
            title: "Lawn Installation",
            shortDesc: "Premium natural turf grass laying and high-grade artificial turf.",
            fullDesc: "Achieve lush, vibrant green lawns with our premium sod installation or ultra-realistic artificial turf designed for high durability, zero watering, and pet-friendly usage.",
            features: ["Organic Turf Sodding", "Drainage Layer Prep", "Pet-Friendly Synthetic Grass", "UV-Resistant Fibers"]
        },
        {
            id: "garden-maintenance",
            title: "Garden Maintenance",
            shortDesc: "Comprehensive seasonal care, pruning, and health management.",
            fullDesc: "Keep your investment looking pristine year-round. Our horticulturists offer weekly or monthly care packages including precision pruning, fertilizing, pest management, and seasonal plantings.",
            features: ["Precision Tree Pruning", "Organic Soil Nutrition", "Pest & Disease Care", "Seasonal Flower Rotation"]
        }
    ],

    beforeAfterCases: [
        {
            id: "case-1",
            category: "courtyard",
            title: "Vertical Living Patio Transformation",
            location: "Beverly Hills, CA",
            beforeImage: "assets/images/before_garden.png",
            afterImage: "assets/images/user_photo_3.jpg",
            description: "Converted an unkept backyard area into a luxury twilight deck with vertical green wall, LED step lights, concrete slab pathway, and water fountain."
        },
        {
            id: "case-2",
            category: "villas",
            title: "Palatial Villa Lawn & Paver Estate",
            location: "Malibu, CA",
            beforeImage: "assets/images/before_garden.png",
            afterImage: "assets/images/user_photo_2.jpg",
            description: "Transformed an uneven dirt lot into a grand villa estate with geometric stone paver grid in grass, rounded topiaries, and black stone waterfall."
        },
        {
            id: "case-3",
            category: "courtyard",
            title: "Multi-Level Raised Courtyard",
            location: "Pasadena, CA",
            beforeImage: "assets/images/before_garden.png",
            afterImage: "assets/images/user_photo_1.jpg",
            description: "Constructed custom cedar planter beds, wooden stair treads with stone risers, and hanging garden greenery."
        },
        {
            id: "case-4",
            category: "courtyard",
            title: "Zen Water Channel & Pebble Courtyard",
            location: "Santa Monica, CA",
            beforeImage: "assets/images/before_garden.png",
            afterImage: "assets/images/user_photo_5.jpg",
            description: "Installed a lotus pond water channel, black river pebble groundcover, slate stepping discs, and traditional timber veranda pillars."
        }
    ],

    projects: [
        {
            id: "proj-1",
            title: "Modern Villa Vertical Oasis",
            category: "villas",
            categoryName: "Villas",
            image: "assets/images/user_photo_3.jpg",
            location: "Bel Air, Los Angeles",
            area: "8,500 sq.ft",
            services: ["Vertical Green Wall", "Hardscaping", "Smart Lighting"],
            budget: "$110,000 - $135,000",
            duration: "7 Weeks",
            description: "A state-of-the-art modern villa patio featuring custom living green walls, wooden deck seating, LED step lights, and integrated fountain."
        },
        {
            id: "proj-2",
            title: "Palm Villa Lawn & Stone Grid",
            category: "villas",
            categoryName: "Villas",
            image: "assets/images/user_photo_2.jpg",
            location: "Malibu, CA",
            area: "14,000 sq.ft",
            services: ["Geometric Paver Lawn", "Topiary Shrubs", "Rock Water Feature"],
            budget: "$145,000 - $180,000",
            duration: "9 Weeks",
            description: "Luxury estate front lawn featuring interlocking stone paver grid embedded in lush green sod, palm trees, and black rock waterfall."
        },
        {
            id: "proj-3",
            title: "Tiered Courtyard & Hanging Gardens",
            category: "courtyards",
            categoryName: "Courtyards",
            image: "assets/images/user_photo_1.jpg",
            location: "Pasadena, CA",
            area: "4,500 sq.ft",
            services: ["Planter Construction", "Stair Paving", "Drip Systems"],
            budget: "$65,000 - $85,000",
            duration: "5 Weeks",
            description: "Multi-level residential courtyard with timber raised beds, hanging planter displays, and stone-faced steps."
        },
        {
            id: "proj-4",
            title: "Formal English Boxwood Walkway",
            category: "gardens",
            categoryName: "Gardens",
            image: "assets/images/user_photo_4.jpg",
            location: "Calabasas, CA",
            area: "6,200 sq.ft",
            services: ["Formal Hedges", "Gravel Pathway", "Tiered Fountain"],
            budget: "$55,000 - $70,000",
            duration: "4 Weeks",
            description: "Classic symmetry garden featuring rounded boxwood hedges, crushed marble gravel path, pink flowering borders, and stone fountain."
        },
        {
            id: "proj-5",
            title: "Asian Zen Lotus Channel Courtyard",
            category: "courtyards",
            categoryName: "Courtyards",
            image: "assets/images/user_photo_5.jpg",
            location: "Santa Barbara, CA",
            area: "5,000 sq.ft",
            services: ["Lotus Water Feature", "Pebble Paving", "Stepping Stones"],
            budget: "$95,000 - $120,000",
            duration: "6 Weeks",
            description: "Peaceful Zen courtyard showcasing black river pebble paving, circular stone steps, lotus reflection channel, and timber columns."
        }
    ],

    process: [
        { step: "01", title: "Consultation", desc: "Initial meeting to understand your vision, lifestyle requirements, and budget framework." },
        { step: "02", title: "Site Visit", desc: "Detailed land survey, soil analysis, sunlight assessment, and topographical mapping." },
        { step: "03", title: "Concept Design", desc: "Crafting preliminary space layouts, material boards, and architectural sketches." },
        { step: "04", title: "3D Visualization", desc: "Photorealistic 3D renders allowing full walk-through previews of the final landscape." },
        { step: "05", title: "Material Selection", desc: "Choosing exact natural stone samples, paver types, foliage palettes, and fixtures." },
        { step: "06", title: "Construction", desc: "Turnkey execution with precision earthmoving, hardscaping, planting, and lighting." },
        { step: "07", title: "Final Handover", desc: "Walk-through inspection, smart controller setup, and delivery of care manuals." },
        { step: "08", title: "Maintenance", desc: "Ongoing seasonal care programs to ensure your landscape thrives for decades." }
    ],

    materials: [
        { id: "mat-1", name: "Cut Laterite Stone Blocks", category: "stones", categoryName: "Natural Stones", image: "assets/images/laterite_stone.png", desc: "Authentic Kerala red laterite cut blocks, highly durable for boundary walls & rustic cladding.", price: "₹45 - ₹65 / sq.ft", maintenance: "Low", climate: "Kerala Tropical Heavy Rainfall", sunlight: "Full Sun", water: "Low", tags: ["Kerala Native", "Laterite", "Cladding", "Wall"] },
        { id: "mat-2", name: "Kota Green Limestone", category: "stones", categoryName: "Natural Stones", image: "assets/images/kota_stone.png", desc: "Cool slip-resistant natural limestone slabs ideal for walkways and pool decks.", price: "₹55 - ₹85 / sq.ft", maintenance: "Low", climate: "All Climate", sunlight: "Full / Partial", water: "Low", tags: ["Limestone", "Kota", "Paving", "Cool Surface"] },
        { id: "mat-3", name: "Flamed Black Granite", category: "stones", categoryName: "Natural Stones", image: "assets/images/user_photo_3.jpg", desc: "Textured flamed finish black granite slabs for high-end modern patio paving.", price: "₹120 - ₹180 / sq.ft", maintenance: "Very Low", climate: "High Resistance", sunlight: "Full Sun", water: "Low", tags: ["Granite", "Modern", "Black", "Flamed"] },
        { id: "mat-4", name: "Cuddapah Black Slate", category: "stones", categoryName: "Natural Stones", image: "assets/images/after_garden.png", desc: "Natural South Indian black slate slabs for rustic stepping paths and water walls.", price: "₹60 - ₹95 / sq.ft", maintenance: "Low", climate: "Coastal & Tropical", sunlight: "Full / Partial", water: "Low", tags: ["Slate", "Cuddapah", "Stepping Stone"] },
        { id: "mat-5", name: "Polished White Pebbles", category: "stones", categoryName: "Natural Stones", image: "assets/images/user_photo_5.jpg", desc: "Snow-white river pebbles for Zen gardens, planter borders, and reflection channels.", price: "₹35 - ₹55 / kg", maintenance: "Low", climate: "All Weather", sunlight: "Full Sun", water: "Low", tags: ["Pebbles", "White", "Zen", "Border"] },
        { id: "mat-6", name: "Interlocking Clay Pavers", category: "pavers", categoryName: "Paving Materials", image: "assets/images/user_photo_2.jpg", desc: "Eco-friendly terracotta clay pavers engineered for driveways and garden paths.", price: "₹45 - ₹65 / sq.ft", maintenance: "Low", climate: "Kerala Rain Resilient", sunlight: "Full Sun", water: "Low", tags: ["Clay", "Pavers", "Terracotta", "Driveway"] },
        { id: "mat-7", name: "Mexican Carpet Grass", category: "lawns", categoryName: "Lawn & Grass", image: "assets/images/kerala_grass.png", desc: "Lush dense tropical sod grass, soft underfoot and highly resilient for Kerala gardens.", price: "₹25 - ₹40 / sq.ft", maintenance: "Moderate", climate: "Kerala Tropical", sunlight: "Full Sun", water: "Moderate", tags: ["Natural Grass", "Mexican Sod", "Lawn"] },
        { id: "mat-8", name: "Korean Velvet Grass (Zoysia)", category: "lawns", categoryName: "Lawn & Grass", image: "assets/images/user_photo_2.jpg", desc: "Ultra-fine velvet texture grass requiring minimal mowing, perfect for villa lawns.", price: "₹35 - ₹55 / sq.ft", maintenance: "Low", climate: "Tropical & Subtropical", sunlight: "Full Sun", water: "Low", tags: ["Korean Grass", "Zoysia", "Low Maintenance"] },
        { id: "mat-9", name: "Artificial Turf 30mm", category: "lawns", categoryName: "Lawn & Grass", image: "assets/images/project_rooftop.png", desc: "UV-stabilized synthetic grass for rooftops, balconies, and shaded zero-water courtyards.", price: "₹65 - ₹110 / sq.ft", maintenance: "Zero", climate: "All Climate", sunlight: "Shade / Sun", water: "Zero", tags: ["Synthetic", "Artificial Turf", "Balcony"] },
        { id: "mat-10", name: "Coconut Palm Tree (Cocos Nucifera)", category: "trees", categoryName: "Trees & Palms", image: "assets/images/coconut_palm.png", desc: "Iconic Kerala tropical palm, provides tropical canopy, shade, and coastal charm.", price: "₹1,500 - ₹4,500 / tree", maintenance: "Low", climate: "Coastal & Humid Tropical", sunlight: "Full Sun", water: "Moderate", tags: ["Coconut Palm", "Kerala Native", "Shade Tree"] },
        { id: "mat-11", name: "Plumeria Frangipani (Palamaram)", category: "trees", categoryName: "Trees & Palms", image: "assets/images/plumeria.png", desc: "Fragrant white and yellow flowering tropical accent tree with architectural branching.", price: "₹850 - ₹2,500 / tree", maintenance: "Low", climate: "Tropical Kerala", sunlight: "Full Sun", water: "Low", tags: ["Frangipani", "Flowering Tree", "Fragrant"] },
        { id: "mat-12", name: "Areca Palm (Clustered)", category: "palms", categoryName: "Palms & Shrubs", image: "assets/images/user_photo_1.jpg", desc: "Feathery green privacy screening palm, ideal along boundary walls and courtyards.", price: "₹350 - ₹1,200 / pot", maintenance: "Low", climate: "Humid Tropical", sunlight: "Partial Shade / Sun", water: "Moderate", tags: ["Areca", "Privacy Screen", "Palm"] },
        { id: "mat-13", name: "Heliconia & Bird of Paradise", category: "flowers", categoryName: "Flowers & Flora", image: "assets/images/user_photo_3.jpg", desc: "Vibrant tropical orange & red architectural flowers thriving in humid coastal soil.", price: "₹180 - ₹450 / plant", maintenance: "Low", climate: "Kerala Rain Heavy Zone", sunlight: "Partial Shade", water: "Moderate", tags: ["Heliconia", "Bird of Paradise", "Tropical Flower"] },
        { id: "mat-14", name: "Sacred Lotus & Blue Water Lily", category: "waterplants", categoryName: "Water Plants", image: "assets/images/user_photo_5.jpg", desc: "Aquatic blooming lotus and lilies for reflection channels, pond canals, and bowls.", price: "₹250 - ₹600 / container", maintenance: "Low", climate: "Aquatic", sunlight: "Full Sun", water: "High (Submerged)", tags: ["Lotus", "Water Lily", "Aquatic"] },
        { id: "mat-15", name: "Low-Voltage Antiqued Brass Path Light", category: "products", categoryName: "Garden Accessories", image: "assets/images/hero_bg.png", desc: "Solid brass weatherproof 2700K warm LED walkway fixture with ground stake.", price: "₹2,200 - ₹3,800 / fixture", maintenance: "Low", climate: "IP68 Waterproof", sunlight: "N/A", water: "N/A", tags: ["Lighting", "Brass LED", "Nightscape"] }
    ],

    testimonials: [
        {
            id: "t-1",
            name: "Eleanor & Marcus Vance",
            role: "Homeowners, Beverly Hills",
            rating: 5,
            project: "Modern Villa Landscape",
            comment: "Green Stone completely reinvented our outdoor space. The GR≡≡N STON≡ logo craftsmanship standard carries through to every stone detail. The interactive 3D preview matched the real result 100%!"
        },
        {
            id: "t-2",
            name: "David Chen",
            role: "Commercial Developer",
            rating: 5,
            project: "Tech Park Plaza",
            comment: "Extremely professional team. Their smart irrigation installation saved our property over 40% on annual water bills while maintaining lush greenery."
        },
        {
            id: "t-3",
            name: "Sophia Martinez",
            role: "Estate Owner, Malibu",
            rating: 5,
            project: "Hillside Hardscaping",
            comment: "The before-and-after change is unbelievable. Their attention to natural basalt stone work and underwater fountain lighting exceeded all our expectations."
        }
    ],

    blogs: [
        {
            id: "b-1",
            title: "Choosing the Right Natural Stone for Modern Patios",
            category: "Stone Selection",
            date: "July 24, 2026",
            image: "assets/images/user_photo_3.jpg",
            summary: "Compare Basalt, Granite, and Sandstone for weather resistance, warmth, and luxury aesthetic appeal.",
            content: "Natural stone is the backbone of luxury hardscaping. When selecting materials, consider thermal conductivity, slip resistance, and porousness..."
        },
        {
            id: "b-2",
            title: "10 Drought-Tolerant Plants That Look Ultra Luxury",
            category: "Plant Guides",
            date: "June 18, 2026",
            image: "assets/images/user_photo_2.jpg",
            summary: "Design a stunning garden that uses 60% less water without sacrificing vibrant colors and sculptural shapes.",
            content: "Drought-tolerant landscaping no longer means sparse gravel and cacti. Explore Agave, Olive trees, Lavender, and Architectural Grasses..."
        },
        {
            id: "b-3",
            title: "The Art of Outdoor Lighting & Nightscape Design",
            category: "Outdoor Living",
            date: "May 12, 2026",
            image: "assets/images/user_photo_1.jpg",
            summary: "How to use low-voltage LED uplighting, moonlighting, and water illumination for evening elegance.",
            content: "Great lighting does not illuminate the light fixture; it highlights the beauty of trees, stone textures, and water features..."
        }
    ],

    faqs: [
        {
            q: "How long does a landscape project usually take from design to completion?",
            a: "Typical residential projects take between 3 to 6 weeks for construction following final 3D design approval. Larger estates or commercial developments can take 8 to 14 weeks."
        },
        {
            q: "Do you provide photorealistic 3D design visualizations before starting?",
            a: "Yes! Every project includes custom 3D architectural renders and walking previews so you can review colors, stone layouts, and lighting before any physical work begins."
        },
        {
            q: "How is the project cost estimated?",
            a: "Our pricing depends on plot size, terrain complexity, material choices (e.g., natural granite vs concrete pavers), water features, and lighting systems. Use our online AI Cost Estimator for an instant breakdown!"
        },
        {
            q: "Which plant species are best suited for minimal water consumption?",
            a: "We curate custom palettes featuring Olive Trees, Architectural Succulents, Lavender, Blue Fescue, and Native Grasses that thrive on smart drip irrigation."
        },
        {
            q: "Do you offer post-installation garden maintenance packages?",
            a: "Yes, we provide weekly and monthly maintenance programs covering organic fertilization, precision pruning, smart irrigation audits, and seasonal flower rotations."
        },
        {
            q: "Is smart automated irrigation included in hardscape packages?",
            a: "We integrate weather-sensing smart drip and sprinkler systems in all comprehensive garden construction and lawn installation projects."
        }
    ]
};
