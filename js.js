
const PAL={gold:{hex:'#E6A800',bg:'rgba(252,197,41,.14)',txt:'#7A5200',bdr:'rgba(230,168,0,.40)'},rust:{hex:'#ED6940',bg:'rgba(237,105,64,.13)',txt:'#8A2A0D',bdr:'rgba(237,105,64,.38)'},teal:{hex:'#3F99A8',bg:'rgba(63,153,168,.12)',txt:'#1E5F6A',bdr:'rgba(63,153,168,.38)'},purple:{hex:'#7B5EA7',bg:'rgba(123,94,167,.12)',txt:'#3D1F72',bdr:'rgba(123,94,167,.36)'},pink:{hex:'#D63870',bg:'rgba(214,56,112,.12)',txt:'#7A0E38',bdr:'rgba(214,56,112,.36)'},navy:{hex:'#155493',bg:'rgba(21,84,147,.12)',txt:'#0D2D52',bdr:'rgba(21,84,147,.36)'}};
const CR1=[['0–100 pax','Tier 2','No setup','₹720–770'],['100–300 pax','Tier 2','No setup','₹610–690'],['300–500 pax','Tier 2','No setup','₹560–640'],['0–100 pax','Tier 1','With setup','₹950–1050 (+ ₹200 add-on)'],['100–300 pax','Tier 1','With setup','₹850–950 (+ ₹175 add-on)'],['300–500 pax','Tier 1','No setup','₹780–850 (+ ₹150 add-on)']];
const CR2=[['—','—','—','Cost on request — contact SmartQ team']];
const CR3=[['0–100 pax','Tier 2','No setup','₹750–830'],['100–300 pax','Tier 2','No setup','₹660–710'],['300–500 pax','Tier 2','No setup','₹580–660'],['0–100 pax','Tier 1','With setup','₹910–1050 (+ ₹200 add-on)'],['100–300 pax','Tier 1','No setup','₹840–920 (+ ₹175 add-on)'],['300–500 pax','Tier 1','No setup','₹720–830 (+ ₹150 add-on)']];
const CR4=[['0–100 pax','Tier 2','No setup','₹790–860'],['100–300 pax','Tier 2','No setup','₹700–790'],['300–500 pax','Tier 2','No setup','₹690–740'],['0–100 pax','Tier 1','With setup','₹950–1030 (+ ₹300 add-on)'],['100–300 pax','Tier 1','No setup','₹870–950 (+ ₹245 add-on)'],['300–500 pax','Tier 1','No setup','₹830–910 (+ ₹210 add-on)']];
const CALENDAR=[{month:'January',num:'01',festivals:[{name:'Republic Day',theme:'Flavours of India',pal:'navy',options:['Option 1','Option 2'],menu:{'Option 1':[['Welcome drink','Tender coconut water (Kerala)'],['Salad','Tricolor salad'],['Chaats','Ghoogni chaat (Bengal)'],['Veg starter','Dhokla with fried chilly, red & green chutney (Gujarat)'],['Nonveg starter','Chicken galauti kebab / Chicken seekh kebab (UP)'],['Breads','Tawa chapatti'],['Rice','Steamed rice / Kashmiri pulao'],['Lentils','Gujrati meethi dal / Mysore rasam'],['Veg mains','Jaipuri bhindi masala / Palak paneer / Paneer butter masala'],['Nonveg mains','Chicken chettinad / Chicken varuval'],['Dessert','Rasgulla / Sandesh (Bengal) / Tricolor mousse'],['Accompaniments','Curd, papad, pickle, mouth freshner']],'Option 2':[['Welcome drink','Mango lassi (Rajasthan)'],['Salad','Tricolor salad'],['Chaats','Channa chaat (Jharkhand)'],['Veg starter','Mansinkai bhajji (Karnataka) / Lucknowi paneer tikka'],['Nonveg starter','Dahi murgh kebab / Chicken pakoda (Odisha)'],['Breads','Tawa chapatti'],['Rice','Steamed rice / Yakhni pulao (J&K)'],['Lentils','Dal makhani / Thakkali rasam'],['Veg mains','Baingan bharta / Shahi paneer / Paneer pasanda'],['Nonveg mains','Butter chicken / Dhaba style chicken (Punjab)'],['Dessert','Obattu / Dharwad peda (Karnataka) / Tricolor pastry'],['Accompaniments','Curd, papad, pickle, mouth freshner']]},costRows:CR1}]},{month:'February',num:'02',festivals:[{name:"Women's Day Special",theme:'She leads, she eats',pal:'pink',options:['Menu 1','Menu 2'],menu:{'Menu 1':[['Soup / Drink',"Queen's Quinoa Shorba / Bold Berry Mojito"],['Salad','BFF Beetroot Salad'],['Chaats','Nirbhaya Nachos'],['Veg starter','Sassy Sesame Tikkis'],['Nonveg starter','Spirited Sesame Chicken Pops'],['Bread','Empowered Tandoori Roti'],['Rice','Pure Perfection Rice / Firecracker Fried Rice'],['Lentils','Dynamic Dal Tadka'],['Veg mains','Tender Tofu & Veg Stir Fry / Magnetic Makhani Paneer'],['Nonveg mains','Thoughtful Thai Basil Chicken'],['Dessert',"Fearless Fudge Brownie / Women's Day Spl Cupcake"],['Paan counter','Divine Delhi Paan'],['Accompaniments','Papad, Pickle, Raita, Mouth freshner']],'Menu 2':[['Soup / Drink',"Courageous Corn Chowder / Diva's Delight Lime Soda"],['Salad','Graceful Greek Salad'],['Chaats','Boss Lady Bruschetta'],['Veg starter','Vibrant Veggie Croquettes'],['Nonveg starter','Resilient Reshmi Tikkas'],['Bread','Empowered Tandoori Roti'],['Rice','Pure Perfection Rice / Zesty Zafrani Pulao'],['Lentils','Bold Black Dal (Dal Makhani)'],['Veg mains','Playful Paneer Bhurji / Radiant Roasted Veg Jalfrezi'],['Nonveg mains','Mighty Malabar Chicken Curry'],['Dessert',"Graceful Gajar Halwa / Women's Day Spl Cupcake"],['Paan counter','Mystic Mango Paan'],['Accompaniments','Papad, Pickle, Raita, Mouth freshner']]},costRows:CR2}]},{month:'March',num:'03',festivals:[{name:'Holi',theme:'Colour & festive feast',pal:'purple',options:['Option 1','Option 2'],menu:{'Option 1':[['Welcome drink','Thandai'],['Salad','Green salad'],['Chaats','Sev puri / Dahi papdi chaat'],['Veg starter','Achari paneer tikka / Tandoori aloo with mirch achar'],['Nonveg starter','Peri peri chicken tikka'],['Breads','Ajwain chapatti'],['Rice','Steamed rice / Peas pulao / Saffron pulao'],['Lentils','Dal makhani / Pepper rasam'],['Veg mains','Amritsari chhole / Navratan korma'],['Nonveg mains','Mangalore chicken / Hyderabadi chicken'],['Dessert','Gujia / Thandai cheese cake'],['Spl counter','Maghai paan']],'Option 2':[['Welcome drink','Dry fruit lassi'],['Salad','Green salad'],['Chaats','Samosa chaat / Dahi bhalla chaat'],['Veg starter','Tandoori broccoli with mint mayo / Malai paneer tikka'],['Nonveg starter','Chicken seekh kebab'],['Breads','Triangle paratha'],['Rice','Steamed rice / Mint rice / Ghee jeera rice'],['Lentils','Maa ki dal / Coriander rasam'],['Veg mains','Matar mushroom masala / Diwani sabz handi'],['Nonveg mains','Chicken xacuti / Chicken tikka masala'],['Dessert','Malpua with rabri / Shahi tukda'],['Spl counter','Maghai paan']]},costRows:[['0–100 pax','Tier 2','No setup','₹720–830'],['100–300 pax','Tier 2','No setup','₹610–690'],['300–500 pax','Tier 2','No setup','₹560–640'],['0–100 pax','Tier 1','With setup','₹890–970 (+ ₹300 add-on)'],['100–300 pax','Tier 1','No setup','₹810–930 (+ ₹245 add-on)'],['300–500 pax','Tier 1','No setup','₹720–810 (+ ₹210 add-on)']]},{name:'Ugadi',theme:'Plantain leaf service',pal:'teal',options:['Option 1','Option 2'],menu:{'Option 1':[['Welcome drink','Sol kodi'],['Accompaniments','Ghee, Salt, Pickle / Appalam / Sandige / Curdrice'],['Salad','Moong dal kosambari salad with pomegranate'],['Veg starter','Black channa sundal / Mansinkai bhajji'],['Bread','Poori / Tawa chapatti'],['Rice','White rice / Puliyogare + chutney'],['Lentils','Drumstick sambar / Garlic tomato rasam'],['Veg mains','Carrot beans poriyal / Yennagai masala'],['Dessert','Sweet pongal / Kai holige'],['Add ons','Yelakki banana / Ice cream']],'Option 2':[['Welcome drink','Chilled neer mor'],['Accompaniments','Ghee, Salt, Pickle / Appalam / Sandige / Curdrice'],['Salad','Hesaru bele chutney kosambari salad'],['Veg starter','Kachumber salad / Medu vada'],['Bread','Poori / Tawa chapatti'],['Rice','White rice / Tomato peanut rice + chutney'],['Lentils','Mixed veg sambar / Coriander pepper rasam'],['Veg mains','Chow chow poriyal / Channa masala'],['Dessert','Kesari bath / Bele holige'],['Add ons','Yelakki banana / Ice cream']]},costRows:[['0–100 pax','Tier 2','Sit-down','₹710–850'],['100–300 pax','Tier 2','Sit-down','₹670–750'],['300–500 pax','Tier 2','Sit-down','₹620–720'],['0–100 pax','Tier 1','Sit-down','₹950–1050'],['100–300 pax','Tier 1','Sit-down','₹870–980'],['300–500 pax','Tier 1','Sit-down','₹820–910']]},{name:'Ramzan / Eid',theme:'Biryani Festival',pal:'gold',options:['Option 1','Option 2'],menu:{'Option 1':[['Welcome drink','Mohabath ka sharbath'],['Salad','Green salad'],['Fruit bowl','Apple, Banana, Watermelon, Grapes, Papaya, Orange'],['Soup','Mix veg dal shorba'],['Veg starter','Onion patty samosa / Assorted pakodas / Paneer tikka / Falafel with hummus'],['Nonveg starter','Chicken kheema samosa / Chicken pakoda'],['Nonveg mains','Chicken haleem'],['Veg biryani','Lucknowi vegetable biryani + raita + salan'],['Nonveg biryani','Awadhi chicken biryani / Kolkata chicken biryani + raita + salan'],['Dessert','Sheer khurma / Qubani ka meetha'],['Spl counter','Falooda shots'],['Add ons','Dates, Cashews, Almonds, Pistachios, Walnuts']],'Option 2':[['Welcome drink','Sharbath-e-basil'],['Salad','Green salad'],['Fruit bowl','Apple, Banana, Watermelon, Grapes, Papaya, Orange'],['Soup','Palak corn shorba'],['Veg starter','Spring rolls / Paneer satay / Veggie fajitas'],['Nonveg starter','Chicken cutlet / Chicken spring roll'],['Nonveg mains','Chicken keema masala'],['Veg biryani','Donne biryani / Paneer makhani biryani + raita + salan'],['Nonveg biryani','Mughlai chicken biryani / Lucknowi chicken biryani + raita + salan'],['Dessert','Shahi tukda / Gulab jamun with rabdi / Saffron rice kheer'],['Spl counter','Berry pudding with chia seeds'],['Add ons','Dates, Cashews, Almonds, Pistachios, Walnuts']]},costRows:[['0–100 pax','Tier 2','No setup','₹1050–1100'],['100–300 pax','Tier 2','No setup','₹930–1020'],['300–500 pax','Tier 2','No setup','₹800–910'],['0–100 pax','Tier 1','With setup','₹1250–1350 (+ ₹200 add-on)'],['100–300 pax','Tier 1','No setup','₹1170–1250 (+ ₹175 add-on)'],['300–500 pax','Tier 1','No setup','₹1080–1150 (+ ₹150 add-on)']]}]},{month:'April',num:'04',festivals:[{name:'Summer Special',theme:'Cool & refreshing fare',pal:'rust',options:['Option 1','Option 2'],menu:{'Option 1':[['Welcome drink','Masala pudina chaas'],['Salad','Cucumber, tomato and red onion salad'],['Chaats','Matar kachori chaat'],['Veg starter','Spinach and corn fritters / Gobi manchurian'],['Nonveg starter','Tandoori chicken tikka'],['Breads','Tawa chapatti'],['Rice','Steamed rice / Vegetable pulao'],['Lentils','Andhra pappu / Ginger rasam'],['Veg mains','Aloo jeera methi / Palak paneer'],['Nonveg mains','Kasturi murgh'],['Dessert','Rasmalai / Kulfi'],['Spl counter','Flavoured yoghurt']],'Option 2':[['Welcome drink','Jeevan thanda'],['Salad','Watermelon and feta cheese salad'],['Chaats','Samosa channa chaat'],['Veg starter','Hara bhara kebab / Corn cheese balls'],['Nonveg starter','Lehsooni chicken tikka'],['Breads','Tawa chapatti'],['Rice','Steamed rice / Peas corn pulao'],['Lentils','Mix veg sambar / Beetroot rasam'],['Veg mains','Bhindi do pyaza / Kadhai paneer'],['Nonveg mains','Murgh methi malai'],['Dessert','Jalebi with rabri / Falooda'],['Spl counter','Ice lollies']]},costRows:CR3}]},{month:'May',num:'05',festivals:[{name:'Mango Festival',theme:'Aam ka sezon',pal:'gold',options:['Option 1','Option 2'],menu:{'Option 1':[['Welcome drink','Mango fizz'],['Salad','Mango tango salad'],['Chaats','Kachhi kairi with salt and red chilly powder'],['Veg starter','Mango infused aloo tikki / Mango corn fritters'],['Nonveg starter','Chicken seekh kebab'],['Breads','Tawa chapatti'],['Rice','Steamed rice / Kashmiri pulao'],['Lentils','Aamti dal / Garlic rasam'],['Veg mains','Gobi masala / Aam ka kofta curry'],['Nonveg mains','Mango chicken korma'],['Dessert','Mango cheese cake / Mango barfi'],['Spl counter','Ripe mango cubes']],'Option 2':[['Welcome drink','Raw mango cool drink'],['Salad','Raw mango and papaya salad'],['Chaats','Kachhi kairi with salt and red chilly powder'],['Veg starter','Mango spinach fritters / Mango and avocado spring rolls'],['Nonveg starter','Sesame glazed chicken fry'],['Breads','Tawa chapatti'],['Rice','Steamed rice / Yakhni pulao'],['Lentils','Mango moong dal / Pepper rasam'],['Veg mains','Stuffed bell pepper / Mango paneer masala'],['Nonveg mains','Mango chicken curry'],['Dessert','Mango mousse / Mango pedha'],['Spl counter','Ripe mango cubes']]},costRows:CR3}]},{month:'June',num:'06',festivals:[{name:'Yoga Day',theme:'Wellness & mindful eating',pal:'teal',options:['Option 1','Option 2'],menu:{'Option 1':[['Welcome drink','Coconut water with mint and lime'],['Soup','Lentil and vegetable soup'],['Salad','Chickpea and cucumber salad'],['Veg starter','Live tacos veg / Grilled veggie skewers'],['Nonveg starter','Chicken satay with peanut sauce'],['Breads','Whole wheat chapatti'],['Rice','Steamed rice / Quinoa pulao'],['Lentils','Vegetable sambar / Methi rasam'],['Veg mains','Broccoli and bell pepper stir fry / Cauliflower and peas in tomato gravy'],['Nonveg mains','Grilled chicken in coconut curry'],['Dessert','Chia seed pudding with fresh fruits / Carrot cake bites'],['Spl counter','Yoga bars']],'Option 2':[['Welcome drink','Detox green juice'],['Soup','Carrot and ginger soup'],['Salad','Avocado and quinoa salad'],['Veg starter','Veg quesadilla / Stuffed mushroom'],['Nonveg starter','Honey chilli chicken bites with sesame seeds'],['Breads','Multigrain paratha'],['Rice','Steamed rice / Brown rice pilaf with vegetables'],['Lentils','Mango sambar / Pineapple rasam'],['Veg mains','Sauteed veggies in sriracha lime sauce / Tofu and mushroom curry'],['Nonveg mains','Lemon and herbed grilled chicken'],['Dessert','Greek yoghurt with honey and almonds / Rice kheer with jaggery'],['Spl counter','Yoga bars']]},costRows:[['0–100 pax','Tier 2','No setup','₹840–940'],['100–300 pax','Tier 2','No setup','₹760–810'],['300–500 pax','Tier 2','No setup','₹690–740'],['0–100 pax','Tier 1','With setup','₹970–1060 (+ ₹200 add-on)'],['100–300 pax','Tier 1','No setup','₹910–980 (+ ₹175 add-on)'],['300–500 pax','Tier 1','No setup','₹830–910 (+ ₹150 add-on)']]}]},{month:'July',num:'07',festivals:[{name:'Monsoon Special',theme:'Comfort food & pakoda season',pal:'navy',options:['Option 1','Option 2'],menu:{'Option 1':[['Soup','Tomato shorba'],['Salad','Kachumber salad'],['Chaats','Bhelpuri in donne bowls'],['Veg starter','Assorted Indian pakodas / Dhokla with green and imli chutney'],['Nonveg starter','Chicken kebab'],['Breads','Roomali roti / Beetroot chapatti'],['Rice','Steamed rice / Achari palak khichdi / Corn pulao'],['Lentils','Dal bukhara / Mix veg sambar / Lemon rasam'],['Veg mains','Adraki gobi masala / Mushroom masala'],['Nonveg mains','Chicken lababdar'],['Dessert','Kesar pista barfi / Badam halwa'],['Spl counter','Veg momos with spicy Nepali chutney']],'Option 2':[['Soup','Dhaniya shorba'],['Salad','Cucumber and tomato salad with mint mayo'],['Chaats','Chinese bhel in waffle cones'],['Veg starter','Assorted pakodas / Kachori with spicy green and tangy imli chutney'],['Nonveg starter','Chicken 65'],['Breads','Roomali roti / Palak chapatti'],['Rice','Steamed rice / Bisibellebath with khara boondi'],['Lentils','Dal fry with mixed vegetables / Raddish sambar / Tamarind rasam'],['Veg mains','Yennegai fry masala / Paneer ghee roast'],['Nonveg mains','Chicken tikka masala'],['Dessert','Shahi tukda / Pineapple kesari'],['Spl counter','Veg hakka noodles with gobi manchurian']]},costRows:CR4}]},{month:'August',num:'08',festivals:[{name:'Independence Day',theme:'Flavours of India',pal:'navy',options:['Option 1','Option 2'],menu:{'Option 1':[['Welcome drink','Tender coconut water (Kerala)'],['Salad','Tricolor salad'],['Chaats','Ghoogni chaat (Bengal)'],['Veg starter','Dhokla with fried chilly, red & green chutney'],['Nonveg starter','Chicken galauti kebab / Chicken seekh kebab'],['Breads','Tawa chapatti'],['Rice','Steamed rice / Kashmiri pulao'],['Lentils','Gujrati meethi dal / Mysore rasam'],['Veg mains','Jaipuri bhindi masala / Palak paneer'],['Nonveg mains','Chicken chettinad / Chicken varuval'],['Dessert','Rasgulla / Sandesh / Tricolor mousse'],['Accompaniments','Curd, papad, pickle, mouth freshner']],'Option 2':[['Welcome drink','Mango lassi (Rajasthan)'],['Salad','Tricolor salad'],['Chaats','Channa chaat (Jharkhand)'],['Veg starter','Mansinkai bhajji / Lucknowi paneer tikka'],['Nonveg starter','Dahi murgh kebab / Chicken pakoda'],['Breads','Tawa chapatti'],['Rice','Steamed rice / Yakhni pulao'],['Lentils','Dal makhani / Thakkali rasam'],['Veg mains','Baingan bharta / Shahi paneer'],['Nonveg mains','Butter chicken / Dhaba style chicken'],['Dessert','Obattu / Dharwad peda / Tricolor pastry'],['Accompaniments','Curd, papad, pickle, mouth freshner']]},costRows:CR1},{name:'Onam',theme:'Sadya — Kerala harvest feast',pal:'teal',options:['Menu'],menu:{'Menu':[['Welcome drink','Panakam'],['Salad','Pomegranate kosambari salad'],['Bread','Kerala paratha'],['Rice','White rice + Red rice + Ghee / Peas pulao'],['Lentils','Andhra pappu / Pumpkin eriserry / Melugu rasam'],['Veg dry','Cabbage carrot thoran / Kerala avial'],['Veg gravy','Kerala style kadala curry'],['Dessert','Paruppu pradanam / Shakkara varatti'],['Accompaniments','Curd, injipuli, pachhadi / Pickle, papad, mango achar'],['Special','Pazham / Maddur vada with chutney']]},costRows:CR2}]},{month:'September',num:'09',festivals:[{name:'Ganesh Chaturthi',theme:'Maharashtrian celebration',pal:'gold',options:['Menu 1','Menu 2'],menu:{'Menu 1':[['Welcome drink','Sweet lassi'],['Salad','Rajma chaat salad'],['Special','Kanda bhajji chaat'],['Bread','Tawa paratha'],['Rice','White rice / Bombay tawa pulao'],['Lentils','Aamti dal / Drumstick sambar / Pineapple rasam'],['Veg dry','Kohliwada mixed veggies'],['Veg gravy','Paneer kolhapuri'],['Veg starter','Dabeli / Sabudana tikki with sweet curd'],['Nonveg starters','Chicken seekh kebab'],['Nonveg mains','Chicken kolhapuri'],['Dessert','Shrikhand / Modak']],'Menu 2':[['Welcome drink','Mango lassi'],['Salad','Cucumber and pomegranate salad'],['Special','Batata vada'],['Bread','Ajwain chapatti'],['Rice','White rice / Jeera rice'],['Lentils','Dal makhani / Murungakai kuzhambu / Pepper rasam'],['Veg dry','Bhindi masala'],['Veg gravy','Shahi paneer'],['Veg starter','Methi thepla rolls / Panchratan pakoda with spicy chutney'],['Nonveg starters','Murgh shammi kebab'],['Nonveg mains','Chicken saagwala'],['Dessert','Matka phirni / Motichoor laddu']]},costRows:CR4}]},{month:'October',num:'10',festivals:[{name:'Durga Puja / Dusshera',theme:'Bengali festive flavours',pal:'rust',options:['Menu 1','Menu 2'],menu:{'Menu 1':[['Welcome drink','Gondhoraj mint lemonade'],['Salad','Sprout salad'],['Chaats','Ghoogni papdi chaat'],['Veg starter','Aloor chop / Beguni'],['Nonveg starter','Chicken cutlet with kasundi'],['Breads','Radhaballabi'],['Rice','White steamed rice / Basanti pulao with dry fruits'],['Lentils','Bengali chana dal with coconut / Drumstick sambar / Garlic rasam'],['Veg mains','Aloor dom kosha / Phulkopi kosha'],['Nonveg mains','Chicken daakbugalow / Doi maachh'],['Dessert','Malai sandwich / Baked rosogolla'],['Accompaniments','Boodi raita, Papad, Pickle, Mouth freshner']],'Menu 2':[['Welcome drink','Aam panna'],['Salad','Kachumber salad'],['Chaats','Phuchka'],['Veg starter','Badhakopir bora / Vegetable chop'],['Nonveg starter','Chicken pakoda with ketchup'],['Breads','Peas kochuri'],['Rice','White steamed rice / Bengali veg fried rice'],['Lentils',"Bengali dal tadka / Shallot's sambar / Coriander rasam"],['Veg mains','Aloo posto / Potoler dorma'],['Nonveg mains','Dhonepata kachalonka murgi / Katla kalia'],['Dessert','Rajbhog / Misti doi'],['Accompaniments','Boodi raita, Papad, Pickle, Mouth freshner']]},costRows:[['0–100 pax','Tier 2','No setup','₹740–820'],['100–300 pax','Tier 2','No setup','₹690–770'],['300–500 pax','Tier 2','No setup','₹650–720'],['0–100 pax','Tier 1','With setup','₹900–990 (+ ₹200 add-on)'],['100–300 pax','Tier 1','No setup','₹830–900 (+ ₹175 add-on)'],['300–500 pax','Tier 1','No setup','₹750–810 (+ ₹210 add-on)']]}]},{month:'November',num:'11',festivals:[{name:'Diwali',theme:'Lights & festive buffet',pal:'gold',options:['Option 1','Option 2','Option 3'],menu:{'Option 1':[['Drink','Badam thandai'],['Soup','Shorba-e-gulzar (tomato and coriander)'],['Salad','Ananas kheera chaat / Lahsuni beetroot salad'],['Starter','Hara bhara kebab with paneer / Chicken malai tikka'],['Mains (veg)','Kadai paneer north style'],['Mains (nonveg)','Murgh raara / Chicken jalfrezi / Chicken dum biryani'],['Dal','Sunehri moong dal fry'],['Rice','Steamed rice / Veg dum biryani'],['Roti','Triangle paratha (wheat)'],['Dessert','Rasmalai / Red velvet cupcake / Gajar ka halwa'],['Chaats','Dahi puri chaat / Sev puri chaat'],['Accompaniments','Raita & pickle']],'Option 2':[['Drink','Tropical fruit punch'],['Soup','Adraki palak shorba / Cream of broccoli'],['Salad','Kachumber with pomegranate / Conti style tossed mix veggies'],['Starter','Tandoori paneer tikka / Murg malai kebab'],['Mains (veg)','Palak paneer / Paneer lababdar'],['Mains (nonveg)','Murgh handi lazeez / Chicken tikka masala / Awadhi chicken biryani'],['Dal','Dal makhani'],['Rice','Steamed rice / Zafrani veg biryani'],['Roti','Tawa phulka'],['Dessert','Gulab jamun / Fruit truffle pudding / Brownie with ice cream'],['Chaats','Dahi papdi chaat / Golgappa'],['Accompaniments','Raita & pickle']],'Option 3':[['Drink','Virgin colada'],['Soup','Minestrone / Mulligatawny soup'],['Salad','Aloo anar chaat / Pineapple and chana chatpata salad'],['Starter','Gobi ghee roast / Tandoori bharwan aloo / Chicken schezwan garlic'],['Mains (veg)','Shahi paneer'],['Mains (nonveg)','Dabba jaane murgh / Shan e murgh / Lakhnowi chicken dum biryani'],['Dal','Dal panchratan'],['Rice','Steamed rice / Lakhnowi veg dum biryani'],['Roti','Ajwain chapati'],['Dessert','Moong dal halwa / Kesar jalebi / Tiramisu shots'],['Chaats','Dahi vada / Masala puri'],['Accompaniments','Raita & pickle']]},costRows:[['0–100 pax','Tier 2','No setup','₹850–920'],['100–300 pax','Tier 2','No setup','₹760–820'],['300–500 pax','Tier 2','No setup','₹680–730'],['0–100 pax','Tier 1','With setup','₹990–1070 (+ ₹200 add-on)'],['100–300 pax','Tier 1','No setup','₹870–950 (+ ₹175 add-on)'],['300–500 pax','Tier 1','No setup','₹790–850 (+ ₹150 add-on)']]},{name:"Men's Day",theme:'Bold flavours for every personality',pal:'navy',options:['Menu 1','Menu 2'],menu:{'Menu 1':[['Soup / Drink','Serious Sahib Shorba / Bhai Ka Banta'],['Salad','Dilwale Dahi Salad'],['Chaats','Dabang Dahi Puri'],['Veg starter','Tez-Taraar Tikki'],['Nonveg starter','Toofani Tandoori Wings'],['Bread','Tension-Free Tawa Roti'],['Rice','Seedha-Sadha Safed Chawal / Jugaadu Jeera Rice'],['Lentils','Dil Se Dal Makhani'],['Veg mains','Buddhimaan Bhindi Fry / Ziddi Zafrani Paneer'],['Nonveg mains','Baap of Chicken Butter Masala'],['Dessert','Masoom Mishti Doi / Badshah Badam Pudding'],['Paan counter','Sanskari Babu ke Banarasi Paan / Choco Raja ki Masti Chocolaty Paan']],'Menu 2':[['Soup / Drink','Dhinchak Dhaniya Soup / Sher Ka Shikanji'],['Salad','Shaayar Saag Salad'],['Chaats','Bindaas Bhajiya'],['Veg starter','Hero No. 1 Hara Bhara Kebab'],['Nonveg starter','Sakht Launda Seekh Kebab'],['Bread','Shaandar Shahi Roti'],['Rice','Seedha-Sadha Safed Chawal / Sabka Dost Sabzi Pulao'],['Lentils','Dhaakad Dal Tadka'],['Veg mains','Akdu Aloo Fry / Mastikhor Malai Kofta'],['Nonveg mains','Dhamaka Chicken Masala'],['Dessert','Dostana Dark Chocolate Mousse / Jolly Jalebi'],['Paan counter','Thande Dilwalo ki Maghai Paan / Rajkumar ka Chandi wala Paan']]},costRows:CR2}]},{month:'December',num:'12',festivals:[{name:'Christmas',theme:'Indian, Indo-Conti & Continental',pal:'teal',options:['Indian','Indo-Continental','Continental'],menu:{'Indian':[['Welcome drink','Fruit punch with chopped fruits'],['Soup','Tomato & dhania shorba / Palak shorba'],['Salad','Caesar salad with garlic croutons'],['Veg starter','Gobi ghee roast / Achari aloo tikka'],['Nonveg starter','Tandoori chicken / Chilli chicken (Indian style)'],['Mains (veg)','Subz miloni / Paneer tikka masala / Paneer hari mirch tikka'],['Dal','Dal makhani'],['Chicken','Chicken cacciatore'],['Veg rice','Zafrani veg biryani / Veg dum biryani'],['Bread','Butter tawa phulka / Onion paratha'],['Dessert','Baked gulab jamun cheesecake / Rasmalai / Gajar ka halwa'],['Live counter','Waffle station with toppings']],'Indo-Continental':[['Welcome drink','Virgin sangria with chopped fruits'],['Soup','Roasted tomato and basil / Creamy mushroom and leek soup'],['Salad','Greek salad with feta cheese'],['Veg starter','Spinach and cheese stuffed mushrooms'],['Nonveg starter','Crispy chicken wings with BBQ sauce'],['Mains (veg)','Mushroom and vegetable stroganoff'],['Chicken gravy','Chicken Normandy (apple cider sauce)'],['Chicken main','Grilled chicken with rosemary and garlic'],['Veg rice','Lemon and herb risotto'],['Bread','Multigrain rolls / Ciabatta bread'],['Dessert','Eggless Christmas pudding / Plum cake / Dark chocolate tart'],['Live counter','Live pasta counter with 3 sauces and assorted veggies']],'Continental':[['Welcome drink','Pomegranate and mint cooler'],['Soup','Cream of broccoli soup with parmesan'],['Salad','Roasted beetroot salad with feta on arugula'],['Veg starter','Zucchini fritters with lemon aioli'],['Nonveg starter','Grilled chicken skewers with tzatziki sauce'],['Mains (veg)','Butternut squash and sage risotto'],['Chicken gravy','Chicken piccata with capers'],['Chicken main','Herb-roasted chicken thighs with garlic and lemon'],['Veg rice','Herb-infused basmati rice'],['Bread','Parmesan breadsticks / Soft whole wheat rolls'],['Dessert','Red velvet cupcakes / Pecan pie with whipped cream'],['Live counter','Live pizza counter (veg + chicken)']]},costRows:[['0–100 pax','Tier 2','No setup','₹880–970'],['100–300 pax','Tier 2','No setup','₹790–860'],['300–500 pax','Tier 2','No setup','₹720–810'],['0–100 pax','Tier 1','With setup','₹1050–1140 (+ ₹300 add-on)'],['100–300 pax','Tier 1','No setup','₹970–1030 (+ ₹245 add-on)'],['300–500 pax','Tier 1','No setup','₹890–950 (+ ₹210 add-on)']]}]}];

