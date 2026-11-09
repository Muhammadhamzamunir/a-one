import {
  AirVent, Building2, Cog, Factory, Fan, Flame, Hospital, House, PlugZap, Refrigerator, ShieldCheck,
  Settings, Snowflake, Store, Wrench, Zap, Wind, ClipboardCheck, WashingMachine, BriefcaseBusiness, Cable, Activity,
} from 'lucide-react'
import type { BlogPost, Equipment, Industry, Project, Service } from '@/types'

export const services: Service[] = [
  { slug:'hvac', title:'HVAC Systems & Solutions', shortTitle:'HVAC & Chillers', icon:Wind, summary:'Installation, repair and planned maintenance for building HVAC systems.', description:'Technical support for residential, commercial and larger facility HVAC requirements across Lahore.', scope:['System assessment and troubleshooting','Installation and replacement planning','Preventive and corrective maintenance','Airflow and performance checks'], problems:['Insufficient cooling','Unexpected shutdowns','High operating noise','Uneven airflow'] },
  { slug:'ac-repair', title:'AC Installation & Repair', shortTitle:'AC Installation & Repair', icon:Snowflake, summary:'Support for split, cassette, ducted and other air-conditioning systems.', description:'From installation planning to diagnostics, repair and seasonal servicing for air-conditioning equipment.', scope:['Installation and relocation','Fault diagnosis and repair','Cleaning and seasonal service','Performance inspection'], problems:['AC not cooling','Water leakage','Weak airflow','Unusual sound or smell'] },
  { slug:'chiller-maintenance', title:'Chiller Maintenance', shortTitle:'Chiller Maintenance', icon:AirVent, summary:'Inspection, maintenance and troubleshooting for chiller systems and connected equipment.', description:'Planned technical support for larger cooling systems, subject to a site survey and equipment assessment.', scope:['Condition assessment','Preventive maintenance','Fault troubleshooting','Project planning'], problems:['Reduced cooling capacity','System alarms','Excessive cycling','Performance loss'] },
  { slug:'ducting-ventilation', title:'Ducting & Ventilation', shortTitle:'Ducting & Ventilation', icon:Wind, summary:'Ducting, kitchen ventilation and airflow solutions for varied facilities.', description:'Site-led ventilation planning, installation and maintenance for commercial and residential applications.', scope:['Ducting assessment','Ventilation installation','Kitchen exhaust support','Airflow troubleshooting'], problems:['Poor air circulation','Heat build-up','Odour retention','Damaged duct sections'] },
   { slug:'motor-repair', title:'Electric Motor Repair', shortTitle:'Motor Repair', icon:Cog, summary:'Repair and maintenance support for industrial and commercial electric motors.', description:'Diagnostics and repair support for electric motors used in commercial and industrial equipment.', scope:['Motor inspection','Fault diagnosis','Repair support','Maintenance checks'], problems:['Motor overheating','Failed start','Excessive noise','Performance loss'] },
  { slug:'motor-winding', title:'Motor Winding', shortTitle:'Motor Winding', icon:Wrench, summary:'Winding and motor reconditioning service for industrial equipment.', description:'Winding service for motors that require reconditioning before safe reuse.', scope:['Winding assessment','Coil repair support','Rebuild assessment','Testing support'], problems:['Intermittent operation','Overheating','Short circuit risk','Reduced efficiency'] },
  { slug:'electrical-wiring', title:'Electrical Wiring', shortTitle:'Electrical Wiring', icon:Cable, summary:'Wiring installation and repair for residential, commercial and industrial sites.', description:'New wiring, retrofit and repair service for electrical systems and equipment circuits.', scope:['Wiring installation','Retrofit support','Fault repair','Inspection support'], problems:['Frayed or damaged wiring','Circuit overload','Incorrect wiring','Safety concern'] },
  { slug:'electrical-installation', title:'Electrical Installation', shortTitle:'Electrical Installation', icon:PlugZap, summary:'Installation of electrical systems, equipment and power distribution.', description:'Installation of electrical supply, distribution and equipment for homes and facilities.', scope:['Supply assessment','Installation support','Equipment mounting','Testing support'], problems:['Unsafe supply','Missing protection','Poor grounding','Non-compliant setup'] },
  { slug:'appliance-repair', title:'Appliance Repair', shortTitle:'Appliance Repair', icon:WashingMachine, summary:'Repair and maintenance support for common household and commercial appliances.', description:'Diagnostics and service for washing machines, freezers, water coolers, geysers, heaters and related equipment.', scope:['Washing machine service','Freezer and water cooler repair','Geyser and heater support','General appliance diagnosis'], problems:['Appliance not starting','Water or cooling faults','Unusual noise','Reduced performance'] },
  { slug:'annual-maintenance', title:'Annual Maintenance Contracts', shortTitle:'AMC Contracts', icon:ClipboardCheck, summary:'Planned maintenance arrangements shaped around equipment and site requirements.', description:'Structured preventive maintenance planning for offices, commercial sites, buildings and other facilities.', scope:['Asset review','Maintenance scheduling','Planned inspections','Service reporting framework'], problems:['Unplanned downtime','Reactive repair costs','Missed maintenance','Fragmented vendor support'] },
  { slug:'fire-fighting', title:'Fire-Fighting Services', shortTitle:'Fire Fighting', icon:Flame, summary:'Supply and installation support with final scope confirmed through consultation.', description:'Fire-fighting service scope is assessed per site. Compliance and certification claims require client verification.', scope:['Site requirement discussion','Equipment supply planning','Installation support','Maintenance scope consultation'], problems:['Unclear equipment coverage','Maintenance gaps','Installation requirements','Site-specific planning'] },
  { slug:'electrical', title:'Electrical Services', shortTitle:'Electrical Services', icon:Zap, summary:'Electrical inspection, fault finding, repair and installation support.', description:'Practical electrical maintenance for homes, workplaces and facilities, with site-specific scope confirmation.', scope:['Fault finding','Wiring and fixture support','Preventive inspection','Electrical maintenance'], problems:['Frequent tripping','Failed fixtures','Power interruptions','Damaged wiring'] },
  { slug:'facility-maintenance', title:'Facility Maintenance', shortTitle:'Facility Maintenance', icon:Building2, summary:'Coordinated technical maintenance for buildings and operating facilities.', description:'A practical single-contact maintenance approach for mixed HVAC, electrical and equipment requirements.', scope:['Routine inspections','Multi-service coordination','Corrective maintenance','Facility support planning'], problems:['Multiple service vendors','Recurring breakdowns','Maintenance backlogs','Operational disruption'] },
  { slug:'consultancy', title:'Technical Consultancy', shortTitle:'Consultancy', icon:BriefcaseBusiness, summary:'Site-led guidance for maintenance, installation and technical project planning.', description:'Consultation for equipment, system and maintenance decisions before work is scoped and quoted.', scope:['Site assessment','Technical recommendations','Scope development','Installation planning'], problems:['Unclear project scope','Equipment selection questions','Maintenance planning','Upgrade decisions'] },
  { slug:'fan-repair', title:'Fan Repair & Maintenance', shortTitle:'Fan Repair', icon:Fan, summary:'Inspection and repair for ceiling, pedestal and industrial fans.', description:'Fault checks and repair service for fan motors, blades, bearings and controls.', scope:['Fan motor inspection','Blade and bearing service','Control checks','Replacement support'], problems:['Fan not starting','Overheating motor','Unbalanced blades','Excessive noise'] },

  { slug:'electrical-maintenance', title:'Electrical Maintenance', shortTitle:'Electrical Maintenance', icon:Settings, summary:'Planned maintenance for electrical systems, panels and equipment.', description:'Preventive and corrective maintenance for electrical infrastructure.', scope:['Inspection schedule','Fault checks','Preventive service','Reporting'], problems:['Aging infrastructure','Missed maintenance','Reactive faults','Documentation gaps'] },
  { slug:'electrical-troubleshooting', title:'Electrical Troubleshooting', shortTitle:'Troubleshooting', icon:Activity, summary:'Fault finding and diagnosis for complex electrical systems.', description:'Step-by-step troubleshooting for electrical faults, intermittent issues and standby systems.', scope:['Fault finding','Diagnostic testing','Root cause review','Repair planning'], problems:['Intermittent faults','Dead circuits','Strange behaviour','Safety compliance'] },
]

