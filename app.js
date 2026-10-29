/* درب التميّز - المنطق الكامل: الأسئلة، المراحل، الصوت، الحفظ، لوحة المعلمة. */
/* صور صفحات الامتحان (نصوص القراءة العربية وأسئلة الرسوم البيانية) */
const IMG = {ar2:'images/ar2.jpg',ar3:'images/ar3.jpg',ar8:'images/ar8.jpg',ar9:'images/ar9.jpg',math13:'images/math13.jpg',math17:'images/math17.jpg',math20:'images/math20.jpg',math28:'images/math28.jpg',math30:'images/math30.jpg',math4:'images/math4.jpg',math40:'images/math40.jpg',math9:'images/math9.jpg'};

/* ───────── البيانات: المراحل والأسئلة ───────── */
const STAGES = [
 {id:'s1',name:'قلعة البحرين',kind:'fort',tag:'المهارات الرياضية',blurb:'موقع مدرج في قائمة التراث العالمي، وكان عاصمة حضارة دلمون.'},
 {id:'s2',name:'مسار اللؤلؤ',kind:'boat',tag:'المهارات الرياضية',blurb:'طريق الغوص واللؤلؤ في المحرق، من مواقع التراث العالمي.'},
 {id:'s3',name:'قلعة عراد',kind:'fort',tag:'المهارات الرياضية',blurb:'حصن في المحرق يعود إلى القرن السادس عشر.'},
 {id:'s4',name:'معبد باربار',kind:'temple',tag:'المهارات الرياضية',blurb:'من معابد حضارة دلمون القديمة.'},
 {id:'s5',name:'مسجد الخميس',kind:'mosque',tag:'المهارات الرياضية · رسوم بيانية',blurb:'من أقدم المساجد في الخليج العربي.'},
 {id:'s6',name:'مقابر دلمون في عالي',kind:'mounds',tag:'English · Reading Part 3',blurb:'تلال دفن أثرية من حضارة دلمون.'},
 {id:'s7',name:'بيت القرآن',kind:'house',tag:'English · Reading Part 4',blurb:'متحف في المنامة يحفظ مصاحف ومخطوطات نادرة.'},
 {id:'s8',name:'شجرة الحياة',kind:'tree',tag:'English · Reading Part 5',blurb:'شجرة معمّرة تقف وحدها في صحراء البحرين.'},
 {id:'s9',name:'قلعة الرفاع',kind:'fort',tag:'اللغة العربية · القراءة (1)',blurb:'حصن تاريخي يطل على وادي حنينية.'},
 {id:'s10',name:'بوابة البحرين',kind:'gate',tag:'اللغة العربية · القراءة (2)',blurb:'مدخل سوق المنامة القديم.'}
];
const PLACES = ['متحف البحرين الوطني','بيت الشيخ عيسى بن علي','حصن أبو ماهر','بيت سيادي','بيت الجسرة','سوق المنامة القديم'];

const Q = (id,stage,sub,q,o,a,x)=>Object.assign({id,stage,sub,q,o,a,lang:sub==='en'?'en':'ar'},x||{});
const P3 = `Summer Courses

A
My course gave me something productive to do in the holidays, although it was disappointing not to do it online. I struggled to keep up with other students despite their efforts to be cooperative. My grades were lower than my expectations. Even though I worked hard and received constant professional support from tutors. I believe I would have done better working on my laptop!

B
After my dream trip to Turkey was cancelled, the only thing that encouraged me was my instructor and the thought of the certificate. I was lucky that all I had to do was a project. Fortunately, my parents rewarded me with a new laptop on completing the course. Some of my colleagues are trying to persuade me to do the next course, but I'm not sure.

C
My course didn't give me exactly what I expected. Occasionally, a teacher tried to help me academically. It was no use. Almost all of the time I worked alone on my laptop. This certainly increased my marks enough to succeed which is all I wanted. Thanks to helpful former students, the exam questions were familiar. I was glad when the course was over.

D
I wouldn't have done this course because I don't like studying in the holidays and prefer to play sports. However, my classmates were very enthusiastic and inspired me to do well in the final test. Although I am not hard-working, I somehow achieved a good result that was beyond my dreams. Now I can't wait to start the next course.`;
const P4 = `<h4>What Makes an Effective CV?</h4>CV writing is not an exact science, and opinion varies as to what works and what doesn't. However, some basic principles of the art of CV writing are true no matter what. (0) <span class="gap">It must be a sales brochure rather than the story of your life.</span> Really, you're trying to get an employer interested. Remember you are in competition with 1000's of others. Beating them is your aim.

First impressions are important. <b class="gap" data-g="21">(21) ________</b> Employers and job agencies prefer an attractive and easy to read CV. If you're unsure of how to design a CV, check examples online to get some useful ideas. Another point to note is to get as much information about the job as possible. The CV should be 100% relevant to the job's requirements. Including everything the job asks for increases your chances.

The person reading your CV is likely to be busy, so keep your CV short. However, leave yourself enough room to demonstrate your potential. <b class="gap" data-g="22">(22) ________</b> On the other hand, not giving enough details regarding experience, skills and achievements won't give you the result you're after either.

A good CV tells a story. <b class="gap" data-g="23">(23) ________</b> You need to grab the employer at the start of your CV with your achievements and how you've developed. Always remember that somebody is reading about your journey. The main section should back up your skills and demonstrate how you've progressed.

Information such as education, hobbies and interests are important, although employers give far more attention to work history at this stage. <b class="gap" data-g="24">(24) ________</b> Will your CV raise their interest, and will it win you an interview?

It's also important to get someone else to read your CV thoroughly to check for any errors. Make sure that you punctuate the text correctly, using commas and full stops where appropriate. <b class="gap" data-g="25">(25) ________</b> The purpose of your CV is 'to raise interest and get you to the interview stage'. Fill it with positive information, but don't confuse the reader with too much detail.`;
const P4O = ['It needs a beginning, a middle and an end.','However, this could make a big difference to the reader.','But most importantly, never forget why you are doing this.','Too many pages of information will put the employer off!',"Make sure that your CV layout is good, so it isn't rejected straight away!","If something doesn't relate to the job you are applying for, then leave it out."];
const P5 = `The Life of Foxes

Foxes and wolves both belong to the dog family although they have different characteristics. Unlike wolves, foxes do not travel in groups, called packs. Many people believe they live alone because they move about, hunt and feed independently. However, they occasionally meet other foxes and play together for a while before moving on.

Weighing from five to ten kilograms, foxes are generally smaller than most dogs. They have light bodies, long, thin legs and pointed noses. It is their tails that distinguish them from other foxes. Foxes reach speeds of up to 48 kilometres per hour, which helps them catch their food and escape from danger. Although their eyes are adaptable and switch to night vision when hunting in the dark, they also need their strong sense of smell to locate their victims. Depending on the season, the length and thickness of a fox's fur varies.

Foxes are found on every continent apart from Antarctica. Their natural environment varies from forests, grasslands and mountains to deserts. Nowadays they are seen in human environments such as farms, the suburbs of towns and cities, and even large urban areas. Foxes dig their homes, called dens, where they rest and breed. There are several exits, so foxes can run away in an emergency. Their adaptability has earned them a reputation for being remarkably clever. Their flexible diet, enabling them to survive on whatever food is available, means they can live almost anywhere.

A fox hunts alone and marks out its large hunting territory which can be anywhere from 4 to 8 square kilometers. This is to satisfy the feeding needs of the fox and his family. While continuously searching its territory for food, a fox must fight other foxes entering its land. When hunters enter a fox's territory, it escapes through lots of tunnels it has made under the ground. These tunnels are also used to save spare meals.

Female foxes have between four and six babies a year. When raising their young, foxes live with their families underground. It takes seven months before young foxes leave home to hunt and sleep alone. Baby foxes are born blind and deaf, without teeth and unable to walk. They remain that way for approximately nine days. During that time, they stay with their mother while the father fox brings them food. After one month, the babies start emerging from their homes. When they begin to grow older, the mother brings live animals to teach the young foxes to hunt. Eventually, the babies learn survival skills by watching their parents.

So why do people in Britain hunt foxes? This custom started in the 16th century when farmers used dogs to catch foxes as a practical way to protect their animals. By the 17th century, foxhunting had replaced deer hunting as the fashionable hobby for rich people. It became more accessible throughout the 19th century when trains allowed more people to visit the countryside. Some European countries banned the sport because people believed it to be cruel. However, in Britain foxhunting remained popular into the 20th century.`;
const SU = ['Student A','Student B','Student C','Student D'];
const A1 = {imgs:['ar2','ar3'],ptitle:'نص «التثقيف الذاتي» — سلامة موسى'};
const A2 = {imgs:['ar8','ar9'],ptitle:'نص «الصبي القادم من القرية» — ميخائيل نعيمة'};
const ENP3 = {passage:P3,ptitle:'Summer Courses'};
const ENP5 = {passage:P5,ptitle:'The Life of Foxes'};
const IMGQ = (id,page,a,n)=>({id,stage:'s5',sub:'m',lang:'ar',q:'السؤال '+n+' من امتحان المهارات الرياضية. اقرأه من الصورة (اضغطي عليها للتكبير) ثم اختاري الإجابة.',o:['A','B','C','D'],a,shot:page,letters:true});

