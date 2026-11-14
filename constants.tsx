
import React from 'react';
import { Axis, Committee, Resource, StatData, NavLink, Leader, Partner } from './types';

// Icons
const HealthIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);
const EnvironmentIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.358 0 2.662-.354 3.777-1.002M12 21c-1.358 0-2.662-.354-3.777-1.002m7.554 0A9.004 9.004 0 0012 3c-1.358 0-2.662.354-3.777 1.002m7.554 0c.608.342 1.174.744 1.68 1.19m-9.438 0c-.608.342-1.174.744-1.68 1.19M12 6.75c.99 0 1.933.16 2.805.453m-5.61 0c.872-.293 1.815-.453 2.805-.453m4.228 9.566a9.004 9.004 0 00-8.456 0" />
  </svg>
);
const EducationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
  </svg>
);
const CommunityIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.023 1.527-1.76 2.65-2.082m-2.65 2.082l-2.28 2.28m2.28-2.28l-1.38-1.38m1.38 1.38l-1.38-1.38m-3.32 4.095a9.094 9.094 0 01-3.742-.479 3 3 0 014.682-2.72m7.5 2.962c-.57 1.023-1.527 1.76-2.65 2.082m2.65-2.082l2.28 2.28m-2.28-2.28l1.38 1.38m-1.38-1.38l1.38 1.38m-3.32-4.095a9.094 9.094 0 00-3.742-.479 3 3 0 00-4.682 2.72m-4.29-2.72c-.816.52-1.55.9-2.25 1.09m15.75-1.09c-.69-.19-1.42-.57-2.25-1.09m-11.25 0c.69.19 1.42.57 2.25 1.09" />
    </svg>
);
const EconomyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0h.75A.75.75 0 015.25 6v.75m0 0v.75a.75.75 0 01-.75.75h-.75m0 0H3.75m0 0h.75a.75.75 0 01.75.75v.75m0 0v.75a.75.75 0 01-.75.75h-.75M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const InfrastructureIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m1.5 0h1.5m-1.5 0l-.375-.625m.375.625l-.375-.625m0-3l-.375.625m0 0l.375.625m-3-1.5l.375-.625m0 0l.375.625m0 0l-.375.625m0 0l.375.625M6 12l.375-.625m0 0l.375.625m-3-1.5l.375-.625m0 0l.375.625m0 0l-.375.625m0 0l.375.625" />
    </svg>
);
const SafetyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);
const TourismIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a17.96 17.96 0 01-12.138-1.21 6 6 0 01-.42-10.53m12.558 11.74a17.981 17.981 0 001.913-5.226 6 6 0 00-9.42-2.131c.453.86.712 1.845.712 2.872v3.318a25.283 25.283 0 01-1.228 8.485" />
    </svg>
);
const InnovationIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a24.045 24.045 0 01-4.5 0m4.5 0a3.375 3.375 0 01-3.75 0m3.75 0a3.375 3.375 0 01-3.75 0m-4.5 0a24.045 24.045 0 01-4.5 0m4.5 0a12.06 12.06 0 01-4.5 0m-3.75-2.311a24.045 24.045 0 014.5 0m-4.5 0a12.06 12.06 0 014.5 0m-4.5 0a3.375 3.375 0 013.75 0m-3.75 0a3.375 3.375 0 013.75 0" />
    </svg>
);


// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: { en: 'Home', ar: 'الرئيسية' } },
  { id: 'leaders', label: { en: 'Leadership', ar: 'القيادة' } },
  { id: 'committees', label: { en: 'Committees', ar: 'اللجان' } },
  { id: 'axes', label: { en: 'Axes', ar: 'المحاور' } },
  { id: 'partners', label: { en: 'Partners', ar: 'الشركاء' } },
  { id: 'resources', label: { en: 'Resources', ar: 'المصادر' } },
  { id: 'about-logo', label: { en: 'About the Logo', ar: 'عن الشعار' } },
  { id: 'volunteers', label: { en: 'Join Us', ar: 'إنضم إلينا' } },
  { id: 'contact', label: { en: 'Contact', ar: 'اتصل بنا' } },
  { id: 'news', label: { en: 'News', ar: 'الأخبار' } },
];

