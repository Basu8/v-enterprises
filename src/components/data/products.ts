export type ProductItem = {
  id: string;
  name: string;
  image: string;
  category?: string;
  isIndividualProduct?: boolean;
};

export type ProductDetail = {
  id: string;
  title: string;
  category: string;
  price: string;
  minOrderQty: string;
  specs: { label: string; value: string }[];
  bullets: string[];
  mainImage: string;
  galleryImages: string[];
};

export type ProductGroup = {
  id: string;
  title: string;
  description: string;
  items: ProductItem[];
  hasCategoryPage?: boolean;
};

// ----- LIST PAGE GROUPS -----
export const productGroups: ProductGroup[] = [
  {
    id: "heat-gun",
    title: "Heat Gun",
    description:
      "Prominent & leading wholesaler from Sinnar, we offer Bosch Heat Gun.",
    items: [
      {
        id: "bosch-heat-gun",
        name: "Bosch Heat Gun",
        image: "/heat-gun/bosch-heat-gun-1.jpg",
        isIndividualProduct: true,
      },
    ],
    hasCategoryPage: false
  },
  {
    id: "hand-gloves",
    title: "Hand Gloves",
    description:
      "Wholesaler of a wide range of products which include nitrex green nitrile hand gloves, industrial leather hand gloves, black cotton knitted hand gloves, cotton safety hand gloves and cut proof hand gloves.",
    items: [
      {
        id: "nitrex-green-nitrile-hand-gloves",
        name: "Nitrex Green Nitrile Hand Gloves",
        image: "/nitrex-hand-gloves/nitrex-green.jpg",
        category: "hand-gloves",
      },
      {
        id: "industrial-leather-hand-gloves",
        name: "Industrial Leather Hand Gloves",
        image: "/industrial-hand-gloves/industrial-leather.jpg",
        category: "hand-gloves",
      },
      {
        id: "black-cotton-knitted-hand-gloves",
        name: "Black Cotton Knitted Hand Gloves",
        image: "/cotton-hand-gloves/black-cotton.jpg",
        category: "hand-gloves",
      },
      {
        id: "cotton-safety-hand-gloves",
        name: "Cotton Safety Hand Gloves",
        image: "/safety-hand-gloves/cotton-safety.jpg",
        category: "hand-gloves",
      },
      {
        id: "cut-proof-hand-gloves",
        name: "Cut Proof Hand Gloves",
        image: "/cut-hand-gloves/cut-proof.jpg",
        category: "hand-gloves",
      },
      {
        id: "pvc-safety-hand-gloves",
        name: "PVC Safety Hand Gloves",
        image: "/pvc-hand-gloves/pvc-safety.jpg",
        category: "hand-gloves",
      },
      {
        id: "white-asbestos-hand-gloves",
        name: "White Asbestos Hand Gloves",
        image: "/white-hand-gloves/white-asbestos.jpg",
        category: "hand-gloves",
      },
    ], hasCategoryPage: true
  },
  {
    id: "forklift-parts",
    title: "Forklift Parts",
    description:
      "Our product range includes a wide range of Anal Fuse Forklift, Forklift Support Wheel and Curtis Forklift Contactor.",
    items: [
      {
        id: "anal-fuse-forklift",
        name: "Anal Fuse Forklift",
        image: "/forklift/anal-fuse.jpg",
        category: "forklift-parts",
      },
      {
        id: "forklift-support-wheel",
        name: "Forklift Support Wheel",
        image: "/forkliftw/support-wheel.jpg",
        category: "forklift-parts",
      },
      {
        id: "curtis-forklift-contactor",
        name: "Curtis Forklift Contactor",
        image: "/forkliftc/contactor.jpg",
        category: "forklift-parts",
      },
    ], hasCategoryPage: true
  },
  {   
    id: "safety-goggles",
    title: "Safety Goggles",
    description:
      "Prominent & Leading Wholesaler from Sinnar, we offer Plastic Safety Goggle.",
    items: [
      {
        id: "safety-goggles-standard",
        name: "Safety Goggles Standard",
        image: "/safety-goggles/safety-goggles-1.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "adhesive-Paste",
    title: "Adhesive Paste",
    description:
      "Offering you a complete choice of products which include Kafuter Fabrication Adhesive Paste.",
    items: [
      {
        id: "kafuter-fabrication-adhesive-paste",
        name: "Kafuter Fabrication Adhesive Paste",
        image: "/adhesive-paste/epoxy-adhesive.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "3-ply-face-mask",
    title: "3 Ply Face Mask",
    description:
      "Offering you a complete choice of products which include 3 Ply Face Mask.",
    items: [
      {
        id: "3-ply-disposable-face-mask",
        name: "3 Ply Disposable Face Mask",
        image: "/face-mask/3-ply-face-mask.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "hacksaw-blade",
    title: "Hacksaw Blade",
    description:
      "Our range of products include Bipico High Speed Steel Hacksaw Blade.",
    items: [
      {
        id: "high-speed-steel-hacksaw-blade",
        name: "High Speed Steel Hacksaw Blade",
        image: "/hacksaw-blade/hacksaw-blade-1.jpg",
        isIndividualProduct: true
      },
    ],  hasCategoryPage: false
  },
  {
    id: "ear-plug",
    title: "Ear Plug",
    description:
      "Providing you the best range of 3M 1100 Disposable Ear Plug with effective & timely delivery.",
    items: [
      {
        id: "3m-1100-ear-plug",
        name: "3M 1100 Ear Plug",
        image: "/ear-plug/3m-1100-ear-plug.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "safety-shoes",
    title: "Safety Shoes",
    description:
      "Wholesaler of a wide range of products which include PVC Sole Safety Shoes.",
    items: [
      {
        id: "PVC-sole-safety-shoes",
        name: "PVC Sole Safety Shoes",
        image: "/safety-shoes/pvc-sole-safety-shoes.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "proximity-sensor",
    title: "Proximity Sensor",
    description:
      "Our product range includes a wide range of Inductive Proximity Sensor.",
    items: [
      {
        id: "inductive-proximity-sensor",
        name: "Inductive Proximity Sensor",
        image: "/proximity-sensor/proximity-sensor-1.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "led-bulb",
    title: "Led Bulb",
    description:
      "Wholesaler of a wide range of products which include 30 W Eveready Led Bulb..",
    items: [
      {
        id: "30-w-eveready-led-bulb",
        name: "30 W Eveready Led Bulb",
        image: "/led-bulb/30-w-eveready-led-bulb.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "flexible-coupling",
    title: "Flexible Coupling",
    description:
      "Leading Wholesaler of Timken Quick Flex Coupling Red Insert from Sinnar..",
    items: [
      {
        id: "timken-quick-flex-coupling-red-insert",
        name: "Timken Quick Flex Coupling Red Insert",
        image: "/flexible-coupling/timken-quick-flex-coupling-red-insert.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "industrial-grease",
    title: "Industrial Grease",
    description:
      "Our range of products include Mobil EP 00 Grease.",
    items: [
      {
        id: "mobil-ep-00-grease",
        name: "Mobil EP 00 Grease",
        image: "/industrial-grease/mobil-ep-00-grease.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "air-freshener",
    title: "Air Freshener",
    description:
      "Prominent & Leading Wholesaler from Sinnar, we offer Godrej Aer Power Pocket.",
    items: [
      {
        id: "godrej-aer-power-pocket",
        name: "Godrej Aer Power Pocket",
        image: "/air-freshener/godrej-aer-power-pocket.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "self-adhesive-tape",
    title: "Self Adhesive Tape",
    description:
      "Pioneers in the industry, we offer Self Adhesive Brown Tape from India.",
    items: [
      {
        id: "self-adhesive-brown-tape",
        name: "Self Adhesive Brown Tape",
        image: "/self-adhesive-tape/self-adhesive-brown-tape.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "battery-clip",
    title: "Battery Clip",
    description:
      "Leading Wholesaler of Car Battery Clamp from Sinnar.",
    items: [
      {
        id: "car-battery-clamp",
        name: "Car Battery Clamp",
        image: "/battery-clip/car-battery-clamp-1.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "ball-bearing",
    title: "Ball Bearing",
    description:
      "Providing you the best range of Skf Single Row Ball Bearing with effective & timely delivery.",
    items: [
      {
        id: "skf-single-row-ball-bearing",
        name: "Skf Single Row Ball Bearing",
        image: "/ball-bearing/skf-single-row-ball-bearing.jpg",
        isIndividualProduct: true
      },
    ],  hasCategoryPage: false
  },
  {
    id: "silicone-spray",
    title: "Silicone Spray",
    description:
      "Pioneers in the industry, we offer GSC Silicon Spray from India.",
    items: [
      {
        id: "gsc-silicon-spray",
        name: "GSC Silicon Spray",
        image: "/silicone-spray/gsc-silicon-spray.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "aviation-snip",
    title: "Aviation Snip",
    description:
      "Pioneers in the industry, we offer Pro Cut Aviation Tin Snip from India.",
    items: [
      {
        id: "pro-cut-aviation-tin-snip",
        name: "Pro Cut Aviation Tin Snip",
        image: "/aviation-snip/pro-cut-aviation-tin-snip.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "vibration-meter",
    title: "Vibration Meter",
    description:
      "Our range of products include HTC Vibration Testing Meter.",
    items: [
      {
        id: "htc-vibration-testing-meter",
        name: "HTC Vibration Testing Meter",
        image: "/vibration-meter/htc-vibration-testing-meter.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "timing-belt",
    title: "Timing Belt",
    description:
      "Pioneers in the industry, we offer 10mm Polyester Timing Belt from India.",
    items: [
      {
        id: "10mm-polyester-timing-belt",
        name: "10mm Polyester Timing Belt",
        image: "/timing-belt/10mm-polyester-timing-belt.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "alarm-system",
    title: "Alarm System",
    description:
      "Wholesaler of a wide range of products which include Kobra Safety Reversing Backup Alarm.",
    items: [
      {
        id: "kobra-safety-reversing-backup-alarm",
        name: "Kobra Safety Reversing Backup Alarm",
        image: "/alarm-system/kobra-safety-reversing-backup-alarm.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "eveready-batteries",
    title: "Eveready Batteries",
    description:
      "Our product range includes a wide range of Eveready CR2032 Ultima Pro Coin Battery.",
    items: [
      {
        id: "eveready-cr2032-ultima-pro-coin-battery",
        name: "Eveready CR2032 Ultima Pro Coin Battery",
        image: "/eveready-batteries/eveready-cr2032-ultima-pro-coin-battery.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "aluminum-ladder",
    title: "Aluminum Ladder",
    description:
      "Leading Wholesaler of Sufiyan Aluminium Folding Ladder from Sinnar.",
    items: [
      {
        id: "sufiyan-aluminium-folding-ladder",
        name: "Sufiyan Aluminium Folding Ladder",
        image: "/aluminum-ladder/sufiyan-aluminium-folding-ladder.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "camlin-marker",
    title: "Camlin Marker",
    description:
      "Our product range includes a wide range of Camlin Permanent Marker..",
    items: [
      {
        id: "camlin-permanent-marker",
        name: "Camlin Permanent Marker",
        image: "/camlin-marker/camlin-permanent-marker.jpg",
        isIndividualProduct: true
      },
    ],  hasCategoryPage: false
  },
  {
    id: "fire-extinguisher",
    title: "Fire Extinguisher",
    description:
      "Providing you the best range of 6 Litre Water Mist Fire Extinguisher with effective & timely delivery.",
    items: [
      {
        id: "6-litre-water-mist-fire-extinguisher",
        name: "6 Litre Water Mist Fire Extinguisher",
        image: "/fire-extinguisher/6-litre-water-mist-fire-extinguisher.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "duracell-battery",
    title: "Duracell Battery",
    description:
      "Prominent & Leading Wholesaler from Sinnar, we offer Duracell AA Alkaline Battery.",
    items: [
      {
        id: "duracell-aa-alkaline-battery",
        name: "Duracell AA Alkaline Battery",
        image: "/duracell-battery/duracell-aa-alkaline-battery.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "bouffant-cap",
    title: "Bouffant Cap",
    description:
      "Wholesaler of a wide range of products which include Blue Disposable Bouffant Cap.",
    items: [
      {
        id: "blue-disposable-bouffant-cap",
        name: "Blue Disposable Bouffant Cap",
        image: "/bouffant-cap/blue-disposable-bouffant-cap.jpg",
        isIndividualProduct: true
      },
    ],  hasCategoryPage: false
  },
  {
    id: "hydraulic-pipe",
    title: "Hydraulic Pipe",
    description:
      "Offering you a complete choice of products which include 1 Inch Hydraulic Pipe.",
    items: [
      {
        id: "1-inch-hydraulic-pipe",
        name: "1 Inch Hydraulic Pipe",
        image: "/hydraulic-pipe/1-inch-hydraulic-pipe.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "mobil-hydraulic-oils",
    title: "Mobil Hydraulic Oils",
    description:
      "Our range of products include Mobil AW 68 Hydraulic Oil.",
    items: [
      {
        id: "mobil-aw-68-hydraulic-oil",
        name: "Mobil AW 68 Hydraulic Oil",
        image: "/mobil-hydraulic-oils/mobil-aw-68-hydraulic-oil.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "needle-files",
    title: "Needle Files",
    description:
      "Our range of products include Jk Needle Files.",
    items: [
      {
        id: "jk-needle-files",
        name: "Jk Needle Files",
        image: "/needle-files/jk-needle-files.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "cutting-wheel",
    title: "Cutting Wheel",
    description:
      "We are a leading Wholesaler of Bosch Cutting Wheel from Sinnar, India.",
    items: [
      {
        id: "bosch-cutting-wheel",
        name: "Bosch Cutting Wheel",
        image: "/cutting-wheel/bosch-cutting-wheel.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "Permanent Marker Ink",
    title: "Permanent Marker Ink",
    description:
      "Providing you the best range of Camlin Permanent Marker Ink with effective & timely delivery.",
    items: [
      {
        id: "camlin-permanent-marker-ink",
        name: "Camlin Permanent Marker Ink",
        image: "/permanent-marker-ink/camlin-permanent-marker-ink.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "Pvc Safety Gumboots",
    title: "Pvc Safety Gumboots",
    description:
      "Our product range includes a wide range of PVC Safety Gum Boot.",
    items: [
      {
        id: "pvc-safety-gumboots",
        name: "PVC Safety Gum Boot",
        image: "/pvc-safety-gumboots/pvc-safety-gumboots.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
  {
    id: "automobile-horns",
    title: "Automobile Horns",
    description:
      "Pioneers in the industry, we offer Kobra Deluxe Automobile Horn from India.",
    items: [
      {
        id: "kobra-deluxe-automobile-horn",
        name: "Kobra Deluxe Automobile Horn",
        image: "/horn/kobra-deluxe-1.jpg",
        isIndividualProduct: true
      },
    ], hasCategoryPage: false
  },
];

// ----- DETAIL PAGE DATA -----
export const productDetails: ProductDetail[] = [
  {
    id: "nitrex-green-nitrile-hand-gloves",
    title: "Nitrex Green Nitrile Hand Gloves",
    category: "Hand Gloves",
    price: "₹ 58/Pack",
    minOrderQty: "100 Pack",
    specs: [
      { label: "Item Material", value: "Nitrile" },
      {label: "Glove Length", value: "Elbow Length" },
      { label: "Size", value: "8 inches" },
      { label: "Coating", value: "Full-dipped" },
      {label: "Brand", value: "Nitrex 15" },
      {label: "Item Type", value: "Powered" }, 
    ],
    bullets: [
      "Made from durable nitrile material",
      "Full-dipped coating for enhanced protection",
      "Elbow-length coverage for extended safety",
      "Plain pattern, ideal for industrial tasks",
    ],
    mainImage: "/nitrex-hand-gloves/nitrex-green.jpg",
    galleryImages: ["/nitrex-hand-gloves/nitrex-green.jpg", "/nitrex-hand-gloves/nitrex-green-2.jpg", "/nitrex-hand-gloves/nitrex-green-3.jpg"],
  },
  {
    id: "industrial-leather-hand-gloves",
    title: "Industrial Leather Hand Gloves",
    category: "Hand Gloves",
    price: "₹ 40/pair",
    minOrderQty: "100 Pair",
    specs: [
      { label: "Appearance", value: "Plain" },
      { label: "Finger Type", value: "Full Fingered" },
      { label: "Cuff Length", value: "6 inches" },
      { label: "Gender", value: "Unisex" },
      { label: "Use", value: "Industrial" },
      { label: "Size", value: "Free Size" },
      { label: "Wash Care", value: "Handwash" },
    ],
    bullets: ["Durable plain leather construction", "Full-fingered design for complete protection", "6-inch cuff for extended wrist coverage", "Unisex fit, ideal for industrial use"],
    mainImage: "/industrial-hand-gloves/industrial-leather.jpg",
    galleryImages: ["/industrial-hand-gloves/industrial-leather.jpg", "/industrial-hand-gloves/industrial-leather-2.jpg", "/industrial-hand-gloves/industrial-leather-3.jpg"],
  },
  {
    id: "black-cotton-knitted-hand-gloves",
    title: "Black Cotton Knitted Hand Gloves",
    category: "Hand Gloves",
    price: "₹ 8/Pair",
    minOrderQty: "500 Pair",
    specs: [
      { label: "Material", value: "Cotton" },
      { label: "Color", value: "Black" },
      { label: "Type", value: "Knitted" },
      { label: "Gauge", value: "7 Gauge" },
      { label: "Size", value: "Free Size" },
      { label: "Usage", value: "	Safety" },
      { label: "GSM", value: "280" },
    ],
    bullets: ["280 GSM cotton for reliable hand protection", "7-gauge knitted design ensures comfort and flexibility", "Ideal for general safety and handling tasks"],
    mainImage: "/cotton-hand-gloves/black-cotton.jpg",
    galleryImages: ["/cotton-hand-gloves/black-cotton.jpg", "/cotton-hand-gloves/black-cotton-2.jpg", "/cotton-hand-gloves/black-cotton-3.jpg"],
  },
  {
    id: "cotton-safety-hand-gloves",
    title: "Cotton Safety Hand Gloves",
    category: "Hand Gloves",
    price: "₹ 8/Pair",
    minOrderQty: "500 Pair",
    specs: [
      { label: "Material", value: "Cotton" },
      { label: "Color", value: "Black" },
      { label: "Gauge", value: "10 Gauge" },
      { label: "Pattern", value: "Plain" },
      {label: "Type", value: "Washable" },
      { label: "Size", value: "Free Size" },
    ],
    bullets: ["10-gauge cotton for breathable protection", "Full-fingered design ensures complete coverage", "Washable and reusable for extended use", "Unisex fit, ideal for general safety applications"],
    mainImage: "/safety-hand-gloves/cotton-safety.jpg",
    galleryImages: ["/safety-hand-gloves/cotton-safety.jpg", "/safety-hand-gloves/cotton-safety-2.jpg", "/safety-hand-gloves/cotton-safety-3.jpg"],
  },
  {
    id: "cut-proof-hand-gloves",
    title: "Cut Proof Hand Gloves",
    category: "Hand Gloves",
    price: "₹ 19/pair",
    minOrderQty: "100 pair",
    specs: [
      { label: "Material", value: "Nitrile" },
      { label: "Size", value: "Large" },
      { label: "Brand", value: "SR Trends" },
      { label: "Color", value: "Grey" },
      { label: "Usage", value: "Industrial" },
      { label: "Feature", value: "Heat Resistant" },
      { label: "Gender", value: "Unisex" },
    ],
    bullets: ["Nitrile material with cut and heat resistance", "Gray finish with a secure large fit", "Ideal for high-risk industrial environments", "Designed for durability and worker safety"],
    mainImage: "/cut-hand-gloves/cut-proof.jpg",
    galleryImages: ["/cut-hand-gloves/cut-proof.jpg", "/cut-hand-gloves/cut-proof-2.jpg", "/cut-hand-gloves/cut-proof-3.jpg"],
  },
  {    
    id: "pvc-safety-hand-gloves",
    title: "PVC Safety Hand Gloves",
    category: "Hand Gloves", 
    price: "₹ 40/Pair",
    minOrderQty: "100 Pair",
    specs: [
      { label: "Material", value: "PVC" },
      { label: "Color", value: "Yellow" },
      { label: "Type", value: "Full Fingured" },
      { label: "Size", value: "Large" },
      { label: "Usage", value: "Industrial" },
      { label: "Gender", value: "Unisex" },
      { label: "Type", value: "Washable" },
    ],
    bullets: ["Durable PVC material with full-finger protection", "Washable and reusable for long-term use", "Large size, ideal for industrial applications", "Plain pattern for a clean, professional look"],
    mainImage: "/pvc-hand-gloves/pvc-safety.jpg",
    galleryImages: ["/pvc-hand-gloves/pvc-safety.jpg"],
  },
  {
    id: "white-asbestos-hand-gloves",
    title: "White Asbestos Hand Gloves",
    category: "Hand Gloves",
    price: "₹ 100/pair",
    minOrderQty: "100 Pair",
    specs: [
      { label: "Material", value: "Asbestos" },
      { label: "Color", value: "White" },
      { label: "Type", value: "Full Fingured" },
      { label: "Size", value: "Medium" },
      { label: "Usage", value: "Industrial Heat Insulation" },
      { label: "Gender", value: "Unisex" },
      { label: "Pattern", value: "Knitted" },
      { label: "GSM", value: "280" },
    ],
    bullets: ["Made from heat-resistant asbestos material", "Full-fingered and knitted for maximum coverage", "Unisex design suitable for high-heat tasks", "White color for a clean industrial appearance"],
    mainImage: "/white-hand-gloves/white-asbestos.jpg",
    galleryImages: ["/white-hand-gloves/white-asbestos.jpg"],
  },
  {
    id: "anal-fuse-forklift",
    title: "Anal Fuse Forklift",
    category: "Forklift Parts",
    price: "₹ 150/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Current Rating", value: "5A" },
      { label: "Material", value: "Aluminium" },
      { label: "Usage", value: "Industrial" },
      { label: "Packaging Type", value: "Box" },
      { label: "Voltage", value: "80 V DC" },
    ],
    bullets: [
      "Aluminium construction for lightweight durability", 
      "Designed for forklift forks with 80 V DC rating",
      "Packaged securely in a box for safe handling",
      "Ideal for reliable industrial electrical protection",
    ],
    mainImage: "/forklift/anal-fuse.jpg",
    galleryImages: ["/forklift/anal-fuse.jpg", "/forklift/anal-fuse-2.jpg", "/forklift/anal-fuse-3.jpg"],
  },
  {
    id: "forklift-support-wheel",
    title: "Forklift Support Wheel",
    category: "Forklift Parts",
    price: "₹ 3,850/Piece",
    minOrderQty: "5 Piece",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Diameter", value: "16 inch" },
      { label: "Width", value: "6 inch" },
      { label: "Shape", value: "Round" },
      { label: "Finishing", value: "Color Coated" },
    ],
    bullets: [
      "16-inch diameter, 6-inch width for stable support",
      "Durable steel construction with color-coated finish",
      "Round shape designed for smooth forklift operation",
      "Ideal replacement part for heavy-duty forklifts",
    ],
    mainImage: "/forkliftw/support-wheel.jpg",
    galleryImages: ["/forkliftw/support-wheel.jpg", "/forkliftw/support-wheel-2.jpg", "/forkliftw/support-wheel-3.jpg", "/forkliftw/support-wheel-4.jpg"],
  },
  {
    id: "curtis-forklift-contactor",
    title: "Curtis Forklift Contactor",
    category: "Forklift Parts",
    price: "₹ 4,800/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Material", value: "Plastic" },
      { label: "Model Name", value: "SW80-6" },
      { label: "Usage", value: "Industrial" },
      { label: "Voltage", value: "24 V DC" },
      { label: "Brand", value: "Curtis" },
    ],
    bullets: ["Industrial-grade contactor for forklift forks", "Durable plastic construction by Curtis","Model SW80-6 ensures reliable performance", "Designed for efficient forklift operation and control"],
    mainImage: "/forkliftc/contactor.jpg",
    galleryImages: ["/forkliftc/contactor.jpg", "/forkliftc/contactor-2.jpg", "/forkliftc/contactor-3.jpg"],
  },
  {
    id: "kobra-deluxe-automobile-horn",
    title: "Kobra Deluxe Automobile Horn",
    category: "Automobile Horns",
    price: "₹ 48 / Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Horn Type", value: "Air Horn" },
      { label: "Voltage", value: "12V" },
      { label: "Sound Configuration", value: "Single Piece (Single Tone)" },
      { label: "Sound Level (dB)", value: "105 dB" },
      { label: "Brand", value: "Kobra" },
      { label: "Model Number", value: "M-95" },
    ],
    bullets: [
      "12V air horn with powerful 105 dB sound output",
      "Single-tone design for clear signaling",
      "Durable build, ideal for automotive use",
      "Reliable performance for safety and alertness",
    ],
    mainImage: "/horn/kobra-deluxe-1.jpg",
    galleryImages: [
      "/horn/kobra-deluxe-1.jpg",
      "/horn/kobra-deluxe-2.jpg",
      "/horn/kobra-deluxe-3.jpg",
    ],
  },
  {
    id: "3-ply-disposable-face-mask",
    title: "3 Ply Disposable Face Mask",
    category: "3 Ply Face Mask",
    price: "₹ 1.80/Piece",
    minOrderQty: "200 Piece",
    specs: [
      { label: "Layers", value: "3 Ply" },
      { label: "Material", value: "Non-woven" },
      { label: "Packaging Size", value: "Pack of 100" },
      { label: "Sterile/ Non Sterile", value: "Sterile" },
      { label: "Usage", value: "Laboratory" },
    ],
    bullets: ["Sterile, disposable 3-ply face mask for lab use", "Made from breathable non-woven material", "Pack of 100 for bulk supply", "Designed to provide reliable protection in medical and industrial environments"],
    mainImage: "/face-mask/3-ply-face-mask.jpg",
    galleryImages: ["/face-mask/3-ply-face-mask.jpg", "/face-mask/3-ply-face-mask-2.jpg", "/face-mask/3-ply-face-mask-3.jpg", "/face-mask/3-ply-face-mask-4.jpg"],
  },
  {
    id: "high-speed-steel-hacksaw-blade",
    title: "High Speed Steel Hacksaw Blade",
    category: "Hacksaw Blade",
    price: "₹ 65/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Material", value: "High Speed Steel" },
      { label: "Dimension (L*W*T)", value: "300mm*12.5mm*0.63mm" },
      { label: "Thickness", value: "1 mm" },
      { label: "Usage", value: "Cutting Metal" },
      { label: "Brand", value: "Bipico" },
    ],
    bullets: ["High-speed steel blade, 300x12.5x0.63 mm dimensions", "1mm thickness for precise and durable metal cutting", "Ideal for heavy-duty industrial applications", "Trusted Bipico brand for quality and performance"],
    mainImage: "/hacksaw-blade/hacksaw-blade-1.jpg",
    galleryImages: ["/hacksaw-blade/hacksaw-blade-1.jpg"],
  },
  {
    id: "3m-1100-ear-plug",
    title: "3M 1100 Ear Plug",
    category: "Ear Plug",
    price: "₹ 8/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Model Name/Number", value: "1100" },
      { label: "Color", value: "Orange" },
      { label: "Noise Reduction Db", value: "29 NRR" },
      { label: "Usage", value: "Noise Reduction" },
      { label: "Brand", value: "3M" },
      { label: "Frequency", value: "29 Hz" },
      { label: "Material", value: "Foam" },
      { label: "Packing Type", value: "Foam" },
    ],
    bullets: [
      "Get the protection you need from the brand you can trust  at an affordable price, with the 3M 1100 and 1110 earplugs. Soft, hypoallergenic foam and a tapered design help provide a comfortable noise-reducing seal in the earcanal. 3M earplugs 1100 and 1110 are easy to roll down and are engineered for all-day comfort.", 
      "Tapered shape designed to fit most earcanals",
      "NRR 29 dB*",
      "Soft, hypoallergenic foam helps create a custom seal in the earcanal",
      "Comfortable cloth cord on 1110 product"
    ],
    mainImage: "/ear-plug/3m-1100-ear-plug.jpg",
    galleryImages: ["/ear-plug/3m-1100-ear-plug.jpg", "/ear-plug/3m-1100-ear-plug-2.jpg", "/ear-plug/3m-1100-ear-plug-3.jpg", "/ear-plug/3m-1100-ear-plug-4.jpg"],
  },
  {
    id: "PVC-sole-safety-shoes",
    title: "PVC Sole Safety Shoes",
    category: "Safety Shoes",
    price: "₹ 280/Pair",
    minOrderQty: "100 Pair",
    specs: [
      { label: "Outer Material", value: "PVC" },
      { label: "Upper Material", value: "Leather" },
      { label: "Protection Level", value: "S1P" },
      { label: "Ankle Type", value: "Low Ankle" },
      { label: "Color", value: "Black" },
      { label: "Usage", value: "Construction" },
      { label: "Leather Type", value: "Synthetic Leather" },
      { label: "Sizes Available", value: "8" },
      { label: "Features", value: "Waterproof" },
      { label: "Brand", value: "Micro Plus" },
    ],
    bullets: ["Synthetic leather upper with durable PVC sole", "S1P protection level for reliable industrial safety", "Black finish for a sleek, professional look", "deal for daily industrial and site use"],
    mainImage: "/safety-shoes/pvc-sole-safety-shoes.jpg",
    galleryImages: ["/safety-shoes/pvc-sole-safety-shoes.jpg", "/safety-shoes/pvc-sole-safety-shoes-2.jpg", "/safety-shoes/pvc-sole-safety-shoes-3.jpg"],
  },
  {
    id: "safety-goggles-standard",
    title: "Safety Goggles Standard",
    category: "Safety Goggles",
    price: "₹ 25/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Material", value: "Plastic" },
      { label: "Color", value: "Clear" },
      { label: "Usage", value: "Safety" },
      { label: "Lens Type", value: "Zero-power" },
      { label: "Color", value: "Transparent" },
      { label: "Thickness", value: "10 mm" },
      { label: "Weight", value: "15 g" },
    ],
    bullets: ["Transparent zero-power glass lenses for clear vision", "Durable plastic frame ensures lightweight protection", "Designed for safety in industrial environments", "Ideal for general eye protection during work"],
    mainImage: "/safety-goggles/safety-goggles-1.jpg",
    galleryImages: ["/safety-goggles/safety-goggles-1.jpg", "/safety-goggles/safety-goggles-2.jpg", "/safety-goggles/safety-goggles-3.jpg"],
  },
  {
    id: "kafuter-fabrication-adhesive-paste",
    title: "Kafuter Fabrication Adhesive Paste",
    category: "Adhesive Paste",
    price: "₹ 1,100/Kg",
    minOrderQty: "100 Kg",
    specs: [
      { label: "Packaging Size", value: "120g" },
      { label: "Strength", value: "High" },
      { label: "Grade Standard", value: "Chemical" },
      { label: "Surface Of Application", value: "Glass, Metal, Plastic, Wood" },
      { label: "Brand", value: "Kafuter" },
      { label: "Form", value: "Liquid" },
      { label: "Set Contain", value: "2 Piece" },
    ],
    bullets: ["High-strength chemical-grade adhesive paste", "Suitable for glass, metal, plastic, and wood surfaces", "Liquid form for easy application and strong bonding", "Ideal for industrial fabrication and repair tasks"],
    mainImage: "/adhesive-paste/epoxy-adhesive.jpg",
    galleryImages: ["/adhesive-paste/epoxy-adhesive.jpg", "/adhesive-paste/epoxy-adhesive-2.jpg", "/adhesive-paste/epoxy-adhesive-3.jpg"],
  },
  {
    id: "inductive-proximity-sensor",
    title: "Inductive Proximity Sensor",
    category: "Proximity Sensor",
    price: "₹ 600/Piece",
    minOrderQty: "10 Piece",
    specs: [
      { label: "Sensing Distance", value: "4 mm" },
      { label: "Diameter", value: "M12" },
      { label: "IP Rating", value: "IP67" },
      { label: "Usage", value: "Industrial" },
    ],
    bullets: ["Reliable proximity sensing", "Robust industrial design"],
    mainImage: "/proximity-sensor/proximity-sensor-1.jpg",
    galleryImages: ["/proximity-sensor/proximity-sensor-1.jpg", "/proximity-sensor/proximity-sensor-2.jpg", "/proximity-sensor/proximity-sensor-3.jpg"],
  },
  {
    id: "30-w-eveready-led-bulb",
    title: "30 W Eveready Led Bulb",
    category: "Led Bulb",
    price: "₹ 315/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Wattage", value: "30W" },
      { label: "Brand", value: "Eveready" },
      { label: "Color Temperature", value: "3000K" },
      { label: "Light Color", value: "Warm White Light" },
      { label: "BEE Star Rating", value: "1 Star" },
      { label: "Base Type", value: "B22" },
      { label: "Warranty", value: "1 Year" },
    ],
    bullets: ["30W power with warm white 3000K light", "B22 base for easy installation", "Energy-efficient with 1-star BEE rating", "Ideal for commercial and industrial lighting needs"],
    mainImage: "/led-bulb/30-w-eveready-led-bulb.jpg",
    galleryImages: ["/led-bulb/30-w-eveready-led-bulb.jpg", "/led-bulb/30-w-eveready-led-bulb-2.jpg", "/led-bulb/30-w-eveready-led-bulb-3.jpg"],
  },
  {
    id: "bosch-heat-gun",
    title: "Bosch Heat Gun",
    category: "Heat Gun",
    price: "₹ 2,200 / Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Power Consumption", value: "1800 W" },
      { label: "Model Name/Number", value: "GHG 180" },
      { label: "Warranty", value: "6 months" },
      { label: "Brand", value: "Bosch" },
      { label: "Color", value: "Blue" },
    ],
    bullets: [
      "1800W power for efficient heating tasks",
      "Model GHG 180 by trusted Bosch brand",
      "Robust blue design with 6-month warranty",
      "Suitable for industrial and workshop applications",
    ],
    mainImage: "/heat-gun/bosch-heat-gun-1.jpg",
    galleryImages: [
      "/heat-gun/bosch-heat-gun-1.jpg",
      "/heat-gun/bosch-heat-gun-2.jpg",
      "/heat-gun/bosch-heat-gun-3.jpg",
    ],
  },
  {
    id: "timken-quick-flex-coupling-red-insert",
    title: "Timken Quick Flex Coupling Red Insert",
    category: "Flexible Coupling",
    price: "₹ 2,580/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Brand", value: "Timken" },
      { label: "Material", value: "Rubber" },
      { label: "Color", value: "Red" },
      { label: "Packing Type", value: "	Packet" },
      { label: "Weight", value: "450 gm" },
      { label: "Usage", value: "Industrial" },
      { label: "Model Number", value: "QF25INSERT" },
    ],
    bullets: ["High-performance coupling insert", "Red insert for Timken coupling series"],
    mainImage: "/flexible-coupling/timken-quick-flex-coupling-red-insert.jpg",
    galleryImages: ["/flexible-coupling/timken-quick-flex-coupling-red-insert.jpg", "/flexible-coupling/timken-quick-flex-coupling-red-insert-2.jpg", "/flexible-coupling/timken-quick-flex-coupling-red-insert-3.jpg"],
  },
  {
    id: "mobil-ep-00-grease",
    title: "Mobil EP 00 Grease",
    category: "Industrial Grease",
    price: "₹ 248/Kg",
    minOrderQty: "100 Kg",
    specs: [
      { label: "Packaging Size", value: "20 kg" },
      { label: "Usage", value: "Industrial" },
      { label: "Color", value: "Yellow" },
      { label: "Model Name", value: "EP 00" },
      { label: "Brand", value: "Mobil" },
    ],
    bullets: ["Yellow industrial grease for heavy-duty lubrication", "Model EP 00 ensures superior protection and performance", "Available in 20 kg packaging for bulk use", "Trusted Mobil brand for reliable industrial applications"],
    mainImage: "/industrial-grease/mobil-ep-00-grease.jpg",
    galleryImages: ["/industrial-grease/mobil-ep-00-grease.jpg", "/industrial-grease/mobil-ep-00-grease-2.jpg", "/industrial-grease/mobil-ep-00-grease-3.jpg", "/industrial-grease/mobil-ep-00-grease-4.jpg"],
  },
  {
    id: "godrej-aer-power-pocket",
    title: "Godrej Aer Power Pocket",
    category: "Air Freshener",
    price: "₹ 60/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Packaging Size", value: "10 gm" },
      { label: "Form", value: "Gel" },
      { label: "Fragrance Type", value: "Tangy Delight" },
      { label: "Brand", value: "Godrej Aer" },
      { label: "Colour", value: "Yellow" },
    ],
    bullets: ["Long-lasting fragrance", "Compact pocket-friendly design"],
    mainImage: "/air-freshener/godrej-aer-power-pocket.jpg",
    galleryImages: ["/air-freshener/godrej-aer-power-pocket.jpg", "/air-freshener/godrej-aer-power-pocket-2.jpg", "/air-freshener/godrej-aer-power-pocket-3.jpg"],
  },
  {
    id: "self-adhesive-brown-tape",
    title: "Self Adhesive Brown Tape",
    category: "Self Adhesive Tape",
    price: "₹ 20/Piece",
    minOrderQty: "Rolls - MOQ applies",
    specs: [
      { label: "Width", value: "1 Inch" },
      { label: "Length", value: "10 m" },
      { label: "Adhesive Type", value: "Removable" },
      { label: "Application Surface", value: "Cardboard and Paper"},
      { label: "Color", value: "Brown" },
    ],
    bullets: ["1-inch wide, 10-meter long removable adhesive tape", "Ideal for cardboard and paper applications", "Strong brown color for professional packaging", "Easy to apply and remove without residue"],
    mainImage: "/self-adhesive-tape/self-adhesive-brown-tape.jpg",
    galleryImages: ["/self-adhesive-tape/self-adhesive-brown-tape.jpg", "/self-adhesive-tape/self-adhesive-brown-tape-2.jpg", "/self-adhesive-tape/self-adhesive-brown-tape-3.jpg"],
  },
  {
    id: "car-battery-clamp",
    title: "Car Battery Clamp",
    category: "Battery Clip",
    price: "₹ 300/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "No of Pins", value: "2" },
      { label: "Material", value: "Brass" },
      { label: "Usage", value: "Car" },
      { label: "Finishing", value: "Polished"},
      { label: "Length", value: "15 cm" },
      { label: "Width", value: "9 cm" },
    ],
    bullets: ["Polished brass clamp with 2 pins for secure connection", "15 cm length for easy handling and fit", "Designed for reliable automotive battery applications", "Durable finish ensures long-lasting performance"],
    mainImage: "/battery-clip/car-battery-clamp-1.jpg",
    galleryImages: ["/battery-clip/car-battery-clamp-1.jpg", "/battery-clip/car-battery-clamp-2.jpg", "/battery-clip/car-battery-clamp-3.jpg"],
  },
  {
    id: "skf-single-row-ball-bearing",
    title: "Skf Single Row Ball Bearing",
    category: "Ball Bearing",
    price: "₹ 198/Piece",
    minOrderQty: "10 Piece",
    specs: [
      { label: "Bearing Type", value: "	Ball Bearing" },
      { label: "Sealing", value: "One side seal" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Application", value: "Automobile" },
      { label: "Brand", value: "SKF" },
    ],
    bullets: ["Single row stainless steel ball bearing", "One-side sealed for protection against contaminants", "Ideal for automotive applications", "Trusted SKF brand ensures durability and precision"],
    mainImage: "/ball-bearing/skf-single-row-ball-bearing.jpg",
    galleryImages: ["/ball-bearing/skf-single-row-ball-bearing.jpg", "/ball-bearing/skf-single-row-ball-bearing-2.jpg", "/ball-bearing/skf-single-row-ball-bearing-3.jpg"],
  },
  {
    id: "gsc-silicon-spray",
    title: "GSC Silicon Spray",
    category: "Silicone Spray",
    price: "₹ 95/Bottle",
    minOrderQty: "100 Bottle",
    specs: [
      { label: "Usage", value: "Rubber" },
      { label: "Form", value: "Liquid" },
      { label: "Material", value: "Aerosols" },
      { label: "Packaging Type", value: "Bottle" },
      { label: "Brand", value: "GSC" },
      { label: "Item Weight", value: "400 ml" },
      { label: "Shelf Life", value: "12 Months" },
      { label: "Grade Standard", value: "Technical Grade" },
    ],
    bullets: ["400ml aerosol silicone spray for rubber applications", "Liquid form ensures smooth, non-sticky finish", "Ideal for lubrication, protection, and maintenance", "Reliable GSC brand, packaged in an easy-to-use bottle"],
    mainImage: "/silicone-spray/gsc-silicon-spray.jpg",
    galleryImages: ["/silicone-spray/gsc-silicon-spray.jpg", "/silicone-spray/gsc-silicon-spray-2.jpg", "/silicone-spray/gsc-silicon-spray-3.jpg"],
  },
  {
    id: "pro-cut-aviation-tin-snip",
    title: "Pro Cut Aviation Tin Snip",
    category: "Aviation Snip",
    price: "₹ 300/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Size", value: "10inch" },
      { label: "Material", value: "Mild Steel" },
      { label: "Usage", value: "Cutting" },
      { label: "Packaging Type", value: "Packet" },
      { label: "Color", value: "Black(Base)" },
      { label: "Item Weight", value: "350 g" },
      { label: "Brand", value: "Pro Cut" },
      { label: "Model No", value: "Ali-135-39" },
      { label: "Handle Material", value: "Rubber" },
    ],
    bullets: ["Precision tin snip", "Ergonomic handle for reduced fatigue"],
    mainImage: "/aviation-snip/pro-cut-aviation-tin-snip.jpg",
    galleryImages: ["/aviation-snip/pro-cut-aviation-tin-snip.jpg", "/aviation-snip/pro-cut-aviation-tin-snip-2.jpg"],
  },
  {
    id: "htc-vibration-testing-meter",
    title: "HTC Vibration Testing Meter",
    category: "Vibration Meter",
    price: "₹ 11,000/Piece",
    minOrderQty: "10 Piece",
    specs: [
      { label: "Model Name/Number", value: "VB-8205" },
      { label: "Display", value: "Digital" },
      { label: "Brand", value: "HTC" },
      { label: "Accuracy", value: "1.8 dB" },
      { label: "Material", value: "Plastic" },
      { label: "Calibration", value: "Automatic" },
      { label: "Resolution", value: "1 dB" },
      { label: "Dimensions", value: "124(H) x 62(W) x 30(D)mm" },

    ],
    bullets: ["Digital vibration meter, model VB-8205", "Compact design: 124x62x30 mm for easy handling", "Automatic calibration for accurate measurements", "Trusted HTC brand, ideal for industrial diagnostics"],
    mainImage: "/vibration-meter/htc-vibration-testing-meter.jpg",
    galleryImages: ["/vibration-meter/htc-vibration-testing-meter.jpg", "/vibration-meter/htc-vibration-testing-meter-2.jpg"],
  },
  {
    id: "10mm-polyester-timing-belt",
    title: "10mm Polyester Timing Belt",
    category: "Timing Belt",
    price: "₹ 480/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Pitch Series", value: "H Type" }, 
      { label: "Belt Width", value: "10 mm" },
      { label: "Application", value: "Power Transmission" },
      { label: "Belt Teeth", value: "Single Sided Teeth" },
      { label: "Material", value: "PU" },
    ],
    bullets: ["10mm wide H-type PU belt for power transmission", "Single-sided teeth ensure precise engagement", "Durable material for long-lasting performance", "Ideal for industrial machinery and automation systems"],
    mainImage: "/timing-belt/10mm-polyester-timing-belt.jpg",
    galleryImages: ["/timing-belt/10mm-polyester-timing-belt.jpg", "/timing-belt/10mm-polyester-timing-belt-2.jpg", "/timing-belt/10mm-polyester-timing-belt-3.jpg"],
  },
  {
    id: "kobra-safety-reversing-backup-alarm",
    title: "Kobra Safety Reversing Backup Alarm",
    category: "Alarm System",
    price: "₹ 880/Piece",
    minOrderQty: "5 Piece",
    specs: [
      { label: "Audible Range", value: "102 dB" }, 
      { label: "Number of Stages", value: "Two-Stage Alarms"},
      { label: "Type", value: "Wired Surface" },
      { label: "Usage", value: "Commercial" },
      { label: "Brand", value: "Kobra" },
    ],
    bullets: ["Two-stage wired alarm with 102 dB audible range", "Operates on DC 12V for reliable commercial use", "Enhances safety during vehicle reversing", "Designed for durable, high-performance alerting"],
    mainImage: "/alarm-system/kobra-safety-reversing-backup-alarm.jpg",
    galleryImages: ["/alarm-system/kobra-safety-reversing-backup-alarm.jpg", "/alarm-system/kobra-safety-reversing-backup-alarm-2.jpg"],
  },
  {
    id: "eveready-cr2032-ultima-pro-coin-battery",
    title: "Eveready CR2032 Ultima Pro Coin Battery",
    category: "Eveready Batteries",
    price: "₹ 30/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Voltage", value: "3 V" }, 
      { label: "Type", value: "CR2032" },
      { label: "Brand", value: "Eveready" },
      { label: "Material", value: "Lithium" },
      { label: "Usage", value: "Car Remote" },
      { label: "Model Number", value: "Ultima Pro 2032" },
    ],
    bullets: ["3V lithium coin cell battery for reliable power", "Model Ultima Pro 2032 by Eveready", "Ideal for car remotes and small electronic devices", "Long-lasting and consistent performance"],
    mainImage: "/eveready-batteries/eveready-cr2032-ultima-pro-coin-battery.jpg",
    galleryImages: ["/eveready-batteries/eveready-cr2032-ultima-pro-coin-battery.jpg", "/eveready-batteries/eveready-cr2032-ultima-pro-coin-battery-2.jpg", "/eveready-batteries/eveready-cr2032-ultima-pro-coin-battery-3.jpg"],
  },
  {
    id: "sufiyan-aluminium-folding-ladder",
    title: "Sufiyan Aluminium Folding Ladder",
    category: "Aluminum Ladder",
    price: "₹ 2,100/Piece",
    minOrderQty: "5 Piece",
    specs: [
      { label: "Height", value: "6 ft" }, 
      { label: "Material", value: "Aluminium" },
      { label: "Load Capacity", value: "180 kg" },
      { label: "Brand", value: "Sufiyan" },
      { label: "Number Of Step", value: "5 Step" },
      { label: "Color", value: "Silver" },
      { label: "Brand", value: "Sufiyan" },
    ],
    bullets: ["6 ft height with 5 steps for versatile use", "Durable aluminum build supporting up to 180 kg", "Lightweight silver finish for easy portability", "Ideal for industrial and maintenance tasks"],
    mainImage: "/aluminum-ladder/sufiyan-aluminium-folding-ladder.jpg",
    galleryImages: ["/aluminum-ladder/sufiyan-aluminium-folding-ladder.jpg"],
  },
  {
    id: "camlin-permanent-marker",
    title: "Camlin Permanent Marker",
    category: "Camlin Marker",
    price: "₹ 16/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Tip Size", value: "1.0mm" },
      { label: "Brand", value: "Camlin" },
      { label: "Color", value: "Black" },
      { label: "Material", value: "PVC" },
      { label: "Usage", value: "For Permanent Marking" },
    ],
    bullets: ["1.0mm tip for precise, permanent marking", "Black ink with strong adhesion on multiple surfaces", "Durable PVC body for comfortable handling", "Trusted Camlin brand for consistent performance"],
    mainImage: "/camlin-marker/camlin-permanent-marker.jpg",
    galleryImages: ["/camlin-marker/camlin-permanent-marker.jpg", "/camlin-marker/camlin-permanent-marker-2.jpg", "/camlin-marker/camlin-permanent-marker-3.jpg"],
  },
  {
    id: "6-litre-water-mist-fire-extinguisher",
    title: "6 Litre Water Mist Fire Extinguisher",
    category: "Fire Extinguisher",
    price: "₹ 3,000/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Capacity", value: "6 Litre" },
      { label: "Fire Class", value: "Class A" },
      { label: "Weight", value: "8.6 kg" },
      { label: "Charged Pressure", value: "15 Kg/Cm2" },
      { label: "Hydraulic Test Pressure", value: "35 Kg/Cm2" },
      { label: "Brand", value: "Kalpex" },
    ],
    bullets: ["6 Litre capacity water mist extinguisher for Class A fires", "Charged pressure: 15 Kg/cm²; test pressure: 35 Kg/cm²", "Weighs 8.6 kg for easy handling and deployment", "Ideal for industrial and commercial fire safety applications"],
    mainImage: "/fire-extinguisher/6-litre-water-mist-fire-extinguisher.jpg",
    galleryImages: ["/fire-extinguisher/6-litre-water-mist-fire-extinguisher.jpg"],
  },
  {
    id: "duracell-aa-alkaline-battery",
    title: "Duracell AA2 Alkaline Battery",
    category: "Duracell Battery",
    price: "Contact for price",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Type", value: "AA Alkaline" },
      { label: "Brand", value: "Duracell" },
      { label: "Voltage", value: "1.5V" },
      { label: "Part Number", value: "2PL" },
      { label: "Shelf Life", value: "1 Year" },
      { label: "Battery Chemistry", value: "Alkaline" },
      { label: "Capacity", value: "1300 MAH" },
      { label: "Operating Temperature", value: "54 Degree Celcius" },
    ],
    bullets: [
      "Lasts up to 100% longer* (*Longevity performance compared to the Minimum Average Duration of the 2015 IEC AA Digital Camera test. Results may vary by device or usage pattern.)", 
      "Our best battery, suited for everyday devices with extra performance for high drain devices",
      "Available in AAA, AA, C, D and 9V sizes",
      "Superior Nylon top closure helps preventing our batteries from leakages",
      "Duralock technology keeps unused Duracell batteries fresh and powered for up to 10 years in ambient storage"  
    ],
    mainImage: "/duracell-battery/duracell-aa-alkaline-battery.jpg",
    galleryImages: ["/duracell-battery/duracell-aa-alkaline-battery.jpg", "/duracell-battery/duracell-aa-alkaline-battery-2.jpg", "/duracell-battery/duracell-aa-alkaline-battery-3.jpg", "/duracell-battery/duracell-aa-alkaline-battery-4.jpg"],
  },
  {
    id: "blue-disposable-bouffant-cap",
    title: "Blue Disposable Bouffant Cap",
    category: "Bouffant Cap",
    price: "Contact for price",
    minOrderQty: "200 Piece",
    specs: [
      { label: "Size", value: "10 Inch" }, 
      { label: "Item Material", value: "Non-woven fabric" },
      { label: "Color", value: "Blue" },
      { label: "Type", value: "Disposable" },
      { label: "Usage", value: "Head Cover" },
    ],
    bullets: ["10-inch blue non-woven disposable head cover", "Lightweight and breathable for all-day comfort", "Ideal for hygiene in medical and industrial settings", "Convenient single-use design ensures safety and cleanliness"],
    mainImage: "/bouffant-cap/blue-disposable-bouffant-cap.jpg",
    galleryImages: ["/bouffant-cap/blue-disposable-bouffant-cap.jpg", "/bouffant-cap/blue-disposable-bouffant-cap-2.jpg", "/bouffant-cap/blue-disposable-bouffant-cap-3.jpg"],
  },
  {
    id: "1-inch-hydraulic-pipe",
    title: "1 Inch Hydraulic Pipe",
    category: "Hydraulic Pipe",
    price: "₹ 350/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Length of Pipe", value: "3 m" },
      { label: "Size", value: "1 Inch" },
      { label: "Material", value: "Rubber" },
      { label: "Color", value: "Black" },
      { label: "Shape", value: "Round" },
    ],
    bullets: ["1-inch diameter, 3-meter length rubber hydraulic pipe", "Round shape with durable black finish", "Designed for efficient fluid transfer in hydraulic systems", "Ideal for industrial and machinery applications"],
    mainImage: "/hydraulic-pipe/1-inch-hydraulic-pipe.jpg",
    galleryImages: ["/hydraulic-pipe/1-inch-hydraulic-pipe.jpg"],
  },
  {
    id: "mobil-aw-68-hydraulic-oil",
    title: "Mobil AW 68 Hydraulic Oil",
    category: "Mobil Hydraulic Oils",
    price: "₹ 198/Litre",
    minOrderQty: "1 Drum",
    specs: [
      { label: "Packaging Sizes", value: "Bucket of 20 Litre" },
      { label: "Grade", value: "AW 68" },
      { label: "Usage", value: "Automobile" },
      { label: "Vehicle Type", value: "Heavy Vehicle" },
      { label: "Brand", value: "Mobil" },
    ],
    bullets: ["AW 68 grade hydraulic oil for heavy vehicles", "Designed for optimal performance in automotive systems", "Available in 20-litre bucket packaging", "Trusted Mobil brand ensures quality and reliability"],
    mainImage: "/mobil-hydraulic-oils/mobil-aw-68-hydraulic-oil.jpg",
    galleryImages: ["/mobil-hydraulic-oils/mobil-aw-68-hydraulic-oil.jpg"],
  },
  {
    id: "jk-needle-files",
    title: "JK Needle Files",
    category: "Needle Files",
    price: "₹ 3,000/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Material", value: "Carbon Steel" },
      { label: "Packaging Type", value: "Box" },
      { label: "Set Contains", value: "12 Piece" },
      { label: "Brand", value: "JK" },
      { label: "Color", value: "Pink" },
    ],
    bullets: ["Set of 12 carbon steel needle files", "Durable pink finish for easy identification", "Packaged in a sturdy box for safe storage", "Ideal for precision filing and safety applications"],
    mainImage: "/needle-files/jk-needle-files.jpg",
    galleryImages: ["/needle-files/jk-needle-files.jpg"],
  }, 
  {
    id: "bosch-cutting-wheel",
    title: "Bosch Cutting Wheel",
    category: "Cutting Wheel",
    price: "₹ 20/Piece",
    minOrderQty: "50 Piece",
    specs: [
      { label: "Size (Diameter)", value: "4 Inch" },
      { label: "Thickness", value: "	1.2 mm" },
      { label: "RPM", value: "1400 RPM" },
      { label: "Brand", value: "Bosch" },
      { label: "Usage", value: "	Metal Cutting" },
    ],
    bullets: ["4-inch diameter, 1.2mm thick cutting wheel", "Designed for efficient metal cutting at 1400 RPM", "Trusted Bosch brand ensures durability and safety", "Ideal for industrial and workshop applications"],
    mainImage: "/cutting-wheel/bosch-cutting-wheel.jpg",
    galleryImages: ["/cutting-wheel/bosch-cutting-wheel.jpg", "/cutting-wheel/bosch-cutting-wheel-2.jpg"],
  },
  {
    id: "camlin-permanent-marker-ink",
    title: "Camlin Permanent Marker Ink",
    category: "Permanent Marker Ink",
    price: "₹ 16/Piece",
    minOrderQty: "100 Piece",
    specs: [
      { label: "Packaging Size", value: "15 ml" },
      { label: "Color", value: "Blue" },
      { label: "Form", value: "Liquid" },
      { label: "Brand", value: "Camlin" },
      { label: "Packaging Type", value: "Box" },
    ],
    bullets: ["100 ml black liquid ink for permanent markers", "Packaged in a secure box for safe storage", "High-quality formula by Camlin for lasting marks", "Ideal for industrial and office use"],
    mainImage: "/permanent-marker-ink/camlin-permanent-marker-ink.jpg",
    galleryImages: ["/permanent-marker-ink/camlin-permanent-marker-ink.jpg"],
  },
  {
    id: "pvc-safety-gumboots",
    title: "PVC Safety Gum Boot",
    category: "Pvc Safety Gumboots",
    price: "₹ 200/pair",
    minOrderQty: "100 pair",
    specs: [
      { label: "Upper Boot Material", value: "PVC" },
      { label: "Color", value: "Black" },
      { label: "Size Available", value: "7" },
      { label: "Height", value: "10 inch" },
      { label: "Length", value: "Full" },
      { label: "Outsole Material", value: "PU" },
      { label: "Protection Level", value: "	S1P" },
      { label: "Boot Type", value: "	High Ankle" },
      { label: "Application", value: "Safety" },
    ],
    bullets: ["10-inch full-length PVC upper for durable protection", "PU outsole ensures strong grip and comfort", "S1P protection level for industrial safety compliance", "Ideal for tough work environments and wet conditions"],
    mainImage: "/pvc-safety-gumboots/pvc-safety-gumboots.jpg",
    galleryImages: ["/pvc-safety-gumboots/pvc-safety-gumboots.jpg"],
  },
];

export function getProductDetail(id: string): ProductDetail | undefined {
  return productDetails.find((p) => p.id === id);
}

export function getProductGroup(id: string): ProductGroup | undefined {
  return productGroups.find(g => g.id === id);
}

export function getProductsByCategory(categoryId: string): ProductItem[] {
  const group = productGroups.find(g => g.id === categoryId);
  return group ? group.items : [];
}