const BASE = [
 Q('m1','s1','m','ذهب جاسم مع ابنه مصطفى إلى متجر الألعاب، واشترط عليه ألا يتعدى مجموع سعر ما يشتريه 25 دينارًا.\nأسعار الألعاب (BD): مسدس مائي 3 | مسدس كهربائي 4 | شاحنات 7 | سيارة كهربائية 12 | هاتف 5.5 | مكعبات بناء 10 | حذاء تزلج 8.5 | كتب تلوين 6.5\nأي المجموعات الآتية لن يشتريها جاسم لابنه؟',['مسدس مائي – سيارة كهربائية – مكعبات بناء','سيارة كهربائية – حذاء تزلج – كتب تلوين','مسدس مائي – شاحنات – هاتف – حذاء تزلج','مسدس كهربائي – هاتف – حذاء تزلج – كتب تلوين'],1),
 Q('m2','s1','m','في عام 2017 استحدثت شركة مركبات طرازين جديدين من السيارات. عدد السيارات المباعة (الطراز 1 / الطراز 2):\nالمنطقة 1 — الربع 1: 90 / 108 | الربع 2: 80 / 115 | الربع 3: 110 / 100 | الربع 4: 122 / 94\nالمنطقة 2 — الربع 1: 95 / 120 | الربع 2: 100 / 70 | الربع 3: 123 / 77 | الربع 4: 105 / 99\nفي أي ربع كان مجموع ما باعته الشركة من الطرازين في المنطقتين أكبر ما يمكن؟',['الربع 1','الربع 2','الربع 3','الربع 4'],3),
 Q('m4','s1','m','يقدّم مطعم شاورما خصمًا بمقدار 10% على جميع أصناف الدجاج. الأسعار (BD) للحجم صغير / متوسط / كبير:\nصحن شاورما دجاج: 1.000 / 1.500 / 2.000\nصحن شاورما لحم: 1.500 / 2.100 / 2.600\nصحن شاورما تكة دجاج: 1.200 / 1.800 / 2.300\nصحن شاورما تكة لحم: 1.800 / 2.400 / 3.000\nاشترت ليلى صحن شاورما دجاج صغيرًا، وصحني شاورما تكة لحم متوسطين، وصحن شاورما تكة دجاج متوسطًا. ما المبلغ الذي دفعته؟',['BD 5.080','BD 6.840','BD 7.320','BD 7.600'],2),
 Q('m5','s1','m','تحقق شركة الازدهار نموًا سنويًا في إيراداتها بنسبة 10%. إيراداتها بالمليون دينار: 2018: 500 | 2019: 550 | 2020: 605.\nما القيمة الكلية المتوقعة لإيرادات الشركة في العام 2022 إذا استمرت نسبة النمو بالمعدل نفسه؟',['66.56','127.05','665.50','732.05'],3),
 Q('m6','s1','m','صمّم حسن شفرة رقمية بسيطة: يستبدل كل حرف إنجليزي بعدد من رقمين حسب ترتيبه في الأبجدية (A=01 ، B=02 ، … ، Y=25 ، Z=26).\nما الشفرة الصحيحة لكلمة BAHRAIN؟',['02010818010914','218181914','2010818010914','02010814010918'],0),
 Q('m7','s1','m','أراد فيصل شراء تلفاز و4 مكيّفات. الأسعار تتضمن ضريبة القيمة المضافة 10%: التلفاز الواحد 143 BD والمكيّف الواحد 275 BD. يقدّم المحل عرضًا: لا تُحتسب ضريبة القيمة المضافة على المكيّفات فقط عند شراء 3 مكيّفات أو أكثر.\nما المبلغ الإجمالي الذي دفعه فيصل؟',['BD 1130','BD 1143','BD 1230','BD 1243'],1),

 Q('m9','s2','m','أراد نادٍ رياضي شراء 5 بدلات من نوعين مختلفين لأعضائه الذين أكملوا 10 سنوات في عضوية النادي، من محلين مختلفين ولكل نوع عرضه:\nالبدلة 1: السعر 20 BD — العرض: خصم 10 دنانير لكل 50 دينارًا\nالبدلة 2: السعر 25 BD — العرض: خصم 25 دينارًا لكل 60 دينارًا\nاشترى النادي البدلات الخمس من النوعين معًا (من كل نوع بدلة واحدة على الأقل). ما أقل سعر دفعه؟',['BD 75','BD 80','BD 90','BD 100'],2),
 Q('m10','s2','m','لدى إبراهيم أربعة أولاد: أنور وأسامة ومعين وعلاء، أعمارهم 28 و47 و50 و55 دون ترتيب. ملاحظاته:\n• أنور أصغر عمرًا من أسامة.\n• أسامة أصغر عمرًا من معين.\n• معين ليس أكبرهم عمرًا.\nما عمر علاء؟',['28','47','50','55'],3),
 Q('m11','s2','m','تبيع محمصة نوعين من القهوة في أكياس: الأول بسعر 6 BD للكيس والثاني بسعر 4 BD للكيس. بلغ إيرادها في أحد الأيام 46 BD من بيع كيسين على الأقل من كل نوع.\nما أكبر عدد من الأكياس باعته المحمصة من النوعين؟',['8','9','10','11'],2),
 Q('m13','s2','m','تخطط عائلة للذهاب إلى سوق المباركية في الكويت، وتحتاج إلى قطع مسافة 450 كم كحد أدنى أو 500 كم كحد أقصى. تستهلك سيارتها من 12 إلى 15 لترًا لكل 100 كم، وسعر اللتر الواحد يتراوح بين 0.150 BD و0.200 BD.\nما أقل تكلفة ستدفعها العائلة نظير استهلاك الوقود؟',['BD 8.100','BD 10.125','BD 11.220','BD 15.000'],0),
 Q('m14','s2','m','طلب محمد من صديقه إنشاء رقم سري من 4 أرقام مختلفة، بحيث يكون مجموع الرقمين الأول والثاني 6، وحاصل ضرب الرقمين الثالث والرابع 6 أيضًا.\nكم رقمًا سريًا وفّر الصديق لمحمد ليختار منها؟',['3','6','12','28'],2),
 Q('m15','s2','m','يريد موسى صناعة 12 كرسيًا من الخشب خلال 6 ساعات عمل في ورشته. يحتاج 3 عمال لصناعة كرسيين خلال 3 ساعات، ولديه في الورشة 20 عاملًا على الأقل مدرَّبين للعمل بالسرعة نفسها.\nكم عاملًا يحتاج موسى لصناعة 12 كرسيًا خلال 6 ساعات؟',['6','9','12','18'],1),

 Q('m18','s3','m','يعدّ حامد نوعين من الوجبات: الأول يستغرق إعداده نصف ساعة ويبيعه بسعر 6 BD، والثاني يستغرق ربع ساعة ويبيعه بسعر 4 BD. عمل حامد خمس ساعات متواصلة لإعداد وجبات من النوعين وباعها جميعها بسعر 66 BD.\nما عدد الوجبات التي باعها من النوع الأول؟',['1','6','7','13'],2),
 Q('m20','s3','m','لدى حسن مجموعة من الكرات الملونة بثلاثة ألوان (أصفر، أحمر، أزرق) كلها في كيس واحد. يعلم حسن أن 8 كرات ليست صفراء، و12 كرة ليست حمراء، و10 كرات ليست زرقاء.\nما عدد الكرات الزرقاء لديه؟',['5','10','15','20'],0),
 Q('m22','s3','m','في اليوم الرياضي البحريني وُزّعت على الطلبة بطاقات مرقمة من 100 إلى 300 للسحب على جائزة. البطاقات حمراء ما عدا البطاقات التي يحتوي رقمها على الرقمين 7 و2 معًا فهي زرقاء (مثال: البطاقة 137 حمراء، أما 127 فزرقاء).\nما عدد البطاقات الزرقاء؟',['21','22','23','24'],0),
 Q('m23','s3','m','يفرح الجد فيصل بزيارة أحفاده وعددهم 21: عشرة أحفاد لم يتجاوزوا 5 سنوات، وثلاثة أعمارهم 8 سنوات، وخمسة أعمارهم تتجاوز 20 سنة، والبقية تتجاوز 10 سنوات ولم تتجاوز 20. في كل عيد يعطي بعضهم مبلغًا عشوائيًا:\n• لم يتجاوز 5 سنوات: 1 أو 2 BD\n• تجاوز 5 ولم يتجاوز 10: 3 أو 5 BD\n• تجاوز 10 ولم يتجاوز 20: 10 أو 20 BD\n• تجاوز 20 سنة: السلام فقط\nما أقل مبلغ يجب أن يكون معه ليضمن إعطاء أحفاده في جميع الحالات الممكنة؟',['BD 35','BD 49','BD 72','BD 95'],3),
 Q('m25','s3','m','يريد محمود الوصول إلى مبنى شركة لمقابلة عمل الساعة 4:00 مساءً، وخرج من منزله الساعة 3:30 مساءً. خيارات برنامج الملاحة:\nالطريق | المسافة (كم) | متوسط السرعة (كم/س) | الحد الأقصى لزمن التأخر (دقيقة)\nالأول: 27 | 80 | 8\nالثاني: 30 | 100 | 4\nالثالث: 40 | 120 | 7\nالرابع: 25 | 100 | 9\nما الطريق الأسرع الذي يجب أن يسلكه للوصول في أقرب وقت ممكن؟',['الأول','الثاني','الثالث','الرابع'],1),
 Q('m26','s3','m','زينب وثلاث من صديقاتها توظفن في بداية يناير 2006، كل واحدة في شركة مختلفة:\n• الأولى: راتب أساسي 935 BD وزيادة سنوية 2.25% تضاف من بدء يناير كل عام.\n• الثانية: 940 BD وزيادة 3% تضاف من سبتمبر كل عام بشرط مرور سنة من بدء العمل.\n• الثالثة: 963 BD وزيادة 1.25% تضاف في الشهر الذي بدأت فيه العمل كل عام بعد مرور سنة.\n• الرابعة: 1000 BD دون زيادة سنوية.\nفي مارس 2009 تسلمت زينب راتبًا شهريًا أكبر من رواتب صديقاتها الثلاث. في أي الشركات تعمل زينب؟',['الشركة الأولى','الشركة الثانية','الشركة الثالثة','الشركة الرابعة'],3),

 Q('m30','s4','m','كوّن خالد رمز دخول لحسابه على موقع تعليمي من أربعة أحرف وأربعة أرقام مختلفة. الأحرف هي الأحرف الأربعة الأولى من اسمه الرباعي بالترتيب، أما الأرقام فتكوّن عددًا فرديًا يقبل القسمة على 7 ومجموع أرقامه 30.\nكم خيارًا لدى خالد لكتابة أرقام الرمز؟',['1','2','3','12'],0),
 Q('m31','s4','m','حجز عدنان غرفة من النوع X لثلاث ليالٍ. عند وصوله لاحظ تخفيضًا بنسبة 30% على غرف النوع Z إذا زادت مدة الإيجار على أربع ليالٍ، فقرر تغيير الحجز إلى النوع Z لخمس ليالٍ.\nأسعار الغرف (BD) لعدد الليالي 1 | 2 | 3 | 4 | 5 | 6 | 7:\nX: 25 | 40 | 55 | 70 | 85 | 100 | 115\nZ: 35 | 67 | 99 | 131 | 161 | 191 | 221\nما المبلغ الإضافي الذي يجب أن يدفعه عدنان بسبب تغيير الحجز؟',['BD 36.700','BD 57.700','BD 74.200','BD 106.000'],1),
 Q('m33','s4','m','أقامت مدرسة ثانوية مسابقة ثقافية من ثلاث مراحل:\n• المرحلة 1 (6 أسئلة): 8 نقاط لكل إجابة صحيحة ولا خسارة للخاطئة.\n• المرحلة 2 (4 أسئلة): 12 نقطة لكل صحيحة، ويخسر الفريق 4 نقاط عن كل خاطئة.\n• المرحلة 3 (سؤالان): لكل إجابة صحيحة يحصل الفريق على ضعف مجموع نقاطه، ويخسر نصف مجموع نقاطه عن كل إجابة خاطئة.\nلا يجوز ترك أي سؤال دون إجابة. أجاب فريق مدرسة الولاء إجابات صحيحة: 4 في المرحلة الأولى، و3 في الثانية، ولا إجابة صحيحة في الثالثة.\nما النتيجة النهائية للفريق؟',['16','17','32','64'],0),
 Q('m34','s4','m','يملك وائل معرضًا للسيارات. سعر الشراء وسعر البيع حسب المواصفات (BD):\nعالية: شراء 22000 | بيع 24500\nمتوسطة: شراء 17000 | بيع 18600\nأساسية: شراء 15000 | بيع 15900\nحقق في الشهر الماضي ربحًا قدره 10700 BD من بيع 5 سيارات.\nكم سيارة ذات مواصفات متوسطة باع وائل؟',['2','3','4','5'],0),
 Q('m35','s4','m','حصل مهند على جائزة قدرها 50000 BD وأراد شراء ثلاث سيارات لأبنائه الثلاثة. نتائج البحث (BD) حسب المميزات أساسية | متوسطة | عالية:\nX: 13500 | 15500 | 18500\nY: 14000 | 16000 | 23000\nZ: 17000 | 20000 | 24000\nقرر إنفاق المبلغ كاملًا على ثلاث سيارات، واحدة فقط منها من النوع Y، ولن يشتري السيارة نفسها مرتين من حيث النوع والمميزات (يجوز له سيارتان أو ثلاث من النوع نفسه بمميزات مختلفة).\nكم تبلغ تكلفة سيارة النوع Y التي سيشتريها؟',['14000','16000','18500','23000'],1),
 Q('m36','s4','m','تعمل خديجة في طباعة البحوث على الحاسوب. تحتاج من 8 إلى 9 ساعات لكتابة البحث البسيط بسعر 30 BD، ومن 10 إلى 11 ساعة لكتابة البحث المعقد بسعر 45 BD. عملت الأسبوع الماضي 208 ساعات وأعدّت 10 بحوث على الأقل من كل نوع.\nما أكبر مبلغ يمكن أن تحصل عليه خديجة؟',['BD 750','BD 795','BD 840','BD 870'],3),

 IMGQ('mi3','math4',2,3), IMGQ('mi8','math9',0,8), IMGQ('mi12','math13',0,12), IMGQ('mi16','math17',2,16),
 IMGQ('mi19','math20',3,19), IMGQ('mi27','math28',2,27), IMGQ('mi29','math30',1,29), IMGQ('mi39','math40',3,39),

 Q('e15','s6','en','Which student benefited from assistance received from fellow students who had done the course?',SU,2,ENP3),
 Q('e16','s6','en','Which student did much better in the course than what was expected?',SU,3,ENP3),
 Q('e17','s6','en','Which student was given a lot of academic backup by the teaching staff?',SU,0,ENP3),
 Q('e18','s6','en','Which student managed to reach the end of the course by using a laptop?',SU,2,ENP3),
 Q('e19','s6','en','Which student had other plans for the summer before doing the course?',SU,1,ENP3),
 Q('e20','s6','en','Which student was able to succeed in the course without doing a test?',SU,1,ENP3),

 Q('e21','s7','en','Which sentence fits gap (21) in the article?',P4O,4,{passageHtml:P4,ptitle:'What Makes an Effective CV?',gap:21}),
 Q('e22','s7','en','Which sentence fits gap (22) in the article?',P4O,3,{passageHtml:P4,ptitle:'What Makes an Effective CV?',gap:22}),
 Q('e23','s7','en','Which sentence fits gap (23) in the article?',P4O,0,{passageHtml:P4,ptitle:'What Makes an Effective CV?',gap:23}),
 Q('e24','s7','en','Which sentence fits gap (24) in the article?',P4O,5,{passageHtml:P4,ptitle:'What Makes an Effective CV?',gap:24}),
 Q('e25','s7','en','Which sentence fits gap (25) in the article?',P4O,2,{passageHtml:P4,ptitle:'What Makes an Effective CV?',gap:25}),

 Q('e26','s8','en','Which of the following statements is true about foxes?',['Their fur remains the same throughout the year.','Their size is similar to their domestic relatives.','They are fast runners and good hunters.',"They can't see well in the dark."],2,ENP5),
 Q('e27','s8','en','What makes foxes highly adaptable to various environments?',['They feed on a variety of food from different sources.','They dig homes with multiple ways out for quick escape.','They live in both natural and human-made environments.','They are known to be exceptionally intelligent.'],0,ENP5),
 Q('e28','s8','en','Foxes mark their hunting area to',['store food underground.','protect their homes.','hide from their enemies.','establish a broad feeding area.'],3,ENP5),
 Q('e29','s8','en','In the paragraph about baby foxes, what does "that time" refer to in the sentence "During that time, they stay with their mother while the father fox brings them food"?',['The period when the parents teach the young foxes survival skills.','The days when the baby foxes are unable to see, hear or walk.','The time when the baby foxes begin to come out of their homes.','The period when the father fox brings food to the family.'],1,ENP5),
 Q('e30','s8','en','When did fox hunting become a leisure activity in the UK?',['in the 16th century','in the 17th century','in the 19th century','in the 20th century'],1,ENP5),

 Q('a1','s9','ar','في الفقرة الأولى، وردت عبارة (يعسر على المثقّف). ما معنى كلمة (يعسر) في سياقها من العبارة؟',['يجب على','يشقّ على','ينبغي على','يشدّ على'],1,A1),
 Q('a3','s9','ar','في الفقرة الثانية، عبّر الكاتب عن فضل الثقافة بتوظيف:',['الإضراب','التفسير','التوكيد','النفي'],2,A1),
 Q('a5','s9','ar','في الفقرة الثالثة، ما علة نصب (متخصصين) في جملة (يجعلنا نظام التعليم متخصصين)؟',['لأنها تمييز ملحوظ','لأنها حال مفردة','لأنها مفعول به أول','لأنها مفعول به ثانٍ'],3,A1),
 Q('a8','s9','ar','في الفقرة الخامسة، تدرّجت الأساليب وفق النسق الآتي:',['نهي / استدراك / تعليل / توكيد / إضراب','نفي / استدراك / تعليل / توكيد / إضراب','نفي / استدراك / توكيد / تعليل / إضراب','نهي / استدراك / توكيد / تعليل / إضراب'],1,A1),
 Q('a9','s9','ar','في الفقرة السادسة، ما غاية الكاتب من المقابلة بين المعرفة المرشدة والدعاية المضلّلة؟',['إيضاح شروط الوعي بالواقع','تحذير الإنسان من الصراعات','رفض التقدم التكنولوجي','بيان مخاطر الاستغلال'],0,A1),
 Q('a10','s9','ar','حدّد من الآتي الفكرة التي لم ترد في الفقرة السادسة:',['الإنسان عرضة لمؤثرات العصر الحديث','حاجة الإنسان إلى التسلح بالوعي والثقافة','إمكانية الدمج بين المدارس والجامعات','التثقيف الذاتي من عوامل الحياة الناجحة'],2,A1),
 Q('a12','s9','ar','في الفقرة الأخيرة وردت العبارة: (أساس ذلك كله الفهم الذي هو أعظم أنواع السعادة). ما القيمة المستفادة منها؟',['المعرفة تجرّد من الأنا','المعرفة لبّ الحضارات','المعرفة شغف بالحقيقة','المعرفة أمّ الفضائل'],3,A1),
 Q('a13','s9','ar','في الفقرة الأخيرة، جمع الكاتب بين الطلب والتعليل. ما غرضه من ذلك؟',['التنفير من التغيير المحدود','الترغيب في تثقيف الذات','الترغيب في ثقافة الجامعة','التنفير من الدراسة المستمرة'],1,A1),

 Q('a15','s10','ar','في الفقرة الأولى، عاش الراوي مجموعة من الأحوال والمشاعر عدا:',['الدهشة','الحلم','الثقة','التردد'],3,A2),
 Q('a16','s10','ar','من الفقرة الأولى، سلسلة الضمائر المتصلة الواردة في محل نصب:',['صورته / ليته / مقلتيه','ليته / أراه / تحدجه','لي / حقيبته / وجهه','خلفه / أنا / يده'],1,A2),
 Q('a18','s10','ar','في الفقرة الثالثة، لِمَ استعمل الراوي أسلوب المقارنة في الحديث عن زملائه؟',['لبيان أسباب القوة عند رفاقه وأسباب الضعف عنده','لبيان أسباب القوة عنده وأسباب الضعف عند رفاقه','لبيان الفرق التحصيلي عند أبناء القرية وأبناء المدينة','لبيان الفرق التحصيلي عنده باللغتين العربية والروسية'],0,A2),
 Q('a19','s10','ar','في الفقرة الرابعة، يدلّ الحوار الباطني على:',['اعتداد الراوي بنفسه ونفي التفوق عن غيره','سعادة الراوي بمواجهة المواقف الصعبة','استخفاف الراوي بظروف البيئة الجديدة','ثقة الراوي بقدرته على تجاوز كل صعوبة'],3,A2),
 Q('a20','s10','ar','في الفقرتين الثالثة والرابعة، ما المؤشر الدال على رهبة الراوي من اللغة الروسية وحبه اللغة العربية؟',['الصفات المشبهة في وصف معلم اللغة الروسية، واسم الفاعل في وصف معلم اللغة العربية','الوصف الموجز لهيئة معلم اللغة الروسية، والوصف المفصّل لهيئة معلم اللغة العربية','الحوار المنقول في تفاصيل حصة اللغة العربية، والحوار الباطني في حصة الروسية','السرد المجمل لتفاصيل حصة اللغة العربية، والسرد المفصّل لتفاصيل حصة الروسية'],1,A2),
 Q('a23','s10','ar','ما المعجم المهيمن على الفقرة الأخيرة؟',['الفخر','النجاح','القدرة','المعرفة'],3,A2),
 Q('a25','s10','ar','تعددت الثنائيات في النص. ما الثنائية المحورية التي قام عليها نسيج النص؟',['اللغة العربية واللغة الروسية','الطفولة والشيخوخة','شعور الغربة وشعور الألفة','القرية والمدينة'],2,A2)
];