export const industries: Industry[] = [
  {title:'Residential',description:'Homes, apartments and villas.',icon:House},
  {title:'Commercial',description:'Offices, retail and customer-facing sites.',icon:Building2},
  {title:'Industrial',description:'Manufacturing units and larger operating environments.',icon:Factory},
  {title:'Healthcare',description:'Hospitals and healthcare facilities with site-specific needs.',icon:Hospital},
  {title:'Retail & Showrooms',description:'Retail stores and automotive showrooms.',icon:Store},
  {title:'IT & Offices',description:'Workplaces where reliability and planned maintenance matter.',icon:BriefcaseBusiness},
]

const placeholder = (label:string) => `https://placehold.co/900x600/0D1B2A/F7F8FA?text=${encodeURIComponent(label)}`
export const projects: Project[] = [
  {slug:'commercial-hvac-upgrade',title:'Commercial HVAC Upgrade',category:'HVAC',summary:'Mock case study showing the structure for a commercial system assessment and phased upgrade.',image:placeholder('Project Image Placeholder'),mock:true},
  {slug:'facility-maintenance-plan',title:'Multi-Service Facility Plan',category:'Facility Maintenance',summary:'Mock case study for preventive maintenance planning across mixed building assets.',image:placeholder('Facility Image Placeholder'),mock:true},
  {slug:'industrial-ventilation',title:'Industrial Ventilation Scope',category:'Ventilation',summary:'Mock case study describing how a ventilation project could be presented after client approval.',image:placeholder('Ventilation Image Placeholder'),mock:true},
]
export const equipment: Equipment[] = [
  {id:'mock-01',title:'Used Split AC Unit',category:'Air Conditioning',condition:'Condition to be verified',price:'Price on enquiry',image:placeholder('Used AC Placeholder'),mock:true},
  {id:'mock-02',title:'Used Water Cooler',category:'Cooling Equipment',condition:'Condition to be verified',price:'Price on enquiry',image:placeholder('Water Cooler Placeholder'),mock:true},
  {id:'mock-03',title:'Used Freezer',category:'Refrigeration',condition:'Condition to be verified',price:'Price on enquiry',image:placeholder('Freezer Placeholder'),mock:true},
]
export const blogPosts: BlogPost[] = [
  {
    slug: 'commercial-hvac-maintenance-checklist',
    title: 'A Practical Commercial HVAC Maintenance Checklist for Lahore Businesses',
    excerpt: 'A season-by-season checklist for shops, offices and factories running commercial HVAC systems through Lahore summers, monsoons and winters.',
    category: 'HVAC',
    date: '14 Jan 2025',
    readTime: '7 min read',
    body: [
      {
        heading: 'Why a checklist matters',
        paragraphs: [
          'Commercial HVAC systems in Lahore run under punishing conditions — months of 40°C-plus summers, high humidity during monsoon, and dust that clogs filters fast. A breakdown in July is not just uncomfortable; it can shut down a shop, office or factory floor. Preventive maintenance is cheaper than emergency repair, and it extends the life of compressors and chillers that are expensive to replace.',
        ],
      },
      {
        heading: 'Before summer (March–April)',
        paragraphs: [
          'Clean or replace air filters on every indoor unit. Dusty filters reduce airflow, freeze coils and push up electricity bills.',
          'Inspect condenser coils outdoors. Clear leaves, cotton and debris that collected over winter. A blocked coil makes the compressor overheat.',
          'Check refrigerant pressure and top up only if a qualified technician confirms a leak has been sealed.',
          'Test thermostats and calibration. Wrong readings make the system short-cycle or run constantly.',
          'Clear condensate drain lines. Blocked drains leak water onto ceilings and walls during the first heavy use.',
          'Lubricate fan motors and check belt tension on belt-driven units.',
        ],
      },
      {
        heading: 'During monsoon (July–August)',
        paragraphs: [
          'Check outdoor units for standing water and proper drainage. Electrical connections should be dry and securely fastened.',
          'Inspect for corrosion on exposed copper pipes and joints, especially in older installations.',
          'Monitor indoor humidity. If rooms feel clammy despite cooling, the evaporator coil or blower may need cleaning.',
          'Keep vegetation trimmed back at least two feet from outdoor condensers so airflow is not restricted.',
        ],
      },
      {
        heading: 'After monsoon (September–October)',
        paragraphs: [
          'Deep-clean evaporator coils and blower wheels. Monsoon humidity leaves residue that becomes mould and odour.',
          'Check electrical contacts and tighten loose terminals. Humidity accelerates oxidation.',
          'Test safety controls — high-pressure switches, overload relays and phase-protection relays.',
          'Inspect insulation on refrigerant lines. Damaged insulation causes condensation and energy loss.',
        ],
      },
      {
        heading: 'Winter (November–February)',
        paragraphs: [
          'Run the system briefly once a month to keep seals and lubricants from drying out.',
          'Cover outdoor units only if the manufacturer recommends it; improper covers trap moisture.',
          'Review the service log from the year and plan any part replacements before next summer.',
        ],
      },
      {
        heading: 'Keep a logbook',
        paragraphs: [
          'Record every visit: date, technician, work done, parts replaced and next due date. A logbook protects warranty claims and helps you spot recurring problems before they become expensive failures.',
        ],
      },
      {
        heading: 'When to call A-One',
        paragraphs: [
          'If a compressor is short-cycling, a circuit breaker keeps tripping, or rooms are not cooling evenly despite clean filters, book a professional inspection. We service commercial HVAC across Lahore and can set up a planned maintenance contract so you do not have to track dates yourself.',
        ],
      },
    ],
  },
  {
    slug: 'when-ac-needs-service',
    title: 'Common Signs Your AC System Needs Attention',
    excerpt: 'Warning signs every homeowner should know — weak airflow, warm air, strange noises, water leaks and high electricity bills — before a small fault becomes a costly breakdown.',
    category: 'AC Maintenance',
    date: '22 Feb 2025',
    readTime: '4 min read',
    body: [
      {
        heading: 'Airflow is weak or uneven',
        paragraphs: [
          'If some rooms are cold while others stay warm, or the air coming from vents feels weak, the problem is usually a clogged filter, a dirty blower wheel, or a failing blower motor. Start by checking and cleaning the filter. If airflow does not improve, the indoor unit needs professional cleaning.',
        ],
      },
      {
        heading: 'Warm air instead of cool',
        paragraphs: [
          'An AC blowing warm air often means low refrigerant, a faulty compressor, or a thermostat set incorrectly. Check the thermostat first. If it is set to cool and the air is still warm after 15 minutes, switch the unit off and call a technician. Running an AC with low refrigerant can burn out the compressor.',
        ],
      },
      {
        heading: 'Strange noises',
        paragraphs: [
          'Grinding, squealing or rattling sounds are never normal. A squeal often points to a worn belt or motor bearing. Rattling can mean loose panels or debris in the fan. Banging usually indicates a loose or broken part inside the compressor. Switch the unit off and get it inspected.',
        ],
      },
      {
        heading: 'Water leaking indoors',
        paragraphs: [
          'Water dripping from the indoor unit means the condensate drain is blocked or the drain pan is cracked. In Lahore’s humid months, algae grows quickly in drain lines. A technician can flush the line and check the pan. Ignoring leaks damages ceilings, walls and electrical wiring.',
        ],
      },
      {
        heading: 'Bad smells',
        paragraphs: [
          'Musty odours usually mean mould or mildew on the evaporator coil or in the ductwork. A burning smell can indicate an electrical fault or overheating motor. Turn the unit off and call for service if you smell burning.',
        ],
      },
      {
        heading: 'Short cycling',
        paragraphs: [
          'If the compressor turns on and off every few minutes, the system may be oversized, low on refrigerant, or have a faulty thermostat. Short cycling wastes electricity and wears out the compressor quickly.',
        ],
      },
      {
        heading: 'Electricity bills are higher than usual',
        paragraphs: [
          'A sudden spike in your bill without extra usage often means the AC is working harder because of dirty coils, low refrigerant, or a failing component. A service visit can bring efficiency back down.',
        ],
      },
      {
        heading: 'What to do',
        paragraphs: [
          'Do not ignore these signs. A minor fault fixed early costs far less than a compressor replacement. If your AC shows any of the above, contact A-One for an inspection. We serve residential AC repair across Lahore.',
        ],
      },
    ],
  },
  {
    slug: 'planning-an-amc',
    title: 'What to Consider When Planning an Annual Maintenance Contract',
    excerpt: 'A practical guide for facility managers and homeowners on asset scope, visit frequency, response times, reporting and exclusions before signing an AMC.',
    category: 'AMC',
    date: '10 Mar 2025',
    readTime: '6 min read',
    body: [
      {
        heading: 'Define your asset scope',
        paragraphs: [
          'List every piece of equipment you want covered: split ACs, package units, chillers, water coolers, exhaust fans and electrical panels. Be specific about brand, model, age and location. Vague scopes lead to disputes later about what is included.',
        ],
      },
      {
        heading: 'Choose the right visit frequency',
        paragraphs: [
          'For Lahore’s climate, we recommend at least two preventive visits per year — one before summer and one after monsoon. Critical facilities such as clinics, server rooms or food businesses may need quarterly visits. More visits cost more but reduce emergency breakdowns.',
        ],
      },
      {
        heading: 'Response time and emergency coverage',
        paragraphs: [
          'Ask how quickly a technician will arrive after a breakdown call. Is emergency service included or charged separately? Are nights and weekends covered? Get the response time in writing.',
        ],
      },
      {
        heading: 'Reporting and documentation',
        paragraphs: [
          'A good AMC includes a written report after every visit — what was checked, what was found, what was replaced and what is due next. These records help you track equipment health and support warranty or insurance claims.',
        ],
      },
      {
        heading: 'Know the exclusions',
        paragraphs: [
          'Most AMCs exclude consumables such as filters, refrigerants, compressors and electrical spare parts unless explicitly stated. Damage from misuse, voltage fluctuations or unauthorized repairs is usually not covered. Read the exclusion list carefully before signing.',
        ],
      },
      {
        heading: 'Cost structure',
        paragraphs: [
          'Compare annual cost against the price of one emergency repair. A single compressor replacement can cost more than an entire year of maintenance. Ask whether the fee is fixed annually or payable per visit, and whether there are discounts on parts and labour for contract customers.',
        ],
      },
      {
        heading: 'Vendor reliability',
        paragraphs: [
          'Choose a vendor with local presence in Lahore, verifiable references and licensed technicians. Ask how many technicians they employ and whether they carry the tools and spare parts for your equipment brands.',
        ],
      },
      {
        heading: 'Questions to ask before signing',
        paragraphs: [
          'Which equipment is covered and which is excluded?',
          'How many preventive visits per year, and when?',
          'What is the emergency response time?',
          'Are parts and refrigerant included or extra?',
          'Will I get a written report after every visit?',
          'What happens if I need to cancel or modify the contract?',
        ],
      },
    ],
  },
  {
    slug: 'split-vs-inverter-ac-maintenance',
    title: 'Split vs Inverter AC: Maintenance Considerations',
    excerpt: 'A comparison of maintenance needs for split and inverter air-conditioners across the equipment lifecycle, including common faults and service costs.',
    category: 'AC Maintenance',
    date: '18 Apr 2025',
    readTime: '5 min read',
    body: [
      {
        heading: 'How they differ',
        paragraphs: [
          'A conventional split AC compressor runs at full speed or switches off completely. An inverter AC compressor varies its speed to maintain temperature, which means fewer on-off cycles and generally lower electricity consumption. That difference changes how each system should be maintained.',
        ],
      },
      {
        heading: 'Conventional split AC maintenance',
        paragraphs: [
          'Common service items include the contactor, start/run capacitor, compressor overload relay and fan motor capacitor. These electrical parts wear out from repeated starting and stopping. Refrigerant charging is more forgiving on conventional systems. Filters, coils and blower wheels need regular cleaning just like any AC.',
        ],
      },
      {
        heading: 'Inverter AC maintenance',
        paragraphs: [
          'Inverter units rely on a printed circuit board (PCB), sensors and an intelligent power module (IPM). A voltage spike — common during Lahore’s load-shedding — can damage the PCB. Refrigerant charging must be precise; over- or under-charging affects inverter performance more than conventional systems. Sensors that read room and coil temperature can drift and need recalibration.',
        ],
      },
      {
        heading: 'Shared maintenance needs',
        paragraphs: [
          'Both types need clean filters, clean coils, clear drain lines, correct refrigerant charge and tight electrical connections. Outdoor units in Lahore need protection from dust and monsoon moisture regardless of compressor type.',
        ],
      },
      {
        heading: 'Service cost over time',
        paragraphs: [
          'Inverter ACs usually cost less to run day-to-day, but a failed inverter PCB or IPM can be expensive to replace. Conventional splits have simpler, cheaper electrical parts, but may consume more power. Over a 7–10 year lifespan, the difference often comes down to how well either system is maintained.',
        ],
      },
      {
        heading: 'Bottom line',
        paragraphs: [
          'Choose based on your usage pattern and budget for maintenance, not just purchase price. An inverter running 10–12 hours daily through a Lahore summer saves on electricity but deserves voltage protection and careful servicing. A conventional split used occasionally may be simpler and cheaper to keep running.',
        ],
      },
    ],
  },
  {
    slug: 'signs-your-freezer-needs-repair',
    title: 'Signs Your Freezer Needs Professional Repair',
    excerpt: 'Warning signs that your household or commercial freezer needs service — cooling loss, temperature swings, frost buildup, strange noises and door seal problems.',
    category: 'Appliance Repair',
    date: '30 May 2025',
    readTime: '4 min read',
    body: [
      {
        heading: 'Not freezing properly',
        paragraphs: [
          'If ice cream is soft or food is thawing, the freezer is not holding temperature. This can be caused by low refrigerant, a failing compressor, a faulty thermostat, or blocked airflow from overfilled shelves. Do not keep perishable food in a freezer that cannot freeze.',
        ],
      },
      {
        heading: 'Temperature swings',
        paragraphs: [
          'Food that repeatedly thaws and refreezes is unsafe and suggests the thermostat or defrost timer is malfunctioning. Consistent temperature matters for food safety, especially for meat and dairy.',
        ],
      },
      {
        heading: 'Excessive frost buildup',
        paragraphs: [
          'Some frost is normal in non-frost-free models, but thick ice on walls or around the door means the defrost system, door gasket, or door switch is failing. Heavy frost reduces efficiency and storage space.',
        ],
      },
      {
        heading: 'Strange noises',
        paragraphs: [
          'A loud compressor, clicking relay, or buzzing fan motor indicates mechanical or electrical trouble. A freezer that runs constantly without cycling off usually has a sealing or refrigerant problem.',
        ],
      },
      {
        heading: 'Water leaks',
        paragraphs: [
          'Water pooling under or inside the freezer often means a blocked defrost drain or a cracked drain pan. In Lahore’s humidity, this can also encourage mould around the appliance.',
        ],
      },
      {
        heading: 'Door seal problems',
        paragraphs: [
          'If the door does not close tightly or you feel cold air escaping, the gasket may be torn or dirty. Warm air entering the freezer makes the compressor work harder and causes frost. Clean the seal regularly and replace it if damaged.',
        ],
      },
      {
        heading: 'Act before food is lost',
        paragraphs: [
          'Freezer faults usually get worse, not better. If you notice any of these signs, arrange a repair visit before you lose stock. A-One services household and commercial freezers across Lahore.',
        ],
      },
    ],
  },
  {
    slug: 'basic-kitchen-ventilation',
    title: 'Basic Kitchen Ventilation Considerations Before Scoping Work',
    excerpt: 'Practical notes on range hood coverage, duct sealing, make-up air and exhaust planning for residential and commercial kitchens.',
    category: 'Ducting & Ventilation',
    date: '12 Jun 2025',
    readTime: '6 min read',
    body: [
      {
        heading: 'Range hood size and placement',
        paragraphs: [
          'The hood should cover the full cooking surface and extend slightly beyond it. Mount it at the manufacturer’s recommended height — too high and it cannot capture smoke and steam; too low and it interferes with cooking. For commercial kitchens, hood size is determined by equipment heat output and local regulations.',
        ],
      },
      {
        heading: 'Duct run and sealing',
        paragraphs: [
          'Keep duct runs as short and straight as possible. Every bend reduces airflow. Use rigid metal ducting where possible, and seal all joints with foil tape or mastic. Leaky ducts dump grease and moisture into ceilings and wall cavities, creating fire and mould risks.',
        ],
      },
      {
        heading: 'Make-up air',
        paragraphs: [
          'An exhaust fan removes air, so something must replace it. Without adequate make-up air, the hood cannot extract effectively and may draw combustion gases from water heaters or geysers back into the room. Provide an intake vent or louver near the kitchen.',
        ],
      },
      {
        heading: 'Exhaust vs recirculation',
        paragraphs: [
          'Ducted exhaust that vents outdoors is always preferable. Recirculating hoods with charcoal filters only trap odours and do not remove heat, moisture or combustion products. In commercial kitchens, recirculation is usually not acceptable under safety codes.',
        ],
      },
      {
        heading: 'Grease management',
        paragraphs: [
          'Install removable grease filters or baffles and clean them weekly in heavy-use kitchens. Grease buildup inside ducts is a serious fire hazard. Schedule professional duct cleaning at least annually for commercial setups.',
        ],
      },
      {
        heading: 'Fire safety',
        paragraphs: [
          'Keep ductwork away from combustible materials where possible, and ensure the exhaust terminates outside, not into an attic or cavity. Commercial kitchens should consider automatic fire suppression over cooking equipment.',
        ],
      },
      {
        heading: 'Get the scope right',
        paragraphs: [
          'Before installing or modifying ventilation, have the kitchen assessed for equipment layout, cooking volume and local building requirements. A-One can survey your kitchen and recommend the right hood, duct size and exhaust solution.',
        ],
      },
    ],
  },
  {
    slug: 'hvac-amc-inclusions',
    title: 'What an HVAC AMC Can Include',
    excerpt: 'A breakdown of preventive maintenance scope — inspections, filter changes, refrigerant checks, coil cleaning and service reporting — so you know what you are paying for.',
    category: 'AMC',
    date: '05 Jul 2025',
    readTime: '5 min read',
    body: [
      {
        heading: 'Scheduled preventive inspections',
        paragraphs: [
          'Technicians visit at agreed intervals to inspect compressors, condensers, evaporators, fans, motors, electrical panels and controls. They check for wear, leaks, corrosion and loose connections before they cause failure.',
        ],
      },
      {
        heading: 'Filter changes',
        paragraphs: [
          'Filters are cleaned or replaced on every visit. In Lahore’s dusty environment, filters clog quickly and restricting airflow is the most common cause of poor cooling and high power consumption.',
        ],
      },
      {
        heading: 'Refrigerant checks',
        paragraphs: [
          'Refrigerant pressure is measured and topped up only after confirming there is no leak. Low refrigerant reduces cooling and can overheat the compressor. Any leak found is located and sealed before gas is added.',
        ],
      },
      {
        heading: 'Coil and blower cleaning',
        paragraphs: [
          'Evaporator and condenser coils are cleaned to remove dust and grime. Blower wheels are checked and cleaned so airflow remains strong. Dirty coils force the system to run longer and use more electricity.',
        ],
      },
      {
        heading: 'Electrical testing',
        paragraphs: [
          'Contactors, capacitors, relays, thermostats and safety switches are tested. Loose terminals are tightened and worn parts are flagged for replacement. This prevents unexpected shutdowns during peak summer.',
        ],
      },
      {
        heading: 'Service reporting',
        paragraphs: [
          'After every visit, you receive a written report: what was inspected, readings recorded, parts replaced, and recommendations. These records help track equipment health over time and support warranty claims.',
        ],
      },
      {
        heading: 'Optional add-ons',
        paragraphs: [
          'Many contracts offer priority breakdown service, discounted spare parts, and emergency coverage outside normal hours. Some include refrigerant gas as part of the annual fee; others charge it separately. Clarify what is included before signing.',
        ],
      },
      {
        heading: 'What is usually excluded',
        paragraphs: [
          'Major components such as compressors, motors and PCB boards are typically not covered unless a separate parts warranty is purchased. Damage from voltage spikes, misuse or unauthorized repairs is also excluded.',
        ],
      },
    ],
  },
]
export const faqs = [
  {q:'Which areas do you serve?',a:'A-One reports service coverage across Lahore. Exact availability for a specific location and service should be confirmed when you enquire.'},
  {q:'Do you provide annual maintenance contracts?',a:'Yes. AMC scope can be discussed for residential, commercial, industrial and other facilities after reviewing the equipment and site requirements.'},
  {q:'Can I request a site visit before a quotation?',a:'Yes. Use the quote form to share the service, property type and preferred visit window. Final scheduling is confirmed directly by the team.'},
  {q:'Do you buy and sell used equipment?',a:'A-One reports buying and selling selected used ACs, coolers, freezers and washing machines. Availability, condition and terms must be confirmed before purchase.'},
]

export const trustItems = [
  {label:'Lahore coverage',icon:Building2},
  {label:'Multi-service capability',icon:Wrench},
  {label:'Residential to industrial',icon:Factory},
  {label:'AMC planning',icon:ShieldCheck},
  {label:'Cooling & appliances',icon:Refrigerator},
]