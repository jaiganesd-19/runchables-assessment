import Image from "next/image";

const leaders = [
{
    name: "Mr. Irfan Pathan",
    role: "Former Indian Cricketer",
    image: "/image/leader-and-celebrities-img/irfan.png",
},
{
    name: "Sri Sri Ravi Shankar Ji",
    role: "Padma Vibhushan Awardee",
    image: "/image/leader-and-celebrities-img/ravi.png",
},
{
    name: "Mr. Neil Patel",
    role: "Famous Entrepreneur",
    image: "/image/leader-and-celebrities-img/neil.png",
},
{
    name: "Receiving Atal Samman Award",
    role: "",
    image: "/image/leader-and-celebrities-img/award.png",
},
{
    name: "Ms. Saina Nehwal",
    role: "Indian Badminton Player",
    image: "/image/leader-and-celebrities-img/saina.png",
},
{
    name: "Mr. ANIK SINGAL",
    role: "Famous Entrepreneur",
    image: "/image/leader-and-celebrities-img/Anik.png",
},
{
    name: "MOHAMMAD KAIF JI",
    role: "Former Indian Cricketer",
    image: "/image/leader-and-celebrities-img/Kaif.png",
},
{
    name: "Ms. AMEESHA PATEL",
    role: "Indian Actress",
    image: "/image/leader-and-celebrities-img/Amisha.png",
},
{
    name: "Mr. SHREYAS TALPADE",
    role: "Bollywood Actor",
    image: "/image/leader-and-celebrities-img/Shreyas.png",
},
{
    name: "Mr. GRANT CARDONE",
    role: "Famous Entrepreneur",
    image: "/image/leader-and-celebrities-img/GrantCardon.png",
},
{
    name: "Mr. GARY VAYNERCHUK",
    role: "Famous Entrepreneur",
    image: "/image/leader-and-celebrities-img/Garryvee.png",
},
{
    name: "Mr. DINESH KARTHIK",
    role: "Former Indian Cricketer",
    image: "/image/leader-and-celebrities-img/DineshKarthick.png",
},
{
    name: "Mr. VENKATESH PRASAD",
    role: "Former Indian Cricketer",
    image: "/image/leader-and-celebrities-img/Venkatesh.png",
},
{
    name: "Ms. MUNMUN DUTTA",
    role: "Indian Actress",
    image: "/image/leader-and-celebrities-img/MunmumDutta.png",
},
{
    name: "Ms. MANDIRA BEDI",
    role: "Indian Actress",
    image: "/image/leader-and-celebrities-img/Mandira.png",
},
{
    name: "Mr. MUNAF PATEL",
    role: "Former Indian Cricketer",
    image: "/image/leader-and-celebrities-img/Munaf.png",
},
{
    name: "Seen on Forbes India",
    role: "",
    image: "/image/leader-and-celebrities-img/Forbes.png",
},
{
    name: "Featured on CNBC as Online Business Expert",
    role: "",
    image: "/image/leader-and-celebrities-img/CNBC.png",
},
{
    name: "India's biggest Virtual event",
    role: "",
    image: "/image/leader-and-celebrities-img/BFE.png",
},
{
    name: "India's biggest Funnel & Online Business event",
    role: "",
    image: "/image/leader-and-celebrities-img/TopsectionImage.jpg", // ✅ jpg fixed
},
];

export default function IndustryLeaders() {
return (
    <section className="relative w-full  text-white py-8 md:py-15 px-6 sm:px-10 lg:px-20 overflow-hidden">

    {/* Background Glow Effects */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[140px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full" />

    {/* Section Heading */}
    <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">
        With Industry Leaders & Celebrities
        </h2>
        <div className="mt-4 mx-auto w-32 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 rounded-full" />
    </div>

    {/* Grid */}
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {leaders.map((item, index) => (
        <div
            key={index}
            className="group relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-yellow-500/40 transition-all duration-500 shadow-lg hover:shadow-yellow-500/10"
        >
            {/* Image */}
            <div className="overflow-hidden">
            <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            </div>

            {/* Content */}
            <div className="p-5 text-center">
            <h3 className="text-lg font-semibold tracking-wide group-hover:text-yellow-400 transition">
                {item.name}
            </h3>

            {item.role && (
                <p className="text-sm text-gray-400 mt-1">
                {item.role}
                </p>
            )}
            </div>

            {/* Gold Hover Border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 border border-yellow-500/30 pointer-events-none" />
        </div>
        ))}

    </div>
    </section>
);
}