/* ───────── عبارات التحفيز ───────── */
const OKPH = [
 ['ما شاء الله عليك! إجابة في الصميم.','ما شاء الله عليكِ! إجابة في الصميم.'],
 ['أحسنت يا بطل، كمّل على هالدرب!','أحسنتِ يا بطلة، كمّلي على هالدرب!'],
 ['عقلك يوزن ذهب، وتميّزك يرفع اسم البحرين.','عقلكِ يوزن ذهب، وتميّزكِ يرفع اسم البحرين.'],
 ['جهدك باين، وما يضيع تعب المجتهدين.','جهدكِ باين، وما يضيع تعب المجتهدات.'],
 ['رائع! خطوة جديدة نحو قمة التميّز.','رائعة! خطوة جديدة نحو قمة التميّز.'],
 ['فخورين فيك! نجمة جديدة في سمائك.','فخورين فيكِ! نجمة جديدة في سمائكِ.'],
 ['لؤلؤة من لآلئ الغوص، إجابة صافية!','لؤلؤة من لآلئ الغوص، إجابة صافية!'],
 ['بارك الله في ذكائك، واصل ولا توقف.','بارك الله في ذكائكِ، واصلي ولا تتوقفي.']
];
const BADPH = [
 ['قريب! الإجابة الصحيحة مظلّلة بالأخضر، وكل خطأ يعلّمك شي جديد.','قريبة! الإجابة الصحيحة مظلّلة بالأخضر، وكل خطأ يعلّمكِ شي جديد.'],
 ['لا يهمّك، أبطال الدرب يتعلمون من كل محاولة.','لا يهمّكِ، بطلات الدرب يتعلمن من كل محاولة.'],
 ['ما صارت هالمرة، بس الجاي أحسن إن شاء الله.','ما صارت هالمرة، بس الجاي أحسن إن شاء الله.'],
 ['خذ نفس عميق وكمّل، الدرب لسه طويل وجميل.','خذي نفس عميق وكمّلي، الدرب لسه طويل وجميل.']
];
const DONEPH = [
 ['أتممتَ المرحلة بعزيمة أبناء البحرين!','أتممتِ المرحلة بعزيمة بنات البحرين!'],
 ['وصلت لنهاية المحطة، والتالية تنتظرك.','وصلتِ لنهاية المحطة، والتالية تنتظركِ.']
];

/* ───────── أدوات صغيرة ───────── */
const $ = s=>document.querySelector(s);
const esc = s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const AR_L = ['أ','ب','ج','د','هـ','و'], EN_L = ['A','B','C','D','E','F'];
const SUBJ = {m:'رياضيات',en:'اللغة الإنجليزية',ar:'اللغة العربية',x:'أخرى'};
const pick = a=>a[Math.floor(Math.random()*a.length)];
const gi = ()=> state.profile.gender==='f'?1:0;
const phrase = list=>pick(list)[gi()];
function lsGet(k){try{return JSON.parse(localStorage.getItem(k)||'null')}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function toast(t,ms){const el=$('#toast');el.textContent=t;el.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>{el.hidden=true},ms||3200)}