export const LEADERS_DATA: Leader[] = [
    {
        id: '1',
        name: { en: 'H.E. Sheikh Mohammed bin Saif Abdullah Al Busaidi', ar: 'سعادة الشيخ محمد بن سيف عبدالله البوسعيدي' },
        role: { en: 'Wali of Salalah, Head of Salalah Health City', ar: 'والي صلالة رئيس مدينة صلالة الصحية' },
        imageUrl: 'https://lh3.googleusercontent.com/d/1zvWBrUUKGL4lxZft80jB3jzieZ9IW5q6',
        team: [
            { 
                en: 'Dr. Hani bin Ahmed bin Abdulrahman Al Qadi - Director General of Health Services in Dhofar Governorate', 
                ar: 'الدكتور/ هاني بن أحمد بن عبدالرحمن القاضي - المدير العام للمديرية العامة للخدمات الصحية بمحافظة ظفار' 
            },
            { 
                en: 'Mr. Musa bin Abdullah bin Saif Al Qasabi - Director General of Culture, Sports and Youth in Dhofar Governorate', 
                ar: 'الفاضل/ موسى بن عبدالله بن سيف القصابي - المدير العام للمديرية العامة للثقافة والرياضة والشباب بمحافظة ظفار' 
            },
            { 
                en: 'Eng. Rashid bin Saeed bin Hamad Al Ghafri - Director General of Agriculture, Fisheries and Water Resources', 
                ar: 'المهندس/ راشد بن سعيد بن حمد الغافري - المدير العام للمديرية العامة للثروة الزراعية والسمكية وموارد المياه' 
            },
            { 
                en: 'Mr. Munir bin Awad bin Yahya Al Jadyani - Director General of Health Affairs at Dhofar Municipality', 
                ar: 'الفاضل/ منير بن عوض بن يحيى الجدياني - المدير العام للمديرية العامة للشؤون الصحية ببلدية ظفار' 
            },
            { 
                en: 'Dr. Mizoon bint Bakhit bin Saeed Al Shahriya - Director General of Education in Dhofar Governorate', 
                ar: 'الدكتورة/ ميزون بنت بخيت بن سعيد الشحرية - المديرة العامة للمديرية العامة للتربية والتعليم بمحافظة ظفار' 
            },
            { 
                en: 'Mr. Tayea bin Salim bin Raghmish Al Junaibi - Acting Director General of Consumer Protection in Dhofar Governorate', 
                ar: 'الفاضل/ طايع بن سالم بن رغميش الجنيبي - المدير العام للمديرية العامة لحماية المستهلك بمحافظة ظفار بالندب' 
            },
            { 
                en: 'Mr. Badr bin Farish bin Mohammed Al Yahyaei - Director General of Social Development in Dhofar Governorate', 
                ar: 'الفاضل/ بدر بن فريش بن محمد اليحيائي - المدير العام للمديرية العامة للتنمية الاجتماعية بمحافظة ظفار' 
            },
            { 
                en: 'Mr. Ali bin Salim bin Muslim Bait Said - Acting Director General of Environment in Dhofar Governorate', 
                ar: 'الفاضل/ علي بن سالم بن مسلم بيت سعيد - المدير العام للمديرية العامة للبيئة بمحافظة ظفار بالندب' 
            },
            { 
                en: 'Lt. Col. Abdulaziz bin Saeed bin Abdullah Al Kiyumi - Officer of Salalah Police Station', 
                ar: 'المقدم/ عبدالعزيز بن سعيد بن عبدالله الكيومي - ضابط مركز شرطة صلالة' 
            },
            { 
                en: 'Ms. Noor bint Hassan bin Salim Al Ghassaniya - Head of Omani Women Association in Salalah', 
                ar: 'الفاضلة/ نور بنت حسن بن سالم الغسانية - رئيسة جمعية المرأة العمانية بولاية صلالة' 
            },
            { 
                en: 'Mr. Omar bin Ali bin Awad Al Shahri - Director of Community Service and Continuing Education Center at Dhofar University', 
                ar: 'الأستاذ/ عمر بن علي بن عوض الشحري - مدير مركز المجتمع والتعليم المستمر بجامعة ظفار' 
            },
            { 
                en: 'Eng. Mohammed bin Hussein bin Sahl Al Hafidh - Community Representative', 
                ar: 'المهندس محمد بن حسين بن سهل آل حفيظ - ممثل المجتمع' 
            },
            { 
                en: 'Mr. Salim bin Ahmed bin Mohammed Hardan - Rapporteur of Health Committees at DGHS', 
                ar: 'الفاضل/ سالم بن أحمد بن محمد حاردان - مقرر اللجان الصحية بالمديرية العامة للخدمات الصحية' 
            }
        ]
    },
    {
        id: '2',
        name: { en: 'Salim bin Ahmed bin Mohammed Hardan', ar: 'سالم بن أحمد بن محمد حاردان' },
        role: { en: 'Head of Executive Office', ar: 'رئيس المكتب التنفيذي' },
        imageUrl: 'https://lh3.googleusercontent.com/d/1Dt2av6P-DIKB9KYkCMchWRa-afPj9rmu',
        team: [
            { en: 'Dr. Mahad bin Isa bin Ali Shamas', ar: 'د. محاد بن عيسى بن علي شماس' },
            { en: 'Nasser bin Mohammed bin Saeed Tabook', ar: 'ناصر بن محمد بن سعيد تبوك' },
            { en: 'Musab bin Hussein bin Sahl Al Hafidh', ar: 'مصعب بن حسين بن سهل آل حفيظ' },
            { en: 'Asila bint Amer bin Salim Al Amriya', ar: 'أصيلة بنت عامر بن سالم العمرية' },
            { en: 'Laila bint Saeed bin Rashid Al Sarkhiya', ar: 'ليلى بنت سعيد بن راشد الصارخية' },
            { en: 'Hisham bin Abdullah bin Muftah Al Hajri', ar: 'هشام بن عبدالله بن مفتاح الحجري' },
            { en: 'Ghazi bin Hassan bin Awad Al Hajj', ar: 'غازي بن حسن بن عوض الحاج' },
            { en: 'Mona bint Ali bin Dahman Al Nahdiya', ar: 'منى بنت علي بن دحمان النهدية' },
            { en: 'Majid bin Saeed bin Awbed Ghawas', ar: 'ماجد بن سعيد بن عوبد غواص' },
            { en: 'Wafaa bint Abdullah bin Ali Al Aliyan', ar: 'وفاء بنت عبدالله بن علي العليان' }
        ]
    },
    {
        id: '3',
        name: { en: 'Dr. Hani bin Ahmed bin Abdulrahman Al Qadi', ar: 'د. هاني بن أحمد بن عبدالرحمن القاضي' },
        role: { en: 'Head of Healthy Lifestyles Committee', ar: 'رئيس لجنة أنماط الحياة الصحية' },
        imageUrl: 'https://lh3.googleusercontent.com/d/1mO46xvIpx20MPhFhaNqGHISprpk7xzKz',
        team: [
            { en: 'Dr. Hamoud bin Saeed bin Mohammed Al Fazari', ar: 'د. حمود بن سعيد بن محمد الفزاري' },
            { en: 'Dr. Ismail bin Mohammed Khair', ar: 'د. إسماعيل بن محمد خير' },
            { en: 'Dr. Idris bin Abdullah bin Rashid Al Juma', ar: 'د. إدريس بن عبد الله بن راشد آل جمعة' },
            { en: 'Dr. Abeer bint Salim bin Saad Al Muqaddam', ar: 'د. عبير بنت سالم بن سعد المقدم' },
            { en: 'Dr. Zainab bint Mohammed bin Saeed Al Nahdiya', ar: 'د. زينب بنت محمد بن سعيد النهدية' },
            { en: 'Dr. Khalid bin Muslim bin Mohammed Al Maashani', ar: 'د. خالد بن مسلم بن محمد المعشني' },
            { en: 'Ahmed bin Muslim bin Ahmed Tabook', ar: 'أحمد بن مسلم بن أحمد تبوك' },
            { en: 'Aisha bint Ahmed bin Isa Al Maashaniya', ar: 'عائشة بنت أحمد بن عيسى المعشنية' },
            { en: 'Alawiya bint Suhail bin Ahmed Al Mahriya', ar: 'علوية بنت سهيل بن أحمد المهرية' },
            { en: 'Mona bint Salim bin Ali Shamas', ar: 'منى بنت سالم بن علي شماس' },
            { en: 'Azzam bin Ali bin Saeed Al Yafai', ar: 'عزام بن علي بن سعيد اليافعي' },
            { en: 'Ali bin Mohammed bin Mahad Baqi', ar: 'علي بن محمد بن محاد باقي' },
            { en: 'Nayfa bint Saeed bin Ali Al Shanfariya', ar: 'نايفة بنت سعيد بن علي الشنفرية' },
            { en: 'Ahmed bin Mohammed bin Saeed Qaitoon', ar: 'أحمد بن محمد بن سعيد قيطون' },
            { en: 'Anis bin Hafidh bin Mansour Al Saranj', ar: 'أنيس بن حافظ بن منصور الصرنج' },
            { en: 'Ahmed bin Ali bin Salim Al Kathiri', ar: 'أحمد بن علي بن سالم الكثيري' },
            { en: 'Basim bin Jamaan Al Mas', ar: 'باسم بن جمعان أل ماس' },
            { en: 'Sameh bin Muslim bin Salim Al Basrawi', ar: 'سامح بن مسلم بن سالم البصراوي' },
            { en: 'Reem bint Ahmed bin Bakhit Al Baramiya', ar: 'ريم بنت أحمد بن بخيت البرعمية' },
            { en: 'Zainab bint Ahmed bin Saeed Al Shahriya', ar: 'زينب بنت أحمد بن سعيد الشحرية' },
            { en: 'Ali bin Mohammed bin Saeed Balhaf', ar: 'علي بن محمد بن سعيد بالحاف' }
        ]
    },
    {
        id: '4',
        name: { en: 'Badr bin Farish bin Mohammed Al Yahyaei', ar: 'بدر بن فريش بن محمد اليحيائي' },
        role: { en: 'Head of Social, Cultural and Youth Committee', ar: 'رئيس اللجنة الاجتماعية والثقافية والشبابية' },
        imageUrl: 'https://lh3.googleusercontent.com/d/1LWKp5N4YryT6QTJn5D2JLkdPSWo10Kp9',
        team: [
            { en: 'Khalid bin Ahmed bin Ali Tabook', ar: 'خالد بن احمد بن علي تبوك' },
            { en: 'Dr. Abdul Karim bin Ahmed bin Ali Al Mashaikhi', ar: 'د. عبد الكريم بن أحمد بن علي المشيخي' },
            { en: 'Amina bint Khalid bin Saeed Qatan', ar: 'أمينة بنت خالد بن سعيد قطن' },
            { en: 'Zubaida bint Ahmed bin Barham Ba Omar', ar: 'زبيدة بنت احمد بن برهام باعمر' },
            { en: 'Ali bin Mohsen bin Mohammed Al Ghassani', ar: 'علي بن محسن بن محمد الغساني' },
            { en: 'Murshid bin Mohammed bin Muslim Al Mashali', ar: 'مرشد بن محمد بن مسلم المسهلي' },
            { en: 'Mona bint Ali bin Dahman Al Nahdiya', ar: 'منى بنت علي بن دحمان النهدية' },
            { en: 'Omar bin Mohammed bin Ahmed Bait Ratna', ar: 'عمر بن محمد بن أحمد بيت رطنة' },
            { en: 'Noor bint Saeed bin Ali Al Noubiya', ar: 'نور بنت سعيد بن علي النوبية' },
            { en: 'Salim bin Suhail bin Mohammed Al Maashani', ar: 'سالم بن سهيل بن محمد المعشني' },
            { en: 'Mohammed bin Abdullah bin Saad Al Hazili', ar: 'محمد بن عبدالله بن سعد الهزيلي' },
            { en: 'Asmaa bint Suhail bin Ali Al Mahriya', ar: 'أسماء بنت سهيل بن علي المهرية' }
        ]
    },
    {
        id: '5',
        name: { en: 'Munir bin Awad bin Yahya Al Jadyani', ar: 'منير بن عوض بن يحيى الجدياني' },
        role: { en: 'Head of Environmental and Occupational Safety Committee', ar: 'رئيس اللجنة البيئية والسلامة المهنية' },
        imageUrl: 'https://lh3.googleusercontent.com/d/1rcv89gVvHbprty6NWV8mOESZIpOuGIN6',
        team: [
            { en: 'Salah bin Salim bin Ahmed Al Ajeeli', ar: 'صلاح بن سالم بن أحمد العجيلي' },
            { en: 'Bakhit bin Hassan bin Labakhit Fadhil', ar: 'بخيت بن حسن بن لبخيت فاضل' },
            { en: 'Saeed bin Mustahil bin Saeed Al Kathiri', ar: 'سعيد بن مستهيل بن سعيد الكثيري' },
            { en: 'Dr. Hussein bin Ali Al Mashhour Ba Omar', ar: 'الدكتور / حسين بن علي المشهور باعمر' },
            { en: 'Zakin bin Aman bin Khamis Koura', ar: 'زاكن بن أمان بن خميس كورع' },
            { en: 'Ali bin Mohammed bin Awad Al Shahri', ar: 'علي بن محمد بن عوض الشحري' },
            { en: 'Dr. Omar bin Mohammed bin Fadhl Ba Omar', ar: 'الدكتور/ عمر بن محمد بن فضل باعمر' },
            { en: 'Abdul Aziz bin Salim Al Mahri', ar: 'عبد العزيز بن سالم المهري' },
            { en: 'First Lt. Mohammed bin Saif Al Badi', ar: 'الملازم أول / محمد بن سيف البادي' },
            { en: 'Khalid bin Saeed Fadhil', ar: 'خالد بن سعيد فاضل' },
            { en: 'Mohammed bin Mahfoudh bin Khamis Al Obaid', ar: 'محمد بن محفوظ بن خميس أل عبيد' },
            { en: 'Qasim bin Saeed Al Yafai', ar: 'قاسم بن سعيد اليافعي' },
            { en: 'Eng. Muslim bin Saeed Jaaboub', ar: 'م. مسلم بن سعيد جعبوب' },
            { en: 'Eng. Salim bin Ali Al Shanfari', ar: 'م. سالم بن علي الشنفري' },
            { en: 'Mona bint Ali Salim Tabook', ar: 'منى بنت علي سالم تبوك' },
            { en: 'Fatima bint Mohammed Ghafram Al Shahriya', ar: 'فاطمة بنت محمد غفرم الشحرية' }
        ]
    },
    {
        id: '6',
        name: { en: 'Dr. Mizoon bint Bakhit bin Saeed Al Shahriya', ar: 'د. ميزون بنت بخيت بن سعيد الشحرية' },
        role: { en: 'Head of Media Committee', ar: 'رئيسة اللجنة الاعلامية' },
        imageUrl: 'https://lh3.googleusercontent.com/d/1Hmx6rmOSOSmsn-zoJP4Dtqq6RfYaMF_w',
        team: [
            { en: 'Ali bin Mohammed bin Isa Jaaboub', ar: 'علي بن محمد بن عيسى جعبوب' },
            { en: 'Salim bin Saeed bin Salim Tabook', ar: 'سالم بن سعيد بن سالم تبوك' },
            { en: 'Sami bin Mohammed bin Jamaan Obaid', ar: 'سامي بن محمد بن جمعان عبيد' },
            { en: 'Duaa bint Salim Al Kathiriya', ar: 'دعاء بنت سالم الكثيرية' },
            { en: 'Bakhit bin Ali bin Muslim Al Shahri', ar: 'بخيت بن علي بن مسلم الشحري' },
            { en: 'Rashid bin Salim bin Mubarak Maghrab', ar: 'رشيد بن سالم بن مبارك مغراب' },
            { en: 'Adel bin Saeed bin Awad Al Yafai', ar: 'عادل بن سعيد بن عوض اليافعي' },
            { en: 'Bakhit bin Salim bin Khwaitim Masan', ar: 'بخيت بن سالم بن خويتم مــسن' },
            { en: 'Osama bin Bashir bin Faraj Bait Obaidoon', ar: 'أسامة بن بشير بن فرج بيت عبيدون' },
            { en: 'Hiba bint Ali bin Mahmoud', ar: 'هبة بنت علي بن محمود' },
            { en: 'Salim bin Mohammed bin Abdullah Boudhar', ar: 'سالم بن محمد بن عبدالله بوذار' },
            { en: 'Haila bint Ahmed bin Ramis Al Rawas', ar: 'هائلة بنت أحمد بن رامس الرواس' }
        ]
    },
    {
        id: '7',
        name: { en: 'Musa bin Abdullah bin Saif Al Qasabi', ar: 'موسى بن عبدالله بن سيف القصابي' },
        role: { en: 'Head of Resource Support and Attraction Committee', ar: 'رئيس لجنة الدعم واستقطاب الموارد' },
        imageUrl: 'https://lh3.googleusercontent.com/d/1PoGTj8oLg4loZqhnhmm6fFjMlsqs7jh-',
        team: [
            { en: 'Muslim bin Salim bin Suhail Jaaboub', ar: 'مسلم بن سالم بن سهيل جعبوب' },
            { en: 'Maher bin Suhail bin Salim Al Kathiri', ar: 'ماهر بن سهيل بن سالم الكثيري' },
            { en: 'Yousef bin Ahmed bin Salim Al Mashali', ar: 'يوسف بن أحمد بن سالم المسهلي' },
            { en: 'Ahmed bin Khalid bin Mohammed Al Mashaikhi', ar: 'أحمد بن خالد بن محمد المشيخي' },
            { en: 'Abdullah bin Bakhit bin Ali Al Rawas', ar: 'عبدالله بن بخيت بن علي الرواس' },
            { en: 'Ahmed bin Ali bin Saeed Zabanoot', ar: 'أحمد بن علي بن سعيد زعبنوت' }
        ]
    }
];


