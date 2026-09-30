/* ============================================
   HEALTHHUB — Static Data Store
   All content data for the application
   ============================================ */

const HEALTH_DATA = {

    // ─────── AFFIRMATIONS ───────
    affirmations: [
        "I am worthy of good health and happiness.",
        "My body is strong, and my mind is calm.",
        "I choose to nourish my body with healthy food.",
        "Every breath I take fills me with peace.",
        "I am grateful for my body and all it does for me.",
        "I release all tension and embrace relaxation.",
        "My mental health is just as important as my physical health.",
        "I am becoming healthier and stronger every day.",
        "I deserve rest and self-care.",
        "I choose thoughts that make me feel good.",
        "My body heals naturally, and I trust the process.",
        "I am in charge of how I feel, and today I choose happiness.",
        "I am enough, just as I am.",
        "I listen to my body and give it what it needs.",
        "Each day is a new opportunity to improve my health."
    ],

    // ─────── EXERCISES ───────
    exercises: [
        {
            name: "Push-Ups",
            category: "strength",
            muscle: "Chest, Shoulders, Triceps",
            difficulty: "beginner",
            emoji: "💪",
            sets: "3 sets",
            reps: "10-15 reps",
            instructions: [
                "Start in a plank position with hands shoulder-width apart",
                "Lower your body until chest nearly touches the floor",
                "Push back up to the starting position",
                "Keep your core tight throughout the movement"
            ]
        },
        {
            name: "Squats",
            category: "strength",
            muscle: "Quadriceps, Glutes, Hamstrings",
            difficulty: "beginner",
            emoji: "🦵",
            sets: "3 sets",
            reps: "12-15 reps",
            instructions: [
                "Stand with feet shoulder-width apart",
                "Lower your body as if sitting in a chair",
                "Keep your knees behind your toes",
                "Push through your heels to stand back up"
            ]
        },
        {
            name: "Plank",
            category: "strength",
            muscle: "Core, Shoulders",
            difficulty: "beginner",
            emoji: "🧱",
            sets: "3 sets",
            reps: "30-60 sec",
            instructions: [
                "Start in a forearm plank position",
                "Keep your body in a straight line from head to heels",
                "Engage your core and glutes",
                "Hold the position without dropping your hips"
            ]
        },
        {
            name: "Burpees",
            category: "hiit",
            muscle: "Full Body",
            difficulty: "advanced",
            emoji: "🔥",
            sets: "4 sets",
            reps: "8-12 reps",
            instructions: [
                "Start standing, then drop into a squat with hands on the floor",
                "Jump your feet back into a plank position",
                "Do a push-up, then jump feet forward",
                "Explode upward with a jump and arms overhead"
            ]
        },
        {
            name: "Jumping Jacks",
            category: "cardio",
            muscle: "Full Body",
            difficulty: "beginner",
            emoji: "⭐",
            sets: "3 sets",
            reps: "30-45 sec",
            instructions: [
                "Stand with feet together and arms at your sides",
                "Jump while spreading legs and raising arms overhead",
                "Jump back to starting position",
                "Maintain a steady pace throughout"
            ]
        },
        {
            name: "Mountain Climbers",
            category: "hiit",
            muscle: "Core, Shoulders, Legs",
            difficulty: "intermediate",
            emoji: "🏔️",
            sets: "3 sets",
            reps: "20 reps each side",
            instructions: [
                "Start in a high plank position",
                "Drive one knee toward your chest",
                "Quickly switch legs in a running motion",
                "Keep your hips level and core engaged"
            ]
        },
        {
            name: "Lunges",
            category: "strength",
            muscle: "Quadriceps, Glutes, Hamstrings",
            difficulty: "beginner",
            emoji: "🚶",
            sets: "3 sets",
            reps: "10 each leg",
            instructions: [
                "Step forward with one leg",
                "Lower your body until both knees are at 90 degrees",
                "Push back to starting position",
                "Alternate legs with each rep"
            ]
        },
        {
            name: "High Knees",
            category: "cardio",
            muscle: "Core, Hip Flexors, Legs",
            difficulty: "intermediate",
            emoji: "🏃",
            sets: "3 sets",
            reps: "30 sec",
            instructions: [
                "Stand with feet hip-width apart",
                "Drive one knee up toward your chest",
                "Quickly alternate legs at a running pace",
                "Pump your arms for momentum"
            ]
        },
        {
            name: "Bicycle Crunches",
            category: "strength",
            muscle: "Core, Obliques",
            difficulty: "intermediate",
            emoji: "🚲",
            sets: "3 sets",
            reps: "15 each side",
            instructions: [
                "Lie on your back with hands behind your head",
                "Lift shoulders off the ground",
                "Bring right elbow to left knee while extending right leg",
                "Alternate sides in a pedaling motion"
            ]
        },
        {
            name: "Jump Rope (Shadow)",
            category: "cardio",
            muscle: "Full Body, Calves",
            difficulty: "beginner",
            emoji: "🤸",
            sets: "3 sets",
            reps: "60 sec",
            instructions: [
                "Stand with feet together, arms at sides",
                "Jump slightly off the ground with both feet",
                "Rotate wrists as if turning a rope",
                "Land softly on the balls of your feet"
            ]
        },
        {
            name: "Tricep Dips",
            category: "strength",
            muscle: "Triceps, Shoulders",
            difficulty: "intermediate",
            emoji: "🪑",
            sets: "3 sets",
            reps: "10-12 reps",
            instructions: [
                "Place hands on a chair edge behind you",
                "Extend legs forward with heels on the ground",
                "Lower your body by bending elbows to 90 degrees",
                "Push back up using your triceps"
            ]
        },
        {
            name: "Yoga Stretches",
            category: "flexibility",
            muscle: "Full Body",
            difficulty: "beginner",
            emoji: "🧘",
            sets: "1 set",
            reps: "Hold 30 sec each",
            instructions: [
                "Start with Cat-Cow stretches on all fours",
                "Move into Downward Dog, hold for 30 seconds",
                "Step forward into a low lunge, hold each side",
                "Finish with a seated forward fold"
            ]
        }
    ],

    // ─────── WORKOUT PLANS ───────
    workoutPlans: {
        beginner: {
            name: "Beginner Full Body",
            emoji: "🌱",
            days: [
                { day: "Mon", focus: "Upper Body", exercises: "Push-ups, Tricep Dips, Plank — 3 sets each" },
                { day: "Tue", focus: "Cardio", exercises: "Jumping Jacks, High Knees, Jump Rope — 3 sets each" },
                { day: "Wed", focus: "Rest", exercises: "Light stretching and walking" },
                { day: "Thu", focus: "Lower Body", exercises: "Squats, Lunges, Wall Sit — 3 sets each" },
                { day: "Fri", focus: "HIIT", exercises: "Mountain Climbers, Burpees, High Knees — 3 sets each" },
                { day: "Sat", focus: "Flexibility", exercises: "Full body yoga stretches — 20 minutes" },
                { day: "Sun", focus: "Rest", exercises: "Complete rest day" }
            ]
        },
        fatBurn: {
            name: "Fat Burn Program",
            emoji: "🔥",
            days: [
                { day: "Mon", focus: "HIIT Circuit", exercises: "Burpees, Mountain Climbers, Jump Squats — 4 sets" },
                { day: "Tue", focus: "Cardio Blast", exercises: "High Knees, Jumping Jacks, Shadow Boxing — 30 min" },
                { day: "Wed", focus: "Active Recovery", exercises: "Yoga stretches, light walk — 30 min" },
                { day: "Thu", focus: "Full Body HIIT", exercises: "Tabata — 20 sec work, 10 sec rest × 8 rounds" },
                { day: "Fri", focus: "Strength + Cardio", exercises: "Push-ups, Squats, Lunges + 10 min jog" },
                { day: "Sat", focus: "Endurance", exercises: "45 min brisk walk or cycling" },
                { day: "Sun", focus: "Rest", exercises: "Complete rest day" }
            ]
        }
    },

    // ─────── NUTRITION DATA ───────
    foods: {
        proteins: [
            { name: "Eggs", emoji: "🥚", calories: "155 kcal/100g", nutrients: "Protein, Vitamin D, B12" },
            { name: "Chicken Breast", emoji: "🍗", calories: "165 kcal/100g", nutrients: "Protein, Niacin, B6" },
            { name: "Paneer", emoji: "🧀", calories: "265 kcal/100g", nutrients: "Protein, Calcium, Phosphorus" },
            { name: "Lentils (Dal)", emoji: "🫘", calories: "116 kcal/100g", nutrients: "Protein, Iron, Fiber" },
            { name: "Greek Yogurt", emoji: "🥛", calories: "59 kcal/100g", nutrients: "Protein, Calcium, Probiotics" },
            { name: "Chickpeas", emoji: "🫘", calories: "164 kcal/100g", nutrients: "Protein, Fiber, Folate" }
        ],
        carbs: [
            { name: "Brown Rice", emoji: "🍚", calories: "111 kcal/100g", nutrients: "Fiber, Manganese, Selenium" },
            { name: "Oats", emoji: "🥣", calories: "389 kcal/100g", nutrients: "Fiber, Iron, Magnesium" },
            { name: "Sweet Potato", emoji: "🍠", calories: "86 kcal/100g", nutrients: "Vitamin A, Fiber, Potassium" },
            { name: "Whole Wheat Roti", emoji: "🫓", calories: "297 kcal/100g", nutrients: "Fiber, Iron, B-vitamins" },
            { name: "Quinoa", emoji: "🌾", calories: "120 kcal/100g", nutrients: "Complete Protein, Fiber, Iron" },
            { name: "Banana", emoji: "🍌", calories: "89 kcal/100g", nutrients: "Potassium, Vitamin B6, Fiber" }
        ],
        fats: [
            { name: "Almonds", emoji: "🥜", calories: "579 kcal/100g", nutrients: "Vitamin E, Magnesium, Healthy Fats" },
            { name: "Avocado", emoji: "🥑", calories: "160 kcal/100g", nutrients: "Healthy Fats, Potassium, Fiber" },
            { name: "Olive Oil", emoji: "🫒", calories: "884 kcal/100g", nutrients: "Monounsaturated Fats, Vitamin E" },
            { name: "Flaxseeds", emoji: "🌻", calories: "534 kcal/100g", nutrients: "Omega-3, Fiber, Lignans" },
            { name: "Walnuts", emoji: "🌰", calories: "654 kcal/100g", nutrients: "Omega-3, Antioxidants, Protein" },
            { name: "Ghee", emoji: "🧈", calories: "900 kcal/100g", nutrients: "Vitamin A, D, E, Butyric Acid" }
        ],
        vitamins: [
            { name: "Oranges", emoji: "🍊", calories: "47 kcal/100g", nutrients: "Vitamin C, Fiber, Folate" },
            { name: "Spinach", emoji: "🥬", calories: "23 kcal/100g", nutrients: "Iron, Vitamin K, Folate" },
            { name: "Carrots", emoji: "🥕", calories: "41 kcal/100g", nutrients: "Vitamin A, Beta-Carotene, Fiber" },
            { name: "Broccoli", emoji: "🥦", calories: "34 kcal/100g", nutrients: "Vitamin C, K, Fiber, Sulforaphane" },
            { name: "Berries", emoji: "🫐", calories: "57 kcal/100g", nutrients: "Antioxidants, Vitamin C, Fiber" },
            { name: "Tomatoes", emoji: "🍅", calories: "18 kcal/100g", nutrients: "Vitamin C, Lycopene, Potassium" }
        ]
    },

    superfoods: [
        { name: "Turmeric", emoji: "🟡", benefit: "Anti-inflammatory" },
        { name: "Blueberries", emoji: "🫐", benefit: "Antioxidant rich" },
        { name: "Salmon", emoji: "🐟", benefit: "Omega-3 fatty acids" },
        { name: "Spinach", emoji: "🥬", benefit: "Iron & vitamins" },
        { name: "Chia Seeds", emoji: "⚪", benefit: "Fiber & protein" },
        { name: "Green Tea", emoji: "🍵", benefit: "Metabolism boost" },
        { name: "Garlic", emoji: "🧄", benefit: "Immune support" },
        { name: "Dark Chocolate", emoji: "🍫", benefit: "Heart health" },
        { name: "Ginger", emoji: "🫚", benefit: "Digestive aid" },
        { name: "Amla", emoji: "🟢", benefit: "Vitamin C powerhouse" }
    ],

    mealPlan: [
        {
            time: "Breakfast",
            emoji: "🌅",
            items: [
                "Oatmeal with berries & nuts",
                "2 boiled eggs / paneer bhurji",
                "Green tea / fresh juice",
                "1 banana or seasonal fruit"
            ]
        },
        {
            time: "Lunch",
            emoji: "☀️",
            items: [
                "Brown rice / 2 whole wheat rotis",
                "Dal / chicken curry",
                "Mixed vegetable sabzi",
                "Cucumber & tomato salad"
            ]
        },
        {
            time: "Dinner",
            emoji: "🌙",
            items: [
                "Grilled chicken / paneer tikka",
                "Multigrain roti / quinoa",
                "Sautéed vegetables",
                "1 bowl of curd"
            ]
        },
        {
            time: "Snacks",
            emoji: "🍎",
            items: [
                "Handful of almonds & walnuts",
                "Greek yogurt with honey",
                "Fruit salad / smoothie",
                "Roasted chana / makhana"
            ]
        }
    ],

    // ─────── DISEASES ───────
    diseases: [
        {
            name: "Diabetes",
            emoji: "🩸",
            overview: "A chronic condition affecting how your body processes blood sugar (glucose). Type 2 diabetes is the most common form.",
            causes: ["Insulin resistance", "Obesity", "Sedentary lifestyle", "Genetic factors", "Poor diet"],
            symptoms: ["Frequent urination", "Excessive thirst", "Unexplained weight loss", "Blurred vision", "Slow healing wounds", "Fatigue"],
            prevention: ["Maintain healthy weight", "Exercise regularly (150 min/week)", "Eat balanced diet rich in fiber", "Limit sugar and refined carbs", "Regular blood sugar monitoring"],
            seeDoctor: "If you experience persistent thirst, frequent urination, or unexplained weight loss."
        },
        {
            name: "Heart Disease",
            emoji: "❤️",
            overview: "A range of conditions affecting the heart, including coronary artery disease, heart rhythm problems, and heart defects.",
            causes: ["High blood pressure", "High cholesterol", "Smoking", "Diabetes", "Obesity", "Stress"],
            symptoms: ["Chest pain or discomfort", "Shortness of breath", "Pain in neck, jaw, or back", "Lightheadedness", "Cold sweats", "Irregular heartbeat"],
            prevention: ["Don't smoke", "Exercise 30 min daily", "Eat heart-healthy diet", "Maintain healthy weight", "Manage stress", "Regular health check-ups"],
            seeDoctor: "If you experience chest pain, severe shortness of breath, or fainting."
        },
        {
            name: "Hypertension",
            emoji: "🫀",
            overview: "Persistently elevated blood pressure in the arteries. Known as the 'silent killer' as it often has no symptoms.",
            causes: ["Excess salt intake", "Obesity", "Stress", "Lack of exercise", "Genetics", "Alcohol consumption"],
            symptoms: ["Often no symptoms", "Headaches", "Dizziness", "Nosebleeds", "Shortness of breath", "Visual changes"],
            prevention: ["Reduce salt intake (<5g/day)", "Exercise regularly", "Maintain healthy weight", "Limit alcohol", "Manage stress", "Monitor blood pressure regularly"],
            seeDoctor: "If your blood pressure readings are consistently above 140/90 mmHg."
        },
        {
            name: "Asthma",
            emoji: "🫁",
            overview: "A condition where airways narrow, swell, and produce extra mucus, making breathing difficult.",
            causes: ["Allergens (dust, pollen, pet dander)", "Air pollution", "Respiratory infections", "Exercise", "Stress", "Cold air"],
            symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing (especially at night)", "Difficulty sleeping due to breathing"],
            prevention: ["Identify and avoid triggers", "Use air purifiers", "Take medications as prescribed", "Get flu vaccine yearly", "Keep home clean and dust-free"],
            seeDoctor: "If asthma attacks are frequent, you need your inhaler more often, or breathing difficulties worsen."
        },
        {
            name: "Dengue",
            emoji: "🦟",
            overview: "A mosquito-borne viral infection transmitted by Aedes mosquitoes. Common in tropical and subtropical regions.",
            causes: ["Bite from infected Aedes mosquito", "Stagnant water (breeding ground)", "Tropical climate"],
            symptoms: ["High fever (104°F/40°C)", "Severe headache", "Pain behind eyes", "Joint & muscle pain", "Skin rash", "Mild bleeding (nose, gums)"],
            prevention: ["Use mosquito repellent", "Wear long sleeves and pants", "Use mosquito nets", "Remove stagnant water around home", "Use screens on windows and doors"],
            seeDoctor: "If you have high fever with severe body aches, rash, or any bleeding."
        },
        {
            name: "Tuberculosis (TB)",
            emoji: "🦠",
            overview: "A bacterial infection (Mycobacterium tuberculosis) primarily affecting the lungs, spread through airborne droplets.",
            causes: ["Mycobacterium tuberculosis bacteria", "Close contact with infected person", "Weakened immune system", "Overcrowded living conditions"],
            symptoms: ["Persistent cough (3+ weeks)", "Coughing blood", "Night sweats", "Weight loss", "Fever", "Fatigue", "Chest pain"],
            prevention: ["BCG vaccination", "Good ventilation in living spaces", "Cover mouth when coughing", "Complete full course of TB treatment", "Regular health screening"],
            seeDoctor: "If you have a persistent cough lasting more than 3 weeks, especially with blood, weight loss, or night sweats."
        }
    ],

    // ─────── FIRST AID GUIDES ───────
    firstAid: [
        {
            title: "CPR (Cardiopulmonary Resuscitation)",
            emoji: "💓",
            steps: [
                "Check the scene for safety and check the person for responsiveness",
                "Call emergency services (112) immediately",
                "Place the heel of one hand on the center of the chest",
                "Place the other hand on top and interlock fingers",
                "Push hard and fast — 30 compressions at 100-120/min, 2 inches deep",
                "Tilt the head back, lift the chin, and give 2 rescue breaths",
                "Continue cycles of 30:2 until help arrives"
            ],
            dos: ["Call 112 immediately", "Push hard and fast", "Minimize interruptions", "Use an AED if available"],
            donts: ["Don't delay starting CPR", "Don't push on the ribs", "Don't stop until help arrives", "Don't be afraid to act"]
        },
        {
            title: "Burns",
            emoji: "🔥",
            steps: [
                "Remove the person from the source of the burn",
                "Cool the burn under cool running water for at least 20 minutes",
                "Remove clothing and jewelry near the burn (unless stuck)",
                "Cover with a clean, non-fluffy dressing or cling wrap",
                "Seek medical attention for severe burns"
            ],
            dos: ["Cool with running water immediately", "Cover loosely with clean dressing", "Give painkillers if needed", "Seek medical help for large burns"],
            donts: ["Don't apply ice directly", "Don't use butter or toothpaste", "Don't break blisters", "Don't remove stuck clothing"]
        },
        {
            title: "Choking",
            emoji: "😰",
            steps: [
                "Encourage the person to cough forcefully",
                "If they can't cough, speak, or breathe — stand behind them",
                "Give 5 sharp back blows between shoulder blades",
                "If back blows don't work, give 5 abdominal thrusts (Heimlich maneuver)",
                "Alternate between 5 back blows and 5 abdominal thrusts",
                "If unconscious, call 112 and begin CPR"
            ],
            dos: ["Act quickly", "Encourage coughing first", "Call 112 if object doesn't dislodge", "Begin CPR if unconscious"],
            donts: ["Don't put fingers in their mouth blindly", "Don't give water while choking", "Don't slap the chest", "Don't leave the person alone"]
        },
        {
            title: "Bleeding (Severe)",
            emoji: "🩸",
            steps: [
                "Call emergency services (112)",
                "Apply direct pressure to the wound using a clean cloth",
                "If possible, raise the injured area above heart level",
                "Apply a firm bandage over the pad — don't remove the original cloth",
                "If blood soaks through, add more cloth on top",
                "Keep the person calm and warm; monitor for shock"
            ],
            dos: ["Apply firm, continuous pressure", "Use clean materials", "Elevate the wound", "Keep the person still"],
            donts: ["Don't remove the first dressing", "Don't use a tourniquet unless trained", "Don't give food or drink", "Don't leave the wound uncovered"]
        },
        {
            title: "Fractures",
            emoji: "🦴",
            steps: [
                "Keep the injured area still — don't try to realign",
                "Apply a splint to immobilize above and below the break",
                "Apply ice wrapped in cloth to reduce swelling",
                "Elevate the injured limb if possible",
                "Seek immediate medical attention"
            ],
            dos: ["Immobilize the injury", "Apply ice (wrapped)", "Support with padding", "Get to hospital"],
            donts: ["Don't move the injured limb unnecessarily", "Don't apply ice directly to skin", "Don't try to push bone back", "Don't give food or drink before hospital"]
        },
        {
            title: "Snake Bite",
            emoji: "🐍",
            steps: [
                "Move away from the snake — don't try to catch it",
                "Keep the person calm and still",
                "Remove jewelry and tight clothing near the bite",
                "Keep the bitten limb below heart level",
                "Immobilize the bitten area (like a fracture)",
                "Get to a hospital immediately for anti-venom"
            ],
            dos: ["Stay calm", "Note the snake's appearance if possible", "Remove constricting items", "Rush to nearest hospital"],
            donts: ["Don't suck the venom", "Don't cut the wound", "Don't apply a tourniquet", "Don't apply ice or electric shock"]
        },
        {
            title: "Heart Attack",
            emoji: "💔",
            steps: [
                "Call 112 immediately",
                "Have the person sit down in a comfortable position",
                "Give an aspirin (300mg) to chew slowly if not allergic",
                "Loosen any tight clothing",
                "Monitor breathing and consciousness",
                "Be prepared to perform CPR if they become unresponsive"
            ],
            dos: ["Call 112 first", "Give aspirin if available", "Keep them calm", "Note the time symptoms started"],
            donts: ["Don't leave them alone", "Don't let them walk around", "Don't give water to swallow aspirin", "Don't wait to see if symptoms go away"]
        },
        {
            title: "Electric Shock",
            emoji: "⚡",
            steps: [
                "Don't touch the person if they're still in contact with the source",
                "Turn off the power source if possible",
                "Use a non-conductive object (wooden stick, rubber) to separate them",
                "Call emergency services (112)",
                "Check breathing and pulse — begin CPR if needed",
                "Treat any burns with cool water"
            ],
            dos: ["Turn off power first", "Use non-conductive materials", "Call 112", "Check for burns"],
            donts: ["Don't touch the person while they're electrified", "Don't use metal or wet objects", "Don't move them unless in danger", "Don't apply ointment to burns"]
        }
    ],

    // ─────── SLEEP DATA ───────
    sleepHours: [
        { age: "0-3 mo", hours: "14-17", label: "Newborn" },
        { age: "4-11 mo", hours: "12-15", label: "Infant" },
        { age: "1-2 yr", hours: "11-14", label: "Toddler" },
        { age: "3-5 yr", hours: "10-13", label: "Preschool" },
        { age: "6-13 yr", hours: "9-11", label: "School Age" },
        { age: "14-17 yr", hours: "8-10", label: "Teen" },
        { age: "18-64 yr", hours: "7-9", label: "Adult" },
        { age: "65+ yr", hours: "7-8", label: "Senior" }
    ],

    sleepTips: [
        { tip: "Keep a consistent sleep schedule — same time every day, even weekends", emoji: "⏰" },
        { tip: "Avoid screens at least 1 hour before bed — blue light disrupts melatonin", emoji: "📵" },
        { tip: "Keep your bedroom cool (16-19°C / 60-67°F) and dark", emoji: "🌡️" },
        { tip: "Avoid caffeine after 2 PM — it stays in your system for 6-8 hours", emoji: "☕" },
        { tip: "Exercise regularly, but not within 3 hours of bedtime", emoji: "🏃" },
        { tip: "Don't eat heavy meals close to bedtime", emoji: "🍕" },
        { tip: "Create a relaxing bedtime routine — reading, stretching, meditation", emoji: "📖" },
        { tip: "Limit naps to 20-30 minutes and avoid napping after 3 PM", emoji: "😴" },
        { tip: "Reserve your bed for sleep only — avoid working in bed", emoji: "🛏️" },
        { tip: "If you can't sleep after 20 minutes, get up and do something relaxing", emoji: "🧘" }
    ],

    sleepChecklist: [
        "Set a fixed wake-up time",
        "Put away all screens 1 hour before bed",
        "Dim the lights in the evening",
        "Keep bedroom temperature cool",
        "No caffeine after 2 PM",
        "Do a 5-minute breathing exercise before bed",
        "Write down tomorrow's tasks to clear your mind",
        "Use blackout curtains or a sleep mask"
    ],

    // ─────── YOGA POSES ───────
    yogaPoses: [
        {
            name: "Mountain Pose",
            sanskrit: "Tadasana",
            emoji: "🏔️",
            difficulty: "beginner",
            duration: "30-60 sec",
            benefits: ["Improves posture", "Strengthens thighs & ankles", "Increases awareness"],
            instructions: ["Stand with feet together, arms at sides", "Spread toes, distribute weight evenly", "Engage thighs, tuck tailbone slightly", "Reach arms overhead, palms facing each other", "Hold and breathe deeply"]
        },
        {
            name: "Tree Pose",
            sanskrit: "Vrksasana",
            emoji: "🌳",
            difficulty: "beginner",
            duration: "30 sec each side",
            benefits: ["Improves balance", "Strengthens legs", "Opens hips"],
            instructions: ["Stand on left foot", "Place right foot on inner left thigh or calf (not knee)", "Bring hands to prayer position or overhead", "Fix gaze on a point for balance", "Hold, then switch sides"]
        },
        {
            name: "Warrior II",
            sanskrit: "Virabhadrasana II",
            emoji: "⚔️",
            difficulty: "beginner",
            duration: "30-45 sec each side",
            benefits: ["Strengthens legs & arms", "Opens hips & chest", "Builds stamina"],
            instructions: ["Step feet 4 feet apart", "Turn right foot out 90°, left foot in slightly", "Bend right knee over right ankle", "Extend arms parallel to floor, gaze over right hand", "Hold, then switch sides"]
        },
        {
            name: "Downward Dog",
            sanskrit: "Adho Mukha Svanasana",
            emoji: "🐕",
            difficulty: "beginner",
            duration: "1-3 minutes",
            benefits: ["Stretches full body", "Strengthens arms & legs", "Calms the mind"],
            instructions: ["Start on hands and knees", "Tuck toes and lift hips high", "Press hands firmly, straighten arms", "Let head hang naturally between arms", "Press heels toward the floor"]
        },
        {
            name: "Cobra Pose",
            sanskrit: "Bhujangasana",
            emoji: "🐍",
            difficulty: "beginner",
            duration: "15-30 sec",
            benefits: ["Strengthens spine", "Opens chest & lungs", "Improves flexibility"],
            instructions: ["Lie face down, palms under shoulders", "Press into hands, lift chest off floor", "Keep elbows slightly bent", "Roll shoulders back, gaze forward", "Hold, then slowly lower down"]
        },
        {
            name: "Child's Pose",
            sanskrit: "Balasana",
            emoji: "🧒",
            difficulty: "beginner",
            duration: "1-3 minutes",
            benefits: ["Resting pose", "Relieves stress", "Stretches back & hips"],
            instructions: ["Kneel on the floor, sit on heels", "Separate knees hip-width apart", "Fold forward, extending arms in front", "Rest forehead on the floor", "Breathe deeply and relax completely"]
        },
        {
            name: "Chair Pose",
            sanskrit: "Utkatasana",
            emoji: "🪑",
            difficulty: "intermediate",
            duration: "30-60 sec",
            benefits: ["Strengthens legs & core", "Builds endurance", "Stimulates heart"],
            instructions: ["Stand with feet together", "Bend knees, lower hips as if sitting in a chair", "Keep knees behind toes", "Raise arms overhead, palms facing", "Hold with core engaged"]
        },
        {
            name: "Triangle Pose",
            sanskrit: "Trikonasana",
            emoji: "📐",
            difficulty: "intermediate",
            duration: "30 sec each side",
            benefits: ["Stretches hamstrings", "Opens hips & chest", "Improves digestion"],
            instructions: ["Step feet 3-4 feet apart", "Turn right foot out, left foot in slightly", "Extend arms, then reach right hand to right shin", "Extend left arm toward ceiling", "Gaze up at left hand"]
        }
    ],

    meditationTypes: [
        { name: "Mindfulness", description: "Focus on present-moment awareness without judgment", duration: "5-20 min" },
        { name: "Breathing", description: "Concentrate on the rhythm of your breath", duration: "5-10 min" },
        { name: "Body Scan", description: "Systematically focus on each body part to release tension", duration: "10-20 min" },
        { name: "Loving-Kindness", description: "Cultivate feelings of compassion for yourself and others", duration: "10-15 min" },
        { name: "Visualization", description: "Create calming mental images to promote relaxation", duration: "5-15 min" }
    ],

    // ─────── MENTAL HEALTH ───────
    mentalHealthTips: [
        { title: "Talk to someone", text: "Sharing your feelings with a trusted friend, family member, or professional can help lighten the burden.", emoji: "💬" },
        { title: "Stay active", text: "Regular physical activity releases endorphins — natural mood boosters. Even a 15-minute walk helps.", emoji: "🚶" },
        { title: "Practice gratitude", text: "Write down 3 things you're grateful for each day. It rewires your brain to focus on positives.", emoji: "📝" },
        { title: "Limit social media", text: "Excessive social media use is linked to anxiety and depression. Set daily time limits.", emoji: "📱" },
        { title: "Get enough sleep", text: "Sleep deprivation significantly impacts mental health. Aim for 7-9 hours nightly.", emoji: "😴" },
        { title: "Learn to say no", text: "Setting boundaries protects your energy and reduces stress from overcommitment.", emoji: "🚫" },
        { title: "Practice mindfulness", text: "Being present in the moment reduces anxiety about the future and regret about the past.", emoji: "🧘" },
        { title: "Seek professional help", text: "There's no shame in therapy. A mental health professional can provide tools and strategies.", emoji: "🩺" }
    ],

    stressWarnings: [
        "Persistent feelings of sadness or hopelessness",
        "Loss of interest in activities you once enjoyed",
        "Changes in appetite or sleep patterns",
        "Difficulty concentrating or making decisions",
        "Withdrawing from friends and family",
        "Increased use of alcohol or substances",
        "Frequent irritability or anger outbursts",
        "Physical symptoms without clear cause (headaches, stomach issues)"
    ],

    helplines: [
        { name: "iCall", number: "9152987821", emoji: "📞" },
        { name: "Vandrevala Foundation", number: "1860-2662-345", emoji: "🆘" },
        { name: "NIMHANS", number: "080-46110007", emoji: "🏥" },
        { name: "Sneha India", number: "044-24640050", emoji: "💚" }
    ],

    // ─────── BLOG ARTICLES ───────
    articles: [
        {
            title: "10 Habits for a Healthier Life",
            category: "Lifestyle",
            categoryColor: "teal",
            readTime: "5 min read",
            emoji: "🌟",
            excerpt: "Small, consistent habits can transform your health. From morning routines to evening wind-downs, discover the 10 habits that science says will make you healthier.",
            content: `<h3>1. Start Your Day with Water</h3><p>Drink a glass of water first thing in the morning to rehydrate your body and kickstart your metabolism. Adding lemon can aid digestion.</p>
<h3>2. Move for 30 Minutes Daily</h3><p>You don't need an intense gym session. A brisk walk, yoga, or cycling counts. The key is consistency, not intensity.</p>
<h3>3. Eat More Vegetables</h3><p>Aim to fill half your plate with vegetables. They're packed with vitamins, minerals, and fiber that your body needs.</p>
<h3>4. Practice Gratitude</h3><p>Write down 3 things you're grateful for each day. Studies show this simple habit reduces stress and improves sleep quality.</p>
<h3>5. Get 7-9 Hours of Sleep</h3><p>Quality sleep is non-negotiable for health. Create a consistent bedtime routine and keep your room cool and dark.</p>
<h3>6. Limit Processed Foods</h3><p>Replace packaged snacks with whole foods like fruits, nuts, and seeds. Your body will thank you with more energy and better digestion.</p>
<h3>7. Stay Hydrated</h3><p>Aim for 8 glasses of water daily. Carry a water bottle and set reminders if needed.</p>
<h3>8. Take Breaks from Screens</h3><p>Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.</p>
<h3>9. Connect with Others</h3><p>Strong social connections are linked to longer life and better mental health. Make time for friends and family.</p>
<h3>10. Practice Deep Breathing</h3><p>Take 5 minutes daily for deep breathing exercises. It activates your parasympathetic nervous system and reduces stress hormones.</p>`
        },
        {
            title: "Understanding Your Blood Pressure Numbers",
            category: "Heart Health",
            categoryColor: "rose",
            readTime: "4 min read",
            emoji: "❤️",
            excerpt: "Blood pressure readings can be confusing. Learn what systolic and diastolic numbers mean, what's normal, and when to be concerned.",
            content: `<h3>What Do the Numbers Mean?</h3><p><strong>Systolic (top number):</strong> Pressure when your heart beats.<br><strong>Diastolic (bottom number):</strong> Pressure when your heart rests between beats.</p>
<h3>Blood Pressure Categories</h3><p><strong>Normal:</strong> Less than 120/80 mmHg<br><strong>Elevated:</strong> 120-129 / less than 80<br><strong>High (Stage 1):</strong> 130-139 / 80-89<br><strong>High (Stage 2):</strong> 140+ / 90+<br><strong>Crisis:</strong> Above 180/120 — seek emergency care!</p>
<h3>How to Maintain Healthy BP</h3><p>Exercise regularly, reduce salt intake, manage stress, limit alcohol, maintain a healthy weight, and don't smoke.</p>`
        },
        {
            title: "The Science of Intermittent Fasting",
            category: "Nutrition",
            categoryColor: "amber",
            readTime: "6 min read",
            emoji: "⏰",
            excerpt: "Intermittent fasting is more than a trend — it's backed by science. Learn about different fasting methods and their proven health benefits.",
            content: `<h3>What is Intermittent Fasting?</h3><p>It's not about what you eat, but when you eat. IF cycles between periods of eating and fasting.</p>
<h3>Popular Methods</h3><p><strong>16:8 Method:</strong> Fast for 16 hours, eat within an 8-hour window. Most popular and beginner-friendly.<br><strong>5:2 Method:</strong> Eat normally 5 days, limit to 500-600 calories on 2 days.<br><strong>Eat-Stop-Eat:</strong> 24-hour fast once or twice a week.</p>
<h3>Proven Benefits</h3><p>Weight loss, improved insulin sensitivity, cellular repair (autophagy), reduced inflammation, and improved brain function.</p>
<h3>Who Should Avoid IF?</h3><p>Pregnant or breastfeeding women, people with eating disorders, those with diabetes (consult doctor first), and children/teenagers.</p>`
        },
        {
            title: "How Exercise Affects Your Brain",
            category: "Fitness",
            categoryColor: "emerald",
            readTime: "5 min read",
            emoji: "🧠",
            excerpt: "Exercise isn't just for your body — it's the single best thing you can do for your brain. Learn how physical activity boosts memory, mood, and cognition.",
            content: `<h3>The Brain-Exercise Connection</h3><p>Exercise increases blood flow to the brain and triggers the release of BDNF (Brain-Derived Neurotrophic Factor), which helps grow new brain cells.</p>
<h3>Key Benefits</h3><p><strong>Better Memory:</strong> Exercise grows the hippocampus — the brain's memory center.<br><strong>Reduced Anxiety:</strong> Lowers cortisol levels and increases endorphins.<br><strong>Improved Focus:</strong> Enhances prefrontal cortex function.<br><strong>Better Sleep:</strong> Regulates your circadian rhythm.</p>
<h3>How Much Do You Need?</h3><p>Just 30 minutes of moderate exercise, 5 days a week. Even a single session improves cognitive function for hours afterward.</p>`
        },
        {
            title: "Superfoods You Should Be Eating",
            category: "Nutrition",
            categoryColor: "amber",
            readTime: "4 min read",
            emoji: "🥗",
            excerpt: "Superfoods are nutrient-dense foods that pack a powerful health punch. Here are the top superfoods backed by nutrition science.",
            content: `<h3>What Makes a Superfood?</h3><p>Superfoods are exceptionally rich in vitamins, minerals, antioxidants, and other beneficial compounds per serving.</p>
<h3>Top Superfoods</h3><p><strong>Blueberries:</strong> Highest antioxidant levels among common fruits.<br><strong>Salmon:</strong> Rich in omega-3 fatty acids for heart and brain health.<br><strong>Turmeric:</strong> Contains curcumin, a powerful anti-inflammatory compound.<br><strong>Spinach:</strong> Loaded with iron, vitamins A, C, K, and folate.<br><strong>Chia Seeds:</strong> Complete protein with fiber and omega-3s.</p>
<h3>How to Include Them</h3><p>Add berries to breakfast, use turmeric in cooking, snack on nuts, blend spinach into smoothies, and top meals with chia seeds.</p>`
        }
    ],

    // ─────── SYMPTOM CHECKER (Basic) ───────
    symptomChecker: {
        disclaimer: "⚠️ This is a basic informational tool only. It does NOT replace professional medical diagnosis. Always consult a doctor for health concerns.",
        steps: [
            {
                question: "What best describes your main concern?",
                options: [
                    { text: "Fever & Body Pain", next: "fever" },
                    { text: "Breathing Issues", next: "breathing" },
                    { text: "Stomach/Digestive", next: "stomach" },
                    { text: "Headache", next: "headache" },
                    { text: "Skin Issues", next: "skin" },
                    { text: "General Fatigue", next: "fatigue" }
                ]
            }
        ],
        results: {
            fever: {
                title: "Possible Conditions",
                conditions: ["Common Cold / Flu", "Dengue (if mosquito-prone area)", "Viral Fever", "COVID-19"],
                advice: "Rest, stay hydrated, monitor temperature. If fever exceeds 103°F (39.4°C) or persists for more than 3 days, consult a doctor immediately.",
                urgency: "warning"
            },
            breathing: {
                title: "Possible Conditions",
                conditions: ["Asthma", "Anxiety / Panic Attack", "Allergic Reaction", "Respiratory Infection"],
                advice: "If experiencing severe difficulty breathing, chest pain, or bluish lips — call emergency services (112) immediately.",
                urgency: "danger"
            },
            stomach: {
                title: "Possible Conditions",
                conditions: ["Food Poisoning", "Gastritis", "Acid Reflux", "Irritable Bowel"],
                advice: "Stay hydrated with ORS or clear fluids. Avoid spicy/oily foods. If there's blood in vomit/stool or severe pain, seek medical help.",
                urgency: "warning"
            },
            headache: {
                title: "Possible Conditions",
                conditions: ["Tension Headache", "Migraine", "Dehydration", "Eye Strain"],
                advice: "Rest in a dark, quiet room. Stay hydrated. If headache is sudden and severe ('thunderclap'), or accompanied by stiff neck and fever, seek emergency care.",
                urgency: "info"
            },
            skin: {
                title: "Possible Conditions",
                conditions: ["Allergic Reaction", "Fungal Infection", "Eczema", "Contact Dermatitis"],
                advice: "Avoid scratching. Use mild, fragrance-free soap. If rash spreads rapidly, is accompanied by fever, or difficulty breathing, seek immediate medical attention.",
                urgency: "info"
            },
            fatigue: {
                title: "Possible Conditions",
                conditions: ["Anemia (Iron Deficiency)", "Thyroid Issues", "Sleep Disorder", "Vitamin D Deficiency"],
                advice: "Ensure adequate sleep (7-9 hours), eat iron-rich foods, stay hydrated, and exercise regularly. If fatigue persists for weeks, get a blood test.",
                urgency: "info"
            }
        }
    }
};