/* ───────── رسومات: العلم والشخصيات والمعالم ───────── */
function flagSvg(w){
  return `<svg viewBox="0 0 150 90" width="${w||44}" aria-label="علم البحرين" role="img"><rect width="150" height="90" fill="#CE1126"/><path d="M0 0H42L62 9 42 18 62 27 42 36 62 45 42 54 62 63 42 72 62 81 42 90H0Z" fill="#fff"/></svg>`;
}
function charSvg(g){
  const skin='#D9A878', skinD='#C48F5F';
  const flag=`<line x1="116" y1="52" x2="116" y2="236" stroke="#6B4A2B" stroke-width="4" stroke-linecap="round"/><g transform="translate(116 54)"><rect width="54" height="33" fill="#CE1126"/><path d="M0 0H15L22 3.3 15 6.6 22 9.9 15 13.2 22 16.5 15 19.8 22 23.1 15 26.4 22 29.7 15 33H0Z" fill="#fff"/></g><circle cx="116" cy="50" r="4" fill="#C9A227"/>`;
  if(g==='f'){
    return `<svg viewBox="0 0 176 244" aria-hidden="true">${flag}
      <path d="M46 108Q70 98 94 108L112 232H28Z" fill="#B3112B"/><path d="M30 214H110L112 232H28Z" fill="#C9A227"/><path d="M58 108Q70 122 82 108" stroke="#C9A227" stroke-width="4" fill="none"/>
      <path d="M62 110L58 214M78 110L82 214" stroke="#8E0D22" stroke-width="2" opacity=".6"/>
      <line x1="90" y1="114" x2="116" y2="158" stroke="#B3112B" stroke-width="15" stroke-linecap="round"/><circle cx="116" cy="160" r="7.5" fill="${skin}"/>
      <line x1="50" y1="114" x2="40" y2="176" stroke="#B3112B" stroke-width="14" stroke-linecap="round"/><circle cx="40" cy="178" r="7" fill="${skin}"/>
      <path d="M36 80Q36 42 70 42Q104 42 104 80Q106 110 92 120L48 120Q34 110 36 80Z" fill="#F6F0E4" stroke="#CFC4AE" stroke-width="2"/>
      <ellipse cx="70" cy="82" rx="19" ry="23" fill="${skin}"/>
      <circle cx="62" cy="80" r="2.4" fill="#2A2018"/><circle cx="78" cy="80" r="2.4" fill="#2A2018"/>
      <path d="M62 91Q70 98 78 91" stroke="#7A3B2B" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="56" cy="88" r="3.5" fill="#E58B7C" opacity=".5"/><circle cx="84" cy="88" r="3.5" fill="#E58B7C" opacity=".5"/>
      <path d="M52 64Q70 52 88 64" stroke="#F6F0E4" stroke-width="6" fill="none"/></svg>`;
  }
  return `<svg viewBox="0 0 176 244" aria-hidden="true">${flag}
    <path d="M44 106Q68 96 92 106L108 232H28Z" fill="#FBFAF6" stroke="#CFC8B6" stroke-width="2"/><path d="M68 106V150" stroke="#CFC8B6" stroke-width="2"/><circle cx="68" cy="124" r="2" fill="#CFC8B6"/>
    <line x1="88" y1="112" x2="116" y2="158" stroke="#FBFAF6" stroke-width="16" stroke-linecap="round"/><line x1="88" y1="112" x2="116" y2="158" stroke="#CFC8B6" stroke-width="1.5" opacity=".0"/><circle cx="116" cy="160" r="7.5" fill="${skin}"/>
    <line x1="48" y1="112" x2="38" y2="176" stroke="#FBFAF6" stroke-width="15" stroke-linecap="round"/><circle cx="38" cy="178" r="7" fill="${skin}"/>
    <circle cx="68" cy="76" r="23" fill="${skin}"/>
    <path d="M42 78Q42 44 68 44Q94 44 94 78L98 108Q88 96 86 84Q68 70 50 84Q48 96 38 108Z" fill="#FBFAF6" stroke="#CFC8B6" stroke-width="2"/>
    <path d="M46 62Q68 46 90 62" fill="none" stroke="#2B2B2B" stroke-width="5" stroke-linecap="round"/><ellipse cx="68" cy="47" rx="26" ry="5" fill="none" stroke="#2B2B2B" stroke-width="3.5"/>
    <circle cx="60" cy="78" r="2.4" fill="#2A2018"/><circle cx="76" cy="78" r="2.4" fill="#2A2018"/>
    <path d="M60 88Q68 95 76 88" stroke="#7A3B2B" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M56 70L64 68M72 68L80 70" stroke="#3A2A1E" stroke-width="2" stroke-linecap="round"/></svg>`;
}
function artSvg(k){
  const f='fill="currentColor"';
  const m={
   fort:`<path ${f} d="M8 50V26h4v-5h5v5h4v-5h5v5h4v-5h5v5h4v-5h5v5h4v-5h5v5h4v24z"/><path d="M24 50V38a4 4 0 018 0v12z" fill="var(--surface)"/><rect x="12" y="30" width="3" height="6" fill="var(--surface)"/><rect x="41" y="30" width="3" height="6" fill="var(--surface)"/>`,
   boat:`<path ${f} d="M5 40h46l-7 9H13z"/><path d="M28 8v32" stroke="currentColor" stroke-width="2.5"/><path ${f} d="M30 11l17 24H30z"/><path ${f} d="M26 16L14 35h12z" opacity=".7"/>`,
   temple:`<rect ${f} x="6" y="13" width="44" height="6"/><rect ${f} x="9" y="19" width="38" height="3" opacity=".6"/><rect ${f} x="11" y="23" width="5" height="22"/><rect ${f} x="21" y="23" width="5" height="22"/><rect ${f} x="31" y="23" width="5" height="22"/><rect ${f} x="40" y="23" width="5" height="22"/><rect ${f} x="5" y="45" width="46" height="5"/>`,
   mounds:`<path ${f} d="M1 48a14 14 0 0128 0z"/><path ${f} d="M19 48a12 12 0 0124 0z" opacity=".75"/><path ${f} d="M37 48a10 10 0 0118 0z"/><rect ${f} x="0" y="48" width="56" height="3" opacity=".5"/>`,
   house:`<rect ${f} x="9" y="27" width="38" height="22"/><path ${f} d="M15 27a13 13 0 0126 0z"/><path d="M28 8v6" stroke="currentColor" stroke-width="2.5"/><path d="M23 49V40a5 5 0 0110 0v9z" fill="var(--surface)"/><rect x="13" y="32" width="5" height="7" rx="2" fill="var(--surface)"/><rect x="38" y="32" width="5" height="7" rx="2" fill="var(--surface)"/>`,
   tree:`<path d="M27 51c1-9 2-14 1-21M28 34l-9-9M28 31l10-9" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/><circle ${f} cx="28" cy="16" r="11"/><circle ${f} cx="16" cy="25" r="8"/><circle ${f} cx="41" cy="23" r="9"/><rect ${f} x="8" y="50" width="40" height="2.5" opacity=".5"/>`,
   mosque:`<path ${f} d="M12 50V32h22v18z"/><path ${f} d="M15 32a8 8 0 0116 0z"/><path d="M23 18v6" stroke="currentColor" stroke-width="2"/><rect ${f} x="38" y="14" width="6" height="36"/><path ${f} d="M38 14l3-8 3 8z"/><path d="M19 50V42a4 4 0 018 0v8z" fill="var(--surface)"/>`,
   gate:`<rect ${f} x="6" y="20" width="44" height="30"/><rect ${f} x="14" y="12" width="28" height="8"/><path d="M19 50V34a9 9 0 0118 0v16z" fill="var(--surface)"/><rect x="10" y="26" width="5" height="7" fill="var(--surface)"/><rect x="41" y="26" width="5" height="7" fill="var(--surface)"/>`
  };
  return `<svg viewBox="0 0 56 56" aria-hidden="true">${m[k]||m.mounds}</svg>`;
}
function starSvg(on){return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z" fill="${on?'var(--gold)':'none'}" stroke="${on?'var(--gold)':'var(--line)'}" stroke-width="1.6" stroke-linejoin="round"/></svg>`}
function stars(n){return `<span class="stars" aria-label="${n} من 3 نجوم">${[1,2,3].map(i=>starSvg(i<=n)).join('')}</span>`}
function skyline(){return `<svg class="skyline" viewBox="0 0 420 90" aria-hidden="true"><g fill="currentColor"><path d="M0 90V60h8v-6h6v6h6v-6h6v6h8V90z"/><path d="M40 90V50a14 14 0 0128 0v40z" opacity=".55"/><rect x="82" y="34" width="9" height="56"/><path d="M82 34l4.5-14 4.5 14z"/><path d="M110 90V62h38V90z"/><path d="M116 62a13 13 0 0126 0z"/><path d="M165 90a22 22 0 0144 0z" opacity=".7"/><path d="M215 90a16 16 0 0132 0z"/><path d="M260 90V56h12v-8h8v8h8v-8h8v8h12V90z"/><path d="M310 90l14-32 14 32z" opacity=".6"/><path d="M345 90V70h60v20z"/><path d="M360 70V54h30V70z"/></g></svg>`}

/* ───────── الصوت ───────── */
let actx=null, master=null, musicOn=false, sfxOn=true, musicTimer=null, musicGain=null, droneOsc=null;
function ensureCtx(){
  try{
    if(!actx){const C=window.AudioContext||window.webkitAudioContext; if(!C) return null; actx=new C(); master=actx.createGain(); master.gain.value=.9; master.connect(actx.destination);}
    if(actx.state==='suspended') actx.resume();
    return actx;
  }catch(e){return null}
}
function tone(f,t0,dur,type,vol,dest){
  const o=actx.createOscillator(), g=actx.createGain(); o.type=type||'sine'; o.frequency.value=f;
  g.gain.setValueAtTime(.0001,t0); g.gain.exponentialRampToValueAtTime(vol,t0+.02); g.gain.exponentialRampToValueAtTime(.0001,t0+dur);
  o.connect(g); g.connect(dest||master); o.start(t0); o.stop(t0+dur+.05);
}
function sfxCorrect(){ if(!sfxOn||!ensureCtx()) return; const t=actx.currentTime; [523.25,659.25,783.99,1046.5].forEach((f,i)=>{tone(f,t+i*.09,.45,'triangle',.2);tone(f*2,t+i*.09,.3,'sine',.05)}); }
function sfxWrong(){ if(!sfxOn||!ensureCtx()) return; const t=actx.currentTime; tone(233,t,.32,'sawtooth',.09); tone(174.6,t+.2,.5,'sawtooth',.09); }
function sfxStage(){ if(!sfxOn||!ensureCtx()) return; const t=actx.currentTime; [392,523.25,659.25,783.99,1046.5,1318.5].forEach((f,i)=>tone(f,t+i*.11,.6,'triangle',.18)); }
const MEL=[293.66,0,349.23,0,440,0,392,0,349.23,0,293.66,0,261.63,0,293.66,0,
           349.23,0,392,0,440,0,523.25,0,440,0,392,0,349.23,0,293.66,0];
const BASSL=[73.42,87.31,98,87.31];
let mStep=0, fx=null;
function pluck(f,t,vol,dur){
  const o=actx.createOscillator(), o2=actx.createOscillator(), g=actx.createGain();
  o.type='triangle'; o.frequency.value=f; o2.type='sine'; o2.frequency.value=f*2;
  g.gain.setValueAtTime(.0001,t); g.gain.exponentialRampToValueAtTime(vol,t+.03); g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  o.connect(g); o2.connect(g); g.connect(fx); o.start(t); o2.start(t); o.stop(t+dur+.1); o2.stop(t+dur+.1);
}
function musicStep(){
  if(!actx||!musicOn||!fx) return;
  const t=actx.currentTime+.05, i=mStep%MEL.length;
  if(MEL[i]) pluck(MEL[i],t,.11,2.2);
  if(i%8===0) pluck(BASSL[(i/8)%4],t,.14,3.4);
  mStep++;
}
function startMusic(){
  if(musicOn) return;
  if(!ensureCtx()) return;
  musicOn=true;
  if(!musicGain){
    musicGain=actx.createGain(); musicGain.gain.value=0; musicGain.connect(master);
    fx=actx.createGain(); const lp=actx.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=2200;
    const dl=actx.createDelay(1); dl.delayTime.value=.42; const fb=actx.createGain(); fb.gain.value=.38;
    fx.connect(lp); lp.connect(musicGain); lp.connect(dl); dl.connect(fb); fb.connect(dl); dl.connect(musicGain);
  }
  musicGain.gain.cancelScheduledValues(actx.currentTime);
  musicGain.gain.setValueAtTime(musicGain.gain.value,actx.currentTime);
  musicGain.gain.linearRampToValueAtTime(.85,actx.currentTime+1.5);
  clearInterval(musicTimer); musicStep(); musicTimer=setInterval(musicStep,480);
  syncAudioBtns();
}
function stopMusic(){
  musicOn=false; clearInterval(musicTimer);
  if(musicGain&&actx){musicGain.gain.cancelScheduledValues(actx.currentTime); musicGain.gain.setValueAtTime(musicGain.gain.value,actx.currentTime); musicGain.gain.linearRampToValueAtTime(0,actx.currentTime+.8);}
  syncAudioBtns();
}
function syncAudioBtns(){
  $('#musicBtn').setAttribute('aria-pressed',String(musicOn)); $('#musicBtn').textContent='موسيقى هادئة: '+(musicOn?'تعمل':'متوقفة');
  $('#sfxBtn').setAttribute('aria-pressed',String(sfxOn)); $('#sfxBtn').textContent='المؤثرات الصوتية: '+(sfxOn?'تعمل':'متوقفة');
}
/* قصاصات احتفال */
function confetti(){
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cv=$('#confetti'); cv.hidden=false; const dpr=window.devicePixelRatio||1;
  cv.width=innerWidth*dpr; cv.height=innerHeight*dpr; const c=cv.getContext('2d'); c.scale(dpr,dpr);
  const cols=['#CE1126','#FFFFFF','#C9A227','#16405C','#E8394F'];
  const ps=Array.from({length:110},()=>({x:innerWidth/2+(Math.random()-.5)*120,y:innerHeight*.55,vx:(Math.random()-.5)*11,vy:-Math.random()*13-4,s:5+Math.random()*7,r:Math.random()*6,vr:(Math.random()-.5)*.4,c:pick(cols),sh:Math.random()<.5}));
  let t0=null;
  (function step(ts){
    if(!t0)t0=ts; const el=ts-t0; c.clearRect(0,0,innerWidth,innerHeight);
    ps.forEach(p=>{p.vy+=.35;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;c.save();c.translate(p.x,p.y);c.rotate(p.r);c.fillStyle=p.c;c.strokeStyle='rgba(0,0,0,.18)';
      if(p.sh){c.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);c.strokeRect(-p.s/2,-p.s/4,p.s,p.s/2)}else{c.beginPath();c.moveTo(0,-p.s/2);c.lineTo(p.s/2,p.s/2);c.lineTo(-p.s/2,p.s/2);c.closePath();c.fill()}
      c.restore()});
    if(el<1900) requestAnimationFrame(step); else {c.clearRect(0,0,innerWidth,innerHeight);cv.hidden=true}
  })(performance.now());
}