// Mock Data
export const COMMITTEES_DATA: Committee[] = [
  {
    id: 'executive',
    name: { en: 'Executive Office Committee', ar: 'لجنة المكتب التنفيذي' },
    axes: [
      { label: { en: 'Axis One: Community organization and mobilization for health and development', ar: 'المحور الأول: تنظيم المجتمع وتعبئته من أجل الصحة والتنمية' }, id: 'community' },
      { label: { en: 'Axis Two: Intersectoral cooperation, partnership and advocacy', ar: 'المحور الثاني: التعاون والشراكة والدعوة بين القطاعات' }, id: 'innovation' },
      { label: { en: 'Axis Three: Community Information Center', ar: 'المحور الثالث: مركز المعلومات المجتمعي' }, id: 'infrastructure' },
    ]
  },
  {
    id: 'environmental',
    name: { en: 'Environmental, Occupational Safety, Food Safety and Air Pollution Committee', ar: 'اللجنة البيئية والسلامة المهنية وسلامة الغذاء وتلوث الهواء' },
    axes: [
      { label: { en: 'Axis Four: Water, sanitation, food safety and air pollution', ar: 'المحور الرابع: المياه والصرف الصحي وسلامة الغذاء وتلوث الهواء' }, id: 'environment' }
    ]
  },
  {
    id: 'lifestyles',
    name: { en: 'Healthy Lifestyles Committee', ar: 'لجنة أنماط الحياة الصحية' },
    axes: [
        { label: { en: 'Axis Five: Health Development', ar: 'المحور الخامس: التنمية الصحية' }, id: 'health' },
        { label: { en: 'Axis Six: Emergency preparedness and response', ar: 'المحور السادس: الاستعداد للطوارئ والاستجابة لها' }, id: 'safety' },
    ]
  },
  {
    id: 'social',
    name: { en: 'Social, Cultural and Youth Committee', ar: 'اللجنة الاجتماعية والثقافية والشبابية' },
    axes: [
      { label: { en: 'Axis Seven: Education and literacy', ar: 'المحور السابع: التعليم ومحو الأمية' }, id: 'education' },
      { label: { en: 'Axis Eight: Skills Development, Vocational Training and Capacity Building', ar: 'المحور الثامن: تنمية المهارات والتدريب المهني وبناء القدرات' }, id: 'economy' },
      { label: { en: 'Axis Nine: Micro-credit activities', ar: 'المحور التاسع: أنشطة القروض الصغيرة' }, id: 'tourism' }
    ]
  },
  {
    id: 'resources',
    name: { en: 'Resource Support and Attraction Committee', ar: 'لجنة دعم واستقطاب الموارد' },
    axes: [
      { label: { en: 'Securing financial and material resources for the initiative.', ar: 'تأمين الموارد المالية والمادية للمبادرة.' } },
      { label: { en: 'Building partnerships with public and private sector entities.', ar: 'بناء شراكات مع كيانات القطاعين العام والخاص.' } },
    ]
  },
  {
    id: 'media',
    name: { en: 'Media Committee', ar: 'اللجنة الاعلامية' },
    axes: [
      { label: { en: 'Managing public relations and official communications.', ar: 'إدارة العلاقات العامة والاتصالات الرسمية.' } },
      { label: { en: 'Promoting the initiative\'s activities and achievements through various media channels.', ar: 'الترويج لأنشطة وإنجازات المبادرة عبر القنوات الإعلامية المختلفة.' } },
    ]
  }
];