/* LOCAL_REG removed, using BOX_OPTS */

/* buildLocalReg removed */

function buildCalendar(){
  const grid=document.getElementById('calGrid');
  CALENDAR.forEach((m,mi)=>{
    const card=document.createElement('div');
    card.className='month-card';
    card.style.animationDelay=(mi*0.04)+'s';
    let bHTML='';
    if(!m.festivals.length){bHTML='<div class="month-empty"><div class="month-empty-dots"><span></span><span></span><span></span></div></div>';}
    else{m.festivals.forEach((f,fi)=>{bHTML+=`<div class="fest-chip chip-${f.pal}" data-month="${m.num}" data-fi="${fi}"><span class="chip-arrow">→</span><span class="chip-name">${f.name}</span><span class="chip-theme">${f.theme}</span></div>`;});}
    card.innerHTML=`<div class="month-hdr"><span class="month-name">${m.month}</span><span class="month-num">${m.num}</span></div><div class="month-body">${bHTML}</div>`;
    grid.appendChild(card);
  });
}
buildCalendar();

function openDetail(monthNum,fi){
  const m=CALENDAR.find(x=>x.num===monthNum);
  const f=m.festivals[fi];
  const p=PAL[f.pal];
  const pill=document.getElementById('dMonthPill');
  pill.textContent=m.month+' 2026';
  pill.style.background=p.hex;
  document.getElementById('dTitle').textContent=f.name;
  document.getElementById('dSubtitle').textContent=f.theme;
  const strip=document.getElementById('dBtnStrip');
  strip.innerHTML='';
  const panels=document.getElementById('dPanels');
  panels.innerHTML='';
  const allTabs=[...f.options,'Pricing'];
  allTabs.forEach((tab,ti)=>{
    const btn=document.createElement('button');
    const isP=tab==='Pricing';
    btn.className='det-pill'+(isP?' pricing-pill':'')+(ti===0?' active':'');
    if(ti===0&&!isP)btn.style.background=p.hex;
    btn.textContent=isP?'💰 Pricing':tab;
    btn.onclick=()=>switchTab(ti,p.hex);
    strip.appendChild(btn);
    const panel=document.createElement('div');
    panel.className='tab-panel'+(ti===0?' active':'');
    panel.setAttribute('data-panel',ti);
    if(isP){
      const hasReal=f.costRows.some(r=>r[0]!=='—');
      const t2Rows=f.costRows.filter(r=>r[1]==='Tier 2');
      const t1Rows=f.costRows.filter(r=>r[1]==='Tier 1');
      const mkTable=(rows,tier,label)=>{
        if(!rows.length)return'';
        const isTier2=tier==='Tier 2';
        const accentBg=isTier2?'rgba(63,153,168,.10)':'rgba(21,84,147,.10)';
        const accentBdr=isTier2?'rgba(63,153,168,.35)':'rgba(21,84,147,.35)';
        const accentTxt=isTier2?'#1E5F6A':'#0D2D52';
        return `<div style="flex:1;min-width:280px;background:#fff;border-radius:14px;border:1.5px solid ${accentBdr};overflow:hidden;box-shadow:0 2px 10px rgba(21,84,147,.07)">
          <div style="padding:14px 18px;background:${accentBg};border-bottom:1.5px solid ${accentBdr};display:flex;align-items:center;gap:10px">
            <span class="tier-badge ${isTier2?'tier-2':'tier-1'}" style="font-size:11px;padding:4px 12px">${tier}</span>
            <span style="font-size:12px;color:${accentTxt};font-weight:700">${label}</span>
          </div>
          <table class="pricing-tbl">
            <thead><tr><th>PAX range</th><th>Setup</th><th>Cost / pax</th></tr></thead>
            <tbody>${rows.map(r=>`<tr>
              <td style="font-weight:600;color:var(--txt-mid)">${r[0]}</td>
              <td style="color:var(--txt-mid)">${r[2]}</td>
              <td><span class="price-badge" style="background:${p.bg};color:${p.txt};border:1px solid ${p.bdr}">${r[3]}</span></td>
            </tr>`).join('')}</tbody>
          </table>
        </div>`;
      };
      panel.innerHTML=`<div style="display:flex;flex-direction:column;gap:0">${hasReal?`<div style="display:flex;gap:16px;flex-wrap:wrap;padding:24px 28px 20px">${mkTable(t2Rows,'Tier 2','Standard vendor')}${mkTable(t1Rows,'Tier 1','Premium vendor')}</div><div class="pricing-note">(+ ₹X add-on) = additional cost per person on top of base rate. Subject to final confirmation.</div>`:`<div style="background:#fff;border-radius:14px;border:1px solid var(--border);padding:32px 28px;text-align:center;box-shadow:var(--shadow-sm)"><div style="font-size:32px;margin-bottom:12px">📩</div><div style="font-family:'Poppins',sans-serif;font-size:18px;color:var(--txt);margin-bottom:6px">Pricing on Request</div><div style="font-size:13px;color:var(--txt-light);font-weight:500">Please contact the SmartQ team for a custom quote.</div></div>`}</div>`;
    } else {
      const rows=f.menu[tab]||[];
      panel.innerHTML=`<div class="menu-card"><div class="menu-card-head"><div class="menu-card-icon" style="background:${p.bg};border:1px solid ${p.bdr}">🍽</div><div><div class="menu-card-label">${tab}</div><div class="menu-card-sub">${f.name} · ${f.theme}</div></div></div><div>${rows.map(r=>`<div class="menu-row"><div class="menu-course">${r[0]}</div><div class="menu-items">${r[1]}</div></div>`).join('')}</div></div>`;
    }
    panels.appendChild(panel);
  });
  document.getElementById('view-cal').style.display='none';
  document.getElementById('view-detail').style.display='block';
  window.scrollTo({top:0,behavior:'instant'});
}