/* ───────── الحالة ───────── */
const state = {
  profile:{name:'',grade:'الثاني عشر',school:'',gender:''}, answers:{}, tries:{},
  uid:null, db:null, userNs:null, canEdit:false, canWrite:null, customQs:[], students:[],
  screen:'welcome', quiz:null, tTab:'results', tSearch:'', tOpen:null, delArm:null, saveFail:false, ready:false,
  teacher:null, teachers:[], history:[], ts:0, resetArm:false, studentsSub:null, loginErr:'', lastSaved:0
};
function loadLocal(){const d=lsGet('darb-v1'); if(d){Object.assign(state.profile,d.profile||{});state.answers=d.answers||{};state.tries=d.tries||{};state.history=d.history||[];state.ts=d.ts||0;}
  const p=lsGet('darb-prefs'); if(p){sfxOn=p.sfx!==false;}
  try{const t=sessionStorage.getItem('darb-teacher'); if(t) state.teacher={name:t}}catch(e){}}
function saveLocal(){state.ts=Date.now();lsSet('darb-v1',{profile:state.profile,answers:state.answers,tries:state.tries,history:state.history,ts:state.ts})}

/* ───────── المراحل والأسئلة (الأساسية + ما تضيفه المعلمة) ───────── */
function guessKind(n){return /حصن|قلعة/.test(n)?'fort':/بيت|متحف/.test(n)?'house':/سوق|بوابة/.test(n)?'gate':/مسجد/.test(n)?'mosque':'mounds'}
function allStages(){
  const out=STAGES.slice(), seen={};
  state.customQs.forEach(q=>{ if(typeof q.stage==='string'&&q.stage.startsWith('c:')&&!seen[q.stage]){seen[q.stage]=1;const n=q.stage.slice(2);out.push({id:q.stage,name:n,kind:guessKind(n),tag:'أسئلة المعلمة',blurb:'مرحلة جديدة أضافتها المعلمة.'})}});
  return out;
}
function stageQs(id){return BASE.filter(q=>q.stage===id).concat(state.customQs.filter(q=>q.stage===id))}
function stageInfo(id){
  const qs=stageQs(id); let a=0,c=0; qs.forEach(q=>{const r=state.answers[q.id]; if(r){a++; if(r.c)c++}});
  const pct=qs.length?c/qs.length:0; return {total:qs.length,answered:a,correct:c,done:qs.length>0&&a===qs.length,stars:a===qs.length&&qs.length?(pct>=.85?3:pct>=.6?2:1):0};
}
function totals(){let a=0,c=0;Object.values(state.answers).forEach(r=>{a++;if(r.c)c++});return{a,c}}
function unlocked(i){ if(state.canEdit) return true; const st=allStages(); if(i===0) return true; const prev=stageInfo(st[i-1].id); return prev.done||prev.total===0 }

/* ───────── الحفظ في قاعدة البيانات ───────── */
let writing=false, dirty=false;
function studentDoc(){const t=totals(); return {name:state.profile.name,grade:state.profile.grade,school:state.profile.school,gender:state.profile.gender,answers:state.answers,tries:state.tries,history:state.history||[],score:t.c,answered:t.a,updatedAt:state.ts||Date.now()}}
async function flushRemote(){
  if(!state.db||!state.uid||state.canWrite===false){return}
  if(writing){dirty=true;return}
  writing=true; dirty=false;
  try{ await state.db.doc('students/'+state.uid).set(studentDoc()); state.saveFail=false; state.lastSaved=Date.now(); }
  catch(e){ state.saveFail=true; if(e&&e.code==='invalid_argument'){state.canWrite=false} }
  writing=false; renderChip();
  if(state.screen==='trail'&&$('#saveNote')) render();
  if(dirty) flushRemote();
}
function saveOk(){return !!(state.db&&state.uid&&state.canWrite!==false&&!state.saveFail)}
function saveNote(){
  if(!state.ready||saveOk()||!window.claude) return '';
  return '<p class="notice" id="saveNote" style="margin-bottom:12px">'+(state.db?'حسابك لا يملك صلاحية حفظ النتائج، فاطلبي من معلمتك منحك صلاحية المشاركة في الرابط.':'لتصل نتيجتك إلى معلمتك افتحي الرابط وأنتِ مسجّلة الدخول في Claude.')+' تقدّمك محفوظ على هذا الجهاز في الأثناء.</p>';
}
function queueRemote(){ if(state.db&&state.uid) flushRemote() }
function renderChip(){
  const el=$('#saveChip'); if(state.screen==='welcome'&&!state.profile.name){el.hidden=true;return}
  el.hidden=false;
  const ok=saveOk();
  el.className='chip '+(ok?'save-ok':'save-local');
  el.innerHTML='<span class="dot"></span>'+(ok?(state.lastSaved?'تم حفظ نتيجتك عند المعلمة':'نتائجك تصل إلى معلمتك'):'يُحفظ تقدّمك على هذا الجهاز فقط');
  el.title=ok?'':(!window.claude?'':state.db?'تعذّر حفظ النتائج لهذا الحساب. اطلبي من معلمتك أن تمنحكِ صلاحية المشاركة في الرابط.':'افتحي الرابط وأنتِ مسجّلة الدخول في Claude لتصل نتائجك إلى معلمتك.');
}

/* ───────── الشاشات ───────── */
function setScreen(s){state.screen=s; render(); window.scrollTo({top:0})}
function render(){
  const m=$('#main'); const s=state.screen;
  $('#teacherBtn').hidden=(s==='teacher'||s==='tlogin'||!state.db);
  $('#homeBtn').hidden=(s==='welcome'||s==='trail');
  $('#homeBtn').textContent=(s==='teacher'||s==='tlogin')?(state.profile.name?'العودة إلى الدرب':'الصفحة الرئيسية'):'الدرب';
  if(s==='tlogin') renderTLogin(m); else if(s==='welcome') renderWelcome(m); else if(s==='trail') renderTrail(m); else if(s==='quiz') renderQuiz(m); else if(s==='done') renderDone(m); else if(s==='teacher') renderTeacher(m);
  renderChip(); syncAudioBtns();
}

function renderWelcome(m){
  const p=state.profile, has=!!p.name;
  m.innerHTML=`<section class="hero">
    <div class="lead">
      <h1>درب <span>التميّز</span></h1>
      <p>رحلة بين قلاع البحرين ومعابدها ومساجدها، تمرّين فيها على أسئلة الاختبارات الوطنية للصف الثاني عشر مرحلة بعد مرحلة.</p>
      <div class="facts"><span>رياضيات: ${BASE.filter(q=>q.sub==='m').length} سؤالًا</span><span>English: ${BASE.filter(q=>q.sub==='en').length} questions</span><span>عربي: ${BASE.filter(q=>q.sub==='ar').length} سؤالًا</span></div>
      ${skyline()}
    </div>
    <form class="card form" id="regForm" autocomplete="off">
      <h2>${has?'أهلًا بعودتك':'سجّلي بياناتك وابدئي'}</h2>
      <div class="chars" role="group" aria-label="اختيار الشخصية">
        <button type="button" class="char" data-g="f" aria-pressed="${p.gender==='f'}">${charSvg('f')}<b>بنت</b></button>
        <button type="button" class="char" data-g="m" aria-pressed="${p.gender==='m'}">${charSvg('m')}<b>ولد</b></button>
      </div>
      <label for="fName">الاسم الكامل<input type="text" id="fName" value="${esc(p.name)}" maxlength="60"></label>
      <div class="grid2">
        <label for="fGrade">الصف<input type="text" id="fGrade" list="grades" value="${esc(p.grade)}" maxlength="40"></label>
        <label for="fSchool">المدرسة<input type="text" id="fSchool" value="${esc(p.school)}" maxlength="80"></label>
      </div>
      <datalist id="grades"><option value="الثاني عشر"><option value="الثاني عشر علمي"><option value="الثاني عشر أدبي"><option value="الثاني عشر تجاري"><option value="الثاني عشر صناعي"></datalist>
      <div class="err" id="regErr" role="alert"></div>
      <button class="btn primary" type="submit">${has?'تابعي الدرب':'ابدأ الرحلة'}</button>
      ${state.db?'<button class="btn ghost" type="button" id="wTeacher">أنا معلمة: دخول لوحة المعلمة</button>':''}
    </form></section>`;
  m.querySelectorAll('.char').forEach(b=>b.onclick=()=>{state.profile.gender=b.dataset.g;m.querySelectorAll('.char').forEach(x=>x.setAttribute('aria-pressed',String(x===b)))});
  if($('#wTeacher')) $('#wTeacher').onclick=()=>$('#teacherBtn').click();
  $('#regForm').onsubmit=e=>{
    e.preventDefault();
    const n=$('#fName').value.trim(), g=$('#fGrade').value.trim(), s=$('#fSchool').value.trim();
    if(!state.profile.gender){$('#regErr').textContent='اختاري شخصيتك (بنت أو ولد) أولًا.';return}
    if(n.length<3||!g||!s){$('#regErr').textContent='اكتبي الاسم والصف والمدرسة كاملة.';return}
    Object.assign(state.profile,{name:n,grade:g,school:s}); saveLocal(); queueRemote();
    if(!musicOn&&!lsGet('darb-prefs')?.musicOff) startMusic();
    setScreen('trail');
  };
}

function renderTrail(m){
  const st=allStages(), t=totals(), p=state.profile;
  const firstOpen=st.findIndex((s,i)=>unlocked(i)&&!stageInfo(s.id).done);
  const doneN=st.filter(s=>stageInfo(s.id).done).length;
  m.innerHTML=`<div class="trail-head">
      <div class="who">${charSvg(p.gender)}<div><h2>${esc(p.name.split(' ')[0])}</h2><span class="muted">${esc(p.grade)} · ${esc(p.school)}</span></div></div>
      <div class="stats"><div class="stat"><b>${doneN}/${st.length}</b><small>مراحل مكتملة</small></div><div class="stat"><b>${t.c}</b><small>إجابات صحيحة</small></div><div class="stat"><b>${t.a?Math.round(t.c/t.a*100):0}%</b><small>نسبة الصواب</small></div></div>
    </div>
    ${state.canEdit?'<p class="notice" style="margin-bottom:12px">أنتِ معلمة: جميع المراحل مفتوحة لكِ للتجربة، وتُحفظ إجاباتكِ كطالبة أيضًا.</p>':saveNote()}
    <ol class="trail">${st.map((s,i)=>{
      const inf=stageInfo(s.id), open=unlocked(i), cls=inf.done?'done':open?'open':'locked', pct=inf.total?inf.answered/inf.total*100:0;
      return `<li class="node ${cls}">
        <div class="medal">${artSvg(s.kind)}<span class="num">${i+1}</span>${i===firstOpen?`<span class="here">${charSvg(p.gender)}</span>`:''}</div>
        <div class="card body">
          <span class="tag">${esc(s.tag)}</span><h3>${esc(s.name)}</h3><p class="muted">${esc(s.blurb)}</p>
          <div class="meta">${inf.total?`<div class="bar" title="${inf.answered} من ${inf.total}"><i style="width:${pct}%"></i></div><span class="muted">${inf.answered}/${inf.total}</span>`:'<span class="muted">لا توجد أسئلة بعد</span>'}${inf.done?stars(inf.stars):''}</div>
          <div class="row">${!open?'<span class="muted">تُفتح بعد إكمال المرحلة السابقة</span>':inf.total?`<button class="btn ${inf.done?'':'primary'}" data-go="${esc(s.id)}" type="button">${inf.done?'إعادة المرحلة':inf.answered?'تابعي المرحلة':'ادخلي المرحلة'}</button>`:''}</div>
        </div></li>`}).join('')}</ol>${resetBlock(t)}`;
  m.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>startStage(b.dataset.go));
  bindReset(m);
}