export const AXES_DATA: Axis[] = [
  { 
    id: 'community', 
    title: { en: 'Community Organization and Mobilization for Health and Development', ar: 'تنظيم المجتمع وتعبئته من أجل الصحة والتنمية' }, 
    description: { en: 'Engaging and empowering the community to take an active role in health and development initiatives.', ar: 'إشراك وتمكين المجتمع للقيام بدور فاعل في مبادرات الصحة والتنمية.' }, 
    icon: CommunityIcon, 
    criteriaCount: 7,
    criteria: [
      {
        text: { 
          ar: 'اختيار ممثلي المجموعة / المتطوعين وتدريبهم على تقييم الاحتياجات وتحديد الأولويات وتحليل البيانات وإعداد المشروع وآليات الرصد والتسجيل والتقارير.', 
          en: 'Selection and training of group representatives/volunteers on needs assessment, priority setting, data analysis, project preparation, monitoring, recording, and reporting mechanisms.' 
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1oUqgUnrwGYgzEQAxtSRMNu2qR4E6mTN_', type: 'view' }
        ]
      },
      {
        text: { 
          ar: 'تم تشكيل لجنة تنسيق المدينة الصحية، وتسجيلها لدى السلطات المحلية باعتبارها منظمة مجتمعية أو منظمة غير حكومية، وتم توجيه الأعضاء بشأن مهامهم ومسؤولياتهم.', 
          en: 'A Healthy City Coordination Committee has been formed and registered with local authorities as a community-based or non-governmental organization, and members have been oriented on their roles and responsibilities.' 
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1GUJ9N0Yu3q6rsIaCzZ3BvBCTHx3hYq1k', type: 'view' }
        ]
      },
      {
        text: { 
          ar: 'ممثلو المجتمع / المتطوعون هم شركاء نشطين في مجال الصحة المحلية والتخطيط والإجراءات الاجتماعية مع ضمان استخدام الرعاية الصحية والخدمات الاجتماعية الأخرى في المجموعات الخاصة بهم.', 
          en: 'Community representatives/volunteers are active partners in local health planning and social actions, ensuring the utilization of healthcare and other social services within their groups.' 
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/12XLUbRQxQdWDltQRpZJiJsf7q9zv4aBp', type: 'view' }
        ]
      },
      {
        text: { 
          ar: 'إشراف مراقبو لجنة تنسيق المدينة الصحية على المشاريع الاجتماعية والاقتصادية، وسجلات الإنجازات والمعوقات ويحددون الحلول المحلية للمشكلات المحلية.', 
          en: 'Observers from the Healthy City Coordination Committee supervise socio-economic projects, record achievements and obstacles, and identify local solutions to local problems.' 
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/17xull7WDWTILXn-y3PnfN6YIXlaqMALK', type: 'view' }
        ]
      },
      {
        text: { 
          ar: 'تبحث لجنة تنسيق المدينة الصحية عن الموارد وتبني علاقات مع الشركاء المحتملين لمزيد من التنمية في مناطقهم المحلية.', 
          en: 'The Healthy City Coordination Committee seeks resources and builds relationships with potential partners for further development in their local areas.' 
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1pCMfZfSu69nMAwox6YBG1dZXqS8m8k-J', type: 'view' }
        ]
      },
      {
        text: { 
          ar: 'تم إنشاء أو التخطيط لمركز اجتماعي أو لاستخدامات مختلفة وفقاً لاحتياجات المجتمع (على سبيل المثال: عقد اجتماعات المجتمع وإجراء التدريب المهني، تقديمه بمثابة مركز معلومات للمجتمع أو عقد الفعاليات المحلية الثقافية والوطنية والدينية ... الخ).', 
          en: 'A community center or multi-use facility has been established or planned according to community needs (e.g., holding community meetings, conducting vocational training, serving as a community information center, or hosting local cultural, national, and religious events, etc.).' 
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1nAtgKjelPGYkhuj-E6j036AV-n9_TiUD', type: 'view' }
        ]
      },
      {
        text: { 
          ar: 'تم وضع وتسجيل المرأة والمجموعات الشبابية كمساهمون في تدابير التنمية المحلية.', 
          en: 'Women and youth groups have been established and registered as contributors to local development measures.' 
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1C-tD2EP00FnOyy4A3_8cfiOE5HnrT7Op', type: 'view' }
        ]
      }
    ] 
  },
  { 
    id: 'innovation', 
    title: { en: 'Intersectoral Cooperation, Partnership, and Advocacy', ar: 'التعاون والشراكة والدعوة بين القطاعات' }, 
    description: { en: 'Building strong partnerships across various sectors to advocate for and achieve health goals.', ar: 'بناء شراكات قوية عبر مختلف القطاعات للدعوة وتحقيق الأهداف الصحية.' }, 
    icon: InnovationIcon, 
    criteriaCount: 7,
    criteria: [
      {
        text: {
          ar: 'تم ترشيح أعضاء لجنة تنسيق المدينة الصحية رسمياً من قبل مختلف القطاعات.',
          en: 'Members of the Healthy City Coordination Committee were officially nominated by various sectors.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1zK8JGmlo1YG2Y-moQtCZak2chhL_j8Gv', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تشكيل لجنة تنسيق المدينة الصحية تحت قيادة رئيس بلدية أو محافظ، وتضع أعضاءها من ممثلي جميع القطاعات ذات الصلة. ويتم تسجيل محاضر جميع الاجتماعات وإعداد تقارير بها.',
          en: 'The Healthy City Coordination Committee was formed under the leadership of a mayor or governor, comprising members representing all relevant sectors. Minutes of all meetings are recorded and reported.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1euWh3dex4f4gNy9vK1zjPOc5Jn-reCzL', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تعيين منسق رسمي لبرنامج المدينة الصحية وتوفير عدد كافٍ من الموظفين والحيز المادي والمرافق.',
          en: 'An official coordinator for the Healthy City program was appointed, and sufficient staff, physical space, and facilities were provided.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/15QRNTKbEMsKMI5w1ML_--Sbo-0Ygc5rP', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يجتمع أعضاء فريق القطاعات المشتركة مع لجنة تنسيق المدينة الصحية وتقديم المشورة الفنية والدعم للمجتمع.',
          en: 'Members of the intersectoral team meet with the Healthy City Coordination Committee to provide technical advice and support to the community.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1iRtBBiN4UkYALhUJ1gF7sOF-wUF2hgi6', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تحديد الشركاء المحتملين والاتصال بهم ويجري العمل على مشروع مشترك واحد على الأقل مع الشركاء في موقع تنفيذ المدينة الصحية.',
          en: 'Potential partners have been identified and contacted, and work is underway on at least one joint project with partners in the Healthy City implementation site.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1RV73uRmCL5zCnnmjijK5bFz1e3Yuo6ph', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تسجل القضايا المالية المتعلقة بأنشطة مشتركة وإعداد تقارير عنها ومشاركتها مع المجتمع من أجل الشفافية.',
          en: 'Financial issues related to joint activities have been recorded, reported, and shared with the community for transparency.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1QwwVJTNt96hBAw5eT30ga8B_4G3WBA7D', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم توثيق قصص النجاح ونشرها واستخدامها من أجل الدعوة. تم وضع إستراتيجية وأدوات شاملة للدعوة مع الأخذ بعين الاعتبار للثقافة المحلية ويجري تنفيذها من قبل لجنة تنمية المجتمع المحلي.',
          en: 'Success stories have been documented, published, and used for advocacy. A comprehensive advocacy strategy and tools have been developed taking local culture into account and are being implemented by the Local Community Development Committee.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/15mDKW696lig1okn6Nw6MK2fhiVmoymoH', type: 'view' }
        ]
      }
    ]
  },
  { 
    id: 'infrastructure', 
    title: { en: 'Community Information Center', ar: 'مركز المعلومات المجتمعي' }, 
    description: { en: 'Providing accessible and reliable information to support community health and decision-making.', ar: 'توفير معلومات موثوقة وسهلة الوصول لدعم صحة المجتمع واتخاذ القرار.' }, 
    icon: InfrastructureIcon, 
    criteriaCount: 5,
    criteria: [
      {
        text: {
          ar: 'تم إنشاء مركز المعلومات المجتمعية ويتم تدريب ممثلي المجتمع/المتطوعين وأعضاء الفريق المشترك بين القطاعات لجمع المعلومات الأساسية وتحليلها واستخدامها لتخطيط التنمية المحلية.',
          en: 'A Community Information Center (CIC) has been established, and community representatives/volunteers and intersectoral team members are trained to collect, analyze, and use baseline data for local development planning.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1CTN4yOYdAZu9WuNPE2uaiuSvnWkdRNGU', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يتم عرض المعلومات الرئيسية في مركز المعلومات المجتمعية أو المكتب المحلي لبرنامج المدينة الصحية ومشاركتها مع المجتمع والقطاعات/الشركاء الآخرين المعنيين.',
          en: 'Key information is displayed at the CIC or the local Healthy City program office and shared with the community and other relevant sectors/partners.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1gPFo51Bro9N-e4fB4MyjAIRfadWSIDv3', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم استخدام المعلومات الأساسية لأغراض الدعوة والرصد من قبل لجنة تنمية المجتمع المحلي وأصحاب المصلحة الآخرين.',
          en: 'Baseline data has been used for advocacy and monitoring purposes by the Community Development Committee and other stakeholders.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1icd0mk4iqv-DUH1Kof7ZXYDsO4IGLVQ1', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'أشكال ونتائج المسح الأساسي والمعلومات بشأن المشاريع الحالية موثقة توثيقاً جيداً حتى الآن ومتوفرة لدى لجنة تنمية المجتمع المحلي ومركز تنسيق المدينة الصحية.',
          en: 'Baseline survey forms/results and information on current projects are well-documented and available with the Community Development Committee and the Healthy City Coordination Center.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1Azw8J31a4pxik-sk4GE5HBSPHC7RdlnA', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم إنشاء ملف تعريف للمدينة، ويتم تحديثه واستخدامه بانتظام لأغراض التخطيط والرصد.',
          en: 'A city profile has been created, is regularly updated, and is used for planning and monitoring purposes.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1htYIBoupVDoCys0Fn83_zQ1AV2q3zIYa', type: 'view' }
        ]
      }
    ]
  },
  { 
    id: 'environment', 
    title: { en: 'Water, Sanitation, Food Safety, and Air Pollution', ar: 'المياه والصرف الصحي وسلامة الغذاء وتلوث الهواء' }, 
    description: { en: 'Ensuring access to clean water, sanitation, safe food, and addressing air quality.', ar: 'ضمان الحصول على مياه نظيفة وصرف صحي وغذاء آمن ومعالجة جودة الهواء.' }, 
    icon: EnvironmentIcon, 
    criteriaCount: 11,
    criteria: [
      {
        text: {
          ar: 'موقع تنفيذ البرنامج نظيف وفيه ما يكفي من المساحات الخضراء.',
          en: 'The program implementation site is clean and has sufficient green spaces.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1fp61kXSwvWpzsj2XMR0Pixogi9_rRLVp', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم وضع نظام فعال لإدارة النفايات الصلبة على مستوى المجتمع في موقع تنفيذ البرنامج.',
          en: 'An effective solid waste management system has been established at the community level in the program implementation site.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1YFc_A6Ie6U1bCwFb3ExFyW-f2Zco74nG', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تعيين وحماية مصادر المياه. تم وضع خطة لمعالجة المياه، ولجنة تنسيق المدينة الصحية على علم بذلك.',
          en: 'Water sources have been designated and protected. A water treatment plan has been developed, and the Healthy City Coordination Committee is aware of it.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1G-OGR8EvSzhXN41zZVr_ceVjrTB5Dn7k', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تحصل جميع الأسر على وصول مستدام إلى مياه شرب آمنة وخدمات صرف صحي أساسية. وهم يدركون المخاطر المرتبطة بالمياه غير الآمنة ومعرفة كيفية تنقية المياه باستخدام ما هو متاح محلياً.',
          en: 'All households have sustainable access to safe drinking water and basic sanitation services. They are aware of the risks associated with unsafe water and know how to purify water using what is locally available.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1LwiGZZ0OOM76pOHL98vy-jOOeuidhezH', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تدريب ممثلي المجتمع / المتطوعين في الحفاظ على أوضاع بيئية / صحية سليمة والتدابير ذات الصلة في متناول الجمهور مثل أماكن السوق الصحية والمستشفيات الصحية، والمدارس الصحية ... الخ.',
          en: 'Community representatives/volunteers have been trained in maintaining sound environmental/health conditions and relevant measures accessible to the public, such as healthy marketplaces, healthy hospitals, healthy schools, etc.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1HGzNTAWISCtmdkpcLxL67ltqNoOX5BVj', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يشارك المجتمع في مجال سلامة الأغذية وتتم مراقبة جميع محلات/أسواق الأغذية الصحية من قبل دوائر وطنية للسلامة الغذائية.',
          en: 'The community participates in food safety, and all healthy food shops/markets are monitored by national food safety departments.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/13igCQiiSgn_lx5NcJCwVBMfdtWtY52MV', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'أسواق الغذاء الصحي سهلة الوصول لبيع المنتجات الأساسية مثل الملح المعالج باليود.',
          en: 'Healthy food markets are easily accessible for selling basic products such as iodized salt.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1bzwaOvE0n1PyJuTviBXd2CQP1t23sDeU', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يحظر التدخين في الأماكن المغلقة والأماكن العامة، وقد تم وضع واعتماد إنشاء مدينة خالية من التدخين.',
          en: 'Smoking is prohibited in enclosed and public places, and the establishment of a smoke-free city has been developed and approved.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1PFFfHCq_vA4dlm_bnvgF3hy0CeZT9uxa', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تأسيس مركز لإدارة نوعية على الأساس المجتمعي في موقع تنفيذ البرنامج المدينة الصحية (يشمل البلدية) لضمان أن يتم الرصد المنظم لتلوث الهواء. يدرك المجتمع مخاطر تلوث الهواء.',
          en: 'A community-based quality management center has been established at the Healthy City program implementation site (including the municipality) to ensure organized monitoring of air pollution. The community is aware of air pollution risks.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1t3_B-AUGG7oTfnrG29FXMqdUVo7H8rlv', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يقوم مخططو المدن بتنفيذ التدابير التي تمنع تلوث الهواء.',
          en: 'City planners implement measures that prevent air pollution.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1NbWU_7jaQ7XRXBU4Ch_ZsMgiLS5mQU5J', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يجري تقييم لأثر مخططات تقسيم المناطق الحضرية والإسكان على تلوث الهواء قبل اعتمادها. تضم مشاريع الإسكان هذه، على سبيل المثال، وصول الأسر إلى وقود نظيف وتهوية وتحسين مواقد المطبخ وأجهزة التدفئة.',
          en: 'The impact of urban zoning and housing plans on air pollution is assessed before approval. These housing projects include, for example, household access to clean fuel, ventilation, and improved kitchen stoves and heating appliances.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1hEkmPxSWcOhAd9KCOvqrtZvyRu7suYGk', type: 'view' }
        ]
      }
    ]
  },
  { 
    id: 'health', 
    title: { en: 'Health Development', ar: 'التنمية الصحية' }, 
    description: { en: 'Focuses on improving community health services, awareness, and well-being.', ar: 'تركز على تحسين الخدمات الصحية المجتمعية والوعي والرفاهية.' }, 
    icon: HealthIcon, 
    criteriaCount: 26,
    criteria: [
      {
        text: {
          ar: 'تم تدريب ممثلي المجتمع ومتطوعي الصحة على المسائل الصحية ذات الأولوية والبرامج ذات الصلة بالصحة. وهم ينشطون في مجال تعزيز الصحة والتعليم ويتابعون الإجراءات من خلال اتصال منتظم مع مزودي الرعاية الصحية المحلية.',
          en: 'Community representatives and health volunteers have been trained on priority health issues and health-related programs. They are active in health promotion and education and follow up on actions through regular contact with local healthcare providers.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1XWFx92lYVCxL-cl89_8uBfXzCvUGnekT', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يعمل ممثلي المجتمع ومتطوعي الصحة على تسجيل والإبلاغ عن المواليد والوفيات والإحصاءات الحيوية الأخرى.',
          en: 'Community representatives and health volunteers work on registering and reporting births, deaths, and other vital statistics.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1Hx0snMuYBAhYIjqoITYfMy9sWE3q1I-n', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'أنشأت لجنة تنسيق المدينة الصحية، بالتعاون مع مزودي خدمات الرعاية الصحية، نظم الإحالة المستدامة.',
          en: 'The Healthy City Coordination Committee, in collaboration with healthcare providers, has established sustainable referral systems.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1Dmh2sqTrAhX716jCOZVZ7RRwTpYIWKAH', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يتم تدريب المجتمع وإشراكه بصورة نشطة في مشاريع البحوث القائمة على المشاركة المجتمعية.',
          en: 'The community is trained and actively involved in community-based participatory research projects.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1NTShKndrLujZDk_KuY0UD5uiZEMpvy3I', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تشكيل لجنة فرعية تابعة للجنة تنسيق المدينة الصحية لإدارة والإشراف على خدمات الرعاية الصحية المحلية.',
          en: 'A subcommittee of the Healthy City Coordination Committee has been formed to manage and supervise local healthcare services.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/14a7iMl4srhJ0pEEqaegCy4-kf7bR6ygG', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تتوفر جميع الأدوية الأساسية واللقاحات والأدوات الطبية (حسب احتياجات النظام الصحي المحلي) في المرافق الصحية بالمناطق الحضرية.',
          en: 'All essential medicines, vaccines, and medical tools (according to local health system needs) are available in urban health facilities.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1lI1E27BY-nO3RoqyMpb1WWAeXYFVROfj', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يتم تقييم جودة خدمات الرعاية الصحية، ورضا العملاء بالخدمات، ومستوى تدريب موظفي الرعاية الصحية، والتفاعلات بين مزودي الرعاية الصحية والمجتمع واتخاذ الإجراءات وفقاً لذلك.',
          en: 'The quality of healthcare services, customer satisfaction, healthcare staff training levels, and interactions between providers and the community are evaluated, and actions are taken accordingly.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/136FXzngnsPj62viKGWeWvgvlMiOg3gWO', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تتلقى جميع النساء الحوامل الرعاية قبل الولادة في الوقت المناسب (بما في ذلك لقاحات الكزاز). وقد تم إعداد خطة الولادة الآمنة لجميع النساء الحوامل في المرحلة الثالثة من الحمل وتصل جميع النساء إلى ولادة آمنة ونظيفة، حيث يتم ذلك بمساعدة قابلات ماهرات.',
          en: 'All pregnant women receive timely antenatal care (including tetanus vaccines). A safe birth plan has been prepared for all pregnant women in the third trimester, and all women have access to safe and clean delivery assisted by skilled midwives.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1VT_VKuwFlSkKKVWF78Ntw1Uaw6v7kyCu', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تتلقى جميع الأمهات رعاية ما بعد الولادة لمدة 40 يوماً على الأقل بعد الولادة.',
          en: 'All mothers receive postnatal care for at least 40 days after delivery.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1A6SMEOX8xH8dTyPpuVQAP2zfYx1OZNty', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تحصين جميع الأطفال تماماً ضد الأمراض التي يمكن الوقاية منها باللقاحات بعمر سنة واحدة.',
          en: 'All children are fully immunized against vaccine-preventable diseases by one year of age.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1EuwdWYNKz33JpFP77NxAkfG1PAfezYQO', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تسجيل جميع الأطفال حديثي الولادة من قبل ممثلي المجتمع ومتطوعي الصحة وتم تلقيحهم عند الولادة وخلال السنة الأولى من الحياة وفقاً لجدول برنامج التحصين الوطني الموسع (برنامج التحصين الموسع).',
          en: 'All newborns are registered by community representatives and health volunteers and vaccinated at birth and during the first year of life according to the National Extended Program on Immunization (EPI) schedule.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1fuwVFEOt7u2P5EVJZjaxoRRgnL6Bk78h', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'لجنة تنسيق المدينة الصحية، وممثلو المجتمع ومتطوعو الصحة يشاركون بنشاط في حملات شلل الأطفال (في حال تم إجراء أي منها).',
          en: 'The Healthy City Coordination Committee, community representatives, and health volunteers participate actively in polio campaigns (if any are conducted).'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1-4aUlvJAdL8C_0dXwZ1A3VwDRHNb_Hr2', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'لجميع الأطفال تحت سن 5 سنوات حق الحصول على خدمات الرعاية الصحية المنتظمة (بما في ذلك مراقبة النمو) ونظام متابعة الأداء في المكان.',
          en: 'All children under 5 years of age have access to regular healthcare services (including growth monitoring), and a performance follow-up system is in place.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1TkbiPaKKDBehv_VDGW3-6KwM7hecyYTA', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تحديد الأطفال المصابين بسوء التغذية والأمهات اللاتي يعانين من نقص فيتامين ألف وأنيميا نقص الحديد وتلقي العلاج والمتابعة والرعاية.',
          en: 'Malnourished children and mothers suffering from Vitamin A deficiency and iron deficiency anemia have been identified and are receiving treatment, follow-up, and care.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1WNPi5JTe3rZ5TcWqJGBa52tZv6hPZPA9', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'ويجري تنفيذ استراتيجية المعالجة قصيرة الأمد لمرض السل باستخدام ممثلي المجتمع المدربين أو المتطوعين كشركاء في العلاج.',
          en: 'The DOTS (Directly Observed Treatment, Short-course) strategy for TB is being implemented using trained community representatives or volunteers as treatment partners.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1Hr1Ri2t0ZdEIup9INtkTuc7iUV0w6WF_', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يجري تنفيذ برنامج مكافحة الملاريا (إذا لزم الأمر) بمشاركة نشطة من ممثلي المجتمع أو المتطوعين وقيادة لجان تنمية المجتمع المحلي.',
          en: 'A malaria control program is being implemented (if applicable) with active participation from community representatives/volunteers and leadership from local community development committees.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1sBgeiQXXV2BpemJzqG8mTBQLnHU6J1Zx', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يقوم ممثلو المجتمع ومتطوعي الصحة بالإبلاغ عن جميع الحالات السل والملاريا المشتبه فيها وفيروس نقص المناعة البشرية وغيره من الأمراض المعدية إلى أقرب مرفق صحي وتنفيذ أنشطة المتابعة وفقاً للتدريب الذي تلقوه من العاملين في المرافق الصحية وضمان أن يشارك أفراد الأسرة في الأنشطة البدنية الصحية الأسبوعية.',
          en: 'Community representatives and health volunteers report all suspected cases of TB, malaria, HIV, and other infectious diseases to the nearest health facility, carry out follow-up activities as trained by health workers, and ensure family members participate in weekly healthy physical activities.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1BBPg2smraqr1tu67YxGSSaYuRHvHXiAP', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم إبلاغ المجتمعات حول طرق انتقال فيروس نقص المناعة البشرية / الإيدز وتدابير الوقاية منها. ويتم دعم جميع الحالات التي تم تشخيصها من فيروس نقص المناعة البشرية / الإيدز من قبل ممثلي المجتمع ومتطوعي الصحة.',
          en: 'Communities have been informed about HIV/AIDS transmission modes and prevention measures. All diagnosed HIV/AIDS cases are supported by community representatives and health volunteers.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/14rk9CKfLdcfHVmiYrrXWN7SHxl1maYxh', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يتم تحديد جميع المرضى من ذوي الأمراض المزمنة (مثل المصابين بداء السكري وارتفاع ضغط الدم وأمراض القلب والأوعية الدموية والسرطان واضطرابات الكلى ... الخ)، وتم وضع خطة لمتابعتهم في مكان ممثلي المجتمع ومتطوعي الصحة، الذين يضمنون بأن يتلقى جميع الأفراد الفحوصات الطبية والدواء في الوقت المناسب.',
          en: 'All patients with chronic diseases (such as diabetes, hypertension, cardiovascular diseases, cancer, kidney disorders, etc.) have been identified, and a follow-up plan is in place with community representatives and health volunteers, ensuring all individuals receive timely medical check-ups and medication.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1XRHyx2C8CA2eRna01e6B-3zgWGe1-hrs', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تحديد جميع حالات الاضطرابات النفسية وتعاطي مواد الإدمان وتلقي الدعم والمساعدة من المجتمع. وتم تنفيذ الأنشطة التعليمية في المجتمع للحد من وصمة العار.',
          en: 'All cases of mental disorders and substance abuse have been identified and are receiving support and assistance from the community. Educational activities have been implemented in the community to reduce stigma.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1dUQDGz6-gFBbCbOCy59NtIHlyzSZ2R7T', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تحديد كافة الأشخاص من ذوي الإعاقات الجسدية وتلقي الدعم المجتمعي لضمان قدرتهم على كسب العيش.',
          en: 'All persons with physical disabilities have been identified and are receiving community support to ensure their ability to earn a living.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1TCzgg-hCvg94Fx4Up7xnDm3UiNeHTX_V', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تحديد المناطق الخطرة في مواقع البرنامج وتم اتخاذ الإجراءات / التدابير المناسبة للحد من الوفيات والإصابات والإعاقات الناجمة عن الحوادث.',
          en: 'Hazardous areas in program sites have been identified, and appropriate actions/measures have been taken to reduce deaths, injuries, and disabilities resulting from accidents.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/11gjyhfjPlRh6hl6hs2JhLy5EG5zO1JlX', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'منطقة تنفيذ البرنامج خالية من الجريمة والعنف والتمييز ضد النساء والرجال والمجموعات العرقية.',
          en: 'The program implementation area is free from crime, violence, and discrimination against women, men, and ethnic groups.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1YQprteYgXk8r2BFq2tddKPreihRVbWX0', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يتبنى المجتمع ويعزز تنمية الطفولة المبكرة والدور والمجتمعات الصديقة للطفل.',
          en: 'The community adopts and promotes Early Childhood Development and Child-Friendly Homes and Communities.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1lc-KBl7e-HG3tL78e0GDAW9DKHTPD6j_', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'العمل على مبادرة المدرسة الصحية في جميع المدارس بمواقع تنفيذ البرنامج.',
          en: 'Work on the Health Promoting Schools initiative in all schools within the program implementation sites.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1rnQZO-mngb7ykH6cH5uAZ_wwG0pumzfI', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'إجراءات الصحة والسلامة المهنية (وخاصة الوقاية من الحوادث) هي المعمول بها في جميع أماكن العمل وتسهيل وتسريع وصول العمال إلى معدات وخدمات الإسعافات الأولية.',
          en: 'Occupational health and safety measures (especially accident prevention) are in place in all workplaces, facilitating and accelerating workers\' access to first aid equipment and services.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1BLSNAZJF9hOQEKqZRmIWnZ_njRN9kBVZ', type: 'view' }
        ]
      }
    ]
  },
  { 
    id: 'safety', 
    title: { en: 'Emergency Preparedness and Response', ar: 'الاستعداد للطوارئ والاستجابة لها' }, 
    description: { en: 'Developing robust plans and capabilities to effectively respond to health emergencies.', ar: 'تطوير خطط وقدرات قوية للاستجابة بفعالية لحالات الطوارئ الصحية.' }, 
    icon: SafetyIcon, 
    criteriaCount: 6,
    criteria: [
        { 
            text: { ar: 'تم تحديد حالات الطوارئ المعروفة التي وقعت في السنوات الـ20 الماضية، وتم توثيق عدد الضحايا والبنية التحتية المحلية التي تضررت أو دُمِّرت.', en: 'Known emergencies that occurred in the past 20 years have been identified, and the number of victims and local infrastructure that was damaged or destroyed has been documented.' },
            actions: [
                { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/11gfesrQDa2U9ynkiKTpI59qs9uvfh5iV', type: 'view' }
            ]
        },
        { 
            text: { ar: 'تشكلت لجنة فرعية لتأهب لحالات الطوارئ والاستجابة لها، وتم توجيهها وتم تعيين مهام الأعضاء.', en: 'A subcommittee for emergency preparedness and response has been formed, oriented, and its members\' tasks have been assigned.' },
            actions: [
                { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1kfgpxwzv5bFv6y-9If6fYAmpZX-S8W3w', type: 'view' }
            ]
        },
        { 
            text: { ar: 'تم تطوير ملف تعريف المدينة وتم الاحتفاظ بنسخة من هذا الملف خارج منطقة تنفيذ البرنامج.', en: 'A city profile has been developed, and a copy of this profile is kept outside the program implementation area.' },
            actions: [
                { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1EFHopO27WXvNNTOJ6u5nGebplY0ffIXe', type: 'view' }
            ]
        },
        { 
            text: { ar: 'تم تدريب ممثلي المجتمع ومتطوعي الصحة على خطط التأهب لحالات الطوارئ، وكيفية التعامل مع هذه الطوارئ وتقديم الإسعافات الأولية متى وأينما طُلب.', en: 'Community representatives and health volunteers have been trained on emergency preparedness plans, how to handle these emergencies, and provide first aid when and where requested.' },
            actions: [
                { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1RK5toUvndVMX2TJHEa7bFPERwR72q3Xh', type: 'view' }
            ]
        },
        { 
            text: { ar: 'تم إعداد خطة طوارئ ومشاركتها مع السلطات المحلية المختصة لتحديد الموارد والعمل اللازم، مع توضيح من يعلم بخطة الطوارئ، وماذا يفعل، ومن منهم يقدم التقارير، ومن وماذا يُفعل أثناء حالات الطوارئ.', en: 'An emergency plan has been prepared and shared with relevant local authorities to identify necessary resources and actions, clarifying who knows the emergency plan, what to do, who reports, and who and what is done during emergencies.' },
            actions: [
                { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1bIH0F6vzstlq9bDWT2-DeUHDCwyFmUHt', type: 'view' }
            ]
        },
        { 
            text: { ar: 'تم تحديد الفئات المستضعفة (مثل النساء الحوامل، والأشخاص الذين يعانون من إعاقات جسدية أو بصرية، والمسنين، والأطفال، والمرضى النفسيين)، وتمت مشاركة معلومات هذه الفئات مع السلطات المختصة مسبقًا.', en: 'Vulnerable groups (such as pregnant women, people with physical or visual disabilities, the elderly, children, and psychiatric patients) have been identified, and their information has been shared with the competent authorities in advance.' },
            actions: [
                { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/drive/folders/1MX1JE9dJOpRw7yQH73qBIa7-gGeanhOn', type: 'view' }
            ]
        }
    ]
  },
  { 
    id: 'education', 
    title: { en: 'Education and Literacy', ar: 'التعليم ومحو الأمية' }, 
    description: { en: 'Promoting educational opportunities and literacy to improve health outcomes.', ar: 'تعزيز الفرص التعليمية ومحو الأمية لتحسين النتائج الصحية.' }, 
    icon: EducationIcon, 
    criteriaCount: 5,
    criteria: [
      {
        text: {
          ar: 'يلتحق جميع الأطفال المستحقين (بنات وبنين) في المدرسة ولم ينقطع أي طالب.',
          en: 'All eligible children (girls and boys) are enrolled in school, and no student has dropped out.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/19C39bisDthl9PeNLRjElGa4Bin4DAY5k', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يقوم مديرو المدارس بعقد اجتماعات دورية مع لجان التنمية المجتمعية المحلية والآباء وغيرهم من أصحاب المصلحة لتقييم نوعية التعليم والبيئة المدرسية والحالة الصحية للأطفال والعلاقات بين الآباء والأطفال والمعلمين من أجل التغلب على أوجه القصور أو المشاكل القائمة.',
          en: 'School principals hold regular meetings with local community development committees, parents, and other stakeholders to evaluate the quality of education, school environment, children\'s health status, and relationships between parents, children, and teachers to overcome existing deficiencies or problems.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1Xk-yClcekugAeQx6WDF-9XlWPpMO2uN7', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'معايير جودة التعليم في مكانها الصحيح في المدارس الواقعة في مواقع البرنامج.',
          en: 'Quality education standards are in place in schools located in program sites.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1r6AcEX4NTxr_-xRgCeAcBHhYabpusliG', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تشكيل لجنة فرعية للتعليم في إطار لجنة تنمية المجتمع ويتم مراقبة المدارس بانتظام. تتسق اللجنة الفرعية مع إدارة التعليم المحلية.',
          en: 'A sub-committee for education has been formed within the framework of the Community Development Committee, and schools are monitored regularly. The sub-committee coordinates with the local education administration.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1Pdot2g24YHp9xQcZ2eu6V1Sg8sRD739F', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تشجيع فئات الشباب والنساء ليكونوا أعضاء فاعلين في حملة محو الأمية على أساس تطوعي.',
          en: 'Youth and women groups have been encouraged to be active members in the literacy campaign on a voluntary basis.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1Qg5f7RSdPBmmwrmMtNVB2iSQKsQJkxhK', type: 'view' }
        ]
      }
    ]
  },
  { 
    id: 'economy', 
    title: { en: 'Skills Development, Vocational Training and Capacity Building', ar: 'تنمية المهارات والتدريب المهني وبناء القدرات' }, 
    description: { en: 'Fostering sustainable economic growth and building local skills for a prosperous community.', ar: 'تعزيز النمو الاقتصادي المستدام وبناء المهارات المحلية لمجتمع مزدهر.' }, 
    icon: EconomyIcon, 
    criteriaCount: 6,
    criteria: [
      {
        text: {
          ar: 'تم تقييم المهارات المحلية، والمصالح والتكنولوجيات المناسبة وتعزيزها.',
          en: 'Local skills, interests, and appropriate technologies have been assessed and promoted.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1QWQbgMVylpwKEsbQlPePuhYRRTWOvNqS', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'أنشئت مراكز للتدريب على المهارات المرتبطة بالسوق المحلية للذكور والإناث، واعتمادها من قبل فرق مشترك بين القطاعات.',
          en: 'Training centers for skills related to the local market have been established for males and females, and accredited by intersectoral teams.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1ARIRnlWFBOQ9eT-h4bjbWAgxIHxnlPFN', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'لجنة تنسيق المدينة الصحية تعطي الأولوية لتوفير قروض صغيرة لطلاب مراكز التدريب المهني.',
          en: 'The Healthy City Coordination Committee prioritizes providing small loans to vocational training center students.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1fgwAE4zv_y5u1lr3KjtOChoYWATeqdl2', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'مراكز التدريب المهني قائمة على التمويل الذاتي والإدارة الذاتية من قبل المجتمع أو المنظمات المحلية غير الحكومية.',
          en: 'Vocational training centers are self-financing and self-managed by the community or local non-governmental organizations.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1T8g2LL9dyFscAuFM8S8Bm8wIBUkRI26r', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'أنشئت مراكز للتدريب على الحاسوب ودروس اللغة والمرافق الرياضية، وغيرها، يتم إدارتها ذاتياً من قبل المجتمع أو المنظمات المحلية غير الحكومية.',
          en: 'Computer training centers, language classes, sports facilities, etc., have been established and are self-managed by the community or local non-governmental organizations.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1n76fNfSoWLopJVXkl9csnkrUURDR1V2m', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تحديد الناس المبتكرين ودعمهم وتشجيعهم.',
          en: 'Innovative people have been identified, supported, and encouraged.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1pdGofYf9dfC5Ef87hyvqCqmlaENxWrsM', type: 'view' }
        ]
      }
    ]
  },
  { 
    id: 'tourism', 
    title: { en: 'Micro-credit activities', ar: 'أنشطة القروض الصغيرة' }, 
    description: { en: 'Supporting small businesses and community entrepreneurship.', ar: 'دعم الأعمال الصغيرة وريادة الأعمال المجتمعية.' }, 
    icon: TourismIcon, 
    criteriaCount: 7,
    criteria: [
      {
        text: {
          ar: 'تم تحديد ذوي الاحتياج في المجتمع وفقاً لمعايير محددة (وافق عليها فريق تنسيق المدينة) وتعطى الأولوية لهم في توفير القروض المدرة للدخل.',
          en: 'The needy in the community have been identified according to specific criteria (approved by the City Coordination Team) and are given priority in providing income-generating loans.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1nwn2qjwGG0qA0uJzPtTDZxxxf28ouhfT', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم عمل روابط بين المهارات المحلية ومراكز التدريب المهني وأنشطة القروض الصغيرة، وضمان أن المنطقة تتجه نحو الاكتفاء الذاتي.',
          en: 'Links have been established between local skills, vocational training centers, and micro-loan activities, ensuring the region moves towards self-sufficiency.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1NlXvSsNKofKpOf0v0H-V9kNnmNcVVEQx', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تسجيل جميع القضايا المالية ومتابعتها من قبل أمين الشؤون المالية في لجنة تنسيق المدينة الصحية.',
          en: 'All financial issues have been recorded and followed up by the Financial Secretary of the Healthy City Coordination Committee.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1Ns14zMhDH_u66HyCfNP7OALYid0P3vp6', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم تسديد القروض على أساس منتظم، وتم وضع آلية متابعة من قبل لجنة تنسيق المدينة الصحية أو النظام المصرفي المحلي في المكان.',
          en: 'Loans are repaid on a regular basis, and a follow-up mechanism has been established by the Healthy City Coordination Committee or the local banking system in place.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/119q9z_FQbpNxwpQ3Lzbirzgvm4ZO71pK', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'تم فتح حساب مصرفي للجنة تنسيق المدينة الصحية أو مكتب البرنامج وتذهب جميع التفاعلات المالية المتعلقة بمخططات القروض الصغيرة من خلال البنوك ذات الصلة. منسق البرنامج والمجتمع يدركون ذلك جيداً.',
          en: 'A bank account has been opened for the Healthy City Coordination Committee or the program office, and all financial transactions related to micro-loan schemes go through relevant banks. The program coordinator and the community are well aware of this.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1mLQpfc_STNwsihsQT9437tY1fYrVo5md', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يتم أخذ 5% - 10% رسوم خدمة من كل قرض مدر للدخل ويتم تحصيلها في حساب منفصل لاستخدامها في أنشطة التنمية الاجتماعية (أي؛ صناديق التنمية الاجتماعية).',
          en: 'A 5-10% service fee is taken from every income-generating loan and collected in a separate account for use in social development activities (i.e., Social Development Funds).'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1cygRUzGP7tPC8CbLo9Gd3bFTMYBLmiAN', type: 'view' }
        ]
      },
      {
        text: {
          ar: 'يضمن ممثلي المجتمع الإيداع في الوقت المناسب لأقساط شهرية من المستفيدين ضمن مجموعاتهم الخاصة والإبقاء على المال المسدد في صندوق متجدد للأنشطة المستقبلية.',
          en: 'Community representatives ensure timely deposit of monthly installments from beneficiaries within their own groups and keep the repaid money in a revolving fund for future activities.'
        },
        actions: [
          { label: { en: 'View', ar: 'عرض' }, url: 'https://drive.google.com/file/d/1hYMGqQBFw1vphce3ktAafUdPcMed_lAv', type: 'view' }
        ]
      }
    ]
  },
];

export const STATS_DATA_2025: StatData[] = [
    { name: 'Health', value: 300 },
    { name: 'Environment', value: 250 },
    { name: 'Education', value: 400 },
    { name: 'Community', value: 450 },
    { name: 'Economy', value: 200 },
];
export const STATS_DATA_2026: StatData[] = [
    { name: 'Health', value: 350 },
    { name: 'Environment', value: 280 },
    { name: 'Education', value: 420 },
    { name: 'Community', value: 480 },
    { name: 'Economy', value: 240 },
];
export const STATS_DATA_2027: StatData[] = [
    { name: 'Health', value: 400 },
    { name: 'Environment', value: 320 },
    { name: 'Education', value: 450 },
    { name: 'Community', value: 500 },
    { name: 'Economy', value: 300 },
];

export const RESOURCES_DATA: Resource[] = [
  { 
      id: 'op-plan-new', 
      title: { en: 'Operational Plan', ar: 'الخطة التشغيلية' }, 
      description: { en: 'View the operational plan.', ar: 'عرض الخطة التشغيلية.' }, 
      type: 'PDF',
      url: 'https://drive.google.com/file/d/16oWgIqVhAC35mRGQi8aQtj16I_rSa61A/view?usp=sharing'
  },
  { 
      id: 'emergency-plan', 
      title: { en: 'Dhofar Emergency Management Plan 2022-2024', ar: 'خطه إدارة الحالات الطارئة ظفار2022-2024' }, 
      description: { en: 'Emergency management plan for Dhofar 2022-2024.', ar: 'خطة إدارة الطوارئ لمحافظة ظفار للفترة 2022-2024.' }, 
      type: 'PDF',
      url: 'https://drive.google.com/file/d/14zBDl_KAe7TeDglQcu3iBE7EYjCGxkRV/view?usp=sharing'
  }
];

export const PARTNERS_DATA: Partner[] = [
    { 
        name: { en: "Governor's Office of Dhofar", ar: "مكتب محافظ ظفار" }, 
        logo: "https://dhofar.gov.om/assets/images/Logo-red.png", 
        url: "https://dhofar.gov.om" 
    },
    { 
        name: { en: "Dhofar Municipality", ar: "بلدية ظفار" }, 
        logo: "https://edm.gov.om/wp-content/uploads/2024/08/header-ovr-kh@2x.png", 
        url: "https://edm.gov.om/",
        backgroundColor: "#343743"
    },
    { 
        name: { en: "Directorate General of Culture, Sports and Youth", ar: "المديرية العامة للثقافة والرياضة والشباب" }, 
        logo: "https://mcsy.om/wp-content/uploads/2021/08/Logo_AR-1.png", 
        url: "https://mcsy.om/",
        backgroundColor: "#0F0D42"
    },
    { 
        name: { en: "Directorate General of Health Services", ar: "المديرية العامة للخدمات الصحية" }, 
        logo: "https://moh.gov.om/images/logo-ministry-ar.png", 
        url: "https://moh.gov.om/en/hospitals-directorates/governorate-healthcare-facilities/dhofar-governorate/" 
    },
    { 
        name: { en: "Directorate General of Education", ar: "المديرية العامة للتربية والتعليم" }, 
        logo: "https://home.moe.gov.om/templates/moe/assets/images/icons/pe-scroll-small-icon-moe.png", 
        url: "https://home.moe.gov.om/region/dhofar/" 
    },
    { 
        name: { en: "Directorate General of Social Development", ar: "المديرية العامة للتنمية الإجتماعية" }, 
        logo: "https://portal.mosd.gov.om/PortalResources/resources/portalTemplate/img/logo.png", 
        url: "https://portal.mosd.gov.om/webcenter/portal/oracle/webcenter/page/scopedMD/s356e4db6_ee31_4daa_978e_f907f716f004/Page783ad307_cd5a_40d5_9ef4_50d96674c1b8.jspx" 
    },
    { 
        name: { en: "Directorate General of Health Affairs at Dhofar Municipality", ar: "المديرية العامة للشؤون الصحية ببلدية ظفار" }, 
        logo: "https://edm.gov.om/wp-content/uploads/2024/08/header-ovr-kh@2x.png", 
        url: "https://edm.gov.om/",
        backgroundColor: "#343743"
    },
    { 
        name: { en: "Directorate General of Agricultural, Fisheries and Water Resources", ar: "المديرية العامة للثروة الزراعية والسمكية وموارد المياه" }, 
        logo: "https://www.mafwr.gov.om/images/tharawat_combine_logo.8a565880.svg", 
        url: "https://www.mafwr.gov.om/public/home" 
    },
    { 
        name: { en: "Directorate General of Endowments and Religious Affairs", ar: "المديرية العامة للأوقاف والشؤون الدينية" }, 
        logo: "https://www.mara.gov.om/arabic/images/logo.png", 
        url: "https://www.mara.gov.om/arabic/home.aspx" 
    },
    { 
        name: { en: "Directorate General of Information", ar: "المديرية العامة للإعلام" }, 
        logo: "https://www.omaninfo.om/templates/omaninfo2/assets/images/logo.png", 
        url: "https://www.omaninfo.om/oman.moi" 
    },
    { 
        name: { en: "Directorate General of Labour", ar: "المديرية العامة للعمل" }, 
        logo: "https://www.mol.gov.om/images/logo-arab.svg", 
        url: "https://www.mol.gov.om/" 
    },
    { 
        name: { en: "Directorate General of Commerce, Industry and Investment Promotion", ar: "المديرية العامة للتجارة والصناعة وترويج الإستثمار" }, 
        logo: "https://iili.io/fCisWuI.jpg", 
        url: "https://tejarah.gov.om/ar",
        backgroundColor: "#821E1A"
    },
    { 
        name: { en: "Consumer Protection Authority", ar: "هيئة حماية المستهلك" }, 
        logo: "https://cpa.gov.om/Style%20Library/Images/LOGO_AR.jpg", 
        url: "https://cpa.gov.om/ar/Pages/default.aspx" 
    },
    { 
        name: { en: "Environment Authority", ar: "المديرية العامة للبيئة" }, 
        logo: "https://www.ea.gov.om/img/logoar2020.jpg", 
        url: "https://www.ea.gov.om/ar" 
    },
    { 
        name: { en: "Civil Aviation Authority", ar: "هيئة الطيران المدني" }, 
        logo: "https://www.caa.gov.om/images/logos/new/logo.png?v=1", 
        url: "https://www.caa.gov.om/" 
    },
    { 
        name: { en: "Civil Defence and Ambulance Department in Dhofar", ar: "إدارة الدفاع المدني والإسعاف بظفار" }, 
        logo: "https://cdaa.gov.om/wp-content/uploads/2023/03/cropped-123.png", 
        url: "https://cdaa.gov.om/" 
    },
    { 
        name: { en: "Dhofar University", ar: "جامعة ظفار" }, 
        logo: "https://ccba.du.edu.om/wp-content/uploads/2017/05/DU-Logo.png", 
        url: "https://www.du.edu.om/ar/" 
    },
    { 
        name: { en: "University of Technology and Applied Sciences", ar: "جامعة التقنية والعلوم التطبيقية" }, 
        logo: "https://www.utas.edu.om/portals/0/images/utas-logo1.png", 
        url: "https://www.utas.edu.om/Home" 
    },
    { 
        name: { en: "Oman College of Health Sciences - Dhofar Branch", ar: "كلية عمان للعلوم الصحية – فرع ظفار" }, 
        logo: "https://moh-hei.edu.om/image/layout_set_logo?img_id=4545532&t=1764254196437", 
        url: "https://moh-hei.edu.om/ar/web/dhofar" 
    },
    { 
        name: { en: "Vocational College in Salalah", ar: "الكلية المهنية بصلالة" }, 
        logo: "https://iili.io/fCiF53N.jpg", 
        url: "https://www.svc.edu.om/%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D8%A9" 
    },
    { 
        name: { en: "Omani Women's Association in Salalah", ar: "جمعية المرأة العمانية بصلالة" }, 
        logo: "https://portal.mosd.gov.om/PortalResources/resources/portalTemplate/img/logo.png", 
        url: "https://portal.mosd.gov.om/webcenter/portal/oracle/webcenter/page/scopedMD/s356e4db6_ee31_4daa_978e_f907f716f004/Pageba9071ae_f581_46a3_929b_91914094b02d.jspx#" 
    },
    { 
        name: { en: "Salalah Volunteer Team", ar: "فريق صلالة التطوعي" }, 
        logo: "https://pbs.twimg.com/profile_images/586870941092720640/JvCXFT8p_400x400.jpg", 
        url: "https://x.com/salalahsvt?lang=ar" 
    },
    { 
        name: { en: "OQ Basic Industries", ar: "شركة أوكيو للصناعات الأساسية" }, 
        logo: "https://oqbi.om/wp-content/uploads/2025/11/main_logo.png", 
        url: "https://oqbi.om/ar/home-arabic/" 
    },
    { 
        name: { en: "EYE MAX", ar: "شركة اي ماكس" }, 
        logo: "https://img.ge/ib/7xC4f16.jpg", 
        url: "https://www.facebook.com/eyemaxoman/"
    },
    { 
        name: { en: "Raysut Industrial City (Madayn)", ar: "مدينة ريسوت الصناعية (مدائن)" }, 
        logo: "https://madayn.om/wp-content/uploads/2025/03/Layer_1-1.svg", 
        url: "https://www.madayn.om/Ar/Pages/Raysut.aspx" 
    },
    { 
        name: { en: "Nama Dhofar Services", ar: "شركة نماء لخدمات ظفار" }, 
        logo: "https://dhofarservices.nama.om/_catalogs/masterpage/NDS/media/ng-ds-logo.svg", 
        url: "https://dhofarservices.nama.om/ar-om/Pages/Home.aspx",
        backgroundColor: "#343743"
    },
    { 
        name: { en: "Be'ah", ar: "شركة بيئة" }, 
        logo: "https://www.beah.om/documents/d/guest/beah-white-logo-png?download=true", 
        url: "https://www.beah.om/ar/",
        backgroundColor: "#343743"
    },
    { 
        name: { en: "Oman Daily Newspaper", ar: "جريدة عمان" }, 
        logo: "https://www.omandaily.om/theme_omandaily/images/logo.png", 
        url: "https://www.omandaily.om/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A7%D8%AA-%D8%A7%D9%84%D9%83%D8%A7%D9%85%D9%84%D8%A9" 
    },
    { 
        name: { en: "Lubanah Electronic Newspaper", ar: "صحيفة لبانة الإلكترونية" }, 
        logo: "https://lubanh.com/wp-content/uploads/2024/07/Asset-3.png", 
        url: "https://lubanh.com/" 
    },
    { 
        name: { en: "Al Balad Electronic Newspaper", ar: "صحيفة البلد الإلكترونية" }, 
        logo: "http://albaladoman.com/wp-content/uploads/2016/05/logo6-4.png", 
        url: "https://albaladoman.com/category/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D8%B9%D9%85%D8%A7%D9%86%D9%8A%D8%A9/" 
    },
    { 
        name: { en: "The Community", ar: "المجتمع" }, 
        logo: "", 
        url: "#" 
    }
];