function switchTab(idx,accentColor){
  document.querySelectorAll('.det-pill').forEach((b,i)=>{
    b.classList.toggle('active',i===idx);
    if(i===idx&&!b.classList.contains('pricing-pill'))b.style.background=accentColor;
    else if(!b.classList.contains('pricing-pill'))b.style.background='';
  });
  document.querySelectorAll('.tab-panel').forEach((p,i)=>p.classList.toggle('active',i===idx));
}

function goBack(){
  document.getElementById('view-detail').style.display='none';
  document.getElementById('view-cal').style.display='block';
  window.scrollTo({top:0,behavior:'instant'});
}

document.addEventListener('click',function(e){
  if(e.target.closest('#backBtn')){goBack();return;}
  const chip=e.target.closest('.fest-chip');
  if(chip){openDetail(chip.dataset.month,parseInt(chip.dataset.fi));}
});

function showSection(name){
  document.querySelectorAll('.sq-section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.sq-nav-item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('.sq-landing').forEach(l=>l.classList.remove('lp-active'));
  document.getElementById('view-cal').style.display='block';
  document.getElementById('view-detail').style.display='none';
  document.getElementById('section-'+name).classList.add('active');
  const idx={festive:0,snack:1,lunch:2,brands:3}[name];
  document.querySelectorAll('.sq-nav-item')[idx].classList.add('active');
  window.scrollTo(0,0);
}
/* switchSbTab defined below */
function openLanding(pid){
  document.querySelectorAll('.sq-section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.sq-nav-item').forEach(n=>n.classList.remove('active'));
  document.querySelectorAll('.sq-landing').forEach(l=>l.classList.remove('lp-active'));
  document.getElementById('lp-'+pid).classList.add('lp-active');
  window.scrollTo(0,0);
}
function lpBack(section){
  document.querySelectorAll('.sq-landing').forEach(l=>l.classList.remove('lp-active'));
  showSection(section);
}
function lpCat(pill,vid,cat){
  const lp=pill.closest('.sq-landing');
  lp.querySelectorAll('.lp-cat-pill').forEach(p=>p.classList.remove('lp-cat-active'));
  lp.querySelectorAll('.lp-cat-panel').forEach(p=>p.classList.remove('lp-cat-panel-active'));
  pill.classList.add('lp-cat-active');
  document.getElementById('lpc-'+vid+'-'+cat).classList.add('lp-cat-panel-active');
}
/* ── SNACK BOX OPTIONS DATA ── */
const BOX_OPTS = [
  {n:'Option 1',p:'₹200',items:[['Savoury','Cheese Korean Bun'],['Dessert','Choco Marble Cake / Banana Cake (any one)'],['Savoury','Paneer Spring Roll'],['Savoury','Mini Aloo Samosa'],['Add-on','Chips'],['Dessert','Baked Fruit Yogurt Matka (chilled, no preservatives)']]},
  {n:'Option 2',p:'₹200',items:[['Savoury','Baked Vada Pav'],['Dessert','Gulab Jamoon / Jelebi (any one)'],['Savoury','Cheese Roll'],['Savoury','Corn n Veg Mini Samosa'],['Snack','Bhakharwadi'],['Drink','Tropicana']]},
  {n:'Option 3',p:'₹200',items:[['Savoury','Channa Masala Puff'],['Dessert','Walnut Brownie / Banana Walnut Cake (any one)'],['Savoury','Sabudana Vada'],['Savoury','Dhokla'],['Dessert','Jelebi'],['Snack','Namkeen'],['Drink','Maaza']]},
  {n:'Option 4',p:'₹200',items:[['Sandwich','Veg Club Sandwich'],['Cake','Carrot & Raisin Cake'],['Savoury','Corn Gujia'],['Savoury','Mini Pyaz Kachori'],['Snack','Namkeen'],['Drink','Tropicana']]},
  {n:'Option 5',p:'₹200',items:[['Savoury','Veg Burger'],['Muffin','Walnut Muffin'],['Savoury','Mini Paneer Puff'],['Savoury','Mini Aloo Samosa'],['Dessert','Baked Fruit Yogurt Matka (chilled)']]},
  {n:'Option 6',p:'₹200',items:[['Savoury','Dabeli'],['Dessert','Jelebi / Authentic Honey Cake (any one)'],['Savoury','Cheese Roll'],['Savoury','Paneer Tikka Samosa'],['Snack','Nachos'],['Drink','Maaza']]},
  {n:'Option 7',p:'₹210',items:[['Sandwich','Veg Sandwich / Corn & Spinach Mayo Sandwich (any one)'],['Savoury','Punjabi Samosa'],['Savoury','Paneer Spring Roll'],['Dessert','Truffle Choco Brownie'],['Snack','Baked Nippat (2 pcs)'],['Drink','Frooti / Maaza (any one)']]},
  {n:'Option 8',p:'₹195',items:[['Savoury','BBQ Croissant (Paneer Filling)'],['Savoury','Veg & Cheese Roll'],['Cake','Banana Walnut Cake'],['Savoury','Sabudana Vada'],['Snack','Namkeen'],['Drink','Tropicana / Paper Boat Juice']]},
  {n:'Option 9',p:'₹195',items:[['Sandwich','Brown Bread Veg Club Sandwich'],['Dessert','Blueberry Doughnut / Black Forest Pastry mini (any one)'],['Savoury','Cocktail Samosa'],['Savoury','Cheese Roll'],['Snack','Haldiram Namkeen'],['Drink','Tropicana']]},
  {n:'Option 10',p:'₹185',items:[['Savoury','Mini Tikki Burger'],['Savoury','Veg Spring Roll'],['Dessert','Chocolate Doughnut'],['Savoury','Punjabi Samosa'],['Snack','Namkeen'],['Drink','Frooti / Appy']]},
  {n:'Option 11',p:'₹185',items:[['Dessert','Mini Pastry (Pineapple / Blueberry / Strawberry)'],['Savoury','Bengali Aloo Samosa'],['Savoury','Paneer Spring Roll'],['Snack','Chips'],['Drink','Tropicana']]},
  {n:'Option 12',p:'₹185',items:[['Sandwich','Corn & Spinach Mayo Sandwich'],['Savoury','Veg Puff'],['Cake','Marble Cake'],['Savoury','Cheese Roll'],['Drink','Tetrapack']]},
  {n:'Option 13',p:'₹185',items:[['Sandwich','Herb Coleslaw Sub'],['Dessert','Mini Chocolate Doughnut'],['Savoury','Cheese Corn Samosa (1 pc)'],['Savoury','Paneer Spring Roll'],['Drink','Tetrapack Juice']]},
  {n:'Option 14',p:'₹185',items:[['Dessert','Chocolate Doughnut'],['Savoury','Cheese Roll'],['Savoury','Cocktail Samosa'],['Snack','Kotambari Vadi'],['Savoury','Steam Dhokla'],['Dessert','Kala Jamoon']]},
  {n:'Option 15',p:'₹165',items:[['Savoury','Mumbai Vada Pav'],['Savoury','Dhokla'],['Dessert','Jelebi / Gulab Jamoon'],['Snack','Bhakharwadi'],['Drink','Maaza']]},
  {n:'Option 16',p:'₹195',items:[['Sandwich','Coleslaw Sub'],['Savoury','Noodles Puff'],['Savoury','Cheese Roll'],['Dessert','Cake Pop'],['Snack','Chips / Namkeen (any one)'],['Drink','Tropicana Juice']]},
  {n:'Option 17',p:'₹200',items:[['Sandwich','Chutney & Cheese Sandwich'],['Cake','Marble Cake / Mawa Cake (any one)'],['Savoury','Pyaz Kachori mini'],['Savoury','Mini Cheese Corn Samosa'],['Snack','Chips'],['Dessert','Baked Shrikhand Matka']]},
  {n:'Option 18',p:'₹235',items:[['Sandwich','Veg Club Sandwich'],['Dessert','Walnut Brownie / Mini Doughnut'],['Savoury','Cocktail Samosa'],['Savoury','Veg & Cheese Roll'],['Dessert','Baked Fruit Yogurt in Matka'],['Drink','Tropicana Juice']]},
  {n:'Option 19',p:'₹235',items:[['Savoury','Veg Crispy Burger'],['Muffin','Blueberry Muffin / Chocochip Muffin (any one)'],['Savoury','Paneer Tikka Samosa'],['Savoury','Veg Spring Roll'],['Snack','Bhakharwadi'],['Drink','Tropicana Juice']]},
  {n:'Option 20',p:'₹260',items:[['Sandwich','Corn & Spinach Mayo Sandwich'],['Dessert','Blueberry Doughnut'],['Savoury','Cheese Roll'],['Savoury','Paneer Tikka Samosa'],['Snack','Nachos & Salsa Sauce'],['Dessert','Baked Fruit Yogurt']]},
  {n:'Option 21',p:'₹200',items:[['Savoury','Mumbai Vada Pav'],['Dessert','Jalebi / Motichur Ladoo (any one)'],['Dessert','Chocolate Doughnut / Coconut Cake (any one)'],['Savoury','Cheese Roll'],['Savoury','Paneer Puff'],['Drink','Tropicana Juice']]},
  {n:'Option 22',p:'₹195',items:[['Savoury','BBQ Croissant (Paneer Filling)'],['Dessert','Mini Pastry'],['Savoury','Punjabi Samosa'],['Savoury','Cheese Spring Roll'],['Snack','Namkeen'],['Drink','Maaza']]},
  {n:'Option 23',p:'₹195',items:[['Savoury','Paneer Tortilla Wrap'],['Dessert','Kala Jamoon'],['Savoury','Punjabi Samosa'],['Salad','3 Bean Salad'],['Snack','Chips'],['Drink','Maaza / Paper Boat']]},
  {n:'Option 24',p:'₹180',items:[['Sandwich','Coleslaw Sandwich'],['Dessert','Walnut Brownie'],['Savoury','Bengali Aloo Samosa'],['Savoury','Mini Kadai Veg Puff'],['Drink','Maaza']]},
  {n:'Option 25',p:'₹200',items:[['Savoury','Cheese Korean Bun'],['Cake','Chocolava Cake'],['Savoury','Bengali Aloo Samosa'],['Savoury','Mini Kachori'],['Dessert','Jelebi / Motichur Ladoo (any one)'],['Drink','Maaza']]},
  {n:'Option 26',p:'₹145',items:[['Savoury','Punjabi Samosa'],['Savoury','Veg Spring Roll'],['Cake','Banana Walnut Cake'],['Snack','Chips'],['Drink','Maaza']]},
  {n:'Option 27',p:'₹145',items:[['Sandwich','Corn n Spinach Sandwich'],['Muffin','Chocochip Muffin'],['Savoury','Mini Aloo Samosa'],['Snack','Namkeen'],['Drink','Appy']]},
  {n:'Option 28',p:'₹145',items:[['Savoury','Veg Burger'],['Cake','Pineapple Tea Cake'],['Savoury','Paneer Spring Roll'],['Drink','Maaza']]},
  {n:'Option 29',p:'₹145',items:[['Savoury','Kadai Veg Puff'],['Dessert','Walnut Brownie'],['Savoury','Paneer Tikka Samosa'],['Snack','Namkeen'],['Drink','Maaza']]},
  {n:'Option 30',p:'₹130',items:[['Savoury','Mumbai Vada Pav'],['Dessert','Gulab Jamoon'],['Savoury','Cheese Spring Roll'],['Snack','Namkeen'],['Drink','Maaza']]},
];

function buildBoxReg(){
  const grid = document.getElementById('boxRegGrid');
  if(!grid) return;
  let html='';
  BOX_OPTS.forEach(o=>{
    html+=`<div class="local-card"><div class="local-card-hdr"><span class="local-card-title">${o.n}</span><span class="snack-price-badge">${o.p} + GST</span></div><div class="local-card-body"><table class="menu-item-tbl"><thead><tr><th>Category</th><th>Item</th></tr></thead><tbody>`;
    o.items.forEach(it=>{ html+=`<tr><td>${it[0]}</td><td>${it[1]}</td></tr>`; });
    html+='</tbody></table></div></div>';
  });
  grid.innerHTML=html;
}
buildBoxReg();

/* ── SETUP MODAL DATA ── */
const SETUP_DATA = {
  normal: {
    title: 'Standard Buffet Setup',
    pax: [['Buffet Normal','0–100 pax (1 Setup)','₹200 + GST'],['Buffet Normal','100–300 pax (1 Setup)','₹100 + GST'],['Buffet Normal','300–500 pax (2 Setup)','₹75 + GST'],['Buffet Premium','0–100 pax (1 Setup)','₹350 + GST'],['Buffet Premium','100–300 pax (1 Setup)','₹175 + GST'],['Buffet Premium','300–500 pax (2 Setup)','₹150 + GST']],
    items: [['Tables with Frills','₹250','8','₹2,000'],['Melamine Plate / Biodegradable','₹15','100','₹1,500'],['PP Spoons / Wooden Spoon','₹4','100','₹400'],['PP Fork / Wooden Spoon','₹4','100','₹400'],['Chaffing Dishes','₹450','8','₹3,600'],['Laddles','₹15','12','₹180'],['Menu Tags','₹6','20','₹120'],['Props','₹60','5','₹300'],['Platters','₹80','2','₹160'],['Bowls','₹40','2','₹80'],['Fuel Tins','₹30','20','₹600'],['Manpower','₹1,500','4','₹6,000'],['Transportation','₹2,000','1','₹2,000']],
    total:'₹17,340',
    perPax:[['0–100 (1 Setup)','₹173.40'],['100–300 (1 Setup)','₹86.70'],['300–500 (2 Setup)','₹69.36']]
  },
  premium: {
    title: 'Premium Buffet Setup',
    pax: [],
    items: [['Tables with Frills','₹350','8','₹2,800'],['Melamine Plate / Biodegradable','₹15','100','₹1,500'],['Premium Spoons / Wooden Spoon','₹6','100','₹600'],['Premium Fork / Wooden Spoon','₹6','100','₹600'],['Premium Chaffing Dishes','₹600','8','₹4,800'],['Water Bottles','₹20','100','₹2,000'],['Spoon Rest','₹8','8','₹64'],['Laddles','₹20','12','₹240'],['Menu Tags','₹6','20','₹120'],['Props','₹60','10','₹600'],['Platters','₹80','4','₹320'],['Bowls','₹40','4','₹160'],['Quarter Plate','₹12','100','₹1,200'],['Dessert Plate','₹8','100','₹800'],['Dessert Spoon','₹4','100','₹400'],['Juice Glass','₹6','100','₹600'],['Fuel Tins','₹30','20','₹600'],['Manpower','₹1,500','6','₹9,000'],['Hi Risers','₹70','8','₹560'],['Menu Tag Holders','₹5','20','₹100'],['Transportation','₹2,000','1','₹2,000']],
    total:'₹29,064',
    perPax:[['0–100 (1 Setup)','₹290.64'],['100–300 (1 Setup)','₹145.32'],['300–500 (2 Setup)','₹116.26']]
  }
};

function openSetup(type){
  const d = SETUP_DATA[type];
  document.getElementById('modalTitle').textContent = d.title;
  let body = '';
  // Per pax summary
  body += `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px">`;
  d.perPax.forEach(r=>{ body+=`<div style="flex:1;min-width:120px;background:#EBF0F9;border-radius:10px;padding:12px 14px;text-align:center"><div style="font-size:10px;font-weight:800;color:#5A677E;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">${r[0]}</div><div style="font-family:'Poppins',sans-serif;font-size:18px;color:#155493;font-weight:600">${r[1]}</div><div style="font-size:9px;color:#98A4B8;font-weight:600;margin-top:2px">per person (setup only)</div></div>`; });
  body += `</div>`;
  // Detailed items
  body += `<div style="font-size:10px;font-weight:800;color:#5A677E;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:10px">Equipment Breakdown</div>`;
  body += `<table style="width:100%;border-collapse:collapse;font-size:12px"><thead><tr style="background:#F0F4FB"><th style="text-align:left;padding:8px 10px;font-size:9px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#98A4B8;border-bottom:1.5px solid #E4E8EE">Item</th><th style="text-align:right;padding:8px 10px;font-size:9px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#98A4B8;border-bottom:1.5px solid #E4E8EE">Rate</th><th style="text-align:right;padding:8px 10px;font-size:9px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#98A4B8;border-bottom:1.5px solid #E4E8EE">Qty</th><th style="text-align:right;padding:8px 10px;font-size:9px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#98A4B8;border-bottom:1.5px solid #E4E8EE">Amount</th></tr></thead><tbody>`;
  d.items.forEach((r,i)=>{ body+=`<tr style="${i%2===1?'background:#F7F8FA':''}"><td style="padding:7px 10px;color:#1C2333;border-bottom:1px solid #F0F2F6">${r[0]}</td><td style="text-align:right;padding:7px 10px;color:#5A677E;border-bottom:1px solid #F0F2F6">${r[1]}</td><td style="text-align:right;padding:7px 10px;color:#5A677E;border-bottom:1px solid #F0F2F6">${r[2]}</td><td style="text-align:right;padding:7px 10px;font-weight:700;color:#155493;border-bottom:1px solid #F0F2F6">${r[3]}</td></tr>`; });
  body += `</tbody><tfoot><tr style="background:#1C2E50"><td colspan="3" style="padding:10px;color:#FCC529;font-weight:800;font-size:13px;font-family:'Poppins',sans-serif">Total Setup Cost</td><td style="text-align:right;padding:10px;color:#FCC529;font-weight:800;font-size:15px">${d.total}</td></tr></tfoot></table>`;
  document.getElementById('modalBody').innerHTML = body;
  document.getElementById('setupModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}
function closeSetup(){
  document.getElementById('setupModal').style.display = 'none';
  document.body.style.overflow = '';
}
document.getElementById('setupModal').addEventListener('click', function(e){
  if(e.target === this) closeSetup();
});

/* ── OVERRIDE switchSbTab for new tier names ── */
function switchSbTab(name){
  document.querySelectorAll('.sb-tab').forEach((t,i)=>t.classList.toggle('active',['tier1','tier2'][i]===name));
  document.querySelectorAll('.sb-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('sb-'+name).classList.add('active');
}

function cwSubTab(pill, panelId) {
  var bar = pill.closest('.cw-sub-bar');
  var body = bar.nextElementSibling;
  bar.querySelectorAll('.cw-sub-pill').forEach(function(p){ p.classList.remove('cw-sub-active'); });
  body.querySelectorAll('.cw-sub-panel').forEach(function(p){ p.classList.remove('cw-sub-panel-active'); });
  pill.classList.add('cw-sub-active');
  document.getElementById('lpc-' + panelId).classList.add('cw-sub-panel-active');
}