const g2=(f,m)=>state.profile.gender==='m'?m:f;
function resetBlock(t){
  if(!t.a) return '';
  if(state.resetArm) return `<div class="card" style="margin-top:16px;padding:16px;display:grid;gap:10px"><b>إعادة الدرب كاملًا؟</b><span class="muted">سيُمسح تقدّمك في جميع المراحل وتبدأ من القلعة الأولى. تبقى محاولتك السابقة (${t.c} من ${t.a}) مسجّلة عند معلمتك.</span><div class="row"><button class="btn primary" id="rsYes" type="button">نعم، ${g2('أعيدي','أعد')} الدرب</button><button class="btn" id="rsNo" type="button">إلغاء</button></div></div>`;
  return `<div class="row" style="margin-top:16px;justify-content:center"><button class="btn" id="rsAsk" type="button">إعادة الدرب من البداية</button></div>`;
}
function bindReset(m){
  const a=$('#rsAsk'), y=$('#rsYes'), n=$('#rsNo');
  if(a) a.onclick=()=>{state.resetArm=true;renderTrail(m)};
  if(n) n.onclick=()=>{state.resetArm=false;renderTrail(m)};
  if(y) y.onclick=resetAll;
}
function resetAll(){
  const t=totals();
  if(t.a) state.history=(state.history||[]).concat([{c:t.c,a:t.a,at:Date.now()}]).slice(-20);
  state.answers={}; state.tries={}; state.resetArm=false; state.quiz=null;
  saveLocal(); queueRemote(); toast('بدأ الدرب من جديد، بالتوفيق!');
  setScreen('trail');
}
function startStage(id){
  const qs=stageQs(id).slice(); if(!qs.length) return;
  const inf=stageInfo(id);
  if(inf.done){qs.forEach(q=>{delete state.answers[q.id]}); state.tries[id]=(state.tries[id]||0)+1; saveLocal(); queueRemote();}
  let idx=qs.findIndex(q=>!state.answers[q.id]); if(idx<0) idx=0;
  state.quiz={stageId:id,qs,idx,locked:false,run:{c:0,n:0}};
  setScreen('quiz');
}

function renderQuiz(m){
  const z=state.quiz, q=z.qs[z.idx], stg=allStages().find(s=>s.id===z.stageId)||{name:''}, en=q.lang==='en';
  const L=en||q.sub==='m'?EN_L:AR_L, prev=state.answers[q.id];
  const passage=q.passageHtml?`<details class="passage-box" open><summary class="chip" style="display:inline-flex;margin-bottom:8px">${esc(q.ptitle||'النص')}</summary><div class="passage en" id="pass">${q.passageHtml}</div></details>`
    :q.passage?`<details class="passage-box" open><summary class="chip" style="display:inline-flex;margin-bottom:8px">${esc(q.ptitle||'النص')}</summary><div class="passage ${en?'en':''}" id="pass">${esc(q.passage)}</div></details>`:'';
  const imgBtn=q.imgs?`<div class="row"><button class="btn" type="button" id="readBtn">اقرئي النص: ${esc(q.ptitle)}</button></div>`:'';
  const shot=q.shot?`<div class="shot" id="shot"><img src="${IMG[q.shot]}" alt="نص السؤال"></div>`:'';
  m.innerHTML=`<div class="qwrap">
    <div class="qhead"><span class="t">${esc(stg.name)}</span><span class="chip">السؤال ${z.idx+1} من ${z.qs.length}</span></div>
    <div class="bar"><i style="width:${(z.idx/z.qs.length)*100}%"></i></div>
    <div class="card qcard">
      ${passage}${imgBtn}
      ${q.shot?'':`<div class="qtext ${en?'en':''}" id="qt">${esc(q.q)}</div>`}
      ${q.shot?`<div class="qtext">${esc(q.q)}</div>`:''}${shot}
      <div class="opts ${q.letters?'letters':''}" id="opts">${q.o.map((o,i)=>`<button type="button" class="opt ${en?'en':''}" data-i="${i}"><span class="l">${L[i]||i+1}</span>${q.letters?'':`<span class="tx">${esc(o)}</span>`}</button>`).join('')}</div>
      <div id="fb"></div>
    </div></div>`;
  if(q.gap){m.querySelectorAll('.gap[data-g]').forEach(g=>{if(+g.dataset.g===q.gap){g.classList.add('on');setTimeout(()=>g.scrollIntoView({block:'nearest'}),50)}})}
  if($('#readBtn')) $('#readBtn').onclick=()=>openViewer(q.imgs,0);
  if($('#shot')) $('#shot').onclick=()=>openViewer([q.shot],0);
  z.locked=false;
  m.querySelectorAll('.opt').forEach(b=>b.onclick=()=>answer(+b.dataset.i));
}

function answer(i){
  const z=state.quiz; if(z.locked) return; z.locked=true;
  const q=z.qs[z.idx], ok=i===q.a, en=q.lang==='en';
  state.answers[q.id]={c:ok?1:0,ch:i,t:Date.now()}; saveLocal(); queueRemote();
  z.run.n++; if(ok) z.run.c++;
  document.querySelectorAll('.opt').forEach((b,k)=>{b.disabled=true; if(k===q.a) b.classList.add('ok'); else if(k===i) b.classList.add('bad')});
  const last=z.idx===z.qs.length-1;
  $('#fb').innerHTML=`<div class="fb ${ok?'ok':'bad'}"><b>${ok?'إجابة صحيحة':'إجابة غير صحيحة'}</b><p>${esc(phrase(ok?OKPH:BADPH))}</p><div class="row"><button class="btn primary" id="nextBtn" type="button">${last?'إنهاء المرحلة':'السؤال التالي'}</button></div></div>`;
  $('#fb').scrollIntoView({block:'nearest',behavior:'smooth'});
  $('#nextBtn').focus({preventScroll:true});
  $('#nextBtn').onclick=()=>{ if(last){ setScreen('done') } else { z.idx++; render(); window.scrollTo({top:0}) } };
  if(ok){sfxCorrect();confetti()} else sfxWrong();
}

function renderDone(m){
  const z=state.quiz, inf=stageInfo(z.stageId), stg=allStages().find(s=>s.id===z.stageId)||{name:''}, st=allStages(), i=st.findIndex(s=>s.id===z.stageId), nxt=st[i+1], allDone=st.every(s=>!stageQs(s.id).length||stageInfo(s.id).done);
  sfxStage(); setTimeout(confetti,150);
  m.innerHTML=`<div class="card done-card">
    <span class="muted">انتهت محطة</span><h2>${esc(stg.name)}</h2>
    ${stars(inf.stars)}
    <div class="big">${inf.correct} / ${inf.total}</div>
    <p>${esc(phrase(DONEPH))}</p>
    <div class="row" style="justify-content:center">
      ${nxt&&stageQs(nxt.id).length?`<button class="btn primary" id="goNext" type="button">المرحلة التالية: ${esc(nxt.name)}</button>`:''}
      <button class="btn" id="goTrail" type="button">العودة إلى الدرب</button>
      <button class="btn ghost" id="goRetry" type="button">إعادة المرحلة</button>
      ${allDone?'<button class="btn" id="goReset" type="button">إعادة الدرب كاملًا</button>':''}
    </div></div>`;
  if($('#goNext')) $('#goNext').onclick=()=>startStage(nxt.id);
  $('#goTrail').onclick=()=>setScreen('trail');
  $('#goRetry').onclick=()=>startStage(z.stageId);
  if($('#goReset')) $('#goReset').onclick=()=>{state.resetArm=true;setScreen('trail')};
}

/* عارض الصور (نصوص الامتحان) */
let vImgs=[], vIdx=0;
function openViewer(imgs,i){vImgs=imgs;vIdx=i;showV();$('#viewer').hidden=false}
function showV(){ $('#vBody').innerHTML=`<img src="${IMG[vImgs[vIdx]]}" alt="صفحة من ورقة الامتحان ${vIdx+1}">`; $('#vPrev').hidden=$('#vNext').hidden=vImgs.length<2; $('#vPrev').disabled=vIdx===0; $('#vNext').disabled=vIdx===vImgs.length-1; $('#viewer').scrollTop=0 }
$('#vClose').onclick=()=>{$('#viewer').hidden=true};
$('#vPrev').onclick=()=>{if(vIdx>0){vIdx--;showV()}};
$('#vNext').onclick=()=>{if(vIdx<vImgs.length-1){vIdx++;showV()}};
document.addEventListener('keydown',e=>{if(e.key==='Escape') $('#viewer').hidden=true});

/* ───────── لوحة المعلمة ───────── */
function stageName(id){const s=allStages().find(x=>x.id===id); return s?s.name:'—'}
function studentStats(d){
  const ans=d.answers||{}, per=allStages().map(s=>{const qs=stageQs(s.id); let a=0,c=0; qs.forEach(q=>{const r=ans[q.id]; if(r){a++;if(r.c)c++}}); return {id:s.id,name:s.name,total:qs.length,a,c,done:qs.length>0&&a===qs.length}});
  let A=0,C=0; per.forEach(p=>{A+=p.a;C+=p.c});
  return {per,A,C,doneN:per.filter(p=>p.done).length,pct:A?Math.round(C/A*100):0};
}
/* ───────── كلمات مرور المعلمات (تشفير SHA-256 متكرر مع ملح خاص بكل معلمة) ───────── */
const SHA=(()=>{
  const K=[],H0=[]; let n=2,c=0;
  const isP=x=>{for(let i=2;i*i<=x;i++) if(x%i===0) return false; return true};
  while(c<64){ if(isP(n)){ if(c<8) H0.push((Math.pow(n,.5)%1)*4294967296|0); K.push((Math.cbrt(n)%1)*4294967296|0); c++ } n++ }
  const rr=(x,k)=>(x>>>k)|(x<<(32-k));
  return function(bytes){
    const l=bytes.length, nb=((l+9+63)>>6)<<6, m=new Uint8Array(nb); m.set(bytes); m[l]=0x80;
    const dv=new DataView(m.buffer); dv.setUint32(nb-4,(l*8)>>>0); dv.setUint32(nb-8,Math.floor(l*8/4294967296));
    const h=H0.slice(), w=new Int32Array(64);
    for(let o=0;o<nb;o+=64){
      for(let i=0;i<16;i++) w[i]=dv.getInt32(o+i*4);
      for(let i=16;i<64;i++){const a=w[i-15],b=w[i-2]; w[i]=(w[i-16]+(rr(a,7)^rr(a,18)^(a>>>3))+w[i-7]+(rr(b,17)^rr(b,19)^(b>>>10)))|0}
      let a=h[0],b=h[1],c2=h[2],d=h[3],e=h[4],f=h[5],g=h[6],hh=h[7];
      for(let i=0;i<64;i++){
        const t1=(hh+(rr(e,6)^rr(e,11)^rr(e,25))+((e&f)^(~e&g))+K[i]+w[i])|0, t2=((rr(a,2)^rr(a,13)^rr(a,22))+((a&b)^(a&c2)^(b&c2)))|0;
        hh=g;g=f;f=e;e=(d+t1)|0;d=c2;c2=b;b=a;a=(t1+t2)|0;
      }
      h[0]=(h[0]+a)|0;h[1]=(h[1]+b)|0;h[2]=(h[2]+c2)|0;h[3]=(h[3]+d)|0;h[4]=(h[4]+e)|0;h[5]=(h[5]+f)|0;h[6]=(h[6]+g)|0;h[7]=(h[7]+hh)|0;
    }
    const out=new Uint8Array(32), od=new DataView(out.buffer); h.forEach((v,i)=>od.setInt32(i*4,v)); return out;
  };
})();
const TE=new TextEncoder();
function hashPw(pw,salt){
  const sb=TE.encode(salt); let d=TE.encode(salt+':'+pw);
  for(let i=0;i<3000;i++){const m=new Uint8Array(d.length+sb.length); m.set(d); m.set(sb,d.length); d=SHA(m)}
  return Array.from(d,b=>b.toString(16).padStart(2,'0')).join('');
}
function newSalt(){
  const a=new Uint8Array(12);
  if(window.crypto&&crypto.getRandomValues) crypto.getRandomValues(a); else a.forEach((_,i)=>{a[i]=Math.floor(Math.random()*256)});
  return Array.from(a,b=>b.toString(16).padStart(2,'0')).join('');
}
const normName=s=>String(s||'').trim().replace(/\s+/g,' ').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').toLowerCase();

let loginTries=0, loginLockUntil=0;
function renderTLogin(m){
  if(!state.db){
    m.innerHTML='<div class="card panel" style="max-width:520px;margin:24px auto"><h2>دخول المعلمة</h2><p class="muted">لوحة المعلمة تحتاج ربط الموقع بقاعدة بيانات. راجعي ملف README.md.</p></div>';
    return;
  }
  m.innerHTML=`<form class="card panel" id="tlForm" style="max-width:460px;margin:24px auto" autocomplete="off">
    <h2>دخول المعلمة</h2><p class="muted">اكتبي اسمك وكلمة المرور التي أعطتكِ إياها مشرفة البرنامج.</p>
    <label for="tlName">الاسم<input type="text" id="tlName" maxlength="60"></label>
    <label for="tlPw">كلمة المرور<input type="password" id="tlPw" maxlength="60" autocomplete="off"></label>
    <div class="err" id="tlErr" role="alert"></div>
    <button class="btn primary" type="submit" id="tlGo">دخول</button></form>`;
  $('#tlForm').onsubmit=async e=>{
    e.preventDefault();
    const err=$('#tlErr'), now=Date.now();
    if(now<loginLockUntil){err.textContent='محاولات كثيرة. انتظري '+Math.ceil((loginLockUntil-now)/1000)+' ثانية ثم أعيدي المحاولة.';return}
    const nm=normName($('#tlName').value), pw=$('#tlPw').value;
    if(!nm||!pw){err.textContent='اكتبي الاسم وكلمة المرور.';return}
    $('#tlGo').disabled=true;
    let snap;
    try{ snap=await state.db.collection('teachers').get() }catch(x){ err.textContent='تعذّر الاتصال. تأكدي أنكِ مسجّلة الدخول في Claude وأن لديكِ صلاحية المشاركة.'; $('#tlGo').disabled=false; return }
    const t=snap.docs.map(d=>Object.assign({id:d.id},d.data())).find(x=>normName(x.name)===nm);
    const ok=!!(t&&t.salt&&hashPw(pw,t.salt)===t.hash);
    $('#tlGo').disabled=false;
    if(!ok){ loginTries++; if(loginTries>=5){loginLockUntil=Date.now()+30000;loginTries=0} err.textContent='الاسم أو كلمة المرور غير صحيحة.'; return }
    loginTries=0; state.teacher={name:t.name,id:t.id};
    try{sessionStorage.setItem('darb-teacher',t.name)}catch(x){}
    setScreen('teacher');
  };
}

function ensureStudentsSub(){
  if(state.studentsSub||!state.db) return;
  try{
    state.studentsSub=state.db.collection('students').onSnapshot(snap=>{
      state.students=snap.docs.map(d=>({id:d.id,data:d.data()}));
      if(state.screen==='teacher'&&state.tTab==='results'&&!(document.activeElement&&document.activeElement.id==='tSearch')) render();
    },()=>{state.studentsSub=null});
  }catch(e){}
}

function renderTeacher(m){
  if(!state.db){m.innerHTML='<div class="card panel"><p>لوحة المعلمة تحتاج ربط الموقع بقاعدة بيانات. راجعي ملف README.md.</p></div>';return}
  if(!(state.canEdit||state.teacher)){state.screen='tlogin';render();return}
  ensureStudentsSub();
  const adm=state.canEdit;
  if(state.tTab==='teachers'&&!adm) state.tTab='results';
  const tb=(k,t)=>`<button class="chip" data-t="${k}" aria-pressed="${state.tTab===k}">${t}</button>`;
  m.innerHTML=`<div class="trail-head"><h2>لوحة المعلمة${state.teacher?' · '+esc(state.teacher.name):''}</h2>${state.teacher?'<button class="btn small ghost" id="tOut" type="button">تسجيل الخروج</button>':''}</div>
   <div class="tabs">${tb('results','نتائج الطلبة')}${tb('add','إضافة سؤال')}${tb('mine','أسئلتي')}${adm?tb('teachers','المعلمات وكلمات المرور'):''}</div><div id="tBody"></div>`;
  m.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{state.tTab=b.dataset.t;state.delArm=null;renderTeacher(m)});
  const out=$('#tOut'); if(out) out.onclick=()=>{state.teacher=null;try{sessionStorage.removeItem('darb-teacher')}catch(e){} setScreen(state.profile.name?'trail':'welcome')};
  const body=$('#tBody');
  if(state.tTab==='results') tResults(body); else if(state.tTab==='add') tAdd(body); else if(state.tTab==='teachers') tTeachers(body); else tMine(body);
}

async function loadTeachers(){
  try{
    const s=await state.db.collection('teachers').get();
    state.teachers=s.docs.map(d=>({id:d.id,data:d.data()})).sort((a,b)=>(a.data.createdAt||0)-(b.data.createdAt||0));
  }catch(e){}
}
function drawTeacherList(){
  const el=$('#tcList'); if(!el) return;
  if(!state.teachers.length){el.innerHTML='<p class="muted">لم تضيفي أي معلمة بعد.</p>';return}
  el.innerHTML=`<div class="scroll"><table style="min-width:540px"><thead><tr><th>المعلمة</th><th>كلمة مرور جديدة</th><th></th></tr></thead><tbody>${state.teachers.map(t=>`<tr><td>${esc(t.data.name)}</td><td><input type="text" data-pw="${esc(t.id)}" maxlength="40" placeholder="اتركيه فارغًا بدون تغيير" aria-label="كلمة مرور جديدة للمعلمة ${esc(t.data.name)}"></td><td><div class="row"><button class="btn small" data-upd="${esc(t.id)}" type="button">تحديث</button><button class="btn small ghost" data-rm="${esc(t.id)}" type="button">${state.delArm===t.id?'تأكيد الحذف':'حذف'}</button></div></td></tr>`).join('')}</tbody></table></div>`;
  el.querySelectorAll('[data-upd]').forEach(b=>b.onclick=async()=>{
    const id=b.dataset.upd, inp=el.querySelector('[data-pw="'+id+'"]'), pw=inp.value.trim(), t=state.teachers.find(x=>x.id===id);
    if(!pw){toast('اكتبي كلمة المرور الجديدة أولًا');return}
    if(pw.length<4){toast('كلمة المرور 4 أحرف على الأقل');return}
    try{const salt=newSalt(); await state.db.doc('teachers/'+id).update({salt,hash:hashPw(pw,salt)}); inp.value=''; toast('تم تحديث كلمة مرور '+(t?t.data.name:''))}catch(e){toast('تعذّر التحديث')}
  });
  el.querySelectorAll('[data-rm]').forEach(b=>b.onclick=async()=>{
    const id=b.dataset.rm;
    if(state.delArm!==id){state.delArm=id;drawTeacherList();return}
    try{await state.db.doc('teachers/'+id).delete(); state.delArm=null; await loadTeachers(); drawTeacherList(); toast('حُذفت المعلمة')}catch(e){toast('تعذّر الحذف')}
  });
}
async function tTeachers(body){
  body.innerHTML=`<div class="card panel"><p class="muted">أضيفي كل معلمة باسمها وكلمة مرور خاصة بها. تدخل المعلمة من زر «دخول المعلمة» في أعلى الصفحة، وتضيف الأسئلة وترى نتائج الطلبة.</p>
    <form id="tcForm" class="grid2" autocomplete="off">
      <label for="tcName">اسم المعلمة<input type="text" id="tcName" maxlength="60"></label>
      <label for="tcPw">كلمة المرور (4 أحرف على الأقل)<input type="text" id="tcPw" maxlength="40"></label>
      <div class="row"><button class="btn primary" type="submit">إضافة معلمة</button><button class="btn" id="tcGen" type="button">اقتراح كلمة مرور</button></div>
    </form>
    <div class="err" id="tcErr" role="alert"></div>
    <div id="tcList"><p class="muted">جارٍ التحميل…</p></div></div>`;
  $('#tcGen').onclick=()=>{$('#tcPw').value=String(Math.floor(100000+Math.random()*900000))};
  $('#tcForm').onsubmit=async e=>{
    e.preventDefault();
    const name=$('#tcName').value.trim(), pw=$('#tcPw').value.trim(), er=$('#tcErr');
    if(name.length<2){er.textContent='اكتبي اسم المعلمة.';return}
    if(pw.length<4){er.textContent='كلمة المرور 4 أحرف على الأقل.';return}
    if(state.teachers.some(t=>normName(t.data.name)===normName(name))){er.textContent='هذا الاسم مضاف من قبل.';return}
    try{
      const salt=newSalt();
      await state.db.collection('teachers').add({name,salt,hash:hashPw(pw,salt),createdAt:Date.now()});
      er.textContent=''; toast('أُضيفت المعلمة '+name+'. أعطيها كلمة المرور.');
      $('#tcName').value=''; $('#tcPw').value=''; await loadTeachers(); drawTeacherList();
    }catch(x){er.textContent='تعذّرت الإضافة. تأكدي أنكِ مسجّلة الدخول كمشرفة (صلاحية محرّر).'}
  };
  await loadTeachers(); drawTeacherList();
}
function fmtDate(t){try{return new Date(t).toLocaleString('ar-BH',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})}catch(e){return ''}}
function tResults(body){
  const q=state.tSearch.trim().toLowerCase();
  const rows=state.students.map(s=>({s,d:s.data,st:studentStats(s.data)})).filter(r=>!q||[r.d.name,r.d.school,r.d.grade].join(' ').toLowerCase().includes(q)).sort((a,b)=>(b.d.updatedAt||0)-(a.d.updatedAt||0));
  const all=state.students.map(s=>studentStats(s.data)), avg=all.length?Math.round(all.reduce((x,y)=>x+y.pct,0)/all.length):0;
  body.innerHTML=`<div class="card panel">
    <div class="row" style="align-items:end;justify-content:space-between">
      <div class="stats"><div class="stat"><b>${state.students.length}</b><small>طالبًا وطالبة</small></div><div class="stat"><b>${avg}%</b><small>متوسط الصواب</small></div></div>
      <div class="row"><label style="min-width:210px">بحث بالاسم أو المدرسة أو الصف<input type="text" id="tSearch" value="${esc(state.tSearch)}"></label><button class="btn" id="csvBtn" type="button">تصدير CSV</button></div>
    </div>
    ${rows.length?`<div class="scroll"><table><thead><tr><th>الاسم</th><th>الصف</th><th>المدرسة</th><th>المراحل</th><th>الصحيح / المجاب</th><th>النسبة</th><th>الإعادات</th><th>آخر نشاط</th></tr></thead><tbody>
    ${rows.map(r=>`<tr class="click" data-id="${esc(r.s.id)}"><td>${esc(r.d.name)}</td><td>${esc(r.d.grade)}</td><td>${esc(r.d.school)}</td><td class="n">${r.st.doneN}/${r.st.per.length}</td><td class="n">${r.st.C} / ${r.st.A}</td><td><span class="pill ${r.st.pct>=60?'ok':'bad'}">${r.st.pct}%</span></td><td class="n">${(r.d.history||[]).length}</td><td class="n">${esc(fmtDate(r.d.updatedAt))}</td></tr>
    ${state.tOpen===r.s.id?`<tr><td colspan="8"><div class="scroll"><table style="min-width:420px"><thead><tr><th>المرحلة</th><th>الصحيح</th><th>المجاب</th><th>عدد الأسئلة</th></tr></thead><tbody>${r.st.per.filter(p=>p.total).map(p=>`<tr><td>${esc(p.name)}</td><td class="n">${p.c}</td><td class="n">${p.a}</td><td class="n">${p.total}</td></tr>`).join('')}</tbody></table></div>
      ${(r.d.history||[]).length?`<p class="muted" style="margin-top:6px">محاولات سابقة: ${r.d.history.map(h=>h.c+'/'+h.a).join(' ، ')}</p>`:''}${state.canEdit?`<div style="margin-top:8px"><button class="btn small ghost" data-del="${esc(r.s.id)}" type="button">${state.delArm===r.s.id?'تأكيد حذف سجل الطالب':'حذف سجل الطالب'}</button></div>`:''}</td></tr>`:''}`).join('')}
    </tbody></table></div>`:`<p class="muted">${state.students.length?'لا توجد نتائج مطابقة للبحث.':'لم يسجّل أي طالب بعد. عند دخول الطلبة من الرابط ستظهر أسماؤهم ونتائجهم هنا مباشرة.'}</p>`}
  </div>`;
  $('#tSearch').oninput=e=>{state.tSearch=e.target.value;const pos=e.target.selectionStart;tResults(body);const el=$('#tSearch');el.focus();el.setSelectionRange(pos,pos)};
  body.querySelectorAll('tr.click').forEach(tr=>tr.onclick=()=>{state.tOpen=state.tOpen===tr.dataset.id?null:tr.dataset.id;state.delArm=null;tResults(body)});
  body.querySelectorAll('[data-del]').forEach(b=>b.onclick=async()=>{ if(state.delArm!==b.dataset.del){state.delArm=b.dataset.del;tResults(body);return} try{await state.db.doc('students/'+b.dataset.del).delete();state.delArm=null;state.tOpen=null;toast('حُذف سجل الطالب')}catch(e){toast('تعذّر الحذف')} });
  $('#csvBtn').onclick=exportCsv;
}
async function exportCsv(){
  const dl=await (window.claude?window.claude.use('downloads'):null);
  if(!dl){toast('التصدير غير متاح في هذا العرض');return}
  const st=allStages().filter(s=>stageQs(s.id).length), q=v=>'"'+String(v==null?'':v).replace(/"/g,'""')+'"';
  const head=['الاسم','الصف','المدرسة','الإجابات الصحيحة','عدد الإجابات','النسبة','المراحل المكتملة','آخر نشاط'].concat(st.map(s=>s.name+' (صح/كلي)'));
  const lines=[head.map(q).join(',')];
  state.students.forEach(s=>{const d=s.data,x=studentStats(d); lines.push([d.name,d.grade,d.school,x.C,x.A,x.pct+'%',x.doneN,fmtDate(d.updatedAt)].concat(st.map(g=>{const p=x.per.find(y=>y.id===g.id);return p?p.c+'/'+p.total:''})).map(q).join(','))});
  try{await dl.save({filename:'نتائج-درب-التميز.csv',data:'﻿'+lines.join('\r\n')})}catch(e){ if(e&&e.code!=='declined') toast('تعذّر حفظ الملف') }
}
function tAdd(body){
  const st=allStages();
  body.innerHTML=`<form class="card panel" id="addForm" autocomplete="off">
    <p class="muted">السؤال الذي تضيفينه يظهر للطلبة فورًا في المرحلة التي تختارينها. اختاري مرحلة جديدة لإضافة محطة تراثية جديدة إلى الدرب.</p>
    <div class="grid2">
      <label for="aSub">المادة<select id="aSub"><option value="m">رياضيات</option><option value="ar">اللغة العربية</option><option value="en">اللغة الإنجليزية</option><option value="x">أخرى</option></select></label>
      <label for="aStage">المرحلة<select id="aStage">${st.map(s=>`<option value="${esc(s.id)}">${esc(s.name)} (${stageQs(s.id).length})</option>`).join('')}<option value="__new">مرحلة جديدة…</option></select></label>
    </div>
    <div class="grid2" id="newStage" hidden>
      <label for="aPlace">المكان التراثي<select id="aPlace">${PLACES.map(p=>`<option>${esc(p)}</option>`).join('')}<option value="__other">مكان آخر…</option></select></label>
      <label for="aPlaceOther" id="otherWrap" hidden>اسم المكان<input type="text" id="aPlaceOther" maxlength="40"></label>
    </div>
    <label for="aPassage">نص أو فقرة مرافقة (اختياري)<textarea id="aPassage"></textarea></label>
    <label for="aQ">نص السؤال<textarea id="aQ"></textarea></label>
    <div class="opts" style="gap:8px">${[0,1,2,3].map(i=>`<div class="optrow"><input type="radio" name="aCor" value="${i}" id="aC${i}" aria-label="الإجابة الصحيحة ${i+1}" ${i===0?'checked':''}><input type="text" id="aO${i}" placeholder="الخيار ${i+1}" maxlength="300"></div>`).join('')}</div>
    <p class="muted">حدّدي الدائرة بجانب الإجابة الصحيحة.</p>
    <div class="err" id="addErr" role="alert"></div>
    <div class="row"><button class="btn primary" type="submit">حفظ السؤال</button></div></form>`;
  const sync=()=>{const n=$('#aStage').value==='__new';$('#newStage').hidden=!n;$('#otherWrap').hidden=!(n&&$('#aPlace').value==='__other')};
  $('#aStage').onchange=sync; $('#aPlace').onchange=sync;
  $('#addForm').onsubmit=async e=>{
    e.preventDefault();
    const sub=$('#aSub').value, qt=$('#aQ').value.trim(), os=[0,1,2,3].map(i=>$('#aO'+i).value.trim()), cor=+document.querySelector('input[name=aCor]:checked').value;
    let stage=$('#aStage').value;
    if(stage==='__new'){const pl=$('#aPlace').value==='__other'?$('#aPlaceOther').value.trim():$('#aPlace').value; if(!pl){$('#addErr').textContent='اكتبي اسم المكان التراثي.';return} stage='c:'+pl}
    if(!qt){$('#addErr').textContent='اكتبي نص السؤال.';return}
    if(os.some(x=>!x)){$('#addErr').textContent='اكتبي الخيارات الأربعة كاملة.';return}
    try{
      await state.db.collection('questions').add({stage,sub,q:qt,o:os,a:cor,lang:sub==='en'?'en':'ar',passage:$('#aPassage').value.trim(),ptitle:$('#aPassage').value.trim()?'النص المرافق':'',addedAt:Date.now(),addedBy:state.teacher?state.teacher.name:'المشرفة'});
      toast('أُضيف السؤال إلى الدرب'); tAdd(body);
    }catch(err){ $('#addErr').textContent=err&&err.code==='quota_exceeded'?'امتلأت مساحة الأسئلة. احذفي بعض الأسئلة القديمة.':'تعذّر حفظ السؤال. تأكدي أنكِ فاتحة الرابط وأنتِ مسجّلة الدخول في Claude.' }
  };
}
function tMine(body){
  const qs=state.customQs;
  body.innerHTML=`<div class="card panel">${qs.length?qs.map(q=>`<div class="qitem"><div><div class="crumbs"><span>${esc(SUBJ[q.sub]||'')}</span><span>·</span><span>${esc(stageName(q.stage))}</span>${q.addedBy?`<span>·</span><span>${esc(q.addedBy)}</span>`:''}</div><p>${esc(q.q)}</p><p class="muted">الصحيحة: ${esc(q.o[q.a])}</p></div><button class="btn small ghost" data-del="${esc(q.docId)}" type="button">${state.delArm===q.docId?'تأكيد الحذف':'حذف'}</button></div>`).join(''):'<p class="muted">لم تضيفي أي سؤال بعد. أسئلة الهيئة الأصلية تبقى كما هي دائمًا.</p>'}</div>`;
  body.querySelectorAll('[data-del]').forEach(b=>b.onclick=async()=>{ if(state.delArm!==b.dataset.del){state.delArm=b.dataset.del;tMine(body);return} try{await state.db.doc('questions/'+b.dataset.del).delete();state.delArm=null;toast('حُذف السؤال')}catch(e){toast('تعذّر الحذف')} });
}

/* ───────── التشغيل ───────── */
$('#logoFlag').innerHTML=flagSvg(44);
$('#musicBtn').onclick=()=>{ if(musicOn){stopMusic();lsSet('darb-prefs',{sfx:sfxOn,musicOff:true})}else{startMusic();lsSet('darb-prefs',{sfx:sfxOn,musicOff:false})} };
$('#sfxBtn').onclick=()=>{sfxOn=!sfxOn;lsSet('darb-prefs',{sfx:sfxOn,musicOff:!musicOn});syncAudioBtns(); if(sfxOn) sfxCorrect()};
$('#teacherBtn').onclick=()=>setScreen(((state.canEdit&&state.db)||state.teacher)?'teacher':'tlogin');
$('#homeBtn').onclick=()=>setScreen(state.profile.name?'trail':'welcome');

function firstGesture(){
  document.removeEventListener('pointerdown',firstGesture,true); document.removeEventListener('keydown',firstGesture,true);
  const p=lsGet('darb-prefs'); if(!(p&&p.musicOff)) startMusic();
}
document.addEventListener('pointerdown',firstGesture,true); document.addEventListener('keydown',firstGesture,true);
loadLocal(); syncAudioBtns();
state.screen='welcome'; render();

(async function connect(){
  const cl=window.claude; if(!cl||!cl.use){state.ready=true;renderChip();return}
  try{ state.userNs=await cl.use('user'); }catch(e){}
  try{ state.db=await cl.use('db'); }catch(e){}
  if(state.userNs){
    try{ state.uid=await state.userNs.id(); }catch(e){}
    try{ state.canEdit=!!(await state.userNs.canEdit()); }catch(e){}
    try{ state.canWrite=await state.userNs.can('data.write'); }catch(e){}
  }
  if(state.db){
    state.db.collection('questions').onSnapshot(snap=>{
      state.customQs=snap.docs.map(d=>Object.assign({id:'q_'+d.id,docId:d.id},d.data())).filter(q=>Array.isArray(q.o)&&q.o.length>=2).sort((a,b)=>(a.addedAt||0)-(b.addedAt||0));
      if(state.screen==='trail'||(state.screen==='teacher'&&state.tTab!=='add')) render();
    },()=>{});
    if(state.uid){
      try{
        const snap=await state.db.doc('students/'+state.uid).get();
        if(snap.exists){
          const d=snap.data();
          if((d.updatedAt||0)>(state.ts||0)){state.answers=d.answers||{};state.tries=d.tries||{};state.history=d.history||[];state.ts=d.updatedAt||0}
          if(!state.profile.name&&d.name) Object.assign(state.profile,{name:d.name,grade:d.grade||state.profile.grade,school:d.school||'',gender:d.gender||state.profile.gender});
          saveLocal();
        }
        if(state.profile.name) queueRemote();
      }catch(e){}
    }
  }
  state.ready=true;
  if(location.hash==='#teacher'&&state.screen==='welcome') state.screen=((state.canEdit&&state.db)||state.teacher)?'teacher':'tlogin';
  if(state.screen==='welcome'||state.screen==='trail'||state.screen==='teacher'||state.screen==='tlogin') render(); else renderChip();
})();
